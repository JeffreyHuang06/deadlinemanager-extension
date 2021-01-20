import {atom} from 'recoil'

const ShowDates = atom<boolean>({
    key: "showdates",
    default: true
});

export default ShowDates;