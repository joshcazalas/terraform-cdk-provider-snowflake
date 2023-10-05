/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface Failover_Group_GrantConfig extends TerraformMetaArguments {
    roles: string[];
    enable_multiple_grants?: boolean;
    failover_group_name?: string;
    privilege?: string;
    revert_ownership_to_role_name?: string;
    with_grant_option?: boolean;
}

export class Failover_Group_Grant extends TerraformResource {
    _roles: string[];
    _enable_multiple_grants?: boolean;
    _failover_group_name?: string;
    _privilege?: string;
    _revert_ownership_to_role_name?: string;
    _with_grant_option?: boolean;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Failover_Group_GrantConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_failover_group_grant",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._roles = config.roles;
        
        this._enable_multiple_grants = config.enable_multiple_grants;
        
        this._failover_group_name = config.failover_group_name;
        
        this._privilege = config.privilege;
        
        this._revert_ownership_to_role_name = config.revert_ownership_to_role_name;
        
        this._with_grant_option = config.with_grant_option;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            roles: this._roles,
            enable_multiple_grants: this._enable_multiple_grants,
            failover_group_name: this._failover_group_name,
            privilege: this._privilege,
            revert_ownership_to_role_name: this._revert_ownership_to_role_name,
            with_grant_option: this._with_grant_option,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_failover_group_grant.${this.friendlyUniqueId}.${attribute}}`;
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
    public get failover_group_name(): string | undefined {
        return this._failover_group_name
    }

    public set failover_group_name(value: string | undefined) {
        this._failover_group_name = value;
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
    public get with_grant_option(): boolean | undefined {
        return this._with_grant_option
    }

    public set with_grant_option(value: boolean | undefined) {
        this._with_grant_option = value;
    }
}
