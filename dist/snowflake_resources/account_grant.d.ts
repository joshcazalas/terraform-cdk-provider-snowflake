import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Account_GrantConfig extends TerraformMetaArguments {
    enable_multiple_grants?: boolean;
    privilege?: string;
    roles?: Set<string>;
    with_grant_option?: boolean;
}
export declare class Account_Grant extends TerraformResource {
    _enable_multiple_grants?: boolean;
    _privilege?: string;
    _roles?: Set<string>;
    _with_grant_option?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Account_GrantConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get enable_multiple_grants(): boolean | undefined;
    set enable_multiple_grants(value: boolean | undefined);
    get privilege(): string | undefined;
    set privilege(value: string | undefined);
    get roles(): Set<string> | undefined;
    set roles(value: Set<string> | undefined);
    get with_grant_option(): boolean | undefined;
    set with_grant_option(value: boolean | undefined);
}
