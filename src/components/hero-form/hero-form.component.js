import { Component, NgForm, NgModel, Attribute, FORM_DIRECTIVES, View } from 'angular2/angular2';
import { Hero } from './hero-model';
// import { NgForm } form 'angular2/src/core/forms';

@Component({
    selector: 'hero-form'
})

@View({
    templateUrl: './hero-form.html',
    directives: [FORM_DIRECTIVES]
})

export class HeroFormComponent {
    constructor () {
        this.powers = ['Flash', 'Superman', 'Spiderman'];
        this.model = new Hero(1, 'Ricardo', this.powers[0], 'Uncle Sam');
        this.submitted = false;
    }

    onSubmit() {
        this.submitted = true;
        console.log('Model', this.model);
    }

    reset () {
        this.model = new Hero();
    }
}