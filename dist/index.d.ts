import { QuartzTransformerPlugin, QuartzFilterPlugin, QuartzEmitterPlugin } from '@quartz-community/types';
export { PageGenerator, PageMatcher, QuartzComponent, QuartzComponentConstructor, QuartzComponentProps, QuartzEmitterPlugin, QuartzFilterPlugin, QuartzPageTypePlugin, QuartzPageTypePluginInstance, QuartzTransformerPlugin, StringResource, VirtualPage } from '@quartz-community/types';
import { TocTransformerOptions, ExampleFilterOptions, ExampleEmitterOptions } from './types.js';
export { TocEntry } from './types.js';
export { Backlinks, BacklinksOptions, MobileToc } from './components/index.js';

declare const TocTransformer: QuartzTransformerPlugin<Partial<TocTransformerOptions>>;

/**
 * Example filter that removes drafts, tagged pages, and excluded path prefixes.
 */
declare const ExampleFilter: QuartzFilterPlugin<Partial<ExampleFilterOptions>>;

/**
 * Example emitter that writes a JSON manifest of content metadata.
 */
declare const ExampleEmitter: QuartzEmitterPlugin<Partial<ExampleEmitterOptions>>;

export { ExampleEmitter, ExampleFilter, TocTransformer, TocTransformerOptions };
