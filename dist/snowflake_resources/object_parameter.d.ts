import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Object_Parameter_Object_Identifier {
    readonly name: string;
    readonly database?: string;
    readonly schema?: string;
}
export interface Object_ParameterConfig extends TerraformMetaArguments {
    key: string;
    value: string;
    object_identifier?: Object_Parameter_Object_Identifier[];
    object_type?: string;
    on_account?: boolean;
}
export declare class Object_Parameter extends TerraformResource {
    _key: string;
    _value: string;
    _object_identifier?: Object_Parameter_Object_Identifier[];
    _object_type?: string;
    _on_account?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Object_ParameterConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get key(): string;
    set key(value: string);
    get value(): string;
    set value(value: string);
    get object_identifier(): Object_Parameter_Object_Identifier[] | undefined;
    set object_identifier(value: Object_Parameter_Object_Identifier[] | undefined);
    get object_type(): string | undefined;
    set object_type(value: string | undefined);
    get on_account(): boolean | undefined;
    set on_account(value: boolean | undefined);
}
