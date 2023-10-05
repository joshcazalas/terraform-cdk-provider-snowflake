import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface StreamConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    schema: string;
    append_only?: boolean;
    comment?: string;
    insert_only?: boolean;
    on_stage?: string;
    on_table?: string;
    on_view?: string;
    show_initial_rows?: boolean;
}
export declare class Stream extends TerraformResource {
    _database: string;
    _name: string;
    _schema: string;
    _append_only?: boolean;
    _comment?: string;
    _insert_only?: boolean;
    _on_stage?: string;
    _on_table?: string;
    _on_view?: string;
    _show_initial_rows?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: StreamConfig);
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
    get append_only(): boolean | undefined;
    set append_only(value: boolean | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get insert_only(): boolean | undefined;
    set insert_only(value: boolean | undefined);
    get on_stage(): string | undefined;
    set on_stage(value: string | undefined);
    get on_table(): string | undefined;
    set on_table(value: string | undefined);
    get on_view(): string | undefined;
    set on_view(value: string | undefined);
    get show_initial_rows(): boolean | undefined;
    set show_initial_rows(value: boolean | undefined);
}
