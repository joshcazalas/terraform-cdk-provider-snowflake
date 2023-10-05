"use strict";
/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Managed_Account = void 0;
const cdktf_1 = require("cdktf");
class Managed_Account extends cdktf_1.TerraformResource {
    _admin_name;
    _admin_password;
    _name;
    _comment;
    _type;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_managed_account",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._admin_name = config.admin_name;
        this._admin_password = config.admin_password;
        this._name = config.name;
        this._comment = config.comment;
        this._type = config.type;
    }
    getAttributes() {
        return {
            admin_name: this._admin_name,
            admin_password: this._admin_password,
            name: this._name,
            comment: this._comment,
            type: this._type,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_managed_account.${this.friendlyUniqueId}.${attribute}}`;
    }
    get admin_name() {
        return this._admin_name;
    }
    set admin_name(value) {
        this._admin_name = value;
    }
    get admin_password() {
        return this._admin_password;
    }
    set admin_password(value) {
        this._admin_password = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get comment() {
        return this._comment;
    }
    set comment(value) {
        this._comment = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
}
exports.Managed_Account = Managed_Account;