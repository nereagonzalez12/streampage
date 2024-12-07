import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeView: boolean = true;
  commandView: boolean = false;
  extensibleView: boolean = false;


  showCommandView() {
    this.commandView = true;
    this.homeView = false;
    this.extensibleView = false;
  }

  showExtensibleView() {
    this.commandView = false;
    this.homeView = false;
    this.extensibleView = true;
  }

}
