/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface Tag_GrantConfig extends TerraformMetaArguments {
    database_name: string;
    schema_name: string;
    tag_name: string;
    enable_multiple_grants?: boolean;
    privilege?: string;
    revert_ownership_to_role_name?: string;
    roles?: Set<string>;
    with_grant_option?: boolean;
}

export class Tag_Grant extends TerraformResource {
    _database_name: string;
    _schema_name: string;
    _tag_name: string;
    _enable_multiple_grants?: boolean;
    _privilege?: string;
    _revert_ownership_to_role_name?: string;
    _roles?: Set<string>;
    _with_grant_option?: boolean;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Tag_GrantConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_tag_grant",
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
        
        this._schema_name = config.schema_name;
        
        this._tag_name = config.tag_name;
        
        this._enable_multiple_grants = config.enable_multiple_grants;
        
        this._privilege = config.privilege;
        
        this._revert_ownership_to_role_name = config.revert_ownership_to_role_name;
        
        this._roles = config.roles;
        
        this._with_grant_option = config.with_grant_option;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            database_name: this._database_name,
            schema_name: this._schema_name,
            tag_name: this._tag_name,
            enable_multiple_grants: this._enable_multiple_grants,
            privilege: this._privilege,
            revert_ownership_to_role_name: this._revert_ownership_to_role_name,
            roles: this._roles,
            with_grant_option: this._with_grant_option,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_tag_grant.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get database_name(): string {
        return this._database_name
    }

    public set database_name(value: string) {
        this._database_name = value;
    }
    
    public get schema_name(): string {
        return this._schema_name
    }

    public set schema_name(value: string) {
        this._schema_name = value;
    }
    
    public get tag_name(): string {
        return this._tag_name
    }

    public set tag_name(value: string) {
        this._tag_name = value;
    }
    
    public get enable_multiple_grants(): boolean | undefined {
        return this._enable_multiple_grants
    }

    public set enable_multiple_grants(value: boolean | undefined) {
        this._enable_multiple_grants = value;
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
    
    public get roles(): Set<string> | undefined {
        return this._roles
    }

    public set roles(value: Set<string> | undefined) {
        this._roles = value;
    }
    
    public get with_grant_option(): boolean | undefined {
        return this._with_grant_option
    }

    public set with_grant_option(value: boolean | undefined) {
        this._with_grant_option = value;
    }
    
}

