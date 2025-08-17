import { Routes } from '@angular/router';
import { AsyncPipePage } from './pages/async-pipe-page/async-pipe-page';
import { MapPage } from './pages/map-page/map-page';
import { FilterPage } from './pages/filter-page/filter-page';
import { BehaviourSubjectPage } from './pages/behaviour-subject-page/behaviour-subject-page';
import { FromEventPage } from './pages/from-event-page/from-event-page';
import { CombineLatestPage } from './pages/combine-latest-page/combine-latest-page';
import { HotColdPage } from './pages/hot-cold-page/hot-cold-page';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'async-pipe',
  },
  {
    path: 'async-pipe',
    component: AsyncPipePage,
  },
  {
    path: 'map',
    component: MapPage,
  },
  {
    path: 'filter',
    component: FilterPage,
  },
  {
    path: 'behaviour-subject',
    component: BehaviourSubjectPage,
  },
  {
    path: 'from-event',
    component: FromEventPage,
  },
  {
    path: 'combine-latest',
    component: CombineLatestPage,
  },
  {
    path: 'hot-cold',
    component: HotColdPage,
  },
];
