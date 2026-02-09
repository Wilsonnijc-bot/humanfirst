(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/account-verification/account-verification.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/account-verification/account-verification.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"verification-section\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header text-center\">\n          <h4>Account Verification</h4>\n        </div>\n        <div class=\"card-body text-center\">\n          <p [ngClass]=\"isError ? 'text-danger' : 'text-success'\">{{ message }}</p>\n          <a routerLink=\"/login\" class=\"btn btn-primary mt-2\">Go to Login</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-section\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\" style=\"text-align: center\"><h4>Login</h4></div>\n                <div class=\"card-body\">\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n                        <div class=\"form-group row\">\n                            <label for=\"user_name\" class=\"col-md-4 col-form-label text-md-right\">Username</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" id=\"user_name\" class=\"form-control\" [formControlName]=\"'username'\" name=\"user_name\" required\n                                    autofocus>\n                                <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\">\n                                   Please provide a valid username\n                                </span>                                    \n                            </div>\n                        </div>\n \n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"col-md-4 col-form-label text-md-right\">Password</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"password\" id=\"password\" class=\"form-control\" [formControlName]=\"'password'\" name=\"password\" required>\n                                <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">\n                                  Password cannot be empty\n                                </span>                                \n                            </div>\n                        </div>\n \n                        <span class=\"col-md-6 offset-md-4\">\n                            <button type=\"submit\" class=\"login\">\n                                Login\n                            </button>\n                            <span style=\"padding-left: 15px\">New User? <a routerLink=\"/sign-up\">SIGN UP</a></span>\n                        </span>   \n                        <div class=\"login-failed\" *ngIf='this.isError'>\n                             <p class=\"login-failed-text\">Login Failed. Please check your credentials and try again.</p>   \n                        </div>\n                        <div class=\"login-failed\" [ngStyle]=\"{'background-color': 'green'}\" *ngIf=\"this.registerSuccessMessage.length > 0\">\n                            <p class=\"register-success-text\">{{registerSuccessMessage}}</p>   \n                       </div>                       \n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\"></div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register-section\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\" style=\"text-align: center\">\n                    <h4>Register</h4>\n                </div>\n                <div class=\"card-body\">\n                    <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\n                        <div class=\"form-group row\">\n                            <label for=\"email_address\" class=\"col-md-4 col-form-label text-md-right\">E-Mail\n                                Address</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" [formControlName]=\"'email'\" id=\"email_address\" class=\"form-control\" name=\"email-address\" required\n                                    autofocus>\n                                <span *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\">\n                                    Please provide a valid email\n                                </span>                                    \n                            </div>\n                        </div>\n \n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label text-md-right\">User Name</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" [formControlName]=\"'username'\"class=\"form-control\" required autofocus>\n                                <span *ngIf=\"!signupForm.get('username').valid && signupForm.get('username').touched\">\n                                    Please provide a valid username\n                                </span>                                 \n                            </div>\n                        </div>\n \n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"col-md-4 col-form-label text-md-right\">Password</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"password\" [formControlName]=\"'password'\" id=\"password\" class=\"form-control\" name=\"password\" required>\n                                <span *ngIf=\"!signupForm.get('password').valid && signupForm.get('password').touched\">\n                                    Please provide a valid Password\n                                </span>  \n                            </div>\n                        </div>\n \n                        <span class=\"col-md-6 offset-md-4\">\n                            <button type=\"submit\" class=\"sign-up\">\n                                Sign Up\n                            </button>\n                            <span style=\"padding-left: 15px\">Existing user? <a routerLink=\"/login\">Log In</a></span>\n                        </span>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\"></div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-profile.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-profile.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div>\n    Welcome <b>{{name}}</b>.<br /> You have posted <b>{{postLength}}</b> time(s) and commented\n    <b>{{commentLength}}</b> time(s).\n    You can check your post and comment history below.\n  </div>\n  <hr />\n  <div>\n    Your Posts:\n  </div>\n  <app-post-tile [posts]=\"posts\"></app-post-tile>\n  <hr />\n  <div>\n    Your Comments:\n  </div>\n  <div *ngFor=\"let comment of comments\">\n    <div class=\"comment\">\n      <div class=\"username\">\n        <a routerLink=\"/user/comment.username\">{{comment.userName}}</a>\n      </div>\n      <div>\n        <p>{{comment.duration}}</p>\n      </div>\n      <b>{{comment.text}}</b>\n    </div>\n    <hr />\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light hf-navbar\">\n        <div class=\"hf-navbar-inner\">\n            <a aria-label=\"Home\" class=\"logo\" routerLink=\"/\">\n                <span class=\"reddit-text\">\n                    Humanfirst\n                </span>\n            </a>\n\n            <div class=\"hf-nav-actions\">\n                <a aria-label=\"Create post\" class=\"create-link\" routerLink=\"/create\">\n                    <fa-icon [icon]=\"faPlus\"></fa-icon>\n                    <span>Create</span>\n                </a>\n\n                <div *ngIf=\"isLoggedIn\" ngbDropdown class=\"user-menu\">\n                    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                        <button (click)=\"goToUserProfile()\" ngbDropdownItem>Profile</button>\n                        <button (click)=\"logout()\" ngbDropdownItem>Logout</button>\n                    </div>\n                    <button class=\"userdetails\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                        <img class=\"account-icon\" src=\"https://www.redditstatic.com/avatars/avatar_default_08_D4E815.png\">\n                        {{username}}\n                    </button>\n                </div>\n\n                <div *ngIf=\"!isLoggedIn\" class=\"auth-links\">\n                    <a routerLink=\"/sign-up\" class=\"sign-up\">Sign up</a>\n                    <a routerLink=\"/login\" class=\"login\">Login</a>\n                </div>\n            </div>\n        </div>\n    </nav>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"humanfirst-body\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-xl-2\">\n        <aside class=\"hf-sidebar\">\n          <div class=\"hf-brand\">Humanfirst</div>\n\n          <nav class=\"hf-nav\">\n            <button\n              *ngFor=\"let item of primaryNavItems\"\n              type=\"button\"\n              class=\"hf-row\"\n              [class.active]=\"isItemActive(item)\"\n              (click)=\"handlePrimaryNavClick(item)\">\n              <fa-icon class=\"hf-icon\" [icon]=\"item.icon\"></fa-icon>\n              <span>{{item.label}}</span>\n            </button>\n          </nav>\n\n          <hr class=\"hf-divider\" />\n\n          <button type=\"button\" class=\"hf-row hf-action-row\" (click)=\"goToCreateSubreddit()\">\n            <fa-icon class=\"hf-icon\" [icon]=\"faPlus\"></fa-icon>\n            <span>Start a community</span>\n          </button>\n\n          <hr class=\"hf-divider\" />\n\n          <section class=\"hf-section\">\n            <div class=\"hf-section-header\">\n              <span>COMMUNITIES</span>\n              <fa-icon [icon]=\"faChevronDown\"></fa-icon>\n            </div>\n            <button\n              *ngFor=\"let item of communityItems\"\n              type=\"button\"\n              class=\"hf-row\"\n              [class.active]=\"isItemActive(item)\"\n              (click)=\"handleCommunityClick(item)\">\n              <fa-icon class=\"hf-icon\" [icon]=\"item.icon\"></fa-icon>\n              <span>{{item.label}}</span>\n            </button>\n          </section>\n\n          <section class=\"hf-section\">\n            <div class=\"hf-section-header\">\n              <span>CUSTOM FEEDS</span>\n              <fa-icon [icon]=\"faChevronDown\"></fa-icon>\n            </div>\n            <button type=\"button\" class=\"hf-row\">\n              <fa-icon class=\"hf-icon\" [icon]=\"faPlus\"></fa-icon>\n              <span>Create Custom Feed</span>\n            </button>\n          </section>\n        </aside>\n      </div>\n\n      <div class=\"col-lg-9 col-xl-10 hf-main-col\">\n        <div class=\"hf-main-feed\">\n          <app-post-tile [posts]=\"posts\"></app-post-tile>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/create-post/create-post.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/create-post/create-post.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <hr />\n      <div class=\"col-12 create-post-main\">\n        <div class=\"create-post-container\">\n          <form class=\"post-form\" [formGroup]=\"createPostForm\" (ngSubmit)=\"createPost()\">\n            <div class=\"form-group\">\n              <div class=\"create-post-heading\">Create Post</div>\n              <hr />\n              <input type=\"text\" [formControlName]=\"'postName'\" class=\"form-control\" style=\"margin-top: 5px\"\n                placeholder=\"Title\">\n\n              <input type=\"text\" class=\"form-control\" [formControlName]=\"'url'\" style=\"margin-top: 5px\" placeholder=\"URL (optional)\">\n\n              <div style=\"margin-top: 10px;\">\n                <input\n                  type=\"file\"\n                  class=\"form-control\"\n                  accept=\"video/*\"\n                  (change)=\"onVideoSelected($event)\">\n                <small *ngIf=\"isUploadingVideo\">Uploading video...</small>\n                <small *ngIf=\"!isUploadingVideo && uploadedVideoFileName\">Uploaded: {{uploadedVideoFileName}}</small>\n              </div>\n\n              <select class=\"form-control\" style=\"margin-top: 10px\" [formControlName]=\"'subredditName'\">\n                <option *ngFor=\"let domain of domainOptions\" [value]=\"domain.value\">{{domain.label}}</option>\n              </select>\n\n              <editor [formControlName]=\"'description'\" [init]=\"{\n                          height: 500,\n                          menubar: false,\n                          plugins: [\n                            'advlist autolink lists link image charmap print preview anchor',\n                            'searchreplace visualblocks code fullscreen',\n                            'insertdatetime media table paste code help wordcount'\n                          ],\n                          toolbar:\n                            'undo redo | formatselect | bold italic backcolor | \\\n                            alignleft aligncenter alignright alignjustify | \\\n                            bullist numlist outdent indent | removeformat | help'\n                        }\"></editor>\n              <span>\n                <div style=\"margin-top: 5px\" class=\"float-right\">\n                  <button type=\"button\" (click)=\"discardPost()\" class=\"btnDiscard\">Discard</button>\n                  <button type=\"submit\" class=\"btnCreatePost\" [disabled]=\"isUploadingVideo\">Post</button>\n                </div>\n              </span>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/view-post/view-post.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/view-post/view-post.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <hr />\n    <div class=\"col-12 view-post-main\">\n      <div class=\"row post\">\n        <div class=\"col-md-12\">\n          <span>\n            <span class=\"subreddit-text\"><a class=\"post-url\" href=\"\">{{post.subredditName}}</a></span>\n            <span> . Posted\n              <span> {{post.duration}} </span>\n              by\n              <a class=\"username\" href=\"\">{{post.userName}}</a>\n            </span>\n          </span>\n          <hr />\n          <a *ngIf=\"post.url; else postTitleNoUrl\" class=\"post-title post-url\" [href]=\"post.url\" target=\"_blank\" rel=\"noopener noreferrer\">{{post.postName}}</a>\n          <ng-template #postTitleNoUrl>\n            <span class=\"post-title\">{{post.postName}}</span>\n          </ng-template>\n          <div *ngIf=\"post.videoUrl\">\n            <video class=\"post-video\" controls preload=\"metadata\" [src]=\"post.videoUrl\"></video>\n          </div>\n          <div>\n            <p class=\"post-text\" [innerHtml]=\"post.description\"></p>\n          </div>\n          <div class=\"post-actions\">\n            <app-vote-button [post]=\"post\"></app-vote-button>\n          </div>\n          <div class=\"post-comment\">\n            <form [formGroup]=\"commentForm\" (ngSubmit)=\"postComment()\">\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" [formControlName]=\"'text'\" placeholder=\"Your Thoughts?\"></textarea>\n              </div>\n              <button type=\"submit\" class=\"login float-right\">Comment</button>\n            </form>\n          </div>\n          <div style=\"margin-top: 60px;\" *ngFor=\"let comment of comments\">\n            <div class=\"comment\">\n              <div class=\"username\">\n                <a routerLink=\"/user/comment.username\">{{comment.userName}}</a>\n              </div>\n              <div>\n                <p>{{comment.duration}}</p>\n              </div>\n              <b>{{comment.text}}</b>\n            </div>\n            <hr />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-tile/post-tile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-tile/post-tile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"hf-post-card\" *ngFor=\"let post of posts\">\n  <div class=\"hf-post-header\">\n    <div class=\"hf-post-meta\">\n      <span class=\"hf-community\">h/{{post.subredditName}}</span>\n      <span class=\"hf-dot\">•</span>\n      <span>{{post.duration}}</span>\n    </div>\n    <button type=\"button\" class=\"hf-overflow-btn\" aria-label=\"Post actions\">\n      <fa-icon [icon]=\"faEllipsisH\"></fa-icon>\n    </button>\n  </div>\n\n  <div class=\"hf-post-title\">\n    <a *ngIf=\"isExternalLinkPost(post); else noExternalPostLink\" class=\"hf-post-title-link\" [href]=\"post.url\" target=\"_blank\" rel=\"noopener noreferrer\">{{post.postName}}</a>\n    <ng-template #noExternalPostLink>\n      <span>{{post.postName}}</span>\n    </ng-template>\n  </div>\n\n  <ng-container *ngIf=\"isMediaPost(post); else textPostBlock\">\n    <div *ngIf=\"isVideoPost(post); else imagePostBlock\" class=\"hf-media-wrap\">\n      <video class=\"hf-media-content\" controls preload=\"metadata\" [src]=\"post.videoUrl\"></video>\n      <div class=\"hf-media-badge\">\n        <fa-icon [icon]=\"faPlay\"></fa-icon>\n        <fa-icon [icon]=\"faVolumeMute\"></fa-icon>\n      </div>\n    </div>\n    <ng-template #imagePostBlock>\n      <div class=\"hf-media-wrap\" *ngIf=\"getImageUrl(post) as imageUrl\">\n        <img class=\"hf-media-content\" [src]=\"imageUrl\" [alt]=\"post.postName\">\n      </div>\n    </ng-template>\n  </ng-container>\n\n  <ng-template #textPostBlock>\n    <p *ngIf=\"post.description\" class=\"hf-text-preview\" [innerHtml]=\"post.description\"></p>\n  </ng-template>\n\n  <div class=\"hf-post-footer\">\n    <app-vote-button [post]=\"post\"></app-vote-button>\n\n    <button type=\"button\" class=\"hf-action-btn\" (click)=\"goToPost(post.id)\">\n      <fa-icon [icon]=\"faComments\"></fa-icon>\n      <span>{{post.commentCount}}</span>\n    </button>\n\n    <button type=\"button\" class=\"hf-action-btn\">\n      <fa-icon [icon]=\"faHeart\"></fa-icon>\n      <span>{{post.voteCount}}</span>\n    </button>\n\n    <button type=\"button\" class=\"hf-action-btn\" (click)=\"sharePost(post)\">\n      <fa-icon [icon]=\"faShare\"></fa-icon>\n      <span>Share</span>\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/vote-button/vote-button.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/vote-button/vote-button.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"vote-actions\">\n    <button type=\"button\" class=\"vote-btn like-btn\" [class.active]=\"post.upVote\" (click)=\"upvotePost()\" aria-label=\"Upvote\">\n        <fa-icon [icon]=\"faThumbsUp\"></fa-icon>\n    </button>\n    <button type=\"button\" class=\"vote-btn dislike-btn\" [class.active]=\"post.downVote\" (click)=\"downvotePost()\" aria-label=\"Downvote\">\n        <fa-icon [icon]=\"faThumbsDown\"></fa-icon>\n    </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/create-subreddit/create-subreddit.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/create-subreddit/create-subreddit.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 create-subreddit-main\">\n      <div class=\"create-subreddit-container\">\n        <form class=\"post-form\" [formGroup]=\"createSubredditForm\" (ngSubmit)=\"createSubreddit()\">\n          <div class=\"form-group\">\n            <div class=\"create-subreddit-heading\">Create Subreddit</div>\n            <hr />\n            <input type=\"text\" [formControlName]=\"'title'\" class=\"form-control\" style=\"margin-top: 5px\"\n              placeholder=\"Title\">\n            <textarea type=\"text\" [formControlName]=\"'description'\" style=\"width: 100%; margin-top: 5px\"\n              placeholder=\"Description\"></textarea>\n            <div>\n              <div style=\"margin-top: 5px\" class=\"float-right\">\n                <button (click)=\"discard()\" class=\"btnDiscard\">Discard</button>\n                <button class=\"btnCreateSubreddit\">Create</button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/list-subreddits/list-subreddits.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/list-subreddits/list-subreddits.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <hr />\n      <div class=\"col-12 list-subreddits-main\">\n        <h2>List of Subreddits</h2>\n        <ul>\n          <li *ngFor=\"let subreddit of subreddits\">\n              <a routerLink=\"/view-subreddit/{{subreddit.id}}\">{{subreddit.name}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/create-post/create-post.component */ "./src/app/post/create-post/create-post.component.ts");
/* harmony import */ var _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subreddit/create-subreddit/create-subreddit.component */ "./src/app/subreddit/create-subreddit/create-subreddit.component.ts");
/* harmony import */ var _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subreddit/list-subreddits/list-subreddits.component */ "./src/app/subreddit/list-subreddits/list-subreddits.component.ts");
/* harmony import */ var _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/view-post/view-post.component */ "./src/app/post/view-post/view-post.component.ts");
/* harmony import */ var _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/user-profile/user-profile.component */ "./src/app/auth/user-profile/user-profile.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_account_verification_account_verification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/account-verification/account-verification.component */ "./src/app/auth/account-verification/account-verification.component.ts");













const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'view-post/:id', component: _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_9__["ViewPostComponent"] },
    { path: 'user-profile/:name', component: _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'list-subreddits', component: _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_8__["ListSubredditsComponent"] },
    { path: 'create', component: _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'create-post', redirectTo: '/create', pathMatch: 'full' },
    { path: 'create-subreddit', component: _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_7__["CreateSubredditComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'sign-up', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'signup', redirectTo: '/sign-up', pathMatch: 'full' },
    { path: 'account-verification/:token', component: _auth_account_verification_account_verification_component__WEBPACK_IMPORTED_MODULE_12__["AccountVerificationComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'humanfirst';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/__ivy_ngcc__/fesm2015/ngx-webstorage.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./token-interceptor */ "./src/app/token-interceptor.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/post-tile/post-tile.component */ "./src/app/shared/post-tile/post-tile.component.ts");
/* harmony import */ var _shared_vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/vote-button/vote-button.component */ "./src/app/shared/vote-button/vote-button.component.ts");
/* harmony import */ var _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./subreddit/create-subreddit/create-subreddit.component */ "./src/app/subreddit/create-subreddit/create-subreddit.component.ts");
/* harmony import */ var _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./post/create-post/create-post.component */ "./src/app/post/create-post/create-post.component.ts");
/* harmony import */ var _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./subreddit/list-subreddits/list-subreddits.component */ "./src/app/subreddit/list-subreddits/list-subreddits.component.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
/* harmony import */ var _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./post/view-post/view-post.component */ "./src/app/post/view-post/view-post.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/user-profile/user-profile.component */ "./src/app/auth/user-profile/user-profile.component.ts");
/* harmony import */ var _auth_account_verification_account_verification_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth/account-verification/account-verification.component */ "./src/app/auth/account-verification/account-verification.component.ts");


























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_16__["PostTileComponent"],
            _shared_vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_17__["VoteButtonComponent"],
            _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_18__["CreateSubredditComponent"],
            _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_19__["CreatePostComponent"],
            _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_20__["ListSubredditsComponent"],
            _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_22__["ViewPostComponent"],
            _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_24__["UserProfileComponent"],
            _auth_account_verification_account_verification_component__WEBPACK_IMPORTED_MODULE_25__["AccountVerificationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__["NgxWebstorageModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_21__["EditorModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__["NgbModule"]
        ],
        providers: [
            {
                provide: _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_21__["TINYMCE_SCRIPT_SRC"],
                useValue: 'tinymce/tinymce.min.js'
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/account-verification/account-verification.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/auth/account-verification/account-verification.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".verification-section {\n  margin-top: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hY2NvdW50LXZlcmlmaWNhdGlvbi9hY2NvdW50LXZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hY2NvdW50LXZlcmlmaWNhdGlvbi9hY2NvdW50LXZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcmlmaWNhdGlvbi1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/auth/account-verification/account-verification.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/auth/account-verification/account-verification.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AccountVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountVerificationComponent", function() { return AccountVerificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/auth/shared/auth.service.ts");




let AccountVerificationComponent = class AccountVerificationComponent {
    constructor(activatedRoute, authService) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.message = 'Verifying your account...';
        this.isError = false;
    }
    ngOnInit() {
        const token = this.activatedRoute.snapshot.paramMap.get('token');
        if (!token) {
            this.isError = true;
            this.message = 'Verification token is missing.';
            return;
        }
        this.authService.verifyAccount(token).subscribe({
            next: () => {
                this.isError = false;
                this.message = 'Account activated successfully. You can now log in.';
            },
            error: (error) => {
                this.isError = true;
                this.message = this.extractErrorMessage(error);
            }
        });
    }
    extractErrorMessage(error) {
        var _a;
        if ((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) {
            return error.error.message;
        }
        if (typeof (error === null || error === void 0 ? void 0 : error.error) === 'string' && error.error.trim().length > 0) {
            return error.error;
        }
        return 'Account verification failed. Please request a new activation email.';
    }
};
AccountVerificationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AccountVerificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account-verification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account-verification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/account-verification/account-verification.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account-verification.component.css */ "./src/app/auth/account-verification/account-verification.component.css")).default]
    })
], AccountVerificationComponent);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/auth.service */ "./src/app/auth/shared/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        const isAuthenticated = this.authService.isLoggedIn();
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-section{\n    margin: 100px;\n}\n\n.login-failed, .register-success{\n    text-align: center;\n    margin: auto;\n    margin-top: 10px;\n    border: 2px solid black;\n    width: 65%;    \n    background-color: red;\n}\n\n.login-failed-text, .register-success-text{\n    text-align: center;\n    margin-top: 5px;\n    font-weight: bold;    \n    color: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXNlY3Rpb257XG4gICAgbWFyZ2luOiAxMDBweDtcbn1cblxuLmxvZ2luLWZhaWxlZCwgLnJlZ2lzdGVyLXN1Y2Nlc3N7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiA2NSU7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmxvZ2luLWZhaWxlZC10ZXh0LCAucmVnaXN0ZXItc3VjY2Vzcy10ZXh0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/auth/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let LoginComponent = class LoginComponent {
    constructor(authService, activatedRoute, router, toastr) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastr = toastr;
        this.loginRequestPayload = {
            username: '',
            password: ''
        };
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.activatedRoute.queryParams
            .subscribe(params => {
            if (params.registered !== undefined && params.registered === 'true') {
                this.toastr.success('Signup Successful');
                this.registerSuccessMessage = 'Please Check your inbox for activation email '
                    + 'activate your account before you Login!';
            }
        });
    }
    login() {
        this.loginRequestPayload.username = this.loginForm.get('username').value;
        this.loginRequestPayload.password = this.loginForm.get('password').value;
        this.authService.login(this.loginRequestPayload).subscribe(data => {
            this.isError = false;
            this.router.navigateByUrl('');
            this.toastr.success('Login Successful');
        }, error => {
            this.isError = true;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/shared/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/shared/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/__ivy_ngcc__/fesm2015/ngx-webstorage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







let AuthService = class AuthService {
    constructor(httpClient, localStorage) {
        this.httpClient = httpClient;
        this.localStorage = localStorage;
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.username = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.refreshTokenPayload = {
            refreshToken: this.getRefreshToken(),
            username: this.getUserName()
        };
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl;
    }
    signup(signupRequestPayload) {
        return this.httpClient.post(`${this.apiBaseUrl}/api/auth/signup`, signupRequestPayload, { responseType: 'text' });
    }
    verifyAccount(token) {
        return this.httpClient.get(`${this.apiBaseUrl}/api/auth/accountVerification/${token}`, { responseType: 'text' });
    }
    login(loginRequestPayload) {
        return this.httpClient.post(`${this.apiBaseUrl}/api/auth/login`, loginRequestPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => {
            this.localStorage.store('authenticationToken', data.authenticationToken);
            this.localStorage.store('username', data.username);
            this.localStorage.store('refreshToken', data.refreshToken);
            this.localStorage.store('expiresAt', data.expiresAt);
            this.loggedIn.emit(true);
            this.username.emit(data.username);
            return true;
        }));
    }
    getJwtToken() {
        return this.localStorage.retrieve('authenticationToken');
    }
    refreshToken() {
        return this.httpClient.post(`${this.apiBaseUrl}/api/auth/refresh/token`, this.refreshTokenPayload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            this.localStorage.clear('authenticationToken');
            this.localStorage.clear('expiresAt');
            this.localStorage.store('authenticationToken', response.authenticationToken);
            this.localStorage.store('expiresAt', response.expiresAt);
        }));
    }
    logout() {
        this.httpClient.post(`${this.apiBaseUrl}/api/auth/logout`, this.refreshTokenPayload, { responseType: 'text' })
            .subscribe(data => {
            console.log(data);
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        });
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('username');
        this.localStorage.clear('refreshToken');
        this.localStorage.clear('expiresAt');
    }
    getUserName() {
        return this.localStorage.retrieve('username');
    }
    getRefreshToken() {
        return this.localStorage.retrieve('refreshToken');
    }
    isLoggedIn() {
        return this.getJwtToken() != null;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AuthService.prototype, "loggedIn", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AuthService.prototype, "username", void 0);
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register-section {\n  margin: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1zZWN0aW9uIHtcbiAgbWFyZ2luOiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/auth/shared/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let SignupComponent = class SignupComponent {
    constructor(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.signupRequestPayload = {
            username: '',
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    signup() {
        this.signupRequestPayload.email = this.signupForm.get('email').value;
        this.signupRequestPayload.username = this.signupForm.get('username').value;
        this.signupRequestPayload.password = this.signupForm.get('password').value;
        this.authService.signup(this.signupRequestPayload)
            .subscribe(data => {
            this.router.navigate(['/login'], { queryParams: { registered: 'true' } });
        }, error => {
            console.log(error);
            this.toastr.error('Registration Failed! Please try again');
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/auth/user-profile/user-profile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/auth/user-profile/user-profile.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/user-profile/user-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/user-profile/user-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/comment/comment.service */ "./src/app/comment/comment.service.ts");





let UserProfileComponent = class UserProfileComponent {
    constructor(activatedRoute, postService, commentService) {
        this.activatedRoute = activatedRoute;
        this.postService = postService;
        this.commentService = commentService;
        this.name = this.activatedRoute.snapshot.params.name;
        this.postService.getAllPostsByUser(this.name).subscribe(data => {
            this.posts = data;
            this.postLength = data.length;
        });
        this.commentService.getAllCommentsByUser(this.name).subscribe(data => {
            this.comments = data;
            this.commentLength = data.length;
        });
    }
    ngOnInit() {
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"] }
];
UserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-profile.component.css */ "./src/app/auth/user-profile/user-profile.component.css")).default]
    })
], UserProfileComponent);



/***/ }),

/***/ "./src/app/comment/comment.service.ts":
/*!********************************************!*\
  !*** ./src/app/comment/comment.service.ts ***!
  \********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let CommentService = class CommentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl;
    }
    getAllCommentsForPost(postId) {
        return this.httpClient.get(`${this.apiBaseUrl}/api/comments/by-post/${postId}`);
    }
    postComment(commentPayload) {
        return this.httpClient.post(`${this.apiBaseUrl}/api/comments/`, commentPayload);
    }
    getAllCommentsByUser(name) {
        return this.httpClient.get(`${this.apiBaseUrl}/api/comments/by-user/${name}`);
    }
};
CommentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommentService);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n    border-radius: 1px solid;\n}\n\n.hf-navbar {\n    border-bottom: 1px solid #edeff1;\n}\n\n.hf-navbar-inner {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n}\n\n.reddit-text {\n    font-weight: 700;\n    font-size: 32px;\n    line-height: 1.1;\n    color: #1c1c1c;\n}\n\n.logo {\n    text-decoration: none;\n    display: inline-flex;\n    align-items: center;\n    padding-left: 6px;\n}\n\n.hf-nav-actions {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-left: auto;\n}\n\n.auth-links {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.create-link {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    height: 34px;\n    padding: 0 14px;\n    border-radius: 999px;\n    border: 1px solid #0079d3;\n    background-color: #0079d3;\n    color: #ffffff;\n    font-size: 13px;\n    font-weight: 700;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.create-link:hover,\n.create-link:focus {\n    color: #ffffff;\n    text-decoration: none;\n    opacity: 0.9;\n}\n\n.create-link:focus {\n    outline: 2px solid #80bdff;\n    outline-offset: 2px;\n}\n\n.login,\n.sign-up {\n    background-color: transparent;\n    border-color: #0079D3;\n    color: #0079D3;\n    fill: #0079D3;\n    border: 1px solid;\n    border-radius: 4px;\n    box-sizing: border-box;\n    text-align: center;\n    text-decoration: none;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 24px;\n    text-transform: uppercase;\n    padding: 3px 16px;\n    opacity: 1;\n}\n\n.sign-up {\n    background-color: #0079D3;\n    border-color: #0079D3;\n    color: aliceblue;\n}\n\n.sign-up:hover {\n    opacity: 0.6;\n}\n\n.userdetails {\n    background-color: transparent;\n    border-color: #0079D3;\n    color: #0079D3;\n    fill: #0079D3;\n    border: 1px solid;\n    border-radius: 4px;\n    box-sizing: border-box;\n    text-align: center;\n    text-decoration: none;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 24px;\n    text-transform: uppercase;\n    padding: 3px 16px;\n    opacity: 1;\n    border: 0;\n}\n\n.userdetails:hover {\n    border: 1px solid;\n}\n\n.dropdown-item {\n    background-color: #f8f9fa;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 18px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.dropdown-item:hover {\n    background-color: #0079D3;\n}\n\n.dropdown-menu {\n    background-color: #f8f9fa;\n}\n\n.account-icon {\n    border-radius: 4px;\n    margin-right: 5px;\n    max-height: 24px;\n    max-width: 24px;\n}\n\n@media (max-width: 767px) {\n    .reddit-text {\n        font-size: 24px;\n    }\n\n    .create-link {\n        padding: 0 10px;\n    }\n\n    .create-link span {\n        display: none;\n    }\n\n    .login,\n    .sign-up {\n        padding: 3px 10px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7O1FBRUksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDFweCBzb2xpZDtcbn1cblxuLmhmLW5hdmJhciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVmZjE7XG59XG5cbi5oZi1uYXZiYXItaW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxNnB4O1xufVxuXG4ucmVkZGl0LXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgY29sb3I6ICMxYzFjMWM7XG59XG5cbi5sb2dvIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cblxuLmhmLW5hdi1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uYXV0aC1saW5rcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xufVxuXG4uY3JlYXRlLWxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA3OWQzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc5ZDM7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNyZWF0ZS1saW5rOmhvdmVyLFxuLmNyZWF0ZS1saW5rOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgb3BhY2l0eTogMC45O1xufVxuXG4uY3JlYXRlLWxpbms6Zm9jdXMge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCAjODBiZGZmO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG5cbi5sb2dpbixcbi5zaWduLXVwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6ICMwMDc5RDM7XG4gICAgY29sb3I6ICMwMDc5RDM7XG4gICAgZmlsbDogIzAwNzlEMztcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogM3B4IDE2cHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNpZ24tdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc5RDM7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3OUQzO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59XG5cbi5zaWduLXVwOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbi51c2VyZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3OUQzO1xuICAgIGNvbG9yOiAjMDA3OUQzO1xuICAgIGZpbGw6ICMwMDc5RDM7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6IDNweCAxNnB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4udXNlcmRldGFpbHM6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc5RDM7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4uYWNjb3VudC1pY29uIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWF4LWhlaWdodDogMjRweDtcbiAgICBtYXgtd2lkdGg6IDI0cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5yZWRkaXQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAuY3JlYXRlLWxpbmsge1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgfVxuXG4gICAgLmNyZWF0ZS1saW5rIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5sb2dpbixcbiAgICAuc2lnbi11cCB7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/shared/auth.service */ "./src/app/auth/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let HeaderComponent = class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"];
    }
    ngOnInit() {
        this.authService.loggedIn.subscribe((data) => this.isLoggedIn = data);
        this.authService.username.subscribe((data) => this.username = data);
        this.isLoggedIn = this.authService.isLoggedIn();
        this.username = this.authService.getUserName();
    }
    goToUserProfile() {
        this.router.navigateByUrl('/user-profile/' + this.username);
    }
    logout() {
        this.authService.logout();
        this.isLoggedIn = false;
        this.router.navigateByUrl('');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".humanfirst-body {\n  padding-top: 10px;\n}\n\n.hf-sidebar {\n  border: 1px solid #edeff1;\n  border-radius: 12px;\n  background: #ffffff;\n  padding: 14px 10px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 12px;\n}\n\n.hf-main-col {\n  padding-bottom: 12px;\n}\n\n.hf-main-feed {\n  max-width: 980px;\n  margin: 0 auto;\n}\n\n.hf-brand {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1c1c1c;\n  margin-bottom: 10px;\n  padding: 0 8px;\n}\n\n.hf-nav,\n.hf-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.hf-divider {\n  border: 0;\n  border-top: 1px solid #edeff1;\n  margin: 10px 0;\n}\n\n.hf-section {\n  margin-bottom: 10px;\n}\n\n.hf-section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #7c7f84;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 6px 8px;\n}\n\n.hf-row {\n  width: 100%;\n  border: 0;\n  border-radius: 18px;\n  background: transparent;\n  color: #1c1c1c;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-align: left;\n  padding: 9px 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.hf-row:hover {\n  background: #f6f7f8;\n}\n\n.hf-row.active {\n  background: #f2f4f5;\n  font-weight: 600;\n}\n\n.hf-icon {\n  width: 16px;\n  color: #6a6d72;\n}\n\n.hf-action-row {\n  margin: 2px 0;\n}\n\n@media (max-width: 991px) {\n  .hf-sidebar {\n    position: static;\n    margin-bottom: 12px;\n  }\n\n  .hf-main-feed {\n    max-width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsU0FBUztFQUNULDZCQUE2QjtFQUM3QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaHVtYW5maXJzdC1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5oZi1zaWRlYmFyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWZmMTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTRweCAxMHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEycHg7XG59XG5cbi5oZi1tYWluLWNvbCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG4uaGYtbWFpbi1mZWVkIHtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5oZi1icmFuZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxYzFjMWM7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuXG4uaGYtbmF2LFxuLmhmLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJweDtcbn1cblxuLmhmLWRpdmlkZXIge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWRlZmYxO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmhmLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaGYtc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjN2M3Zjg0O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDZweCA4cHg7XG59XG5cbi5oZi1yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMxYzFjMWM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGYtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y2ZjdmODtcbn1cblxuLmhmLXJvdy5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZjJmNGY1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaGYtaWNvbiB7XG4gIHdpZHRoOiAxNnB4O1xuICBjb2xvcjogIzZhNmQ3Mjtcbn1cblxuLmhmLWFjdGlvbi1yb3cge1xuICBtYXJnaW46IDJweCAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmhmLXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxuXG4gIC5oZi1tYWluLWZlZWQge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subreddit/subreddit.service */ "./src/app/subreddit/subreddit.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







let HomeComponent = class HomeComponent {
    constructor(postService, subredditService, toastr, router) {
        this.postService = postService;
        this.subredditService = subredditService;
        this.toastr = toastr;
        this.router = router;
        this.posts = [];
        this.selectedDomain = 'all';
        this.primaryNavItems = [
            { key: 'home', label: 'Home', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faHome"] },
            { key: 'popular', label: 'Popular', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFire"] },
            { key: 'explore', label: 'Explore', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCompass"] },
            { key: 'all', label: 'All', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGlobe"], domain: 'all' }
        ];
        this.communityItems = [
            { key: 'discussions', label: 'discussions', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faComments"], domain: 'discussions' },
            { key: 'ai-prospects', label: 'AI prospects', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faLayerGroup"], domain: 'ai-prospects' },
            { key: 'humanfirst-lounge', label: 'Humanfirst Lounge', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUsers"] },
            { key: 'design', label: 'Design', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPaintBrush"] },
            { key: 'engineering', label: 'Engineering', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCogs"] },
            { key: 'announcements', label: 'Announcements', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBullhorn"] },
            { key: 'discover', label: 'Discover More Communities', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCompass"] }
        ];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPlus"];
        this.faChevronDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faChevronDown"];
        this.subredditIdByDomain = new Map();
    }
    ngOnInit() {
        this.loadDomainMapping();
    }
    selectDomain(domainKey) {
        if (this.selectedDomain === domainKey) {
            return;
        }
        this.selectedDomain = domainKey;
        this.loadPosts();
    }
    handlePrimaryNavClick(item) {
        if (item.domain) {
            this.selectDomain(item.domain);
        }
    }
    handleCommunityClick(item) {
        if (item.domain) {
            this.selectDomain(item.domain);
        }
    }
    isItemActive(item) {
        return !!item.domain && this.selectedDomain === item.domain;
    }
    goToCreateSubreddit() {
        this.router.navigateByUrl('/create-subreddit');
    }
    loadDomainMapping() {
        this.subredditService.getAllSubreddits().subscribe((subreddits) => {
            this.subredditIdByDomain.clear();
            const discussions = subreddits.find((item) => item.name.toLowerCase() === 'discussions');
            const aiProspects = subreddits.find((item) => item.name.toLowerCase() === 'ai prospects');
            if (discussions === null || discussions === void 0 ? void 0 : discussions.id) {
                this.subredditIdByDomain.set('discussions', discussions.id);
            }
            if (aiProspects === null || aiProspects === void 0 ? void 0 : aiProspects.id) {
                this.subredditIdByDomain.set('ai-prospects', aiProspects.id);
            }
            this.loadPosts();
        }, () => {
            this.toastr.error('Failed to load domain list');
            this.loadPosts();
        });
    }
    loadPosts() {
        if (this.selectedDomain === 'all') {
            this.postService.getAllPosts().subscribe((post) => {
                this.posts = post;
            }, () => {
                this.posts = [];
                this.toastr.error('Failed to load posts');
            });
            return;
        }
        const subredditId = this.subredditIdByDomain.get(this.selectedDomain);
        if (!subredditId) {
            this.posts = [];
            this.toastr.error('Selected domain is not available');
            return;
        }
        this.postService.getPostsBySubreddit(subredditId).subscribe((post) => {
            this.posts = post;
        }, () => {
            this.posts = [];
            this.toastr.error('Failed to load posts for selected domain');
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_3__["SubredditService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/post/create-post/create-post.component.css":
/*!************************************************************!*\
  !*** ./src/app/post/create-post/create-post.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnCreatePost,\n.btnCreateSubreddit {\n  margin-top: 5px;\n}\n\n.post-form {\n  margin: 2px;\n}\n\n.comment-notification {\n  margin-top: 5px;\n}\n\n.create-post-main {\n  max-width: 980px;\n  margin: 0 auto;\n}\n\n.create-post-container {\n  margin-top: 10px;\n  --post-line-color: #ccc;\n  border: 1px solid #ccc;\n  margin-bottom: 10px;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.8);\n  color: #878A8C;\n  position: relative;\n  border-radius: 4px;\n  padding: 5px;\n}\n\n.btnDiscard {\n    fill: #0079D3;\n    border: 1px solid;\n    border-radius: 4px;\n    text-align: center;\n    letter-spacing: 1px;\n    text-decoration: none;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 24px;\n    text-transform: uppercase;\n    padding: 3px 16px;\n    opacity: 1;\n    width: 288px;\n    height: 34px;\n    margin-top: 5px;\n    color: #0079D3;\n    background-color: transparent;\n  }\n\n.create-post-heading {\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 22px;\n  color: #1c1c1c;\n  flex: 1;\n}\n\n.btnCreatePost {\n    background-color: #0079D3;\n    border-color: #0079D3;\n    color: aliceblue;\n    fill: #0079D3;\n    border: 1px solid;\n    border-radius: 4px;\n    text-align: center;\n    letter-spacing: 1px;\n    text-decoration: none;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 24px;\n    text-transform: uppercase;\n    padding: 3px 16px;\n    opacity: 1;\n    width: 288px;\n    height: 34px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9jcmVhdGUtcG9zdC9jcmVhdGUtcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtFQUMvQjs7QUFFRjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFFZCxPQUFPO0FBQ1Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvY3JlYXRlLXBvc3QvY3JlYXRlLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5DcmVhdGVQb3N0LFxuLmJ0bkNyZWF0ZVN1YnJlZGRpdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnBvc3QtZm9ybSB7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4uY29tbWVudC1ub3RpZmljYXRpb24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jcmVhdGUtcG9zdC1tYWluIHtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jcmVhdGUtcG9zdC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAtLXBvc3QtbGluZS1jb2xvcjogI2NjYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBjb2xvcjogIzg3OEE4QztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmJ0bkRpc2NhcmQge1xuICAgIGZpbGw6ICMwMDc5RDM7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6IDNweCAxNnB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IDI4OHB4O1xuICAgIGhlaWdodDogMzRweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgY29sb3I6ICMwMDc5RDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuLmNyZWF0ZS1wb3N0LWhlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzFjMWMxYztcbiAgLW1zLWZsZXg6IDE7XG4gIGZsZXg6IDE7XG59XG5cbi5idG5DcmVhdGVQb3N0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OUQzO1xuICAgIGJvcmRlci1jb2xvcjogIzAwNzlEMztcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGZpbGw6ICMwMDc5RDM7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmc6IDNweCAxNnB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IDI4OHB4O1xuICAgIGhlaWdodDogMzRweDtcbiAgfVxuIl19 */");

/***/ }),

/***/ "./src/app/post/create-post/create-post.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/post/create-post/create-post.component.ts ***!
  \***********************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_video_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/video-upload.service */ "./src/app/shared/video-upload.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let CreatePostComponent = class CreatePostComponent {
    constructor(router, postService, toastr, videoUploadService) {
        this.router = router;
        this.postService = postService;
        this.toastr = toastr;
        this.videoUploadService = videoUploadService;
        this.isUploadingVideo = false;
        this.uploadedVideoFileName = '';
        this.domainOptions = [
            { value: 'all', label: 'all' },
            { value: 'discussions', label: 'discussions' },
            { value: 'AI prospects', label: 'AI prospects' },
        ];
        this.postPayload = {
            postName: '',
            url: '',
            videoKey: '',
            description: '',
            subredditName: ''
        };
    }
    ngOnInit() {
        this.createPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            postName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            subredditName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('all', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    createPost() {
        if (this.createPostForm.invalid) {
            this.toastr.error('Please fill in all required fields');
            return;
        }
        if (this.isUploadingVideo) {
            this.toastr.info('Video is still uploading. Please wait.');
            return;
        }
        const subredditName = this.createPostForm.get('subredditName').value;
        if (subredditName === 'all') {
            this.toastr.error('Please choose discussions or AI prospects before posting');
            return;
        }
        this.postPayload.postName = this.createPostForm.get('postName').value;
        this.postPayload.subredditName = subredditName;
        this.postPayload.url = (this.createPostForm.get('url').value || '').trim();
        this.postPayload.description = this.createPostForm.get('description').value;
        this.postService.createPost(this.postPayload).subscribe((data) => {
            this.toastr.success('Post created successfully');
            this.router.navigateByUrl('/');
        }, () => {
            this.toastr.error('Create post failed. Please login again and try once more.');
        });
    }
    onVideoSelected(event) {
        const input = event.target;
        const file = input.files && input.files.length > 0 ? input.files[0] : null;
        if (!file) {
            return;
        }
        this.isUploadingVideo = true;
        this.videoUploadService.createVideoUploadUrl(file.name, file.type).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((uploadData) => this.videoUploadService.uploadVideo(uploadData.uploadUrl, file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => {
            this.postPayload.videoKey = uploadData.videoKey;
            this.uploadedVideoFileName = file.name;
            this.toastr.success('Video uploaded successfully');
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => {
            this.isUploadingVideo = false;
            input.value = '';
        })).subscribe({
            error: () => {
                this.postPayload.videoKey = '';
                this.uploadedVideoFileName = '';
                this.toastr.error('Video upload failed');
            }
        });
    }
    discardPost() {
        this.router.navigateByUrl('/');
    }
};
CreatePostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: src_app_shared_video_upload_service__WEBPACK_IMPORTED_MODULE_6__["VideoUploadService"] }
];
CreatePostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-post',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/create-post/create-post.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-post.component.css */ "./src/app/post/create-post/create-post.component.css")).default]
    })
], CreatePostComponent);



/***/ }),

/***/ "./src/app/post/view-post/view-post.component.css":
/*!********************************************************!*\
  !*** ./src/app/post/view-post/view-post.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".view-post-main {\n  max-width: 980px;\n  margin: 0 auto;\n}\n\n.post-title {\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 1;\n}\n\n.post-title:hover {\n  opacity: 0.6;\n}\n\n.subreddit-text {\n  font-weight: bold;\n}\n\n.post-url {\n  color: black;\n}\n\n.username {\n  color: gray;\n}\n\n.post-text {\n  margin-top: 10px;\n}\n\n.post-video {\n  width: 100%;\n  max-height: 460px;\n  margin-top: 10px;\n  border-radius: 6px;\n  background: #000;\n}\n\n.post-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n.post {\n  --post-line-color: #ccc;\n  border: 1px solid #ccc;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n  background-color: rgba(255,255,255,0.8);\n  color: #878A8C;\n  position: relative;\n  border-radius: 4px;\n  padding: 5px;\n}\n\n.comment {\n  --post-line-color: #ccc;\n  border: 1px solid #ccc;\n  margin-bottom: 10px;\n  overflow: hidden;\n  background-color: rgba(255,255,255,0.8);\n  color: #878A8C;\n  position: relative;\n  border-radius: 4px;\n  padding: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC92aWV3LXBvc3Qvdmlldy1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVDQUF1QztFQUN2QyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3ZpZXctcG9zdC92aWV3LXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3LXBvc3QtbWFpbiB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucG9zdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5wb3N0LXRpdGxlOmhvdmVyIHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4uc3VicmVkZGl0LXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBvc3QtdXJsIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udXNlcm5hbWUge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnBvc3QtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wb3N0LXZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDQ2MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG5cbi5wb3N0LWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucG9zdCB7XG4gIC0tcG9zdC1saW5lLWNvbG9yOiAjY2NjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gIGNvbG9yOiAjODc4QThDO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uY29tbWVudCB7XG4gIC0tcG9zdC1saW5lLWNvbG9yOiAjY2NjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gIGNvbG9yOiAjODc4QThDO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/post/view-post/view-post.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/post/view-post/view-post.component.ts ***!
  \*******************************************************/
/*! exports provided: ViewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPostComponent", function() { return ViewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/comment/comment.service */ "./src/app/comment/comment.service.ts");







let ViewPostComponent = class ViewPostComponent {
    constructor(postService, activateRoute, commentService, router) {
        this.postService = postService;
        this.activateRoute = activateRoute;
        this.commentService = commentService;
        this.router = router;
        this.postId = this.activateRoute.snapshot.params.id;
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
        this.commentPayload = {
            text: '',
            postId: this.postId
        };
    }
    ngOnInit() {
        this.getPostById();
        this.getCommentsForPost();
    }
    postComment() {
        this.commentPayload.text = this.commentForm.get('text').value;
        this.commentService.postComment(this.commentPayload).subscribe(data => {
            this.commentForm.get('text').setValue('');
            this.getCommentsForPost();
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        });
    }
    getPostById() {
        this.postService.getPost(this.postId).subscribe(data => {
            this.post = data;
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        });
    }
    getCommentsForPost() {
        this.commentService.getAllCommentsForPost(this.postId).subscribe(data => {
            this.comments = data;
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        });
    }
};
ViewPostComponent.ctorParameters = () => [
    { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ViewPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-post',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/view-post/view-post.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-post.component.css */ "./src/app/post/view-post/view-post.component.css")).default]
    })
], ViewPostComponent);



/***/ }),

/***/ "./src/app/shared/post-tile/post-tile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/post-tile/post-tile.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hf-post-card {\n    border: 1px solid #e6e8eb;\n    border-radius: 12px;\n    background: #ffffff;\n    color: #1f2328;\n    margin-bottom: 12px;\n    padding: 12px 14px;\n}\n\n.hf-post-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 8px;\n}\n\n.hf-post-meta {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 12px;\n    color: #6b7076;\n}\n\n.hf-community {\n    font-weight: 600;\n    color: #4a4f56;\n}\n\n.hf-dot {\n    color: #a0a5ab;\n}\n\n.hf-overflow-btn {\n    border: 0;\n    background: transparent;\n    color: #8d939a;\n    cursor: pointer;\n    padding: 4px 6px;\n    border-radius: 14px;\n}\n\n.hf-overflow-btn:hover {\n    background: #f4f6f8;\n}\n\n.hf-post-title {\n    font-size: 20px;\n    line-height: 1.3;\n    font-weight: 700;\n    margin-bottom: 8px;\n    color: #111418;\n}\n\n.hf-post-title-link {\n    color: inherit;\n    text-decoration: none;\n}\n\n.hf-post-title-link:hover {\n    text-decoration: underline;\n}\n\n.hf-text-preview {\n    margin: 0 0 10px;\n    color: #444a51;\n    font-size: 14px;\n    line-height: 1.45;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.hf-media-wrap {\n    width: min(100%, 620px);\n    margin: 0 auto 10px;\n    position: relative;\n    border-radius: 10px;\n    overflow: hidden;\n    background: #0f1114;\n    aspect-ratio: 1 / 1;\n}\n\n.hf-media-content {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.hf-media-badge {\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    padding: 6px 9px;\n    border-radius: 14px;\n    background: rgba(0, 0, 0, 0.6);\n    color: #ffffff;\n    font-size: 12px;\n}\n\n.hf-post-footer {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 8px;\n    border-top: 1px solid #eff1f3;\n    padding-top: 10px;\n}\n\n.hf-action-btn {\n    border: 1px solid #d8dde2;\n    background: #ffffff;\n    color: #4f5459;\n    border-radius: 18px;\n    padding: 5px 10px;\n    cursor: pointer;\n    font-size: 12px;\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.hf-action-btn:hover {\n    background: #f4f6f8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Bvc3QtdGlsZS9wb3N0LXRpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixRQUFRO0lBQ1IsNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wb3N0LXRpbGUvcG9zdC10aWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGYtcG9zdC1jYXJkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlOGViO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzFmMjMyODtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEycHggMTRweDtcbn1cblxuLmhmLXBvc3QtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmhmLXBvc3QtbWV0YSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM2YjcwNzY7XG59XG5cbi5oZi1jb21tdW5pdHkge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM0YTRmNTY7XG59XG5cbi5oZi1kb3Qge1xuICAgIGNvbG9yOiAjYTBhNWFiO1xufVxuXG4uaGYtb3ZlcmZsb3ctYnRuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICM4ZDkzOWE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDRweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbn1cblxuLmhmLW92ZXJmbG93LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y0ZjZmODtcbn1cblxuLmhmLXBvc3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGNvbG9yOiAjMTExNDE4O1xufVxuXG4uaGYtcG9zdC10aXRsZS1saW5rIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5oZi1wb3N0LXRpdGxlLWxpbms6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaGYtdGV4dC1wcmV2aWV3IHtcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xuICAgIGNvbG9yOiAjNDQ0YTUxO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS40NTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaGYtbWVkaWEtd3JhcCB7XG4gICAgd2lkdGg6IG1pbigxMDAlLCA2MjBweCk7XG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICMwZjExMTQ7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cblxuLmhmLW1lZGlhLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmhmLW1lZGlhLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogNnB4IDlweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5oZi1wb3N0LWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDhweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VmZjFmMztcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmhmLWFjdGlvbi1idG4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGRkZTI7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzRmNTQ1OTtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbn1cblxuLmhmLWFjdGlvbi1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmNGY2Zjg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/post-tile/post-tile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/post-tile/post-tile.component.ts ***!
  \*********************************************************/
/*! exports provided: PostTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTileComponent", function() { return PostTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let PostTileComponent = class PostTileComponent {
    constructor(router) {
        this.router = router;
        this.faComments = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faComments"];
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHeart"];
        this.faShare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faShare"];
        this.faEllipsisH = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEllipsisH"];
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlay"];
        this.faVolumeMute = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faVolumeMute"];
    }
    ngOnInit() {
    }
    goToPost(id) {
        this.router.navigateByUrl('/view-post/' + id);
    }
    isVideoPost(post) {
        return !!(post === null || post === void 0 ? void 0 : post.videoUrl);
    }
    getImageUrl(post) {
        if (!(post === null || post === void 0 ? void 0 : post.url)) {
            return null;
        }
        return this.isLikelyImageUrl(post.url) ? post.url : null;
    }
    isMediaPost(post) {
        return this.isVideoPost(post) || !!this.getImageUrl(post);
    }
    isExternalLinkPost(post) {
        return !!(post === null || post === void 0 ? void 0 : post.url) && !this.isLikelyImageUrl(post.url);
    }
    sharePost(post) {
        var _a;
        const shareUrl = `${window.location.origin}/view-post/${post.id}`;
        const webNavigator = navigator;
        if (webNavigator.share) {
            webNavigator.share({ title: post.postName, url: shareUrl }).catch(() => {
            });
            return;
        }
        if ((_a = webNavigator.clipboard) === null || _a === void 0 ? void 0 : _a.writeText) {
            webNavigator.clipboard.writeText(shareUrl).catch(() => {
            });
        }
    }
    isLikelyImageUrl(url) {
        return /\.(png|jpe?g|gif|webp|bmp|svg|avif)(\?.*)?$/i.test(url);
    }
};
PostTileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostTileComponent.prototype, "posts", void 0);
PostTileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-tile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post-tile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-tile/post-tile.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./post-tile.component.css */ "./src/app/shared/post-tile/post-tile.component.css")).default]
    })
], PostTileComponent);



/***/ }),

/***/ "./src/app/shared/post.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/post.service.ts ***!
  \****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let PostService = class PostService {
    constructor(http) {
        this.http = http;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl;
    }
    getAllPosts() {
        return this.http.get(`${this.apiBaseUrl}/api/posts/`);
    }
    createPost(postPayload) {
        return this.http.post(`${this.apiBaseUrl}/api/posts/`, postPayload);
    }
    getPost(id) {
        return this.http.get(`${this.apiBaseUrl}/api/posts/${id}`);
    }
    getPostsBySubreddit(id) {
        return this.http.get(`${this.apiBaseUrl}/api/posts/by-subreddit/${id}`);
    }
    getAllPostsByUser(name) {
        return this.http.get(`${this.apiBaseUrl}/api/posts/by-user/${name}`);
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "./src/app/shared/video-upload.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/video-upload.service.ts ***!
  \************************************************/
/*! exports provided: VideoUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoUploadService", function() { return VideoUploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let VideoUploadService = class VideoUploadService {
    constructor(http) {
        this.http = http;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl;
    }
    createVideoUploadUrl(fileName, contentType) {
        const request = { fileName, contentType };
        return this.http.post(`${this.apiBaseUrl}/api/uploads/video/presign`, request);
    }
    uploadVideo(uploadUrl, file) {
        const contentType = file.type && file.type.length > 0 ? file.type : 'application/octet-stream';
        return this.http.put(uploadUrl, file, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': contentType }),
            responseType: 'text'
        });
    }
};
VideoUploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VideoUploadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VideoUploadService);



/***/ }),

/***/ "./src/app/shared/vote-button/vote-button.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/vote-button/vote-button.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vote-actions {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.vote-btn {\n    border: 1px solid #d5d7da;\n    background-color: #ffffff;\n    color: #4f5459;\n    border-radius: 18px;\n    padding: 5px 9px;\n    cursor: pointer;\n    font-size: 12px;\n    display: inline-flex;\n    align-items: center;\n}\n\n.vote-btn:hover {\n    background-color: #f4f6f8;\n}\n\n.vote-btn.active.like-btn {\n    border-color: #2e7d32;\n    color: #2e7d32;\n}\n\n.vote-btn.active.dislike-btn {\n    border-color: #c62828;\n    color: #c62828;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3ZvdGUtYnV0dG9uL3ZvdGUtYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC92b3RlLWJ1dHRvbi92b3RlLWJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZvdGUtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbn1cblxuLnZvdGUtYnRuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDVkN2RhO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICM0ZjU0NTk7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBwYWRkaW5nOiA1cHggOXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnZvdGUtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmY4O1xufVxuXG4udm90ZS1idG4uYWN0aXZlLmxpa2UtYnRuIHtcbiAgICBib3JkZXItY29sb3I6ICMyZTdkMzI7XG4gICAgY29sb3I6ICMyZTdkMzI7XG59XG5cbi52b3RlLWJ0bi5hY3RpdmUuZGlzbGlrZS1idG4ge1xuICAgIGJvcmRlci1jb2xvcjogI2M2MjgyODtcbiAgICBjb2xvcjogI2M2MjgyODtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/vote-button/vote-button.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/vote-button/vote-button.component.ts ***!
  \*************************************************************/
/*! exports provided: VoteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteButtonComponent", function() { return VoteButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _vote_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vote-type */ "./src/app/shared/vote-button/vote-type.ts");
/* harmony import */ var _vote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vote.service */ "./src/app/shared/vote.service.ts");
/* harmony import */ var src_app_auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/shared/auth.service */ "./src/app/auth/shared/auth.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");









let VoteButtonComponent = class VoteButtonComponent {
    constructor(voteService, authService, postService, toastr) {
        this.voteService = voteService;
        this.authService = authService;
        this.postService = postService;
        this.toastr = toastr;
        this.faThumbsUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faThumbsUp"];
        this.faThumbsDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faThumbsDown"];
        this.votePayload = {
            voteType: undefined,
            postId: undefined
        };
        this.authService.loggedIn.subscribe((data) => this.isLoggedIn = data);
    }
    ngOnInit() {
        this.updateVoteDetails();
    }
    upvotePost() {
        this.votePayload.voteType = _vote_type__WEBPACK_IMPORTED_MODULE_3__["VoteType"].UPVOTE;
        this.vote();
    }
    downvotePost() {
        this.votePayload.voteType = _vote_type__WEBPACK_IMPORTED_MODULE_3__["VoteType"].DOWNVOTE;
        this.vote();
    }
    vote() {
        this.votePayload.postId = this.post.id;
        this.voteService.vote(this.votePayload).subscribe(() => {
            this.updateVoteDetails();
        }, error => {
            this.toastr.error(error.error.message);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
        });
    }
    updateVoteDetails() {
        this.postService.getPost(this.post.id).subscribe(post => {
            this.post = post;
        });
    }
};
VoteButtonComponent.ctorParameters = () => [
    { type: _vote_service__WEBPACK_IMPORTED_MODULE_4__["VoteService"] },
    { type: src_app_auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VoteButtonComponent.prototype, "post", void 0);
VoteButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vote-button',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vote-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/vote-button/vote-button.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vote-button.component.css */ "./src/app/shared/vote-button/vote-button.component.css")).default]
    })
], VoteButtonComponent);



/***/ }),

/***/ "./src/app/shared/vote-button/vote-type.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/vote-button/vote-type.ts ***!
  \*************************************************/
/*! exports provided: VoteType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteType", function() { return VoteType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var VoteType;
(function (VoteType) {
    VoteType[VoteType["UPVOTE"] = 0] = "UPVOTE";
    VoteType[VoteType["DOWNVOTE"] = 1] = "DOWNVOTE";
})(VoteType || (VoteType = {}));


/***/ }),

/***/ "./src/app/shared/vote.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/vote.service.ts ***!
  \****************************************/
/*! exports provided: VoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteService", function() { return VoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let VoteService = class VoteService {
    constructor(http) {
        this.http = http;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl;
    }
    vote(votePayload) {
        return this.http.post(`${this.apiBaseUrl}/api/votes/`, votePayload);
    }
};
VoteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VoteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VoteService);



/***/ }),

/***/ "./src/app/subreddit/create-subreddit/create-subreddit.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/subreddit/create-subreddit/create-subreddit.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".create-subreddit-main {\n  max-width: 980px;\n  margin: 0 auto;\n}\n\n.create-subreddit-container {\n  margin-top: 10px;\n  --post-line-color: #ccc;\n  border: 1px solid #ccc;\n  margin-bottom: 10px;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.8);\n  color: #878A8C;\n  position: relative;\n  border-radius: 4px;\n  padding: 5px;\n}\n\n.create-subreddit-heading {\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 22px;\n  color: #1c1c1c;\n  flex: 1;\n}\n\n.btnCreateSubreddit {\n  background-color: #0079D3;\n  border-color: #0079D3;\n  color: aliceblue;\n  fill: #0079D3;\n  border: 1px solid;\n  border-radius: 4px;\n  text-align: center;\n  letter-spacing: 1px;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .5px;\n  line-height: 24px;\n  text-transform: uppercase;\n  padding: 3px 16px;\n  opacity: 1;\n  width: 288px;\n  height: 34px;\n}\n\n.btnDiscard {\n  fill: #0079D3;\n  border: 1px solid;\n  border-radius: 4px;\n  text-align: center;\n  letter-spacing: 1px;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .5px;\n  line-height: 24px;\n  text-transform: uppercase;\n  padding: 3px 16px;\n  opacity: 1;\n  width: 288px;\n  height: 34px;\n  margin-top: 5px;\n  color: #0079D3;\n  background-color: transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VicmVkZGl0L2NyZWF0ZS1zdWJyZWRkaXQvY3JlYXRlLXN1YnJlZGRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBRWQsT0FBTztBQUNUOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3N1YnJlZGRpdC9jcmVhdGUtc3VicmVkZGl0L2NyZWF0ZS1zdWJyZWRkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtc3VicmVkZGl0LW1haW4ge1xuICBtYXgtd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNyZWF0ZS1zdWJyZWRkaXQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLS1wb3N0LWxpbmUtY29sb3I6ICNjY2M7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgY29sb3I6ICM4NzhBOEM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jcmVhdGUtc3VicmVkZGl0LWhlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzFjMWMxYztcbiAgLW1zLWZsZXg6IDE7XG4gIGZsZXg6IDE7XG59XG5cbi5idG5DcmVhdGVTdWJyZWRkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OUQzO1xuICBib3JkZXItY29sb3I6ICMwMDc5RDM7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIGZpbGw6ICMwMDc5RDM7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogM3B4IDE2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAyODhweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uYnRuRGlzY2FyZCB7XG4gIGZpbGw6ICMwMDc5RDM7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogM3B4IDE2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAyODhweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiAjMDA3OUQzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/subreddit/create-subreddit/create-subreddit.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/subreddit/create-subreddit/create-subreddit.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateSubredditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubredditComponent", function() { return CreateSubredditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _subreddit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subreddit.service */ "./src/app/subreddit/subreddit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let CreateSubredditComponent = class CreateSubredditComponent {
    constructor(router, subredditService) {
        this.router = router;
        this.subredditService = subredditService;
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.createSubredditForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.subredditModel = {
            name: '',
            description: ''
        };
    }
    ngOnInit() {
    }
    discard() {
        this.router.navigateByUrl('/');
    }
    createSubreddit() {
        this.subredditModel.name = this.createSubredditForm.get('title')
            .value;
        this.subredditModel.description = this.createSubredditForm.get('description')
            .value;
        this.subredditService.createSubreddit(this.subredditModel).subscribe(data => {
            this.router.navigateByUrl('/list-subreddits');
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
        });
    }
};
CreateSubredditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _subreddit_service__WEBPACK_IMPORTED_MODULE_4__["SubredditService"] }
];
CreateSubredditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-subreddit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-subreddit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/create-subreddit/create-subreddit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-subreddit.component.css */ "./src/app/subreddit/create-subreddit/create-subreddit.component.css")).default]
    })
], CreateSubredditComponent);



/***/ }),

/***/ "./src/app/subreddit/list-subreddits/list-subreddits.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/subreddit/list-subreddits/list-subreddits.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-subreddits-main {\n  max-width: 980px;\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VicmVkZGl0L2xpc3Qtc3VicmVkZGl0cy9saXN0LXN1YnJlZGRpdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3VicmVkZGl0L2xpc3Qtc3VicmVkZGl0cy9saXN0LXN1YnJlZGRpdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LXN1YnJlZGRpdHMtbWFpbiB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/subreddit/list-subreddits/list-subreddits.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/subreddit/list-subreddits/list-subreddits.component.ts ***!
  \************************************************************************/
/*! exports provided: ListSubredditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubredditsComponent", function() { return ListSubredditsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _subreddit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subreddit.service */ "./src/app/subreddit/subreddit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ListSubredditsComponent = class ListSubredditsComponent {
    constructor(subredditService) {
        this.subredditService = subredditService;
    }
    ngOnInit() {
        this.subredditService.getAllSubreddits().subscribe(data => {
            this.subreddits = data;
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        });
    }
};
ListSubredditsComponent.ctorParameters = () => [
    { type: _subreddit_service__WEBPACK_IMPORTED_MODULE_2__["SubredditService"] }
];
ListSubredditsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-subreddits',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-subreddits.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/list-subreddits/list-subreddits.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-subreddits.component.css */ "./src/app/subreddit/list-subreddits/list-subreddits.component.css")).default]
    })
], ListSubredditsComponent);



/***/ }),

/***/ "./src/app/subreddit/subreddit.service.ts":
/*!************************************************!*\
  !*** ./src/app/subreddit/subreddit.service.ts ***!
  \************************************************/
/*! exports provided: SubredditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubredditService", function() { return SubredditService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let SubredditService = class SubredditService {
    constructor(http) {
        this.http = http;
        this.apiBaseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl;
    }
    getAllSubreddits() {
        return this.http.get(`${this.apiBaseUrl}/api/subreddit`);
    }
    createSubreddit(subredditModel) {
        return this.http.post(`${this.apiBaseUrl}/api/subreddit`, subredditModel);
    }
};
SubredditService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SubredditService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SubredditService);



/***/ }),

/***/ "./src/app/token-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/token-interceptor.ts ***!
  \**************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/shared/auth.service */ "./src/app/auth/shared/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let TokenInterceptor = class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.isTokenRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    intercept(req, next) {
        if (req.url.indexOf('refresh') !== -1 || req.url.indexOf('login') !== -1) {
            return next.handle(req);
        }
        const jwtToken = this.authService.getJwtToken();
        if (jwtToken) {
            return next.handle(this.addToken(req, jwtToken)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]
                    && error.status === 403) {
                    return this.handleAuthErrors(req, next);
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
            }));
        }
        return next.handle(req);
    }
    handleAuthErrors(req, next) {
        if (!this.isTokenRefreshing) {
            this.isTokenRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((refreshTokenResponse) => {
                this.isTokenRefreshing = false;
                this.refreshTokenSubject
                    .next(refreshTokenResponse.authenticationToken);
                return next.handle(this.addToken(req, refreshTokenResponse.authenticationToken));
            }));
        }
        else {
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(result => result !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((res) => {
                return next.handle(this.addToken(req, this.authService.getJwtToken()));
            }));
        }
    }
    addToken(req, jwtToken) {
        return req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + jwtToken)
        });
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenInterceptor);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
const isLocalHost = hostname === 'localhost' || hostname === '127.0.0.1';
const environment = {
    production: false,
    apiBaseUrl: isLocalHost ? 'http://localhost:8080' : ''
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nijiachen/humanfirst-MVP/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map