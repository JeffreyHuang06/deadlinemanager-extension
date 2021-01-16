import {atom} from 'recoil'

import DeadlineType from '../types/deadlineType'

const DeadlineList = atom<DeadlineType[]>({
    key: "deadlinelist",
    default: []
}); 
export default DeadlineList;