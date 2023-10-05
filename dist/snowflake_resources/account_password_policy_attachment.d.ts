import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Account_Password_Policy_AttachmentConfig extends TerraformMetaArguments {
    password_policy: string;
}
export declare class Account_Password_Policy_Attachment extends TerraformResource {
    _password_policy: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Account_Password_Policy_AttachmentConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get password_policy(): string;
    set password_policy(value: string);
}
