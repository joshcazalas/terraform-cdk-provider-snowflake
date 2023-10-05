/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface External_Table_GrantConfig extends TerraformMetaArguments {
    database_name: string;
    roles: string[];
    enable_multiple_grants?: boolean;
    external_table_name?: string;
    on_all?: boolean;
    on_future?: boolean;
    privilege?: string;
    revert_ownership_to_role_name?: string;
    schema_name?: string;
    shares?: string[];
    with_grant_option?: boolean;
}

export class External_Table_Grant extends TerraformResource {
    _database_name: string;
    _roles: string[];
    _enable_multiple_grants?: boolean;
    _external_table_name?: string;
    _on_all?: boolean;
    _on_future?: boolean;
    _privilege?: string;
    _revert_ownership_to_role_name?: string;
    _schema_name?: string;
    _shares?: string[];
    _with_grant_option?: boolean;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: External_Table_GrantConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_external_table_grant",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._database_name = config.database_name;
        
        this._roles = config.roles;
        
        this._enable_multiple_grants = config.enable_multiple_grants;
        
        this._external_table_name = config.external_table_name;
        
        this._on_all = config.on_all;
        
        this._on_future = config.on_future;
        
        this._privilege = config.privilege;
        
        this._revert_ownership_to_role_name = config.revert_ownership_to_role_name;
        
        this._schema_name = config.schema_name;
        
        this._shares = config.shares;
        
        this._with_grant_option = config.with_grant_option;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            database_name: this._database_name,
            roles: this._roles,
            enable_multiple_grants: this._enable_multiple_grants,
            external_table_name: this._external_table_name,
            on_all: this._on_all,
            on_future: this._on_future,
            privilege: this._privilege,
            revert_ownership_to_role_name: this._revert_ownership_to_role_name,
            schema_name: this._schema_name,
            shares: this._shares,
            with_grant_option: this._with_grant_option,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_external_table_grant.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get database_name(): string {
        return this._database_name
    }

    public set database_name(value: string) {
        this._database_name = value;
    }
    public get roles(): string[] {
        return this._roles
    }

    public set roles(value: string[]) {
        this._roles = value;
    }
    public get enable_multiple_grants(): boolean | undefined {
        return this._enable_multiple_grants
    }

    public set enable_multiple_grants(value: boolean | undefined) {
        this._enable_multiple_grants = value;
    }
    public get external_table_name(): string | undefined {
        return this._external_table_name
    }

    public set external_table_name(value: string | undefined) {
        this._external_table_name = value;
    }
    public get on_all(): boolean | undefined {
        return this._on_all
    }

    public set on_all(value: boolean | undefined) {
        this._on_all = value;
    }
    public get on_future(): boolean | undefined {
        return this._on_future
    }

    public set on_future(value: boolean | undefined) {
        this._on_future = value;
    }
    public get privilege(): string | undefined {
        return this._privilege
    }

    public set privilege(value: string | undefined) {
        this._privilege = value;
    }
    public get revert_ownership_to_role_name(): string | undefined {
        return this._revert_ownership_to_role_name
    }

    public set revert_ownership_to_role_name(value: string | undefined) {
        this._revert_ownership_to_role_name = value;
    }
    public get schema_name(): string | undefined {
        return this._schema_name
    }

    public set schema_name(value: string | undefined) {
        this._schema_name = value;
    }
    public get shares(): string[] | undefined {
        return this._shares
    }

    public set shares(value: string[] | undefined) {
        this._shares = value;
    }
    public get with_grant_option(): boolean | undefined {
        return this._with_grant_option
    }

    public set with_grant_option(value: boolean | undefined) {
        this._with_grant_option = value;
    }
}
