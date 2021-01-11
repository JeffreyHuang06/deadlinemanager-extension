import React, {useEffect} from 'react';
import MainDeadline from './components/MainDeadline'
import InputForm from './components/InputForm'
import {retrieveSortedJSONList} from './chromeAPI/retrieveDeadlineJSON'

import {useSetRecoilState} from 'recoil'
import DeadlineList from './atoms/deadlinelist'
// make all componets classes expect for those that useState
// then use the <App /> to handle ALL STATE because it's all intertwined. I'm probably gonna put this on my big monitor

export default function App() {
  const setDeadlineList = useSetRecoilState(DeadlineList);

  useEffect(() => {
    (
      async() => {
        let res = await retrieveSortedJSONList();
        setDeadlineList(res);
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
