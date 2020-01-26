import { Component, OnInit } from "@angular/core";
import { UserService } from "../../user.service";
import * as toastr from "toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipient-login",
  templateUrl: "./recipient-login.component.html",
  styleUrls: ["./recipient-login.component.css"]
})
export class RecipientLoginComponent implements OnInit {
  email = "";
  password = "";
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onLogin() {
    if (this.email.length == 0) {
      toastr.error("Enter Valid Email");
    } else if (this.password.length == 0) {
      toastr.error("Enter valid Password");
    } else {
      this.userService
        .loginRecipient(this.email, this.password)
        .subscribe(response => {
          if (response["status"] == "success") {
            toastr.success("Welcome!!");
            sessionStorage["login_status"] = "1";
            sessionStorage["id"] = response["data"]["id"];
            sessionStorage["name"] = response["data"]["name"];
            this.router.navigate(["/order-blood"]);
          } else {
            toastr.error(response["error"]);
          }
        });
    }
  }
}
