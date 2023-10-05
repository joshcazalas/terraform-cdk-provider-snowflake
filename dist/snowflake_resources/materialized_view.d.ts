import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Materialized_View_Tag {
    readonly name: string;
    readonly value: string;
    readonly database?: string;
    readonly schema?: string;
}
export interface Materialized_ViewConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    schema: string;
    statement: string;
    warehouse: string;
    comment?: string;
    is_secure?: boolean;
    or_replace?: boolean;
    tag?: Materialized_View_Tag[];
}
export declare class Materialized_View extends TerraformResource {
    _database: string;
    _name: string;
    _schema: string;
    _statement: string;
    _warehouse: string;
    _comment?: string;
    _is_secure?: boolean;
    _or_replace?: boolean;
    _tag?: Materialized_View_Tag[];
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Materialized_ViewConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get database(): string;
    set database(value: string);
    get name(): string;
    set name(value: string);
    get schema(): string;
    set schema(value: string);
    get statement(): string;
    set statement(value: string);
    get warehouse(): string;
    set warehouse(value: string);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get is_secure(): boolean | undefined;
    set is_secure(value: boolean | undefined);
    get or_replace(): boolean | undefined;
    set or_replace(value: boolean | undefined);
    get tag(): Materialized_View_Tag[] | undefined;
    set tag(value: Materialized_View_Tag[] | undefined);
}
