/** @typedef {import('../Docsify.js').Constructor} Constructor */
/**
 * @template {!Constructor} T
 * @param {T} Base - The class to extend
 */
export function Fetch<T extends Constructor>(Base: T): {
    new (...args: any[]): {
        [x: string]: any;
        /**
         * @param {any} path
         * @param {any} qs
         * @param {any} file
         * @param {any} next
         * @param {any} vm
         * @param {any} [first]
         */
        "__#private@#loadNested"(path: any, qs: any, file: any, next: any, vm: any, first?: any): void;
        /** @type {any} */
        "__#private@#last": any;
        "__#private@#abort": () => any;
        /**
         * @param {any} url
         * @param {any} requestHeaders
         */
        "__#private@#request": (url: any, requestHeaders: any) => any;
        /**
         * @param {any} path
         * @param {any} config
         */
        "__#private@#get404Path": (path: any, config: any) => any;
        /**
         * @param {any} path
         * @param {any} qs
         * @param {any} loadSidebar
         * @param {any} cb
         */
        _loadSideAndNav(path: any, qs: any, loadSidebar: any, cb: any): () => void;
        _fetch(cb?: typeof noop): void;
        isRemoteUrl: boolean | undefined;
        isHTML: boolean | undefined;
        _fetchCover(): any;
        coverIsHTML: boolean | undefined;
        $fetch(cb?: typeof noop, onNavigate?: any): void;
        /**
         * @param {any} path
         * @param {any} qs
         * @param {any} [cb]
         */
        _fetchFallbackPage(path: any, qs: any, cb?: any): boolean;
        /**
         * Load the 404 page
         * @param {String} path URL to be loaded
         * @param {*} qs TODO: define
         * @param {Function} cb Callback
         * @returns {Boolean} True if the requested page is not found
         */
        _fetch404(path: string, qs: any, cb?: Function): boolean;
        initFetch(): void;
    };
} & T;
export type Constructor = import("../Docsify.js").Constructor;
import { noop } from '../util/core.js';
//# sourceMappingURL=index.d.ts.map