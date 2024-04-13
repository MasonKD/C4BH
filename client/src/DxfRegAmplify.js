// import amplifyconfig from './amplifyconfiguration.json';
import {C4bhFormDataCreateForm} from './ui-components'
import logoImage from './images/C4BHLogo.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);

const DxfRegistration = () => {
	const navigate = useNavigate(); // Initialize navigate function
  return (
	<div className="main-container">
		<header className="header">
			<Logo />
		</header>
		<main>
			<C4bhFormDataCreateForm
				onSubmit={(fields) => {
					console.log("submitted: ", fields)
					//trim strings, modify form data
					// const updatedFields = {}
					// Object.keys(fields).forEach(key => {
					// 	if (typeof fields[key] === 'string') {
					// 		updatedFields[key] = fields[key].trim()
					// 	} else {
					// 		updatedFields[key] = fields[key]
					// 	}
					// })
					// return updatedFields
					return fields
				}}
				onSuccess={() => {
					console.log("success")
					navigate('/mainpage'); // Redirects to the landing page
				}}
			/>
		</main>
	</div>
  )
}
export default DxfRegistration;
