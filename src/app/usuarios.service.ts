import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //Define url static
  URL = "http://localhost/api/";

  constructor(private http: HttpClient) { }

  //get users
  getUsers() {
    return this.http.get(`${this.URL}GetUsers.php`);
  }

  //update user
  updateUser(user) {
    return this.http.post(`${this.URL}UpdateUser.php`, JSON.stringify(user));
  }

  //delete user for idUser
  deleteUser(idUser: number) {
    return this.http.get(`${this.URL}deleteUser.php?idUser=${idUser}`);
  }

  //select user
  selectUser(idUser : number) {
    return this.http.get(`${this.URL}SelectUser.php?idUser=${idUser}`);
  }

  //edit user
  editUser(user) {
    return this.http.post(`${this.URL}EditUser.php`, JSON.stringify(user));
  }

}
