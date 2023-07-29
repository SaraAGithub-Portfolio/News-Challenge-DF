import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headlines from './Components/Headlines/Headlines';
import { getData } from './Utils/dataservice';
import './App.css';
import Header from './Components/Header/Header';


const App = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    fetchHeadlines();
  }, []);

  const fetchHeadlines = async () => {
    try {
      const data = await getData();
      setHeadlines(data);
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
