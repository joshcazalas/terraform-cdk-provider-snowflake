import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Resource_Monitor_GrantConfig extends TerraformMetaArguments {
    monitor_name: string;
    enable_multiple_grants?: boolean;
    privilege?: string;
    roles?: string[];
    with_grant_option?: boolean;
}
export declare class Resource_Monitor_Grant extends TerraformResource {
    _monitor_name: string;
    _enable_multiple_grants?: boolean;
    _privilege?: string;
    _roles?: string[];
    _with_grant_option?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Resource_Monitor_GrantConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get monitor_name(): string;
    set monitor_name(value: string);
    get enable_multiple_grants(): boolean | undefined;
    set enable_multiple_grants(value: boolean | undefined);
    get privilege(): string | undefined;
    set privilege(value: string | undefined);
    get roles(): string[] | undefined;
    set roles(value: string[] | undefined);
    get with_grant_option(): boolean | undefined;
    set with_grant_option(value: boolean | undefined);
}
