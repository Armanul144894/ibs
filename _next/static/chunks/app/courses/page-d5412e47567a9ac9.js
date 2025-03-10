(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [65],
  {
    2410: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 4216)),
        Promise.resolve().then(i.t.bind(i, 8173, 23)),
        Promise.resolve().then(i.t.bind(i, 231, 23));
    },
    1224: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = i(7437),
        s = i(875);
      function r(e) {
        let { as: t = "section", className: i, children: r, ...o } = e;
        return (0, n.jsx)(t, {
          className: (0, s.Z)("px-4 py-14 md:px-6 md:py-20 lg:py-24", i),
          ...o,
          children: (0, n.jsx)("div", {
            className:
              "mx-auto flex w-full max-w-5xl flex-col gap-12 items-center",
            children: r,
          }),
        });
      }
    },
    4216: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return a;
        },
      });
      var n = i(7437),
        s = i(2265),
        r = i(1224),
        o = i(3363),
        u = i(2612),
        l = i(6648),
        c = i(7138);
      function a() {
        let [e, t] = (0, s.useState)(u.kR[0]);
        return (0, n.jsxs)(r.Z, {
          children: [
            (0, n.jsx)(o.Z, { headerInfo: { subtitle: "Student Services" } }),
            (0, n.jsx)("div", {
              children: (0, n.jsxs)("div", {
                className: "grid sm:grid-cols-2 md:gap-20 gap-10 ",
                children: [
                  (0, n.jsxs)("div", {
                    className: "relative border-8 border-[#FDDA00] rounded-md",
                    children: [
                      (0, n.jsx)(l.default, {
                        src: e.imgSrc,
                        alt: e.imgAlt,
                        width: 500,
                        height: 500,
                        className:
                          "object-cover object-center w-full h-full aspect-square  ",
                      }),
                      (0, n.jsx)("div", {
                        className: "gradient-cover rounded-md",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex flex-col justify-between gap-6",
                    children: [
                      (0, n.jsx)("div", {
                        className: "flex flex-col gap-6",
                        children: u.kR.map((i, s) =>
                          (0, n.jsx)(
                            "div",
                            {
                              className:
                                "flex flex-col gap-6 items-start min-w-[300px]",
                              children: (0, n.jsxs)("button", {
                                className: "flex w-full gap-3 ",
                                onClick: () => {
                                  t(i);
                                },
                                children: [
                                  (0, n.jsx)("div", {
                                    className:
                                      "rounded-full h-full aspect-square bg-white border-2 border-[#FDDA00] p-1",
                                    children: (0, n.jsx)("div", {
                                      className:
                                        "w-full h-full rounded-full ".concat(
                                          e === i ? "bg-[#FDDA00]" : "bg-white"
                                        ),
                                    }),
                                  }),
                                  (0, n.jsx)("h5", {
                                    className: "text-[#23315B]",
                                    children: i.page,
                                  }),
                                ],
                              }),
                            },
                            s
                          )
                        ),
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex flex-col gap-6 ",
                        children: [
                          (0, n.jsxs)("p", {
                            children: [" ", e.pageDescirption, " "],
                          }),
                          (0, n.jsx)(c.default, {
                            className: "blue-border-button self-end",
                            href: e.href,
                            children: "Read more",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    3363: function (e, t, i) {
      "use strict";
      var n = i(7437);
      t.Z = (e) => {
        let { headerInfo: t } = e,
          { subtitle: i } = t;
        return (0, n.jsx)("div", {
          className: "animate_top mx-auto text-center pb-10 px-2",
          children: (0, n.jsx)("h2", {
            className:
              "mx-auto text-[#23315B] mb-9 px-6 border-[#ff3131] border-l-2 border-r-2 ",
            children: i,
          }),
        });
      };
    },
    2612: function (e, t, i) {
      "use strict";
      i.d(t, {
        Vd: function () {
          return s;
        },
        kR: function () {
          return r;
        },
        pO: function () {
          return n;
        },
      });
      let n = [
          { type: "link", page: "Home", href: "/" },
          { type: "link", page: "Courses", href: "/courses" },
          { type: "link", page: "Campus", href: "/campuses/1" },
          {
            type: "dropdown",
            page: "Student Services",
            href: "",
            dropdown: [
              {
                page: "Student Support",
                href: "/student-support",
                description: "Here to support throughout  your journey.",
                imgSrc: "/student-life/Student-support.png",
                imgAlt:
                  "young-woman-sitting-on-a-bench-with-books-student-studying",
                pageDescirption:
                  "IBS- International Business School provides comprehensive student support services, fostering an inclusive environment to ensure every student thrives. Our academic support includes personalised advising, tutoring, and resources to help students excel in their coursework.",
              },
              {
                page: "Student Life ",
                href: "/student-life",
                description: "Student Life Services.",
                imgSrc: "/student-life/Employability.png",
                imgAlt:
                  "two-colleagues-working-in-the-office-studying-tutoring",
                pageDescirption:
                  "IBS- International Business School provides comprehensive student support services, fostering an inclusive environment to ensure every student thrives. Our academic support includes personalised advising, tutoring, and resources to help students excel in their coursework.",
              },
              {
                page: "Employability ",
                href: "/employability",
                description: " Employability Support Services.",
                imgSrc: "/student-life/coworkers-correcting-charts.png",
                imgAlt: "coworkers-correcting-charts",
                pageDescirption:
                  "IBS- International Business School provides comprehensive student support services, fostering an inclusive environment to ensure every student thrives. Our academic support includes personalised advising, tutoring, and resources to help students excel in their coursework.",
              },
              {
                page: "Mental Health and Wellbeing",
                href: "/mental-health-support",
                description: "Mental Health and Wellbeing Services.",
                imgSrc: "/student-life/Mental-Health-and-Well-being.png",
                imgAlt: "mental health",
                pageDescirption:
                  "IBS- International Business School provides comprehensive student support services, fostering an inclusive environment to ensure every student thrives. Our academic support includes personalised advising, tutoring, and resources to help students excel in their coursework.",
              },
              {
                page: "Fees and Funding",
                href: "/fees-and-funding",
                description: "Fees and Funding Services.",
                imgSrc: "/student-life/PostGrad.png",
                imgAlt:
                  "colleagues-working-students-studying-cafe-university-office",
                pageDescirption:
                  "IBS- International Business School provides comprehensive student support services, fostering an inclusive environment to ensure every student thrives. Our academic support includes personalised advising, tutoring, and resources to help students excel in their coursework.",
              },
              {
                page: "IT Services",
                href: "/it-and-library",
                description: "IT and Library Services.",
                imgSrc: "/student-support/face-to-face.png",
                imgAlt: "coworkers-students-studying-working-on-laptops",
                pageDescirption:
                  "IBS- International Business School provides comprehensive student support services, fostering an inclusive environment to ensure every student thrives. Our academic support includes personalised advising, tutoring, and resources to help students excel in their coursework.",
              },
            ],
          },
          { type: "link", page: "About Us", href: "/about" },
          { type: "link", page: "Contact Us", href: "/contact-us" },
        ],
        s = [
          "/campuses/1",
          "/contact-us",
          "/courses/*",
          "/careers",
          "/it-and-library/face-to-face",
        ],
        r = [
          {
            page: "Student Support",
            href: "/student-support",
            description: "Here to support throughout  your journey.",
            imgSrc: "/student-life/Student-support.png",
            imgAlt:
              "young-woman-sitting-on-a-bench-with-books-student-studying",
            pageDescirption:
              "IBS- International Business School provides comprehensive student support services, fostering an inclusive environment to ensure every student thrives. Our academic support includes personalised advising, tutoring, and resources to help students excel in their coursework.",
          },
          {
            page: "Student Life ",
            href: "/student-life",
            description: "Student Life Services.",
            imgSrc: "/student-life/Employability.png",
            imgAlt: "two-colleagues-working-in-the-office-studying-tutoring",
            pageDescirption:
              "IBS- International Business School provides comprehensive student support services, fostering an inclusive environment to ensure every student thrives. Our academic support includes personalised advising, tutoring, and resources to help students excel in their coursework.",
          },
          {
            page: "Employability ",
            href: "/employability",
            description: " Employability Support Services.",
            imgSrc: "/student-life/coworkers-correcting-charts.png",
            imgAlt: "coworkers-correcting-charts",
            pageDescirption:
              "IBS- International Business School provides comprehensive student support services, fostering an inclusive environment to ensure every student thrives. Our academic support includes personalised advising, tutoring, and resources to help students excel in their coursework.",
          },
          {
            page: "Mental Health and Wellbeing",
            href: "/mental-health-support",
            description: "Mental Health and Wellbeing Services.",
            imgSrc: "/student-life/Mental-Health-and-Well-being.png",
            imgAlt: "mental health",
            pageDescirption:
              "IBS- International Business School provides comprehensive student support services, fostering an inclusive environment to ensure every student thrives. Our academic support includes personalised advising, tutoring, and resources to help students excel in their coursework.",
          },
          {
            page: "Fees and Funding",
            href: "/fees-and-funding",
            description: "Fees and Funding Services.",
            imgSrc: "/student-life/PostGrad.png",
            imgAlt:
              "colleagues-working-students-studying-cafe-university-office",
            pageDescirption:
              "IBS- International Business School provides comprehensive student support services, fostering an inclusive environment to ensure every student thrives. Our academic support includes personalised advising, tutoring, and resources to help students excel in their coursework.",
          },
          {
            page: "IT Services",
            href: "/it-and-library",
            description: "IT and Library Services.",
            imgSrc: "/student-support/face-to-face.png",
            imgAlt: "coworkers-students-studying-working-on-laptops",
            pageDescirption:
              "IBS- International Business School provides comprehensive student support services, fostering an inclusive environment to ensure every student thrives. Our academic support includes personalised advising, tutoring, and resources to help students excel in their coursework.",
          },
        ];
    },
    875: function (e, t, i) {
      "use strict";
      function n() {
        for (var e, t, i = 0, n = ""; i < arguments.length; )
          (e = arguments[i++]) &&
            (t = (function e(t) {
              var i,
                n,
                s = "";
              if ("string" == typeof t || "number" == typeof t) s += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (i = 0; i < t.length; i++)
                    t[i] && (n = e(t[i])) && (s && (s += " "), (s += n));
                else for (i in t) t[i] && (s && (s += " "), (s += i));
              }
              return s;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      i.d(t, {
        W: function () {
          return n;
        },
      }),
        (t.Z = n);
    },
    6648: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return s.a;
        },
      });
      var n = i(5601),
        s = i.n(n);
    },
    7138: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return s.a;
        },
      });
      var n = i(231),
        s = i.n(n);
    },
    5601: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return u;
          },
        });
      let n = i(9920),
        s = i(497),
        r = i(8173),
        o = n._(i(1241));
      function u(e) {
        let { props: t } = (0, s.getImgProps)(e, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e];
        return { props: t };
      }
      let l = r.Image;
    },
  },
  function (e) {
    e.O(0, [173, 231, 971, 23, 744], function () {
      return e((e.s = 2410));
    }),
      (_N_E = e.O());
  },
]);
