import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private service: ServicesService, private router: Router) {}
  // hide department in menu options
  hideDeprtment = true;

  ngOnInit() {
    let username = localStorage.getItem('username');
    if (username == 'employee') {
      this.hideDeprtment = false;
    }
  }

  //  Navigate to the loginpage
  logOut() {
    localStorage.removeItem('username');
    localStorage.setItem('empbooleanvalue', 'false');
    this.router.navigate(['/Login']);
  }
}
