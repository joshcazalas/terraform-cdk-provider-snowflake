import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Session_ParameterConfig extends TerraformMetaArguments {
    key: string;
    value: string;
    on_account?: boolean;
    user?: string;
}
export declare class Session_Parameter extends TerraformResource {
    _key: string;
    _value: string;
    _on_account?: boolean;
    _user?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Session_ParameterConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get key(): string;
    set key(value: string);
    get value(): string;
    set value(value: string);
    get on_account(): boolean | undefined;
    set on_account(value: boolean | undefined);
    get user(): string | undefined;
    set user(value: string | undefined);
}
