/**
 * Get Node
 * @param  {String|Element} el A DOM element
 * @param  {Boolean} noCache Flag to use or not use the cache
 * @return {Element} The found node element
 */
export function getNode(el: string | Element, noCache?: boolean): Element;
/**
 *
 * @param {*} el the target element or the selector
 * @param {*} content the content to be rendered as HTML
 * @param {*} replace To replace the content (true) or insert instead (false) , default is false
 */
/**
 * @param {string|Element} el
 * @param {string} content
 * @param {boolean} [replace]
 */
export function setHTML(el: string | Element, content: string, replace?: boolean): void;
/**
 * Find the first matching element
 * @param {string|Element} el The root element on which to perform the query
 * from, or a query string to query from `document`.
 * @param {string} [query] The query string to use on `el` if `el` is an
 * element.
 * @returns {Element} The found DOM element
 * @example
 * find('nav') => document.querySelector('nav')
 * find(nav, 'a') => nav.querySelector('a')
 */
export function find(el: string | Element, query?: string): Element;
/**
 * Find all matching elements
 * @param {string|Element} el The root element on which to perform the query
 * from, or a query string to query from `document`.
 * @param {string} [query] The query string to use on `el` if `el` is an
 * element.
 * @returns {Array<Element>} An array of DOM elements
 * @example
 * findAll('a') => Array.from(document.querySelectorAll('a'))
 * findAll(nav, 'a') => Array.from(nav.querySelectorAll('a'))
 */
export function findAll(el: string | Element, query?: string): Array<Element>;
/**
 * @param {string} node
 * @param {string} [tpl]
 * @returns {HTMLElement}
 */
export function create(node: string, tpl?: string): HTMLElement;
/**
 * @param {Element} target
 * @param {Element} el
 */
export function appendTo(target: Element, el: Element): Element;
/**
 * @param {Element} target
 * @param {Element} el
 */
export function before(target: Element, el: Element): Element;
/**
 * @param {any} el
 * @param {any} type
 * @param {any} [handler]
 */
export function on(el: any, type: any, handler?: any): void;
/**
 * @param {any} el
 * @param {any} type
 * @param {any} [handler]
 */
export function off(el: any, type: any, handler?: any): void;
/**
 * @param {string} content
 */
export function style(content: string): void;
/**
 * Fork https://github.com/bendrucker/document-ready/blob/master/index.js
 * @param {(event: Event) => void} callback The callbacack to be called when the page is loaded
 * @returns {number|void} If the page is already loaded returns the result of the setTimeout callback,
 *  otherwise it only attaches the callback to the DOMContentLoaded event
 */
export function documentReady(callback: (event: Event) => void, doc?: Document): number | void;
export const $: Document;
export const body: HTMLElement;
export const head: HTMLHeadElement;
//# sourceMappingURL=dom.d.ts.map