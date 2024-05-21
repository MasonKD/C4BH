/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Autocomplete, Flex, Grid, Heading } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTechIntermediaries } from "../graphql/mutations";
const client = generateClient();
export default function TechIntermediariesCreateForm(props) {
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
    IntIntegrationEngineUsed: undefined,
    IntClinicalDataRepoUsed: undefined,
  };
  const [IntIntegrationEngineUsed, setIntIntegrationEngineUsed] =
    React.useState(initialValues.IntIntegrationEngineUsed);
  const [IntClinicalDataRepoUsed, setIntClinicalDataRepoUsed] = React.useState(
    initialValues.IntClinicalDataRepoUsed
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIntIntegrationEngineUsed(initialValues.IntIntegrationEngineUsed);
    setIntClinicalDataRepoUsed(initialValues.IntClinicalDataRepoUsed);
    setErrors({});
  };
  const validations = {
    IntIntegrationEngineUsed: [{ type: "Required" }],
    IntClinicalDataRepoUsed: [{ type: "Required" }],
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
          IntIntegrationEngineUsed,
          IntClinicalDataRepoUsed,
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
            query: createTechIntermediaries.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "TechIntermediariesCreateForm")}
      {...rest}
    >
      <Heading
        children="What Integration Engine and Clinical Data Repositoy do you use?"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <Autocomplete
        label="Integration Engine used (if not listed, please type it out)"
        isRequired={true}
        isReadOnly={false}
        options={[
          {
            id: "Intersystems",
            label: "Intersystems",
          },
          {
            id: "Mirth/NextGen",
            label: "Mirth/NextGen",
          },
          {
            id: "Salesforce",
            label: "Salesforce",
          },
        ]}
        onSelect={({ id, label }) => {
          setIntIntegrationEngineUsed(id);
          runValidationTasks("IntIntegrationEngineUsed", id);
        }}
        onClear={() => {
          setIntIntegrationEngineUsed("");
        }}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IntIntegrationEngineUsed: value,
              IntClinicalDataRepoUsed,
            };
            const result = onChange(modelFields);
            value = result?.IntIntegrationEngineUsed ?? value;
          }
          if (errors.IntIntegrationEngineUsed?.hasError) {
            runValidationTasks("IntIntegrationEngineUsed", value);
          }
          setIntIntegrationEngineUsed(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "IntIntegrationEngineUsed",
            IntIntegrationEngineUsed
          )
        }
        errorMessage={errors.IntIntegrationEngineUsed?.errorMessage}
        hasError={errors.IntIntegrationEngineUsed?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "IntIntegrationEngineUsed")}
      ></Autocomplete>
      <Autocomplete
        label="Clinical Data Repository used (if not listed, please type it out)"
        isRequired={true}
        isReadOnly={false}
        options={[
          {
            id: "Smile",
            label: "Smile",
          },
        ]}
        onSelect={({ id, label }) => {
          setIntClinicalDataRepoUsed(id);
          runValidationTasks("IntClinicalDataRepoUsed", id);
        }}
        onClear={() => {
          setIntClinicalDataRepoUsed("");
        }}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              IntIntegrationEngineUsed,
              IntClinicalDataRepoUsed: value,
            };
            const result = onChange(modelFields);
            value = result?.IntClinicalDataRepoUsed ?? value;
          }
          if (errors.IntClinicalDataRepoUsed?.hasError) {
            runValidationTasks("IntClinicalDataRepoUsed", value);
          }
          setIntClinicalDataRepoUsed(value);
        }}
        onBlur={() =>
          runValidationTasks("IntClinicalDataRepoUsed", IntClinicalDataRepoUsed)
        }
        errorMessage={errors.IntClinicalDataRepoUsed?.errorMessage}
        hasError={errors.IntClinicalDataRepoUsed?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "IntClinicalDataRepoUsed")}
      ></Autocomplete>
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
