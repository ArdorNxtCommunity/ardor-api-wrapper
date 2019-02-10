/**
 * @license
 * Copyright (c) 2019 Ardor/Nxt Group. All Rights Reserved
 * 
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/ArdorNxtCommunity/ardorJS/blob/master/LICENSE
 */

import { Observable } from 'rxjs';
import { RequestHelper } from '../helpers/requests.helper';

export class Debug {

public static clearUnconfirmedTransactions(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'clearUnconfirmedTransactions');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static dumpPeers(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'dumpPeers');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static fullReset(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'fullReset');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getAllBroadcastedTransactions(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getAllBroadcastedTransactions');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getAllWaitingTransactions(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getAllWaitingTransactions');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getLog(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getLog');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getStackTraces(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getStackTraces');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static luceneReindex(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'luceneReindex');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static popOff(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'popOff');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static rebroadcastUnconfirmedTransactions(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'rebroadcastUnconfirmedTransactions');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static requeueUnconfirmedTransactions(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'requeueUnconfirmedTransactions');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static retrievePrunedData(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'retrievePrunedData');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static scan(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'scan');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static setLogging(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'setLogging');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static shutdown(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'shutdown');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static trimDerivedTables(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'trimDerivedTables');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}

}