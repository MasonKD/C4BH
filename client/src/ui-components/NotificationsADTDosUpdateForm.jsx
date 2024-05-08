/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  CheckboxField,
  Flex,
  Grid,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getNotificationsADTDos } from "../graphql/queries";
import { updateNotificationsADTDos } from "../graphql/mutations";
const client = generateClient();
export default function NotificationsADTDosUpdateForm(props) {
  const {
    id: idProp,
    notificationsADTDos: notificationsADTDosModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    SendInfoDirectSecureEmail: false,
    SendInfosFTP: false,
    SendInfoHL7v2: false,
    SendInfoMLLP_HTTPS: false,
    SendADTHTTPS_FHIR: false,
    SendADTPortal: false,
    SendADTOther: false,
    SendADTOtherDescribe: "",
  };
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
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = notificationsADTDosRecord
      ? { ...initialValues, ...notificationsADTDosRecord }
      : initialValues;
    setSendInfoDirectSecureEmail(cleanValues.SendInfoDirectSecureEmail);
    setSendInfosFTP(cleanValues.SendInfosFTP);
    setSendInfoHL7v2(cleanValues.SendInfoHL7v2);
    setSendInfoMLLP_HTTPS(cleanValues.SendInfoMLLP_HTTPS);
    setSendADTHTTPS_FHIR(cleanValues.SendADTHTTPS_FHIR);
    setSendADTPortal(cleanValues.SendADTPortal);
    setSendADTOther(cleanValues.SendADTOther);
    setSendADTOtherDescribe(cleanValues.SendADTOtherDescribe);
    setErrors({});
  };
  const [notificationsADTDosRecord, setNotificationsADTDosRecord] =
    React.useState(notificationsADTDosModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getNotificationsADTDos.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNotificationsADTDos
        : notificationsADTDosModelProp;
      setNotificationsADTDosRecord(record);
    };
    queryData();
  }, [idProp, notificationsADTDosModelProp]);
  React.useEffect(resetStateValues, [notificationsADTDosRecord]);
  const validations = {
    SendInfoDirectSecureEmail: [],
    SendInfosFTP: [],
    SendInfoHL7v2: [],
    SendInfoMLLP_HTTPS: [],
    SendADTHTTPS_FHIR: [],
    SendADTPortal: [],
    SendADTOther: [],
    SendADTOtherDescribe: [],
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
          SendInfoDirectSecureEmail: SendInfoDirectSecureEmail ?? null,
          SendInfosFTP: SendInfosFTP ?? null,
          SendInfoHL7v2: SendInfoHL7v2 ?? null,
          SendInfoMLLP_HTTPS: SendInfoMLLP_HTTPS ?? null,
          SendADTHTTPS_FHIR: SendADTHTTPS_FHIR ?? null,
          SendADTPortal: SendADTPortal ?? null,
          SendADTOther: SendADTOther ?? null,
          SendADTOtherDescribe: SendADTOtherDescribe ?? null,
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
            query: updateNotificationsADTDos.replaceAll("__typename", ""),
            variables: {
              input: {
                id: notificationsADTDosRecord.id,
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
      {...getOverrideProps(overrides, "NotificationsADTDosUpdateForm")}
      {...rest}
    >
      <Text
        children="2. Sending outbound ADT Notifications (Health Systems and Intermediaries only): By which of the following methods do you make ADT notifications available to requesting participants? "
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Text>
      <CheckboxField
        label="Direct Secure Email"
        name="SendInfoDirectSecureEmail"
        value="SendInfoDirectSecureEmail"
        isDisabled={false}
        checked={SendInfoDirectSecureEmail}
        defaultValue={SendInfoDirectSecureEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              SendInfoDirectSecureEmail: value,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
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
      ></CheckboxField>
      <CheckboxField
        label="sFTP"
        name="SendInfosFTP"
        value="SendInfosFTP"
        isDisabled={false}
        checked={SendInfosFTP}
        defaultValue={SendInfosFTP}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              SendInfoDirectSecureEmail,
              SendInfosFTP: value,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
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
      ></CheckboxField>
      <CheckboxField
        label="Point to Point (i.e., MLLP / VPN, etc.)"
        name="SendInfoHL7v2"
        value="SendInfoHL7v2"
        isDisabled={false}
        checked={SendInfoHL7v2}
        defaultValue={SendInfoHL7v2}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2: value,
              SendInfoMLLP_HTTPS,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
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
      ></CheckboxField>
      <CheckboxField
        label="HTTPS – non-FHIR (web services, API, etc.)"
        name="SendInfoMLLP_HTTPS"
        value="SendInfoMLLP_HTTPS"
        isDisabled={false}
        checked={SendInfoMLLP_HTTPS}
        defaultValue={SendInfoMLLP_HTTPS}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS: value,
              SendADTHTTPS_FHIR,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
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
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendADTHTTPS_FHIR: value,
              SendADTPortal,
              SendADTOther,
              SendADTOtherDescribe,
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
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendADTHTTPS_FHIR,
              SendADTPortal: value,
              SendADTOther,
              SendADTOtherDescribe,
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
        {...getOverrideProps(overrides, "RowGrid7")}
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
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS,
                SendADTHTTPS_FHIR,
                SendADTPortal,
                SendADTOther: value,
                SendADTOtherDescribe,
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
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS,
                SendADTHTTPS_FHIR,
                SendADTPortal,
                SendADTOther,
                SendADTOtherDescribe: value,
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
