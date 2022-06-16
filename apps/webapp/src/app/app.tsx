import React from 'react';
import { useNavigate } from 'react-router-dom';

export function App() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/login');
  }, []);
  return null;
}

export default App;
