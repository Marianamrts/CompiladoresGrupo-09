export class History {
    constructor(config: any);
    config: any;
    getBasePath(): any;
    /**
     * @param {string} path
     * @param {boolean} isRelative
     */
    getFile(path?: string, isRelative?: boolean): string;
    onchange(cb?: typeof noop): void;
    /**
     * @return {string}
     */
    getCurrentPath(): string;
    normalize(): void;
    /**
     * @param {string} path
     * @return {import('../index.js').Route} { path, query, file, response }
     */
    parse(path: string): import("../index.js").Route;
    toURL(path: any, params: any, currentRoute: any): any;
    #private;
}
import { noop } from '../../util/core.js';
//# sourceMappingURL=base.d.ts.map