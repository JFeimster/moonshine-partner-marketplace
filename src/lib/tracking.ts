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

export const TRACKING_LABELS: Record<keyof TrackingParams, string> = {
  utm_source: "UTM Source",
  utm_medium: "UTM Medium",
  utm_campaign: "UTM Campaign",
  partner_id: "Partner ID",
  ref: "Reference",
  asset_id: "Asset ID",
};

export type RawSearchParams = Record<string, string | string[] | undefined>;
export type TrackingSource = "incoming" | "default" | "missing";

export type TrackingDisplayRow = {
  key: keyof TrackingParams;
  label: string;
  value: string;
  source: TrackingSource;
};

export type TrackingSnapshot = {
  merged: TrackingParams;
  rows: TrackingDisplayRow[];
};

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

export function mergeTrackingParams(defaults: TrackingParams, incoming: TrackingParams): TrackingParams {
  return {
    ...defaults,
    ...incoming,
  };
}

export function buildTrackingSnapshot(defaults: TrackingParams, incoming: TrackingParams): TrackingSnapshot {
  const merged = mergeTrackingParams(defaults, incoming);
  const rows: TrackingDisplayRow[] = TRACKING_KEYS.map((key) => {
    const incomingValue = incoming[key];
    const defaultValue = defaults[key];
    const mergedValue = merged[key];

    let source: TrackingSource = "missing";
    if (incomingValue) {
      source = "incoming";
    } else if (defaultValue) {
      source = "default";
    }

    return {
      key,
      label: TRACKING_LABELS[key],
      value: mergedValue ?? "not set",
      source,
    };
  });

  return { merged, rows };
}
