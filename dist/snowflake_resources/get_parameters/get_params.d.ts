import { optionalParameters } from "./get_optional_params";
import { requiredParameters } from "./get_required_params";
export declare function getParams(file: string): Promise<any>;
export declare function getAllParams(file: string, resource_name: string, requiredParams: string | requiredParameters[], optionalParams: string | optionalParameters[]): Promise<any>;
export declare function getAdditionalProperties(file: string): Promise<string | {
    name?: string | undefined;
    properties?: string[] | undefined;
}[] | undefined>;
