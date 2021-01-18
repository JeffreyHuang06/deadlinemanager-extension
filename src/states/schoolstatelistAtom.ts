import {atom} from 'recoil'

import SB from '../types/hashmapsb'

const SchoolStateList = atom<SB>({
    key: "schoolstate",
    default: new SB()
});

export default SchoolStateList;