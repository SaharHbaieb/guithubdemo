import { Component } from '@angular/core';
import { BoutiqueService } from '../services/boutique/boutique.service';

@Component({
    selector: 'boutique',
    moduleId: module.id,
    templateUrl: 'boutique.html',
    providers: [BoutiqueService]

})
export class BoutiqueComponent {
    boutiques: Array<any>;
    name: string;
    proprietaire: string;
    
    specificBoutiqueName: string;
    specificBoutiqueProprietaire: string;
    


    constructor(private boutiqueService: BoutiqueService) {
        boutiqueService.getBoutiques().subscribe(response => {
            this.boutiques = response
        })
    }

    viewBoutique(id) {
        console.log('in component  with ' + id);
        this.boutiqueService.viewBoutique(id).subscribe(data => {
            this.specificBoutiqueName = data.name; 
            this.specificBoutiqueProprietaire = data.proprietaire ;
          

        });
    }

    addBoutique() {
        var boutique= {
            name: this.name,
            proprietaire: this.proprietaire, 
          
        }
        this.boutiqueService.addBoutique(boutique)
            .subscribe(data => {
                console.log('Success' + data)
                this.boutiques.push(boutique);
            })
    }

    removeBoutique(id) {
        this.boutiqueService.removeBoutique(id)
            .subscribe(data => {
                console.log('Success deleting ' + data);

            })
    }

}