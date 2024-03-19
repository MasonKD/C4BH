// Callback.js
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './Usercontext'; // import UserContext

const Callback = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext); // use login function from context

  useEffect(() => {
    // Parse the callback URL to get the code
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      // Exchange the code for tokens here with your backend

      // Assume you have a function to get the username from the token response
      const username = 'fetchedUsername'; // Replace with actual username obtained through the token exchange process

      // Set user context with the obtained username
      login(username);

      navigate('/mainpage');
    }
  }, [navigate, login]);

  return <div>Loading...</div>; // Or any loading indicator you prefer
};

export default Callback;

