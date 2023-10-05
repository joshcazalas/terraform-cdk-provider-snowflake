import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Failover_Group_GrantConfig extends TerraformMetaArguments {
    roles: string[];
    enable_multiple_grants?: boolean;
    failover_group_name?: string;
    privilege?: string;
    revert_ownership_to_role_name?: string;
    with_grant_option?: boolean;
}
export declare class Failover_Group_Grant extends TerraformResource {
    _roles: string[];
    _enable_multiple_grants?: boolean;
    _failover_group_name?: string;
    _privilege?: string;
    _revert_ownership_to_role_name?: string;
    _with_grant_option?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Failover_Group_GrantConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get roles(): string[];
    set roles(value: string[]);
    get enable_multiple_grants(): boolean | undefined;
    set enable_multiple_grants(value: boolean | undefined);
    get failover_group_name(): string | undefined;
    set failover_group_name(value: string | undefined);
    get privilege(): string | undefined;
    set privilege(value: string | undefined);
    get revert_ownership_to_role_name(): string | undefined;
    set revert_ownership_to_role_name(value: string | undefined);
    get with_grant_option(): boolean | undefined;
    set with_grant_option(value: boolean | undefined);
}
