/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  CheckboxField,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Radio,
  RadioGroupField,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function DSAInfoForm(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const { tokens } = useTheme();
  const initialValues = {
    Participant: undefined,
    Field1: "",
    Field2: false,
    Field3: false,
    Field4: false,
    Field6: [],
    Field5: false,
    Field7: false,
    Field8: false,
    Field9: false,
    Field10: false,
    Field11: false,
    Field13: false,
    Field14: false,
    Field15: false,
    Field16: false,
    Field17: false,
    Field18: false,
    Field19: false,
    Field12: false,
    Field20: false,
    Field21: false,
    Field22: false,
    Field23: false,
    Field24: false,
    Field25: false,
    Field26: false,
    Field27: false,
    Field28: false,
    Field29: false,
    Field30: false,
    Field31: false,
    Field32: false,
    Field33: false,
    Field34: false,
    Field35: false,
    Field36: false,
    Field37: false,
    Field38: false,
    Field39: false,
    Field40: false,
    Field41: false,
    Field42: undefined,
  };
  const [Participant, setParticipant] = React.useState(
    initialValues.Participant
  );
  const [Field1, setField1] = React.useState(initialValues.Field1);
  const [Field2, setField2] = React.useState(initialValues.Field2);
  const [Field3, setField3] = React.useState(initialValues.Field3);
  const [Field4, setField4] = React.useState(initialValues.Field4);
  const [Field6, setField6] = React.useState(initialValues.Field6);
  const [Field5, setField5] = React.useState(initialValues.Field5);
  const [Field7, setField7] = React.useState(initialValues.Field7);
  const [Field8, setField8] = React.useState(initialValues.Field8);
  const [Field9, setField9] = React.useState(initialValues.Field9);
  const [Field10, setField10] = React.useState(initialValues.Field10);
  const [Field11, setField11] = React.useState(initialValues.Field11);
  const [Field13, setField13] = React.useState(initialValues.Field13);
  const [Field14, setField14] = React.useState(initialValues.Field14);
  const [Field15, setField15] = React.useState(initialValues.Field15);
  const [Field16, setField16] = React.useState(initialValues.Field16);
  const [Field17, setField17] = React.useState(initialValues.Field17);
  const [Field18, setField18] = React.useState(initialValues.Field18);
  const [Field19, setField19] = React.useState(initialValues.Field19);
  const [Field12, setField12] = React.useState(initialValues.Field12);
  const [Field20, setField20] = React.useState(initialValues.Field20);
  const [Field21, setField21] = React.useState(initialValues.Field21);
  const [Field22, setField22] = React.useState(initialValues.Field22);
  const [Field23, setField23] = React.useState(initialValues.Field23);
  const [Field24, setField24] = React.useState(initialValues.Field24);
  const [Field25, setField25] = React.useState(initialValues.Field25);
  const [Field26, setField26] = React.useState(initialValues.Field26);
  const [Field27, setField27] = React.useState(initialValues.Field27);
  const [Field28, setField28] = React.useState(initialValues.Field28);
  const [Field29, setField29] = React.useState(initialValues.Field29);
  const [Field30, setField30] = React.useState(initialValues.Field30);
  const [Field31, setField31] = React.useState(initialValues.Field31);
  const [Field32, setField32] = React.useState(initialValues.Field32);
  const [Field33, setField33] = React.useState(initialValues.Field33);
  const [Field34, setField34] = React.useState(initialValues.Field34);
  const [Field35, setField35] = React.useState(initialValues.Field35);
  const [Field36, setField36] = React.useState(initialValues.Field36);
  const [Field37, setField37] = React.useState(initialValues.Field37);
  const [Field38, setField38] = React.useState(initialValues.Field38);
  const [Field39, setField39] = React.useState(initialValues.Field39);
  const [Field40, setField40] = React.useState(initialValues.Field40);
  const [Field41, setField41] = React.useState(initialValues.Field41);
  const [Field42, setField42] = React.useState(initialValues.Field42);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setParticipant(initialValues.Participant);
    setField1(initialValues.Field1);
    setField2(initialValues.Field2);
    setField3(initialValues.Field3);
    setField4(initialValues.Field4);
    setField6(initialValues.Field6);
    setCurrentField6Value("");
    setField5(initialValues.Field5);
    setField7(initialValues.Field7);
    setField8(initialValues.Field8);
    setField9(initialValues.Field9);
    setField10(initialValues.Field10);
    setField11(initialValues.Field11);
    setField13(initialValues.Field13);
    setField14(initialValues.Field14);
    setField15(initialValues.Field15);
    setField16(initialValues.Field16);
    setField17(initialValues.Field17);
    setField18(initialValues.Field18);
    setField19(initialValues.Field19);
    setField12(initialValues.Field12);
    setField20(initialValues.Field20);
    setField21(initialValues.Field21);
    setField22(initialValues.Field22);
    setField23(initialValues.Field23);
    setField24(initialValues.Field24);
    setField25(initialValues.Field25);
    setField26(initialValues.Field26);
    setField27(initialValues.Field27);
    setField28(initialValues.Field28);
    setField29(initialValues.Field29);
    setField30(initialValues.Field30);
    setField31(initialValues.Field31);
    setField32(initialValues.Field32);
    setField33(initialValues.Field33);
    setField34(initialValues.Field34);
    setField35(initialValues.Field35);
    setField36(initialValues.Field36);
    setField37(initialValues.Field37);
    setField38(initialValues.Field38);
    setField39(initialValues.Field39);
    setField40(initialValues.Field40);
    setField41(initialValues.Field41);
    setField42(initialValues.Field42);
    setErrors({});
  };
  const [currentField6Value, setCurrentField6Value] = React.useState("");
  const Field6Ref = React.createRef();
  const validations = {
    Participant: [{ type: "Required" }],
    Field1: [],
    Field2: [],
    Field3: [],
    Field4: [],
    Field6: [],
    Field5: [],
    Field7: [],
    Field8: [],
    Field9: [],
    Field10: [],
    Field11: [],
    Field13: [],
    Field14: [],
    Field15: [],
    Field16: [],
    Field17: [],
    Field18: [],
    Field19: [],
    Field12: [],
    Field20: [],
    Field21: [],
    Field22: [],
    Field23: [],
    Field24: [],
    Field25: [],
    Field26: [],
    Field27: [],
    Field28: [],
    Field29: [],
    Field30: [],
    Field31: [],
    Field32: [],
    Field33: [],
    Field34: [],
    Field35: [],
    Field36: [],
    Field37: [],
    Field38: [],
    Field39: [],
    Field40: [],
    Field41: [],
    Field42: [],
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
      rowGap={tokens.space.medium.value}
      columnGap={tokens.space.medium.value}
      padding={tokens.space.medium.value}
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          Participant,
          Field1,
          Field2,
          Field3,
          Field4,
          Field6,
          Field5,
          Field7,
          Field8,
          Field9,
          Field10,
          Field11,
          Field13,
          Field14,
          Field15,
          Field16,
          Field17,
          Field18,
          Field19,
          Field12,
          Field20,
          Field21,
          Field22,
          Field23,
          Field24,
          Field25,
          Field26,
          Field27,
          Field28,
          Field29,
          Field30,
          Field31,
          Field32,
          Field33,
          Field34,
          Field35,
          Field36,
          Field37,
          Field38,
          Field39,
          Field40,
          Field41,
          Field42,
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
      {...getOverrideProps(overrides, "DSAInfoForm")}
      {...rest}
    >
      <Heading
        level={3}
        children="User Info"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <Text
        children="1. Are you an existing DxF Participant?"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Text>
      <RadioGroupField
        label=" If not registered, please initiate at: Home Data Exchange Framework Signing Portal (https://signdxf.powerappsportals.com/)"
        name="fieldName"
        isRequired={true}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Participant: value,
              Field1,
              Field2,
              Field3,
              Field4,
              Field6,
              Field5,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
              Field19,
              Field12,
              Field20,
              Field21,
              Field22,
              Field23,
              Field24,
              Field25,
              Field26,
              Field27,
              Field28,
              Field29,
              Field30,
              Field31,
              Field32,
              Field33,
              Field34,
              Field35,
              Field36,
              Field37,
              Field38,
              Field39,
              Field40,
              Field41,
              Field42,
            };
            const result = onChange(modelFields);
            value = result?.Participant ?? value;
          }
          if (errors.Participant?.hasError) {
            runValidationTasks("Participant", value);
          }
          setParticipant(value);
        }}
        onBlur={() => runValidationTasks("Participant", Participant)}
        errorMessage={errors.Participant?.errorMessage}
        hasError={errors.Participant?.hasError}
        {...getOverrideProps(overrides, "Participant")}
      >
        <Radio
          children="Yes"
          value="Yes"
          {...getOverrideProps(overrides, "ParticipantRadio0")}
        ></Radio>
        <Radio
          children="No"
          value="No"
          {...getOverrideProps(overrides, "ParticipantRadio1")}
        ></Radio>
      </RadioGroupField>
      <Heading
        level={4}
        children="DO NOT FILL OUT IF YOU HAVE NOT SIGNED UP"
        {...getOverrideProps(overrides, "SectionalElement5")}
      ></Heading>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement4")}
      ></Divider>
      <TextField
        label='2. Enter your DxF Participant ID (Format: "DXF00####")'
        descriptiveText='If you do not know your ID, refer to this file:  https://tinyurl.com/3a46az9a  (ID in column C).  If the file doesn&apos;t open, use link below, open the "DSA Portal and Participant Directory" bar, and click DSA signatory list: www.cdii.ca.gov/committees-and-advisory-groups/data-exchange-framework/'
        placeholder="Ex: DXF001234"
        value={Field1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Participant,
              Field1: value,
              Field2,
              Field3,
              Field4,
              Field6,
              Field5,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
              Field19,
              Field12,
              Field20,
              Field21,
              Field22,
              Field23,
              Field24,
              Field25,
              Field26,
              Field27,
              Field28,
              Field29,
              Field30,
              Field31,
              Field32,
              Field33,
              Field34,
              Field35,
              Field36,
              Field37,
              Field38,
              Field39,
              Field40,
              Field41,
              Field42,
            };
            const result = onChange(modelFields);
            value = result?.Field1 ?? value;
          }
          if (errors.Field1?.hasError) {
            runValidationTasks("Field1", value);
          }
          setField1(value);
        }}
        onBlur={() => runValidationTasks("Field1", Field1)}
        errorMessage={errors.Field1?.errorMessage}
        hasError={errors.Field1?.hasError}
        {...getOverrideProps(overrides, "Field1")}
      ></TextField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement20")}
      ></Divider>
      <Text
        children="3. What EHR or other information platform(s) do you interface with?"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid8")}
      >
        <CheckboxField
          label="Intersystems"
          name="fieldName"
          value="fieldName"
          checked={Field2}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2: value,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field2 ?? value;
            }
            if (errors.Field2?.hasError) {
              runValidationTasks("Field2", value);
            }
            setField2(value);
          }}
          onBlur={() => runValidationTasks("Field2", Field2)}
          errorMessage={errors.Field2?.errorMessage}
          hasError={errors.Field2?.hasError}
          {...getOverrideProps(overrides, "Field2")}
        ></CheckboxField>
        <CheckboxField
          label="Smile"
          name="fieldName"
          value="fieldName"
          checked={Field3}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3: value,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field3 ?? value;
            }
            if (errors.Field3?.hasError) {
              runValidationTasks("Field3", value);
            }
            setField3(value);
          }}
          onBlur={() => runValidationTasks("Field3", Field3)}
          errorMessage={errors.Field3?.errorMessage}
          hasError={errors.Field3?.hasError}
          {...getOverrideProps(overrides, "Field3")}
        ></CheckboxField>
        <CheckboxField
          label="Salesforce"
          name="fieldName"
          value="fieldName"
          checked={Field4}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4: value,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field4 ?? value;
            }
            if (errors.Field4?.hasError) {
              runValidationTasks("Field4", value);
            }
            setField4(value);
          }}
          onBlur={() => runValidationTasks("Field4", Field4)}
          errorMessage={errors.Field4?.errorMessage}
          hasError={errors.Field4?.hasError}
          {...getOverrideProps(overrides, "Field4")}
        ></CheckboxField>
      </Grid>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Participant,
              Field1,
              Field2,
              Field3,
              Field4,
              Field6: values,
              Field5,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
              Field19,
              Field12,
              Field20,
              Field21,
              Field22,
              Field23,
              Field24,
              Field25,
              Field26,
              Field27,
              Field28,
              Field29,
              Field30,
              Field31,
              Field32,
              Field33,
              Field34,
              Field35,
              Field36,
              Field37,
              Field38,
              Field39,
              Field40,
              Field41,
              Field42,
            };
            const result = onChange(modelFields);
            values = result?.Field6 ?? values;
          }
          setField6(values);
          setCurrentField6Value("");
        }}
        currentFieldValue={currentField6Value}
        label={"If other, enter here"}
        items={Field6}
        hasError={errors?.Field6?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Field6", currentField6Value)
        }
        errorMessage={errors?.Field6?.errorMessage}
        setFieldValue={setCurrentField6Value}
        inputFieldRef={Field6Ref}
        defaultFieldValue={""}
      >
        <TextField
          label="If other, enter here"
          value={currentField6Value}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Field6?.hasError) {
              runValidationTasks("Field6", value);
            }
            setCurrentField6Value(value);
          }}
          onBlur={() => runValidationTasks("Field6", currentField6Value)}
          errorMessage={errors.Field6?.errorMessage}
          hasError={errors.Field6?.hasError}
          ref={Field6Ref}
          labelHidden={true}
          {...getOverrideProps(overrides, "Field6")}
        ></TextField>
      </ArrayField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement6")}
      ></Divider>
      <Heading
        level={3}
        children="Send Data"
        {...getOverrideProps(overrides, "SectionalElement11")}
      ></Heading>
      <Text
        children="4. OUTBOUND NOTIFICATIONS- Are you able to send data electronically out? If yes, please specify which content over which transports (check all that apply)"
        {...getOverrideProps(overrides, "SectionalElement9")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(6, auto)"
        {...getOverrideProps(overrides, "RowGrid13")}
      >
        <CheckboxField
          label="Direct"
          name="fieldName"
          value="fieldName"
          checked={Field5}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5: value,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field5 ?? value;
            }
            if (errors.Field5?.hasError) {
              runValidationTasks("Field5", value);
            }
            setField5(value);
          }}
          onBlur={() => runValidationTasks("Field5", Field5)}
          errorMessage={errors.Field5?.errorMessage}
          hasError={errors.Field5?.hasError}
          {...getOverrideProps(overrides, "Field5")}
        ></CheckboxField>
        <CheckboxField
          label="sFTP"
          name="fieldName"
          value="fieldName"
          checked={Field7}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7: value,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field7 ?? value;
            }
            if (errors.Field7?.hasError) {
              runValidationTasks("Field7", value);
            }
            setField7(value);
          }}
          onBlur={() => runValidationTasks("Field7", Field7)}
          errorMessage={errors.Field7?.errorMessage}
          hasError={errors.Field7?.hasError}
          {...getOverrideProps(overrides, "Field7")}
        ></CheckboxField>
        <CheckboxField
          label="MLLP"
          name="fieldName"
          value="fieldName"
          checked={Field8}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8: value,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field8 ?? value;
            }
            if (errors.Field8?.hasError) {
              runValidationTasks("Field8", value);
            }
            setField8(value);
          }}
          onBlur={() => runValidationTasks("Field8", Field8)}
          errorMessage={errors.Field8?.errorMessage}
          hasError={errors.Field8?.hasError}
          {...getOverrideProps(overrides, "Field8")}
        ></CheckboxField>
        <CheckboxField
          label="HTTPS"
          name="fieldName"
          value="fieldName"
          checked={Field9}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9: value,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field9 ?? value;
            }
            if (errors.Field9?.hasError) {
              runValidationTasks("Field9", value);
            }
            setField9(value);
          }}
          onBlur={() => runValidationTasks("Field9", Field9)}
          errorMessage={errors.Field9?.errorMessage}
          hasError={errors.Field9?.hasError}
          {...getOverrideProps(overrides, "Field9")}
        ></CheckboxField>
        <CheckboxField
          label="FHIR"
          name="fieldName"
          value="fieldName"
          checked={Field10}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10: value,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field10 ?? value;
            }
            if (errors.Field10?.hasError) {
              runValidationTasks("Field10", value);
            }
            setField10(value);
          }}
          onBlur={() => runValidationTasks("Field10", Field10)}
          errorMessage={errors.Field10?.errorMessage}
          hasError={errors.Field10?.hasError}
          {...getOverrideProps(overrides, "Field10")}
        ></CheckboxField>
        <CheckboxField
          label="None"
          name="fieldName"
          value="fieldName"
          checked={Field11}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11: value,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field11 ?? value;
            }
            if (errors.Field11?.hasError) {
              runValidationTasks("Field11", value);
            }
            setField11(value);
          }}
          onBlur={() => runValidationTasks("Field11", Field11)}
          errorMessage={errors.Field11?.errorMessage}
          hasError={errors.Field11?.hasError}
          {...getOverrideProps(overrides, "Field11")}
        ></CheckboxField>
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement7")}
      ></Divider>
      <Text
        children="5. INFORMATION DELIVERY- Are you able to send data electronically out? If yes, please specify which content over which transports (check all that apply)"
        {...getOverrideProps(overrides, "SectionalElement8")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(7, auto)"
        {...getOverrideProps(overrides, "RowGrid16")}
      >
        <CheckboxField
          label="Direct"
          name="fieldName"
          value="fieldName"
          checked={Field13}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13: value,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field13 ?? value;
            }
            if (errors.Field13?.hasError) {
              runValidationTasks("Field13", value);
            }
            setField13(value);
          }}
          onBlur={() => runValidationTasks("Field13", Field13)}
          errorMessage={errors.Field13?.errorMessage}
          hasError={errors.Field13?.hasError}
          {...getOverrideProps(overrides, "Field13")}
        ></CheckboxField>
        <CheckboxField
          label="sFTP"
          name="fieldName"
          value="fieldName"
          checked={Field14}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14: value,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field14 ?? value;
            }
            if (errors.Field14?.hasError) {
              runValidationTasks("Field14", value);
            }
            setField14(value);
          }}
          onBlur={() => runValidationTasks("Field14", Field14)}
          errorMessage={errors.Field14?.errorMessage}
          hasError={errors.Field14?.hasError}
          {...getOverrideProps(overrides, "Field14")}
        ></CheckboxField>
        <CheckboxField
          label="MLLP"
          name="fieldName"
          value="fieldName"
          checked={Field15}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15: value,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field15 ?? value;
            }
            if (errors.Field15?.hasError) {
              runValidationTasks("Field15", value);
            }
            setField15(value);
          }}
          onBlur={() => runValidationTasks("Field15", Field15)}
          errorMessage={errors.Field15?.errorMessage}
          hasError={errors.Field15?.hasError}
          {...getOverrideProps(overrides, "Field15")}
        ></CheckboxField>
        <CheckboxField
          label="HTTPS"
          name="fieldName"
          value="fieldName"
          checked={Field16}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16: value,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field16 ?? value;
            }
            if (errors.Field16?.hasError) {
              runValidationTasks("Field16", value);
            }
            setField16(value);
          }}
          onBlur={() => runValidationTasks("Field16", Field16)}
          errorMessage={errors.Field16?.errorMessage}
          hasError={errors.Field16?.hasError}
          {...getOverrideProps(overrides, "Field16")}
        ></CheckboxField>
        <CheckboxField
          label="FHIR"
          name="fieldName"
          value="fieldName"
          checked={Field17}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17: value,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field17 ?? value;
            }
            if (errors.Field17?.hasError) {
              runValidationTasks("Field17", value);
            }
            setField17(value);
          }}
          onBlur={() => runValidationTasks("Field17", Field17)}
          errorMessage={errors.Field17?.errorMessage}
          hasError={errors.Field17?.hasError}
          {...getOverrideProps(overrides, "Field17")}
        ></CheckboxField>
        <CheckboxField
          label="IHE"
          name="fieldName"
          value="fieldName"
          checked={Field18}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18: value,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field18 ?? value;
            }
            if (errors.Field18?.hasError) {
              runValidationTasks("Field18", value);
            }
            setField18(value);
          }}
          onBlur={() => runValidationTasks("Field18", Field18)}
          errorMessage={errors.Field18?.errorMessage}
          hasError={errors.Field18?.hasError}
          {...getOverrideProps(overrides, "Field18")}
        ></CheckboxField>
        <CheckboxField
          label="None"
          name="fieldName"
          value="fieldName"
          checked={Field19}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19: value,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field19 ?? value;
            }
            if (errors.Field19?.hasError) {
              runValidationTasks("Field19", value);
            }
            setField19(value);
          }}
          onBlur={() => runValidationTasks("Field19", Field19)}
          errorMessage={errors.Field19?.errorMessage}
          hasError={errors.Field19?.hasError}
          {...getOverrideProps(overrides, "Field19")}
        ></CheckboxField>
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement17")}
      ></Divider>
      <Text
        children="6. REQUEST FOR INFRMATION- Are you able to send data electronically out? If yes, please specify which content over which transports (check all that apply)"
        {...getOverrideProps(overrides, "SectionalElement10")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(5, auto)"
        {...getOverrideProps(overrides, "RowGrid19")}
      >
        <CheckboxField
          label="Direct"
          name="fieldName"
          value="fieldName"
          checked={Field12}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12: value,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field12 ?? value;
            }
            if (errors.Field12?.hasError) {
              runValidationTasks("Field12", value);
            }
            setField12(value);
          }}
          onBlur={() => runValidationTasks("Field12", Field12)}
          errorMessage={errors.Field12?.errorMessage}
          hasError={errors.Field12?.hasError}
          {...getOverrideProps(overrides, "Field12")}
        ></CheckboxField>
        <CheckboxField
          label="sFTP"
          name="fieldName"
          value="fieldName"
          checked={Field20}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20: value,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field20 ?? value;
            }
            if (errors.Field20?.hasError) {
              runValidationTasks("Field20", value);
            }
            setField20(value);
          }}
          onBlur={() => runValidationTasks("Field20", Field20)}
          errorMessage={errors.Field20?.errorMessage}
          hasError={errors.Field20?.hasError}
          {...getOverrideProps(overrides, "Field20")}
        ></CheckboxField>
        <CheckboxField
          label="FHIR"
          name="fieldName"
          value="fieldName"
          checked={Field21}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21: value,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field21 ?? value;
            }
            if (errors.Field21?.hasError) {
              runValidationTasks("Field21", value);
            }
            setField21(value);
          }}
          onBlur={() => runValidationTasks("Field21", Field21)}
          errorMessage={errors.Field21?.errorMessage}
          hasError={errors.Field21?.hasError}
          {...getOverrideProps(overrides, "Field21")}
        ></CheckboxField>
        <CheckboxField
          label="IHE"
          name="fieldName"
          value="fieldName"
          checked={Field22}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22: value,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field22 ?? value;
            }
            if (errors.Field22?.hasError) {
              runValidationTasks("Field22", value);
            }
            setField22(value);
          }}
          onBlur={() => runValidationTasks("Field22", Field22)}
          errorMessage={errors.Field22?.errorMessage}
          hasError={errors.Field22?.hasError}
          {...getOverrideProps(overrides, "Field22")}
        ></CheckboxField>
        <CheckboxField
          label="None"
          name="fieldName"
          value="fieldName"
          checked={Field23}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23: value,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field23 ?? value;
            }
            if (errors.Field23?.hasError) {
              runValidationTasks("Field23", value);
            }
            setField23(value);
          }}
          onBlur={() => runValidationTasks("Field23", Field23)}
          errorMessage={errors.Field23?.errorMessage}
          hasError={errors.Field23?.hasError}
          {...getOverrideProps(overrides, "Field23")}
        ></CheckboxField>
      </Grid>
      <Heading
        level={3}
        children="Receive Data"
        {...getOverrideProps(overrides, "SectionalElement12")}
      ></Heading>
      <Text
        children="7. INBOUND NOTIFICATIONS- Are you able to receive data electronically? If yes, please specify which content over which transports (check all that apply)"
        {...getOverrideProps(overrides, "SectionalElement13")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(6, auto)"
        {...getOverrideProps(overrides, "RowGrid22")}
      >
        <CheckboxField
          label="Direct"
          name="fieldName"
          value="fieldName"
          checked={Field24}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24: value,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field24 ?? value;
            }
            if (errors.Field24?.hasError) {
              runValidationTasks("Field24", value);
            }
            setField24(value);
          }}
          onBlur={() => runValidationTasks("Field24", Field24)}
          errorMessage={errors.Field24?.errorMessage}
          hasError={errors.Field24?.hasError}
          {...getOverrideProps(overrides, "Field24")}
        ></CheckboxField>
        <CheckboxField
          label="sFTP"
          name="fieldName"
          value="fieldName"
          checked={Field25}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25: value,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field25 ?? value;
            }
            if (errors.Field25?.hasError) {
              runValidationTasks("Field25", value);
            }
            setField25(value);
          }}
          onBlur={() => runValidationTasks("Field25", Field25)}
          errorMessage={errors.Field25?.errorMessage}
          hasError={errors.Field25?.hasError}
          {...getOverrideProps(overrides, "Field25")}
        ></CheckboxField>
        <CheckboxField
          label="MLLP"
          name="fieldName"
          value="fieldName"
          checked={Field26}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26: value,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field26 ?? value;
            }
            if (errors.Field26?.hasError) {
              runValidationTasks("Field26", value);
            }
            setField26(value);
          }}
          onBlur={() => runValidationTasks("Field26", Field26)}
          errorMessage={errors.Field26?.errorMessage}
          hasError={errors.Field26?.hasError}
          {...getOverrideProps(overrides, "Field26")}
        ></CheckboxField>
        <CheckboxField
          label="HTTPS"
          name="fieldName"
          value="fieldName"
          checked={Field27}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27: value,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field27 ?? value;
            }
            if (errors.Field27?.hasError) {
              runValidationTasks("Field27", value);
            }
            setField27(value);
          }}
          onBlur={() => runValidationTasks("Field27", Field27)}
          errorMessage={errors.Field27?.errorMessage}
          hasError={errors.Field27?.hasError}
          {...getOverrideProps(overrides, "Field27")}
        ></CheckboxField>
        <CheckboxField
          label="FHIR"
          name="fieldName"
          value="fieldName"
          checked={Field28}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28: value,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field28 ?? value;
            }
            if (errors.Field28?.hasError) {
              runValidationTasks("Field28", value);
            }
            setField28(value);
          }}
          onBlur={() => runValidationTasks("Field28", Field28)}
          errorMessage={errors.Field28?.errorMessage}
          hasError={errors.Field28?.hasError}
          {...getOverrideProps(overrides, "Field28")}
        ></CheckboxField>
        <CheckboxField
          label="None"
          name="fieldName"
          value="fieldName"
          checked={Field29}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29: value,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field29 ?? value;
            }
            if (errors.Field29?.hasError) {
              runValidationTasks("Field29", value);
            }
            setField29(value);
          }}
          onBlur={() => runValidationTasks("Field29", Field29)}
          errorMessage={errors.Field29?.errorMessage}
          hasError={errors.Field29?.hasError}
          {...getOverrideProps(overrides, "Field29")}
        ></CheckboxField>
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement19")}
      ></Divider>
      <Text
        children="8. INFORMATION DELIVERY- Are you able to receive data electronically? If yes, please specify which content over which transports (check all that apply)"
        {...getOverrideProps(overrides, "SectionalElement14")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(7, auto)"
        {...getOverrideProps(overrides, "RowGrid25")}
      >
        <CheckboxField
          label="Direct"
          name="fieldName"
          value="fieldName"
          checked={Field30}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30: value,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field30 ?? value;
            }
            if (errors.Field30?.hasError) {
              runValidationTasks("Field30", value);
            }
            setField30(value);
          }}
          onBlur={() => runValidationTasks("Field30", Field30)}
          errorMessage={errors.Field30?.errorMessage}
          hasError={errors.Field30?.hasError}
          {...getOverrideProps(overrides, "Field30")}
        ></CheckboxField>
        <CheckboxField
          label="sFTP"
          name="fieldName"
          value="fieldName"
          checked={Field31}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31: value,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field31 ?? value;
            }
            if (errors.Field31?.hasError) {
              runValidationTasks("Field31", value);
            }
            setField31(value);
          }}
          onBlur={() => runValidationTasks("Field31", Field31)}
          errorMessage={errors.Field31?.errorMessage}
          hasError={errors.Field31?.hasError}
          {...getOverrideProps(overrides, "Field31")}
        ></CheckboxField>
        <CheckboxField
          label="MLLP"
          name="fieldName"
          value="fieldName"
          checked={Field32}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32: value,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field32 ?? value;
            }
            if (errors.Field32?.hasError) {
              runValidationTasks("Field32", value);
            }
            setField32(value);
          }}
          onBlur={() => runValidationTasks("Field32", Field32)}
          errorMessage={errors.Field32?.errorMessage}
          hasError={errors.Field32?.hasError}
          {...getOverrideProps(overrides, "Field32")}
        ></CheckboxField>
        <CheckboxField
          label="HTTPS"
          name="fieldName"
          value="fieldName"
          checked={Field33}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33: value,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field33 ?? value;
            }
            if (errors.Field33?.hasError) {
              runValidationTasks("Field33", value);
            }
            setField33(value);
          }}
          onBlur={() => runValidationTasks("Field33", Field33)}
          errorMessage={errors.Field33?.errorMessage}
          hasError={errors.Field33?.hasError}
          {...getOverrideProps(overrides, "Field33")}
        ></CheckboxField>
        <CheckboxField
          label="FHIR"
          name="fieldName"
          value="fieldName"
          checked={Field34}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34: value,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field34 ?? value;
            }
            if (errors.Field34?.hasError) {
              runValidationTasks("Field34", value);
            }
            setField34(value);
          }}
          onBlur={() => runValidationTasks("Field34", Field34)}
          errorMessage={errors.Field34?.errorMessage}
          hasError={errors.Field34?.hasError}
          {...getOverrideProps(overrides, "Field34")}
        ></CheckboxField>
        <CheckboxField
          label="IHE"
          name="fieldName"
          value="fieldName"
          checked={Field35}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35: value,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field35 ?? value;
            }
            if (errors.Field35?.hasError) {
              runValidationTasks("Field35", value);
            }
            setField35(value);
          }}
          onBlur={() => runValidationTasks("Field35", Field35)}
          errorMessage={errors.Field35?.errorMessage}
          hasError={errors.Field35?.hasError}
          {...getOverrideProps(overrides, "Field35")}
        ></CheckboxField>
        <CheckboxField
          label="None"
          name="fieldName"
          value="fieldName"
          checked={Field36}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36: value,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field36 ?? value;
            }
            if (errors.Field36?.hasError) {
              runValidationTasks("Field36", value);
            }
            setField36(value);
          }}
          onBlur={() => runValidationTasks("Field36", Field36)}
          errorMessage={errors.Field36?.errorMessage}
          hasError={errors.Field36?.hasError}
          {...getOverrideProps(overrides, "Field36")}
        ></CheckboxField>
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement18")}
      ></Divider>
      <Text
        children="9. REQUEST FOR INFORMATION- Are you able to receive data electronically? If yes, please specify which content over which transports (check all that apply)"
        {...getOverrideProps(overrides, "SectionalElement15")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(5, auto)"
        {...getOverrideProps(overrides, "RowGrid28")}
      >
        <CheckboxField
          label="Direct"
          name="fieldName"
          value="fieldName"
          checked={Field37}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37: value,
                Field38,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field37 ?? value;
            }
            if (errors.Field37?.hasError) {
              runValidationTasks("Field37", value);
            }
            setField37(value);
          }}
          onBlur={() => runValidationTasks("Field37", Field37)}
          errorMessage={errors.Field37?.errorMessage}
          hasError={errors.Field37?.hasError}
          {...getOverrideProps(overrides, "Field37")}
        ></CheckboxField>
        <CheckboxField
          label="sFTP"
          name="fieldName"
          value="fieldName"
          checked={Field38}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38: value,
                Field39,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field38 ?? value;
            }
            if (errors.Field38?.hasError) {
              runValidationTasks("Field38", value);
            }
            setField38(value);
          }}
          onBlur={() => runValidationTasks("Field38", Field38)}
          errorMessage={errors.Field38?.errorMessage}
          hasError={errors.Field38?.hasError}
          {...getOverrideProps(overrides, "Field38")}
        ></CheckboxField>
        <CheckboxField
          label="FHIR"
          name="fieldName"
          value="fieldName"
          checked={Field39}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39: value,
                Field40,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field39 ?? value;
            }
            if (errors.Field39?.hasError) {
              runValidationTasks("Field39", value);
            }
            setField39(value);
          }}
          onBlur={() => runValidationTasks("Field39", Field39)}
          errorMessage={errors.Field39?.errorMessage}
          hasError={errors.Field39?.hasError}
          {...getOverrideProps(overrides, "Field39")}
        ></CheckboxField>
        <CheckboxField
          label="IHE"
          name="fieldName"
          value="fieldName"
          checked={Field40}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40: value,
                Field41,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field40 ?? value;
            }
            if (errors.Field40?.hasError) {
              runValidationTasks("Field40", value);
            }
            setField40(value);
          }}
          onBlur={() => runValidationTasks("Field40", Field40)}
          errorMessage={errors.Field40?.errorMessage}
          hasError={errors.Field40?.hasError}
          {...getOverrideProps(overrides, "Field40")}
        ></CheckboxField>
        <CheckboxField
          label="None"
          name="fieldName"
          value="fieldName"
          checked={Field41}
          onChange={(e) => {
            let value = e.target.checked;
            if (onChange) {
              const modelFields = {
                Participant,
                Field1,
                Field2,
                Field3,
                Field4,
                Field6,
                Field5,
                Field7,
                Field8,
                Field9,
                Field10,
                Field11,
                Field13,
                Field14,
                Field15,
                Field16,
                Field17,
                Field18,
                Field19,
                Field12,
                Field20,
                Field21,
                Field22,
                Field23,
                Field24,
                Field25,
                Field26,
                Field27,
                Field28,
                Field29,
                Field30,
                Field31,
                Field32,
                Field33,
                Field34,
                Field35,
                Field36,
                Field37,
                Field38,
                Field39,
                Field40,
                Field41: value,
                Field42,
              };
              const result = onChange(modelFields);
              value = result?.Field41 ?? value;
            }
            if (errors.Field41?.hasError) {
              runValidationTasks("Field41", value);
            }
            setField41(value);
          }}
          onBlur={() => runValidationTasks("Field41", Field41)}
          errorMessage={errors.Field41?.errorMessage}
          hasError={errors.Field41?.hasError}
          {...getOverrideProps(overrides, "Field41")}
        ></CheckboxField>
      </Grid>
      <Heading
        level={3}
        children="HIPPA Coverage"
        {...getOverrideProps(overrides, "SectionalElement16")}
      ></Heading>
      <RadioGroupField
        label="Are you a HIPPA covered entity"
        name="fieldName"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Participant,
              Field1,
              Field2,
              Field3,
              Field4,
              Field6,
              Field5,
              Field7,
              Field8,
              Field9,
              Field10,
              Field11,
              Field13,
              Field14,
              Field15,
              Field16,
              Field17,
              Field18,
              Field19,
              Field12,
              Field20,
              Field21,
              Field22,
              Field23,
              Field24,
              Field25,
              Field26,
              Field27,
              Field28,
              Field29,
              Field30,
              Field31,
              Field32,
              Field33,
              Field34,
              Field35,
              Field36,
              Field37,
              Field38,
              Field39,
              Field40,
              Field41,
              Field42: value,
            };
            const result = onChange(modelFields);
            value = result?.Field42 ?? value;
          }
          if (errors.Field42?.hasError) {
            runValidationTasks("Field42", value);
          }
          setField42(value);
        }}
        onBlur={() => runValidationTasks("Field42", Field42)}
        errorMessage={errors.Field42?.errorMessage}
        hasError={errors.Field42?.hasError}
        {...getOverrideProps(overrides, "Field42")}
      >
        <Radio
          children="Yes"
          value="Yes"
          {...getOverrideProps(overrides, "Field42Radio0")}
        ></Radio>
        <Radio
          children="No"
          value="No"
          {...getOverrideProps(overrides, "Field42Radio1")}
        ></Radio>
      </RadioGroupField>
      <Text
        children="If not registered, please initiate at: Home Data Exchange Framework Signing Portal (https://signdxf.powerappsportals.com)"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Text>
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
          gap={tokens.space.medium.value}
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
