/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  CheckboxField,
  Divider,
  Flex,
  Grid,
  Heading,
  Radio,
  RadioGroupField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { C4bhFormData } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function C4bhFormDataCreateForm(props) {
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
    Participant: undefined,
    ParticipantID: "",
    EhrIntersystems: false,
    EhrSmile: false,
    EhrSalesforce: false,
    EhrOther: "",
    SendOutboundDirect: false,
    SendOutboundSFTP: false,
    SendOutboundMLLP: false,
    SendOutboundHTTPS: false,
    SendOutboundFHIR: false,
    SendOutboundNone: false,
    SendInformationDirect: false,
    SendInformationSFTP: false,
    SendInformationMLLP: false,
    SendInformationHTTPS: false,
    SendInformationFHIR: false,
    SendInformationIHE: false,
    SendInformationNone: false,
    SendRequestDirect: false,
    SendRequestSFTP: false,
    SendRequestFHIR: false,
    SendRequestIHE: false,
    SendRequestNone: false,
    ReceiveInboundDirect: false,
    ReceiveInboundSFTP: false,
    ReceiveInboundMLLP: false,
    ReceiveInboundHTTPS: false,
    ReceiveInboundFHIR: false,
    ReceiveInboundNone: false,
    ReceiveInformationDirect: false,
    ReceiveInformationSFTP: false,
    ReceiveInformationMLLP: false,
    ReceiveInformationHTTPS: false,
    ReceiveInformationFHIR: false,
    ReceiveInformationIHE: false,
    ReceiveInformationNone: false,
    ReceiveRequestDirect: false,
    ReceiveRequestSFTP: false,
    ReceiveRequestFHIR: false,
    ReceiveRequestIHE: false,
    ReceiveRequestNone: false,
    HIPPA: undefined,
  };
  const [Participant, setParticipant] = React.useState(
    initialValues.Participant
  );
  const [ParticipantID, setParticipantID] = React.useState(
    initialValues.ParticipantID
  );
  const [EhrIntersystems, setEhrIntersystems] = React.useState(
    initialValues.EhrIntersystems
  );
  const [EhrSmile, setEhrSmile] = React.useState(initialValues.EhrSmile);
  const [EhrSalesforce, setEhrSalesforce] = React.useState(
    initialValues.EhrSalesforce
  );
  const [EhrOther, setEhrOther] = React.useState(initialValues.EhrOther);
  const [SendOutboundDirect, setSendOutboundDirect] = React.useState(
    initialValues.SendOutboundDirect
  );
  const [SendOutboundSFTP, setSendOutboundSFTP] = React.useState(
    initialValues.SendOutboundSFTP
  );
  const [SendOutboundMLLP, setSendOutboundMLLP] = React.useState(
    initialValues.SendOutboundMLLP
  );
  const [SendOutboundHTTPS, setSendOutboundHTTPS] = React.useState(
    initialValues.SendOutboundHTTPS
  );
  const [SendOutboundFHIR, setSendOutboundFHIR] = React.useState(
    initialValues.SendOutboundFHIR
  );
  const [SendOutboundNone, setSendOutboundNone] = React.useState(
    initialValues.SendOutboundNone
  );
  const [SendInformationDirect, setSendInformationDirect] = React.useState(
    initialValues.SendInformationDirect
  );
  const [SendInformationSFTP, setSendInformationSFTP] = React.useState(
    initialValues.SendInformationSFTP
  );
  const [SendInformationMLLP, setSendInformationMLLP] = React.useState(
    initialValues.SendInformationMLLP
  );
  const [SendInformationHTTPS, setSendInformationHTTPS] = React.useState(
    initialValues.SendInformationHTTPS
  );
  const [SendInformationFHIR, setSendInformationFHIR] = React.useState(
    initialValues.SendInformationFHIR
  );
  const [SendInformationIHE, setSendInformationIHE] = React.useState(
    initialValues.SendInformationIHE
  );
  const [SendInformationNone, setSendInformationNone] = React.useState(
    initialValues.SendInformationNone
  );
  const [SendRequestDirect, setSendRequestDirect] = React.useState(
    initialValues.SendRequestDirect
  );
  const [SendRequestSFTP, setSendRequestSFTP] = React.useState(
    initialValues.SendRequestSFTP
  );
  const [SendRequestFHIR, setSendRequestFHIR] = React.useState(
    initialValues.SendRequestFHIR
  );
  const [SendRequestIHE, setSendRequestIHE] = React.useState(
    initialValues.SendRequestIHE
  );
  const [SendRequestNone, setSendRequestNone] = React.useState(
    initialValues.SendRequestNone
  );
  const [ReceiveInboundDirect, setReceiveInboundDirect] = React.useState(
    initialValues.ReceiveInboundDirect
  );
  const [ReceiveInboundSFTP, setReceiveInboundSFTP] = React.useState(
    initialValues.ReceiveInboundSFTP
  );
  const [ReceiveInboundMLLP, setReceiveInboundMLLP] = React.useState(
    initialValues.ReceiveInboundMLLP
  );
  const [ReceiveInboundHTTPS, setReceiveInboundHTTPS] = React.useState(
    initialValues.ReceiveInboundHTTPS
  );
  const [ReceiveInboundFHIR, setReceiveInboundFHIR] = React.useState(
    initialValues.ReceiveInboundFHIR
  );
  const [ReceiveInboundNone, setReceiveInboundNone] = React.useState(
    initialValues.ReceiveInboundNone
  );
  const [ReceiveInformationDirect, setReceiveInformationDirect] =
    React.useState(initialValues.ReceiveInformationDirect);
  const [ReceiveInformationSFTP, setReceiveInformationSFTP] = React.useState(
    initialValues.ReceiveInformationSFTP
  );
  const [ReceiveInformationMLLP, setReceiveInformationMLLP] = React.useState(
    initialValues.ReceiveInformationMLLP
  );
  const [ReceiveInformationHTTPS, setReceiveInformationHTTPS] = React.useState(
    initialValues.ReceiveInformationHTTPS
  );
  const [ReceiveInformationFHIR, setReceiveInformationFHIR] = React.useState(
    initialValues.ReceiveInformationFHIR
  );
  const [ReceiveInformationIHE, setReceiveInformationIHE] = React.useState(
    initialValues.ReceiveInformationIHE
  );
  const [ReceiveInformationNone, setReceiveInformationNone] = React.useState(
    initialValues.ReceiveInformationNone
  );
  const [ReceiveRequestDirect, setReceiveRequestDirect] = React.useState(
    initialValues.ReceiveRequestDirect
  );
  const [ReceiveRequestSFTP, setReceiveRequestSFTP] = React.useState(
    initialValues.ReceiveRequestSFTP
  );
  const [ReceiveRequestFHIR, setReceiveRequestFHIR] = React.useState(
    initialValues.ReceiveRequestFHIR
  );
  const [ReceiveRequestIHE, setReceiveRequestIHE] = React.useState(
    initialValues.ReceiveRequestIHE
  );
  const [ReceiveRequestNone, setReceiveRequestNone] = React.useState(
    initialValues.ReceiveRequestNone
  );
  const [HIPPA, setHIPPA] = React.useState(initialValues.HIPPA);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setParticipant(initialValues.Participant);
    setParticipantID(initialValues.ParticipantID);
    setEhrIntersystems(initialValues.EhrIntersystems);
    setEhrSmile(initialValues.EhrSmile);
    setEhrSalesforce(initialValues.EhrSalesforce);
    setEhrOther(initialValues.EhrOther);
    setSendOutboundDirect(initialValues.SendOutboundDirect);
    setSendOutboundSFTP(initialValues.SendOutboundSFTP);
    setSendOutboundMLLP(initialValues.SendOutboundMLLP);
    setSendOutboundHTTPS(initialValues.SendOutboundHTTPS);
    setSendOutboundFHIR(initialValues.SendOutboundFHIR);
    setSendOutboundNone(initialValues.SendOutboundNone);
    setSendInformationDirect(initialValues.SendInformationDirect);
    setSendInformationSFTP(initialValues.SendInformationSFTP);
    setSendInformationMLLP(initialValues.SendInformationMLLP);
    setSendInformationHTTPS(initialValues.SendInformationHTTPS);
    setSendInformationFHIR(initialValues.SendInformationFHIR);
    setSendInformationIHE(initialValues.SendInformationIHE);
    setSendInformationNone(initialValues.SendInformationNone);
    setSendRequestDirect(initialValues.SendRequestDirect);
    setSendRequestSFTP(initialValues.SendRequestSFTP);
    setSendRequestFHIR(initialValues.SendRequestFHIR);
    setSendRequestIHE(initialValues.SendRequestIHE);
    setSendRequestNone(initialValues.SendRequestNone);
    setReceiveInboundDirect(initialValues.ReceiveInboundDirect);
    setReceiveInboundSFTP(initialValues.ReceiveInboundSFTP);
    setReceiveInboundMLLP(initialValues.ReceiveInboundMLLP);
    setReceiveInboundHTTPS(initialValues.ReceiveInboundHTTPS);
    setReceiveInboundFHIR(initialValues.ReceiveInboundFHIR);
    setReceiveInboundNone(initialValues.ReceiveInboundNone);
    setReceiveInformationDirect(initialValues.ReceiveInformationDirect);
    setReceiveInformationSFTP(initialValues.ReceiveInformationSFTP);
    setReceiveInformationMLLP(initialValues.ReceiveInformationMLLP);
    setReceiveInformationHTTPS(initialValues.ReceiveInformationHTTPS);
    setReceiveInformationFHIR(initialValues.ReceiveInformationFHIR);
    setReceiveInformationIHE(initialValues.ReceiveInformationIHE);
    setReceiveInformationNone(initialValues.ReceiveInformationNone);
    setReceiveRequestDirect(initialValues.ReceiveRequestDirect);
    setReceiveRequestSFTP(initialValues.ReceiveRequestSFTP);
    setReceiveRequestFHIR(initialValues.ReceiveRequestFHIR);
    setReceiveRequestIHE(initialValues.ReceiveRequestIHE);
    setReceiveRequestNone(initialValues.ReceiveRequestNone);
    setHIPPA(initialValues.HIPPA);
    setErrors({});
  };
  const validations = {
    Participant: [{ type: "Required" }],
    ParticipantID: [],
    EhrIntersystems: [],
    EhrSmile: [],
    EhrSalesforce: [],
    EhrOther: [],
    SendOutboundDirect: [],
    SendOutboundSFTP: [],
    SendOutboundMLLP: [],
    SendOutboundHTTPS: [],
    SendOutboundFHIR: [],
    SendOutboundNone: [],
    SendInformationDirect: [],
    SendInformationSFTP: [],
    SendInformationMLLP: [],
    SendInformationHTTPS: [],
    SendInformationFHIR: [],
    SendInformationIHE: [],
    SendInformationNone: [],
    SendRequestDirect: [],
    SendRequestSFTP: [],
    SendRequestFHIR: [],
    SendRequestIHE: [],
    SendRequestNone: [],
    ReceiveInboundDirect: [],
    ReceiveInboundSFTP: [],
    ReceiveInboundMLLP: [],
    ReceiveInboundHTTPS: [],
    ReceiveInboundFHIR: [],
    ReceiveInboundNone: [],
    ReceiveInformationDirect: [],
    ReceiveInformationSFTP: [],
    ReceiveInformationMLLP: [],
    ReceiveInformationHTTPS: [],
    ReceiveInformationFHIR: [],
    ReceiveInformationIHE: [],
    ReceiveInformationNone: [],
    ReceiveRequestDirect: [],
    ReceiveRequestSFTP: [],
    ReceiveRequestFHIR: [],
    ReceiveRequestIHE: [],
    ReceiveRequestNone: [],
    HIPPA: [],
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
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Participant,
          ParticipantID,
          EhrIntersystems,
          EhrSmile,
          EhrSalesforce,
          EhrOther,
          SendOutboundDirect,
          SendOutboundSFTP,
          SendOutboundMLLP,
          SendOutboundHTTPS,
          SendOutboundFHIR,
          SendOutboundNone,
          SendInformationDirect,
          SendInformationSFTP,
          SendInformationMLLP,
          SendInformationHTTPS,
          SendInformationFHIR,
          SendInformationIHE,
          SendInformationNone,
          SendRequestDirect,
          SendRequestSFTP,
          SendRequestFHIR,
          SendRequestIHE,
          SendRequestNone,
          ReceiveInboundDirect,
          ReceiveInboundSFTP,
          ReceiveInboundMLLP,
          ReceiveInboundHTTPS,
          ReceiveInboundFHIR,
          ReceiveInboundNone,
          ReceiveInformationDirect,
          ReceiveInformationSFTP,
          ReceiveInformationMLLP,
          ReceiveInformationHTTPS,
          ReceiveInformationFHIR,
          ReceiveInformationIHE,
          ReceiveInformationNone,
          ReceiveRequestDirect,
          ReceiveRequestSFTP,
          ReceiveRequestFHIR,
          ReceiveRequestIHE,
          ReceiveRequestNone,
          HIPPA,
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
          await DataStore.save(new C4bhFormData(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "C4bhFormDataCreateForm")}
      {...rest}
    >
      <Heading
        level={3}
        children="User Info"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <RadioGroupField
        label="1. Are you an existing DxF Participant?"
        name="Participant"
        isReadOnly={false}
        descriptiveText=" If not registered, please initiate at: Home Data Exchange Framework Signing Portal (https://signdxf.powerappsportals.com/)."
        isRequired={true}
        onChange={(e) => {
          let value = e.target.value === "true";
          if (onChange) {
            const modelFields = {
              Participant: value,
              ParticipantID,
              EhrIntersystems,
              EhrSmile,
              EhrSalesforce,
              EhrOther,
              SendOutboundDirect,
              SendOutboundSFTP,
              SendOutboundMLLP,
              SendOutboundHTTPS,
              SendOutboundFHIR,
              SendOutboundNone,
              SendInformationDirect,
              SendInformationSFTP,
              SendInformationMLLP,
              SendInformationHTTPS,
              SendInformationFHIR,
              SendInformationIHE,
              SendInformationNone,
              SendRequestDirect,
              SendRequestSFTP,
              SendRequestFHIR,
              SendRequestIHE,
              SendRequestNone,
              ReceiveInboundDirect,
              ReceiveInboundSFTP,
              ReceiveInboundMLLP,
              ReceiveInboundHTTPS,
              ReceiveInboundFHIR,
              ReceiveInboundNone,
              ReceiveInformationDirect,
              ReceiveInformationSFTP,
              ReceiveInformationMLLP,
              ReceiveInformationHTTPS,
              ReceiveInformationFHIR,
              ReceiveInformationIHE,
              ReceiveInformationNone,
              ReceiveRequestDirect,
              ReceiveRequestSFTP,
              ReceiveRequestFHIR,
              ReceiveRequestIHE,
              ReceiveRequestNone,
              HIPPA,
            };
            const result = onChange(modelFields);
            value = result?.Participant ?? value;
          }
          if (errors.Participant?.hasError) {
            runValidationTasks("Participant", value);
          }
          setParticipant(value);
        }}
        onBlur={() => runValidationTasks("Participant", Participant)}
        errorMessage={errors.Participant?.errorMessage}
        hasError={errors.Participant?.hasError}
        {...getOverrideProps(overrides, "Participant")}
      >
        <Radio
          children="Yes"
          value="true"
          {...getOverrideProps(overrides, "ParticipantRadio0")}
        ></Radio>
        <Radio
          children="No"
          value="false"
          {...getOverrideProps(overrides, "ParticipantRadio1")}
        ></Radio>
      </RadioGroupField>
      <Heading
        level={5}
        children="DO NOT FILL OUT IF YOU HAVE NOT SIGNED UP"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Heading>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement5")}
      ></Divider>
      <TextField
        label='2. Enter your DxF Participant ID (Format: "DXF00####").'
        descriptiveText='If you do not know your ID, refer to this file:  https://tinyurl.com/3a46az9a  (ID in column C).  If the file doesn&apos;t open, use link below, open the "DSA Portal and Participant Directory" bar, and click DSA signatory list: www.cdii.ca.gov/committees-and-advisory-groups/data-exchange-framework/'
        isRequired={false}
        isReadOnly={false}
        placeholder="Ex: DXF001234"
        value={ParticipantID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Participant,
              ParticipantID: value,
              EhrIntersystems,
              EhrSmile,
              EhrSalesforce,
              EhrOther,
              SendOutboundDirect,
              SendOutboundSFTP,
              SendOutboundMLLP,
              SendOutboundHTTPS,
              SendOutboundFHIR,
              SendOutboundNone,
              SendInformationDirect,
              SendInformationSFTP,
              SendInformationMLLP,
              SendInformationHTTPS,
              SendInformationFHIR,
              SendInformationIHE,
              SendInformationNone,
              SendRequestDirect,
              SendRequestSFTP,
              SendRequestFHIR,
              SendRequestIHE,
              SendRequestNone,
              ReceiveInboundDirect,
              ReceiveInboundSFTP,
              ReceiveInboundMLLP,
              ReceiveInboundHTTPS,
              ReceiveInboundFHIR,
              ReceiveInboundNone,
              ReceiveInformationDirect,
              ReceiveInformationSFTP,
              ReceiveInformationMLLP,
              ReceiveInformationHTTPS,
              ReceiveInformationFHIR,
              ReceiveInformationIHE,
              ReceiveInformationNone,
              ReceiveRequestDirect,
              ReceiveRequestSFTP,
              ReceiveRequestFHIR,
              ReceiveRequestIHE,
              ReceiveRequestNone,
              HIPPA,
            };
            const result = onChange(modelFields);
            value = result?.ParticipantID ?? value;
          }
          if (errors.ParticipantID?.hasError) {
            runValidationTasks("ParticipantID", value);
          }
          setParticipantID(value);
        }}
        onBlur={() => runValidationTasks("ParticipantID", ParticipantID)}
        errorMessage={errors.ParticipantID?.errorMessage}
        hasError={errors.ParticipantID?.hasError}
        {...getOverrideProps(overrides, "ParticipantID")}
      ></TextField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement4")}
      ></Divider>
      <Text
        children="3. What EHR or other information platform(s) do you interface with?"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid7")}
      >
        <CheckboxField
          label="Intersystems"
          name="EhrIntersystems"
          value="EhrIntersystems"
          isDisabled={false}
          checked={EhrIntersystems}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems: value,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.EhrIntersystems ?? value;
            }
            if (errors.EhrIntersystems?.hasError) {
              runValidationTasks("EhrIntersystems", value);
            }
            setEhrIntersystems(value);
          }}
          onBlur={() => runValidationTasks("EhrIntersystems", EhrIntersystems)}
          errorMessage={errors.EhrIntersystems?.errorMessage}
          hasError={errors.EhrIntersystems?.hasError}
          {...getOverrideProps(overrides, "EhrIntersystems")}
        ></CheckboxField>
        <CheckboxField
          label="Smile"
          name="EhrSmile"
          value="EhrSmile"
          isDisabled={false}
          checked={EhrSmile}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile: value,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.EhrSmile ?? value;
            }
            if (errors.EhrSmile?.hasError) {
              runValidationTasks("EhrSmile", value);
            }
            setEhrSmile(value);
          }}
          onBlur={() => runValidationTasks("EhrSmile", EhrSmile)}
          errorMessage={errors.EhrSmile?.errorMessage}
          hasError={errors.EhrSmile?.hasError}
          {...getOverrideProps(overrides, "EhrSmile")}
        ></CheckboxField>
        <CheckboxField
          label="Salesforce"
          name="EhrSalesforce"
          value="EhrSalesforce"
          isDisabled={false}
          checked={EhrSalesforce}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce: value,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.EhrSalesforce ?? value;
            }
            if (errors.EhrSalesforce?.hasError) {
              runValidationTasks("EhrSalesforce", value);
            }
            setEhrSalesforce(value);
          }}
          onBlur={() => runValidationTasks("EhrSalesforce", EhrSalesforce)}
          errorMessage={errors.EhrSalesforce?.errorMessage}
          hasError={errors.EhrSalesforce?.hasError}
          {...getOverrideProps(overrides, "EhrSalesforce")}
        ></CheckboxField>
      </Grid>
      <TextField
        label="If other, enter here (if multiple, separate by comma)"
        isRequired={false}
        isReadOnly={false}
        placeholder="Ex: Epic, CareCloud, Athenahealth"
        value={EhrOther}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Participant,
              ParticipantID,
              EhrIntersystems,
              EhrSmile,
              EhrSalesforce,
              EhrOther: value,
              SendOutboundDirect,
              SendOutboundSFTP,
              SendOutboundMLLP,
              SendOutboundHTTPS,
              SendOutboundFHIR,
              SendOutboundNone,
              SendInformationDirect,
              SendInformationSFTP,
              SendInformationMLLP,
              SendInformationHTTPS,
              SendInformationFHIR,
              SendInformationIHE,
              SendInformationNone,
              SendRequestDirect,
              SendRequestSFTP,
              SendRequestFHIR,
              SendRequestIHE,
              SendRequestNone,
              ReceiveInboundDirect,
              ReceiveInboundSFTP,
              ReceiveInboundMLLP,
              ReceiveInboundHTTPS,
              ReceiveInboundFHIR,
              ReceiveInboundNone,
              ReceiveInformationDirect,
              ReceiveInformationSFTP,
              ReceiveInformationMLLP,
              ReceiveInformationHTTPS,
              ReceiveInformationFHIR,
              ReceiveInformationIHE,
              ReceiveInformationNone,
              ReceiveRequestDirect,
              ReceiveRequestSFTP,
              ReceiveRequestFHIR,
              ReceiveRequestIHE,
              ReceiveRequestNone,
              HIPPA,
            };
            const result = onChange(modelFields);
            value = result?.EhrOther ?? value;
          }
          if (errors.EhrOther?.hasError) {
            runValidationTasks("EhrOther", value);
          }
          setEhrOther(value);
        }}
        onBlur={() => runValidationTasks("EhrOther", EhrOther)}
        errorMessage={errors.EhrOther?.errorMessage}
        hasError={errors.EhrOther?.hasError}
        {...getOverrideProps(overrides, "EhrOther")}
      ></TextField>
      <Heading
        level={3}
        children="Send Data"
        {...getOverrideProps(overrides, "SectionalElement7")}
      ></Heading>
      <Text
        children="4. OUTBOUND NOTIFICATIONS- Are you able to send data electronically out? If yes, please specify which content over which transports (check all that apply)."
        {...getOverrideProps(overrides, "SectionalElement8")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(6, auto)"
        {...getOverrideProps(overrides, "RowGrid11")}
      >
        <CheckboxField
          label="Direct"
          name="SendOutboundDirect"
          value="SendOutboundDirect"
          isDisabled={false}
          checked={SendOutboundDirect}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect: value,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendOutboundDirect ?? value;
            }
            if (errors.SendOutboundDirect?.hasError) {
              runValidationTasks("SendOutboundDirect", value);
            }
            setSendOutboundDirect(value);
          }}
          onBlur={() =>
            runValidationTasks("SendOutboundDirect", SendOutboundDirect)
          }
          errorMessage={errors.SendOutboundDirect?.errorMessage}
          hasError={errors.SendOutboundDirect?.hasError}
          {...getOverrideProps(overrides, "SendOutboundDirect")}
        ></CheckboxField>
        <CheckboxField
          label="sFTP"
          name="SendOutboundSFTP"
          value="SendOutboundSFTP"
          isDisabled={false}
          checked={SendOutboundSFTP}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP: value,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendOutboundSFTP ?? value;
            }
            if (errors.SendOutboundSFTP?.hasError) {
              runValidationTasks("SendOutboundSFTP", value);
            }
            setSendOutboundSFTP(value);
          }}
          onBlur={() =>
            runValidationTasks("SendOutboundSFTP", SendOutboundSFTP)
          }
          errorMessage={errors.SendOutboundSFTP?.errorMessage}
          hasError={errors.SendOutboundSFTP?.hasError}
          {...getOverrideProps(overrides, "SendOutboundSFTP")}
        ></CheckboxField>
        <CheckboxField
          label="MLLP"
          name="SendOutboundMLLP"
          value="SendOutboundMLLP"
          isDisabled={false}
          checked={SendOutboundMLLP}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP: value,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendOutboundMLLP ?? value;
            }
            if (errors.SendOutboundMLLP?.hasError) {
              runValidationTasks("SendOutboundMLLP", value);
            }
            setSendOutboundMLLP(value);
          }}
          onBlur={() =>
            runValidationTasks("SendOutboundMLLP", SendOutboundMLLP)
          }
          errorMessage={errors.SendOutboundMLLP?.errorMessage}
          hasError={errors.SendOutboundMLLP?.hasError}
          {...getOverrideProps(overrides, "SendOutboundMLLP")}
        ></CheckboxField>
        <CheckboxField
          label="HTTPS"
          name="SendOutboundHTTPS"
          value="SendOutboundHTTPS"
          isDisabled={false}
          checked={SendOutboundHTTPS}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS: value,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendOutboundHTTPS ?? value;
            }
            if (errors.SendOutboundHTTPS?.hasError) {
              runValidationTasks("SendOutboundHTTPS", value);
            }
            setSendOutboundHTTPS(value);
          }}
          onBlur={() =>
            runValidationTasks("SendOutboundHTTPS", SendOutboundHTTPS)
          }
          errorMessage={errors.SendOutboundHTTPS?.errorMessage}
          hasError={errors.SendOutboundHTTPS?.hasError}
          {...getOverrideProps(overrides, "SendOutboundHTTPS")}
        ></CheckboxField>
        <CheckboxField
          label="FHIR"
          name="SendOutboundFHIR"
          value="SendOutboundFHIR"
          isDisabled={false}
          checked={SendOutboundFHIR}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR: value,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendOutboundFHIR ?? value;
            }
            if (errors.SendOutboundFHIR?.hasError) {
              runValidationTasks("SendOutboundFHIR", value);
            }
            setSendOutboundFHIR(value);
          }}
          onBlur={() =>
            runValidationTasks("SendOutboundFHIR", SendOutboundFHIR)
          }
          errorMessage={errors.SendOutboundFHIR?.errorMessage}
          hasError={errors.SendOutboundFHIR?.hasError}
          {...getOverrideProps(overrides, "SendOutboundFHIR")}
        ></CheckboxField>
        <CheckboxField
          label="None"
          name="SendOutboundNone"
          value="SendOutboundNone"
          isDisabled={false}
          checked={SendOutboundNone}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone: value,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendOutboundNone ?? value;
            }
            if (errors.SendOutboundNone?.hasError) {
              runValidationTasks("SendOutboundNone", value);
            }
            setSendOutboundNone(value);
          }}
          onBlur={() =>
            runValidationTasks("SendOutboundNone", SendOutboundNone)
          }
          errorMessage={errors.SendOutboundNone?.errorMessage}
          hasError={errors.SendOutboundNone?.hasError}
          {...getOverrideProps(overrides, "SendOutboundNone")}
        ></CheckboxField>
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement9")}
      ></Divider>
      <Text
        children="5. INFORMATION DELIVERY- Are you able to send data electronically out? If yes, please specify which content over which transports (check all that apply)."
        {...getOverrideProps(overrides, "SectionalElement10")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(7, auto)"
        {...getOverrideProps(overrides, "RowGrid14")}
      >
        <CheckboxField
          label="Direct"
          name="SendInformationDirect"
          value="SendInformationDirect"
          isDisabled={false}
          checked={SendInformationDirect}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect: value,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendInformationDirect ?? value;
            }
            if (errors.SendInformationDirect?.hasError) {
              runValidationTasks("SendInformationDirect", value);
            }
            setSendInformationDirect(value);
          }}
          onBlur={() =>
            runValidationTasks("SendInformationDirect", SendInformationDirect)
          }
          errorMessage={errors.SendInformationDirect?.errorMessage}
          hasError={errors.SendInformationDirect?.hasError}
          {...getOverrideProps(overrides, "SendInformationDirect")}
        ></CheckboxField>
        <CheckboxField
          label="sFTP"
          name="SendInformationSFTP"
          value="SendInformationSFTP"
          isDisabled={false}
          checked={SendInformationSFTP}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP: value,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendInformationSFTP ?? value;
            }
            if (errors.SendInformationSFTP?.hasError) {
              runValidationTasks("SendInformationSFTP", value);
            }
            setSendInformationSFTP(value);
          }}
          onBlur={() =>
            runValidationTasks("SendInformationSFTP", SendInformationSFTP)
          }
          errorMessage={errors.SendInformationSFTP?.errorMessage}
          hasError={errors.SendInformationSFTP?.hasError}
          {...getOverrideProps(overrides, "SendInformationSFTP")}
        ></CheckboxField>
        <CheckboxField
          label="MLLP"
          name="SendInformationMLLP"
          value="SendInformationMLLP"
          isDisabled={false}
          checked={SendInformationMLLP}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP: value,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendInformationMLLP ?? value;
            }
            if (errors.SendInformationMLLP?.hasError) {
              runValidationTasks("SendInformationMLLP", value);
            }
            setSendInformationMLLP(value);
          }}
          onBlur={() =>
            runValidationTasks("SendInformationMLLP", SendInformationMLLP)
          }
          errorMessage={errors.SendInformationMLLP?.errorMessage}
          hasError={errors.SendInformationMLLP?.hasError}
          {...getOverrideProps(overrides, "SendInformationMLLP")}
        ></CheckboxField>
        <CheckboxField
          label="HTTPS"
          name="SendInformationHTTPS"
          value="SendInformationHTTPS"
          isDisabled={false}
          checked={SendInformationHTTPS}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS: value,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendInformationHTTPS ?? value;
            }
            if (errors.SendInformationHTTPS?.hasError) {
              runValidationTasks("SendInformationHTTPS", value);
            }
            setSendInformationHTTPS(value);
          }}
          onBlur={() =>
            runValidationTasks("SendInformationHTTPS", SendInformationHTTPS)
          }
          errorMessage={errors.SendInformationHTTPS?.errorMessage}
          hasError={errors.SendInformationHTTPS?.hasError}
          {...getOverrideProps(overrides, "SendInformationHTTPS")}
        ></CheckboxField>
        <CheckboxField
          label="FHIR"
          name="SendInformationFHIR"
          value="SendInformationFHIR"
          isDisabled={false}
          checked={SendInformationFHIR}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR: value,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendInformationFHIR ?? value;
            }
            if (errors.SendInformationFHIR?.hasError) {
              runValidationTasks("SendInformationFHIR", value);
            }
            setSendInformationFHIR(value);
          }}
          onBlur={() =>
            runValidationTasks("SendInformationFHIR", SendInformationFHIR)
          }
          errorMessage={errors.SendInformationFHIR?.errorMessage}
          hasError={errors.SendInformationFHIR?.hasError}
          {...getOverrideProps(overrides, "SendInformationFHIR")}
        ></CheckboxField>
        <CheckboxField
          label="IHE"
          name="SendInformationIHE"
          value="SendInformationIHE"
          isDisabled={false}
          checked={SendInformationIHE}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE: value,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendInformationIHE ?? value;
            }
            if (errors.SendInformationIHE?.hasError) {
              runValidationTasks("SendInformationIHE", value);
            }
            setSendInformationIHE(value);
          }}
          onBlur={() =>
            runValidationTasks("SendInformationIHE", SendInformationIHE)
          }
          errorMessage={errors.SendInformationIHE?.errorMessage}
          hasError={errors.SendInformationIHE?.hasError}
          {...getOverrideProps(overrides, "SendInformationIHE")}
        ></CheckboxField>
        <CheckboxField
          label="None"
          name="SendInformationNone"
          value="SendInformationNone"
          isDisabled={false}
          checked={SendInformationNone}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone: value,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendInformationNone ?? value;
            }
            if (errors.SendInformationNone?.hasError) {
              runValidationTasks("SendInformationNone", value);
            }
            setSendInformationNone(value);
          }}
          onBlur={() =>
            runValidationTasks("SendInformationNone", SendInformationNone)
          }
          errorMessage={errors.SendInformationNone?.errorMessage}
          hasError={errors.SendInformationNone?.hasError}
          {...getOverrideProps(overrides, "SendInformationNone")}
        ></CheckboxField>
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement11")}
      ></Divider>
      <Text
        children="6. REQUEST FOR INFRMATION- Are you able to send data electronically out? If yes, please specify which content over which transports (check all that apply)."
        {...getOverrideProps(overrides, "SectionalElement12")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(5, auto)"
        {...getOverrideProps(overrides, "RowGrid17")}
      >
        <CheckboxField
          label="Direct"
          name="SendRequestDirect"
          value="SendRequestDirect"
          isDisabled={false}
          checked={SendRequestDirect}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect: value,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendRequestDirect ?? value;
            }
            if (errors.SendRequestDirect?.hasError) {
              runValidationTasks("SendRequestDirect", value);
            }
            setSendRequestDirect(value);
          }}
          onBlur={() =>
            runValidationTasks("SendRequestDirect", SendRequestDirect)
          }
          errorMessage={errors.SendRequestDirect?.errorMessage}
          hasError={errors.SendRequestDirect?.hasError}
          {...getOverrideProps(overrides, "SendRequestDirect")}
        ></CheckboxField>
        <CheckboxField
          label="sFTP"
          name="SendRequestSFTP"
          value="SendRequestSFTP"
          isDisabled={false}
          checked={SendRequestSFTP}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP: value,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendRequestSFTP ?? value;
            }
            if (errors.SendRequestSFTP?.hasError) {
              runValidationTasks("SendRequestSFTP", value);
            }
            setSendRequestSFTP(value);
          }}
          onBlur={() => runValidationTasks("SendRequestSFTP", SendRequestSFTP)}
          errorMessage={errors.SendRequestSFTP?.errorMessage}
          hasError={errors.SendRequestSFTP?.hasError}
          {...getOverrideProps(overrides, "SendRequestSFTP")}
        ></CheckboxField>
        <CheckboxField
          label="FHIR"
          name="SendRequestFHIR"
          value="SendRequestFHIR"
          isDisabled={false}
          checked={SendRequestFHIR}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR: value,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendRequestFHIR ?? value;
            }
            if (errors.SendRequestFHIR?.hasError) {
              runValidationTasks("SendRequestFHIR", value);
            }
            setSendRequestFHIR(value);
          }}
          onBlur={() => runValidationTasks("SendRequestFHIR", SendRequestFHIR)}
          errorMessage={errors.SendRequestFHIR?.errorMessage}
          hasError={errors.SendRequestFHIR?.hasError}
          {...getOverrideProps(overrides, "SendRequestFHIR")}
        ></CheckboxField>
        <CheckboxField
          label="IHE"
          name="SendRequestIHE"
          value="SendRequestIHE"
          isDisabled={false}
          checked={SendRequestIHE}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE: value,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendRequestIHE ?? value;
            }
            if (errors.SendRequestIHE?.hasError) {
              runValidationTasks("SendRequestIHE", value);
            }
            setSendRequestIHE(value);
          }}
          onBlur={() => runValidationTasks("SendRequestIHE", SendRequestIHE)}
          errorMessage={errors.SendRequestIHE?.errorMessage}
          hasError={errors.SendRequestIHE?.hasError}
          {...getOverrideProps(overrides, "SendRequestIHE")}
        ></CheckboxField>
        <CheckboxField
          label="None"
          name="SendRequestNone"
          value="SendRequestNone"
          isDisabled={false}
          checked={SendRequestNone}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone: value,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.SendRequestNone ?? value;
            }
            if (errors.SendRequestNone?.hasError) {
              runValidationTasks("SendRequestNone", value);
            }
            setSendRequestNone(value);
          }}
          onBlur={() => runValidationTasks("SendRequestNone", SendRequestNone)}
          errorMessage={errors.SendRequestNone?.errorMessage}
          hasError={errors.SendRequestNone?.hasError}
          {...getOverrideProps(overrides, "SendRequestNone")}
        ></CheckboxField>
      </Grid>
      <Heading
        level={3}
        children="Receive Data"
        {...getOverrideProps(overrides, "SectionalElement13")}
      ></Heading>
      <Text
        children="7. INBOUND NOTIFICATIONS- Are you able to receive data electronically? If yes, please specify which content over which transports (check all that apply)."
        {...getOverrideProps(overrides, "SectionalElement14")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(6, auto)"
        {...getOverrideProps(overrides, "RowGrid20")}
      >
        <CheckboxField
          label="Direct"
          name="ReceiveInboundDirect"
          value="ReceiveInboundDirect"
          isDisabled={false}
          checked={ReceiveInboundDirect}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect: value,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveInboundDirect ?? value;
            }
            if (errors.ReceiveInboundDirect?.hasError) {
              runValidationTasks("ReceiveInboundDirect", value);
            }
            setReceiveInboundDirect(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveInboundDirect", ReceiveInboundDirect)
          }
          errorMessage={errors.ReceiveInboundDirect?.errorMessage}
          hasError={errors.ReceiveInboundDirect?.hasError}
          {...getOverrideProps(overrides, "ReceiveInboundDirect")}
        ></CheckboxField>
        <CheckboxField
          label="sFTP"
          name="ReceiveInboundSFTP"
          value="ReceiveInboundSFTP"
          isDisabled={false}
          checked={ReceiveInboundSFTP}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP: value,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveInboundSFTP ?? value;
            }
            if (errors.ReceiveInboundSFTP?.hasError) {
              runValidationTasks("ReceiveInboundSFTP", value);
            }
            setReceiveInboundSFTP(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveInboundSFTP", ReceiveInboundSFTP)
          }
          errorMessage={errors.ReceiveInboundSFTP?.errorMessage}
          hasError={errors.ReceiveInboundSFTP?.hasError}
          {...getOverrideProps(overrides, "ReceiveInboundSFTP")}
        ></CheckboxField>
        <CheckboxField
          label="MLLP"
          name="ReceiveInboundMLLP"
          value="ReceiveInboundMLLP"
          isDisabled={false}
          checked={ReceiveInboundMLLP}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP: value,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveInboundMLLP ?? value;
            }
            if (errors.ReceiveInboundMLLP?.hasError) {
              runValidationTasks("ReceiveInboundMLLP", value);
            }
            setReceiveInboundMLLP(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveInboundMLLP", ReceiveInboundMLLP)
          }
          errorMessage={errors.ReceiveInboundMLLP?.errorMessage}
          hasError={errors.ReceiveInboundMLLP?.hasError}
          {...getOverrideProps(overrides, "ReceiveInboundMLLP")}
        ></CheckboxField>
        <CheckboxField
          label="HTTPS"
          name="ReceiveInboundHTTPS"
          value="ReceiveInboundHTTPS"
          isDisabled={false}
          checked={ReceiveInboundHTTPS}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS: value,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveInboundHTTPS ?? value;
            }
            if (errors.ReceiveInboundHTTPS?.hasError) {
              runValidationTasks("ReceiveInboundHTTPS", value);
            }
            setReceiveInboundHTTPS(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveInboundHTTPS", ReceiveInboundHTTPS)
          }
          errorMessage={errors.ReceiveInboundHTTPS?.errorMessage}
          hasError={errors.ReceiveInboundHTTPS?.hasError}
          {...getOverrideProps(overrides, "ReceiveInboundHTTPS")}
        ></CheckboxField>
        <CheckboxField
          label="FHIR"
          name="ReceiveInboundFHIR"
          value="ReceiveInboundFHIR"
          isDisabled={false}
          checked={ReceiveInboundFHIR}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR: value,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveInboundFHIR ?? value;
            }
            if (errors.ReceiveInboundFHIR?.hasError) {
              runValidationTasks("ReceiveInboundFHIR", value);
            }
            setReceiveInboundFHIR(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveInboundFHIR", ReceiveInboundFHIR)
          }
          errorMessage={errors.ReceiveInboundFHIR?.errorMessage}
          hasError={errors.ReceiveInboundFHIR?.hasError}
          {...getOverrideProps(overrides, "ReceiveInboundFHIR")}
        ></CheckboxField>
        <CheckboxField
          label="None"
          name="ReceiveInboundNone"
          value="ReceiveInboundNone"
          isDisabled={false}
          checked={ReceiveInboundNone}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone: value,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveInboundNone ?? value;
            }
            if (errors.ReceiveInboundNone?.hasError) {
              runValidationTasks("ReceiveInboundNone", value);
            }
            setReceiveInboundNone(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveInboundNone", ReceiveInboundNone)
          }
          errorMessage={errors.ReceiveInboundNone?.errorMessage}
          hasError={errors.ReceiveInboundNone?.hasError}
          {...getOverrideProps(overrides, "ReceiveInboundNone")}
        ></CheckboxField>
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement15")}
      ></Divider>
      <Text
        children="8. INFORMATION DELIVERY- Are you able to receive data electronically? If yes, please specify which content over which transports (check all that apply)."
        {...getOverrideProps(overrides, "SectionalElement16")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(7, auto)"
        {...getOverrideProps(overrides, "RowGrid23")}
      >
        <CheckboxField
          label="Direct"
          name="ReceiveInformationDirect"
          value="ReceiveInformationDirect"
          isDisabled={false}
          checked={ReceiveInformationDirect}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect: value,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveInformationDirect ?? value;
            }
            if (errors.ReceiveInformationDirect?.hasError) {
              runValidationTasks("ReceiveInformationDirect", value);
            }
            setReceiveInformationDirect(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "ReceiveInformationDirect",
              ReceiveInformationDirect
            )
          }
          errorMessage={errors.ReceiveInformationDirect?.errorMessage}
          hasError={errors.ReceiveInformationDirect?.hasError}
          {...getOverrideProps(overrides, "ReceiveInformationDirect")}
        ></CheckboxField>
        <CheckboxField
          label="sFTP"
          name="ReceiveInformationSFTP"
          value="ReceiveInformationSFTP"
          isDisabled={false}
          checked={ReceiveInformationSFTP}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP: value,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveInformationSFTP ?? value;
            }
            if (errors.ReceiveInformationSFTP?.hasError) {
              runValidationTasks("ReceiveInformationSFTP", value);
            }
            setReceiveInformationSFTP(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveInformationSFTP", ReceiveInformationSFTP)
          }
          errorMessage={errors.ReceiveInformationSFTP?.errorMessage}
          hasError={errors.ReceiveInformationSFTP?.hasError}
          {...getOverrideProps(overrides, "ReceiveInformationSFTP")}
        ></CheckboxField>
        <CheckboxField
          label="MLLP"
          name="ReceiveInformationMLLP"
          value="ReceiveInformationMLLP"
          isDisabled={false}
          checked={ReceiveInformationMLLP}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP: value,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveInformationMLLP ?? value;
            }
            if (errors.ReceiveInformationMLLP?.hasError) {
              runValidationTasks("ReceiveInformationMLLP", value);
            }
            setReceiveInformationMLLP(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveInformationMLLP", ReceiveInformationMLLP)
          }
          errorMessage={errors.ReceiveInformationMLLP?.errorMessage}
          hasError={errors.ReceiveInformationMLLP?.hasError}
          {...getOverrideProps(overrides, "ReceiveInformationMLLP")}
        ></CheckboxField>
        <CheckboxField
          label="HTTPS"
          name="ReceiveInformationHTTPS"
          value="ReceiveInformationHTTPS"
          isDisabled={false}
          checked={ReceiveInformationHTTPS}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS: value,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveInformationHTTPS ?? value;
            }
            if (errors.ReceiveInformationHTTPS?.hasError) {
              runValidationTasks("ReceiveInformationHTTPS", value);
            }
            setReceiveInformationHTTPS(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "ReceiveInformationHTTPS",
              ReceiveInformationHTTPS
            )
          }
          errorMessage={errors.ReceiveInformationHTTPS?.errorMessage}
          hasError={errors.ReceiveInformationHTTPS?.hasError}
          {...getOverrideProps(overrides, "ReceiveInformationHTTPS")}
        ></CheckboxField>
        <CheckboxField
          label="FHIR"
          name="ReceiveInformationFHIR"
          value="ReceiveInformationFHIR"
          isDisabled={false}
          checked={ReceiveInformationFHIR}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR: value,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveInformationFHIR ?? value;
            }
            if (errors.ReceiveInformationFHIR?.hasError) {
              runValidationTasks("ReceiveInformationFHIR", value);
            }
            setReceiveInformationFHIR(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveInformationFHIR", ReceiveInformationFHIR)
          }
          errorMessage={errors.ReceiveInformationFHIR?.errorMessage}
          hasError={errors.ReceiveInformationFHIR?.hasError}
          {...getOverrideProps(overrides, "ReceiveInformationFHIR")}
        ></CheckboxField>
        <CheckboxField
          label="IHE"
          name="ReceiveInformationIHE"
          value="ReceiveInformationIHE"
          isDisabled={false}
          checked={ReceiveInformationIHE}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE: value,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveInformationIHE ?? value;
            }
            if (errors.ReceiveInformationIHE?.hasError) {
              runValidationTasks("ReceiveInformationIHE", value);
            }
            setReceiveInformationIHE(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveInformationIHE", ReceiveInformationIHE)
          }
          errorMessage={errors.ReceiveInformationIHE?.errorMessage}
          hasError={errors.ReceiveInformationIHE?.hasError}
          {...getOverrideProps(overrides, "ReceiveInformationIHE")}
        ></CheckboxField>
        <CheckboxField
          label="None"
          name="ReceiveInformationNone"
          value="ReceiveInformationNone"
          isDisabled={false}
          checked={ReceiveInformationNone}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone: value,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveInformationNone ?? value;
            }
            if (errors.ReceiveInformationNone?.hasError) {
              runValidationTasks("ReceiveInformationNone", value);
            }
            setReceiveInformationNone(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveInformationNone", ReceiveInformationNone)
          }
          errorMessage={errors.ReceiveInformationNone?.errorMessage}
          hasError={errors.ReceiveInformationNone?.hasError}
          {...getOverrideProps(overrides, "ReceiveInformationNone")}
        ></CheckboxField>
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement18")}
      ></Divider>
      <Text
        children="9. REQUEST FOR INFORMATION- Are you able to receive data electronically? If yes, please specify which content over which transports (check all that apply)."
        {...getOverrideProps(overrides, "SectionalElement17")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(5, auto)"
        {...getOverrideProps(overrides, "RowGrid26")}
      >
        <CheckboxField
          label="Direct"
          name="ReceiveRequestDirect"
          value="ReceiveRequestDirect"
          isDisabled={false}
          checked={ReceiveRequestDirect}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect: value,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveRequestDirect ?? value;
            }
            if (errors.ReceiveRequestDirect?.hasError) {
              runValidationTasks("ReceiveRequestDirect", value);
            }
            setReceiveRequestDirect(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveRequestDirect", ReceiveRequestDirect)
          }
          errorMessage={errors.ReceiveRequestDirect?.errorMessage}
          hasError={errors.ReceiveRequestDirect?.hasError}
          {...getOverrideProps(overrides, "ReceiveRequestDirect")}
        ></CheckboxField>
        <CheckboxField
          label="sFTP"
          name="ReceiveRequestSFTP"
          value="ReceiveRequestSFTP"
          isDisabled={false}
          checked={ReceiveRequestSFTP}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP: value,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveRequestSFTP ?? value;
            }
            if (errors.ReceiveRequestSFTP?.hasError) {
              runValidationTasks("ReceiveRequestSFTP", value);
            }
            setReceiveRequestSFTP(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveRequestSFTP", ReceiveRequestSFTP)
          }
          errorMessage={errors.ReceiveRequestSFTP?.errorMessage}
          hasError={errors.ReceiveRequestSFTP?.hasError}
          {...getOverrideProps(overrides, "ReceiveRequestSFTP")}
        ></CheckboxField>
        <CheckboxField
          label="FHIR"
          name="ReceiveRequestFHIR"
          value="ReceiveRequestFHIR"
          isDisabled={false}
          checked={ReceiveRequestFHIR}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR: value,
                ReceiveRequestIHE,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveRequestFHIR ?? value;
            }
            if (errors.ReceiveRequestFHIR?.hasError) {
              runValidationTasks("ReceiveRequestFHIR", value);
            }
            setReceiveRequestFHIR(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveRequestFHIR", ReceiveRequestFHIR)
          }
          errorMessage={errors.ReceiveRequestFHIR?.errorMessage}
          hasError={errors.ReceiveRequestFHIR?.hasError}
          {...getOverrideProps(overrides, "ReceiveRequestFHIR")}
        ></CheckboxField>
        <CheckboxField
          label="IHE"
          name="ReceiveRequestIHE"
          value="ReceiveRequestIHE"
          isDisabled={false}
          checked={ReceiveRequestIHE}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE: value,
                ReceiveRequestNone,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveRequestIHE ?? value;
            }
            if (errors.ReceiveRequestIHE?.hasError) {
              runValidationTasks("ReceiveRequestIHE", value);
            }
            setReceiveRequestIHE(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveRequestIHE", ReceiveRequestIHE)
          }
          errorMessage={errors.ReceiveRequestIHE?.errorMessage}
          hasError={errors.ReceiveRequestIHE?.hasError}
          {...getOverrideProps(overrides, "ReceiveRequestIHE")}
        ></CheckboxField>
        <CheckboxField
          label="None"
          name="ReceiveRequestNone"
          value="ReceiveRequestNone"
          isDisabled={false}
          checked={ReceiveRequestNone}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                ParticipantID,
                EhrIntersystems,
                EhrSmile,
                EhrSalesforce,
                EhrOther,
                SendOutboundDirect,
                SendOutboundSFTP,
                SendOutboundMLLP,
                SendOutboundHTTPS,
                SendOutboundFHIR,
                SendOutboundNone,
                SendInformationDirect,
                SendInformationSFTP,
                SendInformationMLLP,
                SendInformationHTTPS,
                SendInformationFHIR,
                SendInformationIHE,
                SendInformationNone,
                SendRequestDirect,
                SendRequestSFTP,
                SendRequestFHIR,
                SendRequestIHE,
                SendRequestNone,
                ReceiveInboundDirect,
                ReceiveInboundSFTP,
                ReceiveInboundMLLP,
                ReceiveInboundHTTPS,
                ReceiveInboundFHIR,
                ReceiveInboundNone,
                ReceiveInformationDirect,
                ReceiveInformationSFTP,
                ReceiveInformationMLLP,
                ReceiveInformationHTTPS,
                ReceiveInformationFHIR,
                ReceiveInformationIHE,
                ReceiveInformationNone,
                ReceiveRequestDirect,
                ReceiveRequestSFTP,
                ReceiveRequestFHIR,
                ReceiveRequestIHE,
                ReceiveRequestNone: value,
                HIPPA,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveRequestNone ?? value;
            }
            if (errors.ReceiveRequestNone?.hasError) {
              runValidationTasks("ReceiveRequestNone", value);
            }
            setReceiveRequestNone(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveRequestNone", ReceiveRequestNone)
          }
          errorMessage={errors.ReceiveRequestNone?.errorMessage}
          hasError={errors.ReceiveRequestNone?.hasError}
          {...getOverrideProps(overrides, "ReceiveRequestNone")}
        ></CheckboxField>
      </Grid>
      <Heading
        level={3}
        children="HIPPA Coverage"
        {...getOverrideProps(overrides, "SectionalElement19")}
      ></Heading>
      <RadioGroupField
        label="Are you a HIPPA covered entity?"
        name="HIPPA"
        isReadOnly={false}
        isRequired={false}
        onChange={(e) => {
          let value = e.target.value === "true";
          if (onChange) {
            const modelFields = {
              Participant,
              ParticipantID,
              EhrIntersystems,
              EhrSmile,
              EhrSalesforce,
              EhrOther,
              SendOutboundDirect,
              SendOutboundSFTP,
              SendOutboundMLLP,
              SendOutboundHTTPS,
              SendOutboundFHIR,
              SendOutboundNone,
              SendInformationDirect,
              SendInformationSFTP,
              SendInformationMLLP,
              SendInformationHTTPS,
              SendInformationFHIR,
              SendInformationIHE,
              SendInformationNone,
              SendRequestDirect,
              SendRequestSFTP,
              SendRequestFHIR,
              SendRequestIHE,
              SendRequestNone,
              ReceiveInboundDirect,
              ReceiveInboundSFTP,
              ReceiveInboundMLLP,
              ReceiveInboundHTTPS,
              ReceiveInboundFHIR,
              ReceiveInboundNone,
              ReceiveInformationDirect,
              ReceiveInformationSFTP,
              ReceiveInformationMLLP,
              ReceiveInformationHTTPS,
              ReceiveInformationFHIR,
              ReceiveInformationIHE,
              ReceiveInformationNone,
              ReceiveRequestDirect,
              ReceiveRequestSFTP,
              ReceiveRequestFHIR,
              ReceiveRequestIHE,
              ReceiveRequestNone,
              HIPPA: value,
            };
            const result = onChange(modelFields);
            value = result?.HIPPA ?? value;
          }
          if (errors.HIPPA?.hasError) {
            runValidationTasks("HIPPA", value);
          }
          setHIPPA(value);
        }}
        onBlur={() => runValidationTasks("HIPPA", HIPPA)}
        errorMessage={errors.HIPPA?.errorMessage}
        hasError={errors.HIPPA?.hasError}
        {...getOverrideProps(overrides, "HIPPA")}
      >
        <Radio
          children="Yes"
          value="true"
          {...getOverrideProps(overrides, "HIPPARadio0")}
        ></Radio>
        <Radio
          children="No"
          value="false"
          {...getOverrideProps(overrides, "HIPPARadio1")}
        ></Radio>
      </RadioGroupField>
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
