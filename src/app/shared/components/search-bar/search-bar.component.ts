import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnDestroy{

  /**Subject: tipo especial de observable */
  private debouncer = new Subject<string>();
  private debouncerSubscription?: Subscription;
  @Input() placeHolderFromParent: string = "";
  @Input() initialValue: string = "";
  @Output() onValue = new EventEmitter();
  searchValue:string = "";

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer.pipe(
      debounceTime(300)
      ).subscribe(value => {
        this.onValue.emit(value)
      })
  }

  /**Es encesario porque aunque no exista el componente va a seguir escuchando,
   * por ende es necesario desuscribirse. Si esta en un ngonint o en el compoente
   * que siga escuchando. Los de http/common no es necesario cerrarlos, es decir
   * get, post, put, delete... ya viene implementado en el método
   */
  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue(): void{
    this.onValue.emit(this.searchValue)
  }

  /**Debouncer: espera que el usuario deje de escribir para enviar la petición */
  onKeyPressed(searchTerm:string): void{
    this.debouncer.next(searchTerm);
  }
}
