"use strict";
/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integration_Grant = void 0;
const cdktf_1 = require("cdktf");
class Integration_Grant extends cdktf_1.TerraformResource {
    _integration_name;
    _enable_multiple_grants;
    _privilege;
    _revert_ownership_to_role_name;
    _roles;
    _with_grant_option;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_integration_grant",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._integration_name = config.integration_name;
        this._enable_multiple_grants = config.enable_multiple_grants;
        this._privilege = config.privilege;
        this._revert_ownership_to_role_name = config.revert_ownership_to_role_name;
        this._roles = config.roles;
        this._with_grant_option = config.with_grant_option;
    }
    getAttributes() {
        return {
            integration_name: this._integration_name,
            enable_multiple_grants: this._enable_multiple_grants,
            privilege: this._privilege,
            revert_ownership_to_role_name: this._revert_ownership_to_role_name,
            roles: this._roles,
            with_grant_option: this._with_grant_option,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_integration_grant.${this.friendlyUniqueId}.${attribute}}`;
    }
    get integration_name() {
        return this._integration_name;
    }
    set integration_name(value) {
        this._integration_name = value;
    }
    get enable_multiple_grants() {
        return this._enable_multiple_grants;
    }
    set enable_multiple_grants(value) {
        this._enable_multiple_grants = value;
    }
    get privilege() {
        return this._privilege;
    }
    set privilege(value) {
        this._privilege = value;
    }
    get revert_ownership_to_role_name() {
        return this._revert_ownership_to_role_name;
    }
    set revert_ownership_to_role_name(value) {
        this._revert_ownership_to_role_name = value;
    }
    get roles() {
        return this._roles;
    }
    set roles(value) {
        this._roles = value;
    }
    get with_grant_option() {
        return this._with_grant_option;
    }
    set with_grant_option(value) {
        this._with_grant_option = value;
    }
}
exports.Integration_Grant = Integration_Grant;
