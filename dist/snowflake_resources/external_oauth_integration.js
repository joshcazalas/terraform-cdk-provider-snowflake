"use strict";
/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.External_Oauth_Integration = void 0;
const cdktf_1 = require("cdktf");
class External_Oauth_Integration extends cdktf_1.TerraformResource {
    _enabled;
    _issuer;
    _name;
    _snowflake_user_mapping_attribute;
    _token_user_mapping_claims;
    _type;
    _allowed_roles;
    _any_role_mode;
    _audience_urls;
    _blocked_roles;
    _comment;
    _jws_keys_urls;
    _rsa_public_key;
    _rsa_public_key_2;
    _scope_delimiter;
    _scope_mapping_attribute;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_external_oauth_integration",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._enabled = config.enabled;
        this._issuer = config.issuer;
        this._name = config.name;
        this._snowflake_user_mapping_attribute = config.snowflake_user_mapping_attribute;
        this._token_user_mapping_claims = config.token_user_mapping_claims;
        this._type = config.type;
        this._allowed_roles = config.allowed_roles;
        this._any_role_mode = config.any_role_mode;
        this._audience_urls = config.audience_urls;
        this._blocked_roles = config.blocked_roles;
        this._comment = config.comment;
        this._jws_keys_urls = config.jws_keys_urls;
        this._rsa_public_key = config.rsa_public_key;
        this._rsa_public_key_2 = config.rsa_public_key_2;
        this._scope_delimiter = config.scope_delimiter;
        this._scope_mapping_attribute = config.scope_mapping_attribute;
    }
    getAttributes() {
        return {
            enabled: this._enabled,
            issuer: this._issuer,
            name: this._name,
            snowflake_user_mapping_attribute: this._snowflake_user_mapping_attribute,
            token_user_mapping_claims: this._token_user_mapping_claims,
            type: this._type,
            allowed_roles: this._allowed_roles,
            any_role_mode: this._any_role_mode,
            audience_urls: this._audience_urls,
            blocked_roles: this._blocked_roles,
            comment: this._comment,
            jws_keys_urls: this._jws_keys_urls,
            rsa_public_key: this._rsa_public_key,
            rsa_public_key_2: this._rsa_public_key_2,
            scope_delimiter: this._scope_delimiter,
            scope_mapping_attribute: this._scope_mapping_attribute,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_external_oauth_integration.${this.friendlyUniqueId}.${attribute}}`;
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        this._enabled = value;
    }
    get issuer() {
        return this._issuer;
    }
    set issuer(value) {
        this._issuer = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get snowflake_user_mapping_attribute() {
        return this._snowflake_user_mapping_attribute;
    }
    set snowflake_user_mapping_attribute(value) {
        this._snowflake_user_mapping_attribute = value;
    }
    get token_user_mapping_claims() {
        return this._token_user_mapping_claims;
    }
    set token_user_mapping_claims(value) {
        this._token_user_mapping_claims = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get allowed_roles() {
        return this._allowed_roles;
    }
    set allowed_roles(value) {
        this._allowed_roles = value;
    }
    get any_role_mode() {
        return this._any_role_mode;
    }
    set any_role_mode(value) {
        this._any_role_mode = value;
    }
    get audience_urls() {
        return this._audience_urls;
    }
    set audience_urls(value) {
        this._audience_urls = value;
    }
    get blocked_roles() {
        return this._blocked_roles;
    }
    set blocked_roles(value) {
        this._blocked_roles = value;
    }
    get comment() {
        return this._comment;
    }
    set comment(value) {
        this._comment = value;
    }
    get jws_keys_urls() {
        return this._jws_keys_urls;
    }
    set jws_keys_urls(value) {
        this._jws_keys_urls = value;
    }
    get rsa_public_key() {
        return this._rsa_public_key;
    }
    set rsa_public_key(value) {
        this._rsa_public_key = value;
    }
    get rsa_public_key_2() {
        return this._rsa_public_key_2;
    }
    set rsa_public_key_2(value) {
        this._rsa_public_key_2 = value;
    }
    get scope_delimiter() {
        return this._scope_delimiter;
    }
    set scope_delimiter(value) {
        this._scope_delimiter = value;
    }
    get scope_mapping_attribute() {
        return this._scope_mapping_attribute;
    }
    set scope_mapping_attribute(value) {
        this._scope_mapping_attribute = value;
    }
}
exports.External_Oauth_Integration = External_Oauth_Integration;
