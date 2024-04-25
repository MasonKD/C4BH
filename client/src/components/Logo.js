import { useNavigate } from 'react-router-dom';
import logoImage from '../images/C4BHLogo.png';

export default function Logo() {
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
		<img src={logoImage} style={{ maxHeight : 60 }} alt="Connecting for Better Health" />
	  </div>
	);
};