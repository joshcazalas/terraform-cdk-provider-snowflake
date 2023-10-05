/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";

    export interface Procedure_Arguments {
        readonly name: string;
        readonly type: string;
    }

export interface ProcedureConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    return_type: string;
    schema: string;
    statement: string;
    arguments?: Procedure_Arguments[];
    comment?: string;
    execute_as?: string;
    handler?: string;
    imports?: string[];
    language?: string;
    null_input_behavior?: string;
    packages?: string[];
    return_behavior?: string;
    runtime_version?: string;
}

export class Procedure extends TerraformResource {
    _database: string;
    _name: string;
    _return_type: string;
    _schema: string;
    _statement: string;
    _arguments?: Procedure_Arguments[];
    _comment?: string;
    _execute_as?: string;
    _handler?: string;
    _imports?: string[];
    _language?: string;
    _null_input_behavior?: string;
    _packages?: string[];
    _return_behavior?: string;
    _runtime_version?: string;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: ProcedureConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_procedure",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._database = config.database;
        
        this._name = config.name;
        
        this._return_type = config.return_type;
        
        this._schema = config.schema;
        
        this._statement = config.statement;
        
        this._arguments = config.arguments;
        
        this._comment = config.comment;
        
        this._execute_as = config.execute_as;
        
        this._handler = config.handler;
        
        this._imports = config.imports;
        
        this._language = config.language;
        
        this._null_input_behavior = config.null_input_behavior;
        
        this._packages = config.packages;
        
        this._return_behavior = config.return_behavior;
        
        this._runtime_version = config.runtime_version;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            database: this._database,
            name: this._name,
            return_type: this._return_type,
            schema: this._schema,
            statement: this._statement,
            arguments: this._arguments,
            comment: this._comment,
            execute_as: this._execute_as,
            handler: this._handler,
            imports: this._imports,
            language: this._language,
            null_input_behavior: this._null_input_behavior,
            packages: this._packages,
            return_behavior: this._return_behavior,
            runtime_version: this._runtime_version,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_procedure.${this.friendlyUniqueId}.${attribute}}`;
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
    
    public get return_type(): string {
        return this._return_type
    }

    public set return_type(value: string) {
        this._return_type = value;
    }
    
    public get schema(): string {
        return this._schema
    }

    public set schema(value: string) {
        this._schema = value;
    }
    
    public get statement(): string {
        return this._statement
    }

    public set statement(value: string) {
        this._statement = value;
    }
    
    public get arguments(): Procedure_Arguments[] | undefined {
        return this._arguments
    }

    public set arguments(value: Procedure_Arguments[] | undefined) {
        this._arguments = value;
    }
    
    public get comment(): string | undefined {
        return this._comment
    }

    public set comment(value: string | undefined) {
        this._comment = value;
    }
    
    public get execute_as(): string | undefined {
        return this._execute_as
    }

    public set execute_as(value: string | undefined) {
        this._execute_as = value;
    }
    
    public get handler(): string | undefined {
        return this._handler
    }

    public set handler(value: string | undefined) {
        this._handler = value;
    }
    
    public get imports(): string[] | undefined {
        return this._imports
    }

    public set imports(value: string[] | undefined) {
        this._imports = value;
    }
    
    public get language(): string | undefined {
        return this._language
    }

    public set language(value: string | undefined) {
        this._language = value;
    }
    
    public get null_input_behavior(): string | undefined {
        return this._null_input_behavior
    }

    public set null_input_behavior(value: string | undefined) {
        this._null_input_behavior = value;
    }
    
    public get packages(): string[] | undefined {
        return this._packages
    }

    public set packages(value: string[] | undefined) {
        this._packages = value;
    }
    
    public get return_behavior(): string | undefined {
        return this._return_behavior
    }

    public set return_behavior(value: string | undefined) {
        this._return_behavior = value;
    }
    
    public get runtime_version(): string | undefined {
        return this._runtime_version
    }

    public set runtime_version(value: string | undefined) {
        this._runtime_version = value;
    }
    
}

