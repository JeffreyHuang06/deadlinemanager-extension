export default function removeDupes(list){
    return list.filter((v, i, a) => a.indexOf(v) === i);
}