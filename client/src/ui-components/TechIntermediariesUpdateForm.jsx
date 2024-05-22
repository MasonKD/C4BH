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
    IntIntegrationEngineUsed: "",
    IntClinicalDataRepoUsed: "",
    UserIdToken: "",
  };
  const [HIE_or_Inter, setHIE_or_Inter] = React.useState(
    initialValues.HIE_or_Inter
  );
  const [IntIntegrationEngineUsed, setIntIntegrationEngineUsed] =
    React.useState(initialValues.IntIntegrationEngineUsed);
  const [IntClinicalDataRepoUsed, setIntClinicalDataRepoUsed] = React.useState(
    initialValues.IntClinicalDataRepoUsed
  );
  const [UserIdToken, setUserIdToken] = React.useState(
    initialValues.UserIdToken
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = techIntermediariesRecord
      ? { ...initialValues, ...techIntermediariesRecord }
      : initialValues;
    setHIE_or_Inter(cleanValues.HIE_or_Inter);
    setIntIntegrationEngineUsed(cleanValues.IntIntegrationEngineUsed);
    setIntClinicalDataRepoUsed(cleanValues.IntClinicalDataRepoUsed);
    setUserIdToken(cleanValues.UserIdToken);
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
    IntIntegrationEngineUsed: [],
    IntClinicalDataRepoUsed: [],
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
          HIE_or_Inter: HIE_or_Inter ?? null,
          IntIntegrationEngineUsed: IntIntegrationEngineUsed ?? null,
          IntClinicalDataRepoUsed: IntClinicalDataRepoUsed ?? null,
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
          const modelFieldsToSave = {
            IntIntegrationEngineUsed:
              modelFields.IntIntegrationEngineUsed ?? null,
            IntClinicalDataRepoUsed:
              modelFields.IntClinicalDataRepoUsed ?? null,
            UserIdToken: modelFields.UserIdToken ?? null,
          };
          await client.graphql({
            query: updateTechIntermediaries.replaceAll("__typename", ""),
            variables: {
              input: {
                id: techIntermediariesRecord.id,
                ...modelFieldsToSave,
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
        value={HIE_or_Inter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              HIE_or_Inter: value,
              IntIntegrationEngineUsed,
              IntClinicalDataRepoUsed,
              UserIdToken,
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
      <TextField
        label="Int integration engine used"
        isRequired={false}
        isReadOnly={false}
        value={IntIntegrationEngineUsed}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              HIE_or_Inter,
              IntIntegrationEngineUsed: value,
              IntClinicalDataRepoUsed,
              UserIdToken,
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
        {...getOverrideProps(overrides, "IntIntegrationEngineUsed")}
      ></TextField>
      <TextField
        label="Int clinical data repo used"
        isRequired={false}
        isReadOnly={false}
        value={IntClinicalDataRepoUsed}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              HIE_or_Inter,
              IntIntegrationEngineUsed,
              IntClinicalDataRepoUsed: value,
              UserIdToken,
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
        {...getOverrideProps(overrides, "IntClinicalDataRepoUsed")}
      ></TextField>
      <TextField
        label="User id token"
        isRequired={false}
        isReadOnly={false}
        value={UserIdToken}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              HIE_or_Inter,
              IntIntegrationEngineUsed,
              IntClinicalDataRepoUsed,
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
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        ></Flex>
      </Flex>
    </Grid>
  );
}
