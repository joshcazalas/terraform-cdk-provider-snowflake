import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Row_Access_PolicyConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    row_access_expression: string;
    schema: string;
    signature: Record<string, string>;
    comment?: string;
}
export declare class Row_Access_Policy extends TerraformResource {
    _database: string;
    _name: string;
    _row_access_expression: string;
    _schema: string;
    _signature: Record<string, string>;
    _comment?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Row_Access_PolicyConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get database(): string;
    set database(value: string);
    get name(): string;
    set name(value: string);
    get row_access_expression(): string;
    set row_access_expression(value: string);
    get schema(): string;
    set schema(value: string);
    get signature(): Record<string, string>;
    set signature(value: Record<string, string>);
    get comment(): string | undefined;
    set comment(value: string | undefined);
}
