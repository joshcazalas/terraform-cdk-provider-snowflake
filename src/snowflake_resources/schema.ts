/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";

export interface  {
}

export interface SchemaConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    comment?: string;
    data_retention_days?: number;
    is_managed?: boolean;
    is_transient?: boolean;
    tag?: Schema_Tag[];
}

export class Schema extends TerraformResource {
    _database: string;
    _name: string;
    _comment?: string;
    _data_retention_days?: number;
    _is_managed?: boolean;
    _is_transient?: boolean;
    _tag?: Schema_Tag[];
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: SchemaConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_schema",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._database = config.database;
        
        this._name = config.name;
        
        this._comment = config.comment;
        
        this._data_retention_days = config.data_retention_days;
        
        this._is_managed = config.is_managed;
        
        this._is_transient = config.is_transient;
        
        this._tag = config.tag;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            database: this._database,
            name: this._name,
            comment: this._comment,
            data_retention_days: this._data_retention_days,
            is_managed: this._is_managed,
            is_transient: this._is_transient,
            tag: this._tag,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_schema.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get database(): string {
        return this._database
    }

    public set database(value: string) {
        this._database = value;
    }
    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value;
    }
    public get comment(): string | undefined {
        return this._comment
    }

    public set comment(value: string | undefined) {
        this._comment = value;
    }
    public get data_retention_days(): number | undefined {
        return this._data_retention_days
    }

    public set data_retention_days(value: number | undefined) {
        this._data_retention_days = value;
    }
    public get is_managed(): boolean | undefined {
        return this._is_managed
    }

    public set is_managed(value: boolean | undefined) {
        this._is_managed = value;
    }
    public get is_transient(): boolean | undefined {
        return this._is_transient
    }

    public set is_transient(value: boolean | undefined) {
        this._is_transient = value;
    }
    public get tag(): Schema_Tag[] | undefined {
        return this._tag
    }

    public set tag(value: Schema_Tag[] | undefined) {
        this._tag = value;
    }
}
