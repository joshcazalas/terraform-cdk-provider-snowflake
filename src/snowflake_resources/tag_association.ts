/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";

    export interface Tag_Association_Object_Identifier {
        readonly name: string;
        readonly database?: string;
        readonly schema?: string;
    }
    export interface Tag_Association_Timeouts {
        readonly create?: string;
    }

export interface Tag_AssociationConfig extends TerraformMetaArguments {
    object_identifier: Tag_Association_Object_Identifier[];
    object_type: string;
    tag_id: string;
    tag_value: string;
    object_name?: string;
    skip_validation?: boolean;
    timeouts?: Tag_Association_Timeouts[];
}

export class Tag_Association extends TerraformResource {
    _object_identifier: Tag_Association_Object_Identifier[];
    _object_type: string;
    _tag_id: string;
    _tag_value: string;
    _object_name?: string;
    _skip_validation?: boolean;
    _timeouts?: Tag_Association_Timeouts[];
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Tag_AssociationConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_tag_association",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._object_identifier = config.object_identifier;
        
        this._object_type = config.object_type;
        
        this._tag_id = config.tag_id;
        
        this._tag_value = config.tag_value;
        
        this._object_name = config.object_name;
        
        this._skip_validation = config.skip_validation;
        
        this._timeouts = config.timeouts;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            object_identifier: this._object_identifier,
            object_type: this._object_type,
            tag_id: this._tag_id,
            tag_value: this._tag_value,
            object_name: this._object_name,
            skip_validation: this._skip_validation,
            timeouts: this._timeouts,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_tag_association.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get object_identifier(): Tag_Association_Object_Identifier[] {
        return this._object_identifier
    }

    public set object_identifier(value: Tag_Association_Object_Identifier[]) {
        this._object_identifier = value;
    }
    
    public get object_type(): string {
        return this._object_type
    }

    public set object_type(value: string) {
        this._object_type = value;
    }
    
    public get tag_id(): string {
        return this._tag_id
    }

    public set tag_id(value: string) {
        this._tag_id = value;
    }
    
    public get tag_value(): string {
        return this._tag_value
    }

    public set tag_value(value: string) {
        this._tag_value = value;
    }
    
    public get object_name(): string | undefined {
        return this._object_name
    }

    public set object_name(value: string | undefined) {
        this._object_name = value;
    }
    
    public get skip_validation(): boolean | undefined {
        return this._skip_validation
    }

    public set skip_validation(value: boolean | undefined) {
        this._skip_validation = value;
    }
    
    public get timeouts(): Tag_Association_Timeouts[] | undefined {
        return this._timeouts
    }

    public set timeouts(value: Tag_Association_Timeouts[] | undefined) {
        this._timeouts = value;
    }
    
}

