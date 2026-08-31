/** @typedef {import('../Docsify.js').Constructor} Constructor */
/**
 * @template {!Constructor} T
 * @param {T} Base - The class to extend
 */
export function Events<T extends Constructor>(Base: T): {
    new (...args: any[]): {
        [x: string]: any;
        "__#private@#intersectionObserver": IntersectionObserver;
        "__#private@#isScrolling": boolean;
        "__#private@#cancelAnchorScroll": typeof noop;
        "__#private@#title": string;
        /**
         * Initialize Docsify events
         * One-time setup of listeners, observers, and tasks.
         * @void
         */
        initEvent(): void;
        /**
         * Initialize cover observer
         * Toggles sticky behavior when cover is not in view
         * @void
         */
        "__#private@#initCover"(): void;
        /**
         * Initialize heading observer
         * Toggles sidebar active item based on top viewport edge intersection
         * @void
         */
        "__#private@#initHeadings"(): void;
        /**
         * Initialize keyboard bindings
         * @void
         */
        "__#private@#initKeyBindings"(): void;
        /**
         * Initialize sidebar event listeners
         *
         * @void
         */
        "__#private@#initSidebar"(): void;
        /**
         * Initialize sidebar show/hide toggle behavior
         *
         * @void
         */
        "__#private@#initSidebarToggle"(): void;
        /**
         * Initialize skip to content behavior
         *
         * @void
         */
        "__#private@#initSkipToContent"(): void;
        /**
         * Handle rendering UI element updates and new content
         * @void
         */
        onRender(): void;
        /**
         * Handle navigation events
         *
         * @param {undefined|"history"|"navigate"} source Type of navigation where
         * undefined is initial load, "history" is forward/back, and "navigate" is
         * user click/tap
         * @void
         */
        onNavigate(source: undefined | "history" | "navigate"): void;
        /**
         * Set focus on the main content area: current route ID, first heading, or
         * the main content container
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
         * @param {Object} options HTMLElement focus() method options
         * @returns HTMLElement|undefined
         * @void
         */
        "__#private@#focusContent"(options?: any): HTMLElement | null;
        /**
         * Marks the active app nav item
         */
        "__#private@#markAppNavActiveElm"(): void;
        /**
         * Marks the active sidebar item
         *
         * @param {string} [href] Matching element HREF value. If unspecified,
         * defaults to the current path (with query params)
         * @returns Element|undefined
         */
        "__#private@#markSidebarActiveElm"(href?: string): HTMLLIElement | null | undefined;
        /**
         * Marks the current page in the sidebar
         *
         * @param {string} [href] Matching sidebar element HREF value. If
         * unspecified, defaults to the current path (without query params)
         * @returns Element|undefined
         */
        "__#private@#markSidebarCurrentPage"(href?: string): HTMLLIElement | null | undefined;
        /**
         * @param {boolean} [force]
         */
        "__#private@#toggleSidebar"(force?: boolean): void;
        /**
         * Scroll an anchor target into view and keep it aligned while late-loading
         * content above the target changes the page height.
         *
         * @param {Element} headingElm Heading element to scroll to
         * @void
         */
        "__#private@#scrollToHeading"(headingElm: Element): void;
        /**
         * Monitor next scroll start/end and set #isScrolling to true/false
         * accordingly. Listeners are removed after the start/end events are fired.
         * @void
         */
        "__#private@#watchNextScroll"(): void;
    };
} & T;
export type Constructor = import("../Docsify.js").Constructor;
import { noop } from '../util/core.js';
//# sourceMappingURL=index.d.ts.map