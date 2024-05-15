/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  CheckboxField,
  Divider,
  Flex,
  Grid,
  Heading,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createInformationDelivery } from "../graphql/mutations";
const client = generateClient();
export default function InformationDeliveryCreateForm(props) {
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
  const { tokens } = useTheme();
  const initialValues = {
    RecieveInfoDirectSecureEmail: false,
    RecieveInfoDirectEmailAddress: "",
    RecieveInfosFTP: false,
    RecieveInfoHL7V2: false,
    RecieveInfoMLLP_HTTPS: "",
    RecieveInfoThirdPartyReferral: false,
    RecieveInfoThirdPartyPlatform: undefined,
    RecieveInfoOther: false,
    RecieveInfoOther_Describe: "",
    SendInfoDirectSecureEmail: false,
    SendInfosFTP: false,
    SendInfoHL7v2: false,
    SendInfoMLLP_HTTPS: "",
    SendInfoThirdPartyReferral: false,
    SendInfoThirdPartyPlatform: undefined,
    SendInfoOther: false,
    SenInfoOther_Describe: "",
  };
  const [RecieveInfoDirectSecureEmail, setRecieveInfoDirectSecureEmail] =
    React.useState(initialValues.RecieveInfoDirectSecureEmail);
  const [RecieveInfoDirectEmailAddress, setRecieveInfoDirectEmailAddress] =
    React.useState(initialValues.RecieveInfoDirectEmailAddress);
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
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRecieveInfoDirectSecureEmail(initialValues.RecieveInfoDirectSecureEmail);
    setRecieveInfoDirectEmailAddress(
      initialValues.RecieveInfoDirectEmailAddress
    );
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
    setSendInfoDirectSecureEmail(initialValues.SendInfoDirectSecureEmail);
    setSendInfosFTP(initialValues.SendInfosFTP);
    setSendInfoHL7v2(initialValues.SendInfoHL7v2);
    setSendInfoMLLP_HTTPS(initialValues.SendInfoMLLP_HTTPS);
    setSendInfoThirdPartyReferral(initialValues.SendInfoThirdPartyReferral);
    setSendInfoThirdPartyPlatform(initialValues.SendInfoThirdPartyPlatform);
    setSendInfoOther(initialValues.SendInfoOther);
    setSenInfoOther_Describe(initialValues.SenInfoOther_Describe);
    setErrors({});
  };
  const validations = {
    RecieveInfoDirectSecureEmail: [],
    RecieveInfoDirectEmailAddress: [],
    RecieveInfosFTP: [],
    RecieveInfoHL7V2: [],
    RecieveInfoMLLP_HTTPS: [],
    RecieveInfoThirdPartyReferral: [],
    RecieveInfoThirdPartyPlatform: [],
    RecieveInfoOther: [],
    RecieveInfoOther_Describe: [],
    SendInfoDirectSecureEmail: [],
    SendInfosFTP: [],
    SendInfoHL7v2: [],
    SendInfoMLLP_HTTPS: [],
    SendInfoThirdPartyReferral: [],
    SendInfoThirdPartyPlatform: [],
    SendInfoOther: [],
    SenInfoOther_Describe: [],
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
  React.useEffect(() => {}, []);
  return (
    <Grid
      as="form"
      rowGap={tokens.space.large.value}
      columnGap={tokens.space.medium.value}
      padding={tokens.space.xs.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          RecieveInfoDirectSecureEmail,
          RecieveInfoDirectEmailAddress,
          RecieveInfosFTP,
          RecieveInfoHL7V2,
          RecieveInfoMLLP_HTTPS,
          RecieveInfoThirdPartyReferral,
          RecieveInfoThirdPartyPlatform,
          RecieveInfoOther,
          RecieveInfoOther_Describe,
          SendInfoDirectSecureEmail,
          SendInfosFTP,
          SendInfoHL7v2,
          SendInfoMLLP_HTTPS,
          SendInfoThirdPartyReferral,
          SendInfoThirdPartyPlatform,
          SendInfoOther,
          SenInfoOther_Describe,
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
            query: createInformationDelivery.replaceAll("__typename", ""),
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
      }}
      {...getOverrideProps(overrides, "InformationDeliveryCreateForm")}
      {...rest}
    >
      <Heading
        children="How are you able to receive and respond to inbound orders and/or referral requests?"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <Text
        children="Please check all that apply:"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid2")}
      >
        <CheckboxField
          label="Direct Secure Email (Provide address):"
          name="RecieveInfoDirectSecureEmail"
          value="RecieveInfoDirectSecureEmail"
          isDisabled={false}
          checked={RecieveInfoDirectSecureEmail}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                RecieveInfoDirectSecureEmail: value,
                RecieveInfoDirectEmailAddress,
                RecieveInfosFTP,
                RecieveInfoHL7V2,
                RecieveInfoMLLP_HTTPS,
                RecieveInfoThirdPartyReferral,
                RecieveInfoThirdPartyPlatform,
                RecieveInfoOther,
                RecieveInfoOther_Describe,
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS,
                SendInfoThirdPartyReferral,
                SendInfoThirdPartyPlatform,
                SendInfoOther,
                SenInfoOther_Describe,
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
        ></CheckboxField>
        <TextField
          label=" "
          isRequired={false}
          isReadOnly={false}
          value={RecieveInfoDirectEmailAddress}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                RecieveInfoDirectSecureEmail,
                RecieveInfoDirectEmailAddress: value,
                RecieveInfosFTP,
                RecieveInfoHL7V2,
                RecieveInfoMLLP_HTTPS,
                RecieveInfoThirdPartyReferral,
                RecieveInfoThirdPartyPlatform,
                RecieveInfoOther,
                RecieveInfoOther_Describe,
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS,
                SendInfoThirdPartyReferral,
                SendInfoThirdPartyPlatform,
                SendInfoOther,
                SenInfoOther_Describe,
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
      </Grid>
      <CheckboxField
        label="sFTP"
        name="RecieveInfosFTP"
        value="RecieveInfosFTP"
        isDisabled={false}
        checked={RecieveInfosFTP}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              RecieveInfoDirectSecureEmail,
              RecieveInfoDirectEmailAddress,
              RecieveInfosFTP: value,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              SendInfoDirectSecureEmail,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
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
      ></CheckboxField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid4")}
      >
        <CheckboxField
          label="HL7 v2 OMG message type via:"
          name="RecieveInfoHL7V2"
          value="RecieveInfoHL7V2"
          isDisabled={false}
          checked={RecieveInfoHL7V2}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                RecieveInfoDirectSecureEmail,
                RecieveInfoDirectEmailAddress,
                RecieveInfosFTP,
                RecieveInfoHL7V2: value,
                RecieveInfoMLLP_HTTPS,
                RecieveInfoThirdPartyReferral,
                RecieveInfoThirdPartyPlatform,
                RecieveInfoOther,
                RecieveInfoOther_Describe,
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS,
                SendInfoThirdPartyReferral,
                SendInfoThirdPartyPlatform,
                SendInfoOther,
                SenInfoOther_Describe,
              };
              const result = onChange(modelFields);
              value = result?.RecieveInfoHL7V2 ?? value;
            }
            if (errors.RecieveInfoHL7V2?.hasError) {
              runValidationTasks("RecieveInfoHL7V2", value);
            }
            setRecieveInfoHL7V2(value);
          }}
          onBlur={() =>
            runValidationTasks("RecieveInfoHL7V2", RecieveInfoHL7V2)
          }
          errorMessage={errors.RecieveInfoHL7V2?.errorMessage}
          hasError={errors.RecieveInfoHL7V2?.hasError}
          {...getOverrideProps(overrides, "RecieveInfoHL7V2")}
        ></CheckboxField>
        <SelectField
          label=" "
          placeholder="Please select an option"
          isDisabled={false}
          value={RecieveInfoMLLP_HTTPS}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                RecieveInfoDirectSecureEmail,
                RecieveInfoDirectEmailAddress,
                RecieveInfosFTP,
                RecieveInfoHL7V2,
                RecieveInfoMLLP_HTTPS: value,
                RecieveInfoThirdPartyReferral,
                RecieveInfoThirdPartyPlatform,
                RecieveInfoOther,
                RecieveInfoOther_Describe,
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS,
                SendInfoThirdPartyReferral,
                SendInfoThirdPartyPlatform,
                SendInfoOther,
                SenInfoOther_Describe,
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
        >
          <option
            children="MLLP/VPN"
            value="MLLP/VPN"
            {...getOverrideProps(overrides, "RecieveInfoMLLP_HTTPSoption0")}
          ></option>
          <option
            children="HTTPS"
            value="HTTPS"
            {...getOverrideProps(overrides, "RecieveInfoMLLP_HTTPSoption1")}
          ></option>
        </SelectField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid5")}
      >
        <CheckboxField
          label="Third party referral management platform:"
          name="RecieveInfoThirdPartyReferral"
          value="RecieveInfoThirdPartyReferral"
          isDisabled={false}
          checked={RecieveInfoThirdPartyReferral}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                RecieveInfoDirectSecureEmail,
                RecieveInfoDirectEmailAddress,
                RecieveInfosFTP,
                RecieveInfoHL7V2,
                RecieveInfoMLLP_HTTPS,
                RecieveInfoThirdPartyReferral: value,
                RecieveInfoThirdPartyPlatform,
                RecieveInfoOther,
                RecieveInfoOther_Describe,
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS,
                SendInfoThirdPartyReferral,
                SendInfoThirdPartyPlatform,
                SendInfoOther,
                SenInfoOther_Describe,
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
        ></CheckboxField>
        <Autocomplete
          label=" "
          isRequired={false}
          isReadOnly={false}
          options={[
            {
              id: "FindHelp",
              label: "FindHelp",
            },
            {
              id: "HIE",
              label: "HIE",
            },
            {
              id: "UniteUs",
              label: "UniteUs",
            },
            {
              id: "If other, please manually enter",
              label: "If other, please manually enter",
            },
          ]}
          onSelect={({ id, label }) => {
            setRecieveInfoThirdPartyPlatform(id);
            runValidationTasks("RecieveInfoThirdPartyPlatform", id);
          }}
          onClear={() => {
            setRecieveInfoThirdPartyPlatform("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                RecieveInfoDirectSecureEmail,
                RecieveInfoDirectEmailAddress,
                RecieveInfosFTP,
                RecieveInfoHL7V2,
                RecieveInfoMLLP_HTTPS,
                RecieveInfoThirdPartyReferral,
                RecieveInfoThirdPartyPlatform: value,
                RecieveInfoOther,
                RecieveInfoOther_Describe,
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS,
                SendInfoThirdPartyReferral,
                SendInfoThirdPartyPlatform,
                SendInfoOther,
                SenInfoOther_Describe,
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
          labelHidden={false}
          {...getOverrideProps(overrides, "RecieveInfoThirdPartyPlatform")}
        ></Autocomplete>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid6")}
      >
        <CheckboxField
          label="Other (please describe):"
          name="RecieveInfoOther"
          value="RecieveInfoOther"
          isDisabled={false}
          checked={RecieveInfoOther}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                RecieveInfoDirectSecureEmail,
                RecieveInfoDirectEmailAddress,
                RecieveInfosFTP,
                RecieveInfoHL7V2,
                RecieveInfoMLLP_HTTPS,
                RecieveInfoThirdPartyReferral,
                RecieveInfoThirdPartyPlatform,
                RecieveInfoOther: value,
                RecieveInfoOther_Describe,
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS,
                SendInfoThirdPartyReferral,
                SendInfoThirdPartyPlatform,
                SendInfoOther,
                SenInfoOther_Describe,
              };
              const result = onChange(modelFields);
              value = result?.RecieveInfoOther ?? value;
            }
            if (errors.RecieveInfoOther?.hasError) {
              runValidationTasks("RecieveInfoOther", value);
            }
            setRecieveInfoOther(value);
          }}
          onBlur={() =>
            runValidationTasks("RecieveInfoOther", RecieveInfoOther)
          }
          errorMessage={errors.RecieveInfoOther?.errorMessage}
          hasError={errors.RecieveInfoOther?.hasError}
          {...getOverrideProps(overrides, "RecieveInfoOther")}
        ></CheckboxField>
        <TextField
          label=" "
          isRequired={false}
          isReadOnly={false}
          value={RecieveInfoOther_Describe}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                RecieveInfoDirectSecureEmail,
                RecieveInfoDirectEmailAddress,
                RecieveInfosFTP,
                RecieveInfoHL7V2,
                RecieveInfoMLLP_HTTPS,
                RecieveInfoThirdPartyReferral,
                RecieveInfoThirdPartyPlatform,
                RecieveInfoOther,
                RecieveInfoOther_Describe: value,
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS,
                SendInfoThirdPartyReferral,
                SendInfoThirdPartyPlatform,
                SendInfoOther,
                SenInfoOther_Describe,
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
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Divider>
      <Heading
        children="How are you able to send referrals and/or orders outbound?"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Heading>
      <Text
        children="Please check all that apply:"
        {...getOverrideProps(overrides, "SectionalElement4")}
      ></Text>
      <CheckboxField
        label="Direct Secure Email"
        name="SendInfoDirectSecureEmail"
        value="SendInfoDirectSecureEmail"
        isDisabled={false}
        checked={SendInfoDirectSecureEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              RecieveInfoDirectSecureEmail,
              RecieveInfoDirectEmailAddress,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              SendInfoDirectSecureEmail: value,
              SendInfosFTP,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
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
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              RecieveInfoDirectSecureEmail,
              RecieveInfoDirectEmailAddress,
              RecieveInfosFTP,
              RecieveInfoHL7V2,
              RecieveInfoMLLP_HTTPS,
              RecieveInfoThirdPartyReferral,
              RecieveInfoThirdPartyPlatform,
              RecieveInfoOther,
              RecieveInfoOther_Describe,
              SendInfoDirectSecureEmail,
              SendInfosFTP: value,
              SendInfoHL7v2,
              SendInfoMLLP_HTTPS,
              SendInfoThirdPartyReferral,
              SendInfoThirdPartyPlatform,
              SendInfoOther,
              SenInfoOther_Describe,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid12")}
      >
        <CheckboxField
          label="HL7 v2 OMG message type via:"
          name="SendInfoHL7v2"
          value="SendInfoHL7v2"
          isDisabled={false}
          checked={SendInfoHL7v2}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                RecieveInfoDirectSecureEmail,
                RecieveInfoDirectEmailAddress,
                RecieveInfosFTP,
                RecieveInfoHL7V2,
                RecieveInfoMLLP_HTTPS,
                RecieveInfoThirdPartyReferral,
                RecieveInfoThirdPartyPlatform,
                RecieveInfoOther,
                RecieveInfoOther_Describe,
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2: value,
                SendInfoMLLP_HTTPS,
                SendInfoThirdPartyReferral,
                SendInfoThirdPartyPlatform,
                SendInfoOther,
                SenInfoOther_Describe,
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
        <SelectField
          label=" "
          placeholder="Please select an option"
          isDisabled={false}
          value={SendInfoMLLP_HTTPS}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                RecieveInfoDirectSecureEmail,
                RecieveInfoDirectEmailAddress,
                RecieveInfosFTP,
                RecieveInfoHL7V2,
                RecieveInfoMLLP_HTTPS,
                RecieveInfoThirdPartyReferral,
                RecieveInfoThirdPartyPlatform,
                RecieveInfoOther,
                RecieveInfoOther_Describe,
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS: value,
                SendInfoThirdPartyReferral,
                SendInfoThirdPartyPlatform,
                SendInfoOther,
                SenInfoOther_Describe,
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
        >
          <option
            children="MLLP/VPN"
            value="MLLP/VPN"
            {...getOverrideProps(overrides, "SendInfoMLLP_HTTPSoption0")}
          ></option>
          <option
            children="HTTPS"
            value="HTTPS"
            {...getOverrideProps(overrides, "SendInfoMLLP_HTTPSoption1")}
          ></option>
        </SelectField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid13")}
      >
        <CheckboxField
          label="Third party referral management platform:"
          name="SendInfoThirdPartyReferral"
          value="SendInfoThirdPartyReferral"
          isDisabled={false}
          checked={SendInfoThirdPartyReferral}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                RecieveInfoDirectSecureEmail,
                RecieveInfoDirectEmailAddress,
                RecieveInfosFTP,
                RecieveInfoHL7V2,
                RecieveInfoMLLP_HTTPS,
                RecieveInfoThirdPartyReferral,
                RecieveInfoThirdPartyPlatform,
                RecieveInfoOther,
                RecieveInfoOther_Describe,
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS,
                SendInfoThirdPartyReferral: value,
                SendInfoThirdPartyPlatform,
                SendInfoOther,
                SenInfoOther_Describe,
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
        ></CheckboxField>
        <Autocomplete
          label=" "
          isRequired={false}
          isReadOnly={false}
          options={[
            {
              id: "UniteUs",
              label: "UniteUs",
            },
            {
              id: "FindHelp",
              label: "FindHelp",
            },
            {
              id: "HIE",
              label: "HIE",
            },
            {
              id: "If other, please manually enter",
              label: "If other, please manually enter",
            },
          ]}
          onSelect={({ id, label }) => {
            setSendInfoThirdPartyPlatform(id);
            runValidationTasks("SendInfoThirdPartyPlatform", id);
          }}
          onClear={() => {
            setSendInfoThirdPartyPlatform("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                RecieveInfoDirectSecureEmail,
                RecieveInfoDirectEmailAddress,
                RecieveInfosFTP,
                RecieveInfoHL7V2,
                RecieveInfoMLLP_HTTPS,
                RecieveInfoThirdPartyReferral,
                RecieveInfoThirdPartyPlatform,
                RecieveInfoOther,
                RecieveInfoOther_Describe,
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS,
                SendInfoThirdPartyReferral,
                SendInfoThirdPartyPlatform: value,
                SendInfoOther,
                SenInfoOther_Describe,
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
          labelHidden={false}
          {...getOverrideProps(overrides, "SendInfoThirdPartyPlatform")}
        ></Autocomplete>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid14")}
      >
        <CheckboxField
          label="Other (please describe):"
          name="SendInfoOther"
          value="SendInfoOther"
          isDisabled={false}
          checked={SendInfoOther}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                RecieveInfoDirectSecureEmail,
                RecieveInfoDirectEmailAddress,
                RecieveInfosFTP,
                RecieveInfoHL7V2,
                RecieveInfoMLLP_HTTPS,
                RecieveInfoThirdPartyReferral,
                RecieveInfoThirdPartyPlatform,
                RecieveInfoOther,
                RecieveInfoOther_Describe,
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS,
                SendInfoThirdPartyReferral,
                SendInfoThirdPartyPlatform,
                SendInfoOther: value,
                SenInfoOther_Describe,
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
        ></CheckboxField>
        <TextField
          label=" "
          isRequired={false}
          isReadOnly={false}
          value={SenInfoOther_Describe}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                RecieveInfoDirectSecureEmail,
                RecieveInfoDirectEmailAddress,
                RecieveInfosFTP,
                RecieveInfoHL7V2,
                RecieveInfoMLLP_HTTPS,
                RecieveInfoThirdPartyReferral,
                RecieveInfoThirdPartyPlatform,
                RecieveInfoOther,
                RecieveInfoOther_Describe,
                SendInfoDirectSecureEmail,
                SendInfosFTP,
                SendInfoHL7v2,
                SendInfoMLLP_HTTPS,
                SendInfoThirdPartyReferral,
                SendInfoThirdPartyPlatform,
                SendInfoOther,
                SenInfoOther_Describe: value,
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
      </Grid>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap={tokens.space.medium.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        ></Flex>
      </Flex>
    </Grid>
  );
}
