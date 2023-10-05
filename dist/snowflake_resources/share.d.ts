import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface ShareConfig extends TerraformMetaArguments {
    name: string;
    accounts?: string[];
    comment?: string;
}
export declare class Share extends TerraformResource {
    _name: string;
    _accounts?: string[];
    _comment?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: ShareConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get name(): string;
    set name(value: string);
    get accounts(): string[] | undefined;
    set accounts(value: string[] | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
}
