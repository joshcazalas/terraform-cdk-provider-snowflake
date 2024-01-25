/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";

    export interface Grant_Privileges_To_Account_Role_On_Account_Object {
        readonly object_name: string;
        readonly object_type: string;
    }
    export interface Grant_Privileges_To_Account_Role_On_Schema {
        readonly all_schemas_in_database?: string;
        readonly future_schemas_in_database?: string;
        readonly schema_name?: string;
    }
    export interface Grant_Privileges_To_Account_Role_On_Schema_Object {
        readonly all?: {readonly object_type_plural: string; readonly in_database?: string; readonly in_schema?: string; };
        readonly future?: {readonly object_type_plural: string; readonly in_database?: string; 
readonly in_schema?: string; };
        readonly object_name?: string;
        readonly object_type?: string;
    }

export interface Grant_Privileges_To_Account_RoleConfig extends TerraformMetaArguments {
    account_role_name: string;
    all_privileges?: boolean;
    always_apply?: boolean;
    always_apply_trigger?: string;
    on_account?: boolean;
    on_account_object?: Grant_Privileges_To_Account_Role_On_Account_Object[];
    on_schema?: Grant_Privileges_To_Account_Role_On_Schema[];
    on_schema_object?: Grant_Privileges_To_Account_Role_On_Schema_Object[];
    privileges?: Set<string>;
    with_grant_option?: boolean;
}

export class Grant_Privileges_To_Account_Role extends TerraformResource {
    _account_role_name: string;
    _all_privileges?: boolean;
    _always_apply?: boolean;
    _always_apply_trigger?: string;
    _on_account?: boolean;
    _on_account_object?: Grant_Privileges_To_Account_Role_On_Account_Object[];
    _on_schema?: Grant_Privileges_To_Account_Role_On_Schema[];
    _on_schema_object?: Grant_Privileges_To_Account_Role_On_Schema_Object[];
    _privileges?: Set<string>;
    _with_grant_option?: boolean;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Grant_Privileges_To_Account_RoleConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_grant_privileges_to_account_role",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._account_role_name = config.account_role_name;
        
        this._all_privileges = config.all_privileges;
        
        this._always_apply = config.always_apply;
        
        this._always_apply_trigger = config.always_apply_trigger;
        
        this._on_account = config.on_account;
        
        this._on_account_object = config.on_account_object;
        
        this._on_schema = config.on_schema;
        
        this._on_schema_object = config.on_schema_object;
        
        this._privileges = config.privileges;
        
        this._with_grant_option = config.with_grant_option;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            account_role_name: this._account_role_name,
            all_privileges: this._all_privileges,
            always_apply: this._always_apply,
            always_apply_trigger: this._always_apply_trigger,
            on_account: this._on_account,
            on_account_object: this._on_account_object,
            on_schema: this._on_schema,
            on_schema_object: this._on_schema_object,
            privileges: this._privileges,
            with_grant_option: this._with_grant_option,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_grant_privileges_to_account_role.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get account_role_name(): string {
        return this._account_role_name
    }

    public set account_role_name(value: string) {
        this._account_role_name = value;
    }
    
    public get all_privileges(): boolean | undefined {
        return this._all_privileges
    }

    public set all_privileges(value: boolean | undefined) {
        this._all_privileges = value;
    }
    
    public get always_apply(): boolean | undefined {
        return this._always_apply
    }

    public set always_apply(value: boolean | undefined) {
        this._always_apply = value;
    }
    
    public get always_apply_trigger(): string | undefined {
        return this._always_apply_trigger
    }

    public set always_apply_trigger(value: string | undefined) {
        this._always_apply_trigger = value;
    }
    
    public get on_account(): boolean | undefined {
        return this._on_account
    }

    public set on_account(value: boolean | undefined) {
        this._on_account = value;
    }
    
    public get on_account_object(): Grant_Privileges_To_Account_Role_On_Account_Object[] | undefined {
        return this._on_account_object
    }

    public set on_account_object(value: Grant_Privileges_To_Account_Role_On_Account_Object[] | undefined) {
        this._on_account_object = value;
    }
    
    public get on_schema(): Grant_Privileges_To_Account_Role_On_Schema[] | undefined {
        return this._on_schema
    }

    public set on_schema(value: Grant_Privileges_To_Account_Role_On_Schema[] | undefined) {
        this._on_schema = value;
    }
    
    public get on_schema_object(): Grant_Privileges_To_Account_Role_On_Schema_Object[] | undefined {
        return this._on_schema_object
    }

    public set on_schema_object(value: Grant_Privileges_To_Account_Role_On_Schema_Object[] | undefined) {
        this._on_schema_object = value;
    }
    
    public get privileges(): Set<string> | undefined {
        return this._privileges
    }

    public set privileges(value: Set<string> | undefined) {
        this._privileges = value;
    }
    
    public get with_grant_option(): boolean | undefined {
        return this._with_grant_option
    }

    public set with_grant_option(value: boolean | undefined) {
        this._with_grant_option = value;
    }
    
}

