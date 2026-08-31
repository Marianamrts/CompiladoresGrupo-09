/** @typedef {import('../Docsify.js').Constructor} Constructor */
/** @typedef {Record<string, string | VirtualRouteHandler>} VirtualRoutesMap */
/** @typedef {(route: string, match: RegExpMatchArray | null, next?: (content: string | void | Promise<string | void>) => void) => string | void | Promise<string | void> } VirtualRouteHandler */
/**
 * Allows users/plugins to introduce dynamically created content into their docsify
 * websites. https://github.com/docsifyjs/docsify/issues/1737
 *
 * For instance:
 *
 * ```js
 * window.$docsify = {
 *   routes: {
 *     '/items/(.+)': function (route, matched) {
 *       return `
 *         # Item Page: ${matched[1]}
 *         This is an item
 *       `;
 *     }
 *   }
 * }
 * ```
 *
 * @template {Constructor} T
 * @param {T} Base - The class to extend
 */
export function VirtualRoutes<T extends Constructor>(Base: T): {
    new (...args: any[]): {
        [x: string]: any;
        /**
         * Gets the Routes object from the configuration
         * @returns {VirtualRoutesMap}
         */
        routes(): VirtualRoutesMap;
        /**
         * Attempts to match the given path with a virtual route.
         * @param {string} path the path of the route to match
         * @returns {PromiseLike<string | null>} resolves to string if route was matched, otherwise null
         */
        matchVirtualRoute(path: string): PromiseLike<string | null>;
    };
} & T;
export type Constructor = import("../Docsify.js").Constructor;
export type VirtualRoutesMap = Record<string, string | VirtualRouteHandler>;
export type VirtualRouteHandler = (route: string, match: RegExpMatchArray | null, next?: (content: string | void | Promise<string | void>) => void) => string | void | Promise<string | void>;
//# sourceMappingURL=index.d.ts.map