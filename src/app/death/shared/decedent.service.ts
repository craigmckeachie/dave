import { Injectable } from '@angular/core';
import { Decedent, PlaceOfBirth } from './decedent.model';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class DecedentService {
  private model = 'decedent';
  private url = environment.apiUrl +  this.model;

  constructor(private http: Http) { }

  findById(id: number): Observable<Decedent> {
    return this.http
      .get(this.url)
      .map(response => {
        const data = response.json()[0].d;
           console.log(data);
           const decedent = new Decedent(
            data.RegId,
            data.DecedentName.FirstName,
            data.DecedentName.LastName,
            new Date(data.BirthDateCode.Year, data.BirthDateCode.Month, data.BirthDateCode.Day),
            new Date(2070, 1, 1),
            new PlaceOfBirth('Ashland', 'Ohio', 44805));
            return decedent;

      }).catch(e => {
          console.log(e);
          return Observable.throw(e);
        });

    // const decedent = new Decedent(
    //   5,
    //   'John',
    //   'Doe',
    //   new Date(1940, 5, 5),
    //   new Date(2070, 1, 1),
    //   new PlaceOfBirth('Ashland', 'Ohio', 44805));
    // return Observable.of(decedent);
  }


}
