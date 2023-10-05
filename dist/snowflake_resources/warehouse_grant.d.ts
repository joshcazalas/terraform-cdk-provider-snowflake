import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Warehouse_GrantConfig extends TerraformMetaArguments {
    warehouse_name: string;
    enable_multiple_grants?: boolean;
    privilege?: string;
    revert_ownership_to_role_name?: string;
    roles?: string[];
    with_grant_option?: boolean;
}
export declare class Warehouse_Grant extends TerraformResource {
    _warehouse_name: string;
    _enable_multiple_grants?: boolean;
    _privilege?: string;
    _revert_ownership_to_role_name?: string;
    _roles?: string[];
    _with_grant_option?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Warehouse_GrantConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get warehouse_name(): string;
    set warehouse_name(value: string);
    get enable_multiple_grants(): boolean | undefined;
    set enable_multiple_grants(value: boolean | undefined);
    get privilege(): string | undefined;
    set privilege(value: string | undefined);
    get revert_ownership_to_role_name(): string | undefined;
    set revert_ownership_to_role_name(value: string | undefined);
    get roles(): string[] | undefined;
    set roles(value: string[] | undefined);
    get with_grant_option(): boolean | undefined;
    set with_grant_option(value: boolean | undefined);
}
