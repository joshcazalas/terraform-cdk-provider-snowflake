import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Integration_GrantConfig extends TerraformMetaArguments {
    integration_name: string;
    enable_multiple_grants?: boolean;
    privilege?: string;
    revert_ownership_to_role_name?: string;
    roles?: Set<string>;
    with_grant_option?: boolean;
}
export declare class Integration_Grant extends TerraformResource {
    _integration_name: string;
    _enable_multiple_grants?: boolean;
    _privilege?: string;
    _revert_ownership_to_role_name?: string;
    _roles?: Set<string>;
    _with_grant_option?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Integration_GrantConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get integration_name(): string;
    set integration_name(value: string);
    get enable_multiple_grants(): boolean | undefined;
    set enable_multiple_grants(value: boolean | undefined);
    get privilege(): string | undefined;
    set privilege(value: string | undefined);
    get revert_ownership_to_role_name(): string | undefined;
    set revert_ownership_to_role_name(value: string | undefined);
    get roles(): Set<string> | undefined;
    set roles(value: Set<string> | undefined);
    get with_grant_option(): boolean | undefined;
    set with_grant_option(value: boolean | undefined);
}
