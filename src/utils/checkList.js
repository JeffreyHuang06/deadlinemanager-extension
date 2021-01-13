
// returns true if its not in the list else false
export default function checkList (list, name){
    return list.find(element => element === name) === undefined;
}