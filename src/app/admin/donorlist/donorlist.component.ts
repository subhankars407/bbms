import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-admin-donorlist",
  templateUrl: "./donorlist.component.html",
  styleUrls: ["./donorlist.component.css"]
})
export class DonorlistComponent implements OnInit {
  donors;
  constructor(private adminService: AdminService) {
    adminService.getdonorlist().subscribe(response => {
      console.log("all donor list", response);
      this.donors = response;
    });
  }

  ngOnInit() {}
}
