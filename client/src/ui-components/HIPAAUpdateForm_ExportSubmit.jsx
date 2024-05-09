/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { CheckboxField, Flex, Grid, Text } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getHIPAA } from "../graphql/queries";
import { updateHIPAA } from "../graphql/mutations";
const client = generateClient();
export default function HIPAAUpdateForm(props) {
  const {
    id: idProp,
    hIPAA: hIPAAModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    CoveredHIPAA: false,
    HybridHIPAA: false,
    AssociateHIPAA: false,
    NotCoveredHIPAA: false,
  };
  const [CoveredHIPAA, setCoveredHIPAA] = React.useState(
    initialValues.CoveredHIPAA
  );
  const [HybridHIPAA, setHybridHIPAA] = React.useState(
    initialValues.HybridHIPAA
  );
  const [AssociateHIPAA, setAssociateHIPAA] = React.useState(
    initialValues.AssociateHIPAA
  );
  const [NotCoveredHIPAA, setNotCoveredHIPAA] = React.useState(
    initialValues.NotCoveredHIPAA
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = hIPAARecord
      ? { ...initialValues, ...hIPAARecord }
      : initialValues;
    setCoveredHIPAA(cleanValues.CoveredHIPAA);
    setHybridHIPAA(cleanValues.HybridHIPAA);
    setAssociateHIPAA(cleanValues.AssociateHIPAA);
    setNotCoveredHIPAA(cleanValues.NotCoveredHIPAA);
    setErrors({});
  };
  const [hIPAARecord, setHIPAARecord] = React.useState(hIPAAModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getHIPAA.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getHIPAA
        : hIPAAModelProp;
      setHIPAARecord(record);
    };
    queryData();
  }, [idProp, hIPAAModelProp]);
  React.useEffect(resetStateValues, [hIPAARecord]);
  const validations = {
    CoveredHIPAA: [],
    HybridHIPAA: [],
    AssociateHIPAA: [],
    NotCoveredHIPAA: [],
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
      onSubmit={submitHIPAAUpdateForm }
      {...getOverrideProps(overrides, "HIPAAUpdateForm")}
      {...rest}
    >
      <Text
        children="Check all that apply:"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Text>
      <CheckboxField
        label="Covered Entity"
        name="CoveredHIPAA"
        value="CoveredHIPAA"
        isDisabled={false}
        checked={CoveredHIPAA}
        defaultValue={CoveredHIPAA}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CoveredHIPAA: value,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.CoveredHIPAA ?? value;
          }
          if (errors.CoveredHIPAA?.hasError) {
            runValidationTasks("CoveredHIPAA", value);
          }
          setCoveredHIPAA(value);
        }}
        onBlur={() => runValidationTasks("CoveredHIPAA", CoveredHIPAA)}
        errorMessage={errors.CoveredHIPAA?.errorMessage}
        hasError={errors.CoveredHIPAA?.hasError}
        {...getOverrideProps(overrides, "CoveredHIPAA")}
      ></CheckboxField>
      <CheckboxField
        label="Hybrid Entity"
        name="HybridHIPAA"
        value="HybridHIPAA"
        isDisabled={false}
        checked={HybridHIPAA}
        defaultValue={HybridHIPAA}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CoveredHIPAA,
              HybridHIPAA: value,
              AssociateHIPAA,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.HybridHIPAA ?? value;
          }
          if (errors.HybridHIPAA?.hasError) {
            runValidationTasks("HybridHIPAA", value);
          }
          setHybridHIPAA(value);
        }}
        onBlur={() => runValidationTasks("HybridHIPAA", HybridHIPAA)}
        errorMessage={errors.HybridHIPAA?.errorMessage}
        hasError={errors.HybridHIPAA?.hasError}
        {...getOverrideProps(overrides, "HybridHIPAA")}
      ></CheckboxField>
      <CheckboxField
        label="Business Associate of one or more Covered Entities"
        name="AssociateHIPAA"
        value="AssociateHIPAA"
        isDisabled={false}
        checked={AssociateHIPAA}
        defaultValue={AssociateHIPAA}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA: value,
              NotCoveredHIPAA,
            };
            const result = onChange(modelFields);
            value = result?.AssociateHIPAA ?? value;
          }
          if (errors.AssociateHIPAA?.hasError) {
            runValidationTasks("AssociateHIPAA", value);
          }
          setAssociateHIPAA(value);
        }}
        onBlur={() => runValidationTasks("AssociateHIPAA", AssociateHIPAA)}
        errorMessage={errors.AssociateHIPAA?.errorMessage}
        hasError={errors.AssociateHIPAA?.hasError}
        {...getOverrideProps(overrides, "AssociateHIPAA")}
      ></CheckboxField>
      <CheckboxField
        label="Not a Covered Entity, Hybrid Entity, or Business Associate"
        name="NotCoveredHIPAA"
        value="NotCoveredHIPAA"
        isDisabled={false}
        checked={NotCoveredHIPAA}
        defaultValue={NotCoveredHIPAA}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CoveredHIPAA,
              HybridHIPAA,
              AssociateHIPAA,
              NotCoveredHIPAA: value,
            };
            const result = onChange(modelFields);
            value = result?.NotCoveredHIPAA ?? value;
          }
          if (errors.NotCoveredHIPAA?.hasError) {
            runValidationTasks("NotCoveredHIPAA", value);
          }
          setNotCoveredHIPAA(value);
        }}
        onBlur={() => runValidationTasks("NotCoveredHIPAA", NotCoveredHIPAA)}
        errorMessage={errors.NotCoveredHIPAA?.errorMessage}
        hasError={errors.NotCoveredHIPAA?.hasError}
        {...getOverrideProps(overrides, "NotCoveredHIPAA")}
      ></CheckboxField>
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

export async function submitHIPAAUpdateForm(event) {
        event.preventDefault();
        let modelFields = {
          CoveredHIPAA: CoveredHIPAA ?? null,
          HybridHIPAA: HybridHIPAA ?? null,
          AssociateHIPAA: AssociateHIPAA ?? null,
          NotCoveredHIPAA: NotCoveredHIPAA ?? null,
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
            query: updateHIPAA.replaceAll("__typename", ""),
            variables: {
              input: {
                id: hIPAARecord.id,
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
     
}