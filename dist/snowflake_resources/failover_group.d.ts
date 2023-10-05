import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Failover_Group_From_Replica {
    readonly name: string;
    readonly organization_name: string;
    readonly source_account_name: string;
}
export interface Failover_Group_Replication_Schedule {
    readonly cron?: {
        readonly expression: string;
        readonly time_zone: string;
    };
    readonly interval?: number;
}
export interface Failover_GroupConfig extends TerraformMetaArguments {
    name: string;
    allowed_accounts?: Set<string>;
    allowed_databases?: Set<string>;
    allowed_integration_types?: Set<string>;
    allowed_shares?: Set<string>;
    from_replica?: Failover_Group_From_Replica[];
    ignore_edition_check?: boolean;
    object_types?: Set<string>;
    replication_schedule?: Failover_Group_Replication_Schedule[];
}
export declare class Failover_Group extends TerraformResource {
    _name: string;
    _allowed_accounts?: Set<string>;
    _allowed_databases?: Set<string>;
    _allowed_integration_types?: Set<string>;
    _allowed_shares?: Set<string>;
    _from_replica?: Failover_Group_From_Replica[];
    _ignore_edition_check?: boolean;
    _object_types?: Set<string>;
    _replication_schedule?: Failover_Group_Replication_Schedule[];
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Failover_GroupConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get name(): string;
    set name(value: string);
    get allowed_accounts(): Set<string> | undefined;
    set allowed_accounts(value: Set<string> | undefined);
    get allowed_databases(): Set<string> | undefined;
    set allowed_databases(value: Set<string> | undefined);
    get allowed_integration_types(): Set<string> | undefined;
    set allowed_integration_types(value: Set<string> | undefined);
    get allowed_shares(): Set<string> | undefined;
    set allowed_shares(value: Set<string> | undefined);
    get from_replica(): Failover_Group_From_Replica[] | undefined;
    set from_replica(value: Failover_Group_From_Replica[] | undefined);
    get ignore_edition_check(): boolean | undefined;
    set ignore_edition_check(value: boolean | undefined);
    get object_types(): Set<string> | undefined;
    set object_types(value: Set<string> | undefined);
    get replication_schedule(): Failover_Group_Replication_Schedule[] | undefined;
    set replication_schedule(value: Failover_Group_Replication_Schedule[] | undefined);
}
