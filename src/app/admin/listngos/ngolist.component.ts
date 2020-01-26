import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-admin-ngolist",
  templateUrl: "./ngolist.component.html",
  styleUrls: ["./ngolist.component.css"]
})
export class NgoListComponent implements OnInit {
  outstocks;
  constructor(private adminService: AdminService) {
    adminService.getNGOlist().subscribe(response => {
      this.outstocks = response;
    });
  }

  ngOnInit() {}
}
