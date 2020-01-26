import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-admin-bloodstock",
  templateUrl: "bloodstock.component.html",
  styleUrls: ["bloodstock.component.scss"]
})
export class BloodstockComponent implements OnInit {
  stocks;
  constructor(private adminService: AdminService) {
    adminService.getbloodstock().subscribe(response => {
      this.stocks = response;
      console.log("stock is", this.stocks);
    });
  }

  ngOnInit() {}
}
