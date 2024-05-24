// Callback.js
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './Usercontext'; // Ensure correct path

const Callback = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext); // Use login function from context

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log('Authorization code:', code); // Debug: Log authorization code

    if (code) {
      // Replace this URL with your backend endpoint
      // fetch('https://cognito-idp.us-east-2.amazonaws.com/us-east-2_8sbfATJlO/.well-known/jwks.json', {
      const url = getEnvURL('COGNITO_ENDPOINT');
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
      .then(response => {
        console.log('Response:', response); // Debug: Log the response
        return response.json();
      })
      .then(data => {
        console.log('Data:', data); // Debug: Log the data
        const username = data.username;
        login(username); // Update user context with the obtained username
        navigate('/'); // Navigate to the main page
      })
      .catch(error => {
        console.error('Error fetching:', error);
        // Handle the error appropriately
      });
    }
  }, [navigate, login]);

  return <div>Loading...</div>; // Or any loading indicator you prefer
};

export default Callback;






//https://cognito-idp.us-east-2.amazonaws.com/us-east-2_8sbfATJlO/.well-known/jwks.json