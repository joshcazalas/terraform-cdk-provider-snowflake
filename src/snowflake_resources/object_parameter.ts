/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";

    export interface Object_Parameter_Object_Identifier {
        readonly name: string;
        readonly database?: string;
        readonly schema?: string;
    }

export interface Object_ParameterConfig extends TerraformMetaArguments {
    key: string;
    value: string;
    object_identifier?: Object_Parameter_Object_Identifier[];
    object_type?: string;
    on_account?: boolean;
}

export class Object_Parameter extends TerraformResource {
    _key: string;
    _value: string;
    _object_identifier?: Object_Parameter_Object_Identifier[];
    _object_type?: string;
    _on_account?: boolean;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Object_ParameterConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_object_parameter",
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
        
        this._object_identifier = config.object_identifier;
        
        this._object_type = config.object_type;
        
        this._on_account = config.on_account;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            key: this._key,
            value: this._value,
            object_identifier: this._object_identifier,
            object_type: this._object_type,
            on_account: this._on_account,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_object_parameter.${this.friendlyUniqueId}.${attribute}}`;
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
    
    public get object_identifier(): Object_Parameter_Object_Identifier[] | undefined {
        return this._object_identifier
    }

    public set object_identifier(value: Object_Parameter_Object_Identifier[] | undefined) {
        this._object_identifier = value;
    }
    
    public get object_type(): string | undefined {
        return this._object_type
    }

    public set object_type(value: string | undefined) {
        this._object_type = value;
    }
    
    public get on_account(): boolean | undefined {
        return this._on_account
    }

    public set on_account(value: boolean | undefined) {
        this._on_account = value;
    }
    
}

