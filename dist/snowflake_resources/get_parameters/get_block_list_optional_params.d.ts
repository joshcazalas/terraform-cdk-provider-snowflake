interface blockListOptionalParameters {
    name: string;
}
export declare function getBlockListOptionalParams(file: string): Promise<"There is no Optional Section in this File" | blockListOptionalParameters[]>;
export {};
