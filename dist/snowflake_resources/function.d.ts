import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Function_Arguments {
    readonly name: string;
    readonly type: string;
}
export interface FunctionConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    return_type: string;
    schema: string;
    statement: string;
    arguments?: Function_Arguments[];
    comment?: string;
    handler?: string;
    imports?: string[];
    is_secure?: boolean;
    language?: string;
    null_input_behavior?: string;
    packages?: string[];
    return_behavior?: string;
    runtime_version?: string;
    target_path?: string;
}
export declare class Function extends TerraformResource {
    _database: string;
    _name: string;
    _return_type: string;
    _schema: string;
    _statement: string;
    _arguments?: Function_Arguments[];
    _comment?: string;
    _handler?: string;
    _imports?: string[];
    _is_secure?: boolean;
    _language?: string;
    _null_input_behavior?: string;
    _packages?: string[];
    _return_behavior?: string;
    _runtime_version?: string;
    _target_path?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: FunctionConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get database(): string;
    set database(value: string);
    get name(): string;
    set name(value: string);
    get return_type(): string;
    set return_type(value: string);
    get schema(): string;
    set schema(value: string);
    get statement(): string;
    set statement(value: string);
    get arguments(): Function_Arguments[] | undefined;
    set arguments(value: Function_Arguments[] | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get handler(): string | undefined;
    set handler(value: string | undefined);
    get imports(): string[] | undefined;
    set imports(value: string[] | undefined);
    get is_secure(): boolean | undefined;
    set is_secure(value: boolean | undefined);
    get language(): string | undefined;
    set language(value: string | undefined);
    get null_input_behavior(): string | undefined;
    set null_input_behavior(value: string | undefined);
    get packages(): string[] | undefined;
    set packages(value: string[] | undefined);
    get return_behavior(): string | undefined;
    set return_behavior(value: string | undefined);
    get runtime_version(): string | undefined;
    set runtime_version(value: string | undefined);
    get target_path(): string | undefined;
    set target_path(value: string | undefined);
}
