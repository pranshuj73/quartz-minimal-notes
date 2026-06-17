import { createRequire } from 'module';

createRequire(import.meta.url);

// src/components/styles/notesToc.scss
var notesToc_default = "@media all and (max-width: 800px) {\n  .page > #quartz-body > :not(.sidebar.left:has(.notes-toc-explorer)) {\n    transition: transform 300ms ease-in-out;\n  }\n  .page > #quartz-body.lock-scroll > :not(.sidebar.left:has(.notes-toc-explorer)) {\n    transform: translateX(100dvw);\n    transition: transform 300ms ease-in-out;\n  }\n  .page > #quartz-body .sidebar.left:has(.notes-toc-explorer) {\n    box-sizing: border-box;\n    position: sticky;\n    background-color: var(--light);\n    padding: 1rem 0 1rem 0;\n    margin: 0;\n  }\n  .page > #quartz-body .hide-until-loaded ~ .notes-toc-content {\n    display: none;\n  }\n}\n.notes-toc-explorer {\n  display: flex;\n  flex-direction: column;\n  overflow-y: hidden;\n  min-height: 1.2rem;\n  flex: 0 1 auto;\n}\n\n.notes-toc-explorer.collapsed {\n  flex: 0 1 1.2rem;\n}\n\n.notes-toc-explorer.collapsed .fold {\n  transform: rotateZ(-90deg);\n}\n\n.notes-toc-explorer .fold {\n  margin-left: 0.5rem;\n  transition: transform 0.3s ease;\n  opacity: 0.8;\n}\n\n@media all and (max-width: 800px) {\n  .notes-toc-explorer {\n    order: -2;\n    height: initial;\n    overflow: hidden;\n    flex-shrink: 0;\n    align-self: flex-start;\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n}\n.notes-toc-explorer button.mobile-toc-explorer {\n  display: none;\n}\n\n.notes-toc-explorer button.desktop-toc-explorer {\n  display: flex;\n}\n\n@media all and (max-width: 800px) {\n  .notes-toc-explorer button.mobile-toc-explorer {\n    display: flex;\n  }\n  .notes-toc-explorer button.desktop-toc-explorer {\n    display: none;\n  }\n}\n.notes-toc-explorer svg {\n  pointer-events: all;\n  transition: transform 0.35s ease;\n}\n\n.notes-toc-explorer svg > polyline {\n  pointer-events: none;\n}\n\n.notes-toc-explorer button.mobile-toc-explorer,\n.notes-toc-explorer button.desktop-toc-explorer {\n  background-color: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  padding: 0;\n  color: var(--dark);\n  align-items: center;\n}\n\n.notes-toc-explorer button.mobile-toc-explorer h2,\n.notes-toc-explorer button.desktop-toc-explorer h2 {\n  font-size: 0.85rem;\n  display: inline-block;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--gray);\n  font-weight: 600;\n}\n\n.notes-toc-content {\n  list-style: none;\n  overflow: hidden;\n  overflow-y: auto;\n  margin-top: 0.5rem;\n}\n\n.notes-toc-content ul {\n  list-style: none;\n  position: relative;\n  margin: 0.5rem 0;\n  padding: 0;\n}\n\n.notes-toc-content ul.notes-toc-ul {\n  overscroll-behavior: contain;\n}\n\n.notes-toc-content ul li {\n  margin: 0.25rem 0;\n}\n\n.notes-toc-content ul > li > a {\n  color: var(--dark);\n  opacity: 0.35;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition: 0.5s ease opacity, 0.3s ease color;\n}\n\n.notes-toc-content ul > li > a.in-view {\n  opacity: 0.8;\n  color: var(--tertiary);\n}\n\n.notes-toc-content ul .depth-0 {\n  padding-left: 0;\n}\n\n.notes-toc-content ul .depth-1 {\n  padding-left: 1rem;\n}\n\n.notes-toc-content ul .depth-2 {\n  padding-left: 2rem;\n}\n\n.notes-toc-content ul .depth-3 {\n  padding-left: 3rem;\n}\n\n.notes-toc-content ul .depth-4 {\n  padding-left: 4rem;\n}\n\n.notes-toc-content ul .depth-5 {\n  padding-left: 5rem;\n}\n\n.notes-toc-content ul .depth-6 {\n  padding-left: 6rem;\n}\n\n.notes-toc-overlay-heading {\n  display: none;\n}\n\n@media all and (max-width: 800px) {\n  .notes-toc-overlay-heading {\n    display: block;\n    font-size: 1rem;\n    margin: 0 0 1rem;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n    color: var(--gray);\n  }\n}\n.notes-toc-content ul li > a {\n  color: var(--dark);\n  opacity: 0.5;\n  pointer-events: all;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n\n.notes-toc-content ul li > a:hover {\n  opacity: 1;\n  color: var(--tertiary);\n}\n\n@media all and (max-width: 800px) {\n  .notes-toc-explorer {\n    flex: 0 0 34px;\n  }\n  .notes-toc-explorer > .notes-toc-content {\n    transform: translateX(-100vw);\n    visibility: hidden;\n  }\n  .notes-toc-explorer.notes-toc-open > .notes-toc-content {\n    transform: translateX(0);\n    visibility: visible;\n  }\n  .notes-toc-explorer .notes-toc-content {\n    box-sizing: border-box;\n    z-index: 100;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-top: 0;\n    background-color: var(--light);\n    max-width: 100vw;\n    width: 100vw;\n    overflow: hidden;\n    padding: 4rem 0rem;\n    height: 100dvh;\n    max-height: 100dvh;\n  }\n  .notes-toc-ready.notes-toc-explorer .notes-toc-content {\n    transition: transform 200ms ease, visibility 200ms ease;\n  }\n  .notes-toc-explorer .mobile-toc-explorer {\n    margin: 0;\n    padding: 5px;\n    z-index: 101;\n  }\n  .notes-toc-explorer .mobile-toc-explorer.hide-until-loaded {\n    display: none;\n  }\n  .notes-toc-explorer .mobile-toc-explorer .lucide-menu {\n    stroke: var(--darkgray);\n  }\n}\n@media all and (max-width: 800px) {\n  .mobile-no-scroll .notes-toc-content > .notes-toc-ul {\n    overscroll-behavior: contain;\n  }\n}";

// src/components/scripts/mobileToc.inline.ts
var mobileToc_inline_default = 'function r(){let i=document.querySelectorAll("div.notes-toc-explorer");for(let e of i){e.classList.remove("notes-toc-open"),e.classList.remove("collapsed"),e.setAttribute("aria-expanded","true"),document.documentElement.classList.remove("mobile-no-scroll");let o=[],c=e.querySelector(".mobile-toc-explorer");if(c){c.classList.remove("hide-until-loaded"),requestAnimationFrame(()=>{requestAnimationFrame(()=>e.classList.add("notes-toc-ready"))});let t=()=>{let s=e.classList.toggle("notes-toc-open");e.setAttribute("aria-expanded",s?"true":"false"),s?document.documentElement.classList.add("mobile-no-scroll"):document.documentElement.classList.remove("mobile-no-scroll")};c.addEventListener("click",t),o.push(()=>c.removeEventListener("click",t))}let n=e.querySelector(".desktop-toc-explorer");if(n){let t=()=>{let s=e.classList.toggle("collapsed");e.setAttribute("aria-expanded",s?"false":"true")};n.addEventListener("click",t),o.push(()=>n.removeEventListener("click",t))}for(let t of e.querySelectorAll("a")){let s=()=>{window.matchMedia("(max-width: 800px)").matches&&(e.classList.remove("notes-toc-open"),e.setAttribute("aria-expanded","false"),document.documentElement.classList.remove("mobile-no-scroll"))};t.addEventListener("click",s),o.push(()=>t.removeEventListener("click",s))}window.addCleanup&&window.addCleanup(()=>o.forEach(t=>t()))}window.__notesTocObserver?.disconnect();let l=new IntersectionObserver(e=>{for(let o of e){let c=o.target.id,n=document.querySelectorAll(`a[data-for="${c}"]`);n.length&&(o.isIntersecting?n.forEach(t=>t.classList.add("in-view")):n.forEach(t=>t.classList.remove("in-view")))}},{rootMargin:"20px 0px 0px 0px"});window.__notesTocObserver=l,document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]").forEach(e=>l.observe(e))}document.addEventListener("nav",r);document.addEventListener("render",r);\n';
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/MobileToc.tsx
var numTocs = 0;
var MobileToc = ({ fileData }) => {
  const toc = fileData.toc;
  if (!toc || toc.length === 0) return null;
  const id = `notes-toc-${numTocs++}`;
  return /* @__PURE__ */ u2("div", { class: "notes-toc-explorer", "aria-expanded": false, children: [
    /* @__PURE__ */ u2(
      "button",
      {
        type: "button",
        class: "notes-toc-toggle mobile-toc-explorer hide-until-loaded",
        "aria-controls": id,
        "aria-label": "Table of contents",
        children: /* @__PURE__ */ u2(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": 2,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "lucide-menu",
            children: [
              /* @__PURE__ */ u2("line", { x1: 4, x2: 20, y1: 12, y2: 12 }),
              /* @__PURE__ */ u2("line", { x1: 4, x2: 20, y1: 6, y2: 6 }),
              /* @__PURE__ */ u2("line", { x1: 4, x2: 20, y1: 18, y2: 18 })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ u2(
      "button",
      {
        type: "button",
        class: "notes-toc-toggle title-button desktop-toc-explorer",
        "aria-expanded": true,
        children: [
          /* @__PURE__ */ u2("h2", { children: "Table of Contents" }),
          /* @__PURE__ */ u2(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "14",
              height: "14",
              viewBox: "5 8 14 8",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": 2,
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "fold",
              children: /* @__PURE__ */ u2("polyline", { points: "6 9 12 15 18 9" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ u2("div", { id, class: "notes-toc-content", "aria-expanded": true, role: "group", children: [
      /* @__PURE__ */ u2("h2", { class: "notes-toc-overlay-heading", children: "Table of Contents" }),
      /* @__PURE__ */ u2("ul", { class: "overflow notes-toc-ul", children: [
        toc.map((entry) => /* @__PURE__ */ u2("li", { class: `depth-${entry.depth}`, children: /* @__PURE__ */ u2("a", { href: `#${entry.slug}`, "data-for": entry.slug, children: entry.text }) })),
        /* @__PURE__ */ u2("li", { class: "overflow-end" })
      ] })
    ] })
  ] });
};
MobileToc.css = notesToc_default;
MobileToc.afterDOMLoaded = mobileToc_inline_default;
var MobileToc_default = (() => MobileToc);

// node_modules/@quartz-community/utils/dist/path.js
function simplifySlug(fp) {
  const res = stripSlashes(trimSuffix(fp, "index"), true);
  return res.length === 0 ? "/" : res;
}
function joinSegments(...args) {
  if (args.length === 0) {
    return "";
  }
  let joined = args.filter((segment) => segment !== "" && segment !== "/").map((segment) => stripSlashes(segment)).join("/");
  const first = args[0];
  const last = args[args.length - 1];
  if (first?.startsWith("/")) {
    joined = "/" + joined;
  }
  if (last?.endsWith("/")) {
    joined = joined + "/";
  }
  return joined;
}
function endsWith(s2, suffix) {
  return s2 === suffix || s2.endsWith("/" + suffix);
}
function trimSuffix(s2, suffix) {
  if (endsWith(s2, suffix)) {
    s2 = s2.slice(0, -suffix.length);
  }
  return s2;
}
function stripSlashes(s2, onlyStripPrefix) {
  if (s2.startsWith("/")) {
    s2 = s2.substring(1);
  }
  if (!onlyStripPrefix && s2.endsWith("/")) {
    s2 = s2.slice(0, -1);
  }
  return s2;
}
function pathToRoot(slug2) {
  let rootPath = slug2.split("/").filter((x2) => x2 !== "").slice(0, -1).map((_) => "..").join("/");
  if (rootPath.length === 0) {
    rootPath = ".";
  }
  return rootPath;
}
function resolveRelative(current, target) {
  const res = joinSegments(pathToRoot(current), simplifySlug(target));
  return res;
}

// src/components/styles/backlinks.scss
var backlinks_default = ".backlinks {\n  flex-direction: column;\n}\n.backlinks > h3 {\n  font-size: 1rem;\n  margin: 0;\n}\n.backlinks > ul.overflow {\n  list-style: none;\n  padding: 0;\n  margin: 0.5rem 0;\n  max-height: calc(100% - 2rem);\n  overscroll-behavior: contain;\n}\n.backlinks > ul.overflow > li > a {\n  background-color: transparent;\n}";

// src/components/Backlinks.tsx
var defaultOptions = { hideWhenEmpty: true };
var listCount = 0;
var Backlinks_default = ((opts) => {
  const options = { ...defaultOptions, ...opts };
  const listId = `backlinks-list-${listCount++}`;
  const Backlinks = ({
    fileData,
    allFiles,
    displayClass
  }) => {
    const slug2 = simplifySlug(fileData.slug);
    const backlinkFiles = allFiles.filter(
      (file) => file.unlisted !== true && file.links?.includes(slug2)
    );
    if (options.hideWhenEmpty && backlinkFiles.length === 0) return null;
    const classes = [displayClass, "backlinks"].filter(Boolean).join(" ");
    return /* @__PURE__ */ u2("div", { class: classes, children: [
      /* @__PURE__ */ u2("h1", { children: "Backlinks" }),
      /* @__PURE__ */ u2("ul", { class: "overflow", id: listId, children: [
        backlinkFiles.length > 0 ? backlinkFiles.map((f3) => /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2("a", { href: resolveRelative(fileData.slug, f3.slug), class: "internal", children: f3.frontmatter?.title }) })) : /* @__PURE__ */ u2("li", { children: "No backlinks found" }),
        /* @__PURE__ */ u2("li", { class: "overflow-end" })
      ] })
    ] });
  };
  Backlinks.css = backlinks_default;
  Backlinks.afterDOMLoaded = `
document.addEventListener("nav", function () {
  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var parentUl = entry.target.parentElement;
      if (!parentUl) continue;
      if (entry.isIntersecting) parentUl.classList.remove("gradient-active");
      else parentUl.classList.add("gradient-active");
    }
  });
  var ul = document.getElementById("${listId}");
  if (!ul) return;
  var end = ul.querySelector(".overflow-end");
  if (!end) return;
  observer.observe(end);
});
`;
  return Backlinks;
});

export { Backlinks_default as Backlinks, Backlinks_default as BacklinksBody, MobileToc_default as MobileToc };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map