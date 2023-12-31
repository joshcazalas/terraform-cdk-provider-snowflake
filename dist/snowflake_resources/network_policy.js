"use strict";
/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Network_Policy = void 0;
const cdktf_1 = require("cdktf");
class Network_Policy extends cdktf_1.TerraformResource {
    _allowed_ip_list;
    _name;
    _blocked_ip_list;
    _comment;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_network_policy",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._allowed_ip_list = config.allowed_ip_list;
        this._name = config.name;
        this._blocked_ip_list = config.blocked_ip_list;
        this._comment = config.comment;
    }
    getAttributes() {
        return {
            allowed_ip_list: this._allowed_ip_list,
            name: this._name,
            blocked_ip_list: this._blocked_ip_list,
            comment: this._comment,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_network_policy.${this.friendlyUniqueId}.${attribute}}`;
    }
    get allowed_ip_list() {
        return this._allowed_ip_list;
    }
    set allowed_ip_list(value) {
        this._allowed_ip_list = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get blocked_ip_list() {
        return this._blocked_ip_list;
    }
    set blocked_ip_list(value) {
        this._blocked_ip_list = value;
    }
    get comment() {
        return this._comment;
    }
    set comment(value) {
        this._comment = value;
    }
}
exports.Network_Policy = Network_Policy;
