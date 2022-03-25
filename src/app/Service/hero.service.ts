import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map , tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService){ }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero []>(this.heroesUrl)
    .pipe
    ( tap (_ => this.log(' fetched heroes')),
      catchError (this.handleError<Hero[]>('getHeros', []))
      );
  }
  getHero(id: number): Observable<Hero> {
     const url = `${this.heroesUrl}/${id}`;
     return this.http.get<Hero>(url).pipe(
      tap(_ => this.log (`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );

  }
  getHeroNo404(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }
  // tslint:disable-next-line:typedef
  private log(message: string){
    this.messageService.add(`HeroService:${message}`);
  }
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T)
  {
    return (error: any): Observable<T> =>
      {
      console.error(error);
      this.log(`${operation} faile: ${error.message}`);
      return of( result as T);
      };
  }
  // update Hero
  updateHero(hero: Hero): Observable <any>{
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  // add Hero
  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  // Delete Hero
  deleteHero(id: number): Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
  // Search Hero
  searchHeroes(term: string): Observable<Hero[]>
  {
    if (!term.trim()){
      return of ([]);
    }
    return this.http.get<Hero[]>
      (`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
        catchError(this.handleError<Hero[]>
          ('searchHeroes', []))
    );
  }
}
