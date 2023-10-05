import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Stage_Tag {
    readonly name: string;
    readonly value: string;
    readonly database?: string;
    readonly schema?: string;
}
export interface StageConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    schema: string;
    aws_external_id?: string;
    comment?: string;
    copy_options?: string;
    credentials?: string;
    directory?: string;
    encryption?: string;
    file_format?: string;
    snowflake_iam_user?: string;
    storage_integration?: string;
    tag?: Stage_Tag[];
    url?: string;
}
export declare class Stage extends TerraformResource {
    _database: string;
    _name: string;
    _schema: string;
    _aws_external_id?: string;
    _comment?: string;
    _copy_options?: string;
    _credentials?: string;
    _directory?: string;
    _encryption?: string;
    _file_format?: string;
    _snowflake_iam_user?: string;
    _storage_integration?: string;
    _tag?: Stage_Tag[];
    _url?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: StageConfig);
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
    get aws_external_id(): string | undefined;
    set aws_external_id(value: string | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get copy_options(): string | undefined;
    set copy_options(value: string | undefined);
    get credentials(): string | undefined;
    set credentials(value: string | undefined);
    get directory(): string | undefined;
    set directory(value: string | undefined);
    get encryption(): string | undefined;
    set encryption(value: string | undefined);
    get file_format(): string | undefined;
    set file_format(value: string | undefined);
    get snowflake_iam_user(): string | undefined;
    set snowflake_iam_user(value: string | undefined);
    get storage_integration(): string | undefined;
    set storage_integration(value: string | undefined);
    get tag(): Stage_Tag[] | undefined;
    set tag(value: Stage_Tag[] | undefined);
    get url(): string | undefined;
    set url(value: string | undefined);
}
