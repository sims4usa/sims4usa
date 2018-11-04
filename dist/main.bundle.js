webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "\n@import url(https://fonts.googleapis.com/css?family=Montserrat);\n/* @import \"node_modules/bootstrap/scss/bootstrap\"; */\n.float{\n\tposition:fixed;\n\twidth:60px;\n\theight:60px;\n\tbottom:40px;\n\tright:40px;\n\tbackground-color:#25d366;\n\tcolor:#FFF;\n\tborder-radius:50px;\n\ttext-align:center;\n  font-size:30px;\n\t-webkit-box-shadow: 2px 2px 3px #999;\n\t        box-shadow: 2px 2px 3px #999;\n  z-index:100;\n}\n.my-float{\n\tmargin-top:16px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n            <router-outlet></router-outlet>\n            <a href=\"https://api.whatsapp.com/send?phone=18028706770&text=Hi%20I'm%20interested%20to%20buying%20sim-card%20please.\" class=\"float\" target=\"_blank\">\n                <i class=\"fab fa-whatsapp my-float\"></i>\n                </a>\n                <br>\n                <br>\n                <br>\n                <br>\n\n                \n<app-footer></app-footer>\n      \n      \n          \n\n\n\n          \n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Import the DataService
// import { DataService } from './data.service';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_page_about_page_component__ = __webpack_require__("./src/app/pages/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_page_home_page_component__ = __webpack_require__("./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register_component__ = __webpack_require__("./src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_store_store_component__ = __webpack_require__("./src/app/pages/store/store.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Import the Http Module and our Data Service

// import { DataService } from './data.service';
// import { PostsService } from './posts.service';



// import { PostsComponent } from "./pages/posts/posts.component";




var routes = [
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_8__pages_home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: "about", component: __WEBPACK_IMPORTED_MODULE_7__pages_about_page_about_page_component__["a" /* AboutPageComponent */] },
    // { path: "posts", component: PostsComponent },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_9__pages_register_register_component__["a" /* RegisterComponent */] },
    { path: "store", component: __WEBPACK_IMPORTED_MODULE_12__pages_store_store_component__["a" /* StoreComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_8__pages_home_page_home_page_component__["a" /* HomePageComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_page_about_page_component__["a" /* AboutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
                // PostsComponent,
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_store_store_component__["a" /* StoreComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "@media (min-width: 350px) {  \n \n.footer{\n    bottom: 0;\n    /* height: 500px; */\n    min-height:20%;\n}\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- FOOTER -->\n<footer class=\"footer px-4\">\n\n  <p>&copy; 2018 Sims 4 Usa Company, Inc &middot; </p>\n  <p class=\"float-left\">\n    <a href=\"#\">Back to top</a>\n  </p>\n</footer>\n\n<!--  -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "\n  .navbar {\n    /* min-height: 50px; */\n    /* max-height: 70px; */\n  \n    font-size: 18px !important;\n    line-height: 1.42857143 !important;\n    letter-spacing: 4px;\n    border-radius: 0;\n    /* height: 75px; */\n    /* max-height: 60px; */\n   min-height: 100px;\n    background-color: #ffffff;\n    font-weight: bold;\n}\n\n.navbar-collapse {\n  padding-right: 15px;\n  /* padding-left: 15px; */\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n\n.logo {\n  width: 149px;\n  height: 36px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-left: 17.5px;\n\n  \n}\n\n.sims {\n  \n  -webkit-transform: rotate(-720deg);\n  \n          transform: rotate(-720deg);\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.5px;\n  text-align: center;\n  color: #393939;\n  top: 50%;\n}\n\n.about {\n\n  -webkit-transform: rotate(-720deg);\n\n          transform: rotate(-720deg);\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.1px;\n  text-align: center;\n  color: #393939;\n}\n\n.contact {\n \n  -webkit-transform: rotate(-720deg);\n \n          transform: rotate(-720deg);\n  font-family: Montserrat;\n  font-size: 16px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: 0.1px;\n  text-align: center;\n  color: #393939;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <a class=\"navbar-brand ml-5\" href=\"#\"><input  type=\"image\"src=\"../../assets/logo@3x.jpg\"\n    srcset=\"img/logo@2x.jpg 2x,\n            img/logo@3x.jpg 3x\"\n    class=\"logo\"></a>\n\n        \n \n    <button class=\"navbar-toggler navbar-dark \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" style=\"background-color:#ffc410;\"  aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon \"></span>\n    </button>\n  \n    \n    <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n        </li>\n\n        <li class=\"nav-item px-4\">\n            <a class=\"nav-link sims \" style=\"background-color:#ffff;\" [routerLink]=\"['/store']\">  <b>SIMS</b>   </a>\n          </li>\n\n        <li class=\"nav-item px-4\">\n          <a class=\"nav-link  about\" style=\"background-color:#ffff;\" [routerLink]=\"['/about']\" >   ABOUT   </a>\n        </li>\n      \n        <li class=\"nav-item px-4 \">\n            <a class=\"nav-link  contact\" style=\"background-color:#ffff;\" href=\"#contacts\">  CONTACT  </a>\n          </li>\n  \n        \n      </ul>\n    \n    </div>\n    \n  </nav>\n  <br>\n  <br>\n  <br>\n  \n \n  \n  \n\n\n\n\n\n\n\n\n\n<!-- \n\n\n\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\"><input type=\"image\" height=\"80\"  src=\"../../assets/1j+ojl1FOMkX9WypfBe43D6kiveCqBBInxnEwXs1M3EMoAJtlSIsg...Vt8fw7.png\" class=\"d-inline-block img-responsive\"/>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" style=\"background-color:#f8f9fa;\"  aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  \n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" style=\"background-color:#f8f9fa;\" [routerLink]=\"['/about']\" >   About   </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" style=\"background-color:#f8f9fa;\" [routerLink]=\"['/store']\">  Store   </a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" style=\"background-color:#f8f9fa;\" href=\"#form4-4v\">  Contact  </a>\n        </li>\n\n      \n    </ul>\n  \n  </div>\n  \n</nav>\n<br>\n<br>\n -->\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as $ from 'jquery';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n\n<div id=\"about\" class=\"container text-center\">\n  <div class=\"row\">\n    <!-- <hr class=\"featurette-divider\"> -->\n\n    <div class=\"col-sm-8 col-lg-12\">\n      <input type=\"image\" src=\"../../assets/logo@3x.png\" srcset=\"img/logo@2x.jpg 2x,\n                img/logo@3x.jpg 3x\" class=\"logo\">\n      <br>\n      <h2>About As</h2>\n      <br>\n\n      <h4> We are company that provides cellular services within the United States of America.\n        <br> Our uniqueness lies in the following:\n        <br> The packages are very worthwhile\n        <br> Final price without surprises and additions - everything is known in advance\n        <br> Shipping to all over the world up to 3 business days</h4>\n      <br>\n    </div>\n    <div class=\"col-sm-4\">\n      <span class=\"glyphicon glyphicon-signal logo\"></span>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-page',
            template: __webpack_require__("./src/app/pages/about-page/about-page.component.html"),
            styles: [__webpack_require__("./src/app/pages/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.css":
/***/ (function(module, exports) {

module.exports = "/*\n####################################################\nM E D I A  Q U E R I E S\n####################################################\n*/\n\n/*\n::::::::::::::::::::::::::::::::::::::::::::::::::::\nBootstrap 4 breakpoints\n*/\n\n/* Small devices (landscape phones, 544px and up) */\n\n@media (min-width: 350px) {\n  /* body{\n        line-height: 2; \n      } */\n  .carousel-inner img {\n    width: 100%;\n    /* margin:center; */\n    min-height: 240px;\n    max-height: 240px;\n  }\n  .Sim-card-for-USA {\n    width: 120px;\n    height: 61px;\n    font-family: Montserrat;\n    font-size: 26.9px;\n    font-weight: 500;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.19;\n    letter-spacing: normal;\n    color: #ffffff;\n    color: var(--white);\n    bottom: 0;\n    top: 10%;\n  }\n  .You-will-get-the-sim {\n    width: 180px;\n    height: 30px;\n    font-family: Montserrat;\n    font-size: 11px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.6;\n    letter-spacing: normal;\n    color: #ffffff;\n    color: var(--white);\n    bottom: 0;\n    top: 38%;\n  }\n  .Rectangle-6-Copy-2 {\n    width: 10px;\n    height: 5px;\n    border-radius: 20.6px;\n    top: 68%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    max-height: 20px;\n    max-width: 80px;\n    /* background-size: 20% 20%; */\n  }\n}\n\n/* Medium devices (tablets, 768px and up) */\n\n@media (min-width: 768px) {\n}\n\n/* Large devices (desktops, 992px and up) */\n\n@media (min-width: 992px) {\n  .Sim-card-for-USA {\n    width: 300px;\n    height: 120px;\n    font-family: Montserrat;\n    font-size: 60px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.13;\n    letter-spacing: norma1pxl;\n    color: #ffffff;\n    color: var(--white);\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    bottom: 0;\n    top: 30%;\n  }\n\n  .You-will-get-the-sim {\n    width: 350px;\n    height: 100px;\n    font-family: Montserrat;\n    font-size: 20px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.4;\n    letter-spacing: 0.5px;\n    color: #ffffff;\n    color: var(--white);\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    bottom: 0;\n    top: 50%;\n  }\n\n  .Rectangle-6-Copy-2 {\n    font-family: Montserrat;\n    font-style: bold;\n    font-weight: 700;\n    src: local(\"Montserrat-Bold\"),\n      url(http://fonts.gstatic.com/s/montserrat/v6/IQHow_FEYlDC4Gzy_m8fcvEr6Hm6RMS0v1dtXsGir4g.ttf)\n        format(\"truetype\");\n\n    font-size: 18px;\n    width: 220px;\n    height: 42px;\n    border-radius: 23.6px;\n    background-color: #ffc410;\n    color: #2424cf;\n    top: 63%;\n\n    line-height: 1.13;\n    letter-spacing: normal;\n\n    -webkit-transform: translateY(-50%);\n\n            transform: translateY(-50%);\n  }\n  .carousel-inner img {\n    width: 100%;\n    margin: center;\n    min-height: 300px;\n    max-height: 500px;\n  }\n}\n\n/* Extra large devices (large desktops, 1200px and up) */\n\n@media (min-width: 1200px) {\n  .Sim-card-for-USA {\n    width: 300px;\n    height: 120px;\n    font-family: Montserrat;\n    font-size: 60px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.13;\n    letter-spacing: norma1pxl;\n    color: #ffffff;\n    color: var(--white);\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    bottom: 0;\n    top: 30%;\n  }\n\n  .You-will-get-the-sim {\n    width: 350px;\n    height: 100px;\n    font-family: Montserrat;\n    font-size: 20px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.4;\n    letter-spacing: 0.5px;\n    color: #ffffff;\n    color: var(--white);\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    bottom: 0;\n    top: 50%;\n  }\n\n  .Rectangle-6-Copy-2 {\n    font-family: Montserrat;\n    font-style: bold;\n    font-weight: 700;\n    src: local(\"Montserrat-Bold\"),\n      url(http://fonts.gstatic.com/s/montserrat/v6/IQHow_FEYlDC4Gzy_m8fcvEr6Hm6RMS0v1dtXsGir4g.ttf)\n        format(\"truetype\");\n\n    font-size: 18px;\n    width: 220px;\n    height: 42px;\n    border-radius: 23.6px;\n    background-color: #ffc410;\n    color: #2424cf;\n    top: 63%;\n\n    max-height: 42px;\n    max-width: 220px;\n    line-height: 1.13;\n    letter-spacing: normal;\n\n    -webkit-transform: translateY(-50%);\n\n            transform: translateY(-50%);\n  }\n  .carousel-inner img {\n    width: 100%;\n    margin: center;\n    min-height: 300px;\n    max-height: 500px;\n  }\n}\n\n/* \nbody {\n  background-color: #ffffff;\n  font-family: \"Roboto\", sans-serif;\n \n} */\n\n.row {\n  min-height: 35vh;\n}\n\n.card {\n  border: 0;\n  border-radius: 0px;\n  -webkit-box-shadow: 0 3px 0px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 3px 0px 0 rgba(0, 0, 0, 0.08);\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  padding: 2.25rem 0;\n  position: relative;\n  will-change: transform;\n}\n\n.card:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0%;\n  height: 5px;\n  background-color: #57e2b2;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.card:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  -webkit-box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.08);\n}\n\n.card:hover:after {\n  width: 100%;\n}\n\n.card .card-header {\n  background-color: white;\n  padding-left: 2rem;\n  border-bottom: 0px;\n}\n\n.card .card-title {\n  margin-bottom: 1rem;\n}\n\n.card .card-block {\n  padding-top: 0;\n}\n\n.card .list-group-item {\n  border: 0px;\n  padding: 0.25rem;\n  color: #808080;\n  font-weight: 300;\n}\n\n.display-2 {\n  font-size: 7rem;\n  letter-spacing: -0.5rem;\n}\n\n.display-2 .currency {\n  font-size: 2.75rem;\n  position: relative;\n  font-weight: 400;\n  top: -45px;\n  letter-spacing: 0px;\n}\n\n.display-2 .period {\n  font-size: 1rem;\n  color: #b3b3b3;\n  letter-spacing: 0px;\n}\n\n.btn {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #a6a6a6;\n  border-radius: 0;\n  padding: 0.75rem 1.25rem;\n  letter-spacing: 1px;\n}\n\n.btn-gradient {\n  background-color: #f2f2f2;\n  -webkit-transition: background 0.3s ease-in-out;\n  transition: background 0.3s ease-in-out;\n}\n\n.btn-gradient:hover {\n  color: white;\n  background-color: #57e2b2;\n}\n\n/* body{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif !important;\n    background: black;\n} */\n\nsection {\n  width: 100%;\n  height: 100vh;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 140px 0;\n}\n\n.card {\n  position: relative;\n  max-width: 300px;\n  height: auto;\n  border-radius: 40px;\n  margin: 0 auto;\n  padding: 40px 20px;\n  -webkit-box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.2), 0 20px 50px rgba(0, 0, 0, 0.5);\n          box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.2), 0 20px 50px rgba(0, 0, 0, 0.5);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  overflow: hidden;\n}\n\n.card:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.col-sm-4:nth-child(1) .card,\n.col-sm-4:nth-child(1) .card .title .fa-telegram-plane {\n  background: linear-gradient(-45deg, #f403d1, #64b5f6);\n}\n\n.col-sm-4:nth-child(2) .card,\n.col-sm-4:nth-child(2) .card .title .fas {\n  background: linear-gradient(-45deg, #ffec61, #f321d7);\n}\n\n.col-sm-4:nth-child(3) .card {\n  background: linear-gradient(-45deg, #24ff72, #9a4eff);\n}\n\n.card:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 40%;\n  background: rgba(255, 255, 255, 0.1);\n  z-index: 1;\n  -webkit-transform: skewY(-5deg) scale(1.5);\n          transform: skewY(-5deg) scale(1.5);\n}\n\n.title .fa-telegram-plane {\n  color: #fff;\n  font-size: 60px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 100px;\n  -webkit-box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);\n}\n\n.title .fas {\n  color: #fff;\n  font-size: 60px;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 100px;\n  -webkit-box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);\n}\n\n.title h1 {\n  position: relative;\n  margin: 20px 0 0;\n  padding: 0;\n  color: #fff;\n  font-size: 28px;\n  z-index: 2;\n}\n\n.price {\n  position: relative;\n  z-index: 2;\n}\n\n.price h3 {\n  margin: 0;\n  padding: 20px 0;\n  color: #fff;\n  font-size: 60px;\n}\n\n.option {\n  position: relative;\n  z-index: 2;\n}\n\n.option ul {\n  margin: 0;\n  padding: 0;\n}\n\n.option ul li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: #fff;\n  font-size: 16px;\n}\n\n.card a {\n  position: relative;\n  z-index: 2;\n  background: #fff;\n  border-radius: 40px;\n  width: 150px;\n  height: 40px;\n  line-height: 40px;\n  display: block;\n  text-align: center;\n  margin: 20px auto 0;\n  font-size: 16px;\n  cursor: pointer;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n\n.cord a:hover {\n  text-decoration: none;\n}\n\n.text-middle {\n  font-family: Montserrat;\n  font-size: 20px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.4;\n  letter-spacing: 0.5px;\n}\n\n/* .Sim-card-for-USA {\n    width: 300px;\n    height: 120px;\n    font-family: Montserrat;\n    font-size: 60px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.13;\n    letter-spacing: norma1pxl;\n    color: #ffffff;\n    color: var(--white);\n    transform: translateY(-50%);\n    bottom: 0;\n    top: 30%;\n  } */\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\" class=\"carousel slide  \" data-ride=\"carousel\">\n\n    <!-- Indicators -->\n    <ul class=\"carousel-indicators  \">\n        <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n        <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n    </ul>\n\n    <!-- The slideshow -->\n    <div class=\"carousel-inner \">\n        <div class=\"carousel-item active  \">\n\n            <img src=\"../../../assets/bridge.png\" class=\"bridge mh-100\">\n            <div class=\"carousel-caption Sim-card-for-USA text-left\">\n                <p>Sim card for USA</p>\n            </div>\n            <div class=\" carousel-caption You-will-get-the-sim text-left\">\n                <p>You will get the sim card to your home very fast and protactive</p>\n            </div>\n            <a class=\"carousel-caption Rectangle-6-Copy-2 \" href=\"#buy-now\">\n\n                <input type=\"image\" src=\"../../../assets/buy-now@3x.png\" srcset=\"../../../assets/buy-now@2x.png 2x,\n                        ../../../assets/buy-now@3x.png 3x\" class=\"Rectangle-6-Copy-2 img-responsive text-left\" style=\"height: 32px; width:120px\">\n\n            </a>\n\n        </div>\n        <div class=\"carousel-item\">\n            <img src=\"../../../assets/airplane.png\" class=\"Group-3 mh-100\">\n\n            <div class=\"carousel-caption Sim-card-for-USA text-left\">\n                <p>Sim card for USA</p>\n            </div>\n            <div class=\" carousel-caption You-will-get-the-sim text-left\">\n                <p>Worldwide shipping within 3 business days</p>\n            </div>\n            <a class=\"carousel-caption Rectangle-6-Copy-2 \" href=\"#buy-now\">\n\n                <input type=\"image\" src=\"../../../assets/buy-now@3x.png\" srcset=\"img/buy-now@2x.png 2x,\n                                         img/buy-now@3x.png 3x\" class=\"Rectangle-6-Copy-2 img-responsive text-left\" style=\"height: 32px; width:120px\">\n\n            </a>\n        </div>\n        <br>\n        <br>\n        <div class=\"container\">\n\n            <input type=\"image\" src=\"../../../assets/bitmap@3x.png\" class=\"\" style=\"height: 350x; width:100%\">\n        </div>\n\n\n        <!-- <div class=\"carousel-item\">\n            <img src=\"../../../assets/nexus2cee_n6_carriers.png\" alt=\"New York\">\n          </div>\n      \n      <div class=\"carousel-item\">\n        <img src=\"../../../assets/Hollywood.jpg\" alt=\"Hollywood\">\n      </div>\n \n      <div class=\"carousel-item\">\n        <img src=\"../../../assets/lasVegas.jpg\" alt=\"Las vegas\">\n      </div>\n    </div>  -->\n        <!-- Left and right controls -->\n        <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\"></span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\"></span>\n        </a>\n\n    </div>\n\n\n\n\n    <br>\n    <br>\n\n    <div class=\"container\">\n        <div class=\"row justify-content-around text-center\">\n\n            <!-- <section> -->\n\n            <div class=\"container-fluid\" id=\"buy-now\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"card mb-5 text-center\">\n                                <div class=\"title\">\n                                    <i class=\"fab fa-telegram-plane\"></i>\n                                    <h1>Basic</h1>\n                                </div>\n                                <div class=\"price\">\n                                    <h3>\n                                        <sup>$</sup>44.99</h3>\n                                </div>\n                                <div class=\"option\">\n                                    <ul>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> For 1 week - 7 days</li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited hot-spot</li>\n\n                                    </ul>\n                                </div>\n                                <!-- <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U6YV6GH3F96Q6\">Choose Plan</a> -->\n                                <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VU3MFB3QLXJGU\">Choose Plan</a>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"card mb-5 text-center\">\n                                <div class=\"title\">\n                                    <i class=\"fas fa-plane\"></i>\n                                    <h1>Pro</h1>\n                                </div>\n\n                                <div class=\"price\">\n\n                                    <h3>\n                                        <sup>$</sup>84.99</h3>\n                                    <br>\n                                </div>\n                                <div class=\"option\">\n                                    <ul>\n\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i>Unlimited hot spot (3g network) </li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Fast shipping</li>\n\n                                    </ul>\n                                </div>\n                                <br>\n                                <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=T7ZMX9GPLBL9W\">Choose Plan</a>\n                                <br>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"card mb-5 text-center\">\n                                <div class=\"title\">\n                                    <i class=\"fas fa-rocket\"></i>\n                                    <h1>Ultimate</h1>\n                                </div>\n                                <div class=\"price\">\n                                    <h3>\n                                        <sup>$</sup>114.99</h3>\n                                </div>\n                                <div class=\"option\">\n                                    <ul>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                                        <li>\n                                            <i class=\"fas fa-check\"></i> 15GB LTE hot-spot</li>\n                                    </ul>\n                                </div>\n                                <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=49U339MG7BDGS\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n        <br>\n        <br>\n        <br>\n        <br>\n\n\n        <!-- START THE FEATURETTES -->\n\n\n\n        <div class=\"row featurette text-middle\">\n            <div class=\"col-md-7\">\n                <h1 class=\"featurette-heading\">Fast shipping\n                    <span class=\"text-muted\">It'll blow your mind.</span>\n                </h1>\n                <p class=\"lead\">You will get the sim card to your home very fast and protactive with FedEx.</p>\n            </div>\n            <div class=\"col-md-5\">\n                <img class=\"featurette-image img-fluid mx-auto\" src=\"../../../assets/w628.jpg\" alt=\"Generic placeholder image\">\n            </div>\n        </div>\n\n\n        <br>\n        <br>\n\n        <section class=\"mbr-section form4 cid-qv5Aq4h3k3 \" id=\"contacts\" data-rv-view=\"6097\">\n\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"google-map\">\n                            <iframe frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&q=Sims4usa.comnewyork\"\n                                allowfullscreen=\"\"></iframe>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h3 class=\"pb-3 align-left mbr-fonts-style display-2\">\n                            Sims 4 USA\n                        </h3>\n                        <div>\n                            <div class=\"icon-block pb-3\">\n                                <span class=\"icon-block__icon\">\n                                    <span class=\"mbri-letter mbr-iconfont\" media-simple=\"true\"></span>\n                                </span>\n                                <h4 class=\"icon-block__title align-left mbr-fonts-style display-5\">\n                                    Don't hesitate to contact us\n                                </h4>\n                            </div>\n                            <div class=\"icon-contacts pb-3\">\n                                <h5 class=\"align-left mbr-fonts-style display-7\">\n                                    Ready for offers and cooperation\n                                </h5>\n                                <p class=\"mbr-text align-left mbr-fonts-style display-7\">\n                                    Phone:\n                                    <a href=\"tel:18028706770\">+1 (802) 870-6770 </a>\n                                    <br> Email:\n                                    <a href=\"mailto:sales@sims4usa.com\">sales@sims4usa.com</a>\n                                </p>\n                            </div>\n                        </div>\n                        <div data-form-type=\"formoid\">\n                            <div data-form-alert=\"\" hidden=\"\">\n                                Thanks for filling out the form!\n                            </div>\n                            <form class=\"block mbr-form\" action=\"https://mobirise.com/\" method=\"post\" data-form-title=\"Mobirise Form\">\n                                <input type=\"hidden\" data-form-email=\"true\" value=\"VXLYgSpH6nUDU6TDK5Ct5EgKmriaNB6lPq6bS3ws8nwQwLGCtC7foODPVem+sDTFsdncBkUb+oEVUKomD8Wcu42RCpX1GbX+nqPJe7wmP6J40J4KehFzwAckVDNdkcox\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-6 multi-horizontal mb-2\" data-for=\"name\">\n                                        <input type=\"text\" class=\"form-control input\" name=\"name\" data-form-field=\"Name\" placeholder=\"Your Name\" required=\"\" id=\"name-form4-4v\">\n                                    </div>\n                                    <div class=\"col-md-6 multi-horizontal mb-2\" data-for=\"phone\">\n                                        <input type=\"text\" class=\"form-control input\" name=\"phone\" data-form-field=\"Phone\" placeholder=\"Phone\" required=\"\" id=\"phone-form4-4v\">\n                                    </div>\n                                    <div class=\"col-md-12 mb-3\" data-for=\"email\">\n                                        <input type=\"text\" class=\"form-control input\" name=\"email\" data-form-field=\"Email\" placeholder=\"Email\" required=\"\" id=\"email-form4-4v\">\n                                    </div>\n                                    <div class=\"col-md-12 mb-2\" data-for=\"message\">\n                                        <textarea class=\"form-control input\" name=\"message\" rows=\"3\" data-form-field=\"Message\" placeholder=\"Message\" style=\"resize:none\"\n                                            id=\"message-form4-4v\"></textarea>\n                                    </div>\n                                    <div class=\"input-group-btn col-md-12 mb-2 px-4\" style=\"margin-top: 10px;\">\n                                        <button href=\"\" type=\"submit\" class=\"btn btn-primary btn-form display-4\">SEND MESSAGE</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n\n\n\n\n                </div>\n            </div>\n\n        </section>\n\n\n\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__("./src/app/pages/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<div class=\"container\">\n    <div class=\"row justify-content-around\">\n       <form class=\"form-horizontal\">\n              <fieldset>\n                  <!-- Address form -->\n           \n                  <h2>Address</h2>\n           \n                  <!-- full-name input-->\n                  <div class=\"form-group\">\n                      <label class=\"form-label\">Full Name</label>\n                      <div class=\"controls\">\n                          <input id=\"full-name\" name=\"full-name\" type=\"text\" placeholder=\"full name\"\n                          class=\"input-xlarge\">\n                          <p class=\"help-block\"></p>\n                      </div>\n                  </div>\n                  <!-- address-line1 input-->\n                  <div class=\"form-group\">\n                      <label class=\"form-label\">Address Line 1</label>\n                      <div class=\"controls\">\n                          <input id=\"address-line1\" name=\"address-line1\" type=\"text\" placeholder=\"address line 1\"\n                          class=\"input-xlarge\">\n                          <p class=\"help-block\">Street address, P.O. box, company name, c/o</p>\n                      </div>\n                  </div>\n                  <!-- address-line2 input-->\n                  <div class=\"form-group\">\n                      <label class=\"form-label\">Address Line 2</label>\n                      <div class=\"controls\">\n                          <input id=\"address-line2\" name=\"address-line2\" type=\"text\" placeholder=\"address line 2\"\n                          class=\"input-xlarge\">\n                          <p class=\"help-block\">Apartment, suite , unit, building, floor, etc.</p>\n                      </div>\n                  </div>\n                  <!-- city input-->\n                  <div class=\"form-group\">\n                      <label class=\"form-label\">City / Town</label>\n                      <div class=\"controls\">\n                          <input id=\"city\" name=\"city\" type=\"text\" placeholder=\"city\" class=\"input-xlarge\">\n                          <p class=\"help-block\"></p>\n                      </div>\n                  </div>\n                  <!-- region input-->\n                  <div class=\"form-group\">\n                      <label class=\"form-label\">State / Province / Region</label>\n                      <div class=\"controls\">\n                          <input id=\"region\" name=\"region\" type=\"text\" placeholder=\"state / province / region\"\n                          class=\"input-xlarge\">\n                          <p class=\"help-block\"></p>\n                      </div>\n                  </div>\n                  <!-- postal-code input-->\n                  <div class=\"form-group\">\n                      <label class=\"form-label\">Zip / Postal Code</label>\n                      <div class=\"controls\">\n                          <input id=\"postal-code\" name=\"postal-code\" type=\"text\" placeholder=\"zip or postal code\"\n                          class=\"input-xlarge\">\n                          <p class=\"help-block\"></p>\n                      </div>\n                  </div>\n                  <!-- country select -->\n                  <div class=\"form-group\">\n                      <label class=\"form-label\">Country</label>\n                      <div class=\"controls\">\n                          <select id=\"country\" name=\"country\" class=\"input-xlarge\">\n                              <option value=\"\" selected=\"selected\">(please select a country)</option>\n                              <option value=\"AF\">Afghanistan</option>\n                              <option value=\"AL\">Albania</option>\n                              <option value=\"DZ\">Algeria</option>\n                              <option value=\"AS\">American Samoa</option>\n                              <option value=\"AD\">Andorra</option>\n                              <option value=\"AO\">Angola</option>\n                              <option value=\"AI\">Anguilla</option>\n                              <option value=\"AQ\">Antarctica</option>\n                              <option value=\"AG\">Antigua and Barbuda</option>\n                              <option value=\"AR\">Argentina</option>\n                              <option value=\"AM\">Armenia</option>\n                              <option value=\"AW\">Aruba</option>\n                              <option value=\"AU\">Australia</option>\n                              <option value=\"AT\">Austria</option>\n                              <option value=\"AZ\">Azerbaijan</option>\n                              <option value=\"BS\">Bahamas</option>\n                              <option value=\"BH\">Bahrain</option>\n                              <option value=\"BD\">Bangladesh</option>\n                              <option value=\"BB\">Barbados</option>\n                              <option value=\"BY\">Belarus</option>\n                              <option value=\"BE\">Belgium</option>\n                              <option value=\"BZ\">Belize</option>\n                              <option value=\"BJ\">Benin</option>\n                              <option value=\"BM\">Bermuda</option>\n                              <option value=\"BT\">Bhutan</option>\n                              <option value=\"BO\">Bolivia</option>\n                              <option value=\"BA\">Bosnia and Herzegowina</option>\n                              <option value=\"BW\">Botswana</option>\n                              <option value=\"BV\">Bouvet Island</option>\n                              <option value=\"BR\">Brazil</option>\n                              <option value=\"IO\">British Indian Ocean Territory</option>\n                              <option value=\"BN\">Brunei Darussalam</option>\n                              <option value=\"BG\">Bulgaria</option>\n                              <option value=\"BF\">Burkina Faso</option>\n                              <option value=\"BI\">Burundi</option>\n                              <option value=\"KH\">Cambodia</option>\n                              <option value=\"CM\">Cameroon</option>\n                              <option value=\"CA\">Canada</option>\n                              <option value=\"CV\">Cape Verde</option>\n                              <option value=\"KY\">Cayman Islands</option>\n                              <option value=\"CF\">Central African Republic</option>\n                              <option value=\"TD\">Chad</option>\n                              <option value=\"CL\">Chile</option>\n                              <option value=\"CN\">China</option>\n                              <option value=\"CX\">Christmas Island</option>\n                              <option value=\"CC\">Cocos (Keeling) Islands</option>\n                              <option value=\"CO\">Colombia</option>\n                              <option value=\"KM\">Comoros</option>\n                              <option value=\"CG\">Congo</option>\n                              <option value=\"CD\">Congo, the Democratic Republic of the</option>\n                              <option value=\"CK\">Cook Islands</option>\n                              <option value=\"CR\">Costa Rica</option>\n                              <option value=\"CI\">Cote d'Ivoire</option>\n                              <option value=\"HR\">Croatia (Hrvatska)</option>\n                              <option value=\"CU\">Cuba</option>\n                              <option value=\"CY\">Cyprus</option>\n                              <option value=\"CZ\">Czech Republic</option>\n                              <option value=\"DK\">Denmark</option>\n                              <option value=\"DJ\">Djibouti</option>\n                              <option value=\"DM\">Dominica</option>\n                              <option value=\"DO\">Dominican Republic</option>\n                              <option value=\"TP\">East Timor</option>\n                              <option value=\"EC\">Ecuador</option>\n                              <option value=\"EG\">Egypt</option>\n                              <option value=\"SV\">El Salvador</option>\n                              <option value=\"GQ\">Equatorial Guinea</option>\n                              <option value=\"ER\">Eritrea</option>\n                              <option value=\"EE\">Estonia</option>\n                              <option value=\"ET\">Ethiopia</option>\n                              <option value=\"FK\">Falkland Islands (Malvinas)</option>\n                              <option value=\"FO\">Faroe Islands</option>\n                              <option value=\"FJ\">Fiji</option>\n                              <option value=\"FI\">Finland</option>\n                              <option value=\"FR\">France</option>\n                              <option value=\"FX\">France, Metropolitan</option>\n                              <option value=\"GF\">French Guiana</option>\n                              <option value=\"PF\">French Polynesia</option>\n                              <option value=\"TF\">French Southern Territories</option>\n                              <option value=\"GA\">Gabon</option>\n                              <option value=\"GM\">Gambia</option>\n                              <option value=\"GE\">Georgia</option>\n                              <option value=\"DE\">Germany</option>\n                              <option value=\"GH\">Ghana</option>\n                              <option value=\"GI\">Gibraltar</option>\n                              <option value=\"GR\">Greece</option>\n                              <option value=\"GL\">Greenland</option>\n                              <option value=\"GD\">Grenada</option>\n                              <option value=\"GP\">Guadeloupe</option>\n                              <option value=\"GU\">Guam</option>\n                              <option value=\"GT\">Guatemala</option>\n                              <option value=\"GN\">Guinea</option>\n                              <option value=\"GW\">Guinea-Bissau</option>\n                              <option value=\"GY\">Guyana</option>\n                              <option value=\"HT\">Haiti</option>\n                              <option value=\"HM\">Heard and Mc Donald Islands</option>\n                              <option value=\"VA\">Holy See (Vatican City State)</option>\n                              <option value=\"HN\">Honduras</option>\n                              <option value=\"HK\">Hong Kong</option>\n                              <option value=\"HU\">Hungary</option>\n                              <option value=\"IS\">Iceland</option>\n                              <option value=\"IN\">India</option>\n                              <option value=\"ID\">Indonesia</option>\n                              <option value=\"IR\">Iran (Islamic Republic of)</option>\n                              <option value=\"IQ\">Iraq</option>\n                              <option value=\"IE\">Ireland</option>\n                              <option value=\"IL\">Israel</option>\n                              <option value=\"IT\">Italy</option>\n                              <option value=\"JM\">Jamaica</option>\n                              <option value=\"JP\">Japan</option>\n                              <option value=\"JO\">Jordan</option>\n                              <option value=\"KZ\">Kazakhstan</option>\n                              <option value=\"KE\">Kenya</option>\n                              <option value=\"KI\">Kiribati</option>\n                              <option value=\"KP\">Korea, Democratic People's Republic of</option>\n                              <option value=\"KR\">Korea, Republic of</option>\n                              <option value=\"KW\">Kuwait</option>\n                              <option value=\"KG\">Kyrgyzstan</option>\n                              <option value=\"LA\">Lao People's Democratic Republic</option>\n                              <option value=\"LV\">Latvia</option>\n                              <option value=\"LB\">Lebanon</option>\n                              <option value=\"LS\">Lesotho</option>\n                              <option value=\"LR\">Liberia</option>\n                              <option value=\"LY\">Libyan Arab Jamahiriya</option>\n                              <option value=\"LI\">Liechtenstein</option>\n                              <option value=\"LT\">Lithuania</option>\n                              <option value=\"LU\">Luxembourg</option>\n                              <option value=\"MO\">Macau</option>\n                              <option value=\"MK\">Macedonia, The Former Yugoslav Republic of</option>\n                              <option value=\"MG\">Madagascar</option>\n                              <option value=\"MW\">Malawi</option>\n                              <option value=\"MY\">Malaysia</option>\n                              <option value=\"MV\">Maldives</option>\n                              <option value=\"ML\">Mali</option>\n                              <option value=\"MT\">Malta</option>\n                              <option value=\"MH\">Marshall Islands</option>\n                              <option value=\"MQ\">Martinique</option>\n                              <option value=\"MR\">Mauritania</option>\n                              <option value=\"MU\">Mauritius</option>\n                              <option value=\"YT\">Mayotte</option>\n                              <option value=\"MX\">Mexico</option>\n                              <option value=\"FM\">Micronesia, Federated States of</option>\n                              <option value=\"MD\">Moldova, Republic of</option>\n                              <option value=\"MC\">Monaco</option>\n                              <option value=\"MN\">Mongolia</option>\n                              <option value=\"MS\">Montserrat</option>\n                              <option value=\"MA\">Morocco</option>\n                              <option value=\"MZ\">Mozambique</option>\n                              <option value=\"MM\">Myanmar</option>\n                              <option value=\"NA\">Namibia</option>\n                              <option value=\"NR\">Nauru</option>\n                              <option value=\"NP\">Nepal</option>\n                              <option value=\"NL\">Netherlands</option>\n                              <option value=\"AN\">Netherlands Antilles</option>\n                              <option value=\"NC\">New Caledonia</option>\n                              <option value=\"NZ\">New Zealand</option>\n                              <option value=\"NI\">Nicaragua</option>\n                              <option value=\"NE\">Niger</option>\n                              <option value=\"NG\">Nigeria</option>\n                              <option value=\"NU\">Niue</option>\n                              <option value=\"NF\">Norfolk Island</option>\n                              <option value=\"MP\">Northern Mariana Islands</option>\n                              <option value=\"NO\">Norway</option>\n                              <option value=\"OM\">Oman</option>\n                              <option value=\"PK\">Pakistan</option>\n                              <option value=\"PW\">Palau</option>\n                              <option value=\"PA\">Panama</option>\n                              <option value=\"PG\">Papua New Guinea</option>\n                              <option value=\"PY\">Paraguay</option>\n                              <option value=\"PE\">Peru</option>\n                              <option value=\"PH\">Philippines</option>\n                              <option value=\"PN\">Pitcairn</option>\n                              <option value=\"PL\">Poland</option>\n                              <option value=\"PT\">Portugal</option>\n                              <option value=\"PR\">Puerto Rico</option>\n                              <option value=\"QA\">Qatar</option>\n                              <option value=\"RE\">Reunion</option>\n                              <option value=\"RO\">Romania</option>\n                              <option value=\"RU\">Russian Federation</option>\n                              <option value=\"RW\">Rwanda</option>\n                              <option value=\"KN\">Saint Kitts and Nevis</option>\n                              <option value=\"LC\">Saint LUCIA</option>\n                              <option value=\"VC\">Saint Vincent and the Grenadines</option>\n                              <option value=\"WS\">Samoa</option>\n                              <option value=\"SM\">San Marino</option>\n                              <option value=\"ST\">Sao Tome and Principe</option>\n                              <option value=\"SA\">Saudi Arabia</option>\n                              <option value=\"SN\">Senegal</option>\n                              <option value=\"SC\">Seychelles</option>\n                              <option value=\"SL\">Sierra Leone</option>\n                              <option value=\"SG\">Singapore</option>\n                              <option value=\"SK\">Slovakia (Slovak Republic)</option>\n                              <option value=\"SI\">Slovenia</option>\n                              <option value=\"SB\">Solomon Islands</option>\n                              <option value=\"SO\">Somalia</option>\n                              <option value=\"ZA\">South Africa</option>\n                              <option value=\"GS\">South Georgia and the South Sandwich Islands</option>\n                              <option value=\"ES\">Spain</option>\n                              <option value=\"LK\">Sri Lanka</option>\n                              <option value=\"SH\">St. Helena</option>\n                              <option value=\"PM\">St. Pierre and Miquelon</option>\n                              <option value=\"SD\">Sudan</option>\n                              <option value=\"SR\">Suriname</option>\n                              <option value=\"SJ\">Svalbard and Jan Mayen Islands</option>\n                              <option value=\"SZ\">Swaziland</option>\n                              <option value=\"SE\">Sweden</option>\n                              <option value=\"CH\">Switzerland</option>\n                              <option value=\"SY\">Syrian Arab Republic</option>\n                              <option value=\"TW\">Taiwan, Province of China</option>\n                              <option value=\"TJ\">Tajikistan</option>\n                              <option value=\"TZ\">Tanzania, United Republic of</option>\n                              <option value=\"TH\">Thailand</option>\n                              <option value=\"TG\">Togo</option>\n                              <option value=\"TK\">Tokelau</option>\n                              <option value=\"TO\">Tonga</option>\n                              <option value=\"TT\">Trinidad and Tobago</option>\n                              <option value=\"TN\">Tunisia</option>\n                              <option value=\"TR\">Turkey</option>\n                              <option value=\"TM\">Turkmenistan</option>\n                              <option value=\"TC\">Turks and Caicos Islands</option>\n                              <option value=\"TV\">Tuvalu</option>\n                              <option value=\"UG\">Uganda</option>\n                              <option value=\"UA\">Ukraine</option>\n                              <option value=\"AE\">United Arab Emirates</option>\n                              <option value=\"GB\">United Kingdom</option>\n                              <option value=\"US\">United States</option>\n                              <option value=\"UM\">United States Minor Outlying Islands</option>\n                              <option value=\"UY\">Uruguay</option>\n                              <option value=\"UZ\">Uzbekistan</option>\n                              <option value=\"VU\">Vanuatu</option>\n                              <option value=\"VE\">Venezuela</option>\n                              <option value=\"VN\">Viet Nam</option>\n                              <option value=\"VG\">Virgin Islands (British)</option>\n                              <option value=\"VI\">Virgin Islands (U.S.)</option>\n                              <option value=\"WF\">Wallis and Futuna Islands</option>\n                              <option value=\"EH\">Western Sahara</option>\n                              <option value=\"YE\">Yemen</option>\n                              <option value=\"YU\">Yugoslavia</option>\n                              <option value=\"ZM\">Zambia</option>\n                              <option value=\"ZW\">Zimbabwe</option>\n                          </select>\n                      </div>\n                  </div>\n              </fieldset>\n          </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__("./src/app/pages/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/store/store.component.css":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\nbody {\n  background-color: #f8f8f8;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n}\n.row {\n  min-height: 50vh;\n}\n.card {\n  border: 0;\n  border-radius: 0px;\n  -webkit-box-shadow: 0 3px 0px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 3px 0px 0 rgba(0, 0, 0, 0.08);\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  padding: 2.25rem 0;\n  position: relative;\n  will-change: transform;\n}\n.card:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0%;\n  height: 5px;\n  background-color: #57e2b2;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.card:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  -webkit-box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.08);\n}\n.card:hover:after {\n  width: 100%;\n}\n.card .card-header {\n  background-color: white;\n  padding-left: 2rem;\n  border-bottom: 0px;\n}\n.card .card-title {\n  margin-bottom: 1rem;\n}\n.card .card-block {\n  padding-top: 0;\n}\n.card .list-group-item {\n  border: 0px;\n  padding: 0.25rem;\n  color: #808080;\n  font-weight: 300;\n}\n.display-2 {\n  font-size: 7rem;\n  letter-spacing: -0.5rem;\n}\n.display-2 .currency {\n  font-size: 2.75rem;\n  position: relative;\n  font-weight: 400;\n  top: -45px;\n  letter-spacing: 0px;\n}\n.display-2 .period {\n  font-size: 1rem;\n  color: #b3b3b3;\n  letter-spacing: 0px;\n}\n.btn {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #a6a6a6;\n  border-radius: 0;\n  padding: 0.75rem 1.25rem;\n  letter-spacing: 1px;\n}\n.btn-gradient {\n  background-color: #f2f2f2;\n  -webkit-transition: background 0.3s ease-in-out;\n  transition: background 0.3s ease-in-out;\n}\n.btn-gradient:hover {\n  color: white;\n  background-color: #57e2b2;\n}\n/* @import url('https://fonts.googleapis.com/css?family=Roboto:300,400'); */\n/* .infoBox1{\n\tbackground-color: wheat;\n\tborder:10px solid rgba(62, 56, 138, 0.733);\n}\n\n.infoBox2{\n\tbackground-color: wheat;\n\tborder:10px solid rgba(62, 56, 138, 0.733);\n}\n.infoBox3{\n\tbackground-color: wheat;\n\tborder:10px solid rgba(62, 56, 138, 0.733);\n} */\n/* \n.MainOptions{\n    border:10px solid #ee3e64;\n}  */\n.img-class{\n\theight:250px;\n    width:100%;\n}\n/* @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700'); */\nbody {\n  background-color: #f8f8f8;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n}\n.row {\n  min-height: 35vh;\n}\n.card {\n  border: 0;\n  border-radius: 0px;\n  -webkit-box-shadow: 0 3px 0px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 3px 0px 0 rgba(0, 0, 0, 0.08);\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  padding: 2.25rem 0;\n  position: relative;\n  will-change: transform;\n}\n.card:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0%;\n  height: 5px;\n  background-color: #57e2b2;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.card:hover {\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  -webkit-box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.08);\n  box-shadow: 0 20px 35px 0 rgba(0, 0, 0, 0.08);\n}\n.card:hover:after {\n  width: 100%;\n}\n.card .card-header {\n  background-color: white;\n  padding-left: 2rem;\n  border-bottom: 0px;\n}\n.card .card-title {\n  margin-bottom: 1rem;\n}\n.card .card-block {\n  padding-top: 0;\n}\n.card .list-group-item {\n  border: 0px;\n  padding: 0.25rem;\n  color: #808080;\n  font-weight: 300;\n}\n.display-2 {\n  font-size: 7rem;\n  letter-spacing: -0.5rem;\n}\n.display-2 .currency {\n  font-size: 2.75rem;\n  position: relative;\n  font-weight: 400;\n  top: -45px;\n  letter-spacing: 0px;\n}\n.display-2 .period {\n  font-size: 1rem;\n  color: #b3b3b3;\n  letter-spacing: 0px;\n}\n.btn {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #a6a6a6;\n  border-radius: 0;\n  padding: 0.75rem 1.25rem;\n  letter-spacing: 1px;\n}\n.btn-gradient {\n  background-color: #f2f2f2;\n  -webkit-transition: background 0.3s ease-in-out;\n  transition: background 0.3s ease-in-out;\n}\n.btn-gradient:hover {\n  color: white;\n  background-color: #57e2b2;\n}\n/*  */\nbody{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif !important;\n    background: black;\n}\nsection{\n    width: 100%;\n    height: 100vh;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 140px 0;\n\n}\n.card{\n    position: relative;\n    max-width: 300px;\n    height: auto;\n    border-radius: 40px;\n    margin: 0 auto;\n    padding: 40px 20px;\n    -webkit-box-shadow: inset 0 0 40px rgba(0,0,0,.2), 0 20px 50px rgba(0,0,0,.5);\n            box-shadow: inset 0 0 40px rgba(0,0,0,.2), 0 20px 50px rgba(0,0,0,.5);\n    -webkit-transition: .5s;\n    transition: .5s;\n    overflow: hidden;\n}\n.card:hover{\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n.col-sm-4:nth-child(1) .card,\n.col-sm-4:nth-child(1) .card .title .fa-telegram-plane{\n    background: linear-gradient(-45deg,#f403d1,#64b5f6);\n}\n.col-sm-4:nth-child(2) .card,\n.col-sm-4:nth-child(2) .card .title .fas{\n    background: linear-gradient(-45deg,#ffec61,#f321d7);\n}\n.col-sm-4:nth-child(3) .card{\n    background: linear-gradient(-45deg,#24ff72,#9a4eff);\n}\n.card:before{\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 40%;\n    background: rgba(255,255,255,.1);\n    z-index: 1;\n    -webkit-transform: skewY(-5deg) scale(1.5);\n            transform: skewY(-5deg) scale(1.5);\n}\n.title .fa-telegram-plane{\n    color: #fff;\n    font-size: 60px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    text-align: center;\n    line-height: 100px;\n    -webkit-box-shadow: 0 10px 10px rgba(0,0,0,.5);\n            box-shadow: 0 10px 10px rgba(0,0,0,.5);\n}\n.title .fas{\n    color: #fff;\n    font-size: 60px;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    text-align: center;\n    line-height: 100px;\n    -webkit-box-shadow: 0 10px 10px rgba(0,0,0,.5);\n            box-shadow: 0 10px 10px rgba(0,0,0,.5);\n}\n.title h2{\n    position: relative;\n    margin: 20px 0 0;\n    padding: 0;\n    color: #fff;\n    font-size: 28px;\n    z-index: 2;\n}\n.price{\n    position: relative;\n    z-index: 2;\n}\n.price h3{\n    margin: 0;\n    padding: 20px 0;\n    color: #fff;\n    font-size: 60px;\n}\n.option{\n    position: relative;\n    z-index: 2;\n}\n.option ul{\n    margin: 0;\n    padding: 0;\n}\n.option ul li{\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    color: #fff;\n    font-size: 16px;\n}\n.card a{\n    position: relative;\n    z-index: 2;\n    background: #fff;\n    border-radius: 40px;\n    width: 150px;\n    height: 40px;\n    line-height: 40px;\n    display: block;\n    text-align: center;\n    margin: 20px auto 0;\n    font-size: 16px;\n    cursor: pointer;\n    -webkit-box-shadow: 0 5px 10px rgba(0,0,0,.1);\n            box-shadow: 0 5px 10px rgba(0,0,0,.1);\n}\n.cord a:hover{\n    text-decoration: none;\n\n}\n\n"

/***/ }),

/***/ "./src/app/pages/store/store.component.html":
/***/ (function(module, exports) {

module.exports = "\n<br>\n<br>\n<br>\n<br>\n\n<div class=\"container\">\n    \n<div class=\"row justify-content-around text-center\">\n    <!-- <h1> <span class=\"badge badge-secondary text-center\"  data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" \n      data-content=\" The purchased credit is used to pay for telecommunications services at the point the service is accessed or consumed.\" \n      >Prepaid</span></h1> -->\n    \n  <div class=\"card-deck mb-3 text-center\">\n      \n      \n     \n<!-- Table #1  -->\n<br>\n<br>\n\n                \n<div class=\"container-fluid\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <div class=\"card mb-5 text-center\">\n                    <div class=\"title\">\n                        <i class=\"fab fa-telegram-plane\"></i>\n                        <h2>Basic</h2>\n                    </div>\n                    <div class=\"price\">\n                      <h3> <sup>$</sup>44.99</h3>\n                    </div>\n                    <div class=\"option\">\n                        <ul>\n                            <li><i class=\"fas fa-check\"></i> For 1 week - <b>7 days</b></li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                          <li><i class=\"fas fa-check\"></i>  Unlimited hot-spot</li>\n                          \n                        </ul>\n                    </div>\n                    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U6YV6GH3F96Q6\">Choose Plan</a> \n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card mb-5 text-center\">\n                    <div class=\"title\">\n                        <i class=\"fas fa-plane\"></i>\n                        <h2>Pro</h2>\n                    </div>\n                    \n                    <div class=\"price\">\n                      \n                        <h3> <sup>$</sup>84.99</h3>\n                      \n                    </div>\n                    <div class=\"option\">\n                        <ul>\n                            \n                            <li><i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                            <li><i class=\"fas fa-check\"></i>Unlimited hot spot (3g network) </li>\n                            <li><i class=\"fas fa-check\"></i> Fast shipping</li>\n                    \n                        </ul>\n                    </div>\n                   \n                    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=T7ZMX9GPLBL9W\">Choose Plan</a>\n                  \n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card mb-5 text-center\">\n                    <div class=\"title\">\n                        <i class=\"fas fa-rocket\"></i>\n                        <h2>Ultimate</h2>\n                    </div>\n                    <div class=\"price\">\n                        <h3> <sup>$</sup>114.99</h3>\n                    </div>\n                    <div class=\"option\">\n                        <ul>\n                            <li><i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                            <li><i class=\"fas fa-check\"></i> 15GB LTE hot-spot</li>\n                        </ul>\n                    </div>\n                    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=49U339MG7BDGS\">Choose Plan</a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n\n<br>\n<br>\n\n                \n<div class=\"container-fluid\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-4\">\n                <div class=\"card mb-5 text-center\">\n                    <div class=\"title\">\n                        <!-- <i class=\"fab fa-bolt\"></i> -->\n                        \n                    </div>\n                    <div class=\"price\">\n                        <h3>At&t</h3>\n                      <h3> <sup>$</sup>69.99</h3>\n                    </div>\n                    <div class=\"option\">\n                        <ul>\n                            <li><i class=\"fas fa-check\"></i> For <b>15</b> days</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                          <li><i class=\"fas fa-check\"></i>  15GB LTE hot-spot</li>\n                          \n                        </ul>\n                    </div>\n                    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=5C4WFZ6NWN9VL\">Choose Plan</a>\n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card mb-5 text-center\">\n                    <div class=\"title\">\n                        <!-- <i class=\"fas fa-plane\"></i> -->\n                        \n                    </div>\n                    \n                    <div class=\"price\">\n                        <h3>H2o</h3>\n                        <h3> <sup>$</sup>54.99</h3>\n                      \n                    </div>\n                    <div class=\"option\">\n                        <ul>\n                            \n                            <li><i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                            <li><i class=\"fas fa-check\"></i> 4GB LTE (and then 2/3g)</li>\n                            <li><i class=\"fas fa-check\"></i>Calls to 10 destination mobile/home around the world </li>\n                           \n                    \n                        </ul>\n                    </div>\n                   \n                    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6EUPVGWCED8VC\">Choose Plan</a>\n                  \n                </div>\n            </div>\n            <div class=\"col-sm-4\">\n                <div class=\"card mb-5 text-center\">\n                    <div class=\"title\">\n                        <h2>Simple mobile</h2>\n                       \n                    </div>\n                    <div class=\"price\">\n                        \n                        <h3> <sup>$</sup>94.99</h3>\n                    </div>\n                    <div class=\"option\">\n                        <ul>\n                            <li><i class=\"fas fa-check\"></i> Unlimited calls in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited sms in US</li>\n                            <li><i class=\"fas fa-check\"></i> Unlimited 4G LTE </li>\n                            <li><i class=\"fas fa-check\"></i> 10GB 4G LTE hot spot</li>\n                            <li><i class=\"fas fa-check\"></i> Calls to a 15 destination home/mobile around the world </li>\n                        </ul>\n                    </div>\n                    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KZMMZ7M4JDXFA\">Choose Plan</a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- \n<div class=\"col-xs-12 col-lg-4\">  \n    <div class=\"card\" style=\"width: 20rem;\">\n    \n    <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/attlogo.png\"  alt=\"Card image cap\" style=\"height:70%; width:70%\">\n  <div class=\"card-header\">\n    <h3 class=\"display-2\"><span class=\"currency\">$</span>50<span class=\"period\">/month</span></h3>\n  </div>\n  <div class=\"card-block\">\n    <h4 class=\"card-title\"> \n      Basic Plan\n    </h4>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n      <li class=\"list-group-item\">8 GB LTE</li>\n    \n    </ul>\n    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZHQSKNVN38E3S\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n  </div>\n</div>\n</div> -->\n\n<!-- Table #2  -\n<div class=\"col-xs-12 col-lg-4\">\n    <div class=\"card\" style=\"width: 20rem;\">\n    <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/nexus2cee_t-mobile-logo.png\" alt=\"Card image cap\" style=\"height:60%; width:60%\">\n  <div class=\"card-header\">\n    <h3 class=\"display-2\"><span class=\"currency\">$</span>50<span class=\"period\">/month</span></h3>\n  </div>\n  <div class=\"card-block\">\n    <h4 class=\"card-title\"> \n      Regular Plan\n    </h4>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n      <li class=\"list-group-item\">Calls worldwide</li>\n      <!-- <li class=\"list-group-item\">Visual Composer Included</li> -\n      <li class=\"list-group-item\">10 GB LTE</li>\n    </ul>\n    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FYFC2JNXHULJJ\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n  </div>\n</div>\n</div>\n\n<!-- Table #3  >\n<div class=\"col-xs-12 col-lg-4\">\n    <div class=\"card\" style=\"width: 20rem;\">\n    <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/attlogo.png\"  alt=\"Card image cap\" style=\"height:70%; width:70%\">\n  <div class=\"card-header\">\n    <h3 class=\"display-2\"><span class=\"currency\">$</span>17<span class=\"period\">/month</span></h3>\n  </div>\n  <div class=\"card-block\">\n    <h4 class=\"card-title\"> \n      Premium Plan\n    </h4>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n      <li class=\"list-group-item\">1 GB LTE</li>\n    </ul>\n    <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=T7ZMX9GPLBL9W\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n  </div>\n</div>\n</div>\n\n\n</div>\n</div>\n</div>\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<div class=\"container\">\n    <div class=\"row justify-content-around text-center\">\n      \n        <h1>  <span class=\"badge badge-secondary text-center\">Preloaded</span></h1>\n        <div class=\"card-deck mb-3 text-center\">\n<div class=\"col-xs-12 col-lg-4\">  \n  <div class=\"card\" style=\"width: 20rem;\">\n  \n  <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/attlogo.png\"  alt=\"Card image cap\" style=\"height:70%; width:70%\">\n<div class=\"card-header\">\n  <h3 class=\"display-2\"><span class=\"currency\">$</span>23<span class=\"period\">/month</span></h3>\n</div>\n<div class=\"card-block\">\n  <h4 class=\"card-title\"> \n    Basic Plan\n  </h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n    <li class=\"list-group-item\">1 GB LTE</li>\n  \n  </ul>\n  <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FYFC2JNXHULJJ\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n</div>\n</div>\n</div>\n\n<!-- Table #2  >\n<div class=\"col-xs-12 col-lg-4\">\n  <div class=\"card\" style=\"width: 20rem;\">\n  <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/nexus2cee_t-mobile-logo.png\" alt=\"Card image cap\" style=\"height:60%; width:60%\">\n<div class=\"card-header\">\n  <h3 class=\"display-2\"><span class=\"currency\">$</span>29<span class=\"period\">/month</span></h3>\n</div>\n<div class=\"card-block\">\n  <h4 class=\"card-title\"> \n    Regular Plan\n  </h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n    <li class=\"list-group-item\">Calls worldwide</li>\n    <!-- <li class=\"list-group-item\">Visual Composer Included</li> >\n    <li class=\"list-group-item\">4 GB LTE</li>\n  </ul>\n  <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZHQSKNVN38E3S\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n</div>\n</div>\n</div>\n\n<!-- Table #3  >\n<div class=\"col-xs-12 col-lg-4\">\n  <div class=\"card\" style=\"width: 20rem;\">\n  <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/attlogo.png\"  alt=\"Card image cap\" style=\"height:70%; width:70%\">\n<div class=\"card-header\">\n  <h3 class=\"display-2\"><span class=\"currency\">$</span>49<span class=\"period\">/month</span></h3>\n</div>\n<div class=\"card-block\">\n  <h4 class=\"card-title\"> \n    Premium Plan\n  </h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n    <li class=\"list-group-item\">20 GB LTE</li>\n  </ul>\n  <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=28MVM73JMTYPY\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n</div>\n</div>\n</div>\n</div>\n</div>  \n</div>\n\n\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\">\n    <div class=\"row justify-content-around text-center\">\n        <h1><span class=\"badge badge-secondary text-center\"  data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" \n          data-content=\" The postpaid mobile phone is a mobile phone for which service is provided by a prior arrangement with a mobile network operator.\" \n          >postpaid</span></h1>\n        <div class=\"card-deck mb-3 text-center\">\n<div class=\"col-xs-12 col-lg-4\">  \n  <div class=\"card\" style=\"width: 20rem;\">\n  \n  <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/attlogo.png\"  alt=\"Card image cap\" style=\"height:70%; width:70%\">\n<div class=\"card-header\">\n  <h3 class=\"display-2\"><span class=\"currency\">$</span>43<span class=\"period\">/month</span></h3>\n</div>\n<div class=\"card-block\">\n  <h4 class=\"card-title\"> \n    Basic Plan\n  </h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n    <li class=\"list-group-item\">22 GB LTE</li>\n  \n  </ul>\n  <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FYFC2JNXHULJJ\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n</div>\n</div>\n</div>\n\n<!-- Table #2  -\n<div class=\"col-xs-12 col-lg-4\">\n  <div class=\"card\" style=\"width: 20rem;\">\n  <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/nexus2cee_t-mobile-logo.png\" alt=\"Card image cap\" style=\"height:60%; width:60%\">\n<div class=\"card-header\">\n  <h3 class=\"display-2\"><span class=\"currency\">$</span>35<span class=\"period\">/month</span></h3>\n</div>\n<div class=\"card-block\">\n  <h4 class=\"card-title\"> \n    Regular Plan\n  </h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n    <li class=\"list-group-item\">Calls worldwide</li>\n    <!-- <li class=\"list-group-item\">Visual Composer Included</li> ->\n    <li class=\"list-group-item\">50 GB LTE</li>\n  </ul>\n  <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZHQSKNVN38E3S\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n</div>\n</div>\n</div>\n\n<!-- Table #3  >\n<div class=\"col-xs-12 col-lg-4\">\n  <div class=\"card\" style=\"width: 20rem;\">\n  <img class=\"card-img-top img-fluid mx-auto\" src=\"../../../assets/attlogo.png\"  alt=\"Card image cap\" style=\"height:70%; width:70%\">\n<div class=\"card-header\">\n  <h3 class=\"display-2\"><span class=\"currency\">$</span>27<span class=\"period\">/15 days</span></h3>\n</div>\n<div class=\"card-block\">\n  <h4 class=\"card-title\"> \n    Premium Plan\n  </h4>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Unlimited calls and SMS in USA</li>\n    <li class=\"list-group-item\">50 GB LTE</li>\n  </ul>\n  <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=28MVM73JMTYPY\" class=\"btn btn-gradient mt-2\">Choose Plan</a>\n</div>\n</div>\n</div-->\n</div>\n</div>  \n\n</div>"

/***/ }),

/***/ "./src/app/pages/store/store.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreComponent = /** @class */ (function () {
    function StoreComponent() {
    }
    StoreComponent.prototype.ngOnInit = function () {
    };
    StoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-store',
            template: __webpack_require__("./src/app/pages/store/store.component.html"),
            styles: [__webpack_require__("./src/app/pages/store/store.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map