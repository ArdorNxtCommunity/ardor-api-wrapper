/**
 * @license
 * Copyright (c) 2019 Ardor/Nxt Group. All Rights Reserved
 * 
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/ArdorNxtCommunity/ardorJS/blob/master/LICENSE
 */

import { Observable } from 'rxjs';
import { RequestHelper } from '../helpers/requests.helper';

export class Suffling {

    public static getAccountShufflings(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getAccountShufflings');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getAllShufflings(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getAllShufflings');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getAssignedShufflings(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getAssignedShufflings');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getHoldingShufflings(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getHoldingShufflings');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getShufflers(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getShufflers');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getShuffling(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getShuffling');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getShufflingParticipants(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getShufflingParticipants');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static shufflingCancel(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'shufflingCancel');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static shufflingProcess(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'shufflingProcess');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static shufflingVerify(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'shufflingVerify');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static stopShuffler(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'stopShuffler');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }

}

