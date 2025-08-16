import { Component, inject } from '@angular/core';
import { RxJSService } from '../../services/rxjs-service';

@Component({
  selector: 'app-from-event-comp',
  imports: [],
  templateUrl: './from-event-comp.html',
  styleUrl: './from-event-comp.scss',
})
export class FromEventComp {
  rxjsService = inject(RxJSService);

  ngOnInit(): void {
    /**
     * Das `subscribe`-Statement abonniert das Observable `documentClick$`.
     *
     * - Jedes Mal, wenn ein Klick-Ereignis (von `documentClick$`) eintrifft, wird die
     * zugehörige Callback-Funktion `(e) => { ... }` ausgeführt.
     *
     * - In dieser Funktion wird das empfangene Klick-Ereignis-Objekt (`e`)
     * auf der Konsole ausgegeben.
     *
     * - Dies ist das Äquivalent zu einem `addEventListener`, jedoch im reaktiven
     * Paradigma von RxJS.
     */
    this.rxjsService.documentClick$.subscribe((e) => {
      console.log('e', e);
    });
  }
}
