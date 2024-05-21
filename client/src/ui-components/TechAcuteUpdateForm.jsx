/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Autocomplete, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTechAcute } from "../graphql/queries";
import { updateTechAcute } from "../graphql/mutations";
const client = generateClient();
export default function TechAcuteUpdateForm(props) {
  const {
    id: idProp,
    techAcute: techAcuteModelProp,
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
    UserIdToken: "",
  };
  const [EHR_Vendors, setEHR_Vendors] = React.useState(
    initialValues.EHR_Vendors
  );
  const [UserIdToken, setUserIdToken] = React.useState(
    initialValues.UserIdToken
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = techAcuteRecord
      ? { ...initialValues, ...techAcuteRecord }
      : initialValues;
    setEHR_Vendors(cleanValues.EHR_Vendors);
    setUserIdToken(cleanValues.UserIdToken);
    setErrors({});
  };
  const [techAcuteRecord, setTechAcuteRecord] =
    React.useState(techAcuteModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTechAcute.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTechAcute
        : techAcuteModelProp;
      setTechAcuteRecord(record);
    };
    queryData();
  }, [idProp, techAcuteModelProp]);
  React.useEffect(resetStateValues, [techAcuteRecord]);
  const validations = {
    EHR_Vendors: [],
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
          EHR_Vendors: EHR_Vendors ?? null,
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
            query: updateTechAcute.replaceAll("__typename", ""),
            variables: {
              input: {
                id: techAcuteRecord.id,
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
      {...getOverrideProps(overrides, "TechAcuteUpdateForm")}
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
        defaultValue={EHR_Vendors}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EHR_Vendors: value,
              UserIdToken,
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
      <TextField
        label="User id token"
        isRequired={false}
        isReadOnly={false}
        value={UserIdToken}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              EHR_Vendors,
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
