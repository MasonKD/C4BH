
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../images/C4BHLogo.png';
import { Hub } from 'aws-amplify/utils';

const Logo = () => {
	const navigate = useNavigate();
	Hub.listen('auth', ({ payload }) => {
		switch (payload.event) {
		  case 'signedIn':
			console.log("user has been signedIn successfully.", payload);
			navigate('/');
			break;
		  case 'signedOut':
			console.log('user has been signedOut successfully.', payload);
			break;
		  case 'tokenRefresh':
			console.log('auth tokens has been refreshed.', payload);
			break;
		  case 'tokenRefresh_failure':
			console.error('failure while refreshing auth tokens.', payload);
			break;
		  case 'signInWithRedirect':
			console.log('signInWithRedirect API has successfully been resolved.', payload);
			break;
		  case 'signInWithRedirect_failure':
			console.error('failure while trying to resolve signInWithRedirect API.', payload);
			break;
		  case 'customOAuthState':
			console.info('custom state returned from CognitoHosted UI', payload);
			break;
		}
});
	const handleLogoClick = () => {
	  navigate('/'); // Navigate to the home page
	};

	return (
	  <div
		className="logo"
		onClick={handleLogoClick}
		style={{ cursor: 'pointer' }} // Add cursor style on hover
	  >
		<img src={logoImage} alt="Connecting for Better Health" />
	  </div>
	);
  };

const AppHeader = ({Signout, User}) => {
  const navigate = useNavigate();


return (
	<header className="header">
	<Logo />
	<div>
	<div className="user-participant">Welcome, {User?.signInDetails.loginId.split("@")[0]}</div>
	<button className="signout-button" onClick={() => {navigate("/DxfRegistration")}}>Register DxF Participant</button>
	<button className="signout-button" onClick={Signout}>Sign Out</button>
	</div>
	</header>
)
}

export default AppHeader