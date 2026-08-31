export { prism };
export { marked } from "marked";
export * as util from "./util/index.js";
export * as dom from "./util/dom.js";
export { Compiler } from "./render/compiler.js";
export { slugify } from "./render/slugify.js";
export { get } from "./util/ajax.js";
declare const Docsify_base: {
    new (...args: any[]): {
        [x: string]: any;
        "__#private@#loadNested"(path: any, qs: any, file: any, next: any, vm: any, first?: any): void;
        "__#private@#last": any;
        "__#private@#abort": () => any;
        "__#private@#request": (url: any, requestHeaders: any) => any;
        "__#private@#get404Path": (path: any, config: any) => any;
        _loadSideAndNav(path: any, qs: any, loadSidebar: any, cb: any): () => void;
        _fetch(cb?: typeof import("./util/core.js").noop): void;
        isRemoteUrl: boolean | undefined;
        isHTML: boolean | undefined;
        _fetchCover(): any;
        coverIsHTML: boolean | undefined;
        $fetch(cb?: typeof import("./util/core.js").noop, onNavigate?: any): void;
        _fetchFallbackPage(path: any, qs: any, cb?: any): boolean;
        _fetch404(path: string, qs: any, cb?: Function): boolean;
        initFetch(): void;
    };
} & {
    new (...args: any[]): {
        [x: string]: any;
        "__#private@#intersectionObserver": IntersectionObserver;
        "__#private@#isScrolling": boolean;
        "__#private@#cancelAnchorScroll": typeof import("./util/core.js").noop;
        "__#private@#title": string;
        initEvent(): void;
        "__#private@#initCover"(): void;
        "__#private@#initHeadings"(): void;
        "__#private@#initKeyBindings"(): void;
        "__#private@#initSidebar"(): void;
        "__#private@#initSidebarToggle"(): void;
        "__#private@#initSkipToContent"(): void;
        onRender(): void;
        onNavigate(source: undefined | "history" | "navigate"): void;
        "__#private@#focusContent"(options?: any): HTMLElement | null;
        "__#private@#markAppNavActiveElm"(): void;
        "__#private@#markSidebarActiveElm"(href?: string): HTMLLIElement | null | undefined;
        "__#private@#markSidebarCurrentPage"(href?: string): HTMLLIElement | null | undefined;
        "__#private@#toggleSidebar"(force?: boolean): void;
        "__#private@#scrollToHeading"(headingElm: Element): void;
        "__#private@#watchNextScroll"(): void;
    };
} & {
    new (...args: any[]): {
        [x: string]: any;
        compiler: import("./render/compiler.js").Compiler | undefined;
        "__#private@#vueGlobalData": any;
        "__#private@#addTextAsTitleAttribute"(cssSelector: any): void;
        "__#private@#executeScript"(): false | undefined;
        "__#private@#formatUpdated"(html: any, updated: any, fn: any): any;
        "__#private@#renderMain"(html: any): void;
        "__#private@#renderNameLink"(vm: any): void;
        "__#private@#renderSkipLink"(vm: any): void;
        _renderSidebar(text: any): null | undefined;
        _bindEventOnRendered(activeEl: HTMLElement | null): void;
        _renderNav(text: any): void;
        _renderMain(text: any, opt: {} | undefined, next: any): void;
        result: any;
        _renderCover(text: any, coverOnly: any): void;
        _updateRender(): void;
        initRender(): void;
        rendered: boolean | undefined;
    };
} & {
    new (...args: any[]): {
        [x: string]: any;
        routes(): Record<string, string | import("./virtual-routes/index.js").VirtualRouteHandler>;
        matchVirtualRoute(path: string): PromiseLike<string | null>;
    };
} & {
    new (...args: any[]): {
        [x: string]: any;
        route: Partial<import("./router/index.js").Route>;
        updateRender(): void;
        initRouter(): void;
        router: import("./router/history/hash.js").HashHistory | import("./router/history/html5.js").HTML5History | undefined;
    };
} & {
    new (...args: any[]): {
        [x: string]: any;
        _hooks: Record<string, Function[]>;
        _lifecycle: import("./init/lifecycle.js").Hooks;
        initLifecycle(): void;
        callHook(hookName: string, data?: any, next?: Function): void;
    };
} & ObjectConstructor;
/** @typedef {new (...args: any[]) => any} Constructor */
/** @typedef {import('./config.js').DocsifyConfig} DocsifyConfig */
export class Docsify extends Docsify_base {
    /** @param {Partial<DocsifyConfig>} conf */
    constructor(conf?: Partial<DocsifyConfig>);
    /** @type {DocsifyConfig} */
    config: DocsifyConfig;
    initPlugin(): void;
}
export const version: "__VERSION__";
export type Constructor = new (...args: any[]) => any;
export type DocsifyConfig = import("./config.js").DocsifyConfig;
import prism from 'prismjs';
//# sourceMappingURL=Docsify.d.ts.map