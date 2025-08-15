import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxJSService {
  users = [
    { id: '1', name: 'John', isActive: true },
    { id: '2', name: 'Jack', isActive: true },
    { id: '3', name: 'Mike', isActive: true },
  ];

  // Erstellung des observables, of ist eine Funktion aus der RxJS-Bibliothek,
  // die einen oder mehrere Werte als Argumente nimmt und sie sofort und synchron als ein Observable emittiert.
  users$ = of(this.users);

  /*
Erklärung zu `usernames$`:

- `users$` ist ein Observable, erzeugt mit `of(this.users)`. 
  Es emittiert einmalig (synchron) ein Array von User-Objekten:
  [{ id: '1', name: 'John', ... }, { ... }, { ... }]

- `usernames$ = this.users$.pipe(map(...))` transformiert den Stream:
  * Der äußere `map` ist der RxJS-Operator und verändert die emittierten Werte.
  * Das innere `users.map(...)` ist das native Array-`map` von JavaScript 
    und extrahiert nur die `name`-Eigenschaft jedes Objekts.

- Ergebnis: `usernames$` ist ein Observable<string[]>, das z. B. 
  ["John", "Jack", "Mike"] liefert.

- Vorteil: Wenn `users$` später dynamisch neue Werte liefert (z. B. aus HTTP),
  berechnet `usernames$` automatisch die neue Namensliste.
*/

  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)));
}