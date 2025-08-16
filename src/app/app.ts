import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { of } from 'rxjs';
import { AsyncPipeComp } from "./components/async-pipe-comp/async-pipe-comp";
import { MapComp } from "./components/map-comp/map-comp";
import { FilterComp } from "./components/filter-comp/filter-comp";
import { BehaviourSubjectComp } from "./components/behaviour-subject-comp/behaviour-subject-comp";
import { FromEventComp } from "./components/from-event-comp/from-event-comp";
import { CombineLatestComp } from "./components/combine-latest-comp/combine-latest-comp";

@Component({
  selector: 'app-root',
  imports: [CommonModule, AsyncPipeComp, MapComp, FilterComp, BehaviourSubjectComp, FromEventComp, CombineLatestComp],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rxjs-basics');

}
