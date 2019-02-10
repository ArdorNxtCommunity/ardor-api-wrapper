/**
 * @license
 * Copyright (c) 2019 Ardor/Nxt Group. All Rights Reserved
 * 
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/ArdorNxtCommunity/ardorJS/blob/master/LICENSE
 */

import { Observable } from 'rxjs';
import { RequestHelper } from '../helpers/requests.helper';

export class Forging {
    
    public static addBundlingRule(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'addBundlingRule');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static blacklistBundler(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'blacklistBundler');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static bundleTransactions(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'bundleTransactions');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getAllBundlerRates(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getAllBundlerRates');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getBundlerRates(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getBundlerRates');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getBundlers(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getBundlers');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getForging(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getForging');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getGuaranteedBalance(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getGuaranteedBalance');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getNextBlockGenerators(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getNextBlockGenerators');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static leaseBalance(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'leaseBalance');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static startBundler(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'startBundler');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static startForging(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'startForging');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static stopBundler(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'stopBundler');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static stopForging(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'stopForging');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }

}