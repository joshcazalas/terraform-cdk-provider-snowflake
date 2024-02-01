import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Grant_Privileges_To_ShareConfig extends TerraformMetaArguments {
    privileges: Set<string>;
    to_share: string;
    on_all_tables_in_schema?: string;
    on_database?: string;
    on_schema?: string;
    on_table?: string;
    on_tag?: string;
    on_view?: string;
}
export declare class Grant_Privileges_To_Share extends TerraformResource {
    _privileges: Set<string>;
    _to_share: string;
    _on_all_tables_in_schema?: string;
    _on_database?: string;
    _on_schema?: string;
    _on_table?: string;
    _on_tag?: string;
    _on_view?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Grant_Privileges_To_ShareConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get privileges(): Set<string>;
    set privileges(value: Set<string>);
    get to_share(): string;
    set to_share(value: string);
    get on_all_tables_in_schema(): string | undefined;
    set on_all_tables_in_schema(value: string | undefined);
    get on_database(): string | undefined;
    set on_database(value: string | undefined);
    get on_schema(): string | undefined;
    set on_schema(value: string | undefined);
    get on_table(): string | undefined;
    set on_table(value: string | undefined);
    get on_tag(): string | undefined;
    set on_tag(value: string | undefined);
    get on_view(): string | undefined;
    set on_view(value: string | undefined);
}
