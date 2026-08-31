/**
 * Create a cached version of fn that given an input string returns a
 * cached return value mapped from the string, regardless if fn is a new function every time.
 * created.
 * @param {*} fn The function call to be cached
 * @void
 */
export function cached(fn: any): (str: any) => any;
/**
 * Check if value is primitive
 * @param {*} value Checks if a value is primitive
 * @returns {value is string | number} Result of the check
 */
export function isPrimitive(value: any): value is string | number;
/**
 * Performs no operation.
 * @void
 */
export function noop(): void;
/**
 * Check if value is function
 * @param {*} obj Any javascript object
 * @returns {obj is Function} True if the passed-in value is a function
 */
export function isFn(obj: any): obj is Function;
/**
 * Check if url is external
 * @param {String} url  url
 * @returns {Boolean} True if the passed-in url is external
 */
export function isExternal(url: string): boolean;
export function hyphenate(str: any): any;
//# sourceMappingURL=core.d.ts.map