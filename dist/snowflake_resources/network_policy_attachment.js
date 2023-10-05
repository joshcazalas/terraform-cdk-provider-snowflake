"use strict";
/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Network_Policy_Attachment = void 0;
const cdktf_1 = require("cdktf");
class Network_Policy_Attachment extends cdktf_1.TerraformResource {
    _network_policy_name;
    _set_for_account;
    _users;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_network_policy_attachment",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._network_policy_name = config.network_policy_name;
        this._set_for_account = config.set_for_account;
        this._users = config.users;
    }
    getAttributes() {
        return {
            network_policy_name: this._network_policy_name,
            set_for_account: this._set_for_account,
            users: this._users,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_network_policy_attachment.${this.friendlyUniqueId}.${attribute}}`;
    }
    get network_policy_name() {
        return this._network_policy_name;
    }
    set network_policy_name(value) {
        this._network_policy_name = value;
    }
    get set_for_account() {
        return this._set_for_account;
    }
    set set_for_account(value) {
        this._set_for_account = value;
    }
    get users() {
        return this._users;
    }
    set users(value) {
        this._users = value;
    }
}
exports.Network_Policy_Attachment = Network_Policy_Attachment;
