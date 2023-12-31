/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface UserConfig extends TerraformMetaArguments {
    name: string;
    comment?: string;
    default_namespace?: string;
    default_role?: string;
    default_secondary_roles?: Set<string>;
    default_warehouse?: string;
    disabled?: boolean;
    display_name?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    login_name?: string;
    must_change_password?: boolean;
    password?: string;
    rsa_public_key?: string;
    rsa_public_key_2?: string;
}

export class User extends TerraformResource {
    _name: string;
    _comment?: string;
    _default_namespace?: string;
    _default_role?: string;
    _default_secondary_roles?: Set<string>;
    _default_warehouse?: string;
    _disabled?: boolean;
    _display_name?: string;
    _email?: string;
    _first_name?: string;
    _last_name?: string;
    _login_name?: string;
    _must_change_password?: boolean;
    _password?: string;
    _rsa_public_key?: string;
    _rsa_public_key_2?: string;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: UserConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_user",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._name = config.name;
        
        this._comment = config.comment;
        
        this._default_namespace = config.default_namespace;
        
        this._default_role = config.default_role;
        
        this._default_secondary_roles = config.default_secondary_roles;
        
        this._default_warehouse = config.default_warehouse;
        
        this._disabled = config.disabled;
        
        this._display_name = config.display_name;
        
        this._email = config.email;
        
        this._first_name = config.first_name;
        
        this._last_name = config.last_name;
        
        this._login_name = config.login_name;
        
        this._must_change_password = config.must_change_password;
        
        this._password = config.password;
        
        this._rsa_public_key = config.rsa_public_key;
        
        this._rsa_public_key_2 = config.rsa_public_key_2;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            name: this._name,
            comment: this._comment,
            default_namespace: this._default_namespace,
            default_role: this._default_role,
            default_secondary_roles: this._default_secondary_roles,
            default_warehouse: this._default_warehouse,
            disabled: this._disabled,
            display_name: this._display_name,
            email: this._email,
            first_name: this._first_name,
            last_name: this._last_name,
            login_name: this._login_name,
            must_change_password: this._must_change_password,
            password: this._password,
            rsa_public_key: this._rsa_public_key,
            rsa_public_key_2: this._rsa_public_key_2,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_user.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value;
    }
    
    public get comment(): string | undefined {
        return this._comment
    }

    public set comment(value: string | undefined) {
        this._comment = value;
    }
    
    public get default_namespace(): string | undefined {
        return this._default_namespace
    }

    public set default_namespace(value: string | undefined) {
        this._default_namespace = value;
    }
    
    public get default_role(): string | undefined {
        return this._default_role
    }

    public set default_role(value: string | undefined) {
        this._default_role = value;
    }
    
    public get default_secondary_roles(): Set<string> | undefined {
        return this._default_secondary_roles
    }

    public set default_secondary_roles(value: Set<string> | undefined) {
        this._default_secondary_roles = value;
    }
    
    public get default_warehouse(): string | undefined {
        return this._default_warehouse
    }

    public set default_warehouse(value: string | undefined) {
        this._default_warehouse = value;
    }
    
    public get disabled(): boolean | undefined {
        return this._disabled
    }

    public set disabled(value: boolean | undefined) {
        this._disabled = value;
    }
    
    public get display_name(): string | undefined {
        return this._display_name
    }

    public set display_name(value: string | undefined) {
        this._display_name = value;
    }
    
    public get email(): string | undefined {
        return this._email
    }

    public set email(value: string | undefined) {
        this._email = value;
    }
    
    public get first_name(): string | undefined {
        return this._first_name
    }

    public set first_name(value: string | undefined) {
        this._first_name = value;
    }
    
    public get last_name(): string | undefined {
        return this._last_name
    }

    public set last_name(value: string | undefined) {
        this._last_name = value;
    }
    
    public get login_name(): string | undefined {
        return this._login_name
    }

    public set login_name(value: string | undefined) {
        this._login_name = value;
    }
    
    public get must_change_password(): boolean | undefined {
        return this._must_change_password
    }

    public set must_change_password(value: boolean | undefined) {
        this._must_change_password = value;
    }
    
    public get password(): string | undefined {
        return this._password
    }

    public set password(value: string | undefined) {
        this._password = value;
    }
    
    public get rsa_public_key(): string | undefined {
        return this._rsa_public_key
    }

    public set rsa_public_key(value: string | undefined) {
        this._rsa_public_key = value;
    }
    
    public get rsa_public_key_2(): string | undefined {
        return this._rsa_public_key_2
    }

    public set rsa_public_key_2(value: string | undefined) {
        this._rsa_public_key_2 = value;
    }
    
}

