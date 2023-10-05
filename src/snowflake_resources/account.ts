/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface AccountConfig extends TerraformMetaArguments {
    admin_name: string;
    edition: string;
    email: string;
    name: string;
    admin_password?: string;
    admin_rsa_public_key?: string;
    comment?: string;
    first_name?: string;
    grace_period_in_days?: number;
    last_name?: string;
    must_change_password?: boolean;
    region?: string;
    region_group?: string;
}

export class Account extends TerraformResource {
    _admin_name: string;
    _edition: string;
    _email: string;
    _name: string;
    _admin_password?: string;
    _admin_rsa_public_key?: string;
    _comment?: string;
    _first_name?: string;
    _grace_period_in_days?: number;
    _last_name?: string;
    _must_change_password?: boolean;
    _region?: string;
    _region_group?: string;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: AccountConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_account",
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
        
        this._edition = config.edition;
        
        this._email = config.email;
        
        this._name = config.name;
        
        this._admin_password = config.admin_password;
        
        this._admin_rsa_public_key = config.admin_rsa_public_key;
        
        this._comment = config.comment;
        
        this._first_name = config.first_name;
        
        this._grace_period_in_days = config.grace_period_in_days;
        
        this._last_name = config.last_name;
        
        this._must_change_password = config.must_change_password;
        
        this._region = config.region;
        
        this._region_group = config.region_group;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            admin_name: this._admin_name,
            edition: this._edition,
            email: this._email,
            name: this._name,
            admin_password: this._admin_password,
            admin_rsa_public_key: this._admin_rsa_public_key,
            comment: this._comment,
            first_name: this._first_name,
            grace_period_in_days: this._grace_period_in_days,
            last_name: this._last_name,
            must_change_password: this._must_change_password,
            region: this._region,
            region_group: this._region_group,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_account.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get admin_name(): string {
        return this._admin_name
    }

    public set admin_name(value: string) {
        this._admin_name = value;
    }
    
    public get edition(): string {
        return this._edition
    }

    public set edition(value: string) {
        this._edition = value;
    }
    
    public get email(): string {
        return this._email
    }

    public set email(value: string) {
        this._email = value;
    }
    
    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value;
    }
    
    public get admin_password(): string | undefined {
        return this._admin_password
    }

    public set admin_password(value: string | undefined) {
        this._admin_password = value;
    }
    
    public get admin_rsa_public_key(): string | undefined {
        return this._admin_rsa_public_key
    }

    public set admin_rsa_public_key(value: string | undefined) {
        this._admin_rsa_public_key = value;
    }
    
    public get comment(): string | undefined {
        return this._comment
    }

    public set comment(value: string | undefined) {
        this._comment = value;
    }
    
    public get first_name(): string | undefined {
        return this._first_name
    }

    public set first_name(value: string | undefined) {
        this._first_name = value;
    }
    
    public get grace_period_in_days(): number | undefined {
        return this._grace_period_in_days
    }

    public set grace_period_in_days(value: number | undefined) {
        this._grace_period_in_days = value;
    }
    
    public get last_name(): string | undefined {
        return this._last_name
    }

    public set last_name(value: string | undefined) {
        this._last_name = value;
    }
    
    public get must_change_password(): boolean | undefined {
        return this._must_change_password
    }

    public set must_change_password(value: boolean | undefined) {
        this._must_change_password = value;
    }
    
    public get region(): string | undefined {
        return this._region
    }

    public set region(value: string | undefined) {
        this._region = value;
    }
    
    public get region_group(): string | undefined {
        return this._region_group
    }

    public set region_group(value: string | undefined) {
        this._region_group = value;
    }
    
}

