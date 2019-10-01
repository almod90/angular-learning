import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostService} from '../post.service';
import {BlogPost} from '../blog-post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPosts().
      subscribe(posts => this.posts = posts);
  }

}
