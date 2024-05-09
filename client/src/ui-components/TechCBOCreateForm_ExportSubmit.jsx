/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTechCBO } from "../graphql/mutations";
const client = generateClient();
export default function TechCBOCreateForm(props) {
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
    Customer_Management_System: "",
  };
  const [Customer_Management_System, setCustomer_Management_System] =
    React.useState(initialValues.Customer_Management_System);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCustomer_Management_System(initialValues.Customer_Management_System);
    setErrors({});
  };
  const validations = {
    Customer_Management_System: [],
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
      onSubmit={submitTechCBOCreateForm }
      {...getOverrideProps(overrides, "TechCBOCreateForm")}
      {...rest}
    >
      <TextField
        label="What is the Customer management or other electronic record system you use."
        isRequired={false}
        isReadOnly={false}
        value={Customer_Management_System}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Customer_Management_System: value,
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

export async function submitTechCBOCreateForm(event) {
        event.preventDefault();
        let modelFields = {
          Customer_Management_System,
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
            query: createTechCBO.replaceAll("__typename", ""),
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