export default class Dowloader {
    /**
     * 下载文件，会用 lru 方式来缓存文件到本地
     * @param {String} url 文件的 url
     */
    download(url: string, lru: any): Promise<any>;
}
