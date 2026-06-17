declare global {
  interface Window {
    __notesTocObserver?: IntersectionObserver;
  }
}

function handleNavOrRender() {
  const allTocs = document.querySelectorAll<HTMLElement>("div.notes-toc-explorer");

  for (const toc of allTocs) {
    toc.classList.remove("notes-toc-open");
    toc.classList.remove("collapsed");
    toc.setAttribute("aria-expanded", "true");
    document.documentElement.classList.remove("mobile-no-scroll");

    const cleanupFns: Array<() => void> = [];

    const mobileBtn = toc.querySelector<HTMLElement>(".mobile-toc-explorer");
    if (mobileBtn) {
      mobileBtn.classList.remove("hide-until-loaded");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => toc.classList.add("notes-toc-ready"));
      });

      const mobileHandler = () => {
        const opened = toc.classList.toggle("notes-toc-open");
        toc.setAttribute("aria-expanded", opened ? "true" : "false");
        if (opened) document.documentElement.classList.add("mobile-no-scroll");
        else document.documentElement.classList.remove("mobile-no-scroll");
      };
      mobileBtn.addEventListener("click", mobileHandler);
      cleanupFns.push(() => mobileBtn.removeEventListener("click", mobileHandler));
    }

    const desktopBtn = toc.querySelector<HTMLElement>(".desktop-toc-explorer");
    if (desktopBtn) {
      const desktopHandler = () => {
        const collapsed = toc.classList.toggle("collapsed");
        toc.setAttribute("aria-expanded", collapsed ? "false" : "true");
      };
      desktopBtn.addEventListener("click", desktopHandler);
      cleanupFns.push(() => desktopBtn.removeEventListener("click", desktopHandler));
    }

    for (const link of toc.querySelectorAll<HTMLAnchorElement>("a")) {
      const linkHandler = () => {
        if (window.matchMedia("(max-width: 800px)").matches) {
          toc.classList.remove("notes-toc-open");
          toc.setAttribute("aria-expanded", "false");
          document.documentElement.classList.remove("mobile-no-scroll");
        }
      };
      link.addEventListener("click", linkHandler);
      cleanupFns.push(() => link.removeEventListener("click", linkHandler));
    }

    if (window.addCleanup) {
      window.addCleanup(() => cleanupFns.forEach((fn) => fn()));
    }
  }

  window.__notesTocObserver?.disconnect();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const slug = entry.target.id;
        const links = document.querySelectorAll<HTMLElement>(`a[data-for="${slug}"]`);
        if (!links.length) continue;
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.add("in-view"));
        } else {
          links.forEach((l) => l.classList.remove("in-view"));
        }
      }
    },
    { rootMargin: "20px 0px 0px 0px" },
  );
  window.__notesTocObserver = observer;

  document
    .querySelectorAll<HTMLElement>("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
    .forEach((h) => observer.observe(h));
}

document.addEventListener("nav", handleNavOrRender);
document.addEventListener("render", handleNavOrRender);
