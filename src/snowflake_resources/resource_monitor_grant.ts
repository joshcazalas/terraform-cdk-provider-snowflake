/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface Resource_Monitor_GrantConfig extends TerraformMetaArguments {
    monitor_name: string;
    enable_multiple_grants?: boolean;
    privilege?: string;
    roles?: string[];
    with_grant_option?: boolean;
}

export class Resource_Monitor_Grant extends TerraformResource {
    _monitor_name: string;
    _enable_multiple_grants?: boolean;
    _privilege?: string;
    _roles?: string[];
    _with_grant_option?: boolean;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Resource_Monitor_GrantConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_resource_monitor_grant",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._monitor_name = config.monitor_name;
        
        this._enable_multiple_grants = config.enable_multiple_grants;
        
        this._privilege = config.privilege;
        
        this._roles = config.roles;
        
        this._with_grant_option = config.with_grant_option;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            monitor_name: this._monitor_name,
            enable_multiple_grants: this._enable_multiple_grants,
            privilege: this._privilege,
            roles: this._roles,
            with_grant_option: this._with_grant_option,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_resource_monitor_grant.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get monitor_name(): string {
        return this._monitor_name
    }

    public set monitor_name(value: string) {
        this._monitor_name = value;
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
    public get roles(): string[] | undefined {
        return this._roles
    }

    public set roles(value: string[] | undefined) {
        this._roles = value;
    }
    public get with_grant_option(): boolean | undefined {
        return this._with_grant_option
    }

    public set with_grant_option(value: boolean | undefined) {
        this._with_grant_option = value;
    }
}
