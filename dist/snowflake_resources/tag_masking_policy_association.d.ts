import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Tag_Masking_Policy_AssociationConfig extends TerraformMetaArguments {
    masking_policy_id: string;
    tag_id: string;
}
export declare class Tag_Masking_Policy_Association extends TerraformResource {
    _masking_policy_id: string;
    _tag_id: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Tag_Masking_Policy_AssociationConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get masking_policy_id(): string;
    set masking_policy_id(value: string);
    get tag_id(): string;
    set tag_id(value: string);
}
