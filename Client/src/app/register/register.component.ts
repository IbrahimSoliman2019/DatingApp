import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AccountService } from "../_services/account.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  model: any = {};

  @Output() RegisterCancel = new EventEmitter();
  constructor(private accountservice :AccountService) {}

  ngOnInit(): void {}
  register() {
   this.accountservice.register(this.model).subscribe(resoponse=>{
     this.cancel();
   },error=>{
     console.log(error);
   })
  }
  cancel() {
    this.RegisterCancel.emit(false);
  }
}
