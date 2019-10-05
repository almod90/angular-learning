import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError as observableThrowError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {BlogPost} from './blog-post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'api/posts';

  constructor(
    private http: HttpClient
  ) {
  }

  getPosts(): Observable<BlogPost[]> {
    return this.http
      .get<any>(this.url)
      .pipe(
        map(response => response.map(post => new BlogPost().deserialize(post))),
        tap(_ => this.log('fetched posts')),
        catchError(this.handleError<BlogPost[]>('getPosts', []))
      );
  }

  getPost(id: number): Observable<BlogPost> {
    const url = `${this.url}/${id}`;
    return this.http.get<BlogPost>(url).pipe(
      tap(_ => this.log(`fetched post id=${id}`)),
      catchError(this.handleError)
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`PostService: ${message}`);
  }
}
