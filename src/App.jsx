import React, {useEffect} from 'react';
import MainDeadline from './components/MainDeadline'
import InputForm from './components/InputForm'
import {retrieveSortedJSONList} from './chromeAPI/retrieveDeadlineJSON'
import {retrieveSchoolList} from './chromeAPI/retrieveSchoolList'

import {useSetRecoilState} from 'recoil'
import DeadlineList from './atoms/deadlinelist'
import SchoolList from './atoms/schoollist'
// make all componets classes expect for those that useState
// then use the <App /> to handle ALL STATE because it's all intertwined. I'm probably gonna put this on my big monitor

export default function App() {
  const setDeadlineList = useSetRecoilState(DeadlineList);
  const setSchoolList = useSetRecoilState(SchoolList);

  useEffect(() => {
    (
      async() => {
        let res = await retrieveSortedJSONList();
        console.log(res, "res");
        setDeadlineList(res);

        res = await retrieveSchoolList();
        setSchoolList(res);
      }
    )();
  
  // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <MainDeadline />
      <InputForm />
    </div>
  );
}
