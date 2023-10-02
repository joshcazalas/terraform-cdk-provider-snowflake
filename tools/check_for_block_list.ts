export function checkForBlockList(input: string) {
    if (input.includes('Block List')) {
        return 'block list'
    }
    else {
        return input
    }
}