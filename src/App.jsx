import React, {useEffect, useState} from 'react';
import MainDeadline from './components/MainDeadline'
import InputForm from './components/InputForm'
import Lists, {getContext} from './contexts/DeadlineList'

export default function App() {
  const [context, setContext] = useState({});

  useEffect(() => {
    (async() => {
      let p = await getContext();
      setContext(p);
    })();

    // because apparently youre not allowed to use an async func as your useeffect
  }, []);
  
  return (
    <Lists.Provider value={context}>
      <MainDeadline />
      <InputForm />
    </Lists.Provider>
  );
}
