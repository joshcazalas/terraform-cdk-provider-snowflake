/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface File_FormatConfig extends TerraformMetaArguments {
    database: string;
    format_type: string;
    name: string;
    schema: string;
    allow_duplicate?: boolean;
    binary_as_text?: boolean;
    binary_format?: string;
    comment?: string;
    compression?: string;
    date_format?: string;
    disable_auto_convert?: boolean;
    disable_snowflake_data?: boolean;
    empty_field_as_null?: boolean;
    enable_octal?: boolean;
    encoding?: string;
    error_on_column_count_mismatch?: boolean;
    escape?: string;
    escape_unenclosed_field?: string;
    field_delimiter?: string;
    field_optionally_enclosed_by?: string;
    file_extension?: string;
    ignore_utf8_errors?: boolean;
    null_if?: string[];
    preserve_space?: boolean;
    record_delimiter?: string;
    replace_invalid_characters?: boolean;
    skip_blank_lines?: boolean;
    skip_byte_order_mark?: boolean;
    skip_header?: number;
    strip_null_values?: boolean;
    strip_outer_array?: boolean;
    strip_outer_element?: boolean;
    time_format?: string;
    timestamp_format?: string;
    trim_space?: boolean;
}

export class File_Format extends TerraformResource {
    _database: string;
    _format_type: string;
    _name: string;
    _schema: string;
    _allow_duplicate?: boolean;
    _binary_as_text?: boolean;
    _binary_format?: string;
    _comment?: string;
    _compression?: string;
    _date_format?: string;
    _disable_auto_convert?: boolean;
    _disable_snowflake_data?: boolean;
    _empty_field_as_null?: boolean;
    _enable_octal?: boolean;
    _encoding?: string;
    _error_on_column_count_mismatch?: boolean;
    _escape?: string;
    _escape_unenclosed_field?: string;
    _field_delimiter?: string;
    _field_optionally_enclosed_by?: string;
    _file_extension?: string;
    _ignore_utf8_errors?: boolean;
    _null_if?: string[];
    _preserve_space?: boolean;
    _record_delimiter?: string;
    _replace_invalid_characters?: boolean;
    _skip_blank_lines?: boolean;
    _skip_byte_order_mark?: boolean;
    _skip_header?: number;
    _strip_null_values?: boolean;
    _strip_outer_array?: boolean;
    _strip_outer_element?: boolean;
    _time_format?: string;
    _timestamp_format?: string;
    _trim_space?: boolean;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: File_FormatConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_file_format",
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
        
        this._format_type = config.format_type;
        
        this._name = config.name;
        
        this._schema = config.schema;
        
        this._allow_duplicate = config.allow_duplicate;
        
        this._binary_as_text = config.binary_as_text;
        
        this._binary_format = config.binary_format;
        
        this._comment = config.comment;
        
        this._compression = config.compression;
        
        this._date_format = config.date_format;
        
        this._disable_auto_convert = config.disable_auto_convert;
        
        this._disable_snowflake_data = config.disable_snowflake_data;
        
        this._empty_field_as_null = config.empty_field_as_null;
        
        this._enable_octal = config.enable_octal;
        
        this._encoding = config.encoding;
        
        this._error_on_column_count_mismatch = config.error_on_column_count_mismatch;
        
        this._escape = config.escape;
        
        this._escape_unenclosed_field = config.escape_unenclosed_field;
        
        this._field_delimiter = config.field_delimiter;
        
        this._field_optionally_enclosed_by = config.field_optionally_enclosed_by;
        
        this._file_extension = config.file_extension;
        
        this._ignore_utf8_errors = config.ignore_utf8_errors;
        
        this._null_if = config.null_if;
        
        this._preserve_space = config.preserve_space;
        
        this._record_delimiter = config.record_delimiter;
        
        this._replace_invalid_characters = config.replace_invalid_characters;
        
        this._skip_blank_lines = config.skip_blank_lines;
        
        this._skip_byte_order_mark = config.skip_byte_order_mark;
        
        this._skip_header = config.skip_header;
        
        this._strip_null_values = config.strip_null_values;
        
        this._strip_outer_array = config.strip_outer_array;
        
        this._strip_outer_element = config.strip_outer_element;
        
        this._time_format = config.time_format;
        
        this._timestamp_format = config.timestamp_format;
        
        this._trim_space = config.trim_space;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            database: this._database,
            format_type: this._format_type,
            name: this._name,
            schema: this._schema,
            allow_duplicate: this._allow_duplicate,
            binary_as_text: this._binary_as_text,
            binary_format: this._binary_format,
            comment: this._comment,
            compression: this._compression,
            date_format: this._date_format,
            disable_auto_convert: this._disable_auto_convert,
            disable_snowflake_data: this._disable_snowflake_data,
            empty_field_as_null: this._empty_field_as_null,
            enable_octal: this._enable_octal,
            encoding: this._encoding,
            error_on_column_count_mismatch: this._error_on_column_count_mismatch,
            escape: this._escape,
            escape_unenclosed_field: this._escape_unenclosed_field,
            field_delimiter: this._field_delimiter,
            field_optionally_enclosed_by: this._field_optionally_enclosed_by,
            file_extension: this._file_extension,
            ignore_utf8_errors: this._ignore_utf8_errors,
            null_if: this._null_if,
            preserve_space: this._preserve_space,
            record_delimiter: this._record_delimiter,
            replace_invalid_characters: this._replace_invalid_characters,
            skip_blank_lines: this._skip_blank_lines,
            skip_byte_order_mark: this._skip_byte_order_mark,
            skip_header: this._skip_header,
            strip_null_values: this._strip_null_values,
            strip_outer_array: this._strip_outer_array,
            strip_outer_element: this._strip_outer_element,
            time_format: this._time_format,
            timestamp_format: this._timestamp_format,
            trim_space: this._trim_space,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_file_format.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get database(): string {
        return this._database
    }

    public set database(value: string) {
        this._database = value;
    }
    
    public get format_type(): string {
        return this._format_type
    }

    public set format_type(value: string) {
        this._format_type = value;
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
    
    public get allow_duplicate(): boolean | undefined {
        return this._allow_duplicate
    }

    public set allow_duplicate(value: boolean | undefined) {
        this._allow_duplicate = value;
    }
    
    public get binary_as_text(): boolean | undefined {
        return this._binary_as_text
    }

    public set binary_as_text(value: boolean | undefined) {
        this._binary_as_text = value;
    }
    
    public get binary_format(): string | undefined {
        return this._binary_format
    }

    public set binary_format(value: string | undefined) {
        this._binary_format = value;
    }
    
    public get comment(): string | undefined {
        return this._comment
    }

    public set comment(value: string | undefined) {
        this._comment = value;
    }
    
    public get compression(): string | undefined {
        return this._compression
    }

    public set compression(value: string | undefined) {
        this._compression = value;
    }
    
    public get date_format(): string | undefined {
        return this._date_format
    }

    public set date_format(value: string | undefined) {
        this._date_format = value;
    }
    
    public get disable_auto_convert(): boolean | undefined {
        return this._disable_auto_convert
    }

    public set disable_auto_convert(value: boolean | undefined) {
        this._disable_auto_convert = value;
    }
    
    public get disable_snowflake_data(): boolean | undefined {
        return this._disable_snowflake_data
    }

    public set disable_snowflake_data(value: boolean | undefined) {
        this._disable_snowflake_data = value;
    }
    
    public get empty_field_as_null(): boolean | undefined {
        return this._empty_field_as_null
    }

    public set empty_field_as_null(value: boolean | undefined) {
        this._empty_field_as_null = value;
    }
    
    public get enable_octal(): boolean | undefined {
        return this._enable_octal
    }

    public set enable_octal(value: boolean | undefined) {
        this._enable_octal = value;
    }
    
    public get encoding(): string | undefined {
        return this._encoding
    }

    public set encoding(value: string | undefined) {
        this._encoding = value;
    }
    
    public get error_on_column_count_mismatch(): boolean | undefined {
        return this._error_on_column_count_mismatch
    }

    public set error_on_column_count_mismatch(value: boolean | undefined) {
        this._error_on_column_count_mismatch = value;
    }
    
    public get escape(): string | undefined {
        return this._escape
    }

    public set escape(value: string | undefined) {
        this._escape = value;
    }
    
    public get escape_unenclosed_field(): string | undefined {
        return this._escape_unenclosed_field
    }

    public set escape_unenclosed_field(value: string | undefined) {
        this._escape_unenclosed_field = value;
    }
    
    public get field_delimiter(): string | undefined {
        return this._field_delimiter
    }

    public set field_delimiter(value: string | undefined) {
        this._field_delimiter = value;
    }
    
    public get field_optionally_enclosed_by(): string | undefined {
        return this._field_optionally_enclosed_by
    }

    public set field_optionally_enclosed_by(value: string | undefined) {
        this._field_optionally_enclosed_by = value;
    }
    
    public get file_extension(): string | undefined {
        return this._file_extension
    }

    public set file_extension(value: string | undefined) {
        this._file_extension = value;
    }
    
    public get ignore_utf8_errors(): boolean | undefined {
        return this._ignore_utf8_errors
    }

    public set ignore_utf8_errors(value: boolean | undefined) {
        this._ignore_utf8_errors = value;
    }
    
    public get null_if(): string[] | undefined {
        return this._null_if
    }

    public set null_if(value: string[] | undefined) {
        this._null_if = value;
    }
    
    public get preserve_space(): boolean | undefined {
        return this._preserve_space
    }

    public set preserve_space(value: boolean | undefined) {
        this._preserve_space = value;
    }
    
    public get record_delimiter(): string | undefined {
        return this._record_delimiter
    }

    public set record_delimiter(value: string | undefined) {
        this._record_delimiter = value;
    }
    
    public get replace_invalid_characters(): boolean | undefined {
        return this._replace_invalid_characters
    }

    public set replace_invalid_characters(value: boolean | undefined) {
        this._replace_invalid_characters = value;
    }
    
    public get skip_blank_lines(): boolean | undefined {
        return this._skip_blank_lines
    }

    public set skip_blank_lines(value: boolean | undefined) {
        this._skip_blank_lines = value;
    }
    
    public get skip_byte_order_mark(): boolean | undefined {
        return this._skip_byte_order_mark
    }

    public set skip_byte_order_mark(value: boolean | undefined) {
        this._skip_byte_order_mark = value;
    }
    
    public get skip_header(): number | undefined {
        return this._skip_header
    }

    public set skip_header(value: number | undefined) {
        this._skip_header = value;
    }
    
    public get strip_null_values(): boolean | undefined {
        return this._strip_null_values
    }

    public set strip_null_values(value: boolean | undefined) {
        this._strip_null_values = value;
    }
    
    public get strip_outer_array(): boolean | undefined {
        return this._strip_outer_array
    }

    public set strip_outer_array(value: boolean | undefined) {
        this._strip_outer_array = value;
    }
    
    public get strip_outer_element(): boolean | undefined {
        return this._strip_outer_element
    }

    public set strip_outer_element(value: boolean | undefined) {
        this._strip_outer_element = value;
    }
    
    public get time_format(): string | undefined {
        return this._time_format
    }

    public set time_format(value: string | undefined) {
        this._time_format = value;
    }
    
    public get timestamp_format(): string | undefined {
        return this._timestamp_format
    }

    public set timestamp_format(value: string | undefined) {
        this._timestamp_format = value;
    }
    
    public get trim_space(): boolean | undefined {
        return this._trim_space
    }

    public set trim_space(value: boolean | undefined) {
        this._trim_space = value;
    }
    
}

