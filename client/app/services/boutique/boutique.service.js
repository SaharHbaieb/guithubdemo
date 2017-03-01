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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
require("rxjs/add/operator/map");
var BoutiqueService = (function () {
    function BoutiqueService(http) {
        this.http = http;
    }
    BoutiqueService.prototype.getBoutiques = function () {
        return this.http.get('/api/boutique')
            .map(function (response) { return response.json(); });
    };
    BoutiqueService.prototype.addBoutique = function (boutique) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/boutique", JSON.stringify(boutique), { headers: headers }).map(function (response) { return response.json(); });
    };
    BoutiqueService.prototype.viewBoutique = function (id) {
        console.log('in boutique service' + id);
        return this.http.get('/api/boutiques/' + id)
            .map(function (response) { return response.json(); });
    };
    BoutiqueService.prototype.removeBoutique = function (id) {
        return this.http.delete("/api/boutiques/" + id)
            .map(function (response) { return response.json(); });
    };
    return BoutiqueService;
}());
BoutiqueService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BoutiqueService);
exports.BoutiqueService = BoutiqueService;
//# sourceMappingURL=boutique.service.js.map