/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  CheckboxField,
  Divider,
  Flex,
  Grid,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createNotificationsADT } from "../graphql/mutations";
const client = generateClient();
export default function NotificationsADTCreateForm(props) {
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
    ReceiveDirectSecureEmail: false,
    ReceiveDirectEmailAddress: "",
    ReceivesFTP: false,
    ReceivePointToPoint: false,
    ReceiveHTTPSnonFHIR: false,
    ReceiveHTTPSFHIR: false,
    ReceiveHTTPSEndpoint: "",
    ReceiveOther: false,
    ReceiveOtherDescription: "",
    SendDirectSecureEmail: false,
    SendsFTP: false,
    SendPointToPoint: false,
    SendHTTPSNon_FHIR: false,
    SendHTTPS_FHIR: false,
    SendPortal: false,
    SendOther: false,
    SendOtherDescribe: "",
  };
  const [ReceiveDirectSecureEmail, setReceiveDirectSecureEmail] =
    React.useState(initialValues.ReceiveDirectSecureEmail);
  const [ReceiveDirectEmailAddress, setReceiveDirectEmailAddress] =
    React.useState(initialValues.ReceiveDirectEmailAddress);
  const [ReceivesFTP, setReceivesFTP] = React.useState(
    initialValues.ReceivesFTP
  );
  const [ReceivePointToPoint, setReceivePointToPoint] = React.useState(
    initialValues.ReceivePointToPoint
  );
  const [ReceiveHTTPSnonFHIR, setReceiveHTTPSnonFHIR] = React.useState(
    initialValues.ReceiveHTTPSnonFHIR
  );
  const [ReceiveHTTPSFHIR, setReceiveHTTPSFHIR] = React.useState(
    initialValues.ReceiveHTTPSFHIR
  );
  const [ReceiveHTTPSEndpoint, setReceiveHTTPSEndpoint] = React.useState(
    initialValues.ReceiveHTTPSEndpoint
  );
  const [ReceiveOther, setReceiveOther] = React.useState(
    initialValues.ReceiveOther
  );
  const [ReceiveOtherDescription, setReceiveOtherDescription] = React.useState(
    initialValues.ReceiveOtherDescription
  );
  const [SendDirectSecureEmail, setSendDirectSecureEmail] = React.useState(
    initialValues.SendDirectSecureEmail
  );
  const [SendsFTP, setSendsFTP] = React.useState(initialValues.SendsFTP);
  const [SendPointToPoint, setSendPointToPoint] = React.useState(
    initialValues.SendPointToPoint
  );
  const [SendHTTPSNon_FHIR, setSendHTTPSNon_FHIR] = React.useState(
    initialValues.SendHTTPSNon_FHIR
  );
  const [SendHTTPS_FHIR, setSendHTTPS_FHIR] = React.useState(
    initialValues.SendHTTPS_FHIR
  );
  const [SendPortal, setSendPortal] = React.useState(initialValues.SendPortal);
  const [SendOther, setSendOther] = React.useState(initialValues.SendOther);
  const [SendOtherDescribe, setSendOtherDescribe] = React.useState(
    initialValues.SendOtherDescribe
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setReceiveDirectSecureEmail(initialValues.ReceiveDirectSecureEmail);
    setReceiveDirectEmailAddress(initialValues.ReceiveDirectEmailAddress);
    setReceivesFTP(initialValues.ReceivesFTP);
    setReceivePointToPoint(initialValues.ReceivePointToPoint);
    setReceiveHTTPSnonFHIR(initialValues.ReceiveHTTPSnonFHIR);
    setReceiveHTTPSFHIR(initialValues.ReceiveHTTPSFHIR);
    setReceiveHTTPSEndpoint(initialValues.ReceiveHTTPSEndpoint);
    setReceiveOther(initialValues.ReceiveOther);
    setReceiveOtherDescription(initialValues.ReceiveOtherDescription);
    setSendDirectSecureEmail(initialValues.SendDirectSecureEmail);
    setSendsFTP(initialValues.SendsFTP);
    setSendPointToPoint(initialValues.SendPointToPoint);
    setSendHTTPSNon_FHIR(initialValues.SendHTTPSNon_FHIR);
    setSendHTTPS_FHIR(initialValues.SendHTTPS_FHIR);
    setSendPortal(initialValues.SendPortal);
    setSendOther(initialValues.SendOther);
    setSendOtherDescribe(initialValues.SendOtherDescribe);
    setErrors({});
  };
  const validations = {
    ReceiveDirectSecureEmail: [],
    ReceiveDirectEmailAddress: [],
    ReceivesFTP: [],
    ReceivePointToPoint: [],
    ReceiveHTTPSnonFHIR: [],
    ReceiveHTTPSFHIR: [],
    ReceiveHTTPSEndpoint: [],
    ReceiveOther: [],
    ReceiveOtherDescription: [],
    SendDirectSecureEmail: [],
    SendsFTP: [],
    SendPointToPoint: [],
    SendHTTPSNon_FHIR: [],
    SendHTTPS_FHIR: [],
    SendPortal: [],
    SendOther: [],
    SendOtherDescribe: [],
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
      onSubmit={submitNotificationsADTCreateForm }
      {...getOverrideProps(overrides, "NotificationsADTCreateForm")}
      {...rest}
    >
      <Text
        children="1. Receiving ADT Notifications: By which methods are you able to receive ADT notifications? Please check all that apply."
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid1")}
      >
        <CheckboxField
          label="Direct Secure Email: Provide direct secure email address"
          name="fieldName"
          value="fieldName"
          checked={ReceiveDirectSecureEmail}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                ReceiveDirectSecureEmail: value,
                ReceiveDirectEmailAddress,
                ReceivesFTP,
                ReceivePointToPoint,
                ReceiveHTTPSnonFHIR,
                ReceiveHTTPSFHIR,
                ReceiveHTTPSEndpoint,
                ReceiveOther,
                ReceiveOtherDescription,
                SendDirectSecureEmail,
                SendsFTP,
                SendPointToPoint,
                SendHTTPSNon_FHIR,
                SendHTTPS_FHIR,
                SendPortal,
                SendOther,
                SendOtherDescribe,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveDirectSecureEmail ?? value;
            }
            if (errors.ReceiveDirectSecureEmail?.hasError) {
              runValidationTasks("ReceiveDirectSecureEmail", value);
            }
            setReceiveDirectSecureEmail(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "ReceiveDirectSecureEmail",
              ReceiveDirectSecureEmail
            )
          }
          errorMessage={errors.ReceiveDirectSecureEmail?.errorMessage}
          hasError={errors.ReceiveDirectSecureEmail?.hasError}
          {...getOverrideProps(overrides, "ReceiveDirectSecureEmail")}
        ></CheckboxField>
        <TextField
          label="  "
          value={ReceiveDirectEmailAddress}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                ReceiveDirectSecureEmail,
                ReceiveDirectEmailAddress: value,
                ReceivesFTP,
                ReceivePointToPoint,
                ReceiveHTTPSnonFHIR,
                ReceiveHTTPSFHIR,
                ReceiveHTTPSEndpoint,
                ReceiveOther,
                ReceiveOtherDescription,
                SendDirectSecureEmail,
                SendsFTP,
                SendPointToPoint,
                SendHTTPSNon_FHIR,
                SendHTTPS_FHIR,
                SendPortal,
                SendOther,
                SendOtherDescribe,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveDirectEmailAddress ?? value;
            }
            if (errors.ReceiveDirectEmailAddress?.hasError) {
              runValidationTasks("ReceiveDirectEmailAddress", value);
            }
            setReceiveDirectEmailAddress(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "ReceiveDirectEmailAddress",
              ReceiveDirectEmailAddress
            )
          }
          errorMessage={errors.ReceiveDirectEmailAddress?.errorMessage}
          hasError={errors.ReceiveDirectEmailAddress?.hasError}
          {...getOverrideProps(overrides, "ReceiveDirectEmailAddress")}
        ></TextField>
      </Grid>
      <CheckboxField
        label="sFTP"
        name="fieldName"
        value="fieldName"
        checked={ReceivesFTP}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ReceiveDirectSecureEmail,
              ReceiveDirectEmailAddress,
              ReceivesFTP: value,
              ReceivePointToPoint,
              ReceiveHTTPSnonFHIR,
              ReceiveHTTPSFHIR,
              ReceiveHTTPSEndpoint,
              ReceiveOther,
              ReceiveOtherDescription,
              SendDirectSecureEmail,
              SendsFTP,
              SendPointToPoint,
              SendHTTPSNon_FHIR,
              SendHTTPS_FHIR,
              SendPortal,
              SendOther,
              SendOtherDescribe,
            };
            const result = onChange(modelFields);
            value = result?.ReceivesFTP ?? value;
          }
          if (errors.ReceivesFTP?.hasError) {
            runValidationTasks("ReceivesFTP", value);
          }
          setReceivesFTP(value);
        }}
        onBlur={() => runValidationTasks("ReceivesFTP", ReceivesFTP)}
        errorMessage={errors.ReceivesFTP?.errorMessage}
        hasError={errors.ReceivesFTP?.hasError}
        {...getOverrideProps(overrides, "ReceivesFTP")}
      ></CheckboxField>
      <CheckboxField
        label="Point to Point (i.e. MLLP/VPN, etc.)"
        name="fieldName"
        value="fieldName"
        checked={ReceivePointToPoint}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ReceiveDirectSecureEmail,
              ReceiveDirectEmailAddress,
              ReceivesFTP,
              ReceivePointToPoint: value,
              ReceiveHTTPSnonFHIR,
              ReceiveHTTPSFHIR,
              ReceiveHTTPSEndpoint,
              ReceiveOther,
              ReceiveOtherDescription,
              SendDirectSecureEmail,
              SendsFTP,
              SendPointToPoint,
              SendHTTPSNon_FHIR,
              SendHTTPS_FHIR,
              SendPortal,
              SendOther,
              SendOtherDescribe,
            };
            const result = onChange(modelFields);
            value = result?.ReceivePointToPoint ?? value;
          }
          if (errors.ReceivePointToPoint?.hasError) {
            runValidationTasks("ReceivePointToPoint", value);
          }
          setReceivePointToPoint(value);
        }}
        onBlur={() =>
          runValidationTasks("ReceivePointToPoint", ReceivePointToPoint)
        }
        errorMessage={errors.ReceivePointToPoint?.errorMessage}
        hasError={errors.ReceivePointToPoint?.hasError}
        {...getOverrideProps(overrides, "ReceivePointToPoint")}
      ></CheckboxField>
      <CheckboxField
        label="HTTPS  - non-FHIR (web services, API, etc.)"
        name="fieldName"
        value="fieldName"
        checked={ReceiveHTTPSnonFHIR}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ReceiveDirectSecureEmail,
              ReceiveDirectEmailAddress,
              ReceivesFTP,
              ReceivePointToPoint,
              ReceiveHTTPSnonFHIR: value,
              ReceiveHTTPSFHIR,
              ReceiveHTTPSEndpoint,
              ReceiveOther,
              ReceiveOtherDescription,
              SendDirectSecureEmail,
              SendsFTP,
              SendPointToPoint,
              SendHTTPSNon_FHIR,
              SendHTTPS_FHIR,
              SendPortal,
              SendOther,
              SendOtherDescribe,
            };
            const result = onChange(modelFields);
            value = result?.ReceiveHTTPSnonFHIR ?? value;
          }
          if (errors.ReceiveHTTPSnonFHIR?.hasError) {
            runValidationTasks("ReceiveHTTPSnonFHIR", value);
          }
          setReceiveHTTPSnonFHIR(value);
        }}
        onBlur={() =>
          runValidationTasks("ReceiveHTTPSnonFHIR", ReceiveHTTPSnonFHIR)
        }
        errorMessage={errors.ReceiveHTTPSnonFHIR?.errorMessage}
        hasError={errors.ReceiveHTTPSnonFHIR?.hasError}
        {...getOverrideProps(overrides, "ReceiveHTTPSnonFHIR")}
      ></CheckboxField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid5")}
      >
        <CheckboxField
          label="HTTPS - FHIR: Please enter endpoint"
          name="fieldName"
          value="fieldName"
          checked={ReceiveHTTPSFHIR}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                ReceiveDirectSecureEmail,
                ReceiveDirectEmailAddress,
                ReceivesFTP,
                ReceivePointToPoint,
                ReceiveHTTPSnonFHIR,
                ReceiveHTTPSFHIR: value,
                ReceiveHTTPSEndpoint,
                ReceiveOther,
                ReceiveOtherDescription,
                SendDirectSecureEmail,
                SendsFTP,
                SendPointToPoint,
                SendHTTPSNon_FHIR,
                SendHTTPS_FHIR,
                SendPortal,
                SendOther,
                SendOtherDescribe,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveHTTPSFHIR ?? value;
            }
            if (errors.ReceiveHTTPSFHIR?.hasError) {
              runValidationTasks("ReceiveHTTPSFHIR", value);
            }
            setReceiveHTTPSFHIR(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveHTTPSFHIR", ReceiveHTTPSFHIR)
          }
          errorMessage={errors.ReceiveHTTPSFHIR?.errorMessage}
          hasError={errors.ReceiveHTTPSFHIR?.hasError}
          {...getOverrideProps(overrides, "ReceiveHTTPSFHIR")}
        ></CheckboxField>
        <TextField
          label=" "
          value={ReceiveHTTPSEndpoint}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                ReceiveDirectSecureEmail,
                ReceiveDirectEmailAddress,
                ReceivesFTP,
                ReceivePointToPoint,
                ReceiveHTTPSnonFHIR,
                ReceiveHTTPSFHIR,
                ReceiveHTTPSEndpoint: value,
                ReceiveOther,
                ReceiveOtherDescription,
                SendDirectSecureEmail,
                SendsFTP,
                SendPointToPoint,
                SendHTTPSNon_FHIR,
                SendHTTPS_FHIR,
                SendPortal,
                SendOther,
                SendOtherDescribe,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveHTTPSEndpoint ?? value;
            }
            if (errors.ReceiveHTTPSEndpoint?.hasError) {
              runValidationTasks("ReceiveHTTPSEndpoint", value);
            }
            setReceiveHTTPSEndpoint(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveHTTPSEndpoint", ReceiveHTTPSEndpoint)
          }
          errorMessage={errors.ReceiveHTTPSEndpoint?.errorMessage}
          hasError={errors.ReceiveHTTPSEndpoint?.hasError}
          {...getOverrideProps(overrides, "ReceiveHTTPSEndpoint")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid6")}
      >
        <CheckboxField
          label="Other, please describe:"
          name="fieldName"
          value="fieldName"
          checked={ReceiveOther}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                ReceiveDirectSecureEmail,
                ReceiveDirectEmailAddress,
                ReceivesFTP,
                ReceivePointToPoint,
                ReceiveHTTPSnonFHIR,
                ReceiveHTTPSFHIR,
                ReceiveHTTPSEndpoint,
                ReceiveOther: value,
                ReceiveOtherDescription,
                SendDirectSecureEmail,
                SendsFTP,
                SendPointToPoint,
                SendHTTPSNon_FHIR,
                SendHTTPS_FHIR,
                SendPortal,
                SendOther,
                SendOtherDescribe,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveOther ?? value;
            }
            if (errors.ReceiveOther?.hasError) {
              runValidationTasks("ReceiveOther", value);
            }
            setReceiveOther(value);
          }}
          onBlur={() => runValidationTasks("ReceiveOther", ReceiveOther)}
          errorMessage={errors.ReceiveOther?.errorMessage}
          hasError={errors.ReceiveOther?.hasError}
          {...getOverrideProps(overrides, "ReceiveOther")}
        ></CheckboxField>
        <TextField
          label=" "
          value={ReceiveOtherDescription}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                ReceiveDirectSecureEmail,
                ReceiveDirectEmailAddress,
                ReceivesFTP,
                ReceivePointToPoint,
                ReceiveHTTPSnonFHIR,
                ReceiveHTTPSFHIR,
                ReceiveHTTPSEndpoint,
                ReceiveOther,
                ReceiveOtherDescription: value,
                SendDirectSecureEmail,
                SendsFTP,
                SendPointToPoint,
                SendHTTPSNon_FHIR,
                SendHTTPS_FHIR,
                SendPortal,
                SendOther,
                SendOtherDescribe,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveOtherDescription ?? value;
            }
            if (errors.ReceiveOtherDescription?.hasError) {
              runValidationTasks("ReceiveOtherDescription", value);
            }
            setReceiveOtherDescription(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "ReceiveOtherDescription",
              ReceiveOtherDescription
            )
          }
          errorMessage={errors.ReceiveOtherDescription?.errorMessage}
          hasError={errors.ReceiveOtherDescription?.hasError}
          {...getOverrideProps(overrides, "ReceiveOtherDescription")}
        ></TextField>
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Divider>
      <Text
        children="2. Sending outbound ADT Notifications (Health Systems and Intermediaries only): By which of the following methods do you make ADT notifications available to requesting participants? "
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Text>
      <CheckboxField
        label="Direct Secure Email"
        name="fieldName"
        value="fieldName"
        checked={SendDirectSecureEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ReceiveDirectSecureEmail,
              ReceiveDirectEmailAddress,
              ReceivesFTP,
              ReceivePointToPoint,
              ReceiveHTTPSnonFHIR,
              ReceiveHTTPSFHIR,
              ReceiveHTTPSEndpoint,
              ReceiveOther,
              ReceiveOtherDescription,
              SendDirectSecureEmail: value,
              SendsFTP,
              SendPointToPoint,
              SendHTTPSNon_FHIR,
              SendHTTPS_FHIR,
              SendPortal,
              SendOther,
              SendOtherDescribe,
            };
            const result = onChange(modelFields);
            value = result?.SendDirectSecureEmail ?? value;
          }
          if (errors.SendDirectSecureEmail?.hasError) {
            runValidationTasks("SendDirectSecureEmail", value);
          }
          setSendDirectSecureEmail(value);
        }}
        onBlur={() =>
          runValidationTasks("SendDirectSecureEmail", SendDirectSecureEmail)
        }
        errorMessage={errors.SendDirectSecureEmail?.errorMessage}
        hasError={errors.SendDirectSecureEmail?.hasError}
        {...getOverrideProps(overrides, "SendDirectSecureEmail")}
      ></CheckboxField>
      <CheckboxField
        label="sFTP"
        name="fieldName"
        value="fieldName"
        checked={SendsFTP}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ReceiveDirectSecureEmail,
              ReceiveDirectEmailAddress,
              ReceivesFTP,
              ReceivePointToPoint,
              ReceiveHTTPSnonFHIR,
              ReceiveHTTPSFHIR,
              ReceiveHTTPSEndpoint,
              ReceiveOther,
              ReceiveOtherDescription,
              SendDirectSecureEmail,
              SendsFTP: value,
              SendPointToPoint,
              SendHTTPSNon_FHIR,
              SendHTTPS_FHIR,
              SendPortal,
              SendOther,
              SendOtherDescribe,
            };
            const result = onChange(modelFields);
            value = result?.SendsFTP ?? value;
          }
          if (errors.SendsFTP?.hasError) {
            runValidationTasks("SendsFTP", value);
          }
          setSendsFTP(value);
        }}
        onBlur={() => runValidationTasks("SendsFTP", SendsFTP)}
        errorMessage={errors.SendsFTP?.errorMessage}
        hasError={errors.SendsFTP?.hasError}
        {...getOverrideProps(overrides, "SendsFTP")}
      ></CheckboxField>
      <CheckboxField
        label="Point to Point (i.e., MLLP / VPN, etc.)"
        name="fieldName"
        value="fieldName"
        checked={SendPointToPoint}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ReceiveDirectSecureEmail,
              ReceiveDirectEmailAddress,
              ReceivesFTP,
              ReceivePointToPoint,
              ReceiveHTTPSnonFHIR,
              ReceiveHTTPSFHIR,
              ReceiveHTTPSEndpoint,
              ReceiveOther,
              ReceiveOtherDescription,
              SendDirectSecureEmail,
              SendsFTP,
              SendPointToPoint: value,
              SendHTTPSNon_FHIR,
              SendHTTPS_FHIR,
              SendPortal,
              SendOther,
              SendOtherDescribe,
            };
            const result = onChange(modelFields);
            value = result?.SendPointToPoint ?? value;
          }
          if (errors.SendPointToPoint?.hasError) {
            runValidationTasks("SendPointToPoint", value);
          }
          setSendPointToPoint(value);
        }}
        onBlur={() => runValidationTasks("SendPointToPoint", SendPointToPoint)}
        errorMessage={errors.SendPointToPoint?.errorMessage}
        hasError={errors.SendPointToPoint?.hasError}
        {...getOverrideProps(overrides, "SendPointToPoint")}
      ></CheckboxField>
      <CheckboxField
        label="HTTPS – non-FHIR (web services, API, etc.)"
        name="fieldName"
        value="fieldName"
        checked={SendHTTPSNon_FHIR}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ReceiveDirectSecureEmail,
              ReceiveDirectEmailAddress,
              ReceivesFTP,
              ReceivePointToPoint,
              ReceiveHTTPSnonFHIR,
              ReceiveHTTPSFHIR,
              ReceiveHTTPSEndpoint,
              ReceiveOther,
              ReceiveOtherDescription,
              SendDirectSecureEmail,
              SendsFTP,
              SendPointToPoint,
              SendHTTPSNon_FHIR: value,
              SendHTTPS_FHIR,
              SendPortal,
              SendOther,
              SendOtherDescribe,
            };
            const result = onChange(modelFields);
            value = result?.SendHTTPSNon_FHIR ?? value;
          }
          if (errors.SendHTTPSNon_FHIR?.hasError) {
            runValidationTasks("SendHTTPSNon_FHIR", value);
          }
          setSendHTTPSNon_FHIR(value);
        }}
        onBlur={() =>
          runValidationTasks("SendHTTPSNon_FHIR", SendHTTPSNon_FHIR)
        }
        errorMessage={errors.SendHTTPSNon_FHIR?.errorMessage}
        hasError={errors.SendHTTPSNon_FHIR?.hasError}
        {...getOverrideProps(overrides, "SendHTTPSNon_FHIR")}
      ></CheckboxField>
      <CheckboxField
        label="HTTPS - FHIR"
        name="fieldName"
        value="fieldName"
        checked={SendHTTPS_FHIR}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ReceiveDirectSecureEmail,
              ReceiveDirectEmailAddress,
              ReceivesFTP,
              ReceivePointToPoint,
              ReceiveHTTPSnonFHIR,
              ReceiveHTTPSFHIR,
              ReceiveHTTPSEndpoint,
              ReceiveOther,
              ReceiveOtherDescription,
              SendDirectSecureEmail,
              SendsFTP,
              SendPointToPoint,
              SendHTTPSNon_FHIR,
              SendHTTPS_FHIR: value,
              SendPortal,
              SendOther,
              SendOtherDescribe,
            };
            const result = onChange(modelFields);
            value = result?.SendHTTPS_FHIR ?? value;
          }
          if (errors.SendHTTPS_FHIR?.hasError) {
            runValidationTasks("SendHTTPS_FHIR", value);
          }
          setSendHTTPS_FHIR(value);
        }}
        onBlur={() => runValidationTasks("SendHTTPS_FHIR", SendHTTPS_FHIR)}
        errorMessage={errors.SendHTTPS_FHIR?.errorMessage}
        hasError={errors.SendHTTPS_FHIR?.hasError}
        {...getOverrideProps(overrides, "SendHTTPS_FHIR")}
      ></CheckboxField>
      <CheckboxField
        label="Portal"
        name="fieldName"
        value="fieldName"
        checked={SendPortal}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ReceiveDirectSecureEmail,
              ReceiveDirectEmailAddress,
              ReceivesFTP,
              ReceivePointToPoint,
              ReceiveHTTPSnonFHIR,
              ReceiveHTTPSFHIR,
              ReceiveHTTPSEndpoint,
              ReceiveOther,
              ReceiveOtherDescription,
              SendDirectSecureEmail,
              SendsFTP,
              SendPointToPoint,
              SendHTTPSNon_FHIR,
              SendHTTPS_FHIR,
              SendPortal: value,
              SendOther,
              SendOtherDescribe,
            };
            const result = onChange(modelFields);
            value = result?.SendPortal ?? value;
          }
          if (errors.SendPortal?.hasError) {
            runValidationTasks("SendPortal", value);
          }
          setSendPortal(value);
        }}
        onBlur={() => runValidationTasks("SendPortal", SendPortal)}
        errorMessage={errors.SendPortal?.errorMessage}
        hasError={errors.SendPortal?.hasError}
        {...getOverrideProps(overrides, "SendPortal")}
      ></CheckboxField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid15")}
      >
        <CheckboxField
          label="Other, please describe"
          name="fieldName"
          value="fieldName"
          checked={SendOther}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                ReceiveDirectSecureEmail,
                ReceiveDirectEmailAddress,
                ReceivesFTP,
                ReceivePointToPoint,
                ReceiveHTTPSnonFHIR,
                ReceiveHTTPSFHIR,
                ReceiveHTTPSEndpoint,
                ReceiveOther,
                ReceiveOtherDescription,
                SendDirectSecureEmail,
                SendsFTP,
                SendPointToPoint,
                SendHTTPSNon_FHIR,
                SendHTTPS_FHIR,
                SendPortal,
                SendOther: value,
                SendOtherDescribe,
              };
              const result = onChange(modelFields);
              value = result?.SendOther ?? value;
            }
            if (errors.SendOther?.hasError) {
              runValidationTasks("SendOther", value);
            }
            setSendOther(value);
          }}
          onBlur={() => runValidationTasks("SendOther", SendOther)}
          errorMessage={errors.SendOther?.errorMessage}
          hasError={errors.SendOther?.hasError}
          {...getOverrideProps(overrides, "SendOther")}
        ></CheckboxField>
        <TextField
          label=" "
          value={SendOtherDescribe}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                ReceiveDirectSecureEmail,
                ReceiveDirectEmailAddress,
                ReceivesFTP,
                ReceivePointToPoint,
                ReceiveHTTPSnonFHIR,
                ReceiveHTTPSFHIR,
                ReceiveHTTPSEndpoint,
                ReceiveOther,
                ReceiveOtherDescription,
                SendDirectSecureEmail,
                SendsFTP,
                SendPointToPoint,
                SendHTTPSNon_FHIR,
                SendHTTPS_FHIR,
                SendPortal,
                SendOther,
                SendOtherDescribe: value,
              };
              const result = onChange(modelFields);
              value = result?.SendOtherDescribe ?? value;
            }
            if (errors.SendOtherDescribe?.hasError) {
              runValidationTasks("SendOtherDescribe", value);
            }
            setSendOtherDescribe(value);
          }}
          onBlur={() =>
            runValidationTasks("SendOtherDescribe", SendOtherDescribe)
          }
          errorMessage={errors.SendOtherDescribe?.errorMessage}
          hasError={errors.SendOtherDescribe?.hasError}
          {...getOverrideProps(overrides, "SendOtherDescribe")}
        ></TextField>
      </Grid>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        ></Flex>
      </Flex>
    </Grid>
  );
}

export async function submitNotificationsADTCreateForm(event) {
        event.preventDefault();
        let modelFields = {
          ReceiveDirectSecureEmail,
          ReceiveDirectEmailAddress,
          ReceivesFTP,
          ReceivePointToPoint,
          ReceiveHTTPSnonFHIR,
          ReceiveHTTPSFHIR,
          ReceiveHTTPSEndpoint,
          ReceiveOther,
          ReceiveOtherDescription,
          SendDirectSecureEmail,
          SendsFTP,
          SendPointToPoint,
          SendHTTPSNon_FHIR,
          SendHTTPS_FHIR,
          SendPortal,
          SendOther,
          SendOtherDescribe,
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
          const modelFieldsToSave = {};
          await client.graphql({
            query: createNotificationsADT.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFieldsToSave,
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