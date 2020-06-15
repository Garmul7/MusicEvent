import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MusicEvent } from './music-event.model';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MusicEventService {
  private eventsUrl = 'http://localhost:8080/restApi/events';

  constructor(private http: HttpClient) { }

  /** GET Music Event from the server */
  getMusicEvents(): Observable<MusicEvent[]> {
    return this.http.get<MusicEvent[]>(this.eventsUrl);
  }

  /** POST: add a new MusicEvent to the server */
  addMusicEvent(musicEvent: MusicEvent): Observable<MusicEvent> {
    return this.http.post<MusicEvent>(this.eventsUrl, musicEvent, httpOptions).pipe(
      tap((musicEventAdded: MusicEvent) => this.log(`added MusicEvent id=${musicEventAdded.id}`)),
      catchError(this.handleError<MusicEvent>('addMusicEvent'))
    );
  }


  /** Patch: update the activity / anything */
  changeMusicEvent(musicEvent: MusicEvent | number, newMusicEvent: MusicEvent): Observable<MusicEvent> {
    const id = typeof musicEvent === 'number' ? musicEvent : musicEvent.id;
    const url = `${this.eventsUrl}/${id}`;
    return this.http.patch<MusicEvent>(url, newMusicEvent).pipe(
      tap(_ => this.log(`updated id=${id}`)),
      catchError(this.handleError<MusicEvent>('updateMusicEventInfo'))
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

  /** Log a ContactService message with the MessageService */
  private log(message: string) {
    console.log('MusicEventService: ' + message);
  }
}
