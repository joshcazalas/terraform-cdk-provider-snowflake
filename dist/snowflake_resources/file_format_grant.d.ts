import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface File_Format_GrantConfig extends TerraformMetaArguments {
    database_name: string;
    roles: string[];
    enable_multiple_grants?: boolean;
    file_format_name?: string;
    on_all?: boolean;
    on_future?: boolean;
    privilege?: string;
    revert_ownership_to_role_name?: string;
    schema_name?: string;
    with_grant_option?: boolean;
}
export declare class File_Format_Grant extends TerraformResource {
    _database_name: string;
    _roles: string[];
    _enable_multiple_grants?: boolean;
    _file_format_name?: string;
    _on_all?: boolean;
    _on_future?: boolean;
    _privilege?: string;
    _revert_ownership_to_role_name?: string;
    _schema_name?: string;
    _with_grant_option?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: File_Format_GrantConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get database_name(): string;
    set database_name(value: string);
    get roles(): string[];
    set roles(value: string[]);
    get enable_multiple_grants(): boolean | undefined;
    set enable_multiple_grants(value: boolean | undefined);
    get file_format_name(): string | undefined;
    set file_format_name(value: string | undefined);
    get on_all(): boolean | undefined;
    set on_all(value: boolean | undefined);
    get on_future(): boolean | undefined;
    set on_future(value: boolean | undefined);
    get privilege(): string | undefined;
    set privilege(value: string | undefined);
    get revert_ownership_to_role_name(): string | undefined;
    set revert_ownership_to_role_name(value: string | undefined);
    get schema_name(): string | undefined;
    set schema_name(value: string | undefined);
    get with_grant_option(): boolean | undefined;
    set with_grant_option(value: boolean | undefined);
}
