import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../_models/User";
import { AccountService } from "../_services/account.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  model: any = {};
  UserSource$:Observable<User>;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.UserSource$ = this.accountService.userSource$;
  }
  login() {
    this.accountService.login(this.model).subscribe(
      (response) => {
        console.log(response);
       
      },
      (error) => {
        console.log(error);
      }
    );
  }
  logout(){
   
    this.accountService.logout();
  }
 
}
