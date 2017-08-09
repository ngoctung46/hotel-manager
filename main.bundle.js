webpackJsonp([1,5],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_model__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_model__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RoomCardComponent = (function () {
    function RoomCardComponent(fb, roomService, customerService, orderService, db, route, location) {
        this.fb = fb;
        this.roomService = roomService;
        this.customerService = customerService;
        this.orderService = orderService;
        this.db = db;
        this.route = route;
        this.location = location;
        this.cssClass = 'card';
        this.selectedRoom = new __WEBPACK_IMPORTED_MODULE_1__room_model__["a" /* Room */]('', '', 1, 0, false, 1, '', '');
        this.customerId = '';
        this.orderId = '';
    }
    RoomCardComponent.prototype.ngOnInit = function () {
    };
    RoomCardComponent.prototype.setSelected = function (room) {
        this.selectedRoom = room;
    };
    RoomCardComponent.prototype.checkOut = function (room) {
        room.isOccupied = false;
        room.orderId = '';
        this.roomService.updateRoom(room.$key, {
            isOccupied: false,
            orderId: ''
        });
    };
    RoomCardComponent.prototype.showCustomerSearchModal = function () {
        this.searchForm.show();
    };
    RoomCardComponent.prototype.addService = function (room) {
        this.orderService.addService(room.orderId, new __WEBPACK_IMPORTED_MODULE_9__service_model__["a" /* Service */]({
            description: 'bottle water',
            price: 10000,
            quantity: 2,
            unit: 'bottle'
        }));
        console.log("added service to the room");
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('customerModal'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "customerModal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('searchForm'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "searchForm", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('infoModal'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "infoModal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('orderModal'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "orderModal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "cssClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__room_model__["a" /* Room */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__room_model__["a" /* Room */]) === "function" && _a || Object)
    ], RoomCardComponent.prototype, "room", void 0);
    RoomCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-room-card',
            template: __webpack_require__(393),
            styles: [__webpack_require__(337)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__room_service__["a" /* RoomService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__order_service__["a" /* OrderService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["c" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["c" /* AngularFireDatabase */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* ActivatedRoute */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_common__["b" /* Location */]) === "function" && _h || Object])
    ], RoomCardComponent);
    return RoomCardComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=room-card.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
var Service = (function () {
    function Service(obj) {
        this.description = obj && obj.description || '';
        this.price = obj && obj.price || 0.0;
        this.unit = obj && obj.unit || '';
        this.quantity = obj && obj.quantity || 0.0;
    }
    return Service;
}());

//# sourceMappingURL=service.model.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuService = (function () {
    function MenuService() {
    }
    MenuService.prototype.getMenu = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MENU */]);
    };
    MenuService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyCJ-mj_VRzyms0XGJz8MXH2PmIjWE6T6DM",
        authDomain: "hoang-long-hotel.firebaseapp.com",
        databaseURL: "https://hoang-long-hotel.firebaseio.com",
        projectId: "hoang-long-hotel",
        storageBucket: "hoang-long-hotel.appspot.com",
        messagingSenderId: "843555283760"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 246;


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(157);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(db) {
        this.db = db;
        this.cssClass = "ui container";
        this.title = 'app works!';
        this.items = db.list('rooms');
        this.customers = db.list('customers');
    }
    AppComponent.prototype.getInfo = function (key) {
        this.item = this.db.object("rooms/" + key);
        this.item.subscribe(function (x) { return console.log(x.name); });
        console.log(this.item);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "cssClass", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(388),
            styles: [__webpack_require__(332)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_module__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__menu_menu_module__["a" /* MenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__main_main_module__["a" /* MainModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    function Customer(obj) {
        this.$key = obj && obj.$key || '';
        this.$ref = obj && obj.$ref || '';
        this.id = obj && obj.id || '';
        this.lastName = obj && obj.lastName || '';
        this.firstName = obj && obj.firstName || '';
        this.streetAddress = obj && obj.streetAddress || '';
        this.city = obj && obj.city || '';
        this.country = obj && obj.country || '';
        this.issueDate = obj && obj.issueDate || '';
        this.expirationDate = obj && obj.expirationDate || '';
        this.issueCity = obj && obj.issueCity || '';
        this.issueCountry = obj && obj.issueCountry || '';
    }
    return Customer;
}());

//# sourceMappingURL=customer.model.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_card_room_card_component__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerInfoComponent = (function () {
    function CustomerInfoComponent(injector) {
        this.injector = injector;
        this.parentComponent = injector.get(__WEBPACK_IMPORTED_MODULE_1__room_card_room_card_component__["a" /* RoomCardComponent */]);
    }
    CustomerInfoComponent.prototype.ngOnInit = function () {
    };
    CustomerInfoComponent.prototype.show = function () {
        this.infoModal.show();
    };
    CustomerInfoComponent.prototype.hide = function () {
        this.infoModal.hide();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('infoModal'),
        __metadata("design:type", Object)
    ], CustomerInfoComponent.prototype, "infoModal", void 0);
    CustomerInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-customer-info',
            template: "\n    <sm-modal title=\"Checked in Customer Info\" icon=\"user circle outline\" #infoModal>\n        <modal-content>\n\n            <a class=\"ui teal label \">\n                Customer Name: \n            </a>\n              <a class=\"ui orange label\">\n                Tung \n            </a>\n\n        </modal-content>\n        <modal-actions>\n            <button class=\"ui blue button\" (click)=\"hide()\">Close</button>\n        </modal-actions>\n    </sm-modal>\n    ",
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */]) === "function" && _a || Object])
    ], CustomerInfoComponent);
    return CustomerInfoComponent;
    var _a;
}());

//# sourceMappingURL=customer-info.component.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSearchFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerSearchFormComponent = (function () {
    function CustomerSearchFormComponent() {
        this.roomId = '';
    }
    CustomerSearchFormComponent.prototype.ngOnInit = function () {
    };
    CustomerSearchFormComponent.prototype.show = function () {
        this.searchModal.show();
    };
    CustomerSearchFormComponent.prototype.hide = function () {
        this.searchModal.hide();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
        __metadata("design:type", Object)
    ], CustomerSearchFormComponent.prototype, "roomId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('searchModal'),
        __metadata("design:type", Object)
    ], CustomerSearchFormComponent.prototype, "searchModal", void 0);
    CustomerSearchFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-customer-search-form',
            template: "\n    <sm-modal title=\"Check In Customer\" icon=\"user circle outline\" #searchModal>\n        <modal-content>\n            <form class=\"ui form\">\n            <div class=\"field\">\n                <label>Enter Customer ID</label>\n                <input type=\"text\" name=\"customerId\" id=\"customerId\" placeholder=\"Enter customer ID....\" [(ngModel)]=\"customerId\">\n            </div>\n            </form>\n        </modal-content>\n        <modal-actions>\n            <button type=\"submit\" class=\"ui button primary\" \n                    [class.disabled]=\"customerId==''\" \n                    (click)=\"hide();\"\n                    [routerLink]=\"['customer-check-in', customerId, roomId]\" skipLocationChange>Submit</button>\n        </modal-actions>\n    </sm-modal>\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], CustomerSearchFormComponent);
    return CustomerSearchFormComponent;
}());

//# sourceMappingURL=customer-search-form.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_model__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__room_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_model__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_model__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var CustomerComponent = (function () {
    function CustomerComponent(location, roomService, fb, orderService, customerService, route) {
        this.location = location;
        this.roomService = roomService;
        this.fb = fb;
        this.orderService = orderService;
        this.customerService = customerService;
        this.route = route;
        this.customerId = '';
        this.roomId = '';
        this.customerForm = fb.group({
            'firstName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'lastName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'id': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'issueDate': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, dateValidator])],
            'expirationDate': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, dateValidator])],
            'issueCountry': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            'issueCity': [''],
            'streetAddress': [''],
            'city': [''],
            'country': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.customersObser = _this.customerService.getCustomerByID(params['customerId']);
            _this.customerId = params['customerId'];
        });
        this.route.params
            .subscribe(function (parames) { return _this.roomId = parames['roomId']; });
        this.customersObser.subscribe(function (customers) {
            if (customers.length > 0) {
                _this.customer = customers[0];
                _this.doesExist = true;
                _this.disableControls();
            }
            else {
                _this.customer = new __WEBPACK_IMPORTED_MODULE_2__customer_model__["a" /* Customer */]();
                _this.customer.id = _this.customerId;
                _this.doesExist = false;
            }
            _this.customerModal.show();
        });
    };
    CustomerComponent.prototype.onSubmit = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.doesExist) {
                            key = this.customerService.addCustomer(value);
                        }
                        return [4 /*yield*/, this.addOrder()];
                    case 1:
                        _a.sent();
                        location.reload();
                        this.customerModal.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerComponent.prototype.addOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var price, order, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        price = this.getPrice(this.roomId);
                        order = new __WEBPACK_IMPORTED_MODULE_8__order_model__["a" /* Order */]({
                            customerId: this.customer.$key,
                            roomId: this.roomId,
                            services: [
                                new __WEBPACK_IMPORTED_MODULE_9__service_model__["a" /* Service */]({
                                    description: 'Room Charge',
                                    price: 400000,
                                    unit: 'night',
                                    quantity: 1
                                })
                            ]
                        });
                        key = this.orderService.addOrder(order);
                        return [4 /*yield*/, key.then(function (value) {
                                console.log('value: ' + value);
                                _this.roomService.updateRoom(_this.roomId, { orderId: value });
                                _this.roomService.updateRoom(_this.roomId, { isOccupied: true });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerComponent.prototype.disableControls = function () {
        var _this = this;
        Object.keys(this.customerForm.controls).forEach(function (key) {
            _this.customerForm.get(key).disable();
        });
    };
    CustomerComponent.prototype.getPrice = function (roomId) {
        if (roomId === '0' || roomId === '1' || roomId === '2') {
            return 400000;
        }
        return 300000;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('customerModal'),
        __metadata("design:type", Object)
    ], CustomerComponent.prototype, "customerModal", void 0);
    CustomerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-customer',
            template: __webpack_require__(389),
            styles: [__webpack_require__(333)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__room_service__["a" /* RoomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__order_service__["a" /* OrderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__customer_service__["a" /* CustomerService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _f || Object])
    ], CustomerComponent);
    return CustomerComponent;
    var _a, _b, _c, _d, _e, _f;
}());

function dateValidator(control) {
    var pattern = "(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[012])/((19|20)\\d\\d)";
    if (control !== undefined && !control.value.match(pattern)) {
        return { invalidDate: true };
    }
}
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelServiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HotelServiceComponent = (function () {
    function HotelServiceComponent() {
    }
    HotelServiceComponent.prototype.ngOnInit = function () {
        this.hotelServiceModal.show();
    };
    HotelServiceComponent.prototype.hide = function () {
        this.hotelServiceModal.hide();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('hotelServiceModal'),
        __metadata("design:type", Object)
    ], HotelServiceComponent.prototype, "hotelServiceModal", void 0);
    HotelServiceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-hotel-service',
            template: __webpack_require__(390),
            styles: [__webpack_require__(334)]
        }),
        __metadata("design:paramtypes", [])
    ], HotelServiceComponent);
    return HotelServiceComponent;
}());

//# sourceMappingURL=hotel-service.component.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(roomService, customerService) {
        this.roomService = roomService;
        this.customerService = customerService;
        this.cssClass = 'ui main container';
    }
    MainComponent.prototype.ngOnInit = function () {
        this.rooms = this.roomService.getRooms();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "cssClass", void 0);
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__(391),
            styles: [__webpack_require__(335)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__room_service__["a" /* RoomService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */]) === "function" && _b || Object])
    ], MainComponent);
    return MainComponent;
    var _a, _b;
}());

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_card_room_card_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__room_list_room_list_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__room_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_semantic_ng_semantic__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__customer_customer_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__customer_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__order_order_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__order_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__customer_customer_search_form_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__customer_customer_info_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__hotel_service_hotel_service_component__ = __webpack_require__(263);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_semantic_ng_semantic__["a" /* NgSemanticModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */]
                    },
                    {
                        path: 'orders/:id',
                        component: __WEBPACK_IMPORTED_MODULE_13__order_order_component__["a" /* OrderComponent */]
                    },
                    {
                        path: 'customer-check-in/:customerId/:roomId',
                        component: __WEBPACK_IMPORTED_MODULE_11__customer_customer_component__["a" /* CustomerComponent */]
                    },
                    {
                        path: 'hotel-services',
                        component: __WEBPACK_IMPORTED_MODULE_18__hotel_service_hotel_service_component__["a" /* HotelServiceComponent */]
                    }
                ]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__room_service__["a" /* RoomService */],
                __WEBPACK_IMPORTED_MODULE_12__customer_service__["a" /* CustomerService */],
                __WEBPACK_IMPORTED_MODULE_14__order_service__["a" /* OrderService */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_3__room_card_room_card_component__["a" /* RoomCardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__room_list_room_list_component__["a" /* RoomListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__customer_customer_component__["a" /* CustomerComponent */],
                __WEBPACK_IMPORTED_MODULE_13__order_order_component__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__customer_customer_search_form_component__["a" /* CustomerSearchFormComponent */],
                __WEBPACK_IMPORTED_MODULE_16__customer_customer_info_component__["a" /* CustomerInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__hotel_service_hotel_service_component__["a" /* HotelServiceComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */]]
        })
    ], MainModule);
    return MainModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order(obj) {
        this.customerId = obj && obj.customerId || '';
        this.roomId = obj && obj.roomId || '';
        this.checkInTime = obj && obj.checkInTime || new Date().toLocaleString();
        this.checkOutTime = obj && obj.checkOutTime || '';
        this.services = obj && obj.services || [];
        this.discount = obj && obj.discount || 0.0;
        this.total = obj && obj.total || 0.0;
    }
    return Order;
}());

//# sourceMappingURL=order.model.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderComponent = (function () {
    function OrderComponent(orderService, roomService, customerService, route) {
        this.orderService = orderService;
        this.roomService = roomService;
        this.customerService = customerService;
        this.route = route;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.order = _this.orderService.getOrder(params['id']);
            _this.order.subscribe(function (order) {
                _this.customer = _this.customerService.getCustomer(order.customerId);
                _this.services = _this.orderService.getServices(params['id']);
                _this.orderModal.show();
            });
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('orderModal'),
        __metadata("design:type", Object)
    ], OrderComponent.prototype, "orderModal", void 0);
    OrderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-order',
            template: __webpack_require__(392),
            styles: [__webpack_require__(336)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__room_service__["a" /* RoomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object])
    ], OrderComponent);
    return OrderComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomListComponent = (function () {
    function RoomListComponent() {
        this.cssClass = "ui cards";
    }
    RoomListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* FirebaseListObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* FirebaseListObservable */]) === "function" && _a || Object)
    ], RoomListComponent.prototype, "rooms", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], RoomListComponent.prototype, "cssClass", void 0);
    RoomListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-room-list',
            template: __webpack_require__(394),
            styles: [__webpack_require__(338)]
        }),
        __metadata("design:paramtypes", [])
    ], RoomListComponent);
    return RoomListComponent;
    var _a;
}());

//# sourceMappingURL=room-list.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
var Room = (function () {
    function Room($key, name, type, price, isOccupied, status, imgUrl, orderId) {
        if (orderId === void 0) { orderId = ''; }
        this.$key = $key;
        this.name = name;
        this.type = type;
        this.price = price;
        this.isOccupied = isOccupied;
        this.status = status;
        this.imgUrl = imgUrl;
        this.orderId = orderId;
    }
    return Room;
}());

//# sourceMappingURL=room.model.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItem; });
var MenuItem = (function () {
    function MenuItem(name, url, subMenu) {
        this.name = name;
        this.url = url;
        this.subMenu = subMenu;
    }
    return MenuItem;
}());

//# sourceMappingURL=menu-item.model.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(menuService) {
        this.menuService = menuService;
        this.menu = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.getMenu().then(function (menuItems) {
            _this.menu = menuItems;
        });
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__(395),
            styles: [__webpack_require__(339)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */]) === "function" && _a || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MenuModule = (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__menu_service__["a" /* MenuService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__menu_component__["a" /* MenuComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__menu_component__["a" /* MenuComponent */]]
        })
    ], MenuModule);
    return MenuModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_item_model__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU; });

var MENU = [
    new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Home', ''),
    new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Manage', '/manage', [
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Rooms', '/room'),
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Services', '/room')
    ]),
    new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Reports', '/reports', [
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Daily Report', '/daily-report'),
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Monthly Report', '/monthly-report'),
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Periodical Report', '/periodical-report')
    ])
];
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "input[type=\"text\"]:disabled {\r\n    color: blue !important;\r\n    font-weight: bolder;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, ".occupied {\r\n    background-color: lightcoral !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = "<sm-modal title=\"Customer Information.\" #customerModal>\n  <modal-content *ngIf=\"customer\">    \n    <form class=\"ui form\" [formGroup]=\"customerForm\">\n      <div class=\"field\">\n        <div class=\"four fields\">\n          <div class=\"field\">\n            <label for=\"idNumber\">CustomerID</label>\n            <input type=\"text\" name=\"idNumber\" \n                  placeholder=\"ID Number\" \n                  [class.error]=\"!customerForm.controls['id'].valid\" \n                  [formControl]=\"customerForm.controls['id']\"\n                  [(ngModel)]=\"customer.id\"\n                  [disabled]=\"doesExist\">\n            <div *ngIf=\"customerForm.controls['id'].hasError('required')&&customerForm.controls['id'].dirty\" \n                  class=\"ui pointing red basic label\">ID number is required</div>\n          </div>\n          <div class=\"field\">\n            <label for=\"issueDate\">Issue Date</label>\n            <input type=\"text\" name=\"issueDate\" placeholder=\"Issue Date\" \n                  [class.error]=\"!customerForm.controls['issueDate'].valid\" \n                  [formControl]=\"customerForm.controls['issueDate']\"\n                  [(ngModel)]=\"customer.issueDate\">\n            <div *ngIf=\"customerForm.controls['issueDate'].hasError('required')&&customerForm.controls['issueDate'].dirty\" \n                  class=\"ui pointing red basic label\">Issue Date is required</div>\n             <div *ngIf=\"customerForm.controls['issueDate'].hasError('invalidDate')\" \n                  class=\"ui pointing red basic label\">Issue Date has to be in format dd/mm/yyyy</div> \n          </div>\n          <div class=\"field\">\n            <label>Expiration Date</label>\n            <input type=\"text\" name=\"expirationDate\" placeholder=\"Expiration Date\" \n                    [class.error]=\"!customerForm.controls['expirationDate'].valid\"\n                    [formControl]=\"customerForm.controls['expirationDate']\"\n                    [(ngModel)]=\"customer.expirationDate\">\n            <div *ngIf=\"customerForm.controls['expirationDate'].hasError('required')&&customerForm.controls['expirationDate'].dirty\"\n                    class=\"ui pointing red basic label\">Expiration Date is required</div>\n             <div *ngIf=\"customerForm.controls['expirationDate'].hasError('invalidDate')\" \n                    class=\"ui pointing red basic label\">Expiration Date has to be in format dd/mm/yyyy</div> \n\n          </div>\n          <div class=\"field\">\n            <label>Country of issue</label>\n          \n              <input type=\"text\" placeholder=\"Country of Issue\" \n                [formControl]=\"customerForm.controls['issueCountry']\"\n                [class.error]=\"!customerForm.controls['issueCountry'].valid\"\n                [(ngModel)]=\"customer.issueCountry\">\n            <div *ngIf=\"customerForm.controls['issueCountry'].hasError('required')&&customerForm.controls['issueCountry'].dirty\" \n                  class=\"ui pointing red basic label\">Country of issue is required</div>\n          </div>\n          <div class=\"field\">\n            <label>City of issue</label>\n                <input type=\"text\" placeholder=\"City of Issue\" \n                [formControl]=\"customerForm.controls['issueCity']\"\n                [class.error]=\"!customerForm.controls['issueCity'].valid\"\n                [(ngModel)]=\"customer.issueCity\">\n          </div>\n        </div>\n      </div>\n      <div class=\"field\">\n        <label>Name</label>\n        <div class=\"two fields\">\n          <div class=\"field\">\n            <input type=\"text\" name=\"firstName\" placeholder=\"First Name\" \n                  [class.error]=\"!customerForm.controls['firstName'].valid\" \n                  [formControl]=\"customerForm.controls['firstName']\"\n                  [(ngModel)]=\"customer.firstName\">\n            <div *ngIf=\"customerForm.controls['firstName'].hasError('required')&&customerForm.controls['firstName'].dirty\" \n                  class=\"ui pointing red basic label\">First name is required</div>\n          </div>\n          <div class=\"field\">\n            <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\" \n                  [class.error]=\"!customerForm.controls['lastName'].valid\"\n                  [formControl]=\"customerForm.controls['lastName']\"\n                  [(ngModel)]=\"customer.lastName\">\n            <div *ngIf=\"customerForm.controls['lastName'].hasError('required')&&customerForm.controls['lastName'].dirty\" \n                  class=\"ui pointing red basic label\">Last name is required</div>\n          </div>\n        </div>\n        <div class=\"field\">\n          <label>Address</label>\n          <input type=\"text\" name=\"street address\" placeholder=\"Street Address\" \n                [class.error]=\"!customerForm.controls['streetAddress'].valid\"\n                [formControl]=\"customerForm.controls['streetAddress']\"\n                [(ngModel)]=\"customer.streetAddress\">\n        </div>\n        <div class=\"two fields\">\n          <div class=\"field\">\n            <label>City</label>\n            <input type=\"text\" placeholder=\"Country of Issue\" \n                [formControl]=\"customerForm.controls['city']\"\n                [class.error]=\"!customerForm.controls['city'].valid\"\n                [(ngModel)]=\"customer.city\">\n          </div>\n          <div class=\"field\">\n            <label>Country</label>\n            <input type=\"text\" placeholder=\"Country of Issue\" \n                [formControl]=\"customerForm.controls['country']\"\n                [class.error]=\"!customerForm.controls['country'].valid\"\n                [(ngModel)]=\"customer.country\">\n            <div *ngIf=\"customerForm.controls['country'].hasError('required')&&customerForm.controls['country'].dirty\" \n                class=\"ui pointing red basic label\">Country is required</div>\n          </div>\n        </div>\n      </div>\n    </form>\n    <!-- <div class=\"ui message info\">{{ customerForm.value | json }} DOES EXIST{{ doesExist }}</div> -->\n  </modal-content>\n  <modal-actions>\n    <button class=\"ui button primary\" \n            (click)=\"onSubmit(customerForm.value);customerModal.hide()\"\n            [class.disabled]=\"!customerForm.valid && !doesExist\">Submit</button>\n  </modal-actions>\n</sm-modal>\n"

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

module.exports = "<sm-modal title=\"Checked in Customer Info\" icon=\"user circle outline\" #hotelServiceModal>\n  <modal-content>\n    <div class=\"ui selection dropdown\">\n      <input type=\"hidden\" name=\"gender\">\n      <i class=\"dropdown icon\"></i>\n      <div class=\"default text\">Gender</div>\n      <div class=\"menu\">\n        <div class=\"item\" data-value=\"1\">Male</div>\n        <div class=\"item\" data-value=\"0\">Female</div>\n      </div>\n    </div>\n  </modal-content>\n  <modal-actions>\n    <button class=\"ui blue button\" (click)=\"hide()\">Close</button>\n  </modal-actions> \n</sm-modal>"

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports = "<app-room-list [rooms]=\"rooms\"></app-room-list>\r\n"

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<sm-modal title=\"Hoang Long Hotel - 40 Hau Giang Street, Ward 4, Tan Binh District, HCMC, VN\" #orderModal>\n  <modal-content>\n    <h2 class=\"ui center aligned icon header\">\n      <i class=\"money icon\"></i> RECEIPT\n    </h2>\n    <div class=\"ui large header\">Customer Information:</div>\n    <p>Name: {{ (customer | async)?.firstName }} {{ (customer | async)?.lastName }}</p>\n    <p>Address: {{ (customer | async)?.streetAddress }} - {{ (customer | async)?.city }} - {{ (customer | async)?.country }}\n    </p>\n    <p>ID No.: {{ (customer | async)?.id }} - Issue Date: {{ (customer | async)?.issueDate }} - Expiration Date: {{ (customer\n      | async)?.expirationDate }} - Issue Place: {{ (customer | async)?.issueCity }} - {{ (customer | async)?.issueCountry\n      }}\n      <table class=\"ui teal table\">\n        <thead>\n          <tr>\n            <th>Services</th>\n            <th class=\"right aligned\">Price</th>\n            <th class=\"right aligned\">Quantity/Unit</th>\n            <th class=\"right aligned\">Total</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let service of services | async\">\n            <td>{{ service.description }}</td>\n            <td class=\"right aligned\">{{ service.price | number}}</td>\n            <td class=\"right aligned\">{{ service.quantity }} {{ service.unit }}</td>\n            <td class=\"right aligned\">{{ service.price * service.quantity | number}}</td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr>\n            <th></th>\n            <th></th>\n            <th class=\"right aligned\">\n              <h4 class=\"ui teal header\">Total</h4>\n            </th>\n            <th class=\"right aligned\">\n              <h4 class=\"ui teal header\"></h4>\n            </th>\n          </tr>\n        </tfoot>\n      </table>\n\n  </modal-content>\n</sm-modal>"

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" [class.occupied]=\"room.isOccupied\">\n  <img class=\"right floated mini ui image\" src=\"assets/images/{{room.imgUrl}}\">\n  <div class=\"header\">\n    Room Number: {{ room.name }} - {{ room.$key}}\n  </div>\n  <div class=\"meta\">\n    Number of bed: {{ room.type }}\n  </div>\n  <div class=\"description\">\n    Booking Status: <span class=\"ui basic green label\" [class.green]=\"!room.isOccupied\" [class.red]=\"room.isOccupied\"> {{ room.isOccupied ? 'Occupied' : 'Available' }}</span>\n  </div>\n</div>\n<div *ngIf=\"!room.isOccupied\" class=\"ui bottom attached button blue\" \n      (click)=\"showCustomerSearchModal();setSelected(room)\" >\n  <i class=\"add icon\"></i> Check-in\n</div>\n<div *ngIf=\"room.isOccupied\" class=\"ui three bottom attached buttons\">\n  <button class=\"ui button green\" (click)=\"customerPopup.show($event,{position: 'bottom center'})\">Customer</button>\n  <button class=\"ui button blue\" (click)=\"servicePopup.show($event,{position: 'bottom center'})\">Services</button>\n  <div class=\"ui red button\" (click)=\"checkOut(room)\">Checkout</div>\n</div>\n<app-customer-search-form [roomId]=\"room.$key\" #searchForm></app-customer-search-form>\n\n<sm-popup #customerPopup>\n  <div class=\"ui icon buttons\">\n    <button class=\"ui basic button orange\">View</button>\n    <button class=\"ui basic button teal\">Edit</button> \n  </div> \n</sm-popup>\n\n<sm-popup #servicePopup>\n  <div class=\"ui icon buttons\">\n    <button class=\"ui basic button green\" [routerLink]=\"['/orders',room.orderId]\">View</button>\n    <button class=\"ui basic button blue\" [routerLink]=\"['/hotel-services']\">Add</button>\n  </div>\n</sm-popup>\n\n\n"

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = "<app-room-card *ngFor=\"let room of rooms | async\" [room]=\"room\"></app-room-card>\n"

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui fixed inverted menu\">\n  <div class=\"ui container\">\n    <a href=\"#\" class=\"header item\">\n      Hoang  Long  Hotel  Manager  Application\n    </a>\n    <ng-container *ngFor=\"let menuItem of menu\">\n    <a *ngIf=\"!menuItem.subMenu\"[href]=\"menuItem.url\" class=\"item\">{{ menuItem.name }}</a>\n    <div *ngIf=\"menuItem.subMenu\" class=\"ui simple dropdown item\">\n      {{ menuItem.name }} <i class=\"dropdown icon\"></i>\n      <div class=\"menu\">\n        <a *ngFor=\"let subItem of menuItem.subMenu\" class=\"item\" href=\"#\">{{ subItem.name }}</a>\n      </div>\n    </div>\n    </ng-container>\n  </div>\n</div>"

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = (function () {
    function CustomerService(db) {
        this.db = db;
        this.customers = db.list('/customers');
    }
    CustomerService.prototype.addCustomer = function (customer) {
        return this.db.list('/customers').push(customer).then(function (item) { return item.key; });
    };
    CustomerService.prototype.getCustomers = function () {
        return this.customers;
    };
    CustomerService.prototype.getCustomer = function (key) {
        return this.db.object("customers/" + key);
    };
    CustomerService.prototype.getCustomerByID = function (id) {
        return this.db.list('customers', {
            query: {
                orderByChild: 'id',
                equalTo: id,
            }
        });
    };
    CustomerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], CustomerService);
    return CustomerService;
    var _a;
}());

//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomService = (function () {
    function RoomService(db) {
        this.db = db;
    }
    RoomService.prototype.getRooms = function () {
        return this.db.list('/rooms');
    };
    RoomService.prototype.updateRoom = function (key, data) {
        this.db.list('/rooms').update(key, data);
    };
    RoomService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], RoomService);
    return RoomService;
    var _a;
}());

//# sourceMappingURL=room.service.js.map

/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(247);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderService = (function () {
    function OrderService(db) {
        this.db = db;
    }
    OrderService.prototype.addOrder = function (order) {
        return this.db.list('/orders').push(order).then(function (item) { return item.key; });
    };
    OrderService.prototype.getOrder = function (key) {
        return this.db.object("/orders/" + key);
    };
    OrderService.prototype.addService = function (key, service) {
        return this.db.list("/orders/" + key + "/services").push(service);
    };
    OrderService.prototype.getServices = function (key) {
        return this.db.list("/orders/" + key + "/services");
    };
    OrderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], OrderService);
    return OrderService;
    var _a;
}());

//# sourceMappingURL=order.service.js.map

/***/ })

},[661]);
//# sourceMappingURL=main.bundle.js.map