import { Component } from 'angular2/angular2'

@Component({
    selector: 'accordion',
    templateUrl: 'accordion.html'
})

 class Accordion {
    constructor() {
        this.visible = false;
    }

    toggle() {
        this.visible = !this.visible;
    }
}

export { Accordion }