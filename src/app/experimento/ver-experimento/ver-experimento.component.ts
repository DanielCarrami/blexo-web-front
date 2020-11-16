import { Component, OnInit } from '@angular/core';

import { CrudService, Model } from '../../../services/crud.service';

import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ver-experimento',
  templateUrl: './ver-experimento.component.html',
  styleUrls: ['./ver-experimento.component.scss']
})
export class VerExperimentoComponent implements OnInit {
  id
  experimento = {
    nombre: "",
    descripcion: "",
    duracion: 0
  }
  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute
  ) {
    this.id = route.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    /*this.crudService.get_one(Model.EXPERIMENTOS, this.id)
    .then(res => this.experimento = res.data)
    .catch(err => console.error(err))*/
  }

}
