import { Component, Input, View, Attribute } from 'angular2/angular2'

@Component({
    selector: 'bye',
    templateUrl: 'bye.html'
})

export class Bye {
    constructor(@Attribute('user-name') name/*, @Attribute('username') username*/) {
        this.name = name;
        // this.value = value;
    }

    toggle() {
        this.visible = !this.visible;
    }

    changeName(text) {
        this.name = text;
        console.log('name', text);
    }

    // typing(e) {
    //     let text = e.target.value;

    // }
}