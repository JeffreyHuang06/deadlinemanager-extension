import React from 'react';
import MainDeadline from './components/MainDeadline'
import InputForm from './components/InputForm'

// make all componets classes expect for those that useState
// then use the <App /> to handle ALL STATE because it's all intertwined. I'm probably gonna put this on my big monitor

export default function App() {
  return (
    <div className="App">
      <MainDeadline />
      <InputForm />
    </div>
  );
}
