/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/better-react-mathjax/esm/MathJaxContext/MathJaxContext.js":
/*!********************************************************************************!*\
  !*** ./node_modules/better-react-mathjax/esm/MathJaxContext/MathJaxContext.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathJaxBaseContext": function() { return /* binding */ MathJaxBaseContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign=undefined&&undefined.__assign||function(){return(__assign=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var v2Promise,v3Promise,MathJaxBaseContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0),DEFAULT_V2_SRC="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",DEFAULT_V3_SRC="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.js",MathJaxContext=function(e){var n=e.config,t=e.version,t=void 0===t?3:t,o=e.src,o=void 0===o?2===t?DEFAULT_V2_SRC:DEFAULT_V3_SRC:o,a=e.onStartup,r=e.onLoad,i=e.onError,s=e.typesettingOptions,h=e.renderMode,h=void 0===h?"post":h,d=e.hideUntilTypeset,e=e.children,c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MathJaxBaseContext);if(void 0!==(null==c?void 0:c.version)&&(null==c?void 0:c.version)!==t)throw Error("Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.");if(2===t&&void 0!==v3Promise||3===t&&void 0!==v2Promise)throw Error("Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.");var u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(c),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((null==c?void 0:c.version)||null);if(null===c.current)c.current=t;else if(c.current!==t)throw Error("Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.");var v=o||(2===t?DEFAULT_V2_SRC:DEFAULT_V3_SRC);function f(t,o){n&&(window.MathJax=n);var e=document.createElement("script");e.type="text/javascript",e.src=v,e.async=!1,e.addEventListener("load",function(){var e=window.MathJax;a&&a(e),t(e),r&&r()}),e.addEventListener("error",function(e){return o(e)}),document.getElementsByTagName("head")[0].appendChild(e)}return void 0===u.current&&(c={typesettingOptions:s,renderMode:h,hideUntilTypeset:d},2===t?void 0===v2Promise&&("undefined"!=typeof window?(v2Promise=new Promise(f)).catch(function(e){if(!i)throw Error("Failed to download MathJax version 2 from '".concat(v,"' due to: ").concat(e));i(e)}):(v2Promise=Promise.reject()).catch(function(e){})):void 0===v3Promise&&("undefined"!=typeof window?(v3Promise=new Promise(f)).catch(function(e){if(!i)throw Error("Failed to download MathJax version 3 from '".concat(v,"' due to: ").concat(e));i(e)}):(v3Promise=Promise.reject()).catch(function(e){})),u.current=__assign(__assign({},c),2===t?{version:2,promise:v2Promise}:{version:3,promise:v3Promise})),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MathJaxBaseContext.Provider,{value:u.current},e)};/* harmony default export */ __webpack_exports__["default"] = (MathJaxContext);

/***/ }),

/***/ "./node_modules/better-react-mathjax/esm/MathJax/MathJax.js":
/*!******************************************************************!*\
  !*** ./node_modules/better-react-mathjax/esm/MathJax/MathJax.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MathJaxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MathJaxContext */ "./node_modules/better-react-mathjax/esm/MathJaxContext/MathJaxContext.js");
var __assign=undefined&&undefined.__assign||function(){return(__assign=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},__rest=undefined&&undefined.__rest||function(t,e){var n={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};var typesettingFailed=function(t){return"Typesetting failed: ".concat(void 0!==t.message?t.message:t.toString())},MathJax=function(t){function r(){var t;"every"===h&&m&&"post"===v&&null!==f.current&&(f.current.style.visibility=null!=(t=null==(t=p.style)?void 0:t.visibility)?t:"visible"),_.current||("first"===h&&null!==f.current&&(f.current.style.visibility="visible"),n&&n(),_.current=!0),o&&o(),b.current=!1}var e=t.inline,i=void 0!==e&&e,e=t.hideUntilTypeset,n=t.onInitTypeset,o=t.onTypeset,s=t.text,u=t.dynamic,a=t.typesettingOptions,l=t.renderMode,c=t.children,p=__rest(t,["inline","hideUntilTypeset","onInitTypeset","onTypeset","text","dynamic","typesettingOptions","renderMode","children"]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(""),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_MathJaxContext__WEBPACK_IMPORTED_MODULE_1__.MathJaxBaseContext),h=null!=e?e:null==d?void 0:d.hideUntilTypeset,v=null!=l?l:null==d?void 0:d.renderMode,g=null!=a?a:null==d?void 0:d.typesettingOptions,m=!1!==u&&(u||"production"!=="development"),_=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return!b.current&&null!==f.current&&m&&"every"===h&&"post"===v&&(f.current.style.visibility="hidden"),("undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if((m||!_.current)&&null!==f.current){if(!d)throw Error("MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?");if("pre"===v){if(!("string"==typeof(t=s)&&0<t.length))throw Error("Render mode 'pre' requires text prop to be set and non-empty, which was currently \"".concat(s,'"'));if(!a||!a.fn)throw Error("Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext");if(2===d.version)throw Error("Render mode 'pre' only available with MathJax 3, and version 2 is currently in use")}"post"!==v&&s===y.current||b.current||(b.current=!0,3===d.version?d.promise.then(function(e){var n;"pre"===v?(n=function(t){y.current=s,e.startup.document.clear(),e.startup.document.updateDocument(),null!==f.current&&(f.current.innerHTML=t.outerHTML),r()},a.fn.endsWith("Promise")?e.startup.promise.then(function(){return e[g.fn](s,__assign(__assign({},(null==g?void 0:g.options)||{}),{display:!i}))}).then(n).catch(function(t){throw r(),Error(typesettingFailed(t))}):e.startup.promise.then(function(){var t=e[g.fn](s,__assign(__assign({},(null==g?void 0:g.options)||{}),{display:!i}));n(t)}).catch(function(t){throw r(),Error(typesettingFailed(t))})):e.startup.promise.then(function(){return e.typesetClear([f.current]),e.typesetPromise([f.current])}).then(r).catch(function(t){throw r(),Error(typesettingFailed(t))})}).catch(function(t){throw r(),Error(typesettingFailed(t))}):d.promise.then(function(t){t.Hub.Queue(["Typeset",t.Hub,f.current]),t.Hub.Queue(r)}).catch(function(t){throw r(),Error(typesettingFailed(t))}))}var t}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",__assign({},p,{style:__assign(__assign({display:i?"inline":"block"},p.style),{visibility:h?"hidden":null==(t=p.style)?void 0:t.visibility}),ref:f}),c)};/* harmony default export */ __webpack_exports__["default"] = (MathJax);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var better_react_mathjax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! better-react-mathjax */ "./node_modules/better-react-mathjax/esm/MathJaxContext/MathJaxContext.js");
/* harmony import */ var better_react_mathjax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! better-react-mathjax */ "./node_modules/better-react-mathjax/esm/MathJax/MathJax.js");





const config = {
  loader: {
    load: ["[tex]/html"]
  },
  tex: {
    packages: {
      "[+]": ["html"]
    },
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]]
  }
};

(function () {
  let locked = false;
  wp.data.subscribe(function () {
    const results = wp.data.select("core/block-editor").getBlocks().filter(function (block) {
      return block.name == "simp/my-latex-quiz" && block.attributes.correctAnswer == undefined;
    });

    if (results.length && locked == false) {
      locked = true;
      wp.data.dispatch("core/editor").lockPostSaving("noAnswer");
    }

    if (!results.length && locked) {
      locked = false;
      wp.data.dispatch("core/editor").unlockPostSaving("noAnswer");
    }
  });
})();

wp.blocks.registerBlockType("simp/my-latex-quiz", {
  title: "my-latex-quiz",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    question: {
      type: "string",
      default: `\\(\\frac{10}{4x} \\approx 2^{12}\\)`
    },
    answers: {
      type: "array",
      default: [``]
    },
    correctAnswer: {
      type: "number",
      default: undefined
    },
    bgColor: {
      type: "string",
      default: "#EBEBEB"
    },
    theAlignment: {
      type: "string",
      default: "left"
    }
  },
  edit: EditComponent,
  save: function (props) {
    return null;
  }
});

function EditComponent(props) {
  function updateQuestion(value) {
    props.setAttributes({
      question: value
    });
  }

  function deleteAnswer(indexToDelete) {
    const newAnswers = props.attributes.answers.filter(function (x, index) {
      return index != indexToDelete;
    });
    props.setAttributes({
      answers: newAnswers
    });

    if (indexToDelete == props.attributes.correctAnswer) {
      props.setAttributes({
        correctAnswer: undefined
      });
    }
  }

  function markAsCorrect(index) {
    props.setAttributes({
      correctAnswer: index
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "latex-quiz-edit-block",
    style: {
      backgroundColor: props.attributes.bgColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: props.attributes.theAlignment,
    onChange: x => props.setAttributes({
      theAlignment: x
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Background Color",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
    color: props.attributes.bgColor,
    onChangeComplete: x => props.setAttributes({
      bgColor: x.hex
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(better_react_mathjax__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hideUntilTypeset: "first"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(better_react_mathjax__WEBPACK_IMPORTED_MODULE_5__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: props.attributes.question,
    onChange: updateQuestion,
    label: "Question:",
    style: {
      fontSize: "20px"
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      fontSize: "13px",
      margin: "20px 0 8px 0"
    }
  }, "Answers:"), props.attributes.answers.map(function (answer, index) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(better_react_mathjax__WEBPACK_IMPORTED_MODULE_4__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      value: answer,
      onChange: newValue => {
        const newAnswers = props.attributes.answers.concat([]);
        newAnswers[index] = newValue;
        props.setAttributes({
          answers: newAnswers
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: () => markAsCorrect(index)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: props.attributes.correctAnswer == index ? "star-filled" : "star-empty",
      className: "mark-as-correct"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      isLink: true,
      className: "attention-delete",
      onClick: () => deleteAnswer(index)
    }, "Delete"))));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isPrimary: true,
    onClick: () => {
      props.setAttributes({
        answers: props.attributes.answers.concat([``])
      });
    }
  }, " Add Another Answer")));
}
}();
/******/ })()
;
//# sourceMappingURL=index.js.map