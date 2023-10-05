import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Role_GrantsConfig extends TerraformMetaArguments {
    role_name: string;
    enable_multiple_grants?: boolean;
    roles?: Set<string>;
    users?: Set<string>;
}
export declare class Role_Grants extends TerraformResource {
    _role_name: string;
    _enable_multiple_grants?: boolean;
    _roles?: Set<string>;
    _users?: Set<string>;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Role_GrantsConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get role_name(): string;
    set role_name(value: string);
    get enable_multiple_grants(): boolean | undefined;
    set enable_multiple_grants(value: boolean | undefined);
    get roles(): Set<string> | undefined;
    set roles(value: Set<string> | undefined);
    get users(): Set<string> | undefined;
    set users(value: Set<string> | undefined);
}
