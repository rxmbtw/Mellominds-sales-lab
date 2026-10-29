"use client";
import { useCallback, useMemo, useSyncExternalStore } from "react";

const listeners = new Set<() => void>();
const mem = new Map<string, string>(); // fallback when localStorage is blocked
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => void listeners.delete(cb);
};

// `initial` must be a stable reference (module constant).
export function useLocal<T>(key: string, initial: T): [T, (v: T) => void] {
  const raw = useSyncExternalStore(
    subscribe,
    () => {
      const m = mem.get(key);
      if (m !== undefined) return m;
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    () => null,
  );
  const value = useMemo(() => {
    try {
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  }, [raw, initial]);
  const set = useCallback(
    (v: T) => {
      const s = JSON.stringify(v);
      mem.set(key, s);
      try {
        localStorage.setItem(key, s);
      } catch {}
      listeners.forEach((l) => l());
    },
    [key],
  );
  return [value, set];
}
