import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

 @Injectable()
 export class BoutiqueService {

     constructor(private http: Http) {} 

     getBoutiques() {
         return this.http.get('/api/boutique')
                    .map(response => response.json());
     }

     addBoutique(boutique) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/boutique", JSON.stringify(boutique), { headers: headers }).map(response => response.json());
     }

     viewBoutique(id) {
         console.log('in boutique service' + id);
         return this.http.get('/api/boutiques/'+id)
                    .map(response => response.json());
     }

     removeBoutique(id) {
         return this.http.delete("/api/boutiques/"+ id)
                .map(response => response.json());
     }

 }