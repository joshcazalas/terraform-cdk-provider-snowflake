"use strict";
/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role_Grants = void 0;
const cdktf_1 = require("cdktf");
class Role_Grants extends cdktf_1.TerraformResource {
    _role_name;
    _enable_multiple_grants;
    _roles;
    _users;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_role_grants",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._role_name = config.role_name;
        this._enable_multiple_grants = config.enable_multiple_grants;
        this._roles = config.roles;
        this._users = config.users;
    }
    getAttributes() {
        return {
            role_name: this._role_name,
            enable_multiple_grants: this._enable_multiple_grants,
            roles: this._roles,
            users: this._users,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_role_grants.${this.friendlyUniqueId}.${attribute}}`;
    }
    get role_name() {
        return this._role_name;
    }
    set role_name(value) {
        this._role_name = value;
    }
    get enable_multiple_grants() {
        return this._enable_multiple_grants;
    }
    set enable_multiple_grants(value) {
        this._enable_multiple_grants = value;
    }
    get roles() {
        return this._roles;
    }
    set roles(value) {
        this._roles = value;
    }
    get users() {
        return this._users;
    }
    set users(value) {
        this._users = value;
    }
}
exports.Role_Grants = Role_Grants;
