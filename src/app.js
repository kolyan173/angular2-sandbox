import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-core/polyfill';

import {
  Component, View, Attribute,
  provide,
  bootstrap,
  NgFor
} from 'angular2/angular2';
import {
  Router, RouteConfig, RouteParams,
  LocationStrategy, HashLocationStrategy,
  ROUTER_PROVIDERS, ROUTER_DIRECTIVES, ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';

import { Greeter, NamesList } from './services';
import { Bye } from './bye.component';

@Component({
  selector: 'hello'
})

@View({
  template: '<p>{{ message }}</p>'
})

class Hello {
  constructor(greeter: Greeter) {
    this.message = greeter.say('hello', 'Angular 2');
  }
}

@Component({
  selector: 'ciao'
})
@View({
  template: '<p>{{ message }}</p>'
})
class Ciao {
  constructor(greeter: Greeter, routeParams: RouteParams) {
    this.message = greeter.say('ciao', routeParams.get('name'));
  }
}

@Component({
  selector: 'linker'
})
@View({
  template: '<p><a [href]="url" [title]="name">{{ name }}</a></p>'
})
class Linker {
  constructor(greeter: Greeter, @Attribute('name') name, @Attribute('url') url) {
    this.name = name;
    this.url = url;
  }
}

@Component({
  selector: 'hello-app',
  viewProviders: [Greeter]
})
@View({
  directives: [ROUTER_DIRECTIVES, Linker, Bye],
  templateUrl: './templates/hello-app.html'
})
@RouteConfig([
  { path: '/', component: Hello, as: 'Hello' },
  // { path: '/test', component: MyRoute, as: 'MyRoute' },
  { path: '/ciao/:name', component: Ciao, as: 'Ciao' }
])
class HelloApp {
}



bootstrap(HelloApp, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  // https://github.com/angular/angular/issues/4318
  provide(ROUTER_PRIMARY_COMPONENT, { useValue: HelloApp })
]);
