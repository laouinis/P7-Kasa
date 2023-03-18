import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';
import Home from '../pages/Home';
import Logement from '../pages/Logement';
// import Slideshow from '../components/Slideshow';
import Apropos from '../pages/Apropos';
import Error from '../pages/Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<DefaultLayout />}>
          <Route path='/' element={(<Home />)} />
          <Route path="/">
            <Route path="/LogementFile/:id"
              element={
                <React.Fragment>
                  {/* <Slideshow /> */}
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
