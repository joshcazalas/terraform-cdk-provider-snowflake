"use strict";
/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource_Monitor = void 0;
const cdktf_1 = require("cdktf");
class Resource_Monitor extends cdktf_1.TerraformResource {
    _name;
    _credit_quota;
    _end_timestamp;
    _frequency;
    _notify_triggers;
    _notify_users;
    _set_for_account;
    _start_timestamp;
    _suspend_immediate_trigger;
    _suspend_immediate_triggers;
    _suspend_trigger;
    _suspend_triggers;
    _warehouses;
    _id;
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: "snowflake_resource_monitor",
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
        this._credit_quota = config.credit_quota;
        this._end_timestamp = config.end_timestamp;
        this._frequency = config.frequency;
        this._notify_triggers = config.notify_triggers;
        this._notify_users = config.notify_users;
        this._set_for_account = config.set_for_account;
        this._start_timestamp = config.start_timestamp;
        this._suspend_immediate_trigger = config.suspend_immediate_trigger;
        this._suspend_immediate_triggers = config.suspend_immediate_triggers;
        this._suspend_trigger = config.suspend_trigger;
        this._suspend_triggers = config.suspend_triggers;
        this._warehouses = config.warehouses;
    }
    getAttributes() {
        return {
            name: this._name,
            credit_quota: this._credit_quota,
            end_timestamp: this._end_timestamp,
            frequency: this._frequency,
            notify_triggers: this._notify_triggers,
            notify_users: this._notify_users,
            set_for_account: this._set_for_account,
            start_timestamp: this._start_timestamp,
            suspend_immediate_trigger: this._suspend_immediate_trigger,
            suspend_immediate_triggers: this._suspend_immediate_triggers,
            suspend_trigger: this._suspend_trigger,
            suspend_triggers: this._suspend_triggers,
            warehouses: this._warehouses,
        };
    }
    get id() {
        return this._id;
    }
    ref(attribute) {
        return `\${snowflake_resource_monitor.${this.friendlyUniqueId}.${attribute}}`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get credit_quota() {
        return this._credit_quota;
    }
    set credit_quota(value) {
        this._credit_quota = value;
    }
    get end_timestamp() {
        return this._end_timestamp;
    }
    set end_timestamp(value) {
        this._end_timestamp = value;
    }
    get frequency() {
        return this._frequency;
    }
    set frequency(value) {
        this._frequency = value;
    }
    get notify_triggers() {
        return this._notify_triggers;
    }
    set notify_triggers(value) {
        this._notify_triggers = value;
    }
    get notify_users() {
        return this._notify_users;
    }
    set notify_users(value) {
        this._notify_users = value;
    }
    get set_for_account() {
        return this._set_for_account;
    }
    set set_for_account(value) {
        this._set_for_account = value;
    }
    get start_timestamp() {
        return this._start_timestamp;
    }
    set start_timestamp(value) {
        this._start_timestamp = value;
    }
    get suspend_immediate_trigger() {
        return this._suspend_immediate_trigger;
    }
    set suspend_immediate_trigger(value) {
        this._suspend_immediate_trigger = value;
    }
    get suspend_immediate_triggers() {
        return this._suspend_immediate_triggers;
    }
    set suspend_immediate_triggers(value) {
        this._suspend_immediate_triggers = value;
    }
    get suspend_trigger() {
        return this._suspend_trigger;
    }
    set suspend_trigger(value) {
        this._suspend_trigger = value;
    }
    get suspend_triggers() {
        return this._suspend_triggers;
    }
    set suspend_triggers(value) {
        this._suspend_triggers = value;
    }
    get warehouses() {
        return this._warehouses;
    }
    set warehouses(value) {
        this._warehouses = value;
    }
}
exports.Resource_Monitor = Resource_Monitor;
