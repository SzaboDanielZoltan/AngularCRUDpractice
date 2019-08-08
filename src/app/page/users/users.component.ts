import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Users';
  userList: User[];
  userSubscription: Subscription;
  changeCounter: number = 0;

  constructor(
    private userService: UserService
  ) {

  }

  deleteUser(user: User, indexOfUser) {
    if (confirm(`Are you sure you want to delete ${user.name.first} ${user.name.last}?`)) {
      this.userService.remove(user.id).forEach(
        x => {
          this.userList.splice(indexOfUser, 1);
          this.changeCounter++
        }
      );
    }
  }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      users => this.userList = users
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
