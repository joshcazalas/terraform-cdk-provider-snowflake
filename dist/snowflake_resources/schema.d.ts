import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Schema_Tag {
    readonly name: string;
    readonly value: string;
    readonly database?: string;
    readonly schema?: string;
}
export interface SchemaConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    comment?: string;
    data_retention_days?: number;
    is_managed?: boolean;
    is_transient?: boolean;
    tag?: Schema_Tag[];
}
export declare class Schema extends TerraformResource {
    _database: string;
    _name: string;
    _comment?: string;
    _data_retention_days?: number;
    _is_managed?: boolean;
    _is_transient?: boolean;
    _tag?: Schema_Tag[];
    readonly _id: string;
    constructor(scope: Construct, id: string, config: SchemaConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get database(): string;
    set database(value: string);
    get name(): string;
    set name(value: string);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get data_retention_days(): number | undefined;
    set data_retention_days(value: number | undefined);
    get is_managed(): boolean | undefined;
    set is_managed(value: boolean | undefined);
    get is_transient(): boolean | undefined;
    set is_transient(value: boolean | undefined);
    get tag(): Schema_Tag[] | undefined;
    set tag(value: Schema_Tag[] | undefined);
}
