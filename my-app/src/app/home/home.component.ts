import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isOpen: boolean = false;

  toggleSidenav = () => {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
