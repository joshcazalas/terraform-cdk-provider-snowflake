/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface Tag_Masking_Policy_AssociationConfig extends TerraformMetaArguments {
    masking_policy_id: string;
    tag_id: string;
    id: string;
}

export class Tag_Masking_Policy_Association extends TerraformResource {
    _masking_policy_id: string;
    _tag_id: string;
    _id: string;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Tag_Masking_Policy_AssociationConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_tag_masking_policy_association",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._masking_policy_id = config.masking_policy_id;
        
        this._tag_id = config.tag_id;
        
        this._id = config.id;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            masking_policy_id: this._masking_policy_id,
            tag_id: this._tag_id,
            id: this._id,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_tag_masking_policy_association.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get masking_policy_id(): string {
        return this._masking_policy_id
    }

    public set masking_policy_id(value: string) {
        this._masking_policy_id = value;
    }
    public get tag_id(): string {
        return this._tag_id
    }

    public set tag_id(value: string) {
        this._tag_id = value;
    }
    public get id(): string {
        return this._id
    }

    public set id(value: string) {
        this._id = value;
    }
}

