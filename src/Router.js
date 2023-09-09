import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import EmployeeList from './pages/Employee/EmployeeList';
import ErrorPage from './pages/404/ErrorPage';
import CreateEmployee from './pages/Employee/CreateEmployee';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Router() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <div style={{ minHeight: 'calc(100vh - 80px - 100px)' }}>
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/list-employee" element={<EmployeeList />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
