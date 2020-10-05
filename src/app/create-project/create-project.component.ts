import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// added provider
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  providers: [MatDialog]
})
export class CreateProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
