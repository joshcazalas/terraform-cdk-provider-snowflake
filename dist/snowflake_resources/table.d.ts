import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Table_Column {
    readonly name: string;
    readonly type: string;
    readonly comment?: string;
    readonly default?: {
        readonly constant?: string;
        readonly expression?: string;
        readonly sequence?: string;
    };
    readonly identity?: {
        readonly start_num?: number;
        readonly step_num?: number;
    };
    readonly masking_policy?: string;
    readonly nullable?: boolean;
}
export interface Table_Primary_Key {
    readonly keys: string[];
    readonly name?: string;
}
export interface Table_Tag {
    readonly name: string;
    readonly value: string;
    readonly database?: string;
    readonly schema?: string;
}
export interface TableConfig extends TerraformMetaArguments {
    column: Table_Column[];
    database: string;
    name: string;
    schema: string;
    change_tracking?: boolean;
    cluster_by?: string[];
    comment?: string;
    data_retention_days?: number;
    data_retention_time_in_days?: number;
    primary_key?: Table_Primary_Key[];
    tag?: Table_Tag[];
}
export declare class Table extends TerraformResource {
    _column: Table_Column[];
    _database: string;
    _name: string;
    _schema: string;
    _change_tracking?: boolean;
    _cluster_by?: string[];
    _comment?: string;
    _data_retention_days?: number;
    _data_retention_time_in_days?: number;
    _primary_key?: Table_Primary_Key[];
    _tag?: Table_Tag[];
    readonly _id: string;
    constructor(scope: Construct, id: string, config: TableConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get column(): Table_Column[];
    set column(value: Table_Column[]);
    get database(): string;
    set database(value: string);
    get name(): string;
    set name(value: string);
    get schema(): string;
    set schema(value: string);
    get change_tracking(): boolean | undefined;
    set change_tracking(value: boolean | undefined);
    get cluster_by(): string[] | undefined;
    set cluster_by(value: string[] | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get data_retention_days(): number | undefined;
    set data_retention_days(value: number | undefined);
    get data_retention_time_in_days(): number | undefined;
    set data_retention_time_in_days(value: number | undefined);
    get primary_key(): Table_Primary_Key[] | undefined;
    set primary_key(value: Table_Primary_Key[] | undefined);
    get tag(): Table_Tag[] | undefined;
    set tag(value: Table_Tag[] | undefined);
}
