import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  fromEvent,
  map,
  of,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

// Stellen Sie sich das reaktive Paradigma wie eine Fabrik vor.

// Die Observables sind die Fließbänder, auf denen die Rohmaterialien (die Daten) transportiert werden.

// Die Operatoren sind die Maschinen entlang des Fließbandes. Eine Maschine (z. B. der map-Operator) könnte ein Rohmaterial (ein Objekt) in ein fertiges Produkt (einen Namen) umwandeln. Eine andere Maschine (der filter-Operator) könnte fehlerhafte Produkte aussortieren.

// Die Observer sind die Arbeiter am Ende des Fließbandes, die darauf warten, das fertige Produkt in Empfang zu nehmen, sobald es ankommt.
export class RxJSService {
  users = [
    { id: '1', name: 'John', isActive: true },
    { id: '2', name: 'Jack', isActive: true },
    { id: '3', name: 'Mike', isActive: true },
  ];

  // Erstellung des observables, of ist eine Funktion aus der RxJS-Bibliothek,
  // die einen oder mehrere Werte als Argumente nimmt und sie sofort und synchron als ein Observable emittiert.
  // [
  //   { id: '1', name: 'John', isActive: true },
  //   { id: '2', name: 'Jack', isActive: true },
  //   { id: '3', name: 'Mike', isActive: true }
  // ]
  users$ = of(this.users);

  /*
Erklärung zu `usernames$`:

- pipe(...) verbindet mehrere RxJS-Operatoren in Reihenfolge.

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

[ "John", "Jack", "Mike" ]
*/
  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)));

  // pipe(...) verbindet mehrere RxJS-Operatoren in Reihenfolge.
  // filter(...) (RxJS) prüft jede Emission und lässt sie nur durch,
  // wenn die angegebene Bedingung true ist.
  // every(...) (Array) gibt true zurück, wenn ALLE Array-Elemente
  // die Bedingung erfüllen (hier: user.isActive === true).
  //
  // [
  //   { id: '1', name: 'John', isActive: true },
  //   { id: '2', name: 'Jack', isActive: true },
  //   { id: '3', name: 'Mike', isActive: true }
  // ]
  // (nur, weil ALLE isActive = true sind; sonst keine Ausgabe)
  filteredUsers$ = this.users$.pipe(
    filter((users) => users.every((user) => user.isActive))
  );

  // Erstellt ein BehaviorSubject, das den aktuellen Benutzerzustand hält.
  // - Typ: entweder ein Objekt mit { id: string, name: string } oder null
  // - Startwert ist null (kein Benutzer gesetzt)
  // - Jeder neue Subscriber erhält sofort den zuletzt gesetzten Wert
  // - Neue Werte können mit .next(...) an alle Abonnenten gesendet werden
  user$ = new BehaviorSubject<{ id: string; name: string } | null>(null);

  /**
   * `documentClick$` ist ein Observable, das Klicks auf das gesamte HTML-Dokument überwacht.
   * Es verwendet den RxJS-Operator `fromEvent`, um native DOM-Ereignisse in einen reaktiven
   * Datenstrom umzuwandeln. Jeder Klick auf die Seite führt dazu, dass das Observable
   * ein neues Klick-Ereignis emittiert. Dies ermöglicht eine flexible und robuste Verarbeitung
   * von Benutzerinteraktionen, indem man den Datenstrom mit anderen RxJS-Operatoren
   * filtern, transformieren oder zusammenführen kann.
   */
  documentClick$ = fromEvent(document, 'click');

  /*
  * `combineLatest` ist ein RxJS-Operator, der die Werte mehrerer Observables zu einem einzigen Array kombiniert.
  * Hier werden `this.users$`, `this.usernames$` und `this.filteredUsers$` als Quellen verwendet.
  *
  * - **Wann sendet es einen Wert?**
  * `combineLatest` gibt erst dann einen Wert aus, wenn jedes der drei Quell-Observables mindestens einmal einen Wert
  * emittiert hat. Danach sendet es jedes Mal einen neuen Wert, wenn eines der Quell-Observables einen neuen Wert emittiert.
  *
  * - **Was ist der Wert?**
  * Der Operator `combineLatest` erzeugt ein Array `[users, usernames, filteredUsers]` mit dem jeweils **neuesten Wert** von
  * jedem der drei Quell-Observables.
  *
  * - **Was macht der `map`-Operator?**
  * Der `map`-Operator nimmt dieses Array und transformiert es in ein Objekt.
  * Anstatt `[users: ..., usernames: ..., filteredUsers: ...]` wird ein einfach zugängliches Objekt
  * `{ users, usernames, filteredUsers }` erstellt, bei dem die Schlüssel den Variablennamen entsprechen
  * (dies ist eine Kurzschreibweise für `{ users: users, usernames: usernames, filteredUsers: filteredUsers }`).
  *
  * **Zusammenfassend:** `data$` ist ein Observable, das immer dann einen neuen Wert emittiert, wenn sich einer der drei
  * Quell-Observables (`users$`, `usernames$`, `filteredUsers$`) ändert. Jeder neue Wert ist ein einzelnes Objekt, das
  * die jeweils neuesten Daten von allen drei Quellen enthält.
  * {
  "users": [
    { "id": "1", "name": "John", "isActive": true },
    { "id": "2", "name": "Jack", "isActive": true },
    { "id": "3", "name": "Mike", "isActive": true }
  ],
  "usernames": [
    "John",
    "Jack",
    "Mike"
  ],
  "filteredUsers": [
    { "id": "1", "name": "John", "isActive": true },
    { "id": "2", "name": "Jack", "isActive": true },
    { "id": "3", "name": "Mike", "isActive": true }
    ]
  }
  */
  data$ = combineLatest([
    this.users$,
    this.usernames$,
    this.filteredUsers$,
  ]).pipe(
    map(([users, usernames, filteredUsers]) => ({
      users,
      usernames,
      filteredUsers,
    }))
  );
}
