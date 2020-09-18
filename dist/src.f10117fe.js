// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/reg.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPasswordReg = exports.IP = exports.Chinese = exports.Email = exports.Phone = exports.IDCard = void 0; // 身份证

exports.IDCard = new RegExp('^[1-9]\\d{5}(18|19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$'); // 手机号码

exports.Phone = new RegExp('^1\\d{10}$'); // 邮箱

exports.Email = new RegExp("^([A-Za-z0-9_\\-.\u4E00-\u9FA5])+@([A-Za-z0-9_\\-.])+\\.([A-Za-z]{2,8})$"); // 汉字

exports.Chinese = new RegExp("^[\u4E00-\u9FA5]+$"); // IP

exports.IP = new RegExp('((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))');
var defaultCreatePasswordRegProps = {
  useENLetter: true,
  useCapitalLetters: false,
  useNumber: true,
  useSpecialCharacters: false,
  specialCharacters: "#?!.,@$%^&*-",
  minLength: 6,
  maxLength: 18
};
/**
 * 生校验正则表达式
 * @param props
 */

function createPasswordReg() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultCreatePasswordRegProps;
  var newProps = Object.assign(defaultCreatePasswordRegProps, props);
  var canUseLetter = "[a-zA-Z\\d".concat(newProps.specialCharacters, "]");
  var mustUseENLetter = "(?=.*?[A-Za-z])";
  var mustUseCapitalLetters = "(?=.*?[A-Z])";
  var mustUseNumber = "(?=.*?[0-9])";
  var mustUseSpecialCharacters = "(?=.*?[".concat(newProps.specialCharacters, "])");
  var str = "";

  if (newProps.useENLetter) {
    str = "".concat(str).concat(mustUseENLetter);
  }

  if (newProps.useCapitalLetters) {
    str = "".concat(str).concat(mustUseCapitalLetters);
  }

  if (newProps.useNumber) {
    str = "".concat(str).concat(mustUseNumber);
  }

  if (newProps.useSpecialCharacters) {
    str = "".concat(str).concat(mustUseSpecialCharacters);
  }

  return new RegExp("^".concat(str).concat(canUseLetter, "{").concat(newProps.minLength, ",").concat(newProps.maxLength, "}$"));
}

exports.createPasswordReg = createPasswordReg;
exports.default = {
  IDCard: exports.IDCard,
  Phone: exports.Phone,
  Email: exports.Email,
  Chinese: exports.Chinese,
  IP: exports.IP,
  createPasswordReg: createPasswordReg
};
},{}],"src/fun.ts":[function(require,module,exports) {
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTree = exports.hiddenStr = exports.formatPhone = exports.formatIDCard = void 0;
/**
 * 隐藏身份证号码
 * @param IDCard
 * @param start 开始隐藏位置
 * @param len 隐藏长度
 */

function formatIDCard(IDCard) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  var len = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
  return hiddenStr(IDCard, 6, 8);
}

exports.formatIDCard = formatIDCard;
/**
 * 隐藏手机号码
 * @param phone
 */

function formatPhone(phone) {
  return hiddenStr(phone, 3, 4);
}

exports.formatPhone = formatPhone;
/**
 * 隐藏并替换字符串
 * @param str
 * @param start
 * @param len
 * @param replaceStrChar
 */

function hiddenStr(str, start, len) {
  var replaceStrChar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "*";
  var replaceStr = new Array(len).fill(replaceStrChar).join("");
  var reg = new RegExp("^(.{".concat(start, "})(.{").concat(len, "})(.{").concat(str.length - start - len, "})$"));
  return str.replace(reg, "$1".concat(replaceStr, "$3"));
}

exports.hiddenStr = hiddenStr;
/**
 * 格式化树
 * @param list 树
 * @param formatFun 格式化没一项的函数
 * @param childrenName 子级 的key
 * @param level 当前层级
 */

function formatTree() {
  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var formatFun = arguments.length > 1 ? arguments[1] : undefined;
  var childrenName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return list.map(function (z, i) {
    var hasChildren = !!(z[childrenName] || []).length;
    return _objectSpread(_objectSpread({}, formatFun(z, i)), {}, {
      level: level,
      hasChildren: hasChildren,
      children: hasChildren ? formatTree(z[childrenName] || [], formatFun, childrenName, level + 1) : null
    });
  });
}

exports.formatTree = formatTree;
exports.default = {
  formatIDCard: formatIDCard,
  formatPhone: formatPhone
};
},{}],"src/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var reg_1 = __importDefault(require("./reg"));

var fun_1 = __importDefault(require("./fun"));

console.log(fun_1.default.formatPhone("18382346121"), fun_1.default.formatIDCard("500239199105105956"));
exports.default = {
  regExpUtils: reg_1.default,
  funUtils: fun_1.default
};
},{"./reg":"src/reg.ts","./fun":"src/fun.ts"}],"../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64982" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map