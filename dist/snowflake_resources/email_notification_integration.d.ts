import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Email_Notification_IntegrationConfig extends TerraformMetaArguments {
    enabled: boolean;
    name: string;
    allowed_recipients?: Set<string>;
    comment?: string;
}
export declare class Email_Notification_Integration extends TerraformResource {
    _enabled: boolean;
    _name: string;
    _allowed_recipients?: Set<string>;
    _comment?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Email_Notification_IntegrationConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get enabled(): boolean;
    set enabled(value: boolean);
    get name(): string;
    set name(value: string);
    get allowed_recipients(): Set<string> | undefined;
    set allowed_recipients(value: Set<string> | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
}
