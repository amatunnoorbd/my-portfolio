// src/App.js
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import Home from './Home/Home';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g., fetching data, initializing)
    setTimeout(() => setLoading(false), 1300); // Set loading to false after 2 seconds (adjust as needed)
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <LoadingSpinner/>
      ) : (
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
