import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string>= new EventEmitter(); //evento
  @Output() onDebounce: EventEmitter<string>= new EventEmitter(); //evento

  @Input() placeholder: string ='';
  
  debouncer: Subject<string> = new Subject();
  termino: string = '';

  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor =>{
      this.onDebounce.emit(valor);
    });
  }
  teclaPresionada(event: any){
      this.debouncer.next(this.termino)
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }
}
