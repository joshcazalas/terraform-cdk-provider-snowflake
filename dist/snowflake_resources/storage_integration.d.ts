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
export declare class Storage_Integration extends TerraformResource {
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
    constructor(scope: Construct, id: string, config: Storage_IntegrationConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get name(): string;
    set name(value: string);
    get storage_allowed_locations(): string[];
    set storage_allowed_locations(value: string[]);
    get storage_provider(): string;
    set storage_provider(value: string);
    get azure_tenant_id(): string | undefined;
    set azure_tenant_id(value: string | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get enabled(): boolean | undefined;
    set enabled(value: boolean | undefined);
    get storage_aws_object_acl(): string | undefined;
    set storage_aws_object_acl(value: string | undefined);
    get storage_aws_role_arn(): string | undefined;
    set storage_aws_role_arn(value: string | undefined);
    get storage_blocked_locations(): string[] | undefined;
    set storage_blocked_locations(value: string[] | undefined);
    get type(): string | undefined;
    set type(value: string | undefined);
}
