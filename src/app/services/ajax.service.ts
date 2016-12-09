import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class AjaxService {
    private baseUrl: string = "localhost/api";

    constructor(private http: Http) {
    }
    
    /** @function put
     *
     * @data {any} The Object we want to put
     * @url {string} The Path we wanna put to
     *
     * Puts it to the baseUrl
     * */
    put(data: any, url: string) {
        return this.http.put(this.baseUrl + url, JSON.stringify(data));
    }

    /** @function get
     *
     * @url {string} The Path we want to get
     *
     * Performs a get Request to the baseUrl
     * */
    get(url: string) {
        return this.http.get(this.baseUrl + url);
    }

    /** @function delete
     *
     * @url {string} The Path we want to post to
     *
     * Performs a delete Request to the baseUrl
     * */
    delete(url: string) {
        return this.http.delete(this.baseUrl + url)
        .map((res: Response) => res.json());
    }

    /** @function getJSON
     *
     * @url {string} The Path we want to get
     *
     * Performs a get Request to the baseUrl
     * */
    getJSON(url: string) {
        return this.http.get(this.baseUrl + url)
            .map((res: Response) => res.json());
    }

    /** @function postJSON
     *
     * @data {any} The Object we want to post
     * @url {string} The Path we wanna Post to
     *
     * Serializes a given object into json and Posts it to the baseUrl
     * */
    postJson(data: any, url: string) {
        return this.http.post(this.baseUrl + url, JSON.stringify(data))
        .map((res: Response) => res.json());
    }

    /** @function putJSON
     *
     * @data {any} The Object we want to post
     * @url {string} The Path we wanna Post to
     *
     * Serializes a given object into json and Posts it to the baseUrl
     * */
    putJSON(data: any, url: string) {
        return this.http.put(this.baseUrl + url, JSON.stringify(data))
        .map((res: Response) => res.json());
    }
}