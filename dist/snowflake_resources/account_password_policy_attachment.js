"use strict";
/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account_Password_Policy_Attachment = void 0;
const cdktf_1 = require("cdktf");
class Account_Password_Policy_Attachment extends cdktf_1.TerraformResource {
    _password_policy;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_account_password_policy_attachment",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._password_policy = config.password_policy;
    }
    getAttributes() {
        return {
            password_policy: this._password_policy,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_account_password_policy_attachment.${this.friendlyUniqueId}.${attribute}}`;
    }
    get password_policy() {
        return this._password_policy;
    }
    set password_policy(value) {
        this._password_policy = value;
    }
}
exports.Account_Password_Policy_Attachment = Account_Password_Policy_Attachment;