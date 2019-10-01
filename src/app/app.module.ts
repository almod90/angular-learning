import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';
import {HomePageComponent} from './home-page/home-page.component';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemPostService} from './in-mem-post.service';
import {PostService} from './post.service';

const appRoutes: Routes = [
  /*{ path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },*/
  {
    path: 'home',
    component: HomePageComponent,
    data: {title: 'Blog Homepage'}
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // debugging purposes only
    ),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemPostService)/*, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    })*/
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
