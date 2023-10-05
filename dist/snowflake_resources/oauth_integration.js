"use strict";
/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oauth_Integration = void 0;
const cdktf_1 = require("cdktf");
class Oauth_Integration extends cdktf_1.TerraformResource {
    _name;
    _oauth_client;
    _blocked_roles_list;
    _comment;
    _enabled;
    _oauth_client_type;
    _oauth_issue_refresh_tokens;
    _oauth_redirect_uri;
    _oauth_refresh_token_validity;
    _oauth_use_secondary_roles;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_oauth_integration",
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
        this._oauth_client = config.oauth_client;
        this._blocked_roles_list = config.blocked_roles_list;
        this._comment = config.comment;
        this._enabled = config.enabled;
        this._oauth_client_type = config.oauth_client_type;
        this._oauth_issue_refresh_tokens = config.oauth_issue_refresh_tokens;
        this._oauth_redirect_uri = config.oauth_redirect_uri;
        this._oauth_refresh_token_validity = config.oauth_refresh_token_validity;
        this._oauth_use_secondary_roles = config.oauth_use_secondary_roles;
    }
    getAttributes() {
        return {
            name: this._name,
            oauth_client: this._oauth_client,
            blocked_roles_list: this._blocked_roles_list,
            comment: this._comment,
            enabled: this._enabled,
            oauth_client_type: this._oauth_client_type,
            oauth_issue_refresh_tokens: this._oauth_issue_refresh_tokens,
            oauth_redirect_uri: this._oauth_redirect_uri,
            oauth_refresh_token_validity: this._oauth_refresh_token_validity,
            oauth_use_secondary_roles: this._oauth_use_secondary_roles,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_oauth_integration.${this.friendlyUniqueId}.${attribute}}`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get oauth_client() {
        return this._oauth_client;
    }
    set oauth_client(value) {
        this._oauth_client = value;
    }
    get blocked_roles_list() {
        return this._blocked_roles_list;
    }
    set blocked_roles_list(value) {
        this._blocked_roles_list = value;
    }
    get comment() {
        return this._comment;
    }
    set comment(value) {
        this._comment = value;
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        this._enabled = value;
    }
    get oauth_client_type() {
        return this._oauth_client_type;
    }
    set oauth_client_type(value) {
        this._oauth_client_type = value;
    }
    get oauth_issue_refresh_tokens() {
        return this._oauth_issue_refresh_tokens;
    }
    set oauth_issue_refresh_tokens(value) {
        this._oauth_issue_refresh_tokens = value;
    }
    get oauth_redirect_uri() {
        return this._oauth_redirect_uri;
    }
    set oauth_redirect_uri(value) {
        this._oauth_redirect_uri = value;
    }
    get oauth_refresh_token_validity() {
        return this._oauth_refresh_token_validity;
    }
    set oauth_refresh_token_validity(value) {
        this._oauth_refresh_token_validity = value;
    }
    get oauth_use_secondary_roles() {
        return this._oauth_use_secondary_roles;
    }
    set oauth_use_secondary_roles(value) {
        this._oauth_use_secondary_roles = value;
    }
}
exports.Oauth_Integration = Oauth_Integration;
