export async function getResourceName(file: string) {
    try {
        const resourceNameRegex = /# (snowflake_)?(\w+) \(Resource\)/;
        // Search for the resource name using the regular expression
        const match = file.match(resourceNameRegex);
        // If a match is found, return the resource name (group 2 of the match) without "snowflake_"
        if (match && match.length >= 3) {
            return match[2];
        }
        // If no match is found, return null
        return 'Resource name not found';
    } catch (error) {
        return 'Resource name not found';
    }
}