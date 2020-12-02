import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { ActivatedRoute} from '@angular/router';
import {ResultadoComponent} from '../../resultado/resultado.component';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';

const GetExperimento = gql`
  query GetExperimento($id: String!){
    experimentoById(id: $id)
    {
      id
      nombre
      descripcion
      duracion
    }
  }
`;

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
    private apollo: Apollo,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.id = route.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GetExperimento,
      variables: {
        id: this.id
      }
    })
    .valueChanges.subscribe((result:any) => {
    
      this.experimento.nombre = result.data.experimentoById.nombre;
      this.experimento.descripcion = result.data.experimentoById.descripcion;
      this.experimento.duracion = result.data.experimentoById.duracion;
    })
  }

  printResult(){
    this.dialog.open(ResultadoComponent,{
      width: '475 px'
    })
  }
}
