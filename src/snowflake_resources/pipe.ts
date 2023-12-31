/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/

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

export class Pipe extends TerraformResource {
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

    public constructor(scope: Construct, id: string, config: PipeConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_pipe",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._copy_statement = config.copy_statement;
        
        this._database = config.database;
        
        this._name = config.name;
        
        this._schema = config.schema;
        
        this._auto_ingest = config.auto_ingest;
        
        this._aws_sns_topic_arn = config.aws_sns_topic_arn;
        
        this._comment = config.comment;
        
        this._error_integration = config.error_integration;
        
        this._integration = config.integration;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            copy_statement: this._copy_statement,
            database: this._database,
            name: this._name,
            schema: this._schema,
            auto_ingest: this._auto_ingest,
            aws_sns_topic_arn: this._aws_sns_topic_arn,
            comment: this._comment,
            error_integration: this._error_integration,
            integration: this._integration,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_pipe.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get copy_statement(): string {
        return this._copy_statement
    }

    public set copy_statement(value: string) {
        this._copy_statement = value;
    }
    
    public get database(): string {
        return this._database
    }

    public set database(value: string) {
        this._database = value;
    }
    
    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value;
    }
    
    public get schema(): string {
        return this._schema
    }

    public set schema(value: string) {
        this._schema = value;
    }
    
    public get auto_ingest(): boolean | undefined {
        return this._auto_ingest
    }

    public set auto_ingest(value: boolean | undefined) {
        this._auto_ingest = value;
    }
    
    public get aws_sns_topic_arn(): string | undefined {
        return this._aws_sns_topic_arn
    }

    public set aws_sns_topic_arn(value: string | undefined) {
        this._aws_sns_topic_arn = value;
    }
    
    public get comment(): string | undefined {
        return this._comment
    }

    public set comment(value: string | undefined) {
        this._comment = value;
    }
    
    public get error_integration(): string | undefined {
        return this._error_integration
    }

    public set error_integration(value: string | undefined) {
        this._error_integration = value;
    }
    
    public get integration(): string | undefined {
        return this._integration
    }

    public set integration(value: string | undefined) {
        this._integration = value;
    }
    
}

