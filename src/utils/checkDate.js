export default function checkDate(date){
    let d = new Date(date);
    let fixeddate = new Date(
        d.getFullYear(),
        d.getMonth(),
        d.getDate() + 1, // because its 0 indexed
        23,
        59,
        59
    );

    return fixeddate.getTime() >= Date.now();
}