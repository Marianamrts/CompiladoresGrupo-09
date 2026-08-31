/** @typedef {(value: any) => void} CB */
/** @typedef {(cb: CB) => void} OnNext */
/** @typedef {(value: any) => void} NextFunction */
/**
 * Creates a pair of a function and an event emitter.
 * When the function is called, the event emitter calls the given callback with the value that was passed to the function.
 * @returns {[NextFunction, OnNext]}
 */
export function createNextFunction(): [NextFunction, OnNext];
export type CB = (value: any) => void;
export type OnNext = (cb: CB) => void;
export type NextFunction = (value: any) => void;
//# sourceMappingURL=next.d.ts.map