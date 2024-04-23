"use strict";
/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grant_Privileges_To_Database_Role = void 0;
const cdktf_1 = require("cdktf");
class Grant_Privileges_To_Database_Role extends cdktf_1.TerraformResource {
    _database_role_name;
    _all_privileges;
    _always_apply;
    _always_apply_trigger;
    _on_database;
    _on_schema;
    _on_schema_object;
    _privileges;
    _with_grant_option;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_grant_privileges_to_database_role",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._database_role_name = config.database_role_name;
        this._all_privileges = config.all_privileges;
        this._always_apply = config.always_apply;
        this._always_apply_trigger = config.always_apply_trigger;
        this._on_database = config.on_database;
        this._on_schema = config.on_schema;
        this._on_schema_object = config.on_schema_object;
        this._privileges = config.privileges;
        this._with_grant_option = config.with_grant_option;
    }
    getAttributes() {
        return {
            database_role_name: this._database_role_name,
            all_privileges: this._all_privileges,
            always_apply: this._always_apply,
            always_apply_trigger: this._always_apply_trigger,
            on_database: this._on_database,
            on_schema: this._on_schema,
            on_schema_object: this._on_schema_object,
            privileges: this._privileges,
            with_grant_option: this._with_grant_option,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_grant_privileges_to_database_role.${this.friendlyUniqueId}.${attribute}}`;
    }
    get database_role_name() {
        return this._database_role_name;
    }
    set database_role_name(value) {
        this._database_role_name = value;
    }
    get all_privileges() {
        return this._all_privileges;
    }
    set all_privileges(value) {
        this._all_privileges = value;
    }
    get always_apply() {
        return this._always_apply;
    }
    set always_apply(value) {
        this._always_apply = value;
    }
    get always_apply_trigger() {
        return this._always_apply_trigger;
    }
    set always_apply_trigger(value) {
        this._always_apply_trigger = value;
    }
    get on_database() {
        return this._on_database;
    }
    set on_database(value) {
        this._on_database = value;
    }
    get on_schema() {
        return this._on_schema;
    }
    set on_schema(value) {
        this._on_schema = value;
    }
    get on_schema_object() {
        return this._on_schema_object;
    }
    set on_schema_object(value) {
        this._on_schema_object = value;
    }
    get privileges() {
        return this._privileges;
    }
    set privileges(value) {
        this._privileges = value;
    }
    get with_grant_option() {
        return this._with_grant_option;
    }
    set with_grant_option(value) {
        this._with_grant_option = value;
    }
}
exports.Grant_Privileges_To_Database_Role = Grant_Privileges_To_Database_Role;