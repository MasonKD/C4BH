import React, { useState } from 'react';
import { Button, Flex, Icon, View } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useAuthenticator } from '@aws-amplify/ui-react';
import { updateUserAttribute } from '@aws-amplify/auth';
import { dynamoAPI, determineForm } from '../data/dsaFetch';
import font from '../css/fonts.module.css'
import flex from '../css/flex.module.css'

import  UserInfoC4BHCreateForm from '../ui-components/UserInfoC4BHCreateForm'
import  TechAcuteCreateForm from '../ui-components/TechAcuteCreateForm'
import  TechCBOCreateForm from '../ui-components/TechCBOCreateForm'
import  TechIntermediariesCreateForm from '../ui-components/TechIntermediariesCreateForm'
import  NotificationsADTUnoCreateForm from '../ui-components/NotificationsADTUnoCreateForm'
import  NotificationsADTDosCreateForm from '../ui-components/NotificationsADTDosCreateForm'
import  RequestInfoUnoCreateForm from '../ui-components/RequestInfoUnoCreateForm'
import  RequestInfoDosCreateForm from '../ui-components/RequestInfoDosCreateForm'
import  InformationDeliveryCreateForm from '../ui-components/InformationDeliveryCreateForm'
import  HIPAACreateForm from '../ui-components/HIPAACreateForm'

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

function filterFormParts(dsa_data) {
	console.log("setting form parts for ", dsa_data)
	//Noah fill in
	const x = determineForm(dsa_data);
	console.log(x);
	return determineForm(dsa_data);
}

const DxfRegistration = () => {
	const navigate = useNavigate(); // Initialize navigate function
	const { user } = useAuthenticator((context) => [context.user]);
	const [form_parts, setFormParts] = useState(["TechCBO"]);
	const [p_id, setPID] = useState("");
	const [dsa_data, setDsaData] = useState({});
	const [submittedDxFID, setSubmittedDxFID] = useState(false);

	const showDxfForm = async (fields) => {
		if(fields && fields.DxFID) {
			console.log("successfully submitted dxf participant selection, ", fields)
			//TODO CHeck if the dxf participant id is valid
			let participant_id = fields.DxFID.split("=")[1]
			setPID(participant_id)
			console.log("next ", participant_id)
			try {
				const fetchedDsaData = await getDsaData(participant_id);
				console.log("got dsa data", fetchedDsaData);
				setDsaData(fetchedDsaData[0]);
				if( dsa_data) {
					console.log(dsa_data)
					setSubmittedDxFID(true);
				} else
					console.error("dsa data isn't valid", dsa_data)
				setFormParts(filterFormParts(fetchedDsaData));
				// setFormParts(['TechCBO', 'TechAcute', 'TechInt', 'NotifADTUno', 'NotifADTDos', 'Info', 'RequestUno', 'RequestDos'])
			} catch (error) {
				console.error("Error fetching DSA data:", error);
				// Handle errors appropriately (e.g., display an error message)
			}
			//todo call api to request to add user to dxfAdmin group, verify by c4bhAdmin
		}
	}

	// Create a new debounced version of the 'getDsaData' function with a delay of 500 milliseconds (.5 seconds)
	const submit_DxF_form = async (event) => {
		for (let i in form_parts) {
			const part = form_parts[i]
			console.log("submitting", part)
			try {
				document.getElementById(part).requestSubmit();
			} catch (e) {
				console.error("error submitting form ", e)
			}
		}
		console.log("submitting hipaa")
		document.getElementById("Hipaa").requestSubmit();
	}

	const addDxfToForm = (fields) => {
		const updatedFields = {}
		Object.assign(updatedFields, fields);
		updatedFields.DxFID = p_id
		console.log("submitting form", updatedFields)
		return updatedFields
	}

	const addUserToForm = (fields) => {
		const updatedFields = {}
		Object.assign(updatedFields, fields);
		updatedFields.User = user?.signInDetails.loginId
		console.log("submitting form", updatedFields)
		return updatedFields
	}

	const formSuccess = (event) => {
		console.log("success form", event)
	}

	const redirectToHome = () => {
		navigate('/'); // Redirects to the landing page
	}

	return (
	<div className="main-container">
		<main>

			<div style={{display:Flex, justifyContent:'left'}}>
				{/* dxf participant selector */}
				{!submittedDxFID &&
					<div>
						<UserInfoC4BHCreateForm id="dxfPicker" onSubmit={addUserToForm} onSuccess={showDxfForm}>
						</UserInfoC4BHCreateForm>
						<div style={{marginBottom: '.5rem'}}>
						If your organization is not registered, please visit the  <a href="https://signdxf.powerappsportals.com/">Home Data Exchange Framework Signing Portal</a>
						</div>
						<br/>
						<Button
							variation="primary"
							loadingText=""

							onClick={(event) => {
								console.log(event)
								try {
									document.getElementById("dxfPicker").requestSubmit();
								} catch (e) {
									console.log("error submitting form ", e)
								}
								console.log("submitted dxf picker ")
							}}
						>
							Next
						</Button>
					</div>
				}
				{submittedDxFID &&
					<div> {/* these forms depend on dsa data */}
						<div className={`${flex.col} light-gray-rounded-corner`} style={{justifyContent: 'flex-start'}}>
							<h3 style={{alignSelf: 'center'}}>DxF Participant Info</h3>
							<div className={`${flex.row}`}>
								<h3 style={{alignSelf: 'end'}}>ID:</h3>
								<div style={{marginLeft:'.5rem', alignSelf: 'end'}}>{p_id}</div>
							</div>
							<div className={`${flex.row}`}>
								<h3 style={{alignSelf: 'auto'}}>Name:</h3>
								<div style={{marginLeft:'.5rem', alignSelf: 'end', paddingBottom: 0}}>{dsa_data.Participant_Name_PrimaryOrganization}</div>
							</div>
							<div className={`${flex.row}`}>
								<h3 style={{alignSelf: 'auto'}}>Sub Name:</h3>
								<div style={{marginLeft:'.5rem', alignSelf: 'end', paddingBottom: 0}}>{dsa_data.Participant_Name_PrimaryOrganization}</div>
							</div>
							<div className={`${flex.row}`}>
								<h3 style={{alignSelf: 'end'}}>Type:</h3>
								<div style={{marginLeft:'.5rem', alignSelf: 'end'}}>{dsa_data.Type}</div>
							</div>
							<div className={`${flex.row}`}>
								<h3 style={{alignSelf: 'end'}}>Sub-Type:</h3>
								<div style={{marginLeft:'.5rem', alignSelf: 'end'}}>{dsa_data.Sub_Type}</div>
							</div>
							<div className={`${flex.row}`}>
								<h3 style={{alignSelf: 'center'}}>Notifications of ADT Events</h3>
								<div style={{marginLeft:'.5rem', alignSelf: 'end'}}>{dsa_data.Requests_for_Notifications_of_ADT_Events}</div>
							</div>
							<div className={`${flex.row}`}>
								<h3 style={{alignSelf: 'center'}}>Information Delivery:</h3>
								<div style={{marginLeft:'.5rem', alignSelf: 'end'}}>{dsa_data.Information_Delivery}</div>
							</div>
							<div className={`${flex.row}`}>
								<h3 style={{alignSelf: 'center'}}>Request for Information:</h3>
								<div style={{marginLeft:'.5rem', alignSelf: 'end'}}>{dsa_data.Request_for_Information}</div>
							</div>
						</div>
						<hr></hr>
						<h2><i>Technology:</i></h2>
						{form_parts.includes("TechAcute") && (
							<TechAcuteCreateForm id = "TechAcute" onSubmit = {addDxfToForm} onSuccess={formSuccess} />
						)}

						{form_parts.includes("TechCBO") && (<TechCBOCreateForm id = "TechCBO" onSubmit = {addDxfToForm} onSuccess={formSuccess}></TechCBOCreateForm>)}

						{form_parts.includes("TechInt") && (<TechIntermediariesCreateForm id = "TechInt" onSubmit = {addDxfToForm} onSuccess={formSuccess}></TechIntermediariesCreateForm>)}

						{(form_parts.includes("NotifADTUno") || form_parts.includes("NotifADTDos")) && (
							<div>
							<div className={`${flex.row}`}>
								<h2><i>Notifications of ADT Events:</i></h2>
							</div></div>
						)}

						{form_parts.includes("NotifADTUno") && (<NotificationsADTUnoCreateForm id = "NotifADTUno" onSubmit = {addDxfToForm} onSuccess={formSuccess}></NotificationsADTUnoCreateForm>)}

						{form_parts.includes("NotifADTDos") && (<NotificationsADTDosCreateForm id = "NotifADTDos" onSubmit = {addDxfToForm} onSuccess={formSuccess}></NotificationsADTDosCreateForm>)}

						{form_parts.includes("Info") && (
						<div><div style={{display: 'inline-flex', flexDirection: 'row'}}>
							<h2><i>Information Delivery:</i></h2>
						</div>

						<InformationDeliveryCreateForm id = "Info" onSubmit = {addDxfToForm} onSuccess={formSuccess}></InformationDeliveryCreateForm>
						</div>)}

						{(form_parts.includes("RequestUno") || form_parts.includes("RequestDos")) && (
						<div>
							<h2><i>Request for Information:</i></h2>
						</div>)}

						{form_parts.includes("RequestUno") && (<div>
						<RequestInfoUnoCreateForm id = "RequestUno" onSubmit = {addDxfToForm} onSuccess={formSuccess}></RequestInfoUnoCreateForm>
						</div>)}

						{form_parts.includes("RequestDos") && (
						<RequestInfoDosCreateForm id = "RequestDos" onSubmit = {addDxfToForm} onSuccess={formSuccess}></RequestInfoDosCreateForm>)}

						<h2><i>HIPAA Compliance:</i></h2>
						<HIPAACreateForm id = "Hipaa" onSuccess={redirectToHome}></HIPAACreateForm>

						<Button
							variation="primary"
							type="submit"
							loadingText=""
							onClick={(event) => {
								console.log("submitting form", event);
								submit_DxF_form(event)
							}}
						>
							{/* <IconSave />  */}
							Submit
						</Button>
					</div>
				}


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




