export function removeStripes(str: string) {
    return str.replaceAll(/[-_]/gi, ' ')
}