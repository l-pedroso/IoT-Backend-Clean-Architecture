module.exports = class HttpContract{
    constructor(url, headers, data) { 
        this._url = url;
        this._headers = headers;
        this._data = data;
    }

    get() {
        return Promise.reject(new Error('not implemented'));
    }
}