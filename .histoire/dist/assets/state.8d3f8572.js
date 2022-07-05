import { P as isRef, i as unref } from "./vendor.50b6fd3b.js";
const STATE_SYNC = "__histoire:state-sync";
const SANDBOX_READY = "__histoire:sandbox-ready";
const EVENT_SEND = "__histoire:event";
const PREVIEW_SETTINGS_SYNC = "__histoire:preview-settings-sync";
const isObject = (val) => val !== null && typeof val === "object";
function toRawDeep(val, seen = /* @__PURE__ */ new Set()) {
  const unwrappedValue = isRef(val) ? unref(val) : val;
  if (typeof unwrappedValue === "symbol") {
    return unwrappedValue.toString();
  }
  if (!isObject(unwrappedValue)) {
    return unwrappedValue;
  }
  if (seen.has(unwrappedValue)) {
    return Array.isArray(unwrappedValue) ? [] : {};
  }
  seen.add(unwrappedValue);
  if (Array.isArray(unwrappedValue)) {
    return unwrappedValue.map((value) => toRawDeep(value, seen));
  }
  return toRawObject(unwrappedValue, seen);
}
const toRawObject = (obj, seen = /* @__PURE__ */ new Set()) => Object.keys(obj).reduce((raw, key) => {
  raw[key] = toRawDeep(obj[key], seen);
  return raw;
}, {});
export { EVENT_SEND as E, PREVIEW_SETTINGS_SYNC as P, STATE_SYNC as S, SANDBOX_READY as a, toRawDeep as t };
