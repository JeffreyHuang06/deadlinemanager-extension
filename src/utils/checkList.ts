
// returns true if its not in the list else false
const checkList = (list: string[], name: string): boolean => {
    let tempSet = new Set<string>(list);
    return !tempSet.has(name);
}

export default checkList;