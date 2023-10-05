import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Grant_Privileges_To_Role_On_Account_Object {
    readonly object_name: string;
    readonly object_type: string;
}
export interface Grant_Privileges_To_Role_On_Schema {
    readonly all_schemas_in_database?: string;
    readonly future_schemas_in_database?: string;
    readonly schema_name?: string;
}
export interface Grant_Privileges_To_Role_On_Schema_Object {
    readonly all?: {
        readonly object_type_plural: string;
        readonly in_database?: string;
        readonly in_schema?: string;
    };
    readonly future?: {
        readonly object_type_plural: string;
        readonly in_database?: string;
        readonly in_schema?: string;
    };
    readonly object_name?: string;
    readonly object_type?: string;
}
export interface Grant_Privileges_To_RoleConfig extends TerraformMetaArguments {
    role_name: string;
    all_privileges?: boolean;
    on_account?: boolean;
    on_account_object?: Grant_Privileges_To_Role_On_Account_Object[];
    on_schema?: Grant_Privileges_To_Role_On_Schema[];
    on_schema_object?: Grant_Privileges_To_Role_On_Schema_Object[];
    privileges?: string[];
    with_grant_option?: boolean;
}
export declare class Grant_Privileges_To_Role extends TerraformResource {
    _role_name: string;
    _all_privileges?: boolean;
    _on_account?: boolean;
    _on_account_object?: Grant_Privileges_To_Role_On_Account_Object[];
    _on_schema?: Grant_Privileges_To_Role_On_Schema[];
    _on_schema_object?: Grant_Privileges_To_Role_On_Schema_Object[];
    _privileges?: string[];
    _with_grant_option?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Grant_Privileges_To_RoleConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get role_name(): string;
    set role_name(value: string);
    get all_privileges(): boolean | undefined;
    set all_privileges(value: boolean | undefined);
    get on_account(): boolean | undefined;
    set on_account(value: boolean | undefined);
    get on_account_object(): Grant_Privileges_To_Role_On_Account_Object[] | undefined;
    set on_account_object(value: Grant_Privileges_To_Role_On_Account_Object[] | undefined);
    get on_schema(): Grant_Privileges_To_Role_On_Schema[] | undefined;
    set on_schema(value: Grant_Privileges_To_Role_On_Schema[] | undefined);
    get on_schema_object(): Grant_Privileges_To_Role_On_Schema_Object[] | undefined;
    set on_schema_object(value: Grant_Privileges_To_Role_On_Schema_Object[] | undefined);
    get privileges(): string[] | undefined;
    set privileges(value: string[] | undefined);
    get with_grant_option(): boolean | undefined;
    set with_grant_option(value: boolean | undefined);
}
