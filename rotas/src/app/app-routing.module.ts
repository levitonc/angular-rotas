import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {path:'', component: TitleComponent, pathMatch:'full'},
  // PORTIFOLIO
  {path: 'portifolio', component: CardComponent, children:[
    // PORTIFOLIO COM ID (A FILHA DA MAMIS)
    {path: ':id', component: CardComponent},
    {path: ':id/:token', component: CardComponent}

  ]}
  ,
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
