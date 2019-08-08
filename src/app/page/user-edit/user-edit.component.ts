import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  constructor(private ar: ActivatedRoute, private us: UserService, private router: Router) {
    this.ar.params.forEach(params => {
      this.us.getAll().forEach(
        userArray => this.user = userArray.filter(u => u.id == params.id)[0]
      )
    }
    )
  }

  ngOnInit() {
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.us.edit(this.user).forEach(
      x => this.router.navigateByUrl("/users")
    );
  }

}
