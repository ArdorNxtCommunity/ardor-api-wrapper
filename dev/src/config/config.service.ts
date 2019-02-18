/**
 * @license
 * Copyright (c) 2019 Ardor/Nxt Group. All Rights Reserved
 * 
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/ArdorNxtCommunity/ardor-api-wrapper/blob/master/LICENSE
 */

import * as Conf from '../config/config.json';

export class Config {

    public static setNodeUrl(url:string){
        this.settedNode = url;
    }

    public static getNodeUrl(): string{
        if(this.settedNode){
            return this.settedNode;
        }
        
        if(this.isTestNet()){
            const nbPeers = Conf.defaultTestnetPeers.length;
            const selected = Conf.defaultTestnetPeers[Math.floor(Math.random()*nbPeers)];
            this.settedNode = selected
        }else{
            const nbPeers = Conf.defaultPeers.length;
            const selected = Conf.defaultTestnetPeers[Math.floor(Math.random()*nbPeers)];
            this.settedNode = selected
        }
        return this.settedNode;
    }

    public static isTestNet(): boolean{
        return false;
    }

    // User configuration
    private static settedNode: string;
}