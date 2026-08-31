/** @typedef {import('../Docsify.js').Constructor} Constructor */
/**
 * @template {!Constructor} T
 * @param {T} Base - The class to extend
 */
export function Router<T extends Constructor>(Base: T): {
    new (...args: any[]): {
        [x: string]: any;
        /** @type {Partial<Route>} */
        route: Partial<Route>;
        updateRender(): void;
        initRouter(): void;
        router: HashHistory | HTML5History | undefined;
    };
} & T;
export type Constructor = import("../Docsify.js").Constructor;
export type Route = {
    path: string;
    query: Record<string, string>;
    file: string;
    response: {};
};
import { HashHistory } from './history/hash.js';
import { HTML5History } from './history/html5.js';
//# sourceMappingURL=index.d.ts.map