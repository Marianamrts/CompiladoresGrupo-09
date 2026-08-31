/** @typedef {import('../Docsify.js').Constructor} Constructor */
/**
 * @template {!Constructor} T
 * @param {T} Base - The class to extend
 */
export function Lifecycle<T extends Constructor>(Base: T): {
    new (...args: any[]): {
        [x: string]: any;
        /** @type {Record<string, Function[]>} */
        _hooks: Record<string, Function[]>;
        _lifecycle: Hooks;
        initLifecycle(): void;
        /**
         * @param {string} hookName
         * @param {any} [data]
         * @param {Function} [next]
         */
        callHook(hookName: string, data?: any, next?: Function): void;
    };
} & T;
export type Constructor = import("../Docsify.js").Constructor;
export type Hooks = {
    init(): void;
    mounted(): void;
    beforeEach: (((markdown: string) => string) | ((markdown: string, next: (markdown?: string) => void) => void));
    afterEach: (((html: string) => string) | ((html: string, next: (html?: string) => void) => void));
    doneEach(): void;
    ready(): void;
};
//# sourceMappingURL=lifecycle.d.ts.map