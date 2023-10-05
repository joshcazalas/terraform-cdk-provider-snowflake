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
export declare class Saml_Integration extends TerraformResource {
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
    constructor(scope: Construct, id: string, config: Saml_IntegrationConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get name(): string;
    set name(value: string);
    get saml2_issuer(): string;
    set saml2_issuer(value: string);
    get saml2_provider(): string;
    set saml2_provider(value: string);
    get saml2_sso_url(): string;
    set saml2_sso_url(value: string);
    get saml2_x509_cert(): string;
    set saml2_x509_cert(value: string);
    get enabled(): boolean | undefined;
    set enabled(value: boolean | undefined);
    get saml2_enable_sp_initiated(): boolean | undefined;
    set saml2_enable_sp_initiated(value: boolean | undefined);
    get saml2_force_authn(): boolean | undefined;
    set saml2_force_authn(value: boolean | undefined);
    get saml2_post_logout_redirect_url(): string | undefined;
    set saml2_post_logout_redirect_url(value: string | undefined);
    get saml2_requested_nameid_format(): string | undefined;
    set saml2_requested_nameid_format(value: string | undefined);
    get saml2_sign_request(): boolean | undefined;
    set saml2_sign_request(value: boolean | undefined);
    get saml2_snowflake_acs_url(): string | undefined;
    set saml2_snowflake_acs_url(value: string | undefined);
    get saml2_snowflake_issuer_url(): string | undefined;
    set saml2_snowflake_issuer_url(value: string | undefined);
    get saml2_snowflake_x509_cert(): string | undefined;
    set saml2_snowflake_x509_cert(value: string | undefined);
    get saml2_sp_initiated_login_page_label(): string | undefined;
    set saml2_sp_initiated_login_page_label(value: string | undefined);
}
