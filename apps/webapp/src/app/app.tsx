import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { LoginPage, HomePage } from './pages';

export function App() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/login');
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
