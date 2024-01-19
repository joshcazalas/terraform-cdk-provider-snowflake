import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Grant_Account_RoleConfig extends TerraformMetaArguments {
    role_name: string;
    parent_role_name?: string;
    user_name?: string;
}
export declare class Grant_Account_Role extends TerraformResource {
    _role_name: string;
    _parent_role_name?: string;
    _user_name?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Grant_Account_RoleConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get role_name(): string;
    set role_name(value: string);
    get parent_role_name(): string | undefined;
    set parent_role_name(value: string | undefined);
    get user_name(): string | undefined;
    set user_name(value: string | undefined);
}
