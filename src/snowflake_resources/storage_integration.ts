/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface Storage_IntegrationConfig extends TerraformMetaArguments {
    name: string;
    storage_allowed_locations: string[];
    storage_provider: string;
    azure_tenant_id?: string;
    comment?: string;
    enabled?: boolean;
    storage_aws_object_acl?: string;
    storage_aws_role_arn?: string;
    storage_blocked_locations?: string[];
    type?: string;
}

export class Storage_Integration extends TerraformResource {
    _name: string;
    _storage_allowed_locations: string[];
    _storage_provider: string;
    _azure_tenant_id?: string;
    _comment?: string;
    _enabled?: boolean;
    _storage_aws_object_acl?: string;
    _storage_aws_role_arn?: string;
    _storage_blocked_locations?: string[];
    _type?: string;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Storage_IntegrationConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_storage_integration",
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
        
        this._storage_allowed_locations = config.storage_allowed_locations;
        
        this._storage_provider = config.storage_provider;
        
        this._azure_tenant_id = config.azure_tenant_id;
        
        this._comment = config.comment;
        
        this._enabled = config.enabled;
        
        this._storage_aws_object_acl = config.storage_aws_object_acl;
        
        this._storage_aws_role_arn = config.storage_aws_role_arn;
        
        this._storage_blocked_locations = config.storage_blocked_locations;
        
        this._type = config.type;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            name: this._name,
            storage_allowed_locations: this._storage_allowed_locations,
            storage_provider: this._storage_provider,
            azure_tenant_id: this._azure_tenant_id,
            comment: this._comment,
            enabled: this._enabled,
            storage_aws_object_acl: this._storage_aws_object_acl,
            storage_aws_role_arn: this._storage_aws_role_arn,
            storage_blocked_locations: this._storage_blocked_locations,
            type: this._type,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_storage_integration.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value;
    }
    public get storage_allowed_locations(): string[] {
        return this._storage_allowed_locations
    }

    public set storage_allowed_locations(value: string[]) {
        this._storage_allowed_locations = value;
    }
    public get storage_provider(): string {
        return this._storage_provider
    }

    public set storage_provider(value: string) {
        this._storage_provider = value;
    }
    public get azure_tenant_id(): string | undefined {
        return this._azure_tenant_id
    }

    public set azure_tenant_id(value: string | undefined) {
        this._azure_tenant_id = value;
    }
    public get comment(): string | undefined {
        return this._comment
    }

    public set comment(value: string | undefined) {
        this._comment = value;
    }
    public get enabled(): boolean | undefined {
        return this._enabled
    }

    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    }
    public get storage_aws_object_acl(): string | undefined {
        return this._storage_aws_object_acl
    }

    public set storage_aws_object_acl(value: string | undefined) {
        this._storage_aws_object_acl = value;
    }
    public get storage_aws_role_arn(): string | undefined {
        return this._storage_aws_role_arn
    }

    public set storage_aws_role_arn(value: string | undefined) {
        this._storage_aws_role_arn = value;
    }
    public get storage_blocked_locations(): string[] | undefined {
        return this._storage_blocked_locations
    }

    public set storage_blocked_locations(value: string[] | undefined) {
        this._storage_blocked_locations = value;
    }
    public get type(): string | undefined {
        return this._type
    }

    public set type(value: string | undefined) {
        this._type = value;
    }
}
