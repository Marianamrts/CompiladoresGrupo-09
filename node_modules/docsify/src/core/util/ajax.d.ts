/**
 * Ajax GET implementation
 * @param {string} url Resource URL
 * @param {boolean} [hasBar=false] Has progress bar
 * @param {String[]} headers Array of headers
 * @return A Promise-like response with error callback (error callback is not Promise-like)
 */
/**
 * @param {string} url
 * @param {boolean} [hasBar]
 * @param {Record<string, string>} [headers]
 */
export function get(url: string, hasBar?: boolean, headers?: Record<string, string>): {
    /**
     * @param {(text: string, opt: CacheOpt, response: ResponseStatus) => void} success
     * @param {(event: ProgressEvent<XMLHttpRequestEventTarget>, response: ResponseStatus) => void} error
     */
    then(success: (text: string, opt: CacheOpt, response: ResponseStatus) => void, error?: (event: ProgressEvent<XMLHttpRequestEventTarget>, response: ResponseStatus) => void): void;
    abort: (_: any) => false | void;
};
export type CacheOpt = {
    updatedAt: string;
};
export type CacheItem = {
    content: string;
    opt: CacheOpt;
};
export type ResponseStatus = {
    ok: boolean;
    status: number;
    statusText: string;
};
//# sourceMappingURL=ajax.d.ts.map