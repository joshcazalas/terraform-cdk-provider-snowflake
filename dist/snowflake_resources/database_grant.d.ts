import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Database_GrantConfig extends TerraformMetaArguments {
    database_name: string;
    enable_multiple_grants?: boolean;
    privilege?: string;
    revert_ownership_to_role_name?: string;
    roles?: string[];
    shares?: string[];
    with_grant_option?: boolean;
}
export declare class Database_Grant extends TerraformResource {
    _database_name: string;
    _enable_multiple_grants?: boolean;
    _privilege?: string;
    _revert_ownership_to_role_name?: string;
    _roles?: string[];
    _shares?: string[];
    _with_grant_option?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Database_GrantConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get database_name(): string;
    set database_name(value: string);
    get enable_multiple_grants(): boolean | undefined;
    set enable_multiple_grants(value: boolean | undefined);
    get privilege(): string | undefined;
    set privilege(value: string | undefined);
    get revert_ownership_to_role_name(): string | undefined;
    set revert_ownership_to_role_name(value: string | undefined);
    get roles(): string[] | undefined;
    set roles(value: string[] | undefined);
    get shares(): string[] | undefined;
    set shares(value: string[] | undefined);
    get with_grant_option(): boolean | undefined;
    set with_grant_option(value: boolean | undefined);
}