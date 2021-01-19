import React, {useEffect} from 'react';
import MainDeadline from './components/MainDeadline'
import InputForm from './components/InputForm'
import SchoolListDisp from './components/SchoolListDisp'

import {retrieveSortedJSONList} from './chromeAPI/retrieveDeadlineJSON'
import {retrieveSchoolList} from './chromeAPI/retrieveSchoolList'
import {retrieveSchoolStateList} from './chromeAPI/retrieveSchoolStateList'

import DeadlineType from './types/deadlineType'
import SB from './types/hashmapsb'

import {useSetRecoilState} from 'recoil'
import DeadlineList from './states/deadlinelistAtom'
import SchoolList from './states/schoollistAtom'
import SchoolStateList from './states/schoolstatelistAtom'

import './css/generic.sass'
// make all componets classes expect for those that useState
// then use the <App /> to handle ALL STATE because it's all intertwined. I'm probably gonna put this on my big monitor

const App = () => {
  const setDeadlineList = useSetRecoilState(DeadlineList);
  const setSchoolList = useSetRecoilState(SchoolList);
  const setSchoolStateList = useSetRecoilState<SB>(SchoolStateList);

  const getAtoms = async() => {
    const res1: DeadlineType[] = await retrieveSortedJSONList();
    const res2: string[] = await retrieveSchoolList();
    const res3 = await retrieveSchoolStateList();

    setDeadlineList(res1);
    setSchoolList(res2);
    setSchoolStateList(new SB(res3));
  }

  useEffect(() => {
    getAtoms();

  //eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <InputForm />
      <MainDeadline />
      <SchoolListDisp />
    </div>
  );
}

export default App;
