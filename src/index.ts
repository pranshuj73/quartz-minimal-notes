export { TocTransformer } from "./transformer";
export { default as MobileToc } from "./components/MobileToc";
export { default as Backlinks } from "./components/Backlinks";

export type { TocTransformerOptions, TocEntry } from "./types";
export type { BacklinksOptions } from "./components/Backlinks";

export type {
  QuartzComponent,
  QuartzComponentProps,
  QuartzComponentConstructor,
  StringResource,
  QuartzTransformerPlugin,
  QuartzFilterPlugin,
  QuartzEmitterPlugin,
  QuartzPageTypePlugin,
  QuartzPageTypePluginInstance,
  PageMatcher,
  PageGenerator,
  VirtualPage,
} from "@quartz-community/types";
