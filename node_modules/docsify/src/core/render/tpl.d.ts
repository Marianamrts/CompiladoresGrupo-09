/**
 * Render github corner
 * @param  {Object} data URL for the View Source on GitHub link
 * @param {String} cornerExternalLinkTarget value of the target attribute of the link
 * @return {String} SVG element as string
 */
export function corner(data: any, cornerExternalLinkTarget: string): string;
/**
 * Renders main content
 * @param {Object} config Configuration object
 * @returns {String} HTML of the main content
 */
export function main(config: any): string;
/**
 * Cover Page
 * @returns {String} Cover page
 */
export function cover(): string;
/**
 * Render tree
 * @param  {Array} toc Array of TOC section links
 * @param  {String} tpl TPL list
 * @return {String} Rendered tree
 */
export function tree(toc: any[], tpl?: string): string;
/**
 * @deprecated
 */
export function helper(className: any, content: any): string;
/**
 * @deprecated
 */
export function theme(color: any): string;
//# sourceMappingURL=tpl.d.ts.map