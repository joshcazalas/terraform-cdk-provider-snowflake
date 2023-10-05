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
export declare class SnowflakeProvider extends TerraformProvider {
    readonly _username?: string;
    readonly _account?: string;
    readonly _region?: string;
    readonly _password?: string;
    readonly _oauth_access_token?: string;
    readonly _private_key_path?: string;
    readonly _private_key?: string;
    readonly _private_key_passphrase?: string;
    readonly _role?: string;
    constructor(scope: Construct, id: string, config: SnowflakeProviderConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get username(): string | undefined;
    get account(): string | undefined;
    get region(): string | undefined;
    get password(): string | undefined;
    get oauth_access_token(): string | undefined;
    get private_key_path(): string | undefined;
    get private_key(): string | undefined;
    get private_key_passphrase(): string | undefined;
    get role(): string | undefined;
}
