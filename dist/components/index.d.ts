import { QuartzComponent } from '@quartz-community/types';

declare const _default$1: () => QuartzComponent;

interface BacklinksOptions {
    hideWhenEmpty: boolean;
}
declare const _default: (opts?: Partial<BacklinksOptions>) => QuartzComponent;

export { _default as Backlinks, _default as BacklinksBody, type BacklinksOptions, _default$1 as MobileToc };
