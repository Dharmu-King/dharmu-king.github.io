/*!TikTok attaches importance to your privacy and safety. We use this script to control webapi usages and make sure they are within our privacy policy.*/
!function() {
    "use strict";
    function t(t, e, a) {
        return e in t ? Object.defineProperty(t, e, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = a,
        t
    }
    var e = "main_thread"
      , a = "cookie_set_by_document"
      , n = "cookie_blocked_on_start"
      , o = "general_fetch"
      , r = "webapi"
      , i = "storage_use"
      , c = "sw_incompat"
      , p = "network_intercepted"
      , u = "__PNS_RUNTIME_SW_EVENT__"
      , l = "__PNS_RUNTIME_SE_ERROR__"
      , s = "__PNS_RUNTIME__"
      , m = Symbol.for("pluginRegistry");
    function f() {
        var t, e = null === (t = document.currentScript) || void 0 === t ? void 0 : t.src;
        try {
            return new URL(e).searchParams.get("globalName") || s
        } catch (t) {
            return s
        }
    }
    var d = function(t, e, a) {
        t.splice(0, t.length - a + 1),
        t.push(e)
    };
    function h() {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f()
          , n = window[a];
        return n || (n = t({
            pendingEvents: [],
            pendingConfig: {},
            pendingListeners: {},
            errors: [],
            pushEvent: function(t) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
                d(n.pendingEvents, {
                    eventName: t,
                    eventDetail: a,
                    source: o
                }, 50)
            },
            pushError: function(t) {
                d(n.errors, t, 20)
            }
        }, m, {}),
        window[a] = n),
        n
    }
    var v = ["log", "error", "warn"];
    function y(t) {
        for (var e = {}, a = function() {
            var a = o[n];
            e[a] = function() {
                var e;
                t() && (e = console)[a].apply(e, arguments)
            }
        }, n = 0, o = v; n < o.length; n++)
            a();
        return e
    }
    var b = y((function() {
        return !1
    }
    ))
      , w = y((function() {
        return !1
    }
    ));
    function g(t) {
        return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        g(t)
    }
    function k(t, e) {
        return k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        k(t, e)
    }
    function R() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
            ))),
            !0
        } catch (t) {
            return !1
        }
    }
    function S(t, e, a) {
        return S = R() ? Reflect.construct.bind() : function(t, e, a) {
            var n = [null];
            n.push.apply(n, e);
            var o = new (Function.bind.apply(t, n));
            return a && k(o, a.prototype),
            o
        }
        ,
        S.apply(null, arguments)
    }
    function O(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            var a = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null == a)
                return;
            var n, o, r = [], i = !0, c = !1;
            try {
                for (a = a.call(t); !(i = (n = a.next()).done) && (r.push(n.value),
                !e || r.length !== e); i = !0)
                    ;
            } catch (t) {
                c = !0,
                o = t
            } finally {
                try {
                    i || null == a.return || a.return()
                } finally {
                    if (c)
                        throw o
                }
            }
            return r
        }(t, e) || j(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function A(t) {
        return function(t) {
            if (Array.isArray(t))
                return N(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                return Array.from(t)
        }(t) || j(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function j(t, e) {
        if (t) {
            if ("string" == typeof t)
                return N(t, e);
            var a = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === a && t.constructor && (a = t.constructor.name),
            "Map" === a || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? N(t, e) : void 0
        }
    }
    function N(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var a = 0, n = new Array(e); a < e; a++)
            n[a] = t[a];
        return n
    }
    function T(t, e) {
        var a = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!a) {
            if (Array.isArray(t) || (a = j(t)) || e && t && "number" == typeof t.length) {
                a && (t = a);
                var n = 0
                  , o = function() {};
                return {
                    s: o,
                    n: function() {
                        return n >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[n++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var r, i = !0, c = !1;
        return {
            s: function() {
                a = a.call(t)
            },
            n: function() {
                var t = a.next();
                return i = t.done,
                t
            },
            e: function(t) {
                c = !0,
                r = t
            },
            f: function() {
                try {
                    i || null == a.return || a.return()
                } finally {
                    if (c)
                        throw r
                }
            }
        }
    }
    y((function() {
        return !0
    }
    ));
    var _ = "".trimStart || function() {
        return this.replace(/^[\s\uFEFF\xA0]+/, "")
    }
      , C = function(t) {
        return "function" == typeof t
    };
    function E(t, e) {
        if (!t)
            return [void 0, t];
        for (var a, n, o = t; o && !n; )
            n = Object.getOwnPropertyDescriptor(o, e),
            a = o,
            o = Object.getPrototypeOf(o);
        return [n, a]
    }
    function P(t, e, a) {
        try {
            var n = O(E(t, e), 2)
              , o = n[0]
              , r = n[1];
            if (!(null == o ? void 0 : o.configurable))
                return !1;
            var i = {}
              , c = o.set
              , p = o.get
              , u = a.set
              , l = a.get;
            return c && u && (i.set = function(t) {
                u(t) || c.call(this, t)
            }
            ),
            p && l && (i.get = function() {
                if (!l())
                    return p.call(this)
            }
            ),
            Object.defineProperty(r, e, i),
            !0
        } catch (t) {}
        return !1
    }
    function I(t, e, a, n) {
        try {
            var o = O(E(t, e), 2)[1];
            if ("object" === g(o) && o && C(o[e])) {
                var r = o[e];
                o[e] = function() {
                    for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
                        e[o] = arguments[o];
                    var i = a.call.apply(a, [this].concat(e));
                    return i ? (null == n ? void 0 : n()) || void 0 : r.call.apply(r, [this].concat(e))
                }
            }
        } catch (t) {}
    }
    function M(t) {
        return t > Math.random()
    }
    function x(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , a = "";
        for (var n in e)
            a += "; ".concat(n),
            a += "=".concat(e[n].split(";")[0]);
        document.cookie = "".concat(t, "=; expires=").concat(new Date(Date.now() - 864e5).toUTCString()).concat(a)
    }
    function U(t, e, a) {
        return function() {
            try {
                var n = t.apply(void 0, arguments);
                return n
            } catch (t) {
                return b.error(t),
                null == e || e(t),
                a
            }
        }
    }
    function B(t, e) {
        var a = h();
        return U(t, (function(t) {
            return a.pushError(t)
        }
        ), e)
    }
    /iPhone|iPad/.test(navigator.userAgent);
    function D(t) {
        var e = t.split("=")[0];
        return e ? _.call(e) : void 0
    }
    var L, W, F = (L = [],
    function() {
        if (0 === L.length)
            for (var t = location.hostname.split(".").filter(Boolean), e = t.length, a = 0; a < e - 1; a++) {
                var n = t.slice(a).join(".");
                L.push(n, ".".concat(n)),
                L.push(n, n)
            }
        return L
    }
    ), G = (W = [],
    function() {
        if (0 === W.length) {
            W.push("/");
            for (var t = location.pathname.split("/").filter(Boolean), e = t.length, a = 0; a < e; a++)
                W.push("/".concat(t.slice(0, e - a).join("/")))
        }
        return W
    }
    );
    var V = function(t, e) {
        var o = function(t) {
            var e, a = t.blockers, n = T(void 0 === a ? [] : a);
            try {
                for (n.s(); !(e = n.n()).done; ) {
                    var o = e.value
                      , r = o.domains
                      , i = void 0 === r ? [] : r
                      , c = o.cookies
                      , p = void 0 === c ? [] : c;
                    if (i.some((function(t) {
                        return location.hostname.endsWith(t)
                    }
                    )))
                        return p
                }
            } catch (t) {
                n.e(t)
            } finally {
                n.f()
            }
            return []
        }(e);
        !function(t, e) {
            var a, n = T(document.cookie.split(";").filter(Boolean));
            try {
                for (n.s(); !(a = n.n()).done; ) {
                    var o = D(a.value);
                    if (t.includes(o)) {
                        var r, i = F(), c = G(), p = T(i);
                        try {
                            for (p.s(); !(r = p.n()).done; ) {
                                var u, l = r.value, s = T(c);
                                try {
                                    for (s.s(); !(u = s.n()).done; )
                                        x(o, {
                                            domain: l,
                                            path: u.value
                                        })
                                } catch (t) {
                                    s.e(t)
                                } finally {
                                    s.f()
                                }
                            }
                        } catch (t) {
                            p.e(t)
                        } finally {
                            p.f()
                        }
                        e(o)
                    }
                }
            } catch (t) {
                n.e(t)
            } finally {
                n.f()
            }
        }(o, (function(e) {
            t.pushEvent(n, {
                cookie: e
            })
        }
        )),
        function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            P(document, "cookie", {
                set: function(a) {
                    var n = !1;
                    return "string" == typeof a && (n = e.includes(D(a)),
                    t({
                        value: a,
                        blocked: n
                    })),
                    n
                }
            }),
            I(window.cookieStore, "set", (function() {
                for (var t = !1, a = arguments.length, n = new Array(a), o = 0; o < a; o++)
                    n[o] = arguments[o];
                return 1 === n.length && "object" === g(n[0]) && n[0] ? t = e.includes(n[0].name) : 2 === n.length && "string" == typeof n[0] && (t = e.includes(n[0])),
                t
            }
            ), Promise.reject)
        }(B((function(e) {
            t.pushEvent(a, e)
        }
        )), o)
    }
      , z = "setItem"
      , $ = "getItem"
      , q = "removeItem"
      , H = function(t, e) {
        var a;
        a = B((function(e) {
            t.pushEvent(i, e)
        }
        )),
        I(localStorage, $, (function(t) {
            return a({
                storageType: this === localStorage ? "localStorage" : "sessionStorage",
                operateType: $,
                key: t
            }),
            !1
        }
        )),
        I(localStorage, q, (function(t) {
            return a({
                storageType: this === localStorage ? "localStorage" : "sessionStorage",
                operateType: q,
                key: t
            }),
            !1
        }
        )),
        I(localStorage, z, (function(t, e) {
            return a({
                storageType: this === localStorage ? "localStorage" : "sessionStorage",
                operateType: z,
                key: t,
                value: e
            }),
            !1
        }
        ))
    };
    function J(t, e) {
        for (var a in e) {
            var n = e[a];
            if (t[a] !== n)
                return !1
        }
        return !0
    }
    var K = function() {}
      , Q = function(t, e) {
        var a, n = T(e.apis);
        try {
            var o = function() {
                var e = a.value
                  , n = e.sampleRate
                  , o = e.apiType
                  , r = e.apiObj
                  , i = e.block
                  , c = e.blockWithCallbackParams
                  , p = e.blockWithCallbackIdx
                  , u = e.apiName
                  , l = e.paramCondition
                  , s = function(t) {
                    var e, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window, n = T(t.split(".").filter(Boolean));
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            if (!(a = a[e.value]))
                                return null
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return a
                }(r);
                if (!s)
                    return "continue";
                var m = U((function() {
                    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
                        o[s] = arguments[s];
                    if (!J(o, l))
                        return !1;
                    if (M(n) && t({
                        apiRule: e,
                        args: o
                    }),
                    i && (K("".concat(r, ".").concat(u)),
                    "number" == typeof p)) {
                        var m = o[p];
                        "function" == typeof m && m.apply(null, [].concat(c))
                    }
                    return Boolean(i)
                }
                ), void 0, !1);
                switch (o) {
                case "method":
                    I(s, u, m);
                    break;
                case "attribute_set":
                    P(s, u, {
                        set: m
                    });
                    break;
                case "attribute_get":
                    P(s, u, {
                        get: m
                    });
                    break;
                case "constructor":
                    !function(t, e, a) {
                        try {
                            return C(null == t ? void 0 : t[e]) && void 0 !== window.Proxy && (t[e] = new Proxy(t[e],{
                                construct: function(t, e) {
                                    return a.apply(void 0, A(e)) ? null : S(t, A(e))
                                }
                            })),
                            !0
                        } catch (t) {}
                    }(s, u, m)
                }
            };
            for (n.s(); !(a = n.n()).done; )
                o()
        } catch (t) {
            n.e(t)
        } finally {
            n.f()
        }
    }
      , X = [o, p];
    function Y(t) {
        var e = {
            enabled: !0,
            apis: [{
                apiType: "method",
                sampleRate: 1,
                apiObj: "document",
                apiName: "execCommand",
                withStack: !1,
                block: !1,
                stackRate: 0,
                paramCondition: {
                    0: "paste"
                },
                withRawArguments: [!0]
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "document",
                apiName: "execCommand",
                withStack: !1,
                block: !1,
                stackRate: 0,
                paramCondition: {
                    0: "copy"
                },
                withRawArguments: [!0]
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "navigator.clipboard",
                apiName: "readText",
                withStack: !0,
                block: !1,
                stackRate: 1,
                paramCondition: {},
                withRawArguments: []
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "navigator.mediaDevices",
                apiName: "getUserMedia",
                withStack: !0,
                block: !1,
                stackRate: 1,
                paramCondition: {},
                withRawArguments: [!0]
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "navigator",
                apiName: "getUserMedia",
                withStack: !1,
                block: !1,
                stackRate: 0,
                paramCondition: {},
                withRawArguments: [!0]
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "navigator",
                apiName: "webkitGetUserMedia",
                withStack: !1,
                block: !1,
                stackRate: 0,
                paramCondition: {},
                withRawArguments: [!0]
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "navigator",
                apiName: "mozGetUserMedia",
                withStack: !1,
                block: !1,
                stackRate: 0,
                paramCondition: {},
                withRawArguments: [!0]
            }, {
                apiType: "attribute_set",
                sampleRate: 1,
                apiObj: "",
                apiName: "ondeviceorientation",
                withStack: !1,
                block: !1,
                stackRate: 0,
                paramCondition: {},
                withRawArguments: []
            }, {
                apiType: "attribute_set",
                sampleRate: 1,
                apiObj: "",
                apiName: "ondeviceorientationabsolute",
                withStack: !1,
                block: !1,
                stackRate: 0,
                paramCondition: {},
                withRawArguments: []
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "navigator.geolocation",
                apiName: "getCurrentPosition",
                withStack: !1,
                block: !1,
                stackRate: 1,
                paramCondition: {},
                withRawArguments: [!1, !1, !0]
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "navigator.geolocation",
                apiName: "watchPosition",
                withStack: !1,
                stackRate: 1,
                block: !1,
                paramCondition: {},
                withRawArguments: [!1, !1, !0]
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "navigator.geolocation",
                apiName: "clearWatch",
                withStack: !1,
                stackRate: 1,
                block: !1,
                paramCondition: {},
                withRawArguments: []
            }, {
                apiType: "constructor",
                sampleRate: 1,
                apiObj: "",
                apiName: "AbsoluteOrientationSensor",
                withStack: !1,
                block: !1,
                paramCondition: {},
                stackRate: 0,
                withRawArguments: []
            }, {
                apiType: "constructor",
                sampleRate: 1,
                apiObj: "",
                apiName: "GravitySensor",
                withStack: !1,
                block: !1,
                paramCondition: {},
                stackRate: 0,
                withRawArguments: []
            }, {
                apiType: "constructor",
                sampleRate: 1,
                apiObj: "",
                apiName: "Gyroscope",
                withStack: !1,
                block: !1,
                paramCondition: {},
                stackRate: 0,
                withRawArguments: []
            }, {
                apiType: "constructor",
                sampleRate: 1,
                apiObj: "",
                apiName: "LinearAccelerationSensor",
                withStack: !1,
                block: !1,
                paramCondition: {},
                stackRate: 0,
                withRawArguments: []
            }, {
                apiType: "constructor",
                sampleRate: 1,
                apiObj: "",
                apiName: "Magnetometer",
                withStack: !1,
                block: !1,
                paramCondition: {},
                stackRate: 0,
                withRawArguments: []
            }, {
                apiType: "constructor",
                sampleRate: 1,
                apiObj: "",
                apiName: "RelativeOrientationSensor",
                withStack: !1,
                block: !1,
                paramCondition: {},
                stackRate: 0,
                withRawArguments: []
            }, {
                apiType: "constructor",
                sampleRate: 1,
                apiObj: "",
                apiName: "Accelerometer",
                withStack: !1,
                block: !1,
                paramCondition: {},
                stackRate: .5,
                withRawArguments: [!0]
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "navigator",
                apiName: "vibrate",
                withStack: !1,
                block: !1,
                stackRate: 0,
                paramCondition: {},
                withRawArguments: []
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "navigator",
                apiName: "webkitVibrate",
                withStack: !1,
                block: !1,
                stackRate: 0,
                paramCondition: {},
                withRawArguments: []
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "navigator",
                apiName: "mozVibrate",
                withStack: !1,
                block: !1,
                stackRate: 0,
                paramCondition: {},
                withRawArguments: []
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "navigator",
                apiName: "msVibrate",
                withStack: !1,
                block: !1,
                stackRate: 0,
                paramCondition: {},
                withRawArguments: []
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "navigator.mediaDevices",
                apiName: "getDisplayMedia",
                withStack: !1,
                block: !1,
                stackRate: 0,
                paramCondition: {},
                withRawArguments: [!0]
            }, {
                apiType: "method",
                sampleRate: .01,
                apiObj: "",
                apiName: "addEventListener",
                withStack: !1,
                block: !1,
                paramCondition: {
                    0: "deviceorientation"
                },
                stackRate: 0,
                withRawArguments: [!0]
            }, {
                apiType: "method",
                sampleRate: .01,
                apiObj: "",
                apiName: "addEventListener",
                withStack: !1,
                block: !1,
                paramCondition: {
                    0: "devicemotion"
                },
                stackRate: 0,
                withRawArguments: [!0]
            }, {
                apiType: "method",
                sampleRate: 1,
                apiObj: "",
                apiName: "addEventListener",
                withStack: !1,
                block: !1,
                paramCondition: {
                    0: "MozOrientation"
                },
                stackRate: 0,
                withRawArguments: [!0]
            }, {
                apiType: "method",
                sampleRate: .1,
                apiObj: "",
                apiName: "addEventListener",
                withStack: !1,
                block: !1,
                paramCondition: {
                    0: "deviceorientationabsolute"
                },
                stackRate: 0,
                withRawArguments: [!0]
            }, {
                apiType: "attribute_get",
                sampleRate: 1e-4,
                apiObj: "document",
                apiName: "referrer",
                withStack: !1,
                block: !1,
                stackRate: 0,
                paramCondition: {},
                withRawArguments: []
            }, {
                apiType: "constructor",
                sampleRate: 1,
                apiObj: "",
                apiName: "Notification",
                withStack: !1,
                paramCondition: {},
                stackRate: 0,
                withRawArguments: []
            }, {
                apiType: "constructor",
                sampleRate: 1,
                apiObj: "navigator",
                apiName: "mozNotification",
                withStack: !1,
                paramCondition: {},
                stackRate: 0,
                withRawArguments: []
            }, {
                apiType: "constructor",
                sampleRate: 1,
                apiObj: "",
                apiName: "webkitNotification",
                withStack: !1,
                paramCondition: {},
                stackRate: 0,
                withRawArguments: []
            }]
        };
        V(t, {
            enabled: !0,
            sampleRate: .2,
            stackCollectCookies: [],
            blockers: [{
                domains: ["tiktok.com", "tiktokv.com"],
                cookies: ["MONITOR_WEB_ID", "MONITOR_DEVICE_ID"]
            }]
        }),
        H(t),
        function(t, e) {
            Q(B((function(e) {
                t.pushEvent(r, e)
            }
            )), e)
        }(t, e),
        function(t, e) {
            navigator && "serviceWorker"in navigator ? navigator.serviceWorker.addEventListener("message", B((function(e) {
                if (e.data.event === u) {
                    var a = e.data.data;
                    -1 !== X.indexOf(a.eventName) && t.pushEvent(a.eventName, a)
                } else
                    e.data.event === l && e.data.error && t.pushError(e.data.error)
            }
            ))) : t.pushEvent(c)
        }(t)
    }
    var Z = "__PUMBAA_RUN_FLAG__";
    if (!/ByteLocale/g.test(navigator.userAgent))
        try {
            window[Z] || (window[Z] = 1,
            function() {
                if (window.Symbol) {
                    var t = h();
                    B(Y)(t);
                    var e = f()
                      , a = document.createElement("script")
                      , n = document.currentScript
                      , o = n.src
                      , r = n.dataset
                      , i = o.substring(0, o.lastIndexOf("/"))
                      , c = "".concat(i, "/core.js", "?globalName=").concat(e);
                    a.src = c,
                    a.crossOrigin = "anonymous",
                    a.async = !0,
                    Object.assign(a.dataset, r),
                    document.head.appendChild(a),
                    document.head.removeChild(a)
                }
            }())
        } catch (t) {
            w.error("[PumbaaWeb] init failed. Errors below.", t)
        }
}();
