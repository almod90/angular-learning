import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemPostService} from './in-mem-post.service';
import {PostService} from './post.service';

import {AppRoutingModule} from './routes';
import {PageNotFoundComponent} from './pagenotfound/pagenotfound.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostComponent} from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomePageComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
