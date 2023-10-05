/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface Api_IntegrationConfig extends TerraformMetaArguments {
    api_allowed_prefixes: string[];
    api_provider: string;
    name: string;
    api_aws_role_arn?: string;
    api_blocked_prefixes?: string[];
    api_gcp_service_account?: string;
    api_key?: string;
    azure_ad_application_id?: string;
    azure_tenant_id?: string;
    comment?: string;
    enabled?: boolean;
    google_audience?: string;
}

export class Api_Integration extends TerraformResource {
    _api_allowed_prefixes: string[];
    _api_provider: string;
    _name: string;
    _api_aws_role_arn?: string;
    _api_blocked_prefixes?: string[];
    _api_gcp_service_account?: string;
    _api_key?: string;
    _azure_ad_application_id?: string;
    _azure_tenant_id?: string;
    _comment?: string;
    _enabled?: boolean;
    _google_audience?: string;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Api_IntegrationConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_api_integration",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._api_allowed_prefixes = config.api_allowed_prefixes;
        
        this._api_provider = config.api_provider;
        
        this._name = config.name;
        
        this._api_aws_role_arn = config.api_aws_role_arn;
        
        this._api_blocked_prefixes = config.api_blocked_prefixes;
        
        this._api_gcp_service_account = config.api_gcp_service_account;
        
        this._api_key = config.api_key;
        
        this._azure_ad_application_id = config.azure_ad_application_id;
        
        this._azure_tenant_id = config.azure_tenant_id;
        
        this._comment = config.comment;
        
        this._enabled = config.enabled;
        
        this._google_audience = config.google_audience;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            api_allowed_prefixes: this._api_allowed_prefixes,
            api_provider: this._api_provider,
            name: this._name,
            api_aws_role_arn: this._api_aws_role_arn,
            api_blocked_prefixes: this._api_blocked_prefixes,
            api_gcp_service_account: this._api_gcp_service_account,
            api_key: this._api_key,
            azure_ad_application_id: this._azure_ad_application_id,
            azure_tenant_id: this._azure_tenant_id,
            comment: this._comment,
            enabled: this._enabled,
            google_audience: this._google_audience,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_api_integration.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get api_allowed_prefixes(): string[] {
        return this._api_allowed_prefixes
    }

    public set api_allowed_prefixes(value: string[]) {
        this._api_allowed_prefixes = value;
    }
    
    public get api_provider(): string {
        return this._api_provider
    }

    public set api_provider(value: string) {
        this._api_provider = value;
    }
    
    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value;
    }
    
    public get api_aws_role_arn(): string | undefined {
        return this._api_aws_role_arn
    }

    public set api_aws_role_arn(value: string | undefined) {
        this._api_aws_role_arn = value;
    }
    
    public get api_blocked_prefixes(): string[] | undefined {
        return this._api_blocked_prefixes
    }

    public set api_blocked_prefixes(value: string[] | undefined) {
        this._api_blocked_prefixes = value;
    }
    
    public get api_gcp_service_account(): string | undefined {
        return this._api_gcp_service_account
    }

    public set api_gcp_service_account(value: string | undefined) {
        this._api_gcp_service_account = value;
    }
    
    public get api_key(): string | undefined {
        return this._api_key
    }

    public set api_key(value: string | undefined) {
        this._api_key = value;
    }
    
    public get azure_ad_application_id(): string | undefined {
        return this._azure_ad_application_id
    }

    public set azure_ad_application_id(value: string | undefined) {
        this._azure_ad_application_id = value;
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
    
    public get google_audience(): string | undefined {
        return this._google_audience
    }

    public set google_audience(value: string | undefined) {
        this._google_audience = value;
    }
    
}

