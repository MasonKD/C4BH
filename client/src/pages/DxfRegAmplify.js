import React, { useState } from 'react';
import { Button, Flex, Icon, View } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useAuthenticator } from '@aws-amplify/ui-react';
import { updateUserAttribute } from '@aws-amplify/auth';
import { dynamoAPI, determineForm } from '../data/dsaFetch';



import  C4bhFormDataCreateForm, {submitC4bhFormDataCreateForm} from '../ui-components/C4bhFormDataCreateForm'
import  C4bhUpdatedModelCreateForm, {submitC4bhUpdatedModelCreateForm} from '../ui-components/C4bhUpdatedModelCreateForm'
import  HIPAACreateForm, {submitHIPAACreateForm} from '../ui-components/HIPAACreateForm_ExportSubmit'
import  InformationDeliveryCreateForm, {submitInformationDeliveryCreateForm} from '../ui-components/InformationDeliveryCreateForm_ExportSubmit'
import  NotificationsADTUnoCreateForm, {submitNotificationsADTUnoCreateForm} from '../ui-components/NotificationsADTUnoCreateForm_ExportSubmit'
import  NotificationsADTDosCreateForm, {submitNotificationsADTDosCreateForm} from '../ui-components/NotificationsADTDosCreateForm_ExportSubmit'
import  RequestInfoCreateForm, {submitRequestInfoCreateForm} from '../ui-components/RequestInfoCreateForm_ExportSubmit'
import  TechAcuteCreateForm, {submitTechAcuteCreateForm} from '../ui-components/TechAcuteCreateForm_ExportSubmit'
import  TechCBOCreateForm, {submitTechCBOCreateForm} from '../ui-components/TechCBOCreateForm_ExportSubmit'
import  TechIntermediariesCreateForm, {submitTechIntermediariesCreateForm} from '../ui-components/TechIntermediariesCreateForm_ExportSubmit'
import  UserInfoC4BHCreateForm, {submitUserInfoC4BHCreateForm} from '../ui-components/UserInfoC4BHCreateForm_ExportSubmit'

let DEBOUNCE_DELAY = 200

async function handleUpdateUserAttribute(attributeKey, value) {
	try {
		const _promise = await updateUserAttribute({
			userAttribute: {
				attributeKey,
				value
			}
		});
		// handleUpdateUserAttributeNextSteps(promise);
	} catch (error) {
		console.log(error);
	}
}

async function getDsaData(participant_id) {
	console.log("Getting DSA data for", participant_id);
	try {
	  const dsaData = await dynamoAPI(participant_id);
	  console.log(dsaData);
	  return dsaData || []; // Return fetched data or an empty array if null
	} catch (error) {
	  console.error('Error fetching data from DynamoDB:', error);
	  return [];
	}
  }

let form_parts = ["TechAcute", "TechCBO", "TechInt", "NotifADUno", "NotifADUno", "Info", "RequestUno", "RequestDos"]
function filterFormParts(dsa_data) {
	console.log("setting form parts for ", dsa_data)
	//Noah fill in
	const x = determineForm(dsa_data[0]);
	console.log(x);
	const divname = document.querySelector("#divname")
	if(
		dsa_data[0]
	)
	divname.innerHTML="type: " + dsa_data[0].Type

	 return determineForm(dsa_data[0]);
}

 function debounce(func, delay, callback) {
	let timer;

	return async function (...args) {
	  clearTimeout(timer);
	  timer = setTimeout(async () => {
		const result = await func(...args); // Execute mainFunction and capture the return value
		if (callback) {
		  callback(result); // Call the callback function with the return value
		}
	  }, delay);
	};
  }


// Create a new debounced version of the 'getDsaData' function with a delay of 500 milliseconds (.5 seconds)
form_parts = []
async function submit_DxF_form() {
	for (let part in form_parts) {
		switch (part) {
			case "TechAcute": submitTechAcuteCreateForm(); break;
			case "TechCBO": submitTechCBOCreateForm(); break;
			case "TechInt": submitTechIntermediariesCreateForm(); break;
			case "NotifADTUno": submitNotificationsADTUnoCreateForm(); break;
			case "NotifADTDos": submitNotificationsADTDosCreateForm(); break;
			case "Info": submitUserInfoC4BHCreateForm(); break;
			case "Request": submitRequestInfoCreateForm(); break;
			// case "RequestDos": submitRequestInfoDosCreateForm(); break;
		}
	}
}

const DxfRegistration = () => {
	const navigate = useNavigate(); // Initialize navigate function
	const { user } = useAuthenticator((context) => [context.user]);
	const [form_parts, setFormParts] = useState(["TechCBO"]);
	const debouncedGetDsaData = debounce(getDsaData, DEBOUNCE_DELAY, (dsa_data) => {setFormParts(filterFormParts(dsa_data))});
	return (
	<div className="main-container">
		<main>
			<div id = 'divname'></div>
			
			<div style={{display:Flex, justifyContent:'left'}}>
				{/* dxf participant selector */}
				<UserInfoC4BHCreateForm
				onChange={( fields) => {
					console.log("changed ", fields)
					debouncedGetDsaData(fields.User.split('=')[1])
				}}
				onSuccess={async (fields) => {
					console.log("successfully submitted dxf participant selection")
					//add user to dxfMember group
					handleUpdateUserAttribute("custom:member_of_dxf", fields.DxFID.split("=")[1])
				}}
				></UserInfoC4BHCreateForm>
				<React.Fragment> {/* these forms depend on dsa data */}
					{form_parts.includes("TechAcute") && (<TechAcuteCreateForm></TechAcuteCreateForm>)}

					{form_parts.includes("TechCBO") && (<TechCBOCreateForm></TechCBOCreateForm>)}

					{form_parts.includes("TechInt") && (<TechIntermediariesCreateForm></TechIntermediariesCreateForm>)}

					{form_parts.includes("NotifADTUno") && (<NotificationsADTUnoCreateForm></NotificationsADTUnoCreateForm>)}

					{form_parts.includes("NotifADTDos") && (<NotificationsADTDosCreateForm></NotificationsADTDosCreateForm>)}

					{form_parts.includes("Info") && (<InformationDeliveryCreateForm></InformationDeliveryCreateForm>)}

					{form_parts.includes("RequestUno") && (<RequestInfoCreateForm></RequestInfoCreateForm>)}

					{/* {form_parts.includes("RequestDos") && (<RequestInfoDosCreateForm></RequestInfoDosCreateForm>)} */}

				</React.Fragment>

				<HIPAACreateForm></HIPAACreateForm>

				<Button
					variation="primary"
					loadingText=""
					onClick={() => {submit_DxF_form(form_parts)}}
				>
					{/* <IconSave />  */}
					Submit
				</Button>
			</div>
			{/* <C4bhFormDataCreateForm
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
			/> */}
		</main>
	</div>
  )
}
export default DxfRegistration;




