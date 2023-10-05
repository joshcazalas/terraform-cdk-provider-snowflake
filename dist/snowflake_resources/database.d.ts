import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Database_Replication_Configuration {
    readonly accounts: string[];
    readonly ignore_edition_check?: boolean;
}
export interface DatabaseConfig extends TerraformMetaArguments {
    name: string;
    comment?: string;
    data_retention_time_in_days?: number;
    from_database?: string;
    from_replica?: string;
    from_share?: Record<string, string>;
    is_transient?: boolean;
    replication_configuration?: Database_Replication_Configuration[];
}
export declare class Database extends TerraformResource {
    _name: string;
    _comment?: string;
    _data_retention_time_in_days?: number;
    _from_database?: string;
    _from_replica?: string;
    _from_share?: Record<string, string>;
    _is_transient?: boolean;
    _replication_configuration?: Database_Replication_Configuration[];
    readonly _id: string;
    constructor(scope: Construct, id: string, config: DatabaseConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get name(): string;
    set name(value: string);
    get comment(): string | undefined;
    set comment(value: string | undefined);
    get data_retention_time_in_days(): number | undefined;
    set data_retention_time_in_days(value: number | undefined);
    get from_database(): string | undefined;
    set from_database(value: string | undefined);
    get from_replica(): string | undefined;
    set from_replica(value: string | undefined);
    get from_share(): Record<string, string> | undefined;
    set from_share(value: Record<string, string> | undefined);
    get is_transient(): boolean | undefined;
    set is_transient(value: boolean | undefined);
    get replication_configuration(): Database_Replication_Configuration[] | undefined;
    set replication_configuration(value: Database_Replication_Configuration[] | undefined);
}
