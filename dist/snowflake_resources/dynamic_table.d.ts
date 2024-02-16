import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Dynamic_Table_Target_Lag {
    readonly downstream?: boolean;
    readonly maximum_duration?: string;
}
export interface Dynamic_TableConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    query: string;
    schema: string;
    target_lag: Dynamic_Table_Target_Lag[];
    warehouse: string;
    comment?: string;
    initialize?: string;
    or_replace?: boolean;
    refresh_mode?: string;
}
export declare class Dynamic_Table extends TerraformResource {
    _database: string;
    _name: string;
    _query: string;
    _schema: string;
    _target_lag: Dynamic_Table_Target_Lag[];
    _warehouse: string;
    _comment?: string;
    _initialize?: string;
    _or_replace?: boolean;
    _refresh_mode?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Dynamic_TableConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get database(): string;
    set database(value: string);
    get name(): string;
    set name(value: string);
    get query(): string;
    set query(value: string);
    get schema(): string;
    set schema(value: string);
    get target_lag(): Dynamic_Table_Target_Lag[];
    set target_lag(value: Dynamic_Table_Target_Lag[]);
    get warehouse(): string;
    set warehouse(value: string);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get initialize(): string | undefined;
    set initialize(value: string | undefined);
    get or_replace(): boolean | undefined;
    set or_replace(value: boolean | undefined);
    get refresh_mode(): string | undefined;
    set refresh_mode(value: string | undefined);
}
