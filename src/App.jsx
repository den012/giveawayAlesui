import React from 'react';

import './App.css';

import Confeti from './components/Confeti.jsx';
import Progressbar from '@ramonak/react-progress-bar';
import Alesui from './assets/Alesui.png';

const App = () => {
  const completed = 1133;
  const goal = 2500;
  const percentage = (completed / goal) * 100;
  return (
    <div>
      <Confeti />
      <div className="text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl text-red-700 mb-4">Alesio sugus!!!</h1>
        <img src={Alesui} alt="Alesio" className="w-auto h-64" />


        <h1 className="text-4xl text-blue-300">Fani infocati alesui05yt!</h1>
        <div className="flex flex-row items-center justify-center">
          <progress className="w-96 h-4 bg-red-700 rounded-xl mr-5" value={percentage} max="100"></progress>
          <h1 className="text-xl text-blue-500">{percentage.toFixed(2)}%</h1>
        </div>
        <h1 className="text-3xl text-yellow-500">1133/2500</h1>
      </div>
    </div>
  )
}

export default App;