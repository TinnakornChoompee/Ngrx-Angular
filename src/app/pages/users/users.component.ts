import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';

import { GetUsers } from '@actions/user.actions';

import { IAppState } from '@states/app.state';
import { selectUserList } from '@selectors/user.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = this.store.pipe(select(selectUserList));

  constructor(private store: Store<IAppState>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this.router.navigate(['user', id]);
  }
}
