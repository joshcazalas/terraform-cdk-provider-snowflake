import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Account_ParameterConfig extends TerraformMetaArguments {
    key: string;
    value: string;
}
export declare class Account_Parameter extends TerraformResource {
    _key: string;
    _value: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Account_ParameterConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get key(): string;
    set key(value: string);
    get value(): string;
    set value(value: string);
}
