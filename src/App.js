import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './App/store';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import Products from './features/products/Products';

function App() {
  return (
    <Provider store={store}>
      <div className="border border-2 border-danger m-2 p-2">
        <Counter></Counter>
        {/* <Todolist></Todolist> */}
        <Products></Products>
      </div>
    </Provider>
  );
}

export default App;
