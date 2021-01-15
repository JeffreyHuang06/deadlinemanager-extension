// doesnt work for objects
export default function removeDupes(list){
    let tempSet = new Set(list);
    return Array.from(tempSet);
}