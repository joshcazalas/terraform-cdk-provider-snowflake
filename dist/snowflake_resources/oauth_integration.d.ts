import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Oauth_IntegrationConfig extends TerraformMetaArguments {
    name: string;
    oauth_client: string;
    blocked_roles_list?: string[];
    comment?: string;
    enabled?: boolean;
    oauth_client_type?: string;
    oauth_issue_refresh_tokens?: boolean;
    oauth_redirect_uri?: string;
    oauth_refresh_token_validity?: number;
    oauth_use_secondary_roles?: string;
}
export declare class Oauth_Integration extends TerraformResource {
    _name: string;
    _oauth_client: string;
    _blocked_roles_list?: string[];
    _comment?: string;
    _enabled?: boolean;
    _oauth_client_type?: string;
    _oauth_issue_refresh_tokens?: boolean;
    _oauth_redirect_uri?: string;
    _oauth_refresh_token_validity?: number;
    _oauth_use_secondary_roles?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Oauth_IntegrationConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get name(): string;
    set name(value: string);
    get oauth_client(): string;
    set oauth_client(value: string);
    get blocked_roles_list(): string[] | undefined;
    set blocked_roles_list(value: string[] | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get enabled(): boolean | undefined;
    set enabled(value: boolean | undefined);
    get oauth_client_type(): string | undefined;
    set oauth_client_type(value: string | undefined);
    get oauth_issue_refresh_tokens(): boolean | undefined;
    set oauth_issue_refresh_tokens(value: boolean | undefined);
    get oauth_redirect_uri(): string | undefined;
    set oauth_redirect_uri(value: string | undefined);
    get oauth_refresh_token_validity(): number | undefined;
    set oauth_refresh_token_validity(value: number | undefined);
    get oauth_use_secondary_roles(): string | undefined;
    set oauth_use_secondary_roles(value: string | undefined);
}
