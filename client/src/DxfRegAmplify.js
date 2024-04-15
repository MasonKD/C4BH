// import amplifyconfig from './amplifyconfiguration.json';
import {C4bhFormDataCreateForm} from './ui-components'
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const DxfRegistration = () => {
	const navigate = useNavigate(); // Initialize navigate function
  return (
	<div className="main-container">
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
					navigate('/'); // Redirects to the landing page
				}}
			/>
		</main>
	</div>
  )
}
export default DxfRegistration;
