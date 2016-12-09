import { Component } from '@angular/core';
import { User } from './user';
import { AuthService } from './auth.service';

// Workaround to use Materialize within typescript Code
declare var Materialize: any;

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    user = new User('', '');

    constructor(public auth: AuthService) {
        // Move the Labels above the Text Field if it is filled in
        setTimeout(function () {
            Materialize.updateTextFields();
        }, 1000);
    }

    login() {
        if (this.user.username != '' && this.user.password != '') {
            this.auth.login(this.user);
        }
    }

}
