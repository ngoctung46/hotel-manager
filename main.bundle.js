webpackJsonp([1,5],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_model__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__room_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_model__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_model__ = __webpack_require__(160);
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
            'firstName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'lastName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'id': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'issueDate': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, dateValidator])],
            'expirationDate': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, dateValidator])],
            'issueCountry': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'issueCity': [''],
            'streetAddress': [''],
            'city': [''],
            'country': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
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
            _this.customerModal.show({ observeChanges: true });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('customerModal'),
        __metadata("design:type", Object)
    ], CustomerComponent.prototype, "customerModal", void 0);
    CustomerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-customer',
            template: __webpack_require__(403),
            styles: [__webpack_require__(342)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["c" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["c" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__room_service__["a" /* RoomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__order_service__["a" /* OrderService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__customer_service__["a" /* CustomerService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === "function" && _f || Object])
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

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_model__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_service__ = __webpack_require__(37);
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
    function HotelServiceComponent(route, orderService) {
        this.route = route;
        this.orderService = orderService;
        this.service = new __WEBPACK_IMPORTED_MODULE_1__service_model__["a" /* Service */]();
        this.services = __WEBPACK_IMPORTED_MODULE_1__service_model__["b" /* SERVICES */];
    }
    HotelServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.orderId = params['orderId'];
        });
        this.hotelServiceModal.show();
        $('.ui.dropdown').dropdown();
    };
    HotelServiceComponent.prototype.add = function () {
        this.orderService.addService(this.orderId, this.service);
        console.log("Add " + this.service + " to the " + this.orderId);
        this.hotelServiceModal.hide();
        location.reload();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('hotelServiceModal'),
        __metadata("design:type", Object)
    ], HotelServiceComponent.prototype, "hotelServiceModal", void 0);
    HotelServiceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-hotel-service',
            template: __webpack_require__(404),
            styles: [__webpack_require__(343)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */]) === "function" && _b || Object])
    ], HotelServiceComponent);
    return HotelServiceComponent;
    var _a, _b;
}());

//# sourceMappingURL=hotel-service.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_service__ = __webpack_require__(51);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "cssClass", void 0);
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__(405),
            styles: [__webpack_require__(344)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__room_service__["a" /* RoomService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */]) === "function" && _b || Object])
    ], MainComponent);
    return MainComponent;
    var _a, _b;
}());

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_card_room_card_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__room_list_room_list_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__room_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_semantic_ng_semantic__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__customer_customer_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__customer_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__order_order_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__order_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__customer_customer_search_form_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__customer_customer_info_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__hotel_service_hotel_service_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_routing_module__ = __webpack_require__(272);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_semantic_ng_semantic__["a" /* NgSemanticModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_18__main_routing_module__["a" /* MainRoutingModule */]
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
                __WEBPACK_IMPORTED_MODULE_17__hotel_service_hotel_service_component__["a" /* HotelServiceComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */]]
        })
    ], MainModule);
    return MainModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(217);
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
        this.IsCheckOut = false;
        this.discount = 0.0;
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.orderId = params['id'];
            _this.order = _this.orderService.getOrder(params['id']);
            _this.order.subscribe(function (order) {
                _this.roomId = order.roomId;
                _this.timeDiff = (new Date().getTime() - new Date(order.checkInTime).getTime()) / 1000;
                _this.day = Math.floor(_this.timeDiff / 86400);
                _this.timeDiff -= _this.day * 86400;
                _this.hour = Math.floor(_this.timeDiff / 3600) % 24;
                _this.timeDiff -= _this.hour * 3600;
                _this.minutes = Math.floor(_this.timeDiff / 60) % 60;
                _this.customer = _this.customerService.getCustomer(order.customerId);
                _this.services = _this.orderService.getServices(params['id']);
                _this.services.subscribe(function (services) {
                    var hours = _this.hour + _this.minutes / 60;
                    if (_this.day <= 0) {
                        if (hours > 4) {
                            _this.price = services[0].price;
                            _this.quantity = 1;
                            _this.unit = 'day';
                        }
                        else if (hours > 3) {
                            _this.price = services[0].price = 210000;
                            _this.quantity = 4;
                            _this.unit = 'hours';
                        }
                        else if (hours > 2) {
                            _this.price = services[0].price = 190000;
                            _this.quantity = 3;
                            _this.unit = 'hours';
                        }
                        else if (hours > 1) {
                            _this.price = services[0].price = 150000;
                            _this.quantity = 2;
                            _this.unit = 'hours';
                        }
                        else {
                            _this.price = services[0].price = 100000;
                            _this.quantity = 1;
                            _this.unit = 'hour';
                        }
                    }
                    else {
                        _this.price *= _this.day;
                        _this.quantity = _this.day;
                        _this.unit = 'days';
                    }
                    _this.total = _this.price;
                    for (var index = 1; index < services.length; index++) {
                        var element = services[index];
                        _this.total += element.price * element.quantity;
                    }
                });
            });
        });
        this.orderModal.show({ observeChanges: true });
    };
    OrderComponent.prototype.close = function () {
        this.orderService.updateOrder(this.orderId, {
            total: this.total,
            checkOutTime: new Date().toString(),
            discount: this.discount
        });
        console.log(this.roomId);
        this.roomService.updateRoom(this.roomId, {
            orderId: '',
            status: 2,
            isOccupied: false
        });
        this.orderModal.hide();
        location.reload();
    };
    OrderComponent.prototype.remove = function (key) {
        this.orderService.removeService(this.orderId, key);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('orderModal'),
        __metadata("design:type", Object)
    ], OrderComponent.prototype, "orderModal", void 0);
    OrderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-order',
            template: __webpack_require__(406),
            styles: [__webpack_require__(345)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__order_service__["a" /* OrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__room_service__["a" /* RoomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object])
    ], OrderComponent);
    return OrderComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_model__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__(25);
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
    function RoomCardComponent(fb, roomService, customerService, orderService, db, route, location, router) {
        this.fb = fb;
        this.roomService = roomService;
        this.customerService = customerService;
        this.orderService = orderService;
        this.db = db;
        this.route = route;
        this.location = location;
        this.router = router;
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
        this.router.navigate(['/orders', room.orderId], { skipLocationChange: true });
    };
    RoomCardComponent.prototype.clean = function (room) {
        room.status = 1;
        room.isOccupied = false;
        this.roomService.updateRoom(room.$key, { status: room.status, isOccupied: false });
    };
    RoomCardComponent.prototype.showCustomerSearchModal = function () {
        this.searchForm.show();
    };
    RoomCardComponent.prototype.markAsDirtyOrClean = function (room) {
        if (room.status == 1)
            room.status = 2;
        else
            room.status = 1;
        this.roomService.updateRoom(room.$key, { status: room.status });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('customerModal'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "customerModal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('searchForm'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "searchForm", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('infoModal'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "infoModal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('orderModal'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "orderModal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], RoomCardComponent.prototype, "cssClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__room_model__["a" /* Room */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__room_model__["a" /* Room */]) === "function" && _a || Object)
    ], RoomCardComponent.prototype, "room", void 0);
    RoomCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-room-card',
            template: __webpack_require__(407),
            styles: [__webpack_require__(346)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__room_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__room_service__["a" /* RoomService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__order_service__["a" /* OrderService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* ActivatedRoute */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__angular_common__["c" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_common__["c" /* Location */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */]) === "function" && _j || Object])
    ], RoomCardComponent);
    return RoomCardComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=room-card.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SERVICES; });
var Service = (function () {
    function Service(obj) {
        this.description = obj && obj.description || '';
        this.price = obj && obj.price || 0.0;
        this.unit = obj && obj.unit || '';
        this.quantity = obj && obj.quantity || 0.0;
    }
    return Service;
}());

var SERVICES = [
    new Service({
        description: "N\u01B0\u1EDBc su\u1ED1i",
        price: 10000,
        unit: "chai",
        quantity: 1
    }),
    new Service({
        description: "N\u01B0\u1EDBc Ng\u1ECDt",
        price: 15000,
        unit: "lon",
        quantity: 1
    }),
    new Service({
        description: "Tiger Beer",
        price: 17000,
        unit: "can",
        quantity: 1
    }),
    new Service({
        description: "Heineken Beer",
        price: 20000,
        unit: "can",
        quantity: 1
    }),
    new Service({
        description: "Gi\u1EB7t \u1EE7i th\u01B0\u1EDDng",
        price: 30000,
        unit: "set",
        quantity: 1
    }),
    new Service({
        description: "Gi\u1EB7t \u1EE7i \u0111\u1EB7c bi\u1EC7t",
        price: 80000,
        unit: "suit",
        quantity: 1
    }),
    new Service({
        description: "Ph\u1EE5 thu",
        price: 0,
        unit: "VN\u0110",
        quantity: 1
    })
];
//# sourceMappingURL=service.model.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu__ = __webpack_require__(279);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__(410),
            styles: [__webpack_require__(349)]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DailyReportComponent = (function () {
    function DailyReportComponent() {
    }
    DailyReportComponent.prototype.ngOnInit = function () {
    };
    DailyReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-daily-report',
            template: __webpack_require__(411),
            styles: [__webpack_require__(350)]
        }),
        __metadata("design:paramtypes", [])
    ], DailyReportComponent);
    return DailyReportComponent;
}());

//# sourceMappingURL=daily-report.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_order_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportComponent = (function () {
    function ReportComponent(orderService) {
        this.orderService = orderService;
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-report',
            template: __webpack_require__(414),
            styles: [__webpack_require__(353)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_order_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main_order_service__["a" /* OrderService */]) === "function" && _a || Object])
    ], ReportComponent);
    return ReportComponent;
    var _a;
}());

//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_order_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__daily_report_daily_report_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__monthly_report_monthly_report_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__periodical_report_periodical_report_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reports_routing_module__ = __webpack_require__(282);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ReportModule = (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__reports_routing_module__["a" /* ReportRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__report_component__["a" /* ReportComponent */],
                __WEBPACK_IMPORTED_MODULE_4__daily_report_daily_report_component__["a" /* DailyReportComponent */],
                __WEBPACK_IMPORTED_MODULE_5__monthly_report_monthly_report_component__["a" /* MonthlyReportComponent */],
                __WEBPACK_IMPORTED_MODULE_6__periodical_report_periodical_report_component__["a" /* PeriodicalReportComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__main_order_service__["a" /* OrderService */]]
        })
    ], ReportModule);
    return ReportModule;
}());

//# sourceMappingURL=report.module.js.map

/***/ }),

/***/ 166:
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

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/main.module": [
		157
	],
	"./report/report.module": [
		165
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 255;


/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(166);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', loadChildren: './main/main.module#MainModule' },
    { path: 'reports', loadChildren: './report/report.module#ReportModule' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(38);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "cssClass", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(402),
            styles: [__webpack_require__(341)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu_module__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__report_report_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__(266);
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
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__menu_menu_module__["a" /* MenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__main_main_module__["MainModule"],
                __WEBPACK_IMPORTED_MODULE_8__report_report_module__["ReportModule"],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
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

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_card_room_card_component__ = __webpack_require__(159);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('infoModal'),
        __metadata("design:type", Object)
    ], CustomerInfoComponent.prototype, "infoModal", void 0);
    CustomerInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-customer-info',
            template: "\n    <sm-modal title=\"Checked in Customer Info\" icon=\"user circle outline\" #infoModal>\n        <modal-content>\n\n            <a class=\"ui teal label \">\n                Customer Name: \n            </a>\n              <a class=\"ui orange label\">\n                Tung \n            </a>\n\n        </modal-content>\n        <modal-actions>\n            <button class=\"ui blue button\" (click)=\"hide()\">Close</button>\n        </modal-actions>\n    </sm-modal>\n    ",
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injector */]) === "function" && _a || Object])
    ], CustomerInfoComponent);
    return CustomerInfoComponent;
    var _a;
}());

//# sourceMappingURL=customer-info.component.js.map

/***/ }),

/***/ 271:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
        __metadata("design:type", Object)
    ], CustomerSearchFormComponent.prototype, "roomId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('searchModal'),
        __metadata("design:type", Object)
    ], CustomerSearchFormComponent.prototype, "searchModal", void 0);
    CustomerSearchFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-customer-search-form',
            template: "\n    <sm-modal title=\"Nh\u1EADn Kh\u00E1ch\" icon=\"user circle outline\" #searchModal>\n        <modal-content>\n            <form class=\"ui form\">\n            <div class=\"field\">\n                <label>Nh\u1EADp m\u00E3 s\u1ED1:</label>\n                <input type=\"text\" name=\"customerId\" id=\"customerId\" placeholder=\"M\u00E3 S\u1ED1 gi\u1EA5y t\u1EDD c\u1EE7a kh\u00E1ch ....\" [(ngModel)]=\"customerId\">\n            </div>\n            </form>\n        </modal-content>\n        <modal-actions>\n            <button type=\"submit\" class=\"ui button primary\" \n                    [class.disabled]=\"customerId==''\" \n                    (click)=\"hide();\"\n                    [routerLink]=\"['/customer-check-in', customerId, roomId]\" skipLocationChange>T\u00ECm</button>\n        </modal-actions>\n    </sm-modal>\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], CustomerSearchFormComponent);
    return CustomerSearchFormComponent;
}());

//# sourceMappingURL=customer-search-form.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hotel_service_hotel_service_component__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var mainRoutes = [
    {
        path: 'main',
        component: __WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */]
        // children: [
        //     {
        //         path: 'orders/:id',
        //         component: OrderComponent
        //     },
        //     {
        //         path: 'customer-check-in/:customerId/:roomId',
        //         component: CustomerComponent
        //     },
        //     {
        //         path: 'hotel-services/:orderId',
        //         component: HotelServiceComponent
        //     }
        // ]
    },
    {
        path: 'customer-check-in/:customerId/:roomId',
        component: __WEBPACK_IMPORTED_MODULE_4__customer_customer_component__["a" /* CustomerComponent */]
    },
    {
        path: 'orders/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__order_order_component__["a" /* OrderComponent */]
    },
    {
        path: 'hotel-services/:orderId',
        component: __WEBPACK_IMPORTED_MODULE_5__hotel_service_hotel_service_component__["a" /* HotelServiceComponent */]
    }
];
var MainRoutingModule = (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(mainRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());

//# sourceMappingURL=main-routing.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order(obj) {
        this.customerId = obj && obj.customerId || '';
        this.roomId = obj && obj.roomId || '';
        this.checkInTime = obj && obj.checkInTime || new Date().toString();
        this.checkOutTime = obj && obj.checkOutTime || '';
        this.services = obj && obj.services || [];
        this.discount = obj && obj.discount || 0.0;
        this.total = obj && obj.total || 0.0;
    }
    Order.prototype.finalizeRoomPrice = function (days, hours, minutes) {
        var price = this.services[0].price;
        if (days <= 0) {
            if (hours > 4) {
                return price;
            }
            else if (hours > 3) {
                return price = 210000;
            }
            else if (hours > 2) {
                return price = 190000;
            }
            else if (hours > 1) {
                return price = 150000;
            }
            else {
                return price = 100000;
            }
        }
        else {
            return price *= days;
        }
    };
    Order.prototype.calculateTotal = function (days, hours, minutes) {
        var total = this.finalizeRoomPrice(days, hours, minutes);
        for (var index = 1; index < this.services.length; index++) {
            var service = this.services[index];
            total += service.price * service.quantity;
        }
        return total;
    };
    return Order;
}());

//# sourceMappingURL=order.model.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(38);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */]) === "function" && _a || Object)
    ], RoomListComponent.prototype, "rooms", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* HostBinding */])('attr.class'),
        __metadata("design:type", Object)
    ], RoomListComponent.prototype, "cssClass", void 0);
    RoomListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-room-list',
            template: __webpack_require__(408),
            styles: [__webpack_require__(347)]
        }),
        __metadata("design:paramtypes", [])
    ], RoomListComponent);
    return RoomListComponent;
    var _a;
}());

//# sourceMappingURL=room-list.component.js.map

/***/ }),

/***/ 275:
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

/***/ 276:
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

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_service__ = __webpack_require__(161);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__(409),
            styles: [__webpack_require__(348)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__menu_service__["a" /* MenuService */]) === "function" && _a || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a;
}());

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(26);
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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
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

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_item_model__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU; });

var MENU = [
    new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Home', ''),
    new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Manage', '/manage', [
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Rooms', '/room'),
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Services', '/room')
    ]),
    new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Reports', '/reports', [
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Daily Report', 'daily-report'),
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Monthly Report', 'monthly-report'),
        new __WEBPACK_IMPORTED_MODULE_0__menu_item_model__["a" /* MenuItem */]('Periodical Report', 'periodical-report')
    ])
];
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthlyReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MonthlyReportComponent = (function () {
    function MonthlyReportComponent() {
    }
    MonthlyReportComponent.prototype.ngOnInit = function () {
    };
    MonthlyReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-monthly-report',
            template: __webpack_require__(412),
            styles: [__webpack_require__(351)]
        }),
        __metadata("design:paramtypes", [])
    ], MonthlyReportComponent);
    return MonthlyReportComponent;
}());

//# sourceMappingURL=monthly-report.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodicalReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeriodicalReportComponent = (function () {
    function PeriodicalReportComponent() {
    }
    PeriodicalReportComponent.prototype.ngOnInit = function () {
    };
    PeriodicalReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app-periodical-report',
            template: __webpack_require__(413),
            styles: [__webpack_require__(352)]
        }),
        __metadata("design:paramtypes", [])
    ], PeriodicalReportComponent);
    return PeriodicalReportComponent;
}());

//# sourceMappingURL=periodical-report.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__daily_report_daily_report_component__ = __webpack_require__(163);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var reportRoutes = [
    {
        path: 'reports',
        component: __WEBPACK_IMPORTED_MODULE_2__report_component__["a" /* ReportComponent */]
        // children: [
        //     {
        //         path: 'daily-report',
        //         component: DailyReportComponent
        //     },
        //     {
        //         path: 'montly-report',
        //         component: MonthlyReportComponent
        //     },
        //     {
        //         path: 'periodical-report',
        //         component: PeriodicalReportComponent
        //     }
        // ]
    },
    {
        path: 'reports/daily-report',
        component: __WEBPACK_IMPORTED_MODULE_3__daily_report_daily_report_component__["a" /* DailyReportComponent */]
    }
];
var ReportRoutingModule = (function () {
    function ReportRoutingModule() {
    }
    ReportRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(reportRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], ReportRoutingModule);
    return ReportRoutingModule;
}());

//# sourceMappingURL=reports-routing.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "input[type=\"text\"]:disabled {\r\n    color: blue !important;\r\n    font-weight: bolder;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".occupied {\r\n    background-color: lightcoral !important;\r\n}\r\n.dirty {\r\n    background-color: gray !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(38);
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
    OrderService.prototype.removeService = function (orderId, key) {
        this.db.list("/orders/" + orderId + "/services").remove(key);
    };
    OrderService.prototype.updateOrder = function (key, data) {
        this.db.list('/orders').update(key, data);
    };
    OrderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], OrderService);
    return OrderService;
    var _a;
}());

//# sourceMappingURL=order.service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = "<sm-modal title=\"Customer Information.\" #customerModal>\n  <modal-content *ngIf=\"customer\">    \n    <form class=\"ui form\" [formGroup]=\"customerForm\">\n      <div class=\"field\">\n        <div class=\"four fields\">\n          <div class=\"field\">\n            <label for=\"idNumber\">Số CMND/Hộ Chiếu</label>\n            <input type=\"text\" name=\"Số CMND/Hộ Chiếu/...\" \n                  placeholder=\"ID Number\" \n                  [class.error]=\"!customerForm.controls['id'].valid\" \n                  [formControl]=\"customerForm.controls['id']\"\n                  [(ngModel)]=\"customer.id\"\n                  [disabled]=\"doesExist\">\n            <div *ngIf=\"customerForm.controls['id'].hasError('required')&&customerForm.controls['id'].dirty\" \n                  class=\"ui pointing red basic label\">Yêu cầu phải có mã số giấy tờ </div>\n          </div>\n          <div class=\"field\">\n            <label for=\"issueDate\">Ngày Cấp</label>\n            <input type=\"text\" name=\"issueDate\" placeholder=\"Ngày Cấp\" \n                  [class.error]=\"!customerForm.controls['issueDate'].valid\" \n                  [formControl]=\"customerForm.controls['issueDate']\"\n                  [(ngModel)]=\"customer.issueDate\">\n            <div *ngIf=\"customerForm.controls['issueDate'].hasError('required')&&customerForm.controls['issueDate'].dirty\" \n                  class=\"ui pointing red basic label\">Yêu cầu phải có ngày cấp</div>\n             <div *ngIf=\"customerForm.controls['issueDate'].hasError('invalidDate')\" \n                  class=\"ui pointing red basic label\">Ngày cấp phải theo định dạng dd/mm/yyyy (VD: 30/12/2015)</div> \n          </div>\n          <div class=\"field\">\n            <label>Ngày Hết Hạn</label>\n            <input type=\"text\" name=\"expirationDate\" placeholder=\"Ngày Hết Hạn\" \n                    [class.error]=\"!customerForm.controls['expirationDate'].valid\"\n                    [formControl]=\"customerForm.controls['expirationDate']\"\n                    [(ngModel)]=\"customer.expirationDate\">\n            <div *ngIf=\"customerForm.controls['expirationDate'].hasError('required')&&customerForm.controls['expirationDate'].dirty\"\n                    class=\"ui pointing red basic label\">Yêu cầu phải có ngày hết hạn</div>\n             <div *ngIf=\"customerForm.controls['expirationDate'].hasError('invalidDate')\" \n                    class=\"ui pointing red basic label\">Ngày hết hạn phải theo định dạnh dd/mm/yyyy (VD: 30/12/2015)</div> \n\n          </div>\n          <div class=\"field\">\n            <label>Quốc Gia Cấp: </label>\n          \n              <input type=\"text\" placeholder=\"Quốc Gia Cấp\" \n                [formControl]=\"customerForm.controls['issueCountry']\"\n                [class.error]=\"!customerForm.controls['issueCountry'].valid\"\n                [(ngModel)]=\"customer.issueCountry\">\n            <div *ngIf=\"customerForm.controls['issueCountry'].hasError('required')&&customerForm.controls['issueCountry'].dirty\" \n                  class=\"ui pointing red basic label\">Yêu cầu nhập quốc gia cấp </div>\n          </div>\n          <div class=\"field\">\n            <label>Thành Phố Cấp:</label>\n                <input type=\"text\" placeholder=\"Thành Phố Cấp\" \n                [formControl]=\"customerForm.controls['issueCity']\"\n                [class.error]=\"!customerForm.controls['issueCity'].valid\"\n                [(ngModel)]=\"customer.issueCity\">\n          </div>\n        </div>\n      </div>\n      <div class=\"field\">\n        <label>Tên</label>\n        <div class=\"two fields\">\n          <div class=\"field\">\n            <input type=\"text\" name=\"firstName\" placeholder=\"Tên\" \n                  [class.error]=\"!customerForm.controls['firstName'].valid\" \n                  [formControl]=\"customerForm.controls['firstName']\"\n                  [(ngModel)]=\"customer.firstName\">\n            <div *ngIf=\"customerForm.controls['firstName'].hasError('required')&&customerForm.controls['firstName'].dirty\" \n                  class=\"ui pointing red basic label\">Yêu cầu phải có tên</div>\n          </div>\n          <div class=\"field\">\n            <input type=\"text\" name=\"lastName\" placeholder=\"Họ\" \n                  [class.error]=\"!customerForm.controls['lastName'].valid\"\n                  [formControl]=\"customerForm.controls['lastName']\"\n                  [(ngModel)]=\"customer.lastName\">\n            <div *ngIf=\"customerForm.controls['lastName'].hasError('required')&&customerForm.controls['lastName'].dirty\" \n                  class=\"ui pointing red basic label\">Yêu cầu phải có họ</div>\n          </div>\n        </div>\n        <div class=\"field\">\n          <label>Địa Chỉ:</label>\n          <input type=\"text\" name=\"street address\" placeholder=\"Địa Chỉ\" \n                [class.error]=\"!customerForm.controls['streetAddress'].valid\"\n                [formControl]=\"customerForm.controls['streetAddress']\"\n                [(ngModel)]=\"customer.streetAddress\">\n        </div>\n        <div class=\"two fields\">\n          <div class=\"field\">\n            <label>Thành Phố</label>\n            <input type=\"text\" placeholder=\"Thành Phố\" \n                [formControl]=\"customerForm.controls['city']\"\n                [class.error]=\"!customerForm.controls['city'].valid\"\n                [(ngModel)]=\"customer.city\">\n          </div>\n          <div class=\"field\">\n            <label>Quốc Gia</label>\n            <input type=\"text\" placeholder=\"Quốc Gia\" \n                [formControl]=\"customerForm.controls['country']\"\n                [class.error]=\"!customerForm.controls['country'].valid\"\n                [(ngModel)]=\"customer.country\">\n            <div *ngIf=\"customerForm.controls['country'].hasError('required')&&customerForm.controls['country'].dirty\" \n                class=\"ui pointing red basic label\">Country is required</div>\n          </div>\n        </div>\n      </div>\n    </form>\n    <!-- <div class=\"ui message info\">{{ customerForm.value | json }} DOES EXIST{{ doesExist }}</div> -->\n  </modal-content>\n  <modal-actions>\n    <button class=\"ui button primary\" \n            (click)=\"onSubmit(customerForm.value);customerModal.hide()\"\n            [class.disabled]=\"!customerForm.valid && !doesExist\">Nhận Khách</button>\n  </modal-actions>\n</sm-modal>\n"

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

module.exports = "<sm-modal title=\"Add Service\" icon=\"user circle outline\" #hotelServiceModal>\n  <modal-content>\n\n    <select [(ngModel)]=\"service\" class=\"ui fluid search selection dropdown\">\n    <option *ngFor=\"let s of services\" [ngValue]=\"s\">{{ s.description }}</option>\n  </select >\n  <br/>\n  <div class=\"ui right labeled input\">\n    <div class=\"ui label\">Số Lượng</div>\n    <input type=\"text\" [(ngModel)]=\"service.quantity\">\n    <div class=\"ui basic label\">{{ service.unit}}</div>\n  </div>\n  <div class=\"ui right labeled input\">\n    <div class=\"ui label\">Giá</div>\n    <input type=\"text\" [(ngModel)]=\"service.price\">\n  </div>\n  </modal-content>\n  <modal-actions>\n    <button class=\"ui blue button\" (click)=\"add()\">Thêm</button>\n  </modal-actions>\n</sm-modal>"

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

module.exports = "<app-room-list [rooms]=\"rooms\"></app-room-list>\r\n"

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

module.exports = "<sm-modal title=\"Hoang Long Hotel - 40 Hau Giang Street, Ward 4, Tan Binh District, HCMC, VN\" #orderModal>\n  <modal-content>\n    <h2 class=\"ui center aligned icon header\">\n      <i class=\"money icon\"></i> Hóa Đơn Tạm Tính\n    </h2>\n    <div class=\"ui large header\">Thông Tin Khách Hàng:</div>\n    <p>Tên: {{ (customer | async)?.firstName }} {{ (customer | async)?.lastName }}</p>\n    <p>Địa Chỉ: {{ (customer | async)?.streetAddress }} - {{ (customer | async)?.city }} - {{ (customer | async)?.country }}\n    </p>\n    <p>Số CMND/Hộ Chiếu/Thẻ Tạm Trú: {{ (customer | async)?.id }} - Ngày Cấp: {{ (customer | async)?.issueDate }} - Ngày Hết Hạn: {{ (customer\n      | async)?.expirationDate }} </p>\n    <p>Nơi Cấp: {{ (customer | async)?.issueCity }} - {{ (customer | async)?.issueCountry }} </p>\n      <p>Nhận Phòng Lúc: {{ (order | async)?.checkInTime }}</p>\n      <p>Thời gian đã ở : {{ day }} ngày, {{ hour }} giờ, and {{ minutes }} phút\n        <table class=\"ui teal table\">\n          <thead>\n            <tr>\n              <th>Tên Dịch Vụ</th>\n              <th class=\"right aligned\">Giá</th>\n              <th class=\"right aligned\">Số Lượng/Đơn Vị</th>\n              <th class=\"right aligned\">Thành Tiền</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let service of services | async; let i = index; \">\n              <ng-template #other_content>\n                <td>{{ service.description }}</td>\n                <td class=\"right aligned\" *ngIf=\"price\">{{ price | number}}</td>\n                <td class=\"right aligned\" *ngIf=\"quantity\">{{ quantity }} {{ unit }}</td>\n                <td class=\"right aligned\" *ngIf=\"price\">{{ price * quantity | number}} <i class=\"ui red window close icon\" (click)=\"remove(service.$key)\"></i></td>\n              </ng-template>\n              <ng-container *ngIf=\"i > 0;else other_content\">\n                <td>{{ service.description }}</td>\n                <td class=\"right aligned\">{{ service.price | number}}</td>\n                <td class=\"right aligned\">{{ service.quantity }} {{ service.unit }}</td>\n                <td class=\"right aligned\">{{ service.price * service.quantity | number}} <i class=\"ui red window close icon\" (click)=\"remove(service.$key)\"></i></td>\n              </ng-container>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <th></th>\n              <th></th>\n              <th class=\"right aligned\">\n                <h4 class=\"ui teal header\">Giảm Giá</h4>\n              </th>\n              <th class=\"right aligned\">\n                <div class=\"ui right labeled input\">\n                  <input type=\"text\" placeholder=\"Nhập số tiền..\" [(ngModel)]=\"discount\">\n                  <div class=\"ui basic label\">\n                    $\n                  </div>\n                </div>\n              </th>\n            </tr>\n            <tr>\n              <th></th>\n              <th></th>\n              <th class=\"right aligned\">\n                <h4 class=\"ui teal header\">Tổng Cộng</h4>\n              </th>\n              <th class=\"right aligned\">\n                <h4 class=\"ui teal header\" *ngIf=\"total\">{{ total - discount | number}} VNĐ</h4>\n              </th>\n            </tr>\n          </tfoot>\n        </table>\n  </modal-content>\n  <modal-actions>\n    <button class=\"ui blue button\" (click)=\"close()\">Checkout</button>\n  </modal-actions>\n</sm-modal>"

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" [class.occupied]=\"room.isOccupied\" [class.dirty]=\"room.status==2\">\n  <div class=\"ui huge header aligned center\">\n    Phòng: {{ room.name }}\n  </div>\n  <div class=\"ui violet header meta\">\n    Loại Phòng: {{ room.type == 1 ? 'Phòng Đơn' : 'Phòng Đôi' }} <img class=\"right floated mini ui image\" src=\"assets/images/{{room.imgUrl}}\">\n  </div>\n  <div class=\"ui blue header\">\n    Tình Trạng: <span class=\"ui basic green label right floated\" [class.green]=\"!room.isOccupied\" [class.red]=\"room.isOccupied\"> {{ room.isOccupied ? 'Có Khách' : 'Trống' }}</span>\n  </div>\n  <div class=\"ui pink header\">\n    Tình trạng vệ sinh: <span class=\"ui basic green label right floated\" [class.blue]=\"room.status==2\"> {{ room.status == 1 ? 'Sạch' : 'Dơ' }}</span>\n  </div>\n</div>\n<div *ngIf=\"!room.isOccupied && room.status == 1\" class=\"ui bottom attached button blue\" (click)=\"showCustomerSearchModal();setSelected(room)\">\n  <i class=\"add icon\"></i> Nhận Phòng\n</div>\n<div *ngIf=\"room.isOccupied\" class=\"ui two bottom attached buttons\">\n  <button class=\"ui button green\" (click)=\"servicePopup.show($event, {position: 'bottom center'})\">Menu Phụ</button>\n  <div class=\"ui red button\" (click)=\"checkOut(room)\">Trả Phòng</div>\n</div>\n<div *ngIf=\"!room.isOccupied && room.status==2\" class=\"ui bottom attached button orange\" (click)=\"clean(room)\">\n  <i class=\"paint brush icon\"></i> Phòng Đã Dọn\n</div>\n<app-customer-search-form [roomId]=\"room.$key\" #searchForm></app-customer-search-form>\n\n<sm-popup #customerPopup>\n  <div class=\"ui icon buttons\">\n    <button class=\"ui basic button orange\">View</button>\n    <button class=\"ui basic button teal\">Edit</button>\n  </div>\n</sm-popup>\n\n<sm-popup #servicePopup>\n  <div class=\"ui icon buttons\">\n    <!-- <button class=\"ui button green\" [routerLink]=\"['/orders',room.orderId]\" skipLocationChange>Xem Hóa Đơn Tạm Thời/</button> -->\n    <button class=\"ui button blue\" [routerLink]=\"['/hotel-services',room.orderId]\" skipLocationChange>Thêm Dịch Vụ</button>\n    <button class=\"ui button violet\" (click)=\"markAsDirtyOrClean(room)\">{{ room.status == 1 ? 'Báo Phòng Dơ' : 'Báo Phòng Sạch'}}</button>\n  </div>\n</sm-popup>"

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

module.exports = "<app-room-card *ngFor=\"let room of rooms | async\" [room]=\"room\"></app-room-card>\n"

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui fixed inverted menu\">\n  <div class=\"ui container\">\n    <a href=\"#\" class=\"header item\">\n      Hoang  Long  Hotel  Manager  Application\n    </a>\n    <ng-container *ngFor=\"let menuItem of menu\">\n    <a *ngIf=\"!menuItem.subMenu\" [routerLink]=\"menuItem.url\" class=\"item\">{{ menuItem.name }}</a>\n    <div *ngIf=\"menuItem.subMenu\" class=\"ui simple dropdown item\">\n      {{ menuItem.name }} <i class=\"dropdown icon\"></i>\n      <div class=\"menu\">\n        <a *ngFor=\"let subItem of menuItem.subMenu\" class=\"item\" [routerLink]=\"[menuItem.url]\">{{ subItem.name }}</a>\n      </div>\n    </div>\n    </ng-container>\n  </div>\n</div>"

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

module.exports = "<p>\n  daily-report works!\n</p>\n"

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports = "<p>\n  monthly-report works!\n</p>\n"

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

module.exports = "<p>\n  periodical-report works!\n</p>\n"

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

module.exports = "<p>\n  report works!\n</p>\n"

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(38);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], CustomerService);
    return CustomerService;
    var _a;
}());

//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(38);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], RoomService);
    return RoomService;
    var _a;
}());

//# sourceMappingURL=room.service.js.map

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(256);


/***/ })

},[680]);
//# sourceMappingURL=main.bundle.js.map