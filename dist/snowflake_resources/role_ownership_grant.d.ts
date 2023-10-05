import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Role_Ownership_GrantConfig extends TerraformMetaArguments {
    on_role_name: string;
    to_role_name: string;
    current_grants?: string;
    revert_ownership_to_role_name?: string;
}
export declare class Role_Ownership_Grant extends TerraformResource {
    _on_role_name: string;
    _to_role_name: string;
    _current_grants?: string;
    _revert_ownership_to_role_name?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Role_Ownership_GrantConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get on_role_name(): string;
    set on_role_name(value: string);
    get to_role_name(): string;
    set to_role_name(value: string);
    get current_grants(): string | undefined;
    set current_grants(value: string | undefined);
    get revert_ownership_to_role_name(): string | undefined;
    set revert_ownership_to_role_name(value: string | undefined);
}
