/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface SequenceConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    schema: string;
    comment?: string;
    increment?: number;
    ordering?: string;
}

export class Sequence extends TerraformResource {
    _database: string;
    _name: string;
    _schema: string;
    _comment?: string;
    _increment?: number;
    _ordering?: string;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: SequenceConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_sequence",
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
        
        this._schema = config.schema;
        
        this._comment = config.comment;
        
        this._increment = config.increment;
        
        this._ordering = config.ordering;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            database: this._database,
            name: this._name,
            schema: this._schema,
            comment: this._comment,
            increment: this._increment,
            ordering: this._ordering,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_sequence.${this.friendlyUniqueId}.${attribute}}`;
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
    
    public get schema(): string {
        return this._schema
    }

    public set schema(value: string) {
        this._schema = value;
    }
    
    public get comment(): string | undefined {
        return this._comment
    }

    public set comment(value: string | undefined) {
        this._comment = value;
    }
    
    public get increment(): number | undefined {
        return this._increment
    }

    public set increment(value: number | undefined) {
        this._increment = value;
    }
    
    public get ordering(): string | undefined {
        return this._ordering
    }

    public set ordering(value: string | undefined) {
        this._ordering = value;
    }
    
}

