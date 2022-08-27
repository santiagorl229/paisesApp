import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  `
    li{
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent {

  termino: string ="Hola Mundo";
  hayError: boolean= false;
  paises: Country[]= [];

  paisesSugeridos: Country[]= [];
  mostrarSugerencia: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string){   
    this.hayError=false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe( (paises) => {    
      this.paises = paises;  
      console.log(this.paises);
    }, (err)=>{
      this.hayError = true;
      this.paises = [];
    });    
  }
  sugerencias(termino: string){
    this.hayError = false;    
    this.termino = termino;
    this.mostrarSugerencia = true;
    this.paisService.buscarPais(termino).
                     subscribe(
                      paises=> this.paisesSugeridos = paises.splice(0,5),
                      (err)=> this.paisesSugeridos= []
                    );
  }
  buscarSugerido(termino: string){
    this.buscar(termino);    
  }
}
