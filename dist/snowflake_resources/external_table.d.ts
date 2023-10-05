import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface External_Table_Column {
    readonly as: string;
    readonly name: string;
    readonly type: string;
}
export interface External_Table_Tag {
    readonly name: string;
    readonly value: string;
    readonly database?: string;
    readonly schema?: string;
}
export interface External_TableConfig extends TerraformMetaArguments {
    column: External_Table_Column[];
    database: string;
    file_format: string;
    location: string;
    name: string;
    schema: string;
    auto_refresh?: boolean;
    aws_sns_topic?: string;
    comment?: string;
    copy_grants?: boolean;
    partition_by?: string[];
    pattern?: string;
    refresh_on_create?: boolean;
    tag?: External_Table_Tag[];
}
export declare class External_Table extends TerraformResource {
    _column: External_Table_Column[];
    _database: string;
    _file_format: string;
    _location: string;
    _name: string;
    _schema: string;
    _auto_refresh?: boolean;
    _aws_sns_topic?: string;
    _comment?: string;
    _copy_grants?: boolean;
    _partition_by?: string[];
    _pattern?: string;
    _refresh_on_create?: boolean;
    _tag?: External_Table_Tag[];
    readonly _id: string;
    constructor(scope: Construct, id: string, config: External_TableConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get column(): External_Table_Column[];
    set column(value: External_Table_Column[]);
    get database(): string;
    set database(value: string);
    get file_format(): string;
    set file_format(value: string);
    get location(): string;
    set location(value: string);
    get name(): string;
    set name(value: string);
    get schema(): string;
    set schema(value: string);
    get auto_refresh(): boolean | undefined;
    set auto_refresh(value: boolean | undefined);
    get aws_sns_topic(): string | undefined;
    set aws_sns_topic(value: string | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get copy_grants(): boolean | undefined;
    set copy_grants(value: boolean | undefined);
    get partition_by(): string[] | undefined;
    set partition_by(value: string[] | undefined);
    get pattern(): string | undefined;
    set pattern(value: string | undefined);
    get refresh_on_create(): boolean | undefined;
    set refresh_on_create(value: boolean | undefined);
    get tag(): External_Table_Tag[] | undefined;
    set tag(value: External_Table_Tag[] | undefined);
}
