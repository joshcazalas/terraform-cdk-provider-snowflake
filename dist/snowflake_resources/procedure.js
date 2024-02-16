"use strict";
/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Procedure = void 0;
const cdktf_1 = require("cdktf");
class Procedure extends cdktf_1.TerraformResource {
    _database;
    _name;
    _return_type;
    _schema;
    _statement;
    _arguments;
    _comment;
    _execute_as;
    _handler;
    _imports;
    _language;
    _null_input_behavior;
    _packages;
    _return_behavior;
    _runtime_version;
    _secure;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_procedure",
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
        this._return_type = config.return_type;
        this._schema = config.schema;
        this._statement = config.statement;
        this._arguments = config.arguments;
        this._comment = config.comment;
        this._execute_as = config.execute_as;
        this._handler = config.handler;
        this._imports = config.imports;
        this._language = config.language;
        this._null_input_behavior = config.null_input_behavior;
        this._packages = config.packages;
        this._return_behavior = config.return_behavior;
        this._runtime_version = config.runtime_version;
        this._secure = config.secure;
    }
    getAttributes() {
        return {
            database: this._database,
            name: this._name,
            return_type: this._return_type,
            schema: this._schema,
            statement: this._statement,
            arguments: this._arguments,
            comment: this._comment,
            execute_as: this._execute_as,
            handler: this._handler,
            imports: this._imports,
            language: this._language,
            null_input_behavior: this._null_input_behavior,
            packages: this._packages,
            return_behavior: this._return_behavior,
            runtime_version: this._runtime_version,
            secure: this._secure,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_procedure.${this.friendlyUniqueId}.${attribute}}`;
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
    get return_type() {
        return this._return_type;
    }
    set return_type(value) {
        this._return_type = value;
    }
    get schema() {
        return this._schema;
    }
    set schema(value) {
        this._schema = value;
    }
    get statement() {
        return this._statement;
    }
    set statement(value) {
        this._statement = value;
    }
    get arguments() {
        return this._arguments;
    }
    set arguments(value) {
        this._arguments = value;
    }
    get comment() {
        return this._comment;
    }
    set comment(value) {
        this._comment = value;
    }
    get execute_as() {
        return this._execute_as;
    }
    set execute_as(value) {
        this._execute_as = value;
    }
    get handler() {
        return this._handler;
    }
    set handler(value) {
        this._handler = value;
    }
    get imports() {
        return this._imports;
    }
    set imports(value) {
        this._imports = value;
    }
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
    }
    get null_input_behavior() {
        return this._null_input_behavior;
    }
    set null_input_behavior(value) {
        this._null_input_behavior = value;
    }
    get packages() {
        return this._packages;
    }
    set packages(value) {
        this._packages = value;
    }
    get return_behavior() {
        return this._return_behavior;
    }
    set return_behavior(value) {
        this._return_behavior = value;
    }
    get runtime_version() {
        return this._runtime_version;
    }
    set runtime_version(value) {
        this._runtime_version = value;
    }
    get secure() {
        return this._secure;
    }
    set secure(value) {
        this._secure = value;
    }
}
exports.Procedure = Procedure;
