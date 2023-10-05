import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface SequenceConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    schema: string;
    comment?: string;
    increment?: number;
}
export declare class Sequence extends TerraformResource {
    _database: string;
    _name: string;
    _schema: string;
    _comment?: string;
    _increment?: number;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: SequenceConfig);
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
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get increment(): number | undefined;
    set increment(value: number | undefined);
}
