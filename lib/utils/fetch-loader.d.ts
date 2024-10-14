import type { HlsConfig } from '../config';
import type { Loader, LoaderCallbacks, LoaderConfiguration, LoaderContext, LoaderStats } from '../types/loader';
export declare function fetchSupported(): boolean;
declare class FetchLoader implements Loader<LoaderContext> {
    private fetchSetup;
    private requestTimeout?;
    private request;
    private response;
    private controller;
    context: LoaderContext | null;
    private config;
    private callbacks;
    stats: LoaderStats;
    private loader;
    constructor(config: HlsConfig);
    destroy(): void;
    abortInternal(): void;
    abort(): void;
    load(context: LoaderContext, config: LoaderConfiguration, callbacks: LoaderCallbacks<LoaderContext>): void;
    getCacheAge(): number | null;
    getResponseHeader(name: string): string | null;
    private loadProgressively;
}
export default FetchLoader;
//# sourceMappingURL=fetch-loader.d.ts.map