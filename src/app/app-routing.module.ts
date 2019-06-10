import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { PreferencesContainerComponent } from './containers/preferences-container/preferences-container.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent
  },
  {
    path: 'preferences',
    component: PreferencesContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
