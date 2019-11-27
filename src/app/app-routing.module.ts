import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceWorkerComponent } from './service-worker/service-worker.component';
import { WebWorkerComponent } from './web-worker/web-worker.component';


const routes: Routes = [
  {
    path: '',
    component: ServiceWorkerComponent
  },
  {
    path: 'web-worker',
    component: WebWorkerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
