import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headlines from "./Components/Headlines";
import HeadlineCard from "./Components/HeadlineCard";
import { DataService } from './src/Utils/DataService.js'

const App = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    getHeadlines();
  }, []);

  const getHeadlines = async () => {
    try {
      const specificData = await DataService();
      setHeadlines(specificData.slice(0, 3));
    } catch (error) {
      console.log('Error fetching headlines:', error);
    }
  };

  if (headlines.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Headlines headlines={headlines} />} />
        <Route path="/headline/id" element={<HeadlineCard headline={headlines} />} />
      </Routes>
    </Router>

  );
}

export default App;
