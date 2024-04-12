/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
export default function NewForm1(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const initialValues = {
    "first Name": "",
    lastName: "",
    position: "",
    shirtNumber: "",
    enrollmentDate: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues["first Name"]);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [position, setPosition] = React.useState(initialValues.position);
  const [shirtNumber, setShirtNumber] = React.useState(
    initialValues.shirtNumber
  );
  const [enrollmentDate, setEnrollmentDate] = React.useState(
    initialValues.enrollmentDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues["first Name"]);
    setLastName(initialValues.lastName);
    setPosition(initialValues.position);
    setShirtNumber(initialValues.shirtNumber);
    setEnrollmentDate(initialValues.enrollmentDate);
    setErrors({});
  };
  const validations = {
    "first Name": [],
    lastName: [],
    position: [],
    shirtNumber: [],
    enrollmentDate: [],
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
        const modelFields = {
          "first Name": firstName,
          lastName,
          position,
          shirtNumber,
          enrollmentDate,
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
        await onSubmit(modelFields);
      }}
      {...getOverrideProps(overrides, "NewForm1")}
      {...rest}
    >
      <TextField
        label="First name"
        descriptiveText="gdfgdfg"
        placeholder="tyjgfhfd"
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              "first Name": value,
              lastName,
              position,
              shirtNumber,
              enrollmentDate,
            };
            const result = onChange(modelFields);
            value = result?.["first Name"] ?? value;
          }
          if (errors["first Name"]?.hasError) {
            runValidationTasks("first Name", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("first Name", firstName)}
        errorMessage={errors["first Name"]?.errorMessage}
        hasError={errors["first Name"]?.hasError}
        {...getOverrideProps(overrides, "first Name")}
      ></TextField>
      <TextField
        label="Last name"
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              "first Name": firstName,
              lastName: value,
              position,
              shirtNumber,
              enrollmentDate,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Position"
        value={position}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              "first Name": firstName,
              lastName,
              position: value,
              shirtNumber,
              enrollmentDate,
            };
            const result = onChange(modelFields);
            value = result?.position ?? value;
          }
          if (errors.position?.hasError) {
            runValidationTasks("position", value);
          }
          setPosition(value);
        }}
        onBlur={() => runValidationTasks("position", position)}
        errorMessage={errors.position?.errorMessage}
        hasError={errors.position?.hasError}
        {...getOverrideProps(overrides, "position")}
      ></TextField>
      <TextField
        label="Shirt number"
        type="number"
        step="any"
        value={shirtNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              "first Name": firstName,
              lastName,
              position,
              shirtNumber: value,
              enrollmentDate,
            };
            const result = onChange(modelFields);
            value = result?.shirtNumber ?? value;
          }
          if (errors.shirtNumber?.hasError) {
            runValidationTasks("shirtNumber", value);
          }
          setShirtNumber(value);
        }}
        onBlur={() => runValidationTasks("shirtNumber", shirtNumber)}
        errorMessage={errors.shirtNumber?.errorMessage}
        hasError={errors.shirtNumber?.hasError}
        {...getOverrideProps(overrides, "shirtNumber")}
      ></TextField>
      <TextField
        label="Enrollment date"
        type="datetime-local"
        value={enrollmentDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              "first Name": firstName,
              lastName,
              position,
              shirtNumber,
              enrollmentDate: value,
            };
            const result = onChange(modelFields);
            value = result?.enrollmentDate ?? value;
          }
          if (errors.enrollmentDate?.hasError) {
            runValidationTasks("enrollmentDate", value);
          }
          setEnrollmentDate(value);
        }}
        onBlur={() => runValidationTasks("enrollmentDate", enrollmentDate)}
        errorMessage={errors.enrollmentDate?.errorMessage}
        hasError={errors.enrollmentDate?.hasError}
        {...getOverrideProps(overrides, "enrollmentDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
