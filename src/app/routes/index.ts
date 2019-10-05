import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from '../pagenotfound/pagenotfound.component';
import {HomePageComponent} from '../home-page/home-page.component';
import {PostComponent} from '../post/post.component';

const routes: Routes = [
  /*  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent }*/
  {path: 'home', component: HomePageComponent, data: {title: 'Blog Homepage'}},
  {path: 'post/:slug', component: PostComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
