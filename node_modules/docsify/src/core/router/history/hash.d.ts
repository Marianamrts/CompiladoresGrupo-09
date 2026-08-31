export class HashHistory extends History {
    mode: string;
    /** @param {(params: {source: any, event?: any}) => void} [cb] */
    onchange(cb?: (params: {
        source: any;
        event?: any;
    }) => void): void;
    /**
     * Parse the url
     * @param {string} path URL to be parsed
     * @return {import('../index.js').Route} { path, query, file, response }
     */
    parse(path?: string): import("../index.js").Route;
    toURL(path: any, params: any, currentRoute: any): string;
}
export type TODO = any;
import { History } from './base.js';
//# sourceMappingURL=hash.d.ts.map