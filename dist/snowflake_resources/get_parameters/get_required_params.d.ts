export interface requiredParameters {
    name: string;
    type: string;
    required: boolean;
}
export declare function getRequiredParams(file: string): Promise<requiredParameters[] | "There is no Required Section in this File" | "Unable to find Required Parameters">;
