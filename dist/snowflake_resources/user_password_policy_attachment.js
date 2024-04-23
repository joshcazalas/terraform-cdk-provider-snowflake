"use strict";
/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_Password_Policy_Attachment = void 0;
const cdktf_1 = require("cdktf");
class User_Password_Policy_Attachment extends cdktf_1.TerraformResource {
    _password_policy_name;
    _user_name;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_user_password_policy_attachment",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._password_policy_name = config.password_policy_name;
        this._user_name = config.user_name;
    }
    getAttributes() {
        return {
            password_policy_name: this._password_policy_name,
            user_name: this._user_name,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_user_password_policy_attachment.${this.friendlyUniqueId}.${attribute}}`;
    }
    get password_policy_name() {
        return this._password_policy_name;
    }
    set password_policy_name(value) {
        this._password_policy_name = value;
    }
    get user_name() {
        return this._user_name;
    }
    set user_name(value) {
        this._user_name = value;
    }
}
exports.User_Password_Policy_Attachment = User_Password_Policy_Attachment;