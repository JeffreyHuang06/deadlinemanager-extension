import {sortJSONList} from '../chromeAPI/retrieveDeadlineJSON'

import {selector} from 'recoil'
import DeadlineList from './deadlinelist'

const SortedDeadlineList = selector({
    key: "sorteddeadlinelist",
    get: ({get}) => {
        let res = get(DeadlineList);
        let sortedlist = sortJSONList(res);

        return sortedlist;
    }
});

export default SortedDeadlineList;