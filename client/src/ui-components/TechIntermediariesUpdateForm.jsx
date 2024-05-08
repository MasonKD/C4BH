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
import { getTechIntermediaries } from "../graphql/queries";
import { updateTechIntermediaries } from "../graphql/mutations";
const client = generateClient();
export default function TechIntermediariesUpdateForm(props) {
  const {
    id: idProp,
    techIntermediaries: techIntermediariesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    HIE_or_Inter: "",
  };
  const [HIE_or_Inter, setHIE_or_Inter] = React.useState(
    initialValues.HIE_or_Inter
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = techIntermediariesRecord
      ? { ...initialValues, ...techIntermediariesRecord }
      : initialValues;
    setHIE_or_Inter(cleanValues.HIE_or_Inter);
    setErrors({});
  };
  const [techIntermediariesRecord, setTechIntermediariesRecord] =
    React.useState(techIntermediariesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTechIntermediaries.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTechIntermediaries
        : techIntermediariesModelProp;
      setTechIntermediariesRecord(record);
    };
    queryData();
  }, [idProp, techIntermediariesModelProp]);
  React.useEffect(resetStateValues, [techIntermediariesRecord]);
  const validations = {
    HIE_or_Inter: [],
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
          HIE_or_Inter: HIE_or_Inter ?? null,
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
            query: updateTechIntermediaries.replaceAll("__typename", ""),
            variables: {
              input: {
                id: techIntermediariesRecord.id,
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
      {...getOverrideProps(overrides, "TechIntermediariesUpdateForm")}
      {...rest}
    >
      <TextField
        label="What is the Health Information Exchange or Interoperability platform you use."
        isRequired={false}
        isReadOnly={false}
        value={HIE_or_Inter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              HIE_or_Inter: value,
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
