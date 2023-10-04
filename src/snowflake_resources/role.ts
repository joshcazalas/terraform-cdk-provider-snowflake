/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";

export interface  {
}

export interface RoleConfig extends TerraformMetaArguments {
    name: string;
    comment?: string;
    tag?: Role_Tag[];
}

export class Role extends TerraformResource {
    _name: string;
    _comment?: string;
    _tag?: Role_Tag[];
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: RoleConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_role",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._name = config.name;
        
        this._comment = config.comment;
        
        this._tag = config.tag;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            name: this._name,
            comment: this._comment,
            tag: this._tag,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_role.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value;
    }
    public get comment(): string | undefined {
        return this._comment
    }

    public set comment(value: string | undefined) {
        this._comment = value;
    }
    public get tag(): Role_Tag[] | undefined {
        return this._tag
    }

    public set tag(value: Role_Tag[] | undefined) {
        this._tag = value;
    }
}

