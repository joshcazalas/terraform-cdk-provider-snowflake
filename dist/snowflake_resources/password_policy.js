"use strict";
/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password_Policy = void 0;
const cdktf_1 = require("cdktf");
class Password_Policy extends cdktf_1.TerraformResource {
    _database;
    _name;
    _schema;
    _comment;
    _if_not_exists;
    _lockout_time_mins;
    _max_age_days;
    _max_length;
    _max_retries;
    _min_length;
    _min_lower_case_chars;
    _min_numeric_chars;
    _min_special_chars;
    _min_upper_case_chars;
    _or_replace;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_password_policy",
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
        this._comment = config.comment;
        this._if_not_exists = config.if_not_exists;
        this._lockout_time_mins = config.lockout_time_mins;
        this._max_age_days = config.max_age_days;
        this._max_length = config.max_length;
        this._max_retries = config.max_retries;
        this._min_length = config.min_length;
        this._min_lower_case_chars = config.min_lower_case_chars;
        this._min_numeric_chars = config.min_numeric_chars;
        this._min_special_chars = config.min_special_chars;
        this._min_upper_case_chars = config.min_upper_case_chars;
        this._or_replace = config.or_replace;
    }
    getAttributes() {
        return {
            database: this._database,
            name: this._name,
            schema: this._schema,
            comment: this._comment,
            if_not_exists: this._if_not_exists,
            lockout_time_mins: this._lockout_time_mins,
            max_age_days: this._max_age_days,
            max_length: this._max_length,
            max_retries: this._max_retries,
            min_length: this._min_length,
            min_lower_case_chars: this._min_lower_case_chars,
            min_numeric_chars: this._min_numeric_chars,
            min_special_chars: this._min_special_chars,
            min_upper_case_chars: this._min_upper_case_chars,
            or_replace: this._or_replace,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_password_policy.${this.friendlyUniqueId}.${attribute}}`;
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
    get comment() {
        return this._comment;
    }
    set comment(value) {
        this._comment = value;
    }
    get if_not_exists() {
        return this._if_not_exists;
    }
    set if_not_exists(value) {
        this._if_not_exists = value;
    }
    get lockout_time_mins() {
        return this._lockout_time_mins;
    }
    set lockout_time_mins(value) {
        this._lockout_time_mins = value;
    }
    get max_age_days() {
        return this._max_age_days;
    }
    set max_age_days(value) {
        this._max_age_days = value;
    }
    get max_length() {
        return this._max_length;
    }
    set max_length(value) {
        this._max_length = value;
    }
    get max_retries() {
        return this._max_retries;
    }
    set max_retries(value) {
        this._max_retries = value;
    }
    get min_length() {
        return this._min_length;
    }
    set min_length(value) {
        this._min_length = value;
    }
    get min_lower_case_chars() {
        return this._min_lower_case_chars;
    }
    set min_lower_case_chars(value) {
        this._min_lower_case_chars = value;
    }
    get min_numeric_chars() {
        return this._min_numeric_chars;
    }
    set min_numeric_chars(value) {
        this._min_numeric_chars = value;
    }
    get min_special_chars() {
        return this._min_special_chars;
    }
    set min_special_chars(value) {
        this._min_special_chars = value;
    }
    get min_upper_case_chars() {
        return this._min_upper_case_chars;
    }
    set min_upper_case_chars(value) {
        this._min_upper_case_chars = value;
    }
    get or_replace() {
        return this._or_replace;
    }
    set or_replace(value) {
        this._or_replace = value;
    }
}
exports.Password_Policy = Password_Policy;
