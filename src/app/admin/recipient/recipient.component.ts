import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";

@Component({
  selector: "app-recipient",
  templateUrl: "./recipient.component.html",
  styleUrls: ["./recipient.component.css"]
})
export class RecipientComponent implements OnInit {
  recipients;
  constructor(private adminService: AdminService) {
    adminService.getRecipientList().subscribe(response => {
      console.log("all recipient list", response);
      this.recipients = response;
    });
  }
  ngOnInit() {}
}
