import { Component, Input, View, Attribute } from 'angular2/angular2'

@Component({
    selector: 'bye',
    templateUrl: './templates/bye.html'
    // template: 'Name is {{name}}, Title is {{title}}, test {{test}}'
})

export class Bye {
    constructor(@Attribute('user-name') name) {
        this.name = name;
        this.visible = true;
        this.snap = 'Gold shit!!!';
    }

    toggle() {
        this.visible = !this.visible;
    }
}