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
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getNotificationsADT } from "../graphql/queries";
import { updateNotificationsADT } from "../graphql/mutations";
const client = generateClient();
export default function NotificationsADTUpdateForm(props) {
  const {
    id: idProp,
    notificationsADT: notificationsADTModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
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
    UserIdToken: "",
  };
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
  const [UserIdToken, setUserIdToken] = React.useState(
    initialValues.UserIdToken
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = notificationsADTRecord
      ? { ...initialValues, ...notificationsADTRecord }
      : initialValues;
    setReceiveADTDirectSecureEmail(cleanValues.ReceiveADTDirectSecureEmail);
    setReceiveADTDirectEmailAddress(cleanValues.ReceiveADTDirectEmailAddress);
    setReceiveADTsFTP(cleanValues.ReceiveADTsFTP);
    setReceiveADTPointToPoint(cleanValues.ReceiveADTPointToPoint);
    setReceiveADTHTTPSnonFHIR(cleanValues.ReceiveADTHTTPSnonFHIR);
    setReceiveADTHTTPSFHIR(cleanValues.ReceiveADTHTTPSFHIR);
    setReceiveADTHTTPSEndpoint(cleanValues.ReceiveADTHTTPSEndpoint);
    setReceiveADTOther(cleanValues.ReceiveADTOther);
    setReceiveADTOtherDescription(cleanValues.ReceiveADTOtherDescription);
    setSendADTDirectSecureEmail(cleanValues.SendADTDirectSecureEmail);
    setSendADTsFTP(cleanValues.SendADTsFTP);
    setSendADTPointToPoint(cleanValues.SendADTPointToPoint);
    setSendADTHTTPSNon_FHIR(cleanValues.SendADTHTTPSNon_FHIR);
    setSendADTHTTPS_FHIR(cleanValues.SendADTHTTPS_FHIR);
    setSendADTPortal(cleanValues.SendADTPortal);
    setSendADTOther(cleanValues.SendADTOther);
    setSendADTOtherDescribe(cleanValues.SendADTOtherDescribe);
    setUserIdToken(cleanValues.UserIdToken);
    setErrors({});
  };
  const [notificationsADTRecord, setNotificationsADTRecord] = React.useState(
    notificationsADTModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getNotificationsADT.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNotificationsADT
        : notificationsADTModelProp;
      setNotificationsADTRecord(record);
    };
    queryData();
  }, [idProp, notificationsADTModelProp]);
  React.useEffect(resetStateValues, [notificationsADTRecord]);
  const validations = {
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
    UserIdToken: [],
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
          ReceiveADTDirectSecureEmail: ReceiveADTDirectSecureEmail ?? null,
          ReceiveADTDirectEmailAddress: ReceiveADTDirectEmailAddress ?? null,
          ReceiveADTsFTP: ReceiveADTsFTP ?? null,
          ReceiveADTPointToPoint: ReceiveADTPointToPoint ?? null,
          ReceiveADTHTTPSnonFHIR: ReceiveADTHTTPSnonFHIR ?? null,
          ReceiveADTHTTPSFHIR: ReceiveADTHTTPSFHIR ?? null,
          ReceiveADTHTTPSEndpoint: ReceiveADTHTTPSEndpoint ?? null,
          ReceiveADTOther: ReceiveADTOther ?? null,
          ReceiveADTOtherDescription: ReceiveADTOtherDescription ?? null,
          SendADTDirectSecureEmail: SendADTDirectSecureEmail ?? null,
          SendADTsFTP: SendADTsFTP ?? null,
          SendADTPointToPoint: SendADTPointToPoint ?? null,
          SendADTHTTPSNon_FHIR: SendADTHTTPSNon_FHIR ?? null,
          SendADTHTTPS_FHIR: SendADTHTTPS_FHIR ?? null,
          SendADTPortal: SendADTPortal ?? null,
          SendADTOther: SendADTOther ?? null,
          SendADTOtherDescribe: SendADTOtherDescribe ?? null,
          UserIdToken: UserIdToken ?? null,
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
            query: updateNotificationsADT.replaceAll("__typename", ""),
            variables: {
              input: {
                id: notificationsADTRecord.id,
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
      {...getOverrideProps(overrides, "NotificationsADTUpdateForm")}
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
          name="ReceiveADTDirectSecureEmail"
          value="ReceiveADTDirectSecureEmail"
          isDisabled={false}
          checked={ReceiveADTDirectSecureEmail}
          defaultValue={ReceiveADTDirectSecureEmail}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
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
                UserIdToken,
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
        ></CheckboxField>
        <TextField
          label=" "
          isRequired={false}
          isReadOnly={false}
          value={ReceiveADTDirectEmailAddress}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                UserIdToken,
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
      </Grid>
      <CheckboxField
        label="sFTP"
        name="ReceiveADTsFTP"
        value="ReceiveADTsFTP"
        isDisabled={false}
        checked={ReceiveADTsFTP}
        defaultValue={ReceiveADTsFTP}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
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
              UserIdToken,
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
      ></CheckboxField>
      <CheckboxField
        label="Point to Point (i.e. MLLP/VPN, etc.)"
        name="ReceiveADTPointToPoint"
        value="ReceiveADTPointToPoint"
        isDisabled={false}
        checked={ReceiveADTPointToPoint}
        defaultValue={ReceiveADTPointToPoint}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
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
              UserIdToken,
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
      ></CheckboxField>
      <CheckboxField
        label="HTTPS  - non-FHIR (web services, API, etc.)"
        name="ReceiveADTHTTPSnonFHIR"
        value="ReceiveADTHTTPSnonFHIR"
        isDisabled={false}
        checked={ReceiveADTHTTPSnonFHIR}
        defaultValue={ReceiveADTHTTPSnonFHIR}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
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
              UserIdToken,
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
      ></CheckboxField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid5")}
      >
        <CheckboxField
          label="HTTPS - FHIR: Please enter endpoint"
          name="ReceiveADTHTTPSFHIR"
          value="ReceiveADTHTTPSFHIR"
          isDisabled={false}
          checked={ReceiveADTHTTPSFHIR}
          defaultValue={ReceiveADTHTTPSFHIR}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
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
                UserIdToken,
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
        ></CheckboxField>
        <TextField
          label=" "
          isRequired={false}
          isReadOnly={false}
          value={ReceiveADTHTTPSEndpoint}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                UserIdToken,
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
            runValidationTasks(
              "ReceiveADTHTTPSEndpoint",
              ReceiveADTHTTPSEndpoint
            )
          }
          errorMessage={errors.ReceiveADTHTTPSEndpoint?.errorMessage}
          hasError={errors.ReceiveADTHTTPSEndpoint?.hasError}
          {...getOverrideProps(overrides, "ReceiveADTHTTPSEndpoint")}
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
          name="ReceiveADTOther"
          value="ReceiveADTOther"
          isDisabled={false}
          checked={ReceiveADTOther}
          defaultValue={ReceiveADTOther}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
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
                UserIdToken,
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
        ></CheckboxField>
        <TextField
          label=" "
          isRequired={false}
          isReadOnly={false}
          value={ReceiveADTOtherDescription}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                UserIdToken,
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
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Divider>
      <Text
        children="2. Sending outbound ADT Notifications (Health Systems and Intermediaries only): By which of the following methods do you make ADT notifications available to requesting participants? "
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Text>
      <CheckboxField
        label="Direct Secure Email"
        name="SendADTDirectSecureEmail"
        value="SendADTDirectSecureEmail"
        isDisabled={false}
        checked={SendADTDirectSecureEmail}
        defaultValue={SendADTDirectSecureEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
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
              UserIdToken,
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
      ></CheckboxField>
      <CheckboxField
        label="sFTP"
        name="SendADTsFTP"
        value="SendADTsFTP"
        isDisabled={false}
        checked={SendADTsFTP}
        defaultValue={SendADTsFTP}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
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
              UserIdToken,
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
      ></CheckboxField>
      <CheckboxField
        label="Point to Point (i.e., MLLP / VPN, etc.)"
        name="SendADTPointToPoint"
        value="SendADTPointToPoint"
        isDisabled={false}
        checked={SendADTPointToPoint}
        defaultValue={SendADTPointToPoint}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
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
              UserIdToken,
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
      ></CheckboxField>
      <CheckboxField
        label="HTTPS – non-FHIR (web services, API, etc.)"
        name="SendADTHTTPSNon_FHIR"
        value="SendADTHTTPSNon_FHIR"
        isDisabled={false}
        checked={SendADTHTTPSNon_FHIR}
        defaultValue={SendADTHTTPSNon_FHIR}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
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
              UserIdToken,
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
      ></CheckboxField>
      <CheckboxField
        label="HTTPS - FHIR"
        name="SendADTHTTPS_FHIR"
        value="SendADTHTTPS_FHIR"
        isDisabled={false}
        checked={SendADTHTTPS_FHIR}
        defaultValue={SendADTHTTPS_FHIR}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
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
              UserIdToken,
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
      ></CheckboxField>
      <CheckboxField
        label="Portal"
        name="SendADTPortal"
        value="SendADTPortal"
        isDisabled={false}
        checked={SendADTPortal}
        defaultValue={SendADTPortal}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
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
              UserIdToken,
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
      ></CheckboxField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid15")}
      >
        <CheckboxField
          label="Other, please describe"
          name="SendADTOther"
          value="SendADTOther"
          isDisabled={false}
          checked={SendADTOther}
          defaultValue={SendADTOther}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
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
                UserIdToken,
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
        ></CheckboxField>
        <TextField
          label=" "
          isRequired={false}
          isReadOnly={false}
          value={SendADTOtherDescribe}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                UserIdToken,
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
      </Grid>
      <TextField
        label="User id token"
        isRequired={false}
        isReadOnly={false}
        value={UserIdToken}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              UserIdToken: value,
            };
            const result = onChange(modelFields);
            value = result?.UserIdToken ?? value;
          }
          if (errors.UserIdToken?.hasError) {
            runValidationTasks("UserIdToken", value);
          }
          setUserIdToken(value);
        }}
        onBlur={() => runValidationTasks("UserIdToken", UserIdToken)}
        errorMessage={errors.UserIdToken?.errorMessage}
        hasError={errors.UserIdToken?.hasError}
        {...getOverrideProps(overrides, "UserIdToken")}
      ></TextField>
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
          isDisabled={!(idProp || notificationsADTModelProp)}
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
              !(idProp || notificationsADTModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
