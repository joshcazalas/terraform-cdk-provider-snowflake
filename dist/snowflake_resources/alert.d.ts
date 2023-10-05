import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Alert_Alert_Schedule {
    readonly cron?: {
        readonly expression: string;
        readonly time_zone: string;
    };
    readonly interval?: number;
}
export interface AlertConfig extends TerraformMetaArguments {
    action: string;
    condition: string;
    database: string;
    name: string;
    schema: string;
    warehouse: string;
    alert_schedule?: Alert_Alert_Schedule[];
    comment?: string;
    enabled?: boolean;
}
export declare class Alert extends TerraformResource {
    _action: string;
    _condition: string;
    _database: string;
    _name: string;
    _schema: string;
    _warehouse: string;
    _alert_schedule?: Alert_Alert_Schedule[];
    _comment?: string;
    _enabled?: boolean;
    readonly _id: string;
    constructor(scope: Construct, id: string, config: AlertConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get action(): string;
    set action(value: string);
    get condition(): string;
    set condition(value: string);
    get database(): string;
    set database(value: string);
    get name(): string;
    set name(value: string);
    get schema(): string;
    set schema(value: string);
    get warehouse(): string;
    set warehouse(value: string);
    get alert_schedule(): Alert_Alert_Schedule[] | undefined;
    set alert_schedule(value: Alert_Alert_Schedule[] | undefined);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get enabled(): boolean | undefined;
    set enabled(value: boolean | undefined);
}
