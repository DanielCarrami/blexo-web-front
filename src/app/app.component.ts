import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blexo-web-front';
  showHeader: boolean;
  
  constructor(private router :Router){
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if ((event['url'] == '/iniciosesion') || (event['url'] == '/registro') || (event['url'] == '/'))  {
          this.showHeader = false; 
        } else {
          this.showHeader = true;
        }
      }
    });
  }
}
