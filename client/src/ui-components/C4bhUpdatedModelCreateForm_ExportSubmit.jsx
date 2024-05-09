/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createC4bhUpdatedModel } from "../graphql/mutations";
const client = generateClient();
export default function C4bhUpdatedModelCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    User: "",
    EHR_Vendors: "",
    Customer_Management_System: "",
    HIE_or_Inter: "",
    ReceiveADTDirectSecureEmail: false,
    ReceiveADTDirectEmailAddress: "",
    ReceiveADTsFTP: false,
    ReceiveADTPointToPoint: false,
    ReceiveADTHTTPSnonFHIR: false,
    ReceiveADTHTTPSFHIR: false,
    ReceiveADTHTTPSEndpoint: "",
    ReceiveADTOther: false,
    ReceiveADTOtherDescription: "",
    SendADTDirectSecureEmail: false,
    SendADTsFTP: false,
    SendADTPointToPoint: false,
    SendADTHTTPSNon_FHIR: false,
    SendADTHTTPS_FHIR: false,
    SendADTPortal: false,
    SendADTOther: false,
    SendADTOtherDescribe: "",
    RecieveInfoDirectSecureEmail: false,
    RecieveInfosFTP: false,
    RecieveInfoHL7V2: false,
    RecieveInfoMLLP_HTTPS: "",
    RecieveInfoThirdPartyReferral: false,
    RecieveInfoThirdPartyPlatform: "",
    RecieveInfoOther: false,
    RecieveInfoOther_Describe: "",
    RecieveInfoDirectEmailAddress: "",
    SendInfoDirectSecureEmail: false,
    SendInfosFTP: false,
    SendInfoHL7v2: false,
    SendInfoMLLP_HTTPS: "",
    SendInfoThirdPartyReferral: false,
    SendInfoThirdPartyPlatform: "",
    SendInfoOther: false,
    SenInfoOther_Describe: "",
    RequestRecieveDirectSecureEmail: false,
    RequestDirectEmailAddress: "",
    RequestIHE: false,
    RequestFHIR: false,
    RequestOther: false,
    RequestOtherDescribe: "",
    RequestRespondDirectSecureEmail: false,
    RequestRespondIHE: false,
    RequestRespondFHIR: false,
    RequestRespondFHIRendpoint: "",
    RequestRespondOther: false,
    RequestRespondOtherDescribe: "",
    CoveredHIPAA: false,
    HybridHIPAA: false,
    AssociateHIPAA: false,
    NotCoveredHIPAA: false,
  };
  const [User, setUser] = React.useState(initialValues.User);
  const [EHR_Vendors, setEHR_Vendors] = React.useState(
    initialValues.EHR_Vendors
  );
  const [Customer_Management_System, setCustomer_Management_System] =
    React.useState(initialValues.Customer_Management_System);
  const [HIE_or_Inter, setHIE_or_Inter] = React.useState(
    initialValues.HIE_or_Inter
  );
  const [ReceiveADTDirectSecureEmail, setReceiveADTDirectSecureEmail] =
    React.useState(initialValues.ReceiveADTDirectSecureEmail);
  const [ReceiveADTDirectEmailAddress, setReceiveADTDirectEmailAddress] =
    React.useState(initialValues.ReceiveADTDirectEmailAddress);
  const [ReceiveADTsFTP, setReceiveADTsFTP] = React.useState(
    initialValues.ReceiveADTsFTP
  );
  const [ReceiveADTPointToPoint, setReceiveADTPointToPoint] = React.useState(
    initialValues.ReceiveADTPointToPoint
  );
  const [ReceiveADTHTTPSnonFHIR, setReceiveADTHTTPSnonFHIR] = React.useState(
    initialValues.ReceiveADTHTTPSnonFHIR
  );
  const [ReceiveADTHTTPSFHIR, setReceiveADTHTTPSFHIR] = React.useState(
    initialValues.ReceiveADTHTTPSFHIR
  );
  const [ReceiveADTHTTPSEndpoint, setReceiveADTHTTPSEndpoint] = React.useState(
    initialValues.ReceiveADTHTTPSEndpoint
  );
  const [ReceiveADTOther, setReceiveADTOther] = React.useState(
    initialValues.ReceiveADTOther
  );
  const [ReceiveADTOtherDescription, setReceiveADTOtherDescription] =
    React.useState(initialValues.ReceiveADTOtherDescription);
  const [SendADTDirectSecureEmail, setSendADTDirectSecureEmail] =
    React.useState(initialValues.SendADTDirectSecureEmail);
  const [SendADTsFTP, setSendADTsFTP] = React.useState(
    initialValues.SendADTsFTP
  );
  const [SendADTPointToPoint, setSendADTPointToPoint] = React.useState(
    initialValues.SendADTPointToPoint
  );
  const [SendADTHTTPSNon_FHIR, setSendADTHTTPSNon_FHIR] = React.useState(
    initialValues.SendADTHTTPSNon_FHIR
  );
  const [SendADTHTTPS_FHIR, setSendADTHTTPS_FHIR] = React.useState(
    initialValues.SendADTHTTPS_FHIR
  );
  const [SendADTPortal, setSendADTPortal] = React.useState(
    initialValues.SendADTPortal
  );
  const [SendADTOther, setSendADTOther] = React.useState(
    initialValues.SendADTOther
  );
  const [SendADTOtherDescribe, setSendADTOtherDescribe] = React.useState(
    initialValues.SendADTOtherDescribe
  );
  const [RecieveInfoDirectSecureEmail, setRecieveInfoDirectSecureEmail] =
    React.useState(initialValues.RecieveInfoDirectSecureEmail);
  const [RecieveInfosFTP, setRecieveInfosFTP] = React.useState(
    initialValues.RecieveInfosFTP
  );
  const [RecieveInfoHL7V2, setRecieveInfoHL7V2] = React.useState(
    initialValues.RecieveInfoHL7V2
  );
  const [RecieveInfoMLLP_HTTPS, setRecieveInfoMLLP_HTTPS] = React.useState(
    initialValues.RecieveInfoMLLP_HTTPS
  );
  const [RecieveInfoThirdPartyReferral, setRecieveInfoThirdPartyReferral] =
    React.useState(initialValues.RecieveInfoThirdPartyReferral);
  const [RecieveInfoThirdPartyPlatform, setRecieveInfoThirdPartyPlatform] =
    React.useState(initialValues.RecieveInfoThirdPartyPlatform);
  const [RecieveInfoOther, setRecieveInfoOther] = React.useState(
    initialValues.RecieveInfoOther
  );
  const [RecieveInfoOther_Describe, setRecieveInfoOther_Describe] =
    React.useState(initialValues.RecieveInfoOther_Describe);
  const [RecieveInfoDirectEmailAddress, setRecieveInfoDirectEmailAddress] =
    React.useState(initialValues.RecieveInfoDirectEmailAddress);
  const [SendInfoDirectSecureEmail, setSendInfoDirectSecureEmail] =
    React.useState(initialValues.SendInfoDirectSecureEmail);
  const [SendInfosFTP, setSendInfosFTP] = React.useState(
    initialValues.SendInfosFTP
  );
  const [SendInfoHL7v2, setSendInfoHL7v2] = React.useState(
    initialValues.SendInfoHL7v2
  );
  const [SendInfoMLLP_HTTPS, setSendInfoMLLP_HTTPS] = React.useState(
    initialValues.SendInfoMLLP_HTTPS
  );
  const [SendInfoThirdPartyReferral, setSendInfoThirdPartyReferral] =
    React.useState(initialValues.SendInfoThirdPartyReferral);
  const [SendInfoThirdPartyPlatform, setSendInfoThirdPartyPlatform] =
    React.useState(initialValues.SendInfoThirdPartyPlatform);
  const [SendInfoOther, setSendInfoOther] = React.useState(
    initialValues.SendInfoOther
  );
  const [SenInfoOther_Describe, setSenInfoOther_Describe] = React.useState(
    initialValues.SenInfoOther_Describe
  );
  const [RequestRecieveDirectSecureEmail, setRequestRecieveDirectSecureEmail] =
    React.useState(initialValues.RequestRecieveDirectSecureEmail);
  const [RequestDirectEmailAddress, setRequestDirectEmailAddress] =
    React.useState(initialValues.RequestDirectEmailAddress);
  const [RequestIHE, setRequestIHE] = React.useState(initialValues.RequestIHE);
  const [RequestFHIR, setRequestFHIR] = React.useState(
    initialValues.RequestFHIR
  );
  const [RequestOther, setRequestOther] = React.useState(
    initialValues.RequestOther
  );
  const [RequestOtherDescribe, setRequestOtherDescribe] = React.useState(
    initialValues.RequestOtherDescribe
  );
  const [RequestRespondDirectSecureEmail, setRequestRespondDirectSecureEmail] =
    React.useState(initialValues.RequestRespondDirectSecureEmail);
  const [RequestRespondIHE, setRequestRespondIHE] = React.useState(
    initialValues.RequestRespondIHE
  );
  const [RequestRespondFHIR, setRequestRespondFHIR] = React.useState(
    initialValues.RequestRespondFHIR
  );
  const [RequestRespondFHIRendpoint, setRequestRespondFHIRendpoint] =
    React.useState(initialValues.RequestRespondFHIRendpoint);
  const [RequestRespondOther, setRequestRespondOther] = React.useState(
    initialValues.RequestRespondOther
  );
  const [RequestRespondOtherDescribe, setRequestRespondOtherDescribe] =
    React.useState(initialValues.RequestRespondOtherDescribe);
  const [CoveredHIPAA, setCoveredHIPAA] = React.useState(
    initialValues.CoveredHIPAA
  );
  const [HybridHIPAA, setHybridHIPAA] = React.useState(
    initialValues.HybridHIPAA
  );
  const [AssociateHIPAA, setAssociateHIPAA] = React.useState(
    initialValues.AssociateHIPAA
  );
  const [NotCoveredHIPAA, setNotCoveredHIPAA] = React.useState(
    initialValues.NotCoveredHIPAA
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUser(initialValues.User);
    setEHR_Vendors(initialValues.EHR_Vendors);
    setCustomer_Management_System(initialValues.Customer_Management_System);
    setHIE_or_Inter(initialValues.HIE_or_Inter);
    setReceiveADTDirectSecureEmail(initialValues.ReceiveADTDirectSecureEmail);
    setReceiveADTDirectEmailAddress(initialValues.ReceiveADTDirectEmailAddress);
    setReceiveADTsFTP(initialValues.ReceiveADTsFTP);
    setReceiveADTPointToPoint(initialValues.ReceiveADTPointToPoint);
    setReceiveADTHTTPSnonFHIR(initialValues.ReceiveADTHTTPSnonFHIR);
    setReceiveADTHTTPSFHIR(initialValues.ReceiveADTHTTPSFHIR);
    setReceiveADTHTTPSEndpoint(initialValues.ReceiveADTHTTPSEndpoint);
    setReceiveADTOther(initialValues.ReceiveADTOther);
    setReceiveADTOtherDescription(initialValues.ReceiveADTOtherDescription);
    setSendADTDirectSecureEmail(initialValues.SendADTDirectSecureEmail);
    setSendADTsFTP(initialValues.SendADTsFTP);
    setSendADTPointToPoint(initialValues.SendADTPointToPoint);
    setSendADTHTTPSNon_FHIR(initialValues.SendADTHTTPSNon_FHIR);
    setSendADTHTTPS_FHIR(initialValues.SendADTHTTPS_FHIR);
    setSendADTPortal(initialValues.SendADTPortal);
    setSendADTOther(initialValues.SendADTOther);
    setSendADTOtherDescribe(initialValues.SendADTOtherDescribe);
    setRecieveInfoDirectSecureEmail(initialValues.RecieveInfoDirectSecureEmail);
    setRecieveInfosFTP(initialValues.RecieveInfosFTP);
    setRecieveInfoHL7V2(initialValues.RecieveInfoHL7V2);
    setRecieveInfoMLLP_HTTPS(initialValues.RecieveInfoMLLP_HTTPS);
    setRecieveInfoThirdPartyReferral(
      initialValues.RecieveInfoThirdPartyReferral
    );
    setRecieveInfoThirdPartyPlatform(
      initialValues.RecieveInfoThirdPartyPlatform
    );
    setRecieveInfoOther(initialValues.RecieveInfoOther);
    setRecieveInfoOther_Describe(initialValues.RecieveInfoOther_Describe);
    setRecieveInfoDirectEmailAddress(
      initialValues.RecieveInfoDirectEmailAddress
    );
    setSendInfoDirectSecureEmail(initialValues.SendInfoDirectSecureEmail);
    setSendInfosFTP(initialValues.SendInfosFTP);
    setSendInfoHL7v2(initialValues.SendInfoHL7v2);
    setSendInfoMLLP_HTTPS(initialValues.SendInfoMLLP_HTTPS);
    setSendInfoThirdPartyReferral(initialValues.SendInfoThirdPartyReferral);
    setSendInfoThirdPartyPlatform(initialValues.SendInfoThirdPartyPlatform);
    setSendInfoOther(initialValues.SendInfoOther);
    setSenInfoOther_Describe(initialValues.SenInfoOther_Describe);
    setRequestRecieveDirectSecureEmail(
      initialValues.RequestRecieveDirectSecureEmail
    );
    setRequestDirectEmailAddress(initialValues.RequestDirectEmailAddress);
    setRequestIHE(initialValues.RequestIHE);
    setRequestFHIR(initialValues.RequestFHIR);
    setRequestOther(initialValues.RequestOther);
    setRequestOtherDescribe(initialValues.RequestOtherDescribe);
    setRequestRespondDirectSecureEmail(
      initialValues.RequestRespondDirectSecureEmail
    );
    setRequestRespondIHE(initialValues.RequestRespondIHE);
    setRequestRespondFHIR(initialValues.RequestRespondFHIR);
    setRequestRespondFHIRendpoint(initialValues.RequestRespondFHIRendpoint);
    setRequestRespondOther(initialValues.RequestRespondOther);
    setRequestRespondOtherDescribe(initialValues.RequestRespondOtherDescribe);
    setCoveredHIPAA(initialValues.CoveredHIPAA);
    setHybridHIPAA(initialValues.HybridHIPAA);
    setAssociateHIPAA(initialValues.AssociateHIPAA);
    setNotCoveredHIPAA(initialValues.NotCoveredHIPAA);
    setErrors({});
  };
  const validations = {
    User: [],
    EHR_Vendors: [],
    Customer_Management_System: [],
    HIE_or_Inter: [],
    ReceiveADTDirectSecureEmail: [],
    ReceiveADTDirectEmailAddress: [],
    ReceiveADTsFTP: [],
    ReceiveADTPointToPoint: [],
    ReceiveADTHTTPSnonFHIR: [],
    ReceiveADTHTTPSFHIR: [],
    ReceiveADTHTTPSEndpoint: [],
    ReceiveADTOther: [],
    ReceiveADTOtherDescription: [],
    SendADTDirectSecureEmail: [],
    SendADTsFTP: [],
    SendADTPointToPoint: [],
    SendADTHTTPSNon_FHIR: [],
    SendADTHTTPS_FHIR: [],
    SendADTPortal: [],
    SendADTOther: [],
    SendADTOtherDescribe: [],
    RecieveInfoDirectSecureEmail: [],
    RecieveInfosFTP: [],
    RecieveInfoHL7V2: [],
    RecieveInfoMLLP_HTTPS: [],
    RecieveInfoThirdPartyReferral: [],
    RecieveInfoThirdPartyPlatform: [],
    RecieveInfoOther: [],
    RecieveInfoOther_Describe: [],
    RecieveInfoDirectEmailAddress: [],
    SendInfoDirectSecureEmail: [],
    SendInfosFTP: [],
    SendInfoHL7v2: [],
    SendInfoMLLP_HTTPS: [],
    SendInfoThirdPartyReferral: [],
    SendInfoThirdPartyPlatform: [],
    SendInfoOther: [],
    SenInfoOther_Describe: [],
    RequestRecieveDirectSecureEmail: [],
    RequestDirectEmailAddress: [],
    RequestIHE: [],
    RequestFHIR: [],
    RequestOther: [],
    RequestOtherDescribe: [],
    RequestRespondDirectSecureEmail: [],
    RequestRespondIHE: [],
    RequestRespondFHIR: [],
    RequestRespondFHIRendpoint: [],
    RequestRespondOther: [],
    RequestRespondOtherDescribe: [],
    CoveredHIPAA: [],
    HybridHIPAA: [],
    AssociateHIPAA: [],
    NotCoveredHIPAA: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={submitC4bhUpdatedModelCreateForm }
      {...getOverrideProps(overrides, "C4bhUpdatedModelCreateForm")}
      {...rest}
    >
      <TextField
        label="User"
        isRequired={false}
        isReadOnly={false}
        value={User}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User: value,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.User ?? value;
          }
          if (errors.User?.hasError) {
            runValidationTasks("User", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("User", User)}
        errorMessage={errors.User?.errorMessage}
        hasError={errors.User?.hasError}
        {...getOverrideProps(overrides, "User")}
      ></TextField>
      <TextField
        label="Ehr vendors"
        isRequired={false}
        isReadOnly={false}
        value={EHR_Vendors}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors: value,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.EHR_Vendors ?? value;
          }
          if (errors.EHR_Vendors?.hasError) {
            runValidationTasks("EHR_Vendors", value);
          }
          setEHR_Vendors(value);
        }}
        onBlur={() => runValidationTasks("EHR_Vendors", EHR_Vendors)}
        errorMessage={errors.EHR_Vendors?.errorMessage}
        hasError={errors.EHR_Vendors?.hasError}
        {...getOverrideProps(overrides, "EHR_Vendors")}
      ></TextField>
      <TextField
        label="Customer management system"
        isRequired={false}
        isReadOnly={false}
        value={Customer_Management_System}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System: value,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.Customer_Management_System ?? value;
          }
          if (errors.Customer_Management_System?.hasError) {
            runValidationTasks("Customer_Management_System", value);
          }
          setCustomer_Management_System(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "Customer_Management_System",
            Customer_Management_System
          )
        }
        errorMessage={errors.Customer_Management_System?.errorMessage}
        hasError={errors.Customer_Management_System?.hasError}
        {...getOverrideProps(overrides, "Customer_Management_System")}
      ></TextField>
      <TextField
        label="Hie or inter"
        isRequired={false}
        isReadOnly={false}
        value={HIE_or_Inter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter: value,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.HIE_or_Inter ?? value;
          }
          if (errors.HIE_or_Inter?.hasError) {
            runValidationTasks("HIE_or_Inter", value);
          }
          setHIE_or_Inter(value);
        }}
        onBlur={() => runValidationTasks("HIE_or_Inter", HIE_or_Inter)}
        errorMessage={errors.HIE_or_Inter?.errorMessage}
        hasError={errors.HIE_or_Inter?.hasError}
        {...getOverrideProps(overrides, "HIE_or_Inter")}
      ></TextField>
      <SwitchField
        label="Receive adt direct secure email"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveADTDirectSecureEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail: value,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.ReceiveADTDirectSecureEmail ?? value;
          }
          if (errors.ReceiveADTDirectSecureEmail?.hasError) {
            runValidationTasks("ReceiveADTDirectSecureEmail", value);
          }
          setReceiveADTDirectSecureEmail(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ReceiveADTDirectSecureEmail",
            ReceiveADTDirectSecureEmail
          )
        }
        errorMessage={errors.ReceiveADTDirectSecureEmail?.errorMessage}
        hasError={errors.ReceiveADTDirectSecureEmail?.hasError}
        {...getOverrideProps(overrides, "ReceiveADTDirectSecureEmail")}
      ></SwitchField>
      <TextField
        label="Receive adt direct email address"
        isRequired={false}
        isReadOnly={false}
        value={ReceiveADTDirectEmailAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress: value,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.ReceiveADTDirectEmailAddress ?? value;
          }
          if (errors.ReceiveADTDirectEmailAddress?.hasError) {
            runValidationTasks("ReceiveADTDirectEmailAddress", value);
          }
          setReceiveADTDirectEmailAddress(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ReceiveADTDirectEmailAddress",
            ReceiveADTDirectEmailAddress
          )
        }
        errorMessage={errors.ReceiveADTDirectEmailAddress?.errorMessage}
        hasError={errors.ReceiveADTDirectEmailAddress?.hasError}
        {...getOverrideProps(overrides, "ReceiveADTDirectEmailAddress")}
      ></TextField>
      <SwitchField
        label="Receive ad ts ftp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveADTsFTP}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP: value,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.ReceiveADTsFTP ?? value;
          }
          if (errors.ReceiveADTsFTP?.hasError) {
            runValidationTasks("ReceiveADTsFTP", value);
          }
          setReceiveADTsFTP(value);
        }}
        onBlur={() => runValidationTasks("ReceiveADTsFTP", ReceiveADTsFTP)}
        errorMessage={errors.ReceiveADTsFTP?.errorMessage}
        hasError={errors.ReceiveADTsFTP?.hasError}
        {...getOverrideProps(overrides, "ReceiveADTsFTP")}
      ></SwitchField>
      <SwitchField
        label="Receive adt point to point"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveADTPointToPoint}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint: value,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.ReceiveADTPointToPoint ?? value;
          }
          if (errors.ReceiveADTPointToPoint?.hasError) {
            runValidationTasks("ReceiveADTPointToPoint", value);
          }
          setReceiveADTPointToPoint(value);
        }}
        onBlur={() =>
          runValidationTasks("ReceiveADTPointToPoint", ReceiveADTPointToPoint)
        }
        errorMessage={errors.ReceiveADTPointToPoint?.errorMessage}
        hasError={errors.ReceiveADTPointToPoint?.hasError}
        {...getOverrideProps(overrides, "ReceiveADTPointToPoint")}
      ></SwitchField>
      <SwitchField
        label="Receive adthttp snon fhir"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveADTHTTPSnonFHIR}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR: value,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.ReceiveADTHTTPSnonFHIR ?? value;
          }
          if (errors.ReceiveADTHTTPSnonFHIR?.hasError) {
            runValidationTasks("ReceiveADTHTTPSnonFHIR", value);
          }
          setReceiveADTHTTPSnonFHIR(value);
        }}
        onBlur={() =>
          runValidationTasks("ReceiveADTHTTPSnonFHIR", ReceiveADTHTTPSnonFHIR)
        }
        errorMessage={errors.ReceiveADTHTTPSnonFHIR?.errorMessage}
        hasError={errors.ReceiveADTHTTPSnonFHIR?.hasError}
        {...getOverrideProps(overrides, "ReceiveADTHTTPSnonFHIR")}
      ></SwitchField>
      <SwitchField
        label="Receive adthttpsfhir"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveADTHTTPSFHIR}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR: value,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.ReceiveADTHTTPSFHIR ?? value;
          }
          if (errors.ReceiveADTHTTPSFHIR?.hasError) {
            runValidationTasks("ReceiveADTHTTPSFHIR", value);
          }
          setReceiveADTHTTPSFHIR(value);
        }}
        onBlur={() =>
          runValidationTasks("ReceiveADTHTTPSFHIR", ReceiveADTHTTPSFHIR)
        }
        errorMessage={errors.ReceiveADTHTTPSFHIR?.errorMessage}
        hasError={errors.ReceiveADTHTTPSFHIR?.hasError}
        {...getOverrideProps(overrides, "ReceiveADTHTTPSFHIR")}
      ></SwitchField>
      <TextField
        label="Receive adthttps endpoint"
        isRequired={false}
        isReadOnly={false}
        value={ReceiveADTHTTPSEndpoint}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint: value,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.ReceiveADTHTTPSEndpoint ?? value;
          }
          if (errors.ReceiveADTHTTPSEndpoint?.hasError) {
            runValidationTasks("ReceiveADTHTTPSEndpoint", value);
          }
          setReceiveADTHTTPSEndpoint(value);
        }}
        onBlur={() =>
          runValidationTasks("ReceiveADTHTTPSEndpoint", ReceiveADTHTTPSEndpoint)
        }
        errorMessage={errors.ReceiveADTHTTPSEndpoint?.errorMessage}
        hasError={errors.ReceiveADTHTTPSEndpoint?.hasError}
        {...getOverrideProps(overrides, "ReceiveADTHTTPSEndpoint")}
      ></TextField>
      <SwitchField
        label="Receive adt other"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveADTOther}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther: value,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.ReceiveADTOther ?? value;
          }
          if (errors.ReceiveADTOther?.hasError) {
            runValidationTasks("ReceiveADTOther", value);
          }
          setReceiveADTOther(value);
        }}
        onBlur={() => runValidationTasks("ReceiveADTOther", ReceiveADTOther)}
        errorMessage={errors.ReceiveADTOther?.errorMessage}
        hasError={errors.ReceiveADTOther?.hasError}
        {...getOverrideProps(overrides, "ReceiveADTOther")}
      ></SwitchField>
      <TextField
        label="Receive adt other description"
        isRequired={false}
        isReadOnly={false}
        value={ReceiveADTOtherDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription: value,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.ReceiveADTOtherDescription ?? value;
          }
          if (errors.ReceiveADTOtherDescription?.hasError) {
            runValidationTasks("ReceiveADTOtherDescription", value);
          }
          setReceiveADTOtherDescription(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ReceiveADTOtherDescription",
            ReceiveADTOtherDescription
          )
        }
        errorMessage={errors.ReceiveADTOtherDescription?.errorMessage}
        hasError={errors.ReceiveADTOtherDescription?.hasError}
        {...getOverrideProps(overrides, "ReceiveADTOtherDescription")}
      ></TextField>
      <SwitchField
        label="Send adt direct secure email"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendADTDirectSecureEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail: value,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendADTDirectSecureEmail ?? value;
          }
          if (errors.SendADTDirectSecureEmail?.hasError) {
            runValidationTasks("SendADTDirectSecureEmail", value);
          }
          setSendADTDirectSecureEmail(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "SendADTDirectSecureEmail",
            SendADTDirectSecureEmail
          )
        }
        errorMessage={errors.SendADTDirectSecureEmail?.errorMessage}
        hasError={errors.SendADTDirectSecureEmail?.hasError}
        {...getOverrideProps(overrides, "SendADTDirectSecureEmail")}
      ></SwitchField>
      <SwitchField
        label="Send ad ts ftp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendADTsFTP}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP: value,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendADTsFTP ?? value;
          }
          if (errors.SendADTsFTP?.hasError) {
            runValidationTasks("SendADTsFTP", value);
          }
          setSendADTsFTP(value);
        }}
        onBlur={() => runValidationTasks("SendADTsFTP", SendADTsFTP)}
        errorMessage={errors.SendADTsFTP?.errorMessage}
        hasError={errors.SendADTsFTP?.hasError}
        {...getOverrideProps(overrides, "SendADTsFTP")}
      ></SwitchField>
      <SwitchField
        label="Send adt point to point"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendADTPointToPoint}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint: value,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendADTPointToPoint ?? value;
          }
          if (errors.SendADTPointToPoint?.hasError) {
            runValidationTasks("SendADTPointToPoint", value);
          }
          setSendADTPointToPoint(value);
        }}
        onBlur={() =>
          runValidationTasks("SendADTPointToPoint", SendADTPointToPoint)
        }
        errorMessage={errors.SendADTPointToPoint?.errorMessage}
        hasError={errors.SendADTPointToPoint?.hasError}
        {...getOverrideProps(overrides, "SendADTPointToPoint")}
      ></SwitchField>
      <SwitchField
        label="Send adthttps non fhir"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendADTHTTPSNon_FHIR}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR: value,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendADTHTTPSNon_FHIR ?? value;
          }
          if (errors.SendADTHTTPSNon_FHIR?.hasError) {
            runValidationTasks("SendADTHTTPSNon_FHIR", value);
          }
          setSendADTHTTPSNon_FHIR(value);
        }}
        onBlur={() =>
          runValidationTasks("SendADTHTTPSNon_FHIR", SendADTHTTPSNon_FHIR)
        }
        errorMessage={errors.SendADTHTTPSNon_FHIR?.errorMessage}
        hasError={errors.SendADTHTTPSNon_FHIR?.hasError}
        {...getOverrideProps(overrides, "SendADTHTTPSNon_FHIR")}
      ></SwitchField>
      <SwitchField
        label="Send adthttps fhir"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendADTHTTPS_FHIR}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR: value,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendADTHTTPS_FHIR ?? value;
          }
          if (errors.SendADTHTTPS_FHIR?.hasError) {
            runValidationTasks("SendADTHTTPS_FHIR", value);
          }
          setSendADTHTTPS_FHIR(value);
        }}
        onBlur={() =>
          runValidationTasks("SendADTHTTPS_FHIR", SendADTHTTPS_FHIR)
        }
        errorMessage={errors.SendADTHTTPS_FHIR?.errorMessage}
        hasError={errors.SendADTHTTPS_FHIR?.hasError}
        {...getOverrideProps(overrides, "SendADTHTTPS_FHIR")}
      ></SwitchField>
      <SwitchField
        label="Send adt portal"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendADTPortal}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal: value,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendADTPortal ?? value;
          }
          if (errors.SendADTPortal?.hasError) {
            runValidationTasks("SendADTPortal", value);
          }
          setSendADTPortal(value);
        }}
        onBlur={() => runValidationTasks("SendADTPortal", SendADTPortal)}
        errorMessage={errors.SendADTPortal?.errorMessage}
        hasError={errors.SendADTPortal?.hasError}
        {...getOverrideProps(overrides, "SendADTPortal")}
      ></SwitchField>
      <SwitchField
        label="Send adt other"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendADTOther}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther: value,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendADTOther ?? value;
          }
          if (errors.SendADTOther?.hasError) {
            runValidationTasks("SendADTOther", value);
          }
          setSendADTOther(value);
        }}
        onBlur={() => runValidationTasks("SendADTOther", SendADTOther)}
        errorMessage={errors.SendADTOther?.errorMessage}
        hasError={errors.SendADTOther?.hasError}
        {...getOverrideProps(overrides, "SendADTOther")}
      ></SwitchField>
      <TextField
        label="Send adt other describe"
        isRequired={false}
        isReadOnly={false}
        value={SendADTOtherDescribe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe: value,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendADTOtherDescribe ?? value;
          }
          if (errors.SendADTOtherDescribe?.hasError) {
            runValidationTasks("SendADTOtherDescribe", value);
          }
          setSendADTOtherDescribe(value);
        }}
        onBlur={() =>
          runValidationTasks("SendADTOtherDescribe", SendADTOtherDescribe)
        }
        errorMessage={errors.SendADTOtherDescribe?.errorMessage}
        hasError={errors.SendADTOtherDescribe?.hasError}
        {...getOverrideProps(overrides, "SendADTOtherDescribe")}
      ></TextField>
      <SwitchField
        label="Recieve info direct secure email"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RecieveInfoDirectSecureEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail: value,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RecieveInfoDirectSecureEmail ?? value;
          }
          if (errors.RecieveInfoDirectSecureEmail?.hasError) {
            runValidationTasks("RecieveInfoDirectSecureEmail", value);
          }
          setRecieveInfoDirectSecureEmail(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "RecieveInfoDirectSecureEmail",
            RecieveInfoDirectSecureEmail
          )
        }
        errorMessage={errors.RecieveInfoDirectSecureEmail?.errorMessage}
        hasError={errors.RecieveInfoDirectSecureEmail?.hasError}
        {...getOverrideProps(overrides, "RecieveInfoDirectSecureEmail")}
      ></SwitchField>
      <SwitchField
        label="Recieve infos ftp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RecieveInfosFTP}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP: value,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RecieveInfosFTP ?? value;
          }
          if (errors.RecieveInfosFTP?.hasError) {
            runValidationTasks("RecieveInfosFTP", value);
          }
          setRecieveInfosFTP(value);
        }}
        onBlur={() => runValidationTasks("RecieveInfosFTP", RecieveInfosFTP)}
        errorMessage={errors.RecieveInfosFTP?.errorMessage}
        hasError={errors.RecieveInfosFTP?.hasError}
        {...getOverrideProps(overrides, "RecieveInfosFTP")}
      ></SwitchField>
      <SwitchField
        label="Recieve info hl7 v2"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RecieveInfoHL7V2}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2: value,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RecieveInfoHL7V2 ?? value;
          }
          if (errors.RecieveInfoHL7V2?.hasError) {
            runValidationTasks("RecieveInfoHL7V2", value);
          }
          setRecieveInfoHL7V2(value);
        }}
        onBlur={() => runValidationTasks("RecieveInfoHL7V2", RecieveInfoHL7V2)}
        errorMessage={errors.RecieveInfoHL7V2?.errorMessage}
        hasError={errors.RecieveInfoHL7V2?.hasError}
        {...getOverrideProps(overrides, "RecieveInfoHL7V2")}
      ></SwitchField>
      <TextField
        label="Recieve info mllp https"
        isRequired={false}
        isReadOnly={false}
        value={RecieveInfoMLLP_HTTPS}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS: value,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RecieveInfoMLLP_HTTPS ?? value;
          }
          if (errors.RecieveInfoMLLP_HTTPS?.hasError) {
            runValidationTasks("RecieveInfoMLLP_HTTPS", value);
          }
          setRecieveInfoMLLP_HTTPS(value);
        }}
        onBlur={() =>
          runValidationTasks("RecieveInfoMLLP_HTTPS", RecieveInfoMLLP_HTTPS)
        }
        errorMessage={errors.RecieveInfoMLLP_HTTPS?.errorMessage}
        hasError={errors.RecieveInfoMLLP_HTTPS?.hasError}
        {...getOverrideProps(overrides, "RecieveInfoMLLP_HTTPS")}
      ></TextField>
      <SwitchField
        label="Recieve info third party referral"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RecieveInfoThirdPartyReferral}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral: value,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RecieveInfoThirdPartyReferral ?? value;
          }
          if (errors.RecieveInfoThirdPartyReferral?.hasError) {
            runValidationTasks("RecieveInfoThirdPartyReferral", value);
          }
          setRecieveInfoThirdPartyReferral(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "RecieveInfoThirdPartyReferral",
            RecieveInfoThirdPartyReferral
          )
        }
        errorMessage={errors.RecieveInfoThirdPartyReferral?.errorMessage}
        hasError={errors.RecieveInfoThirdPartyReferral?.hasError}
        {...getOverrideProps(overrides, "RecieveInfoThirdPartyReferral")}
      ></SwitchField>
      <TextField
        label="Recieve info third party platform"
        isRequired={false}
        isReadOnly={false}
        value={RecieveInfoThirdPartyPlatform}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform: value,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RecieveInfoThirdPartyPlatform ?? value;
          }
          if (errors.RecieveInfoThirdPartyPlatform?.hasError) {
            runValidationTasks("RecieveInfoThirdPartyPlatform", value);
          }
          setRecieveInfoThirdPartyPlatform(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "RecieveInfoThirdPartyPlatform",
            RecieveInfoThirdPartyPlatform
          )
        }
        errorMessage={errors.RecieveInfoThirdPartyPlatform?.errorMessage}
        hasError={errors.RecieveInfoThirdPartyPlatform?.hasError}
        {...getOverrideProps(overrides, "RecieveInfoThirdPartyPlatform")}
      ></TextField>
      <SwitchField
        label="Recieve info other"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RecieveInfoOther}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther: value,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RecieveInfoOther ?? value;
          }
          if (errors.RecieveInfoOther?.hasError) {
            runValidationTasks("RecieveInfoOther", value);
          }
          setRecieveInfoOther(value);
        }}
        onBlur={() => runValidationTasks("RecieveInfoOther", RecieveInfoOther)}
        errorMessage={errors.RecieveInfoOther?.errorMessage}
        hasError={errors.RecieveInfoOther?.hasError}
        {...getOverrideProps(overrides, "RecieveInfoOther")}
      ></SwitchField>
      <TextField
        label="Recieve info other describe"
        isRequired={false}
        isReadOnly={false}
        value={RecieveInfoOther_Describe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe: value,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RecieveInfoOther_Describe ?? value;
          }
          if (errors.RecieveInfoOther_Describe?.hasError) {
            runValidationTasks("RecieveInfoOther_Describe", value);
          }
          setRecieveInfoOther_Describe(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "RecieveInfoOther_Describe",
            RecieveInfoOther_Describe
          )
        }
        errorMessage={errors.RecieveInfoOther_Describe?.errorMessage}
        hasError={errors.RecieveInfoOther_Describe?.hasError}
        {...getOverrideProps(overrides, "RecieveInfoOther_Describe")}
      ></TextField>
      <TextField
        label="Recieve info direct email address"
        isRequired={false}
        isReadOnly={false}
        value={RecieveInfoDirectEmailAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress: value,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RecieveInfoDirectEmailAddress ?? value;
          }
          if (errors.RecieveInfoDirectEmailAddress?.hasError) {
            runValidationTasks("RecieveInfoDirectEmailAddress", value);
          }
          setRecieveInfoDirectEmailAddress(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "RecieveInfoDirectEmailAddress",
            RecieveInfoDirectEmailAddress
          )
        }
        errorMessage={errors.RecieveInfoDirectEmailAddress?.errorMessage}
        hasError={errors.RecieveInfoDirectEmailAddress?.hasError}
        {...getOverrideProps(overrides, "RecieveInfoDirectEmailAddress")}
      ></TextField>
      <SwitchField
        label="Send info direct secure email"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendInfoDirectSecureEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail: value,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendInfoDirectSecureEmail ?? value;
          }
          if (errors.SendInfoDirectSecureEmail?.hasError) {
            runValidationTasks("SendInfoDirectSecureEmail", value);
          }
          setSendInfoDirectSecureEmail(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "SendInfoDirectSecureEmail",
            SendInfoDirectSecureEmail
          )
        }
        errorMessage={errors.SendInfoDirectSecureEmail?.errorMessage}
        hasError={errors.SendInfoDirectSecureEmail?.hasError}
        {...getOverrideProps(overrides, "SendInfoDirectSecureEmail")}
      ></SwitchField>
      <SwitchField
        label="Send infos ftp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendInfosFTP}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP: value,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendInfosFTP ?? value;
          }
          if (errors.SendInfosFTP?.hasError) {
            runValidationTasks("SendInfosFTP", value);
          }
          setSendInfosFTP(value);
        }}
        onBlur={() => runValidationTasks("SendInfosFTP", SendInfosFTP)}
        errorMessage={errors.SendInfosFTP?.errorMessage}
        hasError={errors.SendInfosFTP?.hasError}
        {...getOverrideProps(overrides, "SendInfosFTP")}
      ></SwitchField>
      <SwitchField
        label="Send info hl7v2"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendInfoHL7v2}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2: value,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendInfoHL7v2 ?? value;
          }
          if (errors.SendInfoHL7v2?.hasError) {
            runValidationTasks("SendInfoHL7v2", value);
          }
          setSendInfoHL7v2(value);
        }}
        onBlur={() => runValidationTasks("SendInfoHL7v2", SendInfoHL7v2)}
        errorMessage={errors.SendInfoHL7v2?.errorMessage}
        hasError={errors.SendInfoHL7v2?.hasError}
        {...getOverrideProps(overrides, "SendInfoHL7v2")}
      ></SwitchField>
      <TextField
        label="Send info mllp https"
        isRequired={false}
        isReadOnly={false}
        value={SendInfoMLLP_HTTPS}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS: value,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendInfoMLLP_HTTPS ?? value;
          }
          if (errors.SendInfoMLLP_HTTPS?.hasError) {
            runValidationTasks("SendInfoMLLP_HTTPS", value);
          }
          setSendInfoMLLP_HTTPS(value);
        }}
        onBlur={() =>
          runValidationTasks("SendInfoMLLP_HTTPS", SendInfoMLLP_HTTPS)
        }
        errorMessage={errors.SendInfoMLLP_HTTPS?.errorMessage}
        hasError={errors.SendInfoMLLP_HTTPS?.hasError}
        {...getOverrideProps(overrides, "SendInfoMLLP_HTTPS")}
      ></TextField>
      <SwitchField
        label="Send info third party referral"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendInfoThirdPartyReferral}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral: value,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendInfoThirdPartyReferral ?? value;
          }
          if (errors.SendInfoThirdPartyReferral?.hasError) {
            runValidationTasks("SendInfoThirdPartyReferral", value);
          }
          setSendInfoThirdPartyReferral(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "SendInfoThirdPartyReferral",
            SendInfoThirdPartyReferral
          )
        }
        errorMessage={errors.SendInfoThirdPartyReferral?.errorMessage}
        hasError={errors.SendInfoThirdPartyReferral?.hasError}
        {...getOverrideProps(overrides, "SendInfoThirdPartyReferral")}
      ></SwitchField>
      <TextField
        label="Send info third party platform"
        isRequired={false}
        isReadOnly={false}
        value={SendInfoThirdPartyPlatform}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform: value,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendInfoThirdPartyPlatform ?? value;
          }
          if (errors.SendInfoThirdPartyPlatform?.hasError) {
            runValidationTasks("SendInfoThirdPartyPlatform", value);
          }
          setSendInfoThirdPartyPlatform(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "SendInfoThirdPartyPlatform",
            SendInfoThirdPartyPlatform
          )
        }
        errorMessage={errors.SendInfoThirdPartyPlatform?.errorMessage}
        hasError={errors.SendInfoThirdPartyPlatform?.hasError}
        {...getOverrideProps(overrides, "SendInfoThirdPartyPlatform")}
      ></TextField>
      <SwitchField
        label="Send info other"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendInfoOther}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther: value,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SendInfoOther ?? value;
          }
          if (errors.SendInfoOther?.hasError) {
            runValidationTasks("SendInfoOther", value);
          }
          setSendInfoOther(value);
        }}
        onBlur={() => runValidationTasks("SendInfoOther", SendInfoOther)}
        errorMessage={errors.SendInfoOther?.errorMessage}
        hasError={errors.SendInfoOther?.hasError}
        {...getOverrideProps(overrides, "SendInfoOther")}
      ></SwitchField>
      <TextField
        label="Sen info other describe"
        isRequired={false}
        isReadOnly={false}
        value={SenInfoOther_Describe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe: value,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.SenInfoOther_Describe ?? value;
          }
          if (errors.SenInfoOther_Describe?.hasError) {
            runValidationTasks("SenInfoOther_Describe", value);
          }
          setSenInfoOther_Describe(value);
        }}
        onBlur={() =>
          runValidationTasks("SenInfoOther_Describe", SenInfoOther_Describe)
        }
        errorMessage={errors.SenInfoOther_Describe?.errorMessage}
        hasError={errors.SenInfoOther_Describe?.hasError}
        {...getOverrideProps(overrides, "SenInfoOther_Describe")}
      ></TextField>
      <SwitchField
        label="Request recieve direct secure email"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RequestRecieveDirectSecureEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail: value,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RequestRecieveDirectSecureEmail ?? value;
          }
          if (errors.RequestRecieveDirectSecureEmail?.hasError) {
            runValidationTasks("RequestRecieveDirectSecureEmail", value);
          }
          setRequestRecieveDirectSecureEmail(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "RequestRecieveDirectSecureEmail",
            RequestRecieveDirectSecureEmail
          )
        }
        errorMessage={errors.RequestRecieveDirectSecureEmail?.errorMessage}
        hasError={errors.RequestRecieveDirectSecureEmail?.hasError}
        {...getOverrideProps(overrides, "RequestRecieveDirectSecureEmail")}
      ></SwitchField>
      <TextField
        label="Request direct email address"
        isRequired={false}
        isReadOnly={false}
        value={RequestDirectEmailAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress: value,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RequestDirectEmailAddress ?? value;
          }
          if (errors.RequestDirectEmailAddress?.hasError) {
            runValidationTasks("RequestDirectEmailAddress", value);
          }
          setRequestDirectEmailAddress(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "RequestDirectEmailAddress",
            RequestDirectEmailAddress
          )
        }
        errorMessage={errors.RequestDirectEmailAddress?.errorMessage}
        hasError={errors.RequestDirectEmailAddress?.hasError}
        {...getOverrideProps(overrides, "RequestDirectEmailAddress")}
      ></TextField>
      <SwitchField
        label="Request ihe"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RequestIHE}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE: value,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RequestIHE ?? value;
          }
          if (errors.RequestIHE?.hasError) {
            runValidationTasks("RequestIHE", value);
          }
          setRequestIHE(value);
        }}
        onBlur={() => runValidationTasks("RequestIHE", RequestIHE)}
        errorMessage={errors.RequestIHE?.errorMessage}
        hasError={errors.RequestIHE?.hasError}
        {...getOverrideProps(overrides, "RequestIHE")}
      ></SwitchField>
      <SwitchField
        label="Request fhir"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RequestFHIR}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR: value,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RequestFHIR ?? value;
          }
          if (errors.RequestFHIR?.hasError) {
            runValidationTasks("RequestFHIR", value);
          }
          setRequestFHIR(value);
        }}
        onBlur={() => runValidationTasks("RequestFHIR", RequestFHIR)}
        errorMessage={errors.RequestFHIR?.errorMessage}
        hasError={errors.RequestFHIR?.hasError}
        {...getOverrideProps(overrides, "RequestFHIR")}
      ></SwitchField>
      <SwitchField
        label="Request other"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RequestOther}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther: value,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RequestOther ?? value;
          }
          if (errors.RequestOther?.hasError) {
            runValidationTasks("RequestOther", value);
          }
          setRequestOther(value);
        }}
        onBlur={() => runValidationTasks("RequestOther", RequestOther)}
        errorMessage={errors.RequestOther?.errorMessage}
        hasError={errors.RequestOther?.hasError}
        {...getOverrideProps(overrides, "RequestOther")}
      ></SwitchField>
      <TextField
        label="Request other describe"
        isRequired={false}
        isReadOnly={false}
        value={RequestOtherDescribe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe: value,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RequestOtherDescribe ?? value;
          }
          if (errors.RequestOtherDescribe?.hasError) {
            runValidationTasks("RequestOtherDescribe", value);
          }
          setRequestOtherDescribe(value);
        }}
        onBlur={() =>
          runValidationTasks("RequestOtherDescribe", RequestOtherDescribe)
        }
        errorMessage={errors.RequestOtherDescribe?.errorMessage}
        hasError={errors.RequestOtherDescribe?.hasError}
        {...getOverrideProps(overrides, "RequestOtherDescribe")}
      ></TextField>
      <SwitchField
        label="Request respond direct secure email"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RequestRespondDirectSecureEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail: value,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RequestRespondDirectSecureEmail ?? value;
          }
          if (errors.RequestRespondDirectSecureEmail?.hasError) {
            runValidationTasks("RequestRespondDirectSecureEmail", value);
          }
          setRequestRespondDirectSecureEmail(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "RequestRespondDirectSecureEmail",
            RequestRespondDirectSecureEmail
          )
        }
        errorMessage={errors.RequestRespondDirectSecureEmail?.errorMessage}
        hasError={errors.RequestRespondDirectSecureEmail?.hasError}
        {...getOverrideProps(overrides, "RequestRespondDirectSecureEmail")}
      ></SwitchField>
      <SwitchField
        label="Request respond ihe"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RequestRespondIHE}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE: value,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RequestRespondIHE ?? value;
          }
          if (errors.RequestRespondIHE?.hasError) {
            runValidationTasks("RequestRespondIHE", value);
          }
          setRequestRespondIHE(value);
        }}
        onBlur={() =>
          runValidationTasks("RequestRespondIHE", RequestRespondIHE)
        }
        errorMessage={errors.RequestRespondIHE?.errorMessage}
        hasError={errors.RequestRespondIHE?.hasError}
        {...getOverrideProps(overrides, "RequestRespondIHE")}
      ></SwitchField>
      <SwitchField
        label="Request respond fhir"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RequestRespondFHIR}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR: value,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RequestRespondFHIR ?? value;
          }
          if (errors.RequestRespondFHIR?.hasError) {
            runValidationTasks("RequestRespondFHIR", value);
          }
          setRequestRespondFHIR(value);
        }}
        onBlur={() =>
          runValidationTasks("RequestRespondFHIR", RequestRespondFHIR)
        }
        errorMessage={errors.RequestRespondFHIR?.errorMessage}
        hasError={errors.RequestRespondFHIR?.hasError}
        {...getOverrideProps(overrides, "RequestRespondFHIR")}
      ></SwitchField>
      <TextField
        label="Request respond fhi rendpoint"
        isRequired={false}
        isReadOnly={false}
        value={RequestRespondFHIRendpoint}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint: value,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RequestRespondFHIRendpoint ?? value;
          }
          if (errors.RequestRespondFHIRendpoint?.hasError) {
            runValidationTasks("RequestRespondFHIRendpoint", value);
          }
          setRequestRespondFHIRendpoint(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "RequestRespondFHIRendpoint",
            RequestRespondFHIRendpoint
          )
        }
        errorMessage={errors.RequestRespondFHIRendpoint?.errorMessage}
        hasError={errors.RequestRespondFHIRendpoint?.hasError}
        {...getOverrideProps(overrides, "RequestRespondFHIRendpoint")}
      ></TextField>
      <SwitchField
        label="Request respond other"
        defaultChecked={false}
        isDisabled={false}
        isChecked={RequestRespondOther}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther: value,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RequestRespondOther ?? value;
          }
          if (errors.RequestRespondOther?.hasError) {
            runValidationTasks("RequestRespondOther", value);
          }
          setRequestRespondOther(value);
        }}
        onBlur={() =>
          runValidationTasks("RequestRespondOther", RequestRespondOther)
        }
        errorMessage={errors.RequestRespondOther?.errorMessage}
        hasError={errors.RequestRespondOther?.hasError}
        {...getOverrideProps(overrides, "RequestRespondOther")}
      ></SwitchField>
      <TextField
        label="Request respond other describe"
        isRequired={false}
        isReadOnly={false}
        value={RequestRespondOtherDescribe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe: value,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.RequestRespondOtherDescribe ?? value;
          }
          if (errors.RequestRespondOtherDescribe?.hasError) {
            runValidationTasks("RequestRespondOtherDescribe", value);
          }
          setRequestRespondOtherDescribe(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "RequestRespondOtherDescribe",
            RequestRespondOtherDescribe
          )
        }
        errorMessage={errors.RequestRespondOtherDescribe?.errorMessage}
        hasError={errors.RequestRespondOtherDescribe?.hasError}
        {...getOverrideProps(overrides, "RequestRespondOtherDescribe")}
      ></TextField>
      <SwitchField
        label="Covered hipaa"
        defaultChecked={false}
        isDisabled={false}
        isChecked={CoveredHIPAA}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA: value,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.CoveredHIPAA ?? value;
          }
          if (errors.CoveredHIPAA?.hasError) {
            runValidationTasks("CoveredHIPAA", value);
          }
          setCoveredHIPAA(value);
        }}
        onBlur={() => runValidationTasks("CoveredHIPAA", CoveredHIPAA)}
        errorMessage={errors.CoveredHIPAA?.errorMessage}
        hasError={errors.CoveredHIPAA?.hasError}
        {...getOverrideProps(overrides, "CoveredHIPAA")}
      ></SwitchField>
      <SwitchField
        label="Hybrid hipaa"
        defaultChecked={false}
        isDisabled={false}
        isChecked={HybridHIPAA}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA: value,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.HybridHIPAA ?? value;
          }
          if (errors.HybridHIPAA?.hasError) {
            runValidationTasks("HybridHIPAA", value);
          }
          setHybridHIPAA(value);
        }}
        onBlur={() => runValidationTasks("HybridHIPAA", HybridHIPAA)}
        errorMessage={errors.HybridHIPAA?.errorMessage}
        hasError={errors.HybridHIPAA?.hasError}
        {...getOverrideProps(overrides, "HybridHIPAA")}
      ></SwitchField>
      <SwitchField
        label="Associate hipaa"
        defaultChecked={false}
        isDisabled={false}
        isChecked={AssociateHIPAA}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA: value,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.AssociateHIPAA ?? value;
          }
          if (errors.AssociateHIPAA?.hasError) {
            runValidationTasks("AssociateHIPAA", value);
          }
          setAssociateHIPAA(value);
        }}
        onBlur={() => runValidationTasks("AssociateHIPAA", AssociateHIPAA)}
        errorMessage={errors.AssociateHIPAA?.errorMessage}
        hasError={errors.AssociateHIPAA?.hasError}
        {...getOverrideProps(overrides, "AssociateHIPAA")}
      ></SwitchField>
      <SwitchField
        label="Not covered hipaa"
        defaultChecked={false}
        isDisabled={false}
        isChecked={NotCoveredHIPAA}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              User,
              EHR_Vendors,
              Customer_Management_System,
              HIE_or_Inter,
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
              SendADTDirectSecureEmail,
              SendADTsFTP,
              SendADTPointToPoint,
              SendADTHTTPSNon_FHIR,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
              RecieveInfoDirectSecureEmail,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              RecieveInfoDirectEmailAddress,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA: value,
            };
            const result = onChange(modelFields);
            value = result?.NotCoveredHIPAA ?? value;
          }
          if (errors.NotCoveredHIPAA?.hasError) {
            runValidationTasks("NotCoveredHIPAA", value);
          }
          setNotCoveredHIPAA(value);
        }}
        onBlur={() => runValidationTasks("NotCoveredHIPAA", NotCoveredHIPAA)}
        errorMessage={errors.NotCoveredHIPAA?.errorMessage}
        hasError={errors.NotCoveredHIPAA?.hasError}
        {...getOverrideProps(overrides, "NotCoveredHIPAA")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

export async function submitC4bhUpdatedModelCreateForm(event) {
        event.preventDefault();
        let modelFields = {
          User,
          EHR_Vendors,
          Customer_Management_System,
          HIE_or_Inter,
          ReceiveADTDirectSecureEmail,
          ReceiveADTDirectEmailAddress,
          ReceiveADTsFTP,
          ReceiveADTPointToPoint,
          ReceiveADTHTTPSnonFHIR,
          ReceiveADTHTTPSFHIR,
          ReceiveADTHTTPSEndpoint,
          ReceiveADTOther,
          ReceiveADTOtherDescription,
          SendADTDirectSecureEmail,
          SendADTsFTP,
          SendADTPointToPoint,
          SendADTHTTPSNon_FHIR,
          SendADTHTTPS_FHIR,
          SendADTPortal,
          SendADTOther,
          SendADTOtherDescribe,
          RecieveInfoDirectSecureEmail,
          RecieveInfosFTP,
          RecieveInfoHL7V2,
          RecieveInfoMLLP_HTTPS,
          RecieveInfoThirdPartyReferral,
          RecieveInfoThirdPartyPlatform,
          RecieveInfoOther,
          RecieveInfoOther_Describe,
          RecieveInfoDirectEmailAddress,
          SendInfoDirectSecureEmail,
          SendInfosFTP,
          SendInfoHL7v2,
          SendInfoMLLP_HTTPS,
          SendInfoThirdPartyReferral,
          SendInfoThirdPartyPlatform,
          SendInfoOther,
          SenInfoOther_Describe,
          RequestRecieveDirectSecureEmail,
          RequestDirectEmailAddress,
          RequestIHE,
          RequestFHIR,
          RequestOther,
          RequestOtherDescribe,
          RequestRespondDirectSecureEmail,
          RequestRespondIHE,
          RequestRespondFHIR,
          RequestRespondFHIRendpoint,
          RequestRespondOther,
          RequestRespondOtherDescribe,
          CoveredHIPAA,
          HybridHIPAA,
          AssociateHIPAA,
          NotCoveredHIPAA,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createC4bhUpdatedModel.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
     
}