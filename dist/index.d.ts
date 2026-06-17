import { QuartzTransformerPlugin } from '@quartz-community/types';
export { PageGenerator, PageMatcher, QuartzComponent, QuartzComponentConstructor, QuartzComponentProps, QuartzEmitterPlugin, QuartzFilterPlugin, QuartzPageTypePlugin, QuartzPageTypePluginInstance, QuartzTransformerPlugin, StringResource, VirtualPage } from '@quartz-community/types';
import { TocTransformerOptions } from './types.js';
export { TocEntry } from './types.js';
export { Backlinks, BacklinksOptions, MobileToc } from './components/index.js';

declare const TocTransformer: QuartzTransformerPlugin<Partial<TocTransformerOptions>>;

export { TocTransformer, TocTransformerOptions };
