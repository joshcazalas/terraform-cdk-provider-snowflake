"use strict";
/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Row_Access_Policy = void 0;
const cdktf_1 = require("cdktf");
class Row_Access_Policy extends cdktf_1.TerraformResource {
    _database;
    _name;
    _row_access_expression;
    _schema;
    _signature;
    _comment;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_row_access_policy",
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
        this._row_access_expression = config.row_access_expression;
        this._schema = config.schema;
        this._signature = config.signature;
        this._comment = config.comment;
    }
    getAttributes() {
        return {
            database: this._database,
            name: this._name,
            row_access_expression: this._row_access_expression,
            schema: this._schema,
            signature: this._signature,
            comment: this._comment,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_row_access_policy.${this.friendlyUniqueId}.${attribute}}`;
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
    get row_access_expression() {
        return this._row_access_expression;
    }
    set row_access_expression(value) {
        this._row_access_expression = value;
    }
    get schema() {
        return this._schema;
    }
    set schema(value) {
        this._schema = value;
    }
    get signature() {
        return this._signature;
    }
    set signature(value) {
        this._signature = value;
    }
    get comment() {
        return this._comment;
    }
    set comment(value) {
        this._comment = value;
    }
}
exports.Row_Access_Policy = Row_Access_Policy;
