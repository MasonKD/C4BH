/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  CheckboxField,
  Divider,
  Flex,
  Grid,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getRequestInfo } from "../graphql/queries";
import { updateRequestInfo } from "../graphql/mutations";
const client = generateClient();
export default function RequestInfoUpdateForm(props) {
  const {
    id: idProp,
    requestInfo: requestInfoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    RequestRecieveDirectSecureEmail: false,
    RequestDirectEmailAddress: "",
    RequestIHE: false,
    RequestFHIR: false,
    RequestOther: false,
    RequestOtherDescribe: "",
    RequestRespondDirectSecureEmail: false,
    RequestRespondIHE: false,
    RequestRespondFHIR: false,
    RequestRespondFHIRendpoint: "",
    RequestRespondOther: false,
    RequestRespondOtherDescribe: "",
  };
  const [RequestRecieveDirectSecureEmail, setRequestRecieveDirectSecureEmail] =
    React.useState(initialValues.RequestRecieveDirectSecureEmail);
  const [RequestDirectEmailAddress, setRequestDirectEmailAddress] =
    React.useState(initialValues.RequestDirectEmailAddress);
  const [RequestIHE, setRequestIHE] = React.useState(initialValues.RequestIHE);
  const [RequestFHIR, setRequestFHIR] = React.useState(
    initialValues.RequestFHIR
  );
  const [RequestOther, setRequestOther] = React.useState(
    initialValues.RequestOther
  );
  const [RequestOtherDescribe, setRequestOtherDescribe] = React.useState(
    initialValues.RequestOtherDescribe
  );
  const [RequestRespondDirectSecureEmail, setRequestRespondDirectSecureEmail] =
    React.useState(initialValues.RequestRespondDirectSecureEmail);
  const [RequestRespondIHE, setRequestRespondIHE] = React.useState(
    initialValues.RequestRespondIHE
  );
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
    const cleanValues = requestInfoRecord
      ? { ...initialValues, ...requestInfoRecord }
      : initialValues;
    setRequestRecieveDirectSecureEmail(
      cleanValues.RequestRecieveDirectSecureEmail
    );
    setRequestDirectEmailAddress(cleanValues.RequestDirectEmailAddress);
    setRequestIHE(cleanValues.RequestIHE);
    setRequestFHIR(cleanValues.RequestFHIR);
    setRequestOther(cleanValues.RequestOther);
    setRequestOtherDescribe(cleanValues.RequestOtherDescribe);
    setRequestRespondDirectSecureEmail(
      cleanValues.RequestRespondDirectSecureEmail
    );
    setRequestRespondIHE(cleanValues.RequestRespondIHE);
    setRequestRespondFHIR(cleanValues.RequestRespondFHIR);
    setRequestRespondFHIRendpoint(cleanValues.RequestRespondFHIRendpoint);
    setRequestRespondOther(cleanValues.RequestRespondOther);
    setRequestRespondOtherDescribe(cleanValues.RequestRespondOtherDescribe);
    setErrors({});
  };
  const [requestInfoRecord, setRequestInfoRecord] =
    React.useState(requestInfoModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getRequestInfo.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRequestInfo
        : requestInfoModelProp;
      setRequestInfoRecord(record);
    };
    queryData();
  }, [idProp, requestInfoModelProp]);
  React.useEffect(resetStateValues, [requestInfoRecord]);
  const validations = {
    RequestRecieveDirectSecureEmail: [],
    RequestDirectEmailAddress: [],
    RequestIHE: [],
    RequestFHIR: [],
    RequestOther: [],
    RequestOtherDescribe: [],
    RequestRespondDirectSecureEmail: [],
    RequestRespondIHE: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          RequestRecieveDirectSecureEmail:
            RequestRecieveDirectSecureEmail ?? null,
          RequestDirectEmailAddress: RequestDirectEmailAddress ?? null,
          RequestIHE: RequestIHE ?? null,
          RequestFHIR: RequestFHIR ?? null,
          RequestOther: RequestOther ?? null,
          RequestOtherDescribe: RequestOtherDescribe ?? null,
          RequestRespondDirectSecureEmail:
            RequestRespondDirectSecureEmail ?? null,
          RequestRespondIHE: RequestRespondIHE ?? null,
          RequestRespondFHIR: RequestRespondFHIR ?? null,
          RequestRespondFHIRendpoint: RequestRespondFHIRendpoint ?? null,
          RequestRespondOther: RequestRespondOther ?? null,
          RequestRespondOtherDescribe: RequestRespondOtherDescribe ?? null,
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
            query: updateRequestInfo.replaceAll("__typename", ""),
            variables: {
              input: {
                id: requestInfoRecord.id,
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
      {...getOverrideProps(overrides, "RequestInfoUpdateForm")}
      {...rest}
    >
      <Text
        children="1. Requesting Information: In what way(s) do you request information from other participants? Please check all that apply."
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid1")}
      >
        <CheckboxField
          label="Direct Secure Email: Provide direct secure email address"
          name="RequestRecieveDirectSecureEmail"
          value="RequestRecieveDirectSecureEmail"
          isDisabled={false}
          checked={RequestRecieveDirectSecureEmail}
          defaultValue={RequestRecieveDirectSecureEmail}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                RequestRecieveDirectSecureEmail: value,
                RequestDirectEmailAddress,
                RequestIHE,
                RequestFHIR,
                RequestOther,
                RequestOtherDescribe,
                RequestRespondDirectSecureEmail,
                RequestRespondIHE,
                RequestRespondFHIR,
                RequestRespondFHIRendpoint,
                RequestRespondOther,
                RequestRespondOtherDescribe,
              };
              const result = onChange(modelFields);
              value = result?.RequestRecieveDirectSecureEmail ?? value;
            }
            if (errors.RequestRecieveDirectSecureEmail?.hasError) {
              runValidationTasks("RequestRecieveDirectSecureEmail", value);
            }
            setRequestRecieveDirectSecureEmail(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "RequestRecieveDirectSecureEmail",
              RequestRecieveDirectSecureEmail
            )
          }
          errorMessage={errors.RequestRecieveDirectSecureEmail?.errorMessage}
          hasError={errors.RequestRecieveDirectSecureEmail?.hasError}
          {...getOverrideProps(overrides, "RequestRecieveDirectSecureEmail")}
        ></CheckboxField>
        <TextField
          label=" "
          isRequired={false}
          isReadOnly={false}
          value={RequestDirectEmailAddress}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                RequestRecieveDirectSecureEmail,
                RequestDirectEmailAddress: value,
                RequestIHE,
                RequestFHIR,
                RequestOther,
                RequestOtherDescribe,
                RequestRespondDirectSecureEmail,
                RequestRespondIHE,
                RequestRespondFHIR,
                RequestRespondFHIRendpoint,
                RequestRespondOther,
                RequestRespondOtherDescribe,
              };
              const result = onChange(modelFields);
              value = result?.RequestDirectEmailAddress ?? value;
            }
            if (errors.RequestDirectEmailAddress?.hasError) {
              runValidationTasks("RequestDirectEmailAddress", value);
            }
            setRequestDirectEmailAddress(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "RequestDirectEmailAddress",
              RequestDirectEmailAddress
            )
          }
          errorMessage={errors.RequestDirectEmailAddress?.errorMessage}
          hasError={errors.RequestDirectEmailAddress?.hasError}
          {...getOverrideProps(overrides, "RequestDirectEmailAddress")}
        ></TextField>
      </Grid>
      <CheckboxField
        label="IHE"
        name="RequestIHE"
        value="RequestIHE"
        isDisabled={false}
        checked={RequestIHE}
        defaultValue={RequestIHE}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE: value,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
            };
            const result = onChange(modelFields);
            value = result?.RequestIHE ?? value;
          }
          if (errors.RequestIHE?.hasError) {
            runValidationTasks("RequestIHE", value);
          }
          setRequestIHE(value);
        }}
        onBlur={() => runValidationTasks("RequestIHE", RequestIHE)}
        errorMessage={errors.RequestIHE?.errorMessage}
        hasError={errors.RequestIHE?.hasError}
        {...getOverrideProps(overrides, "RequestIHE")}
      ></CheckboxField>
      <CheckboxField
        label="FHIR"
        name="RequestFHIR"
        value="RequestFHIR"
        isDisabled={false}
        checked={RequestFHIR}
        defaultValue={RequestFHIR}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR: value,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE,
              RequestRespondFHIR,
              RequestRespondFHIRendpoint,
              RequestRespondOther,
              RequestRespondOtherDescribe,
            };
            const result = onChange(modelFields);
            value = result?.RequestFHIR ?? value;
          }
          if (errors.RequestFHIR?.hasError) {
            runValidationTasks("RequestFHIR", value);
          }
          setRequestFHIR(value);
        }}
        onBlur={() => runValidationTasks("RequestFHIR", RequestFHIR)}
        errorMessage={errors.RequestFHIR?.errorMessage}
        hasError={errors.RequestFHIR?.hasError}
        {...getOverrideProps(overrides, "RequestFHIR")}
      ></CheckboxField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid4")}
      >
        <CheckboxField
          label="Other, please describe"
          name="RequestOther"
          value="RequestOther"
          isDisabled={false}
          checked={RequestOther}
          defaultValue={RequestOther}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                RequestRecieveDirectSecureEmail,
                RequestDirectEmailAddress,
                RequestIHE,
                RequestFHIR,
                RequestOther: value,
                RequestOtherDescribe,
                RequestRespondDirectSecureEmail,
                RequestRespondIHE,
                RequestRespondFHIR,
                RequestRespondFHIRendpoint,
                RequestRespondOther,
                RequestRespondOtherDescribe,
              };
              const result = onChange(modelFields);
              value = result?.RequestOther ?? value;
            }
            if (errors.RequestOther?.hasError) {
              runValidationTasks("RequestOther", value);
            }
            setRequestOther(value);
          }}
          onBlur={() => runValidationTasks("RequestOther", RequestOther)}
          errorMessage={errors.RequestOther?.errorMessage}
          hasError={errors.RequestOther?.hasError}
          {...getOverrideProps(overrides, "RequestOther")}
        ></CheckboxField>
        <TextField
          label=" "
          isRequired={false}
          isReadOnly={false}
          value={RequestOtherDescribe}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                RequestRecieveDirectSecureEmail,
                RequestDirectEmailAddress,
                RequestIHE,
                RequestFHIR,
                RequestOther,
                RequestOtherDescribe: value,
                RequestRespondDirectSecureEmail,
                RequestRespondIHE,
                RequestRespondFHIR,
                RequestRespondFHIRendpoint,
                RequestRespondOther,
                RequestRespondOtherDescribe,
              };
              const result = onChange(modelFields);
              value = result?.RequestOtherDescribe ?? value;
            }
            if (errors.RequestOtherDescribe?.hasError) {
              runValidationTasks("RequestOtherDescribe", value);
            }
            setRequestOtherDescribe(value);
          }}
          onBlur={() =>
            runValidationTasks("RequestOtherDescribe", RequestOtherDescribe)
          }
          errorMessage={errors.RequestOtherDescribe?.errorMessage}
          hasError={errors.RequestOtherDescribe?.hasError}
          {...getOverrideProps(overrides, "RequestOtherDescribe")}
        ></TextField>
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Divider>
      <Text
        children="2. Responding to Requests for Information: In what way(s) do you respond to requests for information from other participants? Please check all that apply."
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Text>
      <CheckboxField
        label="Direct Secure Email"
        name="RequestRespondDirectSecureEmail"
        value="RequestRespondDirectSecureEmail"
        isDisabled={false}
        checked={RequestRespondDirectSecureEmail}
        defaultValue={RequestRespondDirectSecureEmail}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail: value,
              RequestRespondIHE,
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
      <CheckboxField
        label="IHE"
        name="RequestRespondIHE"
        value="RequestRespondIHE"
        isDisabled={false}
        checked={RequestRespondIHE}
        defaultValue={RequestRespondIHE}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              RequestRecieveDirectSecureEmail,
              RequestDirectEmailAddress,
              RequestIHE,
              RequestFHIR,
              RequestOther,
              RequestOtherDescribe,
              RequestRespondDirectSecureEmail,
              RequestRespondIHE: value,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid9")}
      >
        <CheckboxField
          label="FHIR: Type out endpoint"
          name="RequestRespondFHIR"
          value="RequestRespondFHIR"
          isDisabled={false}
          checked={RequestRespondFHIR}
          defaultValue={RequestRespondFHIR}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                RequestRecieveDirectSecureEmail,
                RequestDirectEmailAddress,
                RequestIHE,
                RequestFHIR,
                RequestOther,
                RequestOtherDescribe,
                RequestRespondDirectSecureEmail,
                RequestRespondIHE,
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
                RequestRecieveDirectSecureEmail,
                RequestDirectEmailAddress,
                RequestIHE,
                RequestFHIR,
                RequestOther,
                RequestOtherDescribe,
                RequestRespondDirectSecureEmail,
                RequestRespondIHE,
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
        {...getOverrideProps(overrides, "RowGrid10")}
      >
        <CheckboxField
          label="Other, please describe"
          name="RequestRespondOther"
          value="RequestRespondOther"
          isDisabled={false}
          checked={RequestRespondOther}
          defaultValue={RequestRespondOther}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                RequestRecieveDirectSecureEmail,
                RequestDirectEmailAddress,
                RequestIHE,
                RequestFHIR,
                RequestOther,
                RequestOtherDescribe,
                RequestRespondDirectSecureEmail,
                RequestRespondIHE,
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
                RequestRecieveDirectSecureEmail,
                RequestDirectEmailAddress,
                RequestIHE,
                RequestFHIR,
                RequestOther,
                RequestOtherDescribe,
                RequestRespondDirectSecureEmail,
                RequestRespondIHE,
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
