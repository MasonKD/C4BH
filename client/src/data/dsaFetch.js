// dsaFetch.js
import axios from 'axios';

// Function to fetch data from DynamoDB API
export const dynamoAPI = async (dxfNumber) => {
    const url = 'http://localhost:3001/dxf-query?dxfNumber='+dxfNumber;
    console.log("this is the url:",url);
  try {
    const response = await axios.get('http://localhost:3001/dxf-query?dxfNumber='+dxfNumber)
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching data from DynamoDB:', error);
    return null;
  }
};

// Function to determine which forms to show based on item types
export const determineForm = (items) => {
    console.log("here is the determineform data:" , items)
  const techCboEligibleTypes = ["Community-Based Organizations", "Ancillary Care", "Pharmacy"];
  const techAcuteEligibleTypes = ["Subacute Care Facility", "Ambulatory Care Settings", "Acute Care Settings"];
  const techIntEligibleTypes = ["Plans", "Intermediaries", "Counties"];
  const NotifADTUnoEligibleComs = ["SELF", "OTHER"];
  const NotifADTDosEligibleTypes = ["Intermediaries", "Acute Care Settings"];
  const InfoEligibleComs = ["SELF", "OTHER"];
  const RequestUnoEligibleComs = ["SELF", "OTHER"];
  const RequestDosEligibleComs = ["SELF", "OTHER"];
  

  let formParts = [];

  if (items) {
    const itemType = items.Type;
    const ADTcomType = items.Requests_for_Notifications_of_ADT_Events;
    const deliveryType = items.Information_Delivery;
    const requestType = items.Request_For_Information;
    console.log(items.Type);
    if (techCboEligibleTypes.includes(itemType)) {
      formParts.push('TechCBO');
    }
    if (techAcuteEligibleTypes.includes(itemType)) {
      formParts.push('TechAcute');
    }
    if (techIntEligibleTypes.includes(itemType)) {
      formParts.push('TechInt');
    }
    if (NotifADTUnoEligibleComs.includes(deliveryType)) {
      formParts.push('NotifADTUno');
    }
    if (NotifADTDosEligibleTypes.includes(itemType) && NotifADTUnoEligibleComs.includes(ADTcomType)) {
      formParts.push('NotifADTDos');
    }
    if (InfoEligibleComs.includes(requestType)) {
      formParts.push('Info');
    }
    if (RequestUnoEligibleComs.includes(deliveryType)) {
      formParts.push('RequestUno');
    }
    if (RequestDosEligibleComs.includes(requestType)) {
      formParts.push('RequestDos');
    }
  } else {
    console.log('No items found or items array is empty.');
  }

  return formParts;
};

