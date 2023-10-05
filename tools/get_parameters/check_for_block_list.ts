export function checkForBlockList(input: string) {
    if (input.includes('Block List') || input.includes('Block Set') || input.includes('Block')) {
        return 'block list'
    }
    else {
        return input
    }
}