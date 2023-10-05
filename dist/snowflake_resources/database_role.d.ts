import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Database_RoleConfig extends TerraformMetaArguments {
    database: string;
    name: string;
    comment?: string;
}
export declare class Database_Role extends TerraformResource {
    _database: string;
    _name: string;
    _comment?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Database_RoleConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get database(): string;
    set database(value: string);
    get name(): string;
    set name(value: string);
    get comment(): string | undefined;
    set comment(value: string | undefined);
}
