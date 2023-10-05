import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface External_Function_Arg {
    readonly name: string;
    readonly type: string;
}
export interface External_Function_Header {
    readonly name: string;
    readonly value: string;
}
export interface External_FunctionConfig extends TerraformMetaArguments {
    api_integration: string;
    database: string;
    name: string;
    return_behavior: string;
    return_type: string;
    schema: string;
    url_of_proxy_and_resource: string;
    arg?: External_Function_Arg[];
    comment?: string;
    compression?: string;
    context_headers?: string[];
    header?: External_Function_Header[];
    max_batch_rows?: number;
    null_input_behavior?: string;
    request_translator?: string;
    response_translator?: string;
    return_null_allowed?: boolean;
}
export declare class External_Function extends TerraformResource {
    _api_integration: string;
    _database: string;
    _name: string;
    _return_behavior: string;
    _return_type: string;
    _schema: string;
    _url_of_proxy_and_resource: string;
    _arg?: External_Function_Arg[];
    _comment?: string;
    _compression?: string;
    _context_headers?: string[];
    _header?: External_Function_Header[];
    _max_batch_rows?: number;
    _null_input_behavior?: string;
    _request_translator?: string;
    _response_translator?: string;
    _return_null_allowed?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: External_FunctionConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get api_integration(): string;
    set api_integration(value: string);
    get database(): string;
    set database(value: string);
    get name(): string;
    set name(value: string);
    get return_behavior(): string;
    set return_behavior(value: string);
    get return_type(): string;
    set return_type(value: string);
    get schema(): string;
    set schema(value: string);
    get url_of_proxy_and_resource(): string;
    set url_of_proxy_and_resource(value: string);
    get arg(): External_Function_Arg[] | undefined;
    set arg(value: External_Function_Arg[] | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get compression(): string | undefined;
    set compression(value: string | undefined);
    get context_headers(): string[] | undefined;
    set context_headers(value: string[] | undefined);
    get header(): External_Function_Header[] | undefined;
    set header(value: External_Function_Header[] | undefined);
    get max_batch_rows(): number | undefined;
    set max_batch_rows(value: number | undefined);
    get null_input_behavior(): string | undefined;
    set null_input_behavior(value: string | undefined);
    get request_translator(): string | undefined;
    set request_translator(value: string | undefined);
    get response_translator(): string | undefined;
    set response_translator(value: string | undefined);
    get return_null_allowed(): boolean | undefined;
    set return_null_allowed(value: boolean | undefined);
}
