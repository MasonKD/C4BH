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
import { getC4bhFormData } from "../graphql/queries.ts";
import { updateC4bhFormData } from "../graphql/mutations.ts";
const client = generateClient();
export default function C4bhFormDataUpdateForm(props) {
  const {
    id: idProp,
    c4bhFormData: c4bhFormDataModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Participant: false,
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
    HIPPA: false,
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
    const cleanValues = c4bhFormDataRecord
      ? { ...initialValues, ...c4bhFormDataRecord }
      : initialValues;
    setParticipant(cleanValues.Participant);
    setParticipantID(cleanValues.ParticipantID);
    setEhrIntersystems(cleanValues.EhrIntersystems);
    setEhrSmile(cleanValues.EhrSmile);
    setEhrSalesforce(cleanValues.EhrSalesforce);
    setEhrOther(cleanValues.EhrOther);
    setSendOutboundDirect(cleanValues.SendOutboundDirect);
    setSendOutboundSFTP(cleanValues.SendOutboundSFTP);
    setSendOutboundMLLP(cleanValues.SendOutboundMLLP);
    setSendOutboundHTTPS(cleanValues.SendOutboundHTTPS);
    setSendOutboundFHIR(cleanValues.SendOutboundFHIR);
    setSendOutboundNone(cleanValues.SendOutboundNone);
    setSendInformationDirect(cleanValues.SendInformationDirect);
    setSendInformationSFTP(cleanValues.SendInformationSFTP);
    setSendInformationMLLP(cleanValues.SendInformationMLLP);
    setSendInformationHTTPS(cleanValues.SendInformationHTTPS);
    setSendInformationFHIR(cleanValues.SendInformationFHIR);
    setSendInformationIHE(cleanValues.SendInformationIHE);
    setSendInformationNone(cleanValues.SendInformationNone);
    setSendRequestDirect(cleanValues.SendRequestDirect);
    setSendRequestSFTP(cleanValues.SendRequestSFTP);
    setSendRequestFHIR(cleanValues.SendRequestFHIR);
    setSendRequestIHE(cleanValues.SendRequestIHE);
    setSendRequestNone(cleanValues.SendRequestNone);
    setReceiveInboundDirect(cleanValues.ReceiveInboundDirect);
    setReceiveInboundSFTP(cleanValues.ReceiveInboundSFTP);
    setReceiveInboundMLLP(cleanValues.ReceiveInboundMLLP);
    setReceiveInboundHTTPS(cleanValues.ReceiveInboundHTTPS);
    setReceiveInboundFHIR(cleanValues.ReceiveInboundFHIR);
    setReceiveInboundNone(cleanValues.ReceiveInboundNone);
    setReceiveInformationDirect(cleanValues.ReceiveInformationDirect);
    setReceiveInformationSFTP(cleanValues.ReceiveInformationSFTP);
    setReceiveInformationMLLP(cleanValues.ReceiveInformationMLLP);
    setReceiveInformationHTTPS(cleanValues.ReceiveInformationHTTPS);
    setReceiveInformationFHIR(cleanValues.ReceiveInformationFHIR);
    setReceiveInformationIHE(cleanValues.ReceiveInformationIHE);
    setReceiveInformationNone(cleanValues.ReceiveInformationNone);
    setReceiveRequestDirect(cleanValues.ReceiveRequestDirect);
    setReceiveRequestSFTP(cleanValues.ReceiveRequestSFTP);
    setReceiveRequestFHIR(cleanValues.ReceiveRequestFHIR);
    setReceiveRequestIHE(cleanValues.ReceiveRequestIHE);
    setReceiveRequestNone(cleanValues.ReceiveRequestNone);
    setHIPPA(cleanValues.HIPPA);
    setErrors({});
  };
  const [c4bhFormDataRecord, setC4bhFormDataRecord] = React.useState(
    c4bhFormDataModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getC4bhFormData.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getC4bhFormData
        : c4bhFormDataModelProp;
      setC4bhFormDataRecord(record);
    };
    queryData();
  }, [idProp, c4bhFormDataModelProp]);
  React.useEffect(resetStateValues, [c4bhFormDataRecord]);
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
          ParticipantID: ParticipantID ?? null,
          EhrIntersystems: EhrIntersystems ?? null,
          EhrSmile: EhrSmile ?? null,
          EhrSalesforce: EhrSalesforce ?? null,
          EhrOther: EhrOther ?? null,
          SendOutboundDirect: SendOutboundDirect ?? null,
          SendOutboundSFTP: SendOutboundSFTP ?? null,
          SendOutboundMLLP: SendOutboundMLLP ?? null,
          SendOutboundHTTPS: SendOutboundHTTPS ?? null,
          SendOutboundFHIR: SendOutboundFHIR ?? null,
          SendOutboundNone: SendOutboundNone ?? null,
          SendInformationDirect: SendInformationDirect ?? null,
          SendInformationSFTP: SendInformationSFTP ?? null,
          SendInformationMLLP: SendInformationMLLP ?? null,
          SendInformationHTTPS: SendInformationHTTPS ?? null,
          SendInformationFHIR: SendInformationFHIR ?? null,
          SendInformationIHE: SendInformationIHE ?? null,
          SendInformationNone: SendInformationNone ?? null,
          SendRequestDirect: SendRequestDirect ?? null,
          SendRequestSFTP: SendRequestSFTP ?? null,
          SendRequestFHIR: SendRequestFHIR ?? null,
          SendRequestIHE: SendRequestIHE ?? null,
          SendRequestNone: SendRequestNone ?? null,
          ReceiveInboundDirect: ReceiveInboundDirect ?? null,
          ReceiveInboundSFTP: ReceiveInboundSFTP ?? null,
          ReceiveInboundMLLP: ReceiveInboundMLLP ?? null,
          ReceiveInboundHTTPS: ReceiveInboundHTTPS ?? null,
          ReceiveInboundFHIR: ReceiveInboundFHIR ?? null,
          ReceiveInboundNone: ReceiveInboundNone ?? null,
          ReceiveInformationDirect: ReceiveInformationDirect ?? null,
          ReceiveInformationSFTP: ReceiveInformationSFTP ?? null,
          ReceiveInformationMLLP: ReceiveInformationMLLP ?? null,
          ReceiveInformationHTTPS: ReceiveInformationHTTPS ?? null,
          ReceiveInformationFHIR: ReceiveInformationFHIR ?? null,
          ReceiveInformationIHE: ReceiveInformationIHE ?? null,
          ReceiveInformationNone: ReceiveInformationNone ?? null,
          ReceiveRequestDirect: ReceiveRequestDirect ?? null,
          ReceiveRequestSFTP: ReceiveRequestSFTP ?? null,
          ReceiveRequestFHIR: ReceiveRequestFHIR ?? null,
          ReceiveRequestIHE: ReceiveRequestIHE ?? null,
          ReceiveRequestNone: ReceiveRequestNone ?? null,
          HIPPA: HIPPA ?? null,
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
            query: updateC4bhFormData.replaceAll("__typename", ""),
            variables: {
              input: {
                id: c4bhFormDataRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "C4bhFormDataUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Participant"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Participant}
        onChange={(e) => {
          let value = e.target.checked;
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
      ></SwitchField>
      <TextField
        label="Participant id"
        isRequired={false}
        isReadOnly={false}
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
      <SwitchField
        label="Ehr intersystems"
        defaultChecked={false}
        isDisabled={false}
        isChecked={EhrIntersystems}
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
      ></SwitchField>
      <SwitchField
        label="Ehr smile"
        defaultChecked={false}
        isDisabled={false}
        isChecked={EhrSmile}
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
      ></SwitchField>
      <SwitchField
        label="Ehr salesforce"
        defaultChecked={false}
        isDisabled={false}
        isChecked={EhrSalesforce}
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
      ></SwitchField>
      <TextField
        label="Ehr other"
        isRequired={false}
        isReadOnly={false}
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
      <SwitchField
        label="Send outbound direct"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendOutboundDirect}
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
      ></SwitchField>
      <SwitchField
        label="Send outbound sftp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendOutboundSFTP}
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
        onBlur={() => runValidationTasks("SendOutboundSFTP", SendOutboundSFTP)}
        errorMessage={errors.SendOutboundSFTP?.errorMessage}
        hasError={errors.SendOutboundSFTP?.hasError}
        {...getOverrideProps(overrides, "SendOutboundSFTP")}
      ></SwitchField>
      <SwitchField
        label="Send outbound mllp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendOutboundMLLP}
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
        onBlur={() => runValidationTasks("SendOutboundMLLP", SendOutboundMLLP)}
        errorMessage={errors.SendOutboundMLLP?.errorMessage}
        hasError={errors.SendOutboundMLLP?.hasError}
        {...getOverrideProps(overrides, "SendOutboundMLLP")}
      ></SwitchField>
      <SwitchField
        label="Send outbound https"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendOutboundHTTPS}
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
      ></SwitchField>
      <SwitchField
        label="Send outbound fhir"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendOutboundFHIR}
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
        onBlur={() => runValidationTasks("SendOutboundFHIR", SendOutboundFHIR)}
        errorMessage={errors.SendOutboundFHIR?.errorMessage}
        hasError={errors.SendOutboundFHIR?.hasError}
        {...getOverrideProps(overrides, "SendOutboundFHIR")}
      ></SwitchField>
      <SwitchField
        label="Send outbound none"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendOutboundNone}
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
        onBlur={() => runValidationTasks("SendOutboundNone", SendOutboundNone)}
        errorMessage={errors.SendOutboundNone?.errorMessage}
        hasError={errors.SendOutboundNone?.hasError}
        {...getOverrideProps(overrides, "SendOutboundNone")}
      ></SwitchField>
      <SwitchField
        label="Send information direct"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendInformationDirect}
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
      ></SwitchField>
      <SwitchField
        label="Send information sftp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendInformationSFTP}
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
      ></SwitchField>
      <SwitchField
        label="Send information mllp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendInformationMLLP}
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
      ></SwitchField>
      <SwitchField
        label="Send information https"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendInformationHTTPS}
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
      ></SwitchField>
      <SwitchField
        label="Send information fhir"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendInformationFHIR}
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
      ></SwitchField>
      <SwitchField
        label="Send information ihe"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendInformationIHE}
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
      ></SwitchField>
      <SwitchField
        label="Send information none"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendInformationNone}
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
      ></SwitchField>
      <SwitchField
        label="Send request direct"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendRequestDirect}
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
      ></SwitchField>
      <SwitchField
        label="Send request sftp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendRequestSFTP}
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
      ></SwitchField>
      <SwitchField
        label="Send request fhir"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendRequestFHIR}
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
      ></SwitchField>
      <SwitchField
        label="Send request ihe"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendRequestIHE}
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
      ></SwitchField>
      <SwitchField
        label="Send request none"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SendRequestNone}
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
      ></SwitchField>
      <SwitchField
        label="Receive inbound direct"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveInboundDirect}
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
      ></SwitchField>
      <SwitchField
        label="Receive inbound sftp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveInboundSFTP}
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
      ></SwitchField>
      <SwitchField
        label="Receive inbound mllp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveInboundMLLP}
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
      ></SwitchField>
      <SwitchField
        label="Receive inbound https"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveInboundHTTPS}
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
      ></SwitchField>
      <SwitchField
        label="Receive inbound fhir"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveInboundFHIR}
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
      ></SwitchField>
      <SwitchField
        label="Receive inbound none"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveInboundNone}
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
      ></SwitchField>
      <SwitchField
        label="Receive information direct"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveInformationDirect}
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
      ></SwitchField>
      <SwitchField
        label="Receive information sftp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveInformationSFTP}
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
      ></SwitchField>
      <SwitchField
        label="Receive information mllp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveInformationMLLP}
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
      ></SwitchField>
      <SwitchField
        label="Receive information https"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveInformationHTTPS}
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
          runValidationTasks("ReceiveInformationHTTPS", ReceiveInformationHTTPS)
        }
        errorMessage={errors.ReceiveInformationHTTPS?.errorMessage}
        hasError={errors.ReceiveInformationHTTPS?.hasError}
        {...getOverrideProps(overrides, "ReceiveInformationHTTPS")}
      ></SwitchField>
      <SwitchField
        label="Receive information fhir"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveInformationFHIR}
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
      ></SwitchField>
      <SwitchField
        label="Receive information ihe"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveInformationIHE}
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
      ></SwitchField>
      <SwitchField
        label="Receive information none"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveInformationNone}
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
      ></SwitchField>
      <SwitchField
        label="Receive request direct"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveRequestDirect}
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
      ></SwitchField>
      <SwitchField
        label="Receive request sftp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveRequestSFTP}
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
      ></SwitchField>
      <SwitchField
        label="Receive request fhir"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveRequestFHIR}
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
      ></SwitchField>
      <SwitchField
        label="Receive request ihe"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveRequestIHE}
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
      ></SwitchField>
      <SwitchField
        label="Receive request none"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ReceiveRequestNone}
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
      ></SwitchField>
      <SwitchField
        label="Hippa"
        defaultChecked={false}
        isDisabled={false}
        isChecked={HIPPA}
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
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || c4bhFormDataModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || c4bhFormDataModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
