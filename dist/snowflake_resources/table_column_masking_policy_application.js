"use strict";
/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table_Column_Masking_Policy_Application = void 0;
const cdktf_1 = require("cdktf");
class Table_Column_Masking_Policy_Application extends cdktf_1.TerraformResource {
    _column;
    _masking_policy;
    _table;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_table_column_masking_policy_application",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._column = config.column;
        this._masking_policy = config.masking_policy;
        this._table = config.table;
    }
    getAttributes() {
        return {
            column: this._column,
            masking_policy: this._masking_policy,
            table: this._table,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_table_column_masking_policy_application.${this.friendlyUniqueId}.${attribute}}`;
    }
    get column() {
        return this._column;
    }
    set column(value) {
        this._column = value;
    }
    get masking_policy() {
        return this._masking_policy;
    }
    set masking_policy(value) {
        this._masking_policy = value;
    }
    get table() {
        return this._table;
    }
    set table(value) {
        this._table = value;
    }
}
exports.Table_Column_Masking_Policy_Application = Table_Column_Masking_Policy_Application;
