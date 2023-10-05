/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface Saml_IntegrationConfig extends TerraformMetaArguments {
    name: string;
    saml2_issuer: string;
    saml2_provider: string;
    saml2_sso_url: string;
    saml2_x509_cert: string;
    enabled?: boolean;
    saml2_enable_sp_initiated?: boolean;
    saml2_force_authn?: boolean;
    saml2_post_logout_redirect_url?: string;
    saml2_requested_nameid_format?: string;
    saml2_sign_request?: boolean;
    saml2_snowflake_acs_url?: string;
    saml2_snowflake_issuer_url?: string;
    saml2_snowflake_x509_cert?: string;
    saml2_sp_initiated_login_page_label?: string;
}

export class Saml_Integration extends TerraformResource {
    _name: string;
    _saml2_issuer: string;
    _saml2_provider: string;
    _saml2_sso_url: string;
    _saml2_x509_cert: string;
    _enabled?: boolean;
    _saml2_enable_sp_initiated?: boolean;
    _saml2_force_authn?: boolean;
    _saml2_post_logout_redirect_url?: string;
    _saml2_requested_nameid_format?: string;
    _saml2_sign_request?: boolean;
    _saml2_snowflake_acs_url?: string;
    _saml2_snowflake_issuer_url?: string;
    _saml2_snowflake_x509_cert?: string;
    _saml2_sp_initiated_login_page_label?: string;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Saml_IntegrationConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_saml_integration",
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
        
        this._saml2_issuer = config.saml2_issuer;
        
        this._saml2_provider = config.saml2_provider;
        
        this._saml2_sso_url = config.saml2_sso_url;
        
        this._saml2_x509_cert = config.saml2_x509_cert;
        
        this._enabled = config.enabled;
        
        this._saml2_enable_sp_initiated = config.saml2_enable_sp_initiated;
        
        this._saml2_force_authn = config.saml2_force_authn;
        
        this._saml2_post_logout_redirect_url = config.saml2_post_logout_redirect_url;
        
        this._saml2_requested_nameid_format = config.saml2_requested_nameid_format;
        
        this._saml2_sign_request = config.saml2_sign_request;
        
        this._saml2_snowflake_acs_url = config.saml2_snowflake_acs_url;
        
        this._saml2_snowflake_issuer_url = config.saml2_snowflake_issuer_url;
        
        this._saml2_snowflake_x509_cert = config.saml2_snowflake_x509_cert;
        
        this._saml2_sp_initiated_login_page_label = config.saml2_sp_initiated_login_page_label;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            name: this._name,
            saml2_issuer: this._saml2_issuer,
            saml2_provider: this._saml2_provider,
            saml2_sso_url: this._saml2_sso_url,
            saml2_x509_cert: this._saml2_x509_cert,
            enabled: this._enabled,
            saml2_enable_sp_initiated: this._saml2_enable_sp_initiated,
            saml2_force_authn: this._saml2_force_authn,
            saml2_post_logout_redirect_url: this._saml2_post_logout_redirect_url,
            saml2_requested_nameid_format: this._saml2_requested_nameid_format,
            saml2_sign_request: this._saml2_sign_request,
            saml2_snowflake_acs_url: this._saml2_snowflake_acs_url,
            saml2_snowflake_issuer_url: this._saml2_snowflake_issuer_url,
            saml2_snowflake_x509_cert: this._saml2_snowflake_x509_cert,
            saml2_sp_initiated_login_page_label: this._saml2_sp_initiated_login_page_label,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_saml_integration.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value;
    }
    public get saml2_issuer(): string {
        return this._saml2_issuer
    }

    public set saml2_issuer(value: string) {
        this._saml2_issuer = value;
    }
    public get saml2_provider(): string {
        return this._saml2_provider
    }

    public set saml2_provider(value: string) {
        this._saml2_provider = value;
    }
    public get saml2_sso_url(): string {
        return this._saml2_sso_url
    }

    public set saml2_sso_url(value: string) {
        this._saml2_sso_url = value;
    }
    public get saml2_x509_cert(): string {
        return this._saml2_x509_cert
    }

    public set saml2_x509_cert(value: string) {
        this._saml2_x509_cert = value;
    }
    public get enabled(): boolean | undefined {
        return this._enabled
    }

    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    }
    public get saml2_enable_sp_initiated(): boolean | undefined {
        return this._saml2_enable_sp_initiated
    }

    public set saml2_enable_sp_initiated(value: boolean | undefined) {
        this._saml2_enable_sp_initiated = value;
    }
    public get saml2_force_authn(): boolean | undefined {
        return this._saml2_force_authn
    }

    public set saml2_force_authn(value: boolean | undefined) {
        this._saml2_force_authn = value;
    }
    public get saml2_post_logout_redirect_url(): string | undefined {
        return this._saml2_post_logout_redirect_url
    }

    public set saml2_post_logout_redirect_url(value: string | undefined) {
        this._saml2_post_logout_redirect_url = value;
    }
    public get saml2_requested_nameid_format(): string | undefined {
        return this._saml2_requested_nameid_format
    }

    public set saml2_requested_nameid_format(value: string | undefined) {
        this._saml2_requested_nameid_format = value;
    }
    public get saml2_sign_request(): boolean | undefined {
        return this._saml2_sign_request
    }

    public set saml2_sign_request(value: boolean | undefined) {
        this._saml2_sign_request = value;
    }
    public get saml2_snowflake_acs_url(): string | undefined {
        return this._saml2_snowflake_acs_url
    }

    public set saml2_snowflake_acs_url(value: string | undefined) {
        this._saml2_snowflake_acs_url = value;
    }
    public get saml2_snowflake_issuer_url(): string | undefined {
        return this._saml2_snowflake_issuer_url
    }

    public set saml2_snowflake_issuer_url(value: string | undefined) {
        this._saml2_snowflake_issuer_url = value;
    }
    public get saml2_snowflake_x509_cert(): string | undefined {
        return this._saml2_snowflake_x509_cert
    }

    public set saml2_snowflake_x509_cert(value: string | undefined) {
        this._saml2_snowflake_x509_cert = value;
    }
    public get saml2_sp_initiated_login_page_label(): string | undefined {
        return this._saml2_sp_initiated_login_page_label
    }

    public set saml2_sp_initiated_login_page_label(value: string | undefined) {
        this._saml2_sp_initiated_login_page_label = value;
    }
}
