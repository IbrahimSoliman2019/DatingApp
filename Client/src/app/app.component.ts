import { HttpClient } from "@angular/common/http";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { User } from "./_models/User";
import { AccountService } from "./_services/account.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Client";
 
  constructor(private accountservice: AccountService) {}
  ngOnInit(): void {
    this.setCurrentUser();
  }
  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem("user"));
    this.accountservice.setCurrentUser(user);
  }
 
}
