import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';
import Cards from '../pages/Home';
import LogementFile from '../pages/Logement';
import Apropos from '../pages/Apropos';
import Error from '../pages/Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<DefaultLayout />}>
          <Route path='/' element={(<Cards />)} />
          <Route path="/">
            <Route path="/LogementsFile/:id"
              element={
                <React.Fragment>
                  <LogementFile />
                </React.Fragment>
              } />
          </Route>
          <Route path='/Apropos' element={<Apropos />} />
        </Route>
        <Route element={<DefaultLayout />}>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
