/*!
 * Docsify v5.0.0
 * https://docsify.js.org
 * (c) 2017-2026
 * MIT license
 */
(function() {
    "use strict";
    function _mergeNamespaces(n, m) {
        m.forEach((function(e) {
            e && typeof e !== "string" && !Array.isArray(e) && Object.keys(e).forEach((function(k) {
                if (k !== "default" && !(k in n)) {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function() {
                            return e[k];
                        }
                    });
                }
            }));
        }));
        return Object.freeze(n);
    }
    function cached$1(fn) {
        const cache = Object.create(null);
        return function(str) {
            const key = isPrimitive(str) ? str : JSON.stringify(str);
            if (key in cache) {
                return cache[key];
            }
            return cache[key] = fn(str);
        };
    }
    const hyphenate = cached$1((str => str.replace(/([A-Z])/g, (m => "-" + m.toLowerCase()))));
    function isPrimitive(value) {
        return typeof value === "string" || typeof value === "number";
    }
    function noop() {}
    function isFn(obj) {
        return typeof obj === "function";
    }
    function isExternal(url) {
        const match = url.match(/^([^:/?#]+:)?(?:\/{2,}([^/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
        if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) {
            return true;
        }
        if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(":(" + {
            "http:": 80,
            "https:": 443
        }[location.protocol] + ")?$"), "") !== location.host) {
            return true;
        }
        if (/^\/\\/.test(url)) {
            return true;
        }
        return false;
    }
    const cacheNode = {};
    function getNode(el, noCache = false) {
        if (typeof el === "string") {
            if (typeof window.Vue !== "undefined") {
                return find(el);
            }
            el = noCache ? find(el) : cacheNode[el] || (cacheNode[el] = find(el));
        }
        return el;
    }
    function setHTML(el, content, replace) {
        const node = getNode(el);
        if (node) {
            node[replace ? "outerHTML" : "innerHTML"] = content;
        }
    }
    const $$1 = document;
    const body = $$1.body;
    const head = $$1.head;
    function find(el, query = ":is()") {
        return typeof el !== "string" ? el.querySelector(query) : $$1.querySelector(el);
    }
    function findAll(el, query = ":is()") {
        return Array.from(typeof el !== "string" ? el.querySelectorAll(query) : $$1.querySelectorAll(el));
    }
    function create(node, tpl) {
        const element = $$1.createElement(node);
        if (tpl) {
            element.innerHTML = tpl;
        }
        return element;
    }
    function appendTo(target, el) {
        return target.appendChild(el);
    }
    function before(target, el) {
        return target.insertBefore(el, target.children[0]);
    }
    function on(el, type, handler) {
        isFn(type) ? window.addEventListener(el, type) : el.addEventListener(type, handler);
    }
    function off(el, type, handler) {
        isFn(type) ? window.removeEventListener(el, type) : el.removeEventListener(type, handler);
    }
    function style(content) {
        appendTo(head, create("style", content));
    }
    function documentReady(callback, doc = document) {
        const state = doc.readyState;
        if (state === "complete" || state === "interactive") {
            return setTimeout(callback, 0);
        }
        doc.addEventListener("DOMContentLoaded", callback);
    }
    var dom = Object.freeze({
        __proto__: null,
        $: $$1,
        appendTo: appendTo,
        before: before,
        body: body,
        create: create,
        documentReady: documentReady,
        find: find,
        findAll: findAll,
        getNode: getNode,
        head: head,
        off: off,
        on: on,
        setHTML: setHTML,
        style: style
    });
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    function getDefaultExportFromCjs(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
    }
    var prism$2 = {
        exports: {}
    };
    var hasRequiredPrism;
    function requirePrism() {
        if (hasRequiredPrism) return prism$2.exports;
        hasRequiredPrism = 1;
        (function(module) {
            var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
            var Prism = function(_self) {
                var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
                var uniqueId = 0;
                var plainTextGrammar = {};
                var _ = {
                    manual: _self.Prism && _self.Prism.manual,
                    disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
                    util: {
                        encode: function encode(tokens) {
                            if (tokens instanceof Token) {
                                return new Token(tokens.type, encode(tokens.content), tokens.alias);
                            } else if (Array.isArray(tokens)) {
                                return tokens.map(encode);
                            } else {
                                return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
                            }
                        },
                        type: function(o) {
                            return Object.prototype.toString.call(o).slice(8, -1);
                        },
                        objId: function(obj) {
                            if (!obj["__id"]) {
                                Object.defineProperty(obj, "__id", {
                                    value: ++uniqueId
                                });
                            }
                            return obj["__id"];
                        },
                        clone: function deepClone(o, visited) {
                            visited = visited || {};
                            var clone;
                            var id;
                            switch (_.util.type(o)) {
                              case "Object":
                                id = _.util.objId(o);
                                if (visited[id]) {
                                    return visited[id];
                                }
                                clone = {};
                                visited[id] = clone;
                                for (var key in o) {
                                    if (o.hasOwnProperty(key)) {
                                        clone[key] = deepClone(o[key], visited);
                                    }
                                }
                                return clone;

                              case "Array":
                                id = _.util.objId(o);
                                if (visited[id]) {
                                    return visited[id];
                                }
                                clone = [];
                                visited[id] = clone;
                                o.forEach((function(v, i) {
                                    clone[i] = deepClone(v, visited);
                                }));
                                return clone;

                              default:
                                return o;
                            }
                        },
                        getLanguage: function(element) {
                            while (element) {
                                var m = lang.exec(element.className);
                                if (m) {
                                    return m[1].toLowerCase();
                                }
                                element = element.parentElement;
                            }
                            return "none";
                        },
                        setLanguage: function(element, language) {
                            element.className = element.className.replace(RegExp(lang, "gi"), "");
                            element.classList.add("language-" + language);
                        },
                        currentScript: function() {
                            if (typeof document === "undefined") {
                                return null;
                            }
                            if (document.currentScript && document.currentScript.tagName === "SCRIPT" && 1 < 2) {
                                return document.currentScript;
                            }
                            try {
                                throw new Error;
                            } catch (err) {
                                var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                                if (src) {
                                    var scripts = document.getElementsByTagName("script");
                                    for (var i in scripts) {
                                        if (scripts[i].src == src) {
                                            return scripts[i];
                                        }
                                    }
                                }
                                return null;
                            }
                        },
                        isActive: function(element, className, defaultActivation) {
                            var no = "no-" + className;
                            while (element) {
                                var classList = element.classList;
                                if (classList.contains(className)) {
                                    return true;
                                }
                                if (classList.contains(no)) {
                                    return false;
                                }
                                element = element.parentElement;
                            }
                            return !!defaultActivation;
                        }
                    },
                    languages: {
                        plain: plainTextGrammar,
                        plaintext: plainTextGrammar,
                        text: plainTextGrammar,
                        txt: plainTextGrammar,
                        extend: function(id, redef) {
                            var lang = _.util.clone(_.languages[id]);
                            for (var key in redef) {
                                lang[key] = redef[key];
                            }
                            return lang;
                        },
                        insertBefore: function(inside, before, insert, root) {
                            root = root || _.languages;
                            var grammar = root[inside];
                            var ret = {};
                            for (var token in grammar) {
                                if (grammar.hasOwnProperty(token)) {
                                    if (token == before) {
                                        for (var newToken in insert) {
                                            if (insert.hasOwnProperty(newToken)) {
                                                ret[newToken] = insert[newToken];
                                            }
                                        }
                                    }
                                    if (!insert.hasOwnProperty(token)) {
                                        ret[token] = grammar[token];
                                    }
                                }
                            }
                            var old = root[inside];
                            root[inside] = ret;
                            _.languages.DFS(_.languages, (function(key, value) {
                                if (value === old && key != inside) {
                                    this[key] = ret;
                                }
                            }));
                            return ret;
                        },
                        DFS: function DFS(o, callback, type, visited) {
                            visited = visited || {};
                            var objId = _.util.objId;
                            for (var i in o) {
                                if (o.hasOwnProperty(i)) {
                                    callback.call(o, i, o[i], type || i);
                                    var property = o[i];
                                    var propertyType = _.util.type(property);
                                    if (propertyType === "Object" && !visited[objId(property)]) {
                                        visited[objId(property)] = true;
                                        DFS(property, callback, null, visited);
                                    } else if (propertyType === "Array" && !visited[objId(property)]) {
                                        visited[objId(property)] = true;
                                        DFS(property, callback, i, visited);
                                    }
                                }
                            }
                        }
                    },
                    plugins: {},
                    highlightAll: function(async, callback) {
                        _.highlightAllUnder(document, async, callback);
                    },
                    highlightAllUnder: function(container, async, callback) {
                        var env = {
                            callback: callback,
                            container: container,
                            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                        };
                        _.hooks.run("before-highlightall", env);
                        env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
                        _.hooks.run("before-all-elements-highlight", env);
                        for (var i = 0, element; element = env.elements[i++]; ) {
                            _.highlightElement(element, async === true, env.callback);
                        }
                    },
                    highlightElement: function(element, async, callback) {
                        var language = _.util.getLanguage(element);
                        var grammar = _.languages[language];
                        _.util.setLanguage(element, language);
                        var parent = element.parentElement;
                        if (parent && parent.nodeName.toLowerCase() === "pre") {
                            _.util.setLanguage(parent, language);
                        }
                        var code = element.textContent;
                        var env = {
                            element: element,
                            language: language,
                            grammar: grammar,
                            code: code
                        };
                        function insertHighlightedCode(highlightedCode) {
                            env.highlightedCode = highlightedCode;
                            _.hooks.run("before-insert", env);
                            env.element.innerHTML = env.highlightedCode;
                            _.hooks.run("after-highlight", env);
                            _.hooks.run("complete", env);
                            callback && callback.call(env.element);
                        }
                        _.hooks.run("before-sanity-check", env);
                        parent = env.element.parentElement;
                        if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
                            parent.setAttribute("tabindex", "0");
                        }
                        if (!env.code) {
                            _.hooks.run("complete", env);
                            callback && callback.call(env.element);
                            return;
                        }
                        _.hooks.run("before-highlight", env);
                        if (!env.grammar) {
                            insertHighlightedCode(_.util.encode(env.code));
                            return;
                        }
                        if (async && _self.Worker) {
                            var worker = new Worker(_.filename);
                            worker.onmessage = function(evt) {
                                insertHighlightedCode(evt.data);
                            };
                            worker.postMessage(JSON.stringify({
                                language: env.language,
                                code: env.code,
                                immediateClose: true
                            }));
                        } else {
                            insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
                        }
                    },
                    highlight: function(text, grammar, language) {
                        var env = {
                            code: text,
                            grammar: grammar,
                            language: language
                        };
                        _.hooks.run("before-tokenize", env);
                        if (!env.grammar) {
                            throw new Error('The language "' + env.language + '" has no grammar.');
                        }
                        env.tokens = _.tokenize(env.code, env.grammar);
                        _.hooks.run("after-tokenize", env);
                        return Token.stringify(_.util.encode(env.tokens), env.language);
                    },
                    tokenize: function(text, grammar) {
                        var rest = grammar.rest;
                        if (rest) {
                            for (var token in rest) {
                                grammar[token] = rest[token];
                            }
                            delete grammar.rest;
                        }
                        var tokenList = new LinkedList;
                        addAfter(tokenList, tokenList.head, text);
                        matchGrammar(text, tokenList, grammar, tokenList.head, 0);
                        return toArray(tokenList);
                    },
                    hooks: {
                        all: {},
                        add: function(name, callback) {
                            var hooks = _.hooks.all;
                            hooks[name] = hooks[name] || [];
                            hooks[name].push(callback);
                        },
                        run: function(name, env) {
                            var callbacks = _.hooks.all[name];
                            if (!callbacks || !callbacks.length) {
                                return;
                            }
                            for (var i = 0, callback; callback = callbacks[i++]; ) {
                                callback(env);
                            }
                        }
                    },
                    Token: Token
                };
                _self.Prism = _;
                function Token(type, content, alias, matchedStr) {
                    this.type = type;
                    this.content = content;
                    this.alias = alias;
                    this.length = (matchedStr || "").length | 0;
                }
                Token.stringify = function stringify(o, language) {
                    if (typeof o == "string") {
                        return o;
                    }
                    if (Array.isArray(o)) {
                        var s = "";
                        o.forEach((function(e) {
                            s += stringify(e, language);
                        }));
                        return s;
                    }
                    var env = {
                        type: o.type,
                        content: stringify(o.content, language),
                        tag: "span",
                        classes: [ "token", o.type ],
                        attributes: {},
                        language: language
                    };
                    var aliases = o.alias;
                    if (aliases) {
                        if (Array.isArray(aliases)) {
                            Array.prototype.push.apply(env.classes, aliases);
                        } else {
                            env.classes.push(aliases);
                        }
                    }
                    _.hooks.run("wrap", env);
                    var attributes = "";
                    for (var name in env.attributes) {
                        attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
                    }
                    return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
                };
                function matchPattern(pattern, pos, text, lookbehind) {
                    pattern.lastIndex = pos;
                    var match = pattern.exec(text);
                    if (match && lookbehind && match[1]) {
                        var lookbehindLength = match[1].length;
                        match.index += lookbehindLength;
                        match[0] = match[0].slice(lookbehindLength);
                    }
                    return match;
                }
                function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
                    for (var token in grammar) {
                        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                            continue;
                        }
                        var patterns = grammar[token];
                        patterns = Array.isArray(patterns) ? patterns : [ patterns ];
                        for (var j = 0; j < patterns.length; ++j) {
                            if (rematch && rematch.cause == token + "," + j) {
                                return;
                            }
                            var patternObj = patterns[j];
                            var inside = patternObj.inside;
                            var lookbehind = !!patternObj.lookbehind;
                            var greedy = !!patternObj.greedy;
                            var alias = patternObj.alias;
                            if (greedy && !patternObj.pattern.global) {
                                var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                                patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
                            }
                            var pattern = patternObj.pattern || patternObj;
                            for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, 
                            currentNode = currentNode.next) {
                                if (rematch && pos >= rematch.reach) {
                                    break;
                                }
                                var str = currentNode.value;
                                if (tokenList.length > text.length) {
                                    return;
                                }
                                if (str instanceof Token) {
                                    continue;
                                }
                                var removeCount = 1;
                                var match;
                                if (greedy) {
                                    match = matchPattern(pattern, pos, text, lookbehind);
                                    if (!match || match.index >= text.length) {
                                        break;
                                    }
                                    var from = match.index;
                                    var to = match.index + match[0].length;
                                    var p = pos;
                                    p += currentNode.value.length;
                                    while (from >= p) {
                                        currentNode = currentNode.next;
                                        p += currentNode.value.length;
                                    }
                                    p -= currentNode.value.length;
                                    pos = p;
                                    if (currentNode.value instanceof Token) {
                                        continue;
                                    }
                                    for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                                        removeCount++;
                                        p += k.value.length;
                                    }
                                    removeCount--;
                                    str = text.slice(pos, p);
                                    match.index -= pos;
                                } else {
                                    match = matchPattern(pattern, 0, str, lookbehind);
                                    if (!match) {
                                        continue;
                                    }
                                }
                                var from = match.index;
                                var matchStr = match[0];
                                var before = str.slice(0, from);
                                var after = str.slice(from + matchStr.length);
                                var reach = pos + str.length;
                                if (rematch && reach > rematch.reach) {
                                    rematch.reach = reach;
                                }
                                var removeFrom = currentNode.prev;
                                if (before) {
                                    removeFrom = addAfter(tokenList, removeFrom, before);
                                    pos += before.length;
                                }
                                removeRange(tokenList, removeFrom, removeCount);
                                var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                                currentNode = addAfter(tokenList, removeFrom, wrapped);
                                if (after) {
                                    addAfter(tokenList, currentNode, after);
                                }
                                if (removeCount > 1) {
                                    var nestedRematch = {
                                        cause: token + "," + j,
                                        reach: reach
                                    };
                                    matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                                    if (rematch && nestedRematch.reach > rematch.reach) {
                                        rematch.reach = nestedRematch.reach;
                                    }
                                }
                            }
                        }
                    }
                }
                function LinkedList() {
                    var head = {
                        value: null,
                        prev: null,
                        next: null
                    };
                    var tail = {
                        value: null,
                        prev: head,
                        next: null
                    };
                    head.next = tail;
                    this.head = head;
                    this.tail = tail;
                    this.length = 0;
                }
                function addAfter(list, node, value) {
                    var next = node.next;
                    var newNode = {
                        value: value,
                        prev: node,
                        next: next
                    };
                    node.next = newNode;
                    next.prev = newNode;
                    list.length++;
                    return newNode;
                }
                function removeRange(list, node, count) {
                    var next = node.next;
                    for (var i = 0; i < count && next !== list.tail; i++) {
                        next = next.next;
                    }
                    node.next = next;
                    next.prev = node;
                    list.length -= i;
                }
                function toArray(list) {
                    var array = [];
                    var node = list.head.next;
                    while (node !== list.tail) {
                        array.push(node.value);
                        node = node.next;
                    }
                    return array;
                }
                if (!_self.document) {
                    if (!_self.addEventListener) {
                        return _;
                    }
                    if (!_.disableWorkerMessageHandler) {
                        _self.addEventListener("message", (function(evt) {
                            var message = JSON.parse(evt.data);
                            var lang = message.language;
                            var code = message.code;
                            var immediateClose = message.immediateClose;
                            _self.postMessage(_.highlight(code, _.languages[lang], lang));
                            if (immediateClose) {
                                _self.close();
                            }
                        }), false);
                    }
                    return _;
                }
                var script = _.util.currentScript();
                if (script) {
                    _.filename = script.src;
                    if (script.hasAttribute("data-manual")) {
                        _.manual = true;
                    }
                }
                function highlightAutomaticallyCallback() {
                    if (!_.manual) {
                        _.highlightAll();
                    }
                }
                if (!_.manual) {
                    var readyState = document.readyState;
                    if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
                        document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
                    } else {
                        if (window.requestAnimationFrame) {
                            window.requestAnimationFrame(highlightAutomaticallyCallback);
                        } else {
                            window.setTimeout(highlightAutomaticallyCallback, 16);
                        }
                    }
                }
                return _;
            }(_self);
            if (module.exports) {
                module.exports = Prism;
            }
            if (typeof commonjsGlobal !== "undefined") {
                commonjsGlobal.Prism = Prism;
            }
            Prism.languages.markup = {
                comment: {
                    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
                    greedy: true
                },
                prolog: {
                    pattern: /<\?[\s\S]+?\?>/,
                    greedy: true
                },
                doctype: {
                    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                    greedy: true,
                    inside: {
                        "internal-subset": {
                            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                            lookbehind: true,
                            greedy: true,
                            inside: null
                        },
                        string: {
                            pattern: /"[^"]*"|'[^']*'/,
                            greedy: true
                        },
                        punctuation: /^<!|>$|[[\]]/,
                        "doctype-tag": /^DOCTYPE/i,
                        name: /[^\s<>'"]+/
                    }
                },
                cdata: {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    greedy: true
                },
                tag: {
                    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                    greedy: true,
                    inside: {
                        tag: {
                            pattern: /^<\/?[^\s>\/]+/,
                            inside: {
                                punctuation: /^<\/?/,
                                namespace: /^[^\s>\/:]+:/
                            }
                        },
                        "special-attr": [],
                        "attr-value": {
                            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                            inside: {
                                punctuation: [ {
                                    pattern: /^=/,
                                    alias: "attr-equals"
                                }, {
                                    pattern: /^(\s*)["']|["']$/,
                                    lookbehind: true
                                } ]
                            }
                        },
                        punctuation: /\/?>/,
                        "attr-name": {
                            pattern: /[^\s>\/]+/,
                            inside: {
                                namespace: /^[^\s>\/:]+:/
                            }
                        }
                    }
                },
                entity: [ {
                    pattern: /&[\da-z]{1,8};/i,
                    alias: "named-entity"
                }, /&#x?[\da-f]{1,8};/i ]
            };
            Prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism.languages.markup["entity"];
            Prism.languages.markup["doctype"].inside["internal-subset"].inside = Prism.languages.markup;
            Prism.hooks.add("wrap", (function(env) {
                if (env.type === "entity") {
                    env.attributes["title"] = env.content.replace(/&amp;/, "&");
                }
            }));
            Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
                value: function addInlined(tagName, lang) {
                    var includedCdataInside = {};
                    includedCdataInside["language-" + lang] = {
                        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                        lookbehind: true,
                        inside: Prism.languages[lang]
                    };
                    includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
                    var inside = {
                        "included-cdata": {
                            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                            inside: includedCdataInside
                        }
                    };
                    inside["language-" + lang] = {
                        pattern: /[\s\S]+/,
                        inside: Prism.languages[lang]
                    };
                    var def = {};
                    def[tagName] = {
                        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, (function() {
                            return tagName;
                        })), "i"),
                        lookbehind: true,
                        greedy: true,
                        inside: inside
                    };
                    Prism.languages.insertBefore("markup", "cdata", def);
                }
            });
            Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
                value: function(attrName, lang) {
                    Prism.languages.markup.tag.inside["special-attr"].push({
                        pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                        lookbehind: true,
                        inside: {
                            "attr-name": /^[^\s=]+/,
                            "attr-value": {
                                pattern: /=[\s\S]+/,
                                inside: {
                                    value: {
                                        pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                        lookbehind: true,
                                        alias: [ lang, "language-" + lang ],
                                        inside: Prism.languages[lang]
                                    },
                                    punctuation: [ {
                                        pattern: /^=/,
                                        alias: "attr-equals"
                                    }, /"|'/ ]
                                }
                            }
                        }
                    });
                }
            });
            Prism.languages.html = Prism.languages.markup;
            Prism.languages.mathml = Prism.languages.markup;
            Prism.languages.svg = Prism.languages.markup;
            Prism.languages.xml = Prism.languages.extend("markup", {});
            Prism.languages.ssml = Prism.languages.xml;
            Prism.languages.atom = Prism.languages.xml;
            Prism.languages.rss = Prism.languages.xml;
            (function(Prism) {
                var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
                Prism.languages.css = {
                    comment: /\/\*[\s\S]*?\*\//,
                    atrule: {
                        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
                        inside: {
                            rule: /^@[\w-]+/,
                            "selector-function-argument": {
                                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                                lookbehind: true,
                                alias: "selector"
                            },
                            keyword: {
                                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                                lookbehind: true
                            }
                        }
                    },
                    url: {
                        pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                        greedy: true,
                        inside: {
                            function: /^url/i,
                            punctuation: /^\(|\)$/,
                            string: {
                                pattern: RegExp("^" + string.source + "$"),
                                alias: "url"
                            }
                        }
                    },
                    selector: {
                        pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + string.source + ")*(?=\\s*\\{)"),
                        lookbehind: true
                    },
                    string: {
                        pattern: string,
                        greedy: true
                    },
                    property: {
                        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                        lookbehind: true
                    },
                    important: /!important\b/i,
                    function: {
                        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                        lookbehind: true
                    },
                    punctuation: /[(){};:,]/
                };
                Prism.languages.css["atrule"].inside.rest = Prism.languages.css;
                var markup = Prism.languages.markup;
                if (markup) {
                    markup.tag.addInlined("style", "css");
                    markup.tag.addAttribute("style", "css");
                }
            })(Prism);
            Prism.languages.clike = {
                comment: [ {
                    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                    lookbehind: true,
                    greedy: true
                }, {
                    pattern: /(^|[^\\:])\/\/.*/,
                    lookbehind: true,
                    greedy: true
                } ],
                string: {
                    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                    greedy: true
                },
                "class-name": {
                    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
                    lookbehind: true,
                    inside: {
                        punctuation: /[.\\]/
                    }
                },
                keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
                boolean: /\b(?:false|true)\b/,
                function: /\b\w+(?=\()/,
                number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                punctuation: /[{}[\];(),.:]/
            };
            Prism.languages.javascript = Prism.languages.extend("clike", {
                "class-name": [ Prism.languages.clike["class-name"], {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                    lookbehind: true
                } ],
                keyword: [ {
                    pattern: /((?:^|\})\s*)catch\b/,
                    lookbehind: true
                }, {
                    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                    lookbehind: true
                } ],
                function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                number: {
                    pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
                    lookbehind: true
                },
                operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
            });
            Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
            Prism.languages.insertBefore("javascript", "keyword", {
                regex: {
                    pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
                    lookbehind: true,
                    greedy: true,
                    inside: {
                        "regex-source": {
                            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                            lookbehind: true,
                            alias: "language-regex",
                            inside: Prism.languages.regex
                        },
                        "regex-delimiter": /^\/|\/$/,
                        "regex-flags": /^[a-z]+$/
                    }
                },
                "function-variable": {
                    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                    alias: "function"
                },
                parameter: [ {
                    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                    lookbehind: true,
                    inside: Prism.languages.javascript
                }, {
                    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                    lookbehind: true,
                    inside: Prism.languages.javascript
                }, {
                    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                    lookbehind: true,
                    inside: Prism.languages.javascript
                }, {
                    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                    lookbehind: true,
                    inside: Prism.languages.javascript
                } ],
                constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
            });
            Prism.languages.insertBefore("javascript", "string", {
                hashbang: {
                    pattern: /^#!.*/,
                    greedy: true,
                    alias: "comment"
                },
                "template-string": {
                    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                    greedy: true,
                    inside: {
                        "template-punctuation": {
                            pattern: /^`|`$/,
                            alias: "string"
                        },
                        interpolation: {
                            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                            lookbehind: true,
                            inside: {
                                "interpolation-punctuation": {
                                    pattern: /^\$\{|\}$/,
                                    alias: "punctuation"
                                },
                                rest: Prism.languages.javascript
                            }
                        },
                        string: /[\s\S]+/
                    }
                },
                "string-property": {
                    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
                    lookbehind: true,
                    greedy: true,
                    alias: "property"
                }
            });
            Prism.languages.insertBefore("javascript", "operator", {
                "literal-property": {
                    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                    lookbehind: true,
                    alias: "property"
                }
            });
            if (Prism.languages.markup) {
                Prism.languages.markup.tag.addInlined("script", "javascript");
                Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
            }
            Prism.languages.js = Prism.languages.javascript;
            (function() {
                if (typeof Prism === "undefined" || typeof document === "undefined") {
                    return;
                }
                if (!Element.prototype.matches) {
                    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
                }
                var LOADING_MESSAGE = "Loading…";
                var FAILURE_MESSAGE = function(status, message) {
                    return "✖ Error " + status + " while fetching file: " + message;
                };
                var FAILURE_EMPTY_MESSAGE = "✖ Error: File does not exist or is empty";
                var EXTENSIONS = {
                    js: "javascript",
                    py: "python",
                    rb: "ruby",
                    ps1: "powershell",
                    psm1: "powershell",
                    sh: "bash",
                    bat: "batch",
                    h: "c",
                    tex: "latex"
                };
                var STATUS_ATTR = "data-src-status";
                var STATUS_LOADING = "loading";
                var STATUS_LOADED = "loaded";
                var STATUS_FAILED = "failed";
                var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"])' + ":not([" + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
                function loadFile(src, success, error) {
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", src, true);
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState == 4) {
                            if (xhr.status < 400 && xhr.responseText) {
                                success(xhr.responseText);
                            } else {
                                if (xhr.status >= 400) {
                                    error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
                                } else {
                                    error(FAILURE_EMPTY_MESSAGE);
                                }
                            }
                        }
                    };
                    xhr.send(null);
                }
                function parseRange(range) {
                    var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
                    if (m) {
                        var start = Number(m[1]);
                        var comma = m[2];
                        var end = m[3];
                        if (!comma) {
                            return [ start, start ];
                        }
                        if (!end) {
                            return [ start, undefined ];
                        }
                        return [ start, Number(end) ];
                    }
                    return undefined;
                }
                Prism.hooks.add("before-highlightall", (function(env) {
                    env.selector += ", " + SELECTOR;
                }));
                Prism.hooks.add("before-sanity-check", (function(env) {
                    var pre = env.element;
                    if (pre.matches(SELECTOR)) {
                        env.code = "";
                        pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
                        var code = pre.appendChild(document.createElement("CODE"));
                        code.textContent = LOADING_MESSAGE;
                        var src = pre.getAttribute("data-src");
                        var language = env.language;
                        if (language === "none") {
                            var extension = (/\.(\w+)$/.exec(src) || [ , "none" ])[1];
                            language = EXTENSIONS[extension] || extension;
                        }
                        Prism.util.setLanguage(code, language);
                        Prism.util.setLanguage(pre, language);
                        var autoloader = Prism.plugins.autoloader;
                        if (autoloader) {
                            autoloader.loadLanguages(language);
                        }
                        loadFile(src, (function(text) {
                            pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
                            var range = parseRange(pre.getAttribute("data-range"));
                            if (range) {
                                var lines = text.split(/\r\n?|\n/g);
                                var start = range[0];
                                var end = range[1] == null ? lines.length : range[1];
                                if (start < 0) {
                                    start += lines.length;
                                }
                                start = Math.max(0, Math.min(start - 1, lines.length));
                                if (end < 0) {
                                    end += lines.length;
                                }
                                end = Math.max(0, Math.min(end, lines.length));
                                text = lines.slice(start, end).join("\n");
                                if (!pre.hasAttribute("data-start")) {
                                    pre.setAttribute("data-start", String(start + 1));
                                }
                            }
                            code.textContent = text;
                            Prism.highlightElement(code);
                        }), (function(error) {
                            pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
                            code.textContent = error;
                        }));
                    }
                }));
                Prism.plugins.fileHighlight = {
                    highlight: function highlight(container) {
                        var elements = (container || document).querySelectorAll(SELECTOR);
                        for (var i = 0, element; element = elements[i++]; ) {
                            Prism.highlightElement(element);
                        }
                    }
                };
                var logged = false;
                Prism.fileHighlight = function() {
                    if (!logged) {
                        console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
                        logged = true;
                    }
                    Prism.plugins.fileHighlight.highlight.apply(this, arguments);
                };
            })();
        })(prism$2);
        return prism$2.exports;
    }
    var prismExports = requirePrism();
    var prism = getDefaultExportFromCjs(prismExports);
    var prism$1 = _mergeNamespaces({
        __proto__: null,
        default: prism
    }, [ prismExports ]);
    const decode = decodeURIComponent;
    const encode = encodeURIComponent;
    function parseQuery(query) {
        const res = {};
        query = query.trim().replace(/^(\?|#|&)/, "");
        if (!query) {
            return res;
        }
        query.split("&").forEach((param => {
            const parts = param.replace(/\+/g, " ").split("=");
            res[parts[0]] = parts[1] && decode(parts[1]);
        }));
        return res;
    }
    function stringifyQuery(obj, ignores = []) {
        const qs = [];
        for (const key in obj) {
            if (ignores.indexOf(key) > -1) {
                continue;
            }
            qs.push(obj[key] ? `${encode(key)}=${encode(obj[key])}`.toLowerCase() : encode(key));
        }
        return qs.length ? `?${qs.join("&")}` : "";
    }
    function stripUrlExceptId(str) {
        const [path, queryString] = str.split("?");
        if (!queryString) {
            return str;
        }
        const params = new URLSearchParams(queryString);
        const id = params.get("id");
        if (id !== null) {
            return `${path}?id=${id}`;
        }
        return path;
    }
    const isAbsolutePath = cached$1((path => /(:|(\/{2}))/g.test(path)));
    const removeParams = cached$1((path => path.split(/[?#]/)[0]));
    const getParentPath = cached$1((path => {
        if (/\/$/g.test(path)) {
            return path;
        }
        const matchingParts = path.match(/(\S*\/)[^/]+$/);
        return matchingParts ? matchingParts[1] : "";
    }));
    const cleanPath = cached$1((path => path.replace(/^\/+/, "/").replace(/([^:])\/{2,}/g, "$1/")));
    const resolvePath = cached$1((path => {
        const segments = path.replace(/^\//, "").split("/");
        const resolved = [];
        for (const segment of segments) {
            if (segment === "..") {
                resolved.pop();
            } else if (segment !== ".") {
                resolved.push(segment);
            }
        }
        return "/" + resolved.join("/");
    }));
    function normaliseFragment(path) {
        return path.split("/").filter((p => p.indexOf("#") === -1)).join("/");
    }
    function getPath(...args) {
        return cleanPath(args.map(normaliseFragment).join("/"));
    }
    const replaceSlug = cached$1((path => path.replace("#", "?id=")));
    class History {
        #cached={};
        constructor(config) {
            this.config = config;
        }
        #getAlias(path, alias, last) {
            const match = Object.keys(alias).filter((key => {
                const re = this.#cached[key] || (this.#cached[key] = new RegExp(`^${key}$`));
                return re.test(path) && path !== last;
            }))[0];
            return match ? this.#getAlias(path.replace(this.#cached[match], alias[match]), alias, path) : path;
        }
        #getFileName(path, ext) {
            const [basePath, query] = path.split("?");
            const hasValidExt = new RegExp(`\\.(${ext.replace(/^\./, "")}|html)$`).test(basePath);
            const updatedPath = hasValidExt ? basePath : /\/$/g.test(basePath) ? `${basePath}README${ext}` : `${basePath}${ext}`;
            return query ? `${updatedPath}?${query}` : updatedPath;
        }
        getBasePath() {
            return this.config.basePath;
        }
        getFile(path = this.getCurrentPath(), isRelative = false) {
            const {config: config} = this;
            const base = this.getBasePath();
            const ext = typeof config.ext === "string" ? config.ext : ".md";
            path = config.alias ? this.#getAlias(path, config.alias) : path;
            path = this.#getFileName(path, ext);
            path = path === `/README${ext}` ? config.homepage || path : path;
            path = isAbsolutePath(path) ? path : getPath(base, path);
            if (isRelative) {
                path = path.replace(new RegExp(`^${base}`), "");
            }
            return path;
        }
        onchange(cb = noop) {
            cb();
        }
        getCurrentPath() {
            throw new Error("Subclass should implement");
        }
        normalize() {
            throw new Error("Subclass should implement");
        }
        parse(path) {
            throw new Error("Subclass should implement");
        }
        toURL(path, params, currentRoute) {
            const local = currentRoute && path[0] === "#";
            const route = this.parse(replaceSlug(path));
            route.query = {
                ...route.query,
                ...params
            };
            path = route.path + stringifyQuery(route.query);
            path = path.replace(/\.md(\?)|\.md$/, "$1");
            if (local) {
                const idIndex = currentRoute.indexOf("?");
                path = (idIndex > 0 ? currentRoute.substring(0, idIndex) : currentRoute) + path;
            }
            if (this.config.relativePath && path.indexOf("/") !== 0) {
                const currentDir = currentRoute.substring(0, currentRoute.lastIndexOf("/") + 1);
                return cleanPath(resolvePath(currentDir + path));
            }
            return cleanPath("/" + path);
        }
    }
    function replaceHash(path) {
        const i = location.href.indexOf("#");
        location.replace(location.href.slice(0, i >= 0 ? i : 0) + "#" + path);
    }
    class HashHistory extends History {
        mode="hash";
        getBasePath() {
            const path = window.location.pathname || "";
            const base = this.config.basePath;
            const basePath = path.endsWith(".html") ? path + "#/" + base : path + "/" + base;
            return /^(\/|https?:)/g.test(base) ? base : cleanPath(basePath);
        }
        getCurrentPath() {
            const href = location.href;
            const index = href.indexOf("#");
            return index === -1 ? "" : href.slice(index + 1);
        }
        onchange(cb = noop) {
            let navigating = false;
            on("click", (e => {
                const el = e.target.tagName === "A" ? e.target : e.target.parentNode;
                if (el && el.tagName === "A" && !isExternal(el.href)) {
                    navigating = true;
                    if ([ "app-name-link", "page-link" ].includes(el.className)) {
                        return;
                    }
                    if (el.hash === location.hash) {
                        cb({
                            event: e,
                            source: "navigate"
                        });
                    }
                }
            }));
            on("hashchange", (e => {
                const source = navigating ? "navigate" : "history";
                navigating = false;
                cb({
                    event: e,
                    source: source
                });
            }));
        }
        normalize() {
            let path = this.getCurrentPath();
            path = replaceSlug(path);
            if (path.charAt(0) === "/") {
                return replaceHash(path);
            }
            replaceHash("/" + path);
        }
        parse(path = location.href) {
            let query = "";
            const hashIndex = path.indexOf("#");
            if (hashIndex >= 0) {
                path = path.slice(hashIndex + 1);
            }
            const queryIndex = path.indexOf("?");
            if (queryIndex >= 0) {
                query = path.slice(queryIndex + 1);
                path = path.slice(0, queryIndex);
            }
            return {
                path: path,
                file: this.getFile(path, true),
                query: parseQuery(query),
                response: {}
            };
        }
        toURL(path, params, currentRoute) {
            return "#" + super.toURL(path, params, currentRoute);
        }
    }
    class HTML5History extends History {
        mode="history";
        getCurrentPath() {
            const base = this.getBasePath();
            let path = window.location.pathname;
            if (base && path.indexOf(base) === 0) {
                path = path.slice(base.length);
            }
            return (path || "/") + window.location.search + window.location.hash;
        }
        onchange(cb = noop) {
            on("click", (e => {
                const el = e.target.tagName === "A" ? e.target : e.target.parentNode;
                if (el && el.tagName === "A" && !isExternal(el.href)) {
                    e.preventDefault();
                    const url = el.href;
                    window.history.pushState({
                        key: url
                    }, "", url);
                    cb({
                        event: e,
                        source: "navigate"
                    });
                }
            }));
            on("popstate", (e => {
                cb({
                    event: e,
                    source: "history"
                });
            }));
        }
        parse(path = location.href) {
            let query = "";
            const queryIndex = path.indexOf("?");
            if (queryIndex >= 0) {
                query = path.slice(queryIndex + 1);
                path = path.slice(0, queryIndex);
            }
            const base = getPath(location.origin);
            const baseIndex = path.indexOf(base);
            if (baseIndex > -1) {
                path = path.slice(baseIndex + base.length);
            }
            return {
                path: path,
                file: this.getFile(path),
                query: parseQuery(query),
                response: {}
            };
        }
        normalize() {}
    }
    let lastRoute = {};
    function Router(Base) {
        return class Router extends Base {
            route={};
            updateRender() {
                this.router?.normalize();
                this.route = this.router?.parse() ?? {};
                body.setAttribute("data-page", this.route.file ?? "");
            }
            initRouter() {
                const config = this.config;
                const mode = config.routerMode || "hash";
                let router;
                if (mode === "history") {
                    router = new HTML5History(config);
                } else {
                    router = new HashHistory(config);
                }
                this.router = router;
                this.updateRender();
                lastRoute = this.route;
                router.onchange((params => {
                    this.updateRender();
                    this._updateRender();
                    if (lastRoute.path === this.route.path) {
                        this.onNavigate(params.source);
                        return;
                    }
                    this.$fetch(noop, this.onNavigate.bind(this, params.source));
                    lastRoute = this.route;
                }));
            }
        };
    }
    var RGX = /([^{]*?)\w(?=\})/g;
    var MAP = {
        YYYY: "getFullYear",
        YY: "getYear",
        MM: function(d) {
            return d.getMonth() + 1;
        },
        DD: "getDate",
        HH: "getHours",
        mm: "getMinutes",
        ss: "getSeconds",
        fff: "getMilliseconds"
    };
    function tinydate(str, custom) {
        var parts = [], offset = 0;
        str.replace(RGX, (function(key, _, idx) {
            parts.push(str.substring(offset, idx - 1));
            offset = idx += key.length + 1;
            parts.push((function(d) {
                return ("00" + (typeof MAP[key] === "string" ? d[MAP[key]]() : MAP[key](d))).slice(-key.length);
            }));
        }));
        if (offset !== str.length) {
            parts.push(str.substring(offset));
        }
        return function(arg) {
            var out = "", i = 0, d = arg || new Date;
            for (;i < parts.length; i++) {
                out += typeof parts[i] === "string" ? parts[i] : parts[i](d);
            }
            return out;
        };
    }
    const computedStyle = getComputedStyle(document.documentElement, null);
    const mobileBreakpoint = computedStyle.getPropertyValue("--_mobile-breakpoint");
    function isMobile() {
        return window?.matchMedia?.(`(max-width: ${mobileBreakpoint})`)?.matches;
    }
    function z() {
        return {
            async: false,
            breaks: false,
            extensions: null,
            gfm: true,
            hooks: null,
            pedantic: false,
            renderer: null,
            silent: false,
            tokenizer: null,
            walkTokens: null
        };
    }
    var T = z();
    function G(l) {
        T = l;
    }
    var _ = {
        exec: () => null
    };
    function d(l, e = "") {
        let t = typeof l == "string" ? l : l.source, n = {
            replace: (s, r) => {
                let i = typeof r == "string" ? r : r.source;
                return i = i.replace(m.caret, "$1"), t = t.replace(s, i), n;
            },
            getRegex: () => new RegExp(t, e)
        };
        return n;
    }
    var Re = ((l = "") => {
        try {
            return !!new RegExp("(?<=1)(?<!1)" + l);
        } catch {
            return false;
        }
    })(), m = {
        codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
        outputLinkReplace: /\\([\[\]])/g,
        indentCodeCompensation: /^(\s+)(?:```)/,
        beginningSpace: /^\s+/,
        endingHash: /#$/,
        startingSpaceChar: /^ /,
        endingSpaceChar: / $/,
        nonSpaceChar: /[^ ]/,
        newLineCharGlobal: /\n/g,
        tabCharGlobal: /\t/g,
        multipleSpaceGlobal: /\s+/g,
        blankLine: /^[ \t]*$/,
        doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
        blockquoteStart: /^ {0,3}>/,
        blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
        blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
        listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
        listIsTask: /^\[[ xX]\] +\S/,
        listReplaceTask: /^\[[ xX]\] +/,
        listTaskCheckbox: /\[[ xX]\]/,
        anyLine: /\n.*\n/,
        hrefBrackets: /^<(.*)>$/,
        tableDelimiter: /[:|]/,
        tableAlignChars: /^\||\| *$/g,
        tableRowBlankLine: /\n[ \t]*$/,
        tableAlignRight: /^ *-+: *$/,
        tableAlignCenter: /^ *:-+: *$/,
        tableAlignLeft: /^ *:-+ *$/,
        startATag: /^<a /i,
        endATag: /^<\/a>/i,
        startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
        endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
        startAngleBracket: /^</,
        endAngleBracket: />$/,
        pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
        unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
        escapeTest: /[&<>"']/,
        escapeReplace: /[&<>"']/g,
        escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
        caret: /(^|[^\[])\^/g,
        percentDecode: /%25/g,
        findPipe: /\|/g,
        splitPipe: / \|/,
        slashPipe: /\\\|/g,
        carriageReturn: /\r\n|\r/g,
        spaceLine: /^ +$/gm,
        notSpaceStart: /^\S*/,
        endingNewline: /\n$/,
        listItemRegex: l => new RegExp(`^( {0,3}${l})((?:[\t ][^\\n]*)?(?:\\n|$))`),
        nextBulletRegex: l => new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),
        hrRegex: l => new RegExp(`^ {0,${Math.min(3, l - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
        fencesBeginRegex: l => new RegExp(`^ {0,${Math.min(3, l - 1)}}(?:\`\`\`|~~~)`),
        headingBeginRegex: l => new RegExp(`^ {0,${Math.min(3, l - 1)}}#`),
        htmlBeginRegex: l => new RegExp(`^ {0,${Math.min(3, l - 1)}}<(?:[a-z].*>|!--)`, "i"),
        blockquoteBeginRegex: l => new RegExp(`^ {0,${Math.min(3, l - 1)}}>`)
    }, Te = /^(?:[ \t]*(?:\n|$))+/, Oe = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, we = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, I = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ye = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Q = / {0,3}(?:[*+-]|\d{1,9}[.)])/, ie = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, oe = d(ie).replace(/bull/g, Q).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Pe = d(ie).replace(/bull/g, Q).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), j = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Se = /^[^\n]+/, F = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, $e = d(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", F).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Le = d(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Q).getRegex(), v = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", U = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, _e = d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))", "i").replace("comment", U).replace("tag", v).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ae = d(j).replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex(), Me = d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ae).getRegex(), K = {
        blockquote: Me,
        code: Oe,
        def: $e,
        fences: we,
        heading: ye,
        hr: I,
        html: _e,
        lheading: oe,
        list: Le,
        newline: Te,
        paragraph: ae,
        table: _,
        text: Se
    }, re$1 = d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}\t)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex(), ze = {
        ...K,
        lheading: Pe,
        table: re$1,
        paragraph: d(j).replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", re$1).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex()
    }, Ee = {
        ...K,
        html: d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", U).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: _,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: d(j).replace("hr", I).replace("heading", ` *#{1,6} *[^\n]`).replace("lheading", oe).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
    }, Ae = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ce = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, le = /^( {2,}|\\)\n(?!\s*$)/, Ie = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, E = /[\p{P}\p{S}]/u, H = /[\s\p{P}\p{S}]/u, W = /[^\s\p{P}\p{S}]/u, Be = d(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, H).getRegex(), ue = /(?!~)[\p{P}\p{S}]/u, De = /(?!~)[\s\p{P}\p{S}]/u, qe = /(?:[^\s\p{P}\p{S}]|~)/u, ve = d(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Re ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), pe = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, He = d(pe, "u").replace(/punct/g, E).getRegex(), Ze = d(pe, "u").replace(/punct/g, ue).getRegex(), ce = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ge = d(ce, "gu").replace(/notPunctSpace/g, W).replace(/punctSpace/g, H).replace(/punct/g, E).getRegex(), Ne = d(ce, "gu").replace(/notPunctSpace/g, qe).replace(/punctSpace/g, De).replace(/punct/g, ue).getRegex(), Qe = d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, W).replace(/punctSpace/g, H).replace(/punct/g, E).getRegex(), je = d(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, E).getRegex(), Fe = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", Ue = d(Fe, "gu").replace(/notPunctSpace/g, W).replace(/punctSpace/g, H).replace(/punct/g, E).getRegex(), Ke = d(/\\(punct)/, "gu").replace(/punct/g, E).getRegex(), We = d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Xe = d(U).replace("(?:--\x3e|$)", "--\x3e").getRegex(), Je = d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Xe).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), q = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, Ve = d(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), he = d(/^!?\[(label)\]\[(ref)\]/).replace("label", q).replace("ref", F).getRegex(), ke = d(/^!?\[(ref)\](?:\[\])?/).replace("ref", F).getRegex(), Ye = d("reflink|nolink(?!\\()", "g").replace("reflink", he).replace("nolink", ke).getRegex(), se = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, X = {
        _backpedal: _,
        anyPunctuation: Ke,
        autolink: We,
        blockSkip: ve,
        br: le,
        code: Ce,
        del: _,
        delLDelim: _,
        delRDelim: _,
        emStrongLDelim: He,
        emStrongRDelimAst: Ge,
        emStrongRDelimUnd: Qe,
        escape: Ae,
        link: Ve,
        nolink: ke,
        punctuation: Be,
        reflink: he,
        reflinkSearch: Ye,
        tag: Je,
        text: Ie,
        url: _
    }, et = {
        ...X,
        link: d(/^!?\[(label)\]\((.*?)\)/).replace("label", q).getRegex(),
        reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q).getRegex()
    }, N = {
        ...X,
        emStrongRDelimAst: Ne,
        emStrongLDelim: Ze,
        delLDelim: je,
        delRDelim: Ue,
        url: d(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", se).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
        text: d(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", se).getRegex()
    }, tt = {
        ...N,
        br: d(le).replace("{2,}", "*").getRegex(),
        text: d(N.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    }, B = {
        normal: K,
        gfm: ze,
        pedantic: Ee
    }, A = {
        normal: X,
        gfm: N,
        breaks: tt,
        pedantic: et
    };
    var nt = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }, de = l => nt[l];
    function O(l, e) {
        if (e) {
            if (m.escapeTest.test(l)) return l.replace(m.escapeReplace, de);
        } else if (m.escapeTestNoEncode.test(l)) return l.replace(m.escapeReplaceNoEncode, de);
        return l;
    }
    function J(l) {
        try {
            l = encodeURI(l).replace(m.percentDecode, "%");
        } catch {
            return null;
        }
        return l;
    }
    function V(l, e) {
        let t = l.replace(m.findPipe, ((r, i, o) => {
            let u = false, a = i;
            for (;--a >= 0 && o[a] === "\\"; ) u = !u;
            return u ? "|" : " |";
        })), n = t.split(m.splitPipe), s = 0;
        if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e); else for (;n.length < e; ) n.push("");
        for (;s < n.length; s++) n[s] = n[s].trim().replace(m.slashPipe, "|");
        return n;
    }
    function $(l, e, t) {
        let n = l.length;
        if (n === 0) return "";
        let s = 0;
        for (;s < n; ) {
            let r = l.charAt(n - s - 1);
            if (r === e && true) s++; else break;
        }
        return l.slice(0, n - s);
    }
    function Y(l) {
        let e = l.split(`\n`), t = e.length - 1;
        for (;t >= 0 && m.blankLine.test(e[t]); ) t--;
        return e.length - t <= 2 ? l : e.slice(0, t + 1).join(`\n`);
    }
    function ge(l, e) {
        if (l.indexOf(e[1]) === -1) return -1;
        let t = 0;
        for (let n = 0; n < l.length; n++) if (l[n] === "\\") n++; else if (l[n] === e[0]) t++; else if (l[n] === e[1] && (t--, 
        t < 0)) return n;
        return t > 0 ? -2 : -1;
    }
    function fe(l, e = 0) {
        let t = e, n = "";
        for (let s of l) if (s === "\t") {
            let r = 4 - t % 4;
            n += " ".repeat(r), t += r;
        } else n += s, t++;
        return n;
    }
    function me(l, e, t, n, s) {
        let r = e.href, i = e.title || null, o = l[1].replace(s.other.outputLinkReplace, "$1");
        n.state.inLink = true;
        let u = {
            type: l[0].charAt(0) === "!" ? "image" : "link",
            raw: t,
            href: r,
            title: i,
            text: o,
            tokens: n.inlineTokens(o)
        };
        return n.state.inLink = false, u;
    }
    function rt(l, e, t) {
        let n = l.match(t.other.indentCodeCompensation);
        if (n === null) return e;
        let s = n[1];
        return e.split(`\n`).map((r => {
            let i = r.match(t.other.beginningSpace);
            if (i === null) return r;
            let [o] = i;
            return o.length >= s.length ? r.slice(s.length) : r;
        })).join(`\n`);
    }
    var w = class {
        options;
        rules;
        lexer;
        constructor(e) {
            this.options = e || T;
        }
        space(e) {
            let t = this.rules.block.newline.exec(e);
            if (t && t[0].length > 0) return {
                type: "space",
                raw: t[0]
            };
        }
        code(e) {
            let t = this.rules.block.code.exec(e);
            if (t) {
                let n = this.options.pedantic ? t[0] : Y(t[0]), s = n.replace(this.rules.other.codeRemoveIndent, "");
                return {
                    type: "code",
                    raw: n,
                    codeBlockStyle: "indented",
                    text: s
                };
            }
        }
        fences(e) {
            let t = this.rules.block.fences.exec(e);
            if (t) {
                let n = t[0], s = rt(n, t[3] || "", this.rules);
                return {
                    type: "code",
                    raw: n,
                    lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                    text: s
                };
            }
        }
        heading(e) {
            let t = this.rules.block.heading.exec(e);
            if (t) {
                let n = t[2].trim();
                if (this.rules.other.endingHash.test(n)) {
                    let s = $(n, "#");
                    (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (n = s.trim());
                }
                return {
                    type: "heading",
                    raw: $(t[0], `\n`),
                    depth: t[1].length,
                    text: n,
                    tokens: this.lexer.inline(n)
                };
            }
        }
        hr(e) {
            let t = this.rules.block.hr.exec(e);
            if (t) return {
                type: "hr",
                raw: $(t[0], `\n`)
            };
        }
        blockquote(e) {
            let t = this.rules.block.blockquote.exec(e);
            if (t) {
                let n = $(t[0], `\n`).split(`\n`), s = "", r = "", i = [];
                for (;n.length > 0; ) {
                    let o = false, u = [], a;
                    for (a = 0; a < n.length; a++) if (this.rules.other.blockquoteStart.test(n[a])) u.push(n[a]), 
                    o = true; else if (!o) u.push(n[a]); else break;
                    n = n.slice(a);
                    let c = u.join(`\n`), p = c.replace(this.rules.other.blockquoteSetextReplace, `\n    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
                    s = s ? `${s}\n${c}` : c, r = r ? `${r}\n${p}` : p;
                    let k = this.lexer.state.top;
                    if (this.lexer.state.top = true, this.lexer.blockTokens(p, i, true), this.lexer.state.top = k, 
                    n.length === 0) break;
                    let h = i.at(-1);
                    if (h?.type === "code") break;
                    if (h?.type === "blockquote") {
                        let R = h, f = R.raw + `\n` + n.join(`\n`), S = this.blockquote(f);
                        i[i.length - 1] = S, s = s.substring(0, s.length - R.raw.length) + S.raw, r = r.substring(0, r.length - R.text.length) + S.text;
                        break;
                    } else if (h?.type === "list") {
                        let R = h, f = R.raw + `\n` + n.join(`\n`), S = this.list(f);
                        i[i.length - 1] = S, s = s.substring(0, s.length - h.raw.length) + S.raw, r = r.substring(0, r.length - R.raw.length) + S.raw, 
                        n = f.substring(i.at(-1).raw.length).split(`\n`);
                        continue;
                    }
                }
                return {
                    type: "blockquote",
                    raw: s,
                    tokens: i,
                    text: r
                };
            }
        }
        list(e) {
            let t = this.rules.block.list.exec(e);
            if (t) {
                let n = t[1].trim(), s = n.length > 1, r = {
                    type: "list",
                    raw: "",
                    ordered: s,
                    start: s ? +n.slice(0, -1) : "",
                    loose: false,
                    items: []
                };
                n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
                let i = this.rules.other.listItemRegex(n), o = false;
                for (;e; ) {
                    let a = false, c = "", p = "";
                    if (!(t = i.exec(e)) || this.rules.block.hr.test(e)) break;
                    c = t[0], e = e.substring(c.length);
                    let k = fe(t[2].split(`\n`, 1)[0], t[1].length), h = e.split(`\n`, 1)[0], R = !k.trim(), f = 0;
                    if (this.options.pedantic ? (f = 2, p = k.trimStart()) : R ? f = t[1].length + 1 : (f = k.search(this.rules.other.nonSpaceChar), 
                    f = f > 4 ? 1 : f, p = k.slice(f), f += t[1].length), R && this.rules.other.blankLine.test(h) && (c += h + `\n`, 
                    e = e.substring(h.length + 1), a = true), !a) {
                        let S = this.rules.other.nextBulletRegex(f), ee = this.rules.other.hrRegex(f), te = this.rules.other.fencesBeginRegex(f), ne = this.rules.other.headingBeginRegex(f), xe = this.rules.other.htmlBeginRegex(f), be = this.rules.other.blockquoteBeginRegex(f);
                        for (;e; ) {
                            let Z = e.split(`\n`, 1)[0], C;
                            if (h = Z, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), 
                            C = h) : C = h.replace(this.rules.other.tabCharGlobal, "    "), te.test(h) || ne.test(h) || xe.test(h) || be.test(h) || S.test(h) || ee.test(h)) break;
                            if (C.search(this.rules.other.nonSpaceChar) >= f || !h.trim()) p += `\n` + C.slice(f); else {
                                if (R || k.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || te.test(k) || ne.test(k) || ee.test(k)) break;
                                p += `\n` + h;
                            }
                            R = !h.trim(), c += Z + `\n`, e = e.substring(Z.length + 1), k = C.slice(f);
                        }
                    }
                    r.loose || (o ? r.loose = true : this.rules.other.doubleBlankLine.test(c) && (o = true)), 
                    r.items.push({
                        type: "list_item",
                        raw: c,
                        task: !!this.options.gfm && this.rules.other.listIsTask.test(p),
                        loose: false,
                        text: p,
                        tokens: []
                    }), r.raw += c;
                }
                let u = r.items.at(-1);
                if (u) u.raw = u.raw.trimEnd(), u.text = u.text.trimEnd(); else return;
                r.raw = r.raw.trimEnd();
                for (let a of r.items) {
                    this.lexer.state.top = false, a.tokens = this.lexer.blockTokens(a.text, []);
                    let c = a.tokens[0];
                    if (a.task && (c?.type === "text" || c?.type === "paragraph")) {
                        a.text = a.text.replace(this.rules.other.listReplaceTask, ""), c.raw = c.raw.replace(this.rules.other.listReplaceTask, ""), 
                        c.text = c.text.replace(this.rules.other.listReplaceTask, "");
                        for (let k = this.lexer.inlineQueue.length - 1; k >= 0; k--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[k].src)) {
                            this.lexer.inlineQueue[k].src = this.lexer.inlineQueue[k].src.replace(this.rules.other.listReplaceTask, "");
                            break;
                        }
                        let p = this.rules.other.listTaskCheckbox.exec(a.raw);
                        if (p) {
                            let k = {
                                type: "checkbox",
                                raw: p[0] + " ",
                                checked: p[0] !== "[ ]"
                            };
                            a.checked = k.checked, r.loose ? a.tokens[0] && [ "paragraph", "text" ].includes(a.tokens[0].type) && "tokens" in a.tokens[0] && a.tokens[0].tokens ? (a.tokens[0].raw = k.raw + a.tokens[0].raw, 
                            a.tokens[0].text = k.raw + a.tokens[0].text, a.tokens[0].tokens.unshift(k)) : a.tokens.unshift({
                                type: "paragraph",
                                raw: k.raw,
                                text: k.raw,
                                tokens: [ k ]
                            }) : a.tokens.unshift(k);
                        }
                    } else a.task && (a.task = false);
                    if (!r.loose) {
                        let p = a.tokens.filter((h => h.type === "space")), k = p.length > 0 && p.some((h => this.rules.other.anyLine.test(h.raw)));
                        r.loose = k;
                    }
                }
                if (r.loose) for (let a of r.items) {
                    a.loose = true;
                    for (let c of a.tokens) c.type === "text" && (c.type = "paragraph");
                }
                return r;
            }
        }
        html(e) {
            let t = this.rules.block.html.exec(e);
            if (t) {
                let n = Y(t[0]);
                return {
                    type: "html",
                    block: true,
                    raw: n,
                    pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
                    text: n
                };
            }
        }
        def(e) {
            let t = this.rules.block.def.exec(e);
            if (t) {
                let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
                return {
                    type: "def",
                    tag: n,
                    raw: $(t[0], `\n`),
                    href: s,
                    title: r
                };
            }
        }
        table(e) {
            let t = this.rules.block.table.exec(e);
            if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
            let n = V(t[1]), s = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`\n`) : [], i = {
                type: "table",
                raw: $(t[0], `\n`),
                header: [],
                align: [],
                rows: []
            };
            if (n.length === s.length) {
                for (let o of s) this.rules.other.tableAlignRight.test(o) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? i.align.push("left") : i.align.push(null);
                for (let o = 0; o < n.length; o++) i.header.push({
                    text: n[o],
                    tokens: this.lexer.inline(n[o]),
                    header: true,
                    align: i.align[o]
                });
                for (let o of r) i.rows.push(V(o, i.header.length).map(((u, a) => ({
                    text: u,
                    tokens: this.lexer.inline(u),
                    header: false,
                    align: i.align[a]
                }))));
                return i;
            }
        }
        lheading(e) {
            let t = this.rules.block.lheading.exec(e);
            if (t) {
                let n = t[1].trim();
                return {
                    type: "heading",
                    raw: $(t[0], `\n`),
                    depth: t[2].charAt(0) === "=" ? 1 : 2,
                    text: n,
                    tokens: this.lexer.inline(n)
                };
            }
        }
        paragraph(e) {
            let t = this.rules.block.paragraph.exec(e);
            if (t) {
                let n = t[1].charAt(t[1].length - 1) === `\n` ? t[1].slice(0, -1) : t[1];
                return {
                    type: "paragraph",
                    raw: t[0],
                    text: n,
                    tokens: this.lexer.inline(n)
                };
            }
        }
        text(e) {
            let t = this.rules.block.text.exec(e);
            if (t) return {
                type: "text",
                raw: t[0],
                text: t[0],
                tokens: this.lexer.inline(t[0])
            };
        }
        escape(e) {
            let t = this.rules.inline.escape.exec(e);
            if (t) return {
                type: "escape",
                raw: t[0],
                text: t[1]
            };
        }
        tag(e) {
            let t = this.rules.inline.tag.exec(e);
            if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), 
            !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), 
            {
                type: "html",
                raw: t[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                block: false,
                text: t[0]
            };
        }
        link(e) {
            let t = this.rules.inline.link.exec(e);
            if (t) {
                let n = t[2].trim();
                if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
                    if (!this.rules.other.endAngleBracket.test(n)) return;
                    let i = $(n.slice(0, -1), "\\");
                    if ((n.length - i.length) % 2 === 0) return;
                } else {
                    let i = ge(t[2], "()");
                    if (i === -2) return;
                    if (i > -1) {
                        let u = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
                        t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, u).trim(), t[3] = "";
                    }
                }
                let s = t[2], r = "";
                if (this.options.pedantic) {
                    let i = this.rules.other.pedanticHrefTitle.exec(s);
                    i && (s = i[1], r = i[3]);
                } else r = t[3] ? t[3].slice(1, -1) : "";
                return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? s = s.slice(1) : s = s.slice(1, -1)), 
                me(t, {
                    href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
                    title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
                }, t[0], this.lexer, this.rules);
            }
        }
        reflink(e, t) {
            let n;
            if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                let s = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = t[s.toLowerCase()];
                if (!r) {
                    let i = n[0].charAt(0);
                    return {
                        type: "text",
                        raw: i,
                        text: i
                    };
                }
                return me(n, r, n[0], this.lexer, this.rules);
            }
        }
        emStrong(e, t, n = "") {
            let s = this.rules.inline.emStrongLDelim.exec(e);
            if (!s || !s[1] && !s[2] && !s[3] && !s[4] || s[4] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
            if (!(s[1] || s[3] || "") || !n || this.rules.inline.punctuation.exec(n)) {
                let i = [ ...s[0] ].length - 1, o, u, a = i, c = 0, p = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
                for (p.lastIndex = 0, t = t.slice(-1 * e.length + i); (s = p.exec(t)) !== null; ) {
                    if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o) continue;
                    if (u = [ ...o ].length, s[3] || s[4]) {
                        a += u;
                        continue;
                    } else if ((s[5] || s[6]) && i % 3 && !((i + u) % 3)) {
                        c += u;
                        continue;
                    }
                    if (a -= u, a > 0) continue;
                    u = Math.min(u, u + a + c);
                    let k = [ ...s[0] ][0].length, h = e.slice(0, i + s.index + k + u);
                    if (Math.min(i, u) % 2) {
                        let f = h.slice(1, -1);
                        return {
                            type: "em",
                            raw: h,
                            text: f,
                            tokens: this.lexer.inlineTokens(f)
                        };
                    }
                    let R = h.slice(2, -2);
                    return {
                        type: "strong",
                        raw: h,
                        text: R,
                        tokens: this.lexer.inlineTokens(R)
                    };
                }
            }
        }
        codespan(e) {
            let t = this.rules.inline.code.exec(e);
            if (t) {
                let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
                return s && r && (n = n.substring(1, n.length - 1)), {
                    type: "codespan",
                    raw: t[0],
                    text: n
                };
            }
        }
        br(e) {
            let t = this.rules.inline.br.exec(e);
            if (t) return {
                type: "br",
                raw: t[0]
            };
        }
        del(e, t, n = "") {
            let s = this.rules.inline.delLDelim.exec(e);
            if (!s) return;
            if (!(s[1] || "") || !n || this.rules.inline.punctuation.exec(n)) {
                let i = [ ...s[0] ].length - 1, o, u, a = i, c = this.rules.inline.delRDelim;
                for (c.lastIndex = 0, t = t.slice(-1 * e.length + i); (s = c.exec(t)) !== null; ) {
                    if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o || (u = [ ...o ].length, 
                    u !== i)) continue;
                    if (s[3] || s[4]) {
                        a += u;
                        continue;
                    }
                    if (a -= u, a > 0) continue;
                    u = Math.min(u, u + a);
                    let p = [ ...s[0] ][0].length, k = e.slice(0, i + s.index + p + u), h = k.slice(i, -i);
                    return {
                        type: "del",
                        raw: k,
                        text: h,
                        tokens: this.lexer.inlineTokens(h)
                    };
                }
            }
        }
        autolink(e) {
            let t = this.rules.inline.autolink.exec(e);
            if (t) {
                let n, s;
                return t[2] === "@" ? (n = t[1], s = "mailto:" + n) : (n = t[1], s = n), {
                    type: "link",
                    raw: t[0],
                    text: n,
                    href: s,
                    tokens: [ {
                        type: "text",
                        raw: n,
                        text: n
                    } ]
                };
            }
        }
        url(e) {
            let t;
            if (t = this.rules.inline.url.exec(e)) {
                let n, s;
                if (t[2] === "@") n = t[0], s = "mailto:" + n; else {
                    let r;
                    do {
                        r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
                    } while (r !== t[0]);
                    n = t[0], t[1] === "www." ? s = "http://" + t[0] : s = t[0];
                }
                return {
                    type: "link",
                    raw: t[0],
                    text: n,
                    href: s,
                    tokens: [ {
                        type: "text",
                        raw: n,
                        text: n
                    } ]
                };
            }
        }
        inlineText(e) {
            let t = this.rules.inline.text.exec(e);
            if (t) {
                let n = this.lexer.state.inRawBlock;
                return {
                    type: "text",
                    raw: t[0],
                    text: t[0],
                    escaped: n
                };
            }
        }
    };
    var x = class l {
        tokens;
        options;
        state;
        inlineQueue;
        tokenizer;
        constructor(e) {
            this.tokens = [], this.tokens.links = Object.create(null), this.options = e || T, 
            this.options.tokenizer = this.options.tokenizer || new w, this.tokenizer = this.options.tokenizer, 
            this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], 
            this.state = {
                inLink: false,
                inRawBlock: false,
                top: true
            };
            let t = {
                other: m,
                block: B.normal,
                inline: A.normal
            };
            this.options.pedantic ? (t.block = B.pedantic, t.inline = A.pedantic) : this.options.gfm && (t.block = B.gfm, 
            this.options.breaks ? t.inline = A.breaks : t.inline = A.gfm), this.tokenizer.rules = t;
        }
        static get rules() {
            return {
                block: B,
                inline: A
            };
        }
        static lex(e, t) {
            return new l(t).lex(e);
        }
        static lexInline(e, t) {
            return new l(t).inlineTokens(e);
        }
        lex(e) {
            e = e.replace(m.carriageReturn, `\n`), this.blockTokens(e, this.tokens);
            for (let t = 0; t < this.inlineQueue.length; t++) {
                let n = this.inlineQueue[t];
                this.inlineTokens(n.src, n.tokens);
            }
            return this.inlineQueue = [], this.tokens;
        }
        blockTokens(e, t = [], n = false) {
            this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, ""));
            let s = 1 / 0;
            for (;e; ) {
                if (e.length < s) s = e.length; else {
                    this.infiniteLoopError(e.charCodeAt(0));
                    break;
                }
                let r;
                if (this.options.extensions?.block?.some((o => (r = o.call({
                    lexer: this
                }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false))) continue;
                if (r = this.tokenizer.space(e)) {
                    e = e.substring(r.raw.length);
                    let o = t.at(-1);
                    r.raw.length === 1 && o !== void 0 ? o.raw += `\n` : t.push(r);
                    continue;
                }
                if (r = this.tokenizer.code(e)) {
                    e = e.substring(r.raw.length);
                    let o = t.at(-1);
                    o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`\n`) ? "" : `\n`) + r.raw, 
                    o.text += `\n` + r.text, this.inlineQueue.at(-1).src = o.text) : t.push(r);
                    continue;
                }
                if (r = this.tokenizer.fences(e)) {
                    e = e.substring(r.raw.length), t.push(r);
                    continue;
                }
                if (r = this.tokenizer.heading(e)) {
                    e = e.substring(r.raw.length), t.push(r);
                    continue;
                }
                if (r = this.tokenizer.hr(e)) {
                    e = e.substring(r.raw.length), t.push(r);
                    continue;
                }
                if (r = this.tokenizer.blockquote(e)) {
                    e = e.substring(r.raw.length), t.push(r);
                    continue;
                }
                if (r = this.tokenizer.list(e)) {
                    e = e.substring(r.raw.length), t.push(r);
                    continue;
                }
                if (r = this.tokenizer.html(e)) {
                    e = e.substring(r.raw.length), t.push(r);
                    continue;
                }
                if (r = this.tokenizer.def(e)) {
                    e = e.substring(r.raw.length);
                    let o = t.at(-1);
                    o?.type === "paragraph" || o?.type === "text" ? (o.raw += (o.raw.endsWith(`\n`) ? "" : `\n`) + r.raw, 
                    o.text += `\n` + r.raw, this.inlineQueue.at(-1).src = o.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
                        href: r.href,
                        title: r.title
                    }, t.push(r));
                    continue;
                }
                if (r = this.tokenizer.table(e)) {
                    e = e.substring(r.raw.length), t.push(r);
                    continue;
                }
                if (r = this.tokenizer.lheading(e)) {
                    e = e.substring(r.raw.length), t.push(r);
                    continue;
                }
                let i = e;
                if (this.options.extensions?.startBlock) {
                    let o = 1 / 0, u = e.slice(1), a;
                    this.options.extensions.startBlock.forEach((c => {
                        a = c.call({
                            lexer: this
                        }, u), typeof a == "number" && a >= 0 && (o = Math.min(o, a));
                    })), o < 1 / 0 && o >= 0 && (i = e.substring(0, o + 1));
                }
                if (this.state.top && (r = this.tokenizer.paragraph(i))) {
                    let o = t.at(-1);
                    n && o?.type === "paragraph" ? (o.raw += (o.raw.endsWith(`\n`) ? "" : `\n`) + r.raw, 
                    o.text += `\n` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(r), 
                    n = i.length !== e.length, e = e.substring(r.raw.length);
                    continue;
                }
                if (r = this.tokenizer.text(e)) {
                    e = e.substring(r.raw.length);
                    let o = t.at(-1);
                    o?.type === "text" ? (o.raw += (o.raw.endsWith(`\n`) ? "" : `\n`) + r.raw, o.text += `\n` + r.text, 
                    this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(r);
                    continue;
                }
                if (e) {
                    this.infiniteLoopError(e.charCodeAt(0));
                    break;
                }
            }
            return this.state.top = true, t;
        }
        inline(e, t = []) {
            return this.inlineQueue.push({
                src: e,
                tokens: t
            }), t;
        }
        inlineTokens(e, t = []) {
            this.tokenizer.lexer = this;
            let n = e, s = null;
            if (this.tokens.links) {
                let a = Object.keys(this.tokens.links);
                if (a.length > 0) for (;(s = this.tokenizer.rules.inline.reflinkSearch.exec(n)) !== null; ) a.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
            }
            for (;(s = this.tokenizer.rules.inline.anyPunctuation.exec(n)) !== null; ) n = n.slice(0, s.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
            let r;
            for (;(s = this.tokenizer.rules.inline.blockSkip.exec(n)) !== null; ) r = s[2] ? s[2].length : 0, 
            n = n.slice(0, s.index + r) + "[" + "a".repeat(s[0].length - r - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            n = this.options.hooks?.emStrongMask?.call({
                lexer: this
            }, n) ?? n;
            let i = false, o = "", u = 1 / 0;
            for (;e; ) {
                if (e.length < u) u = e.length; else {
                    this.infiniteLoopError(e.charCodeAt(0));
                    break;
                }
                i || (o = ""), i = false;
                let a;
                if (this.options.extensions?.inline?.some((p => (a = p.call({
                    lexer: this
                }, e, t)) ? (e = e.substring(a.raw.length), t.push(a), true) : false))) continue;
                if (a = this.tokenizer.escape(e)) {
                    e = e.substring(a.raw.length), t.push(a);
                    continue;
                }
                if (a = this.tokenizer.tag(e)) {
                    e = e.substring(a.raw.length), t.push(a);
                    continue;
                }
                if (a = this.tokenizer.link(e)) {
                    e = e.substring(a.raw.length), t.push(a);
                    continue;
                }
                if (a = this.tokenizer.reflink(e, this.tokens.links)) {
                    e = e.substring(a.raw.length);
                    let p = t.at(-1);
                    a.type === "text" && p?.type === "text" ? (p.raw += a.raw, p.text += a.text) : t.push(a);
                    continue;
                }
                if (a = this.tokenizer.emStrong(e, n, o)) {
                    e = e.substring(a.raw.length), t.push(a);
                    continue;
                }
                if (a = this.tokenizer.codespan(e)) {
                    e = e.substring(a.raw.length), t.push(a);
                    continue;
                }
                if (a = this.tokenizer.br(e)) {
                    e = e.substring(a.raw.length), t.push(a);
                    continue;
                }
                if (a = this.tokenizer.del(e, n, o)) {
                    e = e.substring(a.raw.length), t.push(a);
                    continue;
                }
                if (a = this.tokenizer.autolink(e)) {
                    e = e.substring(a.raw.length), t.push(a);
                    continue;
                }
                if (!this.state.inLink && (a = this.tokenizer.url(e))) {
                    e = e.substring(a.raw.length), t.push(a);
                    continue;
                }
                let c = e;
                if (this.options.extensions?.startInline) {
                    let p = 1 / 0, k = e.slice(1), h;
                    this.options.extensions.startInline.forEach((R => {
                        h = R.call({
                            lexer: this
                        }, k), typeof h == "number" && h >= 0 && (p = Math.min(p, h));
                    })), p < 1 / 0 && p >= 0 && (c = e.substring(0, p + 1));
                }
                if (a = this.tokenizer.inlineText(c)) {
                    e = e.substring(a.raw.length), a.raw.slice(-1) !== "_" && (o = a.raw.slice(-1)), 
                    i = true;
                    let p = t.at(-1);
                    p?.type === "text" ? (p.raw += a.raw, p.text += a.text) : t.push(a);
                    continue;
                }
                if (e) {
                    this.infiniteLoopError(e.charCodeAt(0));
                    break;
                }
            }
            return t;
        }
        infiniteLoopError(e) {
            let t = "Infinite loop on byte: " + e;
            if (this.options.silent) console.error(t); else throw new Error(t);
        }
    };
    var y = class {
        options;
        parser;
        constructor(e) {
            this.options = e || T;
        }
        space(e) {
            return "";
        }
        code({text: e, lang: t, escaped: n}) {
            let s = (t || "").match(m.notSpaceStart)?.[0], r = e.replace(m.endingNewline, "") + `\n`;
            return s ? '<pre><code class="language-' + O(s) + '">' + (n ? r : O(r, true)) + `</code></pre>\n` : "<pre><code>" + (n ? r : O(r, true)) + `</code></pre>\n`;
        }
        blockquote({tokens: e}) {
            return `<blockquote>\n${this.parser.parse(e)}</blockquote>\n`;
        }
        html({text: e}) {
            return e;
        }
        def(e) {
            return "";
        }
        heading({tokens: e, depth: t}) {
            return `<h${t}>${this.parser.parseInline(e)}</h${t}>\n`;
        }
        hr(e) {
            return `<hr>\n`;
        }
        list(e) {
            let t = e.ordered, n = e.start, s = "";
            for (let o = 0; o < e.items.length; o++) {
                let u = e.items[o];
                s += this.listitem(u);
            }
            let r = t ? "ol" : "ul", i = t && n !== 1 ? ' start="' + n + '"' : "";
            return "<" + r + i + `>\n` + s + "</" + r + `>\n`;
        }
        listitem(e) {
            return `<li>${this.parser.parse(e.tokens)}</li>\n`;
        }
        checkbox({checked: e}) {
            return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
        }
        paragraph({tokens: e}) {
            return `<p>${this.parser.parseInline(e)}</p>\n`;
        }
        table(e) {
            let t = "", n = "";
            for (let r = 0; r < e.header.length; r++) n += this.tablecell(e.header[r]);
            t += this.tablerow({
                text: n
            });
            let s = "";
            for (let r = 0; r < e.rows.length; r++) {
                let i = e.rows[r];
                n = "";
                for (let o = 0; o < i.length; o++) n += this.tablecell(i[o]);
                s += this.tablerow({
                    text: n
                });
            }
            return s && (s = `<tbody>${s}</tbody>`), `<table>\n<thead>\n` + t + `</thead>\n` + s + `</table>\n`;
        }
        tablerow({text: e}) {
            return `<tr>\n${e}</tr>\n`;
        }
        tablecell(e) {
            let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
            return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>\n`;
        }
        strong({tokens: e}) {
            return `<strong>${this.parser.parseInline(e)}</strong>`;
        }
        em({tokens: e}) {
            return `<em>${this.parser.parseInline(e)}</em>`;
        }
        codespan({text: e}) {
            return `<code>${O(e, true)}</code>`;
        }
        br(e) {
            return "<br>";
        }
        del({tokens: e}) {
            return `<del>${this.parser.parseInline(e)}</del>`;
        }
        link({href: e, title: t, tokens: n}) {
            let s = this.parser.parseInline(n), r = J(e);
            if (r === null) return s;
            e = r;
            let i = '<a href="' + e + '"';
            return t && (i += ' title="' + O(t) + '"'), i += ">" + s + "</a>", i;
        }
        image({href: e, title: t, text: n, tokens: s}) {
            s && (n = this.parser.parseInline(s, this.parser.textRenderer));
            let r = J(e);
            if (r === null) return O(n);
            e = r;
            let i = `<img src="${e}" alt="${O(n)}"`;
            return t && (i += ` title="${O(t)}"`), i += ">", i;
        }
        text(e) {
            return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : O(e.text);
        }
    };
    var L = class {
        strong({text: e}) {
            return e;
        }
        em({text: e}) {
            return e;
        }
        codespan({text: e}) {
            return e;
        }
        del({text: e}) {
            return e;
        }
        html({text: e}) {
            return e;
        }
        text({text: e}) {
            return e;
        }
        link({text: e}) {
            return "" + e;
        }
        image({text: e}) {
            return "" + e;
        }
        br() {
            return "";
        }
        checkbox({raw: e}) {
            return e;
        }
    };
    var b = class l {
        options;
        renderer;
        textRenderer;
        constructor(e) {
            this.options = e || T, this.options.renderer = this.options.renderer || new y, this.renderer = this.options.renderer, 
            this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new L;
        }
        static parse(e, t) {
            return new l(t).parse(e);
        }
        static parseInline(e, t) {
            return new l(t).parseInline(e);
        }
        parse(e) {
            this.renderer.parser = this;
            let t = "";
            for (let n = 0; n < e.length; n++) {
                let s = e[n];
                if (this.options.extensions?.renderers?.[s.type]) {
                    let i = s, o = this.options.extensions.renderers[i.type].call({
                        parser: this
                    }, i);
                    if (o !== false || ![ "space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text" ].includes(i.type)) {
                        t += o || "";
                        continue;
                    }
                }
                let r = s;
                switch (r.type) {
                  case "space":
                    {
                        t += this.renderer.space(r);
                        break;
                    }

                  case "hr":
                    {
                        t += this.renderer.hr(r);
                        break;
                    }

                  case "heading":
                    {
                        t += this.renderer.heading(r);
                        break;
                    }

                  case "code":
                    {
                        t += this.renderer.code(r);
                        break;
                    }

                  case "table":
                    {
                        t += this.renderer.table(r);
                        break;
                    }

                  case "blockquote":
                    {
                        t += this.renderer.blockquote(r);
                        break;
                    }

                  case "list":
                    {
                        t += this.renderer.list(r);
                        break;
                    }

                  case "checkbox":
                    {
                        t += this.renderer.checkbox(r);
                        break;
                    }

                  case "html":
                    {
                        t += this.renderer.html(r);
                        break;
                    }

                  case "def":
                    {
                        t += this.renderer.def(r);
                        break;
                    }

                  case "paragraph":
                    {
                        t += this.renderer.paragraph(r);
                        break;
                    }

                  case "text":
                    {
                        t += this.renderer.text(r);
                        break;
                    }

                  default:
                    {
                        let i = 'Token with "' + r.type + '" type was not found.';
                        if (this.options.silent) return console.error(i), "";
                        throw new Error(i);
                    }
                }
            }
            return t;
        }
        parseInline(e, t = this.renderer) {
            this.renderer.parser = this;
            let n = "";
            for (let s = 0; s < e.length; s++) {
                let r = e[s];
                if (this.options.extensions?.renderers?.[r.type]) {
                    let o = this.options.extensions.renderers[r.type].call({
                        parser: this
                    }, r);
                    if (o !== false || ![ "escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text" ].includes(r.type)) {
                        n += o || "";
                        continue;
                    }
                }
                let i = r;
                switch (i.type) {
                  case "escape":
                    {
                        n += t.text(i);
                        break;
                    }

                  case "html":
                    {
                        n += t.html(i);
                        break;
                    }

                  case "link":
                    {
                        n += t.link(i);
                        break;
                    }

                  case "image":
                    {
                        n += t.image(i);
                        break;
                    }

                  case "checkbox":
                    {
                        n += t.checkbox(i);
                        break;
                    }

                  case "strong":
                    {
                        n += t.strong(i);
                        break;
                    }

                  case "em":
                    {
                        n += t.em(i);
                        break;
                    }

                  case "codespan":
                    {
                        n += t.codespan(i);
                        break;
                    }

                  case "br":
                    {
                        n += t.br(i);
                        break;
                    }

                  case "del":
                    {
                        n += t.del(i);
                        break;
                    }

                  case "text":
                    {
                        n += t.text(i);
                        break;
                    }

                  default:
                    {
                        let o = 'Token with "' + i.type + '" type was not found.';
                        if (this.options.silent) return console.error(o), "";
                        throw new Error(o);
                    }
                }
            }
            return n;
        }
    };
    var P = class {
        options;
        block;
        constructor(e) {
            this.options = e || T;
        }
        static passThroughHooks=new Set([ "preprocess", "postprocess", "processAllTokens", "emStrongMask" ]);
        static passThroughHooksRespectAsync=new Set([ "preprocess", "postprocess", "processAllTokens" ]);
        preprocess(e) {
            return e;
        }
        postprocess(e) {
            return e;
        }
        processAllTokens(e) {
            return e;
        }
        emStrongMask(e) {
            return e;
        }
        provideLexer(e = this.block) {
            return e ? x.lex : x.lexInline;
        }
        provideParser(e = this.block) {
            return e ? b.parse : b.parseInline;
        }
    };
    var D = class {
        defaults=z();
        options=this.setOptions;
        parse=this.parseMarkdown(true);
        parseInline=this.parseMarkdown(false);
        Parser=b;
        Renderer=y;
        TextRenderer=L;
        Lexer=x;
        Tokenizer=w;
        Hooks=P;
        constructor(...e) {
            this.use(...e);
        }
        walkTokens(e, t) {
            let n = [];
            for (let s of e) switch (n = n.concat(t.call(this, s)), s.type) {
              case "table":
                {
                    let r = s;
                    for (let i of r.header) n = n.concat(this.walkTokens(i.tokens, t));
                    for (let i of r.rows) for (let o of i) n = n.concat(this.walkTokens(o.tokens, t));
                    break;
                }

              case "list":
                {
                    let r = s;
                    n = n.concat(this.walkTokens(r.items, t));
                    break;
                }

              default:
                {
                    let r = s;
                    this.defaults.extensions?.childTokens?.[r.type] ? this.defaults.extensions.childTokens[r.type].forEach((i => {
                        let o = r[i].flat(1 / 0);
                        n = n.concat(this.walkTokens(o, t));
                    })) : r.tokens && (n = n.concat(this.walkTokens(r.tokens, t)));
                }
            }
            return n;
        }
        use(...e) {
            let t = this.defaults.extensions || {
                renderers: {},
                childTokens: {}
            };
            return e.forEach((n => {
                let s = {
                    ...n
                };
                if (s.async = this.defaults.async || s.async || false, n.extensions && (n.extensions.forEach((r => {
                    if (!r.name) throw new Error("extension name required");
                    if ("renderer" in r) {
                        let i = t.renderers[r.name];
                        i ? t.renderers[r.name] = function(...o) {
                            let u = r.renderer.apply(this, o);
                            return u === false && (u = i.apply(this, o)), u;
                        } : t.renderers[r.name] = r.renderer;
                    }
                    if ("tokenizer" in r) {
                        if (!r.level || r.level !== "block" && r.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                        let i = t[r.level];
                        i ? i.unshift(r.tokenizer) : t[r.level] = [ r.tokenizer ], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [ r.start ] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [ r.start ]));
                    }
                    "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
                })), s.extensions = t), n.renderer) {
                    let r = this.defaults.renderer || new y(this.defaults);
                    for (let i in n.renderer) {
                        if (!(i in r)) throw new Error(`renderer '${i}' does not exist`);
                        if ([ "options", "parser" ].includes(i)) continue;
                        let o = i, u = n.renderer[o], a = r[o];
                        r[o] = (...c) => {
                            let p = u.apply(r, c);
                            return p === false && (p = a.apply(r, c)), p || "";
                        };
                    }
                    s.renderer = r;
                }
                if (n.tokenizer) {
                    let r = this.defaults.tokenizer || new w(this.defaults);
                    for (let i in n.tokenizer) {
                        if (!(i in r)) throw new Error(`tokenizer '${i}' does not exist`);
                        if ([ "options", "rules", "lexer" ].includes(i)) continue;
                        let o = i, u = n.tokenizer[o], a = r[o];
                        r[o] = (...c) => {
                            let p = u.apply(r, c);
                            return p === false && (p = a.apply(r, c)), p;
                        };
                    }
                    s.tokenizer = r;
                }
                if (n.hooks) {
                    let r = this.defaults.hooks || new P;
                    for (let i in n.hooks) {
                        if (!(i in r)) throw new Error(`hook '${i}' does not exist`);
                        if ([ "options", "block" ].includes(i)) continue;
                        let o = i, u = n.hooks[o], a = r[o];
                        P.passThroughHooks.has(i) ? r[o] = c => {
                            if (this.defaults.async && P.passThroughHooksRespectAsync.has(i)) return (async () => {
                                let k = await u.call(r, c);
                                return a.call(r, k);
                            })();
                            let p = u.call(r, c);
                            return a.call(r, p);
                        } : r[o] = (...c) => {
                            if (this.defaults.async) return (async () => {
                                let k = await u.apply(r, c);
                                return k === false && (k = await a.apply(r, c)), k;
                            })();
                            let p = u.apply(r, c);
                            return p === false && (p = a.apply(r, c)), p;
                        };
                    }
                    s.hooks = r;
                }
                if (n.walkTokens) {
                    let r = this.defaults.walkTokens, i = n.walkTokens;
                    s.walkTokens = function(o) {
                        let u = [];
                        return u.push(i.call(this, o)), r && (u = u.concat(r.call(this, o))), u;
                    };
                }
                this.defaults = {
                    ...this.defaults,
                    ...s
                };
            })), this;
        }
        setOptions(e) {
            return this.defaults = {
                ...this.defaults,
                ...e
            }, this;
        }
        lexer(e, t) {
            return x.lex(e, t ?? this.defaults);
        }
        parser(e, t) {
            return b.parse(e, t ?? this.defaults);
        }
        parseMarkdown(e) {
            return (n, s) => {
                let r = {
                    ...s
                }, i = {
                    ...this.defaults,
                    ...r
                }, o = this.onError(!!i.silent, !!i.async);
                if (this.defaults.async === true && r.async === false) return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
                if (typeof n > "u" || n === null) return o(new Error("marked(): input parameter is undefined or null"));
                if (typeof n != "string") return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
                if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
                    let u = i.hooks ? await i.hooks.preprocess(n) : n, c = await (i.hooks ? await i.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(u, i), p = i.hooks ? await i.hooks.processAllTokens(c) : c;
                    i.walkTokens && await Promise.all(this.walkTokens(p, i.walkTokens));
                    let h = await (i.hooks ? await i.hooks.provideParser(e) : e ? b.parse : b.parseInline)(p, i);
                    return i.hooks ? await i.hooks.postprocess(h) : h;
                })().catch(o);
                try {
                    i.hooks && (n = i.hooks.preprocess(n));
                    let a = (i.hooks ? i.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(n, i);
                    i.hooks && (a = i.hooks.processAllTokens(a)), i.walkTokens && this.walkTokens(a, i.walkTokens);
                    let p = (i.hooks ? i.hooks.provideParser(e) : e ? b.parse : b.parseInline)(a, i);
                    return i.hooks && (p = i.hooks.postprocess(p)), p;
                } catch (u) {
                    return o(u);
                }
            };
        }
        onError(e, t) {
            return n => {
                if (n.message += `\nPlease report this to https://github.com/markedjs/marked.`, 
                e) {
                    let s = "<p>An error occurred:</p><pre>" + O(n.message + "", true) + "</pre>";
                    return t ? Promise.resolve(s) : s;
                }
                if (t) return Promise.reject(n);
                throw n;
            };
        }
    };
    var M = new D;
    function g(l, e) {
        return M.parse(l, e);
    }
    g.options = g.setOptions = function(l) {
        return M.setOptions(l), g.defaults = M.defaults, G(g.defaults), g;
    };
    g.getDefaults = z;
    g.defaults = T;
    g.use = function(...l) {
        return M.use(...l), g.defaults = M.defaults, G(g.defaults), g;
    };
    g.walkTokens = function(l, e) {
        return M.walkTokens(l, e);
    };
    g.parseInline = M.parseInline;
    g.Parser = b;
    g.parser = b.parse;
    g.Renderer = y;
    g.TextRenderer = L;
    g.Lexer = x;
    g.lexer = x.lex;
    g.Tokenizer = w;
    g.Hooks = P;
    g.parse = g;
    g.options;
    g.setOptions;
    g.use;
    g.walkTokens;
    g.parseInline;
    b.parse;
    x.lex;
    function corner(data, cornerExternalLinkTarget) {
        if (!data) {
            return "";
        }
        if (!/\/\//.test(data)) {
            data = "https://github.com/" + data;
        }
        data = data.replace(/^git\+/, "");
        cornerExternalLinkTarget = cornerExternalLinkTarget || "_blank";
        return `\n    <a href="${data}" target="${cornerExternalLinkTarget}" class="github-corner" aria-label="View source on GitHub">\n      <svg viewBox="0 0 250 250" aria-hidden="true">\n        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>\n        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>\n      </svg>\n    </a>\n  `;
    }
    function main(config) {
        const {hideSidebar: hideSidebar, name: name} = config;
        const aside = hideSidebar ? "" : `\n    <button class="sidebar-toggle" tabindex="-1" title="Press \\ to toggle">\n      <div class="sidebar-toggle-button" tabindex="0" aria-label="Hide primary navigation" aria-keyshortcuts="Use shortcut key \\" aria-controls="__sidebar" role="button">\n        <span></span><span></span><span></span>\n      </div>\n    </button>\n    <aside id="__sidebar" class="sidebar${!isMobile() ? " show" : ""}" tabindex="-1" role="none">\n      ${config.name ? `\n            <h1 class="app-name"><a class="app-name-link" data-nosearch>${config.logo ? `<img alt="${name}" src=${config.logo} />` : name}</a></h1>\n          ` : ""}\n      <div class="sidebar-nav" role="navigation" aria-label="primary">\x3c!--sidebar--\x3e</div>\n    </aside>\n  `;
        return `\n    <main role="presentation">\n      ${aside}\n      <section class="content">\n        <article id="main" class="markdown-section" role="main" tabindex="-1">\x3c!--main--\x3e</article>\n      </section>\n    </main>\n  `;
    }
    function cover() {
        return `\n    <section class="cover show" role="complementary" aria-label="cover">\n      <div class="mask"></div>\n      <div class="cover-main">\x3c!--cover--\x3e</div>\n    </section>\n  `;
    }
    function tree(toc, tpl = '<ul class="app-sub-sidebar">{inner}</ul>') {
        if (!toc || !toc.length) {
            return "";
        }
        let innerHTML = "";
        toc.forEach((node => {
            const title = node.title.replace(/(<([^>]+)>)/g, "");
            let current = `<li><a class="section-link" href="${node.slug}" title="${title}">${node.title}</a></li>`;
            if (node.children) {
                const children = tree(node.children, "<ul>{inner}</ul>");
                current = `<li><a class="section-link" href="${node.slug}" title="${title}">${node.title}</a>${children}</li>`;
            }
            innerHTML += current;
        }));
        return tpl.replace("{inner}", innerHTML);
    }
    function helper(className, content) {
        return `<p class="${className}">${content.slice(5).trim()}</p>`;
    }
    function theme(color) {
        return `<style>:root{--theme-color: ${color};}</style>`;
    }
    function genTree(toc, maxLevel) {
        const headlines = [];
        const last = {};
        toc.forEach((headline => {
            const level = headline.depth || 1;
            const len = level - 1;
            if (level > maxLevel) {
                return;
            }
            if (last[len]) {
                last[len].children = [ ...last[len].children || [], headline ];
            } else {
                headlines.push(headline);
            }
            last[level] = headline;
        }));
        return headlines;
    }
    let cache$1 = {};
    const re = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
    function lower(string) {
        return string.toLowerCase();
    }
    function slugify(str) {
        if (typeof str !== "string") {
            return "";
        }
        let slug = str.trim().normalize("NFC").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\uFE0F/g, "").replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "").replace(/[A-Z]+/g, lower).replace(/<[^>]+>/g, "").replace(re, "").replace(/\s/g, "-").replace(/^(\d)/, "_$1");
        let count = cache$1[slug];
        count = Object.keys(cache$1).includes(slug) ? count + 1 : 0;
        cache$1[slug] = count;
        if (count) {
            slug = slug + "-" + count;
        }
        return slug;
    }
    slugify.clear = function() {
        cache$1 = {};
    };
    var emojiData = {
        baseURL: "https://github.githubassets.com/images/icons/emoji/",
        data: {
            100: "unicode/1f4af.png?v8",
            1234: "unicode/1f522.png?v8",
            "+1": "unicode/1f44d.png?v8",
            "-1": "unicode/1f44e.png?v8",
            "1st_place_medal": "unicode/1f947.png?v8",
            "2nd_place_medal": "unicode/1f948.png?v8",
            "3rd_place_medal": "unicode/1f949.png?v8",
            "8ball": "unicode/1f3b1.png?v8",
            a: "unicode/1f170.png?v8",
            ab: "unicode/1f18e.png?v8",
            abacus: "unicode/1f9ee.png?v8",
            abc: "unicode/1f524.png?v8",
            abcd: "unicode/1f521.png?v8",
            accept: "unicode/1f251.png?v8",
            accessibility: "accessibility.png?v8",
            accordion: "unicode/1fa97.png?v8",
            adhesive_bandage: "unicode/1fa79.png?v8",
            adult: "unicode/1f9d1.png?v8",
            aerial_tramway: "unicode/1f6a1.png?v8",
            afghanistan: "unicode/1f1e6-1f1eb.png?v8",
            airplane: "unicode/2708.png?v8",
            aland_islands: "unicode/1f1e6-1f1fd.png?v8",
            alarm_clock: "unicode/23f0.png?v8",
            albania: "unicode/1f1e6-1f1f1.png?v8",
            alembic: "unicode/2697.png?v8",
            algeria: "unicode/1f1e9-1f1ff.png?v8",
            alien: "unicode/1f47d.png?v8",
            ambulance: "unicode/1f691.png?v8",
            american_samoa: "unicode/1f1e6-1f1f8.png?v8",
            amphora: "unicode/1f3fa.png?v8",
            anatomical_heart: "unicode/1fac0.png?v8",
            anchor: "unicode/2693.png?v8",
            andorra: "unicode/1f1e6-1f1e9.png?v8",
            angel: "unicode/1f47c.png?v8",
            anger: "unicode/1f4a2.png?v8",
            angola: "unicode/1f1e6-1f1f4.png?v8",
            angry: "unicode/1f620.png?v8",
            anguilla: "unicode/1f1e6-1f1ee.png?v8",
            anguished: "unicode/1f627.png?v8",
            ant: "unicode/1f41c.png?v8",
            antarctica: "unicode/1f1e6-1f1f6.png?v8",
            antigua_barbuda: "unicode/1f1e6-1f1ec.png?v8",
            apple: "unicode/1f34e.png?v8",
            aquarius: "unicode/2652.png?v8",
            argentina: "unicode/1f1e6-1f1f7.png?v8",
            aries: "unicode/2648.png?v8",
            armenia: "unicode/1f1e6-1f1f2.png?v8",
            arrow_backward: "unicode/25c0.png?v8",
            arrow_double_down: "unicode/23ec.png?v8",
            arrow_double_up: "unicode/23eb.png?v8",
            arrow_down: "unicode/2b07.png?v8",
            arrow_down_small: "unicode/1f53d.png?v8",
            arrow_forward: "unicode/25b6.png?v8",
            arrow_heading_down: "unicode/2935.png?v8",
            arrow_heading_up: "unicode/2934.png?v8",
            arrow_left: "unicode/2b05.png?v8",
            arrow_lower_left: "unicode/2199.png?v8",
            arrow_lower_right: "unicode/2198.png?v8",
            arrow_right: "unicode/27a1.png?v8",
            arrow_right_hook: "unicode/21aa.png?v8",
            arrow_up: "unicode/2b06.png?v8",
            arrow_up_down: "unicode/2195.png?v8",
            arrow_up_small: "unicode/1f53c.png?v8",
            arrow_upper_left: "unicode/2196.png?v8",
            arrow_upper_right: "unicode/2197.png?v8",
            arrows_clockwise: "unicode/1f503.png?v8",
            arrows_counterclockwise: "unicode/1f504.png?v8",
            art: "unicode/1f3a8.png?v8",
            articulated_lorry: "unicode/1f69b.png?v8",
            artificial_satellite: "unicode/1f6f0.png?v8",
            artist: "unicode/1f9d1-1f3a8.png?v8",
            aruba: "unicode/1f1e6-1f1fc.png?v8",
            ascension_island: "unicode/1f1e6-1f1e8.png?v8",
            asterisk: "unicode/002a-20e3.png?v8",
            astonished: "unicode/1f632.png?v8",
            astronaut: "unicode/1f9d1-1f680.png?v8",
            athletic_shoe: "unicode/1f45f.png?v8",
            atm: "unicode/1f3e7.png?v8",
            atom: "atom.png?v8",
            atom_symbol: "unicode/269b.png?v8",
            australia: "unicode/1f1e6-1f1fa.png?v8",
            austria: "unicode/1f1e6-1f1f9.png?v8",
            auto_rickshaw: "unicode/1f6fa.png?v8",
            avocado: "unicode/1f951.png?v8",
            axe: "unicode/1fa93.png?v8",
            azerbaijan: "unicode/1f1e6-1f1ff.png?v8",
            b: "unicode/1f171.png?v8",
            baby: "unicode/1f476.png?v8",
            baby_bottle: "unicode/1f37c.png?v8",
            baby_chick: "unicode/1f424.png?v8",
            baby_symbol: "unicode/1f6bc.png?v8",
            back: "unicode/1f519.png?v8",
            bacon: "unicode/1f953.png?v8",
            badger: "unicode/1f9a1.png?v8",
            badminton: "unicode/1f3f8.png?v8",
            bagel: "unicode/1f96f.png?v8",
            baggage_claim: "unicode/1f6c4.png?v8",
            baguette_bread: "unicode/1f956.png?v8",
            bahamas: "unicode/1f1e7-1f1f8.png?v8",
            bahrain: "unicode/1f1e7-1f1ed.png?v8",
            balance_scale: "unicode/2696.png?v8",
            bald_man: "unicode/1f468-1f9b2.png?v8",
            bald_woman: "unicode/1f469-1f9b2.png?v8",
            ballet_shoes: "unicode/1fa70.png?v8",
            balloon: "unicode/1f388.png?v8",
            ballot_box: "unicode/1f5f3.png?v8",
            ballot_box_with_check: "unicode/2611.png?v8",
            bamboo: "unicode/1f38d.png?v8",
            banana: "unicode/1f34c.png?v8",
            bangbang: "unicode/203c.png?v8",
            bangladesh: "unicode/1f1e7-1f1e9.png?v8",
            banjo: "unicode/1fa95.png?v8",
            bank: "unicode/1f3e6.png?v8",
            bar_chart: "unicode/1f4ca.png?v8",
            barbados: "unicode/1f1e7-1f1e7.png?v8",
            barber: "unicode/1f488.png?v8",
            baseball: "unicode/26be.png?v8",
            basecamp: "basecamp.png?v8",
            basecampy: "basecampy.png?v8",
            basket: "unicode/1f9fa.png?v8",
            basketball: "unicode/1f3c0.png?v8",
            basketball_man: "unicode/26f9-2642.png?v8",
            basketball_woman: "unicode/26f9-2640.png?v8",
            bat: "unicode/1f987.png?v8",
            bath: "unicode/1f6c0.png?v8",
            bathtub: "unicode/1f6c1.png?v8",
            battery: "unicode/1f50b.png?v8",
            beach_umbrella: "unicode/1f3d6.png?v8",
            beans: "unicode/1fad8.png?v8",
            bear: "unicode/1f43b.png?v8",
            bearded_person: "unicode/1f9d4.png?v8",
            beaver: "unicode/1f9ab.png?v8",
            bed: "unicode/1f6cf.png?v8",
            bee: "unicode/1f41d.png?v8",
            beer: "unicode/1f37a.png?v8",
            beers: "unicode/1f37b.png?v8",
            beetle: "unicode/1fab2.png?v8",
            beginner: "unicode/1f530.png?v8",
            belarus: "unicode/1f1e7-1f1fe.png?v8",
            belgium: "unicode/1f1e7-1f1ea.png?v8",
            belize: "unicode/1f1e7-1f1ff.png?v8",
            bell: "unicode/1f514.png?v8",
            bell_pepper: "unicode/1fad1.png?v8",
            bellhop_bell: "unicode/1f6ce.png?v8",
            benin: "unicode/1f1e7-1f1ef.png?v8",
            bento: "unicode/1f371.png?v8",
            bermuda: "unicode/1f1e7-1f1f2.png?v8",
            beverage_box: "unicode/1f9c3.png?v8",
            bhutan: "unicode/1f1e7-1f1f9.png?v8",
            bicyclist: "unicode/1f6b4.png?v8",
            bike: "unicode/1f6b2.png?v8",
            biking_man: "unicode/1f6b4-2642.png?v8",
            biking_woman: "unicode/1f6b4-2640.png?v8",
            bikini: "unicode/1f459.png?v8",
            billed_cap: "unicode/1f9e2.png?v8",
            biohazard: "unicode/2623.png?v8",
            bird: "unicode/1f426.png?v8",
            birthday: "unicode/1f382.png?v8",
            bison: "unicode/1f9ac.png?v8",
            biting_lip: "unicode/1fae6.png?v8",
            black_bird: "unicode/1f426-2b1b.png?v8",
            black_cat: "unicode/1f408-2b1b.png?v8",
            black_circle: "unicode/26ab.png?v8",
            black_flag: "unicode/1f3f4.png?v8",
            black_heart: "unicode/1f5a4.png?v8",
            black_joker: "unicode/1f0cf.png?v8",
            black_large_square: "unicode/2b1b.png?v8",
            black_medium_small_square: "unicode/25fe.png?v8",
            black_medium_square: "unicode/25fc.png?v8",
            black_nib: "unicode/2712.png?v8",
            black_small_square: "unicode/25aa.png?v8",
            black_square_button: "unicode/1f532.png?v8",
            blond_haired_man: "unicode/1f471-2642.png?v8",
            blond_haired_person: "unicode/1f471.png?v8",
            blond_haired_woman: "unicode/1f471-2640.png?v8",
            blonde_woman: "unicode/1f471-2640.png?v8",
            blossom: "unicode/1f33c.png?v8",
            blowfish: "unicode/1f421.png?v8",
            blue_book: "unicode/1f4d8.png?v8",
            blue_car: "unicode/1f699.png?v8",
            blue_heart: "unicode/1f499.png?v8",
            blue_square: "unicode/1f7e6.png?v8",
            blueberries: "unicode/1fad0.png?v8",
            blush: "unicode/1f60a.png?v8",
            boar: "unicode/1f417.png?v8",
            boat: "unicode/26f5.png?v8",
            bolivia: "unicode/1f1e7-1f1f4.png?v8",
            bomb: "unicode/1f4a3.png?v8",
            bone: "unicode/1f9b4.png?v8",
            book: "unicode/1f4d6.png?v8",
            bookmark: "unicode/1f516.png?v8",
            bookmark_tabs: "unicode/1f4d1.png?v8",
            books: "unicode/1f4da.png?v8",
            boom: "unicode/1f4a5.png?v8",
            boomerang: "unicode/1fa83.png?v8",
            boot: "unicode/1f462.png?v8",
            bosnia_herzegovina: "unicode/1f1e7-1f1e6.png?v8",
            botswana: "unicode/1f1e7-1f1fc.png?v8",
            bouncing_ball_man: "unicode/26f9-2642.png?v8",
            bouncing_ball_person: "unicode/26f9.png?v8",
            bouncing_ball_woman: "unicode/26f9-2640.png?v8",
            bouquet: "unicode/1f490.png?v8",
            bouvet_island: "unicode/1f1e7-1f1fb.png?v8",
            bow: "unicode/1f647.png?v8",
            bow_and_arrow: "unicode/1f3f9.png?v8",
            bowing_man: "unicode/1f647-2642.png?v8",
            bowing_woman: "unicode/1f647-2640.png?v8",
            bowl_with_spoon: "unicode/1f963.png?v8",
            bowling: "unicode/1f3b3.png?v8",
            bowtie: "bowtie.png?v8",
            boxing_glove: "unicode/1f94a.png?v8",
            boy: "unicode/1f466.png?v8",
            brain: "unicode/1f9e0.png?v8",
            brazil: "unicode/1f1e7-1f1f7.png?v8",
            bread: "unicode/1f35e.png?v8",
            breast_feeding: "unicode/1f931.png?v8",
            bricks: "unicode/1f9f1.png?v8",
            bride_with_veil: "unicode/1f470-2640.png?v8",
            bridge_at_night: "unicode/1f309.png?v8",
            briefcase: "unicode/1f4bc.png?v8",
            british_indian_ocean_territory: "unicode/1f1ee-1f1f4.png?v8",
            british_virgin_islands: "unicode/1f1fb-1f1ec.png?v8",
            broccoli: "unicode/1f966.png?v8",
            broken_heart: "unicode/1f494.png?v8",
            broom: "unicode/1f9f9.png?v8",
            brown_circle: "unicode/1f7e4.png?v8",
            brown_heart: "unicode/1f90e.png?v8",
            brown_square: "unicode/1f7eb.png?v8",
            brunei: "unicode/1f1e7-1f1f3.png?v8",
            bubble_tea: "unicode/1f9cb.png?v8",
            bubbles: "unicode/1fae7.png?v8",
            bucket: "unicode/1faa3.png?v8",
            bug: "unicode/1f41b.png?v8",
            building_construction: "unicode/1f3d7.png?v8",
            bulb: "unicode/1f4a1.png?v8",
            bulgaria: "unicode/1f1e7-1f1ec.png?v8",
            bullettrain_front: "unicode/1f685.png?v8",
            bullettrain_side: "unicode/1f684.png?v8",
            burkina_faso: "unicode/1f1e7-1f1eb.png?v8",
            burrito: "unicode/1f32f.png?v8",
            burundi: "unicode/1f1e7-1f1ee.png?v8",
            bus: "unicode/1f68c.png?v8",
            business_suit_levitating: "unicode/1f574.png?v8",
            busstop: "unicode/1f68f.png?v8",
            bust_in_silhouette: "unicode/1f464.png?v8",
            busts_in_silhouette: "unicode/1f465.png?v8",
            butter: "unicode/1f9c8.png?v8",
            butterfly: "unicode/1f98b.png?v8",
            cactus: "unicode/1f335.png?v8",
            cake: "unicode/1f370.png?v8",
            calendar: "unicode/1f4c6.png?v8",
            call_me_hand: "unicode/1f919.png?v8",
            calling: "unicode/1f4f2.png?v8",
            cambodia: "unicode/1f1f0-1f1ed.png?v8",
            camel: "unicode/1f42b.png?v8",
            camera: "unicode/1f4f7.png?v8",
            camera_flash: "unicode/1f4f8.png?v8",
            cameroon: "unicode/1f1e8-1f1f2.png?v8",
            camping: "unicode/1f3d5.png?v8",
            canada: "unicode/1f1e8-1f1e6.png?v8",
            canary_islands: "unicode/1f1ee-1f1e8.png?v8",
            cancer: "unicode/264b.png?v8",
            candle: "unicode/1f56f.png?v8",
            candy: "unicode/1f36c.png?v8",
            canned_food: "unicode/1f96b.png?v8",
            canoe: "unicode/1f6f6.png?v8",
            cape_verde: "unicode/1f1e8-1f1fb.png?v8",
            capital_abcd: "unicode/1f520.png?v8",
            capricorn: "unicode/2651.png?v8",
            car: "unicode/1f697.png?v8",
            card_file_box: "unicode/1f5c3.png?v8",
            card_index: "unicode/1f4c7.png?v8",
            card_index_dividers: "unicode/1f5c2.png?v8",
            caribbean_netherlands: "unicode/1f1e7-1f1f6.png?v8",
            carousel_horse: "unicode/1f3a0.png?v8",
            carpentry_saw: "unicode/1fa9a.png?v8",
            carrot: "unicode/1f955.png?v8",
            cartwheeling: "unicode/1f938.png?v8",
            cat: "unicode/1f431.png?v8",
            cat2: "unicode/1f408.png?v8",
            cayman_islands: "unicode/1f1f0-1f1fe.png?v8",
            cd: "unicode/1f4bf.png?v8",
            central_african_republic: "unicode/1f1e8-1f1eb.png?v8",
            ceuta_melilla: "unicode/1f1ea-1f1e6.png?v8",
            chad: "unicode/1f1f9-1f1e9.png?v8",
            chains: "unicode/26d3.png?v8",
            chair: "unicode/1fa91.png?v8",
            champagne: "unicode/1f37e.png?v8",
            chart: "unicode/1f4b9.png?v8",
            chart_with_downwards_trend: "unicode/1f4c9.png?v8",
            chart_with_upwards_trend: "unicode/1f4c8.png?v8",
            checkered_flag: "unicode/1f3c1.png?v8",
            cheese: "unicode/1f9c0.png?v8",
            cherries: "unicode/1f352.png?v8",
            cherry_blossom: "unicode/1f338.png?v8",
            chess_pawn: "unicode/265f.png?v8",
            chestnut: "unicode/1f330.png?v8",
            chicken: "unicode/1f414.png?v8",
            child: "unicode/1f9d2.png?v8",
            children_crossing: "unicode/1f6b8.png?v8",
            chile: "unicode/1f1e8-1f1f1.png?v8",
            chipmunk: "unicode/1f43f.png?v8",
            chocolate_bar: "unicode/1f36b.png?v8",
            chopsticks: "unicode/1f962.png?v8",
            christmas_island: "unicode/1f1e8-1f1fd.png?v8",
            christmas_tree: "unicode/1f384.png?v8",
            church: "unicode/26ea.png?v8",
            cinema: "unicode/1f3a6.png?v8",
            circus_tent: "unicode/1f3aa.png?v8",
            city_sunrise: "unicode/1f307.png?v8",
            city_sunset: "unicode/1f306.png?v8",
            cityscape: "unicode/1f3d9.png?v8",
            cl: "unicode/1f191.png?v8",
            clamp: "unicode/1f5dc.png?v8",
            clap: "unicode/1f44f.png?v8",
            clapper: "unicode/1f3ac.png?v8",
            classical_building: "unicode/1f3db.png?v8",
            climbing: "unicode/1f9d7.png?v8",
            climbing_man: "unicode/1f9d7-2642.png?v8",
            climbing_woman: "unicode/1f9d7-2640.png?v8",
            clinking_glasses: "unicode/1f942.png?v8",
            clipboard: "unicode/1f4cb.png?v8",
            clipperton_island: "unicode/1f1e8-1f1f5.png?v8",
            clock1: "unicode/1f550.png?v8",
            clock10: "unicode/1f559.png?v8",
            clock1030: "unicode/1f565.png?v8",
            clock11: "unicode/1f55a.png?v8",
            clock1130: "unicode/1f566.png?v8",
            clock12: "unicode/1f55b.png?v8",
            clock1230: "unicode/1f567.png?v8",
            clock130: "unicode/1f55c.png?v8",
            clock2: "unicode/1f551.png?v8",
            clock230: "unicode/1f55d.png?v8",
            clock3: "unicode/1f552.png?v8",
            clock330: "unicode/1f55e.png?v8",
            clock4: "unicode/1f553.png?v8",
            clock430: "unicode/1f55f.png?v8",
            clock5: "unicode/1f554.png?v8",
            clock530: "unicode/1f560.png?v8",
            clock6: "unicode/1f555.png?v8",
            clock630: "unicode/1f561.png?v8",
            clock7: "unicode/1f556.png?v8",
            clock730: "unicode/1f562.png?v8",
            clock8: "unicode/1f557.png?v8",
            clock830: "unicode/1f563.png?v8",
            clock9: "unicode/1f558.png?v8",
            clock930: "unicode/1f564.png?v8",
            closed_book: "unicode/1f4d5.png?v8",
            closed_lock_with_key: "unicode/1f510.png?v8",
            closed_umbrella: "unicode/1f302.png?v8",
            cloud: "unicode/2601.png?v8",
            cloud_with_lightning: "unicode/1f329.png?v8",
            cloud_with_lightning_and_rain: "unicode/26c8.png?v8",
            cloud_with_rain: "unicode/1f327.png?v8",
            cloud_with_snow: "unicode/1f328.png?v8",
            clown_face: "unicode/1f921.png?v8",
            clubs: "unicode/2663.png?v8",
            cn: "unicode/1f1e8-1f1f3.png?v8",
            coat: "unicode/1f9e5.png?v8",
            cockroach: "unicode/1fab3.png?v8",
            cocktail: "unicode/1f378.png?v8",
            coconut: "unicode/1f965.png?v8",
            cocos_islands: "unicode/1f1e8-1f1e8.png?v8",
            coffee: "unicode/2615.png?v8",
            coffin: "unicode/26b0.png?v8",
            coin: "unicode/1fa99.png?v8",
            cold_face: "unicode/1f976.png?v8",
            cold_sweat: "unicode/1f630.png?v8",
            collision: "unicode/1f4a5.png?v8",
            colombia: "unicode/1f1e8-1f1f4.png?v8",
            comet: "unicode/2604.png?v8",
            comoros: "unicode/1f1f0-1f1f2.png?v8",
            compass: "unicode/1f9ed.png?v8",
            computer: "unicode/1f4bb.png?v8",
            computer_mouse: "unicode/1f5b1.png?v8",
            confetti_ball: "unicode/1f38a.png?v8",
            confounded: "unicode/1f616.png?v8",
            confused: "unicode/1f615.png?v8",
            congo_brazzaville: "unicode/1f1e8-1f1ec.png?v8",
            congo_kinshasa: "unicode/1f1e8-1f1e9.png?v8",
            congratulations: "unicode/3297.png?v8",
            construction: "unicode/1f6a7.png?v8",
            construction_worker: "unicode/1f477.png?v8",
            construction_worker_man: "unicode/1f477-2642.png?v8",
            construction_worker_woman: "unicode/1f477-2640.png?v8",
            control_knobs: "unicode/1f39b.png?v8",
            convenience_store: "unicode/1f3ea.png?v8",
            cook: "unicode/1f9d1-1f373.png?v8",
            cook_islands: "unicode/1f1e8-1f1f0.png?v8",
            cookie: "unicode/1f36a.png?v8",
            cool: "unicode/1f192.png?v8",
            cop: "unicode/1f46e.png?v8",
            copilot: "copilot.png?v8",
            copyright: "unicode/00a9.png?v8",
            coral: "unicode/1fab8.png?v8",
            corn: "unicode/1f33d.png?v8",
            costa_rica: "unicode/1f1e8-1f1f7.png?v8",
            cote_divoire: "unicode/1f1e8-1f1ee.png?v8",
            couch_and_lamp: "unicode/1f6cb.png?v8",
            couple: "unicode/1f46b.png?v8",
            couple_with_heart: "unicode/1f491.png?v8",
            couple_with_heart_man_man: "unicode/1f468-2764-1f468.png?v8",
            couple_with_heart_woman_man: "unicode/1f469-2764-1f468.png?v8",
            couple_with_heart_woman_woman: "unicode/1f469-2764-1f469.png?v8",
            couplekiss: "unicode/1f48f.png?v8",
            couplekiss_man_man: "unicode/1f468-2764-1f48b-1f468.png?v8",
            couplekiss_man_woman: "unicode/1f469-2764-1f48b-1f468.png?v8",
            couplekiss_woman_woman: "unicode/1f469-2764-1f48b-1f469.png?v8",
            cow: "unicode/1f42e.png?v8",
            cow2: "unicode/1f404.png?v8",
            cowboy_hat_face: "unicode/1f920.png?v8",
            crab: "unicode/1f980.png?v8",
            crayon: "unicode/1f58d.png?v8",
            credit_card: "unicode/1f4b3.png?v8",
            crescent_moon: "unicode/1f319.png?v8",
            cricket: "unicode/1f997.png?v8",
            cricket_game: "unicode/1f3cf.png?v8",
            croatia: "unicode/1f1ed-1f1f7.png?v8",
            crocodile: "unicode/1f40a.png?v8",
            croissant: "unicode/1f950.png?v8",
            crossed_fingers: "unicode/1f91e.png?v8",
            crossed_flags: "unicode/1f38c.png?v8",
            crossed_swords: "unicode/2694.png?v8",
            crown: "unicode/1f451.png?v8",
            crutch: "unicode/1fa7c.png?v8",
            cry: "unicode/1f622.png?v8",
            crying_cat_face: "unicode/1f63f.png?v8",
            crystal_ball: "unicode/1f52e.png?v8",
            cuba: "unicode/1f1e8-1f1fa.png?v8",
            cucumber: "unicode/1f952.png?v8",
            cup_with_straw: "unicode/1f964.png?v8",
            cupcake: "unicode/1f9c1.png?v8",
            cupid: "unicode/1f498.png?v8",
            curacao: "unicode/1f1e8-1f1fc.png?v8",
            curling_stone: "unicode/1f94c.png?v8",
            curly_haired_man: "unicode/1f468-1f9b1.png?v8",
            curly_haired_woman: "unicode/1f469-1f9b1.png?v8",
            curly_loop: "unicode/27b0.png?v8",
            currency_exchange: "unicode/1f4b1.png?v8",
            curry: "unicode/1f35b.png?v8",
            cursing_face: "unicode/1f92c.png?v8",
            custard: "unicode/1f36e.png?v8",
            customs: "unicode/1f6c3.png?v8",
            cut_of_meat: "unicode/1f969.png?v8",
            cyclone: "unicode/1f300.png?v8",
            cyprus: "unicode/1f1e8-1f1fe.png?v8",
            czech_republic: "unicode/1f1e8-1f1ff.png?v8",
            dagger: "unicode/1f5e1.png?v8",
            dancer: "unicode/1f483.png?v8",
            dancers: "unicode/1f46f.png?v8",
            dancing_men: "unicode/1f46f-2642.png?v8",
            dancing_women: "unicode/1f46f-2640.png?v8",
            dango: "unicode/1f361.png?v8",
            dark_sunglasses: "unicode/1f576.png?v8",
            dart: "unicode/1f3af.png?v8",
            dash: "unicode/1f4a8.png?v8",
            date: "unicode/1f4c5.png?v8",
            de: "unicode/1f1e9-1f1ea.png?v8",
            deaf_man: "unicode/1f9cf-2642.png?v8",
            deaf_person: "unicode/1f9cf.png?v8",
            deaf_woman: "unicode/1f9cf-2640.png?v8",
            deciduous_tree: "unicode/1f333.png?v8",
            deer: "unicode/1f98c.png?v8",
            denmark: "unicode/1f1e9-1f1f0.png?v8",
            department_store: "unicode/1f3ec.png?v8",
            dependabot: "dependabot.png?v8",
            derelict_house: "unicode/1f3da.png?v8",
            desert: "unicode/1f3dc.png?v8",
            desert_island: "unicode/1f3dd.png?v8",
            desktop_computer: "unicode/1f5a5.png?v8",
            detective: "unicode/1f575.png?v8",
            diamond_shape_with_a_dot_inside: "unicode/1f4a0.png?v8",
            diamonds: "unicode/2666.png?v8",
            diego_garcia: "unicode/1f1e9-1f1ec.png?v8",
            disappointed: "unicode/1f61e.png?v8",
            disappointed_relieved: "unicode/1f625.png?v8",
            disguised_face: "unicode/1f978.png?v8",
            diving_mask: "unicode/1f93f.png?v8",
            diya_lamp: "unicode/1fa94.png?v8",
            dizzy: "unicode/1f4ab.png?v8",
            dizzy_face: "unicode/1f635.png?v8",
            djibouti: "unicode/1f1e9-1f1ef.png?v8",
            dna: "unicode/1f9ec.png?v8",
            do_not_litter: "unicode/1f6af.png?v8",
            dodo: "unicode/1f9a4.png?v8",
            dog: "unicode/1f436.png?v8",
            dog2: "unicode/1f415.png?v8",
            dollar: "unicode/1f4b5.png?v8",
            dolls: "unicode/1f38e.png?v8",
            dolphin: "unicode/1f42c.png?v8",
            dominica: "unicode/1f1e9-1f1f2.png?v8",
            dominican_republic: "unicode/1f1e9-1f1f4.png?v8",
            donkey: "unicode/1facf.png?v8",
            door: "unicode/1f6aa.png?v8",
            dotted_line_face: "unicode/1fae5.png?v8",
            doughnut: "unicode/1f369.png?v8",
            dove: "unicode/1f54a.png?v8",
            dragon: "unicode/1f409.png?v8",
            dragon_face: "unicode/1f432.png?v8",
            dress: "unicode/1f457.png?v8",
            dromedary_camel: "unicode/1f42a.png?v8",
            drooling_face: "unicode/1f924.png?v8",
            drop_of_blood: "unicode/1fa78.png?v8",
            droplet: "unicode/1f4a7.png?v8",
            drum: "unicode/1f941.png?v8",
            duck: "unicode/1f986.png?v8",
            dumpling: "unicode/1f95f.png?v8",
            dvd: "unicode/1f4c0.png?v8",
            "e-mail": "unicode/1f4e7.png?v8",
            eagle: "unicode/1f985.png?v8",
            ear: "unicode/1f442.png?v8",
            ear_of_rice: "unicode/1f33e.png?v8",
            ear_with_hearing_aid: "unicode/1f9bb.png?v8",
            earth_africa: "unicode/1f30d.png?v8",
            earth_americas: "unicode/1f30e.png?v8",
            earth_asia: "unicode/1f30f.png?v8",
            ecuador: "unicode/1f1ea-1f1e8.png?v8",
            egg: "unicode/1f95a.png?v8",
            eggplant: "unicode/1f346.png?v8",
            egypt: "unicode/1f1ea-1f1ec.png?v8",
            eight: "unicode/0038-20e3.png?v8",
            eight_pointed_black_star: "unicode/2734.png?v8",
            eight_spoked_asterisk: "unicode/2733.png?v8",
            eject_button: "unicode/23cf.png?v8",
            el_salvador: "unicode/1f1f8-1f1fb.png?v8",
            electric_plug: "unicode/1f50c.png?v8",
            electron: "electron.png?v8",
            elephant: "unicode/1f418.png?v8",
            elevator: "unicode/1f6d7.png?v8",
            elf: "unicode/1f9dd.png?v8",
            elf_man: "unicode/1f9dd-2642.png?v8",
            elf_woman: "unicode/1f9dd-2640.png?v8",
            email: "unicode/1f4e7.png?v8",
            empty_nest: "unicode/1fab9.png?v8",
            end: "unicode/1f51a.png?v8",
            england: "unicode/1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png?v8",
            envelope: "unicode/2709.png?v8",
            envelope_with_arrow: "unicode/1f4e9.png?v8",
            equatorial_guinea: "unicode/1f1ec-1f1f6.png?v8",
            eritrea: "unicode/1f1ea-1f1f7.png?v8",
            es: "unicode/1f1ea-1f1f8.png?v8",
            estonia: "unicode/1f1ea-1f1ea.png?v8",
            ethiopia: "unicode/1f1ea-1f1f9.png?v8",
            eu: "unicode/1f1ea-1f1fa.png?v8",
            euro: "unicode/1f4b6.png?v8",
            european_castle: "unicode/1f3f0.png?v8",
            european_post_office: "unicode/1f3e4.png?v8",
            european_union: "unicode/1f1ea-1f1fa.png?v8",
            evergreen_tree: "unicode/1f332.png?v8",
            exclamation: "unicode/2757.png?v8",
            exploding_head: "unicode/1f92f.png?v8",
            expressionless: "unicode/1f611.png?v8",
            eye: "unicode/1f441.png?v8",
            eye_speech_bubble: "unicode/1f441-1f5e8.png?v8",
            eyeglasses: "unicode/1f453.png?v8",
            eyes: "unicode/1f440.png?v8",
            face_exhaling: "unicode/1f62e-1f4a8.png?v8",
            face_holding_back_tears: "unicode/1f979.png?v8",
            face_in_clouds: "unicode/1f636-1f32b.png?v8",
            face_with_diagonal_mouth: "unicode/1fae4.png?v8",
            face_with_head_bandage: "unicode/1f915.png?v8",
            face_with_open_eyes_and_hand_over_mouth: "unicode/1fae2.png?v8",
            face_with_peeking_eye: "unicode/1fae3.png?v8",
            face_with_spiral_eyes: "unicode/1f635-1f4ab.png?v8",
            face_with_thermometer: "unicode/1f912.png?v8",
            facepalm: "unicode/1f926.png?v8",
            facepunch: "unicode/1f44a.png?v8",
            factory: "unicode/1f3ed.png?v8",
            factory_worker: "unicode/1f9d1-1f3ed.png?v8",
            fairy: "unicode/1f9da.png?v8",
            fairy_man: "unicode/1f9da-2642.png?v8",
            fairy_woman: "unicode/1f9da-2640.png?v8",
            falafel: "unicode/1f9c6.png?v8",
            falkland_islands: "unicode/1f1eb-1f1f0.png?v8",
            fallen_leaf: "unicode/1f342.png?v8",
            family: "unicode/1f46a.png?v8",
            family_man_boy: "unicode/1f468-1f466.png?v8",
            family_man_boy_boy: "unicode/1f468-1f466-1f466.png?v8",
            family_man_girl: "unicode/1f468-1f467.png?v8",
            family_man_girl_boy: "unicode/1f468-1f467-1f466.png?v8",
            family_man_girl_girl: "unicode/1f468-1f467-1f467.png?v8",
            family_man_man_boy: "unicode/1f468-1f468-1f466.png?v8",
            family_man_man_boy_boy: "unicode/1f468-1f468-1f466-1f466.png?v8",
            family_man_man_girl: "unicode/1f468-1f468-1f467.png?v8",
            family_man_man_girl_boy: "unicode/1f468-1f468-1f467-1f466.png?v8",
            family_man_man_girl_girl: "unicode/1f468-1f468-1f467-1f467.png?v8",
            family_man_woman_boy: "unicode/1f468-1f469-1f466.png?v8",
            family_man_woman_boy_boy: "unicode/1f468-1f469-1f466-1f466.png?v8",
            family_man_woman_girl: "unicode/1f468-1f469-1f467.png?v8",
            family_man_woman_girl_boy: "unicode/1f468-1f469-1f467-1f466.png?v8",
            family_man_woman_girl_girl: "unicode/1f468-1f469-1f467-1f467.png?v8",
            family_woman_boy: "unicode/1f469-1f466.png?v8",
            family_woman_boy_boy: "unicode/1f469-1f466-1f466.png?v8",
            family_woman_girl: "unicode/1f469-1f467.png?v8",
            family_woman_girl_boy: "unicode/1f469-1f467-1f466.png?v8",
            family_woman_girl_girl: "unicode/1f469-1f467-1f467.png?v8",
            family_woman_woman_boy: "unicode/1f469-1f469-1f466.png?v8",
            family_woman_woman_boy_boy: "unicode/1f469-1f469-1f466-1f466.png?v8",
            family_woman_woman_girl: "unicode/1f469-1f469-1f467.png?v8",
            family_woman_woman_girl_boy: "unicode/1f469-1f469-1f467-1f466.png?v8",
            family_woman_woman_girl_girl: "unicode/1f469-1f469-1f467-1f467.png?v8",
            farmer: "unicode/1f9d1-1f33e.png?v8",
            faroe_islands: "unicode/1f1eb-1f1f4.png?v8",
            fast_forward: "unicode/23e9.png?v8",
            fax: "unicode/1f4e0.png?v8",
            fearful: "unicode/1f628.png?v8",
            feather: "unicode/1fab6.png?v8",
            feelsgood: "feelsgood.png?v8",
            feet: "unicode/1f43e.png?v8",
            female_detective: "unicode/1f575-2640.png?v8",
            female_sign: "unicode/2640.png?v8",
            ferris_wheel: "unicode/1f3a1.png?v8",
            ferry: "unicode/26f4.png?v8",
            field_hockey: "unicode/1f3d1.png?v8",
            fiji: "unicode/1f1eb-1f1ef.png?v8",
            file_cabinet: "unicode/1f5c4.png?v8",
            file_folder: "unicode/1f4c1.png?v8",
            film_projector: "unicode/1f4fd.png?v8",
            film_strip: "unicode/1f39e.png?v8",
            finland: "unicode/1f1eb-1f1ee.png?v8",
            finnadie: "finnadie.png?v8",
            fire: "unicode/1f525.png?v8",
            fire_engine: "unicode/1f692.png?v8",
            fire_extinguisher: "unicode/1f9ef.png?v8",
            firecracker: "unicode/1f9e8.png?v8",
            firefighter: "unicode/1f9d1-1f692.png?v8",
            fireworks: "unicode/1f386.png?v8",
            first_quarter_moon: "unicode/1f313.png?v8",
            first_quarter_moon_with_face: "unicode/1f31b.png?v8",
            fish: "unicode/1f41f.png?v8",
            fish_cake: "unicode/1f365.png?v8",
            fishing_pole_and_fish: "unicode/1f3a3.png?v8",
            fishsticks: "fishsticks.png?v8",
            fist: "unicode/270a.png?v8",
            fist_left: "unicode/1f91b.png?v8",
            fist_oncoming: "unicode/1f44a.png?v8",
            fist_raised: "unicode/270a.png?v8",
            fist_right: "unicode/1f91c.png?v8",
            five: "unicode/0035-20e3.png?v8",
            flags: "unicode/1f38f.png?v8",
            flamingo: "unicode/1f9a9.png?v8",
            flashlight: "unicode/1f526.png?v8",
            flat_shoe: "unicode/1f97f.png?v8",
            flatbread: "unicode/1fad3.png?v8",
            fleur_de_lis: "unicode/269c.png?v8",
            flight_arrival: "unicode/1f6ec.png?v8",
            flight_departure: "unicode/1f6eb.png?v8",
            flipper: "unicode/1f42c.png?v8",
            floppy_disk: "unicode/1f4be.png?v8",
            flower_playing_cards: "unicode/1f3b4.png?v8",
            flushed: "unicode/1f633.png?v8",
            flute: "unicode/1fa88.png?v8",
            fly: "unicode/1fab0.png?v8",
            flying_disc: "unicode/1f94f.png?v8",
            flying_saucer: "unicode/1f6f8.png?v8",
            fog: "unicode/1f32b.png?v8",
            foggy: "unicode/1f301.png?v8",
            folding_hand_fan: "unicode/1faad.png?v8",
            fondue: "unicode/1fad5.png?v8",
            foot: "unicode/1f9b6.png?v8",
            football: "unicode/1f3c8.png?v8",
            footprints: "unicode/1f463.png?v8",
            fork_and_knife: "unicode/1f374.png?v8",
            fortune_cookie: "unicode/1f960.png?v8",
            fountain: "unicode/26f2.png?v8",
            fountain_pen: "unicode/1f58b.png?v8",
            four: "unicode/0034-20e3.png?v8",
            four_leaf_clover: "unicode/1f340.png?v8",
            fox_face: "unicode/1f98a.png?v8",
            fr: "unicode/1f1eb-1f1f7.png?v8",
            framed_picture: "unicode/1f5bc.png?v8",
            free: "unicode/1f193.png?v8",
            french_guiana: "unicode/1f1ec-1f1eb.png?v8",
            french_polynesia: "unicode/1f1f5-1f1eb.png?v8",
            french_southern_territories: "unicode/1f1f9-1f1eb.png?v8",
            fried_egg: "unicode/1f373.png?v8",
            fried_shrimp: "unicode/1f364.png?v8",
            fries: "unicode/1f35f.png?v8",
            frog: "unicode/1f438.png?v8",
            frowning: "unicode/1f626.png?v8",
            frowning_face: "unicode/2639.png?v8",
            frowning_man: "unicode/1f64d-2642.png?v8",
            frowning_person: "unicode/1f64d.png?v8",
            frowning_woman: "unicode/1f64d-2640.png?v8",
            fu: "unicode/1f595.png?v8",
            fuelpump: "unicode/26fd.png?v8",
            full_moon: "unicode/1f315.png?v8",
            full_moon_with_face: "unicode/1f31d.png?v8",
            funeral_urn: "unicode/26b1.png?v8",
            gabon: "unicode/1f1ec-1f1e6.png?v8",
            gambia: "unicode/1f1ec-1f1f2.png?v8",
            game_die: "unicode/1f3b2.png?v8",
            garlic: "unicode/1f9c4.png?v8",
            gb: "unicode/1f1ec-1f1e7.png?v8",
            gear: "unicode/2699.png?v8",
            gem: "unicode/1f48e.png?v8",
            gemini: "unicode/264a.png?v8",
            genie: "unicode/1f9de.png?v8",
            genie_man: "unicode/1f9de-2642.png?v8",
            genie_woman: "unicode/1f9de-2640.png?v8",
            georgia: "unicode/1f1ec-1f1ea.png?v8",
            ghana: "unicode/1f1ec-1f1ed.png?v8",
            ghost: "unicode/1f47b.png?v8",
            gibraltar: "unicode/1f1ec-1f1ee.png?v8",
            gift: "unicode/1f381.png?v8",
            gift_heart: "unicode/1f49d.png?v8",
            ginger_root: "unicode/1fada.png?v8",
            giraffe: "unicode/1f992.png?v8",
            girl: "unicode/1f467.png?v8",
            globe_with_meridians: "unicode/1f310.png?v8",
            gloves: "unicode/1f9e4.png?v8",
            goal_net: "unicode/1f945.png?v8",
            goat: "unicode/1f410.png?v8",
            goberserk: "goberserk.png?v8",
            godmode: "godmode.png?v8",
            goggles: "unicode/1f97d.png?v8",
            golf: "unicode/26f3.png?v8",
            golfing: "unicode/1f3cc.png?v8",
            golfing_man: "unicode/1f3cc-2642.png?v8",
            golfing_woman: "unicode/1f3cc-2640.png?v8",
            goose: "unicode/1fabf.png?v8",
            gorilla: "unicode/1f98d.png?v8",
            grapes: "unicode/1f347.png?v8",
            greece: "unicode/1f1ec-1f1f7.png?v8",
            green_apple: "unicode/1f34f.png?v8",
            green_book: "unicode/1f4d7.png?v8",
            green_circle: "unicode/1f7e2.png?v8",
            green_heart: "unicode/1f49a.png?v8",
            green_salad: "unicode/1f957.png?v8",
            green_square: "unicode/1f7e9.png?v8",
            greenland: "unicode/1f1ec-1f1f1.png?v8",
            grenada: "unicode/1f1ec-1f1e9.png?v8",
            grey_exclamation: "unicode/2755.png?v8",
            grey_heart: "unicode/1fa76.png?v8",
            grey_question: "unicode/2754.png?v8",
            grimacing: "unicode/1f62c.png?v8",
            grin: "unicode/1f601.png?v8",
            grinning: "unicode/1f600.png?v8",
            guadeloupe: "unicode/1f1ec-1f1f5.png?v8",
            guam: "unicode/1f1ec-1f1fa.png?v8",
            guard: "unicode/1f482.png?v8",
            guardsman: "unicode/1f482-2642.png?v8",
            guardswoman: "unicode/1f482-2640.png?v8",
            guatemala: "unicode/1f1ec-1f1f9.png?v8",
            guernsey: "unicode/1f1ec-1f1ec.png?v8",
            guide_dog: "unicode/1f9ae.png?v8",
            guinea: "unicode/1f1ec-1f1f3.png?v8",
            guinea_bissau: "unicode/1f1ec-1f1fc.png?v8",
            guitar: "unicode/1f3b8.png?v8",
            gun: "unicode/1f52b.png?v8",
            guyana: "unicode/1f1ec-1f1fe.png?v8",
            hair_pick: "unicode/1faae.png?v8",
            haircut: "unicode/1f487.png?v8",
            haircut_man: "unicode/1f487-2642.png?v8",
            haircut_woman: "unicode/1f487-2640.png?v8",
            haiti: "unicode/1f1ed-1f1f9.png?v8",
            hamburger: "unicode/1f354.png?v8",
            hammer: "unicode/1f528.png?v8",
            hammer_and_pick: "unicode/2692.png?v8",
            hammer_and_wrench: "unicode/1f6e0.png?v8",
            hamsa: "unicode/1faac.png?v8",
            hamster: "unicode/1f439.png?v8",
            hand: "unicode/270b.png?v8",
            hand_over_mouth: "unicode/1f92d.png?v8",
            hand_with_index_finger_and_thumb_crossed: "unicode/1faf0.png?v8",
            handbag: "unicode/1f45c.png?v8",
            handball_person: "unicode/1f93e.png?v8",
            handshake: "unicode/1f91d.png?v8",
            hankey: "unicode/1f4a9.png?v8",
            hash: "unicode/0023-20e3.png?v8",
            hatched_chick: "unicode/1f425.png?v8",
            hatching_chick: "unicode/1f423.png?v8",
            headphones: "unicode/1f3a7.png?v8",
            headstone: "unicode/1faa6.png?v8",
            health_worker: "unicode/1f9d1-2695.png?v8",
            hear_no_evil: "unicode/1f649.png?v8",
            heard_mcdonald_islands: "unicode/1f1ed-1f1f2.png?v8",
            heart: "unicode/2764.png?v8",
            heart_decoration: "unicode/1f49f.png?v8",
            heart_eyes: "unicode/1f60d.png?v8",
            heart_eyes_cat: "unicode/1f63b.png?v8",
            heart_hands: "unicode/1faf6.png?v8",
            heart_on_fire: "unicode/2764-1f525.png?v8",
            heartbeat: "unicode/1f493.png?v8",
            heartpulse: "unicode/1f497.png?v8",
            hearts: "unicode/2665.png?v8",
            heavy_check_mark: "unicode/2714.png?v8",
            heavy_division_sign: "unicode/2797.png?v8",
            heavy_dollar_sign: "unicode/1f4b2.png?v8",
            heavy_equals_sign: "unicode/1f7f0.png?v8",
            heavy_exclamation_mark: "unicode/2757.png?v8",
            heavy_heart_exclamation: "unicode/2763.png?v8",
            heavy_minus_sign: "unicode/2796.png?v8",
            heavy_multiplication_x: "unicode/2716.png?v8",
            heavy_plus_sign: "unicode/2795.png?v8",
            hedgehog: "unicode/1f994.png?v8",
            helicopter: "unicode/1f681.png?v8",
            herb: "unicode/1f33f.png?v8",
            hibiscus: "unicode/1f33a.png?v8",
            high_brightness: "unicode/1f506.png?v8",
            high_heel: "unicode/1f460.png?v8",
            hiking_boot: "unicode/1f97e.png?v8",
            hindu_temple: "unicode/1f6d5.png?v8",
            hippopotamus: "unicode/1f99b.png?v8",
            hocho: "unicode/1f52a.png?v8",
            hole: "unicode/1f573.png?v8",
            honduras: "unicode/1f1ed-1f1f3.png?v8",
            honey_pot: "unicode/1f36f.png?v8",
            honeybee: "unicode/1f41d.png?v8",
            hong_kong: "unicode/1f1ed-1f1f0.png?v8",
            hook: "unicode/1fa9d.png?v8",
            horse: "unicode/1f434.png?v8",
            horse_racing: "unicode/1f3c7.png?v8",
            hospital: "unicode/1f3e5.png?v8",
            hot_face: "unicode/1f975.png?v8",
            hot_pepper: "unicode/1f336.png?v8",
            hotdog: "unicode/1f32d.png?v8",
            hotel: "unicode/1f3e8.png?v8",
            hotsprings: "unicode/2668.png?v8",
            hourglass: "unicode/231b.png?v8",
            hourglass_flowing_sand: "unicode/23f3.png?v8",
            house: "unicode/1f3e0.png?v8",
            house_with_garden: "unicode/1f3e1.png?v8",
            houses: "unicode/1f3d8.png?v8",
            hugs: "unicode/1f917.png?v8",
            hungary: "unicode/1f1ed-1f1fa.png?v8",
            hurtrealbad: "hurtrealbad.png?v8",
            hushed: "unicode/1f62f.png?v8",
            hut: "unicode/1f6d6.png?v8",
            hyacinth: "unicode/1fabb.png?v8",
            ice_cream: "unicode/1f368.png?v8",
            ice_cube: "unicode/1f9ca.png?v8",
            ice_hockey: "unicode/1f3d2.png?v8",
            ice_skate: "unicode/26f8.png?v8",
            icecream: "unicode/1f366.png?v8",
            iceland: "unicode/1f1ee-1f1f8.png?v8",
            id: "unicode/1f194.png?v8",
            identification_card: "unicode/1faaa.png?v8",
            ideograph_advantage: "unicode/1f250.png?v8",
            imp: "unicode/1f47f.png?v8",
            inbox_tray: "unicode/1f4e5.png?v8",
            incoming_envelope: "unicode/1f4e8.png?v8",
            index_pointing_at_the_viewer: "unicode/1faf5.png?v8",
            india: "unicode/1f1ee-1f1f3.png?v8",
            indonesia: "unicode/1f1ee-1f1e9.png?v8",
            infinity: "unicode/267e.png?v8",
            information_desk_person: "unicode/1f481.png?v8",
            information_source: "unicode/2139.png?v8",
            innocent: "unicode/1f607.png?v8",
            interrobang: "unicode/2049.png?v8",
            iphone: "unicode/1f4f1.png?v8",
            iran: "unicode/1f1ee-1f1f7.png?v8",
            iraq: "unicode/1f1ee-1f1f6.png?v8",
            ireland: "unicode/1f1ee-1f1ea.png?v8",
            isle_of_man: "unicode/1f1ee-1f1f2.png?v8",
            israel: "unicode/1f1ee-1f1f1.png?v8",
            it: "unicode/1f1ee-1f1f9.png?v8",
            izakaya_lantern: "unicode/1f3ee.png?v8",
            jack_o_lantern: "unicode/1f383.png?v8",
            jamaica: "unicode/1f1ef-1f1f2.png?v8",
            japan: "unicode/1f5fe.png?v8",
            japanese_castle: "unicode/1f3ef.png?v8",
            japanese_goblin: "unicode/1f47a.png?v8",
            japanese_ogre: "unicode/1f479.png?v8",
            jar: "unicode/1fad9.png?v8",
            jeans: "unicode/1f456.png?v8",
            jellyfish: "unicode/1fabc.png?v8",
            jersey: "unicode/1f1ef-1f1ea.png?v8",
            jigsaw: "unicode/1f9e9.png?v8",
            jordan: "unicode/1f1ef-1f1f4.png?v8",
            joy: "unicode/1f602.png?v8",
            joy_cat: "unicode/1f639.png?v8",
            joystick: "unicode/1f579.png?v8",
            jp: "unicode/1f1ef-1f1f5.png?v8",
            judge: "unicode/1f9d1-2696.png?v8",
            juggling_person: "unicode/1f939.png?v8",
            kaaba: "unicode/1f54b.png?v8",
            kangaroo: "unicode/1f998.png?v8",
            kazakhstan: "unicode/1f1f0-1f1ff.png?v8",
            kenya: "unicode/1f1f0-1f1ea.png?v8",
            key: "unicode/1f511.png?v8",
            keyboard: "unicode/2328.png?v8",
            keycap_ten: "unicode/1f51f.png?v8",
            khanda: "unicode/1faaf.png?v8",
            kick_scooter: "unicode/1f6f4.png?v8",
            kimono: "unicode/1f458.png?v8",
            kiribati: "unicode/1f1f0-1f1ee.png?v8",
            kiss: "unicode/1f48b.png?v8",
            kissing: "unicode/1f617.png?v8",
            kissing_cat: "unicode/1f63d.png?v8",
            kissing_closed_eyes: "unicode/1f61a.png?v8",
            kissing_heart: "unicode/1f618.png?v8",
            kissing_smiling_eyes: "unicode/1f619.png?v8",
            kite: "unicode/1fa81.png?v8",
            kiwi_fruit: "unicode/1f95d.png?v8",
            kneeling_man: "unicode/1f9ce-2642.png?v8",
            kneeling_person: "unicode/1f9ce.png?v8",
            kneeling_woman: "unicode/1f9ce-2640.png?v8",
            knife: "unicode/1f52a.png?v8",
            knot: "unicode/1faa2.png?v8",
            koala: "unicode/1f428.png?v8",
            koko: "unicode/1f201.png?v8",
            kosovo: "unicode/1f1fd-1f1f0.png?v8",
            kr: "unicode/1f1f0-1f1f7.png?v8",
            kuwait: "unicode/1f1f0-1f1fc.png?v8",
            kyrgyzstan: "unicode/1f1f0-1f1ec.png?v8",
            lab_coat: "unicode/1f97c.png?v8",
            label: "unicode/1f3f7.png?v8",
            lacrosse: "unicode/1f94d.png?v8",
            ladder: "unicode/1fa9c.png?v8",
            lady_beetle: "unicode/1f41e.png?v8",
            lantern: "unicode/1f3ee.png?v8",
            laos: "unicode/1f1f1-1f1e6.png?v8",
            large_blue_circle: "unicode/1f535.png?v8",
            large_blue_diamond: "unicode/1f537.png?v8",
            large_orange_diamond: "unicode/1f536.png?v8",
            last_quarter_moon: "unicode/1f317.png?v8",
            last_quarter_moon_with_face: "unicode/1f31c.png?v8",
            latin_cross: "unicode/271d.png?v8",
            latvia: "unicode/1f1f1-1f1fb.png?v8",
            laughing: "unicode/1f606.png?v8",
            leafy_green: "unicode/1f96c.png?v8",
            leaves: "unicode/1f343.png?v8",
            lebanon: "unicode/1f1f1-1f1e7.png?v8",
            ledger: "unicode/1f4d2.png?v8",
            left_luggage: "unicode/1f6c5.png?v8",
            left_right_arrow: "unicode/2194.png?v8",
            left_speech_bubble: "unicode/1f5e8.png?v8",
            leftwards_arrow_with_hook: "unicode/21a9.png?v8",
            leftwards_hand: "unicode/1faf2.png?v8",
            leftwards_pushing_hand: "unicode/1faf7.png?v8",
            leg: "unicode/1f9b5.png?v8",
            lemon: "unicode/1f34b.png?v8",
            leo: "unicode/264c.png?v8",
            leopard: "unicode/1f406.png?v8",
            lesotho: "unicode/1f1f1-1f1f8.png?v8",
            level_slider: "unicode/1f39a.png?v8",
            liberia: "unicode/1f1f1-1f1f7.png?v8",
            libra: "unicode/264e.png?v8",
            libya: "unicode/1f1f1-1f1fe.png?v8",
            liechtenstein: "unicode/1f1f1-1f1ee.png?v8",
            light_blue_heart: "unicode/1fa75.png?v8",
            light_rail: "unicode/1f688.png?v8",
            link: "unicode/1f517.png?v8",
            lion: "unicode/1f981.png?v8",
            lips: "unicode/1f444.png?v8",
            lipstick: "unicode/1f484.png?v8",
            lithuania: "unicode/1f1f1-1f1f9.png?v8",
            lizard: "unicode/1f98e.png?v8",
            llama: "unicode/1f999.png?v8",
            lobster: "unicode/1f99e.png?v8",
            lock: "unicode/1f512.png?v8",
            lock_with_ink_pen: "unicode/1f50f.png?v8",
            lollipop: "unicode/1f36d.png?v8",
            long_drum: "unicode/1fa98.png?v8",
            loop: "unicode/27bf.png?v8",
            lotion_bottle: "unicode/1f9f4.png?v8",
            lotus: "unicode/1fab7.png?v8",
            lotus_position: "unicode/1f9d8.png?v8",
            lotus_position_man: "unicode/1f9d8-2642.png?v8",
            lotus_position_woman: "unicode/1f9d8-2640.png?v8",
            loud_sound: "unicode/1f50a.png?v8",
            loudspeaker: "unicode/1f4e2.png?v8",
            love_hotel: "unicode/1f3e9.png?v8",
            love_letter: "unicode/1f48c.png?v8",
            love_you_gesture: "unicode/1f91f.png?v8",
            low_battery: "unicode/1faab.png?v8",
            low_brightness: "unicode/1f505.png?v8",
            luggage: "unicode/1f9f3.png?v8",
            lungs: "unicode/1fac1.png?v8",
            luxembourg: "unicode/1f1f1-1f1fa.png?v8",
            lying_face: "unicode/1f925.png?v8",
            m: "unicode/24c2.png?v8",
            macau: "unicode/1f1f2-1f1f4.png?v8",
            macedonia: "unicode/1f1f2-1f1f0.png?v8",
            madagascar: "unicode/1f1f2-1f1ec.png?v8",
            mag: "unicode/1f50d.png?v8",
            mag_right: "unicode/1f50e.png?v8",
            mage: "unicode/1f9d9.png?v8",
            mage_man: "unicode/1f9d9-2642.png?v8",
            mage_woman: "unicode/1f9d9-2640.png?v8",
            magic_wand: "unicode/1fa84.png?v8",
            magnet: "unicode/1f9f2.png?v8",
            mahjong: "unicode/1f004.png?v8",
            mailbox: "unicode/1f4eb.png?v8",
            mailbox_closed: "unicode/1f4ea.png?v8",
            mailbox_with_mail: "unicode/1f4ec.png?v8",
            mailbox_with_no_mail: "unicode/1f4ed.png?v8",
            malawi: "unicode/1f1f2-1f1fc.png?v8",
            malaysia: "unicode/1f1f2-1f1fe.png?v8",
            maldives: "unicode/1f1f2-1f1fb.png?v8",
            male_detective: "unicode/1f575-2642.png?v8",
            male_sign: "unicode/2642.png?v8",
            mali: "unicode/1f1f2-1f1f1.png?v8",
            malta: "unicode/1f1f2-1f1f9.png?v8",
            mammoth: "unicode/1f9a3.png?v8",
            man: "unicode/1f468.png?v8",
            man_artist: "unicode/1f468-1f3a8.png?v8",
            man_astronaut: "unicode/1f468-1f680.png?v8",
            man_beard: "unicode/1f9d4-2642.png?v8",
            man_cartwheeling: "unicode/1f938-2642.png?v8",
            man_cook: "unicode/1f468-1f373.png?v8",
            man_dancing: "unicode/1f57a.png?v8",
            man_facepalming: "unicode/1f926-2642.png?v8",
            man_factory_worker: "unicode/1f468-1f3ed.png?v8",
            man_farmer: "unicode/1f468-1f33e.png?v8",
            man_feeding_baby: "unicode/1f468-1f37c.png?v8",
            man_firefighter: "unicode/1f468-1f692.png?v8",
            man_health_worker: "unicode/1f468-2695.png?v8",
            man_in_manual_wheelchair: "unicode/1f468-1f9bd.png?v8",
            man_in_motorized_wheelchair: "unicode/1f468-1f9bc.png?v8",
            man_in_tuxedo: "unicode/1f935-2642.png?v8",
            man_judge: "unicode/1f468-2696.png?v8",
            man_juggling: "unicode/1f939-2642.png?v8",
            man_mechanic: "unicode/1f468-1f527.png?v8",
            man_office_worker: "unicode/1f468-1f4bc.png?v8",
            man_pilot: "unicode/1f468-2708.png?v8",
            man_playing_handball: "unicode/1f93e-2642.png?v8",
            man_playing_water_polo: "unicode/1f93d-2642.png?v8",
            man_scientist: "unicode/1f468-1f52c.png?v8",
            man_shrugging: "unicode/1f937-2642.png?v8",
            man_singer: "unicode/1f468-1f3a4.png?v8",
            man_student: "unicode/1f468-1f393.png?v8",
            man_teacher: "unicode/1f468-1f3eb.png?v8",
            man_technologist: "unicode/1f468-1f4bb.png?v8",
            man_with_gua_pi_mao: "unicode/1f472.png?v8",
            man_with_probing_cane: "unicode/1f468-1f9af.png?v8",
            man_with_turban: "unicode/1f473-2642.png?v8",
            man_with_veil: "unicode/1f470-2642.png?v8",
            mandarin: "unicode/1f34a.png?v8",
            mango: "unicode/1f96d.png?v8",
            mans_shoe: "unicode/1f45e.png?v8",
            mantelpiece_clock: "unicode/1f570.png?v8",
            manual_wheelchair: "unicode/1f9bd.png?v8",
            maple_leaf: "unicode/1f341.png?v8",
            maracas: "unicode/1fa87.png?v8",
            marshall_islands: "unicode/1f1f2-1f1ed.png?v8",
            martial_arts_uniform: "unicode/1f94b.png?v8",
            martinique: "unicode/1f1f2-1f1f6.png?v8",
            mask: "unicode/1f637.png?v8",
            massage: "unicode/1f486.png?v8",
            massage_man: "unicode/1f486-2642.png?v8",
            massage_woman: "unicode/1f486-2640.png?v8",
            mate: "unicode/1f9c9.png?v8",
            mauritania: "unicode/1f1f2-1f1f7.png?v8",
            mauritius: "unicode/1f1f2-1f1fa.png?v8",
            mayotte: "unicode/1f1fe-1f1f9.png?v8",
            meat_on_bone: "unicode/1f356.png?v8",
            mechanic: "unicode/1f9d1-1f527.png?v8",
            mechanical_arm: "unicode/1f9be.png?v8",
            mechanical_leg: "unicode/1f9bf.png?v8",
            medal_military: "unicode/1f396.png?v8",
            medal_sports: "unicode/1f3c5.png?v8",
            medical_symbol: "unicode/2695.png?v8",
            mega: "unicode/1f4e3.png?v8",
            melon: "unicode/1f348.png?v8",
            melting_face: "unicode/1fae0.png?v8",
            memo: "unicode/1f4dd.png?v8",
            men_wrestling: "unicode/1f93c-2642.png?v8",
            mending_heart: "unicode/2764-1fa79.png?v8",
            menorah: "unicode/1f54e.png?v8",
            mens: "unicode/1f6b9.png?v8",
            mermaid: "unicode/1f9dc-2640.png?v8",
            merman: "unicode/1f9dc-2642.png?v8",
            merperson: "unicode/1f9dc.png?v8",
            metal: "unicode/1f918.png?v8",
            metro: "unicode/1f687.png?v8",
            mexico: "unicode/1f1f2-1f1fd.png?v8",
            microbe: "unicode/1f9a0.png?v8",
            micronesia: "unicode/1f1eb-1f1f2.png?v8",
            microphone: "unicode/1f3a4.png?v8",
            microscope: "unicode/1f52c.png?v8",
            middle_finger: "unicode/1f595.png?v8",
            military_helmet: "unicode/1fa96.png?v8",
            milk_glass: "unicode/1f95b.png?v8",
            milky_way: "unicode/1f30c.png?v8",
            minibus: "unicode/1f690.png?v8",
            minidisc: "unicode/1f4bd.png?v8",
            mirror: "unicode/1fa9e.png?v8",
            mirror_ball: "unicode/1faa9.png?v8",
            mobile_phone_off: "unicode/1f4f4.png?v8",
            moldova: "unicode/1f1f2-1f1e9.png?v8",
            monaco: "unicode/1f1f2-1f1e8.png?v8",
            money_mouth_face: "unicode/1f911.png?v8",
            money_with_wings: "unicode/1f4b8.png?v8",
            moneybag: "unicode/1f4b0.png?v8",
            mongolia: "unicode/1f1f2-1f1f3.png?v8",
            monkey: "unicode/1f412.png?v8",
            monkey_face: "unicode/1f435.png?v8",
            monocle_face: "unicode/1f9d0.png?v8",
            monorail: "unicode/1f69d.png?v8",
            montenegro: "unicode/1f1f2-1f1ea.png?v8",
            montserrat: "unicode/1f1f2-1f1f8.png?v8",
            moon: "unicode/1f314.png?v8",
            moon_cake: "unicode/1f96e.png?v8",
            moose: "unicode/1face.png?v8",
            morocco: "unicode/1f1f2-1f1e6.png?v8",
            mortar_board: "unicode/1f393.png?v8",
            mosque: "unicode/1f54c.png?v8",
            mosquito: "unicode/1f99f.png?v8",
            motor_boat: "unicode/1f6e5.png?v8",
            motor_scooter: "unicode/1f6f5.png?v8",
            motorcycle: "unicode/1f3cd.png?v8",
            motorized_wheelchair: "unicode/1f9bc.png?v8",
            motorway: "unicode/1f6e3.png?v8",
            mount_fuji: "unicode/1f5fb.png?v8",
            mountain: "unicode/26f0.png?v8",
            mountain_bicyclist: "unicode/1f6b5.png?v8",
            mountain_biking_man: "unicode/1f6b5-2642.png?v8",
            mountain_biking_woman: "unicode/1f6b5-2640.png?v8",
            mountain_cableway: "unicode/1f6a0.png?v8",
            mountain_railway: "unicode/1f69e.png?v8",
            mountain_snow: "unicode/1f3d4.png?v8",
            mouse: "unicode/1f42d.png?v8",
            mouse2: "unicode/1f401.png?v8",
            mouse_trap: "unicode/1faa4.png?v8",
            movie_camera: "unicode/1f3a5.png?v8",
            moyai: "unicode/1f5ff.png?v8",
            mozambique: "unicode/1f1f2-1f1ff.png?v8",
            mrs_claus: "unicode/1f936.png?v8",
            muscle: "unicode/1f4aa.png?v8",
            mushroom: "unicode/1f344.png?v8",
            musical_keyboard: "unicode/1f3b9.png?v8",
            musical_note: "unicode/1f3b5.png?v8",
            musical_score: "unicode/1f3bc.png?v8",
            mute: "unicode/1f507.png?v8",
            mx_claus: "unicode/1f9d1-1f384.png?v8",
            myanmar: "unicode/1f1f2-1f1f2.png?v8",
            nail_care: "unicode/1f485.png?v8",
            name_badge: "unicode/1f4db.png?v8",
            namibia: "unicode/1f1f3-1f1e6.png?v8",
            national_park: "unicode/1f3de.png?v8",
            nauru: "unicode/1f1f3-1f1f7.png?v8",
            nauseated_face: "unicode/1f922.png?v8",
            nazar_amulet: "unicode/1f9ff.png?v8",
            neckbeard: "neckbeard.png?v8",
            necktie: "unicode/1f454.png?v8",
            negative_squared_cross_mark: "unicode/274e.png?v8",
            nepal: "unicode/1f1f3-1f1f5.png?v8",
            nerd_face: "unicode/1f913.png?v8",
            nest_with_eggs: "unicode/1faba.png?v8",
            nesting_dolls: "unicode/1fa86.png?v8",
            netherlands: "unicode/1f1f3-1f1f1.png?v8",
            neutral_face: "unicode/1f610.png?v8",
            new: "unicode/1f195.png?v8",
            new_caledonia: "unicode/1f1f3-1f1e8.png?v8",
            new_moon: "unicode/1f311.png?v8",
            new_moon_with_face: "unicode/1f31a.png?v8",
            new_zealand: "unicode/1f1f3-1f1ff.png?v8",
            newspaper: "unicode/1f4f0.png?v8",
            newspaper_roll: "unicode/1f5de.png?v8",
            next_track_button: "unicode/23ed.png?v8",
            ng: "unicode/1f196.png?v8",
            ng_man: "unicode/1f645-2642.png?v8",
            ng_woman: "unicode/1f645-2640.png?v8",
            nicaragua: "unicode/1f1f3-1f1ee.png?v8",
            niger: "unicode/1f1f3-1f1ea.png?v8",
            nigeria: "unicode/1f1f3-1f1ec.png?v8",
            night_with_stars: "unicode/1f303.png?v8",
            nine: "unicode/0039-20e3.png?v8",
            ninja: "unicode/1f977.png?v8",
            niue: "unicode/1f1f3-1f1fa.png?v8",
            no_bell: "unicode/1f515.png?v8",
            no_bicycles: "unicode/1f6b3.png?v8",
            no_entry: "unicode/26d4.png?v8",
            no_entry_sign: "unicode/1f6ab.png?v8",
            no_good: "unicode/1f645.png?v8",
            no_good_man: "unicode/1f645-2642.png?v8",
            no_good_woman: "unicode/1f645-2640.png?v8",
            no_mobile_phones: "unicode/1f4f5.png?v8",
            no_mouth: "unicode/1f636.png?v8",
            no_pedestrians: "unicode/1f6b7.png?v8",
            no_smoking: "unicode/1f6ad.png?v8",
            "non-potable_water": "unicode/1f6b1.png?v8",
            norfolk_island: "unicode/1f1f3-1f1eb.png?v8",
            north_korea: "unicode/1f1f0-1f1f5.png?v8",
            northern_mariana_islands: "unicode/1f1f2-1f1f5.png?v8",
            norway: "unicode/1f1f3-1f1f4.png?v8",
            nose: "unicode/1f443.png?v8",
            notebook: "unicode/1f4d3.png?v8",
            notebook_with_decorative_cover: "unicode/1f4d4.png?v8",
            notes: "unicode/1f3b6.png?v8",
            nut_and_bolt: "unicode/1f529.png?v8",
            o: "unicode/2b55.png?v8",
            o2: "unicode/1f17e.png?v8",
            ocean: "unicode/1f30a.png?v8",
            octocat: "octocat.png?v8",
            octopus: "unicode/1f419.png?v8",
            oden: "unicode/1f362.png?v8",
            office: "unicode/1f3e2.png?v8",
            office_worker: "unicode/1f9d1-1f4bc.png?v8",
            oil_drum: "unicode/1f6e2.png?v8",
            ok: "unicode/1f197.png?v8",
            ok_hand: "unicode/1f44c.png?v8",
            ok_man: "unicode/1f646-2642.png?v8",
            ok_person: "unicode/1f646.png?v8",
            ok_woman: "unicode/1f646-2640.png?v8",
            old_key: "unicode/1f5dd.png?v8",
            older_adult: "unicode/1f9d3.png?v8",
            older_man: "unicode/1f474.png?v8",
            older_woman: "unicode/1f475.png?v8",
            olive: "unicode/1fad2.png?v8",
            om: "unicode/1f549.png?v8",
            oman: "unicode/1f1f4-1f1f2.png?v8",
            on: "unicode/1f51b.png?v8",
            oncoming_automobile: "unicode/1f698.png?v8",
            oncoming_bus: "unicode/1f68d.png?v8",
            oncoming_police_car: "unicode/1f694.png?v8",
            oncoming_taxi: "unicode/1f696.png?v8",
            one: "unicode/0031-20e3.png?v8",
            one_piece_swimsuit: "unicode/1fa71.png?v8",
            onion: "unicode/1f9c5.png?v8",
            open_book: "unicode/1f4d6.png?v8",
            open_file_folder: "unicode/1f4c2.png?v8",
            open_hands: "unicode/1f450.png?v8",
            open_mouth: "unicode/1f62e.png?v8",
            open_umbrella: "unicode/2602.png?v8",
            ophiuchus: "unicode/26ce.png?v8",
            orange: "unicode/1f34a.png?v8",
            orange_book: "unicode/1f4d9.png?v8",
            orange_circle: "unicode/1f7e0.png?v8",
            orange_heart: "unicode/1f9e1.png?v8",
            orange_square: "unicode/1f7e7.png?v8",
            orangutan: "unicode/1f9a7.png?v8",
            orthodox_cross: "unicode/2626.png?v8",
            otter: "unicode/1f9a6.png?v8",
            outbox_tray: "unicode/1f4e4.png?v8",
            owl: "unicode/1f989.png?v8",
            ox: "unicode/1f402.png?v8",
            oyster: "unicode/1f9aa.png?v8",
            package: "unicode/1f4e6.png?v8",
            page_facing_up: "unicode/1f4c4.png?v8",
            page_with_curl: "unicode/1f4c3.png?v8",
            pager: "unicode/1f4df.png?v8",
            paintbrush: "unicode/1f58c.png?v8",
            pakistan: "unicode/1f1f5-1f1f0.png?v8",
            palau: "unicode/1f1f5-1f1fc.png?v8",
            palestinian_territories: "unicode/1f1f5-1f1f8.png?v8",
            palm_down_hand: "unicode/1faf3.png?v8",
            palm_tree: "unicode/1f334.png?v8",
            palm_up_hand: "unicode/1faf4.png?v8",
            palms_up_together: "unicode/1f932.png?v8",
            panama: "unicode/1f1f5-1f1e6.png?v8",
            pancakes: "unicode/1f95e.png?v8",
            panda_face: "unicode/1f43c.png?v8",
            paperclip: "unicode/1f4ce.png?v8",
            paperclips: "unicode/1f587.png?v8",
            papua_new_guinea: "unicode/1f1f5-1f1ec.png?v8",
            parachute: "unicode/1fa82.png?v8",
            paraguay: "unicode/1f1f5-1f1fe.png?v8",
            parasol_on_ground: "unicode/26f1.png?v8",
            parking: "unicode/1f17f.png?v8",
            parrot: "unicode/1f99c.png?v8",
            part_alternation_mark: "unicode/303d.png?v8",
            partly_sunny: "unicode/26c5.png?v8",
            partying_face: "unicode/1f973.png?v8",
            passenger_ship: "unicode/1f6f3.png?v8",
            passport_control: "unicode/1f6c2.png?v8",
            pause_button: "unicode/23f8.png?v8",
            paw_prints: "unicode/1f43e.png?v8",
            pea_pod: "unicode/1fadb.png?v8",
            peace_symbol: "unicode/262e.png?v8",
            peach: "unicode/1f351.png?v8",
            peacock: "unicode/1f99a.png?v8",
            peanuts: "unicode/1f95c.png?v8",
            pear: "unicode/1f350.png?v8",
            pen: "unicode/1f58a.png?v8",
            pencil: "unicode/1f4dd.png?v8",
            pencil2: "unicode/270f.png?v8",
            penguin: "unicode/1f427.png?v8",
            pensive: "unicode/1f614.png?v8",
            people_holding_hands: "unicode/1f9d1-1f91d-1f9d1.png?v8",
            people_hugging: "unicode/1fac2.png?v8",
            performing_arts: "unicode/1f3ad.png?v8",
            persevere: "unicode/1f623.png?v8",
            person_bald: "unicode/1f9d1-1f9b2.png?v8",
            person_curly_hair: "unicode/1f9d1-1f9b1.png?v8",
            person_feeding_baby: "unicode/1f9d1-1f37c.png?v8",
            person_fencing: "unicode/1f93a.png?v8",
            person_in_manual_wheelchair: "unicode/1f9d1-1f9bd.png?v8",
            person_in_motorized_wheelchair: "unicode/1f9d1-1f9bc.png?v8",
            person_in_tuxedo: "unicode/1f935.png?v8",
            person_red_hair: "unicode/1f9d1-1f9b0.png?v8",
            person_white_hair: "unicode/1f9d1-1f9b3.png?v8",
            person_with_crown: "unicode/1fac5.png?v8",
            person_with_probing_cane: "unicode/1f9d1-1f9af.png?v8",
            person_with_turban: "unicode/1f473.png?v8",
            person_with_veil: "unicode/1f470.png?v8",
            peru: "unicode/1f1f5-1f1ea.png?v8",
            petri_dish: "unicode/1f9eb.png?v8",
            philippines: "unicode/1f1f5-1f1ed.png?v8",
            phone: "unicode/260e.png?v8",
            pick: "unicode/26cf.png?v8",
            pickup_truck: "unicode/1f6fb.png?v8",
            pie: "unicode/1f967.png?v8",
            pig: "unicode/1f437.png?v8",
            pig2: "unicode/1f416.png?v8",
            pig_nose: "unicode/1f43d.png?v8",
            pill: "unicode/1f48a.png?v8",
            pilot: "unicode/1f9d1-2708.png?v8",
            pinata: "unicode/1fa85.png?v8",
            pinched_fingers: "unicode/1f90c.png?v8",
            pinching_hand: "unicode/1f90f.png?v8",
            pineapple: "unicode/1f34d.png?v8",
            ping_pong: "unicode/1f3d3.png?v8",
            pink_heart: "unicode/1fa77.png?v8",
            pirate_flag: "unicode/1f3f4-2620.png?v8",
            pisces: "unicode/2653.png?v8",
            pitcairn_islands: "unicode/1f1f5-1f1f3.png?v8",
            pizza: "unicode/1f355.png?v8",
            placard: "unicode/1faa7.png?v8",
            place_of_worship: "unicode/1f6d0.png?v8",
            plate_with_cutlery: "unicode/1f37d.png?v8",
            play_or_pause_button: "unicode/23ef.png?v8",
            playground_slide: "unicode/1f6dd.png?v8",
            pleading_face: "unicode/1f97a.png?v8",
            plunger: "unicode/1faa0.png?v8",
            point_down: "unicode/1f447.png?v8",
            point_left: "unicode/1f448.png?v8",
            point_right: "unicode/1f449.png?v8",
            point_up: "unicode/261d.png?v8",
            point_up_2: "unicode/1f446.png?v8",
            poland: "unicode/1f1f5-1f1f1.png?v8",
            polar_bear: "unicode/1f43b-2744.png?v8",
            police_car: "unicode/1f693.png?v8",
            police_officer: "unicode/1f46e.png?v8",
            policeman: "unicode/1f46e-2642.png?v8",
            policewoman: "unicode/1f46e-2640.png?v8",
            poodle: "unicode/1f429.png?v8",
            poop: "unicode/1f4a9.png?v8",
            popcorn: "unicode/1f37f.png?v8",
            portugal: "unicode/1f1f5-1f1f9.png?v8",
            post_office: "unicode/1f3e3.png?v8",
            postal_horn: "unicode/1f4ef.png?v8",
            postbox: "unicode/1f4ee.png?v8",
            potable_water: "unicode/1f6b0.png?v8",
            potato: "unicode/1f954.png?v8",
            potted_plant: "unicode/1fab4.png?v8",
            pouch: "unicode/1f45d.png?v8",
            poultry_leg: "unicode/1f357.png?v8",
            pound: "unicode/1f4b7.png?v8",
            pouring_liquid: "unicode/1fad7.png?v8",
            pout: "unicode/1f621.png?v8",
            pouting_cat: "unicode/1f63e.png?v8",
            pouting_face: "unicode/1f64e.png?v8",
            pouting_man: "unicode/1f64e-2642.png?v8",
            pouting_woman: "unicode/1f64e-2640.png?v8",
            pray: "unicode/1f64f.png?v8",
            prayer_beads: "unicode/1f4ff.png?v8",
            pregnant_man: "unicode/1fac3.png?v8",
            pregnant_person: "unicode/1fac4.png?v8",
            pregnant_woman: "unicode/1f930.png?v8",
            pretzel: "unicode/1f968.png?v8",
            previous_track_button: "unicode/23ee.png?v8",
            prince: "unicode/1f934.png?v8",
            princess: "unicode/1f478.png?v8",
            printer: "unicode/1f5a8.png?v8",
            probing_cane: "unicode/1f9af.png?v8",
            puerto_rico: "unicode/1f1f5-1f1f7.png?v8",
            punch: "unicode/1f44a.png?v8",
            purple_circle: "unicode/1f7e3.png?v8",
            purple_heart: "unicode/1f49c.png?v8",
            purple_square: "unicode/1f7ea.png?v8",
            purse: "unicode/1f45b.png?v8",
            pushpin: "unicode/1f4cc.png?v8",
            put_litter_in_its_place: "unicode/1f6ae.png?v8",
            qatar: "unicode/1f1f6-1f1e6.png?v8",
            question: "unicode/2753.png?v8",
            rabbit: "unicode/1f430.png?v8",
            rabbit2: "unicode/1f407.png?v8",
            raccoon: "unicode/1f99d.png?v8",
            racehorse: "unicode/1f40e.png?v8",
            racing_car: "unicode/1f3ce.png?v8",
            radio: "unicode/1f4fb.png?v8",
            radio_button: "unicode/1f518.png?v8",
            radioactive: "unicode/2622.png?v8",
            rage: "unicode/1f621.png?v8",
            rage1: "rage1.png?v8",
            rage2: "rage2.png?v8",
            rage3: "rage3.png?v8",
            rage4: "rage4.png?v8",
            railway_car: "unicode/1f683.png?v8",
            railway_track: "unicode/1f6e4.png?v8",
            rainbow: "unicode/1f308.png?v8",
            rainbow_flag: "unicode/1f3f3-1f308.png?v8",
            raised_back_of_hand: "unicode/1f91a.png?v8",
            raised_eyebrow: "unicode/1f928.png?v8",
            raised_hand: "unicode/270b.png?v8",
            raised_hand_with_fingers_splayed: "unicode/1f590.png?v8",
            raised_hands: "unicode/1f64c.png?v8",
            raising_hand: "unicode/1f64b.png?v8",
            raising_hand_man: "unicode/1f64b-2642.png?v8",
            raising_hand_woman: "unicode/1f64b-2640.png?v8",
            ram: "unicode/1f40f.png?v8",
            ramen: "unicode/1f35c.png?v8",
            rat: "unicode/1f400.png?v8",
            razor: "unicode/1fa92.png?v8",
            receipt: "unicode/1f9fe.png?v8",
            record_button: "unicode/23fa.png?v8",
            recycle: "unicode/267b.png?v8",
            red_car: "unicode/1f697.png?v8",
            red_circle: "unicode/1f534.png?v8",
            red_envelope: "unicode/1f9e7.png?v8",
            red_haired_man: "unicode/1f468-1f9b0.png?v8",
            red_haired_woman: "unicode/1f469-1f9b0.png?v8",
            red_square: "unicode/1f7e5.png?v8",
            registered: "unicode/00ae.png?v8",
            relaxed: "unicode/263a.png?v8",
            relieved: "unicode/1f60c.png?v8",
            reminder_ribbon: "unicode/1f397.png?v8",
            repeat: "unicode/1f501.png?v8",
            repeat_one: "unicode/1f502.png?v8",
            rescue_worker_helmet: "unicode/26d1.png?v8",
            restroom: "unicode/1f6bb.png?v8",
            reunion: "unicode/1f1f7-1f1ea.png?v8",
            revolving_hearts: "unicode/1f49e.png?v8",
            rewind: "unicode/23ea.png?v8",
            rhinoceros: "unicode/1f98f.png?v8",
            ribbon: "unicode/1f380.png?v8",
            rice: "unicode/1f35a.png?v8",
            rice_ball: "unicode/1f359.png?v8",
            rice_cracker: "unicode/1f358.png?v8",
            rice_scene: "unicode/1f391.png?v8",
            right_anger_bubble: "unicode/1f5ef.png?v8",
            rightwards_hand: "unicode/1faf1.png?v8",
            rightwards_pushing_hand: "unicode/1faf8.png?v8",
            ring: "unicode/1f48d.png?v8",
            ring_buoy: "unicode/1f6df.png?v8",
            ringed_planet: "unicode/1fa90.png?v8",
            robot: "unicode/1f916.png?v8",
            rock: "unicode/1faa8.png?v8",
            rocket: "unicode/1f680.png?v8",
            rofl: "unicode/1f923.png?v8",
            roll_eyes: "unicode/1f644.png?v8",
            roll_of_paper: "unicode/1f9fb.png?v8",
            roller_coaster: "unicode/1f3a2.png?v8",
            roller_skate: "unicode/1f6fc.png?v8",
            romania: "unicode/1f1f7-1f1f4.png?v8",
            rooster: "unicode/1f413.png?v8",
            rose: "unicode/1f339.png?v8",
            rosette: "unicode/1f3f5.png?v8",
            rotating_light: "unicode/1f6a8.png?v8",
            round_pushpin: "unicode/1f4cd.png?v8",
            rowboat: "unicode/1f6a3.png?v8",
            rowing_man: "unicode/1f6a3-2642.png?v8",
            rowing_woman: "unicode/1f6a3-2640.png?v8",
            ru: "unicode/1f1f7-1f1fa.png?v8",
            rugby_football: "unicode/1f3c9.png?v8",
            runner: "unicode/1f3c3.png?v8",
            running: "unicode/1f3c3.png?v8",
            running_man: "unicode/1f3c3-2642.png?v8",
            running_shirt_with_sash: "unicode/1f3bd.png?v8",
            running_woman: "unicode/1f3c3-2640.png?v8",
            rwanda: "unicode/1f1f7-1f1fc.png?v8",
            sa: "unicode/1f202.png?v8",
            safety_pin: "unicode/1f9f7.png?v8",
            safety_vest: "unicode/1f9ba.png?v8",
            sagittarius: "unicode/2650.png?v8",
            sailboat: "unicode/26f5.png?v8",
            sake: "unicode/1f376.png?v8",
            salt: "unicode/1f9c2.png?v8",
            saluting_face: "unicode/1fae1.png?v8",
            samoa: "unicode/1f1fc-1f1f8.png?v8",
            san_marino: "unicode/1f1f8-1f1f2.png?v8",
            sandal: "unicode/1f461.png?v8",
            sandwich: "unicode/1f96a.png?v8",
            santa: "unicode/1f385.png?v8",
            sao_tome_principe: "unicode/1f1f8-1f1f9.png?v8",
            sari: "unicode/1f97b.png?v8",
            sassy_man: "unicode/1f481-2642.png?v8",
            sassy_woman: "unicode/1f481-2640.png?v8",
            satellite: "unicode/1f4e1.png?v8",
            satisfied: "unicode/1f606.png?v8",
            saudi_arabia: "unicode/1f1f8-1f1e6.png?v8",
            sauna_man: "unicode/1f9d6-2642.png?v8",
            sauna_person: "unicode/1f9d6.png?v8",
            sauna_woman: "unicode/1f9d6-2640.png?v8",
            sauropod: "unicode/1f995.png?v8",
            saxophone: "unicode/1f3b7.png?v8",
            scarf: "unicode/1f9e3.png?v8",
            school: "unicode/1f3eb.png?v8",
            school_satchel: "unicode/1f392.png?v8",
            scientist: "unicode/1f9d1-1f52c.png?v8",
            scissors: "unicode/2702.png?v8",
            scorpion: "unicode/1f982.png?v8",
            scorpius: "unicode/264f.png?v8",
            scotland: "unicode/1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.png?v8",
            scream: "unicode/1f631.png?v8",
            scream_cat: "unicode/1f640.png?v8",
            screwdriver: "unicode/1fa9b.png?v8",
            scroll: "unicode/1f4dc.png?v8",
            seal: "unicode/1f9ad.png?v8",
            seat: "unicode/1f4ba.png?v8",
            secret: "unicode/3299.png?v8",
            see_no_evil: "unicode/1f648.png?v8",
            seedling: "unicode/1f331.png?v8",
            selfie: "unicode/1f933.png?v8",
            senegal: "unicode/1f1f8-1f1f3.png?v8",
            serbia: "unicode/1f1f7-1f1f8.png?v8",
            service_dog: "unicode/1f415-1f9ba.png?v8",
            seven: "unicode/0037-20e3.png?v8",
            sewing_needle: "unicode/1faa1.png?v8",
            seychelles: "unicode/1f1f8-1f1e8.png?v8",
            shaking_face: "unicode/1fae8.png?v8",
            shallow_pan_of_food: "unicode/1f958.png?v8",
            shamrock: "unicode/2618.png?v8",
            shark: "unicode/1f988.png?v8",
            shaved_ice: "unicode/1f367.png?v8",
            sheep: "unicode/1f411.png?v8",
            shell: "unicode/1f41a.png?v8",
            shield: "unicode/1f6e1.png?v8",
            shinto_shrine: "unicode/26e9.png?v8",
            ship: "unicode/1f6a2.png?v8",
            shipit: "shipit.png?v8",
            shirt: "unicode/1f455.png?v8",
            shit: "unicode/1f4a9.png?v8",
            shoe: "unicode/1f45e.png?v8",
            shopping: "unicode/1f6cd.png?v8",
            shopping_cart: "unicode/1f6d2.png?v8",
            shorts: "unicode/1fa73.png?v8",
            shower: "unicode/1f6bf.png?v8",
            shrimp: "unicode/1f990.png?v8",
            shrug: "unicode/1f937.png?v8",
            shushing_face: "unicode/1f92b.png?v8",
            sierra_leone: "unicode/1f1f8-1f1f1.png?v8",
            signal_strength: "unicode/1f4f6.png?v8",
            singapore: "unicode/1f1f8-1f1ec.png?v8",
            singer: "unicode/1f9d1-1f3a4.png?v8",
            sint_maarten: "unicode/1f1f8-1f1fd.png?v8",
            six: "unicode/0036-20e3.png?v8",
            six_pointed_star: "unicode/1f52f.png?v8",
            skateboard: "unicode/1f6f9.png?v8",
            ski: "unicode/1f3bf.png?v8",
            skier: "unicode/26f7.png?v8",
            skull: "unicode/1f480.png?v8",
            skull_and_crossbones: "unicode/2620.png?v8",
            skunk: "unicode/1f9a8.png?v8",
            sled: "unicode/1f6f7.png?v8",
            sleeping: "unicode/1f634.png?v8",
            sleeping_bed: "unicode/1f6cc.png?v8",
            sleepy: "unicode/1f62a.png?v8",
            slightly_frowning_face: "unicode/1f641.png?v8",
            slightly_smiling_face: "unicode/1f642.png?v8",
            slot_machine: "unicode/1f3b0.png?v8",
            sloth: "unicode/1f9a5.png?v8",
            slovakia: "unicode/1f1f8-1f1f0.png?v8",
            slovenia: "unicode/1f1f8-1f1ee.png?v8",
            small_airplane: "unicode/1f6e9.png?v8",
            small_blue_diamond: "unicode/1f539.png?v8",
            small_orange_diamond: "unicode/1f538.png?v8",
            small_red_triangle: "unicode/1f53a.png?v8",
            small_red_triangle_down: "unicode/1f53b.png?v8",
            smile: "unicode/1f604.png?v8",
            smile_cat: "unicode/1f638.png?v8",
            smiley: "unicode/1f603.png?v8",
            smiley_cat: "unicode/1f63a.png?v8",
            smiling_face_with_tear: "unicode/1f972.png?v8",
            smiling_face_with_three_hearts: "unicode/1f970.png?v8",
            smiling_imp: "unicode/1f608.png?v8",
            smirk: "unicode/1f60f.png?v8",
            smirk_cat: "unicode/1f63c.png?v8",
            smoking: "unicode/1f6ac.png?v8",
            snail: "unicode/1f40c.png?v8",
            snake: "unicode/1f40d.png?v8",
            sneezing_face: "unicode/1f927.png?v8",
            snowboarder: "unicode/1f3c2.png?v8",
            snowflake: "unicode/2744.png?v8",
            snowman: "unicode/26c4.png?v8",
            snowman_with_snow: "unicode/2603.png?v8",
            soap: "unicode/1f9fc.png?v8",
            sob: "unicode/1f62d.png?v8",
            soccer: "unicode/26bd.png?v8",
            socks: "unicode/1f9e6.png?v8",
            softball: "unicode/1f94e.png?v8",
            solomon_islands: "unicode/1f1f8-1f1e7.png?v8",
            somalia: "unicode/1f1f8-1f1f4.png?v8",
            soon: "unicode/1f51c.png?v8",
            sos: "unicode/1f198.png?v8",
            sound: "unicode/1f509.png?v8",
            south_africa: "unicode/1f1ff-1f1e6.png?v8",
            south_georgia_south_sandwich_islands: "unicode/1f1ec-1f1f8.png?v8",
            south_sudan: "unicode/1f1f8-1f1f8.png?v8",
            space_invader: "unicode/1f47e.png?v8",
            spades: "unicode/2660.png?v8",
            spaghetti: "unicode/1f35d.png?v8",
            sparkle: "unicode/2747.png?v8",
            sparkler: "unicode/1f387.png?v8",
            sparkles: "unicode/2728.png?v8",
            sparkling_heart: "unicode/1f496.png?v8",
            speak_no_evil: "unicode/1f64a.png?v8",
            speaker: "unicode/1f508.png?v8",
            speaking_head: "unicode/1f5e3.png?v8",
            speech_balloon: "unicode/1f4ac.png?v8",
            speedboat: "unicode/1f6a4.png?v8",
            spider: "unicode/1f577.png?v8",
            spider_web: "unicode/1f578.png?v8",
            spiral_calendar: "unicode/1f5d3.png?v8",
            spiral_notepad: "unicode/1f5d2.png?v8",
            sponge: "unicode/1f9fd.png?v8",
            spoon: "unicode/1f944.png?v8",
            squid: "unicode/1f991.png?v8",
            sri_lanka: "unicode/1f1f1-1f1f0.png?v8",
            st_barthelemy: "unicode/1f1e7-1f1f1.png?v8",
            st_helena: "unicode/1f1f8-1f1ed.png?v8",
            st_kitts_nevis: "unicode/1f1f0-1f1f3.png?v8",
            st_lucia: "unicode/1f1f1-1f1e8.png?v8",
            st_martin: "unicode/1f1f2-1f1eb.png?v8",
            st_pierre_miquelon: "unicode/1f1f5-1f1f2.png?v8",
            st_vincent_grenadines: "unicode/1f1fb-1f1e8.png?v8",
            stadium: "unicode/1f3df.png?v8",
            standing_man: "unicode/1f9cd-2642.png?v8",
            standing_person: "unicode/1f9cd.png?v8",
            standing_woman: "unicode/1f9cd-2640.png?v8",
            star: "unicode/2b50.png?v8",
            star2: "unicode/1f31f.png?v8",
            star_and_crescent: "unicode/262a.png?v8",
            star_of_david: "unicode/2721.png?v8",
            star_struck: "unicode/1f929.png?v8",
            stars: "unicode/1f320.png?v8",
            station: "unicode/1f689.png?v8",
            statue_of_liberty: "unicode/1f5fd.png?v8",
            steam_locomotive: "unicode/1f682.png?v8",
            stethoscope: "unicode/1fa7a.png?v8",
            stew: "unicode/1f372.png?v8",
            stop_button: "unicode/23f9.png?v8",
            stop_sign: "unicode/1f6d1.png?v8",
            stopwatch: "unicode/23f1.png?v8",
            straight_ruler: "unicode/1f4cf.png?v8",
            strawberry: "unicode/1f353.png?v8",
            stuck_out_tongue: "unicode/1f61b.png?v8",
            stuck_out_tongue_closed_eyes: "unicode/1f61d.png?v8",
            stuck_out_tongue_winking_eye: "unicode/1f61c.png?v8",
            student: "unicode/1f9d1-1f393.png?v8",
            studio_microphone: "unicode/1f399.png?v8",
            stuffed_flatbread: "unicode/1f959.png?v8",
            sudan: "unicode/1f1f8-1f1e9.png?v8",
            sun_behind_large_cloud: "unicode/1f325.png?v8",
            sun_behind_rain_cloud: "unicode/1f326.png?v8",
            sun_behind_small_cloud: "unicode/1f324.png?v8",
            sun_with_face: "unicode/1f31e.png?v8",
            sunflower: "unicode/1f33b.png?v8",
            sunglasses: "unicode/1f60e.png?v8",
            sunny: "unicode/2600.png?v8",
            sunrise: "unicode/1f305.png?v8",
            sunrise_over_mountains: "unicode/1f304.png?v8",
            superhero: "unicode/1f9b8.png?v8",
            superhero_man: "unicode/1f9b8-2642.png?v8",
            superhero_woman: "unicode/1f9b8-2640.png?v8",
            supervillain: "unicode/1f9b9.png?v8",
            supervillain_man: "unicode/1f9b9-2642.png?v8",
            supervillain_woman: "unicode/1f9b9-2640.png?v8",
            surfer: "unicode/1f3c4.png?v8",
            surfing_man: "unicode/1f3c4-2642.png?v8",
            surfing_woman: "unicode/1f3c4-2640.png?v8",
            suriname: "unicode/1f1f8-1f1f7.png?v8",
            sushi: "unicode/1f363.png?v8",
            suspect: "suspect.png?v8",
            suspension_railway: "unicode/1f69f.png?v8",
            svalbard_jan_mayen: "unicode/1f1f8-1f1ef.png?v8",
            swan: "unicode/1f9a2.png?v8",
            swaziland: "unicode/1f1f8-1f1ff.png?v8",
            sweat: "unicode/1f613.png?v8",
            sweat_drops: "unicode/1f4a6.png?v8",
            sweat_smile: "unicode/1f605.png?v8",
            sweden: "unicode/1f1f8-1f1ea.png?v8",
            sweet_potato: "unicode/1f360.png?v8",
            swim_brief: "unicode/1fa72.png?v8",
            swimmer: "unicode/1f3ca.png?v8",
            swimming_man: "unicode/1f3ca-2642.png?v8",
            swimming_woman: "unicode/1f3ca-2640.png?v8",
            switzerland: "unicode/1f1e8-1f1ed.png?v8",
            symbols: "unicode/1f523.png?v8",
            synagogue: "unicode/1f54d.png?v8",
            syria: "unicode/1f1f8-1f1fe.png?v8",
            syringe: "unicode/1f489.png?v8",
            "t-rex": "unicode/1f996.png?v8",
            taco: "unicode/1f32e.png?v8",
            tada: "unicode/1f389.png?v8",
            taiwan: "unicode/1f1f9-1f1fc.png?v8",
            tajikistan: "unicode/1f1f9-1f1ef.png?v8",
            takeout_box: "unicode/1f961.png?v8",
            tamale: "unicode/1fad4.png?v8",
            tanabata_tree: "unicode/1f38b.png?v8",
            tangerine: "unicode/1f34a.png?v8",
            tanzania: "unicode/1f1f9-1f1ff.png?v8",
            taurus: "unicode/2649.png?v8",
            taxi: "unicode/1f695.png?v8",
            tea: "unicode/1f375.png?v8",
            teacher: "unicode/1f9d1-1f3eb.png?v8",
            teapot: "unicode/1fad6.png?v8",
            technologist: "unicode/1f9d1-1f4bb.png?v8",
            teddy_bear: "unicode/1f9f8.png?v8",
            telephone: "unicode/260e.png?v8",
            telephone_receiver: "unicode/1f4de.png?v8",
            telescope: "unicode/1f52d.png?v8",
            tennis: "unicode/1f3be.png?v8",
            tent: "unicode/26fa.png?v8",
            test_tube: "unicode/1f9ea.png?v8",
            thailand: "unicode/1f1f9-1f1ed.png?v8",
            thermometer: "unicode/1f321.png?v8",
            thinking: "unicode/1f914.png?v8",
            thong_sandal: "unicode/1fa74.png?v8",
            thought_balloon: "unicode/1f4ad.png?v8",
            thread: "unicode/1f9f5.png?v8",
            three: "unicode/0033-20e3.png?v8",
            thumbsdown: "unicode/1f44e.png?v8",
            thumbsup: "unicode/1f44d.png?v8",
            ticket: "unicode/1f3ab.png?v8",
            tickets: "unicode/1f39f.png?v8",
            tiger: "unicode/1f42f.png?v8",
            tiger2: "unicode/1f405.png?v8",
            timer_clock: "unicode/23f2.png?v8",
            timor_leste: "unicode/1f1f9-1f1f1.png?v8",
            tipping_hand_man: "unicode/1f481-2642.png?v8",
            tipping_hand_person: "unicode/1f481.png?v8",
            tipping_hand_woman: "unicode/1f481-2640.png?v8",
            tired_face: "unicode/1f62b.png?v8",
            tm: "unicode/2122.png?v8",
            togo: "unicode/1f1f9-1f1ec.png?v8",
            toilet: "unicode/1f6bd.png?v8",
            tokelau: "unicode/1f1f9-1f1f0.png?v8",
            tokyo_tower: "unicode/1f5fc.png?v8",
            tomato: "unicode/1f345.png?v8",
            tonga: "unicode/1f1f9-1f1f4.png?v8",
            tongue: "unicode/1f445.png?v8",
            toolbox: "unicode/1f9f0.png?v8",
            tooth: "unicode/1f9b7.png?v8",
            toothbrush: "unicode/1faa5.png?v8",
            top: "unicode/1f51d.png?v8",
            tophat: "unicode/1f3a9.png?v8",
            tornado: "unicode/1f32a.png?v8",
            tr: "unicode/1f1f9-1f1f7.png?v8",
            trackball: "unicode/1f5b2.png?v8",
            tractor: "unicode/1f69c.png?v8",
            traffic_light: "unicode/1f6a5.png?v8",
            train: "unicode/1f68b.png?v8",
            train2: "unicode/1f686.png?v8",
            tram: "unicode/1f68a.png?v8",
            transgender_flag: "unicode/1f3f3-26a7.png?v8",
            transgender_symbol: "unicode/26a7.png?v8",
            triangular_flag_on_post: "unicode/1f6a9.png?v8",
            triangular_ruler: "unicode/1f4d0.png?v8",
            trident: "unicode/1f531.png?v8",
            trinidad_tobago: "unicode/1f1f9-1f1f9.png?v8",
            tristan_da_cunha: "unicode/1f1f9-1f1e6.png?v8",
            triumph: "unicode/1f624.png?v8",
            troll: "unicode/1f9cc.png?v8",
            trolleybus: "unicode/1f68e.png?v8",
            trollface: "trollface.png?v8",
            trophy: "unicode/1f3c6.png?v8",
            tropical_drink: "unicode/1f379.png?v8",
            tropical_fish: "unicode/1f420.png?v8",
            truck: "unicode/1f69a.png?v8",
            trumpet: "unicode/1f3ba.png?v8",
            tshirt: "unicode/1f455.png?v8",
            tulip: "unicode/1f337.png?v8",
            tumbler_glass: "unicode/1f943.png?v8",
            tunisia: "unicode/1f1f9-1f1f3.png?v8",
            turkey: "unicode/1f983.png?v8",
            turkmenistan: "unicode/1f1f9-1f1f2.png?v8",
            turks_caicos_islands: "unicode/1f1f9-1f1e8.png?v8",
            turtle: "unicode/1f422.png?v8",
            tuvalu: "unicode/1f1f9-1f1fb.png?v8",
            tv: "unicode/1f4fa.png?v8",
            twisted_rightwards_arrows: "unicode/1f500.png?v8",
            two: "unicode/0032-20e3.png?v8",
            two_hearts: "unicode/1f495.png?v8",
            two_men_holding_hands: "unicode/1f46c.png?v8",
            two_women_holding_hands: "unicode/1f46d.png?v8",
            u5272: "unicode/1f239.png?v8",
            u5408: "unicode/1f234.png?v8",
            u55b6: "unicode/1f23a.png?v8",
            u6307: "unicode/1f22f.png?v8",
            u6708: "unicode/1f237.png?v8",
            u6709: "unicode/1f236.png?v8",
            u6e80: "unicode/1f235.png?v8",
            u7121: "unicode/1f21a.png?v8",
            u7533: "unicode/1f238.png?v8",
            u7981: "unicode/1f232.png?v8",
            u7a7a: "unicode/1f233.png?v8",
            uganda: "unicode/1f1fa-1f1ec.png?v8",
            uk: "unicode/1f1ec-1f1e7.png?v8",
            ukraine: "unicode/1f1fa-1f1e6.png?v8",
            umbrella: "unicode/2614.png?v8",
            unamused: "unicode/1f612.png?v8",
            underage: "unicode/1f51e.png?v8",
            unicorn: "unicode/1f984.png?v8",
            united_arab_emirates: "unicode/1f1e6-1f1ea.png?v8",
            united_nations: "unicode/1f1fa-1f1f3.png?v8",
            unlock: "unicode/1f513.png?v8",
            up: "unicode/1f199.png?v8",
            upside_down_face: "unicode/1f643.png?v8",
            uruguay: "unicode/1f1fa-1f1fe.png?v8",
            us: "unicode/1f1fa-1f1f8.png?v8",
            us_outlying_islands: "unicode/1f1fa-1f1f2.png?v8",
            us_virgin_islands: "unicode/1f1fb-1f1ee.png?v8",
            uzbekistan: "unicode/1f1fa-1f1ff.png?v8",
            v: "unicode/270c.png?v8",
            vampire: "unicode/1f9db.png?v8",
            vampire_man: "unicode/1f9db-2642.png?v8",
            vampire_woman: "unicode/1f9db-2640.png?v8",
            vanuatu: "unicode/1f1fb-1f1fa.png?v8",
            vatican_city: "unicode/1f1fb-1f1e6.png?v8",
            venezuela: "unicode/1f1fb-1f1ea.png?v8",
            vertical_traffic_light: "unicode/1f6a6.png?v8",
            vhs: "unicode/1f4fc.png?v8",
            vibration_mode: "unicode/1f4f3.png?v8",
            video_camera: "unicode/1f4f9.png?v8",
            video_game: "unicode/1f3ae.png?v8",
            vietnam: "unicode/1f1fb-1f1f3.png?v8",
            violin: "unicode/1f3bb.png?v8",
            virgo: "unicode/264d.png?v8",
            volcano: "unicode/1f30b.png?v8",
            volleyball: "unicode/1f3d0.png?v8",
            vomiting_face: "unicode/1f92e.png?v8",
            vs: "unicode/1f19a.png?v8",
            vulcan_salute: "unicode/1f596.png?v8",
            waffle: "unicode/1f9c7.png?v8",
            wales: "unicode/1f3f4-e0067-e0062-e0077-e006c-e0073-e007f.png?v8",
            walking: "unicode/1f6b6.png?v8",
            walking_man: "unicode/1f6b6-2642.png?v8",
            walking_woman: "unicode/1f6b6-2640.png?v8",
            wallis_futuna: "unicode/1f1fc-1f1eb.png?v8",
            waning_crescent_moon: "unicode/1f318.png?v8",
            waning_gibbous_moon: "unicode/1f316.png?v8",
            warning: "unicode/26a0.png?v8",
            wastebasket: "unicode/1f5d1.png?v8",
            watch: "unicode/231a.png?v8",
            water_buffalo: "unicode/1f403.png?v8",
            water_polo: "unicode/1f93d.png?v8",
            watermelon: "unicode/1f349.png?v8",
            wave: "unicode/1f44b.png?v8",
            wavy_dash: "unicode/3030.png?v8",
            waxing_crescent_moon: "unicode/1f312.png?v8",
            waxing_gibbous_moon: "unicode/1f314.png?v8",
            wc: "unicode/1f6be.png?v8",
            weary: "unicode/1f629.png?v8",
            wedding: "unicode/1f492.png?v8",
            weight_lifting: "unicode/1f3cb.png?v8",
            weight_lifting_man: "unicode/1f3cb-2642.png?v8",
            weight_lifting_woman: "unicode/1f3cb-2640.png?v8",
            western_sahara: "unicode/1f1ea-1f1ed.png?v8",
            whale: "unicode/1f433.png?v8",
            whale2: "unicode/1f40b.png?v8",
            wheel: "unicode/1f6de.png?v8",
            wheel_of_dharma: "unicode/2638.png?v8",
            wheelchair: "unicode/267f.png?v8",
            white_check_mark: "unicode/2705.png?v8",
            white_circle: "unicode/26aa.png?v8",
            white_flag: "unicode/1f3f3.png?v8",
            white_flower: "unicode/1f4ae.png?v8",
            white_haired_man: "unicode/1f468-1f9b3.png?v8",
            white_haired_woman: "unicode/1f469-1f9b3.png?v8",
            white_heart: "unicode/1f90d.png?v8",
            white_large_square: "unicode/2b1c.png?v8",
            white_medium_small_square: "unicode/25fd.png?v8",
            white_medium_square: "unicode/25fb.png?v8",
            white_small_square: "unicode/25ab.png?v8",
            white_square_button: "unicode/1f533.png?v8",
            wilted_flower: "unicode/1f940.png?v8",
            wind_chime: "unicode/1f390.png?v8",
            wind_face: "unicode/1f32c.png?v8",
            window: "unicode/1fa9f.png?v8",
            wine_glass: "unicode/1f377.png?v8",
            wing: "unicode/1fabd.png?v8",
            wink: "unicode/1f609.png?v8",
            wireless: "unicode/1f6dc.png?v8",
            wolf: "unicode/1f43a.png?v8",
            woman: "unicode/1f469.png?v8",
            woman_artist: "unicode/1f469-1f3a8.png?v8",
            woman_astronaut: "unicode/1f469-1f680.png?v8",
            woman_beard: "unicode/1f9d4-2640.png?v8",
            woman_cartwheeling: "unicode/1f938-2640.png?v8",
            woman_cook: "unicode/1f469-1f373.png?v8",
            woman_dancing: "unicode/1f483.png?v8",
            woman_facepalming: "unicode/1f926-2640.png?v8",
            woman_factory_worker: "unicode/1f469-1f3ed.png?v8",
            woman_farmer: "unicode/1f469-1f33e.png?v8",
            woman_feeding_baby: "unicode/1f469-1f37c.png?v8",
            woman_firefighter: "unicode/1f469-1f692.png?v8",
            woman_health_worker: "unicode/1f469-2695.png?v8",
            woman_in_manual_wheelchair: "unicode/1f469-1f9bd.png?v8",
            woman_in_motorized_wheelchair: "unicode/1f469-1f9bc.png?v8",
            woman_in_tuxedo: "unicode/1f935-2640.png?v8",
            woman_judge: "unicode/1f469-2696.png?v8",
            woman_juggling: "unicode/1f939-2640.png?v8",
            woman_mechanic: "unicode/1f469-1f527.png?v8",
            woman_office_worker: "unicode/1f469-1f4bc.png?v8",
            woman_pilot: "unicode/1f469-2708.png?v8",
            woman_playing_handball: "unicode/1f93e-2640.png?v8",
            woman_playing_water_polo: "unicode/1f93d-2640.png?v8",
            woman_scientist: "unicode/1f469-1f52c.png?v8",
            woman_shrugging: "unicode/1f937-2640.png?v8",
            woman_singer: "unicode/1f469-1f3a4.png?v8",
            woman_student: "unicode/1f469-1f393.png?v8",
            woman_teacher: "unicode/1f469-1f3eb.png?v8",
            woman_technologist: "unicode/1f469-1f4bb.png?v8",
            woman_with_headscarf: "unicode/1f9d5.png?v8",
            woman_with_probing_cane: "unicode/1f469-1f9af.png?v8",
            woman_with_turban: "unicode/1f473-2640.png?v8",
            woman_with_veil: "unicode/1f470-2640.png?v8",
            womans_clothes: "unicode/1f45a.png?v8",
            womans_hat: "unicode/1f452.png?v8",
            women_wrestling: "unicode/1f93c-2640.png?v8",
            womens: "unicode/1f6ba.png?v8",
            wood: "unicode/1fab5.png?v8",
            woozy_face: "unicode/1f974.png?v8",
            world_map: "unicode/1f5fa.png?v8",
            worm: "unicode/1fab1.png?v8",
            worried: "unicode/1f61f.png?v8",
            wrench: "unicode/1f527.png?v8",
            wrestling: "unicode/1f93c.png?v8",
            writing_hand: "unicode/270d.png?v8",
            x: "unicode/274c.png?v8",
            x_ray: "unicode/1fa7b.png?v8",
            yarn: "unicode/1f9f6.png?v8",
            yawning_face: "unicode/1f971.png?v8",
            yellow_circle: "unicode/1f7e1.png?v8",
            yellow_heart: "unicode/1f49b.png?v8",
            yellow_square: "unicode/1f7e8.png?v8",
            yemen: "unicode/1f1fe-1f1ea.png?v8",
            yen: "unicode/1f4b4.png?v8",
            yin_yang: "unicode/262f.png?v8",
            yo_yo: "unicode/1fa80.png?v8",
            yum: "unicode/1f60b.png?v8",
            zambia: "unicode/1f1ff-1f1f2.png?v8",
            zany_face: "unicode/1f92a.png?v8",
            zap: "unicode/26a1.png?v8",
            zebra: "unicode/1f993.png?v8",
            zero: "unicode/0030-20e3.png?v8",
            zimbabwe: "unicode/1f1ff-1f1fc.png?v8",
            zipper_mouth_face: "unicode/1f910.png?v8",
            zombie: "unicode/1f9df.png?v8",
            zombie_man: "unicode/1f9df-2642.png?v8",
            zombie_woman: "unicode/1f9df-2640.png?v8",
            zzz: "unicode/1f4a4.png?v8"
        }
    };
    function replaceEmojiShorthand(m, $1, useNativeEmoji) {
        const emojiMatch = emojiData.data[$1];
        let result = m;
        if (emojiMatch) {
            if (useNativeEmoji && /unicode/.test(emojiMatch)) {
                const emojiUnicode = emojiMatch.replace("unicode/", "").replace(/\.png.*/, "").split("-").map((u => `&#x${u};`)).join("&zwj;").concat("&#xFE0E;");
                result = `<span class="emoji">${emojiUnicode}</span>`;
            } else {
                result = `<img src="${emojiData.baseURL}${emojiMatch}.png" alt="${$1}" class="emoji" loading="lazy">`;
            }
        }
        return result;
    }
    function emojify(text, useNativeEmoji) {
        return text.replace(/<(code|pre|script|template)[^>]*?>[\s\S]+?<\/(code|pre|script|template)>/g, (m => m.replace(/:/g, "__colon__"))).replace(/<!--[\s\S]+?-->/g, (m => m.replace(/:/g, "__colon__"))).replace(/([a-z]{2,}:)?\/\/[^\s'">)]+/gi, (m => m.replace(/:/g, "__colon__"))).replace(/:([a-z0-9_\-+]+?):/g, ((m, $1) => replaceEmojiShorthand(m, $1, useNativeEmoji))).replace(/__colon__/g, ":");
    }
    function getAndRemoveConfig(str = "") {
        const config = {};
        if (str) {
            str = str.replace(/^('|")/, "").replace(/('|")$/, "").replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, ((m, key, value) => {
                if (key.indexOf(":") !== -1) {
                    return m;
                }
                value = value && value.replace(/&quot;/g, "") || true;
                if (value !== true && config[key] !== undefined) {
                    if (!Array.isArray(config[key]) && value !== config[key]) {
                        config[key] = [ config[key] ];
                    }
                    config[key].includes(value) || config[key].push(value);
                } else {
                    config[key] = value;
                }
                return "";
            })).trim();
        }
        return {
            str: str,
            config: config
        };
    }
    function removeAtag(str = "") {
        return str.replace(/(<\/?a.*?>)/gi, "");
    }
    function getAndRemoveDocsifyIgnoreConfig(content = "") {
        let ignoreAllSubs, ignoreSubHeading;
        if (/<!-- {docsify-ignore} -->/g.test(content)) {
            content = content.replace("\x3c!-- {docsify-ignore} --\x3e", "");
            ignoreSubHeading = true;
        }
        if (/{docsify-ignore}/g.test(content)) {
            content = content.replace("{docsify-ignore}", "");
            ignoreSubHeading = true;
        }
        if (/<!-- {docsify-ignore-all} -->/g.test(content)) {
            content = content.replace("\x3c!-- {docsify-ignore-all} --\x3e", "");
            ignoreAllSubs = true;
        }
        if (/{docsify-ignore-all}/g.test(content)) {
            content = content.replace("{docsify-ignore-all}", "");
            ignoreAllSubs = true;
        }
        return {
            content: content,
            ignoreAllSubs: ignoreAllSubs,
            ignoreSubHeading: ignoreSubHeading
        };
    }
    function escapeHtml(string) {
        const entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        return String(string).replace(/[&<>"']/g, (s => entityMap[s]));
    }
    const imageCompiler = ({renderer: renderer, contentBase: contentBase, router: router}) => renderer.image = ({href: href, title: title, text: text}) => {
        let url = href;
        const attrs = [];
        const {str: str, config: config} = getAndRemoveConfig(title);
        title = str;
        if (config["no-zoom"]) {
            attrs.push("data-no-zoom");
        }
        if (title) {
            attrs.push(`title="${escapeHtml(title)}"`);
        }
        if (config.size) {
            const [width, height] = config.size.split("x");
            if (height) {
                attrs.push(`width="${width}" height="${height}"`);
            } else {
                attrs.push(`width="${width}"`);
            }
        }
        if (config.class) {
            let classes = config.class;
            if (Array.isArray(config.class)) {
                classes = config.class.join(" ");
            }
            attrs.push(`class="${classes}"`);
        }
        if (config.id) {
            attrs.push(`id="${config.id}"`);
        }
        if (!isAbsolutePath(href)) {
            url = getPath(contentBase, getParentPath(router.getCurrentPath()), href);
        }
        return `<img src="${escapeHtml(url)}" data-origin="${escapeHtml(href)}" alt="${escapeHtml(text)}" ${attrs.join(" ")} />`;
    };
    const headingCompiler = ({renderer: renderer, router: router, compiler: compiler}) => renderer.heading = function({tokens: tokens, depth: depth, text: text}) {
        const parsedText = this.parser.parseInline(tokens);
        let {str: str, config: config} = getAndRemoveConfig(parsedText);
        const nextToc = {
            depth: depth,
            title: str
        };
        const {content: content, ignoreAllSubs: ignoreAllSubs, ignoreSubHeading: ignoreSubHeading} = getAndRemoveDocsifyIgnoreConfig(str);
        str = content.trim();
        nextToc.title = removeAtag(str);
        nextToc.ignoreAllSubs = ignoreAllSubs;
        nextToc.ignoreSubHeading = ignoreSubHeading;
        const slug = slugify(config.id || text);
        const url = router.toURL(router.getCurrentPath(), {
            id: slug
        });
        nextToc.slug = stripUrlExceptId(url);
        if (compiler.blockquoteDepth === 0) {
            compiler.toc.push(nextToc);
        }
        return `<h${depth} id="${slug}" tabindex="-1"><a href="${url}" data-id="${slug}" class="anchor"><span>${str}</span></a></h${depth}>`;
    };
    (function(Prism) {
        function getPlaceholder(language, index) {
            return "___" + language.toUpperCase() + index + "___";
        }
        Object.defineProperties(Prism.languages["markup-templating"] = {}, {
            buildPlaceholders: {
                value: function(env, language, placeholderPattern, replaceFilter) {
                    if (env.language !== language) {
                        return;
                    }
                    var tokenStack = env.tokenStack = [];
                    env.code = env.code.replace(placeholderPattern, (function(match) {
                        if (typeof replaceFilter === "function" && !replaceFilter(match)) {
                            return match;
                        }
                        var i = tokenStack.length;
                        var placeholder;
                        while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
                            ++i;
                        }
                        tokenStack[i] = match;
                        return placeholder;
                    }));
                    env.grammar = Prism.languages.markup;
                }
            },
            tokenizePlaceholders: {
                value: function(env, language) {
                    if (env.language !== language || !env.tokenStack) {
                        return;
                    }
                    env.grammar = Prism.languages[language];
                    var j = 0;
                    var keys = Object.keys(env.tokenStack);
                    function walkTokens(tokens) {
                        for (var i = 0; i < tokens.length; i++) {
                            if (j >= keys.length) {
                                break;
                            }
                            var token = tokens[i];
                            if (typeof token === "string" || token.content && typeof token.content === "string") {
                                var k = keys[j];
                                var t = env.tokenStack[k];
                                var s = typeof token === "string" ? token : token.content;
                                var placeholder = getPlaceholder(language, k);
                                var index = s.indexOf(placeholder);
                                if (index > -1) {
                                    ++j;
                                    var before = s.substring(0, index);
                                    var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), "language-" + language, t);
                                    var after = s.substring(index + placeholder.length);
                                    var replacement = [];
                                    if (before) {
                                        replacement.push.apply(replacement, walkTokens([ before ]));
                                    }
                                    replacement.push(middle);
                                    if (after) {
                                        replacement.push.apply(replacement, walkTokens([ after ]));
                                    }
                                    if (typeof token === "string") {
                                        tokens.splice.apply(tokens, [ i, 1 ].concat(replacement));
                                    } else {
                                        token.content = replacement;
                                    }
                                }
                            } else if (token.content) {
                                walkTokens(token.content);
                            }
                        }
                        return tokens;
                    }
                    walkTokens(env.tokens);
                }
            }
        });
    })(Prism);
    const lang_dependencies = {
        javascript: "clike",
        actionscript: "javascript",
        apex: [ "clike", "sql" ],
        arduino: "cpp",
        aspnet: [ "markup", "csharp" ],
        birb: "clike",
        bison: "c",
        c: "clike",
        csharp: "clike",
        cpp: "c",
        cfscript: "clike",
        chaiscript: [ "clike", "cpp" ],
        cilkc: "c",
        cilkcpp: "cpp",
        coffeescript: "javascript",
        crystal: "ruby",
        "css-extras": "css",
        d: "clike",
        dart: "clike",
        django: "markup-templating",
        ejs: [ "javascript", "markup-templating" ],
        etlua: [ "lua", "markup-templating" ],
        erb: [ "ruby", "markup-templating" ],
        fsharp: "clike",
        "firestore-security-rules": "clike",
        flow: "javascript",
        ftl: "markup-templating",
        gml: "clike",
        glsl: "c",
        go: "clike",
        gradle: "clike",
        groovy: "clike",
        haml: "ruby",
        handlebars: "markup-templating",
        haxe: "clike",
        hlsl: "c",
        idris: "haskell",
        java: "clike",
        javadoc: [ "markup", "java", "javadoclike" ],
        jolie: "clike",
        jsdoc: [ "javascript", "javadoclike", "typescript" ],
        "js-extras": "javascript",
        json5: "json",
        jsonp: "json",
        "js-templates": "javascript",
        kotlin: "clike",
        latte: [ "clike", "markup-templating", "php" ],
        less: "css",
        lilypond: "scheme",
        liquid: "markup-templating",
        markdown: "markup",
        "markup-templating": "markup",
        mongodb: "javascript",
        n4js: "javascript",
        objectivec: "c",
        opencl: "c",
        parser: "markup",
        php: "markup-templating",
        phpdoc: [ "php", "javadoclike" ],
        "php-extras": "php",
        plsql: "sql",
        processing: "clike",
        protobuf: "clike",
        pug: [ "markup", "javascript" ],
        purebasic: "clike",
        purescript: "haskell",
        qsharp: "clike",
        qml: "javascript",
        qore: "clike",
        racket: "scheme",
        cshtml: [ "markup", "csharp" ],
        jsx: [ "markup", "javascript" ],
        tsx: [ "jsx", "typescript" ],
        reason: "clike",
        ruby: "clike",
        sass: "css",
        scss: "css",
        scala: "java",
        "shell-session": "bash",
        smarty: "markup-templating",
        solidity: "clike",
        soy: "markup-templating",
        sparql: "turtle",
        sqf: "clike",
        squirrel: "clike",
        stata: [ "mata", "java", "python" ],
        "t4-cs": [ "t4-templating", "csharp" ],
        "t4-vb": [ "t4-templating", "vbnet" ],
        tap: "yaml",
        tt2: [ "clike", "markup-templating" ],
        textile: "markup",
        twig: "markup-templating",
        typescript: "javascript",
        v: "clike",
        vala: "clike",
        vbnet: "basic",
        velocity: "markup",
        wiki: "markup",
        xeora: "markup",
        "xml-doc": "markup",
        xquery: "markup"
    };
    const lang_aliases = {
        html: "markup",
        xml: "markup",
        svg: "markup",
        mathml: "markup",
        ssml: "markup",
        atom: "markup",
        rss: "markup",
        js: "javascript",
        g4: "antlr4",
        ino: "arduino",
        "arm-asm": "armasm",
        art: "arturo",
        adoc: "asciidoc",
        avs: "avisynth",
        avdl: "avro-idl",
        gawk: "awk",
        sh: "bash",
        shell: "bash",
        shortcode: "bbcode",
        rbnf: "bnf",
        oscript: "bsl",
        cs: "csharp",
        dotnet: "csharp",
        cfc: "cfscript",
        "cilk-c": "cilkc",
        "cilk-cpp": "cilkcpp",
        cilk: "cilkcpp",
        coffee: "coffeescript",
        conc: "concurnas",
        jinja2: "django",
        "dns-zone": "dns-zone-file",
        dockerfile: "docker",
        gv: "dot",
        eta: "ejs",
        xlsx: "excel-formula",
        xls: "excel-formula",
        gamemakerlanguage: "gml",
        po: "gettext",
        gni: "gn",
        ld: "linker-script",
        "go-mod": "go-module",
        hbs: "handlebars",
        mustache: "handlebars",
        hs: "haskell",
        idr: "idris",
        gitignore: "ignore",
        hgignore: "ignore",
        npmignore: "ignore",
        webmanifest: "json",
        kt: "kotlin",
        kts: "kotlin",
        kum: "kumir",
        tex: "latex",
        context: "latex",
        ly: "lilypond",
        emacs: "lisp",
        elisp: "lisp",
        "emacs-lisp": "lisp",
        md: "markdown",
        moon: "moonscript",
        n4jsd: "n4js",
        nani: "naniscript",
        objc: "objectivec",
        qasm: "openqasm",
        objectpascal: "pascal",
        px: "pcaxis",
        pcode: "peoplecode",
        plantuml: "plant-uml",
        pq: "powerquery",
        mscript: "powerquery",
        pbfasm: "purebasic",
        purs: "purescript",
        py: "python",
        qs: "qsharp",
        rkt: "racket",
        razor: "cshtml",
        rpy: "renpy",
        res: "rescript",
        robot: "robotframework",
        rb: "ruby",
        "sh-session": "shell-session",
        shellsession: "shell-session",
        smlnj: "sml",
        sol: "solidity",
        sln: "solution-file",
        rq: "sparql",
        sclang: "supercollider",
        t4: "t4-cs",
        trickle: "tremor",
        troy: "tremor",
        trig: "turtle",
        ts: "typescript",
        tsconfig: "typoscript",
        uscript: "unrealscript",
        uc: "unrealscript",
        url: "uri",
        vb: "visual-basic",
        vba: "visual-basic",
        webidl: "web-idl",
        mathematica: "wolfram",
        nb: "wolfram",
        wl: "wolfram",
        xeoracube: "xeora",
        yml: "yaml"
    };
    const depTreeCache = {};
    const sanitizeCodeLang = lang => {
        const codeLang = typeof lang === "string" && lang.trim().length ? lang.trim() : "markup";
        const prismLang = lang_aliases[codeLang] || codeLang;
        return {
            codeLang: codeLang,
            prismLang: prismLang,
            escapedLang: escapeHtml(codeLang)
        };
    };
    function checkLangDependenciesAllLoaded(lang) {
        if (!lang) {
            return;
        }
        lang = lang_aliases[lang] || lang;
        const validLang = lang_dependencies[lang];
        if (!validLang) {
            return;
        }
        if (!depTreeCache[lang]) {
            const dummy = {
                loaded: true,
                dependencies: []
            };
            buildAndCheckDepTree(lang, dummy, dummy);
            const depTree = dummy.dependencies[0];
            depTreeCache[lang] = depTree;
            if (!dummy.loaded) {
                const prettyOutput = prettyPrint(depTree, 1);
                console.warn(`The language '${lang}' required dependencies for code block highlighting are not satisfied.`, `Priority dependencies from low to high, consider to place all the necessary dependencies by priority (higher first): \n`, prettyOutput);
            }
        }
    }
    const buildAndCheckDepTree = (lang, parent, dummy) => {
        if (!lang) {
            return;
        }
        const cur = {
            cur: lang,
            loaded: true,
            dependencies: []
        };
        let deps = lang_dependencies[lang] || [];
        if (!(lang in prismExports.languages)) {
            dummy.loaded = false;
            cur.loaded = false;
        }
        if (typeof deps === "string") {
            deps = [ deps ];
        }
        deps.forEach((dep => {
            buildAndCheckDepTree(dep, cur, dummy);
        }));
        parent.dependencies.push(cur);
    };
    const prettyPrint = (depTree, level) => {
        let cur = `${"  ".repeat(level * 3)} ${depTree.cur} ${depTree.loaded ? "(+)" : "(-)"}`;
        if (depTree.dependencies.length) {
            depTree.dependencies.forEach((dep => {
                cur += prettyPrint(dep, level + 1);
            }));
        }
        return "\n" + cur;
    };
    const highlightCodeCompiler = ({renderer: renderer}) => renderer.code = function({text: text, lang: lang = "markup"}) {
        const {escapedLang: escapedLang, prismLang: prismLang} = sanitizeCodeLang(lang);
        checkLangDependenciesAllLoaded(prismLang);
        const langOrMarkup = prismExports.languages[prismLang] || prismExports.languages.markup;
        const code = prismExports.highlight(text.replace(/@DOCSIFY_QM@/g, "`"), langOrMarkup, prismLang);
        return `<pre data-lang="${escapedLang}" class="language-${escapedLang}"><code class="lang-${escapedLang} language-${escapedLang}" tabindex="0">${code}</code></pre>`;
    };
    function renderParagraphText(text) {
        if (text.startsWith("!&gt;")) {
            return helper("callout important", text);
        }
        if (text.startsWith("?&gt;")) {
            return helper("callout tip", text);
        }
        return `<p>${text}</p>`;
    }
    const paragraphCompiler = ({renderer: renderer}) => renderer.paragraph = function({tokens: tokens, embedTokenMap: embedTokenMap}) {
        let result;
        if (embedTokenMap && tokens?.length) {
            const parts = [];
            let inlineBuffer = [];
            const flushInlineBuffer = () => {
                if (!inlineBuffer.length) {
                    return;
                }
                const text = this.parser.parseInline(inlineBuffer);
                parts.push(renderParagraphText(text));
                inlineBuffer = [];
            };
            tokens.forEach(((inlineToken, inlineIndex) => {
                const embedToken = embedTokenMap[inlineIndex];
                if (embedToken?.length) {
                    flushInlineBuffer();
                    parts.push(this.parser.parse(embedToken));
                } else {
                    inlineBuffer.push(inlineToken);
                }
            }));
            flushInlineBuffer();
            result = parts.join("");
        } else {
            const text = this.parser.parseInline(tokens);
            result = renderParagraphText(text);
        }
        return result;
    };
    const blockquoteCompiler = ({renderer: renderer, compiler: compiler}) => renderer.blockquote = function({tokens: tokens}) {
        let openTag = "<blockquote>";
        let closeTag = "</blockquote>";
        const firstParagraphIndex = tokens.findIndex((t => t.type === "paragraph"));
        const firstParagraph = tokens[firstParagraphIndex];
        if (firstParagraph) {
            const calloutData = firstParagraph.raw.match(/^(\[!(\w+)\])/);
            if (calloutData) {
                const calloutMark = calloutData[1];
                const calloutType = calloutData[2].toLowerCase();
                tokens = tokens.slice();
                const paragraph = {
                    ...firstParagraph
                };
                if (firstParagraph.tokens) {
                    paragraph.tokens = firstParagraph.tokens.map((t => ({
                        ...t
                    })));
                }
                tokens[firstParagraphIndex] = paragraph;
                paragraph.raw = paragraph.raw.replace(calloutMark, "").trimStart();
                if (paragraph.tokens && paragraph.tokens.length > 0) {
                    paragraph.tokens.forEach((t => {
                        if (t.raw) {
                            t.raw = t.raw.replace(calloutMark, "");
                        }
                        if (t.text) {
                            t.text = t.text.replace(calloutMark, "");
                        }
                    }));
                }
                if (!paragraph.raw.trim()) {
                    tokens.splice(firstParagraphIndex, 1);
                }
                openTag = `<div class="callout ${calloutType}">`;
                closeTag = `</div>`;
            }
        }
        compiler.blockquoteDepth++;
        let body = "";
        try {
            body = this.parser.parse(tokens);
        } finally {
            compiler.blockquoteDepth--;
        }
        return `${openTag}${body}${closeTag}`;
    };
    const taskListCompiler = ({renderer: renderer}) => renderer.list = function(token) {
        const ordered = token.ordered;
        const start = token.start;
        let body = "";
        for (let j = 0; j < token.items.length; j++) {
            const item = token.items[j];
            body += this.listitem?.(item);
        }
        const isTaskList = /<li class="task-list-item">/.test(body.split('class="task-list"')[0]);
        const isStartReq = start && start > 1;
        const tag = ordered ? "ol" : "ul";
        const tagAttrs = [ isTaskList ? 'class="task-list"' : "", isStartReq ? `start="${start}"` : "" ].join(" ").trim();
        return `<${tag} ${tagAttrs}>${body}</${tag}>`;
    };
    const taskListItemCompiler = ({renderer: renderer}) => renderer.listitem = function(item) {
        let text = "";
        if (item.task) {
            const checkbox = this.checkbox?.({
                checked: !!item.checked
            });
            if (item.loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                    item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                        item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                    }
                } else {
                    item.tokens.unshift({
                        type: "text",
                        raw: checkbox + " ",
                        text: checkbox + " "
                    });
                }
            }
        }
        text += this.parser?.parse(item.tokens, !!item.loose);
        const isTaskItem = /^(<input.*type="checkbox"[^>]*>)/.test(text);
        const html = isTaskItem ? `<li class="task-list-item"><label>${text}</label></li>` : `<li>${text}</li>`;
        return html;
    };
    const linkCompiler = ({renderer: renderer, router: router, linkTarget: linkTarget, linkRel: linkRel, compiler: compiler}) => renderer.link = function({href: href, title: title = "", tokens: tokens}) {
        const attrs = [];
        const text = this.parser.parseInline(tokens) || "";
        const {str: str, config: config} = getAndRemoveConfig(title);
        const isAbsolute = isAbsolutePath(href);
        const isNotCompilable = compiler._matchNotCompileLink(href);
        const isMailto = href.startsWith("mailto:");
        linkTarget = config.target || linkTarget;
        linkRel = linkTarget === "_blank" ? compiler.config.externalLinkRel || "noopener" : "";
        title = str;
        if (!isAbsolute && !isNotCompilable && !config.ignore) {
            if (href === compiler.config.homepage) {
                href = "README";
            }
            href = router.toURL(href, null, router.getCurrentPath());
            if (config.target && !isMailto) {
                attrs.push(`target="${linkTarget}"`);
            }
        } else {
            if (!isAbsolute && href.startsWith("./")) {
                href = router.toURL(href, null, router.getCurrentPath()).replace(/^#\//, "/");
            }
            if (!isMailto) {
                attrs.push(`target="${linkTarget}"`);
                if (linkRel !== "") {
                    attrs.push(`rel="${linkRel}"`);
                }
            }
        }
        if (config.disabled) {
            attrs.push("disabled");
            href = "javascript:void(0)";
        }
        if (config.class) {
            let classes = config.class;
            if (Array.isArray(config.class)) {
                classes = config.class.join(" ");
            }
            attrs.push(`class="${classes}"`);
        }
        if (config.id) {
            attrs.push(`id="${config.id}"`);
        }
        if (title) {
            attrs.push(`title="${escapeHtml(title)}"`);
        }
        return `<a href="${escapeHtml(href)}" ${attrs.join(" ")}>${text}</a>`;
    };
    const compileMedia = {
        markdown(url) {
            return {
                url: url
            };
        },
        mermaid(url) {
            return {
                url: url
            };
        },
        iframe(url, title) {
            return {
                html: `<iframe src="${escapeHtml(url)}" ${title || "width=100% height=400"}></iframe>`
            };
        },
        video(url, title) {
            return {
                html: `<video src="${escapeHtml(url)}" ${title || "controls"}>Not Supported</video>`
            };
        },
        audio(url, title) {
            return {
                html: `<audio src="${escapeHtml(url)}" ${title || "controls"}>Not Supported</audio>`
            };
        },
        code(url, title) {
            let lang = url.match(/\.(\w+)$/);
            lang = title || lang && lang[1];
            if (lang === "md") {
                lang = "markdown";
            }
            return {
                url: url,
                lang: lang
            };
        }
    };
    const tableCellCompiler = ({renderer: renderer}) => renderer.tablecell = function(token) {
        let content;
        if (token.embedTokenMap && token.tokens?.length) {
            content = "";
            token.tokens.forEach(((inlineToken, inlineIndex) => {
                const embedToken = token.embedTokenMap[inlineIndex];
                if (embedToken?.length) {
                    content += this.parser.parse(embedToken);
                } else {
                    content += this.parser.parseInline([ inlineToken ]);
                }
            }));
        } else if (token.embedTokens && token.embedTokens.length > 0) {
            content = this.parser.parse(token.embedTokens);
        } else {
            content = this.parser.parseInline(token.tokens);
        }
        const type = token.header ? "th" : "td";
        const tag = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
        return tag + content + `</${type}>\n`;
    };
    const cachedLinks = {};
    class Compiler {
        constructor(config, router) {
            this.config = config;
            this.router = router;
            this.cacheTree = {};
            this.toc = [];
            this.blockquoteDepth = 0;
            this.cacheTOC = {};
            this.linkTarget = config.externalLinkTarget || "_blank";
            this.linkRel = this.linkTarget === "_blank" ? config.externalLinkRel || "noopener" : "";
            this.contentBase = router.getBasePath();
            this.renderer = this._initRenderer();
            let compile;
            const mdConf = config.markdown || {};
            if (isFn(mdConf)) {
                compile = mdConf(g, this.renderer);
            } else {
                g.setOptions(Object.assign(mdConf, {
                    renderer: Object.assign(this.renderer, mdConf.renderer)
                }));
                compile = g;
            }
            this._marked = compile;
            this.compile = text => {
                let isCached = true;
                const result = cached$1((_ => {
                    isCached = false;
                    let html = "";
                    if (!text) {
                        return text;
                    }
                    if (isPrimitive(text)) {
                        html = compile(text);
                    } else {
                        html = compile.parser(text);
                    }
                    html = config.noEmoji ? html : emojify(html, config.nativeEmoji);
                    slugify.clear();
                    return html;
                }))(text);
                const curFileName = this.router.parse().file;
                if (isCached) {
                    this.toc = this.cacheTOC[curFileName];
                } else {
                    this.cacheTOC[curFileName] = [ ...this.toc ];
                }
                return result;
            };
        }
        compileEmbed(href, title) {
            const {str: str, config: config} = getAndRemoveConfig(title);
            let embed;
            title = str;
            if (config.include) {
                if (!isAbsolutePath(href)) {
                    href = getPath(this.contentBase, getParentPath(this.router.getCurrentPath()), href);
                }
                let media;
                const mediaType = Array.isArray(config.type) ? config.type[0] : config.type;
                if (mediaType && (media = compileMedia[mediaType])) {
                    embed = media.call(this, href, title);
                    embed.type = mediaType;
                } else {
                    let type = "code";
                    if (/\.(md|markdown)/.test(href)) {
                        type = "markdown";
                    } else if (/\.mmd/.test(href)) {
                        type = "mermaid";
                    } else if (/\.html?/.test(href)) {
                        type = "iframe";
                    } else if (/\.(mp4|ogg)/.test(href)) {
                        type = "video";
                    } else if (/\.mp3/.test(href)) {
                        type = "audio";
                    }
                    embed = compileMedia[type](href, title);
                    embed.type = type;
                }
                embed.fragment = config.fragment;
                embed.omitFragmentLine = config.omitFragmentLine;
                return embed;
            }
        }
        _matchNotCompileLink(link) {
            const links = this.config.noCompileLinks || [];
            for (const n of links) {
                const re = cachedLinks[n] || (cachedLinks[n] = new RegExp(`^${n}$`));
                if (re.test(link)) {
                    return link;
                }
            }
        }
        _initRenderer() {
            const renderer = new g.Renderer;
            const {linkTarget: linkTarget, linkRel: linkRel, router: router, contentBase: contentBase} = this;
            const origin = {};
            origin.heading = headingCompiler({
                renderer: renderer,
                router: router,
                compiler: this
            });
            origin.blockquoteCompiler = blockquoteCompiler({
                renderer: renderer,
                compiler: this
            });
            origin.code = highlightCodeCompiler({
                renderer: renderer
            });
            origin.link = linkCompiler({
                renderer: renderer,
                router: router,
                linkTarget: linkTarget,
                linkRel: linkRel,
                compiler: this
            });
            origin.paragraph = paragraphCompiler({
                renderer: renderer
            });
            origin.image = imageCompiler({
                renderer: renderer,
                contentBase: contentBase,
                router: router
            });
            origin.list = taskListCompiler({
                renderer: renderer
            });
            origin.listitem = taskListItemCompiler({
                renderer: renderer
            });
            origin.tablecell = tableCellCompiler({
                renderer: renderer
            });
            renderer.origin = origin;
            return renderer;
        }
        sidebar(text, level) {
            const {toc: toc} = this;
            const currentPath = this.router.getCurrentPath();
            let html = "";
            if (text) {
                return this.compile(text);
            }
            for (let i = 0; i < toc.length; i++) {
                if (toc[i].ignoreSubHeading) {
                    const deletedHeaderLevel = toc[i].depth;
                    toc.splice(i, 1);
                    while (i < toc.length && toc[i].depth > deletedHeaderLevel) {
                        toc.splice(i, 1);
                    }
                    i--;
                }
            }
            const tree$1 = this.cacheTree[currentPath] || genTree(toc, level);
            html = tree(tree$1);
            this.cacheTree[currentPath] = tree$1;
            return html;
        }
        resetToc() {
            this.toc = [];
        }
        subSidebar(level) {
            const currentPath = this.router.getCurrentPath();
            const {cacheTree: cacheTree, toc: toc} = this;
            toc[0] && toc[0].ignoreAllSubs && toc.splice(0);
            toc[0] && toc[0].depth === 1 && toc.shift();
            for (let i = 0; i < toc.length; i++) {
                toc[i].ignoreSubHeading && toc.splice(i, 1) && i--;
            }
            const tree$1 = cacheTree[currentPath] || genTree(toc, level);
            cacheTree[currentPath] = tree$1;
            this.toc = [];
            return tree(tree$1);
        }
        header(text, level) {
            const tokenHeading = {
                type: "heading",
                raw: text,
                depth: level,
                text: text,
                tokens: [ {
                    type: "text",
                    raw: text,
                    text: text
                } ]
            };
            return this.renderer.heading(tokenHeading);
        }
        cover(text) {
            const cacheToc = this.toc.slice();
            const html = this.compile(text);
            this.toc = cacheToc.slice();
            return html;
        }
    }
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    var _templateObject = _taggedTemplateLiteral([ "", "" ], [ "", "" ]);
    function _taggedTemplateLiteral(strings, raw) {
        return Object.freeze(Object.defineProperties(strings, {
            raw: {
                value: Object.freeze(raw)
            }
        }));
    }
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    var TemplateTag = function() {
        function TemplateTag() {
            var _this = this;
            for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
                transformers[_key] = arguments[_key];
            }
            _classCallCheck(this, TemplateTag);
            this.tag = function(strings) {
                for (var _len2 = arguments.length, expressions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    expressions[_key2 - 1] = arguments[_key2];
                }
                if (typeof strings === "function") {
                    return _this.interimTag.bind(_this, strings);
                }
                if (typeof strings === "string") {
                    return _this.transformEndResult(strings);
                }
                strings = strings.map(_this.transformString.bind(_this));
                return _this.transformEndResult(strings.reduce(_this.processSubstitutions.bind(_this, expressions)));
            };
            if (transformers.length > 0 && Array.isArray(transformers[0])) {
                transformers = transformers[0];
            }
            this.transformers = transformers.map((function(transformer) {
                return typeof transformer === "function" ? transformer() : transformer;
            }));
            return this.tag;
        }
        _createClass(TemplateTag, [ {
            key: "interimTag",
            value: function interimTag(previousTag, template) {
                for (var _len3 = arguments.length, substitutions = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                    substitutions[_key3 - 2] = arguments[_key3];
                }
                return this.tag(_templateObject, previousTag.apply(undefined, [ template ].concat(substitutions)));
            }
        }, {
            key: "processSubstitutions",
            value: function processSubstitutions(substitutions, resultSoFar, remainingPart) {
                var substitution = this.transformSubstitution(substitutions.shift(), resultSoFar);
                return "".concat(resultSoFar, substitution, remainingPart);
            }
        }, {
            key: "transformString",
            value: function transformString(str) {
                var cb = function cb(res, transform) {
                    return transform.onString ? transform.onString(res) : res;
                };
                return this.transformers.reduce(cb, str);
            }
        }, {
            key: "transformSubstitution",
            value: function transformSubstitution(substitution, resultSoFar) {
                var cb = function cb(res, transform) {
                    return transform.onSubstitution ? transform.onSubstitution(res, resultSoFar) : res;
                };
                return this.transformers.reduce(cb, substitution);
            }
        }, {
            key: "transformEndResult",
            value: function transformEndResult(endResult) {
                var cb = function cb(res, transform) {
                    return transform.onEndResult ? transform.onEndResult(res) : res;
                };
                return this.transformers.reduce(cb, endResult);
            }
        } ]);
        return TemplateTag;
    }();
    var trimResultTransformer = function trimResultTransformer() {
        var side = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return {
            onEndResult: function onEndResult(endResult) {
                if (side === "") {
                    return endResult.trim();
                }
                side = side.toLowerCase();
                if (side === "start" || side === "left") {
                    return endResult.replace(/^\s*/, "");
                }
                if (side === "end" || side === "right") {
                    return endResult.replace(/\s*$/, "");
                }
                throw new Error("Side not supported: " + side);
            }
        };
    };
    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }
            return arr2;
        } else {
            return Array.from(arr);
        }
    }
    var stripIndentTransformer = function stripIndentTransformer() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "initial";
        return {
            onEndResult: function onEndResult(endResult) {
                if (type === "initial") {
                    var match = endResult.match(/^[^\S\n]*(?=\S)/gm);
                    var indent = match && Math.min.apply(Math, _toConsumableArray(match.map((function(el) {
                        return el.length;
                    }))));
                    if (indent) {
                        var regexp = new RegExp("^.{" + indent + "}", "gm");
                        return endResult.replace(regexp, "");
                    }
                    return endResult;
                }
                if (type === "all") {
                    return endResult.replace(/^[^\S\n]+/gm, "");
                }
                throw new Error("Unknown type: " + type);
            }
        };
    };
    var replaceResultTransformer = function replaceResultTransformer(replaceWhat, replaceWith) {
        return {
            onEndResult: function onEndResult(endResult) {
                if (replaceWhat == null || replaceWith == null) {
                    throw new Error("replaceResultTransformer requires at least 2 arguments.");
                }
                return endResult.replace(replaceWhat, replaceWith);
            }
        };
    };
    var replaceSubstitutionTransformer = function replaceSubstitutionTransformer(replaceWhat, replaceWith) {
        return {
            onSubstitution: function onSubstitution(substitution, resultSoFar) {
                if (replaceWhat == null || replaceWith == null) {
                    throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");
                }
                if (substitution == null) {
                    return substitution;
                } else {
                    return substitution.toString().replace(replaceWhat, replaceWith);
                }
            }
        };
    };
    var defaults = {
        separator: "",
        conjunction: "",
        serial: false
    };
    var inlineArrayTransformer = function inlineArrayTransformer() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;
        return {
            onSubstitution: function onSubstitution(substitution, resultSoFar) {
                if (Array.isArray(substitution)) {
                    var arrayLength = substitution.length;
                    var separator = opts.separator;
                    var conjunction = opts.conjunction;
                    var serial = opts.serial;
                    var indent = resultSoFar.match(/(\n?[^\S\n]+)$/);
                    if (indent) {
                        substitution = substitution.join(separator + indent[1]);
                    } else {
                        substitution = substitution.join(separator + " ");
                    }
                    if (conjunction && arrayLength > 1) {
                        var separatorIndex = substitution.lastIndexOf(separator);
                        substitution = substitution.slice(0, separatorIndex) + (serial ? separator : "") + " " + conjunction + substitution.slice(separatorIndex + 1);
                    }
                }
                return substitution;
            }
        };
    };
    var splitStringTransformer = function splitStringTransformer(splitBy) {
        return {
            onSubstitution: function onSubstitution(substitution, resultSoFar) {
                {
                    if (typeof substitution === "string" && substitution.includes(splitBy)) {
                        substitution = substitution.split(splitBy);
                    }
                }
                return substitution;
            }
        };
    };
    var isValidValue = function isValidValue(x) {
        return x != null && !Number.isNaN(x) && typeof x !== "boolean";
    };
    var removeNonPrintingValuesTransformer = function removeNonPrintingValuesTransformer() {
        return {
            onSubstitution: function onSubstitution(substitution) {
                if (Array.isArray(substitution)) {
                    return substitution.filter(isValidValue);
                }
                if (isValidValue(substitution)) {
                    return substitution;
                }
                return "";
            }
        };
    };
    new TemplateTag(inlineArrayTransformer({
        separator: ","
    }), stripIndentTransformer, trimResultTransformer);
    new TemplateTag(inlineArrayTransformer({
        separator: ",",
        conjunction: "and"
    }), stripIndentTransformer, trimResultTransformer);
    new TemplateTag(inlineArrayTransformer({
        separator: ",",
        conjunction: "or"
    }), stripIndentTransformer, trimResultTransformer);
    new TemplateTag(splitStringTransformer("\n"), removeNonPrintingValuesTransformer, inlineArrayTransformer, stripIndentTransformer, trimResultTransformer);
    new TemplateTag(splitStringTransformer("\n"), inlineArrayTransformer, stripIndentTransformer, trimResultTransformer, replaceSubstitutionTransformer(/&/g, "&amp;"), replaceSubstitutionTransformer(/</g, "&lt;"), replaceSubstitutionTransformer(/>/g, "&gt;"), replaceSubstitutionTransformer(/"/g, "&quot;"), replaceSubstitutionTransformer(/'/g, "&#x27;"), replaceSubstitutionTransformer(/`/g, "&#x60;"));
    new TemplateTag(replaceResultTransformer(/(?:\n(?:\s*))+/g, " "), trimResultTransformer);
    new TemplateTag(replaceResultTransformer(/(?:\n\s*)/g, ""), trimResultTransformer);
    new TemplateTag(inlineArrayTransformer({
        separator: ","
    }), replaceResultTransformer(/(?:\s+)/g, " "), trimResultTransformer);
    new TemplateTag(inlineArrayTransformer({
        separator: ",",
        conjunction: "or"
    }), replaceResultTransformer(/(?:\s+)/g, " "), trimResultTransformer);
    new TemplateTag(inlineArrayTransformer({
        separator: ",",
        conjunction: "and"
    }), replaceResultTransformer(/(?:\s+)/g, " "), trimResultTransformer);
    new TemplateTag(inlineArrayTransformer, stripIndentTransformer, trimResultTransformer);
    new TemplateTag(inlineArrayTransformer, replaceResultTransformer(/(?:\s+)/g, " "), trimResultTransformer);
    var stripIndent = new TemplateTag(stripIndentTransformer, trimResultTransformer);
    new TemplateTag(stripIndentTransformer("all"), trimResultTransformer);
    let barEl;
    let timeId;
    function init() {
        const div = create("div");
        div.classList.add("progress");
        div.setAttribute("role", "progressbar");
        div.setAttribute("aria-valuemin", "0");
        div.setAttribute("aria-valuemax", "100");
        div.setAttribute("aria-label", "Loading...");
        appendTo(body, div);
        barEl = div;
    }
    function progressbar(info) {
        const {loaded: loaded, total: total, step: step} = info;
        let num;
        !barEl && init();
        if (typeof step !== "undefined") {
            num = parseInt(barEl.style.width || 0, 10) + step;
            num = num > 80 ? 80 : num;
        } else {
            num = Math.floor(loaded / total * 100);
        }
        barEl.style.opacity = 1;
        barEl.style.width = num >= 95 ? "100%" : num + "%";
        barEl.setAttribute("aria-valuenow", num >= 95 ? 100 : num);
        if (num >= 95) {
            clearTimeout(timeId);
            timeId = setTimeout((_ => {
                barEl.style.opacity = 0;
                barEl.style.width = "0%";
                barEl.removeAttribute("aria-valuenow");
            }), 200);
        }
    }
    const cache = {};
    function get(url, hasBar = false, headers = {}) {
        const xhr = new XMLHttpRequest;
        const cached = cache[url];
        if (cached) {
            return {
                then: cb => cb(cached.content, cached.opt),
                abort: noop
            };
        }
        xhr.open("GET", url);
        for (const i of Object.keys(headers)) {
            xhr.setRequestHeader(i, headers[i]);
        }
        xhr.send();
        return {
            then(success, error = noop) {
                const getResponseStatus = event => ({
                    ok: event.target.status >= 200 && event.target.status < 300,
                    status: event.target.status,
                    statusText: event.target.statusText
                });
                if (hasBar) {
                    const id = setInterval((_ => progressbar({
                        step: Math.floor(Math.random() * 5 + 1)
                    })), 500);
                    xhr.addEventListener("progress", progressbar);
                    xhr.addEventListener("loadend", (evt => {
                        progressbar(evt);
                        clearInterval(id);
                    }));
                }
                xhr.addEventListener("error", (event => {
                    error(event, getResponseStatus(event));
                }));
                xhr.addEventListener("load", (event => {
                    const target = event.target;
                    if (target.status >= 400) {
                        error(event, getResponseStatus(event));
                    } else {
                        if (typeof target.response !== "string") {
                            throw new TypeError("Unsupported content type.");
                        }
                        const result = cache[url] = {
                            content: target.response,
                            opt: {
                                updatedAt: xhr.getResponseHeader("last-modified") ?? ""
                            }
                        };
                        success(result.content, result.opt, getResponseStatus(event));
                    }
                }));
            },
            abort: _ => xhr.readyState !== 4 && xhr.abort()
        };
    }
    const cached = {};
    function extractFragmentContent(text, fragment, fullLine) {
        if (!fragment) {
            return text;
        }
        let fragmentRegex = `(?:###|\\/\\/\\/)\\s*\\[${fragment}\\]`;
        const contentRegex = `[\\s\\S]*?`;
        if (fullLine) {
            fragmentRegex = `.*${fragmentRegex}.*\n`;
        }
        const pattern = new RegExp(`(?:${fragmentRegex})(${contentRegex})(?:${fragmentRegex})`);
        const match = text.match(pattern);
        return stripIndent((match || [])[1] || "").trim();
    }
    function walkFetchEmbed({embedTokens: embedTokens, compile: compile, fetch: fetch, frontMatter: frontMatter}, cb) {
        if (!embedTokens.length) {
            return cb({});
        }
        const processStep = step => {
            const currentToken = embedTokens[step];
            const next = text => {
                let embedToken;
                if (text) {
                    if (currentToken.embed.type === "markdown") {
                        let path = currentToken.embed.url.split("/");
                        path.pop();
                        path = path.join("/");
                        text = text.replace(/\[([^[\]]+)\]\(([^)]+)\)/g, (x => {
                            const linkBeginIndex = x.indexOf("(");
                            if (x.slice(linkBeginIndex, linkBeginIndex + 2) === "(.") {
                                return x.substring(0, linkBeginIndex) + `(${window.location.protocol}//${window.location.host}${path}/` + x.substring(linkBeginIndex + 1, x.length - 1) + ")";
                            }
                            return x;
                        }));
                        const frontMatterInstalled = frontMatter?.installed;
                        if (frontMatterInstalled) {
                            text = frontMatter?.parseMarkdown(text);
                        }
                        if (currentToken.embed.fragment) {
                            text = extractFragmentContent(text, currentToken.embed.fragment, currentToken.embed.omitFragmentLine);
                        }
                        embedToken = compile.lexer(text);
                    } else if (currentToken.embed.type === "code") {
                        if (currentToken.embed.fragment) {
                            text = extractFragmentContent(text, currentToken.embed.fragment, currentToken.embed.omitFragmentLine);
                        }
                        embedToken = compile.lexer("```" + currentToken.embed.lang + "\n" + text.replace(/`/g, "@DOCSIFY_QM@") + "\n```\n");
                    } else if (currentToken.embed.type === "mermaid") {
                        embedToken = [ {
                            type: "html",
                            text: `<div class="mermaid">\n${text}\n</div>`
                        } ];
                        embedToken.links = {};
                    } else {
                        embedToken = [ {
                            type: "html",
                            text: text
                        } ];
                        embedToken.links = {};
                    }
                }
                cb({
                    token: currentToken,
                    embedToken: embedToken,
                    rowIndex: currentToken.rowIndex,
                    cellIndex: currentToken.cellIndex,
                    tokenRef: currentToken.tokenRef
                });
                if (step + 1 >= embedTokens.length) {
                    cb({});
                } else {
                    processStep(step + 1);
                }
            };
            if (currentToken.embed.url) {
                get(currentToken.embed.url).then(next, (() => next()));
            } else {
                next(currentToken.embed.html);
            }
        };
        processStep(0);
    }
    function prerenderEmbed({compiler: compiler, raw: raw = "", fetch: fetch}, done) {
        const hit = cached[raw];
        if (hit) {
            const copy = hit.slice();
            copy.links = hit.links;
            return done(copy);
        }
        const compile = compiler._marked;
        const frontMatter = compiler.config.frontMatter;
        let tokens = compile.lexer(raw);
        const embedTokens = [];
        const links = tokens.links;
        tokens.forEach(((token, index) => {
            if (token.type === "paragraph") {
                (token.tokens || []).forEach(((inlineToken, inlineIndex) => {
                    if (inlineToken.type !== "link") {
                        return;
                    }
                    const embed = compiler.compileEmbed(inlineToken.href, inlineToken.title);
                    if (embed) {
                        embedTokens.push({
                            index: index,
                            tokenRef: token,
                            inlineIndex: inlineIndex,
                            embed: embed
                        });
                    }
                }));
            } else if (token.type === "table") {
                token.rows.forEach(((row, rowIndex) => {
                    row.forEach(((cell, cellIndex) => {
                        (cell.tokens || []).forEach(((inlineToken, inlineIndex) => {
                            if (inlineToken.type !== "link") {
                                return;
                            }
                            const embed = compiler.compileEmbed(inlineToken.href, inlineToken.title);
                            if (embed) {
                                embedTokens.push({
                                    index: index,
                                    tokenRef: token,
                                    rowIndex: rowIndex,
                                    cellIndex: cellIndex,
                                    inlineIndex: inlineIndex,
                                    embed: embed
                                });
                            }
                        }));
                    }));
                }));
            }
        }));
        const moves = [];
        const tokenInsertState = new WeakMap;
        walkFetchEmbed({
            compile: compile,
            embedTokens: embedTokens,
            fetch: fetch,
            frontMatter: frontMatter
        }, (({embedToken: embedToken, token: token, rowIndex: rowIndex, cellIndex: cellIndex, tokenRef: tokenRef}) => {
            if (token && embedToken) {
                Object.assign(links, embedToken.links);
                if (typeof rowIndex === "number" && typeof cellIndex === "number") {
                    const cell = tokenRef.rows[rowIndex][cellIndex];
                    if (typeof token.inlineIndex === "number") {
                        cell.embedTokenMap ||= {};
                        const existing = cell.embedTokenMap[token.inlineIndex];
                        cell.embedTokenMap[token.inlineIndex] = existing ? existing.concat(embedToken) : embedToken;
                    }
                    if (cell.embedTokens && cell.embedTokens.length) {
                        cell.embedTokens = cell.embedTokens.concat(embedToken);
                    } else {
                        cell.embedTokens = embedToken;
                    }
                } else if (tokenRef.type === "paragraph") {
                    if (typeof token.inlineIndex === "number") {
                        tokenRef.embedTokenMap ||= {};
                        const existing = tokenRef.embedTokenMap[token.inlineIndex];
                        tokenRef.embedTokenMap[token.inlineIndex] = existing ? existing.concat(embedToken) : embedToken;
                    }
                    if (tokenRef.embedTokens && tokenRef.embedTokens.length) {
                        tokenRef.embedTokens = tokenRef.embedTokens.concat(embedToken);
                    } else {
                        tokenRef.embedTokens = embedToken;
                    }
                } else {
                    const state = tokenInsertState.get(tokenRef);
                    if (state) {
                        const insertAt = state.nextIndex;
                        tokens = tokens.slice(0, insertAt).concat(embedToken, tokens.slice(insertAt));
                        moves.push({
                            start: insertAt,
                            delta: embedToken.length
                        });
                        state.nextIndex = insertAt + embedToken.length;
                    } else {
                        let index = token.index;
                        moves.forEach((pos => {
                            if (index > pos.start) {
                                index += pos.delta;
                            }
                        }));
                        tokens = tokens.slice(0, index).concat(embedToken, tokens.slice(index + 1));
                        moves.push({
                            start: index,
                            delta: embedToken.length - 1
                        });
                        tokenInsertState.set(tokenRef, {
                            nextIndex: index + embedToken.length
                        });
                    }
                }
            } else if (!token) {
                cached[raw] = tokens.concat();
                tokens.links = cached[raw].links = links;
                done(tokens);
            }
        }));
    }
    function Render(Base) {
        return class Render extends Base {
            compiler;
            #vueGlobalData;
            #addTextAsTitleAttribute(cssSelector) {
                findAll(cssSelector).forEach((elm => {
                    const e = elm;
                    if (!e.title && e.innerText) {
                        e.title = e.innerText;
                    }
                }));
            }
            #executeScript() {
                const script = findAll(".markdown-section>script").filter((s => !/template/.test(s.type)))[0];
                if (!script) {
                    return false;
                }
                const code = script.innerText.trim();
                if (!code) {
                    return false;
                }
                new Function(code)();
            }
            #formatUpdated(html, updated, fn) {
                updated = typeof fn === "function" ? fn(updated) : typeof fn === "string" ? tinydate(fn)(new Date(updated)) : updated;
                return html.replace(/{docsify-updated}/g, updated);
            }
            #renderMain(html) {
                const docsifyConfig = this.config;
                const markdownElm = find(".markdown-section");
                const vueVersion = "Vue" in window && window.Vue.version && Number(window.Vue.version.charAt(0));
                const isMountedVue = elm => {
                    const isVue2 = Boolean(elm.__vue__ && elm.__vue__._isVue);
                    const isVue3 = Boolean(elm._vnode && elm._vnode.__v_skip);
                    return isVue2 || isVue3;
                };
                if ("Vue" in window) {
                    const mountedElms = findAll(".markdown-section > *").filter((elm => isMountedVue(elm)));
                    for (const mountedElm of mountedElms) {
                        if (vueVersion === 2) {
                            mountedElm.__vue__?.$destroy?.();
                        } else if (vueVersion === 3) {
                            mountedElm.__vue_app__?.unmount();
                        }
                    }
                }
                setHTML(markdownElm, html);
                if (docsifyConfig.executeScript || "Vue" in window && docsifyConfig.executeScript !== false) {
                    this.#executeScript();
                }
                if ("Vue" in window) {
                    const vueGlobalOptions = docsifyConfig.vueGlobalOptions || {};
                    const vueMountData = [];
                    const vueComponentNames = Object.keys(docsifyConfig.vueComponents || {});
                    if (vueVersion === 2 && vueComponentNames.length) {
                        vueComponentNames.forEach((name => {
                            const isNotRegistered = !window.Vue.options.components[name];
                            if (isNotRegistered) {
                                window.Vue.component(name, docsifyConfig.vueComponents[name]);
                            }
                        }));
                    }
                    if (!this.#vueGlobalData && vueGlobalOptions.data && typeof vueGlobalOptions.data === "function") {
                        this.#vueGlobalData = vueGlobalOptions.data();
                    }
                    vueMountData.push(...Object.keys(docsifyConfig.vueMounts || {}).map((cssSelector => [ find(markdownElm, cssSelector), docsifyConfig.vueMounts[cssSelector] ])).filter((([elm, vueConfig]) => elm)));
                    const reHasBraces = /{{2}[^{}]*}{2}/;
                    const reHasDirective = /<[^>/]+\s([@:]|v-)[\w-:.[\]]+[=>\s]/;
                    vueMountData.push(...findAll(".markdown-section > *").filter((elm => !vueMountData.some((([e, c]) => e === elm)))).filter((elm => {
                        const selector = vueComponentNames.join(",");
                        const hasComponents = selector ? Boolean(elm.querySelector(selector)) : false;
                        const isVueMount = elm.tagName.toLowerCase() in (docsifyConfig.vueComponents || {}) || hasComponents || reHasBraces.test(elm.outerHTML) || reHasDirective.test(elm.outerHTML);
                        return isVueMount;
                    })).map((elm => {
                        const vueConfig = {
                            ...vueGlobalOptions
                        };
                        if (this.#vueGlobalData) {
                            vueConfig.data = () => this.#vueGlobalData;
                        }
                        return [ elm, vueConfig ];
                    })));
                    if (vueMountData.length === 0) {
                        return;
                    }
                    for (const [mountElm, vueConfig] of vueMountData) {
                        const isVueAttr = "data-isvue";
                        const isSkipElm = mountElm.matches("pre, :not([v-template]):has(pre), script") || isMountedVue(mountElm) || mountElm.querySelector(`[${isVueAttr}]`);
                        if (!isSkipElm) {
                            mountElm.setAttribute(isVueAttr, "");
                            if (vueVersion === 2) {
                                vueConfig.el = undefined;
                                new window.Vue(vueConfig).$mount(mountElm);
                            } else if (vueVersion === 3) {
                                const app = window.Vue.createApp(vueConfig);
                                vueComponentNames.forEach((name => {
                                    const config = docsifyConfig.vueComponents[name];
                                    app.component(name, config);
                                }));
                                app.mount(mountElm);
                            }
                        }
                    }
                }
            }
            #renderNameLink(vm) {
                const el = getNode(".app-name-link");
                const nameLink = vm.config.nameLink;
                const path = vm.route.path;
                if (!el) {
                    return;
                }
                if (isPrimitive(vm.config.nameLink)) {
                    el.setAttribute("href", nameLink);
                } else if (typeof nameLink === "object") {
                    const match = Object.keys(nameLink).filter((key => path.indexOf(key) > -1))[0];
                    el.setAttribute("href", nameLink[match]);
                }
            }
            #renderSkipLink(vm) {
                const {skipLink: skipLink} = vm.config;
                if (skipLink !== false) {
                    const el = getNode("#skip-to-content");
                    let skipLinkText = typeof skipLink === "string" ? skipLink : "Skip to main content";
                    if (skipLink?.constructor === Object) {
                        const matchingPath = Object.keys(skipLink).find((path => vm.route.path.startsWith(path.startsWith("/") ? path : `/${path}`)));
                        const matchingText = matchingPath && skipLink[matchingPath];
                        skipLinkText = matchingText || skipLinkText;
                    }
                    if (el) {
                        el.innerHTML = skipLinkText;
                    } else {
                        const html = `<button type="button" id="skip-to-content" class="primary">${skipLinkText}</button>`;
                        body.insertAdjacentHTML("afterbegin", html);
                    }
                }
            }
            _renderSidebar(text) {
                const {maxLevel: maxLevel, subMaxLevel: subMaxLevel, loadSidebar: loadSidebar, hideSidebar: hideSidebar} = this.config;
                const sidebarEl = getNode("aside.sidebar");
                const sidebarNavEl = getNode(".sidebar-nav");
                const sidebarToggleEl = getNode("button.sidebar-toggle");
                if (hideSidebar) {
                    sidebarEl?.remove();
                    sidebarToggleEl?.remove();
                    return null;
                }
                if (!this.compiler) {
                    throw new Error("Compiler is not initialized");
                }
                setHTML(".sidebar-nav", this.compiler.sidebar(text, maxLevel));
                sidebarToggleEl.setAttribute("aria-expanded", String(!isMobile()));
                const activeElmHref = decodeURIComponent(this.router.toURL(this.route.path));
                const activeEl = find(`.sidebar-nav a[href="${activeElmHref}"]`);
                this.#addTextAsTitleAttribute(".sidebar-nav a");
                if (loadSidebar && activeEl) {
                    const parent = activeEl.parentElement;
                    parent.innerHTML += this.compiler.subSidebar(subMaxLevel) || "";
                } else {
                    this.compiler.resetToc();
                }
                this._bindEventOnRendered(activeEl);
                const pageLinks = findAll(sidebarNavEl, 'a:is(li > a, li > p > a):not(.section-link, [target="_blank"])');
                const pageLinkGroups = findAll(sidebarEl, "li").filter((elm => elm.querySelector(":scope > ul") && !elm.querySelectorAll(":scope > a, :scope > p > a").length));
                pageLinks.forEach((elm => {
                    elm.classList.add("page-link");
                }));
                pageLinkGroups.forEach((elm => {
                    elm.classList.add("group");
                    elm.querySelector(":scope > p:not(:has(> *))")?.classList.add("group-title");
                }));
            }
            _bindEventOnRendered(activeEl) {
                const {autoHeader: autoHeader} = this.config;
                this.onRender();
                if (autoHeader && activeEl) {
                    const main = getNode("#main");
                    const hasH1 = main.querySelector("h1");
                    if (!hasH1) {
                        const h1HTML = this.compiler.header(activeEl.innerText, 1);
                        const h1Node = create("div", h1HTML).firstElementChild;
                        if (h1Node) {
                            before(main, h1Node);
                        }
                    }
                }
            }
            _renderNav(text) {
                if (!text) {
                    return;
                }
                const html = this.compiler.compile(text);
                [ ".app-nav", ".app-nav-merged" ].forEach((selector => {
                    setHTML(selector, html);
                    this.#addTextAsTitleAttribute(`${selector} a`);
                }));
            }
            _renderMain(text, opt = {}, next) {
                const {response: response} = this.route;
                if (response && !response.ok && (!text || response.status !== 404)) {
                    text = `# ${response.status} - ${response.statusText}`;
                }
                this.callHook("beforeEach", text, (result => {
                    let html;
                    const callback = () => {
                        if (opt.updatedAt) {
                            html = this.#formatUpdated(html, opt.updatedAt, this.config.formatUpdated);
                        }
                        this.callHook("afterEach", html, (hookData => {
                            this.#renderMain(hookData);
                            next();
                        }));
                    };
                    if (this.isHTML) {
                        html = this.result = text;
                        callback();
                    } else {
                        prerenderEmbed({
                            compiler: this.compiler,
                            raw: result,
                            fetch: undefined
                        }, (tokens => {
                            html = this.compiler.compile(tokens);
                            callback();
                        }));
                    }
                }));
            }
            _renderCover(text, coverOnly) {
                const el = getNode(".cover");
                const rootElm = document.documentElement;
                const coverBg = getComputedStyle(rootElm).getPropertyValue("--cover-bg");
                getNode("main").classList[coverOnly ? "add" : "remove"]("hidden");
                if (!text) {
                    el.classList.remove("show");
                    return;
                }
                el.classList.add("show");
                let html = this.coverIsHTML ? text : this.compiler.cover(text);
                if (!coverBg) {
                    const mdBgMatch = html.trim().match('<p><img.*?data-origin="(.*?)".*?alt="(.*?)"[^>]*?>([^<]*?)</p>$');
                    let mdCoverBg;
                    if (mdBgMatch) {
                        const [bgMatch, bgValue, bgType] = mdBgMatch;
                        if (bgType === "color") {
                            mdCoverBg = bgValue;
                        } else {
                            const path = !isAbsolutePath(bgValue) ? getPath(this.router.getBasePath(), bgValue) : bgValue;
                            mdCoverBg = `center center / cover url(${path})`;
                        }
                        html = html.replace(bgMatch, "");
                    } else {
                        const degrees = Math.round(Math.random() * 120 / 2);
                        let hue1 = Math.round(Math.random() * 360);
                        let hue2 = Math.round(Math.random() * 360);
                        if (Math.abs(hue1 - hue2) < 50) {
                            const hueShift = Math.round(Math.random() * 25) + 25;
                            hue1 = Math.max(hue1, hue2) + hueShift;
                            hue2 = Math.min(hue1, hue2) - hueShift;
                        }
                        if (window?.CSS?.supports("color", "oklch(0 0 0 / 1%)")) {
                            const l = 90;
                            const c = 20;
                            mdCoverBg = `linear-gradient(\n              ${degrees}deg,\n              oklch(${l}% ${c}% ${hue1}) 0%,\n              oklch(${l}% ${c}% ${hue2}) 100%\n            )`.replace(/\s+/g, " ");
                        } else {
                            const s = 100;
                            const l = 85;
                            const o = 100;
                            mdCoverBg = `linear-gradient(\n              ${degrees}deg,\n              hsl(${hue1} ${s}% ${l}% / ${o}%) 0%,\n              hsl(${hue2} ${s}% ${l}% / ${o}%) 100%\n            )`.replace(/\s+/g, " ");
                        }
                    }
                    rootElm.style.setProperty("--cover-bg", mdCoverBg);
                }
                setHTML(".cover-main", html);
                findAll(".cover-main > p:last-of-type > a:not([class])").forEach((elm => {
                    const buttonType = elm.matches(":first-child") ? "primary" : "secondary";
                    elm.classList.add("button", buttonType);
                }));
            }
            _updateRender() {
                this.#renderNameLink(this);
                this.#renderSkipLink(this);
            }
            initRender() {
                const config = this.config;
                this.compiler = new Compiler(config, this.router);
                window.__current_docsify_compiler__ = this.compiler;
                const id = config.el || "#app";
                const el = find(id);
                if (el) {
                    let html = "";
                    if (config.repo) {
                        html += corner(config.repo, config.cornerExternalLinkTarget);
                    }
                    if (config.coverpage) {
                        html += cover();
                    }
                    if (config.logo) {
                        const isBase64 = /^data:image/.test(config.logo);
                        const isExternal = /(?:http[s]?:)?\/\//.test(config.logo);
                        const isRelative = /^\./.test(config.logo);
                        if (!isBase64 && !isExternal && !isRelative) {
                            config.logo = getPath(this.router.getBasePath(), config.logo);
                        }
                    }
                    html += main(config);
                    setHTML(el, html, true);
                } else {
                    this.rendered = true;
                }
                if (config.loadNavbar) {
                    const navEl = find("nav") || create("nav");
                    const isMergedSidebar = config.mergeNavbar;
                    navEl.classList.add("app-nav");
                    navEl.setAttribute("aria-label", "secondary");
                    body.prepend(navEl);
                    if (isMergedSidebar) {
                        const mergedNavEl = create("div");
                        const sidebarEl = find(".sidebar");
                        const sidebarNavEl = find(".sidebar-nav");
                        mergedNavEl?.classList.add("app-nav-merged");
                        sidebarEl?.insertBefore(mergedNavEl, sidebarNavEl);
                    }
                }
                if (config.themeColor) {
                    const themeNode = create("div", theme(config.themeColor)).firstElementChild;
                    if (themeNode) {
                        $$1.head.appendChild(themeNode);
                    }
                }
                this._updateRender();
                body.classList.add("ready");
            }
        };
    }
    function Fetch(Base) {
        return class Fetch extends Base {
            #loadNested(path, qs, file, next, vm, first) {
                path = first ? path : path.replace(/\/$/, "");
                path = getParentPath(path);
                if (!path) {
                    return;
                }
                get(vm.router.getFile(path + file) + qs, false, vm.config.requestHeaders).then(next, (_error => this.#loadNested(path, qs, file, next, vm)));
            }
            #last;
            #abort=() => this.#last && this.#last.abort && this.#last.abort();
            #request=(url, requestHeaders) => {
                this.#abort();
                this.#last = get(url, true, requestHeaders);
                return this.#last;
            };
            #get404Path=(path, config) => {
                const {notFoundPage: notFoundPage, ext: ext} = config;
                const defaultPath = "_404" + (ext || ".md");
                let key;
                let path404;
                switch (typeof notFoundPage) {
                  case "boolean":
                    path404 = defaultPath;
                    break;

                  case "string":
                    path404 = notFoundPage;
                    break;

                  case "object":
                    key = Object.keys(notFoundPage).sort(((a, b) => b.length - a.length)).filter((k => path.match(new RegExp("^" + k))))[0];
                    path404 = key && notFoundPage[key] || defaultPath;
                    break;
                }
                return path404;
            };
            _loadSideAndNav(path, qs, loadSidebar, cb) {
                return () => {
                    const renderSidebar = result => {
                        this._renderSidebar(result);
                        cb();
                    };
                    if (!loadSidebar) {
                        renderSidebar(null);
                        return;
                    }
                    this.#loadNested(path, qs, loadSidebar, renderSidebar, this, true);
                };
            }
            _fetch(cb = noop) {
                const {query: query} = this.route;
                const {path: path} = this.route;
                if (isExternal(path)) {
                    history.replaceState(null, "", "#");
                    this.router.normalize();
                } else {
                    const qs = stringifyQuery(query, [ "id" ]);
                    const {loadNavbar: loadNavbar, requestHeaders: requestHeaders, loadSidebar: loadSidebar} = this.config;
                    const file = this.router.getFile(path);
                    this.isRemoteUrl = isExternal(file);
                    this.isHTML = /\.html$/g.test(file);
                    const contentFetched = (text, opt, response) => {
                        this.route.response = response;
                        this._renderMain(text, opt, this._loadSideAndNav(path, qs, loadSidebar, cb));
                    };
                    const contentFailedToFetch = (_error, response) => {
                        this.route.response = response;
                        this._fetchFallbackPage(path, qs, cb) || this._fetch404(file, qs, cb);
                    };
                    if (!this.isRemoteUrl) {
                        this.matchVirtualRoute(path).then((contents => {
                            if (typeof contents === "string") {
                                contentFetched(contents);
                            } else {
                                this.#request(file + qs, requestHeaders).then(contentFetched, contentFailedToFetch);
                            }
                        }));
                    } else {
                        this.#request(file + qs, requestHeaders).then(contentFetched, contentFailedToFetch);
                    }
                    loadNavbar && this.#loadNested(path, qs, loadNavbar, (text => this._renderNav(text)), this, true);
                }
            }
            _fetchCover() {
                const {coverpage: coverpage, requestHeaders: requestHeaders} = this.config;
                const query = this.route.query;
                const root = getParentPath(this.route.path);
                if (coverpage) {
                    let path = null;
                    const routePath = this.route.path;
                    if (typeof coverpage === "string") {
                        if (routePath === "/") {
                            path = coverpage;
                        }
                    } else if (Array.isArray(coverpage)) {
                        path = coverpage.indexOf(routePath) > -1 && "_coverpage";
                    } else {
                        const cover = coverpage[routePath];
                        path = cover === true ? "_coverpage" : cover;
                    }
                    const coverOnly = Boolean(path) && this.config.onlyCover;
                    if (path) {
                        path = this.router.getFile(root + path);
                        this.coverIsHTML = /\.html$/g.test(path);
                        get(path + stringifyQuery(query, [ "id" ]), false, requestHeaders).then((text => this._renderCover(text, coverOnly)));
                    } else {
                        this._renderCover(null, coverOnly);
                    }
                    return coverOnly;
                }
            }
            $fetch(cb = noop, onNavigate = this.onNavigate.bind(this)) {
                const done = () => {
                    this.callHook("doneEach");
                    cb();
                };
                const onlyCover = this._fetchCover();
                if (onlyCover) {
                    done();
                } else {
                    this._fetch((() => {
                        onNavigate();
                        done();
                    }));
                }
            }
            _fetchFallbackPage(path, qs, cb = noop) {
                const {requestHeaders: requestHeaders, fallbackLanguages: fallbackLanguages, fallbackDefaultLanguage: fallbackDefaultLanguage, loadSidebar: loadSidebar} = this.config;
                if (!fallbackLanguages) {
                    return false;
                }
                const local = path.split("/")[1];
                if (fallbackLanguages.indexOf(local) === -1) {
                    return false;
                }
                const newPath = this.router.getFile(path.replace(new RegExp(`^/${local}`), fallbackDefaultLanguage));
                const req = this.#request(newPath + qs, requestHeaders);
                req.then(((text, opt) => this._renderMain(text, opt, this._loadSideAndNav(path, qs, loadSidebar, cb))), (_error => this._fetch404(path, qs, cb)));
                return true;
            }
            _fetch404(path, qs, cb = noop) {
                const {loadSidebar: loadSidebar, requestHeaders: requestHeaders, notFoundPage: notFoundPage} = this.config;
                const fnLoadSideAndNav = this._loadSideAndNav(path, qs, loadSidebar, cb);
                if (notFoundPage) {
                    const path404 = this.#get404Path(path, this.config);
                    this.#request(this.router.getFile(path404), requestHeaders).then(((text, opt) => this._renderMain(text, opt, fnLoadSideAndNav)), (_error => this._renderMain(null, {}, fnLoadSideAndNav)));
                    return true;
                }
                this._renderMain(null, {}, fnLoadSideAndNav);
                return false;
            }
            initFetch() {
                this.$fetch((() => this.callHook("ready")));
            }
        };
    }
    function Events(Base) {
        return class Events extends Base {
            #intersectionObserver=new IntersectionObserver((() => {}));
            #isScrolling=false;
            #cancelAnchorScroll=noop;
            #title=$$1.title;
            initEvent() {
                const {topMargin: topMargin} = this.config;
                if (topMargin) {
                    const value = typeof topMargin === "number" ? `${topMargin}px` : topMargin;
                    document.documentElement.style.setProperty("--scroll-padding-top", value);
                }
                this.#initCover();
                this.#initSkipToContent();
                this.#initSidebar();
                this.#initSidebarToggle();
                this.#initKeyBindings();
            }
            #initCover() {
                const coverElm = find("section.cover");
                if (!coverElm) {
                    body.classList.add("sticky");
                    return;
                }
                const observer = new IntersectionObserver((entries => {
                    const isIntersecting = entries[0].isIntersecting;
                    const op = isIntersecting ? "remove" : "add";
                    body.classList[op]("sticky");
                }), {
                    threshold: .01
                });
                observer.observe(coverElm);
            }
            #initHeadings() {
                const headingElms = findAll("#main :where(h1, h2, h3, h4, h5, h6)");
                const headingsInView = new Set;
                let isInitialLoad = true;
                this.#intersectionObserver?.disconnect();
                this.#intersectionObserver = new IntersectionObserver((entries => {
                    if (isInitialLoad) {
                        isInitialLoad = false;
                        return;
                    }
                    if (this.#isScrolling) {
                        return;
                    }
                    for (const entry of entries) {
                        const op = entry.isIntersecting ? "add" : "delete";
                        headingsInView[op](entry.target);
                    }
                    let activeHeading;
                    if (headingsInView.size === 1) {
                        activeHeading = headingsInView.values().next().value;
                    } else if (headingsInView.size > 1) {
                        activeHeading = Array.from(headingsInView).reduce(((closest, current) => !closest || closest.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_FOLLOWING ? current : closest), null);
                    }
                    if (activeHeading) {
                        const id = activeHeading.getAttribute("id");
                        const href = this.router.toURL(this.router.getCurrentPath(), {
                            id: id
                        });
                        const newSidebarActiveElm = this.#markSidebarActiveElm(href);
                        newSidebarActiveElm?.scrollIntoView({
                            behavior: "instant",
                            block: "nearest",
                            inline: "nearest"
                        });
                    }
                }), {
                    rootMargin: "0% 0% -50% 0%"
                });
                headingElms.forEach((elm => {
                    this.#intersectionObserver.observe(elm);
                }));
            }
            #initKeyBindings() {
                const {keyBindings: keyBindings} = this.config;
                const modifierKeys = [ "alt", "ctrl", "meta", "shift" ];
                if (keyBindings && keyBindings.constructor === Object) {
                    Object.values(keyBindings || []).forEach((bindingConfig => {
                        const {bindings: bindings} = bindingConfig;
                        if (!bindings) {
                            return;
                        }
                        bindingConfig.bindings = Array.isArray(bindings) ? bindings : [ bindings ];
                        bindingConfig.bindings = bindingConfig.bindings.map((keys => {
                            const sortedKeys = [ [], [] ];
                            if (typeof keys === "string") {
                                keys = keys.split("+");
                            }
                            keys.forEach((key => {
                                const isModifierKey = modifierKeys.includes(key);
                                const targetArray = sortedKeys[isModifierKey ? 0 : 1];
                                const newKeyValue = key.trim().toLowerCase();
                                targetArray.push(newKeyValue);
                            }));
                            sortedKeys.forEach((arr => arr.sort()));
                            return sortedKeys.flat();
                        }));
                    }));
                    on("keydown", (e => {
                        const isTextEntry = document.activeElement.matches("input, select, textarea");
                        if (isTextEntry) {
                            return;
                        }
                        const bindingConfigs = Object.values(keyBindings || []);
                        const matchingConfigs = bindingConfigs.filter((({bindings: bindings}) => bindings && bindings.some((keys => keys.every((k => modifierKeys.includes(k) && e[k + "Key"] || e.key === k || e.code.toLowerCase() === k || e.code.toLowerCase() === `key${k}`))))));
                        matchingConfigs.forEach((({callback: callback}) => {
                            e.preventDefault();
                            callback(e);
                        }));
                    }));
                }
            }
            #initSidebar() {
                const sidebarElm = document.querySelector(".sidebar");
                if (!sidebarElm) {
                    return;
                }
                window?.matchMedia?.(`(max-width: ${mobileBreakpoint})`).addEventListener("change", (evt => {
                    this.#toggleSidebar(!evt.matches);
                }));
                on(sidebarElm, "click", (({target: target}) => {
                    const linkElm = target.closest("a");
                    const linkParent = linkElm?.closest("li");
                    const hasSubSidebar = linkParent?.querySelector(".app-sub-sidebar");
                    if (hasSubSidebar) {
                        linkParent.classList.toggle("collapse");
                    }
                }));
            }
            #initSidebarToggle() {
                const contentElm = find("main > .content");
                const toggleElm = find("button.sidebar-toggle");
                if (!toggleElm) {
                    return;
                }
                let lastContentFocusElm;
                on(contentElm, "focusin", (e => {
                    const focusAttr = "data-restore-focus";
                    lastContentFocusElm?.removeAttribute(focusAttr);
                    lastContentFocusElm = e.target;
                    lastContentFocusElm.setAttribute(focusAttr, "");
                }));
                on(toggleElm, "click", (e => {
                    e.stopPropagation();
                    this.#toggleSidebar();
                }));
            }
            #initSkipToContent() {
                const skipElm = document.querySelector("#skip-to-content");
                if (!skipElm) {
                    return;
                }
                skipElm.addEventListener("click", (evt => {
                    const focusElm = this.#focusContent();
                    evt.preventDefault();
                    focusElm?.scrollIntoView({
                        behavior: "smooth"
                    });
                }));
            }
            onRender() {
                const {name: name, pageTitleFormatter: pageTitleFormatter} = this.config;
                const currentPath = this.router.toURL(this.router.getCurrentPath());
                const currentSection = find(`.sidebar a[href='${currentPath}']`)?.getAttribute("title");
                const plainName = typeof pageTitleFormatter === "function" && typeof name === "string" ? pageTitleFormatter(name) : name ? name.replace(/<[^>]+>/g, "").trim() : name;
                const currentTitle = plainName ? currentSection ? `${currentSection} - ${plainName}` : plainName : currentSection;
                $$1.title = currentTitle || this.#title;
                this.#markAppNavActiveElm();
                this.#markSidebarCurrentPage();
                this.#initHeadings();
            }
            onNavigate(source) {
                const {auto2top: auto2top, topMargin: topMargin} = this.config;
                const {path: path, query: query} = this.route;
                const activeSidebarElm = this.#markSidebarActiveElm();
                if (source !== "history") {
                    if (query.id) {
                        const headingElm = find(`.markdown-section :where(h1, h2, h3, h4, h5, h6)[id="${query.id}"]`);
                        if (headingElm) {
                            this.#scrollToHeading(headingElm);
                        }
                    } else if (source === "navigate") {
                        if (auto2top) {
                            document.scrollingElement.scrollTop = topMargin ?? 0;
                        }
                    }
                }
                const isNavigate = source === "navigate";
                const hasId = "id" in query;
                const noSubSidebar = !activeSidebarElm?.querySelector(".app-sub-sidebar");
                const shouldCloseSidebar = path === "/" || isNavigate && (hasId || noSubSidebar);
                if (shouldCloseSidebar && isMobile()) {
                    this.#toggleSidebar(false);
                }
                if (hasId || isNavigate) {
                    this.#focusContent();
                }
            }
            #focusContent(options = {}) {
                const settings = {
                    preventScroll: true,
                    ...options
                };
                const {query: query} = this.route;
                const focusEl = query.id ? find(`#${query.id}`) : find("#main :where(h1, h2, h3, h4, h5, h6)") || find("#main");
                if (focusEl) {
                    if (!focusEl.hasAttribute("tabindex")) {
                        focusEl.setAttribute("tabindex", "-1");
                        focusEl.setAttribute("data-added-tabindex", "true");
                    }
                    if (focusEl.hasAttribute("data-added-tabindex")) {
                        focusEl.scrollIntoView({
                            behavior: "smooth"
                        });
                    }
                    focusEl.focus(settings);
                }
                return focusEl;
            }
            #markAppNavActiveElm() {
                const href = decodeURIComponent(this.router.toURL(this.route.path));
                [ ".app-nav", ".app-nav-merged" ].forEach((selector => {
                    const navElm = find(selector);
                    if (!navElm) {
                        return;
                    }
                    const newActive = findAll(navElm, "a").sort(((a, b) => b.href.length - a.href.length)).find((a => href.includes(a.getAttribute("href")) || href.includes(decodeURI(a.getAttribute("href")))))?.closest("li");
                    const oldActive = find(navElm, "li.active");
                    if (newActive && newActive !== oldActive) {
                        oldActive?.classList.remove("active");
                        newActive.classList.add("active");
                    }
                }));
            }
            #markSidebarActiveElm(href) {
                href ??= this.router.toURL(this.router.getCurrentPath());
                const sidebar = find(".sidebar");
                if (!sidebar) {
                    return;
                }
                href = stripUrlExceptId(href);
                const oldActive = find(sidebar, "li.active");
                const newActive = find(sidebar, `a[href="${href}"], a[href="${decodeURIComponent(href)}"]`)?.closest("li");
                if (newActive && newActive !== oldActive) {
                    oldActive?.classList.remove("active");
                    newActive.classList.add("active");
                }
                return newActive;
            }
            #markSidebarCurrentPage(href) {
                href ??= this.router.toURL(this.route.path);
                const sidebar = find(".sidebar");
                if (!sidebar) {
                    return;
                }
                const path = href?.split("?")[0];
                const oldPage = find(sidebar, "li[aria-current]");
                const newPage = find(sidebar, `a[href="${path}"], a[href="${decodeURIComponent(path)}"]`)?.closest("li");
                if (newPage && newPage !== oldPage) {
                    oldPage?.removeAttribute("aria-current");
                    newPage.setAttribute("aria-current", "page");
                }
                return newPage;
            }
            #toggleSidebar(force) {
                const sidebarElm = find(".sidebar");
                if (!sidebarElm) {
                    return;
                }
                const ariaElms = findAll('[aria-controls="__sidebar"]');
                const inertElms = findAll("body > *:not(main, script), main > .content");
                const isShow = sidebarElm.classList.toggle("show", force);
                ariaElms.forEach((toggleElm => {
                    const expanded = force ?? sidebarElm.classList.contains("show");
                    toggleElm.setAttribute("aria-expanded", String(expanded));
                    toggleElm.setAttribute("aria-label", expanded ? "Hide primary navigation" : "Show primary navigation");
                }));
                if (isShow && isMobile()) {
                    inertElms.forEach((elm => elm.setAttribute("inert", "")));
                } else {
                    inertElms.forEach((elm => elm.removeAttribute("inert")));
                }
                if (isShow) {
                    sidebarElm.focus();
                } else {
                    const restoreElm = document.querySelector("main > .content [data-restore-focus]");
                    if (restoreElm) {
                        restoreElm.focus({
                            preventScroll: true
                        });
                    }
                }
            }
            #scrollToHeading(headingElm) {
                this.#cancelAnchorScroll();
                const contentElm = find(".markdown-section");
                const userEvents = [ "keydown", "mousedown", "touchstart", "wheel" ];
                const timers = {};
                let animationFrame = 0;
                let correctionFrame = 0;
                let cancelled = false;
                let cancel = noop;
                let hasScrolled = false;
                let scrollScheduled = false;
                let remainingImages = 0;
                let cleanup = () => {};
                const imageListeners = [];
                const pendingImageCorrections = [];
                const removeUserListeners = () => {
                    userEvents.forEach((eventName => {
                        window.removeEventListener(eventName, cancel);
                    }));
                };
                const removeImageListeners = () => {
                    imageListeners.forEach((({image: image, eventName: eventName, listener: listener}) => {
                        image.removeEventListener(eventName, listener);
                    }));
                    imageListeners.length = 0;
                };
                const scrollToHeading = () => {
                    if (cancelled) {
                        return;
                    }
                    if (!document.contains(headingElm)) {
                        cancel();
                        return;
                    }
                    hasScrolled = true;
                    this.#watchNextScroll();
                    headingElm.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                    if (remainingImages === 0) {
                        cleanup();
                    }
                };
                const scheduleScroll = () => {
                    if (hasScrolled || scrollScheduled) {
                        return;
                    }
                    scrollScheduled = true;
                    clearTimeout(timers.wait);
                    animationFrame = requestAnimationFrame(scrollToHeading);
                };
                const scheduleCorrection = (image, previousHeight) => {
                    if (cancelled || !hasScrolled) {
                        return;
                    }
                    pendingImageCorrections.push({
                        image: image,
                        previousHeight: previousHeight
                    });
                    if (correctionFrame) {
                        return;
                    }
                    correctionFrame = requestAnimationFrame((() => {
                        correctionFrame = 0;
                        if (cancelled) {
                            return;
                        }
                        if (!document.contains(headingElm)) {
                            cleanup();
                            return;
                        }
                        let heightChange = 0;
                        for (const {image: image, previousHeight: previousHeight} of pendingImageCorrections) {
                            const isBeforeHeading = image.compareDocumentPosition(headingElm) & Node.DOCUMENT_POSITION_FOLLOWING;
                            const currentHeight = image.getBoundingClientRect().height;
                            if (isBeforeHeading) {
                                heightChange += currentHeight - previousHeight;
                            }
                        }
                        pendingImageCorrections.length = 0;
                        if (Math.abs(heightChange) < 1) {
                            if (remainingImages === 0) {
                                cleanup();
                            }
                            return;
                        }
                        const scrollingElm = document.scrollingElement;
                        if (!scrollingElm) {
                            cleanup();
                            return;
                        }
                        const scrollPaddingTop = parseFloat(getComputedStyle(scrollingElm).scrollPaddingTop) || 0;
                        const headingTop = headingElm.getBoundingClientRect().top;
                        const scrollAdjustment = headingTop - scrollPaddingTop;
                        if (Math.abs(scrollAdjustment) < 1) {
                            if (remainingImages === 0) {
                                cleanup();
                            }
                            return;
                        }
                        this.#watchNextScroll();
                        scrollingElm.scrollTop += scrollAdjustment;
                        if (remainingImages === 0) {
                            cleanup();
                        }
                    }));
                };
                cleanup = () => {
                    if (cancelled) {
                        return;
                    }
                    cancelled = true;
                    cancelAnimationFrame(animationFrame);
                    cancelAnimationFrame(correctionFrame);
                    clearTimeout(timers.wait);
                    removeImageListeners();
                    removeUserListeners();
                    this.#cancelAnchorScroll = noop;
                };
                cancel = cleanup;
                const waitForImages = () => {
                    const images = (contentElm ? Array.from(contentElm.querySelectorAll("img")) : []).filter((image => !image.complete && image.compareDocumentPosition(headingElm) & Node.DOCUMENT_POSITION_FOLLOWING));
                    if (!images.length) {
                        scheduleScroll();
                        return;
                    }
                    remainingImages = images.length;
                    const onImageSettled = (image, previousHeight) => {
                        remainingImages -= 1;
                        if (hasScrolled) {
                            scheduleCorrection(image, previousHeight);
                        } else if (remainingImages === 0) {
                            scheduleScroll();
                        }
                        if (remainingImages === 0 && hasScrolled && !correctionFrame) {
                            cleanup();
                        }
                    };
                    images.forEach((image => {
                        let settled = false;
                        const previousHeight = image.getBoundingClientRect().height;
                        const listener = () => {
                            if (settled) {
                                return;
                            }
                            settled = true;
                            onImageSettled(image, previousHeight);
                        };
                        image.addEventListener("load", listener, {
                            once: true
                        });
                        image.addEventListener("error", listener, {
                            once: true
                        });
                        imageListeners.push({
                            image: image,
                            eventName: "load",
                            listener: listener
                        }, {
                            image: image,
                            eventName: "error",
                            listener: listener
                        });
                    }));
                    timers.wait = setTimeout(scheduleScroll, 300);
                };
                userEvents.forEach((eventName => {
                    window.addEventListener(eventName, cancel, {
                        once: true,
                        passive: true
                    });
                }));
                waitForImages();
                this.#cancelAnchorScroll = cancel;
            }
            #watchNextScroll() {
                document.addEventListener("scroll", (() => {
                    this.#isScrolling = true;
                    if ("onscrollend" in window) {
                        document.addEventListener("scrollend", (() => this.#isScrolling = false), {
                            once: true
                        });
                    } else {
                        let scrollTimer;
                        const callback = () => {
                            clearTimeout(scrollTimer);
                            scrollTimer = setTimeout((() => {
                                document.removeEventListener("scroll", callback);
                                this.#isScrolling = false;
                            }), 100);
                        };
                        document.addEventListener("scroll", callback, false);
                        callback();
                    }
                }), {
                    once: true
                });
            }
        };
    }
    function makeExactMatcher(matcher) {
        const matcherWithBeginningOfInput = matcher.startsWith("^") ? matcher : `^${matcher}`;
        const matcherWithBeginningAndEndOfInput = matcherWithBeginningOfInput.endsWith("$") ? matcherWithBeginningOfInput : `${matcherWithBeginningOfInput}$`;
        return matcherWithBeginningAndEndOfInput;
    }
    function createNextFunction() {
        let storedCb = () => {};
        function next(value) {
            storedCb(value);
        }
        function onNext(cb) {
            storedCb = cb;
        }
        return [ next, onNext ];
    }
    function VirtualRoutes(Base) {
        return class VirtualRoutes extends Base {
            routes() {
                return this.config.routes || {};
            }
            matchVirtualRoute(path) {
                const virtualRoutes = this.routes();
                const virtualRoutePaths = Object.keys(virtualRoutes);
                let done = () => null;
                function asyncMatchNextRoute() {
                    const virtualRoutePath = virtualRoutePaths.shift();
                    if (!virtualRoutePath) {
                        return done(null);
                    }
                    const matcher = makeExactMatcher(virtualRoutePath);
                    const matched = path.match(matcher);
                    if (!matched) {
                        return asyncMatchNextRoute();
                    }
                    const virtualRouteContentOrFn = virtualRoutes[virtualRoutePath];
                    if (typeof virtualRouteContentOrFn === "string") {
                        const contents = virtualRouteContentOrFn;
                        return done(contents);
                    }
                    if (typeof virtualRouteContentOrFn === "function") {
                        const fn = virtualRouteContentOrFn;
                        const [next, onNext] = createNextFunction();
                        onNext((contents => {
                            if (typeof contents === "string") {
                                return done(contents);
                            } else if (contents === false) {
                                return done(null);
                            } else {
                                return asyncMatchNextRoute();
                            }
                        }));
                        if (fn.length <= 2) {
                            const returnedValue = fn(path, matched);
                            return next(returnedValue);
                        } else {
                            return fn(path, matched, next);
                        }
                    }
                    return asyncMatchNextRoute();
                }
                return {
                    then(cb) {
                        done = cb;
                        asyncMatchNextRoute();
                    }
                };
            }
        };
    }
    const currentScript = document.currentScript;
    const defaultDocsifyConfig = () => ({
        alias: {},
        auto2top: false,
        autoHeader: false,
        basePath: "",
        catchPluginErrors: true,
        cornerExternalLinkTarget: "_blank",
        coverpage: "",
        el: "#app",
        executeScript: null,
        ext: ".md",
        externalLinkRel: "noopener",
        externalLinkTarget: "_blank",
        fallbackLanguages: null,
        fallbackDefaultLanguage: "",
        formatUpdated: "",
        pageTitleFormatter: null,
        frontMatter: null,
        hideSidebar: false,
        homepage: "README.md",
        keyBindings: {},
        loadNavbar: null,
        loadSidebar: null,
        logo: false,
        markdown: null,
        maxLevel: 6,
        mergeNavbar: false,
        name: "",
        nameLink: window.location.pathname,
        nativeEmoji: false,
        noCompileLinks: [],
        noEmoji: false,
        notFoundPage: false,
        onlyCover: false,
        plugins: [],
        relativePath: false,
        repo: "",
        requestHeaders: {},
        routerMode: "hash",
        routes: {},
        skipLink: "Skip to main content",
        subMaxLevel: 0,
        vueComponents: {},
        vueGlobalOptions: {},
        vueMounts: {},
        get themeColor() {
            return this.__themeColor;
        },
        set themeColor(value) {
            if (value) {
                this.__themeColor = value;
                console.warn(stripIndent(`\n          $docsify.themeColor is deprecated as of v5. Use the "--theme-color" CSS property to customize your theme color.\n          <style>\n            :root {\n              --theme-color: deeppink;\n            }\n          </style>\n        `).trim());
            }
        },
        __themeColor: "",
        get topMargin() {
            return this.__topMargin;
        },
        set topMargin(value) {
            if (value) {
                this.__topMargin = value;
                console.warn(stripIndent(`\n          $docsify.topMargin is deprecated as of v5. Use the "--scroll-padding-top" CSS property to specify a scroll margin when using a sticky navbar.\n          <style>\n            :root {\n              --scroll-padding-top: 10px;\n            }\n          </style>\n        `).trim());
            }
        },
        __topMargin: 0
    });
    function config(vm, config = {}) {
        config = Object.assign(defaultDocsifyConfig(), window.$docsify, typeof window.$docsify === "function" ? window.$docsify(vm) : undefined, config);
        if (config.keyBindings !== false) {
            config.keyBindings = Object.assign({
                toggleSidebar: {
                    bindings: [ "\\" ],
                    callback(e) {
                        const toggleElm = document.querySelector(".sidebar-toggle-button");
                        if (toggleElm) {
                            toggleElm.click();
                        }
                    }
                }
            }, config.keyBindings);
        }
        const script = currentScript || Array.from(document.getElementsByTagName("script")).filter((n => /docsify\./.test(n.src)))[0];
        if (script) {
            for (const prop of Object.keys(config)) {
                const val = script.getAttribute("data-" + hyphenate(prop));
                if (isPrimitive(val)) {
                    console.warn(`DEPRECATION: data-* attributes on the docsify global script (f.e. ${"data-" + hyphenate(prop)}) are deprecated.`);
                    config[prop] = val === "" ? true : val;
                }
            }
        }
        if (config.loadSidebar === true) {
            config.loadSidebar = "_sidebar" + config.ext;
        }
        if (config.loadNavbar === true) {
            config.loadNavbar = "_navbar" + config.ext;
        }
        if (config.coverpage === true) {
            config.coverpage = "_coverpage" + config.ext;
        }
        if (config.name === true) {
            config.name = "";
        }
        return config;
    }
    function Lifecycle(Base) {
        return class Lifecycle extends Base {
            _hooks={};
            _lifecycle={};
            initLifecycle() {
                const hooks = [ "init", "mounted", "beforeEach", "afterEach", "doneEach", "ready" ];
                hooks.forEach((hook => {
                    const arr = this._hooks[hook] = [];
                    this._lifecycle[hook] = fn => arr.push(fn);
                }));
            }
            callHook(hookName, data, next = noop) {
                const queue = this._hooks[hookName];
                const catchPluginErrors = this.config.catchPluginErrors;
                const step = function(index) {
                    const hookFn = queue[index];
                    if (index >= queue.length) {
                        next(data);
                    } else if (typeof hookFn === "function") {
                        const errTitle = "Docsify plugin error";
                        if (hookFn.length === 2) {
                            try {
                                hookFn(data, (result => {
                                    data = result === undefined ? data : result;
                                    step(index + 1);
                                }));
                            } catch (err) {
                                if (catchPluginErrors) {
                                    console.error(errTitle, err);
                                } else {
                                    throw err;
                                }
                                step(index + 1);
                            }
                        } else {
                            try {
                                const result = hookFn(data);
                                data = result === undefined ? data : result;
                                step(index + 1);
                            } catch (err) {
                                if (catchPluginErrors) {
                                    console.error(errTitle, err);
                                } else {
                                    throw err;
                                }
                                step(index + 1);
                            }
                        }
                    } else {
                        step(index + 1);
                    }
                };
                step(0);
            }
        };
    }
    var util = Object.freeze({
        __proto__: null,
        cached: cached$1,
        cleanPath: cleanPath,
        getParentPath: getParentPath,
        getPath: getPath,
        hyphenate: hyphenate,
        isAbsolutePath: isAbsolutePath,
        isExternal: isExternal,
        isFn: isFn,
        isMobile: isMobile,
        isPrimitive: isPrimitive,
        mobileBreakpoint: mobileBreakpoint,
        noop: noop,
        parseQuery: parseQuery,
        removeParams: removeParams,
        replaceSlug: replaceSlug,
        resolvePath: resolvePath,
        stringifyQuery: stringifyQuery,
        stripUrlExceptId: stripUrlExceptId
    });
    class Docsify extends(Fetch(Events(Render(VirtualRoutes(Router(Lifecycle(Object))))))){
        config;
        constructor(conf = {}) {
            super();
            this.config = config(this, conf);
            this.initLifecycle();
            this.initPlugin();
            this.callHook("init");
            this.initRouter();
            this.initRender();
            this.initEvent();
            this.initFetch();
            this.callHook("mounted");
        }
        initPlugin() {
            this.config.plugins.forEach((fn => {
                try {
                    isFn(fn) && fn(this._lifecycle, this);
                } catch (err) {
                    if (this.config.catchPluginErrors) {
                        const errTitle = "Docsify plugin error";
                        console.error(errTitle, err);
                    } else {
                        throw err;
                    }
                }
            }));
        }
    }
    function initGlobalAPI() {
        window.Docsify = {
            util: util,
            dom: dom,
            get: get,
            slugify: slugify,
            version: "5.0.0"
        };
        window.DocsifyCompiler = Compiler;
        window.marked = g;
        window.Prism = prism$1;
    }
    initGlobalAPI();
    documentReady((() => new Docsify));
})();
