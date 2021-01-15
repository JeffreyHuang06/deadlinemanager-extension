
// returns true if its not in the list else false
export default function checkList (list, name){
    let tempSet = new Set(list);
    return !tempSet.has(name);
}