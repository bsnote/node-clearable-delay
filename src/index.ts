import { setTimeout } from "timers";

export type Resolve<T> = (value: T) => void;

export interface ClearableDelayPromise<T> extends Promise<T> {
  clear(): void;
}

/** @returns true if delay was cleared by calling clear() function */
export function clearableDelay(ms: number): ClearableDelayPromise<boolean> {
  let resolveDelay: Resolve<boolean>;
  let timeout: NodeJS.Timeout;

  const promise = new Promise<boolean>(resolve => {
    resolveDelay = resolve;
    timeout = setTimeout(resolve, ms, false);
  }) as ClearableDelayPromise<boolean>;

  promise.clear = () => {
    clearTimeout(timeout);
    promise.clear = noop;
    resolveDelay(true);
  };

  return promise;
}

// tslint:disable-next-line: no-empty
function noop() {}
