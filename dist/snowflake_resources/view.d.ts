import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface View_Tag {
    readonly name: string;
    readonly value: string;
    readonly database?: string;
    readonly schema?: string;
}
export interface ViewConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    schema: string;
    statement: string;
    comment?: string;
    copy_grants?: boolean;
    is_secure?: boolean;
    or_replace?: boolean;
    tag?: View_Tag[];
}
export declare class View extends TerraformResource {
    _database: string;
    _name: string;
    _schema: string;
    _statement: string;
    _comment?: string;
    _copy_grants?: boolean;
    _is_secure?: boolean;
    _or_replace?: boolean;
    _tag?: View_Tag[];
    readonly _id: string;
    constructor(scope: Construct, id: string, config: ViewConfig);
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
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get copy_grants(): boolean | undefined;
    set copy_grants(value: boolean | undefined);
    get is_secure(): boolean | undefined;
    set is_secure(value: boolean | undefined);
    get or_replace(): boolean | undefined;
    set or_replace(value: boolean | undefined);
    get tag(): View_Tag[] | undefined;
    set tag(value: View_Tag[] | undefined);
}
