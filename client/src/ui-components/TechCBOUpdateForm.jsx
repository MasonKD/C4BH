/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTechCBO } from "../graphql/queries";
import { updateTechCBO } from "../graphql/mutations";
const client = generateClient();
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
export default function TechCBOUpdateForm(props) {
  const {
    id: idProp,
    techCBO: techCBOModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Customer_Management_System: "",
    CBOCounties: [],
    Field0: [],
  };
  const [Customer_Management_System, setCustomer_Management_System] =
    React.useState(initialValues.Customer_Management_System);
  const [CBOCounties, setCBOCounties] = React.useState(
    initialValues.CBOCounties
  );
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = techCBORecord
      ? { ...initialValues, ...techCBORecord }
      : initialValues;
    setCustomer_Management_System(cleanValues.Customer_Management_System);
    setCBOCounties(cleanValues.CBOCounties ?? []);
    setCurrentCBOCountiesValue("");
    setField0(cleanValues.Field0 ?? []);
    setCurrentField0Value("");
    setErrors({});
  };
  const [techCBORecord, setTechCBORecord] = React.useState(techCBOModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTechCBO.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTechCBO
        : techCBOModelProp;
      setTechCBORecord(record);
    };
    queryData();
  }, [idProp, techCBOModelProp]);
  React.useEffect(resetStateValues, [techCBORecord]);
  const [currentCBOCountiesValue, setCurrentCBOCountiesValue] =
    React.useState("");
  const CBOCountiesRef = React.createRef();
  const [currentField0Value, setCurrentField0Value] = React.useState("");
  const Field0Ref = React.createRef();
  const validations = {
    Customer_Management_System: [],
    CBOCounties: [{ type: "Required" }],
    Field0: [],
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
          Customer_Management_System: Customer_Management_System ?? null,
          CBOCounties,
          Field0: Field0 ?? null,
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
            Customer_Management_System:
              modelFields.Customer_Management_System ?? null,
            CBOCounties: modelFields.CBOCounties,
          };
          await client.graphql({
            query: updateTechCBO.replaceAll("__typename", ""),
            variables: {
              input: {
                id: techCBORecord.id,
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
      {...getOverrideProps(overrides, "TechCBOUpdateForm")}
      {...rest}
    >
      <TextField
        label="What is the Customer management or other electronic record system you use."
        isRequired={false}
        isReadOnly={false}
        value={Customer_Management_System}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Customer_Management_System: value,
              CBOCounties,
              Field0,
            };
            const result = onChange(modelFields);
            value = result?.Customer_Management_System ?? value;
          }
          if (errors.Customer_Management_System?.hasError) {
            runValidationTasks("Customer_Management_System", value);
          }
          setCustomer_Management_System(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "Customer_Management_System",
            Customer_Management_System
          )
        }
        errorMessage={errors.Customer_Management_System?.errorMessage}
        hasError={errors.Customer_Management_System?.hasError}
        {...getOverrideProps(overrides, "Customer_Management_System")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Customer_Management_System,
              CBOCounties: values,
              Field0,
            };
            const result = onChange(modelFields);
            values = result?.CBOCounties ?? values;
          }
          setCBOCounties(values);
          setCurrentCBOCountiesValue("");
        }}
        currentFieldValue={currentCBOCountiesValue}
        label={"Cbo counties"}
        items={CBOCounties}
        hasError={errors?.CBOCounties?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("CBOCounties", currentCBOCountiesValue)
        }
        errorMessage={errors?.CBOCounties?.errorMessage}
        setFieldValue={setCurrentCBOCountiesValue}
        inputFieldRef={CBOCountiesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Cbo counties"
          isRequired={true}
          isReadOnly={false}
          value={currentCBOCountiesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.CBOCounties?.hasError) {
              runValidationTasks("CBOCounties", value);
            }
            setCurrentCBOCountiesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("CBOCounties", currentCBOCountiesValue)
          }
          errorMessage={errors.CBOCounties?.errorMessage}
          hasError={errors.CBOCounties?.hasError}
          ref={CBOCountiesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "CBOCounties")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              Customer_Management_System,
              CBOCounties,
              Field0: values,
            };
            const result = onChange(modelFields);
            values = result?.Field0 ?? values;
          }
          setField0(values);
          setCurrentField0Value("");
        }}
        currentFieldValue={currentField0Value}
        label={"Label"}
        items={Field0}
        hasError={errors?.Field0?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Field0", currentField0Value)
        }
        errorMessage={errors?.Field0?.errorMessage}
        setFieldValue={setCurrentField0Value}
        inputFieldRef={Field0Ref}
        defaultFieldValue={""}
      >
        <TextField
          label="Label"
          value={currentField0Value}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.Field0?.hasError) {
              runValidationTasks("Field0", value);
            }
            setCurrentField0Value(value);
          }}
          onBlur={() => runValidationTasks("Field0", currentField0Value)}
          errorMessage={errors.Field0?.errorMessage}
          hasError={errors.Field0?.hasError}
          ref={Field0Ref}
          labelHidden={true}
          {...getOverrideProps(overrides, "Field0")}
        ></TextField>
      </ArrayField>
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
