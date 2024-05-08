/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Autocomplete, Flex, Grid } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createTechAcute } from "../graphql/mutations";
const client = generateClient();
export default function TechAcuteCreateForm(props) {
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
    EHR_Vendors: undefined,
  };
  const [EHR_Vendors, setEHR_Vendors] = React.useState(
    initialValues.EHR_Vendors
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEHR_Vendors(initialValues.EHR_Vendors);
    setErrors({});
  };
  const validations = {
    EHR_Vendors: [],
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
          EHR_Vendors,
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
            query: createTechAcute.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "TechAcuteCreateForm")}
      {...rest}
    >
      <Autocomplete
        label="EHR Vendors"
        descriptiveText="If your EHR vendor isn't appearing in the autocomplete, you can manually enter your specific vendor."
        isRequired={false}
        isReadOnly={false}
        options={[
          {
            id: "EPIC",
            label: "EPIC",
          },
          {
            id: "Cerner",
            label: "Cerner",
          },
          {
            id: "Meditech",
            label: "Meditech",
          },
          {
            id: "Athenahealth",
            label: "Athenahealth",
          },
          {
            id: "eClinical Works",
            label: "eClinical Works",
          },
          {
            id: "Allscripts/Veradigm",
            label: "Allscripts/Veradigm",
          },
          {
            id: "NextGen",
            label: "NextGen",
          },
          {
            id: "None",
            label: "None",
          },
        ]}
        onSelect={({ id, label }) => {
          setEHR_Vendors(id);
          runValidationTasks("EHR_Vendors", id);
        }}
        onClear={() => {
          setEHR_Vendors("");
        }}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EHR_Vendors: value,
            };
            const result = onChange(modelFields);
            value = result?.EHR_Vendors ?? value;
          }
          if (errors.EHR_Vendors?.hasError) {
            runValidationTasks("EHR_Vendors", value);
          }
          setEHR_Vendors(value);
        }}
        onBlur={() => runValidationTasks("EHR_Vendors", EHR_Vendors)}
        errorMessage={errors.EHR_Vendors?.errorMessage}
        hasError={errors.EHR_Vendors?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "EHR_Vendors")}
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
