import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Network_Policy_AttachmentConfig extends TerraformMetaArguments {
    network_policy_name: string;
    set_for_account?: boolean;
    users?: string[];
}
export declare class Network_Policy_Attachment extends TerraformResource {
    _network_policy_name: string;
    _set_for_account?: boolean;
    _users?: string[];
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Network_Policy_AttachmentConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get network_policy_name(): string;
    set network_policy_name(value: string);
    get set_for_account(): boolean | undefined;
    set set_for_account(value: boolean | undefined);
    get users(): string[] | undefined;
    set users(value: string[] | undefined);
}
