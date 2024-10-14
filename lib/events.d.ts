import type { AssetListLoadedData, AssetListLoadingData, AudioTrackLoadedData, AudioTracksUpdatedData, AudioTrackSwitchedData, AudioTrackSwitchingData, AudioTrackUpdatedData, BackBufferData, BufferAppendedData, BufferAppendingData, BufferCodecsData, BufferCreatedData, BufferEOSData, BufferFlushedData, BufferFlushingData, CuesParsedData, ErrorData, FPSDropData, FPSDropLevelCappingData, FragBufferedData, FragChangedData, FragDecryptedData, FragLoadedData, FragLoadEmergencyAbortedData, FragLoadingData, FragParsedData, FragParsingInitSegmentData, FragParsingMetadataData, FragParsingUserdataData, InitPTSFoundData, InterstitialAssetEndedData, InterstitialAssetErrorData, InterstitialAssetPlayerCreatedData, InterstitialAssetStartedData, InterstitialEndedData, InterstitialsBufferedToBoundaryData, InterstitialsPrimaryResumed, InterstitialStartedData, InterstitialsUpdatedData, KeyLoadedData, KeyLoadingData, LevelLoadedData, LevelLoadingData, LevelPTSUpdatedData, LevelsUpdatedData, LevelSwitchedData, LevelSwitchingData, LevelUpdatedData, LiveBackBufferData, ManifestLoadedData, ManifestLoadingData, ManifestParsedData, MaxAutoLevelUpdatedData, MediaAttachedData, MediaAttachingData, MediaDetachedData, MediaDetachingData, MediaEndedData, NonNativeTextTracksData, SteeringManifestLoadedData, SubtitleFragProcessedData, SubtitleTrackLoadedData, SubtitleTracksUpdatedData, SubtitleTrackSwitchData, SubtitleTrackUpdatedData, TrackLoadingData } from './types/events';
export declare enum Events {
    MEDIA_ATTACHING = "hlsMediaAttaching",
    MEDIA_ATTACHED = "hlsMediaAttached",
    MEDIA_DETACHING = "hlsMediaDetaching",
    MEDIA_DETACHED = "hlsMediaDetached",
    MEDIA_ENDED = "hlsMediaEnded",
    BUFFER_RESET = "hlsBufferReset",
    BUFFER_CODECS = "hlsBufferCodecs",
    BUFFER_CREATED = "hlsBufferCreated",
    BUFFER_APPENDING = "hlsBufferAppending",
    BUFFER_APPENDED = "hlsBufferAppended",
    BUFFER_EOS = "hlsBufferEos",
    BUFFERED_TO_END = "hlsBufferedToEnd",
    BUFFER_FLUSHING = "hlsBufferFlushing",
    BUFFER_FLUSHED = "hlsBufferFlushed",
    MANIFEST_LOADING = "hlsManifestLoading",
    MANIFEST_LOADED = "hlsManifestLoaded",
    MANIFEST_PARSED = "hlsManifestParsed",
    LEVEL_SWITCHING = "hlsLevelSwitching",
    LEVEL_SWITCHED = "hlsLevelSwitched",
    LEVEL_LOADING = "hlsLevelLoading",
    LEVEL_LOADED = "hlsLevelLoaded",
    LEVEL_UPDATED = "hlsLevelUpdated",
    LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated",
    LEVELS_UPDATED = "hlsLevelsUpdated",
    AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated",
    AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching",
    AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched",
    AUDIO_TRACK_LOADING = "hlsAudioTrackLoading",
    AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded",
    AUDIO_TRACK_UPDATED = "hlsAudioTrackUpdated",
    SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated",
    SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared",
    SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch",
    SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading",
    SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded",
    SUBTITLE_TRACK_UPDATED = "hlsSubtitleTrackUpdated",
    SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed",
    CUES_PARSED = "hlsCuesParsed",
    NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound",
    INIT_PTS_FOUND = "hlsInitPtsFound",
    FRAG_LOADING = "hlsFragLoading",
    FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted",
    FRAG_LOADED = "hlsFragLoaded",
    FRAG_DECRYPTED = "hlsFragDecrypted",
    FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment",
    FRAG_PARSING_USERDATA = "hlsFragParsingUserdata",
    FRAG_PARSING_METADATA = "hlsFragParsingMetadata",
    FRAG_PARSED = "hlsFragParsed",
    FRAG_BUFFERED = "hlsFragBuffered",
    FRAG_CHANGED = "hlsFragChanged",
    FPS_DROP = "hlsFpsDrop",
    FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping",
    MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated",
    ERROR = "hlsError",
    DESTROYING = "hlsDestroying",
    KEY_LOADING = "hlsKeyLoading",
    KEY_LOADED = "hlsKeyLoaded",
    LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached",
    BACK_BUFFER_REACHED = "hlsBackBufferReached",
    STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded",
    ASSET_LIST_LOADING = "hlsAssetListLoading",
    ASSET_LIST_LOADED = "hlsAssetListLoaded",
    INTERSTITIALS_UPDATED = "hlsInterstitialsUpdated",
    INTERSTITIALS_BUFFERED_TO_BOUNDARY = "hlsInterstitialsBufferedToBoundary",
    INTERSTITIAL_ASSET_PLAYER_CREATED = "hlsInterstitialAssetPlayerCreated",
    INTERSTITIAL_STARTED = "hlsInterstitialStarted",
    INTERSTITIAL_ASSET_STARTED = "hlsInterstitialAssetStarted",
    INTERSTITIAL_ASSET_ENDED = "hlsInterstitialAssetEnded",
    INTERSTITIAL_ASSET_ERROR = "hlsInterstitialAssetError",
    INTERSTITIAL_ENDED = "hlsInterstitialEnded",
    INTERSTITIALS_PRIMARY_RESUMED = "hlsInterstitialsPrimaryResumed",
    PLAYOUT_LIMIT_REACHED = "hlsPlayoutLimitReached"
}
/**
 * Defines each Event type and payload by Event name. Used in {@link hls.js#HlsEventEmitter} to strongly type the event listener API.
 */
export interface HlsListeners {
    [Events.MEDIA_ATTACHING]: (event: Events.MEDIA_ATTACHING, data: MediaAttachingData) => void;
    [Events.MEDIA_ATTACHED]: (event: Events.MEDIA_ATTACHED, data: MediaAttachedData) => void;
    [Events.MEDIA_DETACHING]: (event: Events.MEDIA_DETACHING, data: MediaDetachingData) => void;
    [Events.MEDIA_DETACHED]: (event: Events.MEDIA_DETACHED, data: MediaDetachedData) => void;
    [Events.MEDIA_ENDED]: (event: Events.MEDIA_ENDED, data: MediaEndedData) => void;
    [Events.BUFFER_RESET]: (event: Events.BUFFER_RESET) => void;
    [Events.BUFFER_CODECS]: (event: Events.BUFFER_CODECS, data: BufferCodecsData) => void;
    [Events.BUFFER_CREATED]: (event: Events.BUFFER_CREATED, data: BufferCreatedData) => void;
    [Events.BUFFER_APPENDING]: (event: Events.BUFFER_APPENDING, data: BufferAppendingData) => void;
    [Events.BUFFER_APPENDED]: (event: Events.BUFFER_APPENDED, data: BufferAppendedData) => void;
    [Events.BUFFER_EOS]: (event: Events.BUFFER_EOS, data: BufferEOSData) => void;
    [Events.BUFFERED_TO_END]: (event: Events.BUFFERED_TO_END) => void;
    [Events.BUFFER_FLUSHING]: (event: Events.BUFFER_FLUSHING, data: BufferFlushingData) => void;
    [Events.BUFFER_FLUSHED]: (event: Events.BUFFER_FLUSHED, data: BufferFlushedData) => void;
    [Events.MANIFEST_LOADING]: (event: Events.MANIFEST_LOADING, data: ManifestLoadingData) => void;
    [Events.MANIFEST_LOADED]: (event: Events.MANIFEST_LOADED, data: ManifestLoadedData) => void;
    [Events.MANIFEST_PARSED]: (event: Events.MANIFEST_PARSED, data: ManifestParsedData) => void;
    [Events.LEVEL_SWITCHING]: (event: Events.LEVEL_SWITCHING, data: LevelSwitchingData) => void;
    [Events.LEVEL_SWITCHED]: (event: Events.LEVEL_SWITCHED, data: LevelSwitchedData) => void;
    [Events.LEVEL_LOADING]: (event: Events.LEVEL_LOADING, data: LevelLoadingData) => void;
    [Events.LEVEL_LOADED]: (event: Events.LEVEL_LOADED, data: LevelLoadedData) => void;
    [Events.LEVEL_UPDATED]: (event: Events.LEVEL_UPDATED, data: LevelUpdatedData) => void;
    [Events.LEVEL_PTS_UPDATED]: (event: Events.LEVEL_PTS_UPDATED, data: LevelPTSUpdatedData) => void;
    [Events.LEVELS_UPDATED]: (event: Events.LEVELS_UPDATED, data: LevelsUpdatedData) => void;
    [Events.AUDIO_TRACKS_UPDATED]: (event: Events.AUDIO_TRACKS_UPDATED, data: AudioTracksUpdatedData) => void;
    [Events.AUDIO_TRACK_SWITCHING]: (event: Events.AUDIO_TRACK_SWITCHING, data: AudioTrackSwitchingData) => void;
    [Events.AUDIO_TRACK_SWITCHED]: (event: Events.AUDIO_TRACK_SWITCHED, data: AudioTrackSwitchedData) => void;
    [Events.AUDIO_TRACK_LOADING]: (event: Events.AUDIO_TRACK_LOADING, data: TrackLoadingData) => void;
    [Events.AUDIO_TRACK_LOADED]: (event: Events.AUDIO_TRACK_LOADED, data: AudioTrackLoadedData) => void;
    [Events.AUDIO_TRACK_UPDATED]: (event: Events.AUDIO_TRACK_UPDATED, data: AudioTrackUpdatedData) => void;
    [Events.SUBTITLE_TRACKS_UPDATED]: (event: Events.SUBTITLE_TRACKS_UPDATED, data: SubtitleTracksUpdatedData) => void;
    [Events.SUBTITLE_TRACKS_CLEARED]: (event: Events.SUBTITLE_TRACKS_CLEARED) => void;
    [Events.SUBTITLE_TRACK_SWITCH]: (event: Events.SUBTITLE_TRACK_SWITCH, data: SubtitleTrackSwitchData) => void;
    [Events.SUBTITLE_TRACK_LOADING]: (event: Events.SUBTITLE_TRACK_LOADING, data: TrackLoadingData) => void;
    [Events.SUBTITLE_TRACK_LOADED]: (event: Events.SUBTITLE_TRACK_LOADED, data: SubtitleTrackLoadedData) => void;
    [Events.SUBTITLE_TRACK_UPDATED]: (event: Events.SUBTITLE_TRACK_UPDATED, data: SubtitleTrackUpdatedData) => void;
    [Events.SUBTITLE_FRAG_PROCESSED]: (event: Events.SUBTITLE_FRAG_PROCESSED, data: SubtitleFragProcessedData) => void;
    [Events.CUES_PARSED]: (event: Events.CUES_PARSED, data: CuesParsedData) => void;
    [Events.NON_NATIVE_TEXT_TRACKS_FOUND]: (event: Events.NON_NATIVE_TEXT_TRACKS_FOUND, data: NonNativeTextTracksData) => void;
    [Events.INIT_PTS_FOUND]: (event: Events.INIT_PTS_FOUND, data: InitPTSFoundData) => void;
    [Events.FRAG_LOADING]: (event: Events.FRAG_LOADING, data: FragLoadingData) => void;
    [Events.FRAG_LOAD_EMERGENCY_ABORTED]: (event: Events.FRAG_LOAD_EMERGENCY_ABORTED, data: FragLoadEmergencyAbortedData) => void;
    [Events.FRAG_LOADED]: (event: Events.FRAG_LOADED, data: FragLoadedData) => void;
    [Events.FRAG_DECRYPTED]: (event: Events.FRAG_DECRYPTED, data: FragDecryptedData) => void;
    [Events.FRAG_PARSING_INIT_SEGMENT]: (event: Events.FRAG_PARSING_INIT_SEGMENT, data: FragParsingInitSegmentData) => void;
    [Events.FRAG_PARSING_USERDATA]: (event: Events.FRAG_PARSING_USERDATA, data: FragParsingUserdataData) => void;
    [Events.FRAG_PARSING_METADATA]: (event: Events.FRAG_PARSING_METADATA, data: FragParsingMetadataData) => void;
    [Events.FRAG_PARSED]: (event: Events.FRAG_PARSED, data: FragParsedData) => void;
    [Events.FRAG_BUFFERED]: (event: Events.FRAG_BUFFERED, data: FragBufferedData) => void;
    [Events.FRAG_CHANGED]: (event: Events.FRAG_CHANGED, data: FragChangedData) => void;
    [Events.FPS_DROP]: (event: Events.FPS_DROP, data: FPSDropData) => void;
    [Events.FPS_DROP_LEVEL_CAPPING]: (event: Events.FPS_DROP_LEVEL_CAPPING, data: FPSDropLevelCappingData) => void;
    [Events.MAX_AUTO_LEVEL_UPDATED]: (event: Events.MAX_AUTO_LEVEL_UPDATED, data: MaxAutoLevelUpdatedData) => void;
    [Events.ERROR]: (event: Events.ERROR, data: ErrorData) => void;
    [Events.DESTROYING]: (event: Events.DESTROYING) => void;
    [Events.KEY_LOADING]: (event: Events.KEY_LOADING, data: KeyLoadingData) => void;
    [Events.KEY_LOADED]: (event: Events.KEY_LOADED, data: KeyLoadedData) => void;
    [Events.LIVE_BACK_BUFFER_REACHED]: (event: Events.LIVE_BACK_BUFFER_REACHED, data: LiveBackBufferData) => void;
    [Events.BACK_BUFFER_REACHED]: (event: Events.BACK_BUFFER_REACHED, data: BackBufferData) => void;
    [Events.STEERING_MANIFEST_LOADED]: (event: Events.STEERING_MANIFEST_LOADED, data: SteeringManifestLoadedData) => void;
    [Events.ASSET_LIST_LOADING]: (event: Events.ASSET_LIST_LOADING, data: AssetListLoadingData) => void;
    [Events.ASSET_LIST_LOADED]: (event: Events.ASSET_LIST_LOADED, data: AssetListLoadedData) => void;
    [Events.INTERSTITIALS_UPDATED]: (event: Events.INTERSTITIALS_UPDATED, data: InterstitialsUpdatedData) => void;
    [Events.INTERSTITIALS_BUFFERED_TO_BOUNDARY]: (event: Events.INTERSTITIALS_BUFFERED_TO_BOUNDARY, data: InterstitialsBufferedToBoundaryData) => void;
    [Events.INTERSTITIAL_ASSET_PLAYER_CREATED]: (event: Events.INTERSTITIAL_ASSET_PLAYER_CREATED, data: InterstitialAssetPlayerCreatedData) => void;
    [Events.INTERSTITIAL_STARTED]: (event: Events.INTERSTITIAL_STARTED, data: InterstitialStartedData) => void;
    [Events.INTERSTITIAL_ASSET_STARTED]: (event: Events.INTERSTITIAL_ASSET_STARTED, data: InterstitialAssetStartedData) => void;
    [Events.INTERSTITIAL_ASSET_ENDED]: (event: Events.INTERSTITIAL_ASSET_ENDED, data: InterstitialAssetEndedData) => void;
    [Events.INTERSTITIAL_ASSET_ERROR]: (event: Events.INTERSTITIAL_ASSET_ERROR, data: InterstitialAssetErrorData) => void;
    [Events.INTERSTITIAL_ENDED]: (event: Events.INTERSTITIAL_ENDED, data: InterstitialEndedData) => void;
    [Events.INTERSTITIALS_PRIMARY_RESUMED]: (event: Events.INTERSTITIALS_PRIMARY_RESUMED, data: InterstitialsPrimaryResumed) => void;
    [Events.PLAYOUT_LIMIT_REACHED]: (event: Events.PLAYOUT_LIMIT_REACHED, data: {}) => void;
}
export interface HlsEventEmitter {
    on<E extends keyof HlsListeners, Context = undefined>(event: E, listener: HlsListeners[E], context?: Context): void;
    once<E extends keyof HlsListeners, Context = undefined>(event: E, listener: HlsListeners[E], context?: Context): void;
    removeAllListeners<E extends keyof HlsListeners>(event?: E): void;
    off<E extends keyof HlsListeners, Context = undefined>(event: E, listener?: HlsListeners[E], context?: Context, once?: boolean): void;
    listeners<E extends keyof HlsListeners>(event: E): HlsListeners[E][];
    emit<E extends keyof HlsListeners>(event: E, name: E, eventObject: Parameters<HlsListeners[E]>[1]): boolean;
    listenerCount<E extends keyof HlsListeners>(event: E): number;
}
//# sourceMappingURL=events.d.ts.map