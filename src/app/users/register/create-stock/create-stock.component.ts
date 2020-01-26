import { Component, OnInit } from "@angular/core";
import { UserService } from "../../user.service";
import * as toastr from "toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-stock",
  templateUrl: "./create-stock.component.html",
  styleUrls: ["./create-stock.component.scss"]
})
export class CreateStockComponent implements OnInit {
  bloodGroup = "";
  unit = 0;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onCreate() {
    if (this.bloodGroup.length == 0) {
      toastr.error("Please Enter Valid Blood Group");
    } else if (!this.unit) {
      toastr.error("Plese Enter valid unit ");
    } else {
      this.userService
        .creaateBloodStock(this.bloodGroup, this.unit)
        .subscribe(response => {
          if (response["status"] == "success") {
            toastr.success("Create Blood Stock successfully!!");
            this.router.navigate(["/admin-stocklist"]);
          } else {
            toastr.error(response["error"]);
          }
        });
    }
  }
}
