import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: User = new User();

  constructor(private us: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.us.add(this.user).subscribe(
      x => this.router.navigateByUrl("/users")
    );
  }

}
