import { Component, OnInit } from '@angular/core';

import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'crudPhpAngular';

  users = null;

  user = {
    idUser: null,
    name: null,
    tell: null,
    email: null
  }

  constructor (private userService: UsuariosService) {}

  ngOnInit() {
    this.getUsers();
  }

  //get all users
  getUsers() {
    this.userService.getUsers().subscribe(
      result => this.users = result
    );
  }

  //update user 
  updateUser(user) {
    this.userService.updateUser(this.user).subscribe(
      data => {
        if (data['result'] == 'OK'){
          alert(data['message']),
          this.getUsers();
        } 
      }
    );
  }

  //delete user for id
  deleteUser(idUser) {
    this.userService.deleteUser(idUser).subscribe(
      data => {
        if (data['results'] == 'OK') {
          alert(data['message']),
          this.getUsers();
        }
      }
    );
  }

  //edit user selected
  editUser() {
    this.userService.editUser(this.user).subscribe(
      data => {
        if (data['results'] == 'OK') {
          alert(data['message']),
          this.getUsers();
        }
      }
    );
  }

  //select user
  selectUser(idUser) {
    this.userService.selectUser(idUser).subscribe(
      result => this.user = result[0]
    );
  }

  //Has record
  hasRecord() {
    return true;
  }

}
