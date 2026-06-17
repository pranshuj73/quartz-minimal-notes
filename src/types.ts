export type {
  BuildCtx,
  ChangeEvent,
  CSSResource,
  JSResource,
  ProcessedContent,
  QuartzEmitterPlugin,
  QuartzEmitterPluginInstance,
  QuartzFilterPlugin,
  QuartzFilterPluginInstance,
  QuartzPluginData,
  QuartzTransformerPlugin,
  QuartzTransformerPluginInstance,
  StaticResources,
  PageMatcher,
  PageGenerator,
  VirtualPage,
  QuartzPageTypePlugin,
  QuartzPageTypePluginInstance,
} from "@quartz-community/types";

export interface TocEntry {
  depth: number;
  text: string;
  slug: string;
}

export interface TocTransformerOptions {
  maxDepth: 1 | 2 | 3 | 4 | 5 | 6;
  minEntries: number;
  showByDefault: boolean;
  collapseByDefault: boolean;
}

