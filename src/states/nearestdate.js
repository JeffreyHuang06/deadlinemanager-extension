import {selector} from 'recoil'
import DeadlineList from './deadlinelist'
import {getNearestDate} from '../chromeAPI/retrieveDeadlineJSON'

const NearestDate = selector({
    key: "nearestdate",
    get: ({get}) => {

        // first retrieve the atom state
        const reslist = get(DeadlineList);
        const nearest = getNearestDate(reslist);
        const len = nearest.length;

        let school;
        let date;

        if (len === 0){
            school = "No schools registered";
            date = "";

        } else if (len === 1){
            school = nearest[0].school;
            date = nearest[0].date;
            
        } else {
            // we need to render a lot of stuff
            school = "error";
            date = "error";
        }

        return {
            school,
            date
        };
    }
});

export default NearestDate;