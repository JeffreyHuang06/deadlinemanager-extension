import React, {useEffect} from 'react';
import MainDeadline from './components/MainDeadline'
import InputForm from './components/InputForm'
import SchoolListDisp from './components/SchoolListDisp'

import {retrieveSortedJSONList} from './chromeAPI/retrieveDeadlineJSON'
import {retrieveSchoolList} from './chromeAPI/retrieveSchoolList'

import {useSetRecoilState} from 'recoil'
import DeadlineList from './states/deadlinelist'
import SchoolList from './states/schoollist'
// make all componets classes expect for those that useState
// then use the <App /> to handle ALL STATE because it's all intertwined. I'm probably gonna put this on my big monitor

export default function App() {
  const setDeadlineList = useSetRecoilState(DeadlineList);
  const setSchoolList = useSetRecoilState(SchoolList);

  useEffect(() => {

    retrieveSortedJSONList().then(res => {
      setDeadlineList(res);
    });

    retrieveSchoolList().then(res => {
      setSchoolList(res);
    });
  
  // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <InputForm />
      <MainDeadline />
      <SchoolListDisp />
    </div>
  );
}
