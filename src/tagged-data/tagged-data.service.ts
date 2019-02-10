/**
 * @license
 * Copyright (c) 2019 Ardor/Nxt Group. All Rights Reserved
 * 
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/ArdorNxtCommunity/ardorJS/blob/master/LICENSE
 */

import { Observable } from 'rxjs';
import { RequestHelper } from '../helpers/requests.helper';

export class TaggedData {

    public static downloadTaggedData(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'downloadTaggedData');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getAccountTaggedData(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getAccountTaggedData');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getAllTaggedData(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getAllTaggedData');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getChannelTaggedData(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getChannelTaggedData');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDataTagCount(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDataTagCount');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDataTags(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDataTags');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDataTagsLike(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDataTagsLike');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getTaggedData(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getTaggedData');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static searchTaggedData(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'searchTaggedData');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static uploadTaggedData(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'uploadTaggedData');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static verifyTaggedData(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'verifyTaggedData');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }

}