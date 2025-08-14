import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { of } from 'rxjs';
import { AsyncPipeComp } from "./components/async-pipe-comp/async-pipe-comp";
import { MapComp } from "./components/map-comp/map-comp";

@Component({
  selector: 'app-root',
  imports: [CommonModule, AsyncPipeComp, MapComp],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rxjs-basics');

}
