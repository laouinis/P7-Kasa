import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';
import Cards from '../pages/Home';
import Logement from '../pages/Logement';
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
                  <Logement />
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
