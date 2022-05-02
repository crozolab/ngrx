import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from './shared/counter.actions';
import {Observable} from 'rxjs';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux';
  number: number;
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => {
      this.number = state.count;
      console.log(state.count);
    });
    this.count$ = store.select('count');
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }


}
