import type { HlsConfig } from '../config';
import type { RetryConfig } from '../config';
import type { Loader, LoaderCallbacks, LoaderConfiguration, LoaderContext, LoaderStats } from '../types/loader';
declare class XhrLoader implements Loader<LoaderContext> {
    private xhrSetup;
    private requestTimeout?;
    private retryTimeout?;
    private retryDelay;
    private config;
    private callbacks;
    context: LoaderContext | null;
    private loader;
    stats: LoaderStats;
    constructor(config: HlsConfig);
    destroy(): void;
    abortInternal(): void;
    abort(): void;
    load(context: LoaderContext, config: LoaderConfiguration, callbacks: LoaderCallbacks<LoaderContext>): void;
    loadInternal(): void;
    openAndSendXhr(xhr: XMLHttpRequest, context: LoaderContext, config: LoaderConfiguration): void;
    readystatechange(): void;
    loadtimeout(): void;
    retry(retryConfig: RetryConfig): void;
    loadprogress(event: ProgressEvent): void;
    getCacheAge(): number | null;
    getResponseHeader(name: string): string | null;
}
export default XhrLoader;
//# sourceMappingURL=xhr-loader.d.ts.map