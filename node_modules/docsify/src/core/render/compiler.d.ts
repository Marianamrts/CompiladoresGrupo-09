export class Compiler {
    constructor(config: any, router: any);
    config: any;
    router: any;
    cacheTree: {};
    toc: any[];
    blockquoteDepth: number;
    cacheTOC: {};
    linkTarget: any;
    linkRel: any;
    contentBase: any;
    renderer: import("marked").Renderer<string, string>;
    _marked: any;
    compile: (text: any) => any;
    /**
     * Pulls content from file and renders inline on the page as a embedded item.
     *
     * This allows you to embed different file types on the returned
     * page.
     * The basic format is:
     * ```
     *   [filename](_media/example.md ':include')
     * ```
     *
     * @param {string}   href   The href to the file to embed in the page.
     * @param {string}   title  Title of the link used to make the embed.
     *
     * @return {any} Return value description.
     */
    compileEmbed(href: string, title: string): any;
    _matchNotCompileLink(link: any): any;
    _initRenderer(): import("marked").Renderer<string, string>;
    /**
     * Compile sidebar, it uses _sidebar.md (or specific file) or the content's headings toc to render sidebar.
     * @param {String} text Text content from the sidebar file, maybe empty
     * @param {Number} level Type of heading (h<level> tag)
     * @returns {String} Sidebar element
     */
    sidebar(text: string, level: number): string;
    /**
     * When current content redirect to a new path file, clean pre content headings toc
     */
    resetToc(): void;
    /**
     * Compile sub sidebar
     * @param {Number} level Type of heading (h<level> tag)
     * @returns {String} Sub-sidebar element
     */
    subSidebar(level: number): string;
    /**
     * Compile the text to generate HTML heading element based on the level
     * @param {*} text Text content, for now it is only from the _sidebar.md file
     * @param {*} level Type of heading (h<level> tag), for now it is always 1
     * @returns
     */
    header(text: any, level: any): string;
    /**
     * Compile cover page
     * @param {Text} text Text content
     * @returns {String} Cover page
     */
    cover(text: Text): string;
}
//# sourceMappingURL=compiler.d.ts.map