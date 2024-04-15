
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from './images/C4BHLogo.png';

const Logo = () => {
	const navigate = useNavigate();

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