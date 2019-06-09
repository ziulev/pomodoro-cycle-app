import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoContainerComponent } from './containers/info-container/info-container.component';
import { MainContainerComponent } from './containers/main-container/main-container.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent
  },
  {
    path: 'info',
    component: InfoContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
