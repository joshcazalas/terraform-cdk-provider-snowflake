/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";

export interface  {
}

export interface Table_ConstraintConfig extends TerraformMetaArguments {
    columns: string[];
    name: string;
    table_id: string;
    type: string;
    comment?: string;
    deferrable?: boolean;
    enable?: boolean;
    enforced?: boolean;
    foreign_key_properties?: Table_Constraint_Foreign_Key_Properties[];
    initially?: string;
    rely?: boolean;
    validate?: boolean;
}

export class Table_Constraint extends TerraformResource {
    _columns: string[];
    _name: string;
    _table_id: string;
    _type: string;
    _comment?: string;
    _deferrable?: boolean;
    _enable?: boolean;
    _enforced?: boolean;
    _foreign_key_properties?: Table_Constraint_Foreign_Key_Properties[];
    _initially?: string;
    _rely?: boolean;
    _validate?: boolean;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Table_ConstraintConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_table_constraint",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._columns = config.columns;
        
        this._name = config.name;
        
        this._table_id = config.table_id;
        
        this._type = config.type;
        
        this._comment = config.comment;
        
        this._deferrable = config.deferrable;
        
        this._enable = config.enable;
        
        this._enforced = config.enforced;
        
        this._foreign_key_properties = config.foreign_key_properties;
        
        this._initially = config.initially;
        
        this._rely = config.rely;
        
        this._validate = config.validate;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            columns: this._columns,
            name: this._name,
            table_id: this._table_id,
            type: this._type,
            comment: this._comment,
            deferrable: this._deferrable,
            enable: this._enable,
            enforced: this._enforced,
            foreign_key_properties: this._foreign_key_properties,
            initially: this._initially,
            rely: this._rely,
            validate: this._validate,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_table_constraint.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get columns(): string[] {
        return this._columns
    }

    public set columns(value: string[]) {
        this._columns = value;
    }
    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value;
    }
    public get table_id(): string {
        return this._table_id
    }

    public set table_id(value: string) {
        this._table_id = value;
    }
    public get type(): string {
        return this._type
    }

    public set type(value: string) {
        this._type = value;
    }
    public get comment(): string | undefined {
        return this._comment
    }

    public set comment(value: string | undefined) {
        this._comment = value;
    }
    public get deferrable(): boolean | undefined {
        return this._deferrable
    }

    public set deferrable(value: boolean | undefined) {
        this._deferrable = value;
    }
    public get enable(): boolean | undefined {
        return this._enable
    }

    public set enable(value: boolean | undefined) {
        this._enable = value;
    }
    public get enforced(): boolean | undefined {
        return this._enforced
    }

    public set enforced(value: boolean | undefined) {
        this._enforced = value;
    }
    public get foreign_key_properties(): Table_Constraint_Foreign_Key_Properties[] | undefined {
        return this._foreign_key_properties
    }

    public set foreign_key_properties(value: Table_Constraint_Foreign_Key_Properties[] | undefined) {
        this._foreign_key_properties = value;
    }
    public get initially(): string | undefined {
        return this._initially
    }

    public set initially(value: string | undefined) {
        this._initially = value;
    }
    public get rely(): boolean | undefined {
        return this._rely
    }

    public set rely(value: boolean | undefined) {
        this._rely = value;
    }
    public get validate(): boolean | undefined {
        return this._validate
    }

    public set validate(value: boolean | undefined) {
        this._validate = value;
    }
}
