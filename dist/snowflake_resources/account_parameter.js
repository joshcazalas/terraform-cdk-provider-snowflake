"use strict";
/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account_Parameter = void 0;
const cdktf_1 = require("cdktf");
class Account_Parameter extends cdktf_1.TerraformResource {
    _key;
    _value;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_account_parameter",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._key = config.key;
        this._value = config.value;
    }
    getAttributes() {
        return {
            key: this._key,
            value: this._value,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_account_parameter.${this.friendlyUniqueId}.${attribute}}`;
    }
    get key() {
        return this._key;
    }
    set key(value) {
        this._key = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
}
exports.Account_Parameter = Account_Parameter;
