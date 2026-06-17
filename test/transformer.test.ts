import { describe, expect, it } from "vitest";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { TocTransformer } from "../src/transformer";
import { createCtx } from "./helpers";

describe("TocTransformer", () => {
  it("builds a TOC from headings", async () => {
    const ctx = createCtx();
    const transformer = TocTransformer({ maxDepth: 3 });
    const plugins = transformer.markdownPlugins?.(ctx) ?? [];

    const file = await unified()
      .use(remarkParse)
      .use(plugins)
      .use(remarkStringify)
      .process("# Intro\n\n## Section One\n\n### Sub\n");

    const toc = (file.data as Record<string, unknown>).toc as
      | Array<{ depth: number; text: string; slug: string }>
      | undefined;

    expect(toc).toBeDefined();
    expect(toc?.length).toBeGreaterThan(0);
    expect(toc?.[0]).toMatchObject({ text: "Intro", depth: 0 });
    expect(toc?.[1]).toMatchObject({ text: "Section One", depth: 1 });
  });

  it("returns no TOC when showByDefault is false", async () => {
    const ctx = createCtx();
    const transformer = TocTransformer({ showByDefault: false });
    const plugins = transformer.markdownPlugins?.(ctx) ?? [];

    const file = await unified()
      .use(remarkParse)
      .use(plugins)
      .use(remarkStringify)
      .process("# Heading\n\n## Sub\n");

    const toc = (file.data as Record<string, unknown>).toc;
    expect(toc).toBeUndefined();
  });
});
