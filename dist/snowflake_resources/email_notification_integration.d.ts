import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Email_Notification_IntegrationConfig extends TerraformMetaArguments {
    allowed_recipients: Set<string>;
    enabled: boolean;
    name: string;
    comment?: string;
}
export declare class Email_Notification_Integration extends TerraformResource {
    _allowed_recipients: Set<string>;
    _enabled: boolean;
    _name: string;
    _comment?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Email_Notification_IntegrationConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get allowed_recipients(): Set<string>;
    set allowed_recipients(value: Set<string>);
    get enabled(): boolean;
    set enabled(value: boolean);
    get name(): string;
    set name(value: string);
    get comment(): string | undefined;
    set comment(value: string | undefined);
}
