import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BlogPost} from './blog-post';
import {Observable, throwError as observableThrowError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'api/posts';

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http
      .get<BlogPost[]>(this.url)
      .pipe(map(data => data), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
