/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface Password_PolicyConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    schema: string;
    comment?: string;
    history?: number;
    if_not_exists?: boolean;
    lockout_time_mins?: number;
    max_age_days?: number;
    max_length?: number;
    max_retries?: number;
    min_age_days?: number;
    min_length?: number;
    min_lower_case_chars?: number;
    min_numeric_chars?: number;
    min_special_chars?: number;
    min_upper_case_chars?: number;
    or_replace?: boolean;
}

export class Password_Policy extends TerraformResource {
    _database: string;
    _name: string;
    _schema: string;
    _comment?: string;
    _history?: number;
    _if_not_exists?: boolean;
    _lockout_time_mins?: number;
    _max_age_days?: number;
    _max_length?: number;
    _max_retries?: number;
    _min_age_days?: number;
    _min_length?: number;
    _min_lower_case_chars?: number;
    _min_numeric_chars?: number;
    _min_special_chars?: number;
    _min_upper_case_chars?: number;
    _or_replace?: boolean;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Password_PolicyConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_password_policy",
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
        
        this._schema = config.schema;
        
        this._comment = config.comment;
        
        this._history = config.history;
        
        this._if_not_exists = config.if_not_exists;
        
        this._lockout_time_mins = config.lockout_time_mins;
        
        this._max_age_days = config.max_age_days;
        
        this._max_length = config.max_length;
        
        this._max_retries = config.max_retries;
        
        this._min_age_days = config.min_age_days;
        
        this._min_length = config.min_length;
        
        this._min_lower_case_chars = config.min_lower_case_chars;
        
        this._min_numeric_chars = config.min_numeric_chars;
        
        this._min_special_chars = config.min_special_chars;
        
        this._min_upper_case_chars = config.min_upper_case_chars;
        
        this._or_replace = config.or_replace;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            database: this._database,
            name: this._name,
            schema: this._schema,
            comment: this._comment,
            history: this._history,
            if_not_exists: this._if_not_exists,
            lockout_time_mins: this._lockout_time_mins,
            max_age_days: this._max_age_days,
            max_length: this._max_length,
            max_retries: this._max_retries,
            min_age_days: this._min_age_days,
            min_length: this._min_length,
            min_lower_case_chars: this._min_lower_case_chars,
            min_numeric_chars: this._min_numeric_chars,
            min_special_chars: this._min_special_chars,
            min_upper_case_chars: this._min_upper_case_chars,
            or_replace: this._or_replace,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_password_policy.${this.friendlyUniqueId}.${attribute}}`;
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
    
    public get comment(): string | undefined {
        return this._comment
    }

    public set comment(value: string | undefined) {
        this._comment = value;
    }
    
    public get history(): number | undefined {
        return this._history
    }

    public set history(value: number | undefined) {
        this._history = value;
    }
    
    public get if_not_exists(): boolean | undefined {
        return this._if_not_exists
    }

    public set if_not_exists(value: boolean | undefined) {
        this._if_not_exists = value;
    }
    
    public get lockout_time_mins(): number | undefined {
        return this._lockout_time_mins
    }

    public set lockout_time_mins(value: number | undefined) {
        this._lockout_time_mins = value;
    }
    
    public get max_age_days(): number | undefined {
        return this._max_age_days
    }

    public set max_age_days(value: number | undefined) {
        this._max_age_days = value;
    }
    
    public get max_length(): number | undefined {
        return this._max_length
    }

    public set max_length(value: number | undefined) {
        this._max_length = value;
    }
    
    public get max_retries(): number | undefined {
        return this._max_retries
    }

    public set max_retries(value: number | undefined) {
        this._max_retries = value;
    }
    
    public get min_age_days(): number | undefined {
        return this._min_age_days
    }

    public set min_age_days(value: number | undefined) {
        this._min_age_days = value;
    }
    
    public get min_length(): number | undefined {
        return this._min_length
    }

    public set min_length(value: number | undefined) {
        this._min_length = value;
    }
    
    public get min_lower_case_chars(): number | undefined {
        return this._min_lower_case_chars
    }

    public set min_lower_case_chars(value: number | undefined) {
        this._min_lower_case_chars = value;
    }
    
    public get min_numeric_chars(): number | undefined {
        return this._min_numeric_chars
    }

    public set min_numeric_chars(value: number | undefined) {
        this._min_numeric_chars = value;
    }
    
    public get min_special_chars(): number | undefined {
        return this._min_special_chars
    }

    public set min_special_chars(value: number | undefined) {
        this._min_special_chars = value;
    }
    
    public get min_upper_case_chars(): number | undefined {
        return this._min_upper_case_chars
    }

    public set min_upper_case_chars(value: number | undefined) {
        this._min_upper_case_chars = value;
    }
    
    public get or_replace(): boolean | undefined {
        return this._or_replace
    }

    public set or_replace(value: boolean | undefined) {
        this._or_replace = value;
    }
    
}

