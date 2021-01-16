import {atom} from 'recoil'

const SchoolList = atom<string[]>({
    key: "schoollist",
    default: []
});
export default SchoolList;