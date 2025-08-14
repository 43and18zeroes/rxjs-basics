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

  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)));
}
