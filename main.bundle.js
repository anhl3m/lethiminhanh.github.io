webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\r\n    padding: 2rem 0;\r\n}\r\n\r\n.header .header-content {\r\n    color: #FFF;\r\n    margin: 0;\r\n    position: relative;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n}\r\n\r\n.header .header-content .avatar-box {\r\n    position: relative;\r\n}\r\n\r\n.header .header-content .avatar-box .avatar {\r\n    width: 50%;\r\n    border: 2px solid rgb(135, 207, 249);\r\n    margin: auto;\r\n}\r\n\r\n.header .header-content .avatar-box .avatar img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.header .header-content .background-header {\r\n    position: absolute;\r\n    width: 100%;\r\n    min-height: 65%;\r\n    background-color: rgb(135, 207, 249);\r\n    padding: 1rem 15px;\r\n    z-index: -1;\r\n}\r\n\r\n.ms-card {\r\n    margin-bottom: 1rem;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);\r\n}\r\n\r\n.ms-card .ms-card-header {\r\n    padding: 15px 0;\r\n}\r\n\r\n.ms-card .ms-card-header .ms-card-header-title {\r\n    width: 80%;\r\n    background-color: rgb(135, 207, 249);\r\n    padding: 5px;\r\n    padding-left: 15px;\r\n    color: #FFF;\r\n    margin: 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.ms-card .ms-card-body {\r\n    padding: 0 15px 15px 15px;\r\n}\r\n\r\n.infor-row {\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\n.infor-row .infor-title {\r\n    font-weight: bold;\r\n    color: rgb(135, 207, 249);\r\n}\r\n\r\n.infor-row .infor-icon {\r\n    color: rgb(135, 207, 249);\r\n    padding-right: 1rem;\r\n}\r\n\r\np {\r\n    margin-bottom: 0;\r\n}\r\n\r\nprogressbar {\r\n    height: 10px;\r\n}\r\n\r\n::ng-deep progressbar .bg-info {\r\n    background-color: rgb(135, 207, 249) !important;\r\n}\r\n\r\n.slideDown{\r\n\tanimation-name: slideDown;\r\n\t-webkit-animation-name: slideDown;\t\r\n\r\n\tanimation-duration: 2s;\t\r\n\t-webkit-animation-duration: 2s;\r\n\r\n\tanimation-timing-function: ease;\t\r\n\t-webkit-animation-timing-function: ease;\t\r\n\r\n\tvisibility: visible !important;\t\t\t\t\t\t\r\n}\r\n\r\n.slideLeft{\r\n\tanimation-name: slideLeft;\r\n\t-webkit-animation-name: slideLeft;\t\r\n\r\n\tanimation-duration: 1s;\r\n\t-webkit-animation-duration: 1s;\r\n\r\n\tanimation-timing-function: ease;\t\r\n\t-webkit-animation-timing-function: ease;\t\r\n\r\n\tvisibility: visible !important;\t\t\t\t\t\t\r\n}\r\n\r\n@keyframes slideDown {\r\n\t0% {\r\n\t\ttransform: translateY(-100%);\r\n\t}\r\n\t50%{\r\n\t\ttransform: translateY(8%);\r\n\t}\r\n\t65%{\r\n\t\ttransform: translateY(-4%);\r\n\t}\r\n\t80%{\r\n\t\ttransform: translateY(4%);\r\n\t}\r\n\t95%{\r\n\t\ttransform: translateY(-2%);\r\n\t}\t\t\t\r\n\t100% {\r\n\t\ttransform: translateY(0%);\r\n\t}\t\t\r\n}\r\n\r\n@keyframes slideLeft {\r\n\t0% {\r\n\t\ttransform: translateX(100%);\r\n\t}\t\t\t\r\n\t100% {\r\n\t\ttransform: translateX(0%);\r\n\t}\t\t\r\n}\r\n\r\n@media only screen and (max-width: 768px){\r\n    .avatar-box {\r\n        background: linear-gradient(to bottom, #FFF 0%, #FFF 50%,#000000 50%,rgb(135, 207, 249) 50%,rgb(135, 207, 249) 100%);\r\n    }\r\n    .background-header {\r\n        position: inherit !important;\r\n        width: 100%;\r\n        height: 65%;\r\n        background-color: rgb(135, 207, 249);\r\n        z-index: 0;\r\n        text-align: center;\r\n        top: -1px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header container-fluid\">\n  <div class=\"header-content row slideDown\">\n    <div class=\"col-md-4 avatar-box\">\n      <div class=\"avatar\">\n        <img src=\"assets/images/a.jpg\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"background-header\">\n      <div class=\"col-md-8 offset-md-4 header-info\">\n        <h5>LE THI MINH ANH</h5>\n        <h5>Web Developer</h5>\n        <p>I'm a hardworking and dedicated person, love to explore and learn new technology. I love to inspire other\n          people around me and get inspired by them.</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid body-info\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"ms-card slideLeft\">\n        <div class=\"ms-card-header\">\n          <p class=\"ms-card-header-title\">Personal Information</p>\n        </div>\n        <div class=\"ms-card-body\">\n          <div class=\"infor-row\">\n            <span class=\"infor-icon\">\n              <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n            </span>\n            <span>0359868662</span>\n          </div>\n          <div class=\"infor-row\">\n            <span class=\"infor-icon\">\n              <i class=\"fa fa-birthday-cake\" aria-hidden=\"true\"></i>\n            </span>\n            <span>15/06/1994</span>\n          </div>\n          <div class=\"infor-row\">\n            <span class=\"infor-icon\">\n              <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n            </span>\n            <span>minhanhle156@gmail.com</span>\n          </div>\n\n          <div class=\"infor-row\">\n            <span class=\"infor-icon\">\n              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n            </span>\n            <span>Binh Thanh District, Ho Chi Minh City</span>\n          </div>\n          <div class=\"infor-row\">\n            <span class=\"infor-icon\">\n              <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n            </span>\n            <span><a href=\"\">Visit me</a></span>\n          </div>\n        </div>\n      </div>\n      <div class=\"ms-card slideLeft\">\n        <div class=\"ms-card-header\">\n          <p class=\"ms-card-header-title\">Skills</p>\n        </div>\n        <div class=\"ms-card-body\">\n          <div class=\"infor-row\">\n            <p>Javascript</p>\n            <p>\n              <progressbar type=\"info\" [value]=\"95\" height=\"10px\"></progressbar>\n            </p>\n          </div>\n          <div class=\"infor-row\">\n            <p>Angular</p>\n            <p>\n              <progressbar type=\"info\" [value]=\"90\" height=\"10px\"></progressbar>\n            </p>\n          </div>\n          <div class=\"infor-row\">\n            <p>HTML</p>\n            <p>\n              <progressbar type=\"info\" [value]=\"70\" height=\"10px\"></progressbar>\n            </p>\n          </div>\n          <div class=\"infor-row\">\n            <p>CSS</p>\n            <p>\n              <progressbar type=\"info\" [value]=\"55\" height=\"10px\"></progressbar>\n            </p>\n          </div>\n          <div class=\"infor-row\">\n            <p>NodeJS</p>\n            <p>\n              <progressbar type=\"info\" [value]=\"90\" height=\"10px\"></progressbar>\n            </p>\n          </div>\n          <div class=\"infor-row\">\n            <p>TypeScript</p>\n            <p>\n              <progressbar type=\"info\" [value]=\"75\" height=\"10px\"></progressbar>\n            </p>\n          </div>\n          <div class=\"infor-row\">\n            <p>MySql</p>\n            <p>\n              <progressbar type=\"info\" [value]=\"85\" height=\"10px\"></progressbar>\n            </p>\n          </div>\n          <div class=\"infor-row\">\n            <p>MongoDB</p>\n            <p>\n              <progressbar type=\"info\" [value]=\"90\" height=\"10px\"></progressbar>\n            </p>\n          </div>\n          <div class=\"infor-row\">\n            <p>Elasticsearch</p>\n            <p>\n              <progressbar type=\"info\" [value]=\"60\" height=\"10px\"></progressbar>\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"ms-card slideLeft\">\n        <div class=\"ms-card-header\">\n          <p class=\"ms-card-header-title\">Languages</p>\n        </div>\n        <div class=\"ms-card-body\">\n          <div class=\"infor-row\">\n            <p>Vietnamese</p>\n            <p>\n              <progressbar type=\"info\" [value]=\"100\" height=\"10px\"></progressbar>\n            </p>\n          </div>\n          <div class=\"infor-row\">\n            <p>English</p>\n            <p>\n              <progressbar type=\"info\" [value]=\"50\" height=\"10px\"></progressbar>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"ms-card slideLeft\">\n        <div class=\"ms-card-header\">\n          <p class=\"ms-card-header-title\">Education</p>\n        </div>\n        <div class=\"ms-card-body\">\n          <div class=\"row infor-row\">\n            <div class=\"col-md-3 infor-title\">2012 - 2017</div>\n            <div class=\"col-md-9\">\n              <p>Posts and telecommunications institute of technology Ho Chi Minh (PTIT HCM)</p>\n              <p>Bachelor of Information Technology</p>\n              <p>GPA: 2.97 / 4</p>\n              <p>Thesis: 7.51 / 10</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ms-card slideLeft\">\n        <div class=\"ms-card-header\">\n          <div class=\"ms-card-header-title\">\n            Work History\n          </div>\n        </div>\n        <div class=\"ms-card-body\">\n          <div class=\"row infor-row\">\n            <div class=\"col-md-3 infor-title\">Freb, 2017 - Present</div>\n            <div class=\"col-md-9\">\n              <p>Web Developer</p>\n              <p>JANETO ICT</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ms-card slideLeft\">\n        <div class=\"ms-card-header\">\n          <div class=\"ms-card-header-title\">\n            Projects\n          </div>\n        </div>\n        <div class=\"ms-card-body\">\n          <div class=\"row infor-row\">\n            <div class=\"col-md-3 infor-title\">Redwood</div>\n            <div class=\"col-md-9\">\n              <p>AngularJS, Bootstrap, NodeJS, Express, Elasticsearch, MongoDB</p>\n              <p>Full Stack</p>\n              <p>6 Months</p>\n            </div>\n          </div>\n          <div class=\"row infor-row\">\n            <div class=\"col-md-3 infor-title\">MyKolor - Admin side</div>\n            <div class=\"col-md-9\">\n              <p>Angular 5, Bootstrap, NodeJS, Express, TypeScript, MongoDB</p>\n              <p>Font end - Support write migrate and optimization query</p>\n              <p>6 Months</p>\n            </div>\n          </div>\n          <div class=\"row infor-row\">\n            <div class=\"col-md-3 infor-title\">DPIV</div>\n            <div class=\"col-md-9\">\n              <p>Angular 4, Bootstrap</p>\n              <p>Font end</p>\n              <p>4 Months</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ms-card slideLeft\">\n        <div class=\"ms-card-header\">\n          <div class=\"ms-card-header-title\">\n            Hobbies\n          </div>\n        </div>\n        <div class=\"ms-card-body\">\n          <p>Travel</p>\n          <p>Reasearch new technology</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* ProgressbarModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map