export interface optionalParameters {
    name: string;
    type: string;
    required: boolean;
}
export declare function getOptionalParams(file: string): Promise<optionalParameters[] | "There is no Optional Section in this File" | "Unable to find Optional Parameters">;
