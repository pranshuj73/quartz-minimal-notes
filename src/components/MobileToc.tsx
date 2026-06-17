import type { QuartzComponent, QuartzComponentProps } from "@quartz-community/types";
import style from "./styles/notesToc.scss";
// @ts-expect-error - inline script import handled by Quartz bundler
import script from "./scripts/mobileToc.inline.ts";

interface TocEntry {
  depth: number;
  text: string;
  slug: string;
}

let numTocs = 0;

const MobileToc: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const toc = (fileData as { toc?: TocEntry[] }).toc;
  if (!toc || toc.length === 0) return null;

  const id = `notes-toc-${numTocs++}`;

  return (
    <div class="notes-toc-explorer" aria-expanded={false}>
      <button
        type="button"
        class="notes-toc-toggle mobile-toc-explorer hide-until-loaded"
        aria-controls={id}
        aria-label="Table of contents"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width={2}
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide-menu"
        >
          <line x1={4} x2={20} y1={12} y2={12} />
          <line x1={4} x2={20} y1={6} y2={6} />
          <line x1={4} x2={20} y1={18} y2={18} />
        </svg>
      </button>
      <button
        type="button"
        class="notes-toc-toggle title-button desktop-toc-explorer"
        aria-expanded={true}
      >
        <h2>Table of Contents</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="5 8 14 8"
          fill="none"
          stroke="currentColor"
          stroke-width={2}
          stroke-linecap="round"
          stroke-linejoin="round"
          class="fold"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div id={id} class="notes-toc-content" aria-expanded={true} role="group">
        <h2 class="notes-toc-overlay-heading">Table of Contents</h2>
        <ul class="overflow notes-toc-ul">
          {toc.map((entry) => (
            <li class={`depth-${entry.depth}`}>
              <a href={`#${entry.slug}`} data-for={entry.slug}>
                {entry.text}
              </a>
            </li>
          ))}
          <li class="overflow-end" />
        </ul>
      </div>
    </div>
  );
};

MobileToc.css = style;
MobileToc.afterDOMLoaded = script;

export default (() => MobileToc) satisfies (opts?: unknown) => QuartzComponent;
