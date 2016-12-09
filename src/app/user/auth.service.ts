import { Injectable }    from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

// Workaround to Prevent error TS2304: Cannot find name 'Materialize'
declare var Materialize: any;

@Injectable()
export class AuthService {
    static isLoggedIn: boolean = false;
    
    // TODO: Dummy User
    users: User[] = [];
    currentUser: User;

    constructor(
        private router: Router
    ) { 
		this.initDummyData();
      }

    /** @function logout
     *
     * Logout Routine for the User
     * */
    logout() {
        AuthService.isLoggedIn = false;
        this.router.navigate(['/login']);
    }

    /** @function login
     *
     * Login Routine for the User
     * */
    login(user: User) {
        var pos = this.users.map(function(x) {return x.username; }).indexOf(user.username);
        
        if (pos != -1) {
            if(this.users[pos].password === user.password) {
                AuthService.isLoggedIn = true;
            this.router.navigate(['/dashboard']);
            this.currentUser = this.users[pos];
            } else {
                Materialize.toast('Das Passwort für diesen Benutzer ist leider falsch', 4000);
            }
        } else {
            Materialize.toast('Der Benutzername kann leider nicht gefunden werden', 4000);
        }
    }

    /** @function initDummyData
     *
     * Initializes some Dummy Users for Testing
     * TODO: Remove this thing!!
     * */
    initDummyData() {
        var user: User = new User("admin", "1234");
        this.users.push(user);
    }
}
