(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    203: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 5890)),
        Promise.resolve().then(r.t.bind(r, 8173, 23)),
        Promise.resolve().then(r.t.bind(r, 231, 23));
    },
    8423: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      let n = (0, r(4392).createPagesBrowserClient)({
        supabaseUrl: "https://gttbyrsjwoyzubxlioju.supabase.co",
        supabaseKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dGJ5cnNqd295enVieGxpb2p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NTg0NzgsImV4cCI6MjAzOTEzNDQ3OH0.BzGYIG-b_d2NUNYAw0wVZYu6HT6QXcbpQbxEd_pmN5M",
      });
      async function i() {
        let { data: e, error: t } = await n.rpc(
          "get_all_courses_with_details_by_institution",
          { p_inst_id: 3 }
        );
        return t || e;
      }
    },
    5890: function (e, t, r) {
      "use strict";
      var n = r(7437),
        i = r(6648),
        o = r(2265),
        s = r(7138),
        a = r(8423);
      t.default = () => {
        let [e, t] = (0, o.useState)("School of Law"),
          [r, c] = (0, o.useState)(""),
          [l, u] = (0, o.useState)(null),
          [d, f] = (0, o.useState)([]),
          h = async (t) => {
            let r = t.target.value;
            if ((c(r), "" === r.trim())) {
              f([]);
              return;
            }
            try {
              let t = await (0, a.Z)();
              if (t instanceof Error) console.log("err", l), u(t), f([]);
              else {
                let n = t
                  .filter(
                    (e) =>
                      e.coursetitle
                        .toLowerCase()
                        .includes(r.toLowerCase().trim()) ||
                      e.qualification.qualificationType
                        .toLowerCase()
                        .includes(r.toLowerCase().trim())
                  )
                  .filter((t) => t.schoolname === e);
                f(n);
              }
            } catch (e) {
              console.error("Error fetching or filtering courses:", e), u(e);
            }
          };
        return (0, n.jsxs)("div", {
          className: "relative",
          children: [
            (0, n.jsx)("div", {
              className:
                "xl:h-[940px] lg:h-[670px] md:h-[650px] sm:h-[450px] h-[650px]",
              children: (0, n.jsx)(i.default, {
                className: "object-cover object-right",
                src: "/assets/banner/heroImageHome.png",
                quality: 100,
                alt: "hero background image",
                fill: !0,
              }),
            }),
            (0, n.jsxs)("div", {
              className:
                "gradient-cover lg:backdrop-blur-[1px] backdrop-blur-sm flex flex-col justify-center lg:items-start items-center lg:px-20 md:gap-y-20 sm:gap-y-16 gap-y-10",
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsxs)("h1", {
                      className: "text-white text-center ",
                      children: [
                        "Advance your ",
                        (0, n.jsx)("span", {
                          className: "text-[#FFE500] capitalize",
                          children: "Business Skills",
                        }),
                      ],
                    }),
                    (0, n.jsx)("h1", {
                      className: "text-white text-center",
                      children: "with our courses",
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "rounded-md shadow-lg shadow-[#FFE500] w-fit",
                  onMouseLeave: () => {
                    c(""), f([]);
                  },
                  children: (0, n.jsx)("div", {
                    className: "flex p-1 rounded-md shadow-xl bg-white",
                    children: (0, n.jsxs)("div", {
                      className: "relative flex",
                      children: [
                        (0, n.jsx)("input", {
                          placeholder: "Search for courses",
                          className:
                            "lg:w-[600px] sm:w-[400px] w-[300px] p-4 outline-none text-gray-600",
                          type: "search",
                          value: r,
                          onChange: h,
                        }),
                        r &&
                          d.length > 0 &&
                          (0, n.jsx)("ul", {
                            className:
                              "absolute left-0 w-full top-[56px] bg-white rounded-md shadow-lg z-50",
                            children: d.map((e, t) =>
                              (0, n.jsx)(
                                "li",
                                {
                                  className:
                                    "px-4 py-2 text-gray-900 cursor-pointer rounded-xl hover:bg-gray-100",
                                  children: (0, n.jsxs)(s.default, {
                                    href: "/courses/".concat(e.id),
                                    onClick: () => c(""),
                                    children: [
                                      e.qualification.qualificationType,
                                      " ",
                                      e.coursetitle,
                                      " ",
                                      e.withfoundation &&
                                        "with Integrated Foundation Year",
                                    ],
                                  }),
                                },
                                t
                              )
                            ),
                          }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    6648: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return i.a;
        },
      });
      var n = r(5601),
        i = r.n(n);
    },
    7138: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return i.a;
        },
      });
      var n = r(231),
        i = r.n(n);
    },
    357: function (e, t, r) {
      "use strict";
      var n, i;
      e.exports =
        (null == (n = r.g.process) ? void 0 : n.env) &&
        "object" == typeof (null == (i = r.g.process) ? void 0 : i.env)
          ? r.g.process
          : r(8081);
    },
    8081: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                r,
                n,
                i = (e.exports = {});
              function o() {
                throw Error("setTimeout has not been defined");
              }
              function s() {
                throw Error("clearTimeout has not been defined");
              }
              function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : o;
                } catch (e) {
                  t = o;
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : s;
                } catch (e) {
                  r = s;
                }
              })();
              var c = [],
                l = !1,
                u = -1;
              function d() {
                l &&
                  n &&
                  ((l = !1),
                  n.length ? (c = n.concat(c)) : (u = -1),
                  c.length && f());
              }
              function f() {
                if (!l) {
                  var e = a(d);
                  l = !0;
                  for (var t = c.length; t; ) {
                    for (n = c, c = []; ++u < t; ) n && n[u].run();
                    (u = -1), (t = c.length);
                  }
                  (n = null),
                    (l = !1),
                    (function (e) {
                      if (r === clearTimeout) return clearTimeout(e);
                      if ((r === s || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(e);
                      try {
                        r(e);
                      } catch (t) {
                        try {
                          return r.call(null, e);
                        } catch (t) {
                          return r.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function h(e, t) {
                (this.fun = e), (this.array = t);
              }
              function p() {}
              (i.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                c.push(new h(e, t)), 1 !== c.length || l || a(f);
              }),
                (h.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = p),
                (i.addListener = p),
                (i.once = p),
                (i.off = p),
                (i.removeListener = p),
                (i.removeAllListeners = p),
                (i.emit = p),
                (i.prependListener = p),
                (i.prependOnceListener = p),
                (i.listeners = function (e) {
                  return [];
                }),
                (i.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (i.cwd = function () {
                  return "/";
                }),
                (i.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (i.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function n(e) {
          var i = r[e];
          if (void 0 !== i) return i.exports;
          var o = (r[e] = { exports: {} }),
            s = !0;
          try {
            t[e](o, o.exports, n), (s = !1);
          } finally {
            s && delete r[e];
          }
          return o.exports;
        }
        n.ab = "//";
        var i = n(229);
        e.exports = i;
      })();
    },
    5601: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = r(9920),
        i = r(497),
        o = r(8173),
        s = n._(r(1241));
      function a(e) {
        let { props: t } = (0, i.getImgProps)(e, {
          defaultLoader: s.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let c = o.Image;
    },
  },
  function (e) {
    e.O(0, [173, 231, 392, 971, 23, 744], function () {
      return e((e.s = 203));
    }),
      (_N_E = e.O());
  },
]);
