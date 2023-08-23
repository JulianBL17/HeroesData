import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import { Heroe } from '../interface/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  FirebaseURL:string="https://heroesapp-821ed-default-rtdb.firebaseio.com/heroes.json";
  HeroeUrl:string="https://heroesapp-821ed-default-rtdb.firebaseio.com/heroes/";
  constructor(private http:Http) { }




  nuevoHeroe(heroe:Heroe){
    let body=JSON.stringify(heroe); //pasa de json a string
    let headers=new Headers({ //encabezado de la peticion
      'Content-Type':'application/json'
    });
    
    return this.http.post(this.FirebaseURL,body,{headers})
    .pipe(map(resp => {
      console.log(resp.json());
      return resp.json(); //respuesta
      
    }))
    
    
  }


  actualizarHeroe(heroe:Heroe,key$:string){
    let body=JSON.stringify(heroe); //pasa de json a string
    let headers=new Headers({ //encabezado de la peticion
      'Content-Type':'application/json'
    });

    let url=`${this.HeroeUrl}/${key$}.json`;
    
    return this.http.put(url,body,{headers})
    .pipe(map(resp => {
      console.log(resp.json());
      return resp.json(); //respuesta
      
    }))    
  
  }


  ObtenerHeroes(key$:string){

    let url=`${this.HeroeUrl}/${key$}.json`; 
    
    return this.http.get(url).pipe(map(resp=>resp.json()
   ));
    
  }


  GetHeroe(){
    return this.http.get(this.FirebaseURL).pipe(map(resp=>resp.json()
   ));
    
  }

  Eliminar(key$:string){
    let url=`${this.HeroeUrl}/${key$}.json`;
    
    return this.http.delete(url)
    .pipe(map(resp=>resp.json()))
      
  }
}
