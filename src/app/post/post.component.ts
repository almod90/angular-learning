import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../post.service';
import {BlogPost} from '../blog-post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private post: BlogPost;

  constructor(
    private svc: PostService,
    private route: ActivatedRoute
  ) {
    this.post = new BlogPost();
  }

  ngOnInit() {
    if (this.route.snapshot.params.slug !== undefined) {
      const id = this.route.snapshot.params.slug.split('-')[0] - 0;

      this.svc.getPost(id).subscribe(post => (this.post = post));
    }
  }

}
