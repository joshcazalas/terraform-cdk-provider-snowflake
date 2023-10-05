"use strict";
/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const cdktf_1 = require("cdktf");
class Task extends cdktf_1.TerraformResource {
    _database;
    _name;
    _schema;
    _sql_statement;
    _after;
    _allow_overlapping_execution;
    _comment;
    _enabled;
    _error_integration;
    _schedule;
    _session_parameters;
    _user_task_managed_initial_warehouse_size;
    _user_task_timeout_ms;
    _warehouse;
    _when;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_task",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._database = config.database;
        this._name = config.name;
        this._schema = config.schema;
        this._sql_statement = config.sql_statement;
        this._after = config.after;
        this._allow_overlapping_execution = config.allow_overlapping_execution;
        this._comment = config.comment;
        this._enabled = config.enabled;
        this._error_integration = config.error_integration;
        this._schedule = config.schedule;
        this._session_parameters = config.session_parameters;
        this._user_task_managed_initial_warehouse_size = config.user_task_managed_initial_warehouse_size;
        this._user_task_timeout_ms = config.user_task_timeout_ms;
        this._warehouse = config.warehouse;
        this._when = config.when;
    }
    getAttributes() {
        return {
            database: this._database,
            name: this._name,
            schema: this._schema,
            sql_statement: this._sql_statement,
            after: this._after,
            allow_overlapping_execution: this._allow_overlapping_execution,
            comment: this._comment,
            enabled: this._enabled,
            error_integration: this._error_integration,
            schedule: this._schedule,
            session_parameters: this._session_parameters,
            user_task_managed_initial_warehouse_size: this._user_task_managed_initial_warehouse_size,
            user_task_timeout_ms: this._user_task_timeout_ms,
            warehouse: this._warehouse,
            when: this._when,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_task.${this.friendlyUniqueId}.${attribute}}`;
    }
    get database() {
        return this._database;
    }
    set database(value) {
        this._database = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get schema() {
        return this._schema;
    }
    set schema(value) {
        this._schema = value;
    }
    get sql_statement() {
        return this._sql_statement;
    }
    set sql_statement(value) {
        this._sql_statement = value;
    }
    get after() {
        return this._after;
    }
    set after(value) {
        this._after = value;
    }
    get allow_overlapping_execution() {
        return this._allow_overlapping_execution;
    }
    set allow_overlapping_execution(value) {
        this._allow_overlapping_execution = value;
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
    get error_integration() {
        return this._error_integration;
    }
    set error_integration(value) {
        this._error_integration = value;
    }
    get schedule() {
        return this._schedule;
    }
    set schedule(value) {
        this._schedule = value;
    }
    get session_parameters() {
        return this._session_parameters;
    }
    set session_parameters(value) {
        this._session_parameters = value;
    }
    get user_task_managed_initial_warehouse_size() {
        return this._user_task_managed_initial_warehouse_size;
    }
    set user_task_managed_initial_warehouse_size(value) {
        this._user_task_managed_initial_warehouse_size = value;
    }
    get user_task_timeout_ms() {
        return this._user_task_timeout_ms;
    }
    set user_task_timeout_ms(value) {
        this._user_task_timeout_ms = value;
    }
    get warehouse() {
        return this._warehouse;
    }
    set warehouse(value) {
        this._warehouse = value;
    }
    get when() {
        return this._when;
    }
    set when(value) {
        this._when = value;
    }
}
exports.Task = Task;
