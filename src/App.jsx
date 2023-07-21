import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headlines from './Components/Headlines';
import HeadlineCard from './Components/HeadlineCard';
import { DataService } from './Utils/DataService';
import { getThreeHeadlines } from './Utils/DataServiceArray';

const App = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    getHeadlines();
  }, []);

  const getHeadlines = async () => {
    try {
      const response = await DataService();
      setHeadlines(response);
      const threeHeadlines = getThreeHeadlines();
      setHeadlines(threeHeadlines);
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
        <Route
          path="/headline/:id"
          element={<HeadlineCard headline={headlines} />}
        />
      </Routes>
    </Router>
  );
};

export default App;


