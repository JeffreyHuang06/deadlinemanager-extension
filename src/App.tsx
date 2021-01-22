import React, {useEffect} from 'react';
import MainDeadline from './components/MainDeadline'
import InputForm from './components/InputForm'
import SchoolListDisp from './components/SchoolListDisp'

import {retrieveSortedJSONList} from './chromeAPI/retrieveDeadlineJSON'
import {retrieveSchoolList} from './chromeAPI/retrieveSchoolList'
import {retrieveSchoolStateList} from './chromeAPI/retrieveSchoolStateList'
import {retrieveShowDates, retrieveShowComplete} from './chromeAPI/retrieveShows'

import DeadlineType from './types/deadlineType'
import SB from './types/hashmapsb'

import {useSetRecoilState} from 'recoil'
import DeadlineList from './states/deadlinelistAtom'
import SchoolList from './states/schoollistAtom'
import SchoolStateList from './states/schoolstatelistAtom'
import ShowComplete from './states/showcompleteAtom'
import ShowDates from './states/showdateAtom' 

import './css/generic.sass'
// make all componets classes expect for those that useState
// then use the <App /> to handle ALL STATE because it's all intertwined. I'm probably gonna put this on my big monitor

const App = () => {
  const setDeadlineList = useSetRecoilState(DeadlineList);
  const setSchoolList = useSetRecoilState(SchoolList);
  const setSchoolStateList = useSetRecoilState<SB>(SchoolStateList);
  const setShowDates = useSetRecoilState<boolean>(ShowDates);
  const setShowComplete = useSetRecoilState<boolean>(ShowComplete);

  const getAtoms = async() => {
    const res1: DeadlineType[] = await retrieveSortedJSONList();
    const res2: string[] = await retrieveSchoolList();
    const res3 = await retrieveSchoolStateList();
    const res4 = await retrieveShowComplete();
    const res5 = await retrieveShowDates();

    if (res1 === undefined || res2 === undefined || res3 === undefined || res4 === undefined || res5 === undefined){
      return false;
    }

    setDeadlineList(res1);
    setSchoolList(res2);
    setSchoolStateList(new SB(res3));
    setShowComplete(res4);
    setShowDates(res5);
  }

  useEffect(() => {
    const fetcher = setInterval(() => {
      const success = getAtoms();

      if (success) clearInterval(fetcher);
    }, 200);
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
