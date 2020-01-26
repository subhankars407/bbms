import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import * as toastr from "toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {
  name = "";
  email = "";
  password = "";
  age = "";
  address = "";
  city = "";
  bloodGroup = "";
  mobileNo = "";

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onRegister() {
    if (this.name.length == 0) {
      toastr.error("Please Enter Valid Username");
    } else if (this.email.length == 0) {
      toastr.error("Plese Enter valid email ");
    } else {
      this.userService
        .registerUser(
          this.name,
          this.email,
          this.password,
          this.age,
          this.address,
          this.city,
          this.bloodGroup,
          this.mobileNo
        )
        .subscribe(response => {
          if (response["status"] == "success") {
            toastr.success("Admin Registered successfully!!");
            this.router.navigate(["/login-page"]);
          } else {
            toastr.error(response["error"]);
          }
        });
    }
  }
}
