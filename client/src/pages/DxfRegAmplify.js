import React, { useState, useEffect } from 'react';
import { Button, Flex, Icon, View } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useAuthenticator } from '@aws-amplify/ui-react';
import { updateUserAttribute } from '@aws-amplify/auth';
import { dynamoAPI, determineForm } from '../data/dsaFetch';
import font from '../css/fonts.module.css'
import flex from '../css/flex.module.css'

import Modal from '../components/Modal/Modal'
import MicroModal from 'micromodal';

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
	// console.log("Getting DSA data for", participant_id);
	try {
	// const dsaData = [{DxFID: "DXF000000", Type: 'Acute Care Settings', Requests_for_Notifications_of_ADT_Events: "SELF", Information_Delivery: "SELF", Request_for_Information: "SELF"}] // FOR DEBUG
	  const dsaData = await dynamoAPI(participant_id);
	  console.log("Got DSA data response: ", dsaData);
	  return dsaData || []; // Return fetched data or an empty array if null
	} catch (error) {
	  console.error('Error fetching data from DynamoDB:', error);
	  return [];
	}
  }

function filterFormParts(dsa_data) {
	return determineForm(dsa_data);
}

MicroModal.init();

const DxfRegistration = () => {
	const navigate = useNavigate();
	const { user } = useAuthenticator((context) => [context.user]);
	const [form_parts, setFormParts] = useState([]);

	const [p_id, setPID] = useState("");
	const [dsa_data, setDsaData] = useState({});
	const [submittedDxFID, setSubmittedDxFID] = useState(false);

	const showDxfForm = async (fields) => {
		if(fields && fields.DxFID) {
			console.log("successfully submitted dxf participant selection, ", fields)
			//TODO CHeck if the dxf participant id is valid
			let participant_id = fields.DxFID
			setPID(participant_id)
			try {
				const fetchedDsaData = await getDsaData(participant_id);
				// console.log("got dsa data", fetchedDsaData);
				setDsaData(fetchedDsaData[0]);
				if( fetchedDsaData[0]) {
					setSubmittedDxFID(true);
				} else
					console.error("dsa data isn't valid", dsa_data)
				setFormParts(filterFormParts(fetchedDsaData));
			} catch (error) {
				console.error("Error fetching DSA data:", error);
				// Handle errors appropriately (e.g., display an error message)
			}
			//todo call api to request to add user to dxfAdmin group, verify by c4bhAdmin
		}
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
		updatedFields.DxFID = updatedFields.DxFID.split("=")[1]
		// console.log("submitting form", updatedFields)
		return updatedFields
	}


	const [form_statuses, setFormStatuses] = useState({
		TechCBO: 0,
		TechAcute: 0,
		TechInt: 0,
		NotifADTUno: 0,
		NotifADTDos: 0,
		Info: 0,
		RequestUno: 0,
		RequestDos: 0,
		Hipaa: 0
	});

	//todo refactor to DRY with a macro or something https://parenscript.common-lisp.dev/reference.html
	const formSuccessTechCBO = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			TechCBO: 1
		}))
	}

	const formErrorTechCBO = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			TechCBO: event
		}))
	}

	const formSuccessTechAcute = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			TechAcute: 1
		}))
	}

	const formErrorTechAcute = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			TechAcute: event
		}))
	}

	const formSuccessTechInt = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			TechInt: 1
		}))
	}

	const formErrorTechInt = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			TechInt: event
		}))
	}

	const formSuccessADTUno = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			NotifADTUno: 1
		}))
	}

	const formErrorADTUno = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			NotifADTUno: event
		}))
	}

	const formSuccessADTDos = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			NotifADTDos: 1
		}))
	}

	const formErrorADTDos = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			NotifADTDos: event
		}))
	}

	const formSuccessInfo = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			Info: 1
		}))
	}

	const formErrorInfo = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			Info: event
		}))
	}

	const formSuccessReqUno = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			RequestUno: 1
		}))
	}

	const formErrorReqUno = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			RequestUno: event
		}))
	}

	const formSuccessReqDos = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			RequestDos: 1
		}))
	}

	const formErrorReqDos = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			RequestDos: event
		}))
	}

	const formSuccessHipaa = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			Hipaa: 1
		}))
	}

	const formErrorHipaa = (event) => {
		setFormStatuses( (prevStatuses) => ({
			...prevStatuses,
			Hipaa: event
		}))
	}

	const [modalParams, setModalParams] = useState({
		title: '',
		message: '',
		onClose: () => {},
	});

	const submit_DxF_form = () => {
		// console.log("submitting form parts ", form_parts)
		for (let i in form_parts) {
			const part = form_parts[i]
			try {
				document.getElementById(part).requestSubmit();
			} catch (e) {
				console.error("error dom submitting form ", e)
			}
		}
		document.getElementById("Hipaa").requestSubmit();
	}

	useEffect(() => {
		// console.log("checking parts: ", form_parts, " for errors in statuses: ", form_statuses)
		const allChecked = form_parts.every((part) => form_statuses[part] !== 0);
		if (!allChecked || form_parts.length == 0) {
			return
		}
		const form_errors = form_parts.filter((part) => form_statuses[part] != 1);

		show_form_status_modal(form_errors);
	  }, [form_parts, form_statuses]); // Dependency on form_statuses

	const show_form_status_modal = (errors) => {
		// console.log("checking errors for modal: ", errors)
		let close_func = () => {};
		if (errors.length > 0) {
			setModalParams({
				title: 'Error!',
				message: `Error submitting form: ${errors}`
			});

			close_func = () => {
				const dom_id = document.getElementById(`${errors[0]}`)
				const elementTop = dom_id.offsetTop;
				const headerHeight = document.getElementById("app-header").offsetHeight; // Get header height
				// console.log(`.${errors[0]} `,dom_id, " scrollto ", (elementTop - headerHeight))
				if (dom_id) {
					window.scrollTo(0, elementTop - headerHeight);
					// dom_id.scrollIntoView({ block: "start" });
				}
			}
		} else {
			setModalParams({
				title: 'Success!',
				message: 'Thank you for registering your DxF Participant with the Connecting for Better Health Sandbox!'
			});

			close_func = () => {
				navigate("/")
				window.scrollTo(0, 0);
			}
		}
		MicroModal.show('modal-1', {
			// https://micromodal.vercel.app/#configuration
			onClose: close_func,
		  });
	}

	return (
	<div className="main-container">
		<main>
			<Modal {...modalParams} />
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
								try {
									document.getElementById("dxfPicker").requestSubmit();
								} catch (e) {
									console.error("error dom submitting dxfPicker ", e)
								}
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
								<div style={{marginLeft:'.5rem', alignSelf: 'end', paddingBottom: 0}}>{dsa_data.Participant_Name_SubordinateOrganization}</div>
							</div>
							<div className={`${flex.row}`}>
								<h3 style={{alignSelf: 'end'}}>Type:</h3>
								<div style={{marginLeft:'.5rem', alignSelf: 'end'}}>{dsa_data.Type}</div>
							</div>
							<div className={`${flex.row}`}>
								<h3 style={{alignSelf: 'end'}}>Sub-Type:</h3>
								<div style={{marginLeft:'.5rem', alignSelf: 'end'}}>{dsa_data.Sub_Type}</div>
							</div>
							<div className={`${flex.row} RequestUno`}>
								<h3 style={{alignSelf: 'center'}}>Request for Information:</h3>
								<div style={{marginLeft:'.5rem', alignSelf: 'end'}}>{dsa_data.Request_for_Information}</div>
							</div>
							<div className={`${flex.row}`}>
								<h3 style={{alignSelf: 'center'}}>Information Delivery:</h3>
								<div style={{marginLeft:'.5rem', alignSelf: 'end'}}>{dsa_data.Information_Delivery}</div>
							</div>
							<div className={`${flex.row}`}>
								<h3 style={{alignSelf: 'center'}}>ADT Event Notification</h3>
								<div style={{marginLeft:'.5rem', alignSelf: 'end'}}>{dsa_data.Requests_for_Notifications_of_ADT_Events}</div>
							</div>
						</div>
						<hr></hr>

						<div id="TECH">
						{(form_parts.includes("TechAcute") || form_parts.includes("TechCBO") || form_parts.includes("TechInt")) && (
							<h2><i>Technology:</i></h2>
						)
						}
						{form_parts.includes("TechAcute") && (
							<TechAcuteCreateForm id = "TechAcute" className = { form_statuses["TechAcute"] == 1 || form_statuses["TechAcute"] == 0 ? '' : 'highlighted'} onSubmit = {addDxfToForm} onSuccess={formSuccessTechAcute} onError={formErrorTechAcute} />
						)}

						{form_parts.includes("TechCBO") && (<TechCBOCreateForm id = "TechCBO" className = { form_statuses["TechCBO"] == 1 || form_statuses["TechCBO"] == 0 ? '' : 'highlighted'} onSubmit = {addDxfToForm} onSuccess={formSuccessTechCBO} onError={formErrorTechCBO}></TechCBOCreateForm>)}

						{form_parts.includes("TechInt") && (<TechIntermediariesCreateForm id = "TechInt" className = { form_statuses["TechInt"] == 1 || form_statuses["TechInt"] == 0 ? '' : 'highlighted'} onSubmit = {addDxfToForm} onSuccess={formSuccessTechInt} onError={formErrorTechInt}></TechIntermediariesCreateForm>)}
						</div>

						<div id="REQ">
						{(form_parts.includes("RequestUno") || form_parts.includes("RequestDos")) && (
						<div>
							<h2><i>Request for Information:</i></h2>
						</div>)}

						{form_parts.includes("RequestUno") && (<div>
						<RequestInfoUnoCreateForm id = "RequestUno" className = { form_statuses["RequestUno"] == 1 || form_statuses["RequestUno"] == 0 ? '' : 'highlighted'} onSubmit = {addDxfToForm} onSuccess={formSuccessReqUno} onError={formErrorReqUno}></RequestInfoUnoCreateForm>
						</div>)}

						{form_parts.includes("RequestDos") && (
						<RequestInfoDosCreateForm id = "RequestDos" className = { form_statuses["RequestDos"] == 1 || form_statuses["RequestDos"] == 0 ? '' : 'highlighted'} onSubmit = {addDxfToForm} onSuccess={formSuccessReqDos} onError={formErrorReqDos}></RequestInfoDosCreateForm>)}
						</div>

						<div id="DLV">
						{form_parts.includes("Info") && (
						<div>
							<div style={{display: 'inline-flex', flexDirection: 'row'}}>
							<h2><i>Information Delivery:</i></h2>
						</div>

						<InformationDeliveryCreateForm id = "Info" className = { form_statuses["Info"] == 1 || form_statuses["Info"] == 0 ? '' : 'highlighted'} onSubmit = {addDxfToForm} onSuccess={formSuccessInfo} onError={formErrorInfo}></InformationDeliveryCreateForm>
						</div>)}
						</div>

						<div id="ADT">
						{(form_parts.includes("NotifADTUno") || form_parts.includes("NotifADTDos")) && (
							<div>
							<div className={`${flex.row}`}>
								<h2><i>ADT Event Notification:</i></h2>
							</div></div>
						)}

						{form_parts.includes("NotifADTUno") && (<NotificationsADTUnoCreateForm id = "NotifADTUno" className = { form_statuses["NotifADTUno"] == 1 || form_statuses["NotifADTUno"] == 0 ? '' : 'highlighted'} onSubmit = {addDxfToForm} onSuccess={formSuccessADTUno} onError={formErrorADTUno}></NotificationsADTUnoCreateForm>)}

						{form_parts.includes("NotifADTDos") && (<NotificationsADTDosCreateForm id = "NotifADTDos" className = { form_statuses["NotifADTDos"] == 1 || form_statuses["NotifADTDos"] == 0 ? '' : 'highlighted'} onSubmit = {addDxfToForm} onSuccess={formSuccessADTDos} onError={formErrorADTDos}></NotificationsADTDosCreateForm>)}
						</div>

						<div id="HIPAA"></div>
						<h2><i>HIPAA Compliance:</i></h2>
						<HIPAACreateForm id = "Hipaa" className = { form_statuses["Hipaa"] == 1 || form_statuses["Hipaa"] == 0 ? '' : 'highlighted'} onSubmit = {addDxfToForm} onSuccess={formSuccessHipaa} onError={formErrorHipaa}></HIPAACreateForm>

						<Button
							variation="primary"
							type="submit"
							loadingText=""
							onClick={submit_DxF_form}
						>
							{/* <IconSave />  */}
							Submit
						</Button>
					</div>
				}


			</div>
		</main>
	</div>
  )
}
export default DxfRegistration;




