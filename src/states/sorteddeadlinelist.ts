import {sortJSONList} from '../chromeAPI/retrieveDeadlineJSON'

import DeadlineType from '../types/deadlineType'

import {selector} from 'recoil'
import DeadlineList from './deadlinelist'
import { RecoilValueReadOnly } from 'recoil';

// give this a set command in order to add values
// make this keep min heap with an atom so it cna do it in O(logn) rather than O(nlogn)

const SortedDeadlineList: RecoilValueReadOnly<DeadlineType[]> = selector({
    key: "sorteddeadlinelist",
    get: ({get}) => {
        let res: DeadlineType[] = get(DeadlineList);
        let sortedlist: DeadlineType[] = sortJSONList(res);

        return sortedlist;
    }
});

export default SortedDeadlineList;