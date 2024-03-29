/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface Grant_Privileges_To_ShareConfig extends TerraformMetaArguments {
    privileges: Set<string>;
    to_share: string;
    on_all_tables_in_schema?: string;
    on_database?: string;
    on_schema?: string;
    on_table?: string;
    on_tag?: string;
    on_view?: string;
}

export class Grant_Privileges_To_Share extends TerraformResource {
    _privileges: Set<string>;
    _to_share: string;
    _on_all_tables_in_schema?: string;
    _on_database?: string;
    _on_schema?: string;
    _on_table?: string;
    _on_tag?: string;
    _on_view?: string;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Grant_Privileges_To_ShareConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_grant_privileges_to_share",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._privileges = config.privileges;
        
        this._to_share = config.to_share;
        
        this._on_all_tables_in_schema = config.on_all_tables_in_schema;
        
        this._on_database = config.on_database;
        
        this._on_schema = config.on_schema;
        
        this._on_table = config.on_table;
        
        this._on_tag = config.on_tag;
        
        this._on_view = config.on_view;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            privileges: this._privileges,
            to_share: this._to_share,
            on_all_tables_in_schema: this._on_all_tables_in_schema,
            on_database: this._on_database,
            on_schema: this._on_schema,
            on_table: this._on_table,
            on_tag: this._on_tag,
            on_view: this._on_view,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_grant_privileges_to_share.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get privileges(): Set<string> {
        return this._privileges
    }

    public set privileges(value: Set<string>) {
        this._privileges = value;
    }
    
    public get to_share(): string {
        return this._to_share
    }

    public set to_share(value: string) {
        this._to_share = value;
    }
    
    public get on_all_tables_in_schema(): string | undefined {
        return this._on_all_tables_in_schema
    }

    public set on_all_tables_in_schema(value: string | undefined) {
        this._on_all_tables_in_schema = value;
    }
    
    public get on_database(): string | undefined {
        return this._on_database
    }

    public set on_database(value: string | undefined) {
        this._on_database = value;
    }
    
    public get on_schema(): string | undefined {
        return this._on_schema
    }

    public set on_schema(value: string | undefined) {
        this._on_schema = value;
    }
    
    public get on_table(): string | undefined {
        return this._on_table
    }

    public set on_table(value: string | undefined) {
        this._on_table = value;
    }
    
    public get on_tag(): string | undefined {
        return this._on_tag
    }

    public set on_tag(value: string | undefined) {
        this._on_tag = value;
    }
    
    public get on_view(): string | undefined {
        return this._on_view
    }

    public set on_view(value: string | undefined) {
        this._on_view = value;
    }
    
}

