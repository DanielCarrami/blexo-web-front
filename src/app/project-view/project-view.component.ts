import { Component, OnInit } from '@angular/core';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectComponent } from '../edit-project/edit-project.component';
import { CrudService, Model } from '../../services/crud.service';
import {Router} from '@angular/router';
import { CrearSesionComponent } from '../crear-sesion/crear-sesion.component';
// added provider
@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss'],
  providers: [MatDialog]
})
export class ProjectViewComponent implements OnInit {

  proyectos: any[] = [];
  constructor(public dialog: MatDialog, private router: Router, private crudService: CrudService) { }

  proyecto = [
    {
      label: "First",
      title: "Proyecto 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti.",
      sesiones: [
        {
          title: "Una",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti."
        },
        {
          title: "Dos",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti."
        },
        {
          title: "Tres",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti."
        }
      ]
    },
    {
      label: "Second",
      title: "Proyecto 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti.",
      sesiones: [
        {
          title: "Una",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti."
        },
        {
          title: "Dos",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti."
        },
        {
          title: "Tres",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti."
        }
      ]
    },
    {
      label: "Third",
      title: "Proyecto 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti.",
      sesiones: [
        {
          title: "Una",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti."
        },
        {
          title: "Dos",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti."
        },
        {
          title: "Tres",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vestibulum ante, a pretium ante. Curabitur vulputate pharetra erat sit amet scelerisque. Ut vel lobortis ex. Proin quis mauris urna. Integer ut orci nulla. Curabitur nec arcu et enim laoreet vehicula. Aliquam sed lorem id neque malesuada lacinia. Donec non congue libero. Duis et pretium sapien, eget commodo ante. Sed consectetur quam urna, quis vehicula velit aliquet eu. Vivamus et volutpat nisl. Ut suscipit urna vitae dolor hendrerit sollicitudin. Fusce aliquam ante hendrerit justo tincidunt egestas. Duis viverra dui a arcu pharetra consequat. Nulla sollicitudin placerat libero varius elementum. Integer non maximus eros.Nam iaculis quis lorem blandit efficitur. Praesent tempor risus tellus, ut tempus enim mattis eget. Donec eleifend auctor odio, id faucibus augue posuere quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec purus posuere, suscipit ligula ac, bibendum lectus. Cras cursus lectus non mauris posuere efficitur. Integer consequat lacus interdum, eleifend metus eu, malesuada odio. Nullam nec vulputate leo, sit amet porttitor lacus. Donec id mattis mauris. Sed a nibh orci. Praesent arcu felis, viverra sit amet sodales non, cursus eu augue. In libero leo, pretium sed dignissim non, ornare eu sapien. Ut malesuada euismod diam nec sollicitudin. Nulla condimentum ex ex, a dignissim leo condimentum nec. Quisque ac tortor finibus, finibus enim blandit, dignissim nulla. Nullam malesuada neque scelerisque ornare eleifend. Nulla ultricies ultrices lacus ac pharetra. Maecenas facilisis lacus at volutpat bibendum. Nulla id molestie urna. Suspendisse potenti."
        }
      ]
    }
  ];
  ngOnInit(): void {
    this.crudService.get_all(Model.PROYECTO)
    .then(res => {
    this.proyectos = res.data;
    console.log(this.proyectos);
    })
    .catch(err => {
    console.log(err);
    });
  }
  nuevoProyecto(): void{
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editarProyecto(): void{
    const dialogRef = this.dialog.open(EditProjectComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  verSesion(): void{
    this.router.navigate(['/sesion']);
  }

  popup(){
    const dialogRef = this.dialog.open(CrearSesionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
