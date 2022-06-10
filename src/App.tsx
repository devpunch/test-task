import React from 'react';
import './App.module.scss';
import {MessagesBord} from "./Page/Board";

import s from './App.module.scss';
import {Route, Routes} from "react-router-dom";
import {AuthorPage} from "./Page/AuthorPage";

function App() {
  return (
    <>
      <div className={s.wrapper}>
        <h1 className={s.title}>message feed</h1>
        <Routes>
          <Route path='/' element={<MessagesBord/>}/>
          <Route path='/:author' element={<AuthorPage/>}/>
        </Routes>
      </div>
    </>

);
}

export default App;
