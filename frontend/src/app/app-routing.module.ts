import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { RoomComponent } from './room/room.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  
  { path:'' , redirectTo:'/home' , pathMatch:'full'},
  { path:'home' , component:HomeComponent},
  { path:'about' , component:AboutComponent},
  { path:'room' , component:RoomComponent},
  { path:'service' , component:ServiceComponent},
  { path:'contact' , component:ContactComponent},
  { path:'**' , component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
