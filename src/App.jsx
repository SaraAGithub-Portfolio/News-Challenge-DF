import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headlines from './Components/Headlines';
import { getThreeHeadlines } from '../src/Utils/dataservice';
import './App.css';

import Header from './Components/Header';

const App = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    getHeadlines();
  }, []);

  const getHeadlines = async () => {
    try {
      const headlines = await getThreeHeadlines();
      setHeadlines(headlines);
    } catch (error) {
      console.log('Error fetching headlines:', error);
    }
  };


  if (headlines.length === 0) {
    return <div>Please wait a moment...</div>;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Headlines headlines={headlines} />} />

      </Routes>
    </Router>
  );
};

export default App;


