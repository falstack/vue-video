(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueVideo"] = factory();
	else
		root["vueVideo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(75)
	
	/* script */
	__vue_exports__ = __webpack_require__(5)
	
	/* template */
	var __vue_template__ = __webpack_require__(74)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/yuistack/Documents/Code/vue-video/src/video.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-610941d4"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-610941d4", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-610941d4", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] video.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof2 = __webpack_require__(6);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    props: {
	        source: {
	            default: null,
	            required: true
	        }
	    },
	    watch: {
	        'voice': function voice(val) {
	            this.ctrl.isMuted = val === 0;
	        }
	    },
	    data: function data() {
	        return {
	            voice: 60,
	            time: {
	                cur: "00:00",
	                all: "00:00"
	            },
	            ctrl: {
	                playing: false,
	                isMuted: false,
	                isFull: false,
	                timer: null,
	                show: true
	            },
	            datas: {
	                loading: 0,
	                playing: 0,
	                voiceTemp: 0
	            }
	        };
	    },
	
	    methods: {
	        play: function play() {
	            if (this.ctrl.playing) {
	                this.$refs.video.pause();
	                this.ctrl.playing = false;
	            } else {
	                this.$refs.video.play();
	                this.ctrl.playing = true;
	            }
	        },
	        clickBar: function clickBar(e, vertical) {
	            var cur = void 0,
	                ret = void 0;
	            var ele = e.currentTarget;
	            if (vertical) {
	                var size = ele.offsetHeight;
	                cur = e.clientY;
	                ret = (size - cur + ele.getBoundingClientRect().top) / size * 100;
	            } else {
	                cur = e.clientX;
	                ret = (cur - ele.getBoundingClientRect().left) / ele.offsetWidth * 100;
	            }
	            if (ret > 100) {
	                return 100;
	            } else if (ret < 0) {
	                return 0;
	            } else {
	                return ret;
	            }
	        },
	        volume: function volume(e) {
	            var ret = this.clickBar(e, true);
	            this.voice = ret;
	            this.$refs.video.volume = ret / 100;
	        },
	        muted: function muted() {
	            if (this.ctrl.isMuted) {
	                this.$refs.video.muted = false;
	                this.voice = this.datas.voiceTemp;
	                this.$refs.video.volume = this.voice / 100;
	            } else {
	                this.$refs.video.muted = true;
	                this.datas.voiceTemp = this.voice;
	                this.voice = 0;
	            }
	        },
	        jump: function jump(e) {
	            var ret = this.clickBar(e, false);
	            this.datas.playing = ret;
	            this.$refs.video.currentTime = ret * this.$refs.video.duration / 100;
	            if (!this.ctrl.playing) {
	                this.play();
	            }
	        },
	        tool: function tool() {
	            if (this.ctrl.isFull) {
	                var vm = this;
	                this.ctrl.show = true;
	                this.ctrl.timer = setTimeout(function () {
	                    if (vm.ctrl.isFull) {
	                        vm.ctrl.show = false;
	                    }
	                    clearTimeout(vm.ctrl.timer);
	                }, 5000);
	            }
	        },
	        screen: function screen() {
	            if (this.checkIsFullScreen()) {
	                this.exitFullScreen();
	            } else {
	                this.launchFullScreen(this.$refs.mask);
	            }
	        },
	        screenToggle: function screenToggle() {
	            var vm = this;
	            this.ctrl.isFull = this.checkIsFullScreen() === true;
	            this.ctrl.show = true;
	            this.$refs.box.style.width = "100%";
	            this.$refs.box.style.height = "100%";
	            this.$refs.mask.style.width = "100%";
	            if (this.ctrl.isFull) {
	                this.ctrl.timer = setTimeout(function () {
	                    if (vm.ctrl.isFull) {
	                        vm.ctrl.show = false;
	                    }
	                }, 5000);
	            } else {
	                clearTimeout(vm.ctrl.timer);
	                vm.ctrl.show = true;
	            }
	        },
	        exitFullScreen: function exitFullScreen() {
	            if (document.exitFullscreen) {
	                document.exitFullscreen();
	            } else if (document.msExitFullscreen) {
	                document.msExitFullscreen();
	            } else if (document.mozCancelFullScreen) {
	                document.mozCancelFullScreen();
	            } else if (document.oRequestFullscreen) {
	                document.oCancelFullScreen();
	            } else if (document.webkitExitFullscreen) {
	                document.webkitExitFullscreen();
	            } else {
	                document.IsFullScreen = false;
	            }
	        },
	        launchFullScreen: function launchFullScreen(e) {
	            if (e.requestFullscreen) {
	                e.requestFullscreen();
	            } else if (e.mozRequestFullScreen) {
	                e.mozRequestFullScreen();
	            } else if (e.msRequestFullscreen) {
	                e.msRequestFullscreen();
	            } else if (e.oRequestFullscreen) {
	                e.oRequestFullscreen();
	            } else if (e.webkitRequestFullscreen) {
	                e.webkitRequestFullScreen();
	            } else {
	                document.IsFullScreen = true;
	            }
	        },
	        checkIsFullScreen: function checkIsFullScreen() {
	            return this.invokeFieldOrMethod(document, 'FullScreen') || this.invokeFieldOrMethod(document, 'IsFullScreen') || document.IsFullScreen;
	        },
	        invokeFieldOrMethod: function invokeFieldOrMethod(ele, method) {
	            var usablePrefixMethod = void 0;
	
	            ["webkit", "moz", "ms", "o", ""].forEach(function (prefix) {
	                if (usablePrefixMethod) return;
	                if (prefix === "") {
	                    method = method.slice(0, 1).toLowerCase() + method.slice(1);
	                }
	                var typePrefixMethod = (0, _typeof3.default)(ele[prefix + method]);
	                if (typePrefixMethod + "" !== "undefined") {
	                    if (typePrefixMethod === "function") {
	                        usablePrefixMethod = ele[prefix + method]();
	                    } else {
	                        usablePrefixMethod = ele[prefix + method];
	                    }
	                }
	            });
	
	            return usablePrefixMethod;
	        },
	        formatSeconds: function formatSeconds(second) {
	            var minute = 0;
	            var hour = 0;
	            if (second > 60) {
	                minute = parseInt(second / 60);
	                second = (second % 60).toFixed(0);
	                if (minute > 60) {
	                    hour = parseInt(minute / 60);
	                    minute = parseInt(minute % 60);
	                }
	            } else {
	                second = parseInt(second);
	            }
	            second = second < 10 ? '0' + second : second;
	            minute = minute < 10 ? '0' + minute : minute;
	            return [hour, minute, second];
	        }
	    },
	    mounted: function mounted() {
	        var vm = this;
	        var video = vm.$refs.video;
	        video.volume = vm.voice / 100;
	
	        video.ondurationchange = function () {
	            // console.log('ondurationchange : 视频/音频（audio/video）的时长发生变化');
	            var time = vm.formatSeconds(this.duration);
	            vm.time.all = time[1] + ":" + time[2];
	        };
	
	        video.oncanplay = function () {
	            // console.log('oncanplay : 缓冲已足够开始时');
	            vm.$refs.load.style.display = "none";
	            vm.$refs.waiting.style.display = "none";
	        };
	        video.onwaiting = function () {
	            // console.log("onwaiting : 播放过程中开始缓冲");
	            vm.$refs.waiting.style.display = "block";
	        };
	
	        video.ontimeupdate = function () {
	            // console.log('ontimeupdate : 当播放位置改变时');
	            var current = this.currentTime;
	            var time = vm.formatSeconds(current);
	            vm.datas.playing = current / this.duration * 100;
	            vm.time.cur = time[1] + ":" + time[2];
	        };
	
	        video.onprogress = function () {
	            // console.log('onprogress : 正在下载视频');
	            var bf = this.buffered;
	            if (this.duration > 0) {
	                vm.datas.loading = bf.end(bf.length - 1) / this.duration * 100;
	            }
	        };
	
	        video.onended = function () {
	            // console.log("onended : 播放完毕");
	            vm.datas.playing = 0;
	            vm.ctrl.playing = false;
	        };
	
	        // 监听键盘事件
	        document.addEventListener("keydown", function (e) {
	            if (e.keyCode == 32) {
	                e.preventDefault();
	                vm.play();
	            } else if (e.keyCode == 40 && vm.checkIsFullScreen()) {
	                var down = vm.voice - 10;
	                video.volume = down >= 0 ? down / 100 : 0;
	                vm.voice = down >= 0 ? down : 0;
	            } else if (e.keyCode == 38 && vm.checkIsFullScreen()) {
	                var up = vm.voice + 10;
	                video.volume = up >= 100 ? 1 : up / 100;
	                vm.voice = up >= 100 ? 100 : up;
	            } else if (e.keyCode == 39) {
	                video.currentTime += 5;
	            } else if (e.keyCode == 37) {
	                video.currentTime -= 5;
	            }
	        });
	
	        document.addEventListener("fullscreenchange", function () {
	            vm.screenToggle();
	        });
	        document.addEventListener("mozfullscreenchange", function () {
	            vm.screenToggle();
	        });
	        document.addEventListener("webkitfullscreenchange", function () {
	            vm.screenToggle();
	        });
	        document.addEventListener("msfullscreenchange", function () {
	            vm.screenToggle();
	        });
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(7);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(58);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	__webpack_require__(53);
	module.exports = __webpack_require__(57).f('iterator');

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(10)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(13)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(11)
	  , defined   = __webpack_require__(12);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(14)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(30)
	  , hide           = __webpack_require__(20)
	  , has            = __webpack_require__(31)
	  , Iterators      = __webpack_require__(32)
	  , $iterCreate    = __webpack_require__(33)
	  , setToStringTag = __webpack_require__(49)
	  , getPrototypeOf = __webpack_require__(51)
	  , ITERATOR       = __webpack_require__(50)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(16)
	  , core      = __webpack_require__(17)
	  , ctx       = __webpack_require__(18)
	  , hide      = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 16 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(19);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(21)
	  , createDesc = __webpack_require__(29);
	module.exports = __webpack_require__(25) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(22)
	  , IE8_DOM_DEFINE = __webpack_require__(24)
	  , toPrimitive    = __webpack_require__(28)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(25) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(25) && !__webpack_require__(26)(function(){
	  return Object.defineProperty(__webpack_require__(27)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(26)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23)
	  , document = __webpack_require__(16).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(23);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);

/***/ },
/* 31 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(34)
	  , descriptor     = __webpack_require__(29)
	  , setToStringTag = __webpack_require__(49)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(20)(IteratorPrototype, __webpack_require__(50)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(22)
	  , dPs         = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(47)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(27)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(21)
	  , anObject = __webpack_require__(22)
	  , getKeys  = __webpack_require__(36);
	
	module.exports = __webpack_require__(25) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(37)
	  , enumBugKeys = __webpack_require__(47);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(31)
	  , toIObject    = __webpack_require__(38)
	  , arrayIndexOf = __webpack_require__(41)(false)
	  , IE_PROTO     = __webpack_require__(44)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(39)
	  , defined = __webpack_require__(12);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(40);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(38)
	  , toLength  = __webpack_require__(42)
	  , toIndex   = __webpack_require__(43);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(11)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(11)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(45)('keys')
	  , uid    = __webpack_require__(46);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(16)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16).document && document.documentElement;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(21).f
	  , has = __webpack_require__(31)
	  , TAG = __webpack_require__(50)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(45)('wks')
	  , uid        = __webpack_require__(46)
	  , Symbol     = __webpack_require__(16).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(31)
	  , toObject    = __webpack_require__(52)
	  , IE_PROTO    = __webpack_require__(44)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(12);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(54);
	var global        = __webpack_require__(16)
	  , hide          = __webpack_require__(20)
	  , Iterators     = __webpack_require__(32)
	  , TO_STRING_TAG = __webpack_require__(50)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(55)
	  , step             = __webpack_require__(56)
	  , Iterators        = __webpack_require__(32)
	  , toIObject        = __webpack_require__(38);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(13)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(50);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	module.exports = __webpack_require__(17).Symbol;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(16)
	  , has            = __webpack_require__(31)
	  , DESCRIPTORS    = __webpack_require__(25)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(30)
	  , META           = __webpack_require__(61).KEY
	  , $fails         = __webpack_require__(26)
	  , shared         = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(49)
	  , uid            = __webpack_require__(46)
	  , wks            = __webpack_require__(50)
	  , wksExt         = __webpack_require__(57)
	  , wksDefine      = __webpack_require__(62)
	  , keyOf          = __webpack_require__(63)
	  , enumKeys       = __webpack_require__(64)
	  , isArray        = __webpack_require__(67)
	  , anObject       = __webpack_require__(22)
	  , toIObject      = __webpack_require__(38)
	  , toPrimitive    = __webpack_require__(28)
	  , createDesc     = __webpack_require__(29)
	  , _create        = __webpack_require__(34)
	  , gOPNExt        = __webpack_require__(68)
	  , $GOPD          = __webpack_require__(70)
	  , $DP            = __webpack_require__(21)
	  , $keys          = __webpack_require__(36)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(69).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(66).f  = $propertyIsEnumerable;
	  __webpack_require__(65).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(14)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(20)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(46)('meta')
	  , isObject = __webpack_require__(23)
	  , has      = __webpack_require__(31)
	  , setDesc  = __webpack_require__(21).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(26)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(16)
	  , core           = __webpack_require__(17)
	  , LIBRARY        = __webpack_require__(14)
	  , wksExt         = __webpack_require__(57)
	  , defineProperty = __webpack_require__(21).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(36)
	  , toIObject = __webpack_require__(38);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(36)
	  , gOPS    = __webpack_require__(65)
	  , pIE     = __webpack_require__(66);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 66 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(40);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(38)
	  , gOPN      = __webpack_require__(69).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(37)
	  , hiddenKeys = __webpack_require__(47).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(66)
	  , createDesc     = __webpack_require__(29)
	  , toIObject      = __webpack_require__(38)
	  , toPrimitive    = __webpack_require__(28)
	  , has            = __webpack_require__(31)
	  , IE8_DOM_DEFINE = __webpack_require__(24)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(25) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 71 */
/***/ function(module, exports) {



/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62)('asyncIterator');

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(62)('observable');

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    ref: "box",
	    attrs: {
	      "id": "vue-video"
	    }
	  }, [_h('div', {
	    ref: "mask",
	    staticClass: "v-mask",
	    on: {
	      "click": play,
	      "dblclick": screen,
	      "mousemove": tool
	    }
	  }, [_h('video', {
	    ref: "video",
	    attrs: {
	      "preload": "metadata"
	    }
	  }, [_l((source), function(data) {
	    return _h('source', {
	      attrs: {
	        "src": data.src,
	        "type": data.type
	      }
	    })
	  })]), " ", _h('div', {
	    ref: "load",
	    staticClass: "v-load"
	  }), " ", _h('div', {
	    ref: "waiting",
	    staticClass: "v-waiting"
	  })]), " ", _h('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (ctrl.show),
	      expression: "ctrl.show"
	    }],
	    class: ['v-tool', ctrl.isFull ? 'v-tool-full' : '']
	  }, [_h('button', {
	    class: [ctrl.playing ? 'v-btn-playing' : 'v-btn-paused'],
	    on: {
	      "click": play
	    }
	  }), " ", _h('div', {
	    staticClass: "v-tool-time"
	  }, [_h('span', [_s(time.cur)])]), " ", _h('div', {
	    staticClass: "v-progress-bar"
	  }, [_h('div', {
	    staticClass: "v-range",
	    on: {
	      "click": jump
	    }
	  }, [_h('span', {
	    staticClass: "v-loading",
	    style: ({
	      width: datas.loading + '%'
	    })
	  }), " ", _h('span', {
	    staticClass: "v-current",
	    style: ({
	      width: datas.playing + '%'
	    })
	  }, [_m(0)])])]), " ", _h('div', {
	    staticClass: "v-tool-time"
	  }, [_h('span', [_s(time.all)])]), " ", _h('button', {
	    class: ['v-btn-voice', ctrl.isMuted ? 'v-btn-silent' : 'v-btn-volume'],
	    on: {
	      "click": muted
	    }
	  }), " ", _h('div', {
	    staticClass: "v-voice-bar"
	  }, [_h('div', {
	    staticClass: "v-range",
	    on: {
	      "click": volume
	    }
	  }, [_h('span', {
	    staticClass: "v-current",
	    style: ({
	      height: voice + '%'
	    })
	  }, [_m(1)])])]), " ", _h('button', {
	    staticClass: "v-screen",
	    on: {
	      "click": screen
	    }
	  })])])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('em', {
	    staticClass: "v-dot"
	  })
	}},function (){with(this) {
	  return _h('em', {
	    staticClass: "v-dot"
	  })
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-610941d4", module.exports)
	  }
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-610941d4&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./video.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-610941d4&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./video.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "\n#vue-video[data-v-610941d4] {\n  overflow: hidden;\n  background-color: #000;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid #e5e9ef;\n  position: relative;\n  font-family: \"Microsoft YaHei\",Arial,Helvetica,sans-serif;\n}\n#vue-video .v-mask[data-v-610941d4] {\n    position: relative;\n    cursor: pointer;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    background-color: #000;\n}\n#vue-video .v-mask video[data-v-610941d4] {\n      background-color: #000;\n      width: 100%;\n      height: 100%;\n}\n#vue-video .v-tool[data-v-610941d4] {\n    height: 40px;\n    background-color: #fff;\n    border-left: 1px solid #e5e9ef;\n    border-right: 1px solid #e5e9ef;\n    font-size: 13px;\n    display: flex;\n}\n#vue-video .v-tool button[data-v-610941d4] {\n      width: 40px;\n      height: 100%;\n      background-color: #fff;\n      background-size: 20px;\n      background-repeat: no-repeat;\n      background-position: center;\n      transition: background-color .3s;\n      outline: none;\n      border: none;\n      cursor: pointer;\n}\n#vue-video .v-tool button[data-v-610941d4]:hover {\n        background-color: #e6e9f0;\n}\n#vue-video .v-tool .v-range[data-v-610941d4] {\n      background-color: #e5e9ef;\n      width: 100%;\n      height: 100%;\n      cursor: pointer;\n      position: relative;\n      border-radius: 4px;\n}\n#vue-video .v-tool .v-range span[data-v-610941d4] {\n        border-radius: 4px;\n}\n#vue-video .v-tool .v-dot[data-v-610941d4] {\n      position: absolute;\n      display: block;\n      width: 14px;\n      height: 14px;\n      border-radius: 50%;\n      background-color: #fff;\n      border: 1px solid #e5e9ef;\n      cursor: pointer;\n      box-sizing: border-box;\n      transition: box-shadow .3s;\n}\n#vue-video .v-tool .v-dot[data-v-610941d4]:hover {\n        box-shadow: 0 0 3px #00a1d6;\n}\n.fade-enter-active[data-v-610941d4], .fade-leave-active[data-v-610941d4] {\n  transition: opacity .5s;\n}\n.fade-enter[data-v-610941d4], .fade-leave-active[data-v-610941d4] {\n  transition: opacity .5s;\n  opacity: 0;\n}\n.v-tool-full[data-v-610941d4] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  border: none;\n  z-index: 2147483650;\n  width: 100%;\n}\n.v-btn-playing[data-v-610941d4] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABkklEQVR4Xu2awW0CMRREPxUkJdGNtSdCBaQErv+WVqgIaMCJkIjEBZ6lHWFLHq4D49mZZ067ick/m8mfP1yACZi8AV+ByQHwn6CvgK/A5A34CqwFIDO/I2IXEZ/gdam17pdl+Xn1PbUfPd9qAjLz3PDw/zlOpZQtFCD1e0cBv3TIg95SgNSPsikIkAbOTKmfC4AGTAAhQroaWbUf5TcB1BDp6sXUfpTfBFBDpKsXU/tRfhNADZGuXkztR/lNADVEunoxtR/lNwHUEOnqxdR+lN8EUEOkqxdT+1F+E0ANka5eTO1H+U0ANUS6ejG1H+U3AdQQ6erF1H6U3wRQQ6SrF1P7UX4TQA2Rrl5M7Uf5TQA1RLp6MbUf5TcB1BDp6sXUfpTfBFBDpKsXU/tRfhNADZGuXkztR/lNADVEunqxzLxExAede9fxnSPyURBwe03uQAdFxLXW+tX4mlyL3+3IfSnl2HD206+sLmDN4SP81gWMsELPDCagZ/sjnG0CRlihZwYT0LP9Ec42ASOs0DPD9AT8AYaCnFADEBKrAAAAAElFTkSuQmCC);\n}\n.v-btn-playing[data-v-610941d4]:hover {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABnklEQVR4Xu2aQU4CQRREf59Aj+SBIECcDbPRlWyIMZkLeBVPJF6AJgGiu3mTdJnupIttQXVN1WtWk6LzT+r8+cMFmIDOG/AV6BwA/wn6CvgKdN6Ar0ApAKthfE05NpHicdYrxyly7Kb3t8+576n96PmKCVg/j9/48L8p8td0PDzNhVL7/X8Bw5jpkD99QQFiP8pWToA48Frs5wKgARNAiJCuRlbtR/lNADVEunoxtR/lNwHUEOnqxdR+lN8EUEOkqxdT+1F+E0ANka5eTO1H+U0ANUS6ejG1H+U3AdQQ6erF1H6U3wRQQ6SrF1P7UX4TQA2Rrl5M7Uf5TQA1RLp6MbUf5TcB1BDp6sXUfpTfBFBDpKsXU/tRfhNADZGuXkztR/lNADVEunoxtR/lNwHUEOnqxdR+lN8EUEOkqxdT+1F+E0ANka5ebDXsTynSA5170/mdI/IpJuD6WlvECx2UI/+kc9ouek1ugd+9gN10PHzQ2XN6cQElh7fwWxfQwgo1M5iAmu23cLYJaGGFmhlMQM32WzjbBLSwQs0M3RNwAQRc6VBR5skLAAAAAElFTkSuQmCC);\n}\n.v-btn-paused[data-v-610941d4] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC7ElEQVR4Xu2az5XbIBDGgQMck+1gO4g7yKaCtGBfjHSzK4jUgX2SdNK6A6eDdQVxOtjtIHv0hckbPylPb5MsSOgPYPkqJDM/vm+AAUpu/EdvPH4yA5gVcOMEWlmgLMuPl8vlM6V0AQBnIcRptVr98pmhMYCiKL4RQpK3wQLAoxBi6ysIIwB5npeU0uU7I40q2HHO976B0ALIsmzJGCtNZA4Az5TSREp5MGnvQhstgKIofhBCFm06CwBPAJDGcfzU5r0p2poAgK4dw/xQgXju+o2h3xsUQNV5p/PDGACuHFzND6MBaEj5rJTaupIfpgBQszhWICbND1MCqEEkU64fXACAIDBRbqZYP7gCoFbD6PnBNQD1jIELqVUcx4PnBycBNGYM3F+kQ+4vXAdwzQ8AkERRtB9iVegDgD8LqcoWve4vvAFQjz5utBhj2/V6fe5DEd4BaIDopRDjLYDmRktKmXZVg+8AmhutrZTy2BZEEABs8kNQABqjj2U5I1uECgBZoCV2OkuEDIBwzu90q8igAZioIHQAqZTyr8Ocpi1mALokURRF57K47ttDP1dKfdHVHoNVAAD8jKJIe6ATKoBXpdTCpKASHAAA+C6EWOqmv9p+wQBAyQPARuf5t3knBAAodwz8sUtS9R1Ayjnfmcr9X4B8BXBQSiUmSU6nCt8AnKrAe6sL+gLgpQq8k8/fU4HrAF6ru0dWPvcVQG8+9w1A7z73BcBLdULcurCpy/SuA7j6XLdvtwnSZQAHzvnGZiFjC2aqWeBEKd30dbxlA2FsADifL9tuWGwC1L07FgD0OdbqtWVqXYf7fj44AADYCyGSKX0+VRLE+RzlPvg1FxtVaBWQ5/mRUvq1xZ8453MrBWRZds8Yw8sIHzQQrAoTLQD32lSrAPy3LMseGGO4QvsfBOvCRK9RtfiYEYAKwj3O3YSQB0rpJ6zBEULwOtvOdZ9bWaAFTC+bGivAy+gMOj0DMIAUdJNZAUEPr0FwvwEUy7JQSJuGMAAAAABJRU5ErkJggg==);\n}\n.v-btn-paused[data-v-610941d4]:hover {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADDUlEQVR4Xu2aTXLaQBCFXyNFXia5QW4QbhDnBLkC3kOVlLBwsYnYgKsCKVFWsrV9A3IDOEHIDZwbkHWE2iXZ/FQce0Z/aGaALTOD+tN7Tz0jCAf+oQOvH0cARwUcOIFMFnBd/1Vs/30Xg5sN0KIRvZgHgb/UmaE0gHa395kA/1GxjGtr5Xi6gpAC0PnUuwKh9eSdZiyZENiRM9ENhBBA52OvhQaupGTOfBsD/rfx8EZqvAKDhADa3d5PAppZrpXBM4D74ehilmVeHWOFADrdHue+sDQf4n4QXNzmXqPiidUCSC5e8XyoHsD6DiqaD/sD8ACCgQUQe6rkw94BbAXBU3vFXt35UBuADQjAr7N/qB1ACoKxjMFuHf2DGgBqzAelAGxtwTM74rN95IOSALa9DwdWdNKvcn+hOICHRgrww/FgUkVTqD6AnUaKic/K7h/0AbAJSp7FRN73L4NFGYrQDsCm6JIOYvQFsLPRCkeDfl416A1gNx8ALxwPp1lBmAGgQD4YBWB3fyFrCyMB3INg73I0DESWMBgAYEXOa1EXaTQAGRUYDYCBfjgaPH6Zs+OLIwBRSBQ6FhctXvH3jPi9aO9grAKY+Vc4Hgpf6BgJgMF/7IibMgcqJgL4YUVOS/T4W7vPGACJ5EHsijz/b+xoDyCRO8XkXn4dXOfJVK0BJM95O3ICWbn/D5CWAJj5xl6xLxNyIlVoBoDnDPaz+vw5CFoAYMZvYvh5fa4tgCTgAEr+e1TI51oCKNPnmgEo3+daAEh8DrCb52BTlPRKA1j7XLRvL1KksgDufX7iFmlkioKp6THI8xWRW9brrSIQ9gog9TnFrTIbmSLFJ3P3AiDdsAC+zDF10YKyzq8cADMm9srx6/R5TSHIcyviVhkblqx3Nct4GQUkLxw/yC6qos8LKcB1z99ENi0I9PK5hYoeTMgCLnucUAHJD7a756cATZ+CUMbBRNmFya4nBSBZLFWC1XABPiWit+kZHGhmr+JAdZ8XsoAsSV3HSStA1wJF130EICJk+vdHBZh+h0X13QG5389QxD7b+gAAAABJRU5ErkJggg==);\n}\n.v-btn-volume[data-v-610941d4] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABACAYAAACjgtGkAAAEmklEQVR4Xu2bzVXbQBDHteI9cQxUEFJBoIJABaGD2BdWOhEqCKkg5CQNFycVkFQQpwJIBZAKYo74sJs3fis/fcysZEmWLNn7Xi5BH7s/zfxndmYtnN1IERA7HmkCOyAZi+gcyGQyOZjP55da65EQ4sBxnKnneePxeDzrwno7BXJ7e3uslLoTQhxlFv9dSjnaKiBhGI5c151wi1ZKvQmC4KltKJ1YSBRFEyGE1QKUUmdBEEwHDcToxS/HcY6LFqqUGgdB8K3ouqb/3pqFoF5orREGCmeZ8VlKeV3mwiavaQWI0YsvK8DANQ4TCAAgiI8VvuKwgKBevLy8YEg9rQBjWBZiyS9WYTMMC6moFxSo/gOpoReNAzEhHhO/c8dxZkqpqzJhvJEo04BeNA4EAO4MjOWzy+Q2LJAwDI9c1710HAdFsTCRWkUcSl5by2UAQFPvKYJCAmnY9EuuP3dZXSC4W35FvHwmhDi7uLh4oCaWAwIA9x1ZRHZ+dYFg7oM5UG5orZ/29/dPqBJDCkgURTdCCHSTTRgsEAD4hPqgtZ65rnvFfW0AwL3QBwbKV9/3cwnjEojRjMdNIGHmQAKhPpoQ4oSDEkXRgxDiLaMnuR31EsiGWQebqTJiyeqCCb9YV8npidZ66vv+WRLWEsgGaUc8P9JCuOhh0wVbMSpbd0kCIcNUhy5U2mUSc2RLjwCAVvKaWE/qnt4BwQUV6AJZegzD8NR1XazH5IbneYdxxOklEKMLmEfkvjilCzEBDmQyWeslEFyg7YtzBWoucGitf/q+j3sep7dAcPIAgEXod1kf4NJzU8bExDM7ZlLKw94D4aJH8otnVw4AZEof60ivLcRoyT9KKKWU3D6Ns6pFktZrIDa32QHJmMmqwhrrTu8tJIqiH0KI94Swkp0/AMBeD24OU2MwQLhIw7kMF3rjFL73FsLtwbZSQ7iShdb6j+/7ZNmTs6hBhF1LHkIWf0xUojaxz1LKRc+51y4TRdEjcdjG4QpGAIDpOVbjU2MQqbulxvFXSpk9kbQAYCkpXkkpb3prIbajFbY2A2dRyZyldy5jmmL3lKvYxLTsvicJhOtjUFuFNv6PKyHmOnLxZLhjWDaIWYtKFpnJjK+NlTPvWKmmanMVLjulLCrZhrCeCuwADAeEsmS2llqgN3wbAhdsq1VuChBCC1gYpjyAvabcuTauZpKqGRiaWC+geqJtM2E7d6Z8iE14rHQtwiU1LK2VZ8/zjgpbmfjQDYJSq7dra7zZzsCSVSVjatj3xH9dWUstII0eh0ianzFP9EHrGRGt9TnXQ63oa40DKTobkspUK056eZuxKvRnstte4fm1gCRdBsOr1vqmtSNVycVyMb9tIPg+jEh7e3sP3MkAak6NnDHLPtiERrSWOvpTy0IqfIDFLWsB0lC0GhYQhGL2ENOKYjs8IDGU+XxeRWyHCST25QpiO2wgseq7rltWbIcPZEWxXZb1qkaMKvetLcrYJlNGbLfiN3dJSEWZ7Vb9KrNEZvtbSln1h0dVPGV5TycuQ2S2p0II3Flj+wCPXY+28pfdtT7lmm7eCAtZ09oqPfY/7gRUbmZDb1IAAAAASUVORK5CYII=);\n}\n.v-btn-volume[data-v-610941d4]:hover {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABACAYAAACjgtGkAAAE0ElEQVR4Xu2bXXLTQAzHpSRDHyknoJwAOAHpCegNCK+MM3WJman9QnlJmCGhZpLhtXCCwgkaTtBygoYTEB7bSSLGzkcdR9rYXqepnfrZa3t/q/1LK8kI99ccAbznMU/gHkjIItYOxDSPtgel630kqgDgNgF1S8Ot16571F+H9a4VyJt3zrPiiE4BcSc4eSL63mk1KhsFpPrWqUABTqRJFwejJ677sXfbUNZiIdWacwIISgsgGO12mh+7uQYy0YszBHi2dKIjeN3+XP+29L6Ub7g1CxnrBZwBwnaUORDAh06zfhTl3jTvuRUgvl4gHEeF4U0wt0Cqln0MgGbcVcwdkLFeXJ0iYDkujNxZiBRfxAGTGwtJohccqFwASaoXqwDib9ni1Qki7gFBHwgOorjxVLyMrl6sAohRs099GMErQmwjAjHNw51hCfcJsBwpkIojEBHu1d0yVcsh9jVLoLBA0jT9CHNnb9EFYlh2HwEfLjycoD8swO7XT/UL7sULQAzLOV+HRYQ/ThdI1bJNADzmaVOvONx6zqUY5oAYNcdFhP2kq5rmOBUQw3LeA8AeAPVHiAfSahs1+xsivmI1iuBLp1VfCBhnQMaaUbhMc1I6z5KAcIs2RHiugHKBiE954V48Uc+A3CXrUEWqrFgqdGHiAXucnnjZuU6zsRuEdQPkjmjH9OMkCxG9B8m6oEpGhfMuMyDii3TsXmNsnC0zg6hIPRo1p4cIjxfEOzQmc0C8CRk1W9QFKfVoWIdlhMIZt0bFwYNHU4+TSSDjsPz6gl1xRhemEESQgWAtk0B8K1GuOJ+gVjiOn+1m3Q/zMwvE+/iqZXcB8MXCNhDCcz8tQXDORa/tVv1R9oHIpYzZiocnL4X0Ux3JtIV4WjIsXf/lhLLdrEvnNNaqpu4300BU2+YeSMhMRPcrndcmupMDC3F+AMDLxdMyX/kzLOcIAbzD4fyVHyC8p5G2jOR6c6MhUv5mIzVESlkQ0e9Oq8HWj6XYJRduVzrFkpD8GXulxVwrAf3rNBt+zTnTolqt2ZfhZhtvUlLCyKjZe4h4ysQt2Q/dFdbxp9Oqz3UkBQ53QkqRDtrNhptZC1G2VijKDJJFBWOWzG0ZP1wvXp1zW0UpphHPPYEUolDH0Mh66QyVM2ZMRW7yIqkNSwURQhYVtBA24tOZlM7Y2DlVxVaRolPOom6ALOkK1JlckrGihTAVOVUbp0pvOIsKFarkXGWSSemMES0ktHAqGOOtcn0ptHKxOZM5IB7NAlGXrYnqzC7BWHXl7rAMUCgjUH/qLrlXSGG9F4iVBls7S0uZ3kPvChTd2q6q8KbqgWWzSpN+UhOAzHVZiy6QVNshgubnZbeBcBsQ1c22RF5YzNZQE+wY7bZMFohOw0zcSUxamFyp2h73eboWEtwynntFQvfWWqrmLUrISMUkogvEP9m+dSrDIlxInQHcJ6XSYxZ+sPchVCBXR3/SABJzDfzbVwIkDW+VOyAelImudJOIbS6BBKDEFtvcApklZ6T0v7DRcw9kqvpRxXYjgMQT25u0XhJvkXTMyryM6oOiiO1G/HMXhLQsst2ovzKXR7b0q91sJPrxKOlWmY5by5YJf/SkPcokoh1E7BUHDyob+We37mquYvydsJBVTCzpM/8D6LpZbscd1k0AAAAASUVORK5CYII=);\n}\n.v-btn-silent[data-v-610941d4] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABACAYAAACjgtGkAAADxElEQVR4Xu3by3HbMBAAUKwO0DFKB04FcQexK4g7iHUiebJdQZIKYp8I+CKnAisVRB1EqcAqQT5KB25mPaBCcfhZQByTgKUZnwxRwNNi8RWI42tPAI4e+wJHkFJE9A4ym80m2+32SghxgYgTAJhHUXTTV+T2CnJ/f3+aZdkjAJwUARDxLo7j6z5QegNJ0/RyNBrNahq9llJ+mE6n69dG6QVEKTUDgMumxmZZdp4kySJoEJMvfgshTtsaGjwI5QtEJIxJGwb9P2gQky9+cDGCBtFaE4T1iBFchFC+2Gw2NKSecbpIuUxQIHXzCxuYYEBc8kUVVBAgrvkiOBAzv6BZ54VNt/BqYpam6cloNLpCxFPXxHgIzqC6TJeh74oyGBCt9WOXoe81iFLqFgBob6L3V1WEpGl6BgBfTeVW4/H45pAVsdaankX7MGsAuIuiaL5b7Zqc8dS7hKlAGcSshf6U6reUUp7bojQsMm92IEOKjqq1jFJqDgCfK74wK5SWFfdyB6K1Jv3WZflrRVA5QrTWtDfyqebzWSiM7YfnIgi+VmM5n1MBQgtEWijWvRpRGBj03J/egFBtlVJLAPhoi8LBQMS/4/H4zCsQs4Je2KDYYFBy9gqEIsMGhcpvt9vGLcs8MvKRyjsQGxTTtWoHijIGlfcShCpu5k1LIcQ7TpIul6nC8BqEKm8mazQcW6HUYXgP4oLShBEEiA1KG0ZoIJwzn9YZrbdJNU+StgdgQohGFK9BHDByx1oUb0EOwGhE8RKEg4GIv8xecO2QjIiLOI7Pi3MU70A4GLRqjaLokjNPQcSHOI6nOYpXIDYYpaTbOHkrongD4oJhifJyjcsbEKXUU/kuWml98tJN6tY1nO5Dm1JFELrPZbUmcFlUcd9T3DFjbIA3YlhEyvfiJnPdJi63DZ2Wq9hCrNviZGEwUf7vurfcCuy0sZyHlUFqTgWsMFpQnqWUJ3u3EBl7lpy2dFKm6qBKa/1NCPFyASfLsockSR5cP4y6IQDQwdyEDqoQ8TpJktUeCCfxuFbA9n2DOdsdCspgQOibNDvVdA5Cf72MPIMCKYY3HTBzwt30x6YzE85jdmUGC8JthYmqWyHEF+57msp5D5I3zowE+ZUFZ5tgQEjAzGkoWpzzT1AghHLoaBUcSD5abTabtrPYym4VJEhhCLdOtsGCuCbb4EFsk+2bALFJtm8GhJts3xQIJ9lKKd/bXrd0ngUW3tjLrzKLFddaV12mc9r4CQKkkFcIhn7QvJJSXvcRHVSX3iOki2+1y2ccQUqa/wCiGWvOOsO2SAAAAABJRU5ErkJggg==);\n}\n.v-btn-silent[data-v-610941d4]:hover {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABACAYAAACjgtGkAAAD7klEQVR4Xu2bT1LbMBTGv5d4wrLpDdITlBs0nKDcoHTbiQfTuDPEm9INYQHFHbKHngB6AnID0hPAEcISJsnryPlTx3FsyclgS8Rby4708/c+PT0phM01R4A2POYJbIBEFJE7EMc5qg6s530Au8RcBeHm4rR9kJdycwXy5Zu3XR7xNYhqYQDM+NU5O3bygJIbEPurt4cSLmMHzeiXh5V3vn/Uf2kouQCxm94lCHtJg2WMdjqnJ12jgUz84paA7bSBGg9k7Be4BaGaBkPcNxpI4BeEc1kYRgOx3dY5QMozhnEKGfvF0zWB6jIhEm1jFJBl+YUKGGOAZPGLOFBGAMnqF8YBCfyi/HRJRLsqYaFVYuY4h7WhRfsMbGc1xlXgFCpk1in9rFAKA6TRbF2vU/paA2k0PZ8IojaR+xWnkIZ7WAfou+gcMT2Uh5WDVVbEDdcT79oFuI+g5NC+ma12x55Rus+dxKQDUSBBbsO4m6ubAD1rUNlRhbJ8kckHMyBFUkfcWsZ2vRsAHxczWjUoSStuBnr/gbjencyy/KUUFFWI7ba6AH2Iz1nkoKSVHxj8OANiux6/1GBlficGiAPQ+bJnxddNCp80GIEqmX9rA0R0uNFs9YjovSoUSRh/reFWXSsgk4y4qwJFBYYwZ62ACGWoQBHtB9ZzYsmSmQNlTGcq7YCoQAnylYT6bRTGpP04IotuqlHfEHnTwKIegd7ImPTCdB1RxvS+lgqZdl4kayXmriqUOGUYAUQMQhVKEgytQyYcArJQ0mAYBURmzycteTMCiPoGWHJGq72pyihDZUGoLRBVZchC0RKIJIw/DK4nTckM7nZO2zthWNoBkYEhVq2ds/ae1OzDuLo4O/6sZR6iAkMpeQtB0UYhWWCoQJke49IGiN1s3UfPooVjfxomy9Y1MuEjilKhEmKrr7omyLKokn0mXDFLK4CnwZBVCgM/wgqJLeLKDmDd7RZLiPElTlkYclBCVffEU4HrHq3E+6JA4nYFVGEkQREFZmuwVZs7hZhWs5QYx9qaxG9UeUcEHh/AGdHVxc/jq6w/OAlDH+AqQP3yYOT4/snDHBAZ48naAdXnCrO3WxQohQEivuSkUu0A7OQ18xQKSFje4w1miYvJT9oekHjDXJPCApEdyGR7QED5JPtMUjvtgUwH13DFTIDgyMIqlzFABASR03CJ/VX8xyggAsqqs5VxQGazVfkpcS92WVgZCSQERdlsjQWS1WyNB6Jqtq8CiIrZvhogsmb7qoDImG15UHmretxylURw+mwu/8oMd9x2WwuH6bIWfowAMvOVETtEqDHjwRpuOXmoQ/Qld4Ws46uu8x0bIBGa/wCgzz6+MCD5IQAAAABJRU5ErkJggg==);\n}\n.v-screen[data-v-610941d4] {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADAElEQVR4Xu2ay3HbMBCGsdSI0i1OBXEHsSqwXUGcDqKLQJ6SDuJ0kJxI6MKU4FQQpwLLHTgVRLrpMSIyOyPNKBLxICGJYLi8igLwf/ixALELrOUPtFw/IwDkgJYToCXQcgPog2CWZRer1eqtAdJsNBpNzglyPB5fMcZe6frsdrvPw+FwahpX4RJIkuQSADIAuDGJx3fqACClfDRBwHeklMM4jl9UOg4A4KwvFosnALj0Ufx2TOgCSwgvvV5voHLDAYA0Tb8CwEefxVeA8C2Kok9Fmg4ACCGeGGO4xlTPrA7bqwZj6YQJ53xgC0A2RXwZJ3DOC+NdkQNUALya+f1JMjnBFYDX4m2c4AKgEeJNEKoCsBK/sd9nxhieGy5Mhw/H3/Fw8wgAX1Tnj6LlUAlAnue3cRzjgUP5bDrDnePsDwAMVBCSJPkQBEG2HVRpAHme4wnqu0lVmqYPAPDO9N4pfpdS/oii6E7V9i6EUgBsxWPHQog/Z7C9SuOUc/5aB3cLwRoA/sFm5redCiF054ZTTPw/baqE7b6k0+R8H9AEALpZIACuHiUHNCAG0BLQEKAYQDHAkQAFQQqC/p8EaRegXUBNgLZBx00AP4e9/xqkGEAxgGKAkgAFQQqCjgT+u12g9ZeiOKMlr8W9PgeUvhbfWtoWgs9LoHJiZCcsvOecP+jChBACc3XagiXHMKP7+4xzXpiLdE6NbXqdAsCtrgjKx9RYUb7SOjNUYGkthBqTo4WZ6814fu6n61wAoBmMEPI8v9+U1Z16OcywOiwIgvt9Z6rEowBXAEYIJ1znVk3rxB8LgLcQTOJLAUjTdAIAuvJYY2C0mrIjvWQjXkr5HEVRYelf1UJJLyDYiEfOUkr7QkkslV0ul1j8/MYwSbVCsBXPGPsdhuGVdaksisZi6SAIsDzm2kcIJcT/CsPwTlc1rr0PQDfM53Nd2SzrdDrTOqrF1+u1thqt3+9PKpfLHyk+NaIZ5xuhRqg85aUoAWg4AVoCDZ9A5+GTA5wRNryB1jvgL+d2Il/7xWOVAAAAAElFTkSuQmCC);\n}\n.v-screen[data-v-610941d4]:hover {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADRklEQVR4Xu2aX27TQBDGZ2JDeKOcgN6A5ASkJ6DcoH1FiYiaIFG/EF6cSiQoKBav7RHgBIQTNL1BewLcNwqxB63VSCXxrmfX+eMk68fEa+/3229n1zuDsOMX7rh+sACsA3acgJ0CO24AdRBsNjt70aO7FypIEeDt10/+eJUg37zzKg7QU9U7nb/lq8GgE2b1K3UKNJvv9ycuniNgTfUAArqNEWvrAFAiGiGgEgIBjdwJHQ8GZ9cyHXMAklF37i4Bcb+I4qd9Ei7gQACiaycqV2VumANQb3kDRHhbZPG6EIjgS9D3m2ma5gG0vUsEqMgArMv2sv5wnEAA46DnV1kAGm2PNkW8jhOGPT813s39KANQtJGfHaQsJ+QCUHTxHCcYA9gU8VkQjABwxSf2i+lDsm9A2MvafOT6nyAU63tcwo+y/UfadDAEEB8EvbORqsPJrozgMpcow8YRQlUGoXHiHUEJzqeP1gcQw/Hws3+R1bdG2/sGAK+y7lvS/9+HPf9Q9uyHEPQAMMWLFzda3q+l216+LofDvv9MBXcKgQ/gxDvijPz0pap9w5JG/b/HyoQ9vElAkGnKfR6wCQBUA2EB5LWpdYDi2yEvXE57TgywU0BBwMYAjs2U66ydAvLzg7xwOe1tDJAcdHDgiXtsDOCSkn5w2BhgY4D0EDWvuzjtbRC0QTD9uJvjHrsK2GXQ7gPsRsjuBGejpeoAMS2ybsKJkNahaCJI51i84Fth/WPxqSAmhCI7wDwxcu91Inod9Lsi8yO96u3TMKtWh7sp0b1P5C6DXjc1F5k/NSZ6QxBGJThQFUEVMTWWlq/kZ4Zm53QGhHUlR2WZ66Q/MfyYTdeZA2A44R5Ch4Bqy54OQjgCjiKEzqwzZeKFhHwAGBB05++i71eJXwyAAkPIEq8FoN46HSOivDyWERgXPbqq53HEE9FV0O+mlv4ZFUpyVodVQOCIT4yrUygpSmUnzp8xIjxXilizEzTE37jR4wq7VFaIFsXSkYsXAPiyiBC44gHopzMpH6qqxpVfg4kb3N/SslkBJ8ZSuJ5q8VhZjeZOnoyNy+VXMX+L8o7c5wFFEWLaDwvAlNy2tLMO2JaRNNVhHWBKblva7bwD/gHC/TJfpvyS+gAAAABJRU5ErkJggg==);\n}\n.v-btn-voice:hover + .v-voice-bar[data-v-610941d4] {\n  display: block;\n}\n.v-voice-bar[data-v-610941d4] {\n  display: none;\n  background-color: #fff;\n  position: absolute;\n  width: 4px;\n  height: 70px;\n  bottom: 40px;\n  right: 40px;\n  border-radius: 5px 5px 0 0;\n  border-top: 1px solid #e5e9ef;\n  border-left: 1px solid #e5e9ef;\n  border-right: 1px solid #e5e9ef;\n  padding: 15px 17px;\n  box-sizing: content-box;\n}\n.v-voice-bar[data-v-610941d4]:hover {\n    display: block;\n}\n.v-voice-bar .v-range .v-current[data-v-610941d4] {\n    display: block;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    background-color: #00a1d6;\n    width: 100%;\n}\n.v-voice-bar .v-range .v-dot[data-v-610941d4] {\n    left: -5px;\n    top: -7px;\n}\n.v-tool-time[data-v-610941d4] {\n  width: 40px;\n  height: 100%;\n  line-height: 40px;\n  text-align: center;\n  color: #999999;\n}\n.v-progress-bar[data-v-610941d4] {\n  box-sizing: border-box;\n  height: 100%;\n  padding: 17px 10px;\n  flex: 1;\n}\n.v-progress-bar .v-range .v-loading[data-v-610941d4] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    display: block;\n    height: 100%;\n    background-color: #8adced;\n}\n.v-progress-bar .v-range .v-current[data-v-610941d4] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    display: block;\n    height: 100%;\n    background-color: #00a1d6;\n}\n.v-progress-bar .v-range .v-current .v-dot[data-v-610941d4] {\n      top: -4px;\n      right: -7px;\n}\n.v-load[data-v-610941d4] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: #000;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: url(data:image/gif;base64,R0lGODlhZADCAPfQADIqKVVTUyMYFd/f3+rr68bHyFNRUL6/wH9+f9PT1Ofn5+zs7Ojo6UM/P4uLjP7+/kVCQd7e3/n5+efo6Pf390A8O/v7+/39/UdEQ8zMzfr6+nJxcuXm5vPz9CQZFsrLy+/v8E9MTOTk5Ly9vfHx8s7Pzzk0M9bW16enqJWVlrm6ujQuLN/g4Pj4+Pz8/JOUlG1tbTs2NeHh4qSlpba2t0xJSPPz80ZDQkRBQNjY2WdmZsbGx9nZ2u7v746Oj0tIR/Dw8E5LS6eoqZmZmVBNTUI+Pj05OD46OX19fTYvLiMZFjMsKrKztL/AwNLS03h3d8jJyVJQT3Nyc+Tl5aCgoaurrOnq6qOkpMLCw7q6u5CQkOvr6+7u7t3e3sfIyD87OqKjo2FgX4B/gFdVVZ2dnnp6emJhYTApJ7u8vCohH3x8fK2trnFwcbCwsSYcGXt7e6amp15cXIaGhuLi4kE9PKysrWVkZJqamm1sbCsjIOzt7fLy8omJiTw3NmhnZ5OTk25ubi0kIsvMzJGRkePj5PX19ikgHdna2oWFhcnJyqqrqygeHKGhoqmqqtbX156en4eHh2RjY4yMjcnKy76+v9XV1vHx8Xd2dpucnMXFxu3t7i8nJa6vr5SVlZydncHCwjcxL7S1tfT09E1KSTgyMY+PkJ+foISEhNPU1NTV1eLj40pGRs3Nzmxra19eXc/P0FxaWnBvcLW1ti4mJJaWl4ODg2NiYq+wsIiIiIGAgSUbGFlXV4qKi9DQ0c3OzsPExHl5eXV0dGloaPX19fb29qGiolZUVFtZWWBfXmZlZXZ1dXh4eNDR0VpYWJeXmP///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MDg4OEU4N0U4NjFFNjExQjY3RUEwQzUxQzg3ODhGMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4M0ZDMEU1MTYzNTExMUU2QkM2Q0UwOTUzMEJEQUU2NSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4M0ZDMEU1MDYzNTExMUU2QkM2Q0UwOTUzMEJEQUU2NSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjcwODg4RTg3RTg2MUU2MTFCNjdFQTBDNTFDODc4OEYyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjcwODg4RTg3RTg2MUU2MTFCNjdFQTBDNTFDODc4OEYyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3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);\n}\n.v-loading-full[data-v-610941d4] {\n  z-index: 2147483649;\n}\n.v-waiting[data-v-610941d4] {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -30px;\n  margin-top: -30px;\n  width: 60px;\n  height: 60px;\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.v-waiting[data-v-610941d4]:after {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    content: '';\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEhElEQVR4Xu1bjVEUUQxOKlAqECoQKhAqUCoQKxArUCtQKxAqQCoQKhAqECoQK4jzzeQ577J5f3t3u3u3lxlGZ2733sv3ki/JS45p5sIz1592AOwsYAAERGSfiF4REf49JKLnuiz+/0BE75j5boCtdJZYmwuICJR7S0RvVPGcfk/MvLcVAIgIlP5UofSCvsy8tsPIAbuyRfsqrpuDC1xspAWoqX8houOCArdEdKM+D7+HwPRH8f2w16UsQETeE9HXjOLXRPQDf8z8NMYJl9bsBYCIgMW/K8F5a1yCB5g5nHRpH6N93gyAKv9Tw5ndOE78fEjFRQSu9xHupOG0ydKaAMgo/5eIzpgZ5j6oiMifKK8An5y0uFs1ABnl7+EKQ556QFj3BABiaQKhBYArx+eh/HEL4qs2DxFB+ETuEcsNM5/UrFUFgIicExFCXSyjKx9ZggfCN2bGvrNSBEDj/K+pKh+BANN/afYJPkDukZQaAMD4cZIDwjscw+dziigfIOw+i557YOaD3gCIyJnG+/g7Tsdg+5Ip43MNiTiwWD4zM2oTV7IWICK/TVFzy8yllLdmr2t7xiFF5AUHKaJOApA4fXzRpLO7hCskrSAHAIgPNX2QS2aGS0xeRAQmj+wwSJILXAASzD/50w/aJqzA5a4UAKjwUOkFuWZm3OxsjDhc4FpwCgBr/qNdWPRFXERwYMheg7jXbh0AEvn13pjp7hIgiHn3yF7AeABY5O6ZOSbDvvsZ/D0RQXX6Olr4AzMvXOB4AFgGrcqpB9euYkEnGnTCoQeALSw6qFWsPYlHHB7oJHIeACge0MQIUiwoJqGtswknNZ4dAOCuuJLtJESeBdgQuLEWAKMQkYVIYBswHgC2rp4dANvEAdYFHpkZDdr/siNBS541ycNUWd/RxSZ1VVFg9omQRe2OmY825dTjfYqI5bOqVBgkgauwWOZTDGnstKFwG8rhTgSArrsLEc+3t+RKzPYM3YQudylq3WCTL0Vd80+6gPKA1xSZ/MWo3miBxMMoHtRpvxZXENADeBG5CUZdTqccEp3LULTy9psbIxkrmE9rTEGwyQRaTbhcnFSHKGH6Sd8PVlzTHbYVFd5tmsJYt8tkpleKpXwRALUCb0BiMimyiGBizbbtsl3hagsIDzpV4uiWoCePyRWrfHUXu8oC1AoQVsAHdgoD7gBiHJQTCkNb1XNL1QAUQAgzeoOMyeltL9pecazHFpvnlpoAKICAjwEASs61WEPG5Hspn80Ec8ytG0EDJW47hVdgDfgMHaWVAKHroVsNMranjnUxiI1ZxaYp0d4ARMToRYcYO1jEBTNjhLZZRAQA44ImN5hRxfapxZtdwH6RVo44cUuO9lEQqB2Xh89Cwru4jMEf5pBKs0h4F3PJ2TG4EupLAxBZA04J94lx7VBav8/nyO0xiZ4b06/+3pUBMAAQj/rbBLhUs6+vzQVSX6yuAY6AKfe1CigNE4fSS5n64ADEC+rP5gCE/dlc6EKDxYMEnsDA80qiSM4fVu4C1c43kQd3AEzkIEbbxuwt4B+9hiBf8rBjrAAAAABJRU5ErkJggg==);\n    background-repeat: no-repeat;\n    background-size: 40px;\n    background-position: center;\n    -webkit-animation: gogogo 1s infinite linear;\n}\n@-webkit-keyframes gogogo {\n0% {\n    -webkit-transform: rotate(0deg);\n}\n50% {\n    -webkit-transform: rotate(180deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n}\n}\n", ""]);
	
	// exports


/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-video.js.map