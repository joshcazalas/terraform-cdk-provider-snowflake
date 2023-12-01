"use strict";
/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnowflakeProvider = void 0;
const cdktf_1 = require("cdktf");
class SnowflakeProvider extends cdktf_1.TerraformProvider {
    _username;
    _account;
    _region;
    _password;
    _oauth_access_token;
    _private_key_path;
    _private_key;
    _private_key_passphrase;
    _role;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake",
            terraformGeneratorMetadata: {
                providerName: "snowflake",
                providerVersionConstraint: "0.77.0"
            },
            terraformProviderSource: "terraform-cdk-provider-snowflake"
        });
        this._username = config.username;
        this._account = config.account;
        this._region = config.region;
        this._password = config.password;
        this._oauth_access_token = config.oauth_access_token;
        this._private_key_path = config.private_key_path;
        this._private_key = config.private_key;
        this._private_key_passphrase = config.private_key_passphrase;
        this._role = config.role;
    }
    getAttributes() {
        return {
            username: this._username,
            account: this._account,
            region: this._region,
            password: this._password,
            oauth_access_token: this._oauth_access_token,
            private_key_path: this._private_key_path,
            private_key: this._private_key,
            private_key_passphrase: this._private_key_passphrase,
            role: this._role
        };
    }
    get username() {
        return this._username;
    }
    get account() {
        return this._account;
    }
    get region() {
        return this._region;
    }
    get password() {
        return this._password;
    }
    get oauth_access_token() {
        return this._oauth_access_token;
    }
    get private_key_path() {
        return this._private_key_path;
    }
    get private_key() {
        return this._private_key;
    }
    get private_key_passphrase() {
        return this._private_key_passphrase;
    }
    get role() {
        return this._role;
    }
}
exports.SnowflakeProvider = SnowflakeProvider;
