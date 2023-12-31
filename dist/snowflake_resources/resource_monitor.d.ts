import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Resource_MonitorConfig extends TerraformMetaArguments {
    name: string;
    credit_quota?: number;
    end_timestamp?: string;
    frequency?: string;
    notify_triggers?: Set<number>;
    notify_users?: Set<string>;
    set_for_account?: boolean;
    start_timestamp?: string;
    suspend_immediate_trigger?: number;
    suspend_immediate_triggers?: Set<number>;
    suspend_trigger?: number;
    suspend_triggers?: Set<number>;
    warehouses?: Set<string>;
}
export declare class Resource_Monitor extends TerraformResource {
    _name: string;
    _credit_quota?: number;
    _end_timestamp?: string;
    _frequency?: string;
    _notify_triggers?: Set<number>;
    _notify_users?: Set<string>;
    _set_for_account?: boolean;
    _start_timestamp?: string;
    _suspend_immediate_trigger?: number;
    _suspend_immediate_triggers?: Set<number>;
    _suspend_trigger?: number;
    _suspend_triggers?: Set<number>;
    _warehouses?: Set<string>;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Resource_MonitorConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get name(): string;
    set name(value: string);
    get credit_quota(): number | undefined;
    set credit_quota(value: number | undefined);
    get end_timestamp(): string | undefined;
    set end_timestamp(value: string | undefined);
    get frequency(): string | undefined;
    set frequency(value: string | undefined);
    get notify_triggers(): Set<number> | undefined;
    set notify_triggers(value: Set<number> | undefined);
    get notify_users(): Set<string> | undefined;
    set notify_users(value: Set<string> | undefined);
    get set_for_account(): boolean | undefined;
    set set_for_account(value: boolean | undefined);
    get start_timestamp(): string | undefined;
    set start_timestamp(value: string | undefined);
    get suspend_immediate_trigger(): number | undefined;
    set suspend_immediate_trigger(value: number | undefined);
    get suspend_immediate_triggers(): Set<number> | undefined;
    set suspend_immediate_triggers(value: Set<number> | undefined);
    get suspend_trigger(): number | undefined;
    set suspend_trigger(value: number | undefined);
    get suspend_triggers(): Set<number> | undefined;
    set suspend_triggers(value: Set<number> | undefined);
    get warehouses(): Set<string> | undefined;
    set warehouses(value: Set<string> | undefined);
}
