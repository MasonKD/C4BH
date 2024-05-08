/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  CheckboxField,
  Flex,
  Grid,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getNotificationsADTUno } from "../graphql/queries";
import { updateNotificationsADTUno } from "../graphql/mutations";
const client = generateClient();
export default function NotificationsADTUnoUpdateForm(props) {
  const {
    id: idProp,
    notificationsADTUno: notificationsADTUnoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ReceiveADTDirectSecureEmail: false,
    ReceiveADTDirectEmailAddress: "",
    ReceiveADTsFTP: false,
    ReceiveADTPointToPoint: false,
    ReceiveADTHTTPSnonFHIR: false,
    ReceiveADTHTTPSFHIR: false,
    ReceiveADTHTTPSEndpoint: "",
    ReceiveADTOther: false,
    ReceiveADTOtherDescription: "",
  };
  const [ReceiveADTDirectSecureEmail, setReceiveADTDirectSecureEmail] =
    React.useState(initialValues.ReceiveADTDirectSecureEmail);
  const [ReceiveADTDirectEmailAddress, setReceiveADTDirectEmailAddress] =
    React.useState(initialValues.ReceiveADTDirectEmailAddress);
  const [ReceiveADTsFTP, setReceiveADTsFTP] = React.useState(
    initialValues.ReceiveADTsFTP
  );
  const [ReceiveADTPointToPoint, setReceiveADTPointToPoint] = React.useState(
    initialValues.ReceiveADTPointToPoint
  );
  const [ReceiveADTHTTPSnonFHIR, setReceiveADTHTTPSnonFHIR] = React.useState(
    initialValues.ReceiveADTHTTPSnonFHIR
  );
  const [ReceiveADTHTTPSFHIR, setReceiveADTHTTPSFHIR] = React.useState(
    initialValues.ReceiveADTHTTPSFHIR
  );
  const [ReceiveADTHTTPSEndpoint, setReceiveADTHTTPSEndpoint] = React.useState(
    initialValues.ReceiveADTHTTPSEndpoint
  );
  const [ReceiveADTOther, setReceiveADTOther] = React.useState(
    initialValues.ReceiveADTOther
  );
  const [ReceiveADTOtherDescription, setReceiveADTOtherDescription] =
    React.useState(initialValues.ReceiveADTOtherDescription);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = notificationsADTUnoRecord
      ? { ...initialValues, ...notificationsADTUnoRecord }
      : initialValues;
    setReceiveADTDirectSecureEmail(cleanValues.ReceiveADTDirectSecureEmail);
    setReceiveADTDirectEmailAddress(cleanValues.ReceiveADTDirectEmailAddress);
    setReceiveADTsFTP(cleanValues.ReceiveADTsFTP);
    setReceiveADTPointToPoint(cleanValues.ReceiveADTPointToPoint);
    setReceiveADTHTTPSnonFHIR(cleanValues.ReceiveADTHTTPSnonFHIR);
    setReceiveADTHTTPSFHIR(cleanValues.ReceiveADTHTTPSFHIR);
    setReceiveADTHTTPSEndpoint(cleanValues.ReceiveADTHTTPSEndpoint);
    setReceiveADTOther(cleanValues.ReceiveADTOther);
    setReceiveADTOtherDescription(cleanValues.ReceiveADTOtherDescription);
    setErrors({});
  };
  const [notificationsADTUnoRecord, setNotificationsADTUnoRecord] =
    React.useState(notificationsADTUnoModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getNotificationsADTUno.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNotificationsADTUno
        : notificationsADTUnoModelProp;
      setNotificationsADTUnoRecord(record);
    };
    queryData();
  }, [idProp, notificationsADTUnoModelProp]);
  React.useEffect(resetStateValues, [notificationsADTUnoRecord]);
  const validations = {
    ReceiveADTDirectSecureEmail: [],
    ReceiveADTDirectEmailAddress: [],
    ReceiveADTsFTP: [],
    ReceiveADTPointToPoint: [],
    ReceiveADTHTTPSnonFHIR: [],
    ReceiveADTHTTPSFHIR: [],
    ReceiveADTHTTPSEndpoint: [],
    ReceiveADTOther: [],
    ReceiveADTOtherDescription: [],
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
          ReceiveADTDirectSecureEmail: ReceiveADTDirectSecureEmail ?? null,
          ReceiveADTDirectEmailAddress: ReceiveADTDirectEmailAddress ?? null,
          ReceiveADTsFTP: ReceiveADTsFTP ?? null,
          ReceiveADTPointToPoint: ReceiveADTPointToPoint ?? null,
          ReceiveADTHTTPSnonFHIR: ReceiveADTHTTPSnonFHIR ?? null,
          ReceiveADTHTTPSFHIR: ReceiveADTHTTPSFHIR ?? null,
          ReceiveADTHTTPSEndpoint: ReceiveADTHTTPSEndpoint ?? null,
          ReceiveADTOther: ReceiveADTOther ?? null,
          ReceiveADTOtherDescription: ReceiveADTOtherDescription ?? null,
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
            query: updateNotificationsADTUno.replaceAll("__typename", ""),
            variables: {
              input: {
                id: notificationsADTUnoRecord.id,
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
      {...getOverrideProps(overrides, "NotificationsADTUnoUpdateForm")}
      {...rest}
    >
      <Text
        children="1. Receiving ADT Notifications: By which methods are you able to receive ADT notifications? Please check all that apply."
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
          name="ReceiveADTDirectSecureEmail"
          value="ReceiveADTDirectSecureEmail"
          isDisabled={false}
          checked={ReceiveADTDirectSecureEmail}
          defaultValue={ReceiveADTDirectSecureEmail}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                ReceiveADTDirectSecureEmail: value,
                ReceiveADTDirectEmailAddress,
                ReceiveADTsFTP,
                ReceiveADTPointToPoint,
                ReceiveADTHTTPSnonFHIR,
                ReceiveADTHTTPSFHIR,
                ReceiveADTHTTPSEndpoint,
                ReceiveADTOther,
                ReceiveADTOtherDescription,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveADTDirectSecureEmail ?? value;
            }
            if (errors.ReceiveADTDirectSecureEmail?.hasError) {
              runValidationTasks("ReceiveADTDirectSecureEmail", value);
            }
            setReceiveADTDirectSecureEmail(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "ReceiveADTDirectSecureEmail",
              ReceiveADTDirectSecureEmail
            )
          }
          errorMessage={errors.ReceiveADTDirectSecureEmail?.errorMessage}
          hasError={errors.ReceiveADTDirectSecureEmail?.hasError}
          {...getOverrideProps(overrides, "ReceiveADTDirectSecureEmail")}
        ></CheckboxField>
        <TextField
          label=" "
          isRequired={false}
          isReadOnly={false}
          value={ReceiveADTDirectEmailAddress}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                ReceiveADTDirectSecureEmail,
                ReceiveADTDirectEmailAddress: value,
                ReceiveADTsFTP,
                ReceiveADTPointToPoint,
                ReceiveADTHTTPSnonFHIR,
                ReceiveADTHTTPSFHIR,
                ReceiveADTHTTPSEndpoint,
                ReceiveADTOther,
                ReceiveADTOtherDescription,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveADTDirectEmailAddress ?? value;
            }
            if (errors.ReceiveADTDirectEmailAddress?.hasError) {
              runValidationTasks("ReceiveADTDirectEmailAddress", value);
            }
            setReceiveADTDirectEmailAddress(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "ReceiveADTDirectEmailAddress",
              ReceiveADTDirectEmailAddress
            )
          }
          errorMessage={errors.ReceiveADTDirectEmailAddress?.errorMessage}
          hasError={errors.ReceiveADTDirectEmailAddress?.hasError}
          {...getOverrideProps(overrides, "ReceiveADTDirectEmailAddress")}
        ></TextField>
      </Grid>
      <CheckboxField
        label="sFTP"
        name="ReceiveADTsFTP"
        value="ReceiveADTsFTP"
        isDisabled={false}
        checked={ReceiveADTsFTP}
        defaultValue={ReceiveADTsFTP}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP: value,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
            };
            const result = onChange(modelFields);
            value = result?.ReceiveADTsFTP ?? value;
          }
          if (errors.ReceiveADTsFTP?.hasError) {
            runValidationTasks("ReceiveADTsFTP", value);
          }
          setReceiveADTsFTP(value);
        }}
        onBlur={() => runValidationTasks("ReceiveADTsFTP", ReceiveADTsFTP)}
        errorMessage={errors.ReceiveADTsFTP?.errorMessage}
        hasError={errors.ReceiveADTsFTP?.hasError}
        {...getOverrideProps(overrides, "ReceiveADTsFTP")}
      ></CheckboxField>
      <CheckboxField
        label="Point to Point (i.e. MLLP/VPN, etc.)"
        name="ReceiveADTPointToPoint"
        value="ReceiveADTPointToPoint"
        isDisabled={false}
        checked={ReceiveADTPointToPoint}
        defaultValue={ReceiveADTPointToPoint}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint: value,
              ReceiveADTHTTPSnonFHIR,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
            };
            const result = onChange(modelFields);
            value = result?.ReceiveADTPointToPoint ?? value;
          }
          if (errors.ReceiveADTPointToPoint?.hasError) {
            runValidationTasks("ReceiveADTPointToPoint", value);
          }
          setReceiveADTPointToPoint(value);
        }}
        onBlur={() =>
          runValidationTasks("ReceiveADTPointToPoint", ReceiveADTPointToPoint)
        }
        errorMessage={errors.ReceiveADTPointToPoint?.errorMessage}
        hasError={errors.ReceiveADTPointToPoint?.hasError}
        {...getOverrideProps(overrides, "ReceiveADTPointToPoint")}
      ></CheckboxField>
      <CheckboxField
        label="HTTPS  - non-FHIR (web services, API, etc.)"
        name="ReceiveADTHTTPSnonFHIR"
        value="ReceiveADTHTTPSnonFHIR"
        isDisabled={false}
        checked={ReceiveADTHTTPSnonFHIR}
        defaultValue={ReceiveADTHTTPSnonFHIR}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ReceiveADTDirectSecureEmail,
              ReceiveADTDirectEmailAddress,
              ReceiveADTsFTP,
              ReceiveADTPointToPoint,
              ReceiveADTHTTPSnonFHIR: value,
              ReceiveADTHTTPSFHIR,
              ReceiveADTHTTPSEndpoint,
              ReceiveADTOther,
              ReceiveADTOtherDescription,
            };
            const result = onChange(modelFields);
            value = result?.ReceiveADTHTTPSnonFHIR ?? value;
          }
          if (errors.ReceiveADTHTTPSnonFHIR?.hasError) {
            runValidationTasks("ReceiveADTHTTPSnonFHIR", value);
          }
          setReceiveADTHTTPSnonFHIR(value);
        }}
        onBlur={() =>
          runValidationTasks("ReceiveADTHTTPSnonFHIR", ReceiveADTHTTPSnonFHIR)
        }
        errorMessage={errors.ReceiveADTHTTPSnonFHIR?.errorMessage}
        hasError={errors.ReceiveADTHTTPSnonFHIR?.hasError}
        {...getOverrideProps(overrides, "ReceiveADTHTTPSnonFHIR")}
      ></CheckboxField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid5")}
      >
        <CheckboxField
          label="HTTPS - FHIR: Please enter endpoint"
          name="ReceiveADTHTTPSFHIR"
          value="ReceiveADTHTTPSFHIR"
          isDisabled={false}
          checked={ReceiveADTHTTPSFHIR}
          defaultValue={ReceiveADTHTTPSFHIR}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                ReceiveADTDirectSecureEmail,
                ReceiveADTDirectEmailAddress,
                ReceiveADTsFTP,
                ReceiveADTPointToPoint,
                ReceiveADTHTTPSnonFHIR,
                ReceiveADTHTTPSFHIR: value,
                ReceiveADTHTTPSEndpoint,
                ReceiveADTOther,
                ReceiveADTOtherDescription,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveADTHTTPSFHIR ?? value;
            }
            if (errors.ReceiveADTHTTPSFHIR?.hasError) {
              runValidationTasks("ReceiveADTHTTPSFHIR", value);
            }
            setReceiveADTHTTPSFHIR(value);
          }}
          onBlur={() =>
            runValidationTasks("ReceiveADTHTTPSFHIR", ReceiveADTHTTPSFHIR)
          }
          errorMessage={errors.ReceiveADTHTTPSFHIR?.errorMessage}
          hasError={errors.ReceiveADTHTTPSFHIR?.hasError}
          {...getOverrideProps(overrides, "ReceiveADTHTTPSFHIR")}
        ></CheckboxField>
        <TextField
          label=" "
          isRequired={false}
          isReadOnly={false}
          value={ReceiveADTHTTPSEndpoint}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                ReceiveADTDirectSecureEmail,
                ReceiveADTDirectEmailAddress,
                ReceiveADTsFTP,
                ReceiveADTPointToPoint,
                ReceiveADTHTTPSnonFHIR,
                ReceiveADTHTTPSFHIR,
                ReceiveADTHTTPSEndpoint: value,
                ReceiveADTOther,
                ReceiveADTOtherDescription,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveADTHTTPSEndpoint ?? value;
            }
            if (errors.ReceiveADTHTTPSEndpoint?.hasError) {
              runValidationTasks("ReceiveADTHTTPSEndpoint", value);
            }
            setReceiveADTHTTPSEndpoint(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "ReceiveADTHTTPSEndpoint",
              ReceiveADTHTTPSEndpoint
            )
          }
          errorMessage={errors.ReceiveADTHTTPSEndpoint?.errorMessage}
          hasError={errors.ReceiveADTHTTPSEndpoint?.hasError}
          {...getOverrideProps(overrides, "ReceiveADTHTTPSEndpoint")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid6")}
      >
        <CheckboxField
          label="Other, please describe:"
          name="ReceiveADTOther"
          value="ReceiveADTOther"
          isDisabled={false}
          checked={ReceiveADTOther}
          defaultValue={ReceiveADTOther}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                ReceiveADTDirectSecureEmail,
                ReceiveADTDirectEmailAddress,
                ReceiveADTsFTP,
                ReceiveADTPointToPoint,
                ReceiveADTHTTPSnonFHIR,
                ReceiveADTHTTPSFHIR,
                ReceiveADTHTTPSEndpoint,
                ReceiveADTOther: value,
                ReceiveADTOtherDescription,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveADTOther ?? value;
            }
            if (errors.ReceiveADTOther?.hasError) {
              runValidationTasks("ReceiveADTOther", value);
            }
            setReceiveADTOther(value);
          }}
          onBlur={() => runValidationTasks("ReceiveADTOther", ReceiveADTOther)}
          errorMessage={errors.ReceiveADTOther?.errorMessage}
          hasError={errors.ReceiveADTOther?.hasError}
          {...getOverrideProps(overrides, "ReceiveADTOther")}
        ></CheckboxField>
        <TextField
          label=" "
          isRequired={false}
          isReadOnly={false}
          value={ReceiveADTOtherDescription}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                ReceiveADTDirectSecureEmail,
                ReceiveADTDirectEmailAddress,
                ReceiveADTsFTP,
                ReceiveADTPointToPoint,
                ReceiveADTHTTPSnonFHIR,
                ReceiveADTHTTPSFHIR,
                ReceiveADTHTTPSEndpoint,
                ReceiveADTOther,
                ReceiveADTOtherDescription: value,
              };
              const result = onChange(modelFields);
              value = result?.ReceiveADTOtherDescription ?? value;
            }
            if (errors.ReceiveADTOtherDescription?.hasError) {
              runValidationTasks("ReceiveADTOtherDescription", value);
            }
            setReceiveADTOtherDescription(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "ReceiveADTOtherDescription",
              ReceiveADTOtherDescription
            )
          }
          errorMessage={errors.ReceiveADTOtherDescription?.errorMessage}
          hasError={errors.ReceiveADTOtherDescription?.hasError}
          {...getOverrideProps(overrides, "ReceiveADTOtherDescription")}
        ></TextField>
      </Grid>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || notificationsADTUnoModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || notificationsADTUnoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
