import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './App/store';
import Counter from './features/counter/Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="border border-2 border-danger m-2 p-2">
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
