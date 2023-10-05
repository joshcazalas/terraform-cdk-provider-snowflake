import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Scim_IntegrationConfig extends TerraformMetaArguments {
    name: string;
    provisioner_role: string;
    scim_client: string;
    network_policy?: string;
}
export declare class Scim_Integration extends TerraformResource {
    _name: string;
    _provisioner_role: string;
    _scim_client: string;
    _network_policy?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Scim_IntegrationConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get name(): string;
    set name(value: string);
    get provisioner_role(): string;
    set provisioner_role(value: string);
    get scim_client(): string;
    set scim_client(value: string);
    get network_policy(): string | undefined;
    set network_policy(value: string | undefined);
}
