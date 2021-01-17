import { parse } from 'date-format-parse' 

export default function checkDate(date){

    const dstring = date.split(' ')[0];
    const fixeddate = parse(`${dstring} 23:59:59`, "YYYY-MM-DD HH:mm:ss");

    return fixeddate.getTime() >= Date.now();
}