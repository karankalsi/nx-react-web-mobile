import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages';
import Login from './pages/Login';

export function App() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/login');
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
