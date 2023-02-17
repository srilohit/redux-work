import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';
import Todolist from './components/Todolist';
import Likedislike from './components/Likedislike';
import Countries from './components/Countries';

function App() {

  return (
    <Provider store={store}>
      <div >
      <Counter></Counter>
      <Todolist></Todolist>
      <Likedislike></Likedislike>
      <Countries></Countries>
    </div>
    </Provider>
  );
}

export default App;
