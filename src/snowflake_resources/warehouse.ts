/*
DO NOT EDIT - Generated by main.js. Refer to the README for more info.
*/

import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";


export interface WarehouseConfig extends TerraformMetaArguments {
    name: string;
    auto_resume?: boolean;
    auto_suspend?: number;
    comment?: string;
    enable_query_acceleration?: boolean;
    initially_suspended?: boolean;
    max_cluster_count?: number;
    max_concurrency_level?: number;
    min_cluster_count?: number;
    query_acceleration_max_scale_factor?: number;
    resource_monitor?: string;
    scaling_policy?: string;
    statement_queued_timeout_in_seconds?: number;
    statement_timeout_in_seconds?: number;
    wait_for_provisioning?: boolean;
    warehouse_size?: string;
    warehouse_type?: string;
}

export class Warehouse extends TerraformResource {
    _name: string;
    _auto_resume?: boolean;
    _auto_suspend?: number;
    _comment?: string;
    _enable_query_acceleration?: boolean;
    _initially_suspended?: boolean;
    _max_cluster_count?: number;
    _max_concurrency_level?: number;
    _min_cluster_count?: number;
    _query_acceleration_max_scale_factor?: number;
    _resource_monitor?: string;
    _scaling_policy?: string;
    _statement_queued_timeout_in_seconds?: number;
    _statement_timeout_in_seconds?: number;
    _wait_for_provisioning?: boolean;
    _warehouse_size?: string;
    _warehouse_type?: string;
    readonly _id: string;

    public constructor(scope: Construct, id: string, config: WarehouseConfig) {
        super(scope, id, {
            terraformResourceType: "snowflake_warehouse",
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
        
        this._auto_resume = config.auto_resume;
        
        this._auto_suspend = config.auto_suspend;
        
        this._comment = config.comment;
        
        this._enable_query_acceleration = config.enable_query_acceleration;
        
        this._initially_suspended = config.initially_suspended;
        
        this._max_cluster_count = config.max_cluster_count;
        
        this._max_concurrency_level = config.max_concurrency_level;
        
        this._min_cluster_count = config.min_cluster_count;
        
        this._query_acceleration_max_scale_factor = config.query_acceleration_max_scale_factor;
        
        this._resource_monitor = config.resource_monitor;
        
        this._scaling_policy = config.scaling_policy;
        
        this._statement_queued_timeout_in_seconds = config.statement_queued_timeout_in_seconds;
        
        this._statement_timeout_in_seconds = config.statement_timeout_in_seconds;
        
        this._wait_for_provisioning = config.wait_for_provisioning;
        
        this._warehouse_size = config.warehouse_size;
        
        this._warehouse_type = config.warehouse_type;
    }
    public getAttributes(): { [name: string]: any } {
        return {
            name: this._name,
            auto_resume: this._auto_resume,
            auto_suspend: this._auto_suspend,
            comment: this._comment,
            enable_query_acceleration: this._enable_query_acceleration,
            initially_suspended: this._initially_suspended,
            max_cluster_count: this._max_cluster_count,
            max_concurrency_level: this._max_concurrency_level,
            min_cluster_count: this._min_cluster_count,
            query_acceleration_max_scale_factor: this._query_acceleration_max_scale_factor,
            resource_monitor: this._resource_monitor,
            scaling_policy: this._scaling_policy,
            statement_queued_timeout_in_seconds: this._statement_queued_timeout_in_seconds,
            statement_timeout_in_seconds: this._statement_timeout_in_seconds,
            wait_for_provisioning: this._wait_for_provisioning,
            warehouse_size: this._warehouse_size,
            warehouse_type: this._warehouse_type,
        }
    }

    public get id(): string {
        return this._id;
    }

    public ref(attribute: string): string {
        return `\${snowflake_warehouse.${this.friendlyUniqueId}.${attribute}}`;
    }

    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value;
    }
    
    public get auto_resume(): boolean | undefined {
        return this._auto_resume
    }

    public set auto_resume(value: boolean | undefined) {
        this._auto_resume = value;
    }
    
    public get auto_suspend(): number | undefined {
        return this._auto_suspend
    }

    public set auto_suspend(value: number | undefined) {
        this._auto_suspend = value;
    }
    
    public get comment(): string | undefined {
        return this._comment
    }

    public set comment(value: string | undefined) {
        this._comment = value;
    }
    
    public get enable_query_acceleration(): boolean | undefined {
        return this._enable_query_acceleration
    }

    public set enable_query_acceleration(value: boolean | undefined) {
        this._enable_query_acceleration = value;
    }
    
    public get initially_suspended(): boolean | undefined {
        return this._initially_suspended
    }

    public set initially_suspended(value: boolean | undefined) {
        this._initially_suspended = value;
    }
    
    public get max_cluster_count(): number | undefined {
        return this._max_cluster_count
    }

    public set max_cluster_count(value: number | undefined) {
        this._max_cluster_count = value;
    }
    
    public get max_concurrency_level(): number | undefined {
        return this._max_concurrency_level
    }

    public set max_concurrency_level(value: number | undefined) {
        this._max_concurrency_level = value;
    }
    
    public get min_cluster_count(): number | undefined {
        return this._min_cluster_count
    }

    public set min_cluster_count(value: number | undefined) {
        this._min_cluster_count = value;
    }
    
    public get query_acceleration_max_scale_factor(): number | undefined {
        return this._query_acceleration_max_scale_factor
    }

    public set query_acceleration_max_scale_factor(value: number | undefined) {
        this._query_acceleration_max_scale_factor = value;
    }
    
    public get resource_monitor(): string | undefined {
        return this._resource_monitor
    }

    public set resource_monitor(value: string | undefined) {
        this._resource_monitor = value;
    }
    
    public get scaling_policy(): string | undefined {
        return this._scaling_policy
    }

    public set scaling_policy(value: string | undefined) {
        this._scaling_policy = value;
    }
    
    public get statement_queued_timeout_in_seconds(): number | undefined {
        return this._statement_queued_timeout_in_seconds
    }

    public set statement_queued_timeout_in_seconds(value: number | undefined) {
        this._statement_queued_timeout_in_seconds = value;
    }
    
    public get statement_timeout_in_seconds(): number | undefined {
        return this._statement_timeout_in_seconds
    }

    public set statement_timeout_in_seconds(value: number | undefined) {
        this._statement_timeout_in_seconds = value;
    }
    
    public get wait_for_provisioning(): boolean | undefined {
        return this._wait_for_provisioning
    }

    public set wait_for_provisioning(value: boolean | undefined) {
        this._wait_for_provisioning = value;
    }
    
    public get warehouse_size(): string | undefined {
        return this._warehouse_size
    }

    public set warehouse_size(value: string | undefined) {
        this._warehouse_size = value;
    }
    
    public get warehouse_type(): string | undefined {
        return this._warehouse_type
    }

    public set warehouse_type(value: string | undefined) {
        this._warehouse_type = value;
    }
    
}

