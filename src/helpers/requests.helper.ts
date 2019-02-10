/**
 * @license
 * Copyright (c) 2019 Ardor/Nxt Group. All Rights Reserved
 * 
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/ArdorNxtCommunity/ardorJS/blob/master/LICENSE
 */

import { HttpClient, HttpHeaders,HttpXhrBackend } from "@angular/common/http";
import { Config } from '../config/config.service';

export class RequestHelper {
    

    public static headers(): HttpHeaders{
        if(!this.h){
            this.h = new HttpHeaders({});
        }
        return this.h;
    }

    public static apiUrl(): string {
        return Config.getNodeUrl();
    }

    public static httpClient(): HttpClient {
        if(!this.http){
            this.http = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
        }
        return this.http;
    }

    private static h: HttpHeaders;
    private static http: HttpClient;
}