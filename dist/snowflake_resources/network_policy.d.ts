import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Network_PolicyConfig extends TerraformMetaArguments {
    allowed_ip_list: string[];
    name: string;
    blocked_ip_list?: string[];
    comment?: string;
}
export declare class Network_Policy extends TerraformResource {
    _allowed_ip_list: string[];
    _name: string;
    _blocked_ip_list?: string[];
    _comment?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Network_PolicyConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get allowed_ip_list(): string[];
    set allowed_ip_list(value: string[]);
    get name(): string;
    set name(value: string);
    get blocked_ip_list(): string[] | undefined;
    set blocked_ip_list(value: string[] | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
}
