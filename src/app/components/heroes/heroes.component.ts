import { Component, ɵfindLocaleData } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})



export class HeroesComponent{

  heroes:any[]=[];
  nuevo: boolean = false
  constructor(private heroeService:HeroesService,private router:Router){
    
    this.heroeService.GetHeroe().subscribe(data=>{
      console.log(data);
      this.heroes=data;//captura el objeto y lo pasa al arreglo heroes
      
      
    })

  }

  Eliminar(key$:any){
   this.heroeService.Eliminar(key$)
   .subscribe(data=>{

    if(data){
      console.error(data);

    }else{ 

       delete this.heroes[key$];
     

    }
   
   
    
   })
  }

  agregar(){
    this.router.navigate(['/heroe','nuevo']);//ruta para navegar
   



}
}
