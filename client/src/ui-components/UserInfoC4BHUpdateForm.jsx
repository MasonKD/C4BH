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
import { getUserInfoC4BH } from "../graphql/queries";
import { updateUserInfoC4BH } from "../graphql/mutations";
const client = generateClient();
export default function UserInfoC4BHUpdateForm(props) {
  const {
    id: idProp,
    userInfoC4BH: userInfoC4BHModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    DxFID: undefined,
    UserIdToken: "",
  };
  const [DxFID, setDxFID] = React.useState(initialValues.DxFID);
  const [UserIdToken, setUserIdToken] = React.useState(
    initialValues.UserIdToken
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userInfoC4BHRecord
      ? { ...initialValues, ...userInfoC4BHRecord }
      : initialValues;
    setDxFID(cleanValues.DxFID);
    setUserIdToken(cleanValues.UserIdToken);
    setErrors({});
  };
  const [userInfoC4BHRecord, setUserInfoC4BHRecord] = React.useState(
    userInfoC4BHModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserInfoC4BH.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserInfoC4BH
        : userInfoC4BHModelProp;
      setUserInfoC4BHRecord(record);
    };
    queryData();
  }, [idProp, userInfoC4BHModelProp]);
  React.useEffect(resetStateValues, [userInfoC4BHRecord]);
  const validations = {
    DxFID: [],
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
          DxFID: DxFID ?? null,
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
            query: updateUserInfoC4BH.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userInfoC4BHRecord.id,
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
      {...getOverrideProps(overrides, "UserInfoC4BHUpdateForm")}
      {...rest}
    >
      <Autocomplete
        label="1. DxF Participant Dropdown"
        descriptiveText="Please choose your organization"
        isRequired={false}
        isReadOnly={false}
        options={[]}
        onSelect={({ id, label }) => {
          setDxFID(id);
          runValidationTasks("DxFID", id);
        }}
        onClear={() => {
          setDxFID("");
        }}
        defaultValue={DxFID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DxFID: value,
              UserIdToken,
            };
            const result = onChange(modelFields);
            value = result?.DxFID ?? value;
          }
          if (errors.DxFID?.hasError) {
            runValidationTasks("DxFID", value);
          }
          setDxFID(value);
        }}
        onBlur={() => runValidationTasks("DxFID", DxFID)}
        errorMessage={errors.DxFID?.errorMessage}
        hasError={errors.DxFID?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "DxFID")}
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
              DxFID,
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
