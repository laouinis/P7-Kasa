import React from 'react';
import Footer from '../src/components/Footer';
import Router from './routes/Index';
import './styles/normalize.css';
import './styles/App.css';

/**
 * Principal React  App rendering
 * @function
 * @return {JSX.Element}
 */
function App() {
  return (
    <>
      <div className='main-container'>
        <Router />
      </div>
      <Footer />
    </>
  );
}

export default App;
