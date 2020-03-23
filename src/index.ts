export interface OkHiAuth {
  clientKey: string;
  branchId: string;
}

export interface OkHiAppBarConfiguration {
  visible?: boolean;
}

export interface OkHiConfig {
  streetView?: boolean;
  appBar?: OkHiAppBarConfiguration;
}

export const OkHiMode = {
  SANDBOX: 'sandbox',
  PROD: 'prod',
  DEV: 'dev',
};

export const OkHiPlatformType = {
  WEB: 'web',
  ANDROID: 'android',
  IOS: 'ios',
  HYBRID: 'hybrid',
  DESKTOP: 'desktop',
};

export const OkHiIntergrationType = {
  OKHI: 'okhi',
  EXTERNAL: 'external',
};

export interface OkHiAppContext {
  app: { name: string; version: string; build: number };
  mode: string;
  platform: { name: string };
  developer?: { name: string };
}

export interface OkHiError {
  code:
    | 'invalid_auth_token'
    | 'fatal_exit'
    | 'invalid_response'
    | 'network_request_failed'
    | 'invalid_phone';
  message: string;
}

export interface OkHiLocation {
  id?: string;
  placeId?: string;
  plusCode?: string;
  propertyName?: string;
  streetName?: string;
  title?: string;
  subtitle?: string;
  directions?: string;
  otherInformation?: string;
  url?: string;
  createdAt?: string;
  photo?: string;
  geoPoint?: {
    lat: number;
    lon: number;
  };
  streetView?: {
    panoId: string;
    url: string;
  };
}

export interface OkHiTheme {
  colors?: {
    primary: string;
  };
  appBar?: {
    backgroundColor?: string;
    logo?: string;
  };
}

export interface OkHiUser {
  id?: string;
  firstName?: string;
  lastName?: string;
  phone: string;
}
