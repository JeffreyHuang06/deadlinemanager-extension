import {atom} from 'recoil'

const ShowComplete = atom<boolean>({
    key: "showcomplete",
    default: true
});

export default ShowComplete;