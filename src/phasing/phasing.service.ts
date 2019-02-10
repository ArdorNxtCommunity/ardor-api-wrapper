/**
 * @license
 * Copyright (c) 2019 Ardor/Nxt Group. All Rights Reserved
 * 
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/ArdorNxtCommunity/ardorJS/blob/master/LICENSE
 */

import { Observable } from 'rxjs';
import { RequestHelper } from '../helpers/requests.helper';

export class Phasing {

public static approveTransaction(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'approveTransaction');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getAccountPhasedTransactionCount(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getAccountPhasedTransactionCount');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getAccountPhasedTransactions(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getAccountPhasedTransactions');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getAssetPhasedTransactions(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getAssetPhasedTransactions');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getCurrencyPhasedTransactions(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getCurrencyPhasedTransactions');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getHashedSecretPhasedTransactions(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getHashedSecretPhasedTransactions');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getLinkedPhasedTransactions(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getLinkedPhasedTransactions');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getPhasingPoll(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getPhasingPoll');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getPhasingPollVote(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getPhasingPollVote');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getPhasingPollVotes(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getPhasingPollVotes');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static getVoterPhasedTransactions(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'getVoterPhasedTransactions');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}
public static parsePhasingParams(params: URLSearchParams): Observable<object>{
    // Append params with requstType
    const uri = params;
    uri.append('requestType', 'parsePhasingParams');
    // Send the POST request to remote/local node
    return RequestHelper.httpClient().post<object>(
        RequestHelper.apiUrl(), 
        uri.toString(), 
        {headers: RequestHelper.headers()}
    );
}

}