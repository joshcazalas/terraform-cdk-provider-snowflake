import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface TagConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    schema: string;
    allowed_values?: string[];
    comment?: string;
}
export declare class Tag extends TerraformResource {
    _database: string;
    _name: string;
    _schema: string;
    _allowed_values?: string[];
    _comment?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: TagConfig);
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
    get allowed_values(): string[] | undefined;
    set allowed_values(value: string[] | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
}
