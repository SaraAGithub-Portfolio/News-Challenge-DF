import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headlines from './Components/Headlines/Headlines';
import { getData } from './Utils/dataservice';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Header/Footer/Footer';


const App = () => {
  const [newsData, setNewsData] = useState([]);

  const fetchNews = async () => {
    try {
      const data = await getData();
      setNewsData(data);
    } catch (error) {
      console.log('Error fetching news:', error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Headlines headlines={newsData} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
