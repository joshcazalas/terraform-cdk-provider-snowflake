import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface User_Password_Policy_AttachmentConfig extends TerraformMetaArguments {
    password_policy_database: string;
    password_policy_name: string;
    password_policy_schema: string;
    user_name: string;
}
export declare class User_Password_Policy_Attachment extends TerraformResource {
    _password_policy_database: string;
    _password_policy_name: string;
    _password_policy_schema: string;
    _user_name: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: User_Password_Policy_AttachmentConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get password_policy_database(): string;
    set password_policy_database(value: string);
    get password_policy_name(): string;
    set password_policy_name(value: string);
    get password_policy_schema(): string;
    set password_policy_schema(value: string);
    get user_name(): string;
    set user_name(value: string);
}
