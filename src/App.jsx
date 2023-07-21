import axios from "axios";
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headlines from "./Components/Headlines";
import mockNewsData from "../tests/mock data/mockNewsData.json";

const App = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    getHeadlines();
  }, []);

  const getHeadlines = async () => {
    try {
      const response = await axios.get("http://localhost:5173/mockApiResponse/");
      console.log(response);
      setHeadlines(mockNewsData.data.results);
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
      </Routes>
    </Router>

  );
}

export default App;
