// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hvP7x":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "508125245670a418";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ln1GS":[function(require,module,exports) {
var global = arguments[3];
!function() {
    let e, t, r;
    var i, n, s, a, o, l, c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}, u = {}, h = u = {};
    function d() {
        throw Error("setTimeout has not been defined");
    }
    function p() {
        throw Error("clearTimeout has not been defined");
    }
    function f(e) {
        if (s === setTimeout) return setTimeout(e, 0);
        if ((s === d || !s) && setTimeout) return s = setTimeout, setTimeout(e, 0);
        try {
            return s(e, 0);
        } catch (t) {
            try {
                return s.call(null, e, 0);
            } catch (t) {
                return s.call(this, e, 0);
            }
        }
    }
    !function() {
        try {
            s = "function" == typeof setTimeout ? setTimeout : d;
        } catch (e) {
            s = d;
        }
        try {
            a = "function" == typeof clearTimeout ? clearTimeout : p;
        } catch (e) {
            a = p;
        }
    }();
    var m = [], g = !1, v = -1;
    function y() {
        g && o && (g = !1, o.length ? m = o.concat(m) : v = -1, m.length && _());
    }
    function _() {
        if (!g) {
            var e = f(y);
            g = !0;
            for(var t = m.length; t;){
                for(o = m, m = []; ++v < t;)o && o[v].run();
                v = -1, t = m.length;
            }
            o = null, g = !1, function(e) {
                if (a === clearTimeout) return clearTimeout(e);
                if ((a === p || !a) && clearTimeout) return a = clearTimeout, clearTimeout(e);
                try {
                    a(e);
                } catch (t) {
                    try {
                        return a.call(null, e);
                    } catch (t) {
                        return a.call(this, e);
                    }
                }
            }(e);
        }
    }
    function I(e, t) {
        this.fun = e, this.array = t;
    }
    function w() {}
    h.nextTick = function(e) {
        var t = Array(arguments.length - 1);
        if (arguments.length > 1) for(var r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
        m.push(new I(e, t)), 1 !== m.length || g || f(_);
    }, I.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = w, h.addListener = w, h.once = w, h.off = w, h.removeListener = w, h.removeAllListeners = w, h.emit = w, h.prependListener = w, h.prependOnceListener = w, h.listeners = function(e) {
        return [];
    }, h.binding = function(e) {
        throw Error("process.binding is not supported");
    }, h.cwd = function() {
        return "/";
    }, h.chdir = function(e) {
        throw Error("process.chdir is not supported");
    }, h.umask = function() {
        return 0;
    }; /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    let b = function(e) {
        let t = [], r = 0;
        for(let i = 0; i < e.length; i++){
            let n = e.charCodeAt(i);
            n < 128 ? t[r++] = n : (n < 2048 ? t[r++] = n >> 6 | 192 : ((64512 & n) == 55296 && i + 1 < e.length && (64512 & e.charCodeAt(i + 1)) == 56320 ? (n = 65536 + ((1023 & n) << 10) + (1023 & e.charCodeAt(++i)), t[r++] = n >> 18 | 240, t[r++] = n >> 12 & 63 | 128) : t[r++] = n >> 12 | 224, t[r++] = n >> 6 & 63 | 128), t[r++] = 63 & n | 128);
        }
        return t;
    }, E = function(e) {
        let t = [], r = 0, i = 0;
        for(; r < e.length;){
            let n = e[r++];
            if (n < 128) t[i++] = String.fromCharCode(n);
            else if (n > 191 && n < 224) {
                let s = e[r++];
                t[i++] = String.fromCharCode((31 & n) << 6 | 63 & s);
            } else if (n > 239 && n < 365) {
                let s = ((7 & n) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536;
                t[i++] = String.fromCharCode(55296 + (s >> 10)), t[i++] = String.fromCharCode(56320 + (1023 & s));
            } else {
                let s = e[r++], a = e[r++];
                t[i++] = String.fromCharCode((15 & n) << 12 | (63 & s) << 6 | 63 & a);
            }
        }
        return t.join("");
    }, T = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS () {
            return this.ENCODED_VALS_BASE + "+/=";
        },
        get ENCODED_VALS_WEBSAFE () {
            return this.ENCODED_VALS_BASE + "-_.";
        },
        HAS_NATIVE_SUPPORT: "function" == typeof atob,
        encodeByteArray (e, t) {
            if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            let r = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, i = [];
            for(let t = 0; t < e.length; t += 3){
                let n = e[t], s = t + 1 < e.length, a = s ? e[t + 1] : 0, o = t + 2 < e.length, l = o ? e[t + 2] : 0, c = n >> 2, u = (3 & n) << 4 | a >> 4, h = (15 & a) << 2 | l >> 6, d = 63 & l;
                o || (d = 64, s || (h = 64)), i.push(r[c], r[u], r[h], r[d]);
            }
            return i.join("");
        },
        encodeString (e, t) {
            return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(b(e), t);
        },
        decodeString (e, t) {
            return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : E(this.decodeStringToByteArray(e, t));
        },
        decodeStringToByteArray (e, t) {
            this.init_();
            let r = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, i = [];
            for(let t = 0; t < e.length;){
                let n = r[e.charAt(t++)], s = t < e.length ? r[e.charAt(t)] : 0, a = ++t < e.length ? r[e.charAt(t)] : 64, o = ++t < e.length ? r[e.charAt(t)] : 64;
                if (++t, null == n || null == s || null == a || null == o) throw new S;
                let l = n << 2 | s >> 4;
                if (i.push(l), 64 !== a) {
                    let e = s << 4 & 240 | a >> 2;
                    if (i.push(e), 64 !== o) {
                        let e = a << 6 & 192 | o;
                        i.push(e);
                    }
                }
            }
            return i;
        },
        init_ () {
            if (!this.byteToCharMap_) {
                this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                for(let e = 0; e < this.ENCODED_VALS.length; e++)this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e);
            }
        }
    };
    class S extends Error {
        constructor(){
            super(...arguments), this.name = "DecodeBase64StringError";
        }
    }
    let k = function(e) {
        let t = b(e);
        return T.encodeByteArray(t, !0);
    }, C = function(e) {
        return k(e).replace(/\./g, "");
    }, O = function(e) {
        try {
            return T.decodeString(e, !0);
        } catch (e) {
            console.error("base64Decode failed: ", e);
        }
        return null;
    }, P = ()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (function() {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== c) return c;
            throw Error("Unable to locate global object.");
        })().__FIREBASE_DEFAULTS__, R = ()=>{
        if (void 0 === u || void 0 === u.env) return;
        let e = void 0;
        if (e) return JSON.parse(e);
    }, A = ()=>{
        let e;
        if ("undefined" == typeof document) return;
        try {
            e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
        } catch (e) {
            return;
        }
        let t = e && O(e[1]);
        return t && JSON.parse(t);
    }, N = ()=>{
        try {
            return P() || R() || A();
        } catch (e) {
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
            return;
        }
    }, D = (e)=>{
        var t, r;
        return null === (r = null === (t = N()) || void 0 === t ? void 0 : t.emulatorHosts) || void 0 === r ? void 0 : r[e];
    }, L = ()=>{
        var e;
        return null === (e = N()) || void 0 === e ? void 0 : e.config;
    }, M = (e)=>{
        var t;
        return null === (t = N()) || void 0 === t ? void 0 : t[`_${e}`];
    }; /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class U {
        constructor(){
            this.reject = ()=>{}, this.resolve = ()=>{}, this.promise = new Promise((e, t)=>{
                this.resolve = e, this.reject = t;
            });
        }
        wrapCallback(e) {
            return (t, r)=>{
                t ? this.reject(t) : this.resolve(r), "function" == typeof e && (this.promise.catch(()=>{}), 1 === e.length ? e(t) : e(t, r));
            };
        }
    } /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    function x() {
        return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "";
    }
    class F extends Error {
        constructor(e, t, r){
            super(t), this.code = e, this.customData = r, this.name = "FirebaseError", Object.setPrototypeOf(this, F.prototype), Error.captureStackTrace && Error.captureStackTrace(this, V.prototype.create);
        }
    }
    class V {
        constructor(e, t, r){
            this.service = e, this.serviceName = t, this.errors = r;
        }
        create(e, ...t) {
            let r = t[0] || {}, i = `${this.service}/${e}`, n = this.errors[e], s = n ? n.replace(j, (e, t)=>{
                let i = r[t];
                return null != i ? String(i) : `<${t}?>`;
            }) : "Error", a = `${this.serviceName}: ${s} (${i}).`;
            return new F(i, a, r);
        }
    }
    let j = /\{\$([^}]+)}/g;
    function H(e, t) {
        if (e === t) return !0;
        let r = Object.keys(e), i = Object.keys(t);
        for (let n of r){
            if (!i.includes(n)) return !1;
            let r = e[n], s = t[n];
            if (B(r) && B(s)) {
                if (!H(r, s)) return !1;
            } else if (r !== s) return !1;
        }
        for (let e of i)if (!r.includes(e)) return !1;
        return !0;
    }
    function B(e) {
        return null !== e && "object" == typeof e;
    } /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    function $(e) {
        let t = [];
        for (let [r, i] of Object.entries(e))Array.isArray(i) ? i.forEach((e)=>{
            t.push(encodeURIComponent(r) + "=" + encodeURIComponent(e));
        }) : t.push(encodeURIComponent(r) + "=" + encodeURIComponent(i));
        return t.length ? "&" + t.join("&") : "";
    }
    function z(e) {
        let t = {};
        return e.replace(/^\?/, "").split("&").forEach((e)=>{
            if (e) {
                let [r, i] = e.split("=");
                t[decodeURIComponent(r)] = decodeURIComponent(i);
            }
        }), t;
    }
    function W(e) {
        let t = e.indexOf("?");
        if (!t) return "";
        let r = e.indexOf("#", t);
        return e.substring(t, r > 0 ? r : void 0);
    }
    class q {
        constructor(e, t){
            this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(()=>{
                e(this);
            }).catch((e)=>{
                this.error(e);
            });
        }
        next(e) {
            this.forEachObserver((t)=>{
                t.next(e);
            });
        }
        error(e) {
            this.forEachObserver((t)=>{
                t.error(e);
            }), this.close(e);
        }
        complete() {
            this.forEachObserver((e)=>{
                e.complete();
            }), this.close();
        }
        subscribe(e, t, r) {
            let i;
            if (void 0 === e && void 0 === t && void 0 === r) throw Error("Missing Observer.");
            void 0 === (i = !function(e, t) {
                if ("object" != typeof e || null === e) return !1;
                for (let r of t)if (r in e && "function" == typeof e[r]) return !0;
                return !1;
            }(e, [
                "next",
                "error",
                "complete"
            ]) ? {
                next: e,
                error: t,
                complete: r
            } : e).next && (i.next = K), void 0 === i.error && (i.error = K), void 0 === i.complete && (i.complete = K);
            let n = this.unsubscribeOne.bind(this, this.observers.length);
            return this.finalized && this.task.then(()=>{
                try {
                    this.finalError ? i.error(this.finalError) : i.complete();
                } catch (e) {}
            }), this.observers.push(i), n;
        }
        unsubscribeOne(e) {
            void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this));
        }
        forEachObserver(e) {
            if (!this.finalized) for(let t = 0; t < this.observers.length; t++)this.sendOne(t, e);
        }
        sendOne(e, t) {
            this.task.then(()=>{
                if (void 0 !== this.observers && void 0 !== this.observers[e]) try {
                    t(this.observers[e]);
                } catch (e) {
                    "undefined" != typeof console && console.error && console.error(e);
                }
            });
        }
        close(e) {
            this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then(()=>{
                this.observers = void 0, this.onNoObservers = void 0;
            }));
        }
    }
    function K() {} /**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    function G(e) {
        return e && e._delegate ? e._delegate : e;
    }
    class J {
        constructor(e, t, r){
            this.name = e, this.instanceFactory = t, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
        }
        setInstantiationMode(e) {
            return this.instantiationMode = e, this;
        }
        setMultipleInstances(e) {
            return this.multipleInstances = e, this;
        }
        setServiceProps(e) {
            return this.serviceProps = e, this;
        }
        setInstanceCreatedCallback(e) {
            return this.onInstanceCreated = e, this;
        }
    } /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    let Y = "[DEFAULT]"; /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class X {
        constructor(e, t){
            this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map;
        }
        get(e) {
            let t = this.normalizeInstanceIdentifier(e);
            if (!this.instancesDeferred.has(t)) {
                let e = new U;
                if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                    let r = this.getOrInitializeService({
                        instanceIdentifier: t
                    });
                    r && e.resolve(r);
                } catch (e) {}
            }
            return this.instancesDeferred.get(t).promise;
        }
        getImmediate(e) {
            var t;
            let r = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier), i = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
            if (this.isInitialized(r) || this.shouldAutoInitialize()) try {
                return this.getOrInitializeService({
                    instanceIdentifier: r
                });
            } catch (e) {
                if (i) return null;
                throw e;
            }
            else {
                if (i) return null;
                throw Error(`Service ${this.name} is not available`);
            }
        }
        getComponent() {
            return this.component;
        }
        setComponent(e) {
            if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
            if (this.component) throw Error(`Component for ${this.name} has already been provided`);
            if (this.component = e, this.shouldAutoInitialize()) {
                if ("EAGER" === e.instantiationMode) try {
                    this.getOrInitializeService({
                        instanceIdentifier: Y
                    });
                } catch (e) {}
                for (let [e, t] of this.instancesDeferred.entries()){
                    let r = this.normalizeInstanceIdentifier(e);
                    try {
                        let e = this.getOrInitializeService({
                            instanceIdentifier: r
                        });
                        t.resolve(e);
                    } catch (e) {}
                }
            }
        }
        clearInstance(e = Y) {
            this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
        }
        async delete() {
            let e = Array.from(this.instances.values());
            await Promise.all([
                ...e.filter((e)=>"INTERNAL" in e).map((e)=>e.INTERNAL.delete()),
                ...e.filter((e)=>"_delete" in e).map((e)=>e._delete())
            ]);
        }
        isComponentSet() {
            return null != this.component;
        }
        isInitialized(e = Y) {
            return this.instances.has(e);
        }
        getOptions(e = Y) {
            return this.instancesOptions.get(e) || {};
        }
        initialize(e = {}) {
            let { options: t = {} } = e, r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
            if (this.isInitialized(r)) throw Error(`${this.name}(${r}) has already been initialized`);
            if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
            let i = this.getOrInitializeService({
                instanceIdentifier: r,
                options: t
            });
            for (let [e, t] of this.instancesDeferred.entries())r === this.normalizeInstanceIdentifier(e) && t.resolve(i);
            return i;
        }
        onInit(e, t) {
            var r;
            let i = this.normalizeInstanceIdentifier(t), n = null !== (r = this.onInitCallbacks.get(i)) && void 0 !== r ? r : new Set;
            n.add(e), this.onInitCallbacks.set(i, n);
            let s = this.instances.get(i);
            return s && e(s, i), ()=>{
                n.delete(e);
            };
        }
        invokeOnInitCallbacks(e, t) {
            let r = this.onInitCallbacks.get(t);
            if (r) for (let i of r)try {
                i(e, t);
            } catch (e) {}
        }
        getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
            let r = this.instances.get(e);
            if (!r && this.component && (r = this.component.instanceFactory(this.container, {
                instanceIdentifier: e === Y ? void 0 : e,
                options: t
            }), this.instances.set(e, r), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(r, e), this.component.onInstanceCreated)) try {
                this.component.onInstanceCreated(this.container, e, r);
            } catch (e) {}
            return r || null;
        }
        normalizeInstanceIdentifier(e = Y) {
            return this.component ? this.component.multipleInstances ? e : Y : e;
        }
        shouldAutoInitialize() {
            return !!this.component && "EXPLICIT" !== this.component.instantiationMode;
        }
    } /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class Q {
        constructor(e){
            this.name = e, this.providers = new Map;
        }
        addComponent(e) {
            let t = this.getProvider(e.name);
            if (t.isComponentSet()) throw Error(`Component ${e.name} has already been registered with ${this.name}`);
            t.setComponent(e);
        }
        addOrOverwriteComponent(e) {
            this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e);
        }
        getProvider(e) {
            if (this.providers.has(e)) return this.providers.get(e);
            let t = new X(e, this);
            return this.providers.set(e, t), t;
        }
        getProviders() {
            return Array.from(this.providers.values());
        }
    } /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    let Z = [];
    (i = l || (l = {}))[i.DEBUG = 0] = "DEBUG", i[i.VERBOSE = 1] = "VERBOSE", i[i.INFO = 2] = "INFO", i[i.WARN = 3] = "WARN", i[i.ERROR = 4] = "ERROR", i[i.SILENT = 5] = "SILENT";
    let ee = {
        debug: l.DEBUG,
        verbose: l.VERBOSE,
        info: l.INFO,
        warn: l.WARN,
        error: l.ERROR,
        silent: l.SILENT
    }, et = l.INFO, er = {
        [l.DEBUG]: "log",
        [l.VERBOSE]: "log",
        [l.INFO]: "info",
        [l.WARN]: "warn",
        [l.ERROR]: "error"
    }, ei = (e, t, ...r)=>{
        if (t < e.logLevel) return;
        let i = new Date().toISOString(), n = er[t];
        if (n) console[n](`[${i}]  ${e.name}:`, ...r);
        else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`);
    };
    class en {
        constructor(e){
            this.name = e, this._logLevel = et, this._logHandler = ei, this._userLogHandler = null, Z.push(this);
        }
        get logLevel() {
            return this._logLevel;
        }
        set logLevel(e) {
            if (!(e in l)) throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
            this._logLevel = e;
        }
        setLogLevel(e) {
            this._logLevel = "string" == typeof e ? ee[e] : e;
        }
        get logHandler() {
            return this._logHandler;
        }
        set logHandler(e) {
            if ("function" != typeof e) throw TypeError("Value assigned to `logHandler` must be a function");
            this._logHandler = e;
        }
        get userLogHandler() {
            return this._userLogHandler;
        }
        set userLogHandler(e) {
            this._userLogHandler = e;
        }
        debug(...e) {
            this._userLogHandler && this._userLogHandler(this, l.DEBUG, ...e), this._logHandler(this, l.DEBUG, ...e);
        }
        log(...e) {
            this._userLogHandler && this._userLogHandler(this, l.VERBOSE, ...e), this._logHandler(this, l.VERBOSE, ...e);
        }
        info(...e) {
            this._userLogHandler && this._userLogHandler(this, l.INFO, ...e), this._logHandler(this, l.INFO, ...e);
        }
        warn(...e) {
            this._userLogHandler && this._userLogHandler(this, l.WARN, ...e), this._logHandler(this, l.WARN, ...e);
        }
        error(...e) {
            this._userLogHandler && this._userLogHandler(this, l.ERROR, ...e), this._logHandler(this, l.ERROR, ...e);
        }
    }
    let es = (e, t)=>t.some((t)=>e instanceof t), ea = new WeakMap, eo = new WeakMap, el = new WeakMap, ec = new WeakMap, eu = new WeakMap, eh = {
        get (e, t, r) {
            if (e instanceof IDBTransaction) {
                if ("done" === t) return eo.get(e);
                if ("objectStoreNames" === t) return e.objectStoreNames || el.get(e);
                if ("store" === t) return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0]);
            }
            return ed(e[t]);
        },
        set: (e, t, r)=>(e[t] = r, !0),
        has: (e, t)=>e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
    };
    function ed(r) {
        var i;
        if (r instanceof IDBRequest) return function(e) {
            let t = new Promise((t, r)=>{
                let i = ()=>{
                    e.removeEventListener("success", n), e.removeEventListener("error", s);
                }, n = ()=>{
                    t(ed(e.result)), i();
                }, s = ()=>{
                    r(e.error), i();
                };
                e.addEventListener("success", n), e.addEventListener("error", s);
            });
            return t.then((t)=>{
                t instanceof IDBCursor && ea.set(t, e);
            }).catch(()=>{}), eu.set(t, e), t;
        }(r);
        if (ec.has(r)) return ec.get(r);
        let n = "function" == typeof (i = r) ? i !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (t || (t = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey
        ])).includes(i) ? function(...e) {
            return i.apply(ep(this), e), ed(ea.get(this));
        } : function(...e) {
            return ed(i.apply(ep(this), e));
        } : function(e, ...t) {
            let r = i.call(ep(this), e, ...t);
            return el.set(r, e.sort ? e.sort() : [
                e
            ]), ed(r);
        } : (i instanceof IDBTransaction && function(e) {
            if (eo.has(e)) return;
            let t = new Promise((t, r)=>{
                let i = ()=>{
                    e.removeEventListener("complete", n), e.removeEventListener("error", s), e.removeEventListener("abort", s);
                }, n = ()=>{
                    t(), i();
                }, s = ()=>{
                    r(e.error || new DOMException("AbortError", "AbortError")), i();
                };
                e.addEventListener("complete", n), e.addEventListener("error", s), e.addEventListener("abort", s);
            });
            eo.set(e, t);
        }(i), es(i, e || (e = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction
        ]))) ? new Proxy(i, eh) : i;
        return n !== r && (ec.set(r, n), eu.set(n, r)), n;
    }
    let ep = (e)=>eu.get(e), ef = [
        "get",
        "getKey",
        "getAll",
        "getAllKeys",
        "count"
    ], em = [
        "put",
        "add",
        "delete",
        "clear"
    ], eg = new Map;
    function ev(e, t) {
        if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t)) return;
        if (eg.get(t)) return eg.get(t);
        let r = t.replace(/FromIndex$/, ""), i = t !== r, n = em.includes(r);
        if (!(r in (i ? IDBIndex : IDBObjectStore).prototype) || !(n || ef.includes(r))) return;
        let s = async function(e, ...t) {
            let s = this.transaction(e, n ? "readwrite" : "readonly"), a = s.store;
            return i && (a = a.index(t.shift())), (await Promise.all([
                a[r](...t),
                n && s.done
            ]))[0];
        };
        return eg.set(t, s), s;
    }
    eh = {
        ...r = eh,
        get: (e, t, i)=>ev(e, t) || r.get(e, t, i),
        has: (e, t)=>!!ev(e, t) || r.has(e, t)
    }; /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class ey {
        constructor(e){
            this.container = e;
        }
        getPlatformInfoString() {
            return this.container.getProviders().map((e)=>{
                if (!function(e) {
                    let t = e.getComponent();
                    return (null == t ? void 0 : t.type) === "VERSION";
                }(e)) return null;
                {
                    let t = e.getImmediate();
                    return `${t.library}/${t.version}`;
                }
            }).filter((e)=>e).join(" ");
        }
    }
    let e_ = "@firebase/app", eI = "0.10.8", ew = new en("@firebase/app"), eb = "[DEFAULT]", eE = {
        [e_]: "fire-core",
        "@firebase/app-compat": "fire-core-compat",
        "@firebase/analytics": "fire-analytics",
        "@firebase/analytics-compat": "fire-analytics-compat",
        "@firebase/app-check": "fire-app-check",
        "@firebase/app-check-compat": "fire-app-check-compat",
        "@firebase/auth": "fire-auth",
        "@firebase/auth-compat": "fire-auth-compat",
        "@firebase/database": "fire-rtdb",
        "@firebase/database-compat": "fire-rtdb-compat",
        "@firebase/functions": "fire-fn",
        "@firebase/functions-compat": "fire-fn-compat",
        "@firebase/installations": "fire-iid",
        "@firebase/installations-compat": "fire-iid-compat",
        "@firebase/messaging": "fire-fcm",
        "@firebase/messaging-compat": "fire-fcm-compat",
        "@firebase/performance": "fire-perf",
        "@firebase/performance-compat": "fire-perf-compat",
        "@firebase/remote-config": "fire-rc",
        "@firebase/remote-config-compat": "fire-rc-compat",
        "@firebase/storage": "fire-gcs",
        "@firebase/storage-compat": "fire-gcs-compat",
        "@firebase/firestore": "fire-fst",
        "@firebase/firestore-compat": "fire-fst-compat",
        "@firebase/vertexai-preview": "fire-vertex",
        "fire-js": "fire-js",
        firebase: "fire-js-all"
    }, eT = new Map, eS = new Map, ek = new Map;
    function eC(e, t) {
        try {
            e.container.addComponent(t);
        } catch (r) {
            ew.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, r);
        }
    }
    function eO(e) {
        let t = e.name;
        if (ek.has(t)) return ew.debug(`There were multiple attempts to register component ${t}.`), !1;
        for (let r of (ek.set(t, e), eT.values()))eC(r, e);
        for (let t of eS.values())eC(t, e);
        return !0;
    }
    function eP(e, t) {
        let r = e.container.getProvider("heartbeat").getImmediate({
            optional: !0
        });
        return r && r.triggerHeartbeat(), e.container.getProvider(t);
    }
    function eR(e) {
        return void 0 !== e.settings;
    }
    let eA = new V("app", "Firebase", {
        "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
        "bad-app-name": "Illegal App name: '{$appName}'",
        "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
        "app-deleted": "Firebase App named '{$appName}' already deleted",
        "server-app-deleted": "Firebase Server App has been deleted",
        "no-options": "Need to provide options, when not being deployed to hosting via source.",
        "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        "invalid-log-argument": "First argument to `onLog` must be null or a function.",
        "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
        "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
        "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
    }); /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class eN {
        constructor(e, t, r){
            this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = r, this.container.addComponent(new J("app", ()=>this, "PUBLIC"));
        }
        get automaticDataCollectionEnabled() {
            return this.checkDestroyed(), this._automaticDataCollectionEnabled;
        }
        set automaticDataCollectionEnabled(e) {
            this.checkDestroyed(), this._automaticDataCollectionEnabled = e;
        }
        get name() {
            return this.checkDestroyed(), this._name;
        }
        get options() {
            return this.checkDestroyed(), this._options;
        }
        get config() {
            return this.checkDestroyed(), this._config;
        }
        get container() {
            return this._container;
        }
        get isDeleted() {
            return this._isDeleted;
        }
        set isDeleted(e) {
            this._isDeleted = e;
        }
        checkDestroyed() {
            if (this.isDeleted) throw eA.create("app-deleted", {
                appName: this._name
            });
        }
    } /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    let eD = "10.12.5";
    function eL(e, t = {}) {
        let r = e;
        "object" != typeof t && (t = {
            name: t
        });
        let i = Object.assign({
            name: eb,
            automaticDataCollectionEnabled: !1
        }, t), n = i.name;
        if ("string" != typeof n || !n) throw eA.create("bad-app-name", {
            appName: String(n)
        });
        if (r || (r = L()), !r) throw eA.create("no-options");
        let s = eT.get(n);
        if (s) {
            if (H(r, s.options) && H(i, s.config)) return s;
            throw eA.create("duplicate-app", {
                appName: n
            });
        }
        let a = new Q(n);
        for (let e of ek.values())a.addComponent(e);
        let o = new eN(r, i, a);
        return eT.set(n, o), o;
    }
    function eM(e, t, r) {
        var i;
        let n = null !== (i = eE[e]) && void 0 !== i ? i : e;
        r && (n += `-${r}`);
        let s = n.match(/\s|\//), a = t.match(/\s|\//);
        if (s || a) {
            let e = [
                `Unable to register library "${n}" with version "${t}":`
            ];
            s && e.push(`library name "${n}" contains illegal characters (whitespace or "/")`), s && a && e.push("and"), a && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), ew.warn(e.join(" "));
            return;
        }
        eO(new J(`${n}-version`, ()=>({
                library: n,
                version: t
            }), "VERSION"));
    }
    let eU = "firebase-heartbeat-store", ex = null;
    function eF() {
        return ex || (ex = (function(e, t, { blocked: r, upgrade: i, blocking: n, terminated: s } = {}) {
            let a = indexedDB.open(e, 1), o = ed(a);
            return i && a.addEventListener("upgradeneeded", (e)=>{
                i(ed(a.result), e.oldVersion, e.newVersion, ed(a.transaction), e);
            }), r && a.addEventListener("blocked", (e)=>r(e.oldVersion, e.newVersion, e)), o.then((e)=>{
                s && e.addEventListener("close", ()=>s()), n && e.addEventListener("versionchange", (e)=>n(e.oldVersion, e.newVersion, e));
            }).catch(()=>{}), o;
        })("firebase-heartbeat-database", 0, {
            upgrade: (e, t)=>{
                if (0 === t) try {
                    e.createObjectStore(eU);
                } catch (e) {
                    console.warn(e);
                }
            }
        }).catch((e)=>{
            throw eA.create("idb-open", {
                originalErrorMessage: e.message
            });
        })), ex;
    }
    async function eV(e) {
        try {
            let t = (await eF()).transaction(eU), r = await t.objectStore(eU).get(eH(e));
            return await t.done, r;
        } catch (e) {
            if (e instanceof F) ew.warn(e.message);
            else {
                let t = eA.create("idb-get", {
                    originalErrorMessage: null == e ? void 0 : e.message
                });
                ew.warn(t.message);
            }
        }
    }
    async function ej(e, t) {
        try {
            let r = (await eF()).transaction(eU, "readwrite"), i = r.objectStore(eU);
            await i.put(t, eH(e)), await r.done;
        } catch (e) {
            if (e instanceof F) ew.warn(e.message);
            else {
                let t = eA.create("idb-set", {
                    originalErrorMessage: null == e ? void 0 : e.message
                });
                ew.warn(t.message);
            }
        }
    }
    function eH(e) {
        return `${e.name}!${e.options.appId}`;
    }
    class eB {
        constructor(e){
            this.container = e, this._heartbeatsCache = null;
            let t = this.container.getProvider("app").getImmediate();
            this._storage = new ez(t), this._heartbeatsCachePromise = this._storage.read().then((e)=>(this._heartbeatsCache = e, e));
        }
        async triggerHeartbeat() {
            var e, t;
            let r = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(), i = e$();
            return (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, (null === (t = this._heartbeatsCache) || void 0 === t ? void 0 : t.heartbeats) == null) ? void 0 : this._heartbeatsCache.lastSentHeartbeatDate === i || this._heartbeatsCache.heartbeats.some((e)=>e.date === i) ? void 0 : (this._heartbeatsCache.heartbeats.push({
                date: i,
                agent: r
            }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((e)=>{
                let t = new Date(e.date).valueOf();
                return Date.now() - t <= 2592e6;
            }), this._storage.overwrite(this._heartbeatsCache));
        }
        async getHeartbeatsHeader() {
            var e;
            if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) == null || 0 === this._heartbeatsCache.heartbeats.length) return "";
            let t = e$(), { heartbeatsToSend: r, unsentEntries: i } = function(e, t = 1024) {
                let r = [], i = e.slice();
                for (let n of e){
                    let e = r.find((e)=>e.agent === n.agent);
                    if (e) {
                        if (e.dates.push(n.date), eW(r) > t) {
                            e.dates.pop();
                            break;
                        }
                    } else if (r.push({
                        agent: n.agent,
                        dates: [
                            n.date
                        ]
                    }), eW(r) > t) {
                        r.pop();
                        break;
                    }
                    i = i.slice(1);
                }
                return {
                    heartbeatsToSend: r,
                    unsentEntries: i
                };
            }(this._heartbeatsCache.heartbeats), n = C(JSON.stringify({
                version: 2,
                heartbeats: r
            }));
            return this._heartbeatsCache.lastSentHeartbeatDate = t, i.length > 0 ? (this._heartbeatsCache.heartbeats = i, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), n;
        }
    }
    function e$() {
        return new Date().toISOString().substring(0, 10);
    }
    class ez {
        constructor(e){
            this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
        }
        async runIndexedDBEnvironmentCheck() {
            return !!function() {
                try {
                    return "object" == typeof indexedDB;
                } catch (e) {
                    return !1;
                }
            }() && new Promise((e, t)=>{
                try {
                    let r = !0, i = "validate-browser-context-for-indexeddb-analytics-module", n = self.indexedDB.open(i);
                    n.onsuccess = ()=>{
                        n.result.close(), r || self.indexedDB.deleteDatabase(i), e(!0);
                    }, n.onupgradeneeded = ()=>{
                        r = !1;
                    }, n.onerror = ()=>{
                        var e;
                        t((null === (e = n.error) || void 0 === e ? void 0 : e.message) || "");
                    };
                } catch (e) {
                    t(e);
                }
            }).then(()=>!0).catch(()=>!1);
        }
        async read() {
            if (!await this._canUseIndexedDBPromise) return {
                heartbeats: []
            };
            {
                let e = await eV(this.app);
                return (null == e ? void 0 : e.heartbeats) ? e : {
                    heartbeats: []
                };
            }
        }
        async overwrite(e) {
            var t;
            if (await this._canUseIndexedDBPromise) {
                let r = await this.read();
                return ej(this.app, {
                    lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : r.lastSentHeartbeatDate,
                    heartbeats: e.heartbeats
                });
            }
        }
        async add(e) {
            var t;
            if (await this._canUseIndexedDBPromise) {
                let r = await this.read();
                return ej(this.app, {
                    lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : r.lastSentHeartbeatDate,
                    heartbeats: [
                        ...r.heartbeats,
                        ...e.heartbeats
                    ]
                });
            }
        }
    }
    function eW(e) {
        return C(JSON.stringify({
            version: 2,
            heartbeats: e
        })).length;
    }
    function eq(e, t) {
        var r = {};
        for(var i in e)Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) for(var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++)0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
        return r;
    }
    function eK() {
        return {
            "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
        };
    }
    eO(new J("platform-logger", (e)=>new ey(e), "PRIVATE")), eO(new J("heartbeat", (e)=>new eB(e), "PRIVATE")), eM(e_, eI, ""), eM(e_, eI, "esm2017"), eM("fire-js", ""), /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ eM("firebase", "10.12.5", "app"), "function" == typeof SuppressedError && SuppressedError;
    let eG = new V("auth", "Firebase", eK()), eJ = new en("@firebase/auth");
    function eY(e, ...t) {
        eJ.logLevel <= l.ERROR && eJ.error(`Auth (${eD}): ${e}`, ...t);
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    function eX(e, ...t) {
        throw e1(e, ...t);
    }
    function eQ(e, ...t) {
        return e1(e, ...t);
    }
    function eZ(e, t, r) {
        return new V("auth", "Firebase", Object.assign(Object.assign({}, eK()), {
            [t]: r
        })).create(t, {
            appName: e.name
        });
    }
    function e0(e) {
        return eZ(e, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
    }
    function e1(e, ...t) {
        if ("string" != typeof e) {
            let r = t[0], i = [
                ...t.slice(1)
            ];
            return i[0] && (i[0].appName = e.name), e._errorFactory.create(r, ...i);
        }
        return eG.create(e, ...t);
    }
    function e2(e, t, ...r) {
        if (!e) throw e1(t, ...r);
    }
    function e3(e) {
        let t = "INTERNAL ASSERTION FAILED: " + e;
        throw eY(t), Error(t);
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    function e6() {
        var e;
        return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.href) || "";
    }
    function e4() {
        var e;
        return "undefined" != typeof self && (null === (e = self.location) || void 0 === e ? void 0 : e.protocol) || null;
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class e5 {
        constructor(e, t){
            var r;
            this.shortDelay = e, this.longDelay = t, r = "Short delay should be less than long delay!", t > e || e3(r), this.isMobile = "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(x()) || "object" == typeof navigator && "ReactNative" === navigator.product;
        }
        get() {
            return !("undefined" != typeof navigator && navigator && "onLine" in navigator && "boolean" == typeof navigator.onLine && ("http:" === e4() || "https:" === e4() || function() {
                let e = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
                return "object" == typeof e && void 0 !== e.id;
            }() || "connection" in navigator)) || navigator.onLine ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay);
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    function e8(e, t) {
        var r, i;
        r = e.emulator, i = "Emulator should always be set here", r || e3(i);
        let { url: n } = e.emulator;
        return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class e9 {
        static initialize(e, t, r) {
            this.fetchImpl = e, t && (this.headersImpl = t), r && (this.responseImpl = r);
        }
        static fetch() {
            return this.fetchImpl ? this.fetchImpl : "undefined" != typeof self && "fetch" in self ? self.fetch : "undefined" != typeof globalThis && globalThis.fetch ? globalThis.fetch : "undefined" != typeof fetch ? fetch : void e3("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
        }
        static headers() {
            return this.headersImpl ? this.headersImpl : "undefined" != typeof self && "Headers" in self ? self.Headers : "undefined" != typeof globalThis && globalThis.Headers ? globalThis.Headers : "undefined" != typeof Headers ? Headers : void e3("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
        }
        static response() {
            return this.responseImpl ? this.responseImpl : "undefined" != typeof self && "Response" in self ? self.Response : "undefined" != typeof globalThis && globalThis.Response ? globalThis.Response : "undefined" != typeof Response ? Response : void e3("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    let e7 = {
        CREDENTIAL_MISMATCH: "custom-token-mismatch",
        MISSING_CUSTOM_TOKEN: "internal-error",
        INVALID_IDENTIFIER: "invalid-email",
        MISSING_CONTINUE_URI: "internal-error",
        INVALID_PASSWORD: "wrong-password",
        MISSING_PASSWORD: "missing-password",
        INVALID_LOGIN_CREDENTIALS: "invalid-credential",
        EMAIL_EXISTS: "email-already-in-use",
        PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
        INVALID_IDP_RESPONSE: "invalid-credential",
        INVALID_PENDING_TOKEN: "invalid-credential",
        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
        MISSING_REQ_TYPE: "internal-error",
        EMAIL_NOT_FOUND: "user-not-found",
        RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
        EXPIRED_OOB_CODE: "expired-action-code",
        INVALID_OOB_CODE: "invalid-action-code",
        MISSING_OOB_CODE: "internal-error",
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
        INVALID_ID_TOKEN: "invalid-user-token",
        TOKEN_EXPIRED: "user-token-expired",
        USER_NOT_FOUND: "user-token-expired",
        TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
        PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
        INVALID_CODE: "invalid-verification-code",
        INVALID_SESSION_INFO: "invalid-verification-id",
        INVALID_TEMPORARY_PROOF: "invalid-credential",
        MISSING_SESSION_INFO: "missing-verification-id",
        SESSION_EXPIRED: "code-expired",
        MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
        UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
        INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
        ADMIN_ONLY_OPERATION: "admin-restricted-operation",
        INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
        MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
        MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
        MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
        SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
        SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
        BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
        RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
        MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
        INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
        INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
        MISSING_CLIENT_TYPE: "missing-client-type",
        MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
        INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
        INVALID_REQ_TYPE: "invalid-req-type"
    }, te = new e5(3e4, 6e4);
    function tt(e, t) {
        return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), {
            tenantId: e.tenantId
        }) : t;
    }
    async function tr(e, t, r, i, n = {}) {
        return ti(e, n, async ()=>{
            let n = {}, s = {};
            i && ("GET" === t ? s = i : n = {
                body: JSON.stringify(i)
            });
            let a = $(Object.assign({
                key: e.config.apiKey
            }, s)).slice(1), o = await e._getAdditionalHeaders();
            return o["Content-Type"] = "application/json", e.languageCode && (o["X-Firebase-Locale"] = e.languageCode), e9.fetch()(ts(e, e.config.apiHost, r, a), Object.assign({
                method: t,
                headers: o,
                referrerPolicy: "no-referrer"
            }, n));
        });
    }
    async function ti(e, t, r) {
        e._canInitEmulator = !1;
        let i = Object.assign(Object.assign({}, e7), t);
        try {
            let t = new ta(e), n = await Promise.race([
                r(),
                t.promise
            ]);
            t.clearNetworkTimeout();
            let s = await n.json();
            if ("needConfirmation" in s) throw to(e, "account-exists-with-different-credential", s);
            if (n.ok && !("errorMessage" in s)) return s;
            {
                let [t, r] = (n.ok ? s.errorMessage : s.error.message).split(" : ");
                if ("FEDERATED_USER_ID_ALREADY_LINKED" === t) throw to(e, "credential-already-in-use", s);
                if ("EMAIL_EXISTS" === t) throw to(e, "email-already-in-use", s);
                if ("USER_DISABLED" === t) throw to(e, "user-disabled", s);
                let a = i[t] || t.toLowerCase().replace(/[_\s]+/g, "-");
                if (r) throw eZ(e, a, r);
                eX(e, a);
            }
        } catch (t) {
            if (t instanceof F) throw t;
            eX(e, "network-request-failed", {
                message: String(t)
            });
        }
    }
    async function tn(e, t, r, i, n = {}) {
        let s = await tr(e, t, r, i, n);
        return "mfaPendingCredential" in s && eX(e, "multi-factor-auth-required", {
            _serverResponse: s
        }), s;
    }
    function ts(e, t, r, i) {
        let n = `${t}${r}?${i}`;
        return e.config.emulator ? e8(e.config, n) : `${e.config.apiScheme}://${n}`;
    }
    class ta {
        constructor(e){
            this.auth = e, this.timer = null, this.promise = new Promise((e, t)=>{
                this.timer = setTimeout(()=>t(eQ(this.auth, "network-request-failed")), te.get());
            });
        }
        clearNetworkTimeout() {
            clearTimeout(this.timer);
        }
    }
    function to(e, t, r) {
        let i = {
            appName: e.name
        };
        r.email && (i.email = r.email), r.phoneNumber && (i.phoneNumber = r.phoneNumber);
        let n = eQ(e, t, i);
        return n.customData._tokenResponse = r, n;
    }
    function tl(e) {
        return void 0 !== e && void 0 !== e.enterprise;
    }
    class tc {
        constructor(e){
            if (this.siteKey = "", this.recaptchaEnforcementState = [], void 0 === e.recaptchaKey) throw Error("recaptchaKey undefined");
            this.siteKey = e.recaptchaKey.split("/")[3], this.recaptchaEnforcementState = e.recaptchaEnforcementState;
        }
        getProviderEnforcementState(e) {
            if (!this.recaptchaEnforcementState || 0 === this.recaptchaEnforcementState.length) return null;
            for (let t of this.recaptchaEnforcementState)if (t.provider && t.provider === e) return function(e) {
                switch(e){
                    case "ENFORCE":
                        return "ENFORCE";
                    case "AUDIT":
                        return "AUDIT";
                    case "OFF":
                        return "OFF";
                    default:
                        return "ENFORCEMENT_STATE_UNSPECIFIED";
                }
            }(t.enforcementState);
            return null;
        }
        isProviderEnabled(e) {
            return "ENFORCE" === this.getProviderEnforcementState(e) || "AUDIT" === this.getProviderEnforcementState(e);
        }
    }
    async function tu(e, t) {
        return tr(e, "GET", "/v2/recaptchaConfig", tt(e, t));
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    async function th(e, t) {
        return tr(e, "POST", "/v1/accounts:delete", t);
    }
    async function td(e, t) {
        return tr(e, "POST", "/v1/accounts:lookup", t);
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    function tp(e) {
        if (e) try {
            let t = new Date(Number(e));
            if (!isNaN(t.getTime())) return t.toUTCString();
        } catch (e) {}
    }
    async function tf(e, t = !1) {
        let r = G(e), i = await r.getIdToken(t), n = tg(i);
        e2(n && n.exp && n.auth_time && n.iat, r.auth, "internal-error");
        let s = "object" == typeof n.firebase ? n.firebase : void 0, a = null == s ? void 0 : s.sign_in_provider;
        return {
            claims: n,
            token: i,
            authTime: tp(tm(n.auth_time)),
            issuedAtTime: tp(tm(n.iat)),
            expirationTime: tp(tm(n.exp)),
            signInProvider: a || null,
            signInSecondFactor: (null == s ? void 0 : s.sign_in_second_factor) || null
        };
    }
    function tm(e) {
        return 1e3 * Number(e);
    }
    function tg(e) {
        let [t, r, i] = e.split(".");
        if (void 0 === t || void 0 === r || void 0 === i) return eY("JWT malformed, contained fewer than 3 sections"), null;
        try {
            let e = O(r);
            if (!e) return eY("Failed to decode base64 JWT payload"), null;
            return JSON.parse(e);
        } catch (e) {
            return eY("Caught error parsing JWT payload as JSON", null == e ? void 0 : e.toString()), null;
        }
    }
    function tv(e) {
        let t = tg(e);
        return e2(t, "internal-error"), e2(void 0 !== t.exp, "internal-error"), e2(void 0 !== t.iat, "internal-error"), Number(t.exp) - Number(t.iat);
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    async function ty(e, t, r = !1) {
        if (r) return t;
        try {
            return await t;
        } catch (t) {
            throw t instanceof F && function({ code: e }) {
                return "auth/user-disabled" === e || "auth/user-token-expired" === e;
            }(t) && e.auth.currentUser === e && await e.auth.signOut(), t;
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class t_ {
        constructor(e){
            this.user = e, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4;
        }
        _start() {
            this.isRunning || (this.isRunning = !0, this.schedule());
        }
        _stop() {
            this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId));
        }
        getInterval(e) {
            var t;
            if (!e) return this.errorBackoff = 3e4, Math.max(0, (null !== (t = this.user.stsTokenManager.expirationTime) && void 0 !== t ? t : 0) - Date.now() - 3e5);
            {
                let e = this.errorBackoff;
                return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), e;
            }
        }
        schedule(e = !1) {
            if (!this.isRunning) return;
            let t = this.getInterval(e);
            this.timerId = setTimeout(async ()=>{
                await this.iteration();
            }, t);
        }
        async iteration() {
            try {
                await this.user.getIdToken(!0);
            } catch (e) {
                (null == e ? void 0 : e.code) === "auth/network-request-failed" && this.schedule(!0);
                return;
            }
            this.schedule();
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class tI {
        constructor(e, t){
            this.createdAt = e, this.lastLoginAt = t, this._initializeTime();
        }
        _initializeTime() {
            this.lastSignInTime = tp(this.lastLoginAt), this.creationTime = tp(this.createdAt);
        }
        _copy(e) {
            this.createdAt = e.createdAt, this.lastLoginAt = e.lastLoginAt, this._initializeTime();
        }
        toJSON() {
            return {
                createdAt: this.createdAt,
                lastLoginAt: this.lastLoginAt
            };
        }
    } /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    async function tw(e) {
        var t;
        let r = e.auth, i = await e.getIdToken(), n = await ty(e, td(r, {
            idToken: i
        }));
        e2(null == n ? void 0 : n.users.length, r, "internal-error");
        let s = n.users[0];
        e._notifyReloadListener(s);
        let a = (null === (t = s.providerUserInfo) || void 0 === t ? void 0 : t.length) ? tE(s.providerUserInfo) : [], o = [
            ...e.providerData.filter((e)=>!a.some((t)=>t.providerId === e.providerId)),
            ...a
        ], l = e.isAnonymous, c = !(e.email && s.passwordHash) && !(null == o ? void 0 : o.length);
        Object.assign(e, {
            uid: s.localId,
            displayName: s.displayName || null,
            photoURL: s.photoUrl || null,
            email: s.email || null,
            emailVerified: s.emailVerified || !1,
            phoneNumber: s.phoneNumber || null,
            tenantId: s.tenantId || null,
            providerData: o,
            metadata: new tI(s.createdAt, s.lastLoginAt),
            isAnonymous: !!l && c
        });
    }
    async function tb(e) {
        let t = G(e);
        await tw(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t);
    }
    function tE(e) {
        return e.map((e)=>{
            var { providerId: t } = e, r = eq(e, [
                "providerId"
            ]);
            return {
                providerId: t,
                uid: r.rawId || "",
                displayName: r.displayName || null,
                email: r.email || null,
                phoneNumber: r.phoneNumber || null,
                photoURL: r.photoUrl || null
            };
        });
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    async function tT(e, t) {
        let r = await ti(e, {}, async ()=>{
            let r = $({
                grant_type: "refresh_token",
                refresh_token: t
            }).slice(1), { tokenApiHost: i, apiKey: n } = e.config, s = ts(e, i, "/v1/token", `key=${n}`), a = await e._getAdditionalHeaders();
            return a["Content-Type"] = "application/x-www-form-urlencoded", e9.fetch()(s, {
                method: "POST",
                headers: a,
                body: r
            });
        });
        return {
            accessToken: r.access_token,
            expiresIn: r.expires_in,
            refreshToken: r.refresh_token
        };
    }
    async function tS(e, t) {
        return tr(e, "POST", "/v2/accounts:revokeToken", tt(e, t));
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class tk {
        constructor(){
            this.refreshToken = null, this.accessToken = null, this.expirationTime = null;
        }
        get isExpired() {
            return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
        }
        updateFromServerResponse(e) {
            e2(e.idToken, "internal-error"), e2(void 0 !== e.idToken, "internal-error"), e2(void 0 !== e.refreshToken, "internal-error");
            let t = "expiresIn" in e && void 0 !== e.expiresIn ? Number(e.expiresIn) : tv(e.idToken);
            this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
        }
        updateFromIdToken(e) {
            e2(0 !== e.length, "internal-error");
            let t = tv(e);
            this.updateTokensAndExpiration(e, null, t);
        }
        async getToken(e, t = !1) {
            return t || !this.accessToken || this.isExpired ? (e2(this.refreshToken, e, "user-token-expired"), this.refreshToken) ? (await this.refresh(e, this.refreshToken), this.accessToken) : null : this.accessToken;
        }
        clearRefreshToken() {
            this.refreshToken = null;
        }
        async refresh(e, t) {
            let { accessToken: r, refreshToken: i, expiresIn: n } = await tT(e, t);
            this.updateTokensAndExpiration(r, i, Number(n));
        }
        updateTokensAndExpiration(e, t, r) {
            this.refreshToken = t || null, this.accessToken = e || null, this.expirationTime = Date.now() + 1e3 * r;
        }
        static fromJSON(e, t) {
            let { refreshToken: r, accessToken: i, expirationTime: n } = t, s = new tk;
            return r && (e2("string" == typeof r, "internal-error", {
                appName: e
            }), s.refreshToken = r), i && (e2("string" == typeof i, "internal-error", {
                appName: e
            }), s.accessToken = i), n && (e2("number" == typeof n, "internal-error", {
                appName: e
            }), s.expirationTime = n), s;
        }
        toJSON() {
            return {
                refreshToken: this.refreshToken,
                accessToken: this.accessToken,
                expirationTime: this.expirationTime
            };
        }
        _assign(e) {
            this.accessToken = e.accessToken, this.refreshToken = e.refreshToken, this.expirationTime = e.expirationTime;
        }
        _clone() {
            return Object.assign(new tk, this.toJSON());
        }
        _performRefresh() {
            return e3("not implemented");
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    function tC(e, t) {
        e2("string" == typeof e || void 0 === e, "internal-error", {
            appName: t
        });
    }
    class tO {
        constructor(e){
            var { uid: t, auth: r, stsTokenManager: i } = e, n = eq(e, [
                "uid",
                "auth",
                "stsTokenManager"
            ]);
            this.providerId = "firebase", this.proactiveRefresh = new t_(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = t, this.auth = r, this.stsTokenManager = i, this.accessToken = i.accessToken, this.displayName = n.displayName || null, this.email = n.email || null, this.emailVerified = n.emailVerified || !1, this.phoneNumber = n.phoneNumber || null, this.photoURL = n.photoURL || null, this.isAnonymous = n.isAnonymous || !1, this.tenantId = n.tenantId || null, this.providerData = n.providerData ? [
                ...n.providerData
            ] : [], this.metadata = new tI(n.createdAt || void 0, n.lastLoginAt || void 0);
        }
        async getIdToken(e) {
            let t = await ty(this, this.stsTokenManager.getToken(this.auth, e));
            return e2(t, this.auth, "internal-error"), this.accessToken !== t && (this.accessToken = t, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), t;
        }
        getIdTokenResult(e) {
            return tf(this, e);
        }
        reload() {
            return tb(this);
        }
        _assign(e) {
            this !== e && (e2(this.uid === e.uid, this.auth, "internal-error"), this.displayName = e.displayName, this.photoURL = e.photoURL, this.email = e.email, this.emailVerified = e.emailVerified, this.phoneNumber = e.phoneNumber, this.isAnonymous = e.isAnonymous, this.tenantId = e.tenantId, this.providerData = e.providerData.map((e)=>Object.assign({}, e)), this.metadata._copy(e.metadata), this.stsTokenManager._assign(e.stsTokenManager));
        }
        _clone(e) {
            let t = new tO(Object.assign(Object.assign({}, this), {
                auth: e,
                stsTokenManager: this.stsTokenManager._clone()
            }));
            return t.metadata._copy(this.metadata), t;
        }
        _onReload(e) {
            e2(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = e, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null);
        }
        _notifyReloadListener(e) {
            this.reloadListener ? this.reloadListener(e) : this.reloadUserInfo = e;
        }
        _startProactiveRefresh() {
            this.proactiveRefresh._start();
        }
        _stopProactiveRefresh() {
            this.proactiveRefresh._stop();
        }
        async _updateTokensIfNecessary(e, t = !1) {
            let r = !1;
            e.idToken && e.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(e), r = !0), t && await tw(this), await this.auth._persistUserIfCurrent(this), r && this.auth._notifyListenersIfCurrent(this);
        }
        async delete() {
            if (eR(this.auth.app)) return Promise.reject(e0(this.auth));
            let e = await this.getIdToken();
            return await ty(this, th(this.auth, {
                idToken: e
            })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
        }
        toJSON() {
            return Object.assign(Object.assign({
                uid: this.uid,
                email: this.email || void 0,
                emailVerified: this.emailVerified,
                displayName: this.displayName || void 0,
                isAnonymous: this.isAnonymous,
                photoURL: this.photoURL || void 0,
                phoneNumber: this.phoneNumber || void 0,
                tenantId: this.tenantId || void 0,
                providerData: this.providerData.map((e)=>Object.assign({}, e)),
                stsTokenManager: this.stsTokenManager.toJSON(),
                _redirectEventId: this._redirectEventId
            }, this.metadata.toJSON()), {
                apiKey: this.auth.config.apiKey,
                appName: this.auth.name
            });
        }
        get refreshToken() {
            return this.stsTokenManager.refreshToken || "";
        }
        static _fromJSON(e, t) {
            var r, i, n, s, a, o, l, c;
            let u = null !== (r = t.displayName) && void 0 !== r ? r : void 0, h = null !== (i = t.email) && void 0 !== i ? i : void 0, d = null !== (n = t.phoneNumber) && void 0 !== n ? n : void 0, p = null !== (s = t.photoURL) && void 0 !== s ? s : void 0, f = null !== (a = t.tenantId) && void 0 !== a ? a : void 0, m = null !== (o = t._redirectEventId) && void 0 !== o ? o : void 0, g = null !== (l = t.createdAt) && void 0 !== l ? l : void 0, v = null !== (c = t.lastLoginAt) && void 0 !== c ? c : void 0, { uid: y, emailVerified: _, isAnonymous: I, providerData: w, stsTokenManager: b } = t;
            e2(y && b, e, "internal-error");
            let E = tk.fromJSON(this.name, b);
            e2("string" == typeof y, e, "internal-error"), tC(u, e.name), tC(h, e.name), e2("boolean" == typeof _, e, "internal-error"), e2("boolean" == typeof I, e, "internal-error"), tC(d, e.name), tC(p, e.name), tC(f, e.name), tC(m, e.name), tC(g, e.name), tC(v, e.name);
            let T = new tO({
                uid: y,
                auth: e,
                email: h,
                emailVerified: _,
                displayName: u,
                isAnonymous: I,
                photoURL: p,
                phoneNumber: d,
                tenantId: f,
                stsTokenManager: E,
                createdAt: g,
                lastLoginAt: v
            });
            return w && Array.isArray(w) && (T.providerData = w.map((e)=>Object.assign({}, e))), m && (T._redirectEventId = m), T;
        }
        static async _fromIdTokenResponse(e, t, r = !1) {
            let i = new tk;
            i.updateFromServerResponse(t);
            let n = new tO({
                uid: t.localId,
                auth: e,
                stsTokenManager: i,
                isAnonymous: r
            });
            return await tw(n), n;
        }
        static async _fromGetAccountInfoResponse(e, t, r) {
            let i = t.users[0];
            e2(void 0 !== i.localId, "internal-error");
            let n = void 0 !== i.providerUserInfo ? tE(i.providerUserInfo) : [], s = !(i.email && i.passwordHash) && !(null == n ? void 0 : n.length), a = new tk;
            a.updateFromIdToken(r);
            let o = new tO({
                uid: i.localId,
                auth: e,
                stsTokenManager: a,
                isAnonymous: s
            });
            return Object.assign(o, {
                uid: i.localId,
                displayName: i.displayName || null,
                photoURL: i.photoUrl || null,
                email: i.email || null,
                emailVerified: i.emailVerified || !1,
                phoneNumber: i.phoneNumber || null,
                tenantId: i.tenantId || null,
                providerData: n,
                metadata: new tI(i.createdAt, i.lastLoginAt),
                isAnonymous: !(i.email && i.passwordHash) && !(null == n ? void 0 : n.length)
            }), o;
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    let tP = new Map;
    function tR(e) {
        var t, r;
        t = "Expected a class definition", e instanceof Function || e3(t);
        let i = tP.get(e);
        return i ? (r = "Instance stored in cache mismatched with class", i instanceof e || e3(r)) : (i = new e, tP.set(e, i)), i;
    } /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class tA {
        constructor(){
            this.type = "NONE", this.storage = {};
        }
        async _isAvailable() {
            return !0;
        }
        async _set(e, t) {
            this.storage[e] = t;
        }
        async _get(e) {
            let t = this.storage[e];
            return void 0 === t ? null : t;
        }
        async _remove(e) {
            delete this.storage[e];
        }
        _addListener(e, t) {}
        _removeListener(e, t) {}
    } /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    function tN(e, t, r) {
        return `firebase:${e}:${t}:${r}`;
    }
    tA.type = "NONE";
    class tD {
        constructor(e, t, r){
            this.persistence = e, this.auth = t, this.userKey = r;
            let { config: i, name: n } = this.auth;
            this.fullUserKey = tN(this.userKey, i.apiKey, n), this.fullPersistenceKey = tN("persistence", i.apiKey, n), this.boundEventHandler = t._onStorageEvent.bind(t), this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
        }
        setCurrentUser(e) {
            return this.persistence._set(this.fullUserKey, e.toJSON());
        }
        async getCurrentUser() {
            let e = await this.persistence._get(this.fullUserKey);
            return e ? tO._fromJSON(this.auth, e) : null;
        }
        removeCurrentUser() {
            return this.persistence._remove(this.fullUserKey);
        }
        savePersistenceForRedirect() {
            return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
        }
        async setPersistence(e) {
            if (this.persistence === e) return;
            let t = await this.getCurrentUser();
            if (await this.removeCurrentUser(), this.persistence = e, t) return this.setCurrentUser(t);
        }
        delete() {
            this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
        }
        static async create(e, t, r = "authUser") {
            if (!t.length) return new tD(tR(tA), e, r);
            let i = (await Promise.all(t.map(async (e)=>{
                if (await e._isAvailable()) return e;
            }))).filter((e)=>e), n = i[0] || tR(tA), s = tN(r, e.config.apiKey, e.name), a = null;
            for (let r of t)try {
                let t = await r._get(s);
                if (t) {
                    let i = tO._fromJSON(e, t);
                    r !== n && (a = i), n = r;
                    break;
                }
            } catch (e) {}
            let o = i.filter((e)=>e._shouldAllowMigration);
            return n._shouldAllowMigration && o.length && (n = o[0], a && await n._set(s, a.toJSON()), await Promise.all(t.map(async (e)=>{
                if (e !== n) try {
                    await e._remove(s);
                } catch (e) {}
            }))), new tD(n, e, r);
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    function tL(e) {
        let t = e.toLowerCase();
        if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera";
        {
            if (tF(t)) return "IEMobile";
            if (t.includes("msie") || t.includes("trident/")) return "IE";
            if (t.includes("edge/")) return "Edge";
            if (tM(t)) return "Firefox";
            if (t.includes("silk/")) return "Silk";
            if (tj(t)) return "Blackberry";
            if (tH(t)) return "Webos";
            if (tU(t)) return "Safari";
            if ((t.includes("chrome/") || tx(t)) && !t.includes("edge/")) return "Chrome";
            if (tV(t)) return "Android";
            let r = e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);
            if ((null == r ? void 0 : r.length) === 2) return r[1];
        }
        return "Other";
    }
    function tM(e = x()) {
        return /firefox\//i.test(e);
    }
    function tU(e = x()) {
        let t = e.toLowerCase();
        return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android");
    }
    function tx(e = x()) {
        return /crios\//i.test(e);
    }
    function tF(e = x()) {
        return /iemobile/i.test(e);
    }
    function tV(e = x()) {
        return /android/i.test(e);
    }
    function tj(e = x()) {
        return /blackberry/i.test(e);
    }
    function tH(e = x()) {
        return /webos/i.test(e);
    }
    function tB(e = x()) {
        return /iphone|ipad|ipod/i.test(e) || /macintosh/i.test(e) && /mobile/i.test(e);
    }
    function t$(e = x()) {
        return tB(e) || tV(e) || tH(e) || tj(e) || /windows phone/i.test(e) || tF(e);
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    function tz(e, t = []) {
        let r;
        switch(e){
            case "Browser":
                r = tL(x());
                break;
            case "Worker":
                r = `${tL(x())}-${e}`;
                break;
            default:
                r = e;
        }
        let i = t.length ? t.join(",") : "FirebaseCore-web";
        return `${r}/JsCore/${eD}/${i}`;
    } /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class tW {
        constructor(e){
            this.auth = e, this.queue = [];
        }
        pushCallback(e, t) {
            let r = (t)=>new Promise((r, i)=>{
                    try {
                        let i = e(t);
                        r(i);
                    } catch (e) {
                        i(e);
                    }
                });
            r.onAbort = t, this.queue.push(r);
            let i = this.queue.length - 1;
            return ()=>{
                this.queue[i] = ()=>Promise.resolve();
            };
        }
        async runMiddleware(e) {
            if (this.auth.currentUser === e) return;
            let t = [];
            try {
                for (let r of this.queue)await r(e), r.onAbort && t.push(r.onAbort);
            } catch (e) {
                for (let e of (t.reverse(), t))try {
                    e();
                } catch (e) {}
                throw this.auth._errorFactory.create("login-blocked", {
                    originalMessage: null == e ? void 0 : e.message
                });
            }
        }
    } /**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    async function tq(e, t = {}) {
        return tr(e, "GET", "/v2/passwordPolicy", tt(e, t));
    }
    class tK {
        constructor(e){
            var t, r, i, n;
            let s = e.customStrengthOptions;
            this.customStrengthOptions = {}, this.customStrengthOptions.minPasswordLength = null !== (t = s.minPasswordLength) && void 0 !== t ? t : 6, s.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = s.maxPasswordLength), void 0 !== s.containsLowercaseCharacter && (this.customStrengthOptions.containsLowercaseLetter = s.containsLowercaseCharacter), void 0 !== s.containsUppercaseCharacter && (this.customStrengthOptions.containsUppercaseLetter = s.containsUppercaseCharacter), void 0 !== s.containsNumericCharacter && (this.customStrengthOptions.containsNumericCharacter = s.containsNumericCharacter), void 0 !== s.containsNonAlphanumericCharacter && (this.customStrengthOptions.containsNonAlphanumericCharacter = s.containsNonAlphanumericCharacter), this.enforcementState = e.enforcementState, "ENFORCEMENT_STATE_UNSPECIFIED" === this.enforcementState && (this.enforcementState = "OFF"), this.allowedNonAlphanumericCharacters = null !== (i = null === (r = e.allowedNonAlphanumericCharacters) || void 0 === r ? void 0 : r.join("")) && void 0 !== i ? i : "", this.forceUpgradeOnSignin = null !== (n = e.forceUpgradeOnSignin) && void 0 !== n && n, this.schemaVersion = e.schemaVersion;
        }
        validatePassword(e) {
            var t, r, i, n, s, a;
            let o = {
                isValid: !0,
                passwordPolicy: this
            };
            return this.validatePasswordLengthOptions(e, o), this.validatePasswordCharacterOptions(e, o), o.isValid && (o.isValid = null === (t = o.meetsMinPasswordLength) || void 0 === t || t), o.isValid && (o.isValid = null === (r = o.meetsMaxPasswordLength) || void 0 === r || r), o.isValid && (o.isValid = null === (i = o.containsLowercaseLetter) || void 0 === i || i), o.isValid && (o.isValid = null === (n = o.containsUppercaseLetter) || void 0 === n || n), o.isValid && (o.isValid = null === (s = o.containsNumericCharacter) || void 0 === s || s), o.isValid && (o.isValid = null === (a = o.containsNonAlphanumericCharacter) || void 0 === a || a), o;
        }
        validatePasswordLengthOptions(e, t) {
            let r = this.customStrengthOptions.minPasswordLength, i = this.customStrengthOptions.maxPasswordLength;
            r && (t.meetsMinPasswordLength = e.length >= r), i && (t.meetsMaxPasswordLength = e.length <= i);
        }
        validatePasswordCharacterOptions(e, t) {
            let r;
            this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
            for(let i = 0; i < e.length; i++)r = e.charAt(i), this.updatePasswordCharacterOptionsStatuses(t, r >= "a" && r <= "z", r >= "A" && r <= "Z", r >= "0" && r <= "9", this.allowedNonAlphanumericCharacters.includes(r));
        }
        updatePasswordCharacterOptionsStatuses(e, t, r, i, n) {
            this.customStrengthOptions.containsLowercaseLetter && (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)), this.customStrengthOptions.containsUppercaseLetter && (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)), this.customStrengthOptions.containsNumericCharacter && (e.containsNumericCharacter || (e.containsNumericCharacter = i)), this.customStrengthOptions.containsNonAlphanumericCharacter && (e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = n));
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class tG {
        constructor(e, t, r, i){
            this.app = e, this.heartbeatServiceProvider = t, this.appCheckServiceProvider = r, this.config = i, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new tJ(this), this.idTokenSubscription = new tJ(this), this.beforeStateQueue = new tW(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = eG, this._agentRecaptchaConfig = null, this._tenantRecaptchaConfigs = {}, this._projectPasswordPolicy = null, this._tenantPasswordPolicies = {}, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
                appVerificationDisabledForTesting: !1
            }, this.frameworks = [], this.name = e.name, this.clientVersion = i.sdkClientVersion;
        }
        _initializeWithPersistence(e, t) {
            return t && (this._popupRedirectResolver = tR(t)), this._initializationPromise = this.queue(async ()=>{
                var r, i;
                if (!this._deleted && (this.persistenceManager = await tD.create(this, e), !this._deleted)) {
                    if (null === (r = this._popupRedirectResolver) || void 0 === r ? void 0 : r._shouldInitProactively) try {
                        await this._popupRedirectResolver._initialize(this);
                    } catch (e) {}
                    await this.initializeCurrentUser(t), this.lastNotifiedUid = (null === (i = this.currentUser) || void 0 === i ? void 0 : i.uid) || null, this._deleted || (this._isInitialized = !0);
                }
            }), this._initializationPromise;
        }
        async _onStorageEvent() {
            if (this._deleted) return;
            let e = await this.assertedPersistence.getCurrentUser();
            if (this.currentUser || e) {
                if (this.currentUser && e && this.currentUser.uid === e.uid) {
                    this._currentUser._assign(e), await this.currentUser.getIdToken();
                    return;
                }
                await this._updateCurrentUser(e, !0);
            }
        }
        async initializeCurrentUserFromIdToken(e) {
            try {
                let t = await td(this, {
                    idToken: e
                }), r = await tO._fromGetAccountInfoResponse(this, t, e);
                await this.directlySetCurrentUser(r);
            } catch (e) {
                console.warn("FirebaseServerApp could not login user with provided authIdToken: ", e), await this.directlySetCurrentUser(null);
            }
        }
        async initializeCurrentUser(e) {
            var t;
            if (eR(this.app)) {
                let e = this.app.settings.authIdToken;
                return e ? new Promise((t)=>{
                    setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t, t));
                }) : this.directlySetCurrentUser(null);
            }
            let r = await this.assertedPersistence.getCurrentUser(), i = r, n = !1;
            if (e && this.config.authDomain) {
                await this.getOrInitRedirectPersistenceManager();
                let r = null === (t = this.redirectUser) || void 0 === t ? void 0 : t._redirectEventId, s = null == i ? void 0 : i._redirectEventId, a = await this.tryRedirectSignIn(e);
                (!r || r === s) && (null == a ? void 0 : a.user) && (i = a.user, n = !0);
            }
            if (!i) return this.directlySetCurrentUser(null);
            if (!i._redirectEventId) {
                if (n) try {
                    await this.beforeStateQueue.runMiddleware(i);
                } catch (e) {
                    i = r, this._popupRedirectResolver._overrideRedirectResult(this, ()=>Promise.reject(e));
                }
                return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null);
            }
            return (e2(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId) ? this.directlySetCurrentUser(i) : this.reloadAndSetCurrentUserOrClear(i);
        }
        async tryRedirectSignIn(e) {
            let t = null;
            try {
                t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
            } catch (e) {
                await this._setRedirectUser(null);
            }
            return t;
        }
        async reloadAndSetCurrentUserOrClear(e) {
            try {
                await tw(e);
            } catch (e) {
                if ((null == e ? void 0 : e.code) !== "auth/network-request-failed") return this.directlySetCurrentUser(null);
            }
            return this.directlySetCurrentUser(e);
        }
        useDeviceLanguage() {
            this.languageCode = function() {
                if ("undefined" == typeof navigator) return null;
                let e = navigator;
                return e.languages && e.languages[0] || e.language || null;
            }();
        }
        async _delete() {
            this._deleted = !0;
        }
        async updateCurrentUser(e) {
            if (eR(this.app)) return Promise.reject(e0(this));
            let t = e ? G(e) : null;
            return t && e2(t.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(t && t._clone(this));
        }
        async _updateCurrentUser(e, t = !1) {
            if (!this._deleted) return e && e2(this.tenantId === e.tenantId, this, "tenant-id-mismatch"), t || await this.beforeStateQueue.runMiddleware(e), this.queue(async ()=>{
                await this.directlySetCurrentUser(e), this.notifyAuthListeners();
            });
        }
        async signOut() {
            return eR(this.app) ? Promise.reject(e0(this)) : (await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0));
        }
        setPersistence(e) {
            return eR(this.app) ? Promise.reject(e0(this)) : this.queue(async ()=>{
                await this.assertedPersistence.setPersistence(tR(e));
            });
        }
        _getRecaptchaConfig() {
            return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
        }
        async validatePassword(e) {
            this._getPasswordPolicyInternal() || await this._updatePasswordPolicy();
            let t = this._getPasswordPolicyInternal();
            return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {})) : t.validatePassword(e);
        }
        _getPasswordPolicyInternal() {
            return null === this.tenantId ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId];
        }
        async _updatePasswordPolicy() {
            let e = new tK(await tq(this));
            null === this.tenantId ? this._projectPasswordPolicy = e : this._tenantPasswordPolicies[this.tenantId] = e;
        }
        _getPersistence() {
            return this.assertedPersistence.persistence.type;
        }
        _updateErrorMap(e) {
            this._errorFactory = new V("auth", "Firebase", e());
        }
        onAuthStateChanged(e, t, r) {
            return this.registerStateListener(this.authStateSubscription, e, t, r);
        }
        beforeAuthStateChanged(e, t) {
            return this.beforeStateQueue.pushCallback(e, t);
        }
        onIdTokenChanged(e, t, r) {
            return this.registerStateListener(this.idTokenSubscription, e, t, r);
        }
        authStateReady() {
            return new Promise((e, t)=>{
                if (this.currentUser) e();
                else {
                    let r = this.onAuthStateChanged(()=>{
                        r(), e();
                    }, t);
                }
            });
        }
        async revokeAccessToken(e) {
            if (this.currentUser) {
                let t = {
                    providerId: "apple.com",
                    tokenType: "ACCESS_TOKEN",
                    token: e,
                    idToken: await this.currentUser.getIdToken()
                };
                null != this.tenantId && (t.tenantId = this.tenantId), await tS(this, t);
            }
        }
        toJSON() {
            var e;
            return {
                apiKey: this.config.apiKey,
                authDomain: this.config.authDomain,
                appName: this.name,
                currentUser: null === (e = this._currentUser) || void 0 === e ? void 0 : e.toJSON()
            };
        }
        async _setRedirectUser(e, t) {
            let r = await this.getOrInitRedirectPersistenceManager(t);
            return null === e ? r.removeCurrentUser() : r.setCurrentUser(e);
        }
        async getOrInitRedirectPersistenceManager(e) {
            if (!this.redirectPersistenceManager) {
                let t = e && tR(e) || this._popupRedirectResolver;
                e2(t, this, "argument-error"), this.redirectPersistenceManager = await tD.create(this, [
                    tR(t._redirectPersistence)
                ], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
            }
            return this.redirectPersistenceManager;
        }
        async _redirectUserForId(e) {
            var t, r;
            return (this._isInitialized && await this.queue(async ()=>{}), (null === (t = this._currentUser) || void 0 === t ? void 0 : t._redirectEventId) === e) ? this._currentUser : (null === (r = this.redirectUser) || void 0 === r ? void 0 : r._redirectEventId) === e ? this.redirectUser : null;
        }
        async _persistUserIfCurrent(e) {
            if (e === this.currentUser) return this.queue(async ()=>this.directlySetCurrentUser(e));
        }
        _notifyListenersIfCurrent(e) {
            e === this.currentUser && this.notifyAuthListeners();
        }
        _key() {
            return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
        }
        _startProactiveRefresh() {
            this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh();
        }
        _stopProactiveRefresh() {
            this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh();
        }
        get _currentUser() {
            return this.currentUser;
        }
        notifyAuthListeners() {
            var e, t;
            if (!this._isInitialized) return;
            this.idTokenSubscription.next(this.currentUser);
            let r = null !== (t = null === (e = this.currentUser) || void 0 === e ? void 0 : e.uid) && void 0 !== t ? t : null;
            this.lastNotifiedUid !== r && (this.lastNotifiedUid = r, this.authStateSubscription.next(this.currentUser));
        }
        registerStateListener(e, t, r, i) {
            if (this._deleted) return ()=>{};
            let n = "function" == typeof t ? t : t.next.bind(t), s = !1, a = this._isInitialized ? Promise.resolve() : this._initializationPromise;
            if (e2(a, this, "internal-error"), a.then(()=>{
                s || n(this.currentUser);
            }), "function" == typeof t) {
                let n = e.addObserver(t, r, i);
                return ()=>{
                    s = !0, n();
                };
            }
            {
                let r = e.addObserver(t);
                return ()=>{
                    s = !0, r();
                };
            }
        }
        async directlySetCurrentUser(e) {
            this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(), e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(), this.currentUser = e, e ? await this.assertedPersistence.setCurrentUser(e) : await this.assertedPersistence.removeCurrentUser();
        }
        queue(e) {
            return this.operations = this.operations.then(e, e), this.operations;
        }
        get assertedPersistence() {
            return e2(this.persistenceManager, this, "internal-error"), this.persistenceManager;
        }
        _logFramework(e) {
            !e || this.frameworks.includes(e) || (this.frameworks.push(e), this.frameworks.sort(), this.clientVersion = tz(this.config.clientPlatform, this._getFrameworks()));
        }
        _getFrameworks() {
            return this.frameworks;
        }
        async _getAdditionalHeaders() {
            var e;
            let t = {
                "X-Client-Version": this.clientVersion
            };
            this.app.options.appId && (t["X-Firebase-gmpid"] = this.app.options.appId);
            let r = await (null === (e = this.heartbeatServiceProvider.getImmediate({
                optional: !0
            })) || void 0 === e ? void 0 : e.getHeartbeatsHeader());
            r && (t["X-Firebase-Client"] = r);
            let i = await this._getAppCheckToken();
            return i && (t["X-Firebase-AppCheck"] = i), t;
        }
        async _getAppCheckToken() {
            var e;
            let t = await (null === (e = this.appCheckServiceProvider.getImmediate({
                optional: !0
            })) || void 0 === e ? void 0 : e.getToken());
            return (null == t ? void 0 : t.error) && function(e, ...t) {
                eJ.logLevel <= l.WARN && eJ.warn(`Auth (${eD}): ${e}`, ...t);
            }(`Error while retrieving App Check token: ${t.error}`), null == t ? void 0 : t.token;
        }
    }
    class tJ {
        constructor(e){
            this.auth = e, this.observer = null, this.addObserver = function(e, t) {
                let r = new q(e, void 0);
                return r.subscribe.bind(r);
            }((e)=>this.observer = e);
        }
        get next() {
            return e2(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer);
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    let tY = {
        async loadJS () {
            throw Error("Unable to load external scripts");
        },
        recaptchaV2Script: "",
        recaptchaEnterpriseScript: "",
        gapiScript: ""
    };
    function tX(e) {
        return `__${e}${Math.floor(1e6 * Math.random())}`;
    }
    class tQ {
        constructor(e){
            this.type = "recaptcha-enterprise", this.auth = G(e);
        }
        async verify(e = "verify", t = !1) {
            async function r(e) {
                if (!t) {
                    if (null == e.tenantId && null != e._agentRecaptchaConfig) return e._agentRecaptchaConfig.siteKey;
                    if (null != e.tenantId && void 0 !== e._tenantRecaptchaConfigs[e.tenantId]) return e._tenantRecaptchaConfigs[e.tenantId].siteKey;
                }
                return new Promise(async (t, r)=>{
                    tu(e, {
                        clientType: "CLIENT_TYPE_WEB",
                        version: "RECAPTCHA_ENTERPRISE"
                    }).then((i)=>{
                        if (void 0 === i.recaptchaKey) r(Error("recaptcha Enterprise site key undefined"));
                        else {
                            let r = new tc(i);
                            return null == e.tenantId ? e._agentRecaptchaConfig = r : e._tenantRecaptchaConfigs[e.tenantId] = r, t(r.siteKey);
                        }
                    }).catch((e)=>{
                        r(e);
                    });
                });
            }
            function i(t, r, i) {
                let n = window.grecaptcha;
                tl(n) ? n.enterprise.ready(()=>{
                    n.enterprise.execute(t, {
                        action: e
                    }).then((e)=>{
                        r(e);
                    }).catch(()=>{
                        r("NO_RECAPTCHA");
                    });
                }) : i(Error("No reCAPTCHA enterprise script loaded."));
            }
            return new Promise((e, n)=>{
                r(this.auth).then((r)=>{
                    if (!t && tl(window.grecaptcha)) i(r, e, n);
                    else {
                        var s;
                        if ("undefined" == typeof window) {
                            n(Error("RecaptchaVerifier is only supported in browser"));
                            return;
                        }
                        let t = tY.recaptchaEnterpriseScript;
                        0 !== t.length && (t += r), (s = t, tY.loadJS(s)).then(()=>{
                            i(r, e, n);
                        }).catch((e)=>{
                            n(e);
                        });
                    }
                }).catch((e)=>{
                    n(e);
                });
            });
        }
    }
    async function tZ(e, t, r, i = !1) {
        let n;
        let s = new tQ(e);
        try {
            n = await s.verify(r);
        } catch (e) {
            n = await s.verify(r, !0);
        }
        let a = Object.assign({}, t);
        return i ? Object.assign(a, {
            captchaResp: n
        }) : Object.assign(a, {
            captchaResponse: n
        }), Object.assign(a, {
            clientType: "CLIENT_TYPE_WEB"
        }), Object.assign(a, {
            recaptchaVersion: "RECAPTCHA_ENTERPRISE"
        }), a;
    }
    async function t0(e, t, r, i) {
        var n;
        if (null === (n = e._getRecaptchaConfig()) || void 0 === n || !n.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) return i(e, t).catch(async (n)=>{
            if ("auth/missing-recaptcha-token" !== n.code) return Promise.reject(n);
            {
                console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
                let n = await tZ(e, t, r, "getOobCode" === r);
                return i(e, n);
            }
        });
        {
            let n = await tZ(e, t, r, "getOobCode" === r);
            return i(e, n);
        }
    }
    function t1(e) {
        let t = e.indexOf(":");
        return t < 0 ? "" : e.substr(0, t + 1);
    }
    function t2(e) {
        if (!e) return null;
        let t = Number(e);
        return isNaN(t) ? null : t;
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class t3 {
        constructor(e, t){
            this.providerId = e, this.signInMethod = t;
        }
        toJSON() {
            return e3("not implemented");
        }
        _getIdTokenResponse(e) {
            return e3("not implemented");
        }
        _linkToIdToken(e, t) {
            return e3("not implemented");
        }
        _getReauthenticationResolver(e) {
            return e3("not implemented");
        }
    }
    async function t6(e, t) {
        return tr(e, "POST", "/v1/accounts:signUp", t);
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    async function t4(e, t) {
        return tn(e, "POST", "/v1/accounts:signInWithPassword", tt(e, t));
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    async function t5(e, t) {
        return tn(e, "POST", "/v1/accounts:signInWithEmailLink", tt(e, t));
    }
    async function t8(e, t) {
        return tn(e, "POST", "/v1/accounts:signInWithEmailLink", tt(e, t));
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class t9 extends t3 {
        constructor(e, t, r, i = null){
            super("password", r), this._email = e, this._password = t, this._tenantId = i;
        }
        static _fromEmailAndPassword(e, t) {
            return new t9(e, t, "password");
        }
        static _fromEmailAndCode(e, t, r = null) {
            return new t9(e, t, "emailLink", r);
        }
        toJSON() {
            return {
                email: this._email,
                password: this._password,
                signInMethod: this.signInMethod,
                tenantId: this._tenantId
            };
        }
        static fromJSON(e) {
            let t = "string" == typeof e ? JSON.parse(e) : e;
            if ((null == t ? void 0 : t.email) && (null == t ? void 0 : t.password)) {
                if ("password" === t.signInMethod) return this._fromEmailAndPassword(t.email, t.password);
                if ("emailLink" === t.signInMethod) return this._fromEmailAndCode(t.email, t.password, t.tenantId);
            }
            return null;
        }
        async _getIdTokenResponse(e) {
            switch(this.signInMethod){
                case "password":
                    return t0(e, {
                        returnSecureToken: !0,
                        email: this._email,
                        password: this._password,
                        clientType: "CLIENT_TYPE_WEB"
                    }, "signInWithPassword", t4);
                case "emailLink":
                    return t5(e, {
                        email: this._email,
                        oobCode: this._password
                    });
                default:
                    eX(e, "internal-error");
            }
        }
        async _linkToIdToken(e, t) {
            switch(this.signInMethod){
                case "password":
                    return t0(e, {
                        idToken: t,
                        returnSecureToken: !0,
                        email: this._email,
                        password: this._password,
                        clientType: "CLIENT_TYPE_WEB"
                    }, "signUpPassword", t6);
                case "emailLink":
                    return t8(e, {
                        idToken: t,
                        email: this._email,
                        oobCode: this._password
                    });
                default:
                    eX(e, "internal-error");
            }
        }
        _getReauthenticationResolver(e) {
            return this._getIdTokenResponse(e);
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    async function t7(e, t) {
        return tn(e, "POST", "/v1/accounts:signInWithIdp", tt(e, t));
    }
    class re extends t3 {
        constructor(){
            super(...arguments), this.pendingToken = null;
        }
        static _fromParams(e) {
            let t = new re(e.providerId, e.signInMethod);
            return e.idToken || e.accessToken ? (e.idToken && (t.idToken = e.idToken), e.accessToken && (t.accessToken = e.accessToken), e.nonce && !e.pendingToken && (t.nonce = e.nonce), e.pendingToken && (t.pendingToken = e.pendingToken)) : e.oauthToken && e.oauthTokenSecret ? (t.accessToken = e.oauthToken, t.secret = e.oauthTokenSecret) : eX("argument-error"), t;
        }
        toJSON() {
            return {
                idToken: this.idToken,
                accessToken: this.accessToken,
                secret: this.secret,
                nonce: this.nonce,
                pendingToken: this.pendingToken,
                providerId: this.providerId,
                signInMethod: this.signInMethod
            };
        }
        static fromJSON(e) {
            let t = "string" == typeof e ? JSON.parse(e) : e, { providerId: r, signInMethod: i } = t, n = eq(t, [
                "providerId",
                "signInMethod"
            ]);
            if (!r || !i) return null;
            let s = new re(r, i);
            return s.idToken = n.idToken || void 0, s.accessToken = n.accessToken || void 0, s.secret = n.secret, s.nonce = n.nonce, s.pendingToken = n.pendingToken || null, s;
        }
        _getIdTokenResponse(e) {
            return t7(e, this.buildRequest());
        }
        _linkToIdToken(e, t) {
            let r = this.buildRequest();
            return r.idToken = t, t7(e, r);
        }
        _getReauthenticationResolver(e) {
            let t = this.buildRequest();
            return t.autoCreate = !1, t7(e, t);
        }
        buildRequest() {
            let e = {
                requestUri: "http://localhost",
                returnSecureToken: !0
            };
            if (this.pendingToken) e.pendingToken = this.pendingToken;
            else {
                let t = {};
                this.idToken && (t.id_token = this.idToken), this.accessToken && (t.access_token = this.accessToken), this.secret && (t.oauth_token_secret = this.secret), t.providerId = this.providerId, this.nonce && !this.pendingToken && (t.nonce = this.nonce), e.postBody = $(t);
            }
            return e;
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    async function rt(e, t) {
        return tr(e, "POST", "/v1/accounts:sendVerificationCode", tt(e, t));
    }
    async function rr(e, t) {
        return tn(e, "POST", "/v1/accounts:signInWithPhoneNumber", tt(e, t));
    }
    async function ri(e, t) {
        let r = await tn(e, "POST", "/v1/accounts:signInWithPhoneNumber", tt(e, t));
        if (r.temporaryProof) throw to(e, "account-exists-with-different-credential", r);
        return r;
    }
    let rn = {
        USER_NOT_FOUND: "user-not-found"
    };
    async function rs(e, t) {
        return tn(e, "POST", "/v1/accounts:signInWithPhoneNumber", tt(e, Object.assign(Object.assign({}, t), {
            operation: "REAUTH"
        })), rn);
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class ra extends t3 {
        constructor(e){
            super("phone", "phone"), this.params = e;
        }
        static _fromVerification(e, t) {
            return new ra({
                verificationId: e,
                verificationCode: t
            });
        }
        static _fromTokenResponse(e, t) {
            return new ra({
                phoneNumber: e,
                temporaryProof: t
            });
        }
        _getIdTokenResponse(e) {
            return rr(e, this._makeVerificationRequest());
        }
        _linkToIdToken(e, t) {
            return ri(e, Object.assign({
                idToken: t
            }, this._makeVerificationRequest()));
        }
        _getReauthenticationResolver(e) {
            return rs(e, this._makeVerificationRequest());
        }
        _makeVerificationRequest() {
            let { temporaryProof: e, phoneNumber: t, verificationId: r, verificationCode: i } = this.params;
            return e && t ? {
                temporaryProof: e,
                phoneNumber: t
            } : {
                sessionInfo: r,
                code: i
            };
        }
        toJSON() {
            let e = {
                providerId: this.providerId
            };
            return this.params.phoneNumber && (e.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (e.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (e.verificationCode = this.params.verificationCode), this.params.verificationId && (e.verificationId = this.params.verificationId), e;
        }
        static fromJSON(e) {
            "string" == typeof e && (e = JSON.parse(e));
            let { verificationId: t, verificationCode: r, phoneNumber: i, temporaryProof: n } = e;
            return r || t || i || n ? new ra({
                verificationId: t,
                verificationCode: r,
                phoneNumber: i,
                temporaryProof: n
            }) : null;
        }
    }
    class ro {
        constructor(e){
            var t, r, i, n, s, a;
            let o = z(W(e)), l = null !== (t = o.apiKey) && void 0 !== t ? t : null, c = null !== (r = o.oobCode) && void 0 !== r ? r : null, u = /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e) {
                switch(e){
                    case "recoverEmail":
                        return "RECOVER_EMAIL";
                    case "resetPassword":
                        return "PASSWORD_RESET";
                    case "signIn":
                        return "EMAIL_SIGNIN";
                    case "verifyEmail":
                        return "VERIFY_EMAIL";
                    case "verifyAndChangeEmail":
                        return "VERIFY_AND_CHANGE_EMAIL";
                    case "revertSecondFactorAddition":
                        return "REVERT_SECOND_FACTOR_ADDITION";
                    default:
                        return null;
                }
            }(null !== (i = o.mode) && void 0 !== i ? i : null);
            e2(l && c && u, "argument-error"), this.apiKey = l, this.operation = u, this.code = c, this.continueUrl = null !== (n = o.continueUrl) && void 0 !== n ? n : null, this.languageCode = null !== (s = o.languageCode) && void 0 !== s ? s : null, this.tenantId = null !== (a = o.tenantId) && void 0 !== a ? a : null;
        }
        static parseLink(e) {
            let t = function(e) {
                let t = z(W(e)).link, r = t ? z(W(t)).deep_link_id : null, i = z(W(e)).deep_link_id;
                return (i ? z(W(i)).link : null) || i || r || t || e;
            }(e);
            try {
                return new ro(t);
            } catch (e) {
                return null;
            }
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class rl {
        constructor(){
            this.providerId = rl.PROVIDER_ID;
        }
        static credential(e, t) {
            return t9._fromEmailAndPassword(e, t);
        }
        static credentialWithLink(e, t) {
            let r = ro.parseLink(t);
            return e2(r, "argument-error"), t9._fromEmailAndCode(e, r.code, r.tenantId);
        }
    }
    rl.PROVIDER_ID = "password", rl.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", rl.EMAIL_LINK_SIGN_IN_METHOD = "emailLink"; /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class rc {
        constructor(e){
            this.providerId = e, this.defaultLanguageCode = null, this.customParameters = {};
        }
        setDefaultLanguage(e) {
            this.defaultLanguageCode = e;
        }
        setCustomParameters(e) {
            return this.customParameters = e, this;
        }
        getCustomParameters() {
            return this.customParameters;
        }
    } /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class ru extends rc {
        constructor(){
            super(...arguments), this.scopes = [];
        }
        addScope(e) {
            return this.scopes.includes(e) || this.scopes.push(e), this;
        }
        getScopes() {
            return [
                ...this.scopes
            ];
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class rh extends ru {
        constructor(){
            super("facebook.com");
        }
        static credential(e) {
            return re._fromParams({
                providerId: rh.PROVIDER_ID,
                signInMethod: rh.FACEBOOK_SIGN_IN_METHOD,
                accessToken: e
            });
        }
        static credentialFromResult(e) {
            return rh.credentialFromTaggedObject(e);
        }
        static credentialFromError(e) {
            return rh.credentialFromTaggedObject(e.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: e }) {
            if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
            try {
                return rh.credential(e.oauthAccessToken);
            } catch (e) {
                return null;
            }
        }
    }
    rh.FACEBOOK_SIGN_IN_METHOD = "facebook.com", rh.PROVIDER_ID = "facebook.com"; /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class rd extends ru {
        constructor(){
            super("google.com"), this.addScope("profile");
        }
        static credential(e, t) {
            return re._fromParams({
                providerId: rd.PROVIDER_ID,
                signInMethod: rd.GOOGLE_SIGN_IN_METHOD,
                idToken: e,
                accessToken: t
            });
        }
        static credentialFromResult(e) {
            return rd.credentialFromTaggedObject(e);
        }
        static credentialFromError(e) {
            return rd.credentialFromTaggedObject(e.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: e }) {
            if (!e) return null;
            let { oauthIdToken: t, oauthAccessToken: r } = e;
            if (!t && !r) return null;
            try {
                return rd.credential(t, r);
            } catch (e) {
                return null;
            }
        }
    }
    rd.GOOGLE_SIGN_IN_METHOD = "google.com", rd.PROVIDER_ID = "google.com"; /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class rp extends ru {
        constructor(){
            super("github.com");
        }
        static credential(e) {
            return re._fromParams({
                providerId: rp.PROVIDER_ID,
                signInMethod: rp.GITHUB_SIGN_IN_METHOD,
                accessToken: e
            });
        }
        static credentialFromResult(e) {
            return rp.credentialFromTaggedObject(e);
        }
        static credentialFromError(e) {
            return rp.credentialFromTaggedObject(e.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: e }) {
            if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
            try {
                return rp.credential(e.oauthAccessToken);
            } catch (e) {
                return null;
            }
        }
    }
    rp.GITHUB_SIGN_IN_METHOD = "github.com", rp.PROVIDER_ID = "github.com"; /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class rf extends ru {
        constructor(){
            super("twitter.com");
        }
        static credential(e, t) {
            return re._fromParams({
                providerId: rf.PROVIDER_ID,
                signInMethod: rf.TWITTER_SIGN_IN_METHOD,
                oauthToken: e,
                oauthTokenSecret: t
            });
        }
        static credentialFromResult(e) {
            return rf.credentialFromTaggedObject(e);
        }
        static credentialFromError(e) {
            return rf.credentialFromTaggedObject(e.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: e }) {
            if (!e) return null;
            let { oauthAccessToken: t, oauthTokenSecret: r } = e;
            if (!t || !r) return null;
            try {
                return rf.credential(t, r);
            } catch (e) {
                return null;
            }
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    async function rm(e, t) {
        return tn(e, "POST", "/v1/accounts:signUp", tt(e, t));
    }
    rf.TWITTER_SIGN_IN_METHOD = "twitter.com", rf.PROVIDER_ID = "twitter.com"; /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class rg {
        constructor(e){
            this.user = e.user, this.providerId = e.providerId, this._tokenResponse = e._tokenResponse, this.operationType = e.operationType;
        }
        static async _fromIdTokenResponse(e, t, r, i = !1) {
            return new rg({
                user: await tO._fromIdTokenResponse(e, r, i),
                providerId: rv(r),
                _tokenResponse: r,
                operationType: t
            });
        }
        static async _forOperation(e, t, r) {
            return await e._updateTokensIfNecessary(r, !0), new rg({
                user: e,
                providerId: rv(r),
                _tokenResponse: r,
                operationType: t
            });
        }
    }
    function rv(e) {
        return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class ry extends F {
        constructor(e, t, r, i){
            var n;
            super(t.code, t.message), this.operationType = r, this.user = i, Object.setPrototypeOf(this, ry.prototype), this.customData = {
                appName: e.name,
                tenantId: null !== (n = e.tenantId) && void 0 !== n ? n : void 0,
                _serverResponse: t.customData._serverResponse,
                operationType: r
            };
        }
        static _fromErrorAndOperation(e, t, r, i) {
            return new ry(e, t, r, i);
        }
    }
    function r_(e, t, r, i) {
        return ("reauthenticate" === t ? r._getReauthenticationResolver(e) : r._getIdTokenResponse(e)).catch((r)=>{
            if ("auth/multi-factor-auth-required" === r.code) throw ry._fromErrorAndOperation(e, r, t, i);
            throw r;
        });
    }
    async function rI(e, t, r = !1) {
        let i = await ty(e, t._linkToIdToken(e.auth, await e.getIdToken()), r);
        return rg._forOperation(e, "link", i);
    } /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    async function rw(e, t, r = !1) {
        let { auth: i } = e;
        if (eR(i.app)) return Promise.reject(e0(i));
        let n = "reauthenticate";
        try {
            let s = await ty(e, r_(i, n, t, e), r);
            e2(s.idToken, i, "internal-error");
            let a = tg(s.idToken);
            e2(a, i, "internal-error");
            let { sub: o } = a;
            return e2(e.uid === o, i, "user-mismatch"), rg._forOperation(e, n, s);
        } catch (e) {
            throw (null == e ? void 0 : e.code) === "auth/user-not-found" && eX(i, "user-mismatch"), e;
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    async function rb(e, t, r = !1) {
        if (eR(e.app)) return Promise.reject(e0(e));
        let i = "signIn", n = await r_(e, i, t), s = await rg._fromIdTokenResponse(e, i, n);
        return r || await e._updateCurrentUser(s.user), s;
    }
    async function rE(e, t) {
        return rb(G(e), t);
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    async function rT(e) {
        let t = G(e);
        t._getPasswordPolicyInternal() && await t._updatePasswordPolicy();
    }
    async function rS(e, t, r) {
        if (eR(e.app)) return Promise.reject(e0(e));
        let i = G(e), n = t0(i, {
            returnSecureToken: !0,
            email: t,
            password: r,
            clientType: "CLIENT_TYPE_WEB"
        }, "signUpPassword", rm), s = await n.catch((t)=>{
            throw "auth/password-does-not-meet-requirements" === t.code && rT(e), t;
        }), a = await rg._fromIdTokenResponse(i, "signIn", s);
        return await i._updateCurrentUser(a.user), a;
    }
    new WeakMap;
    let rk = "__sak"; /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class rC {
        constructor(e, t){
            this.storageRetriever = e, this.type = t;
        }
        _isAvailable() {
            try {
                if (!this.storage) return Promise.resolve(!1);
                return this.storage.setItem(rk, "1"), this.storage.removeItem(rk), Promise.resolve(!0);
            } catch (e) {
                return Promise.resolve(!1);
            }
        }
        _set(e, t) {
            return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
        }
        _get(e) {
            let t = this.storage.getItem(e);
            return Promise.resolve(t ? JSON.parse(t) : null);
        }
        _remove(e) {
            return this.storage.removeItem(e), Promise.resolve();
        }
        get storage() {
            return this.storageRetriever();
        }
    }
    class rO extends rC {
        constructor(){
            super(()=>window.localStorage, "LOCAL"), this.boundEventHandler = (e, t)=>this.onStorageEvent(e, t), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function() {
                let e = x();
                return tU(e) || tB(e);
            }() && function() {
                try {
                    return !!(window && window !== window.top);
                } catch (e) {
                    return !1;
                }
            }(), this.fallbackToPolling = t$(), this._shouldAllowMigration = !0;
        }
        forAllChangedKeys(e) {
            for (let t of Object.keys(this.listeners)){
                let r = this.storage.getItem(t), i = this.localCache[t];
                r !== i && e(t, i, r);
            }
        }
        onStorageEvent(e, t = !1) {
            if (!e.key) {
                this.forAllChangedKeys((e, t, r)=>{
                    this.notifyListeners(e, r);
                });
                return;
            }
            let r = e.key;
            if (t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
                let i = this.storage.getItem(r);
                if (e.newValue !== i) null !== e.newValue ? this.storage.setItem(r, e.newValue) : this.storage.removeItem(r);
                else if (this.localCache[r] === e.newValue && !t) return;
            }
            let i = ()=>{
                let e = this.storage.getItem(r);
                (t || this.localCache[r] !== e) && this.notifyListeners(r, e);
            }, n = this.storage.getItem(r);
            (function() {
                let e = x();
                return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
            })() && 10 === document.documentMode && n !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, 10) : i();
        }
        notifyListeners(e, t) {
            this.localCache[e] = t;
            let r = this.listeners[e];
            if (r) for (let e of Array.from(r))e(t ? JSON.parse(t) : t);
        }
        startPolling() {
            this.stopPolling(), this.pollTimer = setInterval(()=>{
                this.forAllChangedKeys((e, t, r)=>{
                    this.onStorageEvent(new StorageEvent("storage", {
                        key: e,
                        oldValue: t,
                        newValue: r
                    }), !0);
                });
            }, 1e3);
        }
        stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
        }
        attachListener() {
            window.addEventListener("storage", this.boundEventHandler);
        }
        detachListener() {
            window.removeEventListener("storage", this.boundEventHandler);
        }
        _addListener(e, t) {
            0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[e] || (this.listeners[e] = new Set, this.localCache[e] = this.storage.getItem(e)), this.listeners[e].add(t);
        }
        _removeListener(e, t) {
            this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling());
        }
        async _set(e, t) {
            await super._set(e, t), this.localCache[e] = JSON.stringify(t);
        }
        async _get(e) {
            let t = await super._get(e);
            return this.localCache[e] = JSON.stringify(t), t;
        }
        async _remove(e) {
            await super._remove(e), delete this.localCache[e];
        }
    }
    rO.type = "LOCAL"; /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class rP extends rC {
        constructor(){
            super(()=>window.sessionStorage, "SESSION");
        }
        _addListener(e, t) {}
        _removeListener(e, t) {}
    }
    rP.type = "SESSION"; /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class rR {
        constructor(e){
            this.eventTarget = e, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this);
        }
        static _getInstance(e) {
            let t = this.receivers.find((t)=>t.isListeningto(e));
            if (t) return t;
            let r = new rR(e);
            return this.receivers.push(r), r;
        }
        isListeningto(e) {
            return this.eventTarget === e;
        }
        async handleEvent(e) {
            let { eventId: t, eventType: r, data: i } = e.data, n = this.handlersMap[r];
            if (!(null == n ? void 0 : n.size)) return;
            e.ports[0].postMessage({
                status: "ack",
                eventId: t,
                eventType: r
            });
            let s = Array.from(n).map(async (t)=>t(e.origin, i)), a = await Promise.all(s.map(async (e)=>{
                try {
                    let t = await e;
                    return {
                        fulfilled: !0,
                        value: t
                    };
                } catch (e) {
                    return {
                        fulfilled: !1,
                        reason: e
                    };
                }
            }));
            e.ports[0].postMessage({
                status: "done",
                eventId: t,
                eventType: r,
                response: a
            });
        }
        _subscribe(e, t) {
            0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[e] || (this.handlersMap[e] = new Set), this.handlersMap[e].add(t);
        }
        _unsubscribe(e, t) {
            this.handlersMap[e] && t && this.handlersMap[e].delete(t), t && 0 !== this.handlersMap[e].size || delete this.handlersMap[e], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler);
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    function rA(e = "", t = 10) {
        let r = "";
        for(let e = 0; e < t; e++)r += Math.floor(10 * Math.random());
        return e + r;
    }
    rR.receivers = []; /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class rN {
        constructor(e){
            this.target = e, this.handlers = new Set;
        }
        removeMessageHandler(e) {
            e.messageChannel && (e.messageChannel.port1.removeEventListener("message", e.onMessage), e.messageChannel.port1.close()), this.handlers.delete(e);
        }
        async _send(e, t, r = 50) {
            let i, n;
            let s = "undefined" != typeof MessageChannel ? new MessageChannel : null;
            if (!s) throw Error("connection_unavailable");
            return new Promise((a, o)=>{
                let l = rA("", 20);
                s.port1.start();
                let c = setTimeout(()=>{
                    o(Error("unsupported_event"));
                }, r);
                n = {
                    messageChannel: s,
                    onMessage (e) {
                        if (e.data.eventId === l) switch(e.data.status){
                            case "ack":
                                clearTimeout(c), i = setTimeout(()=>{
                                    o(Error("timeout"));
                                }, 3e3);
                                break;
                            case "done":
                                clearTimeout(i), a(e.data.response);
                                break;
                            default:
                                clearTimeout(c), clearTimeout(i), o(Error("invalid_response"));
                        }
                    }
                }, this.handlers.add(n), s.port1.addEventListener("message", n.onMessage), this.target.postMessage({
                    eventType: e,
                    eventId: l,
                    data: t
                }, [
                    s.port2
                ]);
            }).finally(()=>{
                n && this.removeMessageHandler(n);
            });
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    function rD() {
        return window;
    } /**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    function rL() {
        return void 0 !== rD().WorkerGlobalScope && "function" == typeof rD().importScripts;
    }
    async function rM() {
        if (!(null == navigator ? void 0 : navigator.serviceWorker)) return null;
        try {
            return (await navigator.serviceWorker.ready).active;
        } catch (e) {
            return null;
        }
    } /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    let rU = "firebaseLocalStorageDb", rx = "firebaseLocalStorage", rF = "fbase_key";
    class rV {
        constructor(e){
            this.request = e;
        }
        toPromise() {
            return new Promise((e, t)=>{
                this.request.addEventListener("success", ()=>{
                    e(this.request.result);
                }), this.request.addEventListener("error", ()=>{
                    t(this.request.error);
                });
            });
        }
    }
    function rj(e, t) {
        return e.transaction([
            rx
        ], t ? "readwrite" : "readonly").objectStore(rx);
    }
    function rH() {
        let e = indexedDB.open(rU, 1);
        return new Promise((t, r)=>{
            e.addEventListener("error", ()=>{
                r(e.error);
            }), e.addEventListener("upgradeneeded", ()=>{
                let t = e.result;
                try {
                    t.createObjectStore(rx, {
                        keyPath: rF
                    });
                } catch (e) {
                    r(e);
                }
            }), e.addEventListener("success", async ()=>{
                let r = e.result;
                r.objectStoreNames.contains(rx) ? t(r) : (r.close(), await new rV(indexedDB.deleteDatabase(rU)).toPromise(), t(await rH()));
            });
        });
    }
    async function rB(e, t, r) {
        return new rV(rj(e, !0).put({
            [rF]: t,
            value: r
        })).toPromise();
    }
    async function r$(e, t) {
        let r = rj(e, !1).get(t), i = await new rV(r).toPromise();
        return void 0 === i ? null : i.value;
    }
    function rz(e, t) {
        return new rV(rj(e, !0).delete(t)).toPromise();
    }
    class rW {
        constructor(){
            this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(()=>{}, ()=>{});
        }
        async _openDb() {
            return this.db || (this.db = await rH()), this.db;
        }
        async _withRetries(e) {
            let t = 0;
            for(;;)try {
                let t = await this._openDb();
                return await e(t);
            } catch (e) {
                if (t++ > 3) throw e;
                this.db && (this.db.close(), this.db = void 0);
            }
        }
        async initializeServiceWorkerMessaging() {
            return rL() ? this.initializeReceiver() : this.initializeSender();
        }
        async initializeReceiver() {
            this.receiver = rR._getInstance(rL() ? self : null), this.receiver._subscribe("keyChanged", async (e, t)=>({
                    keyProcessed: (await this._poll()).includes(t.key)
                })), this.receiver._subscribe("ping", async (e, t)=>[
                    "keyChanged"
                ]);
        }
        async initializeSender() {
            var e, t;
            if (this.activeServiceWorker = await rM(), !this.activeServiceWorker) return;
            this.sender = new rN(this.activeServiceWorker);
            let r = await this.sender._send("ping", {}, 800);
            r && (null === (e = r[0]) || void 0 === e ? void 0 : e.fulfilled) && (null === (t = r[0]) || void 0 === t ? void 0 : t.value.includes("keyChanged")) && (this.serviceWorkerReceiverAvailable = !0);
        }
        async notifyServiceWorker(e) {
            var t;
            if (this.sender && this.activeServiceWorker && ((null === (t = null == navigator ? void 0 : navigator.serviceWorker) || void 0 === t ? void 0 : t.controller) || null) === this.activeServiceWorker) try {
                await this.sender._send("keyChanged", {
                    key: e
                }, this.serviceWorkerReceiverAvailable ? 800 : 50);
            } catch (e) {}
        }
        async _isAvailable() {
            try {
                if (!indexedDB) return !1;
                let e = await rH();
                return await rB(e, rk, "1"), await rz(e, rk), !0;
            } catch (e) {}
            return !1;
        }
        async _withPendingWrite(e) {
            this.pendingWrites++;
            try {
                await e();
            } finally{
                this.pendingWrites--;
            }
        }
        async _set(e, t) {
            return this._withPendingWrite(async ()=>(await this._withRetries((r)=>rB(r, e, t)), this.localCache[e] = t, this.notifyServiceWorker(e)));
        }
        async _get(e) {
            let t = await this._withRetries((t)=>r$(t, e));
            return this.localCache[e] = t, t;
        }
        async _remove(e) {
            return this._withPendingWrite(async ()=>(await this._withRetries((t)=>rz(t, e)), delete this.localCache[e], this.notifyServiceWorker(e)));
        }
        async _poll() {
            let e = await this._withRetries((e)=>new rV(rj(e, !1).getAll()).toPromise());
            if (!e || 0 !== this.pendingWrites) return [];
            let t = [], r = new Set;
            if (0 !== e.length) for (let { fbase_key: i, value: n } of e)r.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(n) && (this.notifyListeners(i, n), t.push(i));
            for (let e of Object.keys(this.localCache))this.localCache[e] && !r.has(e) && (this.notifyListeners(e, null), t.push(e));
            return t;
        }
        notifyListeners(e, t) {
            this.localCache[e] = t;
            let r = this.listeners[e];
            if (r) for (let e of Array.from(r))e(t);
        }
        startPolling() {
            this.stopPolling(), this.pollTimer = setInterval(async ()=>this._poll(), 800);
        }
        stopPolling() {
            this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null);
        }
        _addListener(e, t) {
            0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[e] || (this.listeners[e] = new Set, this._get(e)), this.listeners[e].add(t);
        }
        _removeListener(e, t) {
            this.listeners[e] && (this.listeners[e].delete(t), 0 === this.listeners[e].size && delete this.listeners[e]), 0 === Object.keys(this.listeners).length && this.stopPolling();
        }
    }
    async function rq(e, t, r) {
        var i, n, s;
        let a = await r.verify();
        try {
            let o;
            if (e2("string" == typeof a, e, "argument-error"), e2("recaptcha" === r.type, e, "argument-error"), o = "string" == typeof t ? {
                phoneNumber: t
            } : t, "session" in o) {
                let t = o.session;
                if ("phoneNumber" in o) return e2("enroll" === t.type, e, "internal-error"), (await (n = {
                    idToken: t.credential,
                    phoneEnrollmentInfo: {
                        phoneNumber: o.phoneNumber,
                        recaptchaToken: a
                    }
                }, tr(e, "POST", "/v2/accounts/mfaEnrollment:start", tt(e, n)))).phoneSessionInfo.sessionInfo;
                {
                    e2("signin" === t.type, e, "internal-error");
                    let r = (null === (i = o.multiFactorHint) || void 0 === i ? void 0 : i.uid) || o.multiFactorUid;
                    return e2(r, e, "missing-multi-factor-info"), (await (s = {
                        mfaPendingCredential: t.credential,
                        mfaEnrollmentId: r,
                        phoneSignInInfo: {
                            recaptchaToken: a
                        }
                    }, tr(e, "POST", "/v2/accounts/mfaSignIn:start", tt(e, s)))).phoneResponseInfo.sessionInfo;
                }
            }
            {
                let { sessionInfo: t } = await rt(e, {
                    phoneNumber: o.phoneNumber,
                    recaptchaToken: a
                });
                return t;
            }
        } finally{
            r._reset();
        }
    }
    rW.type = "LOCAL", tX("rcb"), new e5(3e4, 6e4); /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class rK {
        constructor(e){
            this.providerId = rK.PROVIDER_ID, this.auth = G(e);
        }
        verifyPhoneNumber(e, t) {
            return rq(this.auth, e, G(t));
        }
        static credential(e, t) {
            return ra._fromVerification(e, t);
        }
        static credentialFromResult(e) {
            return rK.credentialFromTaggedObject(e);
        }
        static credentialFromError(e) {
            return rK.credentialFromTaggedObject(e.customData || {});
        }
        static credentialFromTaggedObject({ _tokenResponse: e }) {
            if (!e) return null;
            let { phoneNumber: t, temporaryProof: r } = e;
            return t && r ? ra._fromTokenResponse(t, r) : null;
        }
    }
    rK.PROVIDER_ID = "phone", rK.PHONE_SIGN_IN_METHOD = "phone"; /**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class rG extends t3 {
        constructor(e){
            super("custom", "custom"), this.params = e;
        }
        _getIdTokenResponse(e) {
            return t7(e, this._buildIdpRequest());
        }
        _linkToIdToken(e, t) {
            return t7(e, this._buildIdpRequest(t));
        }
        _getReauthenticationResolver(e) {
            return t7(e, this._buildIdpRequest());
        }
        _buildIdpRequest(e) {
            let t = {
                requestUri: this.params.requestUri,
                sessionId: this.params.sessionId,
                postBody: this.params.postBody,
                tenantId: this.params.tenantId,
                pendingToken: this.params.pendingToken,
                returnSecureToken: !0,
                returnIdpCredential: !0
            };
            return e && (t.idToken = e), t;
        }
    }
    function rJ(e) {
        return rb(e.auth, new rG(e), e.bypassAuthState);
    }
    function rY(e) {
        let { auth: t, user: r } = e;
        return e2(r, t, "internal-error"), rw(r, new rG(e), e.bypassAuthState);
    }
    async function rX(e) {
        let { auth: t, user: r } = e;
        return e2(r, t, "internal-error"), rI(r, new rG(e), e.bypassAuthState);
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class rQ {
        constructor(e, t, r, i, n = !1){
            this.auth = e, this.resolver = r, this.user = i, this.bypassAuthState = n, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(t) ? t : [
                t
            ];
        }
        execute() {
            return new Promise(async (e, t)=>{
                this.pendingPromise = {
                    resolve: e,
                    reject: t
                };
                try {
                    this.eventManager = await this.resolver._initialize(this.auth), await this.onExecution(), this.eventManager.registerConsumer(this);
                } catch (e) {
                    this.reject(e);
                }
            });
        }
        async onAuthEvent(e) {
            let { urlResponse: t, sessionId: r, postBody: i, tenantId: n, error: s, type: a } = e;
            if (s) {
                this.reject(s);
                return;
            }
            let o = {
                auth: this.auth,
                requestUri: t,
                sessionId: r,
                tenantId: n || void 0,
                postBody: i || void 0,
                user: this.user,
                bypassAuthState: this.bypassAuthState
            };
            try {
                this.resolve(await this.getIdpTask(a)(o));
            } catch (e) {
                this.reject(e);
            }
        }
        onError(e) {
            this.reject(e);
        }
        getIdpTask(e) {
            switch(e){
                case "signInViaPopup":
                case "signInViaRedirect":
                    return rJ;
                case "linkViaPopup":
                case "linkViaRedirect":
                    return rX;
                case "reauthViaPopup":
                case "reauthViaRedirect":
                    return rY;
                default:
                    eX(this.auth, "internal-error");
            }
        }
        resolve(e) {
            var t, r;
            t = this.pendingPromise, r = "Pending promise was never set", t || e3(r), this.pendingPromise.resolve(e), this.unregisterAndCleanUp();
        }
        reject(e) {
            var t, r;
            t = this.pendingPromise, r = "Pending promise was never set", t || e3(r), this.pendingPromise.reject(e), this.unregisterAndCleanUp();
        }
        unregisterAndCleanUp() {
            this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp();
        }
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    let rZ = new e5(2e3, 1e4);
    class r0 extends rQ {
        constructor(e, t, r, i, n){
            super(e, t, i, n), this.provider = r, this.authWindow = null, this.pollId = null, r0.currentPopupAction && r0.currentPopupAction.cancel(), r0.currentPopupAction = this;
        }
        async executeNotNull() {
            let e = await this.execute();
            return e2(e, this.auth, "internal-error"), e;
        }
        async onExecution() {
            var e, t;
            e = 1 === this.filter.length, t = "Popup operations only handle one event", e || e3(t);
            let r = rA();
            this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], r), this.authWindow.associatedEvent = r, this.resolver._originValidation(this.auth).catch((e)=>{
                this.reject(e);
            }), this.resolver._isIframeWebStorageSupported(this.auth, (e)=>{
                e || this.reject(eQ(this.auth, "web-storage-unsupported"));
            }), this.pollUserCancellation();
        }
        get eventId() {
            var e;
            return (null === (e = this.authWindow) || void 0 === e ? void 0 : e.associatedEvent) || null;
        }
        cancel() {
            this.reject(eQ(this.auth, "cancelled-popup-request"));
        }
        cleanUp() {
            this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, r0.currentPopupAction = null;
        }
        pollUserCancellation() {
            let e = ()=>{
                var t, r;
                if (null === (r = null === (t = this.authWindow) || void 0 === t ? void 0 : t.window) || void 0 === r ? void 0 : r.closed) {
                    this.pollId = window.setTimeout(()=>{
                        this.pollId = null, this.reject(eQ(this.auth, "popup-closed-by-user"));
                    }, 8e3);
                    return;
                }
                this.pollId = window.setTimeout(e, rZ.get());
            };
            e();
        }
    }
    r0.currentPopupAction = null;
    let r1 = new Map;
    class r2 extends rQ {
        constructor(e, t, r = !1){
            super(e, [
                "signInViaRedirect",
                "linkViaRedirect",
                "reauthViaRedirect",
                "unknown"
            ], t, void 0, r), this.eventId = null;
        }
        async execute() {
            let e = r1.get(this.auth._key());
            if (!e) {
                try {
                    let t = await r3(this.resolver, this.auth) ? await super.execute() : null;
                    e = ()=>Promise.resolve(t);
                } catch (t) {
                    e = ()=>Promise.reject(t);
                }
                r1.set(this.auth._key(), e);
            }
            return this.bypassAuthState || r1.set(this.auth._key(), ()=>Promise.resolve(null)), e();
        }
        async onAuthEvent(e) {
            if ("signInViaRedirect" === e.type) return super.onAuthEvent(e);
            if ("unknown" === e.type) {
                this.resolve(null);
                return;
            }
            if (e.eventId) {
                let t = await this.auth._redirectUserForId(e.eventId);
                if (t) return this.user = t, super.onAuthEvent(e);
                this.resolve(null);
            }
        }
        async onExecution() {}
        cleanUp() {}
    }
    async function r3(e, t) {
        let r = tN("pendingRedirect", t.config.apiKey, t.name), i = tR(e._redirectPersistence);
        if (!await i._isAvailable()) return !1;
        let n = await i._get(r) === "true";
        return await i._remove(r), n;
    }
    function r6(e, t) {
        r1.set(e._key(), t);
    }
    async function r4(e, t, r = !1) {
        if (eR(e.app)) return Promise.reject(e0(e));
        let i = G(e), n = t ? tR(t) : (e2(i._popupRedirectResolver, i, "argument-error"), i._popupRedirectResolver), s = new r2(i, n, r), a = await s.execute();
        return a && !r && (delete a.user._redirectEventId, await i._persistUserIfCurrent(a.user), await i._setRedirectUser(null, t)), a;
    }
    class r5 {
        constructor(e){
            this.auth = e, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now();
        }
        registerConsumer(e) {
            this.consumers.add(e), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, e) && (this.sendToConsumer(this.queuedRedirectEvent, e), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null);
        }
        unregisterConsumer(e) {
            this.consumers.delete(e);
        }
        onEvent(e) {
            if (this.hasEventBeenHandled(e)) return !1;
            let t = !1;
            return this.consumers.forEach((r)=>{
                this.isEventForConsumer(e, r) && (t = !0, this.sendToConsumer(e, r), this.saveEventToCache(e));
            }), this.hasHandledPotentialRedirect || !function(e) {
                switch(e.type){
                    case "signInViaRedirect":
                    case "linkViaRedirect":
                    case "reauthViaRedirect":
                        return !0;
                    case "unknown":
                        return r9(e);
                    default:
                        return !1;
                }
            }(e) || (this.hasHandledPotentialRedirect = !0, t || (this.queuedRedirectEvent = e, t = !0)), t;
        }
        sendToConsumer(e, t) {
            var r;
            if (e.error && !r9(e)) {
                let i = (null === (r = e.error.code) || void 0 === r ? void 0 : r.split("auth/")[1]) || "internal-error";
                t.onError(eQ(this.auth, i));
            } else t.onAuthEvent(e);
        }
        isEventForConsumer(e, t) {
            let r = null === t.eventId || !!e.eventId && e.eventId === t.eventId;
            return t.filter.includes(e.type) && r;
        }
        hasEventBeenHandled(e) {
            return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(r8(e));
        }
        saveEventToCache(e) {
            this.cachedEventUids.add(r8(e)), this.lastProcessedEventTime = Date.now();
        }
    }
    function r8(e) {
        return [
            e.type,
            e.eventId,
            e.sessionId,
            e.tenantId
        ].filter((e)=>e).join("-");
    }
    function r9({ type: e, error: t }) {
        return "unknown" === e && (null == t ? void 0 : t.code) === "auth/no-auth-event";
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    async function r7(e, t = {}) {
        return tr(e, "GET", "/v1/projects", t);
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    let ie = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, it = /^https?/;
    async function ir(e) {
        if (e.config.emulator) return;
        let { authorizedDomains: t } = await r7(e);
        for (let e of t)try {
            if (function(e) {
                let t = e6(), { protocol: r, hostname: i } = new URL(t);
                if (e.startsWith("chrome-extension://")) {
                    let n = new URL(e);
                    return "" === n.hostname && "" === i ? "chrome-extension:" === r && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "") : "chrome-extension:" === r && n.hostname === i;
                }
                if (!it.test(r)) return !1;
                if (ie.test(e)) return i === e;
                let n = e.replace(/\./g, "\\.");
                return RegExp("^(.+\\." + n + "|" + n + ")$", "i").test(i);
            }(e)) return;
        } catch (e) {}
        eX(e, "unauthorized-domain");
    } /**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    let ii = new e5(3e4, 6e4);
    function is() {
        let e = rD().___jsl;
        if (null == e ? void 0 : e.H) {
            for (let t of Object.keys(e.H))if (e.H[t].r = e.H[t].r || [], e.H[t].L = e.H[t].L || [], e.H[t].r = [
                ...e.H[t].L
            ], e.CP) for(let t = 0; t < e.CP.length; t++)e.CP[t] = null;
        }
    }
    let ia = null, io = new e5(5e3, 15e3), il = {
        style: {
            position: "absolute",
            top: "-100px",
            width: "1px",
            height: "1px"
        },
        "aria-hidden": "true",
        tabindex: "-1"
    }, ic = new Map([
        [
            "identitytoolkit.googleapis.com",
            "p"
        ],
        [
            "staging-identitytoolkit.sandbox.googleapis.com",
            "s"
        ],
        [
            "test-identitytoolkit.sandbox.googleapis.com",
            "t"
        ]
    ]);
    async function iu(e) {
        let t = await (ia = ia || new Promise((t, r)=>{
            var i, n, s, a;
            function o() {
                is(), gapi.load("gapi.iframes", {
                    callback: ()=>{
                        t(gapi.iframes.getContext());
                    },
                    ontimeout: ()=>{
                        is(), r(eQ(e, "network-request-failed"));
                    },
                    timeout: ii.get()
                });
            }
            if (null === (n = null === (i = rD().gapi) || void 0 === i ? void 0 : i.iframes) || void 0 === n ? void 0 : n.Iframe) t(gapi.iframes.getContext());
            else if (null === (s = rD().gapi) || void 0 === s ? void 0 : s.load) o();
            else {
                let t = tX("iframefcb");
                return rD()[t] = ()=>{
                    gapi.load ? o() : r(eQ(e, "network-request-failed"));
                }, (a = `${tY.gapiScript}?onload=${t}`, tY.loadJS(a)).catch((e)=>r(e));
            }
        }).catch((e)=>{
            throw ia = null, e;
        })), r = rD().gapi;
        return e2(r, e, "internal-error"), t.open({
            where: document.body,
            url: function(e) {
                let t = e.config;
                e2(t.authDomain, e, "auth-domain-config-required");
                let r = t.emulator ? e8(t, "emulator/auth/iframe") : `https://${e.config.authDomain}/__/auth/iframe`, i = {
                    apiKey: t.apiKey,
                    appName: e.name,
                    v: eD
                }, n = ic.get(e.config.apiHost);
                n && (i.eid = n);
                let s = e._getFrameworks();
                return s.length && (i.fw = s.join(",")), `${r}?${$(i).slice(1)}`;
            }(e),
            messageHandlersFilter: r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
            attributes: il,
            dontclear: !0
        }, (t)=>new Promise(async (r, i)=>{
                await t.restyle({
                    setHideOnLeave: !1
                });
                let n = eQ(e, "network-request-failed"), s = rD().setTimeout(()=>{
                    i(n);
                }, io.get());
                function a() {
                    rD().clearTimeout(s), r(t);
                }
                t.ping(a).then(a, ()=>{
                    i(n);
                });
            }));
    } /**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    let ih = {
        location: "yes",
        resizable: "yes",
        statusbar: "yes",
        toolbar: "no"
    };
    class id {
        constructor(e){
            this.window = e, this.associatedEvent = null;
        }
        close() {
            if (this.window) try {
                this.window.close();
            } catch (e) {}
        }
    }
    let ip = encodeURIComponent("fac");
    async function im(e, t, r, i, n, s) {
        e2(e.config.authDomain, e, "auth-domain-config-required"), e2(e.config.apiKey, e, "invalid-api-key");
        let a = {
            apiKey: e.config.apiKey,
            appName: e.name,
            authType: r,
            redirectUrl: i,
            v: eD,
            eventId: n
        };
        if (t instanceof rc) for (let [r, i] of (t.setDefaultLanguage(e.languageCode), a.providerId = t.providerId || "", !function(e) {
            for(let t in e)if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
            return !0;
        }(t.getCustomParameters()) && (a.customParameters = JSON.stringify(t.getCustomParameters())), Object.entries(s || {})))a[r] = i;
        if (t instanceof ru) {
            let e = t.getScopes().filter((e)=>"" !== e);
            e.length > 0 && (a.scopes = e.join(","));
        }
        for (let t of (e.tenantId && (a.tid = e.tenantId), Object.keys(a)))void 0 === a[t] && delete a[t];
        let o = await e._getAppCheckToken(), l = o ? `#${ip}=${encodeURIComponent(o)}` : "";
        return `${function({ config: e }) {
            return e.emulator ? e8(e, "emulator/auth/handler") : `https://${e.authDomain}/__/auth/handler`;
        }(e)}?${$(a).slice(1)}${l}`;
    } /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    let ig = "webStorageSupport", iv = class {
        constructor(){
            this.eventManagers = {}, this.iframes = {}, this.originValidationPromises = {}, this._redirectPersistence = rP, this._completeRedirectFn = r4, this._overrideRedirectResult = r6;
        }
        async _openPopup(e, t, r, i) {
            var n, s, a;
            s = null === (n = this.eventManagers[e._key()]) || void 0 === n ? void 0 : n.manager, a = "_initialize() not called before _openPopup()", s || e3(a);
            let o = await im(e, t, r, e6(), i);
            return function(e, t, r, i = 500, n = 600) {
                let s = Math.max((window.screen.availHeight - n) / 2, 0).toString(), a = Math.max((window.screen.availWidth - i) / 2, 0).toString(), o = "", l = Object.assign(Object.assign({}, ih), {
                    width: i.toString(),
                    height: n.toString(),
                    top: s,
                    left: a
                }), c = x().toLowerCase();
                r && (o = tx(c) ? "_blank" : r), tM(c) && (t = t || "http://localhost", l.scrollbars = "yes");
                let u = Object.entries(l).reduce((e, [t, r])=>`${e}${t}=${r},`, "");
                if (function(e = x()) {
                    var t;
                    return tB(e) && !!(null === (t = window.navigator) || void 0 === t ? void 0 : t.standalone);
                }(c) && "_self" !== o) return function(e, t) {
                    let r = document.createElement("a");
                    r.href = e, r.target = t;
                    let i = document.createEvent("MouseEvent");
                    i.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), r.dispatchEvent(i);
                }(t || "", o), new id(null);
                let h = window.open(t || "", o, u);
                e2(h, e, "popup-blocked");
                try {
                    h.focus();
                } catch (e) {}
                return new id(h);
            }(e, o, rA());
        }
        async _openRedirect(e, t, r, i) {
            var n;
            return await this._originValidation(e), n = await im(e, t, r, e6(), i), rD().location.href = n, new Promise(()=>{});
        }
        _initialize(e) {
            let t = e._key();
            if (this.eventManagers[t]) {
                var r;
                let { manager: e, promise: i } = this.eventManagers[t];
                return e ? Promise.resolve(e) : (r = "If manager is not set, promise should be", i || e3(r), i);
            }
            let i = this.initAndGetManager(e);
            return this.eventManagers[t] = {
                promise: i
            }, i.catch(()=>{
                delete this.eventManagers[t];
            }), i;
        }
        async initAndGetManager(e) {
            let t = await iu(e), r = new r5(e);
            return t.register("authEvent", (t)=>(e2(null == t ? void 0 : t.authEvent, e, "invalid-auth-event"), {
                    status: r.onEvent(t.authEvent) ? "ACK" : "ERROR"
                }), gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER), this.eventManagers[e._key()] = {
                manager: r
            }, this.iframes[e._key()] = t, r;
        }
        _isIframeWebStorageSupported(e, t) {
            this.iframes[e._key()].send(ig, {
                type: ig
            }, (r)=>{
                var i;
                let n = null === (i = null == r ? void 0 : r[0]) || void 0 === i ? void 0 : i[ig];
                void 0 !== n && t(!!n), eX(e, "internal-error");
            }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
        }
        _originValidation(e) {
            let t = e._key();
            return this.originValidationPromises[t] || (this.originValidationPromises[t] = ir(e)), this.originValidationPromises[t];
        }
        get _shouldInitProactively() {
            return t$() || tU() || tB();
        }
    };
    class iy {
        constructor(e){
            this.factorId = e;
        }
        _process(e, t, r) {
            switch(t.type){
                case "enroll":
                    return this._finalizeEnroll(e, t.credential, r);
                case "signin":
                    return this._finalizeSignIn(e, t.credential);
                default:
                    return e3("unexpected MultiFactorSessionType");
            }
        }
    }
    class i_ extends iy {
        constructor(e){
            super("phone"), this.credential = e;
        }
        static _fromCredential(e) {
            return new i_(e);
        }
        _finalizeEnroll(e, t, r) {
            return tr(e, "POST", "/v2/accounts/mfaEnrollment:finalize", tt(e, {
                idToken: t,
                displayName: r,
                phoneVerificationInfo: this.credential._makeVerificationRequest()
            }));
        }
        _finalizeSignIn(e, t) {
            return tr(e, "POST", "/v2/accounts/mfaSignIn:finalize", tt(e, {
                mfaPendingCredential: t,
                phoneVerificationInfo: this.credential._makeVerificationRequest()
            }));
        }
    }
    class iI extends iy {
        constructor(e, t, r){
            super("totp"), this.otp = e, this.enrollmentId = t, this.secret = r;
        }
        static _fromSecret(e, t) {
            return new iI(t, void 0, e);
        }
        static _fromEnrollmentId(e, t) {
            return new iI(t, e);
        }
        async _finalizeEnroll(e, t, r) {
            return e2(void 0 !== this.secret, e, "argument-error"), tr(e, "POST", "/v2/accounts/mfaEnrollment:finalize", tt(e, {
                idToken: t,
                displayName: r,
                totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
            }));
        }
        async _finalizeSignIn(e, t) {
            e2(void 0 !== this.enrollmentId && void 0 !== this.otp, e, "argument-error");
            let r = {
                verificationCode: this.otp
            };
            return tr(e, "POST", "/v2/accounts/mfaSignIn:finalize", tt(e, {
                mfaPendingCredential: t,
                mfaEnrollmentId: this.enrollmentId,
                totpVerificationInfo: r
            }));
        }
    }
    class iw {
        constructor(e, t, r, i, n, s, a){
            this.sessionInfo = s, this.auth = a, this.secretKey = e, this.hashingAlgorithm = t, this.codeLength = r, this.codeIntervalSeconds = i, this.enrollmentCompletionDeadline = n;
        }
        static _fromStartTotpMfaEnrollmentResponse(e, t) {
            return new iw(e.totpSessionInfo.sharedSecretKey, e.totpSessionInfo.hashingAlgorithm, e.totpSessionInfo.verificationCodeLength, e.totpSessionInfo.periodSec, new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), e.totpSessionInfo.sessionInfo, t);
        }
        _makeTotpVerificationInfo(e) {
            return {
                sessionInfo: this.sessionInfo,
                verificationCode: e
            };
        }
        generateQrCodeUrl(e, t) {
            var r;
            let i = !1;
            return (ib(e) || ib(t)) && (i = !0), i && (ib(e) && (e = (null === (r = this.auth.currentUser) || void 0 === r ? void 0 : r.email) || "unknownuser"), ib(t) && (t = this.auth.name)), `otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
        }
    }
    function ib(e) {
        return void 0 === e || (null == e ? void 0 : e.length) === 0;
    }
    var iE = "@firebase/auth", iT = "1.7.6"; /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
    class iS {
        constructor(e){
            this.auth = e, this.internalListeners = new Map;
        }
        getUid() {
            var e;
            return this.assertAuthConfigured(), (null === (e = this.auth.currentUser) || void 0 === e ? void 0 : e.uid) || null;
        }
        async getToken(e) {
            return (this.assertAuthConfigured(), await this.auth._initializationPromise, this.auth.currentUser) ? {
                accessToken: await this.auth.currentUser.getIdToken(e)
            } : null;
        }
        addAuthTokenListener(e) {
            if (this.assertAuthConfigured(), this.internalListeners.has(e)) return;
            let t = this.auth.onIdTokenChanged((t)=>{
                e((null == t ? void 0 : t.stsTokenManager.accessToken) || null);
            });
            this.internalListeners.set(e, t), this.updateProactiveRefresh();
        }
        removeAuthTokenListener(e) {
            this.assertAuthConfigured();
            let t = this.internalListeners.get(e);
            t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
        }
        assertAuthConfigured() {
            e2(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
        }
        updateProactiveRefresh() {
            this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
        }
    }
    let ik = M("authIdTokenMaxAge") || 300, iC = null, iO = (e)=>async (t)=>{
            let r = t && await t.getIdTokenResult(), i = r && (new Date().getTime() - Date.parse(r.issuedAtTime)) / 1e3;
            if (i && i > ik) return;
            let n = null == r ? void 0 : r.token;
            iC !== n && (iC = n, await fetch(e, {
                method: n ? "POST" : "DELETE",
                headers: n ? {
                    Authorization: `Bearer ${n}`
                } : {}
            }));
        };
    tY = {
        loadJS: (e)=>new Promise((t, r)=>{
                var i, n;
                let s = document.createElement("script");
                s.setAttribute("src", e), s.onload = t, s.onerror = (e)=>{
                    let t = eQ("internal-error");
                    t.customData = e, r(t);
                }, s.type = "text/javascript", s.charset = "UTF-8", (null !== (n = null === (i = document.getElementsByTagName("head")) || void 0 === i ? void 0 : i[0]) && void 0 !== n ? n : document).appendChild(s);
            }),
        gapiScript: "https://apis.google.com/js/api.js",
        recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
        recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
    }, n = "Browser", eO(new J("auth", (e, { options: t })=>{
        let r = e.getProvider("app").getImmediate(), i = e.getProvider("heartbeat"), s = e.getProvider("app-check-internal"), { apiKey: a, authDomain: o } = r.options;
        e2(a && !a.includes(":"), "invalid-api-key", {
            appName: r.name
        });
        let l = new tG(r, i, s, {
            apiKey: a,
            authDomain: o,
            clientPlatform: n,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: tz(n)
        });
        return function(e, t) {
            let r = (null == t ? void 0 : t.persistence) || [], i = (Array.isArray(r) ? r : [
                r
            ]).map(tR);
            (null == t ? void 0 : t.errorMap) && e._updateErrorMap(t.errorMap), e._initializeWithPersistence(i, null == t ? void 0 : t.popupRedirectResolver);
        }(l, t), l;
    }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e, t, r)=>{
        e.getProvider("auth-internal").initialize();
    })), eO(new J("auth-internal", (e)=>new iS(G(e.getProvider("auth").getImmediate())), "PRIVATE").setInstantiationMode("EXPLICIT")), eM(iE, iT, /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e) {
        switch(e){
            case "Node":
                return "node";
            case "ReactNative":
                return "rn";
            case "Worker":
                return "webworker";
            case "Cordova":
                return "cordova";
            case "WebExtension":
                return "web-extension";
            default:
                return;
        }
    }(n)), eM(iE, iT, "esm2017");
    let iP = (e, t, r, i)=>{
        let n = {
            errorStatus: !1,
            emailError: "",
            passwordError: ""
        };
        return e || t ? e ? t ? (n.errorStatus = !1, n.emailError = "", n.passwordError = "", r.style.visibility = "hidden", i.style.visibility = "hidden") : (n.errorStatus = !0, n.emailError = "", n.passwordError = "password is required", r.style.visibility = "hidden", i.style.visibility = "visible") : (n.errorStatus = !0, n.emailError = "email is required", n.passwordError = "", r.style.visibility = "visible", i.style.visibility = "hidden") : (n.errorStatus = !0, n.emailError = "email is required", n.passwordError = "password is required", r.style.visibility = "visible", i.style.visibility = "visible"), r.textContent = n.emailError, i.textContent = n.passwordError, {
            signInFormStatus: ()=>n.errorStatus
        };
    }, iR = (e, t, r, i, n)=>{
        let s = !1;
        return e && t && r && i ? (s = !1, n.style.visibility = "hidden", n.textContent = "") : (s = !0, n.style.visibility = "visible", n.textContent = "Please fill out all fields"), {
            signUpErrorStatus: ()=>s
        };
    }, iA = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "3bc6906176msh84853ac5c51c6fap125507jsn0b698ccc63b7",
            "x-rapidapi-host": "meteostat.p.rapidapi.com"
        }
    }, iN = new Date().getHours();
    async function iD() {
        let e = new Date().toISOString().split("T")[0], t = `https://meteostat.p.rapidapi.com/point/hourly?lat=59.911491&lon=10.757933&start=${e}&end=${e}`;
        try {
            let e = await fetch(t, iA), r = await e.json();
            return console.log(r.data), r.data;
        } catch (e) {
            console.error(e);
        }
    }
    console.log("Current hour:", iN);
    let iL = document.querySelector(".weather-widget-container"), iM = document.querySelector(".weather-info-list");
    async function iU() {
        let e = await iD();
        try {
            let t = e[iN], r = document.createElement("img");
            r.className = "weather-icon";
            let i = document.createElement("li");
            i.className = "weather-info", iL.appendChild(r), iM.appendChild(i), r.src = `../assets/${t.coco}.png`, console.log(r.src = `../assets/${t.coco}.png`), i.innerHTML = `Temperature: ${t.temp}, Wind Speed: ${t.wspd}, Precipitation: ${t.prcp}`;
        } catch (e) {
            console.error(e);
        }
    }
    iU(), console.log("App connected"), iU(), eL({
        apiKey: "AIzaSyCHGEKbZRJsWUU63FC1U0vB0sFe63kHR7A",
        authDomain: "hikers-auth.firebaseapp.com",
        projectId: "hikers-auth",
        storageBucket: "hikers-auth.appspot.com",
        messagingSenderId: "842020339814",
        appId: "1:842020339814:web:4657b0d45e2c944d882da7"
    });
    let ix = function(e = function(e = eb) {
        let t = eT.get(e);
        if (!t && e === eb && L()) return eL();
        if (!t) throw eA.create("no-app", {
            appName: e
        });
        return t;
    }()) {
        let t = eP(e, "auth");
        if (t.isInitialized()) return t.getImmediate();
        let r = /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e, t) {
            let r = eP(e, "auth");
            if (r.isInitialized()) {
                let e = r.getImmediate();
                if (H(r.getOptions(), null != t ? t : {})) return e;
                eX(e, "already-initialized");
            }
            return r.initialize({
                options: t
            });
        }(e, {
            popupRedirectResolver: iv,
            persistence: [
                rW,
                rO,
                rP
            ]
        }), i = M("authTokenSyncURL");
        if (i && "boolean" == typeof isSecureContext && isSecureContext) {
            let e = new URL(i, location.origin);
            if (location.origin === e.origin) {
                var n, s;
                let t = iO(e.toString());
                n = ()=>t(r.currentUser), G(r).beforeAuthStateChanged(t, n), s = (e)=>t(e), G(r).onIdTokenChanged(s, void 0, void 0);
            }
        }
        let a = D("auth");
        return a && function(e, t, r) {
            let i = G(e);
            e2(i._canInitEmulator, i, "emulator-config-failed"), e2(/^https?:\/\//.test(t), i, "invalid-emulator-scheme");
            let n = t1(t), { host: s, port: a } = function(e) {
                let t = t1(e), r = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
                if (!r) return {
                    host: "",
                    port: null
                };
                let i = r[2].split("@").pop() || "", n = /^(\[[^\]]+\])(:|$)/.exec(i);
                if (n) {
                    let e = n[1];
                    return {
                        host: e,
                        port: t2(i.substr(e.length + 1))
                    };
                }
                {
                    let [e, t] = i.split(":");
                    return {
                        host: e,
                        port: t2(t)
                    };
                }
            }(t), o = null === a ? "" : `:${a}`;
            i.config.emulator = {
                url: `${n}//${s}${o}/`
            }, i.settings.appVerificationDisabledForTesting = !0, i.emulatorConfig = Object.freeze({
                host: s,
                port: a,
                protocol: n.replace(":", ""),
                options: Object.freeze({
                    disableWarnings: !1
                })
            }), function() {
                function e() {
                    let e = document.createElement("p"), t = e.style;
                    e.innerText = "Running in emulator mode. Do not use with production credentials.", t.position = "fixed", t.width = "100%", t.backgroundColor = "#ffffff", t.border = ".1em solid #000000", t.color = "#b50000", t.bottom = "0px", t.left = "0px", t.margin = "0px", t.zIndex = "10000", t.textAlign = "center", e.classList.add("firebase-emulator-warning"), document.body.appendChild(e);
                }
                "undefined" != typeof console && "function" == typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), "undefined" != typeof window && "undefined" != typeof document && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", e) : e());
            }();
        }(r, `http://${a}`), r;
    }(), iF = document.querySelector(".email"), iV = document.querySelector(".password"), ij = document.querySelector(".sign-in-button"), iH = document.querySelector(".email-error"), iB = document.querySelector(".password-error"), i$ = document.querySelector(".sign-in-form"), iz = document.querySelector(".submittion-error"), iW = document.querySelector(".firstname"), iq = document.querySelector(".lastname"), iK = document.querySelector(".sign-up-email"), iG = document.querySelector(".sign-up-password"), iJ = document.querySelector(".sign-up-error"), iY = document.querySelector(".sign-up-form"), iX = document.querySelector(".sign-up-form__close"), iQ = document.querySelector(".sign-up-form__open"), iZ = document.querySelector(".sign-up-form-container"), i0 = document.querySelector(".sign-up-button");
    iQ.addEventListener("click", (e)=>{
        e.preventDefault(), iZ.style.display = "block";
    }), iX.addEventListener("click", (e)=>{
        e.preventDefault(), iZ.style.display = "none";
    }), i0.addEventListener("click", (e)=>{
        e.preventDefault(), iR(iW.value, iq.value, iK.value, iG.value, iJ);
    }), i0.addEventListener("click", (e)=>{
        e.preventDefault(), function() {
            let { signUpErrorStatus: e } = iR(iW.value.trim(), iq.value.trim(), iK.value.trim(), iG.value.trim(), iJ);
            if (!e()) {
                let e = {
                    firstname: iW.value.trim(),
                    lastname: iq.value.trim(),
                    signUpEmail: iK.value.trim(),
                    signUpPassword: iG.value.trim()
                };
                rS(ix, e.signUpEmail, e.signUpPassword).then(()=>{
                    iY.reset(), iZ.style.display = "none";
                }).catch((e)=>console.log(e.message));
            }
        }();
    });
    let i1 = document.querySelector(".sign-out-button");
    i1.addEventListener("click", (e)=>{
        e.preventDefault(), G(ix).signOut().then(()=>{
            console.log("Sign out successful!"), i1.style.visibility = "hidden", i$.style.display = "flex";
        }).catch((e)=>console.log(e.message));
    }), ij.addEventListener("click", (e)=>{
        e.preventDefault(), function() {
            let { signInFormStatus: e } = iP(iF.value, iV.value, iH, iB);
            if (!e()) {
                let e = iF.value.trim(), t = iV.value.trim();
                (eR(ix.app) ? Promise.reject(e0(ix)) : rE(G(ix), rl.credential(e, t)).catch(async (e)=>{
                    throw "auth/password-does-not-meet-requirements" === e.code && rT(ix), e;
                })).then(()=>{
                    i$.reset(), i1.style.visibility = "visible", console.log("Sign in successful!");
                }).catch((e)=>{
                    iz.textContent = e.message;
                });
            }
        }();
    });
}();

},{}]},["hvP7x","ln1GS"], "ln1GS", "parcelRequireac79")

//# sourceMappingURL=index.5670a418.js.map
