"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var boutique_service_1 = require('../services/boutique/boutique.service');
var BoutiqueComponent = (function () {
    function BoutiqueComponent(boutiqueService) {
        var _this = this;
        this.boutiqueService = boutiqueService;
        boutiqueService.getBoutiques().subscribe(function (response) {
            _this.boutiques = response;
        });
    }
    BoutiqueComponent.prototype.viewBoutique = function (id) {
        var _this = this;
        console.log('in component  with ' + id);
        this.boutiqueService.viewBoutique(id).subscribe(function (data) {
            _this.specificBoutiqueName = data.name;
            _this.specificBoutiqueProprietaire = data.proprietaire;
        });
    };
    BoutiqueComponent.prototype.addBoutique = function () {
        var _this = this;
        var boutique = {
            name: this.name,
            proprietaire: this.proprietaire,
        };
        this.boutiqueService.addBoutique(boutique)
            .subscribe(function (data) {
            console.log('Success' + data);
            _this.boutiques.push(boutique);
        });
    };
    BoutiqueComponent.prototype.removeBoutique = function (id) {
        this.boutiqueService.removeBoutique(id)
            .subscribe(function (data) {
            console.log('Success deleting ' + data);
        });
    };
    BoutiqueComponent = __decorate([
        core_1.Component({
            selector: 'boutique',
            moduleId: module.id,
            templateUrl: 'boutique.html',
            providers: [boutique_service_1.BoutiqueService]
        }), 
        __metadata('design:paramtypes', [boutique_service_1.BoutiqueService])
    ], BoutiqueComponent);
    return BoutiqueComponent;
}());
exports.BoutiqueComponent = BoutiqueComponent;
//# sourceMappingURL=boutique.component.js.map