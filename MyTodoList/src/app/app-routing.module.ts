import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

import { UserComponent } from './components/home/user.component';
import { AboutComponent } from './components/about/about.component';



const routes: Routes = [
  {
  path: '',
  component: UserComponent,
  },
  
  {
    path: 'about/:id',
    component: AboutComponent,
  },
  
  ]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}


