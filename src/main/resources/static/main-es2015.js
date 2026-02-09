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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"verification-section\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header text-center\">\n          <h4>Account Verification</h4>\n        </div>\n        <div class=\"card-body text-center\">\n          <p class=\"verification-message\" [class.is-error]=\"isError\">{{ message }}</p>\n          <a routerLink=\"/login\" class=\"btn btn-primary mt-2\">Go to Login</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-section\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header text-center\"><h4>Login</h4></div>\n                <div class=\"card-body\">\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n                        <div class=\"form-group row\">\n                            <label for=\"user_name\" class=\"col-md-4 col-form-label text-md-right\">Username</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" id=\"user_name\" class=\"form-control\" [formControlName]=\"'username'\" name=\"user_name\" required\n                                    autofocus>\n                                <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\">\n                                   Please provide a valid username\n                                </span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"col-md-4 col-form-label text-md-right\">Password</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"password\" id=\"password\" class=\"form-control\" [formControlName]=\"'password'\" name=\"password\" required>\n                                <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">\n                                  Password cannot be empty\n                                </span>\n                            </div>\n                        </div>\n\n                        <span class=\"col-md-6 offset-md-4 auth-cta-row\">\n                            <button type=\"submit\" class=\"login\">\n                                Login\n                            </button>\n                            <span class=\"auth-switch\">New User? <a routerLink=\"/sign-up\">SIGN UP</a></span>\n                        </span>\n                        <div class=\"login-failed\" *ngIf='this.isError'>\n                             <p class=\"login-failed-text\">Login Failed. Please check your credentials and try again.</p>\n                        </div>\n                        <div class=\"register-success\" *ngIf=\"this.registerSuccessMessage.length > 0\">\n                            <p class=\"register-success-text\">{{registerSuccessMessage}}</p>\n                       </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\"></div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register-section\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header text-center\">\n                    <h4>Register</h4>\n                </div>\n                <div class=\"card-body\">\n                    <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\n                        <div class=\"form-group row\">\n                            <label for=\"email_address\" class=\"col-md-4 col-form-label text-md-right\">E-Mail\n                                Address</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" [formControlName]=\"'email'\" id=\"email_address\" class=\"form-control\" name=\"email-address\" required\n                                    autofocus>\n                                <span *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\">\n                                    Please provide a valid email\n                                </span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label text-md-right\">User Name</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" [formControlName]=\"'username'\"class=\"form-control\" required autofocus>\n                                <span *ngIf=\"!signupForm.get('username').valid && signupForm.get('username').touched\">\n                                    Please provide a valid username\n                                </span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"col-md-4 col-form-label text-md-right\">Password</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"password\" [formControlName]=\"'password'\" id=\"password\" class=\"form-control\" name=\"password\" required>\n                                <span *ngIf=\"!signupForm.get('password').valid && signupForm.get('password').touched\">\n                                    Please provide a valid Password\n                                </span>\n                            </div>\n                        </div>\n\n                        <span class=\"col-md-6 offset-md-4 auth-cta-row\">\n                            <button type=\"submit\" class=\"sign-up\">\n                                Sign Up\n                            </button>\n                            <span class=\"auth-switch\">Existing user? <a routerLink=\"/login\">Log In</a></span>\n                        </span>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\"></div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-profile.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-profile.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container profile-wrapper\">\n  <div class=\"profile-summary\">\n    Welcome <b>{{name}}</b>.<br /> You have posted <b>{{postLength}}</b> time(s) and commented\n    <b>{{commentLength}}</b> time(s).\n    You can check your post and comment history below.\n  </div>\n  <hr />\n  <div class=\"profile-section-title\">\n    Your Posts:\n  </div>\n  <app-post-tile [posts]=\"posts\"></app-post-tile>\n  <hr />\n  <div class=\"profile-section-title\">\n    Your Comments:\n  </div>\n  <div *ngFor=\"let comment of comments\">\n    <div class=\"profile-comment\">\n      <div class=\"username\">\n        <a routerLink=\"/user/comment.username\">{{comment.userName}}</a>\n      </div>\n      <div>\n        <p>{{comment.duration}}</p>\n      </div>\n      <b>{{comment.text}}</b>\n    </div>\n    <hr />\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <nav class=\"navbar fixed-top navbar-expand-lg hf-navbar\">\n        <div class=\"hf-navbar-inner\">\n            <a aria-label=\"Home\" class=\"logo\" routerLink=\"/\">\n                <span class=\"reddit-text\">\n                    Humanfirst\n                </span>\n            </a>\n\n            <div class=\"hf-nav-actions\">\n                <a aria-label=\"Create post\" class=\"create-link\" routerLink=\"/create\">\n                    <fa-icon [icon]=\"faPlus\"></fa-icon>\n                    <span>Create</span>\n                </a>\n\n                <div *ngIf=\"isLoggedIn\" ngbDropdown class=\"user-menu\">\n                    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                        <button (click)=\"goToUserProfile()\" ngbDropdownItem>Profile</button>\n                        <button (click)=\"logout()\" ngbDropdownItem>Logout</button>\n                    </div>\n                    <button class=\"userdetails\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                        <img class=\"account-icon\" src=\"https://www.redditstatic.com/avatars/avatar_default_08_D4E815.png\">\n                        {{username}}\n                    </button>\n                </div>\n\n                <div *ngIf=\"!isLoggedIn\" class=\"auth-links\">\n                    <a routerLink=\"/sign-up\" class=\"hf-auth-link sign-up\">Sign up</a>\n                    <a routerLink=\"/login\" class=\"hf-auth-link login\">Login</a>\n                </div>\n            </div>\n        </div>\n    </nav>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"humanfirst-body\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-xl-2\">\n        <aside class=\"hf-sidebar\">\n          <nav class=\"hf-nav\">\n            <button\n              *ngFor=\"let item of primaryNavItems\"\n              type=\"button\"\n              class=\"hf-row\"\n              [class.active]=\"isItemActive(item)\"\n              (click)=\"handlePrimaryNavClick(item)\">\n              <fa-icon class=\"hf-icon\" [icon]=\"item.icon\"></fa-icon>\n              <span>{{item.label}}</span>\n            </button>\n          </nav>\n\n          <hr class=\"hf-divider\" />\n\n          <button type=\"button\" class=\"hf-row hf-action-row\" (click)=\"goToCreateSubreddit()\">\n            <fa-icon class=\"hf-icon\" [icon]=\"faPlus\"></fa-icon>\n            <span>Start a community</span>\n          </button>\n\n          <hr class=\"hf-divider\" />\n\n          <section class=\"hf-section\">\n            <div class=\"hf-section-header\">\n              <span>COMMUNITIES</span>\n              <fa-icon [icon]=\"faChevronDown\"></fa-icon>\n            </div>\n            <button\n              *ngFor=\"let item of communityItems\"\n              type=\"button\"\n              class=\"hf-row\"\n              [class.active]=\"isItemActive(item)\"\n              (click)=\"handleCommunityClick(item)\">\n              <fa-icon class=\"hf-icon\" [icon]=\"item.icon\"></fa-icon>\n              <span>{{item.label}}</span>\n            </button>\n          </section>\n\n          <section class=\"hf-section\">\n            <div class=\"hf-section-header\">\n              <span>CUSTOM FEEDS</span>\n              <fa-icon [icon]=\"faChevronDown\"></fa-icon>\n            </div>\n            <button type=\"button\" class=\"hf-row\">\n              <fa-icon class=\"hf-icon\" [icon]=\"faPlus\"></fa-icon>\n              <span>Create Custom Feed</span>\n            </button>\n          </section>\n        </aside>\n      </div>\n\n      <div class=\"col-lg-9 col-xl-10 hf-main-col\">\n        <div class=\"hf-main-feed\">\n          <app-post-tile [posts]=\"posts\"></app-post-tile>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/create-post/create-post.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/create-post/create-post.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <hr />\n      <div class=\"col-12 create-post-main\">\n        <div class=\"create-post-container\">\n          <form class=\"post-form\" [formGroup]=\"createPostForm\" (ngSubmit)=\"createPost()\">\n            <div class=\"form-group\">\n              <div class=\"create-post-heading\">Create Post</div>\n              <hr />\n              <input type=\"text\" [formControlName]=\"'postName'\" class=\"form-control\" style=\"margin-top: 5px\"\n                placeholder=\"Title\">\n\n              <input type=\"text\" class=\"form-control\" [formControlName]=\"'url'\" style=\"margin-top: 5px\" placeholder=\"URL (optional)\">\n\n              <div style=\"margin-top: 10px;\">\n                <input\n                  type=\"file\"\n                  class=\"form-control\"\n                  accept=\"video/*\"\n                  (change)=\"onVideoSelected($event)\">\n                <small *ngIf=\"isUploadingVideo\">Uploading video...</small>\n                <small *ngIf=\"!isUploadingVideo && uploadedVideoFileName\">Uploaded: {{uploadedVideoFileName}}</small>\n              </div>\n\n              <select class=\"form-control\" style=\"margin-top: 10px\" [formControlName]=\"'subredditName'\">\n                <option *ngFor=\"let domain of domainOptions\" [value]=\"domain.value\">{{domain.label}}</option>\n              </select>\n\n              <editor [formControlName]=\"'description'\" [init]=\"{\n                          height: 500,\n                          menubar: false,\n                          skin: 'oxide-dark',\n                          content_css: 'dark',\n                          plugins: [\n                            'advlist autolink lists link image charmap print preview anchor',\n                            'searchreplace visualblocks code fullscreen',\n                            'insertdatetime media table paste code help wordcount'\n                          ],\n                          toolbar:\n                            'undo redo | formatselect | bold italic backcolor | \\\n                            alignleft aligncenter alignright alignjustify | \\\n                            bullist numlist outdent indent | removeformat | help'\n                        }\"></editor>\n              <span>\n                <div style=\"margin-top: 5px\" class=\"float-right\">\n                  <button type=\"button\" (click)=\"discardPost()\" class=\"btnDiscard\">Discard</button>\n                  <button type=\"submit\" class=\"btnCreatePost\" [disabled]=\"isUploadingVideo\">Post</button>\n                </div>\n              </span>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/view-post/view-post.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/view-post/view-post.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <hr />\n    <div class=\"col-12 view-post-main\">\n      <div class=\"row post\">\n        <div class=\"col-md-12\">\n          <span>\n            <span class=\"subreddit-text\"><a class=\"post-url\" href=\"\">{{post.subredditName}}</a></span>\n            <span> . Posted\n              <span> {{post.duration}} </span>\n              by\n              <a class=\"username\" href=\"\">{{post.userName}}</a>\n            </span>\n          </span>\n          <hr />\n          <a *ngIf=\"post.url; else postTitleNoUrl\" class=\"post-title post-url\" [href]=\"post.url\" target=\"_blank\" rel=\"noopener noreferrer\">{{post.postName}}</a>\n          <ng-template #postTitleNoUrl>\n            <span class=\"post-title\">{{post.postName}}</span>\n          </ng-template>\n          <div *ngIf=\"post.videoUrl\">\n            <video class=\"post-video\" controls preload=\"metadata\" [src]=\"post.videoUrl\"></video>\n          </div>\n          <div>\n            <p class=\"post-text\" [innerHtml]=\"post.description\"></p>\n          </div>\n          <div class=\"post-actions\">\n            <app-vote-button [post]=\"post\"></app-vote-button>\n          </div>\n          <div class=\"post-comment\">\n            <form [formGroup]=\"commentForm\" (ngSubmit)=\"postComment()\">\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" [formControlName]=\"'text'\" placeholder=\"Your Thoughts?\"></textarea>\n              </div>\n              <button type=\"submit\" class=\"comment-submit float-right\">Comment</button>\n            </form>\n          </div>\n          <div style=\"margin-top: 60px;\" *ngFor=\"let comment of comments\">\n            <div class=\"comment\">\n              <div class=\"username\">\n                <a routerLink=\"/user/comment.username\">{{comment.userName}}</a>\n              </div>\n              <div>\n                <p>{{comment.duration}}</p>\n              </div>\n              <b>{{comment.text}}</b>\n            </div>\n            <hr />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".verification-section {\n  margin-top: 30px;\n}\n\n.verification-message {\n  color: #86decf;\n}\n\n.verification-message.is-error {\n  color: #ff8ea1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hY2NvdW50LXZlcmlmaWNhdGlvbi9hY2NvdW50LXZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2FjY291bnQtdmVyaWZpY2F0aW9uL2FjY291bnQtdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVyaWZpY2F0aW9uLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udmVyaWZpY2F0aW9uLW1lc3NhZ2Uge1xuICBjb2xvcjogIzg2ZGVjZjtcbn1cblxuLnZlcmlmaWNhdGlvbi1tZXNzYWdlLmlzLWVycm9yIHtcbiAgY29sb3I6ICNmZjhlYTE7XG59XG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".login-section {\n    margin: 100px;\n}\n\n.auth-cta-row {\n    display: inline-flex;\n    align-items: center;\n    gap: 12px;\n}\n\n.auth-switch {\n    color: var(--hf-text-muted);\n}\n\n.login-failed,\n.register-success {\n    text-align: center;\n    margin: 12px auto 0;\n    border: 1px solid var(--hf-border-strong);\n    width: 80%;\n    border-radius: 8px;\n    background-color: #2a121a;\n}\n\n.register-success {\n    background-color: #122a24;\n}\n\n.login-failed-text,\n.register-success-text {\n    text-align: center;\n    margin: 8px 10px;\n    font-weight: bold;\n    color: var(--hf-text);\n}\n\n@media (max-width: 768px) {\n  .login-section {\n    margin: 30px 10px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAxMDBweDtcbn1cblxuLmF1dGgtY3RhLXJvdyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG59XG5cbi5hdXRoLXN3aXRjaCB7XG4gICAgY29sb3I6IHZhcigtLWhmLXRleHQtbXV0ZWQpO1xufVxuXG4ubG9naW4tZmFpbGVkLFxuLnJlZ2lzdGVyLXN1Y2Nlc3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEycHggYXV0byAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTEyMWE7XG59XG5cbi5yZWdpc3Rlci1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIyYTI0O1xufVxuXG4ubG9naW4tZmFpbGVkLXRleHQsXG4ucmVnaXN0ZXItc3VjY2Vzcy10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA4cHggMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9naW4tc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAzMHB4IDEwcHg7XG4gIH1cbn1cbiJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".register-section {\n  margin: 100px;\n}\n\n.auth-cta-row {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.auth-switch {\n  color: var(--hf-text-muted);\n}\n\n@media (max-width: 768px) {\n  .register-section {\n    margin: 30px 10px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1zZWN0aW9uIHtcbiAgbWFyZ2luOiAxMDBweDtcbn1cblxuLmF1dGgtY3RhLXJvdyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG59XG5cbi5hdXRoLXN3aXRjaCB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LW11dGVkKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yZWdpc3Rlci1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDMwcHggMTBweDtcbiAgfVxufVxuIl19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".profile-wrapper {\n  max-width: 980px;\n  margin: 0 auto;\n}\n\n.profile-summary {\n  border: 1px solid var(--hf-border);\n  border-radius: 10px;\n  background: var(--hf-surface);\n  color: var(--hf-text-secondary);\n  padding: 14px;\n  box-shadow: var(--hf-shadow);\n}\n\n.profile-section-title {\n  color: var(--hf-text);\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n\n.profile-comment {\n  border: 1px solid var(--hf-border);\n  border-radius: 8px;\n  background: var(--hf-surface-soft);\n  color: var(--hf-text-secondary);\n  padding: 10px;\n}\n\n.username {\n  color: var(--hf-text-muted);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQywrQkFBK0I7RUFDL0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5wcm9maWxlLXN1bW1hcnkge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1zdXJmYWNlKTtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMTRweDtcbiAgYm94LXNoYWRvdzogdmFyKC0taGYtc2hhZG93KTtcbn1cblxuLnByb2ZpbGUtc2VjdGlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ucHJvZmlsZS1jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1zdXJmYWNlLXNvZnQpO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udXNlcm5hbWUge1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1tdXRlZCk7XG59XG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".hf-navbar {\n    border-bottom: 1px solid var(--hf-border);\n    background-color: rgba(10, 10, 10, 0.96);\n    -webkit-backdrop-filter: blur(8px);\n            backdrop-filter: blur(8px);\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n\n.hf-navbar-inner {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 16px;\n}\n\n.reddit-text {\n    font-weight: 800;\n    font-size: 40px;\n    line-height: 1;\n    letter-spacing: 0.01em;\n    background: linear-gradient(90deg, #86DECF 0%, #93CEFB 45%, #BCB6FB 100%);\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    color: transparent;\n}\n\n.logo {\n    text-decoration: none;\n    display: inline-flex;\n    align-items: center;\n    padding-left: 6px;\n}\n\n.hf-nav-actions {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    margin-left: auto;\n}\n\n.auth-links {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.create-link {\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    height: 36px;\n    padding: 0 14px;\n    border-radius: 999px;\n    border: 1px solid var(--hf-border-strong);\n    background-color: var(--hf-surface-soft);\n    color: var(--hf-text);\n    font-size: 13px;\n    font-weight: 700;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.create-link:hover,\n.create-link:focus {\n    color: var(--hf-text);\n    text-decoration: none;\n    background-color: #1a1a24;\n}\n\n.create-link:focus,\n.userdetails:focus,\n.hf-auth-link:focus {\n    outline: none;\n    box-shadow: var(--hf-focus-ring);\n}\n\n.hf-auth-link {\n    border-radius: 999px;\n    border: 1px solid var(--hf-border-strong);\n    height: 36px;\n    line-height: 34px;\n    min-width: 88px;\n}\n\n.hf-auth-link.login {\n    background-color: transparent;\n    color: var(--hf-text-secondary);\n}\n\n.hf-auth-link.sign-up {\n    background-color: var(--hf-surface-soft);\n    color: var(--hf-text);\n}\n\n.userdetails {\n    background-color: transparent;\n    border: 1px solid transparent;\n    border-radius: 999px;\n    color: var(--hf-text-secondary);\n    text-align: center;\n    text-decoration: none;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 24px;\n    text-transform: uppercase;\n    padding: 5px 12px;\n    opacity: 1;\n}\n\n.userdetails:hover {\n    border-color: var(--hf-border-strong);\n    background-color: #171722;\n}\n\n.dropdown-item {\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 18px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.account-icon {\n    border-radius: 999px;\n    margin-right: 6px;\n    max-height: 24px;\n    max-width: 24px;\n}\n\n@media (max-width: 991px) {\n    .reddit-text {\n        font-size: 32px;\n    }\n}\n\n@media (max-width: 767px) {\n    .reddit-text {\n        font-size: 30px;\n    }\n\n    .create-link {\n        padding: 0 10px;\n    }\n\n    .create-link span {\n        display: none;\n    }\n\n    .hf-auth-link {\n        min-width: auto;\n        padding: 0 10px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUNBQXlDO0lBQ3pDLHdDQUF3QztJQUN4QyxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHlFQUF5RTtJQUN6RSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHlDQUF5QztJQUN6Qyx3Q0FBd0M7SUFDeEMscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGYtbmF2YmFyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMCwgMTAsIDAuOTYpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLmhmLW5hdmJhci1pbm5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDE2cHg7XG59XG5cbi5yZWRkaXQtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM4NkRFQ0YgMCUsICM5M0NFRkIgNDUlLCAjQkNCNkZCIDEwMCUpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubG9nbyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi5oZi1uYXYtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmF1dGgtbGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbn1cblxuLmNyZWF0ZS1saW5rIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICBwYWRkaW5nOiAwIDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc3VyZmFjZS1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNyZWF0ZS1saW5rOmhvdmVyLFxuLmNyZWF0ZS1saW5rOmZvY3VzIHtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMjQ7XG59XG5cbi5jcmVhdGUtbGluazpmb2N1cyxcbi51c2VyZGV0YWlsczpmb2N1cyxcbi5oZi1hdXRoLWxpbms6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogdmFyKC0taGYtZm9jdXMtcmluZyk7XG59XG5cbi5oZi1hdXRoLWxpbmsge1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICAgIGhlaWdodDogMzZweDtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICBtaW4td2lkdGg6IDg4cHg7XG59XG5cbi5oZi1hdXRoLWxpbmsubG9naW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5oZi1hdXRoLWxpbmsuc2lnbi11cCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc3VyZmFjZS1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG5cbi51c2VyZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnVzZXJkZXRhaWxzOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MjI7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmFjY291bnQtaWNvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgbWF4LWhlaWdodDogMjRweDtcbiAgICBtYXgtd2lkdGg6IDI0cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5yZWRkaXQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5yZWRkaXQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAuY3JlYXRlLWxpbmsge1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgfVxuXG4gICAgLmNyZWF0ZS1saW5rIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5oZi1hdXRoLWxpbmsge1xuICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG59XG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".humanfirst-body {\n  padding-top: 12px;\n}\n\n.hf-sidebar {\n  border: 1px solid var(--hf-border);\n  border-radius: 12px;\n  background: var(--hf-surface);\n  padding: 16px 10px 14px;\n  box-shadow: var(--hf-shadow);\n  position: -webkit-sticky;\n  position: sticky;\n  top: 12px;\n}\n\n.hf-main-col {\n  padding-bottom: 12px;\n}\n\n.hf-main-feed {\n  max-width: 980px;\n  margin: 0 auto;\n}\n\n.hf-nav,\n.hf-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.hf-divider {\n  border: 0;\n  border-top: 1px solid var(--hf-border);\n  margin: 10px 0;\n}\n\n.hf-section {\n  margin-bottom: 10px;\n}\n\n.hf-section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--hf-text-muted);\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  padding: 6px 8px;\n}\n\n.hf-row {\n  width: 100%;\n  border: 1px solid transparent;\n  border-radius: 18px;\n  background: transparent;\n  color: var(--hf-text-secondary);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-align: left;\n  padding: 9px 10px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.hf-row:hover {\n  background: #181824;\n  color: var(--hf-text);\n}\n\n.hf-row.active {\n  background: #1b1b28;\n  border-color: var(--hf-border-strong);\n  color: var(--hf-text);\n  font-weight: 600;\n}\n\n.hf-icon {\n  width: 16px;\n  color: var(--hf-text-muted);\n}\n\n.hf-row:hover .hf-icon,\n.hf-row.active .hf-icon {\n  color: var(--hf-text-secondary);\n}\n\n.hf-action-row {\n  margin: 2px 0;\n}\n\n@media (max-width: 991px) {\n  .hf-sidebar {\n    position: static;\n    margin-bottom: 12px;\n  }\n\n  .hf-main-feed {\n    max-width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsc0NBQXNDO0VBQ3RDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTs7RUFFRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5odW1hbmZpcnN0LWJvZHkge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLmhmLXNpZGViYXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1zdXJmYWNlKTtcbiAgcGFkZGluZzogMTZweCAxMHB4IDE0cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWhmLXNoYWRvdyk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTJweDtcbn1cblxuLmhmLW1haW4tY29sIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5oZi1tYWluLWZlZWQge1xuICBtYXgtd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmhmLW5hdixcbi5oZi1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycHg7XG59XG5cbi5oZi1kaXZpZGVyIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5oZi1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmhmLXNlY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogNnB4IDhweDtcbn1cblxuLmhmLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogOXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGYtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzE4MTgyNDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xufVxuXG4uaGYtcm93LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxYjFiMjg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhmLWljb24ge1xuICB3aWR0aDogMTZweDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtbXV0ZWQpO1xufVxuXG4uaGYtcm93OmhvdmVyIC5oZi1pY29uLFxuLmhmLXJvdy5hY3RpdmUgLmhmLWljb24ge1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uaGYtYWN0aW9uLXJvdyB7XG4gIG1hcmdpbjogMnB4IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuaGYtc2lkZWJhciB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG5cbiAgLmhmLW1haW4tZmVlZCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".btnCreatePost,\n.btnCreateSubreddit {\n  margin-top: 5px;\n}\n\n.post-form {\n  margin: 2px;\n}\n\n.comment-notification {\n  margin-top: 5px;\n}\n\n.create-post-main {\n  max-width: 980px;\n  margin: 0 auto;\n}\n\n.create-post-container {\n  margin-top: 10px;\n  border: 1px solid var(--hf-border);\n  margin-bottom: 10px;\n  overflow: hidden;\n  background-color: var(--hf-surface);\n  color: var(--hf-text-secondary);\n  position: relative;\n  border-radius: 10px;\n  box-shadow: var(--hf-shadow);\n  padding: 10px;\n}\n\n.btnDiscard {\n  border: 1px solid var(--hf-border-strong);\n  border-radius: 999px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .5px;\n  line-height: 24px;\n  text-transform: uppercase;\n  padding: 3px 18px;\n  min-width: 140px;\n  height: 36px;\n  margin-top: 5px;\n  color: var(--hf-text-secondary);\n  background-color: transparent;\n}\n\n.btnDiscard:hover {\n  background-color: #1a1a24;\n  color: var(--hf-text);\n}\n\n.create-post-heading {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 22px;\n  color: var(--hf-text);\n}\n\n.btnCreatePost {\n  background-color: var(--hf-surface-soft);\n  border-color: var(--hf-border-strong);\n  color: var(--hf-text);\n  border: 1px solid;\n  border-radius: 999px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .5px;\n  line-height: 24px;\n  text-transform: uppercase;\n  padding: 3px 18px;\n  min-width: 140px;\n  height: 36px;\n  margin-left: 8px;\n}\n\n.btnCreatePost:hover {\n  background-color: #1b1b28;\n}\n\nsmall {\n  color: var(--hf-text-muted);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9jcmVhdGUtcG9zdC9jcmVhdGUtcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wb3N0L2NyZWF0ZS1wb3N0L2NyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuQ3JlYXRlUG9zdCxcbi5idG5DcmVhdGVTdWJyZWRkaXQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5wb3N0LWZvcm0ge1xuICBtYXJnaW46IDJweDtcbn1cblxuLmNvbW1lbnQtbm90aWZpY2F0aW9uIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY3JlYXRlLXBvc3QtbWFpbiB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY3JlYXRlLXBvc3QtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc3VyZmFjZSk7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0taGYtc2hhZG93KTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmJ0bkRpc2NhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXItc3Ryb25nKTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogM3B4IDE4cHg7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bkRpc2NhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTI0O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG5cbi5jcmVhdGUtcG9zdC1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQpO1xufVxuXG4uYnRuQ3JlYXRlUG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLXN1cmZhY2Utc29mdCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDNweCAxOHB4O1xuICBtaW4td2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5idG5DcmVhdGVQb3N0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIyODtcbn1cblxuc21hbGwge1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1tdXRlZCk7XG59XG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".view-post-main {\n  max-width: 980px;\n  margin: 0 auto;\n}\n\n.post-title {\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 1;\n}\n\n.post-title:hover {\n  opacity: 0.85;\n}\n\n.subreddit-text {\n  font-weight: bold;\n}\n\n.post-url {\n  color: var(--hf-text);\n}\n\n.username {\n  color: var(--hf-text-muted);\n}\n\n.post-text {\n  margin-top: 10px;\n  color: var(--hf-text-secondary);\n}\n\n.post-video {\n  width: 100%;\n  max-height: 460px;\n  margin-top: 10px;\n  border-radius: 8px;\n  background: #000;\n}\n\n.post-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n.post {\n  border: 1px solid var(--hf-border);\n  margin-top: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n  background-color: var(--hf-surface);\n  color: var(--hf-text-secondary);\n  position: relative;\n  border-radius: 10px;\n  box-shadow: var(--hf-shadow);\n  padding: 10px;\n}\n\n.comment-submit {\n  border: 1px solid var(--hf-border-strong);\n  border-radius: 999px;\n  background-color: var(--hf-surface-soft);\n  color: var(--hf-text);\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .5px;\n  line-height: 24px;\n  text-transform: uppercase;\n  padding: 3px 18px;\n  min-width: 120px;\n  height: 36px;\n}\n\n.comment-submit:hover {\n  background-color: #1b1b28;\n}\n\n.comment {\n  border: 1px solid var(--hf-border);\n  margin-bottom: 10px;\n  overflow: hidden;\n  background-color: var(--hf-surface-soft);\n  color: var(--hf-text-secondary);\n  position: relative;\n  border-radius: 8px;\n  padding: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC92aWV3LXBvc3Qvdmlldy1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxvQkFBb0I7RUFDcEIsd0NBQXdDO0VBQ3hDLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHdDQUF3QztFQUN4QywrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wb3N0L3ZpZXctcG9zdC92aWV3LXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3LXBvc3QtbWFpbiB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucG9zdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5wb3N0LXRpdGxlOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44NTtcbn1cblxuLnN1YnJlZGRpdC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wb3N0LXVybCB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cblxuLnVzZXJuYW1lIHtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtbXV0ZWQpO1xufVxuXG4ucG9zdC10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLnBvc3QtdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNDYwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuLnBvc3QtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wb3N0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc3VyZmFjZSk7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0taGYtc2hhZG93KTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbW1lbnQtc3VibWl0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1zdXJmYWNlLXNvZnQpO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLjVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDNweCAxOHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG5cbi5jb21tZW50LXN1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjFiMjg7XG59XG5cbi5jb21tZW50IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc3VyZmFjZS1zb2Z0KTtcbiAgY29sb3I6IHZhcigtLWhmLXRleHQtc2Vjb25kYXJ5KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cbiJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".hf-post-card {\n    border: 1px solid var(--hf-border);\n    border-radius: 12px;\n    background: var(--hf-surface);\n    color: var(--hf-text-secondary);\n    margin-bottom: 12px;\n    padding: 12px 14px;\n    box-shadow: var(--hf-shadow);\n}\n\n.hf-post-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 8px;\n}\n\n.hf-post-meta {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 12px;\n    color: var(--hf-text-muted);\n}\n\n.hf-community {\n    font-weight: 600;\n    color: var(--hf-text-secondary);\n}\n\n.hf-dot {\n    color: var(--hf-text-muted);\n}\n\n.hf-overflow-btn {\n    border: 1px solid transparent;\n    background: transparent;\n    color: var(--hf-text-muted);\n    cursor: pointer;\n    padding: 4px 6px;\n    border-radius: 14px;\n}\n\n.hf-overflow-btn:hover {\n    background: #1a1a24;\n    color: var(--hf-text);\n}\n\n.hf-post-title {\n    font-size: 20px;\n    line-height: 1.3;\n    font-weight: 700;\n    margin-bottom: 8px;\n    color: var(--hf-text);\n}\n\n.hf-post-title-link {\n    color: inherit;\n    text-decoration: none;\n}\n\n.hf-post-title-link:hover {\n    text-decoration: underline;\n}\n\n.hf-text-preview {\n    margin: 0 0 10px;\n    color: var(--hf-text-secondary);\n    font-size: 14px;\n    line-height: 1.45;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.hf-media-wrap {\n    width: min(100%, 620px);\n    margin: 0 auto 10px;\n    position: relative;\n    border-radius: 10px;\n    overflow: hidden;\n    background: #0f1114;\n    aspect-ratio: 1 / 1;\n}\n\n.hf-media-content {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.hf-media-badge {\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    padding: 6px 9px;\n    border-radius: 14px;\n    background: rgba(0, 0, 0, 0.6);\n    color: var(--hf-text);\n    font-size: 12px;\n}\n\n.hf-post-footer {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 8px;\n    border-top: 1px solid var(--hf-border);\n    padding-top: 10px;\n}\n\n.hf-action-btn {\n    border: 1px solid var(--hf-border-strong);\n    background: var(--hf-surface-soft);\n    color: var(--hf-text-secondary);\n    border-radius: 18px;\n    padding: 5px 10px;\n    cursor: pointer;\n    font-size: 12px;\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.hf-action-btn:hover {\n    background: #1b1b28;\n    color: var(--hf-text);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Bvc3QtdGlsZS9wb3N0LXRpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsUUFBUTtJQUNSLHNDQUFzQztJQUN0QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3Bvc3QtdGlsZS9wb3N0LXRpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZi1wb3N0LWNhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1zdXJmYWNlKTtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgcGFkZGluZzogMTJweCAxNHB4O1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWhmLXNoYWRvdyk7XG59XG5cbi5oZi1wb3N0LWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5oZi1wb3N0LW1ldGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1oZi10ZXh0LW11dGVkKTtcbn1cblxuLmhmLWNvbW11bml0eSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xufVxuXG4uaGYtZG90IHtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dC1tdXRlZCk7XG59XG5cbi5oZi1vdmVyZmxvdy1idG4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS1oZi10ZXh0LW11dGVkKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNHB4IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xufVxuXG4uaGYtb3ZlcmZsb3ctYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWExYTI0O1xuICAgIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cblxuLmhmLXBvc3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cblxuLmhmLXBvc3QtdGl0bGUtbGluayB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaGYtcG9zdC10aXRsZS1saW5rOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmhmLXRleHQtcHJldmlldyB7XG4gICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS40NTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaGYtbWVkaWEtd3JhcCB7XG4gICAgd2lkdGg6IG1pbigxMDAlLCA2MjBweCk7XG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICMwZjExMTQ7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbn1cblxuLmhmLW1lZGlhLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmhmLW1lZGlhLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogNnB4IDlweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaGYtcG9zdC1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiA4cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5oZi1hY3Rpb24tYnRuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXItc3Ryb25nKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZi1zdXJmYWNlLXNvZnQpO1xuICAgIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG59XG5cbi5oZi1hY3Rpb24tYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWIxYjI4O1xuICAgIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbn1cbiJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".vote-actions {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.vote-btn {\n    border: 1px solid var(--hf-border-strong);\n    background-color: var(--hf-surface-soft);\n    color: var(--hf-text-secondary);\n    border-radius: 18px;\n    padding: 5px 9px;\n    cursor: pointer;\n    font-size: 12px;\n    display: inline-flex;\n    align-items: center;\n}\n\n.vote-btn:hover {\n    background-color: #1b1b28;\n    color: var(--hf-text);\n}\n\n.vote-btn.active.like-btn {\n    border-color: #86decf;\n    color: #86decf;\n}\n\n.vote-btn.active.dislike-btn {\n    border-color: #f08ca8;\n    color: #f08ca8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3ZvdGUtYnV0dG9uL3ZvdGUtYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyx3Q0FBd0M7SUFDeEMsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdm90ZS1idXR0b24vdm90ZS1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52b3RlLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG59XG5cbi52b3RlLWJ0biB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyLXN0cm9uZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtc3VyZmFjZS1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gICAgcGFkZGluZzogNXB4IDlweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi52b3RlLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIyODtcbiAgICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG5cbi52b3RlLWJ0bi5hY3RpdmUubGlrZS1idG4ge1xuICAgIGJvcmRlci1jb2xvcjogIzg2ZGVjZjtcbiAgICBjb2xvcjogIzg2ZGVjZjtcbn1cblxuLnZvdGUtYnRuLmFjdGl2ZS5kaXNsaWtlLWJ0biB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjA4Y2E4O1xuICAgIGNvbG9yOiAjZjA4Y2E4O1xufVxuIl19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".create-subreddit-main {\n  max-width: 980px;\n  margin: 0 auto;\n}\n\n.create-subreddit-container {\n  margin-top: 10px;\n  border: 1px solid var(--hf-border);\n  margin-bottom: 10px;\n  overflow: hidden;\n  background-color: var(--hf-surface);\n  color: var(--hf-text-secondary);\n  position: relative;\n  border-radius: 10px;\n  box-shadow: var(--hf-shadow);\n  padding: 10px;\n}\n\n.create-subreddit-heading {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 22px;\n  color: var(--hf-text);\n}\n\n.btnCreateSubreddit {\n  background-color: var(--hf-surface-soft);\n  border-color: var(--hf-border-strong);\n  color: var(--hf-text);\n  border: 1px solid;\n  border-radius: 999px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .5px;\n  line-height: 24px;\n  text-transform: uppercase;\n  padding: 3px 18px;\n  min-width: 140px;\n  height: 36px;\n  margin-left: 8px;\n}\n\n.btnCreateSubreddit:hover {\n  background-color: #1b1b28;\n}\n\n.btnDiscard {\n  border: 1px solid var(--hf-border-strong);\n  border-radius: 999px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .5px;\n  line-height: 24px;\n  text-transform: uppercase;\n  padding: 3px 18px;\n  min-width: 140px;\n  height: 36px;\n  margin-top: 5px;\n  color: var(--hf-text-secondary);\n  background-color: transparent;\n}\n\n.btnDiscard:hover {\n  background-color: #1a1a24;\n  color: var(--hf-text);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VicmVkZGl0L2NyZWF0ZS1zdWJyZWRkaXQvY3JlYXRlLXN1YnJlZGRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMscUNBQXFDO0VBQ3JDLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zdWJyZWRkaXQvY3JlYXRlLXN1YnJlZGRpdC9jcmVhdGUtc3VicmVkZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLXN1YnJlZGRpdC1tYWluIHtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jcmVhdGUtc3VicmVkZGl0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhmLWJvcmRlcik7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLXN1cmZhY2UpO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWhmLXNoYWRvdyk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jcmVhdGUtc3VicmVkZGl0LWhlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG5cbi5idG5DcmVhdGVTdWJyZWRkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1zdXJmYWNlLXNvZnQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWhmLWJvcmRlci1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAzcHggMThweDtcbiAgbWluLXdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uYnRuQ3JlYXRlU3VicmVkZGl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIyODtcbn1cblxuLmJ0bkRpc2NhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZi1ib3JkZXItc3Ryb25nKTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogM3B4IDE4cHg7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dC1zZWNvbmRhcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bkRpc2NhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTI0O1xuICBjb2xvcjogdmFyKC0taGYtdGV4dCk7XG59XG4iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".list-subreddits-main {\n  max-width: 980px;\n  margin: 0 auto;\n  border: 1px solid var(--hf-border);\n  border-radius: 10px;\n  background: var(--hf-surface);\n  padding: 16px;\n  box-shadow: var(--hf-shadow);\n}\n\n.list-subreddits-main h2 {\n  color: var(--hf-text);\n  margin-bottom: 12px;\n}\n\n.list-subreddits-main ul {\n  margin: 0;\n  padding-left: 20px;\n}\n\n.list-subreddits-main li {\n  color: var(--hf-text-secondary);\n  margin-bottom: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VicmVkZGl0L2xpc3Qtc3VicmVkZGl0cy9saXN0LXN1YnJlZGRpdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3N1YnJlZGRpdC9saXN0LXN1YnJlZGRpdHMvbGlzdC1zdWJyZWRkaXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1zdWJyZWRkaXRzLW1haW4ge1xuICBtYXgtd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGYtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taGYtc3VyZmFjZSk7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWhmLXNoYWRvdyk7XG59XG5cbi5saXN0LXN1YnJlZGRpdHMtbWFpbiBoMiB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0KTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmxpc3Qtc3VicmVkZGl0cy1tYWluIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5saXN0LXN1YnJlZGRpdHMtbWFpbiBsaSB7XG4gIGNvbG9yOiB2YXIoLS1oZi10ZXh0LXNlY29uZGFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbiJdfQ== */");

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