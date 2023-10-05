import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Masking_Policy_Signature {
    readonly column: {
        readonly name: string;
        readonly type: string;
    };
}
export interface Masking_PolicyConfig extends TerraformMetaArguments {
    database: string;
    masking_expression: string;
    name: string;
    return_data_type: string;
    schema: string;
    signature: Masking_Policy_Signature[];
    comment?: string;
    exempt_other_policies?: boolean;
    if_not_exists?: boolean;
    or_replace?: boolean;
}
export declare class Masking_Policy extends TerraformResource {
    _database: string;
    _masking_expression: string;
    _name: string;
    _return_data_type: string;
    _schema: string;
    _signature: Masking_Policy_Signature[];
    _comment?: string;
    _exempt_other_policies?: boolean;
    _if_not_exists?: boolean;
    _or_replace?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Masking_PolicyConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get database(): string;
    set database(value: string);
    get masking_expression(): string;
    set masking_expression(value: string);
    get name(): string;
    set name(value: string);
    get return_data_type(): string;
    set return_data_type(value: string);
    get schema(): string;
    set schema(value: string);
    get signature(): Masking_Policy_Signature[];
    set signature(value: Masking_Policy_Signature[]);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get exempt_other_policies(): boolean | undefined;
    set exempt_other_policies(value: boolean | undefined);
    get if_not_exists(): boolean | undefined;
    set if_not_exists(value: boolean | undefined);
    get or_replace(): boolean | undefined;
    set or_replace(value: boolean | undefined);
}
