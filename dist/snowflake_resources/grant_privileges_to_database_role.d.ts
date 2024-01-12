import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Grant_Privileges_To_Database_Role_On_Schema {
    readonly all_schemas_in_database?: string;
    readonly future_schemas_in_database?: string;
    readonly schema_name?: string;
}
export interface Grant_Privileges_To_Database_Role_On_Schema_Object {
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
export interface Grant_Privileges_To_Database_RoleConfig extends TerraformMetaArguments {
    database_role_name: string;
    all_privileges?: boolean;
    always_apply?: boolean;
    always_apply_trigger?: string;
    on_database?: string;
    on_schema?: Grant_Privileges_To_Database_Role_On_Schema[];
    on_schema_object?: Grant_Privileges_To_Database_Role_On_Schema_Object[];
    privileges?: Set<string>;
    with_grant_option?: boolean;
}
export declare class Grant_Privileges_To_Database_Role extends TerraformResource {
    _database_role_name: string;
    _all_privileges?: boolean;
    _always_apply?: boolean;
    _always_apply_trigger?: string;
    _on_database?: string;
    _on_schema?: Grant_Privileges_To_Database_Role_On_Schema[];
    _on_schema_object?: Grant_Privileges_To_Database_Role_On_Schema_Object[];
    _privileges?: Set<string>;
    _with_grant_option?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Grant_Privileges_To_Database_RoleConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get database_role_name(): string;
    set database_role_name(value: string);
    get all_privileges(): boolean | undefined;
    set all_privileges(value: boolean | undefined);
    get always_apply(): boolean | undefined;
    set always_apply(value: boolean | undefined);
    get always_apply_trigger(): string | undefined;
    set always_apply_trigger(value: string | undefined);
    get on_database(): string | undefined;
    set on_database(value: string | undefined);
    get on_schema(): Grant_Privileges_To_Database_Role_On_Schema[] | undefined;
    set on_schema(value: Grant_Privileges_To_Database_Role_On_Schema[] | undefined);
    get on_schema_object(): Grant_Privileges_To_Database_Role_On_Schema_Object[] | undefined;
    set on_schema_object(value: Grant_Privileges_To_Database_Role_On_Schema_Object[] | undefined);
    get privileges(): Set<string> | undefined;
    set privileges(value: Set<string> | undefined);
    get with_grant_option(): boolean | undefined;
    set with_grant_option(value: boolean | undefined);
}
