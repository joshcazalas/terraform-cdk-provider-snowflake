import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface AccountConfig extends TerraformMetaArguments {
    admin_name: string;
    edition: string;
    email: string;
    name: string;
    admin_password?: string;
    admin_rsa_public_key?: string;
    comment?: string;
    first_name?: string;
    grace_period_in_days?: number;
    last_name?: string;
    must_change_password?: boolean;
    region?: string;
    region_group?: string;
}
export declare class Account extends TerraformResource {
    _admin_name: string;
    _edition: string;
    _email: string;
    _name: string;
    _admin_password?: string;
    _admin_rsa_public_key?: string;
    _comment?: string;
    _first_name?: string;
    _grace_period_in_days?: number;
    _last_name?: string;
    _must_change_password?: boolean;
    _region?: string;
    _region_group?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: AccountConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get admin_name(): string;
    set admin_name(value: string);
    get edition(): string;
    set edition(value: string);
    get email(): string;
    set email(value: string);
    get name(): string;
    set name(value: string);
    get admin_password(): string | undefined;
    set admin_password(value: string | undefined);
    get admin_rsa_public_key(): string | undefined;
    set admin_rsa_public_key(value: string | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get first_name(): string | undefined;
    set first_name(value: string | undefined);
    get grace_period_in_days(): number | undefined;
    set grace_period_in_days(value: number | undefined);
    get last_name(): string | undefined;
    set last_name(value: string | undefined);
    get must_change_password(): boolean | undefined;
    set must_change_password(value: boolean | undefined);
    get region(): string | undefined;
    set region(value: string | undefined);
    get region_group(): string | undefined;
    set region_group(value: string | undefined);
}
