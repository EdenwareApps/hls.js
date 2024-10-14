import { HlsUrlParameters, type Level } from '../types/level';
import { Logger } from '../utils/logger';
import type Hls from '../hls';
import type { LevelDetails } from '../loader/level-details';
import type { NetworkComponentAPI } from '../types/component-api';
import type { ErrorData } from '../types/events';
import type { AudioTrackLoadedData, LevelLoadedData, TrackLoadedData } from '../types/events';
import type { MediaPlaylist } from '../types/media-playlist';
export default class BasePlaylistController extends Logger implements NetworkComponentAPI {
    protected hls: Hls;
    protected timer: number;
    protected requestScheduled: number;
    protected canLoad: boolean;
    constructor(hls: Hls, logPrefix: string);
    destroy(): void;
    protected clearTimer(): void;
    startLoad(): void;
    stopLoad(): void;
    protected switchParams(playlistUri: string, previous: LevelDetails | undefined, current: LevelDetails | undefined): HlsUrlParameters | undefined;
    protected loadPlaylist(hlsUrlParameters?: HlsUrlParameters): void;
    protected shouldLoadPlaylist(playlist: Level | MediaPlaylist | null | undefined): boolean;
    protected shouldReloadPlaylist(playlist: Level | MediaPlaylist | null | undefined): boolean;
    protected playlistLoaded(index: number, data: LevelLoadedData | AudioTrackLoadedData | TrackLoadedData, previousDetails?: LevelDetails): void;
    private getDeliveryDirectives;
    protected checkRetry(errorEvent: ErrorData): boolean;
}
//# sourceMappingURL=base-playlist-controller.d.ts.map