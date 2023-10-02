export function isFile(input: string) {
    const filePathRegex = /^([/]|\.\/|\.\.\/)[\w\/.-]+\.[\w]+$/;

    if (filePathRegex.test(input)) {
        return true
    } else {
        return false
    }
}