import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from 'src/app/interface/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {
  heroe: Heroe = {
    nombre: '',
    biografia: '',
    casa: '',
  };

  nuevo: boolean=false; //bandera
  id:any;

  constructor(
    private heroeService: HeroesService,
    private router: Router,
    private capturaurl: ActivatedRoute //captura el url
  ) {
    this.capturaurl.params.subscribe(data =>this.id=data['id']);

    this.heroeService.ObtenerHeroes(this.id).subscribe(data=>this.heroe=data);
    
    }

    ngOnInit(): void {
        
    }

  guardar() {
    console.log(this.heroe);

    if(this.id=="nuevo"){
    
    this.heroeService.nuevoHeroe(this.heroe).subscribe(
      (data) => {
        this.router.navigate(['/heroe', data.name]);
      },
      (error) => console.error(error));

  }else{

    this.heroeService.actualizarHeroe(this.heroe,this.id)
    .subscribe(
      (data) => {
        console.log(data);
        
      },
      (error) => console.error(error)
    );

    }
  }

  agregar(forma:NgForm){
   this.router.navigate(['/heroe','nuevo']);//ruta para navegar
   forma.reset({
    casa:"Marvel"
   });


  }
}
  
