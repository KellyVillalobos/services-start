import { AccountsService } from './account.servise';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountsService) {

  }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

}
