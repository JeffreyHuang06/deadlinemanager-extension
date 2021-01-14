import {sortJSONList} from '../chromeAPI/retrieveDeadlineJSON'

import {selector} from 'recoil'
import DeadlineList from './deadlinelist'

// give this a set command in order to add values
// make this keep min heap with an atom so it cna do it in O(logn) rather than O(nlogn)

const SortedDeadlineList = selector({
    key: "sorteddeadlinelist",
    get: ({get}) => {
        let res = get(DeadlineList);
        let sortedlist = sortJSONList(res);

        return sortedlist;
    }
});

export default SortedDeadlineList;