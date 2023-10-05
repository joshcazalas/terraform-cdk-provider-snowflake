export interface blockListRequiredParameters {
    name: string;
}
export declare function getBlockListRequiredParams(file: string): Promise<"There is no Optional Section in this File" | blockListRequiredParameters[]>;
