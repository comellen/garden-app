import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap} from 'rxjs/operators'
import { Auth } from './models/auth'

const endpoint = 'https://efa-gardenapp-backend.herokuapp.com/api/product'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http: HttpClient) { }

  private extractData(res: Response) {
      let body = res;
      return body || { };
    }
    


  getProducts(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }
  deleteProduct (id): Observable<any> {
    return this.http.delete<any>(endpoint + '/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      
      console.error(error); 
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}


 
 //delete

 //get products

 //login/auth