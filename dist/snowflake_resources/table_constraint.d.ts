import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Table_Constraint_Foreign_Key_Properties {
    readonly match?: string;
    readonly on_delete?: string;
    readonly on_update?: string;
    readonly references?: {
        readonly columns: string[];
        readonly table_id: string;
    };
}
export interface Table_ConstraintConfig extends TerraformMetaArguments {
    columns: string[];
    name: string;
    table_id: string;
    type: string;
    comment?: string;
    deferrable?: boolean;
    enable?: boolean;
    enforced?: boolean;
    foreign_key_properties?: Table_Constraint_Foreign_Key_Properties[];
    initially?: string;
    rely?: boolean;
    validate?: boolean;
}
export declare class Table_Constraint extends TerraformResource {
    _columns: string[];
    _name: string;
    _table_id: string;
    _type: string;
    _comment?: string;
    _deferrable?: boolean;
    _enable?: boolean;
    _enforced?: boolean;
    _foreign_key_properties?: Table_Constraint_Foreign_Key_Properties[];
    _initially?: string;
    _rely?: boolean;
    _validate?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Table_ConstraintConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get columns(): string[];
    set columns(value: string[]);
    get name(): string;
    set name(value: string);
    get table_id(): string;
    set table_id(value: string);
    get type(): string;
    set type(value: string);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get deferrable(): boolean | undefined;
    set deferrable(value: boolean | undefined);
    get enable(): boolean | undefined;
    set enable(value: boolean | undefined);
    get enforced(): boolean | undefined;
    set enforced(value: boolean | undefined);
    get foreign_key_properties(): Table_Constraint_Foreign_Key_Properties[] | undefined;
    set foreign_key_properties(value: Table_Constraint_Foreign_Key_Properties[] | undefined);
    get initially(): string | undefined;
    set initially(value: string | undefined);
    get rely(): boolean | undefined;
    set rely(value: boolean | undefined);
    get validate(): boolean | undefined;
    set validate(value: boolean | undefined);
}
