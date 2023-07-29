import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headlines from './Components/Headlines/Headlines';
import ArticleSummary from './Components/Article/ArticleSummary';
import { getHeadlines } from './Utils/dataservice';
import './App.css';
import Header from './Components/Header/Header';


const App = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    fetchHeadlines();
  }, []);

  const fetchHeadlines = async () => {
    try {
      const data = await getHeadlines();
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
        <Route path="/article/:id" element={<ArticleSummary />} />
      </Routes>
    </Router>
  );
};

export default App;
