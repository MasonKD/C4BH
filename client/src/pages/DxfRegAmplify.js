// import amplifyconfig from './amplifyconfiguration.json';
import {C4bhFormDataCreateForm} from '../ui-components'
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useAuthenticator } from '@aws-amplify/ui-react';

const DxfRegistration = () => {
	const navigate = useNavigate(); // Initialize navigate function
	const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
	<div className="main-container">
		<main>
			<C4bhFormDataCreateForm
				onSubmit={(fields) => {
					// console.log("submitted: ", fields)
					//trim strings, modify form data
					const updatedFields = {}
					Object.assign(updatedFields, fields);
					// const returnedTarget = Object.assign({user: user?.signInDetails.loginId}, updatedFields);
					updatedFields.user = user?.signInDetails.loginId
					// console.log(returnedTarget)
					return updatedFields
					// return fields
				}}
				onSuccess={() => {
					console.log("success")
					navigate('/'); // Redirects to the landing page
				}}
				onError={(fields, error) => {
					console.error("errored on form: ", fields)
					console.error(error)
				  }}
			/>
		</main>
	</div>
  )
}
export default DxfRegistration;
