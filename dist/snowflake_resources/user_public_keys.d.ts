import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface User_Public_KeysConfig extends TerraformMetaArguments {
    name: string;
    rsa_public_key?: string;
    rsa_public_key_2?: string;
}
export declare class User_Public_Keys extends TerraformResource {
    _name: string;
    _rsa_public_key?: string;
    _rsa_public_key_2?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: User_Public_KeysConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get name(): string;
    set name(value: string);
    get rsa_public_key(): string | undefined;
    set rsa_public_key(value: string | undefined);
    get rsa_public_key_2(): string | undefined;
    set rsa_public_key_2(value: string | undefined);
}
