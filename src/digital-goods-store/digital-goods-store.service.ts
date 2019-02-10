/**
 * @license
 * Copyright (c) 2019 Ardor/Nxt Group. All Rights Reserved
 * 
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/ArdorNxtCommunity/ardorJS/blob/master/LICENSE
 */

import { Observable } from 'rxjs';
import { RequestHelper } from '../helpers/requests.helper';

export class DigitalGoodsExchange {
    
    public static dgsDelisting(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'dgsDelisting');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static dgsDelivery(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'dgsDelivery');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static dgsFeedback(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'dgsFeedback');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static dgsListing(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'dgsListing');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static dgsPriceChange(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'dgsPriceChange');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static dgsPurchase(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'dgsPurchase');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static dgsQuantityChange(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'dgsQuantityChange');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static dgsRefund(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'dgsRefund');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDGSExpiredPurchases(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDGSExpiredPurchases');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDGSGood(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDGSGood');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDGSGoods(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDGSGoods');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDGSGoodsCount(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDGSGoodsCount');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDGSGoodsPurchaseCount(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDGSGoodsPurchaseCount');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDGSGoodsPurchases(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDGSGoodsPurchases');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDGSPendingPurchases(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDGSPendingPurchases');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDGSPurchase(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDGSPurchase');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDGSPurchaseCount(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDGSPurchaseCount');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDGSPurchases(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDGSPurchases');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDGSTagCount(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDGSTagCount');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }
    public static getDGSTags(params: URLSearchParams): Observable<object>{
        // Append params with requstType
        const uri = params;
        uri.append('requestType', 'getDGSTags');
        // Send the POST request to remote/local node
        return RequestHelper.httpClient().post<object>(
            RequestHelper.apiUrl(), 
            uri.toString(), 
            {headers: RequestHelper.headers()}
        );
    }

}