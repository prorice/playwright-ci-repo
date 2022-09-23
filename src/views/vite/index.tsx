import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import reactLogo from '@assets/images/react.svg';
import { RootState } from '@/modules/store';
import { increment } from '@/modules/counter-reducer';
import './App.css';

function Vite() {
  const count = useSelector(({ counter }: RootState) => counter.value);
  const dispatch = useDispatch();

  return (
    <div
      className="App"
      style={{ margin: '0 auto', padding: '2rem', textAlign: 'center' }}
    >
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Vite;
