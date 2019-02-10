/**
 * @license
 * Copyright (c) 2019 Ardor/Nxt Group. All Rights Reserved
 * 
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/ArdorNxtCommunity/ardorJS/blob/master/LICENSE
 */

export class Config {


    public static setNodeUrl(url:string){
        this.settedNode = url;
    }

    public static getNodeUrl(): string{
        if(this.settedNode){
            return this.settedNode;
        }
        if(this.isTestNet()){
            return '';
        }else{
            return '';
        }
    }

    public static isTestNet(): boolean{
        return false;
    }

    // User configuration
    private static settedNode: string;
}