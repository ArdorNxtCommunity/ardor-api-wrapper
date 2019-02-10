/**
 * @license
 * Copyright (c) 2019 Ardor/Nxt Group. All Rights Reserved
 * 
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/ArdorNxtCommunity/ardorJS/blob/master/LICENSE
 */

import { Observable } from 'rxjs';
import { RequestHelper } from '../helpers/requests.helper';

export class Messages {

    public static decryptFrom(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'decryptFrom');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static downloadPrunableMessage(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'downloadPrunableMessage');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static encryptTo(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'encryptTo');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getAllPrunableMessages(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getAllPrunableMessages');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getPrunableMessage(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getPrunableMessage');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getPrunableMessages(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getPrunableMessages');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getSharedKey(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getSharedKey');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static readMessage(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'readMessage');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static sendMessage(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'sendMessage');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static verifyPrunableMessage(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'verifyPrunableMessage');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }

}