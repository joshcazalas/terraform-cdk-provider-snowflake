import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Unsafe_ExecuteConfig extends TerraformMetaArguments {
    execute: string;
    revert: string;
    query?: string;
}
export declare class Unsafe_Execute extends TerraformResource {
    _execute: string;
    _revert: string;
    _query?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Unsafe_ExecuteConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get execute(): string;
    set execute(value: string);
    get revert(): string;
    set revert(value: string);
    get query(): string | undefined;
    set query(value: string | undefined);
}
