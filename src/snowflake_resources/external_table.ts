/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";

    export interface External_Table_Column {
        readonly as: string;
        readonly name: string;
        readonly type: string;
    }
    export interface External_Table_Tag {
        readonly name: string;
        readonly value: string;
        readonly database?: string;
        readonly schema?: string;
    }

export interface External_TableConfig extends TerraformMetaArguments {
    column: External_Table_Column[];
    database: string;
    file_format: string;
    location: string;
    name: string;
    schema: string;
    auto_refresh?: boolean;
    aws_sns_topic?: string;
    comment?: string;
    copy_grants?: boolean;
    partition_by?: string[];
    pattern?: string;
    refresh_on_create?: boolean;
    tag?: External_Table_Tag[];
}

export class External_Table extends TerraformResource {
    _column: External_Table_Column[];
    _database: string;
    _file_format: string;
    _location: string;
    _name: string;
    _schema: string;
    _auto_refresh?: boolean;
    _aws_sns_topic?: string;
    _comment?: string;
    _copy_grants?: boolean;
    _partition_by?: string[];
    _pattern?: string;
    _refresh_on_create?: boolean;
    _tag?: External_Table_Tag[];
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: External_TableConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_external_table",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._column = config.column;
        
        this._database = config.database;
        
        this._file_format = config.file_format;
        
        this._location = config.location;
        
        this._name = config.name;
        
        this._schema = config.schema;
        
        this._auto_refresh = config.auto_refresh;
        
        this._aws_sns_topic = config.aws_sns_topic;
        
        this._comment = config.comment;
        
        this._copy_grants = config.copy_grants;
        
        this._partition_by = config.partition_by;
        
        this._pattern = config.pattern;
        
        this._refresh_on_create = config.refresh_on_create;
        
        this._tag = config.tag;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            column: this._column,
            database: this._database,
            file_format: this._file_format,
            location: this._location,
            name: this._name,
            schema: this._schema,
            auto_refresh: this._auto_refresh,
            aws_sns_topic: this._aws_sns_topic,
            comment: this._comment,
            copy_grants: this._copy_grants,
            partition_by: this._partition_by,
            pattern: this._pattern,
            refresh_on_create: this._refresh_on_create,
            tag: this._tag,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_external_table.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get column(): External_Table_Column[] {
        return this._column
    }

    public set column(value: External_Table_Column[]) {
        this._column = value;
    }
    
    public get database(): string {
        return this._database
    }

    public set database(value: string) {
        this._database = value;
    }
    
    public get file_format(): string {
        return this._file_format
    }

    public set file_format(value: string) {
        this._file_format = value;
    }
    
    public get location(): string {
        return this._location
    }

    public set location(value: string) {
        this._location = value;
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
    
    public get auto_refresh(): boolean | undefined {
        return this._auto_refresh
    }

    public set auto_refresh(value: boolean | undefined) {
        this._auto_refresh = value;
    }
    
    public get aws_sns_topic(): string | undefined {
        return this._aws_sns_topic
    }

    public set aws_sns_topic(value: string | undefined) {
        this._aws_sns_topic = value;
    }
    
    public get comment(): string | undefined {
        return this._comment
    }

    public set comment(value: string | undefined) {
        this._comment = value;
    }
    
    public get copy_grants(): boolean | undefined {
        return this._copy_grants
    }

    public set copy_grants(value: boolean | undefined) {
        this._copy_grants = value;
    }
    
    public get partition_by(): string[] | undefined {
        return this._partition_by
    }

    public set partition_by(value: string[] | undefined) {
        this._partition_by = value;
    }
    
    public get pattern(): string | undefined {
        return this._pattern
    }

    public set pattern(value: string | undefined) {
        this._pattern = value;
    }
    
    public get refresh_on_create(): boolean | undefined {
        return this._refresh_on_create
    }

    public set refresh_on_create(value: boolean | undefined) {
        this._refresh_on_create = value;
    }
    
    public get tag(): External_Table_Tag[] | undefined {
        return this._tag
    }

    public set tag(value: External_Table_Tag[] | undefined) {
        this._tag = value;
    }
    
}

