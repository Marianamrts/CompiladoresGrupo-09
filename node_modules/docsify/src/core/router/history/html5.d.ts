export class HTML5History extends History {
    mode: string;
    /** @param {(params: any) => void} [cb] */
    onchange(cb?: (params: any) => void): void;
    /**
     * Parse the url
     * @param {string} [path=location.href] URL to be parsed
     * @return {import('../index.js').Route} { path, query, file, response }
     */
    parse(path?: string): import("../index.js").Route;
}
import { History } from './base.js';
//# sourceMappingURL=html5.d.ts.map