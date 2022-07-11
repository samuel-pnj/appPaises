import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: []
})
export class PaisInputComponent implements OnInit {
  


  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string>= new EventEmitter();
  @Input() placeholder: string='';

  debouncer: Subject<string> = new Subject();

  termino: string ='';

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( valor =>{
      console.log('debouncer:', valor);
      
    })

  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada( ) {
   
    this.debouncer.next( this.termino) ;
    
  }


}
