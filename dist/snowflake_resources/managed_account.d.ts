import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Managed_AccountConfig extends TerraformMetaArguments {
    admin_name: string;
    admin_password: string;
    name: string;
    comment?: string;
    type?: string;
}
export declare class Managed_Account extends TerraformResource {
    _admin_name: string;
    _admin_password: string;
    _name: string;
    _comment?: string;
    _type?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Managed_AccountConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get admin_name(): string;
    set admin_name(value: string);
    get admin_password(): string;
    set admin_password(value: string);
    get name(): string;
    set name(value: string);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get type(): string | undefined;
    set type(value: string | undefined);
}
