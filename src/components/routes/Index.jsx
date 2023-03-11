import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import DefaultLayout from '../pages/DefaultLayout';
import LogementsFile from '../pages/LogementsFile';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<DefaultLayout />}>
          <Route path="/">
            <Route path="/LogementsFile/:id"
              element={
                <React.Fragment>
                  <LogementsFile />
                </React.Fragment>
              } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
