(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <navbar></navbar>\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DND Character Creator';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _services_http_dd_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http-dd.service */ "./src/app/services/http-dd.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_create_character_create_character_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/create-character/create-character.component */ "./src/app/components/create-character/create-character.component.ts");
/* harmony import */ var _components_view_characters_view_characters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/view-characters/view-characters.component */ "./src/app/components/view-characters/view-characters.component.ts");
/* harmony import */ var _shared_app_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/app.routes */ "./src/app/shared/app.routes.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_create_character_create_character_component__WEBPACK_IMPORTED_MODULE_10__["CreateCharacterComponent"],
                _components_view_characters_view_characters_component__WEBPACK_IMPORTED_MODULE_11__["ViewCharactersComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_13__["LandingComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_shared_app_routes__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"])
            ],
            providers: [
                _services_http_dd_service__WEBPACK_IMPORTED_MODULE_8__["HttpDdService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create-character/create-character.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/create-character/create-character.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span{\r\n  float: left;\r\n  width: 160px;\r\n}\r\n\r\ninput[type=\"text\"]{\r\n  background-color: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtY2hhcmFjdGVyL2NyZWF0ZS1jaGFyYWN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS1jaGFyYWN0ZXIvY3JlYXRlLWNoYXJhY3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbntcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTYwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/create-character/create-character.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/create-character/create-character.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4 text-center\">\r\n    <p class=\"h4\">{{character.name}}, {{character.dndClass}} {{character.race}}</p>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4\">\r\n    <div class=\"input-group input-group-lg\">\r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\">Name</span>\r\n      </div>\r\n      <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"character.name\" name=\"name\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4\">\r\n    <div class=\"input-group input-group-lg\">\r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\">Class</span>\r\n      </div>\r\n      <input type=\"text\" class=\"form-control\" [value]=\"character.dndClass\" disabled>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4\">\r\n    <div class=\"input-group input-group-lg\">\r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\">Race</span>\r\n      </div>\r\n      <input type=\"text\" class=\"form-control\" [value]=\"character.race\" disabled>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4\">\r\n    <div class=\"input-group input-group-lg\">\r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\">Biography</span>\r\n      </div>\r\n      <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"character.rprof\" name=\"rprof\" rows=\"3\" maxlength=\"1000\"></textarea>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4 text-center\">\r\n    <button class=\"btn btn-primary\" (click)=\"generateCharacter()\">Generate Random Character</button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/create-character/create-character.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/create-character/create-character.component.ts ***!
  \***************************************************************************/
/*! exports provided: CreateCharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCharacterComponent", function() { return CreateCharacterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateCharacterComponent = /** @class */ (function () {
    function CreateCharacterComponent() {
        this.character = {
            id: 0,
            player_id: 0,
            name: 'Default',
            race: 'Dwarf',
            dndClass: 'Lumberjack',
            prof_1: '',
            prof_2: '',
            prof_3: '',
            prof_4: '',
            rprof: 'Nunchuck master'
        };
        this.raceURL = "http://dnd5eapi.co/api/races/";
        this.classURL = "http://dnd5eapi.co/api/classes/";
        this.nameURL = "https://api.namefake.com/";
    }
    CreateCharacterComponent.prototype.ngOnInit = function () {
    };
    CreateCharacterComponent.prototype.generateCharacter = function () {
        this.getClass();
        this.getRandomName();
        this.getRace();
    };
    CreateCharacterComponent.prototype.getClass = function () {
        var _this = this;
        var getClass = new XMLHttpRequest();
        getClass.onreadystatechange = function () {
            if ((getClass.readyState == 4) && (getClass.status == 200)) {
                var resp = JSON.parse(getClass.responseText);
                var index = Math.random() * resp.length;
                _this.character.dndClass = resp[index].name;
            }
        };
        getClass.open("get", "http://dnd5eapi.co/api/classes/");
        getClass.send();
    };
    CreateCharacterComponent.prototype.getRandomName = function () {
        var _this = this;
        var getRandomName = new XMLHttpRequest();
        getRandomName.onreadystatechange = function () {
            if ((getRandomName.readyState == 4) && (getRandomName.status == 200)) {
                var resp = JSON.parse(getRandomName.responseText);
                _this.character.name = resp.name;
            }
        };
        getRandomName.open("get", this.nameURL);
        getRandomName.send();
    };
    CreateCharacterComponent.prototype.getRace = function () {
        var _this = this;
        var getRace = new XMLHttpRequest();
        getRace.onreadystatechange = function () {
            if ((getRace.readyState == 4) && (getRace.status == 200)) {
                var resp = JSON.parse(getRace.responseText);
                var index = Math.random() * resp.length;
                _this.character.race = resp[index].name;
            }
        };
        getRace.open("get", this.raceURL);
        getRace.send();
    };
    CreateCharacterComponent.prototype.getProficiency = function (url) {
    };
    CreateCharacterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-character',
            template: __webpack_require__(/*! ./create-character.component.html */ "./src/app/components/create-character/create-character.component.html"),
            styles: [__webpack_require__(/*! ./create-character.component.css */ "./src/app/components/create-character/create-character.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreateCharacterComponent);
    return CreateCharacterComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/landing/landing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4 text-center\">\r\n    <img src=\"../../resources/d20.png\" height=\"200\" width=\"240\"/>\r\n    <p class=\"h2\">DnD Character Creator</p>\r\n    <p class=\"h6\">\r\n      Welcome to the DnD random character generator.\r\n    </p>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4 justify-content-center\">\r\n    <ul>\r\n      <li>Generate and save random characters.</li>\r\n      <li>Promotes character diversity for players wanting to try something new.</li>\r\n      <li>Save your dungeon master some time with a pre-configured character.</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4 text-center\">\r\n    <button type=\"submit\" class=\"btn btn-primary\" [routerLink]=\"['/login']\">Click here to Access</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/components/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span{\r\n  float: left;\r\n  width: 160px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW57XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDE2MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4 text-center\">\r\n    <p class=\"h2\">DnD Character Creator</p>\r\n    <p class=\"h5\">Login or register to access character creator.</p>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4 text-center\">\r\n    <p class=\"h6\" *ngIf=\"feedback\">{{f}}</p>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4\">\r\n    <div class=\"input-group input-group-lg\">\r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\" id=\"username-label\">Username</span>\r\n      </div>\r\n      <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"user.username\" name=\"username\" placeholder=\"Enter username...\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4\">\r\n    <div class=\"input-group input-group-lg\">\r\n      <div class=\"input-group-prepend\">\r\n        <span class=\"input-group-text\">Password</span>\r\n      </div>\r\n      <input type=\"password\" class=\"form-control\" required [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"Enter password...\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-4 offset-md-4 text-center\">\r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"registerUser()\">Register new Account</button>\r\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"submitLogin()\">Click here to Login</button>\r\n  </div>\r\n</div>\r\n<div>\r\n  <p>{{ user | json }}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_dd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http-dd.service */ "./src/app/services/http-dd.service.ts");
/* harmony import */ var _services_login_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login-service.service */ "./src/app/services/login-service.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, login) {
        this.http = http;
        this.login = login;
        // Used for user input
        this.user = {
            username: '',
            password: '',
            id: 0
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.login.currentLoginStatus.subscribe(function (status) { return _this.loginStatus = status; });
        this.login.currentLoginUser.subscribe(function (user) { return _this.currentUser = user; });
    };
    LoginComponent.prototype.failedLogin = function () {
        this.feedbackText = 'Failed to login with credentials provided, try again or register new account.';
        this.feedback = true;
    };
    LoginComponent.prototype.failedRegister = function () {
        this.feedbackText = 'Failed to register account with credentials provided, try again.';
        this.feedback = true;
    };
    LoginComponent.prototype.submitLogin = function () {
        var _this = this;
        this.currentUser = null;
        console.log("User sent to back-end " + this.user);
        this.http.verifyLogin(this.user).subscribe(function (user) { return _this.currentUser; }, function (error) { return console.error("Verify login http call failed."); }, function () { return console.log("Verify login completed."); });
        if (this.currentUser != null) {
            if (this.user.username != '') {
                console.log("User received from back-end " + this.user);
                this.feedback = false;
                this.login.updateLoginStatus(true);
                this.login.updateCurrentUser(this.user);
            }
            else {
                this.failedLogin();
            }
        }
    };
    LoginComponent.prototype.registerUser = function () {
        var _this = this;
        this.currentUser = null;
        console.log("User sent to register " + this.user);
        this.http.registerUser(this.user).subscribe(function (user) { return _this.currentUser; }, function (error) { return console.error("Verify login http call failed."); }, function () { return console.log("Register User call completed."); });
        if (this.currentUser != null) {
            if (this.user.username != '') {
                console.log("User received from back-end " + this.user);
                this.feedback = false;
                this.login.updateLoginStatus(true);
                this.login.updateCurrentUser(this.user);
            }
            else {
                this.failedRegister();
            }
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            outputs: ['loginStatus'],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_dd_service__WEBPACK_IMPORTED_MODULE_2__["HttpDdService"], _services_login_service_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n  font-family: Arial;\r\n  font-size: 20px;\r\n}\r\n\r\n.active-link{\r\n  background-color: red;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmFjdGl2ZS1saW5re1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\" id=\"navbar\" *ngIf=\"activeSession\">\r\n  <div class=\"col-lg\">\r\n    <ul class=\"nav nav-fill\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/create-character']\" id=\"createCharacters\" routerLinkActive=\"active-link\" >Create Character</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/view-characters']\" id=\"characters\" routerLinkActive=\"active-link\">Characters</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\" id=\"profile\" routerLinkActive=\"active-link\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/login']\" id=\"logout\" routerLinkActive=\"active-link\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login-service.service */ "./src/app/services/login-service.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(login) {
        this.login = login;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.login.currentLoginStatus.subscribe(function (status) { return _this.activeSession = status; });
        this.login.currentLoginUser.subscribe(function (user) { return _this.currentUser = user; });
    };
    NavbarComponent.prototype.highlightNav = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            inputs: ['activeSession',
                'currentUser'],
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/view-characters/view-characters.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/view-characters/view-characters.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy1jaGFyYWN0ZXJzL3ZpZXctY2hhcmFjdGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/view-characters/view-characters.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/view-characters/view-characters.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/view-characters/view-characters.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/view-characters/view-characters.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewCharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCharactersComponent", function() { return ViewCharactersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewCharactersComponent = /** @class */ (function () {
    function ViewCharactersComponent() {
    }
    ViewCharactersComponent.prototype.ngOnInit = function () {
    };
    ViewCharactersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-characters',
            template: __webpack_require__(/*! ./view-characters.component.html */ "./src/app/components/view-characters/view-characters.component.html"),
            styles: [__webpack_require__(/*! ./view-characters.component.css */ "./src/app/components/view-characters/view-characters.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewCharactersComponent);
    return ViewCharactersComponent;
}());



/***/ }),

/***/ "./src/app/services/http-dd.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/http-dd.service.ts ***!
  \*********************************************/
/*! exports provided: HttpDdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpDdService", function() { return HttpDdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/*
HTTP Service to provide HTTPClient functionality to components.
All methods return an observable for the components to subscribe and handle.
 */



var HttpDdService = /** @class */ (function () {
    function HttpDdService(http) {
        this.http = http;
        //Placeholder for Front Controller URI
        this.dbURL = "/DnDGenerator/";
        //Header to specify JSON content for POST/PUT
        this.httpJSON = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        //Root URL for D&D API
        this.ddURL = "http://dnd5eapi.co/api/";
    }
    //Returns Observable for Login component to process
    HttpDdService.prototype.verifyLogin = function (login) {
        var loginPath = this.dbURL + 'Generator/Login';
        return this.http.post(loginPath, login, this.httpJSON);
    };
    HttpDdService.prototype.registerUser = function (register) {
        var registerPath = this.dbURL + 'Generator/Register';
        return this.http.post(registerPath, register, this.httpJSON);
    };
    HttpDdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpDdService);
    return HttpDdService;
}());



/***/ }),

/***/ "./src/app/services/login-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/login-service.service.ts ***!
  \***************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/*


Created using: https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
 */



var LoginService = /** @class */ (function () {
    function LoginService() {
        this.loginStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.currentLoginStatus = this.loginStatus.asObservable();
        this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.currentLoginUser = this.currentUser.asObservable();
    }
    LoginService.prototype.updateLoginStatus = function (updateStatus) {
        this.loginStatus.next(updateStatus);
    };
    LoginService.prototype.updateCurrentUser = function (updateUser) {
        this.currentUser.next(updateUser);
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/shared/app.routes.ts":
/*!**************************************!*\
  !*** ./src/app/shared/app.routes.ts ***!
  \**************************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _components_create_character_create_character_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/create-character/create-character.component */ "./src/app/components/create-character/create-character.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_view_characters_view_characters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/view-characters/view-characters.component */ "./src/app/components/view-characters/view-characters.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");





var AppRoutes = [
    {
        path: "",
        component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]
    },
    {
        path: "create-character",
        component: _components_create_character_create_character_component__WEBPACK_IMPORTED_MODULE_0__["CreateCharacterComponent"]
    },
    {
        path: "view-characters",
        component: _components_view_characters_view_characters_component__WEBPACK_IMPORTED_MODULE_2__["ViewCharactersComponent"]
    },
    {
        path: "login",
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: "profile",
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\derrick_kuhn_repos\PACE1907p2g2\DnDGenerator\src\main\DnDAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map