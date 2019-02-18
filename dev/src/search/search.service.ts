/**
 * @license
 * Copyright (c) 2019 Ardor/Nxt Group. All Rights Reserved
 * 
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/ArdorNxtCommunity/ardor-api-wrapper/blob/master/LICENSE
 */

import { Observable } from 'rxjs';
import { RequestHelper } from '../helpers/requests.helper';

export class Search {

public static getAliasesLike(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getAliasesLike');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getDGSTagsLike(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getDGSTagsLike');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static searchAccounts(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'searchAccounts');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static searchAssets(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'searchAssets');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static searchCurrencies(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'searchCurrencies');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static searchDGSGoods(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'searchDGSGoods');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}

}