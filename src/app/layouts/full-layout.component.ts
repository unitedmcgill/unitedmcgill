import { Component, OnInit }            from '@angular/core';
import { AuthenticationService } from '../services/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
    userName : string;
    public showEmploymentApp : boolean = false;

    constructor( private authService : AuthenticationService) {
        authService.getLoggedInName.subscribe(name => this.changeName(name));
     }

    private changeName( name : string ) : void {
        this.userName = name;
    }

    public year : number;

    ngOnInit(): void {
        this.year = new Date().getFullYear();
        this.userName = "";
        
        var user = localStorage.getItem('currentUser');

        if (user) {
            let obj = JSON.parse(user);
            this.userName = obj["username"];
        }

        // Internal or External user
        this.authService.checkUser().subscribe((result:string) => {
          if ( result == "1"){
            this.showEmploymentApp = true;
          }
        })
    }
}
