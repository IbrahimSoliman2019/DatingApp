import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { AccountService } from "../_services/account.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  model: any = {};

  @Output() RegisterCancel = new EventEmitter();
  constructor(
    private accountservice: AccountService,
    private toastrservice: ToastrService
  ) {}

  ngOnInit(): void {}
  register() {
    this.accountservice.register(this.model).subscribe(
      (resoponse) => {
        this.cancel();
      },
      (error) => {
        this.toastrservice.error(error.error);
      }
    );
  }
  cancel() {
    this.RegisterCancel.emit(false);
  }
}
