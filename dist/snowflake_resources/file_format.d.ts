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
    parse_header?: boolean;
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
export declare class File_Format extends TerraformResource {
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
    _parse_header?: boolean;
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
    constructor(scope: Construct, id: string, config: File_FormatConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get database(): string;
    set database(value: string);
    get format_type(): string;
    set format_type(value: string);
    get name(): string;
    set name(value: string);
    get schema(): string;
    set schema(value: string);
    get allow_duplicate(): boolean | undefined;
    set allow_duplicate(value: boolean | undefined);
    get binary_as_text(): boolean | undefined;
    set binary_as_text(value: boolean | undefined);
    get binary_format(): string | undefined;
    set binary_format(value: string | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get compression(): string | undefined;
    set compression(value: string | undefined);
    get date_format(): string | undefined;
    set date_format(value: string | undefined);
    get disable_auto_convert(): boolean | undefined;
    set disable_auto_convert(value: boolean | undefined);
    get disable_snowflake_data(): boolean | undefined;
    set disable_snowflake_data(value: boolean | undefined);
    get empty_field_as_null(): boolean | undefined;
    set empty_field_as_null(value: boolean | undefined);
    get enable_octal(): boolean | undefined;
    set enable_octal(value: boolean | undefined);
    get encoding(): string | undefined;
    set encoding(value: string | undefined);
    get error_on_column_count_mismatch(): boolean | undefined;
    set error_on_column_count_mismatch(value: boolean | undefined);
    get escape(): string | undefined;
    set escape(value: string | undefined);
    get escape_unenclosed_field(): string | undefined;
    set escape_unenclosed_field(value: string | undefined);
    get field_delimiter(): string | undefined;
    set field_delimiter(value: string | undefined);
    get field_optionally_enclosed_by(): string | undefined;
    set field_optionally_enclosed_by(value: string | undefined);
    get file_extension(): string | undefined;
    set file_extension(value: string | undefined);
    get ignore_utf8_errors(): boolean | undefined;
    set ignore_utf8_errors(value: boolean | undefined);
    get null_if(): string[] | undefined;
    set null_if(value: string[] | undefined);
    get parse_header(): boolean | undefined;
    set parse_header(value: boolean | undefined);
    get preserve_space(): boolean | undefined;
    set preserve_space(value: boolean | undefined);
    get record_delimiter(): string | undefined;
    set record_delimiter(value: string | undefined);
    get replace_invalid_characters(): boolean | undefined;
    set replace_invalid_characters(value: boolean | undefined);
    get skip_blank_lines(): boolean | undefined;
    set skip_blank_lines(value: boolean | undefined);
    get skip_byte_order_mark(): boolean | undefined;
    set skip_byte_order_mark(value: boolean | undefined);
    get skip_header(): number | undefined;
    set skip_header(value: number | undefined);
    get strip_null_values(): boolean | undefined;
    set strip_null_values(value: boolean | undefined);
    get strip_outer_array(): boolean | undefined;
    set strip_outer_array(value: boolean | undefined);
    get strip_outer_element(): boolean | undefined;
    set strip_outer_element(value: boolean | undefined);
    get time_format(): string | undefined;
    set time_format(value: string | undefined);
    get timestamp_format(): string | undefined;
    set timestamp_format(value: string | undefined);
    get trim_space(): boolean | undefined;
    set trim_space(value: boolean | undefined);
}
