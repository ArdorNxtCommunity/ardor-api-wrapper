/**
 * @license
 * Copyright (c) 2019 Ardor/Nxt Group. All Rights Reserved
 * 
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/ArdorNxtCommunity/ardorJS/blob/master/LICENSE
 */

import { Observable } from 'rxjs';
import { RequestHelper } from '../helpers/requests.helper';

export class Networking {

public static addPeer(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'addPeer');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static blacklistAPIProxyPeer(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'blacklistAPIProxyPeer');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static blacklistPeer(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'blacklistPeer');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getPeer(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getPeer');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getPeers(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getPeers');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static setAPIProxyPeer(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'setAPIProxyPeer');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}

}