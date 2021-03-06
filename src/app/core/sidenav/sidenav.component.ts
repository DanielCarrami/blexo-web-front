import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateProyecto(){
    this.router.navigate(['/proyecto']);
  }

  navigateMiProyecto(){
    this.router.navigate(['/mi-proyecto']);
  }

  navigateDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
