import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";

@Injectable()
export class UserService implements CanActivate {
  url = "http://localhost:4000";

  constructor(private http: HttpClient, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage["login_status"] == "1") {
      return true;
    }

    this.router.navigate(["/admin-login"]);
    return false;
  }

  loginuser(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };
    return this.http.post(this.url + "/donor/login", body);
  }

  loginRecipient(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };
    return this.http.post(this.url + "/recipient/login", body);
  }

  registerUser(
    name: String,
    email: String,
    password: String,
    age: String,
    address: String,
    city: String,
    bloodGroup: String,
    mobileNo: String
  ) {
    const body = {
      name: name,
      email: email,
      password: password,
      age: age,
      address: address,
      city: city,
      bloodGroup: bloodGroup,
      mobileNo: mobileNo
    };
    return this.http.post(this.url + "/donor/register", body);
  }

  registerRecipient(
    name: String,
    email: String,
    password: String,
    age: String,
    address: String,
    city: String,
    mobileNo: String
  ) {
    const body = {
      name: name,
      email: email,
      password: password,
      age: age,
      address: address,
      city: city,
      mobileNo: mobileNo
    };
    return this.http.post(this.url + "/recipient/register", body);
  }

  creaateBloodStock(bloodGroup: String, unit: Number) {
    const body = {
      bloodGroup: bloodGroup,
      unit: unit
    };
    return this.http.post(this.url + "/bloodstock/create", body);
  }

  AddNGODetails(name: String, city: String, address: String, mobileNo: String) {
    const body = {
      name: name,
      address: address,
      city: city,
      mobileNo: mobileNo
    };
    return this.http.post(this.url + "/ngo/create", body);
  }

  resetpassUser(email: String, password: String) {
    const body = {
      email: email,
      password: password
    };

    return this.http.post(this.url + "/resetpassword", body);
  }

  getmenu() {
    return this.http.get(this.url + "/menu");
  }

  getUser() {
    return this.http.get(this.url);
  }
}
