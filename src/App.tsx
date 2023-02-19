import React, { useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const activeMenu: boolean = true;
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
          </div>
         { activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>Sidebar</div>
         ): (
          <div className='w-0 dark:bg-secondary-dark-bg'>Sidebar w-0</div>
         )}
         <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu? 'md:ml-72' : 'flex-2'}`}>
          <div className='fixed md-static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            NavBar
          </div>
         </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
