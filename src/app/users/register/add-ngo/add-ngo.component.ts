import { Component, OnInit } from "@angular/core";
import { UserService } from "../../user.service";
import * as toastr from "toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-ngo",
  templateUrl: "./add-ngo.component.html",
  styleUrls: ["./add-ngo.component.scss"]
})
export class AddNGOComponent implements OnInit {
  name = "";
  city = "";
  address = "";
  mobileNo = "";
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onCreate() {
    if (this.name.length == 0) {
      toastr.error("Please Enter Valid name");
    } else {
      this.userService
        .AddNGODetails(this.name, this.city, this.address, this.mobileNo)
        .subscribe(response => {
          if (response["status"] == "success") {
            toastr.success("Create NGO details successfully!!");
            this.router.navigate(["/NGOlist"]);
          } else {
            toastr.error(response["error"]);
          }
        });
    }
  }
}
