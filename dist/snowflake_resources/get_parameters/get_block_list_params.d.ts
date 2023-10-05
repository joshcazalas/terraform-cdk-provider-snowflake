export interface additionalProperties {
    additional_properties?: [
        {
            name?: string;
            properties?: string[];
        }
    ];
}
export declare function getBlockListParams(file: string): Promise<{
    name?: string | undefined;
    properties?: string[] | undefined;
}[] | "Pattern not found" | undefined>;
