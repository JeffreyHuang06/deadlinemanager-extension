import { parse } from 'date-format-parse' 

export default function checkDate(date: string): boolean {

    const dstring: string = date.split(' ')[0];
    const fixeddate: Date = parse(`${dstring} 23:59:59`, "YYYY-MM-DD HH:mm:ss");

    return fixeddate.getTime() >= Date.now();
}