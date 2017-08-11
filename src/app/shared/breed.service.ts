import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Breed } from '../model/breed.model';
import 'rxjs/add/operator/map';

@Injectable()
export class BreedService{
  private baseUrl: string = 'http://localhost/api/breed';
  constructor(private http : Http){
  }

  getAll() {
    return this.http.get(`${this.baseUrl}/breedList.php`)
           .map((res: Response) => res.json())
  }

  create(dog) {
    var headers = new Headers();
        headers.append('Content-Type', 'application/json');        
        this.http.post(
            `${this.baseUrl}/create.php`, 
            JSON.stringify({'breed':'dog'}),
            {headers:headers}
        )
  }      
}