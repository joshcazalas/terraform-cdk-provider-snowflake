import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Table_Column_Masking_Policy_ApplicationConfig extends TerraformMetaArguments {
    column: string;
    masking_policy: string;
    table: string;
}
export declare class Table_Column_Masking_Policy_Application extends TerraformResource {
    _column: string;
    _masking_policy: string;
    _table: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Table_Column_Masking_Policy_ApplicationConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get column(): string;
    set column(value: string);
    get masking_policy(): string;
    set masking_policy(value: string);
    get table(): string;
    set table(value: string);
}
