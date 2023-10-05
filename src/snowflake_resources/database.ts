/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";

    export interface Database_Replication_Configuration {
        readonly accounts: string[];
        readonly ignore_edition_check?: boolean;
    }

export interface DatabaseConfig extends TerraformMetaArguments {
    name: string;
    comment?: string;
    data_retention_time_in_days?: number;
    from_database?: string;
    from_replica?: string;
    from_share?: Record<string, string>;
    is_transient?: boolean;
    replication_configuration?: Database_Replication_Configuration[];
}

export class Database extends TerraformResource {
    _name: string;
    _comment?: string;
    _data_retention_time_in_days?: number;
    _from_database?: string;
    _from_replica?: string;
    _from_share?: Record<string, string>;
    _is_transient?: boolean;
    _replication_configuration?: Database_Replication_Configuration[];
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: DatabaseConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_database",
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
        
        this._comment = config.comment;
        
        this._data_retention_time_in_days = config.data_retention_time_in_days;
        
        this._from_database = config.from_database;
        
        this._from_replica = config.from_replica;
        
        this._from_share = config.from_share;
        
        this._is_transient = config.is_transient;
        
        this._replication_configuration = config.replication_configuration;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            name: this._name,
            comment: this._comment,
            data_retention_time_in_days: this._data_retention_time_in_days,
            from_database: this._from_database,
            from_replica: this._from_replica,
            from_share: this._from_share,
            is_transient: this._is_transient,
            replication_configuration: this._replication_configuration,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_database.${this.friendlyUniqueId}.${attribute}}`;
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
    
    public get data_retention_time_in_days(): number | undefined {
        return this._data_retention_time_in_days
    }

    public set data_retention_time_in_days(value: number | undefined) {
        this._data_retention_time_in_days = value;
    }
    
    public get from_database(): string | undefined {
        return this._from_database
    }

    public set from_database(value: string | undefined) {
        this._from_database = value;
    }
    
    public get from_replica(): string | undefined {
        return this._from_replica
    }

    public set from_replica(value: string | undefined) {
        this._from_replica = value;
    }
    
    public get from_share(): Record<string, string> | undefined {
        return this._from_share
    }

    public set from_share(value: Record<string, string> | undefined) {
        this._from_share = value;
    }
    
    public get is_transient(): boolean | undefined {
        return this._is_transient
    }

    public set is_transient(value: boolean | undefined) {
        this._is_transient = value;
    }
    
    public get replication_configuration(): Database_Replication_Configuration[] | undefined {
        return this._replication_configuration
    }

    public set replication_configuration(value: Database_Replication_Configuration[] | undefined) {
        this._replication_configuration = value;
    }
    
}

