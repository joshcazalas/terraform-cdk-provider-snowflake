import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Grant_Database_RoleConfig extends TerraformMetaArguments {
    database_role_name: string;
    parent_database_role_name?: string;
    parent_role_name?: string;
    share_name?: string;
}
export declare class Grant_Database_Role extends TerraformResource {
    _database_role_name: string;
    _parent_database_role_name?: string;
    _parent_role_name?: string;
    _share_name?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Grant_Database_RoleConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get database_role_name(): string;
    set database_role_name(value: string);
    get parent_database_role_name(): string | undefined;
    set parent_database_role_name(value: string | undefined);
    get parent_role_name(): string | undefined;
    set parent_role_name(value: string | undefined);
    get share_name(): string | undefined;
    set share_name(value: string | undefined);
}
