/** @typedef {ReturnType<typeof defaultDocsifyConfig>} DocsifyConfig */
/**
 * @param {import('./Docsify.js').Docsify} vm
 * @param {Partial<DocsifyConfig>} config
 * @returns {DocsifyConfig}
 */
export default function _default(vm: import("./Docsify.js").Docsify, config?: Partial<DocsifyConfig>): DocsifyConfig;
export type DocsifyConfig = ReturnType<typeof defaultDocsifyConfig>;
export type TODO = any;
export type Plugin = (hooks: Hooks, vm: Docsify) => void;
/**
 * - Given a route, provides the markdown to render for that route.
 */
export type RouteHandler = (((route: string, matched: RegExpMatchArray) => string) | ((route: string, matched: RegExpMatchArray, next: (markdown?: string) => void) => void));
export type DocsifyConfigOld = {
    subMaxLevel: number;
    themeColor: string;
    topMargin: number;
};
declare function defaultDocsifyConfig(): {
    alias: Record<string, string>;
    auto2top: boolean;
    autoHeader: boolean;
    basePath: string;
    catchPluginErrors: boolean;
    cornerExternalLinkTarget: "_blank" | "_self" | "_parent" | "_top" | "_unfencedTop";
    coverpage: boolean | string;
    el: string;
    executeScript: null | boolean;
    ext: string;
    externalLinkRel: "noopener" | string;
    externalLinkTarget: "_blank" | "_self" | "_parent" | "_top" | "_unfencedTop";
    fallbackLanguages: null | string[];
    fallbackDefaultLanguage: string;
    formatUpdated: string | ((updatedAt: string) => string);
    pageTitleFormatter: null | ((name: string) => string);
    /** For the frontmatter plugin. */
    frontMatter: Record<string, TODO> | null;
    hideSidebar: boolean;
    homepage: string;
    keyBindings: false | {
        [commandName: string]: {
            bindings: string[];
            callback: Function;
        };
    };
    loadNavbar: null | boolean | string;
    loadSidebar: null | boolean | string;
    logo: boolean;
    markdown: null;
    maxLevel: number;
    mergeNavbar: boolean;
    name: boolean | string;
    nameLink: string;
    nativeEmoji: boolean;
    noCompileLinks: string[];
    noEmoji: boolean;
    notFoundPage: boolean | string | Record<string, string>;
    onlyCover: boolean;
    plugins: Plugin[];
    relativePath: boolean;
    repo: string;
    requestHeaders: Record<string, string>;
    routerMode: string;
    routes: Record<string, string | RouteHandler>;
    skipLink: false | string | Record<string, string>;
    subMaxLevel: number;
    vueComponents: Record<string, TODO>;
    vueGlobalOptions: Record<string, TODO>;
    vueMounts: Record<string, TODO>;
    /** @deprecated */
    themeColor: string;
    __themeColor: string;
    /** @deprecated */
    topMargin: number;
    __topMargin: number;
};
import type { Hooks } from './init/lifecycle.js';
import type { Docsify } from './Docsify.js';
export {};
//# sourceMappingURL=config.d.ts.map