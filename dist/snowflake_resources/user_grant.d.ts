import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface User_GrantConfig extends TerraformMetaArguments {
    privilege: string;
    user_name: string;
    enable_multiple_grants?: boolean;
    roles?: string[];
    with_grant_option?: boolean;
}
export declare class User_Grant extends TerraformResource {
    _privilege: string;
    _user_name: string;
    _enable_multiple_grants?: boolean;
    _roles?: string[];
    _with_grant_option?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: User_GrantConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get privilege(): string;
    set privilege(value: string);
    get user_name(): string;
    set user_name(value: string);
    get enable_multiple_grants(): boolean | undefined;
    set enable_multiple_grants(value: boolean | undefined);
    get roles(): string[] | undefined;
    set roles(value: string[] | undefined);
    get with_grant_option(): boolean | undefined;
    set with_grant_option(value: boolean | undefined);
}
