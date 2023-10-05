"use strict";
/*
DO NOT EDIT - Generated by tools/create_cdk_provider_files.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage_Integration = void 0;
const cdktf_1 = require("cdktf");
class Storage_Integration extends cdktf_1.TerraformResource {
    _name;
    _storage_allowed_locations;
    _storage_provider;
    _azure_tenant_id;
    _comment;
    _enabled;
    _storage_aws_object_acl;
    _storage_aws_role_arn;
    _storage_blocked_locations;
    _type;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_storage_integration",
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
        this._storage_allowed_locations = config.storage_allowed_locations;
        this._storage_provider = config.storage_provider;
        this._azure_tenant_id = config.azure_tenant_id;
        this._comment = config.comment;
        this._enabled = config.enabled;
        this._storage_aws_object_acl = config.storage_aws_object_acl;
        this._storage_aws_role_arn = config.storage_aws_role_arn;
        this._storage_blocked_locations = config.storage_blocked_locations;
        this._type = config.type;
    }
    getAttributes() {
        return {
            name: this._name,
            storage_allowed_locations: this._storage_allowed_locations,
            storage_provider: this._storage_provider,
            azure_tenant_id: this._azure_tenant_id,
            comment: this._comment,
            enabled: this._enabled,
            storage_aws_object_acl: this._storage_aws_object_acl,
            storage_aws_role_arn: this._storage_aws_role_arn,
            storage_blocked_locations: this._storage_blocked_locations,
            type: this._type,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_storage_integration.${this.friendlyUniqueId}.${attribute}}`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get storage_allowed_locations() {
        return this._storage_allowed_locations;
    }
    set storage_allowed_locations(value) {
        this._storage_allowed_locations = value;
    }
    get storage_provider() {
        return this._storage_provider;
    }
    set storage_provider(value) {
        this._storage_provider = value;
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
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        this._enabled = value;
    }
    get storage_aws_object_acl() {
        return this._storage_aws_object_acl;
    }
    set storage_aws_object_acl(value) {
        this._storage_aws_object_acl = value;
    }
    get storage_aws_role_arn() {
        return this._storage_aws_role_arn;
    }
    set storage_aws_role_arn(value) {
        this._storage_aws_role_arn = value;
    }
    get storage_blocked_locations() {
        return this._storage_blocked_locations;
    }
    set storage_blocked_locations(value) {
        this._storage_blocked_locations = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
}
exports.Storage_Integration = Storage_Integration;
