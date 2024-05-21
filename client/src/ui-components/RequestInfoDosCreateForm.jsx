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
  Flex,
  Grid,
  Heading,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createRequestInfoDos } from "../graphql/mutations";
const client = generateClient();
export default function RequestInfoDosCreateForm(props) {
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
    RequestRespondDirectSecureEmail: false,
    RequestRespondIHE: false,
    RequestRespondNationalNetworkDos: undefined,
    RequestRespondFHIR: false,
    RequestRespondFHIRendpoint: "",
    RequestRespondOther: false,
    RequestRespondOtherDescribe: "",
  };
  const [RequestRespondDirectSecureEmail, setRequestRespondDirectSecureEmail] =
    React.useState(initialValues.RequestRespondDirectSecureEmail);
  const [RequestRespondIHE, setRequestRespondIHE] = React.useState(
    initialValues.RequestRespondIHE
  );
  const [
    RequestRespondNationalNetworkDos,
    setRequestRespondNationalNetworkDos,
  ] = React.useState(initialValues.RequestRespondNationalNetworkDos);
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
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRequestRespondDirectSecureEmail(
      initialValues.RequestRespondDirectSecureEmail
    );
    setRequestRespondIHE(initialValues.RequestRespondIHE);
    setRequestRespondNationalNetworkDos(
      initialValues.RequestRespondNationalNetworkDos
    );
    setRequestRespondFHIR(initialValues.RequestRespondFHIR);
    setRequestRespondFHIRendpoint(initialValues.RequestRespondFHIRendpoint);
    setRequestRespondOther(initialValues.RequestRespondOther);
    setRequestRespondOtherDescribe(initialValues.RequestRespondOtherDescribe);
    setErrors({});
  };
  const validations = {
    RequestRespondDirectSecureEmail: [],
    RequestRespondIHE: [],
    RequestRespondNationalNetworkDos: [],
    RequestRespondFHIR: [],
    RequestRespondFHIRendpoint: [],
    RequestRespondOther: [],
    RequestRespondOtherDescribe: [],
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
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          RequestRespondDirectSecureEmail,
          RequestRespondIHE,
          RequestRespondNationalNetworkDos,
          RequestRespondFHIR,
          RequestRespondFHIRendpoint,
          RequestRespondOther,
          RequestRespondOtherDescribe,
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
            query: createRequestInfoDos.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "RequestInfoDosCreateForm")}
      {...rest}
    >
      <Heading
        children="By which methods are you able to respond to requests for information from other participants?"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <Text
        children="Please check all that apply:"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Text>
      <CheckboxField
        label="Direct secure email"
        name="RequestRespondDirectSecureEmail"
        value="RequestRespondDirectSecureEmail"
        isDisabled={false}
        checked={RequestRespondDirectSecureEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              RequestRespondDirectSecureEmail: value,
              RequestRespondIHE,
              RequestRespondNationalNetworkDos,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
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
      ></CheckboxField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid3")}
      >
        <CheckboxField
          label="IHE (Provide National network):"
          name="RequestRespondIHE"
          value="RequestRespondIHE"
          isDisabled={false}
          checked={RequestRespondIHE}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                RequestRespondDirectSecureEmail,
                RequestRespondIHE: value,
                RequestRespondNationalNetworkDos,
                RequestRespondFHIR,
                RequestRespondFHIRendpoint,
                RequestRespondOther,
                RequestRespondOtherDescribe,
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
        ></CheckboxField>
        <Autocomplete
          label=" "
          isRequired={false}
          isReadOnly={false}
          options={[
            {
              id: "Direct Trust",
              label: "Direct Trust",
            },
            {
              id: "CommonWell Health Alliance",
              label: "CommonWell Health Alliance",
            },
            {
              id: "eHealth Exchange",
              label: "eHealth Exchange",
            },
            {
              id: "Carequality",
              label: "Carequality",
            },
          ]}
          onSelect={({ id, label }) => {
            setRequestRespondNationalNetworkDos(id);
            runValidationTasks("RequestRespondNationalNetworkDos", id);
          }}
          onClear={() => {
            setRequestRespondNationalNetworkDos("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                RequestRespondDirectSecureEmail,
                RequestRespondIHE,
                RequestRespondNationalNetworkDos: value,
                RequestRespondFHIR,
                RequestRespondFHIRendpoint,
                RequestRespondOther,
                RequestRespondOtherDescribe,
              };
              const result = onChange(modelFields);
              value = result?.RequestRespondNationalNetworkDos ?? value;
            }
            if (errors.RequestRespondNationalNetworkDos?.hasError) {
              runValidationTasks("RequestRespondNationalNetworkDos", value);
            }
            setRequestRespondNationalNetworkDos(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "RequestRespondNationalNetworkDos",
              RequestRespondNationalNetworkDos
            )
          }
          errorMessage={errors.RequestRespondNationalNetworkDos?.errorMessage}
          hasError={errors.RequestRespondNationalNetworkDos?.hasError}
          labelHidden={false}
          {...getOverrideProps(overrides, "RequestRespondNationalNetworkDos")}
        ></Autocomplete>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid4")}
      >
        <CheckboxField
          label="FHIR (Provide endpoint):"
          name="RequestRespondFHIR"
          value="RequestRespondFHIR"
          isDisabled={false}
          checked={RequestRespondFHIR}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                RequestRespondDirectSecureEmail,
                RequestRespondIHE,
                RequestRespondNationalNetworkDos,
                RequestRespondFHIR: value,
                RequestRespondFHIRendpoint,
                RequestRespondOther,
                RequestRespondOtherDescribe,
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
        ></CheckboxField>
        <TextField
          label=" "
          isRequired={false}
          isReadOnly={false}
          value={RequestRespondFHIRendpoint}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                RequestRespondDirectSecureEmail,
                RequestRespondIHE,
                RequestRespondNationalNetworkDos,
                RequestRespondFHIR,
                RequestRespondFHIRendpoint: value,
                RequestRespondOther,
                RequestRespondOtherDescribe,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid5")}
      >
        <CheckboxField
          label="Other (Please describe):"
          name="RequestRespondOther"
          value="RequestRespondOther"
          isDisabled={false}
          checked={RequestRespondOther}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                RequestRespondDirectSecureEmail,
                RequestRespondIHE,
                RequestRespondNationalNetworkDos,
                RequestRespondFHIR,
                RequestRespondFHIRendpoint,
                RequestRespondOther: value,
                RequestRespondOtherDescribe,
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
        ></CheckboxField>
        <TextField
          label=" "
          isRequired={false}
          isReadOnly={false}
          value={RequestRespondOtherDescribe}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                RequestRespondDirectSecureEmail,
                RequestRespondIHE,
                RequestRespondNationalNetworkDos,
                RequestRespondFHIR,
                RequestRespondFHIRendpoint,
                RequestRespondOther,
                RequestRespondOtherDescribe: value,
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
