export type TrackingParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  partner_id?: string;
  ref?: string;
  asset_id?: string;
};

export const TRACKING_KEYS: Array<keyof TrackingParams> = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "partner_id",
  "ref",
  "asset_id",
];

export type RawSearchParams = Record<string, string | string[] | undefined>;

function getFirstValue(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export function pickTrackingParams(searchParams: RawSearchParams): TrackingParams {
  const tracked: TrackingParams = {};

  for (const key of TRACKING_KEYS) {
    const value = getFirstValue(searchParams[key]);
    if (value) {
      tracked[key] = value;
    }
  }

  return tracked;
}

export function toQueryString(params: TrackingParams): string {
  const query = new URLSearchParams();

  for (const key of TRACKING_KEYS) {
    const value = params[key];
    if (value) {
      query.set(key, value);
    }
  }

  return query.toString();
}