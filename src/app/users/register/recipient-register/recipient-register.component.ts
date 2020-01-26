import { Component, OnInit } from "@angular/core";
import { UserService } from "../../user.service";
import * as toastr from "toastr";
import { Router } from "@angular/router";
@Component({
  selector: "app-recipient-register",
  templateUrl: "./recipient-register.component.html"
})
export class RecipientRegisterComponent implements OnInit {
  name = "";
  email = "";
  password = "";
  age = "";
  address = "";
  city = "";
  mobileNo = "";

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onRegister() {
    if (this.name.length == 0) {
      toastr.error("Please Enter Valid Username");
    } else if (this.email.length == 0) {
      toastr.error("Plese Enter valid email 11111 ");
    }
    // else if (this.password.length == 0) {
    //   toastr.error("Plese Enter valid password ");
    // }
    else {
      this.userService
        .registerRecipient(
          this.name,
          this.email,
          this.password,
          this.age,
          this.address,
          this.city,
          this.mobileNo
        )
        .subscribe(response => {
          if (response["status"] == "success") {
            toastr.success("Recipient Registered successfully!!");
            this.router.navigate(["/recipient"]);

            console.log("here in recipient register");
          } else {
            toastr.error(response["error"]);
          }
        });
    }
  }
}
