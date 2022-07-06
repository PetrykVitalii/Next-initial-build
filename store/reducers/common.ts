export enum RequestState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

export enum RequestPurpose {
  NONE = '',
  STATS = 'stats',
}

export interface RequestOptions {
  silent?: boolean;
  delay?: number;
  isCancellable?: boolean;
  isToast?: boolean;
  requestId?: string;
  purpose?: RequestPurpose;
}
