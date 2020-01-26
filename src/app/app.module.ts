import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes, Route } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./users/login/login.component";
import { UserService } from "./users/user.service";
import { RegisterComponent } from "./users/register/register.component";
import { SeparatorBarComponent } from "./distinct/distinct.component";
import { AdminService } from "./admin/admin.service";
import { AdminLoginComponent } from "./admin/login/adminlogin.component";
import { AdminRegisterComponent } from "./admin/register/adminregister.component";
import { DonorlistComponent } from "./admin/donorlist/donorlist.component";
import { BloodstockComponent } from "./admin/bloodstock/bloodstock.component";
import { OutBloodstockComponent } from "./admin/outstockbloodlist/outstocklist.component";
import { RecipientComponent } from "./admin/recipient/recipient.component";
import { RecipientRegisterComponent } from "./users/register/recipient-register/recipient-register.component";
import { CreateStockComponent } from "./users/register/create-stock/create-stock.component";
import { AddNGOComponent } from "./users/register/add-ngo/add-ngo.component";
import { NgoListComponent } from "./admin/listngos/ngolist.component";
import { RecipientLoginComponent } from "./users/login/recipient-login/recipient-login.component";

const routes: Route[] = [
  { path: "user-login", component: LoginComponent },
  { path: "user-registration", component: RegisterComponent },
  { path: "admin-user", component: SeparatorBarComponent },
  { path: "admin-login", component: AdminLoginComponent },
  { path: "admin-register", component: AdminRegisterComponent },
  { path: "donorlist", component: DonorlistComponent },
  { path: "admin-stocklist", component: BloodstockComponent },
  { path: "admin-outstocklist", component: OutBloodstockComponent },
  { path: "donor-register", component: RegisterComponent },
  { path: "recipient", component: RecipientComponent },
  { path: "AddNGo", component: AddNGOComponent },
  { path: "NGOlist", component: NgoListComponent },
  { path: "addStock", component: CreateStockComponent },
  { path: "recipient-register", component: RecipientRegisterComponent },
  { path: "recipient-login", component: RecipientLoginComponent },

  { path: "", component: SeparatorBarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SeparatorBarComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    DonorlistComponent,
    BloodstockComponent,
    OutBloodstockComponent,
    RecipientComponent,
    RecipientRegisterComponent,
    CreateStockComponent,
    AddNGOComponent,
    NgoListComponent,
    RecipientLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule {}
