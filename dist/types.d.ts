export { BuildCtx, CSSResource, ChangeEvent, JSResource, PageGenerator, PageMatcher, ProcessedContent, QuartzEmitterPlugin, QuartzEmitterPluginInstance, QuartzFilterPlugin, QuartzFilterPluginInstance, QuartzPageTypePlugin, QuartzPageTypePluginInstance, QuartzPluginData, QuartzTransformerPlugin, QuartzTransformerPluginInstance, StaticResources, VirtualPage } from '@quartz-community/types';

interface TocEntry {
    depth: number;
    text: string;
    slug: string;
}
interface TocTransformerOptions {
    maxDepth: 1 | 2 | 3 | 4 | 5 | 6;
    minEntries: number;
    showByDefault: boolean;
    collapseByDefault: boolean;
}

export type { TocEntry, TocTransformerOptions };
