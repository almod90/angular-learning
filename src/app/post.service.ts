import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError as observableThrowError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {BlogPost} from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'api/posts';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<BlogPost[]> {
    return this.http
      .get<BlogPost[]>(this.url)
      .pipe(map(data => data.map(e => new BlogPost(e))), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
