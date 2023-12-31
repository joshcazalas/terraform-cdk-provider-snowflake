/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface User_Public_KeysConfig extends TerraformMetaArguments {
    name: string;
    rsa_public_key?: string;
    rsa_public_key_2?: string;
}

export class User_Public_Keys extends TerraformResource {
    _name: string;
    _rsa_public_key?: string;
    _rsa_public_key_2?: string;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: User_Public_KeysConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_user_public_keys",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._name = config.name;
        
        this._rsa_public_key = config.rsa_public_key;
        
        this._rsa_public_key_2 = config.rsa_public_key_2;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            name: this._name,
            rsa_public_key: this._rsa_public_key,
            rsa_public_key_2: this._rsa_public_key_2,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_user_public_keys.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value;
    }
    
    public get rsa_public_key(): string | undefined {
        return this._rsa_public_key
    }

    public set rsa_public_key(value: string | undefined) {
        this._rsa_public_key = value;
    }
    
    public get rsa_public_key_2(): string | undefined {
        return this._rsa_public_key_2
    }

    public set rsa_public_key_2(value: string | undefined) {
        this._rsa_public_key_2 = value;
    }
    
}

