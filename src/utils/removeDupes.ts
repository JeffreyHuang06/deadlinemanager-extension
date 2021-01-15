// doesnt work for objects
const removeDupes = (list: string[]): string[] => {
    let tempSet = new Set<string>(list);
    return Array.from(tempSet);
}

export default removeDupes;