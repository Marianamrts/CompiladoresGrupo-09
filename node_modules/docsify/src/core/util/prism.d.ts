/**
 * PrismJs language dependencies required a specific order to load.
 * Try to check and print a warning message if some dependencies missing or in wrong order.
 * @param {*} lang current lang to check dependencies
 */
export default function checkLangDependenciesAllLoaded(lang: any): void;
export function sanitizeCodeLang(lang: any): {
    codeLang: string;
    prismLang: any | string;
    escapedLang: string;
};
//# sourceMappingURL=prism.d.ts.map