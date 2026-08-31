/** @typedef {import('../Docsify.js').Constructor} Constructor */
/** @typedef {{ _isVue?: boolean, $destroy?: () => void }} Vue2Instance */
/** @typedef {{ __vue__?: Vue2Instance }} WithVue2 */
/** @typedef {{ __v_skip?: boolean }} VNode3 */
/** @typedef {{ _vnode?: VNode3, __vue_app__?: { unmount: () => void } }} WithVue3 */
/** @typedef {Element & WithVue2 & WithVue3} VueMountElement */
/**
 * @template {!Constructor} T
 * @param {T} Base - The class to extend
 */
export function Render<T extends Constructor>(Base: T): {
    new (...args: any[]): {
        [x: string]: any;
        /** @type {Compiler | undefined} */
        compiler: Compiler | undefined;
        "__#private@#vueGlobalData": any;
        "__#private@#addTextAsTitleAttribute"(cssSelector: any): void;
        "__#private@#executeScript"(): false | undefined;
        "__#private@#formatUpdated"(html: any, updated: any, fn: any): any;
        "__#private@#renderMain"(html: any): void;
        "__#private@#renderNameLink"(vm: any): void;
        "__#private@#renderSkipLink"(vm: any): void;
        _renderSidebar(text: any): null | undefined;
        /**
         * @param {HTMLElement | null} activeEl
         */
        _bindEventOnRendered(activeEl: HTMLElement | null): void;
        _renderNav(text: any): void;
        _renderMain(text: any, opt: {} | undefined, next: any): void;
        result: any;
        _renderCover(text: any, coverOnly: any): void;
        _updateRender(): void;
        initRender(): void;
        rendered: boolean | undefined;
    };
} & T;
export type Constructor = import("../Docsify.js").Constructor;
export type Vue2Instance = {
    _isVue?: boolean;
    $destroy?: () => void;
};
export type WithVue2 = {
    __vue__?: Vue2Instance;
};
export type VNode3 = {
    __v_skip?: boolean;
};
export type WithVue3 = {
    _vnode?: VNode3;
    __vue_app__?: {
        unmount: () => void;
    };
};
export type VueMountElement = Element & WithVue2 & WithVue3;
import { Compiler } from './compiler.js';
//# sourceMappingURL=index.d.ts.map