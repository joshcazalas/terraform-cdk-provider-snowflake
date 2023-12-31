"use strict";
/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pipe_Grant = void 0;
const cdktf_1 = require("cdktf");
class Pipe_Grant extends cdktf_1.TerraformResource {
    _database_name;
    _enable_multiple_grants;
    _on_future;
    _pipe_name;
    _privilege;
    _revert_ownership_to_role_name;
    _roles;
    _schema_name;
    _with_grant_option;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_pipe_grant",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._database_name = config.database_name;
        this._enable_multiple_grants = config.enable_multiple_grants;
        this._on_future = config.on_future;
        this._pipe_name = config.pipe_name;
        this._privilege = config.privilege;
        this._revert_ownership_to_role_name = config.revert_ownership_to_role_name;
        this._roles = config.roles;
        this._schema_name = config.schema_name;
        this._with_grant_option = config.with_grant_option;
    }
    getAttributes() {
        return {
            database_name: this._database_name,
            enable_multiple_grants: this._enable_multiple_grants,
            on_future: this._on_future,
            pipe_name: this._pipe_name,
            privilege: this._privilege,
            revert_ownership_to_role_name: this._revert_ownership_to_role_name,
            roles: this._roles,
            schema_name: this._schema_name,
            with_grant_option: this._with_grant_option,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_pipe_grant.${this.friendlyUniqueId}.${attribute}}`;
    }
    get database_name() {
        return this._database_name;
    }
    set database_name(value) {
        this._database_name = value;
    }
    get enable_multiple_grants() {
        return this._enable_multiple_grants;
    }
    set enable_multiple_grants(value) {
        this._enable_multiple_grants = value;
    }
    get on_future() {
        return this._on_future;
    }
    set on_future(value) {
        this._on_future = value;
    }
    get pipe_name() {
        return this._pipe_name;
    }
    set pipe_name(value) {
        this._pipe_name = value;
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
    get schema_name() {
        return this._schema_name;
    }
    set schema_name(value) {
        this._schema_name = value;
    }
    get with_grant_option() {
        return this._with_grant_option;
    }
    set with_grant_option(value) {
        this._with_grant_option = value;
    }
}
exports.Pipe_Grant = Pipe_Grant;
