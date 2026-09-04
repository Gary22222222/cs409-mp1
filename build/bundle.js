/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/runtime/api.js"
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js"
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ },

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js"
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign

  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ },

/***/ "./js/main.js"
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
() {

var navbar = document.getElementById("navbar");
var navLinks = Array.from(document.querySelectorAll(".navbar__link"));
var sections = navLinks.map(function (link) {
  return document.querySelector(link.getAttribute("href"));
}).filter(Boolean);
var setNavbarSize = function setNavbarSize() {
  navbar.classList.toggle("navbar--compact", window.scrollY > 24);
};
var highlightNav = function highlightNav() {
  var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  var activeId = sections[0].id;
  if (atBottom) {
    activeId = sections[sections.length - 1].id;
  } else {
    var probe = navbar.getBoundingClientRect().bottom;
    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect();
      if (rect.top <= probe + 1) {
        activeId = section.id;
      }
    });
  }
  navLinks.forEach(function (link) {
    var isActive = link.getAttribute("href") === "#".concat(activeId);
    link.classList.toggle("is-active", isActive);
  });
};
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var target = document.querySelector(link.getAttribute("href"));
    if (!target) {
      return;
    }
    var top = target.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight;
    window.scrollTo({
      top: top,
      behavior: "smooth"
    });
  });
});
window.addEventListener("scroll", function () {
  setNavbarSize();
  highlightNav();
});
window.addEventListener("resize", highlightNav);
setNavbarSize();
highlightNav();
var carousel = document.getElementById("carousel");
var track = carousel.querySelector(".carousel__track");
var slides = Array.from(carousel.querySelectorAll(".carousel__slide"));
var slideIndex = 0;
var goToSlide = function goToSlide(nextIndex) {
  slideIndex = (nextIndex + slides.length) % slides.length;
  track.style.transform = "translateX(-".concat(slideIndex * 100, "%)");
  slides.forEach(function (slide, index) {
    slide.classList.toggle("is-active", index === slideIndex);
  });
};
carousel.querySelector(".carousel__arrow--prev").addEventListener("click", function () {
  return goToSlide(slideIndex - 1);
});
carousel.querySelector(".carousel__arrow--next").addEventListener("click", function () {
  return goToSlide(slideIndex + 1);
});
var openModal = function openModal(id) {
  var modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");
  }
};
var closeModals = function closeModals() {
  document.querySelectorAll(".modal.is-open").forEach(function (modal) {
    modal.classList.remove("is-open");
  });
  document.body.classList.remove("modal-open");
};
document.querySelectorAll("[data-modal-open]").forEach(function (button) {
  button.addEventListener("click", function () {
    return openModal(button.dataset.modalOpen);
  });
});
document.querySelectorAll("[data-modal-close]").forEach(function (node) {
  node.addEventListener("click", closeModals);
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModals();
  }
});

/***/ },

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss"
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.7 5.3-1.8 6.6-6.6 1.8 1.8-6.6 6.6-1.8z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.7 5.3-1.8 6.6-6.6 1.8 1.8-6.6 6.6-1.8z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M15.5 5.5 9 12l6.5 6.5-1.5 1.5L6 12l8-8z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M15.5 5.5 9 12l6.5 6.5-1.5 1.5L6 12l8-8z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M8.5 5.5 15 12l-6.5 6.5 1.5 1.5 8-8-8-8z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M8.5 5.5 15 12l-6.5 6.5 1.5 1.5 8-8-8-8z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm5-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm5 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8.5 20c-2 0-3.5-2.2-2.2-4.2 1.1-1.7 3.2-2.3 5.1-1.5.6.3 1.2.3 1.8 0 1.9-.8 4-.2 5.1 1.5 1.3 2-.2 4.2-2.2 4.2H8.5z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm5-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm5 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8.5 20c-2 0-3.5-2.2-2.2-4.2 1.1-1.7 3.2-2.3 5.1-1.5.6.3 1.2.3 1.8 0 1.9-.8 4-.2 5.1 1.5 1.3 2-.2 4.2-2.2 4.2H8.5z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M11 2h2v4.1l3-1.7 1 1.8-3 1.7 3 1.7-1 1.8-3-1.7V14h-2v-4.3l-3 1.7-1-1.8 3-1.7-3-1.7 1-1.8 3 1.7V2zm-6 14h14v2H5v-2zm2 3h10v3H7v-3z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M11 2h2v4.1l3-1.7 1 1.8-3 1.7 3 1.7-1 1.8-3-1.7V14h-2v-4.3l-3 1.7-1-1.8 3-1.7-3-1.7 1-1.8 3 1.7V2zm-6 14h14v2H5v-2zm2 3h10v3H7v-3z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm0 12.2L4.2 11 12 6.8 19.8 11 12 15.2zM5 13.7V18c0 1.7 3.1 3 7 3s7-1.3 7-3v-4.3l-7 3.8-7-3.8z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm0 12.2L4.2 11 12 6.8 19.8 11 12 15.2zM5 13.7V18c0 1.7 3.1 3 7 3s7-1.3 7-3v-4.3l-7 3.8-7-3.8z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zM18 6.6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zM18 6.6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M23 12.2s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.8 5 12 5 12 5s-6.8 0-8.5.5a3 3 0 0 0-2.1 2.1C1 9 1 12.2 1 12.2s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.2 19.4 12 19.4 12 19.4s6.8 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6L16 12.2z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M23 12.2s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.8 5 12 5 12 5s-6.8 0-8.5.5a3 3 0 0 0-2.1 2.1C1 9 1 12.2 1 12.2s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.2 19.4 12 19.4 12 19.4s6.8 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6L16 12.2z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.6s.8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1a3.6 3.6 0 0 1 .1 2.6 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.6s.8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1a3.6 3.6 0 0 1 .1 2.6 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/aurora.jpg */ "./assets/aurora.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@300;400;500;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Outfit", sans-serif;
  color: #12202c;
  background: #f4f1ea;
  line-height: 1.6;
}
body.modal-open {
  overflow: hidden;
}

img,
video {
  max-width: 100%;
  display: block;
}

h1,
h2,
h3,
blockquote {
  font-family: "Fraunces", serif;
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 1rem;
}

h1 {
  font-size: clamp(2.4rem, 5vw, 4.4rem);
}

h2 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
}

h3 {
  font-size: 1.35rem;
}

p {
  margin: 0 0 1rem;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: 100%;
  max-width: 1080px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: auto;
  margin-right: auto;
}

.stripe {
  width: 100%;
}

.eyebrow {
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.78rem;
  font-weight: 600;
  color: #3f8f7a;
  margin-bottom: 0.75rem;
}
.eyebrow--light {
  color: #cde7dc;
}

.section-copy,
.lede {
  max-width: 40rem;
  color: #3d5363;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  background: #3f8f7a;
  color: #ffffff;
  font: inherit;
  font-weight: 600;
  padding: 0.85rem 1.35rem;
  border-radius: 999px;
  transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
}
.button:hover {
  transform: translateY(-2px);
  background: #367a68;
}
.button--ghost {
  background: transparent;
  color: #12202c;
  box-shadow: inset 0 0 0 2px rgba(18, 32, 44, 0.18);
  margin-left: 0.75rem;
}

.icon {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  background-color: currentColor;
  -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
  -webkit-mask-position: center;
          mask-position: center;
  -webkit-mask-size: contain;
          mask-size: contain;
  vertical-align: middle;
}
.icon--compass {
  -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
          mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.icon--chevron-left {
  -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
          mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
.icon--chevron-right {
  -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
          mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
.icon--paw {
  -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
          mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.icon--ice {
  -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
          mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}
.icon--school {
  -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
          mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}
.icon--close {
  -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
          mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}
.icon--instagram {
  -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
          mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
}
.icon--youtube {
  -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
          mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
}
.icon--github {
  -webkit-mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
          mask-image: url(${___CSS_LOADER_URL_REPLACEMENT_9___});
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 20;
  height: 5.5rem;
  background: rgba(244, 241, 234, 0.94);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 rgba(18, 32, 44, 0.08);
  font-size: 1.05rem;
  transition: height 0.28s ease, font-size 0.28s ease, background 0.28s ease;
}
.navbar--compact {
  height: 3.5rem;
  font-size: 0.88rem;
}
.navbar__inner {
  width: 100%;
  max-width: 1200px;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.navbar__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.navbar__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.35rem 1.1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.navbar__link {
  position: relative;
  padding: 0.2rem 0;
  color: #3d5363;
  transition: color 0.2s ease;
}
.navbar__link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.2rem;
  height: 2px;
  background: #c9844a;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}
.navbar__link.is-active, .navbar__link:hover {
  color: #12202c;
}
.navbar__link.is-active::after {
  transform: scaleX(1);
}

.stripe--hero {
  position: relative;
  min-height: calc(100vh - 5.5rem);
  color: #ffffff;
  overflow: hidden;
  display: flex;
  align-items: stretch;
}

.hero__media {
  position: absolute;
  inset: 0;
}
.hero__media img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  filter: saturate(0.9) contrast(1.05);
  animation: drift 18s ease-in-out infinite alternate;
}
.hero__media::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(11, 28, 40, 0.78) 12%, rgba(11, 28, 40, 0.28) 70%);
}

.hero__center {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1080px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: calc(100vh - 5.5rem);
  animation: rise-in 0.9s ease both;
}

.stripe--mission {
  background: #ffffff;
  padding: 6rem 0;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  list-style: none;
  margin: 2.5rem 0 0;
  padding: 0;
}
.stats li {
  background: #f4f1ea;
  padding: 1.5rem;
  border-radius: 1rem;
}
.stats__value {
  display: block;
  font-family: "Fraunces", serif;
  font-size: 2.2rem;
}
.stats__label {
  color: #3d5363;
}

.stripe--gallery {
  background: #d7e6ee;
  padding: 6rem 0;
}

.carousel {
  position: relative;
  margin-top: 2rem;
}
.carousel__window {
  overflow: hidden;
  border-radius: 1.25rem;
  box-shadow: 0 18px 40px rgba(11, 28, 40, 0.12);
}
.carousel__track {
  display: flex;
  transition: transform 0.45s ease;
}
.carousel__slide {
  min-width: 100%;
  position: relative;
  background: #0b1c28;
}
.carousel__slide img {
  width: 100%;
  height: min(62vh, 560px);
  -o-object-fit: cover;
     object-fit: cover;
}
.carousel__caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
  color: #ffffff;
  background: linear-gradient(transparent, rgba(11, 28, 40, 0.82));
}
.carousel__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 3rem;
  height: 3rem;
  border: 0;
  border-radius: 50%;
  background: rgba(244, 241, 234, 0.92);
  color: #12202c;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 18px 40px rgba(11, 28, 40, 0.12);
}
.carousel__arrow--prev {
  left: -0.6rem;
}
.carousel__arrow--next {
  right: -0.6rem;
}

.stripe--programs {
  background: #e7efe8;
  padding: 6rem 0;
}

.columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 1.1rem;
  box-shadow: 0 18px 40px rgba(11, 28, 40, 0.12);
}
.card .icon {
  width: 1.8rem;
  height: 1.8rem;
  color: #3f8f7a;
  margin-bottom: 1rem;
}

.stripe--horizon {
  min-height: 60vh;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1.5rem;
}

.horizon__center {
  max-width: 44rem;
}
.horizon__center blockquote {
  font-size: clamp(1.5rem, 3vw, 2.3rem);
  font-weight: 500;
}

.stripe--visit {
  background: #ffffff;
  padding: 6rem 0;
}

.visit-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;
}

.video-frame video {
  width: 100%;
  border-radius: 1rem;
  background: #0b1c28;
}

.video-note {
  font-size: 0.92rem;
  color: #3d5363;
  margin-top: 0.75rem;
}

.visit-panel {
  background: #f4f1ea;
  padding: 2rem;
  border-radius: 1.1rem;
}

.stripe--footer {
  background: #0b1c28;
  color: #d5e2ea;
  padding: 3rem 0;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

.social {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.social a {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.2s ease;
}
.social a:hover {
  background: #3f8f7a;
  transform: translateY(-2px);
}
.social .icon {
  width: 1.1rem;
  height: 1.1rem;
}

.modal {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: none;
}
.modal.is-open {
  display: block;
}
.modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(11, 28, 40, 0.62);
}
.modal__dialog {
  position: relative;
  width: 92vw;
  max-width: 34rem;
  margin: 12vh auto 0;
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 1.2rem;
  box-shadow: 0 18px 40px rgba(11, 28, 40, 0.12);
  animation: rise-in 0.28s ease;
}
.modal__close {
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
  border: 0;
  background: #f4f1ea;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes drift {
  from {
    transform: scale(1.04) translateY(0);
  }
  to {
    transform: scale(1.12) translateY(-2%);
  }
}
@media (max-width: 1024px) {
  .columns,
.stats,
.visit-grid {
    grid-template-columns: 1fr;
  }

  .carousel__arrow--prev {
    left: 0.5rem;
  }

  .carousel__arrow--next {
    right: 0.5rem;
  }
}
@media (max-width: 768px) {
  .navbar {
    height: auto;
    min-height: 3.5rem;
    font-size: 0.82rem;
  }
  .navbar__inner {
    flex-direction: column;
    justify-content: center;
    padding: 0.55rem 0;
  }
  .navbar__links {
    justify-content: center;
    gap: 0.35rem 0.8rem;
  }

  .hero__center,
.stripe--hero {
    min-height: 70vh;
  }

  .button--ghost {
    margin-left: 0;
    margin-top: 0.75rem;
  }

  .footer__inner {
    flex-direction: column;
    text-align: center;
  }
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"AAqCA;;;EAGE,sBAAA;AAnCF;;AAsCA;;EAEE,SAAA;EACA,UAAA;AAnCF;;AAsCA;EACE,iCAAA;EACA,cAjDU;EAkDV,mBAhDY;EAiDZ,gBAAA;AAnCF;AAqCE;EACE,gBAAA;AAnCJ;;AAuCA;;EAEE,eAAA;EACA,cAAA;AApCF;;AAuCA;;;;EAIE,8BAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;AApCF;;AAuCA;EACE,qCAAA;AApCF;;AAuCA;EACE,qCAAA;AApCF;;AAuCA;EACE,kBAAA;AApCF;;AAuCA;EACE,gBAAA;AApCF;;AAuCA;EACE,cAAA;EACA,qBAAA;AApCF;;AAuCA;EACE,WAAA;EACA,iBArFc;EAsFd,oBAAA;EACA,qBAAA;EApFA,iBAAA;EACA,kBAAA;AAiDF;;AAsCA;EACE,WAAA;AAnCF;;AAsCA;EACE,sBAAA;EACA,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,cA1Ga;EA2Gb,sBAAA;AAnCF;AAqCE;EACE,cAAA;AAnCJ;;AAuCA;;EAEE,gBAAA;EACA,cA1He;AAsFjB;;AAuCA;EACE,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,eAAA;EACA,mBA9Ha;EA+Hb,cA7HY;EA8HZ,aAAA;EACA,gBAAA;EACA,wBAAA;EACA,oBAAA;EACA,yEAAA;AApCF;AAsCE;EACE,2BAAA;EACA,mBAAA;AApCJ;AAuCE;EACE,uBAAA;EACA,cAnJQ;EAoJR,kDAAA;EACA,oBAAA;AArCJ;;AAyCA;EACE,qBAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,8BAAA;UAAA,sBAAA;EACA,6BAAA;UAAA,qBAAA;EACA,0BAAA;UAAA,kBAAA;EACA,sBAAA;AAtCF;AAwCE;EACE,2DAAA;UAAA,mDAAA;AAtCJ;AAyCE;EACE,2DAAA;UAAA,mDAAA;AAvCJ;AA0CE;EACE,2DAAA;UAAA,mDAAA;AAxCJ;AA2CE;EACE,2DAAA;UAAA,mDAAA;AAzCJ;AA4CE;EACE,2DAAA;UAAA,mDAAA;AA1CJ;AA6CE;EACE,2DAAA;UAAA,mDAAA;AA3CJ;AA8CE;EACE,2DAAA;UAAA,mDAAA;AA5CJ;AA+CE;EACE,2DAAA;UAAA,mDAAA;AA7CJ;AAgDE;EACE,2DAAA;UAAA,mDAAA;AA9CJ;AAiDE;EACE,2DAAA;UAAA,mDAAA;AA/CJ;;AAmDA;EACE,gBAAA;EACA,MAAA;EACA,WAAA;EACA,cAvMS;EAwMT,qCAAA;EACA,2BAAA;EACA,0CAAA;EACA,kBAAA;EACA,0EAAA;AAhDF;AAkDE;EACE,cA9MQ;EA+MR,kBAAA;AAhDJ;AAmDE;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EAlNF,iBAAA;EACA,kBAAA;EAmNE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;AAhDJ;AAmDE;EACE,oBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,sBAAA;AAjDJ;AAoDE;EACE,aAAA;EACA,eAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;AAlDJ;AAqDE;EACE,kBAAA;EACA,iBAAA;EACA,cA7Pa;EA8Pb,2BAAA;AAnDJ;AAqDI;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,QAAA;EACA,eAAA;EACA,WAAA;EACA,mBAjQS;EAkQT,oBAAA;EACA,sBAAA;EACA,gCAAA;AAnDN;AAsDI;EAEE,cAhRM;AA2NZ;AAwDI;EACE,oBAAA;AAtDN;;AA2DA;EACE,kBAAA;EACA,gCAAA;EACA,cApRY;EAqRZ,gBAAA;EACA,aAAA;EACA,oBAAA;AAxDF;;AA2DA;EACE,kBAAA;EACA,QAAA;AAxDF;AA0DE;EACE,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;EACA,oCAAA;EACA,mDAAA;AAxDJ;AA2DE;EACE,WAAA;EACA,kBAAA;EACA,QAAA;EACA,0FAAA;AAzDJ;;AA6DA;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,iBA9Sc;EA+Sd,oBAAA;EACA,qBAAA;EA7SA,iBAAA;EACA,kBAAA;EAIA,aAAA;EACA,mBAAA;EACA,uBAAA;EAySA,sBAAA;EACA,uBAAA;EACA,gCAAA;EACA,iCAAA;AAvDF;;AA0DA;EACE,mBA9TY;EA+TZ,eAAA;AAvDF;;AA0DA;EACE,aAAA;EACA,qCAAA;EACA,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;AAvDF;AAyDE;EACE,mBAjVU;EAkVV,eAAA;EACA,mBAAA;AAvDJ;AA0DE;EACE,cAAA;EACA,8BAAA;EACA,iBAAA;AAxDJ;AA2DE;EACE,cA9Va;AAqSjB;;AA6DA;EACE,mBAhWU;EAiWV,eAAA;AA1DF;;AA6DA;EACE,kBAAA;EACA,gBAAA;AA1DF;AA4DE;EACE,gBAAA;EACA,sBAAA;EACA,8CApWK;AA0ST;AA6DE;EACE,aAAA;EACA,gCAAA;AA3DJ;AA8DE;EACE,eAAA;EACA,kBAAA;EACA,mBArXS;AAyTb;AA8DI;EACE,WAAA;EACA,wBAAA;EACA,oBAAA;KAAA,iBAAA;AA5DN;AAgEE;EACE,kBAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,aAAA;EACA,cAjYU;EAkYV,gEAAA;AA9DJ;AAiEE;EACE,kBAAA;EACA,QAAA;EACA,2BAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;EACA,qCAAA;EACA,cAvZQ;EAwZR,eAAA;EApYF,aAAA;EACA,mBAAA;EACA,uBAAA;EAoYE,8CA/YK;AAkVT;AA+DI;EACE,aAAA;AA7DN;AAgEI;EACE,cAAA;AA9DN;;AAmEA;EACE,mBApac;EAqad,eAAA;AAhEF;;AAmEA;EACE,aAAA;EACA,qCAAA;EACA,WAAA;EACA,gBAAA;AAhEF;;AAmEA;EACE,mBA3aY;EA4aZ,aAAA;EACA,qBAAA;EACA,8CA3aO;AA2WT;AAkEE;EACE,aAAA;EACA,cAAA;EACA,cArbW;EAsbX,mBAAA;AAhEJ;;AAoEA;EACE,gBAAA;EACA,0DAAA;EACA,2BAAA;EACA,sBAAA;EACA,4BAAA;EACA,cA9bY;EAYZ,aAAA;EACA,mBAAA;EACA,uBAAA;EAkbA,kBAAA;EACA,oBAAA;AA/DF;;AAkEA;EACE,gBAAA;AA/DF;AAiEE;EACE,qCAAA;EACA,gBAAA;AA/DJ;;AAmEA;EACE,mBA9cY;EA+cZ,eAAA;AAhEF;;AAmEA;EACE,aAAA;EACA,kCAAA;EACA,SAAA;EACA,mBAAA;EACA,gBAAA;AAhEF;;AAoEE;EACE,WAAA;EACA,mBAAA;EACA,mBAjeS;AAgab;;AAqEA;EACE,kBAAA;EACA,cA3ee;EA4ef,mBAAA;AAlEF;;AAqEA;EACE,mBA/eY;EAgfZ,aAAA;EACA,qBAAA;AAlEF;;AAqEA;EACE,mBAlfW;EAmfX,cAAA;EACA,eAAA;AAlEF;;AAqEA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;AAlEF;;AAqEA;EACE,aAAA;EACA,SAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;AAlEF;AAoEE;EACE,aAAA;EACA,cAAA;EACA,kBAAA;EACA,qCAAA;EA1fF,aAAA;EACA,mBAAA;EACA,uBAAA;EA0fE,qDAAA;AAhEJ;AAkEI;EACE,mBA7gBS;EA8gBT,2BAAA;AAhEN;AAoEE;EACE,aAAA;EACA,cAAA;AAlEJ;;AAsEA;EACE,eAAA;EACA,QAAA;EACA,WAAA;EACA,aAAA;AAnEF;AAqEE;EACE,cAAA;AAnEJ;AAsEE;EACE,kBAAA;EACA,QAAA;EACA,kCAAA;AApEJ;AAuEE;EACE,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBA3iBU;EA4iBV,eAAA;EACA,qBAAA;EACA,8CA3iBK;EA4iBL,6BAAA;AArEJ;AAwEE;EACE,kBAAA;EACA,WAAA;EACA,aAAA;EACA,SAAA;EACA,mBA7jBU;EA8jBV,aAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;EA/iBF,aAAA;EACA,mBAAA;EACA,uBAAA;AA0eF;;AAwEA;EACE;IACE,UAAA;IACA,2BAAA;EArEF;EAuEA;IACE,UAAA;IACA,wBAAA;EArEF;AACF;AAwEA;EACE;IACE,oCAAA;EAtEF;EAwEA;IACE,sCAAA;EAtEF;AACF;AArfE;EA+jBA;;;IAGE,0BAAA;EAvEF;;EA0EA;IACE,YAAA;EAvEF;;EA0EA;IACE,aAAA;EAvEF;AACF;AApgBE;EA+kBA;IACE,YAAA;IACA,kBArmBQ;IAsmBR,kBAAA;EAxEF;EA0EE;IACE,sBAAA;IACA,uBAAA;IACA,kBAAA;EAxEJ;EA2EE;IACE,uBAAA;IACA,mBAAA;EAzEJ;;EA6EA;;IAEE,gBAAA;EA1EF;;EA6EA;IACE,cAAA;IACA,mBAAA;EA1EF;;EA6EA;IACE,sBAAA;IACA,kBAAA;EA1EF;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Outfit:wght@300;400;500;600&display=swap\");\r\n\r\n$color-ink: #12202c;\r\n$color-ink-soft: #3d5363;\r\n$color-paper: #f4f1ea;\r\n$color-paper-2: #e7efe8;\r\n$color-ice: #d7e6ee;\r\n$color-deep: #0b1c28;\r\n$color-aurora: #3f8f7a;\r\n$color-copper: #c9844a;\r\n$color-white: #ffffff;\r\n$nav-tall: 5.5rem;\r\n$nav-short: 3.5rem;\r\n$shadow: 0 18px 40px rgba(11, 28, 40, 0.12);\r\n$content-width: 1080px;\r\n\r\n@mixin center-x {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n@mixin flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@function space($n) {\r\n  @return $n * 0.25rem;\r\n}\r\n\r\n@mixin at-most($width) {\r\n  @media (max-width: $width) {\r\n    @content;\r\n  }\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: \"Outfit\", sans-serif;\r\n  color: $color-ink;\r\n  background: $color-paper;\r\n  line-height: 1.6;\r\n\r\n  &.modal-open {\r\n    overflow: hidden;\r\n  }\r\n}\r\n\r\nimg,\r\nvideo {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nblockquote {\r\n  font-family: \"Fraunces\", serif;\r\n  font-weight: 700;\r\n  line-height: 1.15;\r\n  margin: 0 0 space(4);\r\n}\r\n\r\nh1 {\r\n  font-size: clamp(2.4rem, 5vw, 4.4rem);\r\n}\r\n\r\nh2 {\r\n  font-size: clamp(1.8rem, 3vw, 2.6rem);\r\n}\r\n\r\nh3 {\r\n  font-size: 1.35rem;\r\n}\r\n\r\np {\r\n  margin: 0 0 space(4);\r\n}\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  max-width: $content-width;\r\n  padding-left: 1.5rem;\r\n  padding-right: 1.5rem;\r\n  @include center-x;\r\n}\r\n\r\n.stripe {\r\n  width: 100%;\r\n}\r\n\r\n.eyebrow {\r\n  letter-spacing: 0.14em;\r\n  text-transform: uppercase;\r\n  font-size: 0.78rem;\r\n  font-weight: 600;\r\n  color: $color-aurora;\r\n  margin-bottom: space(3);\r\n\r\n  &--light {\r\n    color: #cde7dc;\r\n  }\r\n}\r\n\r\n.section-copy,\r\n.lede {\r\n  max-width: 40rem;\r\n  color: $color-ink-soft;\r\n}\r\n\r\n.button {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 0;\r\n  cursor: pointer;\r\n  background: $color-aurora;\r\n  color: $color-white;\r\n  font: inherit;\r\n  font-weight: 600;\r\n  padding: 0.85rem 1.35rem;\r\n  border-radius: 999px;\r\n  transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;\r\n\r\n  &:hover {\r\n    transform: translateY(-2px);\r\n    background: darken($color-aurora, 6%);\r\n  }\r\n\r\n  &--ghost {\r\n    background: transparent;\r\n    color: $color-ink;\r\n    box-shadow: inset 0 0 0 2px rgba(18, 32, 44, 0.18);\r\n    margin-left: space(3);\r\n  }\r\n}\r\n\r\n.icon {\r\n  display: inline-block;\r\n  width: 1.2em;\r\n  height: 1.2em;\r\n  background-color: currentColor;\r\n  mask-repeat: no-repeat;\r\n  mask-position: center;\r\n  mask-size: contain;\r\n  vertical-align: middle;\r\n\r\n  &--compass {\r\n    mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.7 5.3-1.8 6.6-6.6 1.8 1.8-6.6 6.6-1.8z'/%3E%3C/svg%3E\");\r\n  }\r\n\r\n  &--chevron-left {\r\n    mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 5.5 9 12l6.5 6.5-1.5 1.5L6 12l8-8z'/%3E%3C/svg%3E\");\r\n  }\r\n\r\n  &--chevron-right {\r\n    mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M8.5 5.5 15 12l-6.5 6.5 1.5 1.5 8-8-8-8z'/%3E%3C/svg%3E\");\r\n  }\r\n\r\n  &--paw {\r\n    mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm5-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm5 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8.5 20c-2 0-3.5-2.2-2.2-4.2 1.1-1.7 3.2-2.3 5.1-1.5.6.3 1.2.3 1.8 0 1.9-.8 4-.2 5.1 1.5 1.3 2-.2 4.2-2.2 4.2H8.5z'/%3E%3C/svg%3E\");\r\n  }\r\n\r\n  &--ice {\r\n    mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M11 2h2v4.1l3-1.7 1 1.8-3 1.7 3 1.7-1 1.8-3-1.7V14h-2v-4.3l-3 1.7-1-1.8 3-1.7-3-1.7 1-1.8 3 1.7V2zm-6 14h14v2H5v-2zm2 3h10v3H7v-3z'/%3E%3C/svg%3E\");\r\n  }\r\n\r\n  &--school {\r\n    mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm0 12.2L4.2 11 12 6.8 19.8 11 12 15.2zM5 13.7V18c0 1.7 3.1 3 7 3s7-1.3 7-3v-4.3l-7 3.8-7-3.8z'/%3E%3C/svg%3E\");\r\n  }\r\n\r\n  &--close {\r\n    mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z'/%3E%3C/svg%3E\");\r\n  }\r\n\r\n  &--instagram {\r\n    mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zM18 6.6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z'/%3E%3C/svg%3E\");\r\n  }\r\n\r\n  &--youtube {\r\n    mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M23 12.2s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.8 5 12 5 12 5s-6.8 0-8.5.5a3 3 0 0 0-2.1 2.1C1 9 1 12.2 1 12.2s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.2 19.4 12 19.4 12 19.4s6.8 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6L16 12.2z'/%3E%3C/svg%3E\");\r\n  }\r\n\r\n  &--github {\r\n    mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.6s.8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1a3.6 3.6 0 0 1 .1 2.6 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z'/%3E%3C/svg%3E\");\r\n  }\r\n}\r\n\r\n.navbar {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 20;\r\n  height: $nav-tall;\r\n  background: rgba(244, 241, 234, 0.94);\r\n  backdrop-filter: blur(10px);\r\n  box-shadow: 0 1px 0 rgba(18, 32, 44, 0.08);\r\n  font-size: 1.05rem;\r\n  transition: height 0.28s ease, font-size 0.28s ease, background 0.28s ease;\r\n\r\n  &--compact {\r\n    height: $nav-short;\r\n    font-size: 0.88rem;\r\n  }\r\n\r\n  &__inner {\r\n    width: 100%;\r\n    max-width: 1200px;\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n    height: 100%;\r\n    @include center-x;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: space(4);\r\n  }\r\n\r\n  &__brand {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    font-weight: 600;\r\n    letter-spacing: 0.02em;\r\n  }\r\n\r\n  &__links {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-end;\r\n    gap: 0.35rem 1.1rem;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  &__link {\r\n    position: relative;\r\n    padding: 0.2rem 0;\r\n    color: $color-ink-soft;\r\n    transition: color 0.2s ease;\r\n\r\n    &::after {\r\n      content: \"\";\r\n      position: absolute;\r\n      left: 0;\r\n      right: 0;\r\n      bottom: -0.2rem;\r\n      height: 2px;\r\n      background: $color-copper;\r\n      transform: scaleX(0);\r\n      transform-origin: left;\r\n      transition: transform 0.25s ease;\r\n    }\r\n\r\n    &.is-active,\r\n    &:hover {\r\n      color: $color-ink;\r\n    }\r\n\r\n    &.is-active::after {\r\n      transform: scaleX(1);\r\n    }\r\n  }\r\n}\r\n\r\n.stripe--hero {\r\n  position: relative;\r\n  min-height: calc(100vh - #{$nav-tall});\r\n  color: $color-white;\r\n  overflow: hidden;\r\n  display: flex;\r\n  align-items: stretch;\r\n}\r\n\r\n.hero__media {\r\n  position: absolute;\r\n  inset: 0;\r\n\r\n  img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n    filter: saturate(0.9) contrast(1.05);\r\n    animation: drift 18s ease-in-out infinite alternate;\r\n  }\r\n\r\n  &::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    inset: 0;\r\n    background: linear-gradient(90deg, rgba(11, 28, 40, 0.78) 12%, rgba(11, 28, 40, 0.28) 70%);\r\n  }\r\n}\r\n\r\n.hero__center {\r\n  position: relative;\r\n  z-index: 1;\r\n  width: 100%;\r\n  max-width: $content-width;\r\n  padding-left: 1.5rem;\r\n  padding-right: 1.5rem;\r\n  @include center-x;\r\n  @include flex-center;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  min-height: calc(100vh - #{$nav-tall});\r\n  animation: rise-in 0.9s ease both;\r\n}\r\n\r\n.stripe--mission {\r\n  background: $color-white;\r\n  padding: space(24) 0;\r\n}\r\n\r\n.stats {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: space(6);\r\n  list-style: none;\r\n  margin: space(10) 0 0;\r\n  padding: 0;\r\n\r\n  li {\r\n    background: $color-paper;\r\n    padding: space(6);\r\n    border-radius: 1rem;\r\n  }\r\n\r\n  &__value {\r\n    display: block;\r\n    font-family: \"Fraunces\", serif;\r\n    font-size: 2.2rem;\r\n  }\r\n\r\n  &__label {\r\n    color: $color-ink-soft;\r\n  }\r\n}\r\n\r\n.stripe--gallery {\r\n  background: $color-ice;\r\n  padding: space(24) 0;\r\n}\r\n\r\n.carousel {\r\n  position: relative;\r\n  margin-top: space(8);\r\n\r\n  &__window {\r\n    overflow: hidden;\r\n    border-radius: 1.25rem;\r\n    box-shadow: $shadow;\r\n  }\r\n\r\n  &__track {\r\n    display: flex;\r\n    transition: transform 0.45s ease;\r\n  }\r\n\r\n  &__slide {\r\n    min-width: 100%;\r\n    position: relative;\r\n    background: $color-deep;\r\n\r\n    img {\r\n      width: 100%;\r\n      height: min(62vh, 560px);\r\n      object-fit: cover;\r\n    }\r\n  }\r\n\r\n  &__caption {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    padding: space(8);\r\n    color: $color-white;\r\n    background: linear-gradient(transparent, rgba(11, 28, 40, 0.82));\r\n  }\r\n\r\n  &__arrow {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    z-index: 2;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    border: 0;\r\n    border-radius: 50%;\r\n    background: rgba(244, 241, 234, 0.92);\r\n    color: $color-ink;\r\n    cursor: pointer;\r\n    @include flex-center;\r\n    box-shadow: $shadow;\r\n\r\n    &--prev {\r\n      left: -0.6rem;\r\n    }\r\n\r\n    &--next {\r\n      right: -0.6rem;\r\n    }\r\n  }\r\n}\r\n\r\n.stripe--programs {\r\n  background: $color-paper-2;\r\n  padding: space(24) 0;\r\n}\r\n\r\n.columns {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: space(6);\r\n  margin-top: space(8);\r\n}\r\n\r\n.card {\r\n  background: $color-white;\r\n  padding: space(8);\r\n  border-radius: 1.1rem;\r\n  box-shadow: $shadow;\r\n\r\n  .icon {\r\n    width: 1.8rem;\r\n    height: 1.8rem;\r\n    color: $color-aurora;\r\n    margin-bottom: space(4);\r\n  }\r\n}\r\n\r\n.stripe--horizon {\r\n  min-height: 60vh;\r\n  background-image: url(\"../assets/aurora.jpg\");\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  color: $color-white;\r\n  @include flex-center;\r\n  text-align: center;\r\n  padding: space(16) space(6);\r\n}\r\n\r\n.horizon__center {\r\n  max-width: 44rem;\r\n\r\n  blockquote {\r\n    font-size: clamp(1.5rem, 3vw, 2.3rem);\r\n    font-weight: 500;\r\n  }\r\n}\r\n\r\n.stripe--visit {\r\n  background: $color-white;\r\n  padding: space(24) 0;\r\n}\r\n\r\n.visit-grid {\r\n  display: grid;\r\n  grid-template-columns: 1.2fr 0.8fr;\r\n  gap: space(8);\r\n  align-items: center;\r\n  margin-top: space(8);\r\n}\r\n\r\n.video-frame {\r\n  video {\r\n    width: 100%;\r\n    border-radius: 1rem;\r\n    background: $color-deep;\r\n  }\r\n}\r\n\r\n.video-note {\r\n  font-size: 0.92rem;\r\n  color: $color-ink-soft;\r\n  margin-top: space(3);\r\n}\r\n\r\n.visit-panel {\r\n  background: $color-paper;\r\n  padding: space(8);\r\n  border-radius: 1.1rem;\r\n}\r\n\r\n.stripe--footer {\r\n  background: $color-deep;\r\n  color: #d5e2ea;\r\n  padding: space(12) 0;\r\n}\r\n\r\n.footer__inner {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: space(6);\r\n}\r\n\r\n.social {\r\n  display: flex;\r\n  gap: space(4);\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n  a {\r\n    width: 2.4rem;\r\n    height: 2.4rem;\r\n    border-radius: 50%;\r\n    background: rgba(255, 255, 255, 0.08);\r\n    @include flex-center;\r\n    transition: background 0.2s ease, transform 0.2s ease;\r\n\r\n    &:hover {\r\n      background: $color-aurora;\r\n      transform: translateY(-2px);\r\n    }\r\n  }\r\n\r\n  .icon {\r\n    width: 1.1rem;\r\n    height: 1.1rem;\r\n  }\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  inset: 0;\r\n  z-index: 40;\r\n  display: none;\r\n\r\n  &.is-open {\r\n    display: block;\r\n  }\r\n\r\n  &__backdrop {\r\n    position: absolute;\r\n    inset: 0;\r\n    background: rgba(11, 28, 40, 0.62);\r\n  }\r\n\r\n  &__dialog {\r\n    position: relative;\r\n    width: 92vw;\r\n    max-width: 34rem;\r\n    margin: 12vh auto 0;\r\n    background: $color-white;\r\n    padding: space(10);\r\n    border-radius: 1.2rem;\r\n    box-shadow: $shadow;\r\n    animation: rise-in 0.28s ease;\r\n  }\r\n\r\n  &__close {\r\n    position: absolute;\r\n    top: 0.9rem;\r\n    right: 0.9rem;\r\n    border: 0;\r\n    background: $color-paper;\r\n    width: 2.2rem;\r\n    height: 2.2rem;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    @include flex-center;\r\n  }\r\n}\r\n\r\n@keyframes rise-in {\r\n  from {\r\n    opacity: 0;\r\n    transform: translateY(16px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes drift {\r\n  from {\r\n    transform: scale(1.04) translateY(0);\r\n  }\r\n  to {\r\n    transform: scale(1.12) translateY(-2%);\r\n  }\r\n}\r\n\r\n@include at-most(1024px) {\r\n  .columns,\r\n  .stats,\r\n  .visit-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .carousel__arrow--prev {\r\n    left: 0.5rem;\r\n  }\r\n\r\n  .carousel__arrow--next {\r\n    right: 0.5rem;\r\n  }\r\n}\r\n\r\n@include at-most(768px) {\r\n  .navbar {\r\n    height: auto;\r\n    min-height: $nav-short;\r\n    font-size: 0.82rem;\r\n\r\n    &__inner {\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      padding: 0.55rem 0;\r\n    }\r\n\r\n    &__links {\r\n      justify-content: center;\r\n      gap: 0.35rem 0.8rem;\r\n    }\r\n  }\r\n\r\n  .hero__center,\r\n  .stripe--hero {\r\n    min-height: 70vh;\r\n  }\r\n\r\n  .button--ghost {\r\n    margin-left: 0;\r\n    margin-top: space(3);\r\n  }\r\n\r\n  .footer__inner {\r\n    flex-direction: column;\r\n    text-align: center;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./index.html"
/*!********************!*\
  !*** ./index.html ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image.jpg */ "./assets/image.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/aurora.jpg */ "./assets/aurora.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/night-sky.jpg */ "./assets/night-sky.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/field-notes.mp4 */ "./assets/field-notes.mp4"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n    <head>\r\n        <meta charset=\"utf-8\" />\r\n        <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n        <title>Northlight Refuge | Arctic Sanctuary</title>\r\n    </head>\r\n    <body>\r\n        <nav class=\"navbar\" id=\"navbar\">\r\n            <div class=\"navbar__inner\">\r\n                <a class=\"navbar__brand\" href=\"#hero\">\r\n                    <span class=\"icon icon--compass\" aria-hidden=\"true\"></span>\r\n                    Northlight Refuge\r\n                </a>\r\n                <ul class=\"navbar__links\">\r\n                    <li><a class=\"navbar__link is-active\" href=\"#hero\">Home</a></li>\r\n                    <li><a class=\"navbar__link\" href=\"#mission\">Mission</a></li>\r\n                    <li><a class=\"navbar__link\" href=\"#gallery\">Fieldwork</a></li>\r\n                    <li><a class=\"navbar__link\" href=\"#programs\">Programs</a></li>\r\n                    <li><a class=\"navbar__link\" href=\"#horizon\">Horizon</a></li>\r\n                    <li><a class=\"navbar__link\" href=\"#visit\">Visit</a></li>\r\n                </ul>\r\n            </div>\r\n        </nav>\r\n\r\n        <header class=\"stripe stripe--hero\" id=\"hero\">\r\n            <div class=\"hero__media\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"A polar bear walking across packed Arctic ice\">\r\n            </div>\r\n            <div class=\"hero__center\">\r\n                <p class=\"eyebrow\">Svalbard Field Station · Est. 1998</p>\r\n                <h1>Protecting the last white latitude</h1>\r\n                <p class=\"lede\">Northlight Refuge is a public sanctuary and research outpost dedicated to polar bears, sea ice, and the communities that share this shifting coast.</p>\r\n                <a class=\"button\" href=\"#mission\">Explore the refuge</a>\r\n            </div>\r\n        </header>\r\n\r\n        <main>\r\n            <section class=\"stripe stripe--mission\" id=\"mission\">\r\n                <div class=\"container\">\r\n                    <p class=\"eyebrow\">Why we exist</p>\r\n                    <h2>A living corridor between ice and open water</h2>\r\n                    <p class=\"section-copy\">We track denning sites, map thinning ice, and host visiting scientists. Every program on this page is designed so a traveler, a donor, or a first-year researcher can find a way in.</p>\r\n                    <ul class=\"stats\">\r\n                        <li>\r\n                            <span class=\"stats__value\">412</span>\r\n                            <span class=\"stats__label\">bears tagged since 2004</span>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"stats__value\">19</span>\r\n                            <span class=\"stats__label\">active den surveys</span>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"stats__value\">6</span>\r\n                            <span class=\"stats__label\">partner universities</span>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </section>\r\n\r\n            <section class=\"stripe stripe--gallery\" id=\"gallery\">\r\n                <div class=\"container\">\r\n                    <p class=\"eyebrow\">From the field</p>\r\n                    <h2>Three seasons on the ice</h2>\r\n                    <div class=\"carousel\" id=\"carousel\">\r\n                        <button class=\"carousel__arrow carousel__arrow--prev\" type=\"button\" aria-label=\"Previous slide\">\r\n                            <span class=\"icon icon--chevron-left\" aria-hidden=\"true\"></span>\r\n                        </button>\r\n                        <div class=\"carousel__window\">\r\n                            <div class=\"carousel__track\">\r\n                                <article class=\"carousel__slide is-active\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Polar bear approaching across snow and ice\">\r\n                                    <div class=\"carousel__caption\">\r\n                                        <h3>Late winter patrol</h3>\r\n                                        <p>Field teams log tracks, breathing holes, and the first signs of den emergence along the pack ice.</p>\r\n                                    </div>\r\n                                </article>\r\n                                <article class=\"carousel__slide\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Snow-covered mountains under a pale Arctic sky\">\r\n                                    <div class=\"carousel__caption\">\r\n                                        <h3>Spring traverse</h3>\r\n                                        <p>When the light returns, we walk ridgelines that funnel bears toward remaining hunting grounds.</p>\r\n                                    </div>\r\n                                </article>\r\n                                <article class=\"carousel__slide\">\r\n                                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Aurora borealis over a dark winter landscape\">\r\n                                    <div class=\"carousel__caption\">\r\n                                        <h3>Polar night watch</h3>\r\n                                        <p>Dark-season cameras and quiet snowmobile routes keep disturbance low while data still flows.</p>\r\n                                    </div>\r\n                                </article>\r\n                            </div>\r\n                        </div>\r\n                        <button class=\"carousel__arrow carousel__arrow--next\" type=\"button\" aria-label=\"Next slide\">\r\n                            <span class=\"icon icon--chevron-right\" aria-hidden=\"true\"></span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n\r\n            <section class=\"stripe stripe--programs\" id=\"programs\">\r\n                <div class=\"container\">\r\n                    <p class=\"eyebrow\">What we run</p>\r\n                    <h2>Three programs, one coastline</h2>\r\n                    <div class=\"columns\">\r\n                        <article class=\"card\">\r\n                            <span class=\"icon icon--paw\" aria-hidden=\"true\"></span>\r\n                            <h3>Bear watch</h3>\r\n                            <p>Non-invasive telemetry and community sighting logs help us keep a current map of mothers and cubs.</p>\r\n                        </article>\r\n                        <article class=\"card\">\r\n                            <span class=\"icon icon--ice\" aria-hidden=\"true\"></span>\r\n                            <h3>Ice ledger</h3>\r\n                            <p>Weekly thickness samples feed an open dataset used by mariners, hunters, and climate labs.</p>\r\n                        </article>\r\n                        <article class=\"card\">\r\n                            <span class=\"icon icon--school\" aria-hidden=\"true\"></span>\r\n                            <h3>Shore school</h3>\r\n                            <p>Local students join short field modules on safety, identification, and respectful observation.</p>\r\n                        </article>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n\r\n            <section class=\"stripe stripe--horizon\" id=\"horizon\">\r\n                <div class=\"horizon__center\">\r\n                    <p class=\"eyebrow eyebrow--light\">Fixed on the far ice</p>\r\n                    <blockquote>\r\n                        The refuge is not a fence. It is a promise to keep walking the same shore after the maps have changed.\r\n                    </blockquote>\r\n                </div>\r\n            </section>\r\n\r\n            <section class=\"stripe stripe--visit\" id=\"visit\">\r\n                <div class=\"container\">\r\n                    <p class=\"eyebrow\">Plan a stay</p>\r\n                    <h2>See the station without crowding the ice</h2>\r\n                    <p class=\"section-copy\">Public visiting hours are limited on purpose. Watch a greenhouse time-lapse from our tundra botany bay, then open a briefing for the next available tour window.</p>\r\n                    <div class=\"visit-grid\">\r\n                        <div class=\"video-frame\">\r\n                            <video controls poster=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n                                <source src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" type=\"video/mp4\">\r\n                                Your browser does not support HTML5 video.\r\n                            </video>\r\n                            <p class=\"video-note\">Tundra research greenhouse — seasonal bloom study used to compare inland phenology with sea-ice retreat.</p>\r\n                        </div>\r\n                        <div class=\"visit-panel\">\r\n                            <h3>Tour briefings</h3>\r\n                            <p>Each modal holds the extra detail we cannot fit on the ice: group size, kit list, and how we keep bears unaware of you.</p>\r\n                            <button class=\"button\" type=\"button\" data-modal-open=\"briefing\">Open visitor briefing</button>\r\n                            <button class=\"button button--ghost\" type=\"button\" data-modal-open=\"kit\">View field kit</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </main>\r\n\r\n        <footer class=\"stripe stripe--footer\" id=\"footer\">\r\n            <div class=\"container footer__inner\">\r\n                <div>\r\n                    <p class=\"navbar__brand\">Northlight Refuge</p>\r\n                    <p>Longyearbyen field desk · Ny-Ålesund partner lab</p>\r\n                </div>\r\n                <ul class=\"social\">\r\n                    <li>\r\n                        <a href=\"https://www.instagram.com/\" aria-label=\"Instagram\">\r\n                            <span class=\"icon icon--instagram\" aria-hidden=\"true\"></span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://www.youtube.com/\" aria-label=\"YouTube\">\r\n                            <span class=\"icon icon--youtube\" aria-hidden=\"true\"></span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://github.com/Gary22222222/cs409-mp1\" aria-label=\"GitHub\">\r\n                            <span class=\"icon icon--github\" aria-hidden=\"true\"></span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </footer>\r\n\r\n        <div class=\"modal\" id=\"briefing\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"briefing-title\">\r\n            <div class=\"modal__backdrop\" data-modal-close></div>\r\n            <div class=\"modal__dialog\">\r\n                <button class=\"modal__close\" type=\"button\" data-modal-close aria-label=\"Close\">\r\n                    <span class=\"icon icon--close\" aria-hidden=\"true\"></span>\r\n                </button>\r\n                <h3 id=\"briefing-title\">Visitor briefing</h3>\r\n                <p>Tours leave twice a week in late winter and once a week after breakup. Groups stay at eight people. Engines idle downwind. If a bear changes course toward the party, we abort and return to the hut — no photographs are worth a second encounter.</p>\r\n                <p>Bookings open on the first Monday of each month. Bring a quiet voice and leave drones at the station.</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modal\" id=\"kit\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"kit-title\">\r\n            <div class=\"modal__backdrop\" data-modal-close></div>\r\n            <div class=\"modal__dialog\">\r\n                <button class=\"modal__close\" type=\"button\" data-modal-close aria-label=\"Close\">\r\n                    <span class=\"icon icon--close\" aria-hidden=\"true\"></span>\r\n                </button>\r\n                <h3 id=\"kit-title\">Field kit</h3>\r\n                <p>Insulated boots rated to −40, a wind shell, glacier glasses, and a dry bag for cameras. The refuge issues a radio and a bear flare. Food stays sealed. Scented lotions stay in town.</p>\r\n            </div>\r\n        </div>\r\n    </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ },

/***/ "./css/main.scss"
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M11 2h2v4.1l3-1.7 1 1.8-3 1.7 3 1.7-1 1.8-3-1.7V14h-2v-4.3l-3 1.7-1-1.8 3-1.7-3-1.7 1-1.8 3 1.7V2zm-6 14h14v2H5v-2zm2 3h10v3H7v-3z%27/%3E%3C/svg%3E"
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M11 2h2v4.1l3-1.7 1 1.8-3 1.7 3 1.7-1 1.8-3-1.7V14h-2v-4.3l-3 1.7-1-1.8 3-1.7-3-1.7 1-1.8 3 1.7V2zm-6 14h14v2H5v-2zm2 3h10v3H7v-3z%27/%3E%3C/svg%3E ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M11 2h2v4.1l3-1.7 1 1.8-3 1.7 3 1.7-1 1.8-3-1.7V14h-2v-4.3l-3 1.7-1-1.8 3-1.7-3-1.7 1-1.8 3 1.7V2zm-6 14h14v2H5v-2zm2 3h10v3H7v-3z%27/%3E%3C/svg%3E";

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.6s.8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1a3.6 3.6 0 0 1 .1 2.6 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z%27/%3E%3C/svg%3E"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.6s.8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1a3.6 3.6 0 0 1 .1 2.6 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z%27/%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.6s.8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1a3.6 3.6 0 0 1 .1 2.6 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z%27/%3E%3C/svg%3E";

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.7 5.3-1.8 6.6-6.6 1.8 1.8-6.6 6.6-1.8z%27/%3E%3C/svg%3E"
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.7 5.3-1.8 6.6-6.6 1.8 1.8-6.6 6.6-1.8z%27/%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.7 5.3-1.8 6.6-6.6 1.8 1.8-6.6 6.6-1.8z%27/%3E%3C/svg%3E";

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm0 12.2L4.2 11 12 6.8 19.8 11 12 15.2zM5 13.7V18c0 1.7 3.1 3 7 3s7-1.3 7-3v-4.3l-7 3.8-7-3.8z%27/%3E%3C/svg%3E"
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm0 12.2L4.2 11 12 6.8 19.8 11 12 15.2zM5 13.7V18c0 1.7 3.1 3 7 3s7-1.3 7-3v-4.3l-7 3.8-7-3.8z%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm0 12.2L4.2 11 12 6.8 19.8 11 12 15.2zM5 13.7V18c0 1.7 3.1 3 7 3s7-1.3 7-3v-4.3l-7 3.8-7-3.8z%27/%3E%3C/svg%3E";

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M15.5 5.5 9 12l6.5 6.5-1.5 1.5L6 12l8-8z%27/%3E%3C/svg%3E"
/*!*************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M15.5 5.5 9 12l6.5 6.5-1.5 1.5L6 12l8-8z%27/%3E%3C/svg%3E ***!
  \*************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M15.5 5.5 9 12l6.5 6.5-1.5 1.5L6 12l8-8z%27/%3E%3C/svg%3E";

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z%27/%3E%3C/svg%3E"
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z%27/%3E%3C/svg%3E ***!
  \************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z%27/%3E%3C/svg%3E";

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M23 12.2s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.8 5 12 5 12 5s-6.8 0-8.5.5a3 3 0 0 0-2.1 2.1C1 9 1 12.2 1 12.2s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.2 19.4 12 19.4 12 19.4s6.8 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6L16 12.2z%27/%3E%3C/svg%3E"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M23 12.2s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.8 5 12 5 12 5s-6.8 0-8.5.5a3 3 0 0 0-2.1 2.1C1 9 1 12.2 1 12.2s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.2 19.4 12 19.4 12 19.4s6.8 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6L16 12.2z%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M23 12.2s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.8 5 12 5 12 5s-6.8 0-8.5.5a3 3 0 0 0-2.1 2.1C1 9 1 12.2 1 12.2s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.2 19.4 12 19.4 12 19.4s6.8 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6L16 12.2z%27/%3E%3C/svg%3E";

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zM18 6.6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z%27/%3E%3C/svg%3E"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zM18 6.6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z%27/%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5.2A3.8 3.8 0 1 0 15.8 12 3.8 3.8 0 0 0 12 8.2zM18 6.6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z%27/%3E%3C/svg%3E";

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm5-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm5 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8.5 20c-2 0-3.5-2.2-2.2-4.2 1.1-1.7 3.2-2.3 5.1-1.5.6.3 1.2.3 1.8 0 1.9-.8 4-.2 5.1 1.5 1.3 2-.2 4.2-2.2 4.2H8.5z%27/%3E%3C/svg%3E"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm5-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm5 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8.5 20c-2 0-3.5-2.2-2.2-4.2 1.1-1.7 3.2-2.3 5.1-1.5.6.3 1.2.3 1.8 0 1.9-.8 4-.2 5.1 1.5 1.3 2-.2 4.2-2.2 4.2H8.5z%27/%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm5-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm5 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8.5 20c-2 0-3.5-2.2-2.2-4.2 1.1-1.7 3.2-2.3 5.1-1.5.6.3 1.2.3 1.8 0 1.9-.8 4-.2 5.1 1.5 1.3 2-.2 4.2-2.2 4.2H8.5z%27/%3E%3C/svg%3E";

/***/ },

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M8.5 5.5 15 12l-6.5 6.5 1.5 1.5 8-8-8-8z%27/%3E%3C/svg%3E"
/*!*************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M8.5 5.5 15 12l-6.5 6.5 1.5 1.5 8-8-8-8z%27/%3E%3C/svg%3E ***!
  \*************************************************************************************************************************************************************************/
(module) {

"use strict";
module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath d=%27M8.5 5.5 15 12l-6.5 6.5 1.5 1.5 8-8-8-8z%27/%3E%3C/svg%3E";

/***/ },

/***/ "./assets/aurora.jpg"
/*!***************************!*\
  !*** ./assets/aurora.jpg ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "55924323d239a588cd9a.jpg";

/***/ },

/***/ "./assets/field-notes.mp4"
/*!********************************!*\
  !*** ./assets/field-notes.mp4 ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "4adbe6c46895d9f70051.mp4";

/***/ },

/***/ "./assets/image.jpg"
/*!**************************!*\
  !*** ./assets/image.jpg ***!
  \**************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "f7c3d1bc154868c1bcc8.jpg";

/***/ },

/***/ "./assets/night-sky.jpg"
/*!******************************!*\
  !*** ./assets/night-sky.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "dfdeddde15717a06d52f.jpg";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	__webpack_require__.p = "/";
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// no installed chunks
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files


// Stylesheets


// Scripts

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map