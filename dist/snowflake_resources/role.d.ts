import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Role_Tag {
    readonly name: string;
    readonly value: string;
    readonly database?: string;
    readonly schema?: string;
}
export interface RoleConfig extends TerraformMetaArguments {
    name: string;
    comment?: string;
    tag?: Role_Tag[];
}
export declare class Role extends TerraformResource {
    _name: string;
    _comment?: string;
    _tag?: Role_Tag[];
    readonly _id: string;
    constructor(scope: Construct, id: string, config: RoleConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get name(): string;
    set name(value: string);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get tag(): Role_Tag[] | undefined;
    set tag(value: Role_Tag[] | undefined);
}
