import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-admin-outbloodstock",
  templateUrl: "./outstocklist.component.html",
  styleUrls: ["./outstocklist.component.css"]
})
export class OutBloodstockComponent implements OnInit {
  outstocks = [];
  constructor(private adminService: AdminService) {
    adminService.getoutbloodstock().subscribe(response => {
      if (response["status"] == "success") {
        this.outstocks = response["data"];
        console.log(this.outstocks);
      } else {
        console.log(response["data"]);
      }
    });
  }

  ngOnInit() {}
}
