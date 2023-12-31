"use strict";
/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table_Constraint = void 0;
const cdktf_1 = require("cdktf");
class Table_Constraint extends cdktf_1.TerraformResource {
    _columns;
    _name;
    _table_id;
    _type;
    _comment;
    _deferrable;
    _enable;
    _enforced;
    _foreign_key_properties;
    _initially;
    _rely;
    _validate;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_table_constraint",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._columns = config.columns;
        this._name = config.name;
        this._table_id = config.table_id;
        this._type = config.type;
        this._comment = config.comment;
        this._deferrable = config.deferrable;
        this._enable = config.enable;
        this._enforced = config.enforced;
        this._foreign_key_properties = config.foreign_key_properties;
        this._initially = config.initially;
        this._rely = config.rely;
        this._validate = config.validate;
    }
    getAttributes() {
        return {
            columns: this._columns,
            name: this._name,
            table_id: this._table_id,
            type: this._type,
            comment: this._comment,
            deferrable: this._deferrable,
            enable: this._enable,
            enforced: this._enforced,
            foreign_key_properties: this._foreign_key_properties,
            initially: this._initially,
            rely: this._rely,
            validate: this._validate,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_table_constraint.${this.friendlyUniqueId}.${attribute}}`;
    }
    get columns() {
        return this._columns;
    }
    set columns(value) {
        this._columns = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get table_id() {
        return this._table_id;
    }
    set table_id(value) {
        this._table_id = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get comment() {
        return this._comment;
    }
    set comment(value) {
        this._comment = value;
    }
    get deferrable() {
        return this._deferrable;
    }
    set deferrable(value) {
        this._deferrable = value;
    }
    get enable() {
        return this._enable;
    }
    set enable(value) {
        this._enable = value;
    }
    get enforced() {
        return this._enforced;
    }
    set enforced(value) {
        this._enforced = value;
    }
    get foreign_key_properties() {
        return this._foreign_key_properties;
    }
    set foreign_key_properties(value) {
        this._foreign_key_properties = value;
    }
    get initially() {
        return this._initially;
    }
    set initially(value) {
        this._initially = value;
    }
    get rely() {
        return this._rely;
    }
    set rely(value) {
        this._rely = value;
    }
    get validate() {
        return this._validate;
    }
    set validate(value) {
        this._validate = value;
    }
}
exports.Table_Constraint = Table_Constraint;
