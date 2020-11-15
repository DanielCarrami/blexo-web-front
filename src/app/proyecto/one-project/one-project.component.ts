import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';

import { CrudService, Model } from '../../../services/crud.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-one-project',
  templateUrl: './one-project.component.html',
  styleUrls: ['./one-project.component.scss']
})

export class OneProjectComponent implements OnInit {

  id: any = '';
  proyecto: any = {
    nombre: "",
    descripcion: "",
    fecha_inicio: "",
    sesiones: []
  };

  constructor(
    private router: Router,
    private crudService: CrudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.crudService.get_one(Model.PROYECTO, this.id)
    .then(
      res => {
        this.proyecto=res.data
      }
    )
  }

}
