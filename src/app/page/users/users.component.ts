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
  filterPhrase: string = '';
  filterProp: string = 'name';
  orderDirection: number = 1;
  orderKey: string = 'id';

  constructor(
    private userService: UserService
  ) {

  }

  deleteUser(user: User) {
    if (confirm(`Are you sure you want to delete ${user.name.first} ${user.name.last}?`)) {
      this.userService.remove(user.id).forEach(
        x => {
          let index = this.userList.indexOf(user);
          this.userList.splice(index, 1);
          this.changeCounter++
        }
      );
    }
  }

  setSorterKey(key: string): void {
    if (key === this.orderKey) {
      this.orderDirection = this.orderDirection === -1 ? 1 : -1;
    } else {
      this.orderDirection = 1;
    }
    this.orderKey = key;
    Array.from(document.querySelectorAll('table thead th.title')).forEach(
      el => el.children[0] !== undefined ? el.removeChild(el.children[0]) : el);
    if (this.orderDirection === 1) {
      document.querySelector(`.${key}`).innerHTML += '<i class="fa fa-sort-asc" aria-hidden="true"></i>';
    } else {
      document.querySelector(`.${key}`).innerHTML += '<i class="fa fa-sort-desc" aria-hidden="true"></i>';
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
