import { Events } from '../events';
import type StreamController from './stream-controller';
import type Hls from '../hls';
import type { ComponentAPI } from '../types/component-api';
import type { BufferCodecsData, FPSDropLevelCappingData, ManifestParsedData, MediaAttachingData } from '../types/events';
import type { Level } from '../types/level';
declare class CapLevelController implements ComponentAPI {
    private hls;
    private autoLevelCapping;
    private firstLevel;
    private media;
    private restrictedLevels;
    private timer;
    private clientRect;
    private streamController?;
    constructor(hls: Hls);
    setStreamController(streamController: StreamController): void;
    destroy(): void;
    protected registerListeners(): void;
    protected unregisterListener(): void;
    protected onFpsDropLevelCapping(event: Events.FPS_DROP_LEVEL_CAPPING, data: FPSDropLevelCappingData): void;
    protected onMediaAttaching(event: Events.MEDIA_ATTACHING, data: MediaAttachingData): void;
    protected onManifestParsed(event: Events.MANIFEST_PARSED, data: ManifestParsedData): void;
    private onLevelsUpdated;
    protected onBufferCodecs(event: Events.BUFFER_CODECS, data: BufferCodecsData): void;
    protected onMediaDetaching(): void;
    detectPlayerSize(): void;
    getMaxLevel(capLevelIndex: number): number;
    startCapping(): void;
    stopCapping(): void;
    getDimensions(): {
        width: number;
        height: number;
    };
    get mediaWidth(): number;
    get mediaHeight(): number;
    get contentScaleFactor(): number;
    private isLevelAllowed;
    static getMaxLevelByMediaSize(levels: Array<Level>, width: number, height: number): number;
}
export default CapLevelController;
//# sourceMappingURL=cap-level-controller.d.ts.map