// Callback.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Here you might want to validate the authentication response from Cognito
    // For now, let's simply redirect to the MainPage
    navigate('/mainpage');
  }, [navigate]);

  return <div>Loading...</div>; // Or any loading indicator you prefer
};

export default Callback;
