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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var button_1 = require('@angular2-material/button');
var input_1 = require('@angular2-material/input');
var icon_1 = require('@angular2-material/icon/icon');
var stock_exchange_1 = require('./stock-exchange');
var stock_service_1 = require('./stock.service');
var StockEditComponent = (function () {
    function StockEditComponent(stockService, route, titleService) {
        this.stockService = stockService;
        this.route = route;
        this.titleService = titleService;
        this.stock = new stock_exchange_1.StockExchange();
    }
    StockEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParams = this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.stockFirebaesObject = _this.stockService.getStockExchange(id);
                _this.stockFirebaesObject.subscribe(function (stock) {
                    _this.stock = stock;
                    _this.titleService.setTitle(stock.name + " | Edit");
                });
            }
        });
    };
    StockEditComponent.prototype.cancel = function () {
    };
    StockEditComponent.prototype.save = function (newName) {
        this.stockService.updategetStockExchange(this.stockFirebaesObject, { name: newName });
    };
    StockEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'stock-edit',
            templateUrl: 'stock-edit.component.html',
            styleUrls: ['stock-edit.component.css'],
            directives: [button_1.MD_BUTTON_DIRECTIVES, input_1.MD_INPUT_DIRECTIVES, icon_1.MdIcon]
        }), 
        __metadata('design:paramtypes', [stock_service_1.StockService, router_1.ActivatedRoute, platform_browser_1.Title])
    ], StockEditComponent);
    return StockEditComponent;
}());
exports.StockEditComponent = StockEditComponent;
//# sourceMappingURL=stock-edit.component.js.map