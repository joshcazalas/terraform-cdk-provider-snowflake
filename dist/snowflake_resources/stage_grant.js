"use strict";
/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stage_Grant = void 0;
const cdktf_1 = require("cdktf");
class Stage_Grant extends cdktf_1.TerraformResource {
    _database_name;
    _roles;
    _enable_multiple_grants;
    _on_all;
    _on_future;
    _privilege;
    _revert_ownership_to_role_name;
    _schema_name;
    _stage_name;
    _with_grant_option;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_stage_grant",
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
        this._roles = config.roles;
        this._enable_multiple_grants = config.enable_multiple_grants;
        this._on_all = config.on_all;
        this._on_future = config.on_future;
        this._privilege = config.privilege;
        this._revert_ownership_to_role_name = config.revert_ownership_to_role_name;
        this._schema_name = config.schema_name;
        this._stage_name = config.stage_name;
        this._with_grant_option = config.with_grant_option;
    }
    getAttributes() {
        return {
            database_name: this._database_name,
            roles: this._roles,
            enable_multiple_grants: this._enable_multiple_grants,
            on_all: this._on_all,
            on_future: this._on_future,
            privilege: this._privilege,
            revert_ownership_to_role_name: this._revert_ownership_to_role_name,
            schema_name: this._schema_name,
            stage_name: this._stage_name,
            with_grant_option: this._with_grant_option,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_stage_grant.${this.friendlyUniqueId}.${attribute}}`;
    }
    get database_name() {
        return this._database_name;
    }
    set database_name(value) {
        this._database_name = value;
    }
    get roles() {
        return this._roles;
    }
    set roles(value) {
        this._roles = value;
    }
    get enable_multiple_grants() {
        return this._enable_multiple_grants;
    }
    set enable_multiple_grants(value) {
        this._enable_multiple_grants = value;
    }
    get on_all() {
        return this._on_all;
    }
    set on_all(value) {
        this._on_all = value;
    }
    get on_future() {
        return this._on_future;
    }
    set on_future(value) {
        this._on_future = value;
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
    get schema_name() {
        return this._schema_name;
    }
    set schema_name(value) {
        this._schema_name = value;
    }
    get stage_name() {
        return this._stage_name;
    }
    set stage_name(value) {
        this._stage_name = value;
    }
    get with_grant_option() {
        return this._with_grant_option;
    }
    set with_grant_option(value) {
        this._with_grant_option = value;
    }
}
exports.Stage_Grant = Stage_Grant;
