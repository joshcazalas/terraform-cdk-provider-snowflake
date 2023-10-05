/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface Account_Password_Policy_AttachmentConfig extends TerraformMetaArguments {
    password_policy: string;
}

export class Account_Password_Policy_Attachment extends TerraformResource {
    _password_policy: string;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: Account_Password_Policy_AttachmentConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_account_password_policy_attachment",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        
        this._password_policy = config.password_policy;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            password_policy: this._password_policy,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_account_password_policy_attachment.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get password_policy(): string {
        return this._password_policy
    }

    public set password_policy(value: string) {
        this._password_policy = value;
    }
    
}

