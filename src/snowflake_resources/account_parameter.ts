/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface Account_ParameterConfig extends TerraformMetaArguments {
    key: string;
    value: string;
}

export class Account_Parameter extends TerraformResource {
    _key: string;
    _value: string;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Account_ParameterConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_account_parameter",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._key = config.key;
        
        this._value = config.value;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            key: this._key,
            value: this._value,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_account_parameter.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get key(): string {
        return this._key
    }

    public set key(value: string) {
        this._key = value;
    }
    
    public get value(): string {
        return this._value
    }

    public set value(value: string) {
        this._value = value;
    }
    
}

