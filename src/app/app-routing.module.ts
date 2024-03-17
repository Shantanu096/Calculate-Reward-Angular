import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RewardPointsComponent } from './reward-points/reward-points.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'calculate_reward',
    pathMatch:'full'
  },
  {
    path: 'calculate_reward',
    component: RewardPointsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
