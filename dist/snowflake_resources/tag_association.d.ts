import { TerraformMetaArguments, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export interface Tag_Association_Object_Identifier {
    readonly name: string;
    readonly database?: string;
    readonly schema?: string;
}
export interface Tag_Association_Timeouts {
    readonly create?: string;
}
export interface Tag_AssociationConfig extends TerraformMetaArguments {
    object_identifier: Tag_Association_Object_Identifier[];
    object_type: string;
    tag_id: string;
    tag_value: string;
    object_name?: string;
    skip_validation?: boolean;
    timeouts?: Tag_Association_Timeouts[];
}
export declare class Tag_Association extends TerraformResource {
    _object_identifier: Tag_Association_Object_Identifier[];
    _object_type: string;
    _tag_id: string;
    _tag_value: string;
    _object_name?: string;
    _skip_validation?: boolean;
    _timeouts?: Tag_Association_Timeouts[];
    readonly _id: string;
    constructor(scope: Construct, id: string, config: Tag_AssociationConfig);
    getAttributes(): {
        [name: string]: any;
    };
    get id(): string;
    ref(attribute: string): string;
    get object_identifier(): Tag_Association_Object_Identifier[];
    set object_identifier(value: Tag_Association_Object_Identifier[]);
    get object_type(): string;
    set object_type(value: string);
    get tag_id(): string;
    set tag_id(value: string);
    get tag_value(): string;
    set tag_value(value: string);
    get object_name(): string | undefined;
    set object_name(value: string | undefined);
    get skip_validation(): boolean | undefined;
    set skip_validation(value: boolean | undefined);
    get timeouts(): Tag_Association_Timeouts[] | undefined;
    set timeouts(value: Tag_Association_Timeouts[] | undefined);
}
