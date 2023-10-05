import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface PipeConfig extends TerraformMetaArguments {
    copy_statement: string;
    database: string;
    name: string;
    schema: string;
    auto_ingest?: boolean;
    aws_sns_topic_arn?: string;
    comment?: string;
    error_integration?: string;
    integration?: string;
}
export declare class Pipe extends TerraformResource {
    _copy_statement: string;
    _database: string;
    _name: string;
    _schema: string;
    _auto_ingest?: boolean;
    _aws_sns_topic_arn?: string;
    _comment?: string;
    _error_integration?: string;
    _integration?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: PipeConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get copy_statement(): string;
    set copy_statement(value: string);
    get database(): string;
    set database(value: string);
    get name(): string;
    set name(value: string);
    get schema(): string;
    set schema(value: string);
    get auto_ingest(): boolean | undefined;
    set auto_ingest(value: boolean | undefined);
    get aws_sns_topic_arn(): string | undefined;
    set aws_sns_topic_arn(value: string | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get error_integration(): string | undefined;
    set error_integration(value: string | undefined);
    get integration(): string | undefined;
    set integration(value: string | undefined);
}
