"use strict";
/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification_Integration = void 0;
const cdktf_1 = require("cdktf");
class Notification_Integration extends cdktf_1.TerraformResource {
    _name;
    _notification_provider;
    _aws_sns_role_arn;
    _aws_sns_topic_arn;
    _aws_sqs_arn;
    _aws_sqs_role_arn;
    _azure_storage_queue_primary_uri;
    _azure_tenant_id;
    _comment;
    _direction;
    _enabled;
    _gcp_pubsub_subscription_name;
    _gcp_pubsub_topic_name;
    _type;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_notification_integration",
            terraformGeneratorMetadata: {
                providerName: "snowflake"
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._id = id;
        this._name = config.name;
        this._notification_provider = config.notification_provider;
        this._aws_sns_role_arn = config.aws_sns_role_arn;
        this._aws_sns_topic_arn = config.aws_sns_topic_arn;
        this._aws_sqs_arn = config.aws_sqs_arn;
        this._aws_sqs_role_arn = config.aws_sqs_role_arn;
        this._azure_storage_queue_primary_uri = config.azure_storage_queue_primary_uri;
        this._azure_tenant_id = config.azure_tenant_id;
        this._comment = config.comment;
        this._direction = config.direction;
        this._enabled = config.enabled;
        this._gcp_pubsub_subscription_name = config.gcp_pubsub_subscription_name;
        this._gcp_pubsub_topic_name = config.gcp_pubsub_topic_name;
        this._type = config.type;
    }
    getAttributes() {
        return {
            name: this._name,
            notification_provider: this._notification_provider,
            aws_sns_role_arn: this._aws_sns_role_arn,
            aws_sns_topic_arn: this._aws_sns_topic_arn,
            aws_sqs_arn: this._aws_sqs_arn,
            aws_sqs_role_arn: this._aws_sqs_role_arn,
            azure_storage_queue_primary_uri: this._azure_storage_queue_primary_uri,
            azure_tenant_id: this._azure_tenant_id,
            comment: this._comment,
            direction: this._direction,
            enabled: this._enabled,
            gcp_pubsub_subscription_name: this._gcp_pubsub_subscription_name,
            gcp_pubsub_topic_name: this._gcp_pubsub_topic_name,
            type: this._type,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_notification_integration.${this.friendlyUniqueId}.${attribute}}`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get notification_provider() {
        return this._notification_provider;
    }
    set notification_provider(value) {
        this._notification_provider = value;
    }
    get aws_sns_role_arn() {
        return this._aws_sns_role_arn;
    }
    set aws_sns_role_arn(value) {
        this._aws_sns_role_arn = value;
    }
    get aws_sns_topic_arn() {
        return this._aws_sns_topic_arn;
    }
    set aws_sns_topic_arn(value) {
        this._aws_sns_topic_arn = value;
    }
    get aws_sqs_arn() {
        return this._aws_sqs_arn;
    }
    set aws_sqs_arn(value) {
        this._aws_sqs_arn = value;
    }
    get aws_sqs_role_arn() {
        return this._aws_sqs_role_arn;
    }
    set aws_sqs_role_arn(value) {
        this._aws_sqs_role_arn = value;
    }
    get azure_storage_queue_primary_uri() {
        return this._azure_storage_queue_primary_uri;
    }
    set azure_storage_queue_primary_uri(value) {
        this._azure_storage_queue_primary_uri = value;
    }
    get azure_tenant_id() {
        return this._azure_tenant_id;
    }
    set azure_tenant_id(value) {
        this._azure_tenant_id = value;
    }
    get comment() {
        return this._comment;
    }
    set comment(value) {
        this._comment = value;
    }
    get direction() {
        return this._direction;
    }
    set direction(value) {
        this._direction = value;
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        this._enabled = value;
    }
    get gcp_pubsub_subscription_name() {
        return this._gcp_pubsub_subscription_name;
    }
    set gcp_pubsub_subscription_name(value) {
        this._gcp_pubsub_subscription_name = value;
    }
    get gcp_pubsub_topic_name() {
        return this._gcp_pubsub_topic_name;
    }
    set gcp_pubsub_topic_name(value) {
        this._gcp_pubsub_topic_name = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
}
exports.Notification_Integration = Notification_Integration;
