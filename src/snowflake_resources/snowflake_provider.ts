/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/

import { TerraformProvider } from "cdktf";
import { Construct } from "constructs";

export interface SnowflakeProviderConfig {
    readonly username?: string;
    readonly account?: string;
    readonly region?: string;
    readonly password?: string;
    readonly oauth_access_token?: string;
    readonly private_key_path?: string;
    readonly private_key?: string;
    readonly private_key_passphrase?: string;
    readonly role?: string;
}

export class SnowflakeProvider extends TerraformProvider {
    readonly _username?: string;
    readonly _account?: string;
    readonly _region?: string;
    readonly _password?: string;
    readonly _oauth_access_token?: string;
    readonly _private_key_path?: string;
    readonly _private_key?: string;
    readonly _private_key_passphrase?: string;
    readonly _role?: string;

    public constructor(scope: Construct, id: string, config: SnowflakeProviderConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake",
            terraformGeneratorMetadata: {
                providerName: "snowflake",
                providerVersionConstraint: "0.74.0"
            },
            terraformProviderSource: "terraform-cdk-provider-snowflake"
        })
        this._username = config.username
        this._account = config.account
        this._region = config.region
        this._password = config.password
        this._oauth_access_token = config.oauth_access_token
        this._private_key_path = config.private_key_path
        this._private_key = config.private_key
        this._private_key_passphrase = config.private_key_passphrase
        this._role = config.role
    }

    public getAttributes(): { [name: string]: any } {
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
        }
    }
    
    public get username(): string | undefined {
        return this._username;
    }

    public get account(): string | undefined {
        return this._account;
    }

    public get region(): string | undefined {
        return this._region;
    }

    public get password(): string | undefined {
        return this._password;
    }

    public get oauth_access_token(): string | undefined {
        return this._oauth_access_token;
    }

    public get private_key_path(): string | undefined {
        return this._private_key_path;
    }

    public get private_key(): string | undefined {
        return this._private_key;
    }

    public get private_key_passphrase(): string | undefined {
        return this._private_key_passphrase;
    }

    public get role(): string | undefined {
        return this._role;
    }
}
