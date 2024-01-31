import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Notification_IntegrationConfig extends TerraformMetaArguments {
    name: string;
    notification_provider: string;
    aws_sns_role_arn?: string;
    aws_sns_topic_arn?: string;
    aws_sqs_arn?: string;
    aws_sqs_role_arn?: string;
    azure_storage_queue_primary_uri?: string;
    azure_tenant_id?: string;
    comment?: string;
    direction?: string;
    enabled?: boolean;
    gcp_pubsub_subscription_name?: string;
    gcp_pubsub_topic_name?: string;
    type?: string;
}
export declare class Notification_Integration extends TerraformResource {
    _name: string;
    _notification_provider: string;
    _aws_sns_role_arn?: string;
    _aws_sns_topic_arn?: string;
    _aws_sqs_arn?: string;
    _aws_sqs_role_arn?: string;
    _azure_storage_queue_primary_uri?: string;
    _azure_tenant_id?: string;
    _comment?: string;
    _direction?: string;
    _enabled?: boolean;
    _gcp_pubsub_subscription_name?: string;
    _gcp_pubsub_topic_name?: string;
    _type?: string;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Notification_IntegrationConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get name(): string;
    set name(value: string);
    get notification_provider(): string;
    set notification_provider(value: string);
    get aws_sns_role_arn(): string | undefined;
    set aws_sns_role_arn(value: string | undefined);
    get aws_sns_topic_arn(): string | undefined;
    set aws_sns_topic_arn(value: string | undefined);
    get aws_sqs_arn(): string | undefined;
    set aws_sqs_arn(value: string | undefined);
    get aws_sqs_role_arn(): string | undefined;
    set aws_sqs_role_arn(value: string | undefined);
    get azure_storage_queue_primary_uri(): string | undefined;
    set azure_storage_queue_primary_uri(value: string | undefined);
    get azure_tenant_id(): string | undefined;
    set azure_tenant_id(value: string | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get direction(): string | undefined;
    set direction(value: string | undefined);
    get enabled(): boolean | undefined;
    set enabled(value: boolean | undefined);
    get gcp_pubsub_subscription_name(): string | undefined;
    set gcp_pubsub_subscription_name(value: string | undefined);
    get gcp_pubsub_topic_name(): string | undefined;
    set gcp_pubsub_topic_name(value: string | undefined);
    get type(): string | undefined;
    set type(value: string | undefined);
}
