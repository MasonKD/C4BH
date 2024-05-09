/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Autocomplete, Flex, Grid, Text } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createUserInfoC4BH } from "../graphql/mutations";
const client = generateClient();
export default function UserInfoC4BHCreateForm(props) {
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
    User: undefined,
  };
  const [User, setUser] = React.useState(initialValues.User);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUser(initialValues.User);
    setErrors({});
  };
  const validations = {
    User: [],
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
          User,
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
            query: createUserInfoC4BH.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "UserInfoC4BHCreateForm")}
      {...rest}
    >
      <Autocomplete
        label="1. DxF Participant Dropdown"
        descriptiveText='If you do not know your ID, refer to this file: https://drive.google.com/drive/folders/1Dukii5XftetzhbP5c1EEPuMSgNMtxAzy?usp=drive_link (ID in column C). If the file doesn&apos;t open, use link below, open the "DSA Portal and Participant Directory" bar, and click DSA signatory list: www.cdii.ca.gov/committees-and-advisory-groups/data-exchange-framework/'
        isRequired={false}
        isReadOnly={false}
        options={[
          {
            id: "18 Reasons; ;San Francisco=DXF002426",
            label: "18 Reasons; ;San Francisco=DXF002426",
          },
          {
            id: "1Heart Care Giver Services La Jolla; ;San Diego=DXF004424",
            label: "1Heart Care Giver Services La Jolla; ;San Diego=DXF004424",
          },
          {
            id: "211 LA; ;San Gabriel=DXF003327",
            label: "211 LA; ;San Gabriel=DXF003327",
          },
          {
            id: "24Hr HomeCare, LLC; ;El Segunda=DXF003692",
            label: "24Hr HomeCare, LLC; ;El Segunda=DXF003692",
          },
          {
            id: "360 Wellness Solutions; ;Rancho Mirage=DXF002990",
            label: "360 Wellness Solutions; ;Rancho Mirage=DXF002990",
          },
          {
            id: "360 Wellness Solutions;360 Wellness Solutions Physical Therapy & Rehabilitation Services, Professional Corporation;Rancho Mirage=DXF002991",
            label:
              "360 Wellness Solutions;360 Wellness Solutions Physical Therapy & Rehabilitation Services, Professional Corporation;Rancho Mirage=DXF002991",
          },
          {
            id: "4Cs Sonoma County; ;Santa Rosa=DXF003930",
            label: "4Cs Sonoma County; ;Santa Rosa=DXF003930",
          },
          {
            id: "980 E. Foothill Blvd, Suite 101, Upland, CA 91786; ;Upland=DXF001818",
            label:
              "980 E. Foothill Blvd, Suite 101, Upland, CA 91786; ;Upland=DXF001818",
          },
          {
            id: "A GRACE SUBACUTE & SKILLED CARE; ;San Jose=DXF005136",
            label: "A GRACE SUBACUTE & SKILLED CARE; ;San Jose=DXF005136",
          },
          {
            id: "A Senior connection; ;Sacramento=DXF004411",
            label: "A Senior connection; ;Sacramento=DXF004411",
          },
          {
            id: "A TU SALUD A MEDICAL CORPORATION; ;MONTCLAIR=DXF002645",
            label: "A TU SALUD A MEDICAL CORPORATION; ;MONTCLAIR=DXF002645",
          },
          {
            id: "A woman for women medical group Inc; ;GILROY=DXF003322",
            label: "A woman for women medical group Inc; ;GILROY=DXF003322",
          },
          {
            id: "A. Elaine Ashby, MD, Inc.; ;Lafayette=DXF000209",
            label: "A. Elaine Ashby, MD, Inc.; ;Lafayette=DXF000209",
          },
          {
            id: "AAA Comprehensive Healthcare Inc.; ;North Hollywood=DXF004413",
            label:
              "AAA Comprehensive Healthcare Inc.; ;North Hollywood=DXF004413",
          },
          {
            id: "ABA Enhancement LLC; ;Fountain Valley=DXF003721",
            label: "ABA Enhancement LLC; ;Fountain Valley=DXF003721",
          },
          {
            id: "Abayomi A. Odubela, MD, APC; ;Murrieta=DXF002058",
            label: "Abayomi A. Odubela, MD, APC; ;Murrieta=DXF002058",
          },
          {
            id: "ABC CHILDREN'S CLINIC; ;Foothill Ranch=DXF004576",
            label: "ABC CHILDREN'S CLINIC; ;Foothill Ranch=DXF004576",
          },
          {
            id: "Abdul W. Khan, MD; ;Manteca=DXF004291",
            label: "Abdul W. Khan, MD; ;Manteca=DXF004291",
          },
          {
            id: "ABID HUSSAIN MD; ;Hemet=DXF001666",
            label: "ABID HUSSAIN MD; ;Hemet=DXF001666",
          },
          {
            id: "ABM Medical Clinic Inc; ;Woodland Hills=DXF001699",
            label: "ABM Medical Clinic Inc; ;Woodland Hills=DXF001699",
          },
          {
            id: "Abrazar, Inc.; ;Westminster=DXF003584",
            label: "Abrazar, Inc.; ;Westminster=DXF003584",
          },
          {
            id: "Acacia Family Medical Group; ;Salinas=DXF003372",
            label: "Acacia Family Medical Group; ;Salinas=DXF003372",
          },
          {
            id: "ACASA Senior Care; ;Chino Hills=DXF004392",
            label: "ACASA Senior Care; ;Chino Hills=DXF004392",
          },
          {
            id: "ACASA Senior Care;SMR Healthcare Management;Chino Hills=DXF004393",
            label:
              "ACASA Senior Care;SMR Healthcare Management;Chino Hills=DXF004393",
          },
          {
            id: "ACC Care Center; ;Sacramento=DXF000260",
            label: "ACC Care Center; ;Sacramento=DXF000260",
          },
          {
            id: "Access TLC home health and hospice; ;Moorpark=DXF002441",
            label: "Access TLC home health and hospice; ;Moorpark=DXF002441",
          },
          {
            id: "Access TLC Home Health Care; ;Moorpark=DXF002686",
            label: "Access TLC Home Health Care; ;Moorpark=DXF002686",
          },
          {
            id: "Accumen TMS Center; ;Downey=DXF004092",
            label: "Accumen TMS Center; ;Downey=DXF004092",
          },
          {
            id: "ace care pharmacy management and consulting; ;tulare=DXF003355",
            label:
              "ace care pharmacy management and consulting; ;tulare=DXF003355",
          },
          {
            id: "ACES 2020 LLC; ;San Diego=DXF004028",
            label: "ACES 2020 LLC; ;San Diego=DXF004028",
          },
          {
            id: "ACHILLES PROSTHETICS AND ORTHOTI; ;Bakersfield=DXF005073",
            label: "ACHILLES PROSTHETICS AND ORTHOTI; ;Bakersfield=DXF005073",
          },
          {
            id: "ACHILLES PROSTHETICS AND ORTHOTI;CHANNEL ISLANDS PROSTHETICS AND ORTHOTICS, INC;ventura=DXF005074",
            label:
              "ACHILLES PROSTHETICS AND ORTHOTI;CHANNEL ISLANDS PROSTHETICS AND ORTHOTICS, INC;ventura=DXF005074",
          },
          {
            id: "ACHILLES PROSTHETICS AND ORTHOTI;R AND J PROSTHETICS;ventura=DXF005075",
            label:
              "ACHILLES PROSTHETICS AND ORTHOTI;R AND J PROSTHETICS;ventura=DXF005075",
          },
          {
            id: "ACMG; ;Oakland=DXF000334",
            label: "ACMG; ;Oakland=DXF000334",
          },
          {
            id: "ACMG;TSC Medical Director Group;Oakland=DXF000335",
            label: "ACMG;TSC Medical Director Group;Oakland=DXF000335",
          },
          {
            id: "Acuprogroup,inc.; ;Montebello=DXF000096",
            label: "Acuprogroup,inc.; ;Montebello=DXF000096",
          },
          {
            id: "adams medical group a professional corporation; ;turlock=DXF000155",
            label:
              "adams medical group a professional corporation; ;turlock=DXF000155",
          },
          {
            id: "Adria Brofman, M.D.; ;Pasadena=DXF000681",
            label: "Adria Brofman, M.D.; ;Pasadena=DXF000681",
          },
          {
            id: "adrian tripp md medical corporation; ;victorville=DXF002121",
            label:
              "adrian tripp md medical corporation; ;victorville=DXF002121",
          },
          {
            id: "Advanced Family Medical Group; ;Paramount=DXF001366",
            label: "Advanced Family Medical Group; ;Paramount=DXF001366",
          },
          {
            id: "Advanced Healthcare for Women & Children; ;Upland=DXF005765",
            label:
              "Advanced Healthcare for Women & Children; ;Upland=DXF005765",
          },
          {
            id: "Advanced Healthhcare Administrators; ;Bell=DXF001307",
            label: "Advanced Healthhcare Administrators; ;Bell=DXF001307",
          },
          {
            id: "Advanced Imaging of South Bay Inc.; ;Torrance=DXF001460",
            label: "Advanced Imaging of South Bay Inc.; ;Torrance=DXF001460",
          },
          {
            id: "Advanced Integrative Rehabilitation DBA Fyzical Therapy & Balance Center; ;Capitola=DXF005201",
            label:
              "Advanced Integrative Rehabilitation DBA Fyzical Therapy & Balance Center; ;Capitola=DXF005201",
          },
          {
            id: "Advanced Medical and Kidney Institute; ;Apple Valley=DXF000821",
            label:
              "Advanced Medical and Kidney Institute; ;Apple Valley=DXF000821",
          },
          {
            id: "Advanced Medical Associates, Inc.; ;Orange=DXF005058",
            label: "Advanced Medical Associates, Inc.; ;Orange=DXF005058",
          },
          {
            id: "ADVANCED ONCOLOGY SOUTH BAY LLC; ;Redondo Beach=DXF003843",
            label: "ADVANCED ONCOLOGY SOUTH BAY LLC; ;Redondo Beach=DXF003843",
          },
          {
            id: "Advanced Orthopaedic Surgery Center; ;Temecula=DXF001820",
            label: "Advanced Orthopaedic Surgery Center; ;Temecula=DXF001820",
          },
          {
            id: "Adventist Health Reedley Childrens; ;Reedley=DXF005541",
            label: "Adventist Health Reedley Childrens; ;Reedley=DXF005541",
          },
          {
            id: "Adventist Health System/West; ;Roseville=DXF003240",
            label: "Adventist Health System/West; ;Roseville=DXF003240",
          },
          {
            id: "Adventist Health System/West;Adventist Health Clearlake Hospital, Inc.;Clearlake=DXF003245",
            label:
              "Adventist Health System/West;Adventist Health Clearlake Hospital, Inc.;Clearlake=DXF003245",
          },
          {
            id: "Adventist Health System/West;Adventist Health Delano;Delano=DXF003246",
            label:
              "Adventist Health System/West;Adventist Health Delano;Delano=DXF003246",
          },
          {
            id: "Adventist Health System/West;Adventist Health Medical Center Tehachapi;Tehachapi=DXF003247",
            label:
              "Adventist Health System/West;Adventist Health Medical Center Tehachapi;Tehachapi=DXF003247",
          },
          {
            id: "Adventist Health System/West;Adventist Health Mendocino Coast;Fort Bragg=DXF003248",
            label:
              "Adventist Health System/West;Adventist Health Mendocino Coast;Fort Bragg=DXF003248",
          },
          {
            id: "Adventist Health System/West;Adventist Health Physicians Network;Roseville=DXF003249",
            label:
              "Adventist Health System/West;Adventist Health Physicians Network;Roseville=DXF003249",
          },
          {
            id: "Adventist Health System/West;Adventist Health Tulare;tulare=DXF003250",
            label:
              "Adventist Health System/West;Adventist Health Tulare;tulare=DXF003250",
          },
          {
            id: "Adventist Health System/West;Glendale Adventist Medical Center;Glendale=DXF003251",
            label:
              "Adventist Health System/West;Glendale Adventist Medical Center;Glendale=DXF003251",
          },
          {
            id: "Adventist Health System/West;Hanford Community Hospital;Hanford=DXF003252",
            label:
              "Adventist Health System/West;Hanford Community Hospital;Hanford=DXF003252",
          },
          {
            id: "Adventist Health System/West;Lodi Memorial Hospital Association, Inc.;Lodi=DXF003253",
            label:
              "Adventist Health System/West;Lodi Memorial Hospital Association, Inc.;Lodi=DXF003253",
          },
          {
            id: "Adventist Health System/West;Reedley Community Hospital;Reedley=DXF003254",
            label:
              "Adventist Health System/West;Reedley Community Hospital;Reedley=DXF003254",
          },
          {
            id: "Adventist Health System/West;Rideout Memorial Hospital;Marysville=DXF003255",
            label:
              "Adventist Health System/West;Rideout Memorial Hospital;Marysville=DXF003255",
          },
          {
            id: "Adventist Health System/West;San Joaquin Community Hospital;Bakersfield=DXF003256",
            label:
              "Adventist Health System/West;San Joaquin Community Hospital;Bakersfield=DXF003256",
          },
          {
            id: "Adventist Health System/West;Simi Valley Hospital and Health Care Services;SIMI VALLEY=DXF003257",
            label:
              "Adventist Health System/West;Simi Valley Hospital and Health Care Services;SIMI VALLEY=DXF003257",
          },
          {
            id: "Adventist Health System/West;Sonora Community Hospital;Sonora=DXF003258",
            label:
              "Adventist Health System/West;Sonora Community Hospital;Sonora=DXF003258",
          },
          {
            id: "Adventist Health System/West;St. Helena Hospital;St. Helena=DXF003259",
            label:
              "Adventist Health System/West;St. Helena Hospital;St. Helena=DXF003259",
          },
          {
            id: "Adventist Health System/West;Ukiah Adventist Hospital;Ukiah=DXF003260",
            label:
              "Adventist Health System/West;Ukiah Adventist Hospital;Ukiah=DXF003260",
          },
          {
            id: "Adventist Health System/West;White Memorial Medical Center;Los Angeles=DXF003261",
            label:
              "Adventist Health System/West;White Memorial Medical Center;Los Angeles=DXF003261",
          },
          {
            id: "Adventist Health System/West;Willits Hospital, Inc.;Willits=DXF003262",
            label:
              "Adventist Health System/West;Willits Hospital, Inc.;Willits=DXF003262",
          },
          {
            id: "Aetna; ;Concord=DXF001865",
            label: "Aetna; ;Concord=DXF001865",
          },
          {
            id: "Aetna; ;Louisville=DXF001948",
            label: "Aetna; ;Louisville=DXF001948",
          },
          {
            id: "Aetna Medicaid Administrators, LLC/Aetna Better Health of California; ;Phoenix=DXF000017",
            label:
              "Aetna Medicaid Administrators, LLC/Aetna Better Health of California; ;Phoenix=DXF000017",
          },
          {
            id: "Aetna Medicaid Administrators, LLC/Aetna Better Health of California;Aetna Better Health Of California;San Diego=DXF000428",
            label:
              "Aetna Medicaid Administrators, LLC/Aetna Better Health of California;Aetna Better Health Of California;San Diego=DXF000428",
          },
          {
            id: "Affiliates in Dermatology Medical Group, Inc.; ;Oakland=DXF000869",
            label:
              "Affiliates in Dermatology Medical Group, Inc.; ;Oakland=DXF000869",
          },
          {
            id: "Affinity Home Health Care Services, INC.; ;Riverside=DXF005408",
            label:
              "Affinity Home Health Care Services, INC.; ;Riverside=DXF005408",
          },
          {
            id: "Affordable Living for the Aging; ;West Hollywood=DXF000189",
            label: "Affordable Living for the Aging; ;West Hollywood=DXF000189",
          },
          {
            id: "Afrouz Gerayli MD INC; ;Camarillo=DXF000230",
            label: "Afrouz Gerayli MD INC; ;Camarillo=DXF000230",
          },
          {
            id: "AG Murrieta SNF, LLC; ;Murrieta=DXF005174",
            label: "AG Murrieta SNF, LLC; ;Murrieta=DXF005174",
          },
          {
            id: "Agoura-West Valley Pediatric Medical Group; ;West Hills=DXF004005",
            label:
              "Agoura-West Valley Pediatric Medical Group; ;West Hills=DXF004005",
          },
          {
            id: "AGSE,LLC.; ;Greenbrae=DXF004682",
            label: "AGSE,LLC.; ;Greenbrae=DXF004682",
          },
          {
            id: "Ahmad Hajj, MD INC; ;Santa Ana=DXF004419",
            label: "Ahmad Hajj, MD INC; ;Santa Ana=DXF004419",
          },
          {
            id: "AHMC Health System; ;Alhambra=DXF002493",
            label: "AHMC Health System; ;Alhambra=DXF002493",
          },
          {
            id: "AHMC Health System;Garfield Medical Center;Monterey Park=DXF002513",
            label:
              "AHMC Health System;Garfield Medical Center;Monterey Park=DXF002513",
          },
          {
            id: "AHMC Health System;Garfield Medical Center Laboratory;Monterey Park=DXF002536",
            label:
              "AHMC Health System;Garfield Medical Center Laboratory;Monterey Park=DXF002536",
          },
          {
            id: "AHMC Health System;Greater El Monte Community Hospital;South El Monte=DXF002537",
            label:
              "AHMC Health System;Greater El Monte Community Hospital;South El Monte=DXF002537",
          },
          {
            id: "AHMC Health System;Greater El Monte Community Hospital SNF;South El Monte=DXF002538",
            label:
              "AHMC Health System;Greater El Monte Community Hospital SNF;South El Monte=DXF002538",
          },
          {
            id: "AHMC Health System;Greater El Monte Community Hospital Laboratory;South El Monte=DXF002539",
            label:
              "AHMC Health System;Greater El Monte Community Hospital Laboratory;South El Monte=DXF002539",
          },
          {
            id: "AHMC Health System;Greater El Monte Community Hospital Cardiopulmonary Laboratory;South El Monte=DXF002540",
            label:
              "AHMC Health System;Greater El Monte Community Hospital Cardiopulmonary Laboratory;South El Monte=DXF002540",
          },
          {
            id: "AHMC Health System;Monterey Park Hospital;Monterey Park=DXF002541",
            label:
              "AHMC Health System;Monterey Park Hospital;Monterey Park=DXF002541",
          },
          {
            id: "AHMC Health System;Monterey Park Hospital Laboratory;Monterey Park=DXF002542",
            label:
              "AHMC Health System;Monterey Park Hospital Laboratory;Monterey Park=DXF002542",
          },
          {
            id: "AHMC Health System;Whittier Hospital Medical Center;Whittier=DXF002543",
            label:
              "AHMC Health System;Whittier Hospital Medical Center;Whittier=DXF002543",
          },
          {
            id: "AHMC Health System;Whittier Hospital Medical Center SNF;Whittier=DXF002544",
            label:
              "AHMC Health System;Whittier Hospital Medical Center SNF;Whittier=DXF002544",
          },
          {
            id: "AHMC Health System;Whittier Hospital Medical Center Laboratory;Whittier=DXF002545",
            label:
              "AHMC Health System;Whittier Hospital Medical Center Laboratory;Whittier=DXF002545",
          },
          {
            id: "AHMC Health System;Whittier Hospital Medical Center Cardiorespiratory Laboratory;Whittier=DXF002546",
            label:
              "AHMC Health System;Whittier Hospital Medical Center Cardiorespiratory Laboratory;Whittier=DXF002546",
          },
          {
            id: "AHMC Health System;Whittier Hospital Medical Center Women's Health Center;Whittier=DXF002547",
            label:
              "AHMC Health System;Whittier Hospital Medical Center Women's Health Center;Whittier=DXF002547",
          },
          {
            id: "AHMC Health System;Anaheim Regional Medical Center;Anaheim=DXF002548",
            label:
              "AHMC Health System;Anaheim Regional Medical Center;Anaheim=DXF002548",
          },
          {
            id: "AHMC Health System;Anaheim Regional Medical Center Laboratory;Anaheim=DXF002549",
            label:
              "AHMC Health System;Anaheim Regional Medical Center Laboratory;Anaheim=DXF002549",
          },
          {
            id: "AHMC Health System;Anaheim Regional Medical Center Blood Gas Laboratory;Anaheim=DXF002550",
            label:
              "AHMC Health System;Anaheim Regional Medical Center Blood Gas Laboratory;Anaheim=DXF002550",
          },
          {
            id: "AHMC Health System;Doctors Hospital of Riverside;Riverside=DXF002551",
            label:
              "AHMC Health System;Doctors Hospital of Riverside;Riverside=DXF002551",
          },
          {
            id: "AHMC Health System;Doctors Hospital of Riverside Laboratory;Riverside=DXF002552",
            label:
              "AHMC Health System;Doctors Hospital of Riverside Laboratory;Riverside=DXF002552",
          },
          {
            id: "AHMC Health System;Seton Medical Center;DALY CITY=DXF002553",
            label:
              "AHMC Health System;Seton Medical Center;DALY CITY=DXF002553",
          },
          {
            id: "AHMC Health System;Seton Medical Center Acute Psychiatric Hospital;DALY CITY=DXF002554",
            label:
              "AHMC Health System;Seton Medical Center Acute Psychiatric Hospital;DALY CITY=DXF002554",
          },
          {
            id: "AHMC Health System;Seton Medical Center SNF;DALY CITY=DXF002555",
            label:
              "AHMC Health System;Seton Medical Center SNF;DALY CITY=DXF002555",
          },
          {
            id: "AHMC Health System;San Gabriel Valley Medical Center;San Gabriel=DXF002556",
            label:
              "AHMC Health System;San Gabriel Valley Medical Center;San Gabriel=DXF002556",
          },
          {
            id: "AHMC Health System;San Gabriel Valley Medical Center Acute Psychiatric Hospital;San Gabriel=DXF002557",
            label:
              "AHMC Health System;San Gabriel Valley Medical Center Acute Psychiatric Hospital;San Gabriel=DXF002557",
          },
          {
            id: "AHMC Health System;San Gabriel Valley Medical Center SNF;San Gabriel=DXF002558",
            label:
              "AHMC Health System;San Gabriel Valley Medical Center SNF;San Gabriel=DXF002558",
          },
          {
            id: "AHMC Health System;San Gabriel Valley Medical Center Laboratory;San Gabriel=DXF002559",
            label:
              "AHMC Health System;San Gabriel Valley Medical Center Laboratory;San Gabriel=DXF002559",
          },
          {
            id: "AHMC Health System;Seton Medical Center Laboratory;DALY CITY=DXF002560",
            label:
              "AHMC Health System;Seton Medical Center Laboratory;DALY CITY=DXF002560",
          },
          {
            id: "AHMC Health System;Seton Medical Center Coastside Laboratory;DALY CITY=DXF002561",
            label:
              "AHMC Health System;Seton Medical Center Coastside Laboratory;DALY CITY=DXF002561",
          },
          {
            id: "AHMC Health System;Seton Medical Center Coastside;Moss Beach=DXF002567",
            label:
              "AHMC Health System;Seton Medical Center Coastside;Moss Beach=DXF002567",
          },
          {
            id: "AHMC Health System;Seton Medical Center Coastside SNF;Moss Beach=DXF002568",
            label:
              "AHMC Health System;Seton Medical Center Coastside SNF;Moss Beach=DXF002568",
          },
          {
            id: "AHMC Health System;Alhambra Hospital Medical Center;Alhambra=DXF002569",
            label:
              "AHMC Health System;Alhambra Hospital Medical Center;Alhambra=DXF002569",
          },
          {
            id: "AHMC Health System;Alhambra Hospital Medical Center SNF;Alhambra=DXF002570",
            label:
              "AHMC Health System;Alhambra Hospital Medical Center SNF;Alhambra=DXF002570",
          },
          {
            id: "AHMC Health System;Alhambra Hospital Medical Center Laboratory;Alhambra=DXF002571",
            label:
              "AHMC Health System;Alhambra Hospital Medical Center Laboratory;Alhambra=DXF002571",
          },
          {
            id: "AHMC Health System;San Gabriel Valley Medical Center Respiratory Care Laboratory;San Gabriel=DXF002574",
            label:
              "AHMC Health System;San Gabriel Valley Medical Center Respiratory Care Laboratory;San Gabriel=DXF002574",
          },
          {
            id: "AIDS Healthcare Foundation; ;Los Angeles=DXF003209",
            label: "AIDS Healthcare Foundation; ;Los Angeles=DXF003209",
          },
          {
            id: "AIDS Services Foundation of Orange County dba Radiant Health Centers; ;Irvine=DXF004267",
            label:
              "AIDS Services Foundation of Orange County dba Radiant Health Centers; ;Irvine=DXF004267",
          },
          {
            id: "AIMS MedCare Inc; ;Irvine=DXF004501",
            label: "AIMS MedCare Inc; ;Irvine=DXF004501",
          },
          {
            id: "Akhil Sharma MD Inc; ;victorville=DXF000762",
            label: "Akhil Sharma MD Inc; ;victorville=DXF000762",
          },
          {
            id: "Akhil Sharma MD Inc;Radiant Pediatrics;Apple Valley=DXF000764",
            label:
              "Akhil Sharma MD Inc;Radiant Pediatrics;Apple Valley=DXF000764",
          },
          {
            id: "Alameda Alliance for Health; ;Alameda=DXF001660",
            label: "Alameda Alliance for Health; ;Alameda=DXF001660",
          },
          {
            id: "Alameda County Health Care Services Agency; ;San Leandro=DXF000746",
            label:
              "Alameda County Health Care Services Agency; ;San Leandro=DXF000746",
          },
          {
            id: "Alameda County Health Care Services Agency;Alameda County Behavioral Health Care Services: MHP;Oakland=DXF000747",
            label:
              "Alameda County Health Care Services Agency;Alameda County Behavioral Health Care Services: MHP;Oakland=DXF000747",
          },
          {
            id: "Alameda County Health Care Services Agency;Alameda County Public Health Department;San Leandro=DXF000748",
            label:
              "Alameda County Health Care Services Agency;Alameda County Public Health Department;San Leandro=DXF000748",
          },
          {
            id: "Alameda County Health Care Services Agency;Alameda County Behavioral Health Care Services: DMC-ODS;Oakland=DXF002176",
            label:
              "Alameda County Health Care Services Agency;Alameda County Behavioral Health Care Services: DMC-ODS;Oakland=DXF002176",
          },
          {
            id: "Alameda Fire Department; ;Alameda=DXF004673",
            label: "Alameda Fire Department; ;Alameda=DXF004673",
          },
          {
            id: "Alameda Health System; ;Oakland=DXF000783",
            label: "Alameda Health System; ;Oakland=DXF000783",
          },
          {
            id: "Alameda Health System;Highland Hospital;Oakland=DXF000787",
            label: "Alameda Health System;Highland Hospital;Oakland=DXF000787",
          },
          {
            id: "Alameda Health System;Fairmont Hospital;San Leandro=DXF000788",
            label:
              "Alameda Health System;Fairmont Hospital;San Leandro=DXF000788",
          },
          {
            id: "Alameda Health System;John George Psychiatric Hospital;San Leandro=DXF000789",
            label:
              "Alameda Health System;John George Psychiatric Hospital;San Leandro=DXF000789",
          },
          {
            id: "Alameda Health System;San Leandro Hospital;San Leandro=DXF000790",
            label:
              "Alameda Health System;San Leandro Hospital;San Leandro=DXF000790",
          },
          {
            id: "Alameda Health System;Alameda Hospital;Alameda=DXF000791",
            label: "Alameda Health System;Alameda Hospital;Alameda=DXF000791",
          },
          {
            id: "Alameda Health System;Alameda Hospital - South Shore Convalescent;Alameda=DXF000793",
            label:
              "Alameda Health System;Alameda Hospital - South Shore Convalescent;Alameda=DXF000793",
          },
          {
            id: "Alameda Health System;Park Bridge Rehabilitation and Wellness Center;Alameda=DXF000794",
            label:
              "Alameda Health System;Park Bridge Rehabilitation and Wellness Center;Alameda=DXF000794",
          },
          {
            id: "Alameda Health System;Alameda Health Medical Group;San Leandro=DXF001432",
            label:
              "Alameda Health System;Alameda Health Medical Group;San Leandro=DXF001432",
          },
          {
            id: "Alameda Health System;Eastmont Wellness;Oakland=DXF001434",
            label: "Alameda Health System;Eastmont Wellness;Oakland=DXF001434",
          },
          {
            id: "Alameda Health System;Hayward Wellness;Hayward=DXF001437",
            label: "Alameda Health System;Hayward Wellness;Hayward=DXF001437",
          },
          {
            id: "Alameda Health System;Newark Wellness;Newark=DXF001438",
            label: "Alameda Health System;Newark Wellness;Newark=DXF001438",
          },
          {
            id: "Alameda Health System;Highland Wellness;Oakland=DXF001440",
            label: "Alameda Health System;Highland Wellness;Oakland=DXF001440",
          },
          {
            id: "Alameda Health System;Alameda Hospital Clinical Laboratory;Alameda=DXF001568",
            label:
              "Alameda Health System;Alameda Hospital Clinical Laboratory;Alameda=DXF001568",
          },
          {
            id: "Alameda Health System;Highland Hospital Clinical Laboratory;Oakland=DXF001569",
            label:
              "Alameda Health System;Highland Hospital Clinical Laboratory;Oakland=DXF001569",
          },
          {
            id: "Alameda Health System;Eastmont Wellness Center Clinical Laboratory;Oakland=DXF001570",
            label:
              "Alameda Health System;Eastmont Wellness Center Clinical Laboratory;Oakland=DXF001570",
          },
          {
            id: "Alameda Health System;Newark Wellness Center Clinical Laboratory;Newark=DXF001572",
            label:
              "Alameda Health System;Newark Wellness Center Clinical Laboratory;Newark=DXF001572",
          },
          {
            id: "Alameda Health System;John George Psychiatric Hospital Clinical Laboratory;San Leandro=DXF001573",
            label:
              "Alameda Health System;John George Psychiatric Hospital Clinical Laboratory;San Leandro=DXF001573",
          },
          {
            id: "Alameda Health System;Fairmont Hospital Clinical Laboratory;San Leandro=DXF001574",
            label:
              "Alameda Health System;Fairmont Hospital Clinical Laboratory;San Leandro=DXF001574",
          },
          {
            id: "Alameda Health System;San Leandro Hospital Clinical Laboratory;San Leandro=DXF001575",
            label:
              "Alameda Health System;San Leandro Hospital Clinical Laboratory;San Leandro=DXF001575",
          },
          {
            id: "Alameda Health System;Highland Hospital Sterile Compounding Pharmacy;Oakland=DXF001581",
            label:
              "Alameda Health System;Highland Hospital Sterile Compounding Pharmacy;Oakland=DXF001581",
          },
          {
            id: "Alameda Health System;Highland Care Pavilion Sterile Compounding Pharmacy;Oakland=DXF001582",
            label:
              "Alameda Health System;Highland Care Pavilion Sterile Compounding Pharmacy;Oakland=DXF001582",
          },
          {
            id: "Alameda Health System;Highland Hospital Pharmacy;Oakland=DXF001583",
            label:
              "Alameda Health System;Highland Hospital Pharmacy;Oakland=DXF001583",
          },
          {
            id: "Alameda Health System;Highland Hospital Outpatient Pharmacy;Oakland=DXF001584",
            label:
              "Alameda Health System;Highland Hospital Outpatient Pharmacy;Oakland=DXF001584",
          },
          {
            id: "Alameda Health System;Alameda Hospital Sterile Compounding Pharmacy;Alameda=DXF001585",
            label:
              "Alameda Health System;Alameda Hospital Sterile Compounding Pharmacy;Alameda=DXF001585",
          },
          {
            id: "Alameda Health System;Alameda Hospital Pharmacy;Alameda=DXF001588",
            label:
              "Alameda Health System;Alameda Hospital Pharmacy;Alameda=DXF001588",
          },
          {
            id: "Alameda Health System;San Leandro Hospital Sterile Compounding Pharmacy;San Leandro=DXF001589",
            label:
              "Alameda Health System;San Leandro Hospital Sterile Compounding Pharmacy;San Leandro=DXF001589",
          },
          {
            id: "Alameda Health System;San Leandro Hospital Pharmacy;San Leandro=DXF001590",
            label:
              "Alameda Health System;San Leandro Hospital Pharmacy;San Leandro=DXF001590",
          },
          {
            id: "Alameda Health System;Fairmont Hospital Pharmacy;San Leandro=DXF001591",
            label:
              "Alameda Health System;Fairmont Hospital Pharmacy;San Leandro=DXF001591",
          },
          {
            id: "Alameda Health System;John George Psychiatric Pavilion Pharmacy;San Leandro=DXF001593",
            label:
              "Alameda Health System;John George Psychiatric Pavilion Pharmacy;San Leandro=DXF001593",
          },
          {
            id: "Alameda Health System;Highland Hospital Substance Abuse Program;Oakland=DXF001595",
            label:
              "Alameda Health System;Highland Hospital Substance Abuse Program;Oakland=DXF001595",
          },
          {
            id: "Alan Schneider; ;Newport Beach=DXF000327",
            label: "Alan Schneider; ;Newport Beach=DXF000327",
          },
          {
            id: "Albion Medical Partners of California west, P.C.; ;Artesia=DXF001626",
            label:
              "Albion Medical Partners of California west, P.C.; ;Artesia=DXF001626",
          },
          {
            id: "Alcoholism Center For Women, Inc.; ;Los Angeles=DXF002913",
            label: "Alcoholism Center For Women, Inc.; ;Los Angeles=DXF002913",
          },
          {
            id: "Alden Terrace Convalescent Hospital; ;Los Angeles=DXF004199",
            label:
              "Alden Terrace Convalescent Hospital; ;Los Angeles=DXF004199",
          },
          {
            id: "Aleph Psychological Associates, dba The Clinic; ;San Francisco=DXF002804",
            label:
              "Aleph Psychological Associates, dba The Clinic; ;San Francisco=DXF002804",
          },
          {
            id: "Alex Harrison MD Inc.; ;Santa Maria=DXF000718",
            label: "Alex Harrison MD Inc.; ;Santa Maria=DXF000718",
          },
          {
            id: "Alexander Valley Healthcare; ;Cloverdale=DXF003328",
            label: "Alexander Valley Healthcare; ;Cloverdale=DXF003328",
          },
          {
            id: "Algos, Inc. a Medical Corporation; ;Pasadena=DXF002064",
            label: "Algos, Inc. a Medical Corporation; ;Pasadena=DXF002064",
          },
          {
            id: "Algos, Inc. a Medical Corporation;Synovation Medical Group;Pasadena=DXF002111",
            label:
              "Algos, Inc. a Medical Corporation;Synovation Medical Group;Pasadena=DXF002111",
          },
          {
            id: "Alicia Surgery Center; ;Laguna Hills=DXF005186",
            label: "Alicia Surgery Center; ;Laguna Hills=DXF005186",
          },
          {
            id: "Alisa L. Williams, MD, Inc; ;San Diego=DXF002440",
            label: "Alisa L. Williams, MD, Inc; ;San Diego=DXF002440",
          },
          {
            id: "All Care Living Home Inc; ;Sherman Oaks=DXF004600",
            label: "All Care Living Home Inc; ;Sherman Oaks=DXF004600",
          },
          {
            id: "All Care Medical Group, Inc.; ;Downey=DXF004872",
            label: "All Care Medical Group, Inc.; ;Downey=DXF004872",
          },
          {
            id: "All For Health, Health For All INC; ;Glendale=DXF001450",
            label: "All For Health, Health For All INC; ;Glendale=DXF001450",
          },
          {
            id: "All Inclusive Medical Services, Inc.; ;Carmichael=DXF000981",
            label:
              "All Inclusive Medical Services, Inc.; ;Carmichael=DXF000981",
          },
          {
            id: "All United Medical Group IPA; ;Colton=DXF002093",
            label: "All United Medical Group IPA; ;Colton=DXF002093",
          },
          {
            id: "Alla Skalnyi MD, Inc.; ;Burlingame=DXF001318",
            label: "Alla Skalnyi MD, Inc.; ;Burlingame=DXF001318",
          },
          {
            id: "Allcare Family; ;Norco=DXF001667",
            label: "Allcare Family; ;Norco=DXF001667",
          },
          {
            id: "Allcare Family;Allcare Family Clinic;Norco=DXF001680",
            label: "Allcare Family;Allcare Family Clinic;Norco=DXF001680",
          },
          {
            id: "Allcare Family;Allcare Family Medical Group;Buena Park=DXF001681",
            label:
              "Allcare Family;Allcare Family Medical Group;Buena Park=DXF001681",
          },
          {
            id: "Allergy and Asthma Specialist Doctors, Inc.; ;Glendale=DXF002950",
            label:
              "Allergy and Asthma Specialist Doctors, Inc.; ;Glendale=DXF002950",
          },
          {
            id: "Allergy and Asthma Treatment Center; ;Glendale=DXF002949",
            label: "Allergy and Asthma Treatment Center; ;Glendale=DXF002949",
          },
          {
            id: "Alliance Medical Center; ;HEALDSBURG=DXF002196",
            label: "Alliance Medical Center; ;HEALDSBURG=DXF002196",
          },
          {
            id: "Allied Health Solutions Medical Group, A Professional Corporation; ;Inglewood=DXF003654",
            label:
              "Allied Health Solutions Medical Group, A Professional Corporation; ;Inglewood=DXF003654",
          },
          {
            id: "All-Inclusive Community Health Center; ;Burbank=DXF004003",
            label: "All-Inclusive Community Health Center; ;Burbank=DXF004003",
          },
          {
            id: "Almaden Health and Rehabilitation Center; ;San Jose=DXF005129",
            label:
              "Almaden Health and Rehabilitation Center; ;San Jose=DXF005129",
          },
          {
            id: "Alpha J. Anders MD Inc.; ;Bakersfield=DXF001476",
            label: "Alpha J. Anders MD Inc.; ;Bakersfield=DXF001476",
          },
          {
            id: "Alpine County Health Department; ;Markleeville=DXF000063",
            label: "Alpine County Health Department; ;Markleeville=DXF000063",
          },
          {
            id: "Alpine Orthopaedic Medical Group Inc; ;Stockton=DXF000487",
            label: "Alpine Orthopaedic Medical Group Inc; ;Stockton=DXF000487",
          },
          {
            id: "Alta Los Angeles Hospitals, Inc.; ;Culver City=DXF003950",
            label: "Alta Los Angeles Hospitals, Inc.; ;Culver City=DXF003950",
          },
          {
            id: "Alta Los Angeles Hospitals, Inc.;Los Angeles Community Hospital;Los Angeles=DXF003952",
            label:
              "Alta Los Angeles Hospitals, Inc.;Los Angeles Community Hospital;Los Angeles=DXF003952",
          },
          {
            id: "Alta Los Angeles Hospitals, Inc.;Norwalk Community Hospital;Norwalk=DXF003954",
            label:
              "Alta Los Angeles Hospitals, Inc.;Norwalk Community Hospital;Norwalk=DXF003954",
          },
          {
            id: "Alta Los Angeles Hospitals, Inc.;Los Angeles Community Hospital at Bellflower;Bellflower=DXF003956",
            label:
              "Alta Los Angeles Hospitals, Inc.;Los Angeles Community Hospital at Bellflower;Bellflower=DXF003956",
          },
          {
            id: "Alta Newport Hospital, LLC; ;Culver City=DXF003948",
            label: "Alta Newport Hospital, LLC; ;Culver City=DXF003948",
          },
          {
            id: "Alta Newport Hospital, LLC;Foothill Regional Medical Center;Tustin=DXF003953",
            label:
              "Alta Newport Hospital, LLC;Foothill Regional Medical Center;Tustin=DXF003953",
          },
          {
            id: "AltaMed Health Network, Inc.; ;Montebello=DXF002399",
            label: "AltaMed Health Network, Inc.; ;Montebello=DXF002399",
          },
          {
            id: "AltaMed Health Services Corporation; ;Los Angeles=DXF000345",
            label:
              "AltaMed Health Services Corporation; ;Los Angeles=DXF000345",
          },
          {
            id: "Altura Centers for Health; ;tulare=DXF000635",
            label: "Altura Centers for Health; ;tulare=DXF000635",
          },
          {
            id: "Alzheimer's Los Angeles; ;Los Angeles=DXF003631",
            label: "Alzheimer's Los Angeles; ;Los Angeles=DXF003631",
          },
          {
            id: "Amalfi Hospice Care Inc; ;San Bernardino=DXF001193",
            label: "Amalfi Hospice Care Inc; ;San Bernardino=DXF001193",
          },
          {
            id: "Ambry Genetics Corporation; ;ALISO VIEJO=DXF004015",
            label: "Ambry Genetics Corporation; ;ALISO VIEJO=DXF004015",
          },
          {
            id: "Ambulatory Surgery Access Coalition dba Operation Access; ;San Francisco=DXF003278",
            label:
              "Ambulatory Surgery Access Coalition dba Operation Access; ;San Francisco=DXF003278",
          },
          {
            id: "AME MEDICAL GROUP; ;Downey=DXF004541",
            label: "AME MEDICAL GROUP; ;Downey=DXF004541",
          },
          {
            id: "American Bio-Clinical Laboratories; ;Los Angeles=DXF003927",
            label: "American Bio-Clinical Laboratories; ;Los Angeles=DXF003927",
          },
          {
            id: "American Bio-Clinical Laboratories; ;Los Angeles=DXF005090",
            label: "American Bio-Clinical Laboratories; ;Los Angeles=DXF005090",
          },
          {
            id: "American Choice Healthcare, LLC; ;Miami Lakes=DXF001882",
            label: "American Choice Healthcare, LLC; ;Miami Lakes=DXF001882",
          },
          {
            id: "American TrueCare; ;San Diego=DXF002588",
            label: "American TrueCare; ;San Diego=DXF002588",
          },
          {
            id: "AMG, A Professional Medical Corporation; ;Alhambra=DXF004597",
            label:
              "AMG, A Professional Medical Corporation; ;Alhambra=DXF004597",
          },
          {
            id: "Ampla Health; ;Yuba City=DXF001723",
            label: "Ampla Health; ;Yuba City=DXF001723",
          },
          {
            id: "Ampla Health; ;Yuba City=DXF002819",
            label: "Ampla Health; ;Yuba City=DXF002819",
          },
          {
            id: "AMVI Care Health Network; ;Orange, CA 92868=DXF005026",
            label: "AMVI Care Health Network; ;Orange, CA 92868=DXF005026",
          },
          {
            id: "AMVI Medical Group; ;Orange=DXF005004",
            label: "AMVI Medical Group; ;Orange=DXF005004",
          },
          {
            id: "AMVI Medical Group;AMVI Care Health Network;Orange=DXF005005",
            label:
              "AMVI Medical Group;AMVI Care Health Network;Orange=DXF005005",
          },
          {
            id: "Amy Tran, M.D.; ;Long Beach=DXF005476",
            label: "Amy Tran, M.D.; ;Long Beach=DXF005476",
          },
          {
            id: "Amy Tran, M.D.;Amy Tran, M.D.;Long Beach=DXF005477",
            label: "Amy Tran, M.D.;Amy Tran, M.D.;Long Beach=DXF005477",
          },
          {
            id: "An Elegant Sufficiency, A Psychological Corporation; ;Tracy=DXF005599",
            label:
              "An Elegant Sufficiency, A Psychological Corporation; ;Tracy=DXF005599",
          },
          {
            id: "Anabi Medical; ;Pomona=DXF000070",
            label: "Anabi Medical; ;Pomona=DXF000070",
          },
          {
            id: "Anaheim Community Hospital; ;Anaheim=DXF004010",
            label: "Anaheim Community Hospital; ;Anaheim=DXF004010",
          },
          {
            id: "Anaheim Global Medical Center; ;Anaheim=DXF003944",
            label: "Anaheim Global Medical Center; ;Anaheim=DXF003944",
          },
          {
            id: "Anaheim Global Medical Center;Anaheim Global Lab;Santa Ana=DXF003973",
            label:
              "Anaheim Global Medical Center;Anaheim Global Lab;Santa Ana=DXF003973",
          },
          {
            id: "Anderson Valley Health Center; ;Boonville=DXF002879",
            label: "Anderson Valley Health Center; ;Boonville=DXF002879",
          },
          {
            id: "Anderson Valley Health Center; ;Boonville=DXF005562",
            label: "Anderson Valley Health Center; ;Boonville=DXF005562",
          },
          {
            id: "Andre Yousefia MD Inc.; ;Thousand Oaks=DXF002273",
            label: "Andre Yousefia MD Inc.; ;Thousand Oaks=DXF002273",
          },
          {
            id: "Andrew Imparato inc; ;Fullerton=DXF000206",
            label: "Andrew Imparato inc; ;Fullerton=DXF000206",
          },
          {
            id: "Anesthesia Provider Group, Inc.; ;Pasadena=DXF002116",
            label: "Anesthesia Provider Group, Inc.; ;Pasadena=DXF002116",
          },
          {
            id: "Anesthesia Service Medical Group, Inc.; ;San Diego=DXF000045",
            label:
              "Anesthesia Service Medical Group, Inc.; ;San Diego=DXF000045",
          },
          {
            id: "Anesthesia Specialists of Orange County, Inc; ;Anaheim=DXF004072",
            label:
              "Anesthesia Specialists of Orange County, Inc; ;Anaheim=DXF004072",
          },
          {
            id: "Angel Care Hospice of Arcadia; ;Arcadia=DXF004608",
            label: "Angel Care Hospice of Arcadia; ;Arcadia=DXF004608",
          },
          {
            id: "Angel Medical Group; ;Los Angeles=DXF004894",
            label: "Angel Medical Group; ;Los Angeles=DXF004894",
          },
          {
            id: "Angeles Del Sol ADHC; ;Diamond Bar=DXF003575",
            label: "Angeles Del Sol ADHC; ;Diamond Bar=DXF003575",
          },
          {
            id: "ANGELES IPA, A MEDICAL CORPORATION; ;Cypress=DXF004721",
            label: "ANGELES IPA, A MEDICAL CORPORATION; ;Cypress=DXF004721",
          },
          {
            id: "Anil K Patel MD; ;Visalia=DXF004331",
            label: "Anil K Patel MD; ;Visalia=DXF004331",
          },
          {
            id: "Anita Carmen Choy; ;Palo Alto=DXF000286",
            label: "Anita Carmen Choy; ;Palo Alto=DXF000286",
          },
          {
            id: "Anjali Chanana MD Inc.; ;Los Gatos=DXF004514",
            label: "Anjali Chanana MD Inc.; ;Los Gatos=DXF004514",
          },
          {
            id: "Anjali Gulati MD; ;San Jose=DXF004239",
            label: "Anjali Gulati MD; ;San Jose=DXF004239",
          },
          {
            id: "Anjani Thakur, MD Inc.; ;turlock=DXF000765",
            label: "Anjani Thakur, MD Inc.; ;turlock=DXF000765",
          },
          {
            id: "Antelope Valley Medical Center; ;Lancaster=DXF000413",
            label: "Antelope Valley Medical Center; ;Lancaster=DXF000413",
          },
          {
            id: "Anthem Blue Cross; ;Woodland Hills=DXF001957",
            label: "Anthem Blue Cross; ;Woodland Hills=DXF001957",
          },
          {
            id: "Anthem Blue Cross; ;Woodland Hills=DXF002018",
            label: "Anthem Blue Cross; ;Woodland Hills=DXF002018",
          },
          {
            id: "Anthem Blue Cross of CA; ;Woodland Hills=DXF002002",
            label: "Anthem Blue Cross of CA; ;Woodland Hills=DXF002002",
          },
          {
            id: "Anthony G Sanzone MD; ;Chula Vista=DXF002082",
            label: "Anthony G Sanzone MD; ;Chula Vista=DXF002082",
          },
          {
            id: "Anthony S. Pan, D.M.D., Inc.; ;S. El Monte=DXF005147",
            label: "Anthony S. Pan, D.M.D., Inc.; ;S. El Monte=DXF005147",
          },
          {
            id: "Anti-Aging & Wellness Center; ;Bakersfield=DXF000618",
            label: "Anti-Aging & Wellness Center; ;Bakersfield=DXF000618",
          },
          {
            id: "ANTONIO A TAN MD PROFESSIONAL CORPORATION; ;MORENO VALLEY=DXF001532",
            label:
              "ANTONIO A TAN MD PROFESSIONAL CORPORATION; ;MORENO VALLEY=DXF001532",
          },
          {
            id: "Anu Chirala A Medical Corporation; ;Morgan Hill=DXF004234",
            label: "Anu Chirala A Medical Corporation; ;Morgan Hill=DXF004234",
          },
          {
            id: "Anuradha Dubey, MD, Inc; ;Modesto=DXF004505",
            label: "Anuradha Dubey, MD, Inc; ;Modesto=DXF004505",
          },
          {
            id: "AOCL LLC; ;Oroville=DXF004622",
            label: "AOCL LLC; ;Oroville=DXF004622",
          },
          {
            id: "Aparna Sharma; ;Hesperia=DXF000757",
            label: "Aparna Sharma; ;Hesperia=DXF000757",
          },
          {
            id: "Aparna Sharma;Radiant Pediatrics;Apple Valley=DXF000761",
            label: "Aparna Sharma;Radiant Pediatrics;Apple Valley=DXF000761",
          },
          {
            id: "Apex Dermatology; ;Westlake Village=DXF000167",
            label: "Apex Dermatology; ;Westlake Village=DXF000167",
          },
          {
            id: "Apex Health Care Services; ;Bellflower=DXF003977",
            label: "Apex Health Care Services; ;Bellflower=DXF003977",
          },
          {
            id: "APLA Health & Wellness; ;Los Angeles=DXF002287",
            label: "APLA Health & Wellness; ;Los Angeles=DXF002287",
          },
          {
            id: "Apollo Medical Holdings, Inc.; ;Alhambra=DXF004084",
            label: "Apollo Medical Holdings, Inc.; ;Alhambra=DXF004084",
          },
          {
            id: "Apple Valley Post-Acute Rehab; ;Sebastopol=DXF004567",
            label: "Apple Valley Post-Acute Rehab; ;Sebastopol=DXF004567",
          },
          {
            id: "AppleCare Hospitalists Medical Group, Inc.; ;La Palma=DXF000713",
            label:
              "AppleCare Hospitalists Medical Group, Inc.; ;La Palma=DXF000713",
          },
          {
            id: "AppleCare Medical Group St Francis, Inc.; ;La Palma=DXF000712",
            label:
              "AppleCare Medical Group St Francis, Inc.; ;La Palma=DXF000712",
          },
          {
            id: "AppleCare Medical Group, Inc.; ;La Palma=DXF000711",
            label: "AppleCare Medical Group, Inc.; ;La Palma=DXF000711",
          },
          {
            id: "Applewood Operating Company LLD; ;Redding=DXF004581",
            label: "Applewood Operating Company LLD; ;Redding=DXF004581",
          },
          {
            id: "Applied Research Works; ;Fremont=DXF003325",
            label: "Applied Research Works; ;Fremont=DXF003325",
          },
          {
            id: "Ararat Convalescent Hospital; ;Los Angeles=DXF005062",
            label: "Ararat Convalescent Hospital; ;Los Angeles=DXF005062",
          },
          {
            id: "Ararat Nursing Facility; ;Mission Hills=DXF005086",
            label: "Ararat Nursing Facility; ;Mission Hills=DXF005086",
          },
          {
            id: "Area 12 Agency on Aging; ;Sonora=DXF001489",
            label: "Area 12 Agency on Aging; ;Sonora=DXF001489",
          },
          {
            id: "Area 4 Agency on Aging; ;Sacramento=DXF003266",
            label: "Area 4 Agency on Aging; ;Sacramento=DXF003266",
          },
          {
            id: "Argent Medical Group Inc; ;Carson=DXF002969",
            label: "Argent Medical Group Inc; ;Carson=DXF002969",
          },
          {
            id: "arleta urgentcare and family clinic; ;arleta=DXF003359",
            label: "arleta urgentcare and family clinic; ;arleta=DXF003359",
          },
          {
            id: "Arlington Physicians Choice; ;Riverside=DXF003358",
            label: "Arlington Physicians Choice; ;Riverside=DXF003358",
          },
          {
            id: "ARNOLD J BLUSTEIN; ;San Leandro=DXF000176",
            label: "ARNOLD J BLUSTEIN; ;San Leandro=DXF000176",
          },
          {
            id: "Arrae Health; ;Corona=DXF003643",
            label: "Arrae Health; ;Corona=DXF003643",
          },
          {
            id: "Arrowhead Family Medical Group Inc; ;Redlands=DXF000646",
            label: "Arrowhead Family Medical Group Inc; ;Redlands=DXF000646",
          },
          {
            id: "Arroyo Vista Family Health Center; ;Los Angeles=DXF000457",
            label: "Arroyo Vista Family Health Center; ;Los Angeles=DXF000457",
          },
          {
            id: "Arta Western California, Inc.; ;El Segundo=DXF000702",
            label: "Arta Western California, Inc.; ;El Segundo=DXF000702",
          },
          {
            id: "Artesia Christian Home; ;Artesia=DXF002604",
            label: "Artesia Christian Home; ;Artesia=DXF002604",
          },
          {
            id: "Arthur Kowell; ;Encino=DXF000178",
            label: "Arthur Kowell; ;Encino=DXF000178",
          },
          {
            id: "Arti Pediatrics, Inc.; ;Sunnyvale=DXF001634",
            label: "Arti Pediatrics, Inc.; ;Sunnyvale=DXF001634",
          },
          {
            id: "Arun Villivalam MD; ;Los Gatos=DXF004201",
            label: "Arun Villivalam MD; ;Los Gatos=DXF004201",
          },
          {
            id: "ARUP Laboratories, Inc.; ;Salt Lake City=DXF005204",
            label: "ARUP Laboratories, Inc.; ;Salt Lake City=DXF005204",
          },
          {
            id: "ARUP Laboratories, Inc.;ARUP Laboratories at University Hospital;Salt Lake=DXF005205",
            label:
              "ARUP Laboratories, Inc.;ARUP Laboratories at University Hospital;Salt Lake=DXF005205",
          },
          {
            id: "ARUP Laboratories, Inc.;ARUP Laboratories at Huntsman;Salt Lake=DXF005206",
            label:
              "ARUP Laboratories, Inc.;ARUP Laboratories at Huntsman;Salt Lake=DXF005206",
          },
          {
            id: "Arvind Salwan, MD PC; ;Hesperia=DXF003580",
            label: "Arvind Salwan, MD PC; ;Hesperia=DXF003580",
          },
          {
            id: "Ascencia; ;Glendale=DXF002915",
            label: "Ascencia; ;Glendale=DXF002915",
          },
          {
            id: "Asian Americans for Community Involvement of Santa Clara County Inc.; ;San Jose=DXF004071",
            label:
              "Asian Americans for Community Involvement of Santa Clara County Inc.; ;San Jose=DXF004071",
          },
          {
            id: "Asian Community Medical Group, Inc. dba Associated Dignity Medical Group, Inc.; ;Cypress=DXF004827",
            label:
              "Asian Community Medical Group, Inc. dba Associated Dignity Medical Group, Inc.; ;Cypress=DXF004827",
          },
          {
            id: "Asian Health Services; ;Oakland=DXF003618",
            label: "Asian Health Services; ;Oakland=DXF003618",
          },
          {
            id: "Asian HealthLink; ;Fremont=DXF001155",
            label: "Asian HealthLink; ;Fremont=DXF001155",
          },
          {
            id: "Asian Pacific Health Care Venture, Inc.; ;Los Angeles=DXF000520",
            label:
              "Asian Pacific Health Care Venture, Inc.; ;Los Angeles=DXF000520",
          },
          {
            id: "Aspen Family Medicine & Geriatrics; ;Rancho Cucamonga=DXF001708",
            label:
              "Aspen Family Medicine & Geriatrics; ;Rancho Cucamonga=DXF001708",
          },
          {
            id: "Aspen Medical Group, Inc.; ;Corona=DXF001351",
            label: "Aspen Medical Group, Inc.; ;Corona=DXF001351",
          },
          {
            id: "ASPEN PEDIATRIC CLINIC INC.; ;victorville=DXF002042",
            label: "ASPEN PEDIATRIC CLINIC INC.; ;victorville=DXF002042",
          },
          {
            id: "Aspire Health Medical Partners of California, P.C.; ;Artesia=DXF001625",
            label:
              "Aspire Health Medical Partners of California, P.C.; ;Artesia=DXF001625",
          },
          {
            id: "ASPL; ;New york=DXF004055",
            label: "ASPL; ;New york=DXF004055",
          },
          {
            id: "Associated OB/GYN Specialists of Santa Barbara; ;Santa Barbara=DXF003243",
            label:
              "Associated OB/GYN Specialists of Santa Barbara; ;Santa Barbara=DXF003243",
          },
          {
            id: "Associates In Women's Health Care; ;Roseville=DXF000489",
            label: "Associates In Women's Health Care; ;Roseville=DXF000489",
          },
          {
            id: "Athena Eye Care; ;MISSION VIEJO=DXF002252",
            label: "Athena Eye Care; ;MISSION VIEJO=DXF002252",
          },
          {
            id: "ATHENA MEDICAL GROUP; ;Monterey=DXF001714",
            label: "ATHENA MEDICAL GROUP; ;Monterey=DXF001714",
          },
          {
            id: "Atherton Baptist Homes; ;Alhambra=DXF002463",
            label: "Atherton Baptist Homes; ;Alhambra=DXF002463",
          },
          {
            id: "Atlas Intensive Care; ;San Jose=DXF004592",
            label: "Atlas Intensive Care; ;San Jose=DXF004592",
          },
          {
            id: "Attenda Medical Group, Inc; ;Santa Rosa=DXF000518",
            label: "Attenda Medical Group, Inc; ;Santa Rosa=DXF000518",
          },
          {
            id: "Auburn Medical Group; ;Auuburn=DXF002181",
            label: "Auburn Medical Group; ;Auuburn=DXF002181",
          },
          {
            id: "Auker Eye Institute; ;Pleasanton=DXF000625",
            label: "Auker Eye Institute; ;Pleasanton=DXF000625",
          },
          {
            id: "Aurora Medical Corporation; ;El Monte=DXF005746",
            label: "Aurora Medical Corporation; ;El Monte=DXF005746",
          },
          {
            id: "Avala Pediatrics; ;Citrus Heights=DXF000854",
            label: "Avala Pediatrics; ;Citrus Heights=DXF000854",
          },
          {
            id: "Avala Pediatrics;Avala Pediatrics Roseville;Roseville=DXF000856",
            label:
              "Avala Pediatrics;Avala Pediatrics Roseville;Roseville=DXF000856",
          },
          {
            id: "Avenal Community Health Center dba Aria Community Health Center; ;Lemoore=DXF000034",
            label:
              "Avenal Community Health Center dba Aria Community Health Center; ;Lemoore=DXF000034",
          },
          {
            id: "Avocado Medical Clinic Professional; ;perris=DXF001586",
            label: "Avocado Medical Clinic Professional; ;perris=DXF001586",
          },
          {
            id: "AWHC-Mission Palms Healthcare; ;Westminster=DXF004220",
            label: "AWHC-Mission Palms Healthcare; ;Westminster=DXF004220",
          },
          {
            id: "Axis Community Health; ;Pleasanton=DXF001039",
            label: "Axis Community Health; ;Pleasanton=DXF001039",
          },
          {
            id: "Bahman Omrani; ;Sherman Oaks=DXF000180",
            label: "Bahman Omrani; ;Sherman Oaks=DXF000180",
          },
          {
            id: "Bakersfield American Indian Health Project; ;Bakersfield=DXF002635",
            label:
              "Bakersfield American Indian Health Project; ;Bakersfield=DXF002635",
          },
          {
            id: "Bakersfield Family Medical Group; ;Bakersfield=DXF003477",
            label: "Bakersfield Family Medical Group; ;Bakersfield=DXF003477",
          },
          {
            id: "Bakersfield Family Medical Group;CCPN;San Luis Obispo=DXF003479",
            label:
              "Bakersfield Family Medical Group;CCPN;San Luis Obispo=DXF003479",
          },
          {
            id: "Bakersfield Heart Hospital; ;Bakersfield=DXF000012",
            label: "Bakersfield Heart Hospital; ;Bakersfield=DXF000012",
          },
          {
            id: "Balboa Nephrology Medical Group, Inc; ;La Jolla=DXF001938",
            label: "Balboa Nephrology Medical Group, Inc; ;La Jolla=DXF001938",
          },
          {
            id: "Balboa Park Internal Medicine; ;San Diego=DXF002148",
            label: "Balboa Park Internal Medicine; ;San Diego=DXF002148",
          },
          {
            id: "BALDEV RAI MD; ;Riverside=DXF000240",
            label: "BALDEV RAI MD; ;Riverside=DXF000240",
          },
          {
            id: "Baldev Singh, MD, FCCP, Inc; ;Redding=DXF001693",
            label: "Baldev Singh, MD, FCCP, Inc; ;Redding=DXF001693",
          },
          {
            id: "Baldwin Family Medicine; ;goleta=DXF001249",
            label: "Baldwin Family Medicine; ;goleta=DXF001249",
          },
          {
            id: "BALDWIN MD INC BENNER MD INC & BENNER MD INC GEN PTR DBA Monterey County Surgical Associates; ;Salinas=DXF001482",
            label:
              "BALDWIN MD INC BENNER MD INC & BENNER MD INC GEN PTR DBA Monterey County Surgical Associates; ;Salinas=DXF001482",
          },
          {
            id: "Barbara Hom M.D.; ;Los Gatos=DXF001644",
            label: "Barbara Hom M.D.; ;Los Gatos=DXF001644",
          },
          {
            id: "Barstow Community Hospital; ;Barstow=DXF002113",
            label: "Barstow Community Hospital; ;Barstow=DXF002113",
          },
          {
            id: "Barton Healthcare System dba Barton Memorial Hospital; ;South Lake Tahoe=DXF001335",
            label:
              "Barton Healthcare System dba Barton Memorial Hospital; ;South Lake Tahoe=DXF001335",
          },
          {
            id: "Barton Healthcare System dba Barton Memorial Hospital;Barton Memorial Hospital Skilled Nursing Facility aka Barton Hospital D/P SNF;South Lake Tahoe=DXF001562",
            label:
              "Barton Healthcare System dba Barton Memorial Hospital;Barton Memorial Hospital Skilled Nursing Facility aka Barton Hospital D/P SNF;South Lake Tahoe=DXF001562",
          },
          {
            id: "Barton Healthcare System dba Barton Memorial Hospital;Barton Healthcare System dba Barton Memorial Hospital;South Lake Tahoe=DXF001565",
            label:
              "Barton Healthcare System dba Barton Memorial Hospital;Barton Healthcare System dba Barton Memorial Hospital;South Lake Tahoe=DXF001565",
          },
          {
            id: "Bassam G Saffouri MD; ;Los Gatos=DXF001645",
            label: "Bassam G Saffouri MD; ;Los Gatos=DXF001645",
          },
          {
            id: "Basso Podiatry Group; ;Davis=DXF000837",
            label: "Basso Podiatry Group; ;Davis=DXF000837",
          },
          {
            id: "Bay Area Center for Reproductive Medicine; ;Menlo PArk=DXF003374",
            label:
              "Bay Area Center for Reproductive Medicine; ;Menlo PArk=DXF003374",
          },
          {
            id: "Bay Area Healthcare Center; ;Oakland=DXF002212",
            label: "Bay Area Healthcare Center; ;Oakland=DXF002212",
          },
          {
            id: "Bay Area Healthcare Center; ;Oakland=DXF005020",
            label: "Bay Area Healthcare Center; ;Oakland=DXF005020",
          },
          {
            id: "Bay Area Neurocare; ;San Jose=DXF004523",
            label: "Bay Area Neurocare; ;San Jose=DXF004523",
          },
          {
            id: "Bay Area Union Health Center; ;Millbrae=DXF001638",
            label: "Bay Area Union Health Center; ;Millbrae=DXF001638",
          },
          {
            id: "Bay Family Medical Group; ;San Mateo=DXF001540",
            label: "Bay Family Medical Group; ;San Mateo=DXF001540",
          },
          {
            id: "BAYARD W. CHANG, MD, INC.; ;Sacramento=DXF000499",
            label: "BAYARD W. CHANG, MD, INC.; ;Sacramento=DXF000499",
          },
          {
            id: "Bayfront Youth and Family Services; ;Long Beach=DXF005161",
            label: "Bayfront Youth and Family Services; ;Long Beach=DXF005161",
          },
          {
            id: "Baywood Court; ;Castro Valley=DXF002406",
            label: "Baywood Court; ;Castro Valley=DXF002406",
          },
          {
            id: "Baz Allergy, Asthma & Sinus Center; ;Fresno=DXF001069",
            label: "Baz Allergy, Asthma & Sinus Center; ;Fresno=DXF001069",
          },
          {
            id: "Beach Cities Internal Medicine; ;Torrance=DXF000946",
            label: "Beach Cities Internal Medicine; ;Torrance=DXF000946",
          },
          {
            id: "Beachside Nursing Center; ;Huntington Beach=DXF004452",
            label: "Beachside Nursing Center; ;Huntington Beach=DXF004452",
          },
          {
            id: "BEACHSIDE POST ACUTE; ;Long Beach=DXF002987",
            label: "BEACHSIDE POST ACUTE; ;Long Beach=DXF002987",
          },
          {
            id: "BEAR VALLEY CLINICA MEDICA FAMILIAR; ;victorville=DXF001204",
            label:
              "BEAR VALLEY CLINICA MEDICA FAMILIAR; ;victorville=DXF001204",
          },
          {
            id: "bear valley community hospital; ;big bear lake=DXF000065",
            label: "bear valley community hospital; ;big bear lake=DXF000065",
          },
          {
            id: "Beaver Medical Group, P.C.; ;Minnetonka=DXF000706",
            label: "Beaver Medical Group, P.C.; ;Minnetonka=DXF000706",
          },
          {
            id: "Behavioral Health Services; ;Gardena=DXF002713",
            label: "Behavioral Health Services; ;Gardena=DXF002713",
          },
          {
            id: "Behavioral Intervention Association; ;Emeryville=DXF004903",
            label: "Behavioral Intervention Association; ;Emeryville=DXF004903",
          },
          {
            id: "Behavioral Support Partnership; ;Dana Point=DXF003673",
            label: "Behavioral Support Partnership; ;Dana Point=DXF003673",
          },
          {
            id: "Bella Vista ENT; ;Thousand Oaks=DXF005039",
            label: "Bella Vista ENT; ;Thousand Oaks=DXF005039",
          },
          {
            id: "Bella Vista Medical Group IPA; ;Montebello=DXF000071",
            label: "Bella Vista Medical Group IPA; ;Montebello=DXF000071",
          },
          {
            id: "Bellaken Skilled Nursing Center; ;Oakland=DXF004642",
            label: "Bellaken Skilled Nursing Center; ;Oakland=DXF004642",
          },
          {
            id: "Bellaken Skilled Nursing Center;Marina Garden Nursing  Center, Inc.;Alameda=DXF004644",
            label:
              "Bellaken Skilled Nursing Center;Marina Garden Nursing  Center, Inc.;Alameda=DXF004644",
          },
          {
            id: "Bellaken Skilled Nursing Center;Bancroft Healthcare Center;San Leandro=DXF005494",
            label:
              "Bellaken Skilled Nursing Center;Bancroft Healthcare Center;San Leandro=DXF005494",
          },
          {
            id: "Bellaken Skilled Nursing Center;Berkeley Pines Skilled Nursing Center;Berkeley=DXF005495",
            label:
              "Bellaken Skilled Nursing Center;Berkeley Pines Skilled Nursing Center;Berkeley=DXF005495",
          },
          {
            id: "Bellaken Skilled Nursing Center;Pittsburg Skilled Nursing Center;Pittsburg=DXF005496",
            label:
              "Bellaken Skilled Nursing Center;Pittsburg Skilled Nursing Center;Pittsburg=DXF005496",
          },
          {
            id: "BELLFLOWER POST ACUTE; ;Bellflower=DXF004032",
            label: "BELLFLOWER POST ACUTE; ;Bellflower=DXF004032",
          },
          {
            id: "Bendito Medical Corporation; ;San Bernardino=DXF004230",
            label: "Bendito Medical Corporation; ;San Bernardino=DXF004230",
          },
          {
            id: "Bendito Pediatrics, Inc; ;Canoga Park=DXF004229",
            label: "Bendito Pediatrics, Inc; ;Canoga Park=DXF004229",
          },
          {
            id: "BENEJ Pediatrics Inc; ;Loma Linda=DXF001011",
            label: "BENEJ Pediatrics Inc; ;Loma Linda=DXF001011",
          },
          {
            id: "Benevolence Industries Incorporated; ;Torrance=DXF003281",
            label: "Benevolence Industries Incorporated; ;Torrance=DXF003281",
          },
          {
            id: "Benny J. Guzman, MD Corp; ;Chino Hills=DXF000888",
            label: "Benny J. Guzman, MD Corp; ;Chino Hills=DXF000888",
          },
          {
            id: "Bernaldez-Blanche Consulting LLC; ;Van Nuys=DXF002442",
            label: "Bernaldez-Blanche Consulting LLC; ;Van Nuys=DXF002442",
          },
          {
            id: "Bernaldez-Blanche Consulting LLC;EpicWave Laboratory;Van Nuys=DXF002443",
            label:
              "Bernaldez-Blanche Consulting LLC;EpicWave Laboratory;Van Nuys=DXF002443",
          },
          {
            id: "Bernard A. Michlin, MD; ;San Diego=DXF001757",
            label: "Bernard A. Michlin, MD; ;San Diego=DXF001757",
          },
          {
            id: "Bernous Psychological Services; ;Newport Beach=DXF003674",
            label: "Bernous Psychological Services; ;Newport Beach=DXF003674",
          },
          {
            id: "Bethany Home Society of San Joaquin County; ;Ripon=DXF005265",
            label:
              "Bethany Home Society of San Joaquin County; ;Ripon=DXF005265",
          },
          {
            id: "Bethany Home Society of San Joaquin County, Inc.; ;Ripon=DXF003196",
            label:
              "Bethany Home Society of San Joaquin County, Inc.; ;Ripon=DXF003196",
          },
          {
            id: "Bethel Lutheran Home, Inc.; ;Selma=DXF005339",
            label: "Bethel Lutheran Home, Inc.; ;Selma=DXF005339",
          },
          {
            id: "Better Care Inc.; ;San Jose=DXF004888",
            label: "Better Care Inc.; ;San Jose=DXF004888",
          },
          {
            id: "Beverly Community Hospital Association D/B/A Beverly Hospital; ;Montebello=DXF001604",
            label:
              "Beverly Community Hospital Association D/B/A Beverly Hospital; ;Montebello=DXF001604",
          },
          {
            id: "Beverly Hills Pediatrics; ;Beverly Hills=DXF004371",
            label: "Beverly Hills Pediatrics; ;Beverly Hills=DXF004371",
          },
          {
            id: "Beverly Radiology Medical Group III; ;Los Angeles=DXF003884",
            label:
              "Beverly Radiology Medical Group III; ;Los Angeles=DXF003884",
          },
          {
            id: "Beverly Radiology Medical Group III;Norcal Imaging Fremont GP (BRMG III);Los Angeles=DXF003886",
            label:
              "Beverly Radiology Medical Group III;Norcal Imaging Fremont GP (BRMG III);Los Angeles=DXF003886",
          },
          {
            id: "Beverly Radiology Medical Group III;Santa Rosa Imaging Center Medical Group;Los Angeles=DXF003887",
            label:
              "Beverly Radiology Medical Group III;Santa Rosa Imaging Center Medical Group;Los Angeles=DXF003887",
          },
          {
            id: "Beverly Radiology Medical Group III;Radnet Medical Imaging San Francisco;Los Angeles=DXF003888",
            label:
              "Beverly Radiology Medical Group III;Radnet Medical Imaging San Francisco;Los Angeles=DXF003888",
          },
          {
            id: "Beverly Radiology Medical Group III;Diagnostic Radiological Imaging Elk Grove;Los Angeles=DXF003889",
            label:
              "Beverly Radiology Medical Group III;Diagnostic Radiological Imaging Elk Grove;Los Angeles=DXF003889",
          },
          {
            id: "Beverly Radiology Medical Group III;Stockton Diagnostic Imaging;Los Angeles=DXF003890",
            label:
              "Beverly Radiology Medical Group III;Stockton Diagnostic Imaging;Los Angeles=DXF003890",
          },
          {
            id: "Beverly Radiology Medical Group III;Desert Advanced Imaging Medical Center;Los Angeles=DXF003891",
            label:
              "Beverly Radiology Medical Group III;Desert Advanced Imaging Medical Center;Los Angeles=DXF003891",
          },
          {
            id: "Beverly Radiology Medical Group III;San Fernando Valley;Los Angeles=DXF003892",
            label:
              "Beverly Radiology Medical Group III;San Fernando Valley;Los Angeles=DXF003892",
          },
          {
            id: "Beverly Radiology Medical Group III;Fresno Imaging Center;Los Angeles=DXF003893",
            label:
              "Beverly Radiology Medical Group III;Fresno Imaging Center;Los Angeles=DXF003893",
          },
          {
            id: "Beverly Radiology Medical Group III;Pronet Imaging Medical Group, Inc.;Los Angeles=DXF003894",
            label:
              "Beverly Radiology Medical Group III;Pronet Imaging Medical Group, Inc.;Los Angeles=DXF003894",
          },
          {
            id: "Beyond Lucid Technologies, Inc.; ;Danville=DXF000016",
            label: "Beyond Lucid Technologies, Inc.; ;Danville=DXF000016",
          },
          {
            id: "Big Sur Health Center; ;Big Sur=DXF002043",
            label: "Big Sur Health Center; ;Big Sur=DXF002043",
          },
          {
            id: "Bikramjit S. Ahluwalia, MD INC; ;Apple Valley=DXF005800",
            label: "Bikramjit S. Ahluwalia, MD INC; ;Apple Valley=DXF005800",
          },
          {
            id: "Bingtao Lin MD. PC; ;FOLSOM=DXF000890",
            label: "Bingtao Lin MD. PC; ;FOLSOM=DXF000890",
          },
          {
            id: "Biocorp Clinical Lab, INC; ;Whittier=DXF004563",
            label: "Biocorp Clinical Lab, INC; ;Whittier=DXF004563",
          },
          {
            id: "BioReference Health, LLC; ;Elmwood Park=DXF000101",
            label: "BioReference Health, LLC; ;Elmwood Park=DXF000101",
          },
          {
            id: "Bizmed Health Clinic; ;Fremont=DXF004254",
            label: "Bizmed Health Clinic; ;Fremont=DXF004254",
          },
          {
            id: "Bizmed Health Clinic;Bizmed Health Clinic;Fremont=DXF004255",
            label:
              "Bizmed Health Clinic;Bizmed Health Clinic;Fremont=DXF004255",
          },
          {
            id: "Blasko Medical Consultants; ;Eastvale=DXF003738",
            label: "Blasko Medical Consultants; ;Eastvale=DXF003738",
          },
          {
            id: "BLC Glenwood Gardens SNF-LH, LLC; ;Brentwood=DXF004502",
            label: "BLC Glenwood Gardens SNF-LH, LLC; ;Brentwood=DXF004502",
          },
          {
            id: "BLEHEALTH, LLC; ;Pomona=DXF002640",
            label: "BLEHEALTH, LLC; ;Pomona=DXF002640",
          },
          {
            id: "Blessing Community Health Center; ;San Bernardino=DXF000750",
            label:
              "Blessing Community Health Center; ;San Bernardino=DXF000750",
          },
          {
            id: "Blue Cross of California and Other; ;Woodland Hills=DXF001354",
            label:
              "Blue Cross of California and Other; ;Woodland Hills=DXF001354",
          },
          {
            id: "Blue Cross of California and Other;Blue Cross of California dba Anthem Blue Cross;Woodland Hills=DXF001384",
            label:
              "Blue Cross of California and Other;Blue Cross of California dba Anthem Blue Cross;Woodland Hills=DXF001384",
          },
          {
            id: "Blue Cross of California and Other;Blue Cross of California Partnership Plan, Inc.;Woodland Hills=DXF001387",
            label:
              "Blue Cross of California and Other;Blue Cross of California Partnership Plan, Inc.;Woodland Hills=DXF001387",
          },
          {
            id: "Blue Cross of California and Other;Beacon Health Options of California, Inc.;Boston=DXF001402",
            label:
              "Blue Cross of California and Other;Beacon Health Options of California, Inc.;Boston=DXF001402",
          },
          {
            id: "Blue Cross of California and Other;CareMore Health Plan;Cerritos=DXF001405",
            label:
              "Blue Cross of California and Other;CareMore Health Plan;Cerritos=DXF001405",
          },
          {
            id: "Blue Cross of California and Other;Anthem Blue Cross Life and Health Insurance Company;Woodland Hills=DXF001408",
            label:
              "Blue Cross of California and Other;Anthem Blue Cross Life and Health Insurance Company;Woodland Hills=DXF001408",
          },
          {
            id: "Blue Shield California; ;West Hills=DXF005818",
            label: "Blue Shield California; ;West Hills=DXF005818",
          },
          {
            id: "Blue Shield of California Life & Health Insurance Company; ;Oakland=DXF001461",
            label:
              "Blue Shield of California Life & Health Insurance Company; ;Oakland=DXF001461",
          },
          {
            id: "Blue Shield of California Promise Health Plan; ;Monterey Park=DXF001331",
            label:
              "Blue Shield of California Promise Health Plan; ;Monterey Park=DXF001331",
          },
          {
            id: "BOLD Health Medical Group, A Professional Corporation; ;Encinitas=DXF000680",
            label:
              "BOLD Health Medical Group, A Professional Corporation; ;Encinitas=DXF000680",
          },
          {
            id: "Bonnie Brae Skilled Nursing; ;Los Angeles=DXF004504",
            label: "Bonnie Brae Skilled Nursing; ;Los Angeles=DXF004504",
          },
          {
            id: "Borrego Health; ;Borrego Springs=DXF000432",
            label: "Borrego Health; ;Borrego Springs=DXF000432",
          },
          {
            id: "Bothyna Sedrak; ;Lakewood=DXF000236",
            label: "Bothyna Sedrak; ;Lakewood=DXF000236",
          },
          {
            id: "Brandy OShea; ;Oak Park=DXF001954",
            label: "Brandy OShea; ;Oak Park=DXF001954",
          },
          {
            id: "Breast Center of Irvine Inc; ;Irvine=DXF001622",
            label: "Breast Center of Irvine Inc; ;Irvine=DXF001622",
          },
          {
            id: "breast imaging specialists; ;Los Gatos=DXF004128",
            label: "breast imaging specialists; ;Los Gatos=DXF004128",
          },
          {
            id: "Breathe Southern California; ;Los Angeles=DXF004271",
            label: "Breathe Southern California; ;Los Angeles=DXF004271",
          },
          {
            id: "Brent Pennelly; ;Arroyo Grande=DXF001097",
            label: "Brent Pennelly; ;Arroyo Grande=DXF001097",
          },
          {
            id: "BRIDGET R. BRIGGS, M.D., INC; ;Murrieta=DXF001032",
            label: "BRIDGET R. BRIGGS, M.D., INC; ;Murrieta=DXF001032",
          },
          {
            id: "Bridgeview Post Acute; ;Yuba City=DXF003502",
            label: "Bridgeview Post Acute; ;Yuba City=DXF003502",
          },
          {
            id: "BRIGHT PEDIATRICS & ECHOCARDIOGRAPHY; ;Visalia=DXF003187",
            label: "BRIGHT PEDIATRICS & ECHOCARDIOGRAPHY; ;Visalia=DXF003187",
          },
          {
            id: "Brighton Care Center; ;Pasadena=DXF003506",
            label: "Brighton Care Center; ;Pasadena=DXF003506",
          },
          {
            id: "Brij Gupta MD Inc; ;La Jolla=DXF000253",
            label: "Brij Gupta MD Inc; ;La Jolla=DXF000253",
          },
          {
            id: "Brock Cummings, M.D. Inc; ;Chico=DXF000526",
            label: "Brock Cummings, M.D. Inc; ;Chico=DXF000526",
          },
          {
            id: "Brown & Toland Medical Group; ;Oakland=DXF000847",
            label: "Brown & Toland Medical Group; ;Oakland=DXF000847",
          },
          {
            id: "Brown & Toland Medical Group;Brown & Toland Health Services;Oakland=DXF001070",
            label:
              "Brown & Toland Medical Group;Brown & Toland Health Services;Oakland=DXF001070",
          },
          {
            id: "Brown & Toland Medical Group;Altais Medical Group - Riverside;Oakland=DXF001071",
            label:
              "Brown & Toland Medical Group;Altais Medical Group - Riverside;Oakland=DXF001071",
          },
          {
            id: "Brown & Toland Medical Group;Family Care Specialists IPA;Montebello=DXF001072",
            label:
              "Brown & Toland Medical Group;Family Care Specialists IPA;Montebello=DXF001072",
          },
          {
            id: "Bryan Rivera MD Inc; ;Apple Valley=DXF003451",
            label: "Bryan Rivera MD Inc; ;Apple Valley=DXF003451",
          },
          {
            id: "Bryan Rivera MD Inc;Surgical Precision;Apple Valley=DXF004470",
            label:
              "Bryan Rivera MD Inc;Surgical Precision;Apple Valley=DXF004470",
          },
          {
            id: "Bryan Rivera MD Inc.; ;Apple Valley=DXF000886",
            label: "Bryan Rivera MD Inc.; ;Apple Valley=DXF000886",
          },
          {
            id: "Bryan Rivera MD Inc.;Surgical Precision Inc;none PD entry=DXF005450",
            label:
              "Bryan Rivera MD Inc.;Surgical Precision Inc;none PD entry=DXF005450",
          },
          {
            id: "Buddhist Tzu Chi Health Center; ;El Monte=DXF003375",
            label: "Buddhist Tzu Chi Health Center; ;El Monte=DXF003375",
          },
          {
            id: "Buena Park Nursing Center; ;Buena Park=DXF002983",
            label: "Buena Park Nursing Center; ;Buena Park=DXF002983",
          },
          {
            id: "Buena Salud Acupuncture Clinic; ;Upland=DXF000373",
            label: "Buena Salud Acupuncture Clinic; ;Upland=DXF000373",
          },
          {
            id: "Burgess Brothers; ;Sacramento=DXF003353",
            label: "Burgess Brothers; ;Sacramento=DXF003353",
          },
          {
            id: "Burgess Brothers;Avengers Hospitality Inc;Sacramento=DXF003361",
            label:
              "Burgess Brothers;Avengers Hospitality Inc;Sacramento=DXF003361",
          },
          {
            id: "Burlingame Orthopedics and Sports Medicine Associates, Inc.; ;Burlingame=DXF000831",
            label:
              "Burlingame Orthopedics and Sports Medicine Associates, Inc.; ;Burlingame=DXF000831",
          },
          {
            id: "Butterfly Effects, LLC; ;Deerfield Beach=DXF004657",
            label: "Butterfly Effects, LLC; ;Deerfield Beach=DXF004657",
          },
          {
            id: "C.C.H.C., Inc.; ;Anaheim=DXF004974",
            label: "C.C.H.C., Inc.; ;Anaheim=DXF004974",
          },
          {
            id: "Cal Med Physicians and Surgeons, Inc.; ;Redlands=DXF002250",
            label: "Cal Med Physicians and Surgeons, Inc.; ;Redlands=DXF002250",
          },
          {
            id: "Cal Med Physicians and Surgeons, Inc.;Cal Med ASC, LLC;Redlands=DXF002254",
            label:
              "Cal Med Physicians and Surgeons, Inc.;Cal Med ASC, LLC;Redlands=DXF002254",
          },
          {
            id: "Cal Med Physicians and Surgeons, Inc.;Cal Med Vascular ASC, LLC;Redlands=DXF002255",
            label:
              "Cal Med Physicians and Surgeons, Inc.;Cal Med Vascular ASC, LLC;Redlands=DXF002255",
          },
          {
            id: "Cal Med Physicians and Surgeons, Inc.;Cal Med Endoscopy Center, LLC;Redlands=DXF002256",
            label:
              "Cal Med Physicians and Surgeons, Inc.;Cal Med Endoscopy Center, LLC;Redlands=DXF002256",
          },
          {
            id: "Calabasas Pediatrics; ;Calabasas=DXF004091",
            label: "Calabasas Pediatrics; ;Calabasas=DXF004091",
          },
          {
            id: "Calaveras County Health and Human Services Agency; ;San Andreas=DXF000488",
            label:
              "Calaveras County Health and Human Services Agency; ;San Andreas=DXF000488",
          },
          {
            id: "Calexico Wellness Center; ;Calexico=DXF002158",
            label: "Calexico Wellness Center; ;Calexico=DXF002158",
          },
          {
            id: "California Armenian Home; ;Fresno=DXF004806",
            label: "California Armenian Home; ;Fresno=DXF004806",
          },
          {
            id: "California Cardiovascular & Thoracic Surgeons; ;ventura=DXF001704",
            label:
              "California Cardiovascular & Thoracic Surgeons; ;ventura=DXF001704",
          },
          {
            id: "California Correctional Health Care Services; ;Elk Grove=DXF001525",
            label:
              "California Correctional Health Care Services; ;Elk Grove=DXF001525",
          },
          {
            id: "California Correctional Health Care Services;CCHCS;Elk Grove=DXF001533",
            label:
              "California Correctional Health Care Services;CCHCS;Elk Grove=DXF001533",
          },
          {
            id: "California Correctional Health Care Services;CCHCS;Elk Grove=DXF001535",
            label:
              "California Correctional Health Care Services;CCHCS;Elk Grove=DXF001535",
          },
          {
            id: "California Correctional Health Care Services;CCHCS;Elk Grove=DXF001536",
            label:
              "California Correctional Health Care Services;CCHCS;Elk Grove=DXF001536",
          },
          {
            id: "California Correctional Health Care Services;CCHCS;Elk Grove=DXF001537",
            label:
              "California Correctional Health Care Services;CCHCS;Elk Grove=DXF001537",
          },
          {
            id: "California Correctional Health Care Services;CCHCS;Elk Grove=DXF001538",
            label:
              "California Correctional Health Care Services;CCHCS;Elk Grove=DXF001538",
          },
          {
            id: "California Correctional Health Care Services;CCHCS;Elk Grove=DXF001539",
            label:
              "California Correctional Health Care Services;CCHCS;Elk Grove=DXF001539",
          },
          {
            id: "California Correctional Health Care Services;CCHCS;Elk Grove=DXF001542",
            label:
              "California Correctional Health Care Services;CCHCS;Elk Grove=DXF001542",
          },
          {
            id: "California Department of Public Health Center for Laboratory Sciences; ;Richmond=DXF002174",
            label:
              "California Department of Public Health Center for Laboratory Sciences; ;Richmond=DXF002174",
          },
          {
            id: "California Department of Public Health Center for Laboratory Sciences;CDPH Drinking Water & Radiation Laboratory;Richmond=DXF002183",
            label:
              "California Department of Public Health Center for Laboratory Sciences;CDPH Drinking Water & Radiation Laboratory;Richmond=DXF002183",
          },
          {
            id: "California Department of Public Health Center for Laboratory Sciences;Genetic Disease Laboratory;Oakland=DXF002184",
            label:
              "California Department of Public Health Center for Laboratory Sciences;Genetic Disease Laboratory;Oakland=DXF002184",
          },
          {
            id: "California Department of Public Health Center for Laboratory Sciences;Adult and Senior Care COVID-19 Antigen Testing Laboratory;Richmond=DXF002185",
            label:
              "California Department of Public Health Center for Laboratory Sciences;Adult and Senior Care COVID-19 Antigen Testing Laboratory;Richmond=DXF002185",
          },
          {
            id: "California Department of Public Health Center for Laboratory Sciences;CDPH Antigen Testing Laboratories;Richmond=DXF002186",
            label:
              "California Department of Public Health Center for Laboratory Sciences;CDPH Antigen Testing Laboratories;Richmond=DXF002186",
          },
          {
            id: "California Department of Public Health Center for Laboratory Sciences;CDPH K-12 School Laboratories;Richmond=DXF002187",
            label:
              "California Department of Public Health Center for Laboratory Sciences;CDPH K-12 School Laboratories;Richmond=DXF002187",
          },
          {
            id: "California Endocrine Center; ;Murrieta=DXF003985",
            label: "California Endocrine Center; ;Murrieta=DXF003985",
          },
          {
            id: "California Health Collaborative; ;Fresno=DXF002159",
            label: "California Health Collaborative; ;Fresno=DXF002159",
          },
          {
            id: "California Institute of Cardiovascular Health; ;Rancho Cucamonga=DXF002881",
            label:
              "California Institute of Cardiovascular Health; ;Rancho Cucamonga=DXF002881",
          },
          {
            id: "California Kidney Specialists; ;San Dimas=DXF003763",
            label: "California Kidney Specialists; ;San Dimas=DXF003763",
          },
          {
            id: "California Kidney Specialists;California Kidney Specialists;Covina=DXF003764",
            label:
              "California Kidney Specialists;California Kidney Specialists;Covina=DXF003764",
          },
          {
            id: "California Kidney Specialists;California Kidney Specialists;Pasadena=DXF003765",
            label:
              "California Kidney Specialists;California Kidney Specialists;Pasadena=DXF003765",
          },
          {
            id: "California Kidney Specialists;California Kidney Specialists;Ontario=DXF003766",
            label:
              "California Kidney Specialists;California Kidney Specialists;Ontario=DXF003766",
          },
          {
            id: "California Kidney Specialists;California Kidney Specialists;Riverside=DXF003767",
            label:
              "California Kidney Specialists;California Kidney Specialists;Riverside=DXF003767",
          },
          {
            id: "California Kidney Specialists;California Kidney Specialists;San Bernardino=DXF003768",
            label:
              "California Kidney Specialists;California Kidney Specialists;San Bernardino=DXF003768",
          },
          {
            id: "California Kidney Specialists;California Kidney Specialists;Upland=DXF003769",
            label:
              "California Kidney Specialists;California Kidney Specialists;Upland=DXF003769",
          },
          {
            id: "California Managed Imaging Medical Group, Inc.; ;Santa Barbara=DXF002262",
            label:
              "California Managed Imaging Medical Group, Inc.; ;Santa Barbara=DXF002262",
          },
          {
            id: "California Managed Imaging Medical Group, Inc.;Pueblo Radiology Medical Group, Inc.;Santa Barbara=DXF002264",
            label:
              "California Managed Imaging Medical Group, Inc.;Pueblo Radiology Medical Group, Inc.;Santa Barbara=DXF002264",
          },
          {
            id: "California Managed Imaging Medical Group, Inc.;Santa Barbara Women's Imaging Center;Santa Barbara=DXF002407",
            label:
              "California Managed Imaging Medical Group, Inc.;Santa Barbara Women's Imaging Center;Santa Barbara=DXF002407",
          },
          {
            id: "California Managed Imaging Medical Group, Inc.;Vein Specialists of Santa Barbara;Santa Barbara=DXF002408",
            label:
              "California Managed Imaging Medical Group, Inc.;Vein Specialists of Santa Barbara;Santa Barbara=DXF002408",
          },
          {
            id: "California Managed Imaging Medical Group, Inc.;Prostate Institute of America;Santa Barbara=DXF002409",
            label:
              "California Managed Imaging Medical Group, Inc.;Prostate Institute of America;Santa Barbara=DXF002409",
          },
          {
            id: "California Pacific Physicians Medical Group, Inc.; ;Cypress=DXF004821",
            label:
              "California Pacific Physicians Medical Group, Inc.; ;Cypress=DXF004821",
          },
          {
            id: "California Parenting Institute DBA Child Parent Institute; ;Santa Rosa=DXF003932",
            label:
              "California Parenting Institute DBA Child Parent Institute; ;Santa Rosa=DXF003932",
          },
          {
            id: "California Physicians' Services; ;Oakland=DXF002027",
            label: "California Physicians' Services; ;Oakland=DXF002027",
          },
          {
            id: "California Post Acute; ;Los Angeles=DXF003644",
            label: "California Post Acute; ;Los Angeles=DXF003644",
          },
          {
            id: "CALIFORNIA POST-ACUTE MEDICAL GROUP 1 INC; ;Knoxville=DXF000352",
            label:
              "CALIFORNIA POST-ACUTE MEDICAL GROUP 1 INC; ;Knoxville=DXF000352",
          },
          {
            id: "CALIFORNIA POST-ACUTE MEDICAL GROUP 1 INC;CA PACS 2 MEDICAL GROUP INC;Knoxville=DXF001278",
            label:
              "CALIFORNIA POST-ACUTE MEDICAL GROUP 1 INC;CA PACS 2 MEDICAL GROUP INC;Knoxville=DXF001278",
          },
          {
            id: "California Rehabilitation Institute, LLC; ;Los Angeles=DXF005133",
            label:
              "California Rehabilitation Institute, LLC; ;Los Angeles=DXF005133",
          },
          {
            id: "CalMHSA; ;Sacramento=DXF000519",
            label: "CalMHSA; ;Sacramento=DXF000519",
          },
          {
            id: "Calpath Medical Associates; ;Campbell=DXF004895",
            label: "Calpath Medical Associates; ;Campbell=DXF004895",
          },
          {
            id: "Camarena Health; ;Madera=DXF005816",
            label: "Camarena Health; ;Madera=DXF005816",
          },
          {
            id: "Camarena Health- 6th Street; ;Madera=DXF002134",
            label: "Camarena Health- 6th Street; ;Madera=DXF002134",
          },
          {
            id: "Camarena Health- 6th Street;Camarena health- Madera South School Based;Madera=DXF002138",
            label:
              "Camarena Health- 6th Street;Camarena health- Madera South School Based;Madera=DXF002138",
          },
          {
            id: "Camarena Health- 6th Street;Camarena Health - A Street;Madera=DXF002140",
            label:
              "Camarena Health- 6th Street;Camarena Health - A Street;Madera=DXF002140",
          },
          {
            id: "Camarena Health- 6th Street;Camarena Health - Chowchilla;Madera=DXF002143",
            label:
              "Camarena Health- 6th Street;Camarena Health - Chowchilla;Madera=DXF002143",
          },
          {
            id: "Camarena Health- 6th Street;Camarena Health - Country Club UC;Madera=DXF002144",
            label:
              "Camarena Health- 6th Street;Camarena Health - Country Club UC;Madera=DXF002144",
          },
          {
            id: "Camarena Health- 6th Street;Camarena Health - Oakhurst UC;Madera=DXF002145",
            label:
              "Camarena Health- 6th Street;Camarena Health - Oakhurst UC;Madera=DXF002145",
          },
          {
            id: "Camarena Health- 6th Street;Camarena Health - Almond Campus UC;Madera=DXF002146",
            label:
              "Camarena Health- 6th Street;Camarena Health - Almond Campus UC;Madera=DXF002146",
          },
          {
            id: "Camarena Health- 6th Street;Camarena Health - Yosemite Kids;Madera=DXF002147",
            label:
              "Camarena Health- 6th Street;Camarena Health - Yosemite Kids;Madera=DXF002147",
          },
          {
            id: "Camarillo General Surgery; ;Camarillo=DXF004620",
            label: "Camarillo General Surgery; ;Camarillo=DXF004620",
          },
          {
            id: "Cambridge Healthcare Services,LLC; ;Buena Park=DXF003211",
            label: "Cambridge Healthcare Services,LLC; ;Buena Park=DXF003211",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Anaheim Crest Nursing Center;Anaheim=DXF003410",
            label:
              "Cambridge Healthcare Services,LLC;Anaheim Crest Nursing Center;Anaheim=DXF003410",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Briarcrest Nursing Center   (SA);Bell Gardens=DXF003411",
            label:
              "Cambridge Healthcare Services,LLC;Briarcrest Nursing Center   (SA);Bell Gardens=DXF003411",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Broadway Healthcare Center;San Gabriel=DXF003412",
            label:
              "Cambridge Healthcare Services,LLC;Broadway Healthcare Center;San Gabriel=DXF003412",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Buena Vista Care Center;Anaheim=DXF003413",
            label:
              "Cambridge Healthcare Services,LLC;Buena Vista Care Center;Anaheim=DXF003413",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Casitas Care Center;Granada Hills=DXF003414",
            label:
              "Cambridge Healthcare Services,LLC;Casitas Care Center;Granada Hills=DXF003414",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Country Manor La Mesa Healthcare Center;La Mesa=DXF003415",
            label:
              "Cambridge Healthcare Services,LLC;Country Manor La Mesa Healthcare Center;La Mesa=DXF003415",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Glendale Healthcare Center;Glendale=DXF003416",
            label:
              "Cambridge Healthcare Services,LLC;Glendale Healthcare Center;Glendale=DXF003416",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Glendale Post Acute Center;Glendale=DXF003417",
            label:
              "Cambridge Healthcare Services,LLC;Glendale Post Acute Center;Glendale=DXF003417",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Harbor Villa Care Center;Anaheim=DXF003418",
            label:
              "Cambridge Healthcare Services,LLC;Harbor Villa Care Center;Anaheim=DXF003418",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Highland Care Center of Redlands;Redlands=DXF003419",
            label:
              "Cambridge Healthcare Services,LLC;Highland Care Center of Redlands;Redlands=DXF003419",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Huntington Drive Health and Rehabilitation Center;Arcadia=DXF003420",
            label:
              "Cambridge Healthcare Services,LLC;Huntington Drive Health and Rehabilitation Center;Arcadia=DXF003420",
          },
          {
            id: "Cambridge Healthcare Services,LLC;La Sierra Care Center;MERCED=DXF003421",
            label:
              "Cambridge Healthcare Services,LLC;La Sierra Care Center;MERCED=DXF003421",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Laguna Hills Health and Rehabilitation Center;Laguna Hills=DXF003422",
            label:
              "Cambridge Healthcare Services,LLC;Laguna Hills Health and Rehabilitation Center;Laguna Hills=DXF003422",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Lassen Nursing & Rehabilitation Center;Susanville=DXF003423",
            label:
              "Cambridge Healthcare Services,LLC;Lassen Nursing & Rehabilitation Center;Susanville=DXF003423",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Lynwood Post Acute Center;Lynwood=DXF003424",
            label:
              "Cambridge Healthcare Services,LLC;Lynwood Post Acute Center;Lynwood=DXF003424",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Madera Rehabilitation & Nursing Center;Madera=DXF003425",
            label:
              "Cambridge Healthcare Services,LLC;Madera Rehabilitation & Nursing Center;Madera=DXF003425",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Merced Nursing & Rehabilitation Center;MERCED=DXF003426",
            label:
              "Cambridge Healthcare Services,LLC;Merced Nursing & Rehabilitation Center;MERCED=DXF003426",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Modesto Post Acute Center;Modesto=DXF003427",
            label:
              "Cambridge Healthcare Services,LLC;Modesto Post Acute Center;Modesto=DXF003427",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Monrovia Gardens Healthcare Center;Monrovia=DXF003428",
            label:
              "Cambridge Healthcare Services,LLC;Monrovia Gardens Healthcare Center;Monrovia=DXF003428",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Monte Vista Healthcare Center;Duarte=DXF003429",
            label:
              "Cambridge Healthcare Services,LLC;Monte Vista Healthcare Center;Duarte=DXF003429",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Mountain View Convalescent Hospital   (SA);Sylmar=DXF003430",
            label:
              "Cambridge Healthcare Services,LLC;Mountain View Convalescent Hospital   (SA);Sylmar=DXF003430",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Murrieta Health and Rehabilitation Center;Murrieta=DXF003431",
            label:
              "Cambridge Healthcare Services,LLC;Murrieta Health and Rehabilitation Center;Murrieta=DXF003431",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Ontario Healthcare Center;Ontario=DXF003432",
            label:
              "Cambridge Healthcare Services,LLC;Ontario Healthcare Center;Ontario=DXF003432",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Professional Post Acute Center;San Rafael=DXF003433",
            label:
              "Cambridge Healthcare Services,LLC;Professional Post Acute Center;San Rafael=DXF003433",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Rancho Mirage Health and Rehabilitation Center;Rancho Mirage=DXF003434",
            label:
              "Cambridge Healthcare Services,LLC;Rancho Mirage Health and Rehabilitation Center;Rancho Mirage=DXF003434",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Rinaldi Convalescent Hospital;Granada Hills=DXF003435",
            label:
              "Cambridge Healthcare Services,LLC;Rinaldi Convalescent Hospital;Granada Hills=DXF003435",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Seal Beach Health and Rehabilitation Center;Seal Beach=DXF003436",
            label:
              "Cambridge Healthcare Services,LLC;Seal Beach Health and Rehabilitation Center;Seal Beach=DXF003436",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Sunray Healthcare Center   (SA);Los Angeles=DXF003437",
            label:
              "Cambridge Healthcare Services,LLC;Sunray Healthcare Center   (SA);Los Angeles=DXF003437",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Valley Palms Care Center;North Hollywood=DXF003438",
            label:
              "Cambridge Healthcare Services,LLC;Valley Palms Care Center;North Hollywood=DXF003438",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Watsonville Nursing Center;Watsonville=DXF003439",
            label:
              "Cambridge Healthcare Services,LLC;Watsonville Nursing Center;Watsonville=DXF003439",
          },
          {
            id: "Cambridge Healthcare Services,LLC;Watsonville Post Acute Center;Watsonville=DXF003440",
            label:
              "Cambridge Healthcare Services,LLC;Watsonville Post Acute Center;Watsonville=DXF003440",
          },
          {
            id: "Cambridge Healthcare Services,LLC;West Covina Healthcare Center;West Covina=DXF003441",
            label:
              "Cambridge Healthcare Services,LLC;West Covina Healthcare Center;West Covina=DXF003441",
          },
          {
            id: "CamCorr, Inc dba Senior Home Advocates; ;Irvine=DXF004286",
            label: "CamCorr, Inc dba Senior Home Advocates; ;Irvine=DXF004286",
          },
          {
            id: "CANCER RESOURCE CENTER OF THE DESERT; ;EL CENTRO=DXF003285",
            label: "CANCER RESOURCE CENTER OF THE DESERT; ;EL CENTRO=DXF003285",
          },
          {
            id: "Canyon Creek Post Acute; ;Castro Valley=DXF004896",
            label: "Canyon Creek Post Acute; ;Castro Valley=DXF004896",
          },
          {
            id: "Capistano Beach Care Center; ;Dana Point, CA=DXF004325",
            label: "Capistano Beach Care Center; ;Dana Point, CA=DXF004325",
          },
          {
            id: "Capital Medical Extended Care; ;Fair Oaks=DXF000863",
            label: "Capital Medical Extended Care; ;Fair Oaks=DXF000863",
          },
          {
            id: "Capuchino Therapy Group; ;FOLSOM=DXF000393",
            label: "Capuchino Therapy Group; ;FOLSOM=DXF000393",
          },
          {
            id: "CARBON HEALTH MEDICAL GROUP OF CALIFORNIA, P.C.; ;Oakland=DXF000980",
            label:
              "CARBON HEALTH MEDICAL GROUP OF CALIFORNIA, P.C.; ;Oakland=DXF000980",
          },
          {
            id: "CARBON HEALTH MEDICAL GROUP OF CALIFORNIA, P.C.;CARBON HEALTH PRIMARY CARE OF CALIFORNIA, P.C.;Oakland=DXF001831",
            label:
              "CARBON HEALTH MEDICAL GROUP OF CALIFORNIA, P.C.;CARBON HEALTH PRIMARY CARE OF CALIFORNIA, P.C.;Oakland=DXF001831",
          },
          {
            id: "CARBON HEALTH MEDICAL GROUP OF CALIFORNIA, P.C.;CARBON HEALTH ALPHA MEDICAL GROUP OF CALIFORNIA, P.C.;Oakland=DXF001832",
            label:
              "CARBON HEALTH MEDICAL GROUP OF CALIFORNIA, P.C.;CARBON HEALTH ALPHA MEDICAL GROUP OF CALIFORNIA, P.C.;Oakland=DXF001832",
          },
          {
            id: "CARBON HEALTH MEDICAL GROUP OF CALIFORNIA, P.C.;CARBON HEALTH EAST BAY MEDICAL GROUP, P.C.;Oakland=DXF001833",
            label:
              "CARBON HEALTH MEDICAL GROUP OF CALIFORNIA, P.C.;CARBON HEALTH EAST BAY MEDICAL GROUP, P.C.;Oakland=DXF001833",
          },
          {
            id: "CARBON HEALTH MEDICAL GROUP OF CALIFORNIA, P.C.;CARBON HEALTH SOUTH BAY MEDICAL GROUP, P.C.;Oakland=DXF001834",
            label:
              "CARBON HEALTH MEDICAL GROUP OF CALIFORNIA, P.C.;CARBON HEALTH SOUTH BAY MEDICAL GROUP, P.C.;Oakland=DXF001834",
          },
          {
            id: "Cardea Health; ;Oakland=DXF002460",
            label: "Cardea Health; ;Oakland=DXF002460",
          },
          {
            id: "Cardin HealthCare A Medical Group; ;Long Beach=DXF002636",
            label: "Cardin HealthCare A Medical Group; ;Long Beach=DXF002636",
          },
          {
            id: "CARDIOVASCULAR CARE INC; ;LOS ALAMITOS=DXF001823",
            label: "CARDIOVASCULAR CARE INC; ;LOS ALAMITOS=DXF001823",
          },
          {
            id: "Care Direct Medical Group Inc; ;Costa Mesa=DXF004664",
            label: "Care Direct Medical Group Inc; ;Costa Mesa=DXF004664",
          },
          {
            id: "Care Direct Medical Group LLC; ;Irvine=DXF005572",
            label: "Care Direct Medical Group LLC; ;Irvine=DXF005572",
          },
          {
            id: "Care Home Visit Doctor; ;Los Angeles=DXF001478",
            label: "Care Home Visit Doctor; ;Los Angeles=DXF001478",
          },
          {
            id: "Care Matters Healthcare Inc DBA Concise Care Group; ;Los Angeles=DXF002781",
            label:
              "Care Matters Healthcare Inc DBA Concise Care Group; ;Los Angeles=DXF002781",
          },
          {
            id: "Care Net Home Health, Inc; ;Arcadia=DXF004604",
            label: "Care Net Home Health, Inc; ;Arcadia=DXF004604",
          },
          {
            id: "CARE PLUS MEDICAL GROUP, INC; ;Los Angeles=DXF003481",
            label: "CARE PLUS MEDICAL GROUP, INC; ;Los Angeles=DXF003481",
          },
          {
            id: "CareConnectMD Inc; ;Costa Mesa=DXF000858",
            label: "CareConnectMD Inc; ;Costa Mesa=DXF000858",
          },
          {
            id: "CareConnectMD Inc;GN Medical Associates;Costa Mesa=DXF001180",
            label:
              "CareConnectMD Inc;GN Medical Associates;Costa Mesa=DXF001180",
          },
          {
            id: "CareConnectMD Inc;CareconnectMD CA PC;Costa Mesa=DXF001181",
            label: "CareConnectMD Inc;CareconnectMD CA PC;Costa Mesa=DXF001181",
          },
          {
            id: "Carefluent; ;Charlotte=DXF003840",
            label: "Carefluent; ;Charlotte=DXF003840",
          },
          {
            id: "Careplus MD; ;CUPERTINO=DXF003685",
            label: "Careplus MD; ;CUPERTINO=DXF003685",
          },
          {
            id: "Caring Physicians Medical Group, Inc.; ;La Mesa=DXF001255",
            label: "Caring Physicians Medical Group, Inc.; ;La Mesa=DXF001255",
          },
          {
            id: "Carmel Valley Manor; ;Carmel=DXF002619",
            label: "Carmel Valley Manor; ;Carmel=DXF002619",
          },
          {
            id: "Casa Colina Hospital and Centers for Healthcare; ;Pomona=DXF004043",
            label:
              "Casa Colina Hospital and Centers for Healthcare; ;Pomona=DXF004043",
          },
          {
            id: "Casa de las Campanas; ;San Diego=DXF002456",
            label: "Casa de las Campanas; ;San Diego=DXF002456",
          },
          {
            id: "Casa Dorinda; ;Santa Barbara=DXF003942",
            label: "Casa Dorinda; ;Santa Barbara=DXF003942",
          },
          {
            id: "Casa Pacifica DBA Freedom Village Health Care Center; ;Lake Forest=DXF005170",
            label:
              "Casa Pacifica DBA Freedom Village Health Care Center; ;Lake Forest=DXF005170",
          },
          {
            id: "Casa Valle; ;Sun Valley=DXF004822",
            label: "Casa Valle; ;Sun Valley=DXF004822",
          },
          {
            id: "Casa Valle;Casa Valle;Sun Valley=DXF004823",
            label: "Casa Valle;Casa Valle;Sun Valley=DXF004823",
          },
          {
            id: "Case Management Integrated Solutions, LLC; ;Los Angeles=DXF004266",
            label:
              "Case Management Integrated Solutions, LLC; ;Los Angeles=DXF004266",
          },
          {
            id: "Cassie Maciel MD PC; ;Santa Barbara=DXF001093",
            label: "Cassie Maciel MD PC; ;Santa Barbara=DXF001093",
          },
          {
            id: "Catalyst Neuromedical Center; ;Redding=DXF001257",
            label: "Catalyst Neuromedical Center; ;Redding=DXF001257",
          },
          {
            id: "CCA Health Plans of California, Inc.; ;Cerritos=DXF001498",
            label: "CCA Health Plans of California, Inc.; ;Cerritos=DXF001498",
          },
          {
            id: "CCAH; ;SCOTTS VALLEY=DXF001022",
            label: "CCAH; ;SCOTTS VALLEY=DXF001022",
          },
          {
            id: "CC-Development Group, Inc.; ;Chicago=DXF004422",
            label: "CC-Development Group, Inc.; ;Chicago=DXF004422",
          },
          {
            id: "CC-Development Group, Inc.;CCW La Jolla, LLC;San Diego=DXF004458",
            label:
              "CC-Development Group, Inc.;CCW La Jolla, LLC;San Diego=DXF004458",
          },
          {
            id: "CC-Development Group, Inc.;Classic Residence Management Limited Partnership;Palo Alto=DXF004459",
            label:
              "CC-Development Group, Inc.;Classic Residence Management Limited Partnership;Palo Alto=DXF004459",
          },
          {
            id: "Cedar Crest Nursing and Rehabilitation Center; ;Sunnyvale=DXF005100",
            label:
              "Cedar Crest Nursing and Rehabilitation Center; ;Sunnyvale=DXF005100",
          },
          {
            id: "Cedars-Sinai Medical Center; ;Los Angeles=DXF003960",
            label: "Cedars-Sinai Medical Center; ;Los Angeles=DXF003960",
          },
          {
            id: "Cedars-Sinai Medical Center;CFHS Holdings, Inc., DBA Cedars-Sinai Marina del Rey Hospital;Los Angeles=DXF003961",
            label:
              "Cedars-Sinai Medical Center;CFHS Holdings, Inc., DBA Cedars-Sinai Marina del Rey Hospital;Los Angeles=DXF003961",
          },
          {
            id: "Cedars-Sinai Medical Center;Cedars-Sinai Medical Care Foundation;Los Angeles=DXF003962",
            label:
              "Cedars-Sinai Medical Center;Cedars-Sinai Medical Care Foundation;Los Angeles=DXF003962",
          },
          {
            id: "Ceja & Singh A Medical Corporation; ;Calexico=DXF001311",
            label: "Ceja & Singh A Medical Corporation; ;Calexico=DXF001311",
          },
          {
            id: "Ceja & Singh A Medical Corporation;Ceja and Singh A Medical Corporation;EL CENTRO=DXF002034",
            label:
              "Ceja & Singh A Medical Corporation;Ceja and Singh A Medical Corporation;EL CENTRO=DXF002034",
          },
          {
            id: "Ceja & Singh A Medical Corporation; ;Calexico=DXF005798",
            label: "Ceja & Singh A Medical Corporation; ;Calexico=DXF005798",
          },
          {
            id: "Center for Family Health and Education Inc; ;Panorama City=DXF001188",
            label:
              "Center for Family Health and Education Inc; ;Panorama City=DXF001188",
          },
          {
            id: "Center for Inherited Blood Disorders; ;Orange=DXF000389",
            label: "Center for Inherited Blood Disorders; ;Orange=DXF000389",
          },
          {
            id: "Centers For Family Medicine (Optum); ;Irvine=DXF005589",
            label: "Centers For Family Medicine (Optum); ;Irvine=DXF005589",
          },
          {
            id: "Centers for Family Medicine, GP; ;LOS ALAMITOS=DXF000707",
            label: "Centers for Family Medicine, GP; ;LOS ALAMITOS=DXF000707",
          },
          {
            id: "Central California Alliance for Health; ;SCOTTS VALLEY=DXF003902",
            label:
              "Central California Alliance for Health; ;SCOTTS VALLEY=DXF003902",
          },
          {
            id: "Central California Ear Nose & Throat; ;Fresno=DXF001968",
            label: "Central California Ear Nose & Throat; ;Fresno=DXF001968",
          },
          {
            id: "Central California Faculty Medical Group; ;Fresno=DXF000468",
            label:
              "Central California Faculty Medical Group; ;Fresno=DXF000468",
          },
          {
            id: "Central City Community Health Center, Inc.; ;Monterey Park=DXF001382",
            label:
              "Central City Community Health Center, Inc.; ;Monterey Park=DXF001382",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - AN 1;Anaheim=DXF001385",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - AN 1;Anaheim=DXF001385",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - AN2;Anaheim=DXF001386",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - AN2;Anaheim=DXF001386",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - LIN 1;Anaheim=DXF001388",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - LIN 1;Anaheim=DXF001388",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - LIN 2;Anaheim=DXF001389",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - LIN 2;Anaheim=DXF001389",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - GG;Garden Grove=DXF001391",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - GG;Garden Grove=DXF001391",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - ST;Stanton=DXF001392",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - ST;Stanton=DXF001392",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - BP1;Baldwin Park=DXF001394",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - BP1;Baldwin Park=DXF001394",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - BP2;Baldwin Park=DXF001396",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - BP2;Baldwin Park=DXF001396",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - EM;El Monte=DXF001401",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - EM;El Monte=DXF001401",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - LP;La Puente=DXF001403",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - LP;La Puente=DXF001403",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - BW;Los Angeles=DXF001406",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - BW;Los Angeles=DXF001406",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - SLA;Los Angeles=DXF001409",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - SLA;Los Angeles=DXF001409",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - IN;Indio=DXF001412",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - IN;Indio=DXF001412",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - NOR;Norco=DXF001413",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - NOR;Norco=DXF001413",
          },
          {
            id: "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - UP;Upland=DXF001414",
            label:
              "Central City Community Health Center, Inc.;Central City Community Health Center, Inc. - UP;Upland=DXF001414",
          },
          {
            id: "Central Coast Allergy and Asthma; ;Salinas=DXF004526",
            label: "Central Coast Allergy and Asthma; ;Salinas=DXF004526",
          },
          {
            id: "CENTRAL COAST CARDIOTHORACIC SURGICAL ASSOCIATES-A MEDICAL GROUP; ;PISMO BEACH=DXF001112",
            label:
              "CENTRAL COAST CARDIOTHORACIC SURGICAL ASSOCIATES-A MEDICAL GROUP; ;PISMO BEACH=DXF001112",
          },
          {
            id: "Central Coast Critical Care Associates; ;goleta=DXF001089",
            label: "Central Coast Critical Care Associates; ;goleta=DXF001089",
          },
          {
            id: "Central Coast Family Care Medical Associates, Inc.; ;Santa Maria=DXF004189",
            label:
              "Central Coast Family Care Medical Associates, Inc.; ;Santa Maria=DXF004189",
          },
          {
            id: "Central Coast Renal Care; ;San Luis Obispo=DXF001860",
            label: "Central Coast Renal Care; ;San Luis Obispo=DXF001860",
          },
          {
            id: "CENTRAL MEDICAL BUSINESS MANAGEMENT; ;Glendale=DXF005178",
            label: "CENTRAL MEDICAL BUSINESS MANAGEMENT; ;Glendale=DXF005178",
          },
          {
            id: "Central Neighborhood Health Foundation; ;Los Angeles=DXF000884",
            label:
              "Central Neighborhood Health Foundation; ;Los Angeles=DXF000884",
          },
          {
            id: "Central Neighborhood Health Foundation; ;Los Angeles=DXF002119",
            label:
              "Central Neighborhood Health Foundation; ;Los Angeles=DXF002119",
          },
          {
            id: "Central Neighborhood Health Foundation;Central Neighborhood Health Foundation;Los Angeles=DXF002231",
            label:
              "Central Neighborhood Health Foundation;Central Neighborhood Health Foundation;Los Angeles=DXF002231",
          },
          {
            id: "Central Neighborhood Health Foundation; ;Los Angeles=DXF002826",
            label:
              "Central Neighborhood Health Foundation; ;Los Angeles=DXF002826",
          },
          {
            id: "Central Neighborhood Health Foundation; ;Los Angeles=DXF003626",
            label:
              "Central Neighborhood Health Foundation; ;Los Angeles=DXF003626",
          },
          {
            id: "Central Pediatrics `; ;Glendale=DXF004114",
            label: "Central Pediatrics `; ;Glendale=DXF004114",
          },
          {
            id: "Central Sierra Counseling Center; ;Sonora=DXF004930",
            label: "Central Sierra Counseling Center; ;Sonora=DXF004930",
          },
          {
            id: "Central Valley Health Plan; ;Fresno=DXF001175",
            label: "Central Valley Health Plan; ;Fresno=DXF001175",
          },
          {
            id: "Central Valley Post Acute; ;Riverbank=DXF004873",
            label: "Central Valley Post Acute; ;Riverbank=DXF004873",
          },
          {
            id: "Centric Health; ;Bakersfield=DXF005737",
            label: "Centric Health; ;Bakersfield=DXF005737",
          },
          {
            id: "Centro Medico Community Clinic; ;Corona=DXF003563",
            label: "Centro Medico Community Clinic; ;Corona=DXF003563",
          },
          {
            id: "centro medico,inc; ;HAWTHORNE=DXF004629",
            label: "centro medico,inc; ;HAWTHORNE=DXF004629",
          },
          {
            id: "Ceres Community Project; ;Sebastopol=DXF003690",
            label: "Ceres Community Project; ;Sebastopol=DXF003690",
          },
          {
            id: "Cesar Palana M.D., Inc.; ;Los Angeles=DXF000616",
            label: "Cesar Palana M.D., Inc.; ;Los Angeles=DXF000616",
          },
          {
            id: "Chabot Family Associates Inc.; ;Pleasanton=DXF004322",
            label: "Chabot Family Associates Inc.; ;Pleasanton=DXF004322",
          },
          {
            id: "Chaffey Medical Group; ;Rancho Cucamonga=DXF001706",
            label: "Chaffey Medical Group; ;Rancho Cucamonga=DXF001706",
          },
          {
            id: "CHA-Hollywood Presbyterian Medical Center; ;Hollywood=DXF001201",
            label:
              "CHA-Hollywood Presbyterian Medical Center; ;Hollywood=DXF001201",
          },
          {
            id: "Chaitanya N. Mahida, MD Inc; ;Oakdale=DXF004102",
            label: "Chaitanya N. Mahida, MD Inc; ;Oakdale=DXF004102",
          },
          {
            id: "Champion Health Plan USA; ;Irvine=DXF004209",
            label: "Champion Health Plan USA; ;Irvine=DXF004209",
          },
          {
            id: "Champions Recovery Alternative Programs, Inc.; ;Hanford=DXF002830",
            label:
              "Champions Recovery Alternative Programs, Inc.; ;Hanford=DXF002830",
          },
          {
            id: "Channing House; ;Palo Alto=DXF002675",
            label: "Channing House; ;Palo Alto=DXF002675",
          },
          {
            id: "Chapa-De Indian Health; ;Auburn=DXF000298",
            label: "Chapa-De Indian Health; ;Auburn=DXF000298",
          },
          {
            id: "Chaparral House; ;Berkeley=DXF002430",
            label: "Chaparral House; ;Berkeley=DXF002430",
          },
          {
            id: "Chaparral Medical Group, Inc.; ;West Hollywood=DXF001653",
            label: "Chaparral Medical Group, Inc.; ;West Hollywood=DXF001653",
          },
          {
            id: "Chaparral Medical Group, Inc.;Deepaaleya Medical, Inc.;West Hollywood=DXF001654",
            label:
              "Chaparral Medical Group, Inc.;Deepaaleya Medical, Inc.;West Hollywood=DXF001654",
          },
          {
            id: "Chaparral Medical Group, Inc.;CMG Clinical Laboratory and Ancillary Services, Inc.;West Hollywood=DXF001656",
            label:
              "Chaparral Medical Group, Inc.;CMG Clinical Laboratory and Ancillary Services, Inc.;West Hollywood=DXF001656",
          },
          {
            id: "Chaparral Medical Group, Inc.;Chaparral Specialty Medical Group, Inc.;West Hollywood=DXF001657",
            label:
              "Chaparral Medical Group, Inc.;Chaparral Specialty Medical Group, Inc.;West Hollywood=DXF001657",
          },
          {
            id: "Chaparral Medical Group, Inc.;Internal Medicine Medical Group;West Hollywood=DXF001658",
            label:
              "Chaparral Medical Group, Inc.;Internal Medicine Medical Group;West Hollywood=DXF001658",
          },
          {
            id: "chapman care center; ;Garden Grove=DXF002977",
            label: "chapman care center; ;Garden Grove=DXF002977",
          },
          {
            id: "Chapman Global Medical Center; ;Orange=DXF003946",
            label: "Chapman Global Medical Center; ;Orange=DXF003946",
          },
          {
            id: "Chapman Global Medical Center;Chapman Global Medical Center;Orange=DXF004080",
            label:
              "Chapman Global Medical Center;Chapman Global Medical Center;Orange=DXF004080",
          },
          {
            id: "Chapman Global Medical Center;Chapman Global Medical Center;Orange=DXF004081",
            label:
              "Chapman Global Medical Center;Chapman Global Medical Center;Orange=DXF004081",
          },
          {
            id: "Charles J Moreau; ;La Jolla=DXF000325",
            label: "Charles J Moreau; ;La Jolla=DXF000325",
          },
          {
            id: "Charles W. Portney MDPC; ;Santa Monica=DXF000725",
            label: "Charles W. Portney MDPC; ;Santa Monica=DXF000725",
          },
          {
            id: "Charter Healthcare Group; ;Rancho Cucamonga=DXF002448",
            label: "Charter Healthcare Group; ;Rancho Cucamonga=DXF002448",
          },
          {
            id: "Cheng Medical Corporation; ;Saratoga=DXF004512",
            label: "Cheng Medical Corporation; ;Saratoga=DXF004512",
          },
          {
            id: "Cherry Clinic; ;Cutler=DXF002775",
            label: "Cherry Clinic; ;Cutler=DXF002775",
          },
          {
            id: "cherry pharmacy cutler; ;Cutler=DXF005164",
            label: "cherry pharmacy cutler; ;Cutler=DXF005164",
          },
          {
            id: "Chico Dermatology Inc; ;Chico=DXF000933",
            label: "Chico Dermatology Inc; ;Chico=DXF000933",
          },
          {
            id: "Chico Pediatric Medical Group; ;Chico=DXF000465",
            label: "Chico Pediatric Medical Group; ;Chico=DXF000465",
          },
          {
            id: "Child and Family Guidance Center; ;Northridge=DXF002682",
            label: "Child and Family Guidance Center; ;Northridge=DXF002682",
          },
          {
            id: "Child Care Resource Center (CCRC); ;Chatsworth=DXF003619",
            label: "Child Care Resource Center (CCRC); ;Chatsworth=DXF003619",
          },
          {
            id: "Children's Bureau; ;Los Angeles=DXF003604",
            label: "Children's Bureau; ;Los Angeles=DXF003604",
          },
          {
            id: "Children's Health of Northern California (CHONC); ;Saratoga, CA 95070=DXF005168",
            label:
              "Children's Health of Northern California (CHONC); ;Saratoga, CA 95070=DXF005168",
          },
          {
            id: "Children's Health of Northern California (CHONC);Children's Recovery Center 1, LLC;Campbell=DXF005194",
            label:
              "Children's Health of Northern California (CHONC);Children's Recovery Center 1, LLC;Campbell=DXF005194",
          },
          {
            id: "Children's Health of Northern California (CHONC);Children's Recovery Center 2, LLC;Saratoga, CA 95070=DXF005195",
            label:
              "Children's Health of Northern California (CHONC);Children's Recovery Center 2, LLC;Saratoga, CA 95070=DXF005195",
          },
          {
            id: "Children's Hospital Medical Group; ;Los Angeles=DXF001934",
            label: "Children's Hospital Medical Group; ;Los Angeles=DXF001934",
          },
          {
            id: "Children's Hospital of Los Angeles; ;Los Angeles=DXF002017",
            label: "Children's Hospital of Los Angeles; ;Los Angeles=DXF002017",
          },
          {
            id: "Children's Hospital of Orange County (CHOC); ;Orange=DXF003923",
            label:
              "Children's Hospital of Orange County (CHOC); ;Orange=DXF003923",
          },
          {
            id: "Children's Hospital of Orange County (CHOC);CHOC at Mission;MISSION VIEJO=DXF003974",
            label:
              "Children's Hospital of Orange County (CHOC);CHOC at Mission;MISSION VIEJO=DXF003974",
          },
          {
            id: "Children's Hospital of Orange County (CHOC);Providence Speech & Hearing;Orange=DXF003976",
            label:
              "Children's Hospital of Orange County (CHOC);Providence Speech & Hearing;Orange=DXF003976",
          },
          {
            id: "Children's Institute; ;Los Angeles=DXF002652",
            label: "Children's Institute; ;Los Angeles=DXF002652",
          },
          {
            id: "Children's Medical Group, Inc.; ;Torrance=DXF004637",
            label: "Children's Medical Group, Inc.; ;Torrance=DXF004637",
          },
          {
            id: "Chinatown Service Center; ;Los Angeles=DXF001976",
            label: "Chinatown Service Center; ;Los Angeles=DXF001976",
          },
          {
            id: "Chinatown Service Center; ;Los Angeles=DXF003302",
            label: "Chinatown Service Center; ;Los Angeles=DXF003302",
          },
          {
            id: "Chinese Community Health Plan; ;San Francisco=DXF002756",
            label: "Chinese Community Health Plan; ;San Francisco=DXF002756",
          },
          {
            id: "Chinese Hospital Association; ;San Francisco=DXF000139",
            label: "Chinese Hospital Association; ;San Francisco=DXF000139",
          },
          {
            id: "Chinese Hospital Association;Chinese Hospital Skilled Nursing (D/P);San Francisco=DXF003917",
            label:
              "Chinese Hospital Association;Chinese Hospital Skilled Nursing (D/P);San Francisco=DXF003917",
          },
          {
            id: "Chinese Hospital Association;Chinese Hospital;San Francisco=DXF004500",
            label:
              "Chinese Hospital Association;Chinese Hospital;San Francisco=DXF004500",
          },
          {
            id: "Chino Care Inc; ;Chino=DXF004517",
            label: "Chino Care Inc; ;Chino=DXF004517",
          },
          {
            id: "Chino Pediatric Medical Group Inc; ;Chino Hills=DXF001700",
            label: "Chino Pediatric Medical Group Inc; ;Chino Hills=DXF001700",
          },
          {
            id: "chinohills pediatrics inc.; ;Chino Hills=DXF001705",
            label: "chinohills pediatrics inc.; ;Chino Hills=DXF001705",
          },
          {
            id: "CHOICE Health Network; ;Torrance=DXF003341",
            label: "CHOICE Health Network; ;Torrance=DXF003341",
          },
          {
            id: "choice physicians network; ;Apple Valley=DXF001206",
            label: "choice physicians network; ;Apple Valley=DXF001206",
          },
          {
            id: "choice physicians network;horizon valley medical group;Apple Valley=DXF001207",
            label:
              "choice physicians network;horizon valley medical group;Apple Valley=DXF001207",
          },
          {
            id: "choice physicians network;choice medical group;Apple Valley=DXF001211",
            label:
              "choice physicians network;choice medical group;Apple Valley=DXF001211",
          },
          {
            id: "choice physicians network;all united medical group;Apple Valley=DXF001212",
            label:
              "choice physicians network;all united medical group;Apple Valley=DXF001212",
          },
          {
            id: "choice physicians network;CoachellaMed;Apple Valley=DXF001213",
            label:
              "choice physicians network;CoachellaMed;Apple Valley=DXF001213",
          },
          {
            id: "choice physicians network;Amada Health;Apple Valley=DXF001214",
            label:
              "choice physicians network;Amada Health;Apple Valley=DXF001214",
          },
          {
            id: "choice physicians network;Advent Health;Apple Valley=DXF001215",
            label:
              "choice physicians network;Advent Health;Apple Valley=DXF001215",
          },
          {
            id: "choice physicians network;Nivano Physicians;Apple Valley=DXF001216",
            label:
              "choice physicians network;Nivano Physicians;Apple Valley=DXF001216",
          },
          {
            id: "choice physicians network;Live Well IPA;Apple Valley=DXF001217",
            label:
              "choice physicians network;Live Well IPA;Apple Valley=DXF001217",
          },
          {
            id: "choice physicians network;MD Senior Care;Apple Valley=DXF001218",
            label:
              "choice physicians network;MD Senior Care;Apple Valley=DXF001218",
          },
          {
            id: "chorng lii hwang md; ;Indio=DXF001075",
            label: "chorng lii hwang md; ;Indio=DXF001075",
          },
          {
            id: "chorng lii hwang md;chorng liihwang md;Indio=DXF001076",
            label: "chorng lii hwang md;chorng liihwang md;Indio=DXF001076",
          },
          {
            id: "Christi Cheng MD Inc; ;San Leandro=DXF004344",
            label: "Christi Cheng MD Inc; ;San Leandro=DXF004344",
          },
          {
            id: "Christine K. Won, M.D.; ;Pasadena=DXF000146",
            label: "Christine K. Won, M.D.; ;Pasadena=DXF000146",
          },
          {
            id: "Christopher Chen M.D. Inc; ;Pleasanton=DXF004069",
            label: "Christopher Chen M.D. Inc; ;Pleasanton=DXF004069",
          },
          {
            id: "Christopher J. Thrash MD, Inc; ;Santa Barbara=DXF001048",
            label: "Christopher J. Thrash MD, Inc; ;Santa Barbara=DXF001048",
          },
          {
            id: "CHULA VISTA INTERNAL MEDICINE; ;CHULA VIST=DXF002099",
            label: "CHULA VISTA INTERNAL MEDICINE; ;CHULA VIST=DXF002099",
          },
          {
            id: "CHULA VISTA INTERNAL MEDICINE;CHULA VISTA  INTERNAL MEDICINE;CHULA VIST=DXF002106",
            label:
              "CHULA VISTA INTERNAL MEDICINE;CHULA VISTA  INTERNAL MEDICINE;CHULA VIST=DXF002106",
          },
          {
            id: "Chulhwe Koo MD; ;Riverside=DXF000182",
            label: "Chulhwe Koo MD; ;Riverside=DXF000182",
          },
          {
            id: "Cielo House; ;Moss Beach=DXF002817",
            label: "Cielo House; ;Moss Beach=DXF002817",
          },
          {
            id: "Cigna Healthcare; ;Bloomfield=DXF005652",
            label: "Cigna Healthcare; ;Bloomfield=DXF005652",
          },
          {
            id: "Cigna Healthcare;Cigna Healthcare of California;Glendale=DXF005731",
            label:
              "Cigna Healthcare;Cigna Healthcare of California;Glendale=DXF005731",
          },
          {
            id: "Cigna Healthcare;Evernorth Behavioral Health of California;Glendale=DXF005732",
            label:
              "Cigna Healthcare;Evernorth Behavioral Health of California;Glendale=DXF005732",
          },
          {
            id: "Cigna Healthcare;Cigna Dental Health of California;Glendale=DXF005733",
            label:
              "Cigna Healthcare;Cigna Dental Health of California;Glendale=DXF005733",
          },
          {
            id: "Cigna Healthcare;Cigna Health and Life Insurance Company;Bloomfield=DXF005734",
            label:
              "Cigna Healthcare;Cigna Health and Life Insurance Company;Bloomfield=DXF005734",
          },
          {
            id: "Circe Healthcare; ;Palm Desert=DXF003780",
            label: "Circe Healthcare; ;Palm Desert=DXF003780",
          },
          {
            id: "Circle City Midwifery & Women's Health Services, Inc; ;Corona=DXF004117",
            label:
              "Circle City Midwifery & Women's Health Services, Inc; ;Corona=DXF004117",
          },
          {
            id: "Citizens Medical Response, LLC; ;Stockton=DXF004269",
            label: "Citizens Medical Response, LLC; ;Stockton=DXF004269",
          },
          {
            id: "Citrus Valley Medical Associates; ;Corona=DXF001073",
            label: "Citrus Valley Medical Associates; ;Corona=DXF001073",
          },
          {
            id: "Citrus Valley Medical Associates, Inc.; ;Norco=DXF001026",
            label: "Citrus Valley Medical Associates, Inc.; ;Norco=DXF001026",
          },
          {
            id: "Citrus Valley Medical Associates, Inc.;PLATINUM PROVIDERS MEDICAL GROUP;Norco=DXF005523",
            label:
              "Citrus Valley Medical Associates, Inc.;PLATINUM PROVIDERS MEDICAL GROUP;Norco=DXF005523",
          },
          {
            id: "City of Hayward; ;Hayward=DXF005034",
            label: "City of Hayward; ;Hayward=DXF005034",
          },
          {
            id: "City of Hayward;Hayward Fire Department;Hayward=DXF005050",
            label: "City of Hayward;Hayward Fire Department;Hayward=DXF005050",
          },
          {
            id: "City of Hope Medical Foundation; ;Duarte=DXF000937",
            label: "City of Hope Medical Foundation; ;Duarte=DXF000937",
          },
          {
            id: "City of Hope National Medical Center; ;Duarte=DXF001786",
            label: "City of Hope National Medical Center; ;Duarte=DXF001786",
          },
          {
            id: "City of Hope National Medical Center;City of Hope National Medical Center - Department of Pathology;Duarte=DXF002170",
            label:
              "City of Hope National Medical Center;City of Hope National Medical Center - Department of Pathology;Duarte=DXF002170",
          },
          {
            id: "City of Hope National Medical Center;City of Hope National Medical Center - Corona Laboratory;Corona=DXF002188",
            label:
              "City of Hope National Medical Center;City of Hope National Medical Center - Corona Laboratory;Corona=DXF002188",
          },
          {
            id: "City of Hope National Medical Center;City of Hope National Medical Center - Lennar Laboratory;Irvine=DXF002189",
            label:
              "City of Hope National Medical Center;City of Hope National Medical Center - Lennar Laboratory;Irvine=DXF002189",
          },
          {
            id: "City of Hope National Medical Center;City of Hope Medical Foundation - South Pasadena Laboratory;South Pasadena=DXF002190",
            label:
              "City of Hope National Medical Center;City of Hope Medical Foundation - South Pasadena Laboratory;South Pasadena=DXF002190",
          },
          {
            id: "City of Oakland Fire Department; ;Oakland=DXF004415",
            label: "City of Oakland Fire Department; ;Oakland=DXF004415",
          },
          {
            id: "CityServe Network; ;Bakersfield=DXF003617",
            label: "CityServe Network; ;Bakersfield=DXF003617",
          },
          {
            id: "Civic medical ctr,Inc.; ;Fremont=DXF004486",
            label: "Civic medical ctr,Inc.; ;Fremont=DXF004486",
          },
          {
            id: "Claire Serrato MD INC; ;San Mateo=DXF001300",
            label: "Claire Serrato MD INC; ;San Mateo=DXF001300",
          },
          {
            id: "Clarity Pediatrics Medical Group; ;San Francisco=DXF004319",
            label: "Clarity Pediatrics Medical Group; ;San Francisco=DXF004319",
          },
          {
            id: "Clear View Sanitarium; ;Gardena=DXF002396",
            label: "Clear View Sanitarium; ;Gardena=DXF002396",
          },
          {
            id: "Clear View Sanitarium;Clear View Convalescent Center;Gardena=DXF002402",
            label:
              "Clear View Sanitarium;Clear View Convalescent Center;Gardena=DXF002402",
          },
          {
            id: "Clearwater Healthcare Center; ;Stockton=DXF004861",
            label: "Clearwater Healthcare Center; ;Stockton=DXF004861",
          },
          {
            id: "Clever Care Golden State; ;Huntington Beach=DXF005875",
            label: "Clever Care Golden State; ;Huntington Beach=DXF005875",
          },
          {
            id: "Clinica Coachella; ;Coachella=DXF000807",
            label: "Clinica Coachella; ;Coachella=DXF000807",
          },
          {
            id: "Clinica del Socorro Medical Group, Inc; ;Los Angeles=DXF003396",
            label:
              "Clinica del Socorro Medical Group, Inc; ;Los Angeles=DXF003396",
          },
          {
            id: "Clinica Familiar San Lucas; ;Lynwodo=DXF000881",
            label: "Clinica Familiar San Lucas; ;Lynwodo=DXF000881",
          },
          {
            id: "Clinica San Marcos Medical Center, Inc; ;South Gate=DXF003525",
            label:
              "Clinica San Marcos Medical Center, Inc; ;South Gate=DXF003525",
          },
          {
            id: "Clinica San Marcos Medical Center, Inc;Santo Nino Medical Center, Inc;Los Angeles=DXF003526",
            label:
              "Clinica San Marcos Medical Center, Inc;Santo Nino Medical Center, Inc;Los Angeles=DXF003526",
          },
          {
            id: "Clinica Santa Marta Medical Group Inc; ;Los Angeles=DXF003527",
            label:
              "Clinica Santa Marta Medical Group Inc; ;Los Angeles=DXF003527",
          },
          {
            id: "Clinica Sierra Vista; ;Bakersfield=DXF000769",
            label: "Clinica Sierra Vista; ;Bakersfield=DXF000769",
          },
          {
            id: "Clinica Sierra Vista; ;Bakersfield=DXF004684",
            label: "Clinica Sierra Vista; ;Bakersfield=DXF004684",
          },
          {
            id: "ClinNEXUS Inc.; ;Los Angeles=DXF003718",
            label: "ClinNEXUS Inc.; ;Los Angeles=DXF003718",
          },
          {
            id: "CNA EDUCATION SERVICE; ;Clovis=DXF003517",
            label: "CNA EDUCATION SERVICE; ;Clovis=DXF003517",
          },
          {
            id: "coast orthopedic specialty assoc; ;templeton=DXF001190",
            label: "coast orthopedic specialty assoc; ;templeton=DXF001190",
          },
          {
            id: "coast orthopedic specialty assoc;coast orthopedic  specialty asoc;templeton=DXF001191",
            label:
              "coast orthopedic specialty assoc;coast orthopedic  specialty asoc;templeton=DXF001191",
          },
          {
            id: "Coast Psychiatric associates; ;Long Beach=DXF000220",
            label: "Coast Psychiatric associates; ;Long Beach=DXF000220",
          },
          {
            id: "Coast Surgical Group; ;Chula Vista=DXF001683",
            label: "Coast Surgical Group; ;Chula Vista=DXF001683",
          },
          {
            id: "Coastal Cardiology, A Medical Corporation; ;San Luis Obispo=DXF000188",
            label:
              "Coastal Cardiology, A Medical Corporation; ;San Luis Obispo=DXF000188",
          },
          {
            id: "Coastal Family Medicine ,Inc.; ;Suisan=DXF003837",
            label: "Coastal Family Medicine ,Inc.; ;Suisan=DXF003837",
          },
          {
            id: "Coastal Radiation Oncology Medical Group, A Professional Medical Corportation; ;ventura=DXF001718",
            label:
              "Coastal Radiation Oncology Medical Group, A Professional Medical Corportation; ;ventura=DXF001718",
          },
          {
            id: "COASTAL VIEW HEALTHCARE CENTER, LLC, dba COASTAL VIEW HEALTHCARE CENTER; ;ventura=DXF005850",
            label:
              "COASTAL VIEW HEALTHCARE CENTER, LLC, dba COASTAL VIEW HEALTHCARE CENTER; ;ventura=DXF005850",
          },
          {
            id: "Collabria Care; ;Napa=DXF002684",
            label: "Collabria Care; ;Napa=DXF002684",
          },
          {
            id: "Collabria Care;Providence Adult Day Health Napa Valley;Napa=DXF005202",
            label:
              "Collabria Care;Providence Adult Day Health Napa Valley;Napa=DXF005202",
          },
          {
            id: "College Hospital Cerritos; ;Cerritos=DXF000344",
            label: "College Hospital Cerritos; ;Cerritos=DXF000344",
          },
          {
            id: "College Medical Center; ;Long Beach=DXF003116",
            label: "College Medical Center; ;Long Beach=DXF003116",
          },
          {
            id: "College Oak; ;Sacramento=DXF004672",
            label: "College Oak; ;Sacramento=DXF004672",
          },
          {
            id: "Colusa County; ;Colusa=DXF000911",
            label: "Colusa County; ;Colusa=DXF000911",
          },
          {
            id: "Comfort Family Clinic Inc; ;Wilmington=DXF002008",
            label: "Comfort Family Clinic Inc; ;Wilmington=DXF002008",
          },
          {
            id: "Comfort Paradise Home Care Agency; ;Alhambra=DXF004342",
            label: "Comfort Paradise Home Care Agency; ;Alhambra=DXF004342",
          },
          {
            id: "CommonSpirit Health;California Hospital Medical Center (So CA);Los Angeles=DXF003797",
            label:
              "CommonSpirit Health;California Hospital Medical Center (So CA);Los Angeles=DXF003797",
          },
          {
            id: "CommonSpirit Health;French Hospital Medical Center (So CA);San Luis Obispo=DXF003798",
            label:
              "CommonSpirit Health;French Hospital Medical Center (So CA);San Luis Obispo=DXF003798",
          },
          {
            id: "CommonSpirit Health;Glendale Memorial Hospital and Health Center (So CA);Glendale=DXF003799",
            label:
              "CommonSpirit Health;Glendale Memorial Hospital and Health Center (So CA);Glendale=DXF003799",
          },
          {
            id: "CommonSpirit Health;Methodist Hospital of Sacramento (No CA);Sacramento=DXF003800",
            label:
              "CommonSpirit Health;Methodist Hospital of Sacramento (No CA);Sacramento=DXF003800",
          },
          {
            id: "CommonSpirit Health;Northridge Hospital Medical Center (So CA);Northridge=DXF003801",
            label:
              "CommonSpirit Health;Northridge Hospital Medical Center (So CA);Northridge=DXF003801",
          },
          {
            id: "CommonSpirit Health;Sequoia Hospital (No CA);Redwood City=DXF003802",
            label:
              "CommonSpirit Health;Sequoia Hospital (No CA);Redwood City=DXF003802",
          },
          {
            id: "CommonSpirit Health;Woodland Memorial Hospital (No CA);Woodland=DXF003803",
            label:
              "CommonSpirit Health;Woodland Memorial Hospital (No CA);Woodland=DXF003803",
          },
          {
            id: "CommonSpirit Health;Bakersfield Memorial Hospital (So CA);Bakersfield=DXF003804",
            label:
              "CommonSpirit Health;Bakersfield Memorial Hospital (So CA);Bakersfield=DXF003804",
          },
          {
            id: "CommonSpirit Health;Mark Twain Medical Center (So CA);San Andreas=DXF003805",
            label:
              "CommonSpirit Health;Mark Twain Medical Center (So CA);San Andreas=DXF003805",
          },
          {
            id: "CommonSpirit Health;Community Hospital of San Bernardino dba Community Hospital San Bernardino (So CA);San Bernardino=DXF003806",
            label:
              "CommonSpirit Health;Community Hospital of San Bernardino dba Community Hospital San Bernardino (So CA);San Bernardino=DXF003806",
          },
          {
            id: "CommonSpirit Health;Saint Francis Memorial Hospital (No CA);San Francisco=DXF003807",
            label:
              "CommonSpirit Health;Saint Francis Memorial Hospital (No CA);San Francisco=DXF003807",
          },
          {
            id: "CommonSpirit Health;Sierra Nevada Memorial-Miners Hospital (No CA);Grass Valley=DXF003808",
            label:
              "CommonSpirit Health;Sierra Nevada Memorial-Miners Hospital (No CA);Grass Valley=DXF003808",
          },
          {
            id: "CommonSpirit Health;Pacific Central Coast Health Centers (So CA);Santa Maria=DXF003809",
            label:
              "CommonSpirit Health;Pacific Central Coast Health Centers (So CA);Santa Maria=DXF003809",
          },
          {
            id: "CommonSpirit Health;Dignity Health Medical Foundation;Rancho Cordova=DXF003810",
            label:
              "CommonSpirit Health;Dignity Health Medical Foundation;Rancho Cordova=DXF003810",
          },
          {
            id: "CommonSpirit Health;Arroyo Grande Community Hospital (aka Marian Regional Medical Center - Arroyo Grande) (not Catholic) (So CA);Arroyo Grande=DXF003811",
            label:
              "CommonSpirit Health;Arroyo Grande Community Hospital (aka Marian Regional Medical Center - Arroyo Grande) (not Catholic) (So CA);Arroyo Grande=DXF003811",
          },
          {
            id: "CommonSpirit Health;Dominican Hospital (No CA);Santa Cruz=DXF003812",
            label:
              "CommonSpirit Health;Dominican Hospital (No CA);Santa Cruz=DXF003812",
          },
          {
            id: "CommonSpirit Health;Marian Regional Medical Center (So CA);Santa Maria=DXF003813",
            label:
              "CommonSpirit Health;Marian Regional Medical Center (So CA);Santa Maria=DXF003813",
          },
          {
            id: "CommonSpirit Health;Mercy General Hospital (No CA);Sacramento=DXF003814",
            label:
              "CommonSpirit Health;Mercy General Hospital (No CA);Sacramento=DXF003814",
          },
          {
            id: "CommonSpirit Health;Mercy Hospital (So CA);Bakersfield=DXF003815",
            label:
              "CommonSpirit Health;Mercy Hospital (So CA);Bakersfield=DXF003815",
          },
          {
            id: "CommonSpirit Health;Mercy Hospital Southwest (So CA);Bakersfield=DXF003816",
            label:
              "CommonSpirit Health;Mercy Hospital Southwest (So CA);Bakersfield=DXF003816",
          },
          {
            id: "CommonSpirit Health;Mercy Hospital of Folsom (No CA);FOLSOM=DXF003817",
            label:
              "CommonSpirit Health;Mercy Hospital of Folsom (No CA);FOLSOM=DXF003817",
          },
          {
            id: "CommonSpirit Health;Mercy Medical Center - Merced (So CA);MERCED=DXF003818",
            label:
              "CommonSpirit Health;Mercy Medical Center - Merced (So CA);MERCED=DXF003818",
          },
          {
            id: "CommonSpirit Health;Mercy Medical Center - Mt Shasta (So CA);Mount Shasta=DXF003819",
            label:
              "CommonSpirit Health;Mercy Medical Center - Mt Shasta (So CA);Mount Shasta=DXF003819",
          },
          {
            id: "CommonSpirit Health;Mercy Medical Center - Redding (No CA);Redding=DXF003820",
            label:
              "CommonSpirit Health;Mercy Medical Center - Redding (No CA);Redding=DXF003820",
          },
          {
            id: "CommonSpirit Health;Mercy San Juan Medical Center (No CA);Carmichael=DXF003821",
            label:
              "CommonSpirit Health;Mercy San Juan Medical Center (No CA);Carmichael=DXF003821",
          },
          {
            id: "CommonSpirit Health;St. Bernardine Medical Center (So CA);San Bernardino=DXF003822",
            label:
              "CommonSpirit Health;St. Bernardine Medical Center (So CA);San Bernardino=DXF003822",
          },
          {
            id: "CommonSpirit Health;St. Elizabeth Community Hospital (No CA);Red Bluff=DXF003823",
            label:
              "CommonSpirit Health;St. Elizabeth Community Hospital (No CA);Red Bluff=DXF003823",
          },
          {
            id: "CommonSpirit Health;St. John's Hospital Camarillo (So CA);Camarillo=DXF003824",
            label:
              "CommonSpirit Health;St. John's Hospital Camarillo (So CA);Camarillo=DXF003824",
          },
          {
            id: "CommonSpirit Health;St. John's Regional Medical Center (So CA);Oxnard=DXF003825",
            label:
              "CommonSpirit Health;St. John's Regional Medical Center (So CA);Oxnard=DXF003825",
          },
          {
            id: "CommonSpirit Health;St. Mary Medical Center Long Beach (So CA);Long Beach=DXF003826",
            label:
              "CommonSpirit Health;St. Mary Medical Center Long Beach (So CA);Long Beach=DXF003826",
          },
          {
            id: "CommonSpirit Health;St. Mary's Medical Center (No CA);San Francisco=DXF003827",
            label:
              "CommonSpirit Health;St. Mary's Medical Center (No CA);San Francisco=DXF003827",
          },
          {
            id: "CommonSpirit Health;St. Joseph's Medical Center Stockton (So CA);Stockton=DXF003829",
            label:
              "CommonSpirit Health;St. Joseph's Medical Center Stockton (So CA);Stockton=DXF003829",
          },
          {
            id: "CommonSpirit Health; ;Englewood=DXF003926",
            label: "CommonSpirit Health; ;Englewood=DXF003926",
          },
          {
            id: "CommonSpirit Health;Dignity Community Care;San Francisco=DXF003928",
            label:
              "CommonSpirit Health;Dignity Community Care;San Francisco=DXF003928",
          },
          {
            id: "CommonSpirit Health;Dignity Health;San Francisco=DXF003929",
            label: "CommonSpirit Health;Dignity Health;San Francisco=DXF003929",
          },
          {
            id: "Communicare Health Centers; ;Davis=DXF003185",
            label: "Communicare Health Centers; ;Davis=DXF003185",
          },
          {
            id: "Community Action Agency of Butte County, Inc.; ;Chico=DXF003306",
            label:
              "Community Action Agency of Butte County, Inc.; ;Chico=DXF003306",
          },
          {
            id: "Community Action Partnership of Sonoma County; ;Santa Rosa=DXF003329",
            label:
              "Community Action Partnership of Sonoma County; ;Santa Rosa=DXF003329",
          },
          {
            id: "COMMUNITY CARE AND REHAB CENTER; ;Riverside=DXF005193",
            label: "COMMUNITY CARE AND REHAB CENTER; ;Riverside=DXF005193",
          },
          {
            id: "Community Care Center; ;La Mesa=DXF004859",
            label: "Community Care Center; ;La Mesa=DXF004859",
          },
          {
            id: "Community Care Health; ;Fresno=DXF002169",
            label: "Community Care Health; ;Fresno=DXF002169",
          },
          {
            id: "Community Extended Care Hospital; ;MONTCLAIR=DXF003002",
            label: "Community Extended Care Hospital; ;MONTCLAIR=DXF003002",
          },
          {
            id: "Community Foundation Medical Group, DBA Sante Foundation Medical Group; ;Fresno=DXF001670",
            label:
              "Community Foundation Medical Group, DBA Sante Foundation Medical Group; ;Fresno=DXF001670",
          },
          {
            id: "Community Health Center Network; ;San Leandro=DXF005602",
            label: "Community Health Center Network; ;San Leandro=DXF005602",
          },
          {
            id: "Community Health Centers of the Central Coast; ;Santa Maria=DXF002624",
            label:
              "Community Health Centers of the Central Coast; ;Santa Maria=DXF002624",
          },
          {
            id: "Community Health Group; ;Chula Vista=DXF001745",
            label: "Community Health Group; ;Chula Vista=DXF001745",
          },
          {
            id: "Community Health Systems, Inc; ;MORENO VALLEY=DXF005401",
            label: "Community Health Systems, Inc; ;MORENO VALLEY=DXF005401",
          },
          {
            id: "Community Health Systems, Inc.; ;MORENO VALLEY=DXF002118",
            label: "Community Health Systems, Inc.; ;MORENO VALLEY=DXF002118",
          },
          {
            id: "Community Medical Wellness Centers USA; ;Long Beach=DXF002669",
            label:
              "Community Medical Wellness Centers USA; ;Long Beach=DXF002669",
          },
          {
            id: "Community Pediatric Clinic; ;Santa Fe Springs=DXF004381",
            label: "Community Pediatric Clinic; ;Santa Fe Springs=DXF004381",
          },
          {
            id: "Community Research Foundation dba Healthy Connect San Diego; ;San Diego=DXF002614",
            label:
              "Community Research Foundation dba Healthy Connect San Diego; ;San Diego=DXF002614",
          },
          {
            id: "Community SeniorServ, Inc., DBA Meals on Wheels, Orange County; ;Anaheim=DXF004259",
            label:
              "Community SeniorServ, Inc., DBA Meals on Wheels, Orange County; ;Anaheim=DXF004259",
          },
          {
            id: "Community Wellness Medical Clinic Inc; ;Inglewood=DXF003678",
            label:
              "Community Wellness Medical Clinic Inc; ;Inglewood=DXF003678",
          },
          {
            id: "Community-Based Organization; ;Santa Ana=DXF004360",
            label: "Community-Based Organization; ;Santa Ana=DXF004360",
          },
          {
            id: "Compass Health Inc; ;Grover Beach=DXF005010",
            label: "Compass Health Inc; ;Grover Beach=DXF005010",
          },
          {
            id: "Compass Health Inc;Arroyo Grande Care Center;Arroyo Grande=DXF005011",
            label:
              "Compass Health Inc;Arroyo Grande Care Center;Arroyo Grande=DXF005011",
          },
          {
            id: "Compass Health Inc;Bayside Care Center;Morro Bay=DXF005012",
            label: "Compass Health Inc;Bayside Care Center;Morro Bay=DXF005012",
          },
          {
            id: "Compass Health Inc;Danish Care Center;Atascadero=DXF005013",
            label: "Compass Health Inc;Danish Care Center;Atascadero=DXF005013",
          },
          {
            id: "Compass Health Inc;Mission View Health Center;San Luis Obispo=DXF005014",
            label:
              "Compass Health Inc;Mission View Health Center;San Luis Obispo=DXF005014",
          },
          {
            id: "Compass Health Inc;San Luis Transitional Care;San Luis Obispo=DXF005015",
            label:
              "Compass Health Inc;San Luis Transitional Care;San Luis Obispo=DXF005015",
          },
          {
            id: "Compass Health Inc;San Luis Post Acute Center;San Luis Obispo=DXF005016",
            label:
              "Compass Health Inc;San Luis Post Acute Center;San Luis Obispo=DXF005016",
          },
          {
            id: "Compass Health Inc;Vineyard Hills Health Center;templeton=DXF005017",
            label:
              "Compass Health Inc;Vineyard Hills Health Center;templeton=DXF005017",
          },
          {
            id: "Complete Care Community Health Center, Inc; ;Los Angeles=DXF004654",
            label:
              "Complete Care Community Health Center, Inc; ;Los Angeles=DXF004654",
          },
          {
            id: "Comprehensive Care Center of Irvine; ;Irvine=DXF001430",
            label: "Comprehensive Care Center of Irvine; ;Irvine=DXF001430",
          },
          {
            id: "Comprehensive Community Health Centers; ;Glendale=DXF001113",
            label:
              "Comprehensive Community Health Centers; ;Glendale=DXF001113",
          },
          {
            id: "Comprehensive medical Center; ;Pomona=DXF002210",
            label: "Comprehensive medical Center; ;Pomona=DXF002210",
          },
          {
            id: "Comprehensive Medical Group of Delano; ;Delano=DXF002714",
            label: "Comprehensive Medical Group of Delano; ;Delano=DXF002714",
          },
          {
            id: "Conejo Health; ;Westlake Village=DXF004247",
            label: "Conejo Health; ;Westlake Village=DXF004247",
          },
          {
            id: "Connecting Point; ;Grass Valley=DXF004503",
            label: "Connecting Point; ;Grass Valley=DXF004503",
          },
          {
            id: "CONSOLIDATED MEDICAL BIO-ANALYSIS, INC; ;Cypress=DXF003966",
            label: "CONSOLIDATED MEDICAL BIO-ANALYSIS, INC; ;Cypress=DXF003966",
          },
          {
            id: "Consultorio Medico Latino Medical Center; ;Paramount=DXF003680",
            label:
              "Consultorio Medico Latino Medical Center; ;Paramount=DXF003680",
          },
          {
            id: "Contra Costa Health Services; ;Martinez=DXF001799",
            label: "Contra Costa Health Services; ;Martinez=DXF001799",
          },
          {
            id: "Contra Costa Health Services;Contra Costa Health Plan;Martinez=DXF001801",
            label:
              "Contra Costa Health Services;Contra Costa Health Plan;Martinez=DXF001801",
          },
          {
            id: "Contra Costa Health Services;Contra Costa Regional Medical Center;Martinez=DXF001802",
            label:
              "Contra Costa Health Services;Contra Costa Regional Medical Center;Martinez=DXF001802",
          },
          {
            id: "Contra Costa Health Services;Contra Costa Regional Medical Center Health Centers;Martinez=DXF001804",
            label:
              "Contra Costa Health Services;Contra Costa Regional Medical Center Health Centers;Martinez=DXF001804",
          },
          {
            id: "Contra Costa Health Services;Contra Costa Behavioral Health Services;Martinez=DXF001814",
            label:
              "Contra Costa Health Services;Contra Costa Behavioral Health Services;Martinez=DXF001814",
          },
          {
            id: "Contra Costa Health Services;Contra Costa Behavioral Health Services;Martinez=DXF001815",
            label:
              "Contra Costa Health Services;Contra Costa Behavioral Health Services;Martinez=DXF001815",
          },
          {
            id: "Coordinated Regional Care Group, LLC; ;Orange=DXF005345",
            label: "Coordinated Regional Care Group, LLC; ;Orange=DXF005345",
          },
          {
            id: "CORAL CLINICS; ;Santa Monica=DXF004108",
            label: "CORAL CLINICS; ;Santa Monica=DXF004108",
          },
          {
            id: "CORAL CLINICS;CORAL CLINICS;WINNETKA=DXF004111",
            label: "CORAL CLINICS;CORAL CLINICS;WINNETKA=DXF004111",
          },
          {
            id: "Corona Healthcare Center; ;Corona=DXF005313",
            label: "Corona Healthcare Center; ;Corona=DXF005313",
          },
          {
            id: "Corona Physicians Associates A Medical Corporation; ;Corona=DXF000414",
            label:
              "Corona Physicians Associates A Medical Corporation; ;Corona=DXF000414",
          },
          {
            id: "Corona Physicians Associates A Medical Corporation;San Bernardino Physicians Associates A Medical Corporation;San Bernardino=DXF002257",
            label:
              "Corona Physicians Associates A Medical Corporation;San Bernardino Physicians Associates A Medical Corporation;San Bernardino=DXF002257",
          },
          {
            id: "Corona Physicians Associates A Medical Corporation;Rancho Physicians Choice A Medical Corporation;Ontario=DXF002258",
            label:
              "Corona Physicians Associates A Medical Corporation;Rancho Physicians Choice A Medical Corporation;Ontario=DXF002258",
          },
          {
            id: "Corona Physicians Associates A Medical Corporation;Arlington Physicians Choice A Medical Corporation;Riverside=DXF002259",
            label:
              "Corona Physicians Associates A Medical Corporation;Arlington Physicians Choice A Medical Corporation;Riverside=DXF002259",
          },
          {
            id: "Corona Regional Medical Center; ;Corona=DXF002015",
            label: "Corona Regional Medical Center; ;Corona=DXF002015",
          },
          {
            id: "Correctional Health Management, LLC; ;San Bernardino=DXF000191",
            label:
              "Correctional Health Management, LLC; ;San Bernardino=DXF000191",
          },
          {
            id: "Correctional Health Management, LLC;Correctional Health Management of California, Inc;San Bernardino=DXF000193",
            label:
              "Correctional Health Management, LLC;Correctional Health Management of California, Inc;San Bernardino=DXF000193",
          },
          {
            id: "COTTONS LLC; ;Sacramento=DXF004841",
            label: "COTTONS LLC; ;Sacramento=DXF004841",
          },
          {
            id: "Counseling and Research Associates DBA Masada Homes; ;Gardena=DXF002769",
            label:
              "Counseling and Research Associates DBA Masada Homes; ;Gardena=DXF002769",
          },
          {
            id: "Country Manor Healthcare; ;Sylmar=DXF003223",
            label: "Country Manor Healthcare; ;Sylmar=DXF003223",
          },
          {
            id: "Country Villa Sheraton Nursing & Rehabilitation Center; ;North Hills=DXF002114",
            label:
              "Country Villa Sheraton Nursing & Rehabilitation Center; ;North Hills=DXF002114",
          },
          {
            id: "County of Glenn; ;Orland=DXF004587",
            label: "County of Glenn; ;Orland=DXF004587",
          },
          {
            id: "County of Glenn;County of Glenn;Orland=DXF004588",
            label: "County of Glenn;County of Glenn;Orland=DXF004588",
          },
          {
            id: "County of Glenn;County of Glenn;Willows=DXF004589",
            label: "County of Glenn;County of Glenn;Willows=DXF004589",
          },
          {
            id: "County of Glenn;County of Glenn;Willows=DXF004590",
            label: "County of Glenn;County of Glenn;Willows=DXF004590",
          },
          {
            id: "County of Glenn;Dos Rios Continuum of Care;Willows=DXF004591",
            label:
              "County of Glenn;Dos Rios Continuum of Care;Willows=DXF004591",
          },
          {
            id: "County of Glenn;County of Glenn;Orland=DXF004593",
            label: "County of Glenn;County of Glenn;Orland=DXF004593",
          },
          {
            id: "County of Glenn;Tri-Counties Community Action Partnership;Orland=DXF004598",
            label:
              "County of Glenn;Tri-Counties Community Action Partnership;Orland=DXF004598",
          },
          {
            id: "County of Humboldt DHHS Public Health; ;Eureka=DXF003599",
            label: "County of Humboldt DHHS Public Health; ;Eureka=DXF003599",
          },
          {
            id: "County of Los Angeles Department of Mental Health; ;Los Angeles=DXF001566",
            label:
              "County of Los Angeles Department of Mental Health; ;Los Angeles=DXF001566",
          },
          {
            id: "County of Marin Health and Human Services; ;San Rafael=DXF003348",
            label:
              "County of Marin Health and Human Services; ;San Rafael=DXF003348",
          },
          {
            id: "County of Marin Health and Human Services;County of Marin HHS - Behavioral Health and Recovery Services;San Rafael=DXF003351",
            label:
              "County of Marin Health and Human Services;County of Marin HHS - Behavioral Health and Recovery Services;San Rafael=DXF003351",
          },
          {
            id: "County Of Mendocino, Department of Public Health; ;Ukiah=DXF005089",
            label:
              "County Of Mendocino, Department of Public Health; ;Ukiah=DXF005089",
          },
          {
            id: "County of Monterey; ;Salinas=DXF003497",
            label: "County of Monterey; ;Salinas=DXF003497",
          },
          {
            id: "County of Monterey;Behavioral Health Bureau;Salinas=DXF003516",
            label:
              "County of Monterey;Behavioral Health Bureau;Salinas=DXF003516",
          },
          {
            id: "County of Monterey-Natividad Medical Center; ;Salinas=DXF004568",
            label:
              "County of Monterey-Natividad Medical Center; ;Salinas=DXF004568",
          },
          {
            id: "County of Placer -Behavioral Health MHP; ;Auburn=DXF004310",
            label: "County of Placer -Behavioral Health MHP; ;Auburn=DXF004310",
          },
          {
            id: "County of Placer -Behavioral Health MHP;County of Placer -Behavioral Health-DMC-ODS;Auburn=DXF004316",
            label:
              "County of Placer -Behavioral Health MHP;County of Placer -Behavioral Health-DMC-ODS;Auburn=DXF004316",
          },
          {
            id: "County of San Diego; ;San Diego=DXF000449",
            label: "County of San Diego; ;San Diego=DXF000449",
          },
          {
            id: "County of San Diego;San Diego County Psychiatric Hospital;San Diego=DXF000936",
            label:
              "County of San Diego;San Diego County Psychiatric Hospital;San Diego=DXF000936",
          },
          {
            id: "County of San Diego;Edgemoor Distinct Part Skilled Nursing Facility;Santee=DXF000938",
            label:
              "County of San Diego;Edgemoor Distinct Part Skilled Nursing Facility;Santee=DXF000938",
          },
          {
            id: "County of San Diego;San Diego County Public Health Laboratory;San Diego=DXF000943",
            label:
              "County of San Diego;San Diego County Public Health Laboratory;San Diego=DXF000943",
          },
          {
            id: "County of San Diego;San Diego County Public Health Modular Laboratory;San Diego=DXF001404",
            label:
              "County of San Diego;San Diego County Public Health Modular Laboratory;San Diego=DXF001404",
          },
          {
            id: "County of San Luis Obispo Health Agency; ;San Luis Obispo=DXF000207",
            label:
              "County of San Luis Obispo Health Agency; ;San Luis Obispo=DXF000207",
          },
          {
            id: "County of San Luis Obispo Health Agency;County of San Luis Obispo Behavioral Health Department - Drug and Alcohol Clinic;San Luis Obispo=DXF000319",
            label:
              "County of San Luis Obispo Health Agency;County of San Luis Obispo Behavioral Health Department - Drug and Alcohol Clinic;San Luis Obispo=DXF000319",
          },
          {
            id: "County of San Luis Obispo Health Agency;County of San Luis Obispo Behavioral Health Department - Mental Health Clinic;San Luis Obispo=DXF000320",
            label:
              "County of San Luis Obispo Health Agency;County of San Luis Obispo Behavioral Health Department - Mental Health Clinic;San Luis Obispo=DXF000320",
          },
          {
            id: "County of San Luis Obispo Health Agency;County of San Luis Obispo Behavioral Health Department - Mental Health Psychiatric Ward;San Luis Obispo=DXF000321",
            label:
              "County of San Luis Obispo Health Agency;County of San Luis Obispo Behavioral Health Department - Mental Health Psychiatric Ward;San Luis Obispo=DXF000321",
          },
          {
            id: "County of San Luis Obispo Health Agency;County of San Luis Obispo Public Health Department- Public Health Clinic;San Luis Obispo=DXF000322",
            label:
              "County of San Luis Obispo Health Agency;County of San Luis Obispo Public Health Department- Public Health Clinic;San Luis Obispo=DXF000322",
          },
          {
            id: "County of San Luis Obispo Health Agency;County of San Luis Obispo Public Health Department - Public Health Lab;San Luis Obispo=DXF000323",
            label:
              "County of San Luis Obispo Health Agency;County of San Luis Obispo Public Health Department - Public Health Lab;San Luis Obispo=DXF000323",
          },
          {
            id: "County of Santa Clara; ;San Jose=DXF002995",
            label: "County of Santa Clara; ;San Jose=DXF002995",
          },
          {
            id: "County of Santa Clara;Santa Clara Valley Healthcare;none PD entry=DXF005612",
            label:
              "County of Santa Clara;Santa Clara Valley Healthcare;none PD entry=DXF005612",
          },
          {
            id: "County of Siskiyou Health and Human Services Agency; ;Yreka=DXF002453",
            label:
              "County of Siskiyou Health and Human Services Agency; ;Yreka=DXF002453",
          },
          {
            id: "County of Siskiyou Health and Human Services Agency;County of Siskiyou HHSA, Social Services Division;Yreka=DXF005550",
            label:
              "County of Siskiyou Health and Human Services Agency;County of Siskiyou HHSA, Social Services Division;Yreka=DXF005550",
          },
          {
            id: "County of Siskiyou Health and Human Services Agency;County of Siskiyou HHSA, Public Health Division;Yreka=DXF005551",
            label:
              "County of Siskiyou Health and Human Services Agency;County of Siskiyou HHSA, Public Health Division;Yreka=DXF005551",
          },
          {
            id: "County of Siskiyou Health and Human Services Agency;County of Siskiyou HHSA, Behavioral Health Division;Yreka=DXF005552",
            label:
              "County of Siskiyou Health and Human Services Agency;County of Siskiyou HHSA, Behavioral Health Division;Yreka=DXF005552",
          },
          {
            id: "County of Tuolumne; ;Sonora=DXF001686",
            label: "County of Tuolumne; ;Sonora=DXF001686",
          },
          {
            id: "County of Tuolumne;County of Tuolumne, Public Health Department;Sonora=DXF001688",
            label:
              "County of Tuolumne;County of Tuolumne, Public Health Department;Sonora=DXF001688",
          },
          {
            id: "County of Ventura; ;ventura=DXF000062",
            label: "County of Ventura; ;ventura=DXF000062",
          },
          {
            id: "County of Ventura;Ventura County Area Agency on Aging;ventura=DXF000627",
            label:
              "County of Ventura;Ventura County Area Agency on Aging;ventura=DXF000627",
          },
          {
            id: "County of Ventura;Ventura County Medical Center;ventura=DXF000628",
            label:
              "County of Ventura;Ventura County Medical Center;ventura=DXF000628",
          },
          {
            id: "County of Ventura;Ventura County Human Services Agency;ventura=DXF000629",
            label:
              "County of Ventura;Ventura County Human Services Agency;ventura=DXF000629",
          },
          {
            id: "County of Ventura;Ventura County Medical Center Laboratory;ventura=DXF000630",
            label:
              "County of Ventura;Ventura County Medical Center Laboratory;ventura=DXF000630",
          },
          {
            id: "County of Ventura;Ventura County Health Care Plan;ventura=DXF000631",
            label:
              "County of Ventura;Ventura County Health Care Plan;ventura=DXF000631",
          },
          {
            id: "County of Ventura;Ventura County Behavioral Health Department;ventura=DXF000632",
            label:
              "County of Ventura;Ventura County Behavioral Health Department;ventura=DXF000632",
          },
          {
            id: "County of Ventura;Ventura County Public Health Department;ventura=DXF000633",
            label:
              "County of Ventura;Ventura County Public Health Department;ventura=DXF000633",
          },
          {
            id: "County of Ventura;Ventura County Public Health Department Laboratory;ventura=DXF000634",
            label:
              "County of Ventura;Ventura County Public Health Department Laboratory;ventura=DXF000634",
          },
          {
            id: "Couture Medical Group; ;Riverside=DXF000811",
            label: "Couture Medical Group; ;Riverside=DXF000811",
          },
          {
            id: "Covenant Care California, LLC dba Gilroy Healthcare and Rehabilitation Center; ;GILROY=DXF005295",
            label:
              "Covenant Care California, LLC dba Gilroy Healthcare and Rehabilitation Center; ;GILROY=DXF005295",
          },
          {
            id: "Covenant Care California, LLC dba Gilroy Healthcare and Rehabilitation Center;Covenant Care California, LLC dba Grant Cuesta Sub-acute and Rehabilitation Center;Mountain View=DXF005297",
            label:
              "Covenant Care California, LLC dba Gilroy Healthcare and Rehabilitation Center;Covenant Care California, LLC dba Grant Cuesta Sub-acute and Rehabilitation Center;Mountain View=DXF005297",
          },
          {
            id: "Covenant Care California, LLC dba Gilroy Healthcare and Rehabilitation Center;Covenant Care California, LLC dba Los Altos Sub-Acute and Rehabilitation Center;Los Altos=DXF005298",
            label:
              "Covenant Care California, LLC dba Gilroy Healthcare and Rehabilitation Center;Covenant Care California, LLC dba Los Altos Sub-Acute and Rehabilitation Center;Los Altos=DXF005298",
          },
          {
            id: "Covenant Care California, LLC dba Gilroy Healthcare and Rehabilitation Center;Covenant Care Mission, Inc. dba Mission Skilled Nursing & Subacute Center;Santa Clara=DXF005301",
            label:
              "Covenant Care California, LLC dba Gilroy Healthcare and Rehabilitation Center;Covenant Care Mission, Inc. dba Mission Skilled Nursing & Subacute Center;Santa Clara=DXF005301",
          },
          {
            id: "Covenant Care California, LLC dba Gilroy Healthcare and Rehabilitation Center;Covenant Care Morgan Hill, LLC dba Pacific Hills Manor;Morgan Hill=DXF005302",
            label:
              "Covenant Care California, LLC dba Gilroy Healthcare and Rehabilitation Center;Covenant Care Morgan Hill, LLC dba Pacific Hills Manor;Morgan Hill=DXF005302",
          },
          {
            id: "Covenant Care California, LLC dba Gilroy Healthcare and Rehabilitation Center;Covenant Care California, LLC dba Palo Alto Sub-Acute and Rehabilitation Center;Palo Alto=DXF005303",
            label:
              "Covenant Care California, LLC dba Gilroy Healthcare and Rehabilitation Center;Covenant Care California, LLC dba Palo Alto Sub-Acute and Rehabilitation Center;Palo Alto=DXF005303",
          },
          {
            id: "Covenant Living West dba Covenant Living at the Samarkand; ;Santa Barbara=DXF002313",
            label:
              "Covenant Living West dba Covenant Living at the Samarkand; ;Santa Barbara=DXF002313",
          },
          {
            id: "Covenant Village Care Center; ;turlock=DXF002316",
            label: "Covenant Village Care Center; ;turlock=DXF002316",
          },
          {
            id: "Covenant Village Care Center;Brandel Manor;turlock=DXF002317",
            label:
              "Covenant Village Care Center;Brandel Manor;turlock=DXF002317",
          },
          {
            id: "Craig Sclar MD; ;San Diego=DXF001613",
            label: "Craig Sclar MD; ;San Diego=DXF001613",
          },
          {
            id: "Creekview Health Center; ;Pleasanton=DXF003315",
            label: "Creekview Health Center; ;Pleasanton=DXF003315",
          },
          {
            id: "Crescent City Skilled Nursing; ;crescent city=DXF004631",
            label: "Crescent City Skilled Nursing; ;crescent city=DXF004631",
          },
          {
            id: "Cresencia D. Banzuela MD INC; ;Corona=DXF001205",
            label: "Cresencia D. Banzuela MD INC; ;Corona=DXF001205",
          },
          {
            id: "Crestwood Behavioral Health, Inc.; ;Sacramento=DXF004976",
            label: "Crestwood Behavioral Health, Inc.; ;Sacramento=DXF004976",
          },
          {
            id: "Crestwood Behavioral Health, Inc.;Crestwood Manor Stockton;Sacramento=DXF004977",
            label:
              "Crestwood Behavioral Health, Inc.;Crestwood Manor Stockton;Sacramento=DXF004977",
          },
          {
            id: "Crestwood Behavioral Health, Inc.;Crestwood Manor Modesto;Sacramento=DXF004978",
            label:
              "Crestwood Behavioral Health, Inc.;Crestwood Manor Modesto;Sacramento=DXF004978",
          },
          {
            id: "Crestwood Behavioral Health, Inc.;Crestwood Treatment Center;Sacramento=DXF004979",
            label:
              "Crestwood Behavioral Health, Inc.;Crestwood Treatment Center;Sacramento=DXF004979",
          },
          {
            id: "Crestwood Behavioral Health, Inc.;Crestwood Wellness & Recovery Center;Sacramento=DXF004980",
            label:
              "Crestwood Behavioral Health, Inc.;Crestwood Wellness & Recovery Center;Sacramento=DXF004980",
          },
          {
            id: "Crestwood Behavioral Health, Inc.;Crestwood Manor - Fremont;Sacramento=DXF004981",
            label:
              "Crestwood Behavioral Health, Inc.;Crestwood Manor - Fremont;Sacramento=DXF004981",
          },
          {
            id: "Crestwood Manor; ;Stockton=DXF004527",
            label: "Crestwood Manor; ;Stockton=DXF004527",
          },
          {
            id: "Crisis Support Services of Alameda County; ;Oakland=DXF004045",
            label:
              "Crisis Support Services of Alameda County; ;Oakland=DXF004045",
          },
          {
            id: "Crittenton Services for Children & Families; ;Fullerton=DXF002708",
            label:
              "Crittenton Services for Children & Families; ;Fullerton=DXF002708",
          },
          {
            id: "CRMO; ;Cerritos=DXF003647",
            label: "CRMO; ;Cerritos=DXF003647",
          },
          {
            id: "Crown Island Family Practice, AMC; ;Coronado=DXF001619",
            label: "Crown Island Family Practice, AMC; ;Coronado=DXF001619",
          },
          {
            id: "CRYSTAL COVE CARE CENTER; ;Newport Beach=DXF004193",
            label: "CRYSTAL COVE CARE CENTER; ;Newport Beach=DXF004193",
          },
          {
            id: "CS Rayhrer MD A Professional Corporation; ;ventura=DXF001995",
            label:
              "CS Rayhrer MD A Professional Corporation; ;ventura=DXF001995",
          },
          {
            id: "Cucamonga Valley Medical Group; ;FONTANA=DXF003921",
            label: "Cucamonga Valley Medical Group; ;FONTANA=DXF003921",
          },
          {
            id: "culverwest healthcare center; ;Los Angeles=DXF005337",
            label: "culverwest healthcare center; ;Los Angeles=DXF005337",
          },
          {
            id: "CVTS Medical Group Inc; ;Chula Vista=DXF001345",
            label: "CVTS Medical Group Inc; ;Chula Vista=DXF001345",
          },
          {
            id: "CytoCync LLC; ;Battle Ground=DXF004367",
            label: "CytoCync LLC; ;Battle Ground=DXF004367",
          },
          {
            id: "D REDDY MEDICAL GROUP; ;Rancho Mirage=DXF003592",
            label: "D REDDY MEDICAL GROUP; ;Rancho Mirage=DXF003592",
          },
          {
            id: "DA & AR Hospice Care; ;Van Nuys=DXF003603",
            label: "DA & AR Hospice Care; ;Van Nuys=DXF003603",
          },
          {
            id: "DaCare, Inc; ;Brawley=DXF003745",
            label: "DaCare, Inc; ;Brawley=DXF003745",
          },
          {
            id: "Daisy Li, DO, Inc; ;Stockton=DXF001323",
            label: "Daisy Li, DO, Inc; ;Stockton=DXF001323",
          },
          {
            id: "Dale Ekstrum, MD Inc.; ;Lompoc=DXF000652",
            label: "Dale Ekstrum, MD Inc.; ;Lompoc=DXF000652",
          },
          {
            id: "Dale Kooistra, M.D.; ;Poway=DXF001862",
            label: "Dale Kooistra, M.D.; ;Poway=DXF001862",
          },
          {
            id: "Damodara Rajasekhar, MD, A Medical Corporation; ;Apple Valley=DXF001280",
            label:
              "Damodara Rajasekhar, MD, A Medical Corporation; ;Apple Valley=DXF001280",
          },
          {
            id: "Daniel E Fast; ;Palm Springs=DXF000130",
            label: "Daniel E Fast; ;Palm Springs=DXF000130",
          },
          {
            id: "Daniel F. Craviotto, Jr., M.D.; ;Santa Barbara=DXF001044",
            label: "Daniel F. Craviotto, Jr., M.D.; ;Santa Barbara=DXF001044",
          },
          {
            id: "Daniel Franco M.D., Inc.; ;San Benardino=DXF000304",
            label: "Daniel Franco M.D., Inc.; ;San Benardino=DXF000304",
          },
          {
            id: "Daniel Franco M.D., Inc.;Daniel Franco M.D., Inc.;Redlands=DXF002150",
            label:
              "Daniel Franco M.D., Inc.;Daniel Franco M.D., Inc.;Redlands=DXF002150",
          },
          {
            id: "Danielle Thomas MD Inc; ;Santa Barbara=DXF001630",
            label: "Danielle Thomas MD Inc; ;Santa Barbara=DXF001630",
          },
          {
            id: "Danville San Ramon Eye Medical Corp; ;Danville=DXF000267",
            label: "Danville San Ramon Eye Medical Corp; ;Danville=DXF000267",
          },
          {
            id: "DAP Health; ;Palm Springs=DXF000027",
            label: "DAP Health; ;Palm Springs=DXF000027",
          },
          {
            id: "Darbun Enterprises Inc; ;North Hollywood=DXF003770",
            label: "Darbun Enterprises Inc; ;North Hollywood=DXF003770",
          },
          {
            id: "Darius A Schneider MD APC; ;La Jolla=DXF001618",
            label: "Darius A Schneider MD APC; ;La Jolla=DXF001618",
          },
          {
            id: "DaubMD, Inc.; ;Santee=DXF001620",
            label: "DaubMD, Inc.; ;Santee=DXF001620",
          },
          {
            id: "David Alonso MD Inc; ;Chico=DXF004323",
            label: "David Alonso MD Inc; ;Chico=DXF004323",
          },
          {
            id: "David E Smith MD A Prof. Corp.; ;Salinas=DXF000971",
            label: "David E Smith MD A Prof. Corp.; ;Salinas=DXF000971",
          },
          {
            id: "David J. Paster, MD, A Medical Corp; ;Encino=DXF000326",
            label: "David J. Paster, MD, A Medical Corp; ;Encino=DXF000326",
          },
          {
            id: "David Kim's Acupuncture; ;Orange=DXF003746",
            label: "David Kim's Acupuncture; ;Orange=DXF003746",
          },
          {
            id: "David Lazar MD, A Medical Corp; ;Los Angeles=DXF000731",
            label: "David Lazar MD, A Medical Corp; ;Los Angeles=DXF000731",
          },
          {
            id: "David Lortscher, MD, P.C.; ;San Diego=DXF000439",
            label: "David Lortscher, MD, P.C.; ;San Diego=DXF000439",
          },
          {
            id: "David M. Ashkenaze, MD, Inc; ;Laguna Beach=DXF000723",
            label: "David M. Ashkenaze, MD, Inc; ;Laguna Beach=DXF000723",
          },
          {
            id: "David Savar MD A Medical Corporation; ;Beverly Hills=DXF000348",
            label:
              "David Savar MD A Medical Corporation; ;Beverly Hills=DXF000348",
          },
          {
            id: "Dawes Family Medicine; ;Santa Maria=DXF003401",
            label: "Dawes Family Medicine; ;Santa Maria=DXF003401",
          },
          {
            id: "Dawes Family Medicine;Dawes Psychiatry;Santa Maria=DXF005579",
            label:
              "Dawes Family Medicine;Dawes Psychiatry;Santa Maria=DXF005579",
          },
          {
            id: "DayBreak Adult Care; ;San Leandro=DXF004391",
            label: "DayBreak Adult Care; ;San Leandro=DXF004391",
          },
          {
            id: "Defender, LLC; ;Sacramento=DXF004751",
            label: "Defender, LLC; ;Sacramento=DXF004751",
          },
          {
            id: "Del Amo Gardens Care Center; ;Torrance=DXF000350",
            label: "Del Amo Gardens Care Center; ;Torrance=DXF000350",
          },
          {
            id: "Del Puerto Health Care District; ;PATTERSON=DXF003591",
            label: "Del Puerto Health Care District; ;PATTERSON=DXF003591",
          },
          {
            id: "DEL REFUGIO HEALTHCARE, INC; ;Los Angeles=DXF003515",
            label: "DEL REFUGIO HEALTHCARE, INC; ;Los Angeles=DXF003515",
          },
          {
            id: "Department of Developmental Services, State of California; ;Sacramento=DXF002807",
            label:
              "Department of Developmental Services, State of California; ;Sacramento=DXF002807",
          },
          {
            id: "Department of Developmental Services, State of California;Porterville Developmental Center;Porterville=DXF002808",
            label:
              "Department of Developmental Services, State of California;Porterville Developmental Center;Porterville=DXF002808",
          },
          {
            id: "Department of Developmental Services, State of California;Department of Developmental Services, State of California;Sacramento=DXF004044",
            label:
              "Department of Developmental Services, State of California;Department of Developmental Services, State of California;Sacramento=DXF004044",
          },
          {
            id: "Department of Public Health/SAPC; ;Los Angeles=DXF002371",
            label: "Department of Public Health/SAPC; ;Los Angeles=DXF002371",
          },
          {
            id: "Department of Public Health/SAPC;Los Angeles County Department of Public Health;Los Angeles=DXF002375",
            label:
              "Department of Public Health/SAPC;Los Angeles County Department of Public Health;Los Angeles=DXF002375",
          },
          {
            id: "Department of State Hospitals; ;Sacramento=DXF000037",
            label: "Department of State Hospitals; ;Sacramento=DXF000037",
          },
          {
            id: "Department of State Hospitals;Department of State Hospitals - Napa;Napa=DXF000752",
            label:
              "Department of State Hospitals;Department of State Hospitals - Napa;Napa=DXF000752",
          },
          {
            id: "Department of State Hospitals;Department of State Hospitals - Coalinga;Coalinga=DXF000753",
            label:
              "Department of State Hospitals;Department of State Hospitals - Coalinga;Coalinga=DXF000753",
          },
          {
            id: "Department of State Hospitals;Department of State Hospitals - Metropolitan;Norwalk=DXF000754",
            label:
              "Department of State Hospitals;Department of State Hospitals - Metropolitan;Norwalk=DXF000754",
          },
          {
            id: "Department of State Hospitals;Department of State Hospitals - Atascadero;Atascadero=DXF000755",
            label:
              "Department of State Hospitals;Department of State Hospitals - Atascadero;Atascadero=DXF000755",
          },
          {
            id: "Department of State Hospitals;Department of State Hospitals - Patton;Patton=DXF000756",
            label:
              "Department of State Hospitals;Department of State Hospitals - Patton;Patton=DXF000756",
          },
          {
            id: "Dermatologist Medical group of North County, Inc.; ;Oceanside=DXF003360",
            label:
              "Dermatologist Medical group of North County, Inc.; ;Oceanside=DXF003360",
          },
          {
            id: "Dermatology Consultants of Sacramento; ;Sacramento=DXF000493",
            label:
              "Dermatology Consultants of Sacramento; ;Sacramento=DXF000493",
          },
          {
            id: "Dermatology Medical Group of Oxnard and Camarillo; ;Oxnard=DXF000453",
            label:
              "Dermatology Medical Group of Oxnard and Camarillo; ;Oxnard=DXF000453",
          },
          {
            id: "Dermatology Specialists, Inc.; ;Oceanside=DXF001679",
            label: "Dermatology Specialists, Inc.; ;Oceanside=DXF001679",
          },
          {
            id: "Desert Canyon Post Acute; ;Lancaster=DXF001675",
            label: "Desert Canyon Post Acute; ;Lancaster=DXF001675",
          },
          {
            id: "Desert Canyon Post Acute; ;Lancaster=DXF005845",
            label: "Desert Canyon Post Acute; ;Lancaster=DXF005845",
          },
          {
            id: "Desert Medical Advances; ;Rancho Mirage=DXF000642",
            label: "Desert Medical Advances; ;Rancho Mirage=DXF000642",
          },
          {
            id: "Desert Medical Advances; ;Rancho Mirage=DXF000651",
            label: "Desert Medical Advances; ;Rancho Mirage=DXF000651",
          },
          {
            id: "Desert Oasis Healthcare; ;Palm Springs=DXF003321",
            label: "Desert Oasis Healthcare; ;Palm Springs=DXF003321",
          },
          {
            id: "Desert Orthopedic Center A Medical Group, Inc.; ;Rancho Mirage=DXF001813",
            label:
              "Desert Orthopedic Center A Medical Group, Inc.; ;Rancho Mirage=DXF001813",
          },
          {
            id: "Desert Primary Care; ;Palm Springs=DXF001966",
            label: "Desert Primary Care; ;Palm Springs=DXF001966",
          },
          {
            id: "Desert Regional Medical Center; ;Palm Springs=DXF000226",
            label: "Desert Regional Medical Center; ;Palm Springs=DXF000226",
          },
          {
            id: "Desert Rheumatology Clinic; ;La Quinta=DXF000132",
            label: "Desert Rheumatology Clinic; ;La Quinta=DXF000132",
          },
          {
            id: "Devang Shah; ;Morgan Hill=DXF003356",
            label: "Devang Shah; ;Morgan Hill=DXF003356",
          },
          {
            id: "DHHS-Behavioral Health; ;Eureka=DXF002458",
            label: "DHHS-Behavioral Health; ;Eureka=DXF002458",
          },
          {
            id: "DIABETES ASSOCIATES MEDICAL GROUP; ;Orange=DXF001651",
            label: "DIABETES ASSOCIATES MEDICAL GROUP; ;Orange=DXF001651",
          },
          {
            id: "Diagnostic Pathology Services of the Central Coast; ;San Luis Obispo=DXF001137",
            label:
              "Diagnostic Pathology Services of the Central Coast; ;San Luis Obispo=DXF001137",
          },
          {
            id: "Didi Hirsch Mental Health Services; ;Culver City=DXF002603",
            label: "Didi Hirsch Mental Health Services; ;Culver City=DXF002603",
          },
          {
            id: "Didi Hirsch Mental Health Services; ;Culver City=DXF003268",
            label: "Didi Hirsch Mental Health Services; ;Culver City=DXF003268",
          },
          {
            id: "Dignity Adult Day Health Care Center; ;MONTCLAIR=DXF003835",
            label: "Dignity Adult Day Health Care Center; ;MONTCLAIR=DXF003835",
          },
          {
            id: "Dimple Agarwal MD; ;Palm Springs=DXF004518",
            label: "Dimple Agarwal MD; ;Palm Springs=DXF004518",
          },
          {
            id: "Dirk R. Diefendorf, MD; ;San Mateo=DXF001283",
            label: "Dirk R. Diefendorf, MD; ;San Mateo=DXF001283",
          },
          {
            id: "Doctor; ;Riverside=DXF000214",
            label: "Doctor; ;Riverside=DXF000214",
          },
          {
            id: "Doctors Hospital of Riverside, LLC dba Parkview Community Hospital Medical Center; ;Riverside=DXF004884",
            label:
              "Doctors Hospital of Riverside, LLC dba Parkview Community Hospital Medical Center; ;Riverside=DXF004884",
          },
          {
            id: "Doctors on Duty Medical Group, Inc.; ;Salinas=DXF001481",
            label: "Doctors on Duty Medical Group, Inc.; ;Salinas=DXF001481",
          },
          {
            id: "Doctors Without Walls - Santa Barbara Street Medicine; ;Santa Barbara=DXF004190",
            label:
              "Doctors Without Walls - Santa Barbara Street Medicine; ;Santa Barbara=DXF004190",
          },
          {
            id: "Dominican Hospital; ;Santa Cruz=DXF005518",
            label: "Dominican Hospital; ;Santa Cruz=DXF005518",
          },
          {
            id: "Donald E. Wallens M.D. A Medical Co; ;Los Angeles=DXF000333",
            label:
              "Donald E. Wallens M.D. A Medical Co; ;Los Angeles=DXF000333",
          },
          {
            id: "DONALD I KUZYK DPM INC; ;SIMI VALLEY=DXF000984",
            label: "DONALD I KUZYK DPM INC; ;SIMI VALLEY=DXF000984",
          },
          {
            id: "Donald K Schubert, Ph.D.; ;MISSION VIEJO=DXF003697",
            label: "Donald K Schubert, Ph.D.; ;MISSION VIEJO=DXF003697",
          },
          {
            id: "Donald Ware MD; ;Los Angeles=DXF003919",
            label: "Donald Ware MD; ;Los Angeles=DXF003919",
          },
          {
            id: "Douglas Chin, MD; ;Oakland=DXF004607",
            label: "Douglas Chin, MD; ;Oakland=DXF004607",
          },
          {
            id: "Douglas W. Ankrom, MD Inc; ;Sonora=DXF000546",
            label: "Douglas W. Ankrom, MD Inc; ;Sonora=DXF000546",
          },
          {
            id: "Dr Aditya Jain Md Inc; ;San Leandro=DXF004487",
            label: "Dr Aditya Jain Md Inc; ;San Leandro=DXF004487",
          },
          {
            id: "Dr Christina Hopson; ;Roseville=DXF000657",
            label: "Dr Christina Hopson; ;Roseville=DXF000657",
          },
          {
            id: "Dr Curtis Kodama and Associates Inc.; ;Moorpark=DXF004625",
            label: "Dr Curtis Kodama and Associates Inc.; ;Moorpark=DXF004625",
          },
          {
            id: "Dr Graham Hurvitz Corporation; ;Santa Barbara=DXF001628",
            label: "Dr Graham Hurvitz Corporation; ;Santa Barbara=DXF001628",
          },
          {
            id: "Dr Halyna West INC; ;San Diego=DXF001807",
            label: "Dr Halyna West INC; ;San Diego=DXF001807",
          },
          {
            id: "dr susan biegel md inc.; ;Upland=DXF005801",
            label: "dr susan biegel md inc.; ;Upland=DXF005801",
          },
          {
            id: "DR WALTER F D'COSTA; ;Santa Rosa=DXF000599",
            label: "DR WALTER F D'COSTA; ;Santa Rosa=DXF000599",
          },
          {
            id: "Dr. Catherine Chimenti; ;Burlingame=DXF001157",
            label: "Dr. Catherine Chimenti; ;Burlingame=DXF001157",
          },
          {
            id: "Dr. Edgar Martinez DO Inc; ;Huntington Park=DXF003473",
            label: "Dr. Edgar Martinez DO Inc; ;Huntington Park=DXF003473",
          },
          {
            id: "Dr. Edgar Martinez DO Inc;Dr. Edgar Martinez DO INC.;Huntington Park=DXF003474",
            label:
              "Dr. Edgar Martinez DO Inc;Dr. Edgar Martinez DO INC.;Huntington Park=DXF003474",
          },
          {
            id: "Dr. Edgar Martinez DO Inc;Dr. Edgar Martinez DO INC.;Huntington Park=DXF003475",
            label:
              "Dr. Edgar Martinez DO Inc;Dr. Edgar Martinez DO INC.;Huntington Park=DXF003475",
          },
          {
            id: "Dr. Indira Vemuri,P.C.; ;Morgan Hill=DXF003399",
            label: "Dr. Indira Vemuri,P.C.; ;Morgan Hill=DXF003399",
          },
          {
            id: "Dr. Mark S. Cramer, MD, FAAFP; ;San Diego=DXF000300",
            label: "Dr. Mark S. Cramer, MD, FAAFP; ;San Diego=DXF000300",
          },
          {
            id: "Dr. Marupuru a professional corporation; ;Palm Springs=DXF004619",
            label:
              "Dr. Marupuru a professional corporation; ;Palm Springs=DXF004619",
          },
          {
            id: "Dr. Michael Girolami; ;Burlingame=DXF001156",
            label: "Dr. Michael Girolami; ;Burlingame=DXF001156",
          },
          {
            id: "Dr. Mona Mofid; ;San Diego=DXF001364",
            label: "Dr. Mona Mofid; ;San Diego=DXF001364",
          },
          {
            id: "Dr. Nina K Maw Maw MD INC; ;Rancho Mirage=DXF004263",
            label: "Dr. Nina K Maw Maw MD INC; ;Rancho Mirage=DXF004263",
          },
          {
            id: "Dr. Niveen Abdelmessih; ;Glendale=DXF000400",
            label: "Dr. Niveen Abdelmessih; ;Glendale=DXF000400",
          },
          {
            id: "Dr. Xie, Inc; ;Burlingame=DXF001877",
            label: "Dr. Xie, Inc; ;Burlingame=DXF001877",
          },
          {
            id: "DR. ZHOU'S OB/GYN PROFESSIONAL CORPORATION; ;Burlingame=DXF001495",
            label:
              "DR. ZHOU'S OB/GYN PROFESSIONAL CORPORATION; ;Burlingame=DXF001495",
          },
          {
            id: "Duggal Medical Corp Inc; ;Modesto=DXF005392",
            label: "Duggal Medical Corp Inc; ;Modesto=DXF005392",
          },
          {
            id: "Duhaney Home Health Care , Inc; ;Los Angeles=DXF003983",
            label: "Duhaney Home Health Care , Inc; ;Los Angeles=DXF003983",
          },
          {
            id: "Durga Madala MD Inc.; ;San Jose=DXF003366",
            label: "Durga Madala MD Inc.; ;San Jose=DXF003366",
          },
          {
            id: "Dustin Raber Md inc; ;riverdale=DXF004346",
            label: "Dustin Raber Md inc; ;riverdale=DXF004346",
          },
          {
            id: "Dynasty valley llc; ;Grass Valley=DXF005057",
            label: "Dynasty valley llc; ;Grass Valley=DXF005057",
          },
          {
            id: "Dynasty valley llc;Crescent City Skilled Nursing;crescent city=DXF005177",
            label:
              "Dynasty valley llc;Crescent City Skilled Nursing;crescent city=DXF005177",
          },
          {
            id: "E.MIKE VASILOMANOLAKIS MD; ;Long Beach=DXF003478",
            label: "E.MIKE VASILOMANOLAKIS MD; ;Long Beach=DXF003478",
          },
          {
            id: "E.MIKE VASILOMANOLAKIS MD;Emmanuel Vasilomanolakis, MD;none PD entry=DXF005658",
            label:
              "E.MIKE VASILOMANOLAKIS MD;Emmanuel Vasilomanolakis, MD;none PD entry=DXF005658",
          },
          {
            id: "EA Family Services; ;Quincy=DXF002922",
            label: "EA Family Services; ;Quincy=DXF002922",
          },
          {
            id: "Ear Nose and Throat Associates of San Diego A Medical Corporation; ;La Mesa=DXF000727",
            label:
              "Ear Nose and Throat Associates of San Diego A Medical Corporation; ;La Mesa=DXF000727",
          },
          {
            id: "Ear Nose and Throat Associates of San Diego A Medical Corporation;Ear Nose and Throat Associates of San Diego;La Mesa=DXF000728",
            label:
              "Ear Nose and Throat Associates of San Diego A Medical Corporation;Ear Nose and Throat Associates of San Diego;La Mesa=DXF000728",
          },
          {
            id: "Ear Nose and Throat Associates of San Diego A Medical Corporation;Ear Nose and Throat Associates of San Diego;Chula Vista=DXF000729",
            label:
              "Ear Nose and Throat Associates of San Diego A Medical Corporation;Ear Nose and Throat Associates of San Diego;Chula Vista=DXF000729",
          },
          {
            id: "Ear Nose and Throat Associates of San Diego A Medical Corporation;Ear Nose and Throat Associates of San Diego;San Diego=DXF000730",
            label:
              "Ear Nose and Throat Associates of San Diego A Medical Corporation;Ear Nose and Throat Associates of San Diego;San Diego=DXF000730",
          },
          {
            id: "Ear Nose and Throat Associates of San Mateo County; ;San Mateo=DXF000639",
            label:
              "Ear Nose and Throat Associates of San Mateo County; ;San Mateo=DXF000639",
          },
          {
            id: "East Bay Cardiovascular and Thoracic Associates; ;Danville=DXF004453",
            label:
              "East Bay Cardiovascular and Thoracic Associates; ;Danville=DXF004453",
          },
          {
            id: "East Bay Center for Digestive Health; ;Oakland=DXF001982",
            label: "East Bay Center for Digestive Health; ;Oakland=DXF001982",
          },
          {
            id: "East Bay Hand Medical Center, Inc; ;San Leandro=DXF000317",
            label: "East Bay Hand Medical Center, Inc; ;San Leandro=DXF000317",
          },
          {
            id: "EAST BAY MEDICAL PROFESSIONAL CORPORATION; ;Dublin=DXF002470",
            label:
              "EAST BAY MEDICAL PROFESSIONAL CORPORATION; ;Dublin=DXF002470",
          },
          {
            id: "East Bay Nephrology Medical Group, Inc.; ;Berkeley=DXF001329",
            label:
              "East Bay Nephrology Medical Group, Inc.; ;Berkeley=DXF001329",
          },
          {
            id: "East Bay Neurosurgery and Spine, Inc; ;Berkeley=DXF000262",
            label: "East Bay Neurosurgery and Spine, Inc; ;Berkeley=DXF000262",
          },
          {
            id: "East County Cardiology; ;Antioch=DXF000481",
            label: "East County Cardiology; ;Antioch=DXF000481",
          },
          {
            id: "East Valley Community Health Center, Inc.; ;West Covina=DXF001677",
            label:
              "East Valley Community Health Center, Inc.; ;West Covina=DXF001677",
          },
          {
            id: "Eastern Medical Center; ;Sacramento=DXF004533",
            label: "Eastern Medical Center; ;Sacramento=DXF004533",
          },
          {
            id: "Eastern Plumas Health Care; ;Portola=DXF004840",
            label: "Eastern Plumas Health Care; ;Portola=DXF004840",
          },
          {
            id: "EASTSIDE FAMILY MEDICAL ASSOCIATES; ;Los Angeles=DXF003635",
            label: "EASTSIDE FAMILY MEDICAL ASSOCIATES; ;Los Angeles=DXF003635",
          },
          {
            id: "EasyCare Management, INC.; ;West Hills=DXF002968",
            label: "EasyCare Management, INC.; ;West Hills=DXF002968",
          },
          {
            id: "Eat Ahara; ;Los Angeles=DXF003672",
            label: "Eat Ahara; ;Los Angeles=DXF003672",
          },
          {
            id: "Ebbetts Pass Fire District; ;Arnold=DXF004545",
            label: "Ebbetts Pass Fire District; ;Arnold=DXF004545",
          },
          {
            id: "Ebtesam Girgis MFT; ;Huntington Beach=DXF003662",
            label: "Ebtesam Girgis MFT; ;Huntington Beach=DXF003662",
          },
          {
            id: "Eden I & R, Inc.; ;Hayward=DXF004219",
            label: "Eden I & R, Inc.; ;Hayward=DXF004219",
          },
          {
            id: "Edgewood Center for Children and Families; ;San Francisco=DXF002839",
            label:
              "Edgewood Center for Children and Families; ;San Francisco=DXF002839",
          },
          {
            id: "Edinger Medical Group; ;Fountain Valley=DXF001839",
            label: "Edinger Medical Group; ;Fountain Valley=DXF001839",
          },
          {
            id: "EDMOND CHAN MD, A MED CORP; ;Poway=DXF002069",
            label: "EDMOND CHAN MD, A MED CORP; ;Poway=DXF002069",
          },
          {
            id: "Edmund Fisher, MD, Inc.; ;Bakersfield=DXF000271",
            label: "Edmund Fisher, MD, Inc.; ;Bakersfield=DXF000271",
          },
          {
            id: "Edmund H. Lew, MD, Inc.; ;Glendale=DXF004305",
            label: "Edmund H. Lew, MD, Inc.; ;Glendale=DXF004305",
          },
          {
            id: "Eduro Healthcare, LLC; ;Salt Lake City=DXF005112",
            label: "Eduro Healthcare, LLC; ;Salt Lake City=DXF005112",
          },
          {
            id: "Eduro Healthcare, LLC;Stockton Nursing Center;Stockton=DXF005113",
            label:
              "Eduro Healthcare, LLC;Stockton Nursing Center;Stockton=DXF005113",
          },
          {
            id: "Eduro Healthcare, LLC;Fresno Nursing Center;Fresno=DXF005114",
            label:
              "Eduro Healthcare, LLC;Fresno Nursing Center;Fresno=DXF005114",
          },
          {
            id: "Eduro Healthcare, LLC;Oakhurst Healthcare Center;Oakhurst=DXF005115",
            label:
              "Eduro Healthcare, LLC;Oakhurst Healthcare Center;Oakhurst=DXF005115",
          },
          {
            id: "Edward A Weiss MD INC; ;Palo Alto=DXF000895",
            label: "Edward A Weiss MD INC; ;Palo Alto=DXF000895",
          },
          {
            id: "Edward kocharian MD APC; ;La Jolla=DXF001623",
            label: "Edward kocharian MD APC; ;La Jolla=DXF001623",
          },
          {
            id: "Edward Oklan; ;San Rafael=DXF002429",
            label: "Edward Oklan; ;San Rafael=DXF002429",
          },
          {
            id: "Edward Ruiz, MD; ;La Quinta=DXF002973",
            label: "Edward Ruiz, MD; ;La Quinta=DXF002973",
          },
          {
            id: "Edward Sun, M.D., Inc.; ;San Mateo=DXF001267",
            label: "Edward Sun, M.D., Inc.; ;San Mateo=DXF001267",
          },
          {
            id: "Ehritt Hearing Services; ;SCOTTS VALLEY=DXF005092",
            label: "Ehritt Hearing Services; ;SCOTTS VALLEY=DXF005092",
          },
          {
            id: "Eisenhower Medical Center; ;Rancho Mirage=DXF005603",
            label: "Eisenhower Medical Center; ;Rancho Mirage=DXF005603",
          },
          {
            id: "Eisner Health; ;Los Angeles=DXF005563",
            label: "Eisner Health; ;Los Angeles=DXF005563",
          },
          {
            id: "El Centro Regional Medical Center; ;EL CENTRO=DXF005730",
            label: "El Centro Regional Medical Center; ;EL CENTRO=DXF005730",
          },
          {
            id: "El Dorado County; ;Diamond Springs=DXF000089",
            label: "El Dorado County; ;Diamond Springs=DXF000089",
          },
          {
            id: "El Dorado County Community Health Center; ;Placerville=DXF002576",
            label:
              "El Dorado County Community Health Center; ;Placerville=DXF002576",
          },
          {
            id: "El Proyecto del Barrio, Inc.; ;arleta=DXF001707",
            label: "El Proyecto del Barrio, Inc.; ;arleta=DXF001707",
          },
          {
            id: "Elevance CareMore; ;Rancho Cucamonga=DXF001945",
            label: "Elevance CareMore; ;Rancho Cucamonga=DXF001945",
          },
          {
            id: "Elica Health Centers; ;Sacramento=DXF001054",
            label: "Elica Health Centers; ;Sacramento=DXF001054",
          },
          {
            id: "Elisa C. Brown, M.D.; ;Chico=DXF000812",
            label: "Elisa C. Brown, M.D.; ;Chico=DXF000812",
          },
          {
            id: "Elite Primary Physicians, Inc; ;Anaheim=DXF003012",
            label: "Elite Primary Physicians, Inc; ;Anaheim=DXF003012",
          },
          {
            id: "Elite Urgent Care; ;Modesto=DXF000593",
            label: "Elite Urgent Care; ;Modesto=DXF000593",
          },
          {
            id: "ELITE WOMEN HEALTH APMC; ;Bakersfield=DXF003005",
            label: "ELITE WOMEN HEALTH APMC; ;Bakersfield=DXF003005",
          },
          {
            id: "Elizabeth Hegarty, MD; ;Santa Rosa=DXF000392",
            label: "Elizabeth Hegarty, MD; ;Santa Rosa=DXF000392",
          },
          {
            id: "Elizabeth Rawson, MD; ;San Francisco=DXF002198",
            label: "Elizabeth Rawson, MD; ;San Francisco=DXF002198",
          },
          {
            id: "Eloy Romero, MD., Inc. A Professional Corporation; ;Salinas=DXF004350",
            label:
              "Eloy Romero, MD., Inc. A Professional Corporation; ;Salinas=DXF004350",
          },
          {
            id: "Elyse Rubenstein, MD A Professional Coroporation; ;Santa Monica=DXF002207",
            label:
              "Elyse Rubenstein, MD A Professional Coroporation; ;Santa Monica=DXF002207",
          },
          {
            id: "Emanate Health; ;Covina=DXF001594",
            label: "Emanate Health; ;Covina=DXF001594",
          },
          {
            id: "Emanate Health;Emanate Health Medical Center;Covina=DXF001596",
            label:
              "Emanate Health;Emanate Health Medical Center;Covina=DXF001596",
          },
          {
            id: "Emanate Health;Emanate Health Foothill Presbyterian Hospital;Glendora=DXF001597",
            label:
              "Emanate Health;Emanate Health Foothill Presbyterian Hospital;Glendora=DXF001597",
          },
          {
            id: "Emanate Health;Emanate Health Hospice;West Covina=DXF001599",
            label:
              "Emanate Health;Emanate Health Hospice;West Covina=DXF001599",
          },
          {
            id: "Emanate Health;Emanate Health Queen of the Valley Hospital Clinical Laboratory;West Covina=DXF002219",
            label:
              "Emanate Health;Emanate Health Queen of the Valley Hospital Clinical Laboratory;West Covina=DXF002219",
          },
          {
            id: "Emanate Health;Emanate Health Medical Center Inter-Community Hospital Clinical Lab;Covina=DXF002366",
            label:
              "Emanate Health;Emanate Health Medical Center Inter-Community Hospital Clinical Lab;Covina=DXF002366",
          },
          {
            id: "Emcara Health; ;Franklin=DXF003350",
            label: "Emcara Health; ;Franklin=DXF003350",
          },
          {
            id: "Emcara Health;PopHealthCare, LLC;Franklin=DXF003352",
            label: "Emcara Health;PopHealthCare, LLC;Franklin=DXF003352",
          },
          {
            id: "Emergency Medical Services Authority; ;Rancho Cordova=DXF004929",
            label:
              "Emergency Medical Services Authority; ;Rancho Cordova=DXF004929",
          },
          {
            id: "Emily Bruckner; ;Los Angeles=DXF004215",
            label: "Emily Bruckner; ;Los Angeles=DXF004215",
          },
          {
            id: "Empire Physicians Medical Group, Inc.; ;Palm Desert=DXF000685",
            label:
              "Empire Physicians Medical Group, Inc.; ;Palm Desert=DXF000685",
          },
          {
            id: "Empress Care Center; ;San Jose=DXF005341",
            label: "Empress Care Center; ;San Jose=DXF005341",
          },
          {
            id: "Encompass Health; ;Birmingham=DXF000543",
            label: "Encompass Health; ;Birmingham=DXF000543",
          },
          {
            id: "Encompass Health;Encompass Health Rehabilitation Hospital of Modesto;Modesto=DXF005667",
            label:
              "Encompass Health;Encompass Health Rehabilitation Hospital of Modesto;Modesto=DXF005667",
          },
          {
            id: "Encompass Health;Encompass Health Rehabilitation Hospital of Tustin;Tustin=DXF005668",
            label:
              "Encompass Health;Encompass Health Rehabilitation Hospital of Tustin;Tustin=DXF005668",
          },
          {
            id: "Encompass Health;Encompass Health Rehabilitation Hospital of Bakersfield;Bakersfield=DXF005669",
            label:
              "Encompass Health;Encompass Health Rehabilitation Hospital of Bakersfield;Bakersfield=DXF005669",
          },
          {
            id: "Encompass Health;Encompass Health Rehabilitation Hospital of Murrieta;Murrieta=DXF005670",
            label:
              "Encompass Health;Encompass Health Rehabilitation Hospital of Murrieta;Murrieta=DXF005670",
          },
          {
            id: "Encompass Health;Encompass Health Rehabilitation Hospital of Bakersfield;Bakersfield=DXF005726",
            label:
              "Encompass Health;Encompass Health Rehabilitation Hospital of Bakersfield;Bakersfield=DXF005726",
          },
          {
            id: "Encompass Health;Encompass Health Rehabilitation Hospital of Modesto;Modesto=DXF005727",
            label:
              "Encompass Health;Encompass Health Rehabilitation Hospital of Modesto;Modesto=DXF005727",
          },
          {
            id: "Encompass Health;Encompass Health Rehabilitation Hospital of Tustin;Tustin=DXF005728",
            label:
              "Encompass Health;Encompass Health Rehabilitation Hospital of Tustin;Tustin=DXF005728",
          },
          {
            id: "Encompass Health;Encompass Health Rehabilitation Hospital of Murrieta;Murrieta=DXF005729",
            label:
              "Encompass Health;Encompass Health Rehabilitation Hospital of Murrieta;Murrieta=DXF005729",
          },
          {
            id: "encompass housing; ;Santa Ana=DXF003493",
            label: "encompass housing; ;Santa Ana=DXF003493",
          },
          {
            id: "English Channel Holdings, LLC; ;Lodi=DXF004877",
            label: "English Channel Holdings, LLC; ;Lodi=DXF004877",
          },
          {
            id: "Enloe Medical center; ;Chico=DXF004856",
            label: "Enloe Medical center; ;Chico=DXF004856",
          },
          {
            id: "Enrique Espinosa-Melendez, MD; ;Chula Vista=DXF001974",
            label: "Enrique Espinosa-Melendez, MD; ;Chula Vista=DXF001974",
          },
          {
            id: "Ensign Pleasanton LLC DBA Ukiah Post Acute; ;Ukiah=DXF004719",
            label:
              "Ensign Pleasanton LLC DBA Ukiah Post Acute; ;Ukiah=DXF004719",
          },
          {
            id: "Ensign Willits LLC DBA Northbrook Healthcare Center; ;Willits=DXF005044",
            label:
              "Ensign Willits LLC DBA Northbrook Healthcare Center; ;Willits=DXF005044",
          },
          {
            id: "Enterprise Elementary School District; ;Redding=DXF003452",
            label: "Enterprise Elementary School District; ;Redding=DXF003452",
          },
          {
            id: "Epic Care; ;Antioch=DXF003686",
            label: "Epic Care; ;Antioch=DXF003686",
          },
          {
            id: "Epic Health Plan; ;Redlands=DXF000717",
            label: "Epic Health Plan; ;Redlands=DXF000717",
          },
          {
            id: "Equal Tox; ;Santa Ana=DXF003934",
            label: "Equal Tox; ;Santa Ana=DXF003934",
          },
          {
            id: "Eric Hansen Family Practice; ;Hesperia=DXF000294",
            label: "Eric Hansen Family Practice; ;Hesperia=DXF000294",
          },
          {
            id: "Eric Hansen Family Practice;Eric R Hansen DO Prof Corp;Hesperia=DXF000295",
            label:
              "Eric Hansen Family Practice;Eric R Hansen DO Prof Corp;Hesperia=DXF000295",
          },
          {
            id: "Eric Roberto Batres Medical Corporation; ;Bell=DXF004460",
            label: "Eric Roberto Batres Medical Corporation; ;Bell=DXF004460",
          },
          {
            id: "ERIC TABAS MD INC; ;San Francisco=DXF000623",
            label: "ERIC TABAS MD INC; ;San Francisco=DXF000623",
          },
          {
            id: "ERICA RUIZ, MD; ;La Quinta=DXF002972",
            label: "ERICA RUIZ, MD; ;La Quinta=DXF002972",
          },
          {
            id: "Erick Madrigal MD MBA INC; ;Porterville=DXF000064",
            label: "Erick Madrigal MD MBA INC; ;Porterville=DXF000064",
          },
          {
            id: "Erick Madrigal MD MBA INC;Erick Madrigal MD MBA INC;Visalia=DXF000068",
            label:
              "Erick Madrigal MD MBA INC;Erick Madrigal MD MBA INC;Visalia=DXF000068",
          },
          {
            id: "Erick Madrigal MD MBA INC;Erick Madrigal MD MBA INC;Lindsay=DXF000069",
            label:
              "Erick Madrigal MD MBA INC;Erick Madrigal MD MBA INC;Lindsay=DXF000069",
          },
          {
            id: "Erik C. Spayde, M.D. Inc; ;Thousand Oaks=DXF002235",
            label: "Erik C. Spayde, M.D. Inc; ;Thousand Oaks=DXF002235",
          },
          {
            id: "Erik C. Spayde, M.D. Inc;St. Charles Spine Institute;Thousand Oaks=DXF002237",
            label:
              "Erik C. Spayde, M.D. Inc;St. Charles Spine Institute;Thousand Oaks=DXF002237",
          },
          {
            id: "Erik C. Spayde, M.D. Inc;St Charles Imaging Center;Thousand=DXF002238",
            label:
              "Erik C. Spayde, M.D. Inc;St Charles Imaging Center;Thousand=DXF002238",
          },
          {
            id: "Erika Novak, L.Ac.; ;San Diego=DXF001881",
            label: "Erika Novak, L.Ac.; ;San Diego=DXF001881",
          },
          {
            id: "Escondido Internal Medicine; ;Escondido=DXF001684",
            label: "Escondido Internal Medicine; ;Escondido=DXF001684",
          },
          {
            id: "Eureka Radiation Oncology Consultants; ;Blue Lake=DXF000190",
            label:
              "Eureka Radiation Oncology Consultants; ;Blue Lake=DXF000190",
          },
          {
            id: "Evans Hand Therapy; ;Anaheim=DXF004907",
            label: "Evans Hand Therapy; ;Anaheim=DXF004907",
          },
          {
            id: "Exact Sciences Laboratories, LLC; ;Madison=DXF003716",
            label: "Exact Sciences Laboratories, LLC; ;Madison=DXF003716",
          },
          {
            id: "Exact Sciences Laboratories, LLC; ;Madison=DXF003717",
            label: "Exact Sciences Laboratories, LLC; ;Madison=DXF003717",
          },
          {
            id: "Exagen; ;vista=DXF005021",
            label: "Exagen; ;vista=DXF005021",
          },
          {
            id: "Excellence in Rehabilitation Medical Group Inc; ;Santa Barbara=DXF001008",
            label:
              "Excellence in Rehabilitation Medical Group Inc; ;Santa Barbara=DXF001008",
          },
          {
            id: "Exer Urgent Care; ;El Segundo=DXF005793",
            label: "Exer Urgent Care; ;El Segundo=DXF005793",
          },
          {
            id: "Exodus Recovery Inc.; ;Culver City=DXF002693",
            label: "Exodus Recovery Inc.; ;Culver City=DXF002693",
          },
          {
            id: "Exodus Recovery, Inc; ;Fresno=DXF002920",
            label: "Exodus Recovery, Inc; ;Fresno=DXF002920",
          },
          {
            id: "Extended Care Hosp of Westminster; ;Westminster=DXF003703",
            label: "Extended Care Hosp of Westminster; ;Westminster=DXF003703",
          },
          {
            id: "Eye Physician Med/Surg Center; ;Chula Vista=DXF001380",
            label: "Eye Physician Med/Surg Center; ;Chula Vista=DXF001380",
          },
          {
            id: "Eye Physicians Medical Surgical Center; ;Chula Vista=DXF001367",
            label:
              "Eye Physicians Medical Surgical Center; ;Chula Vista=DXF001367",
          },
          {
            id: "Eye Site Sacramento Medical Group; ;Sacramento=DXF005159",
            label: "Eye Site Sacramento Medical Group; ;Sacramento=DXF005159",
          },
          {
            id: "F. Jimenez Medical Corporation; ;Upland=DXF003720",
            label: "F. Jimenez Medical Corporation; ;Upland=DXF003720",
          },
          {
            id: "Fairfield Health Care, Inc.; ;Fairfield=DXF005394",
            label: "Fairfield Health Care, Inc.; ;Fairfield=DXF005394",
          },
          {
            id: "Fairmont Rehabilitation Hospital; ;Lodi=DXF005025",
            label: "Fairmont Rehabilitation Hospital; ;Lodi=DXF005025",
          },
          {
            id: "Fairway Children's Medical Group; ;West Covina=DXF003264",
            label: "Fairway Children's Medical Group; ;West Covina=DXF003264",
          },
          {
            id: "Family Allergy, Asthma, Immunology & Sinus Center P.C.; ;Poway=DXF001517",
            label:
              "Family Allergy, Asthma, Immunology & Sinus Center P.C.; ;Poway=DXF001517",
          },
          {
            id: "Family Choice Health Services; ;Westminster=DXF003560",
            label: "Family Choice Health Services; ;Westminster=DXF003560",
          },
          {
            id: "Family Choice Medical Group, Inc.; ;Westminster=DXF003935",
            label: "Family Choice Medical Group, Inc.; ;Westminster=DXF003935",
          },
          {
            id: "Family First Medical Care; ;Modesto=DXF004636",
            label: "Family First Medical Care; ;Modesto=DXF004636",
          },
          {
            id: "Family Health Care Centers of Greater LA; ;Bell Gardens=DXF001295",
            label:
              "Family Health Care Centers of Greater LA; ;Bell Gardens=DXF001295",
          },
          {
            id: "Family Health Centers of San Diego, INC; ;San Diego=DXF000758",
            label:
              "Family Health Centers of San Diego, INC; ;San Diego=DXF000758",
          },
          {
            id: "Family HealthCare Network; ;Visalia=DXF001236",
            label: "Family HealthCare Network; ;Visalia=DXF001236",
          },
          {
            id: "Family Justice Center Sonoma County; ;Santa Rosa=DXF003996",
            label: "Family Justice Center Sonoma County; ;Santa Rosa=DXF003996",
          },
          {
            id: "Family Service Agency of Santa Barbara County; ;Santa Barbara=DXF004338",
            label:
              "Family Service Agency of Santa Barbara County; ;Santa Barbara=DXF004338",
          },
          {
            id: "Fareeda Adeeb M.D Pediatrics; ;San Jose=DXF002309",
            label: "Fareeda Adeeb M.D Pediatrics; ;San Jose=DXF002309",
          },
          {
            id: "Fariba Akhavon MD; ;Visalia=DXF004296",
            label: "Fariba Akhavon MD; ;Visalia=DXF004296",
          },
          {
            id: "Farid Saadat MD; ;Lake Elsinore=DXF000376",
            label: "Farid Saadat MD; ;Lake Elsinore=DXF000376",
          },
          {
            id: "Farr Medical Group, Inc.; ;Bakersfield=DXF001096",
            label: "Farr Medical Group, Inc.; ;Bakersfield=DXF001096",
          },
          {
            id: "Father Joe's VIllages; ;San Diego=DXF000827",
            label: "Father Joe's VIllages; ;San Diego=DXF000827",
          },
          {
            id: "Feather River Care Center; ;Oroville=DXF004675",
            label: "Feather River Care Center; ;Oroville=DXF004675",
          },
          {
            id: "Feather River Health Solutions; ;Live Oak=DXF000470",
            label: "Feather River Health Solutions; ;Live Oak=DXF000470",
          },
          {
            id: "Felix R. Gaw, MD, Inc; ;Anaheim=DXF003656",
            label: "Felix R. Gaw, MD, Inc; ;Anaheim=DXF003656",
          },
          {
            id: "Fellowship Homes INC dba Casa de Modesto; ;Modesto=DXF002759",
            label:
              "Fellowship Homes INC dba Casa de Modesto; ;Modesto=DXF002759",
          },
          {
            id: "Felton Institute; ;Alameda=DXF003242",
            label: "Felton Institute; ;Alameda=DXF003242",
          },
          {
            id: "Feras and Hisham, A Medical Corporation; ;Pomona=DXF003518",
            label: "Feras and Hisham, A Medical Corporation; ;Pomona=DXF003518",
          },
          {
            id: "Fertility Care of Orange County; ;Brea=DXF000592",
            label: "Fertility Care of Orange County; ;Brea=DXF000592",
          },
          {
            id: "FiCare Med; ;Poway=DXF001418",
            label: "FiCare Med; ;Poway=DXF001418",
          },
          {
            id: "Filomena S Pascual MD Inc; ;Rancho Cucamonga=DXF000815",
            label: "Filomena S Pascual MD Inc; ;Rancho Cucamonga=DXF000815",
          },
          {
            id: "FishmanVision; ;Palo Alto=DXF005064",
            label: "FishmanVision; ;Palo Alto=DXF005064",
          },
          {
            id: "Flagstone Healthcare Central LLC; ;San Juan Capistrano=DXF000602",
            label:
              "Flagstone Healthcare Central LLC; ;San Juan Capistrano=DXF000602",
          },
          {
            id: "Flagstone Healthcare Central LLC;Ensign San Dimas LLC dba Arbor Glen Care Center;Glendora=DXF000604",
            label:
              "Flagstone Healthcare Central LLC;Ensign San Dimas LLC dba Arbor Glen Care Center;Glendora=DXF000604",
          },
          {
            id: "Flagstone Healthcare Central LLC;Redbrook Healthcare Associates LLC dba Brookside Healthcare Center;Redlands=DXF000606",
            label:
              "Flagstone Healthcare Central LLC;Redbrook Healthcare Associates LLC dba Brookside Healthcare Center;Redlands=DXF000606",
          },
          {
            id: "Flagstone Healthcare Central LLC;Camarillo Community Care, Inc. dba Camarillo Healthcare Center;Camarillo=DXF000607",
            label:
              "Flagstone Healthcare Central LLC;Camarillo Community Care, Inc. dba Camarillo Healthcare Center;Camarillo=DXF000607",
          },
          {
            id: "Flagstone Healthcare Central LLC;Powers Park Healthcare, Inc. dba Channel Islands Post Acute;Santa Barbara=DXF000608",
            label:
              "Flagstone Healthcare Central LLC;Powers Park Healthcare, Inc. dba Channel Islands Post Acute;Santa Barbara=DXF000608",
          },
          {
            id: "Flagstone Healthcare Central LLC;Claremont Foothills Health Associates LLC dba Claremont Care Center;Pomona=DXF000609",
            label:
              "Flagstone Healthcare Central LLC;Claremont Foothills Health Associates LLC dba Claremont Care Center;Pomona=DXF000609",
          },
          {
            id: "Flagstone Healthcare Central LLC;C Street Health Associates LLC dba Glenwood Care Center;Oxnard=DXF000774",
            label:
              "Flagstone Healthcare Central LLC;C Street Health Associates LLC dba Glenwood Care Center;Oxnard=DXF000774",
          },
          {
            id: "Flagstone Healthcare Central LLC;Empirecare Health Associates, LLC dba The Grove Care and Wellness;Riverside=DXF000775",
            label:
              "Flagstone Healthcare Central LLC;Empirecare Health Associates, LLC dba The Grove Care and Wellness;Riverside=DXF000775",
          },
          {
            id: "Flagstone Healthcare Central LLC;Ramon Healthcare Associates LLC dba Mission Care Center;Rosemead=DXF000776",
            label:
              "Flagstone Healthcare Central LLC;Ramon Healthcare Associates LLC dba Mission Care Center;Rosemead=DXF000776",
          },
          {
            id: "Flagstone Healthcare Central LLC;Ensign Panorama LLC dba Panorama Gardens Nursing and Rehabilitation Center;Panorama City=DXF000778",
            label:
              "Flagstone Healthcare Central LLC;Ensign Panorama LLC dba Panorama Gardens Nursing and Rehabilitation Center;Panorama City=DXF000778",
          },
          {
            id: "Flagstone Healthcare Central LLC;Ensign Palm I LLC dba Premier Care Center for Palm Springs;Palm Springs=DXF000779",
            label:
              "Flagstone Healthcare Central LLC;Ensign Palm I LLC dba Premier Care Center for Palm Springs;Palm Springs=DXF000779",
          },
          {
            id: "Flagstone Healthcare Central LLC;Upland Community Care, Inc. dba Upland Rehabilitation and Care Center;Upland=DXF000780",
            label:
              "Flagstone Healthcare Central LLC;Upland Community Care, Inc. dba Upland Rehabilitation and Care Center;Upland=DXF000780",
          },
          {
            id: "Flagstone Healthcare Central LLC;Victoria Ventura Healthcare LLC dba Victoria Care Center;ventura=DXF000781",
            label:
              "Flagstone Healthcare Central LLC;Victoria Ventura Healthcare LLC dba Victoria Care Center;ventura=DXF000781",
          },
          {
            id: "Flagstone Healthcare Central LLC;Santa Maria Healthcare, Inc. dba Villa Maria Post Acute;Santa Maria=DXF000782",
            label:
              "Flagstone Healthcare Central LLC;Santa Maria Healthcare, Inc. dba Villa Maria Post Acute;Santa Maria=DXF000782",
          },
          {
            id: "Flagstone Healthcare North LLC; ;San Juan Capistrano=DXF002811",
            label:
              "Flagstone Healthcare North LLC; ;San Juan Capistrano=DXF002811",
          },
          {
            id: "Flagstone Healthcare North LLC;Ensign Sonoma LLC;Sonoma=DXF002840",
            label:
              "Flagstone Healthcare North LLC;Ensign Sonoma LLC;Sonoma=DXF002840",
          },
          {
            id: "Flagstone Healthcare North LLC;Ensign Cloverdale LLC;Cloverdale=DXF002841",
            label:
              "Flagstone Healthcare North LLC;Ensign Cloverdale LLC;Cloverdale=DXF002841",
          },
          {
            id: "Flagstone Healthcare North LLC;Ensign Willits LLC;Willits=DXF002842",
            label:
              "Flagstone Healthcare North LLC;Ensign Willits LLC;Willits=DXF002842",
          },
          {
            id: "Flagstone Healthcare North LLC;Ensign Montgomery LLC;Santa Rosa=DXF002843",
            label:
              "Flagstone Healthcare North LLC;Ensign Montgomery LLC;Santa Rosa=DXF002843",
          },
          {
            id: "Flagstone Healthcare North LLC;Ensign Santa Rosa LLC;Santa Rosa=DXF002844",
            label:
              "Flagstone Healthcare North LLC;Ensign Santa Rosa LLC;Santa Rosa=DXF002844",
          },
          {
            id: "Flagstone Healthcare North LLC;Ensign Pleasanton LLC;Ukiah=DXF002845",
            label:
              "Flagstone Healthcare North LLC;Ensign Pleasanton LLC;Ukiah=DXF002845",
          },
          {
            id: "Flagstone Healthcare North LLC;Bouverie Healthcare Services, Inc.;Sonoma=DXF002846",
            label:
              "Flagstone Healthcare North LLC;Bouverie Healthcare Services, Inc.;Sonoma=DXF002846",
          },
          {
            id: "Flagstone Healthcare South LLC; ;San Juan Capistrano=DXF002814",
            label:
              "Flagstone Healthcare South LLC; ;San Juan Capistrano=DXF002814",
          },
          {
            id: "Flagstone Healthcare South LLC;City Heights Health Associates LLC;San Diego=DXF002847",
            label:
              "Flagstone Healthcare South LLC;City Heights Health Associates LLC;San Diego=DXF002847",
          },
          {
            id: "Flagstone Healthcare South LLC;Atlantic Memorial Healthcare Associates, Inc.;Long Beach=DXF002848",
            label:
              "Flagstone Healthcare South LLC;Atlantic Memorial Healthcare Associates, Inc.;Long Beach=DXF002848",
          },
          {
            id: "Flagstone Healthcare South LLC;Downey Community Care LLC;Downey=DXF002849",
            label:
              "Flagstone Healthcare South LLC;Downey Community Care LLC;Downey=DXF002849",
          },
          {
            id: "Flagstone Healthcare South LLC;Pine Forest Healthcare, Inc.;HAWTHORNE=DXF002850",
            label:
              "Flagstone Healthcare South LLC;Pine Forest Healthcare, Inc.;HAWTHORNE=DXF002850",
          },
          {
            id: "Flagstone Healthcare South LLC;Bernardo Heights Healthcare, Inc.;San Diego=DXF002851",
            label:
              "Flagstone Healthcare South LLC;Bernardo Heights Healthcare, Inc.;San Diego=DXF002851",
          },
          {
            id: "Flagstone Healthcare South LLC;Nautilus Healthcare, Inc.;La Jolla=DXF002852",
            label:
              "Flagstone Healthcare South LLC;Nautilus Healthcare, Inc.;La Jolla=DXF002852",
          },
          {
            id: "Flagstone Healthcare South LLC;Rio Hondo Healthcare, Inc.;Downey=DXF002853",
            label:
              "Flagstone Healthcare South LLC;Rio Hondo Healthcare, Inc.;Downey=DXF002853",
          },
          {
            id: "Flagstone Healthcare South LLC;Devonshire Healthcare, Inc.;San Diego=DXF002854",
            label:
              "Flagstone Healthcare South LLC;Devonshire Healthcare, Inc.;San Diego=DXF002854",
          },
          {
            id: "Flagstone Healthcare South LLC;Mission Trails Healthcare, Inc.;La Mesa=DXF002855",
            label:
              "Flagstone Healthcare South LLC;Mission Trails Healthcare, Inc.;La Mesa=DXF002855",
          },
          {
            id: "Flagstone Healthcare South LLC;Tustin Hills Healthcare, Inc.;Santa Ana=DXF002856",
            label:
              "Flagstone Healthcare South LLC;Tustin Hills Healthcare, Inc.;Santa Ana=DXF002856",
          },
          {
            id: "Flagstone Healthcare South LLC;Lemon Grove Health Associates LLC;Lemon Grove=DXF002857",
            label:
              "Flagstone Healthcare South LLC;Lemon Grove Health Associates LLC;Lemon Grove=DXF002857",
          },
          {
            id: "Flagstone Healthcare South LLC;Jefferson Healthcare, LLC;El Cajon=DXF002858",
            label:
              "Flagstone Healthcare South LLC;Jefferson Healthcare, LLC;El Cajon=DXF002858",
          },
          {
            id: "Flagstone Healthcare South LLC;La Veta Healthcare, Inc.;Orange=DXF002859",
            label:
              "Flagstone Healthcare South LLC;La Veta Healthcare, Inc.;Orange=DXF002859",
          },
          {
            id: "Flagstone Healthcare South LLC;Portside Healthcare, Inc.;San Diego=DXF002860",
            label:
              "Flagstone Healthcare South LLC;Portside Healthcare, Inc.;San Diego=DXF002860",
          },
          {
            id: "Flagstone Healthcare South LLC;Ensign Whittier West LLC;Whittier=DXF002861",
            label:
              "Flagstone Healthcare South LLC;Ensign Whittier West LLC;Whittier=DXF002861",
          },
          {
            id: "Flagstone Healthcare South LLC;Gate Three Healthcare LLC;Laguna Hills=DXF002862",
            label:
              "Flagstone Healthcare South LLC;Gate Three Healthcare LLC;Laguna Hills=DXF002862",
          },
          {
            id: "Flagstone Healthcare South LLC;West Escondido Healthcare LLC;Escondido=DXF002863",
            label:
              "Flagstone Healthcare South LLC;West Escondido Healthcare LLC;Escondido=DXF002863",
          },
          {
            id: "Flagstone Healthcare South LLC;Parkside Healthcare, Inc.;El Cajon=DXF002864",
            label:
              "Flagstone Healthcare South LLC;Parkside Healthcare, Inc.;El Cajon=DXF002864",
          },
          {
            id: "Flagstone Healthcare South LLC;Bell Villa Care Associates LLC;Bellflower=DXF002865",
            label:
              "Flagstone Healthcare South LLC;Bell Villa Care Associates LLC;Bellflower=DXF002865",
          },
          {
            id: "Flagstone Healthcare South LLC;HB Healthcare Associates LLC;Huntington Beach=DXF002866",
            label:
              "Flagstone Healthcare South LLC;HB Healthcare Associates LLC;Huntington Beach=DXF002866",
          },
          {
            id: "Flagstone Healthcare South LLC;Rose Park Healthcare Associates, Inc.;Long Beach=DXF002867",
            label:
              "Flagstone Healthcare South LLC;Rose Park Healthcare Associates, Inc.;Long Beach=DXF002867",
          },
          {
            id: "Flagstone Healthcare South LLC;Claydelle Healthcare LLC;El Cajon=DXF002868",
            label:
              "Flagstone Healthcare South LLC;Claydelle Healthcare LLC;El Cajon=DXF002868",
          },
          {
            id: "Flagstone Healthcare South LLC;Bayside Healthcare, Inc.;Chula Vista=DXF002869",
            label:
              "Flagstone Healthcare South LLC;Bayside Healthcare, Inc.;Chula Vista=DXF002869",
          },
          {
            id: "Flagstone Healthcare South LLC;Southland Management LLC;Norwalk=DXF002870",
            label:
              "Flagstone Healthcare South LLC;Southland Management LLC;Norwalk=DXF002870",
          },
          {
            id: "Flagstone Healthcare South LLC;La Jolla Skilled, Inc.;San Diego=DXF002871",
            label:
              "Flagstone Healthcare South LLC;La Jolla Skilled, Inc.;San Diego=DXF002871",
          },
          {
            id: "Flagstone Healthcare South LLC;Santa Catalina Healthcare, Inc.;Fullerton=DXF002872",
            label:
              "Flagstone Healthcare South LLC;Santa Catalina Healthcare, Inc.;Fullerton=DXF002872",
          },
          {
            id: "Flagstone Healthcare South LLC;Fullerton Healthcare, Inc.;Fullerton=DXF002873",
            label:
              "Flagstone Healthcare South LLC;Fullerton Healthcare, Inc.;Fullerton=DXF002873",
          },
          {
            id: "Flagstone Healthcare South LLC;Costa Victoria Healthcare LLC;Costa Mesa=DXF002874",
            label:
              "Flagstone Healthcare South LLC;Costa Victoria Healthcare LLC;Costa Mesa=DXF002874",
          },
          {
            id: "Flagstone Healthcare South LLC;Anza Healthcare, Inc.;El Cajon=DXF002875",
            label:
              "Flagstone Healthcare South LLC;Anza Healthcare, Inc.;El Cajon=DXF002875",
          },
          {
            id: "Flagstone Healthcare South LLC;Vista Woods Health Associates LLC;vista=DXF002876",
            label:
              "Flagstone Healthcare South LLC;Vista Woods Health Associates LLC;vista=DXF002876",
          },
          {
            id: "Flagstone Healthcare South LLC;Ensign Whittier East LLC;Whittier=DXF002877",
            label:
              "Flagstone Healthcare South LLC;Ensign Whittier East LLC;Whittier=DXF002877",
          },
          {
            id: "Florence Western Medical Clinic; ;Los Angeles=DXF005724",
            label: "Florence Western Medical Clinic; ;Los Angeles=DXF005724",
          },
          {
            id: "FNA Medical Group; ;Alhambra=DXF002346",
            label: "FNA Medical Group; ;Alhambra=DXF002346",
          },
          {
            id: "Fontana Physicians Associates a Medical Corporation; ;FONTANA=DXF002197",
            label:
              "Fontana Physicians Associates a Medical Corporation; ;FONTANA=DXF002197",
          },
          {
            id: "Fontana Physicians Associates a Medical Corporation;Fontana Clinica Medica Familiar;FONTANA=DXF003014",
            label:
              "Fontana Physicians Associates a Medical Corporation;Fontana Clinica Medica Familiar;FONTANA=DXF003014",
          },
          {
            id: "Food For Thought; ;Forestville=DXF004564",
            label: "Food For Thought; ;Forestville=DXF004564",
          },
          {
            id: "FOOTHILL COMMUNITY MEDICAL CORP; ;AZUSA=DXF004669",
            label: "FOOTHILL COMMUNITY MEDICAL CORP; ;AZUSA=DXF004669",
          },
          {
            id: "FOOTHILL COMMUNITY MEDICAL CORP;FOOTHILL COMMUNITY MEDICAL CORP;La Puente=DXF004671",
            label:
              "FOOTHILL COMMUNITY MEDICAL CORP;FOOTHILL COMMUNITY MEDICAL CORP;La Puente=DXF004671",
          },
          {
            id: "Foothill Family; ;Pasadena=DXF002715",
            label: "Foothill Family; ;Pasadena=DXF002715",
          },
          {
            id: "Foothill Pediatric & Adolescent Clinic; ;San Dimas=DXF004126",
            label:
              "Foothill Pediatric & Adolescent Clinic; ;San Dimas=DXF004126",
          },
          {
            id: "Fortuna Family Medicine Inc.; ;Fortuna=DXF004594",
            label: "Fortuna Family Medicine Inc.; ;Fortuna=DXF004594",
          },
          {
            id: "Franciscan Workers of Junipero Serra; ;Salinas=DXF005628",
            label: "Franciscan Workers of Junipero Serra; ;Salinas=DXF005628",
          },
          {
            id: "Frank Sebat, MD, Inc; ;Redding=DXF001694",
            label: "Frank Sebat, MD, Inc; ;Redding=DXF001694",
          },
          {
            id: "Fred Brown Recovery Services; ;San Pedro=DXF001235",
            label: "Fred Brown Recovery Services; ;San Pedro=DXF001235",
          },
          {
            id: "FREED Center for Independent Living; ;Grass Valley=DXF004570",
            label:
              "FREED Center for Independent Living; ;Grass Valley=DXF004570",
          },
          {
            id: "FREED Center for Independent Living;FREED Center for Independent Living;Yuba City=DXF004571",
            label:
              "FREED Center for Independent Living;FREED Center for Independent Living;Yuba City=DXF004571",
          },
          {
            id: "Freedom Properties-Hemet LLC; ;Hemet=DXF004656",
            label: "Freedom Properties-Hemet LLC; ;Hemet=DXF004656",
          },
          {
            id: "Fremont Nephrology Prof Corp; ;Fremont=DXF000611",
            label: "Fremont Nephrology Prof Corp; ;Fremont=DXF000611",
          },
          {
            id: "Fresno American Indian Health Project; ;Fresno=DXF002515",
            label: "Fresno American Indian Health Project; ;Fresno=DXF002515",
          },
          {
            id: "Fresno Community Hospital and Medical Center dba Community Medical Centers; ;Fresno=DXF003693",
            label:
              "Fresno Community Hospital and Medical Center dba Community Medical Centers; ;Fresno=DXF003693",
          },
          {
            id: "Fresno Community Hospital and Medical Center dba Community Medical Centers;Clovis Community Medical Center;Clovis=DXF003723",
            label:
              "Fresno Community Hospital and Medical Center dba Community Medical Centers;Clovis Community Medical Center;Clovis=DXF003723",
          },
          {
            id: "Fresno Community Hospital and Medical Center dba Community Medical Centers;Fresno Heart and Surgical Hospital;Fresno=DXF003724",
            label:
              "Fresno Community Hospital and Medical Center dba Community Medical Centers;Fresno Heart and Surgical Hospital;Fresno=DXF003724",
          },
          {
            id: "Fresno Community Hospital and Medical Center dba Community Medical Centers;Community Behavioral Health Center;Fresno=DXF003725",
            label:
              "Fresno Community Hospital and Medical Center dba Community Medical Centers;Community Behavioral Health Center;Fresno=DXF003725",
          },
          {
            id: "Fresno Community Hospital and Medical Center dba Community Medical Centers;Community Subacute And Transitional Care Center;Fresno=DXF003726",
            label:
              "Fresno Community Hospital and Medical Center dba Community Medical Centers;Community Subacute And Transitional Care Center;Fresno=DXF003726",
          },
          {
            id: "Fresno-kings-Madera Regional Health Authority dba CalViva Health; ;Fresno=DXF001771",
            label:
              "Fresno-kings-Madera Regional Health Authority dba CalViva Health; ;Fresno=DXF001771",
          },
          {
            id: "Fresno-Madera Area Agency on Aging; ;Fresno=DXF004046",
            label: "Fresno-Madera Area Agency on Aging; ;Fresno=DXF004046",
          },
          {
            id: "Friends of Family Health Center; ;La habra=DXF003549",
            label: "Friends of Family Health Center; ;La habra=DXF003549",
          },
          {
            id: "Front Porch Communities and Services; ;Glendale=DXF004157",
            label: "Front Porch Communities and Services; ;Glendale=DXF004157",
          },
          {
            id: "Front Porch Communities and Services;Claremont Manor Care Center;Claremont=DXF004158",
            label:
              "Front Porch Communities and Services;Claremont Manor Care Center;Claremont=DXF004158",
          },
          {
            id: "Front Porch Communities and Services;Carlsbad By The Sea;Carlsbad=DXF004159",
            label:
              "Front Porch Communities and Services;Carlsbad By The Sea;Carlsbad=DXF004159",
          },
          {
            id: "Front Porch Communities and Services;Canterbury Woods;Pacific Grove=DXF004161",
            label:
              "Front Porch Communities and Services;Canterbury Woods;Pacific Grove=DXF004161",
          },
          {
            id: "Front Porch Communities and Services;San Francisco Towers;San Francisco=DXF004162",
            label:
              "Front Porch Communities and Services;San Francisco Towers;San Francisco=DXF004162",
          },
          {
            id: "Front Porch Communities and Services;Spring Lake Village;Santa Rosa=DXF004163",
            label:
              "Front Porch Communities and Services;Spring Lake Village;Santa Rosa=DXF004163",
          },
          {
            id: "Front Porch Communities and Services;St. Paul's Towers;Oakland=DXF004164",
            label:
              "Front Porch Communities and Services;St. Paul's Towers;Oakland=DXF004164",
          },
          {
            id: "Front Porch Communities and Services;Sunny View Manor;CUPERTINO=DXF004165",
            label:
              "Front Porch Communities and Services;Sunny View Manor;CUPERTINO=DXF004165",
          },
          {
            id: "Front Porch Communities and Services;Villa Gardens Health Care Unit;Pasadena=DXF004166",
            label:
              "Front Porch Communities and Services;Villa Gardens Health Care Unit;Pasadena=DXF004166",
          },
          {
            id: "Front Porch Communities and Services;Webster House;Palo Alto=DXF004167",
            label:
              "Front Porch Communities and Services;Webster House;Palo Alto=DXF004167",
          },
          {
            id: "Fulgent Therapeutics LLC; ;El Monte=DXF005266",
            label: "Fulgent Therapeutics LLC; ;El Monte=DXF005266",
          },
          {
            id: "Full Circle Health Network; ;Sacramento=DXF002787",
            label: "Full Circle Health Network; ;Sacramento=DXF002787",
          },
          {
            id: "Fullerton Healthcare & Wellness Centre; ;Fullerton=DXF002178",
            label:
              "Fullerton Healthcare & Wellness Centre; ;Fullerton=DXF002178",
          },
          {
            id: "Fullerton Healthcare and Wellness Centre dba The Pavilion at Sunny Hills; ;Fullerton=DXF003852",
            label:
              "Fullerton Healthcare and Wellness Centre dba The Pavilion at Sunny Hills; ;Fullerton=DXF003852",
          },
          {
            id: "Fulton Gardens Post Acute; ;Stockton=DXF001544",
            label: "Fulton Gardens Post Acute; ;Stockton=DXF001544",
          },
          {
            id: "Galleria Medical Clinic Inc; ;National City=DXF003782",
            label: "Galleria Medical Clinic Inc; ;National City=DXF003782",
          },
          {
            id: "Garden Grove Convalescent Hospital, Inc; ;Garden Grove=DXF002999",
            label:
              "Garden Grove Convalescent Hospital, Inc; ;Garden Grove=DXF002999",
          },
          {
            id: "Garden Pediatrics; ;Redlands=DXF001057",
            label: "Garden Pediatrics; ;Redlands=DXF001057",
          },
          {
            id: "Gardena Convalescent Center; ;Gardena=DXF003019",
            label: "Gardena Convalescent Center; ;Gardena=DXF003019",
          },
          {
            id: "Gardens of El Monte; ;El Monte=DXF002980",
            label: "Gardens of El Monte; ;El Monte=DXF002980",
          },
          {
            id: "Gardner Health Services; ;Alviso=DXF003796",
            label: "Gardner Health Services; ;Alviso=DXF003796",
          },
          {
            id: "Garfield Health Center; ;Monterey Park=DXF001592",
            label: "Garfield Health Center; ;Monterey Park=DXF001592",
          },
          {
            id: "GARY A COHEN MD; ;San Diego=DXF001400",
            label: "GARY A COHEN MD; ;San Diego=DXF001400",
          },
          {
            id: "Gary A Gramm; ;Loomis=DXF000523",
            label: "Gary A Gramm; ;Loomis=DXF000523",
          },
          {
            id: "Gary W. Swenson, MD; ;Rancho Mirage=DXF002411",
            label: "Gary W. Swenson, MD; ;Rancho Mirage=DXF002411",
          },
          {
            id: "Gateway Medical Services dba Anderson Walk-In Medical Clinic; ;Anderson=DXF004334",
            label:
              "Gateway Medical Services dba Anderson Walk-In Medical Clinic; ;Anderson=DXF004334",
          },
          {
            id: "Gautami Agastya MD Inc; ;Tracy=DXF004435",
            label: "Gautami Agastya MD Inc; ;Tracy=DXF004435",
          },
          {
            id: "Gelen R Del Rosario Md INC; ;Carlsbad=DXF001942",
            label: "Gelen R Del Rosario Md INC; ;Carlsbad=DXF001942",
          },
          {
            id: "GEM Initiative; ;Long Beach=DXF003684",
            label: "GEM Initiative; ;Long Beach=DXF003684",
          },
          {
            id: "GENEDX LLC; ;Stamford=DXF004196",
            label: "GENEDX LLC; ;Stamford=DXF004196",
          },
          {
            id: "Generations Healthcare; ;Santa Ana=DXF003848",
            label: "Generations Healthcare; ;Santa Ana=DXF003848",
          },
          {
            id: "Generations Healthcare;Vista Manor Nursing & Rehabilitation Center;San Jose=DXF003854",
            label:
              "Generations Healthcare;Vista Manor Nursing & Rehabilitation Center;San Jose=DXF003854",
          },
          {
            id: "Generations Healthcare;Lakeside Special Care Center;Lakeside=DXF003855",
            label:
              "Generations Healthcare;Lakeside Special Care Center;Lakeside=DXF003855",
          },
          {
            id: "Generations Healthcare;Friendship Manor Nursing & Rehabilitation Center;National City=DXF003856",
            label:
              "Generations Healthcare;Friendship Manor Nursing & Rehabilitation Center;National City=DXF003856",
          },
          {
            id: "Generations Healthcare;Castle Manor Nursing & Rehabilitation Center;National City=DXF003857",
            label:
              "Generations Healthcare;Castle Manor Nursing & Rehabilitation Center;National City=DXF003857",
          },
          {
            id: "Generations Healthcare;Stanford Court Skilled Nursing & Rehab Center;Santee=DXF003858",
            label:
              "Generations Healthcare;Stanford Court Skilled Nursing & Rehab Center;Santee=DXF003858",
          },
          {
            id: "Generations Healthcare;Arbor Hills Nursing Center;La Mesa=DXF003859",
            label:
              "Generations Healthcare;Arbor Hills Nursing Center;La Mesa=DXF003859",
          },
          {
            id: "Generations Healthcare;Plum Tree Care Center;San Jose=DXF003860",
            label:
              "Generations Healthcare;Plum Tree Care Center;San Jose=DXF003860",
          },
          {
            id: "Generations Healthcare;Cedar Crest Nursing and Rehabilitation Center;Sunnyvale=DXF003861",
            label:
              "Generations Healthcare;Cedar Crest Nursing and Rehabilitation Center;Sunnyvale=DXF003861",
          },
          {
            id: "Generations Healthcare;Pleasanton Nursing and Rehabilitation Center;Pleasanton=DXF003862",
            label:
              "Generations Healthcare;Pleasanton Nursing and Rehabilitation Center;Pleasanton=DXF003862",
          },
          {
            id: "Generations Healthcare;English Oaks Convalescent & Rehabilitation Hospital;Modesto=DXF003863",
            label:
              "Generations Healthcare;English Oaks Convalescent & Rehabilitation Hospital;Modesto=DXF003863",
          },
          {
            id: "Generations Healthcare;Newport Nursing and Rehabilitation Center;Newport Beach=DXF003864",
            label:
              "Generations Healthcare;Newport Nursing and Rehabilitation Center;Newport Beach=DXF003864",
          },
          {
            id: "Generations Healthcare;Canyon Oaks Nursing and Rehabilitation Center;Canoga Park=DXF003865",
            label:
              "Generations Healthcare;Canyon Oaks Nursing and Rehabilitation Center;Canoga Park=DXF003865",
          },
          {
            id: "Generations Healthcare;Heritage Park Nursing Center;Upland=DXF003866",
            label:
              "Generations Healthcare;Heritage Park Nursing Center;Upland=DXF003866",
          },
          {
            id: "Generations Healthcare;Heritage Court Assisted Living;Upland=DXF003867",
            label:
              "Generations Healthcare;Heritage Court Assisted Living;Upland=DXF003867",
          },
          {
            id: "Generations Healthcare;Lompoc Skilled Nursing & Rehabilitation Center;Lompoc=DXF003868",
            label:
              "Generations Healthcare;Lompoc Skilled Nursing & Rehabilitation Center;Lompoc=DXF003868",
          },
          {
            id: "Generations Healthcare;Kearny Mesa Convalescent and Nursing Home;San Diego=DXF003869",
            label:
              "Generations Healthcare;Kearny Mesa Convalescent and Nursing Home;San Diego=DXF003869",
          },
          {
            id: "Generations Healthcare;Gramercy Court;Sacramento=DXF003870",
            label: "Generations Healthcare;Gramercy Court;Sacramento=DXF003870",
          },
          {
            id: "Generations Healthcare;Gramercy Court;Sacramento=DXF003871",
            label: "Generations Healthcare;Gramercy Court;Sacramento=DXF003871",
          },
          {
            id: "Generations Healthcare;Siena Skilled Nursing & Rehabilitation Center;Auburn=DXF003872",
            label:
              "Generations Healthcare;Siena Skilled Nursing & Rehabilitation Center;Auburn=DXF003872",
          },
          {
            id: "Generations Healthcare;Bayberry Skilled Nursing & Healthcare Center;Concord=DXF003873",
            label:
              "Generations Healthcare;Bayberry Skilled Nursing & Healthcare Center;Concord=DXF003873",
          },
          {
            id: "Generations Healthcare;Smith Ranch Skilled Nursing & Rehabilitation Center;San Rafael=DXF003874",
            label:
              "Generations Healthcare;Smith Ranch Skilled Nursing & Rehabilitation Center;San Rafael=DXF003874",
          },
          {
            id: "Generations Healthcare;Walnut Creek Skilled Nursing & Rehabilitation Center;Walnut Creek=DXF003875",
            label:
              "Generations Healthcare;Walnut Creek Skilled Nursing & Rehabilitation Center;Walnut Creek=DXF003875",
          },
          {
            id: "Generations Healthcare;Lawton Skilled Nursing & Rehabilitation Center;San Francisco=DXF003876",
            label:
              "Generations Healthcare;Lawton Skilled Nursing & Rehabilitation Center;San Francisco=DXF003876",
          },
          {
            id: "Generations Healthcare;Bradley Court;El Cajon=DXF003877",
            label: "Generations Healthcare;Bradley Court;El Cajon=DXF003877",
          },
          {
            id: "Generations Healthcare;Temecula Healthcare Center;Temecula=DXF003878",
            label:
              "Generations Healthcare;Temecula Healthcare Center;Temecula=DXF003878",
          },
          {
            id: "Generations Healthcare;Temecula Memory Care;Temecula=DXF003879",
            label:
              "Generations Healthcare;Temecula Memory Care;Temecula=DXF003879",
          },
          {
            id: "Generations Healthcare;Anberry Nursing and Rehabilitation Center;Atwater=DXF003880",
            label:
              "Generations Healthcare;Anberry Nursing and Rehabilitation Center;Atwater=DXF003880",
          },
          {
            id: "Generations Healthcare;Horizon Health & Subacute Center;Fresno=DXF003881",
            label:
              "Generations Healthcare;Horizon Health & Subacute Center;Fresno=DXF003881",
          },
          {
            id: "Genesee Medical Group; ;San Diego=DXF001608",
            label: "Genesee Medical Group; ;San Diego=DXF001608",
          },
          {
            id: "Genesee Medical Group; ;San Diego=DXF001609",
            label: "Genesee Medical Group; ;San Diego=DXF001609",
          },
          {
            id: "Genesee Medical Group; ;San Diego=DXF001610",
            label: "Genesee Medical Group; ;San Diego=DXF001610",
          },
          {
            id: "Genesee Medical Group; ;San Diego=DXF001612",
            label: "Genesee Medical Group; ;San Diego=DXF001612",
          },
          {
            id: "GenesisCare USA of California, A Medical Corporation; ;Fort Myers=DXF000250",
            label:
              "GenesisCare USA of California, A Medical Corporation; ;Fort Myers=DXF000250",
          },
          {
            id: "George Cyrus Allen Jr PHD mD; ;Los Angeles=DXF001749",
            label: "George Cyrus Allen Jr PHD mD; ;Los Angeles=DXF001749",
          },
          {
            id: "George Keith Llewellyn MD Inc; ;Santa Barbara=DXF000265",
            label: "George Keith Llewellyn MD Inc; ;Santa Barbara=DXF000265",
          },
          {
            id: "GEORGE M. JAYATILAKA, M.D. INC.; ;Long Beach=DXF004529",
            label: "GEORGE M. JAYATILAKA, M.D. INC.; ;Long Beach=DXF004529",
          },
          {
            id: "GEORGE N CHIDI MD PA; ;Corona=DXF000803",
            label: "GEORGE N CHIDI MD PA; ;Corona=DXF000803",
          },
          {
            id: "George Yu; ;Camarillo=DXF000222",
            label: "George Yu; ;Camarillo=DXF000222",
          },
          {
            id: "Get Aging; ;Covina=DXF003838",
            label: "Get Aging; ;Covina=DXF003838",
          },
          {
            id: "Ghods Inc; ;Los Angeles=DXF003679",
            label: "Ghods Inc; ;Los Angeles=DXF003679",
          },
          {
            id: "Gil Family Medicine; ;National City=DXF001475",
            label: "Gil Family Medicine; ;National City=DXF001475",
          },
          {
            id: "Gill & Bisla Internal Med Associates; ;Roseville=DXF004226",
            label: "Gill & Bisla Internal Med Associates; ;Roseville=DXF004226",
          },
          {
            id: "Gilroy Endoscopy Center, LLC; ;GILROY=DXF003335",
            label: "Gilroy Endoscopy Center, LLC; ;GILROY=DXF003335",
          },
          {
            id: "Gladstone Subacute Care and Rehabilitation Center; ;Glendora=DXF003645",
            label:
              "Gladstone Subacute Care and Rehabilitation Center; ;Glendora=DXF003645",
          },
          {
            id: "Glenbrook Health Center; ;Carlsbad=DXF003739",
            label: "Glenbrook Health Center; ;Carlsbad=DXF003739",
          },
          {
            id: "Glendale Pediatrics; ;Glendale=DXF004216",
            label: "Glendale Pediatrics; ;Glendale=DXF004216",
          },
          {
            id: "Glenn County Behavioral Health; ;Willows=DXF003504",
            label: "Glenn County Behavioral Health; ;Willows=DXF003504",
          },
          {
            id: "Glenn County Health and Human Services Agency; ;Willows=DXF002247",
            label:
              "Glenn County Health and Human Services Agency; ;Willows=DXF002247",
          },
          {
            id: "Global Cancer Research Institute Inc; ;Saratoga=DXF003622",
            label: "Global Cancer Research Institute Inc; ;Saratoga=DXF003622",
          },
          {
            id: "Global Care Medical Group IPA; ;Inglewood=DXF003395",
            label: "Global Care Medical Group IPA; ;Inglewood=DXF003395",
          },
          {
            id: "Global Transitional Care; ;Irvine=DXF001241",
            label: "Global Transitional Care; ;Irvine=DXF001241",
          },
          {
            id: "Gloria Wu MD a Professional Medical Corporation; ;San Jose=DXF003304",
            label:
              "Gloria Wu MD a Professional Medical Corporation; ;San Jose=DXF003304",
          },
          {
            id: "Gold Coast Health Plan; ;Camarillo=DXF000290",
            label: "Gold Coast Health Plan; ;Camarillo=DXF000290",
          },
          {
            id: "GOLDEN CARE PEDIATRICS; ;Orange=DXF002168",
            label: "GOLDEN CARE PEDIATRICS; ;Orange=DXF002168",
          },
          {
            id: "Golden Gate Urology, Inc.; ;San Francisco=DXF004572",
            label: "Golden Gate Urology, Inc.; ;San Francisco=DXF004572",
          },
          {
            id: "Golden State; ;Sherman Oaks=DXF002838",
            label: "Golden State; ;Sherman Oaks=DXF002838",
          },
          {
            id: "Golden State;SANTA ANITA CONVALESCENT HOSPITAL;Sherman Oaks=DXF002890",
            label:
              "Golden State;SANTA ANITA CONVALESCENT HOSPITAL;Sherman Oaks=DXF002890",
          },
          {
            id: "Golden State;1100 SOUTH ALVARADO STREET LLC;Sherman Oaks=DXF002891",
            label:
              "Golden State;1100 SOUTH ALVARADO STREET LLC;Sherman Oaks=DXF002891",
          },
          {
            id: "Golden State;RG LEGACY I, LLC;Sherman Oaks=DXF002892",
            label: "Golden State;RG LEGACY I, LLC;Sherman Oaks=DXF002892",
          },
          {
            id: "Golden State;TWO PALMS SKILLED CARE LLC;Sherman Oaks=DXF002893",
            label:
              "Golden State;TWO PALMS SKILLED CARE LLC;Sherman Oaks=DXF002893",
          },
          {
            id: "Golden State;SYLMAR HEALTH & REHABILITATION CENTER IN;Sherman Oaks=DXF002894",
            label:
              "Golden State;SYLMAR HEALTH & REHABILITATION CENTER IN;Sherman Oaks=DXF002894",
          },
          {
            id: "Golden State;SAN FERNANDO SUBACUTE RE HABILITATION CENTER;Sherman Oaks=DXF002895",
            label:
              "Golden State;SAN FERNANDO SUBACUTE RE HABILITATION CENTER;Sherman Oaks=DXF002895",
          },
          {
            id: "Golden State;GOLDEN HAVEN CARE CENTER LLC;Sherman Oaks=DXF002896",
            label:
              "Golden State;GOLDEN HAVEN CARE CENTER LLC;Sherman Oaks=DXF002896",
          },
          {
            id: "Golden State Adult Day Health Care Inc; ;San Francisco=DXF005503",
            label:
              "Golden State Adult Day Health Care Inc; ;San Francisco=DXF005503",
          },
          {
            id: "GOLDEN STATE CARE; ;MERCED=DXF005738",
            label: "GOLDEN STATE CARE; ;MERCED=DXF005738",
          },
          {
            id: "Golden State Ortho and Spine; ;Walnut Creek=DXF003629",
            label: "Golden State Ortho and Spine; ;Walnut Creek=DXF003629",
          },
          {
            id: "Golden State Pediatrics; ;FONTANA=DXF003377",
            label: "Golden State Pediatrics; ;FONTANA=DXF003377",
          },
          {
            id: "Golden State Pediatrics;Victorville Pediatrics Inc;FONTANA=DXF003378",
            label:
              "Golden State Pediatrics;Victorville Pediatrics Inc;FONTANA=DXF003378",
          },
          {
            id: "Golden State Pediatrics;Victor Valley Family Clinic;FONTANA=DXF003379",
            label:
              "Golden State Pediatrics;Victor Valley Family Clinic;FONTANA=DXF003379",
          },
          {
            id: "Golden State Pediatrics;Fontana Pediatrics;FONTANA=DXF003380",
            label:
              "Golden State Pediatrics;Fontana Pediatrics;FONTANA=DXF003380",
          },
          {
            id: "Golden State Pediatrics;Fontana Family Clinic;FONTANA=DXF003381",
            label:
              "Golden State Pediatrics;Fontana Family Clinic;FONTANA=DXF003381",
          },
          {
            id: "Golden State Pediatrics;Golden State Pediatrics Upland;FONTANA=DXF003382",
            label:
              "Golden State Pediatrics;Golden State Pediatrics Upland;FONTANA=DXF003382",
          },
          {
            id: "Golden State Pediatrics;Redlands Pediatrics;FONTANA=DXF003383",
            label:
              "Golden State Pediatrics;Redlands Pediatrics;FONTANA=DXF003383",
          },
          {
            id: "Golden State Pediatrics;Apple Valley Pediatrics;FONTANA=DXF003384",
            label:
              "Golden State Pediatrics;Apple Valley Pediatrics;FONTANA=DXF003384",
          },
          {
            id: "Golden State Pediatrics;Hemet Family Clinic;FONTANA=DXF003385",
            label:
              "Golden State Pediatrics;Hemet Family Clinic;FONTANA=DXF003385",
          },
          {
            id: "Golden State Pediatrics;Hemet Pediatrics;FONTANA=DXF003386",
            label: "Golden State Pediatrics;Hemet Pediatrics;FONTANA=DXF003386",
          },
          {
            id: "Golden Valley Health Centers; ;MERCED=DXF005597",
            label: "Golden Valley Health Centers; ;MERCED=DXF005597",
          },
          {
            id: "Good Samaritan Hospital LP; ;Bakersfield=DXF003323",
            label: "Good Samaritan Hospital LP; ;Bakersfield=DXF003323",
          },
          {
            id: "Good Samaritan Hospital LP;Good Samaritan Health Care Center;Wasco=DXF003363",
            label:
              "Good Samaritan Hospital LP;Good Samaritan Health Care Center;Wasco=DXF003363",
          },
          {
            id: "Good Samaritan Medical Practice Association, Inc. a Medical Group; ;Orange=DXF000701",
            label:
              "Good Samaritan Medical Practice Association, Inc. a Medical Group; ;Orange=DXF000701",
          },
          {
            id: "Gopi Ayer, M.D.; ;Los Gatos=DXF004483",
            label: "Gopi Ayer, M.D.; ;Los Gatos=DXF004483",
          },
          {
            id: "Goradia Medical Corporation; ;San Francisco=DXF001784",
            label: "Goradia Medical Corporation; ;San Francisco=DXF001784",
          },
          {
            id: "Gospel Center Rescue Mission; ;Stockton=DXF003570",
            label: "Gospel Center Rescue Mission; ;Stockton=DXF003570",
          },
          {
            id: "GR8 Care Inc dba Coast Care Convalescent Center; ;Baldwin Park=DXF005585",
            label:
              "GR8 Care Inc dba Coast Care Convalescent Center; ;Baldwin Park=DXF005585",
          },
          {
            id: "Grace Home Inc; ;Livingston=DXF003924",
            label: "Grace Home Inc; ;Livingston=DXF003924",
          },
          {
            id: "Grace S Hwang MD Inc; ;Orange=DXF003658",
            label: "Grace S Hwang MD Inc; ;Orange=DXF003658",
          },
          {
            id: "GRAIL, LLC; ;Menlo PArk=DXF001709",
            label: "GRAIL, LLC; ;Menlo PArk=DXF001709",
          },
          {
            id: "Grand Valley Healthcare; ;Van Nuys=DXF005855",
            label: "Grand Valley Healthcare; ;Van Nuys=DXF005855",
          },
          {
            id: "Grant Cuesta Sub Acute & Rehab Center; ;Mountain View=DXF004937",
            label:
              "Grant Cuesta Sub Acute & Rehab Center; ;Mountain View=DXF004937",
          },
          {
            id: "Grass Valley Eye Care Optometric, Inc.; ;Grass Valley=DXF000792",
            label:
              "Grass Valley Eye Care Optometric, Inc.; ;Grass Valley=DXF000792",
          },
          {
            id: "Great Wireless, llc dba US Connect; ;Fort Worth=DXF003244",
            label: "Great Wireless, llc dba US Connect; ;Fort Worth=DXF003244",
          },
          {
            id: "Greater El Monte Community Hospital; ;South El Monte=DXF005410",
            label:
              "Greater El Monte Community Hospital; ;South El Monte=DXF005410",
          },
          {
            id: "Greater Fresno Health Organizaiton; ;Fresno=DXF002771",
            label: "Greater Fresno Health Organizaiton; ;Fresno=DXF002771",
          },
          {
            id: "Green Tree Home Care; ;Santee=DXF004277",
            label: "Green Tree Home Care; ;Santee=DXF004277",
          },
          {
            id: "Greenfield Care Center of Fairfield; ;Fairfield=DXF004658",
            label: "Greenfield Care Center of Fairfield; ;Fairfield=DXF004658",
          },
          {
            id: "Greenfield Care Center of Fillmore; ;Fillmore=DXF005335",
            label: "Greenfield Care Center of Fillmore; ;Fillmore=DXF005335",
          },
          {
            id: "Greenfield Care Center of Fullerton; ;Fullerton=DXF005340",
            label: "Greenfield Care Center of Fullerton; ;Fullerton=DXF005340",
          },
          {
            id: "Greenfield Care of Southgate; ;South Gate=DXF005334",
            label: "Greenfield Care of Southgate; ;South Gate=DXF005334",
          },
          {
            id: "Greenhills Manor; ;Campbell=DXF005142",
            label: "Greenhills Manor; ;Campbell=DXF005142",
          },
          {
            id: "Gregg K Satow MD; ;Monterey=DXF002712",
            label: "Gregg K Satow MD; ;Monterey=DXF002712",
          },
          {
            id: "Gregory B Smith MD; ;Napa=DXF004941",
            label: "Gregory B Smith MD; ;Napa=DXF004941",
          },
          {
            id: "Gridley Post Acute; ;Gridley=DXF003598",
            label: "Gridley Post Acute; ;Gridley=DXF003598",
          },
          {
            id: "Growing Healthy Together, Inc; ;Long Beach=DXF003972",
            label: "Growing Healthy Together, Inc; ;Long Beach=DXF003972",
          },
          {
            id: "GUARDIAN ANGEL FAMILY COUNSELING PC; ;MISSION VIEJO=DXF003779",
            label:
              "GUARDIAN ANGEL FAMILY COUNSELING PC; ;MISSION VIEJO=DXF003779",
          },
          {
            id: "Guardian Rehabilitation Hospital; ;Los Angeles=DXF002985",
            label: "Guardian Rehabilitation Hospital; ;Los Angeles=DXF002985",
          },
          {
            id: "Guidant Health Plan; ;Murrieta=DXF004012",
            label: "Guidant Health Plan; ;Murrieta=DXF004012",
          },
          {
            id: "Gunn Behavioral Care of CA; ;Rancho Cucamonga=DXF003017",
            label: "Gunn Behavioral Care of CA; ;Rancho Cucamonga=DXF003017",
          },
          {
            id: "Gynecologic Oncology Specialists,P.C.; ;ventura=DXF000988",
            label: "Gynecologic Oncology Specialists,P.C.; ;ventura=DXF000988",
          },
          {
            id: "Habitat for Humanity Yuba/Sutter, Inc.; ;Marysville=DXF003637",
            label:
              "Habitat for Humanity Yuba/Sutter, Inc.; ;Marysville=DXF003637",
          },
          {
            id: "Habitat for Humanity Yuba/Sutter, Inc.;Hands of Hope;Marysville=DXF003639",
            label:
              "Habitat for Humanity Yuba/Sutter, Inc.;Hands of Hope;Marysville=DXF003639",
          },
          {
            id: "Hacienda C.H., Inc.; ;Long Beach=DXF004944",
            label: "Hacienda C.H., Inc.; ;Long Beach=DXF004944",
          },
          {
            id: "Haider Spine Center Medical Group; ;Riverside=DXF000278",
            label: "Haider Spine Center Medical Group; ;Riverside=DXF000278",
          },
          {
            id: "Hakima Schulz, MD; ;SCOTTS VALLEY=DXF004449",
            label: "Hakima Schulz, MD; ;SCOTTS VALLEY=DXF004449",
          },
          {
            id: "Hamsa Ramkumar, M.D., Inc.; ;La habra=DXF003330",
            label: "Hamsa Ramkumar, M.D., Inc.; ;La habra=DXF003330",
          },
          {
            id: "Hanaa Hanna, MD., Inc.; ;San Pedro=DXF004543",
            label: "Hanaa Hanna, MD., Inc.; ;San Pedro=DXF004543",
          },
          {
            id: "hanlon fong md; ;San Francisco=DXF004639",
            label: "hanlon fong md; ;San Francisco=DXF004639",
          },
          {
            id: "Haramandeep Singh MD INc; ;San Ramon=DXF000551",
            label: "Haramandeep Singh MD INc; ;San Ramon=DXF000551",
          },
          {
            id: "Harbor Care Foundation; ;Mission Hills=DXF003566",
            label: "Harbor Care Foundation; ;Mission Hills=DXF003566",
          },
          {
            id: "Harbor Community Health Center; ;San Pedro=DXF001459",
            label: "Harbor Community Health Center; ;San Pedro=DXF001459",
          },
          {
            id: "Harbor Post Acute Care Center; ;Torrance=DXF003229",
            label: "Harbor Post Acute Care Center; ;Torrance=DXF003229",
          },
          {
            id: "harbor psychiatry & Mental Health; ;Newport Beach=DXF004326",
            label:
              "harbor psychiatry & Mental Health; ;Newport Beach=DXF004326",
          },
          {
            id: "Harmeet S Sachdev MD Inc; ;San Jose=DXF004586",
            label: "Harmeet S Sachdev MD Inc; ;San Jose=DXF004586",
          },
          {
            id: "Harmeet Sachdev MD.Inc.; ;San Jose=DXF004382",
            label: "Harmeet Sachdev MD.Inc.; ;San Jose=DXF004382",
          },
          {
            id: "Hassan Kafri MD INC; ;La Jolla=DXF001304",
            label: "Hassan Kafri MD INC; ;La Jolla=DXF001304",
          },
          {
            id: "Haven Pediatrics & Adolescent Care; ;Rancho Cucamonga=DXF001198",
            label:
              "Haven Pediatrics & Adolescent Care; ;Rancho Cucamonga=DXF001198",
          },
          {
            id: "Hayne Kelada, MD; ;Cameron Park=DXF004480",
            label: "Hayne Kelada, MD; ;Cameron Park=DXF004480",
          },
          {
            id: "Hayward Sisters Hospital dba St. Rose Hospital; ;Hayward=DXF000969",
            label:
              "Hayward Sisters Hospital dba St. Rose Hospital; ;Hayward=DXF000969",
          },
          {
            id: "Hazel Hazel Hawkins Memorial Hospital; ;Hollister=DXF005524",
            label:
              "Hazel Hazel Hawkins Memorial Hospital; ;Hollister=DXF005524",
          },
          {
            id: "Healing Grove Health Center; ;San Jose=DXF001825",
            label: "Healing Grove Health Center; ;San Jose=DXF001825",
          },
          {
            id: "Health 4 Kidz Pediatrics; ;Irvine=DXF004665",
            label: "Health 4 Kidz Pediatrics; ;Irvine=DXF004665",
          },
          {
            id: "health access for all inc; ;Los Angeles, CA=DXF002308",
            label: "health access for all inc; ;Los Angeles, CA=DXF002308",
          },
          {
            id: "Health Gorilla; ;Mountain View=DXF001977",
            label: "Health Gorilla; ;Mountain View=DXF001977",
          },
          {
            id: "Health Net; ;Saint Louis=DXF000067",
            label: "Health Net; ;Saint Louis=DXF000067",
          },
          {
            id: "Health Net;California Health & Wellness;Saint Louis=DXF000341",
            label:
              "Health Net;California Health & Wellness;Saint Louis=DXF000341",
          },
          {
            id: "Health Net;Wellcare of California Inc;Saint Louis=DXF000342",
            label:
              "Health Net;Wellcare of California Inc;Saint Louis=DXF000342",
          },
          {
            id: "Health Plan of San Joaquin; ;French Camp=DXF000040",
            label: "Health Plan of San Joaquin; ;French Camp=DXF000040",
          },
          {
            id: "Health Plan of San Mateo; ;SOUTH SAN FRANCISCO=DXF000025",
            label: "Health Plan of San Mateo; ;SOUTH SAN FRANCISCO=DXF000025",
          },
          {
            id: "Health Projects Center; ;Santa Cruz=DXF004303",
            label: "Health Projects Center; ;Santa Cruz=DXF004303",
          },
          {
            id: "Health Service Alliance; ;Chino=DXF000889",
            label: "Health Service Alliance; ;Chino=DXF000889",
          },
          {
            id: "Healthbridge Children's Hospital; ;Orange=DXF003900",
            label: "Healthbridge Children's Hospital; ;Orange=DXF003900",
          },
          {
            id: "Healthcare in Action Medical Group; ;Long Beach=DXF001457",
            label: "Healthcare in Action Medical Group; ;Long Beach=DXF001457",
          },
          {
            id: "Healthcare in Action Medical Group; ;Long Beach=DXF003555",
            label: "Healthcare in Action Medical Group; ;Long Beach=DXF003555",
          },
          {
            id: "Healthcare LA IPA; ;Westlake Village=DXF001431",
            label: "Healthcare LA IPA; ;Westlake Village=DXF001431",
          },
          {
            id: "Healthcare Management Systems Inc; ;San Jacinto=DXF005353",
            label: "Healthcare Management Systems Inc; ;San Jacinto=DXF005353",
          },
          {
            id: "HealthCare Partners Affiliates Medical Group; ;El Segundo=DXF000710",
            label:
              "HealthCare Partners Affiliates Medical Group; ;El Segundo=DXF000710",
          },
          {
            id: "HealthCare Partners Associates Medical Group, P.C; ;El Segundo=DXF000700",
            label:
              "HealthCare Partners Associates Medical Group, P.C; ;El Segundo=DXF000700",
          },
          {
            id: "HealthCare Partners Medical Group, P.C.; ;El Segundo=DXF000703",
            label:
              "HealthCare Partners Medical Group, P.C.; ;El Segundo=DXF000703",
          },
          {
            id: "Healthy Community Forum for the Greater Sacramento Region dba Sacramento Covered; ;Sacramento=DXF002960",
            label:
              "Healthy Community Forum for the Greater Sacramento Region dba Sacramento Covered; ;Sacramento=DXF002960",
          },
          {
            id: "Healthy Hearts Medical Association dba. Health Care Integrated Services; ;Chula Vista=DXF004461",
            label:
              "Healthy Hearts Medical Association dba. Health Care Integrated Services; ;Chula Vista=DXF004461",
          },
          {
            id: "Hebrew Home for Aged Disabled; ;San Francisco=DXF003221",
            label: "Hebrew Home for Aged Disabled; ;San Francisco=DXF003221",
          },
          {
            id: "Hedyeh M Golshan MD & Associates Inc; ;RIALTO=DXF001421",
            label: "Hedyeh M Golshan MD & Associates Inc; ;RIALTO=DXF001421",
          },
          {
            id: "Heeten V. Bhoot, DO, APC; ;Irvine=DXF001929",
            label: "Heeten V. Bhoot, DO, APC; ;Irvine=DXF001929",
          },
          {
            id: "Height Street Skilled Care; ;Bakersfield=DXF004562",
            label: "Height Street Skilled Care; ;Bakersfield=DXF004562",
          },
          {
            id: "Helios Healthcare, LLC; ;Sacramento=DXF004982",
            label: "Helios Healthcare, LLC; ;Sacramento=DXF004982",
          },
          {
            id: "Helpline Youth Counseling Inc OP; ;Whittier=DXF002666",
            label: "Helpline Youth Counseling Inc OP; ;Whittier=DXF002666",
          },
          {
            id: "Henry Kaw M.D. Inc.; ;Fullerton=DXF003711",
            label: "Henry Kaw M.D. Inc.; ;Fullerton=DXF003711",
          },
          {
            id: "Henry Lin Inc; ;Rancho Cucamonga=DXF000258",
            label: "Henry Lin Inc; ;Rancho Cucamonga=DXF000258",
          },
          {
            id: "Henry Mayo Newhall Hospital; ;Valencia=DXF000419",
            label: "Henry Mayo Newhall Hospital; ;Valencia=DXF000419",
          },
          {
            id: "Herald Christian Health Center; ;El Monte=DXF003899",
            label: "Herald Christian Health Center; ;El Monte=DXF003899",
          },
          {
            id: "Here to Help Foundation; ;Los Angeles=DXF002650",
            label: "Here to Help Foundation; ;Los Angeles=DXF002650",
          },
          {
            id: "Heritage Clinic; ;Pasadena=DXF003661",
            label: "Heritage Clinic; ;Pasadena=DXF003661",
          },
          {
            id: "Heritage Health Network; ;Corona=DXF005173",
            label: "Heritage Health Network; ;Corona=DXF005173",
          },
          {
            id: "Heritage Provider Network; ;Northridge=DXF004009",
            label: "Heritage Provider Network; ;Northridge=DXF004009",
          },
          {
            id: "Heritage Provider Network;Heritage Sierra Medical Group;Lancaster=DXF004018",
            label:
              "Heritage Provider Network;Heritage Sierra Medical Group;Lancaster=DXF004018",
          },
          {
            id: "Heritage Provider Network;High Desert Medical Group;Lancaster=DXF004019",
            label:
              "Heritage Provider Network;High Desert Medical Group;Lancaster=DXF004019",
          },
          {
            id: "Heritage Provider Network;Heritage Victor Valley Medical Group;victorville=DXF004020",
            label:
              "Heritage Provider Network;Heritage Victor Valley Medical Group;victorville=DXF004020",
          },
          {
            id: "Heritage Provider Network;Bakersfield Family Medical Center;Bakersfield=DXF004021",
            label:
              "Heritage Provider Network;Bakersfield Family Medical Center;Bakersfield=DXF004021",
          },
          {
            id: "Heritage Provider Network;Coastal Communities Physician Network;San Luis Obispo=DXF004022",
            label:
              "Heritage Provider Network;Coastal Communities Physician Network;San Luis Obispo=DXF004022",
          },
          {
            id: "Heritage Provider Network;Desert Oasis Healthcare;Palm Springs=DXF004023",
            label:
              "Heritage Provider Network;Desert Oasis Healthcare;Palm Springs=DXF004023",
          },
          {
            id: "Heritage Provider Network;Regal Medical Group;Northridge=DXF004024",
            label:
              "Heritage Provider Network;Regal Medical Group;Northridge=DXF004024",
          },
          {
            id: "Heritage Provider Network;Lakeside Medical Group;Northridge=DXF004025",
            label:
              "Heritage Provider Network;Lakeside Medical Group;Northridge=DXF004025",
          },
          {
            id: "Heritage Provider Network;Affiliated Doctors of Orange County;Northridge=DXF004026",
            label:
              "Heritage Provider Network;Affiliated Doctors of Orange County;Northridge=DXF004026",
          },
          {
            id: "Heritage Rehabilitation Center; ;Torrance=DXF003225",
            label: "Heritage Rehabilitation Center; ;Torrance=DXF003225",
          },
          {
            id: "Herman Healthcare Center; ;San Jose=DXF005126",
            label: "Herman Healthcare Center; ;San Jose=DXF005126",
          },
          {
            id: "HERMENEGILDO G ANGELES JR MD APC; ;DALY CITY=DXF004456",
            label: "HERMENEGILDO G ANGELES JR MD APC; ;DALY CITY=DXF004456",
          },
          {
            id: "Hesperia Clinica Medica Familiar; ;Hesperia=DXF000814",
            label: "Hesperia Clinica Medica Familiar; ;Hesperia=DXF000814",
          },
          {
            id: "Hi Desert Medical Center; ;Joshua Tree=DXF000227",
            label: "Hi Desert Medical Center; ;Joshua Tree=DXF000227",
          },
          {
            id: "Hideki Ikeda D.D.S., M.S., Dental Corporation; ;Tustin=DXF000314",
            label:
              "Hideki Ikeda D.D.S., M.S., Dental Corporation; ;Tustin=DXF000314",
          },
          {
            id: "Hi-Desert Memorial Health Care District; ;Yucca Valley=DXF003191",
            label:
              "Hi-Desert Memorial Health Care District; ;Yucca Valley=DXF003191",
          },
          {
            id: "Hi-Desert Memorial Health Care District;Morongo Basin Community Health-YV;Yucca Valley=DXF003192",
            label:
              "Hi-Desert Memorial Health Care District;Morongo Basin Community Health-YV;Yucca Valley=DXF003192",
          },
          {
            id: "Hi-Desert Memorial Health Care District;Morongo Basin Community Health Center-DH;Yucca Valley=DXF003193",
            label:
              "Hi-Desert Memorial Health Care District;Morongo Basin Community Health Center-DH;Yucca Valley=DXF003193",
          },
          {
            id: "Hi-Desert Memorial Health Care District;Morongo Basin Community Health Center-SR;Twentynine Palms=DXF003194",
            label:
              "Hi-Desert Memorial Health Care District;Morongo Basin Community Health Center-SR;Twentynine Palms=DXF003194",
          },
          {
            id: "High Care Hospice, Inc.; ;Palm Desert=DXF004320",
            label: "High Care Hospice, Inc.; ;Palm Desert=DXF004320",
          },
          {
            id: "Hill Physicians Medical Group, Inc.; ;San Ramon=DXF000088",
            label: "Hill Physicians Medical Group, Inc.; ;San Ramon=DXF000088",
          },
          {
            id: "Hill Physicians Medical Group, Inc.;Hill Physicians Care Solutions, Inc.;San Ramon=DXF000095",
            label:
              "Hill Physicians Medical Group, Inc.;Hill Physicians Care Solutions, Inc.;San Ramon=DXF000095",
          },
          {
            id: "Hillary G Redlin MD AMC; ;Kentfield=DXF004634",
            label: "Hillary G Redlin MD AMC; ;Kentfield=DXF004634",
          },
          {
            id: "Hillcrest Internal Medicine, A Medical Corporation; ;San Diego=DXF004368",
            label:
              "Hillcrest Internal Medicine, A Medical Corporation; ;San Diego=DXF004368",
          },
          {
            id: "Hillcrest Post Acute; ;Petaluma=DXF003586",
            label: "Hillcrest Post Acute; ;Petaluma=DXF003586",
          },
          {
            id: "Hillsides; ;Pasadena=DXF002326",
            label: "Hillsides; ;Pasadena=DXF002326",
          },
          {
            id: "Hilltop Health Group LLC; ;Burbank=DXF004249",
            label: "Hilltop Health Group LLC; ;Burbank=DXF004249",
          },
          {
            id: "Hilltop Health Group LLC;1495 Cameron Ave;West Covina=DXF004256",
            label:
              "Hilltop Health Group LLC;1495 Cameron Ave;West Covina=DXF004256",
          },
          {
            id: "Hilltop Health Group LLC;Villa Camilla LLC;Long Beach=DXF004258",
            label:
              "Hilltop Health Group LLC;Villa Camilla LLC;Long Beach=DXF004258",
          },
          {
            id: "Hilltop Health Group LLC;Four Rivers Management Corporation;Los Angeles=DXF004260",
            label:
              "Hilltop Health Group LLC;Four Rivers Management Corporation;Los Angeles=DXF004260",
          },
          {
            id: "Hillview Convalescent Hospital; ;Morgan Hill=DXF005152",
            label: "Hillview Convalescent Hospital; ;Morgan Hill=DXF005152",
          },
          {
            id: "Hispanic Physicians IPA; ;Los Angeles=DXF004883",
            label: "Hispanic Physicians IPA; ;Los Angeles=DXF004883",
          },
          {
            id: "Histopathology Services Inc.; ;Tustin=DXF003920",
            label: "Histopathology Services Inc.; ;Tustin=DXF003920",
          },
          {
            id: "Hizon Med Corp; ;Temecula=DXF001967",
            label: "Hizon Med Corp; ;Temecula=DXF001967",
          },
          {
            id: "Hoag Concierge Medicine; ;Costa Mesa=DXF002105",
            label: "Hoag Concierge Medicine; ;Costa Mesa=DXF002105",
          },
          {
            id: "Hoag Concierge Medicine;Hoag Memorial Hospital Presbyterian Main Laboratory;Newport Beach=DXF002117",
            label:
              "Hoag Concierge Medicine;Hoag Memorial Hospital Presbyterian Main Laboratory;Newport Beach=DXF002117",
          },
          {
            id: "Hoag Concierge Medicine;Hoag Health Center Woodbridge - Diabetes Center;Newport Beach=DXF002120",
            label:
              "Hoag Concierge Medicine;Hoag Health Center Woodbridge - Diabetes Center;Newport Beach=DXF002120",
          },
          {
            id: "Hoag Concierge Medicine;Hoag Health Center Newport Beach;Newport Beach=DXF002122",
            label:
              "Hoag Concierge Medicine;Hoag Health Center Newport Beach;Newport Beach=DXF002122",
          },
          {
            id: "Hoag Concierge Medicine;Hoag Hospital Irvine Main Laboratory;Newport Beach=DXF002123",
            label:
              "Hoag Concierge Medicine;Hoag Hospital Irvine Main Laboratory;Newport Beach=DXF002123",
          },
          {
            id: "Hoag Concierge Medicine;Hoag Hospital Irvine Infusion Center;Newport Beach=DXF002124",
            label:
              "Hoag Concierge Medicine;Hoag Hospital Irvine Infusion Center;Newport Beach=DXF002124",
          },
          {
            id: "Hoag Concierge Medicine;Hoag Lido Infusion Center;Newport Beach=DXF002125",
            label:
              "Hoag Concierge Medicine;Hoag Lido Infusion Center;Newport Beach=DXF002125",
          },
          {
            id: "Hoag Concierge Medicine;Hoag Hospital Newport Beach Operating Room - Tissue Bank;Newport Beach=DXF002128",
            label:
              "Hoag Concierge Medicine;Hoag Hospital Newport Beach Operating Room - Tissue Bank;Newport Beach=DXF002128",
          },
          {
            id: "Hoag Concierge Medicine;Hoag Health Center Sand Canyon - Imaging & Cardiac Rehab;Newport Beach=DXF002129",
            label:
              "Hoag Concierge Medicine;Hoag Health Center Sand Canyon - Imaging & Cardiac Rehab;Newport Beach=DXF002129",
          },
          {
            id: "Hoag Concierge Medicine;Hoag Health Center Sand Canyon - Wound Healing & Hyperbaric Medicine;Newport Beach=DXF002130",
            label:
              "Hoag Concierge Medicine;Hoag Health Center Sand Canyon - Wound Healing & Hyperbaric Medicine;Newport Beach=DXF002130",
          },
          {
            id: "Hoag Medical Group, Inc.; ;Costa Mesa=DXF002104",
            label: "Hoag Medical Group, Inc.; ;Costa Mesa=DXF002104",
          },
          {
            id: "Hoag Memorial Hospital Presbyterian; ;Newport Beach=DXF001817",
            label:
              "Hoag Memorial Hospital Presbyterian; ;Newport Beach=DXF001817",
          },
          {
            id: "Hoag Memorial Hospital Presbyterian; ;Newport Beach=DXF004007",
            label:
              "Hoag Memorial Hospital Presbyterian; ;Newport Beach=DXF004007",
          },
          {
            id: "Hoag Orthopedic Institute, LLC; ;Irvine=DXF001863",
            label: "Hoag Orthopedic Institute, LLC; ;Irvine=DXF001863",
          },
          {
            id: "Hoag Specialty Clinic; ;Costa Mesa=DXF002096",
            label: "Hoag Specialty Clinic; ;Costa Mesa=DXF002096",
          },
          {
            id: "Hoe Huy Le, M.D. INC; ;Santee=DXF001580",
            label: "Hoe Huy Le, M.D. INC; ;Santee=DXF001580",
          },
          {
            id: "HOLA; ;Palmdale=DXF005559",
            label: "HOLA; ;Palmdale=DXF005559",
          },
          {
            id: "Hollenbeck Palms; ;Los Angeles=DXF002772",
            label: "Hollenbeck Palms; ;Los Angeles=DXF002772",
          },
          {
            id: "Hollister Family Medicine; ;Hollister=DXF000650",
            label: "Hollister Family Medicine; ;Hollister=DXF000650",
          },
          {
            id: "Hollister Pediatrics; ;Hollister=DXF003581",
            label: "Hollister Pediatrics; ;Hollister=DXF003581",
          },
          {
            id: "holt medical center; ;MONTCLAIR=DXF002887",
            label: "holt medical center; ;MONTCLAIR=DXF002887",
          },
          {
            id: "Home Care Partner Inc; ;Encino=DXF004289",
            label: "Home Care Partner Inc; ;Encino=DXF004289",
          },
          {
            id: "Home Health Care Management, Inc.; ;Chico=DXF002690",
            label: "Home Health Care Management, Inc.; ;Chico=DXF002690",
          },
          {
            id: "HomeAvenue, Inc; ;Downey=DXF004315",
            label: "HomeAvenue, Inc; ;Downey=DXF004315",
          },
          {
            id: "Homebridge, Inc.; ;San Francisco=DXF005108",
            label: "Homebridge, Inc.; ;San Francisco=DXF005108",
          },
          {
            id: "HOPE AND LIGHT HOSPICE, INC.; ;Van Nuys,=DXF003607",
            label: "HOPE AND LIGHT HOSPICE, INC.; ;Van Nuys,=DXF003607",
          },
          {
            id: "Hope Physical Therapy; ;Fountain Valley=DXF003707",
            label: "Hope Physical Therapy; ;Fountain Valley=DXF003707",
          },
          {
            id: "Hope Physical Therapy;Hope Physical Therapy;Fountain Valley=DXF003708",
            label:
              "Hope Physical Therapy;Hope Physical Therapy;Fountain Valley=DXF003708",
          },
          {
            id: "Hope Physical Therapy PC; ;Fountain Valley=DXF003660",
            label: "Hope Physical Therapy PC; ;Fountain Valley=DXF003660",
          },
          {
            id: "Hope Services; ;San Jose=DXF002809",
            label: "Hope Services; ;San Jose=DXF002809",
          },
          {
            id: "Housecall Doctors Medical Group; ;Laguna Hills=DXF001135",
            label: "Housecall Doctors Medical Group; ;Laguna Hills=DXF001135",
          },
          {
            id: "Housing For Health Orange County, Inc; ;Irvine=DXF002735",
            label: "Housing For Health Orange County, Inc; ;Irvine=DXF002735",
          },
          {
            id: "Housing For Health Orange County, Inc;Jamboree Housing;Irvine=DXF003556",
            label:
              "Housing For Health Orange County, Inc;Jamboree Housing;Irvine=DXF003556",
          },
          {
            id: "Housing For Health Orange County, Inc;Friendship Shelter;Laguna Beach=DXF003557",
            label:
              "Housing For Health Orange County, Inc;Friendship Shelter;Laguna Beach=DXF003557",
          },
          {
            id: "Housing For Health Orange County, Inc;Mercy House;Santa Ana=DXF003558",
            label:
              "Housing For Health Orange County, Inc;Mercy House;Santa Ana=DXF003558",
          },
          {
            id: "Housing For Health Orange County, Inc;Orangewood Foundation;Santa Ana=DXF003669",
            label:
              "Housing For Health Orange County, Inc;Orangewood Foundation;Santa Ana=DXF003669",
          },
          {
            id: "Housing For Health Orange County, Inc;Teen Leadership Foundation;Irvine=DXF003670",
            label:
              "Housing For Health Orange County, Inc;Teen Leadership Foundation;Irvine=DXF003670",
          },
          {
            id: "Housing For Health Orange County, Inc;Casa Teresa, Inc.;Orange=DXF003671",
            label:
              "Housing For Health Orange County, Inc;Casa Teresa, Inc.;Orange=DXF003671",
          },
          {
            id: "Housing Works; ;Los Angeles=DXF002795",
            label: "Housing Works; ;Los Angeles=DXF002795",
          },
          {
            id: "HubMD; ;Redlands=DXF005817",
            label: "HubMD; ;Redlands=DXF005817",
          },
          {
            id: "HubMD PC; ;Redlands=DXF003967",
            label: "HubMD PC; ;Redlands=DXF003967",
          },
          {
            id: "HumanGood; ;Duarte=DXF002452",
            label: "HumanGood; ;Duarte=DXF002452",
          },
          {
            id: "HumanGood;Piedmont Gardens;Oakland=DXF004488",
            label: "HumanGood;Piedmont Gardens;Oakland=DXF004488",
          },
          {
            id: "HumanGood;Plymouth Village;Redlands=DXF004489",
            label: "HumanGood;Plymouth Village;Redlands=DXF004489",
          },
          {
            id: "HumanGood;Rosewood;Bakersfield=DXF004490",
            label: "HumanGood;Rosewood;Bakersfield=DXF004490",
          },
          {
            id: "HumanGood;The Terraces at Los Altos;Los Altos=DXF004491",
            label: "HumanGood;The Terraces at Los Altos;Los Altos=DXF004491",
          },
          {
            id: "HumanGood;The Terraces of Los Gatos;Los Gatos=DXF004492",
            label: "HumanGood;The Terraces of Los Gatos;Los Gatos=DXF004492",
          },
          {
            id: "HumanGood;Valle Verde;Santa Barbara=DXF004493",
            label: "HumanGood;Valle Verde;Santa Barbara=DXF004493",
          },
          {
            id: "HumanGood;The Terraces at San Joaquin Gardens;Fresno=DXF004494",
            label:
              "HumanGood;The Terraces at San Joaquin Gardens;Fresno=DXF004494",
          },
          {
            id: "HumanGood;Redwood Terrace;Escondido=DXF004495",
            label: "HumanGood;Redwood Terrace;Escondido=DXF004495",
          },
          {
            id: "HumanGood;Regents Point;Irvine=DXF004496",
            label: "HumanGood;Regents Point;Irvine=DXF004496",
          },
          {
            id: "HumanGood;Royal Oaks;Bradbury=DXF004497",
            label: "HumanGood;Royal Oaks;Bradbury=DXF004497",
          },
          {
            id: "HumanGood;White Sands La Jolla;La Jolla=DXF004498",
            label: "HumanGood;White Sands La Jolla;La Jolla=DXF004498",
          },
          {
            id: "HumanGood SoCal; ;Irvine=DXF003896",
            label: "HumanGood SoCal; ;Irvine=DXF003896",
          },
          {
            id: "Humboldt Del Norte Independent Practice Association; ;Eureka=DXF001124",
            label:
              "Humboldt Del Norte Independent Practice Association; ;Eureka=DXF001124",
          },
          {
            id: "Huong Nguyen M.D.; ;San Diego=DXF003905",
            label: "Huong Nguyen M.D.; ;San Diego=DXF003905",
          },
          {
            id: "Huong Tran Quy Inc; ;Westminster=DXF004468",
            label: "Huong Tran Quy Inc; ;Westminster=DXF004468",
          },
          {
            id: "ICPMG Clinic; ;EL CENTRO=DXF005790",
            label: "ICPMG Clinic; ;EL CENTRO=DXF005790",
          },
          {
            id: "Iftikhar A. Khan M.D. Inc.; ;Montebello=DXF000169",
            label: "Iftikhar A. Khan M.D. Inc.; ;Montebello=DXF000169",
          },
          {
            id: "IHOME HEALTH CARE, INC.; ;North Hollywood=DXF003605",
            label: "IHOME HEALTH CARE, INC.; ;North Hollywood=DXF003605",
          },
          {
            id: "IHS Radiology Medical Group, Inc.; ;San Diego=DXF002162",
            label: "IHS Radiology Medical Group, Inc.; ;San Diego=DXF002162",
          },
          {
            id: "Ikigai Physician Group, Inc; ;Fortuna=DXF004618",
            label: "Ikigai Physician Group, Inc; ;Fortuna=DXF004618",
          },
          {
            id: "Illumination Foundation; ;Santa Ana=DXF002837",
            label: "Illumination Foundation; ;Santa Ana=DXF002837",
          },
          {
            id: "Imelda Tanchoco; ;West Covina=DXF000168",
            label: "Imelda Tanchoco; ;West Covina=DXF000168",
          },
          {
            id: "Impact Care Access Network Inc; ;Hesperia=DXF003606",
            label: "Impact Care Access Network Inc; ;Hesperia=DXF003606",
          },
          {
            id: "Impact Care Access Network Inc;Impact Care Access Network, Inc;Pomona=DXF003609",
            label:
              "Impact Care Access Network Inc;Impact Care Access Network, Inc;Pomona=DXF003609",
          },
          {
            id: "Imperial Beach Community Clinics; ;San Diego=DXF001119",
            label: "Imperial Beach Community Clinics; ;San Diego=DXF001119",
          },
          {
            id: "Imperial County Behavioral Health Servs; ;EL CENTRO=DXF002425",
            label:
              "Imperial County Behavioral Health Servs; ;EL CENTRO=DXF002425",
          },
          {
            id: "Imperial Health Plan of California, Inc; ;Pasadena=DXF004741",
            label:
              "Imperial Health Plan of California, Inc; ;Pasadena=DXF004741",
          },
          {
            id: "Imperial Home Health; ;victorville=DXF003354",
            label: "Imperial Home Health; ;victorville=DXF003354",
          },
          {
            id: "IMPERIAL VALLEY LOCAL HEALTH AUTHORITY; ;IMPERIAL=DXF004970",
            label:
              "IMPERIAL VALLEY LOCAL HEALTH AUTHORITY; ;IMPERIAL=DXF004970",
          },
          {
            id: "Imperial Valley Medical Clinic, Inc; ;Calexico=DXF005200",
            label: "Imperial Valley Medical Clinic, Inc; ;Calexico=DXF005200",
          },
          {
            id: "Independent Living Systems, LLC; ;Glendale=DXF002732",
            label: "Independent Living Systems, LLC; ;Glendale=DXF002732",
          },
          {
            id: "Independent Physician Medical Associates, Inc. doing business as AllCare; ;Modesto=DXF001836",
            label:
              "Independent Physician Medical Associates, Inc. doing business as AllCare; ;Modesto=DXF001836",
          },
          {
            id: "Indian Health Center of Santa Clara Valley; ;San Jose=DXF002564",
            label:
              "Indian Health Center of Santa Clara Valley; ;San Jose=DXF002564",
          },
          {
            id: "Indian Health Council, Inc.; ;Valley Center=DXF000804",
            label: "Indian Health Council, Inc.; ;Valley Center=DXF000804",
          },
          {
            id: "Indus Medical Associates; ;Rancho Mirage=DXF001468",
            label: "Indus Medical Associates; ;Rancho Mirage=DXF001468",
          },
          {
            id: "Indus Medical Associates; ;Coachella=DXF003601",
            label: "Indus Medical Associates; ;Coachella=DXF003601",
          },
          {
            id: "Indus Medical Associates;Indus Medical Associates;Rancho Mirage=DXF003602",
            label:
              "Indus Medical Associates;Indus Medical Associates;Rancho Mirage=DXF003602",
          },
          {
            id: "Infinity Medical Group; ;Apple Valley=DXF001918",
            label: "Infinity Medical Group; ;Apple Valley=DXF001918",
          },
          {
            id: "Info line of San Diego; ;San Diego=DXF003750",
            label: "Info line of San Diego; ;San Diego=DXF003750",
          },
          {
            id: "Ingrid E Trenkle MD Inc; ;Redlands=DXF001558",
            label: "Ingrid E Trenkle MD Inc; ;Redlands=DXF001558",
          },
          {
            id: "Inland Empire Health Plan; ;Rancho Cucamonga=DXF001659",
            label: "Inland Empire Health Plan; ;Rancho Cucamonga=DXF001659",
          },
          {
            id: "Inland Faculty Medical Group, Inc.; ;Ontario=DXF000686",
            label: "Inland Faculty Medical Group, Inc.; ;Ontario=DXF000686",
          },
          {
            id: "Inland Pediatrics; ;Riverside=DXF005466",
            label: "Inland Pediatrics; ;Riverside=DXF005466",
          },
          {
            id: "Inland Pediatrics, Inc; ;Riverside=DXF000864",
            label: "Inland Pediatrics, Inc; ;Riverside=DXF000864",
          },
          {
            id: "Inland Southern California United Way; ;Riverside=DXF004374",
            label:
              "Inland Southern California United Way; ;Riverside=DXF004374",
          },
          {
            id: "Inland Southern California United Way;Inland Southern California 211+;Riverside=DXF004375",
            label:
              "Inland Southern California United Way;Inland Southern California 211+;Riverside=DXF004375",
          },
          {
            id: "INLAND VALLEY RETINA MEDICAL ASSOCIATES, INC; ;Temecula=DXF004972",
            label:
              "INLAND VALLEY RETINA MEDICAL ASSOCIATES, INC; ;Temecula=DXF004972",
          },
          {
            id: "INLAND VALLEY RETINA MEDICAL ASSOCIATES, INC;Inland Valley Surgery Center;Temecula=DXF004973",
            label:
              "INLAND VALLEY RETINA MEDICAL ASSOCIATES, INC;Inland Valley Surgery Center;Temecula=DXF004973",
          },
          {
            id: "Inner Leverage Point, P.C.; ;Santa Barbara=DXF000973",
            label: "Inner Leverage Point, P.C.; ;Santa Barbara=DXF000973",
          },
          {
            id: "Innercare; ;EL CENTRO=DXF002074",
            label: "Innercare; ;EL CENTRO=DXF002074",
          },
          {
            id: "Innovative Care Medicine; ;Corona=DXF000184",
            label: "Innovative Care Medicine; ;Corona=DXF000184",
          },
          {
            id: "Innovative Integrated Health, Inc.; ;Newport Beach=DXF002655",
            label:
              "Innovative Integrated Health, Inc.; ;Newport Beach=DXF002655",
          },
          {
            id: "Innovative Integrated Health, Inc.;Central Valley Medical Services Corporation;Fresno=DXF002663",
            label:
              "Innovative Integrated Health, Inc.;Central Valley Medical Services Corporation;Fresno=DXF002663",
          },
          {
            id: "Innovative Integrated Health, Inc.;Central Valley Medical Services Corporation;Bakersfield=DXF002664",
            label:
              "Innovative Integrated Health, Inc.;Central Valley Medical Services Corporation;Bakersfield=DXF002664",
          },
          {
            id: "Innovative Integrated Health, Inc.;Central Valley Medical Services Corporation;Anaheim=DXF002665",
            label:
              "Innovative Integrated Health, Inc.;Central Valley Medical Services Corporation;Anaheim=DXF002665",
          },
          {
            id: "INNOVATIVE MEDICAL ASSOCIATES; ;Beverly Hills=DXF004301",
            label: "INNOVATIVE MEDICAL ASSOCIATES; ;Beverly Hills=DXF004301",
          },
          {
            id: "Insight Dermatology; ;San Diego=DXF001328",
            label: "Insight Dermatology; ;San Diego=DXF001328",
          },
          {
            id: "Insight Dermatology; ;San Diego=DXF002063",
            label: "Insight Dermatology; ;San Diego=DXF002063",
          },
          {
            id: "Insight Dermatology; ;San Diego=DXF002071",
            label: "Insight Dermatology; ;San Diego=DXF002071",
          },
          {
            id: "Insight Dermatology; ;San Diego=DXF002087",
            label: "Insight Dermatology; ;San Diego=DXF002087",
          },
          {
            id: "Insight Vision Center; ;Fresno=DXF000759",
            label: "Insight Vision Center; ;Fresno=DXF000759",
          },
          {
            id: "Institute for Applied Behavior Analysis; ;Brea=DXF004262",
            label: "Institute for Applied Behavior Analysis; ;Brea=DXF004262",
          },
          {
            id: "Institute for Multicultural Counseling & Education Services; ;Los Angeles=DXF001994",
            label:
              "Institute for Multicultural Counseling & Education Services; ;Los Angeles=DXF001994",
          },
          {
            id: "Integrated Healthcare Alliance; ;San Diego=DXF002805",
            label: "Integrated Healthcare Alliance; ;San Diego=DXF002805",
          },
          {
            id: "Interface Children & Family Services; ;Camarillo=DXF003844",
            label: "Interface Children & Family Services; ;Camarillo=DXF003844",
          },
          {
            id: "Internal Medicine of Ventura; ;Camarillo=DXF001448",
            label: "Internal Medicine of Ventura; ;Camarillo=DXF001448",
          },
          {
            id: "Internal Medicine Specialists Inc.; ;Rancho Mirage=DXF000875",
            label:
              "Internal Medicine Specialists Inc.; ;Rancho Mirage=DXF000875",
          },
          {
            id: "Invitae Corporation; ;San Francisco=DXF001567",
            label: "Invitae Corporation; ;San Francisco=DXF001567",
          },
          {
            id: "Invitae Corporation; ;Pasadena=DXF004994",
            label: "Invitae Corporation; ;Pasadena=DXF004994",
          },
          {
            id: "Inyo County HHS; ;Bishop=DXF000418",
            label: "Inyo County HHS; ;Bishop=DXF000418",
          },
          {
            id: "Inyo County HHS;Inyo County HHS;Bishop=DXF002975",
            label: "Inyo County HHS;Inyo County HHS;Bishop=DXF002975",
          },
          {
            id: "Inyo County HHS;Inyo County HHS;Bishop=DXF002976",
            label: "Inyo County HHS;Inyo County HHS;Bishop=DXF002976",
          },
          {
            id: "IonCell; ;Santa Monica=DXF004566",
            label: "IonCell; ;Santa Monica=DXF004566",
          },
          {
            id: "ira R Braverman md inc; ;National City=DXF001458",
            label: "ira R Braverman md inc; ;National City=DXF001458",
          },
          {
            id: "Irwin Ruben M. D a medical corporation; ;Beverly Hills=DXF000575",
            label:
              "Irwin Ruben M. D a medical corporation; ;Beverly Hills=DXF000575",
          },
          {
            id: "IS Gujral MD; ;Laguna Niguel=DXF004405",
            label: "IS Gujral MD; ;Laguna Niguel=DXF004405",
          },
          {
            id: "IS Gujral MD;H. SAHOTA, MD INC. & K. SRINATHA MD;Bellflower=DXF004406",
            label:
              "IS Gujral MD;H. SAHOTA, MD INC. & K. SRINATHA MD;Bellflower=DXF004406",
          },
          {
            id: "ISABELL BEDDOW MD; ;San Mateo=DXF002033",
            label: "ISABELL BEDDOW MD; ;San Mateo=DXF002033",
          },
          {
            id: "Isaias de Guzman Paja Jr MD inc; ;Los Angeles=DXF001170",
            label: "Isaias de Guzman Paja Jr MD inc; ;Los Angeles=DXF001170",
          },
          {
            id: "Isaias De Guzman Paja Jr.; ;Los Angeles=DXF000404",
            label: "Isaias De Guzman Paja Jr.; ;Los Angeles=DXF000404",
          },
          {
            id: "Island Creek Holdings, LLC; ;Livermore=DXF004900",
            label: "Island Creek Holdings, LLC; ;Livermore=DXF004900",
          },
          {
            id: "Island Creek Holdings, LLC;Jackson River Holdings, LLC;Livermore=DXF004901",
            label:
              "Island Creek Holdings, LLC;Jackson River Holdings, LLC;Livermore=DXF004901",
          },
          {
            id: "Israel Katz, M.D.; ;San Francisco=DXF000670",
            label: "Israel Katz, M.D.; ;San Francisco=DXF000670",
          },
          {
            id: "J&J Health Care Services Inc; ;Campbell=DXF005859",
            label: "J&J Health Care Services Inc; ;Campbell=DXF005859",
          },
          {
            id: "J&M Homecare Services, LLC; ;San Ramon=DXF004283",
            label: "J&M Homecare Services, LLC; ;San Ramon=DXF004283",
          },
          {
            id: "J&T Care, LLC; ;San Francisco=DXF005311",
            label: "J&T Care, LLC; ;San Francisco=DXF005311",
          },
          {
            id: "J. Deryl Adderson MD; ;San Diego=DXF001678",
            label: "J. Deryl Adderson MD; ;San Diego=DXF001678",
          },
          {
            id: "J.M. GEISS, D.O., APC; ;Orange=DXF005811",
            label: "J.M. GEISS, D.O., APC; ;Orange=DXF005811",
          },
          {
            id: "Jacaranda Healthcare Group, LLC; ;Laguna Niguel=DXF005371",
            label: "Jacaranda Healthcare Group, LLC; ;Laguna Niguel=DXF005371",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;ACSR, LLC;Camarillo=DXF005372",
            label:
              "Jacaranda Healthcare Group, LLC;ACSR, LLC;Camarillo=DXF005372",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;AWHC, LLC;Westminster=DXF005373",
            label:
              "Jacaranda Healthcare Group, LLC;AWHC, LLC;Westminster=DXF005373",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;ALHV, LLC;Laguna Hills=DXF005374",
            label:
              "Jacaranda Healthcare Group, LLC;ALHV, LLC;Laguna Hills=DXF005374",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;ASRV, LLC;San Juan Capistrano=DXF005375",
            label:
              "Jacaranda Healthcare Group, LLC;ASRV, LLC;San Juan Capistrano=DXF005375",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;ASD6, LLC;San Diego=DXF005376",
            label:
              "Jacaranda Healthcare Group, LLC;ASD6, LLC;San Diego=DXF005376",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;APDC, LLC;Palm Desert=DXF005377",
            label:
              "Jacaranda Healthcare Group, LLC;APDC, LLC;Palm Desert=DXF005377",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;ASMS, LLC;Santa Monica=DXF005378",
            label:
              "Jacaranda Healthcare Group, LLC;ASMS, LLC;Santa Monica=DXF005378",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;ASBW, LLC;Santa Monica=DXF005379",
            label:
              "Jacaranda Healthcare Group, LLC;ASBW, LLC;Santa Monica=DXF005379",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;ASMB, LLC;Santa Monica=DXF005380",
            label:
              "Jacaranda Healthcare Group, LLC;ASMB, LLC;Santa Monica=DXF005380",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;ACSB, LLC;Culver City=DXF005381",
            label:
              "Jacaranda Healthcare Group, LLC;ACSB, LLC;Culver City=DXF005381",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;AGVA, LLC;Gardena=DXF005382",
            label:
              "Jacaranda Healthcare Group, LLC;AGVA, LLC;Gardena=DXF005382",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;AVNS, LLC;Van Nuys=DXF005383",
            label:
              "Jacaranda Healthcare Group, LLC;AVNS, LLC;Van Nuys=DXF005383",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;ASND, LLC;Northridge=DXF005384",
            label:
              "Jacaranda Healthcare Group, LLC;ASND, LLC;Northridge=DXF005384",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;ASLB, LLC (Retirement Housing Foundation);Long Beach=DXF005385",
            label:
              "Jacaranda Healthcare Group, LLC;ASLB, LLC (Retirement Housing Foundation);Long Beach=DXF005385",
          },
          {
            id: "Jacaranda Healthcare Group, LLC;ALAL, LLC;Los Angeles=DXF005386",
            label:
              "Jacaranda Healthcare Group, LLC;ALAL, LLC;Los Angeles=DXF005386",
          },
          {
            id: "Jackson River Holdings, LLC; ;Livermore=DXF004902",
            label: "Jackson River Holdings, LLC; ;Livermore=DXF004902",
          },
          {
            id: "Jacob Healthcare Center; ;San Diego=DXF004865",
            label: "Jacob Healthcare Center; ;San Diego=DXF004865",
          },
          {
            id: "Jacob Healthcare Center;Jacob Healthcare Center;San Diego=DXF004869",
            label:
              "Jacob Healthcare Center;Jacob Healthcare Center;San Diego=DXF004869",
          },
          {
            id: "Jacob Huynh MD Inc; ;Westminster=DXF004329",
            label: "Jacob Huynh MD Inc; ;Westminster=DXF004329",
          },
          {
            id: "Jacqueline G De Castro MD, Inc.,; ;Hanford=DXF000735",
            label: "Jacqueline G De Castro MD, Inc.,; ;Hanford=DXF000735",
          },
          {
            id: "Jacquelyn Chang, M.D.; ;Burlingame=DXF001074",
            label: "Jacquelyn Chang, M.D.; ;Burlingame=DXF001074",
          },
          {
            id: "james a watson md inc; ;GILROY=DXF004336",
            label: "james a watson md inc; ;GILROY=DXF004336",
          },
          {
            id: "James C Ho MD Medical Corporation; ;Brea=DXF002963",
            label: "James C Ho MD Medical Corporation; ;Brea=DXF002963",
          },
          {
            id: "James Corona M.D.; ;Orland=DXF000580",
            label: "James Corona M.D.; ;Orland=DXF000580",
          },
          {
            id: "James D. Wethe, M.D.; ;Torrance=DXF000584",
            label: "James D. Wethe, M.D.; ;Torrance=DXF000584",
          },
          {
            id: "James Dacus MD Inc a Medical Corporation; ;Monterey=DXF001485",
            label:
              "James Dacus MD Inc a Medical Corporation; ;Monterey=DXF001485",
          },
          {
            id: "James Gerard Brewer, M.D., Inc.; ;Santa Barbara=DXF000722",
            label: "James Gerard Brewer, M.D., Inc.; ;Santa Barbara=DXF000722",
          },
          {
            id: "James J. Longobardi, DPM, Inc.; ;Chula Vista=DXF002291",
            label: "James J. Longobardi, DPM, Inc.; ;Chula Vista=DXF002291",
          },
          {
            id: "James J. Wu Medical Corporation DBA SoCal Pediatrics; ;Pomona=DXF000845",
            label:
              "James J. Wu Medical Corporation DBA SoCal Pediatrics; ;Pomona=DXF000845",
          },
          {
            id: "James L. Kay, D.O., P.C.; ;Lake Forest=DXF004202",
            label: "James L. Kay, D.O., P.C.; ;Lake Forest=DXF004202",
          },
          {
            id: "James Robert Miller; ;Tracy=DXF004531",
            label: "James Robert Miller; ;Tracy=DXF004531",
          },
          {
            id: "James S. Ruppert, MD; ;Riverside=DXF005762",
            label: "James S. Ruppert, MD; ;Riverside=DXF005762",
          },
          {
            id: "jane w chien md inc; ;Los Gatos=DXF000677",
            label: "jane w chien md inc; ;Los Gatos=DXF000677",
          },
          {
            id: "Jared Salvo DO A Professional Corporation; ;Bakersfield=DXF001500",
            label:
              "Jared Salvo DO A Professional Corporation; ;Bakersfield=DXF001500",
          },
          {
            id: "Jason D Toranto MD Inc; ;San Diego=DXF000622",
            label: "Jason D Toranto MD Inc; ;San Diego=DXF000622",
          },
          {
            id: "Jayakar Medical Group; ;Mountain View=DXF003727",
            label: "Jayakar Medical Group; ;Mountain View=DXF003727",
          },
          {
            id: "JAYASHREE JOSHI, M.D. A PROF. CORP; ;MILPITAS=DXF003624",
            label: "JAYASHREE JOSHI, M.D. A PROF. CORP; ;MILPITAS=DXF003624",
          },
          {
            id: "Jayme Harris; ;Murrieta=DXF000251",
            label: "Jayme Harris; ;Murrieta=DXF000251",
          },
          {
            id: "Jayme Harris;Rolando A. Atiga M.D A Professional Corp;Sun City=DXF000252",
            label:
              "Jayme Harris;Rolando A. Atiga M.D A Professional Corp;Sun City=DXF000252",
          },
          {
            id: "Jeffrey A. Klein, MD, Inc.; ;San Juan Capistrano=DXF002591",
            label: "Jeffrey A. Klein, MD, Inc.; ;San Juan Capistrano=DXF002591",
          },
          {
            id: "JEFFREY K FEINFIELD, MD; ;Thousand Oaks=DXF002598",
            label: "JEFFREY K FEINFIELD, MD; ;Thousand Oaks=DXF002598",
          },
          {
            id: "JEFFREY KLEIS DPM INC; ;Costa Mesa=DXF001287",
            label: "JEFFREY KLEIS DPM INC; ;Costa Mesa=DXF001287",
          },
          {
            id: "Jeffrey L Mansoor MD INC; ;Stockton=DXF004547",
            label: "Jeffrey L Mansoor MD INC; ;Stockton=DXF004547",
          },
          {
            id: "Jeffrey M. Bloom, M.D., Inc.; ;San Luis Obispo=DXF001197",
            label: "Jeffrey M. Bloom, M.D., Inc.; ;San Luis Obispo=DXF001197",
          },
          {
            id: "Jeffrey R Polito MD A Professional Corporation; ;Santa Barbara=DXF004098",
            label:
              "Jeffrey R Polito MD A Professional Corporation; ;Santa Barbara=DXF004098",
          },
          {
            id: "Jeffrey S Sager MD Medical Corporation; ;Santa Barbara=DXF001631",
            label:
              "Jeffrey S Sager MD Medical Corporation; ;Santa Barbara=DXF001631",
          },
          {
            id: "Jeffrey W Grolig MD INC; ;Red Bluff=DXF000566",
            label: "Jeffrey W Grolig MD INC; ;Red Bluff=DXF000566",
          },
          {
            id: "Jennifer Sebastian; ;Costa Mesa=DXF004356",
            label: "Jennifer Sebastian; ;Costa Mesa=DXF004356",
          },
          {
            id: "Jennifer Sebastian;Pacific Neuropsychiatric Specialists;Costa Mesa=DXF004359",
            label:
              "Jennifer Sebastian;Pacific Neuropsychiatric Specialists;Costa Mesa=DXF004359",
          },
          {
            id: "Jennifer Y. Kim MD Inc; ;Upland=DXF001145",
            label: "Jennifer Y. Kim MD Inc; ;Upland=DXF001145",
          },
          {
            id: "Jeoffrey P Benson MD Inc; ;Santa Barbara=DXF001121",
            label: "Jeoffrey P Benson MD Inc; ;Santa Barbara=DXF001121",
          },
          {
            id: "Jerome Potozkin,MD A Professional Corporation; ;Danville=DXF000626",
            label:
              "Jerome Potozkin,MD A Professional Corporation; ;Danville=DXF000626",
          },
          {
            id: "Jerry Soung, MD; ;Stockton=DXF001040",
            label: "Jerry Soung, MD; ;Stockton=DXF001040",
          },
          {
            id: "Jervis Yau MD Inc; ;Santa Barbara=DXF001629",
            label: "Jervis Yau MD Inc; ;Santa Barbara=DXF001629",
          },
          {
            id: "Jewish Community Free Clinic; ;Santa Rosa=DXF003198",
            label: "Jewish Community Free Clinic; ;Santa Rosa=DXF003198",
          },
          {
            id: "JFK Memorial Hospital; ;Indio=DXF000228",
            label: "JFK Memorial Hospital; ;Indio=DXF000228",
          },
          {
            id: "Jigar Ghelani M.D. Professional Corp; ;Thousand Oaks=DXF001641",
            label:
              "Jigar Ghelani M.D. Professional Corp; ;Thousand Oaks=DXF001641",
          },
          {
            id: "Joanne E. Reid, M.D., Inc; ;Willows=DXF000482",
            label: "Joanne E. Reid, M.D., Inc; ;Willows=DXF000482",
          },
          {
            id: "JOEL DE LA MERCED; ;Chino Hills=DXF000422",
            label: "JOEL DE LA MERCED; ;Chino Hills=DXF000422",
          },
          {
            id: "John A. Grimaldi, D.O., Inc.; ;Chula Vista=DXF002149",
            label: "John A. Grimaldi, D.O., Inc.; ;Chula Vista=DXF002149",
          },
          {
            id: "John C Fremont Hospital; ;Mariposa=DXF001162",
            label: "John C Fremont Hospital; ;Mariposa=DXF001162",
          },
          {
            id: "John C Fremont Hospital;DP-SNF;none PD entry=DXF005748",
            label: "John C Fremont Hospital;DP-SNF;none PD entry=DXF005748",
          },
          {
            id: "John E Bokosky MD FACS; ;San Diego=DXF002006",
            label: "John E Bokosky MD FACS; ;San Diego=DXF002006",
          },
          {
            id: "John F Cook Jr MD; ;Newport Beach=DXF000316",
            label: "John F Cook Jr MD; ;Newport Beach=DXF000316",
          },
          {
            id: "John J Kowalczyk DO Inc; ;Los Angeles=DXF001222",
            label: "John J Kowalczyk DO Inc; ;Los Angeles=DXF001222",
          },
          {
            id: "John M. Sawyer; ;Lompoc=DXF000272",
            label: "John M. Sawyer; ;Lompoc=DXF000272",
          },
          {
            id: "John Muir Health System; ;Walnut Creek=DXF003831",
            label: "John Muir Health System; ;Walnut Creek=DXF003831",
          },
          {
            id: "John Muir Health System;John Muir Medical Center - Walnut Creek Campus;Walnut Creek=DXF004048",
            label:
              "John Muir Health System;John Muir Medical Center - Walnut Creek Campus;Walnut Creek=DXF004048",
          },
          {
            id: "John Muir Health System;John Muir Medical Center - Concord Campus;Walnut Creek=DXF004049",
            label:
              "John Muir Health System;John Muir Medical Center - Concord Campus;Walnut Creek=DXF004049",
          },
          {
            id: "John Muir Health System;John Muir Behavioral Health Center;Walnut Creek=DXF004050",
            label:
              "John Muir Health System;John Muir Behavioral Health Center;Walnut Creek=DXF004050",
          },
          {
            id: "John Muir Health System;John Muir Physician Network;Walnut Creek=DXF004051",
            label:
              "John Muir Health System;John Muir Physician Network;Walnut Creek=DXF004051",
          },
          {
            id: "John Muir Health System;John Muir Health - Walnut Creek Medical Center \u2013 Clinical Lab;Walnut Creek=DXF004052",
            label:
              "John Muir Health System;John Muir Health - Walnut Creek Medical Center \u2013 Clinical Lab;Walnut Creek=DXF004052",
          },
          {
            id: "John Muir Health System;John Muir Health \u2013 Concord Medical Center \u2013 Clinical Lab;Walnut Creek=DXF004053",
            label:
              "John Muir Health System;John Muir Health \u2013 Concord Medical Center \u2013 Clinical Lab;Walnut Creek=DXF004053",
          },
          {
            id: "John Qian MD Inc dba Sage Pain & Wellness Institute; ;San Diego=DXF001330",
            label:
              "John Qian MD Inc dba Sage Pain & Wellness Institute; ;San Diego=DXF001330",
          },
          {
            id: "John R Glyer D Mills Matheson & Margaret Arner MDS PTR; ;Willits=DXF001284",
            label:
              "John R Glyer D Mills Matheson & Margaret Arner MDS PTR; ;Willits=DXF001284",
          },
          {
            id: "Jon Ferguson DO CORP; ;Chico=DXF001733",
            label: "Jon Ferguson DO CORP; ;Chico=DXF001733",
          },
          {
            id: "Jon J. Atiga M.D., Inc.; ;Murrieta=DXF001369",
            label: "Jon J. Atiga M.D., Inc.; ;Murrieta=DXF001369",
          },
          {
            id: "Joseph A Mele, III, MD, Inc; ;Walnut Cree=DXF000743",
            label: "Joseph A Mele, III, MD, Inc; ;Walnut Cree=DXF000743",
          },
          {
            id: "Joseph Bettencourt MD Inc.; ;Paso Robles=DXF004473",
            label: "Joseph Bettencourt MD Inc.; ;Paso Robles=DXF004473",
          },
          {
            id: "Joseph Greenberg, M.D., Ltd. A Medical Corporation; ;San Rafael=DXF001424",
            label:
              "Joseph Greenberg, M.D., Ltd. A Medical Corporation; ;San Rafael=DXF001424",
          },
          {
            id: "Jothi Murali MD Inc.; ;Campbell=DXF003696",
            label: "Jothi Murali MD Inc.; ;Campbell=DXF003696",
          },
          {
            id: "Journey Health; ;Oakland=DXF005582",
            label: "Journey Health; ;Oakland=DXF005582",
          },
          {
            id: "Journey Health;Journey Health Medical Group of California;Oakland=DXF005583",
            label:
              "Journey Health;Journey Health Medical Group of California;Oakland=DXF005583",
          },
          {
            id: "Juan C. Carrillo M.D., A professional Corporation; ;San Jose=DXF004125",
            label:
              "Juan C. Carrillo M.D., A professional Corporation; ;San Jose=DXF004125",
          },
          {
            id: "Julie G Duquette MD A Medical Coportation; ;Newport Beach=DXF000038",
            label:
              "Julie G Duquette MD A Medical Coportation; ;Newport Beach=DXF000038",
          },
          {
            id: "Julie R Ohayon, MD, Prof Corp; ;San Diego=DXF001635",
            label: "Julie R Ohayon, MD, Prof Corp; ;San Diego=DXF001635",
          },
          {
            id: "JWCH Institute, Inc; ;Commerce=DXF002370",
            label: "JWCH Institute, Inc; ;Commerce=DXF002370",
          },
          {
            id: "JWCH Institute, Inc.; ;Commerce=DXF002179",
            label: "JWCH Institute, Inc.; ;Commerce=DXF002179",
          },
          {
            id: "Kabakibi medical corporation; ;San Diego=DXF004860",
            label: "Kabakibi medical corporation; ;San Diego=DXF004860",
          },
          {
            id: "Kaditam V. Reddy, MD, Inc.; ;Thousand Oaks=DXF001879",
            label: "Kaditam V. Reddy, MD, Inc.; ;Thousand Oaks=DXF001879",
          },
          {
            id: "Kaiser Foundation Hospitals; ;Oakland=DXF000538",
            label: "Kaiser Foundation Hospitals; ;Oakland=DXF000538",
          },
          {
            id: "Kaiser Foundation Hospitals;Kaiser Foundation Health Plan, Inc.;Oakland=DXF002812",
            label:
              "Kaiser Foundation Hospitals;Kaiser Foundation Health Plan, Inc.;Oakland=DXF002812",
          },
          {
            id: "Kaiser Foundation Hospitals;Kaiser Foundation Hospitals;Oakland=DXF003006",
            label:
              "Kaiser Foundation Hospitals;Kaiser Foundation Hospitals;Oakland=DXF003006",
          },
          {
            id: "Kaiser Foundation Hospitals;Kaiser Permanente;none PD entry=DXF005672",
            label:
              "Kaiser Foundation Hospitals;Kaiser Permanente;none PD entry=DXF005672",
          },
          {
            id: "Kan-Di-Ki, LLC; ;LAS VEGAS=DXF004293",
            label: "Kan-Di-Ki, LLC; ;LAS VEGAS=DXF004293",
          },
          {
            id: "Katherine Bao-Shian Lee M.D., a Professional Corporation; ;Laguna Hills=DXF003649",
            label:
              "Katherine Bao-Shian Lee M.D., a Professional Corporation; ;Laguna Hills=DXF003649",
          },
          {
            id: "Kaveh Bagheri MD Inc; ;La Mesa=DXF001407",
            label: "Kaveh Bagheri MD Inc; ;La Mesa=DXF001407",
          },
          {
            id: "Kawaljeet Kaur Bhatia, M.D.; ;GILROY=DXF002228",
            label: "Kawaljeet Kaur Bhatia, M.D.; ;GILROY=DXF002228",
          },
          {
            id: "Kaweah Delta Health Care District; ;Visalia=DXF004191",
            label: "Kaweah Delta Health Care District; ;Visalia=DXF004191",
          },
          {
            id: "Kay Mukergee MD; ;Riverside=DXF000877",
            label: "Kay Mukergee MD; ;Riverside=DXF000877",
          },
          {
            id: "KCS Health Center; ;Anaheim=DXF003705",
            label: "KCS Health Center; ;Anaheim=DXF003705",
          },
          {
            id: "Kedren Health; ;Los Angeles=DXF000741",
            label: "Kedren Health; ;Los Angeles=DXF000741",
          },
          {
            id: "Keen Medical Group, Inc; ;Hesperia=DXF001519",
            label: "Keen Medical Group, Inc; ;Hesperia=DXF001519",
          },
          {
            id: "Keith Jackson, MD, Limited; ;San Diego=DXF001343",
            label: "Keith Jackson, MD, Limited; ;San Diego=DXF001343",
          },
          {
            id: "Kelly Psychiatric Associates; ;Manhattan Beach=DXF000777",
            label: "Kelly Psychiatric Associates; ;Manhattan Beach=DXF000777",
          },
          {
            id: "Kenady LLC; ;Lake Forest=DXF004532",
            label: "Kenady LLC; ;Lake Forest=DXF004532",
          },
          {
            id: "Kenai River Holdings, LLC; ;Livermore=DXF004906",
            label: "Kenai River Holdings, LLC; ;Livermore=DXF004906",
          },
          {
            id: "Kenneth Stevens MD; ;San Luis Obispo=DXF000268",
            label: "Kenneth Stevens MD; ;San Luis Obispo=DXF000268",
          },
          {
            id: "Kent A. Feldman, DPM; ;San Diego=DXF001377",
            label: "Kent A. Feldman, DPM; ;San Diego=DXF001377",
          },
          {
            id: "Kern Behavioral Health and Recovery Services; ;Bakersfield=DXF002356",
            label:
              "Kern Behavioral Health and Recovery Services; ;Bakersfield=DXF002356",
          },
          {
            id: "Kern County Hospital Authority; ;Bakersfield=DXF002589",
            label: "Kern County Hospital Authority; ;Bakersfield=DXF002589",
          },
          {
            id: "Kern County Public Health; ;Bakersfield=DXF005111",
            label: "Kern County Public Health; ;Bakersfield=DXF005111",
          },
          {
            id: "Kern Health Systems; ;Bakersfield=DXF000133",
            label: "Kern Health Systems; ;Bakersfield=DXF000133",
          },
          {
            id: "Kern Psychiatric Health and Wellness Center, Inc.; ;Bakersfield=DXF005083",
            label:
              "Kern Psychiatric Health and Wellness Center, Inc.; ;Bakersfield=DXF005083",
          },
          {
            id: "Kern Valley Healthcare District; ;Lake Isabella`=DXF000867",
            label: "Kern Valley Healthcare District; ;Lake Isabella`=DXF000867",
          },
          {
            id: "Kevin Khai Tieu, MD, PC; ;Fountain Valley=DXF004513",
            label: "Kevin Khai Tieu, MD, PC; ;Fountain Valley=DXF004513",
          },
          {
            id: "Key Medical Group; ;Visalia=DXF000891",
            label: "Key Medical Group; ;Visalia=DXF000891",
          },
          {
            id: "Kharis Powell, Ph.D.; ;Lodi=DXF004913",
            label: "Kharis Powell, Ph.D.; ;Lodi=DXF004913",
          },
          {
            id: "Khurram Abbass MD INC; ;San Jose=DXF001082",
            label: "Khurram Abbass MD INC; ;San Jose=DXF001082",
          },
          {
            id: "Kids Care Pediatrics Medical Group Inc; ;Anaheim=DXF004499",
            label: "Kids Care Pediatrics Medical Group Inc; ;Anaheim=DXF004499",
          },
          {
            id: "Kids Health First Pediatrics Inc.; ;La Quinta=DXF001314",
            label: "Kids Health First Pediatrics Inc.; ;La Quinta=DXF001314",
          },
          {
            id: "Kimberly S Klausner, MD; ;Los Angeles=DXF003968",
            label: "Kimberly S Klausner, MD; ;Los Angeles=DXF003968",
          },
          {
            id: "Kindred Healthcare Operating, LLC; ;Louisville=DXF001710",
            label: "Kindred Healthcare Operating, LLC; ;Louisville=DXF001710",
          },
          {
            id: "Kindred Healthcare Operating, LLC;KND Development 54, LLC d/b/a Kindred Hospital Riverside;Louisville=DXF001759",
            label:
              "Kindred Healthcare Operating, LLC;KND Development 54, LLC d/b/a Kindred Hospital Riverside;Louisville=DXF001759",
          },
          {
            id: "Kindred Healthcare Operating, LLC;KND Development 55, LLC d/b/a/ Kindred Hospital Rancho;Louisville=DXF001762",
            label:
              "Kindred Healthcare Operating, LLC;KND Development 55, LLC d/b/a/ Kindred Hospital Rancho;Louisville=DXF001762",
          },
          {
            id: "Kindred Healthcare Operating, LLC;THC - Orange County, LLC d/b/a Kindred Hospital - San Francisco Bay Area;Louisville=DXF001768",
            label:
              "Kindred Healthcare Operating, LLC;THC - Orange County, LLC d/b/a Kindred Hospital - San Francisco Bay Area;Louisville=DXF001768",
          },
          {
            id: "Kindred Healthcare Operating, LLC;THC - Orange County, LLC d/b/a Kindred Hospital - Brea;Louisville=DXF001776",
            label:
              "Kindred Healthcare Operating, LLC;THC - Orange County, LLC d/b/a Kindred Hospital - Brea;Louisville=DXF001776",
          },
          {
            id: "Kindred Healthcare Operating, LLC;KND Real Estate 40, LLC d/b/a Kindred Hospital Paramount;Louisville=DXF001780",
            label:
              "Kindred Healthcare Operating, LLC;KND Real Estate 40, LLC d/b/a Kindred Hospital Paramount;Louisville=DXF001780",
          },
          {
            id: "Kindred Healthcare Operating, LLC;KND Development 52, LLC d/b/a Kindred Hospital Baldwin Park;Louisville=DXF001783",
            label:
              "Kindred Healthcare Operating, LLC;KND Development 52, LLC d/b/a Kindred Hospital Baldwin Park;Louisville=DXF001783",
          },
          {
            id: "Kindred Healthcare Operating, LLC;KND Development 53, LLC d/b/a Kindred Hospital South Bay;Louisville=DXF001789",
            label:
              "Kindred Healthcare Operating, LLC;KND Development 53, LLC d/b/a Kindred Hospital South Bay;Louisville=DXF001789",
          },
          {
            id: "Kindred Healthcare Operating, LLC;Southern California Specialty Care, LLC d/b/a Kindred Hospital - La Mirada;Louisville=DXF001790",
            label:
              "Kindred Healthcare Operating, LLC;Southern California Specialty Care, LLC d/b/a Kindred Hospital - La Mirada;Louisville=DXF001790",
          },
          {
            id: "Kindred Healthcare Operating, LLC;Southern California Specialty Care, LLC d/b/a Kindred Hospital - San Gabriel Valley;Louisville=DXF001791",
            label:
              "Kindred Healthcare Operating, LLC;Southern California Specialty Care, LLC d/b/a Kindred Hospital - San Gabriel Valley;Louisville=DXF001791",
          },
          {
            id: "Kindred Healthcare Operating, LLC;Southern California Specialty Care, LLC d/b/a Kindred Hospital - Santa Ana;Louisville=DXF001792",
            label:
              "Kindred Healthcare Operating, LLC;Southern California Specialty Care, LLC d/b/a Kindred Hospital - Santa Ana;Louisville=DXF001792",
          },
          {
            id: "Kindred Healthcare Operating, LLC;THC - Orange County, LLC d/b/a Kindred Hospital Westminster;Louisville=DXF001793",
            label:
              "Kindred Healthcare Operating, LLC;THC - Orange County, LLC d/b/a Kindred Hospital Westminster;Louisville=DXF001793",
          },
          {
            id: "Kindred Healthcare Operating, LLC;THC - Orange County, LLC d/b/a Kindred Hospital - San Diego;Louisville=DXF001794",
            label:
              "Kindred Healthcare Operating, LLC;THC - Orange County, LLC d/b/a Kindred Hospital - San Diego;Louisville=DXF001794",
          },
          {
            id: "Kindred Healthcare Operating, LLC;THC - Orange County, LLC d/b/a Kindred Hospital - Los Angeles;Louisville=DXF001796",
            label:
              "Kindred Healthcare Operating, LLC;THC - Orange County, LLC d/b/a Kindred Hospital - Los Angeles;Louisville=DXF001796",
          },
          {
            id: "Kindred Healthcare Operating, LLC;THC - Orange County, LLC d/b/a Kindred Hospital - Ontario;Louisville=DXF001797",
            label:
              "Kindred Healthcare Operating, LLC;THC - Orange County, LLC d/b/a Kindred Hospital - Ontario;Louisville=DXF001797",
          },
          {
            id: "Kindred Hospice, Inc; ;Pacoima=DXF004606",
            label: "Kindred Hospice, Inc; ;Pacoima=DXF004606",
          },
          {
            id: "King-American Ambulance; ;San Francisco=DXF004304",
            label: "King-American Ambulance; ;San Francisco=DXF004304",
          },
          {
            id: "Kings County Behavioral Health; ;Hanford=DXF002462",
            label: "Kings County Behavioral Health; ;Hanford=DXF002462",
          },
          {
            id: "Kings Medical Group PC; ;Hanford=DXF004345",
            label: "Kings Medical Group PC; ;Hanford=DXF004345",
          },
          {
            id: "Kings View; ;Fresno=DXF002952",
            label: "Kings View; ;Fresno=DXF002952",
          },
          {
            id: "Kishore B. Narra,M.D.; ;Fremont=DXF004652",
            label: "Kishore B. Narra,M.D.; ;Fremont=DXF004652",
          },
          {
            id: "Kit Carson Nursing and Rehabilitation Center, LLC; ;Jackson=DXF004805",
            label:
              "Kit Carson Nursing and Rehabilitation Center, LLC; ;Jackson=DXF004805",
          },
          {
            id: "KMD, LP San Marino in the Desert; ;Studio City=DXF004601",
            label: "KMD, LP San Marino in the Desert; ;Studio City=DXF004601",
          },
          {
            id: "Koinonia Family Services; ;Loomis=DXF002710",
            label: "Koinonia Family Services; ;Loomis=DXF002710",
          },
          {
            id: "Korean American Medical Group, Inc.; ;Cypress=DXF004838",
            label: "Korean American Medical Group, Inc.; ;Cypress=DXF004838",
          },
          {
            id: "Korean Health, Education, Information and Research Center; ;Los Angeles=DXF001423",
            label:
              "Korean Health, Education, Information and Research Center; ;Los Angeles=DXF001423",
          },
          {
            id: "Korean Health, Education, Information and Research Center;Kheir Wilshire Clinic;Los Angeles=DXF001426",
            label:
              "Korean Health, Education, Information and Research Center;Kheir Wilshire Clinic;Los Angeles=DXF001426",
          },
          {
            id: "Korean Health, Education, Information and Research Center;Kheir Clinic;Los Angeles=DXF001427",
            label:
              "Korean Health, Education, Information and Research Center;Kheir Clinic;Los Angeles=DXF001427",
          },
          {
            id: "Korean Health, Education, Information and Research Center;Kheir Wilshire Clinic Suite 100;Los Angeles=DXF001428",
            label:
              "Korean Health, Education, Information and Research Center;Kheir Wilshire Clinic Suite 100;Los Angeles=DXF001428",
          },
          {
            id: "Korean Health, Education, Information and Research Center;Kheir Family and Pediatric Clinic;Los Angeles=DXF001429",
            label:
              "Korean Health, Education, Information and Research Center;Kheir Family and Pediatric Clinic;Los Angeles=DXF001429",
          },
          {
            id: "Korean Health, Education, Information and Research Center;Kheir Clinic-Dental & Optometry;Los Angeles=DXF001442",
            label:
              "Korean Health, Education, Information and Research Center;Kheir Clinic-Dental & Optometry;Los Angeles=DXF001442",
          },
          {
            id: "Korean Health, Education, Information and Research Center;Kheir Mirae Adult Day Health Care Center;Los Angeles=DXF001443",
            label:
              "Korean Health, Education, Information and Research Center;Kheir Mirae Adult Day Health Care Center;Los Angeles=DXF001443",
          },
          {
            id: "Korean Health, Education, Information and Research Center;KHEIR ADHC CENTER-VERMONT;Los Angeles=DXF001444",
            label:
              "Korean Health, Education, Information and Research Center;KHEIR ADHC CENTER-VERMONT;Los Angeles=DXF001444",
          },
          {
            id: "Koreatown Youth and Community Center; ;Los Angeles=DXF002797",
            label:
              "Koreatown Youth and Community Center; ;Los Angeles=DXF002797",
          },
          {
            id: "Koreatown Youth and Community Center, Inc.; ;Los Angeles=DXF002796",
            label:
              "Koreatown Youth and Community Center, Inc.; ;Los Angeles=DXF002796",
          },
          {
            id: "KPC Biotech Inc; ;Hemet=DXF004667",
            label: "KPC Biotech Inc; ;Hemet=DXF004667",
          },
          {
            id: "KPC Global Medical Centers Inc; ;Corona=DXF004056",
            label: "KPC Global Medical Centers Inc; ;Corona=DXF004056",
          },
          {
            id: "KPC Global Medical Centers Inc;Hemet Global Medical Center;Hemet=DXF004059",
            label:
              "KPC Global Medical Centers Inc;Hemet Global Medical Center;Hemet=DXF004059",
          },
          {
            id: "KPC Global Medical Centers Inc;Hemet Global Medical Center- Sub acute unit;Hemet=DXF004060",
            label:
              "KPC Global Medical Centers Inc;Hemet Global Medical Center- Sub acute unit;Hemet=DXF004060",
          },
          {
            id: "KPC Global Medical Centers Inc;Hemet Global Medical Center Hospital Laboratory;Hemet=DXF004061",
            label:
              "KPC Global Medical Centers Inc;Hemet Global Medical Center Hospital Laboratory;Hemet=DXF004061",
          },
          {
            id: "KPC Global Medical Centers Inc;Menifee Global Medical Center;Menifee,=DXF004063",
            label:
              "KPC Global Medical Centers Inc;Menifee Global Medical Center;Menifee,=DXF004063",
          },
          {
            id: "KPC Global Medical Centers Inc;Menifee Global Medical Center Hospital Laborartory;Menifee,=DXF004064",
            label:
              "KPC Global Medical Centers Inc;Menifee Global Medical Center Hospital Laborartory;Menifee,=DXF004064",
          },
          {
            id: "KPC Global Medical Centers Inc;Hemet Valley Recovery Center & Sage Retreat;Hemet=DXF004067",
            label:
              "KPC Global Medical Centers Inc;Hemet Valley Recovery Center & Sage Retreat;Hemet=DXF004067",
          },
          {
            id: "KPC Global Medical Centers Inc;Hemet Valley HealthCare Center;Hemet=DXF004068",
            label:
              "KPC Global Medical Centers Inc;Hemet Valley HealthCare Center;Hemet=DXF004068",
          },
          {
            id: "Krista Care LLC; ;Arcadia=DXF002768",
            label: "Krista Care LLC; ;Arcadia=DXF002768",
          },
          {
            id: "Kristina Hobson MD Inc; ;Los Gatos=DXF001496",
            label: "Kristina Hobson MD Inc; ;Los Gatos=DXF001496",
          },
          {
            id: "KSK Medical; ;Ievine=DXF000202",
            label: "KSK Medical; ;Ievine=DXF000202",
          },
          {
            id: "KSK Medical;Kenneth M Tokita MD INC;Irvine=DXF000203",
            label: "KSK Medical;Kenneth M Tokita MD INC;Irvine=DXF000203",
          },
          {
            id: "KSK Medical;Procedure Center of Irvine;Irvine=DXF000204",
            label: "KSK Medical;Procedure Center of Irvine;Irvine=DXF000204",
          },
          {
            id: "KSK Medical;Imaging Center of Irvine;Irvine=DXF000205",
            label: "KSK Medical;Imaging Center of Irvine;Irvine=DXF000205",
          },
          {
            id: "KTLA Properties Limited Partnership d/b/a Alamitos West Health & Rehabilitation; ;Chaska=DXF003588",
            label:
              "KTLA Properties Limited Partnership d/b/a Alamitos West Health & Rehabilitation; ;Chaska=DXF003588",
          },
          {
            id: "Kumara Prathipati MD. INC; ;San Diego=DXF002244",
            label: "Kumara Prathipati MD. INC; ;San Diego=DXF002244",
          },
          {
            id: "Kyle Ragins, MD & Isabel Chen, MD; ;Manhattan Beach=DXF003237",
            label:
              "Kyle Ragins, MD & Isabel Chen, MD; ;Manhattan Beach=DXF003237",
          },
          {
            id: "La Brea Rehabilitation; ;Los Angeles=DXF003507",
            label: "La Brea Rehabilitation; ;Los Angeles=DXF003507",
          },
          {
            id: "LA Care Health Plan; ;Los Angeles=DXF001219",
            label: "LA Care Health Plan; ;Los Angeles=DXF001219",
          },
          {
            id: "La Clinica de La Raza; ;Oakland=DXF003023",
            label: "La Clinica de La Raza; ;Oakland=DXF003023",
          },
          {
            id: "LA EYE CENTER & CLINIC; ;Los Angeles=DXF001189",
            label: "LA EYE CENTER & CLINIC; ;Los Angeles=DXF001189",
          },
          {
            id: "LA Jewish Health; ;reseda=DXF004438",
            label: "LA Jewish Health; ;reseda=DXF004438",
          },
          {
            id: "La Jolla Cove Holdings, LLC; ;Livermore=DXF004905",
            label: "La Jolla Cove Holdings, LLC; ;Livermore=DXF004905",
          },
          {
            id: "La Luz Center; ;Sonoma=DXF003984",
            label: "La Luz Center; ;Sonoma=DXF003984",
          },
          {
            id: "La Maestra Community Health Centers; ;San Diego=DXF002625",
            label: "La Maestra Community Health Centers; ;San Diego=DXF002625",
          },
          {
            id: "LA Pain; ;Los Angeles=DXF004217",
            label: "LA Pain; ;Los Angeles=DXF004217",
          },
          {
            id: "La Palma Nursing Center; ;Anaheim=DXF004038",
            label: "La Palma Nursing Center; ;Anaheim=DXF004038",
          },
          {
            id: "La Peer Pediatrics; ;Beverly Hills=DXF003997",
            label: "La Peer Pediatrics; ;Beverly Hills=DXF003997",
          },
          {
            id: "La Puente Adult Day Health Care; ;La Puente=DXF003648",
            label: "La Puente Adult Day Health Care; ;La Puente=DXF003648",
          },
          {
            id: "Lab24 LLC; ;Redding=DXF004717",
            label: "Lab24 LLC; ;Redding=DXF004717",
          },
          {
            id: "LAB24, LLC; ;Redding=DXF004743",
            label: "LAB24, LLC; ;Redding=DXF004743",
          },
          {
            id: "Laboratory Corporation of America Holdings; ;Burlington=DXF004047",
            label:
              "Laboratory Corporation of America Holdings; ;Burlington=DXF004047",
          },
          {
            id: "Laboratory Corporation of America Holdings;Dianon Systems Inc;Shelton=DXF004101",
            label:
              "Laboratory Corporation of America Holdings;Dianon Systems Inc;Shelton=DXF004101",
          },
          {
            id: "Laboratory Corporation of America Holdings;Dianon Systems Inc Oklahoma City;Oklahoma City=DXF004103",
            label:
              "Laboratory Corporation of America Holdings;Dianon Systems Inc Oklahoma City;Oklahoma City=DXF004103",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;West Hills=DXF004104",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;West Hills=DXF004104",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;Vallejo=DXF004105",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;Vallejo=DXF004105",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;Aurora=DXF004106",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;Aurora=DXF004106",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;Burlington=DXF004107",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;Burlington=DXF004107",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;RTP=DXF004109",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;RTP=DXF004109",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;RTP=DXF004110",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;RTP=DXF004110",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;RTP=DXF004112",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;RTP=DXF004112",
          },
          {
            id: "Laboratory Corporation of America Holdings;Labcorp of America Holdings;Cary=DXF004113",
            label:
              "Laboratory Corporation of America Holdings;Labcorp of America Holdings;Cary=DXF004113",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;Chapel Hill=DXF004115",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America Holdings;Chapel Hill=DXF004115",
          },
          {
            id: "Laboratory Corporation of America Holdings;Labcorp of America Holdings;Cary=DXF004118",
            label:
              "Laboratory Corporation of America Holdings;Labcorp of America Holdings;Cary=DXF004118",
          },
          {
            id: "Laboratory Corporation of America Holdings;Esoterix Inc;Englewood=DXF004119",
            label:
              "Laboratory Corporation of America Holdings;Esoterix Inc;Englewood=DXF004119",
          },
          {
            id: "Laboratory Corporation of America Holdings;Litholink Corporation;Itasca=DXF004120",
            label:
              "Laboratory Corporation of America Holdings;Litholink Corporation;Itasca=DXF004120",
          },
          {
            id: "Laboratory Corporation of America Holdings;Center for Disease Detection LLC;San Antonio=DXF004121",
            label:
              "Laboratory Corporation of America Holdings;Center for Disease Detection LLC;San Antonio=DXF004121",
          },
          {
            id: "Laboratory Corporation of America Holdings;Sequenom Ctr for Molecular Medicine;San Diego=DXF004122",
            label:
              "Laboratory Corporation of America Holdings;Sequenom Ctr for Molecular Medicine;San Diego=DXF004122",
          },
          {
            id: "Laboratory Corporation of America Holdings;Personal Genome Diagnostics Inc;Baltimore=DXF004123",
            label:
              "Laboratory Corporation of America Holdings;Personal Genome Diagnostics Inc;Baltimore=DXF004123",
          },
          {
            id: "Laboratory Corporation of America Holdings;Esoterix Genetic Laboratories LLC;Newport Coast=DXF004131",
            label:
              "Laboratory Corporation of America Holdings;Esoterix Genetic Laboratories LLC;Newport Coast=DXF004131",
          },
          {
            id: "Laboratory Corporation of America Holdings;Esoterix Genetic Laboratories;Shelton=DXF004132",
            label:
              "Laboratory Corporation of America Holdings;Esoterix Genetic Laboratories;Shelton=DXF004132",
          },
          {
            id: "Laboratory Corporation of America Holdings;Esoterix Genetic Laboratories LLC Westborough;Westborough=DXF004133",
            label:
              "Laboratory Corporation of America Holdings;Esoterix Genetic Laboratories LLC Westborough;Westborough=DXF004133",
          },
          {
            id: "Laboratory Corporation of America Holdings;Esoterix Genetic Laboratories LLC Santa Fe;Santa Fe=DXF004134",
            label:
              "Laboratory Corporation of America Holdings;Esoterix Genetic Laboratories LLC Santa Fe;Santa Fe=DXF004134",
          },
          {
            id: "Laboratory Corporation of America Holdings;Esoterix Genetic Laboratory;New york=DXF004135",
            label:
              "Laboratory Corporation of America Holdings;Esoterix Genetic Laboratory;New york=DXF004135",
          },
          {
            id: "Laboratory Corporation of America Holdings;Accupath Diagnostic Laboratories Inc;Phoenix=DXF004136",
            label:
              "Laboratory Corporation of America Holdings;Accupath Diagnostic Laboratories Inc;Phoenix=DXF004136",
          },
          {
            id: "Laboratory Corporation of America Holdings;Accupath Diagnostic Laboratories Inc;Brentwood=DXF004137",
            label:
              "Laboratory Corporation of America Holdings;Accupath Diagnostic Laboratories Inc;Brentwood=DXF004137",
          },
          {
            id: "Laboratory Corporation of America Holdings;ViroMed Laboratories Inc;Burlington=DXF004138",
            label:
              "Laboratory Corporation of America Holdings;ViroMed Laboratories Inc;Burlington=DXF004138",
          },
          {
            id: "Laboratory Corporation of America Holdings;Medical Neurogenetic LLC;Atlanta=DXF004139",
            label:
              "Laboratory Corporation of America Holdings;Medical Neurogenetic LLC;Atlanta=DXF004139",
          },
          {
            id: "Laboratory Corporation of America Holdings;Medtox Laboratories Inc;Saint Paul=DXF004140",
            label:
              "Laboratory Corporation of America Holdings;Medtox Laboratories Inc;Saint Paul=DXF004140",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Phoenix=DXF004141",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Phoenix=DXF004141",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Riverside=DXF004142",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Riverside=DXF004142",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Monrovia=DXF004143",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Monrovia=DXF004143",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Los Angeles=DXF004144",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Los Angeles=DXF004144",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Los Angeles=DXF004145",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Los Angeles=DXF004145",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Walnut Creek=DXF004146",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Walnut Creek=DXF004146",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Itasca=DXF004147",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Itasca=DXF004147",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;San Antonio=DXF004148",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;San Antonio=DXF004148",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Seattle=DXF004149",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Seattle=DXF004149",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Mount Vernon=DXF004150",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Mount Vernon=DXF004150",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Spokane=DXF004151",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Spokane=DXF004151",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America;Spokane=DXF004152",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America;Spokane=DXF004152",
          },
          {
            id: "Laboratory Corporation of America Holdings;Monogram Biosciences Inc;SOUTH SAN FRANCISCO=DXF004153",
            label:
              "Laboratory Corporation of America Holdings;Monogram Biosciences Inc;SOUTH SAN FRANCISCO=DXF004153",
          },
          {
            id: "Laboratory Corporation of America Holdings;Monogram Biosciences Inc;SOUTH SAN FRANCISCO=DXF004154",
            label:
              "Laboratory Corporation of America Holdings;Monogram Biosciences Inc;SOUTH SAN FRANCISCO=DXF004154",
          },
          {
            id: "Laboratory Corporation of America Holdings;National Genetics Institute;Los Angeles=DXF004155",
            label:
              "Laboratory Corporation of America Holdings;National Genetics Institute;Los Angeles=DXF004155",
          },
          {
            id: "Laboratory Corporation of America Holdings;National Genetics Institute;Los Angeles=DXF004156",
            label:
              "Laboratory Corporation of America Holdings;National Genetics Institute;Los Angeles=DXF004156",
          },
          {
            id: "Laboratory Corporation of America Holdings;Esoterix Inc;Calabasas Hills=DXF004170",
            label:
              "Laboratory Corporation of America Holdings;Esoterix Inc;Calabasas Hills=DXF004170",
          },
          {
            id: "Laboratory Corporation of America Holdings;Esoterix Genetic Laboratories LLC Santa Fe;Santa Fe=DXF004171",
            label:
              "Laboratory Corporation of America Holdings;Esoterix Genetic Laboratories LLC Santa Fe;Santa Fe=DXF004171",
          },
          {
            id: "Laboratory Corporation of America Holdings;Medtox Laboratories Inc;Saint Paul=DXF004172",
            label:
              "Laboratory Corporation of America Holdings;Medtox Laboratories Inc;Saint Paul=DXF004172",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;San Diego=DXF004173",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;San Diego=DXF004173",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;San Diego=DXF004174",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;San Diego=DXF004174",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Tustin=DXF004175",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;Tustin=DXF004175",
          },
          {
            id: "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;San Leandro=DXF004176",
            label:
              "Laboratory Corporation of America Holdings;Laboratory Corporation of America LLC;San Leandro=DXF004176",
          },
          {
            id: "Laguna Beach Community Clinic, Inc.; ;Laguna Beach=DXF000928",
            label:
              "Laguna Beach Community Clinic, Inc.; ;Laguna Beach=DXF000928",
          },
          {
            id: "Lake Balboa Health Care, Inc.; ;Van Nuys=DXF005037",
            label: "Lake Balboa Health Care, Inc.; ;Van Nuys=DXF005037",
          },
          {
            id: "Lake County Behavioral Health Services; ;Lucerne=DXF004333",
            label: "Lake County Behavioral Health Services; ;Lucerne=DXF004333",
          },
          {
            id: "Lake County Fire Protection District; ;Clearlake=DXF004251",
            label: "Lake County Fire Protection District; ;Clearlake=DXF004251",
          },
          {
            id: "Lake Elsinore Clinica Medica Familiar; ;Lake Elsinore=DXF002073",
            label:
              "Lake Elsinore Clinica Medica Familiar; ;Lake Elsinore=DXF002073",
          },
          {
            id: "Lake Elsinore Clinica Medica Familiar;PERRIS VALLEY PHYSICIANS ASSOCIATES;perris=DXF002079",
            label:
              "Lake Elsinore Clinica Medica Familiar;PERRIS VALLEY PHYSICIANS ASSOCIATES;perris=DXF002079",
          },
          {
            id: "Lake Elsinore Clinica Medica Familiar;Hesperia Clinica Medica Familiar;Hesperia=DXF002083",
            label:
              "Lake Elsinore Clinica Medica Familiar;Hesperia Clinica Medica Familiar;Hesperia=DXF002083",
          },
          {
            id: "Lake Elsinore Clinica Medica Familiar;COLTON CLINICA MEDICA FAMILIAR;Colton=DXF002085",
            label:
              "Lake Elsinore Clinica Medica Familiar;COLTON CLINICA MEDICA FAMILIAR;Colton=DXF002085",
          },
          {
            id: "Lake Elsinore Clinica Medica Familiar;BEAR VALLEY CLINICA MEDICA FAMILIAR;victorville=DXF002088",
            label:
              "Lake Elsinore Clinica Medica Familiar;BEAR VALLEY CLINICA MEDICA FAMILIAR;victorville=DXF002088",
          },
          {
            id: "Lake Health District; ;Lakeview=DXF004583",
            label: "Lake Health District; ;Lakeview=DXF004583",
          },
          {
            id: "Lakeview Terrace Skilled Nursing Facility; ;Los Angeles=DXF003528",
            label:
              "Lakeview Terrace Skilled Nursing Facility; ;Los Angeles=DXF003528",
          },
          {
            id: "Lakewood Healthcare Center; ;Downey=DXF005501",
            label: "Lakewood Healthcare Center; ;Downey=DXF005501",
          },
          {
            id: "Lance Steinberg MD Inc; ;Calabasas=DXF000962",
            label: "Lance Steinberg MD Inc; ;Calabasas=DXF000962",
          },
          {
            id: "Landmark Healthplan of California, Inc.; ;Westlake Village=DXF002687",
            label:
              "Landmark Healthplan of California, Inc.; ;Westlake Village=DXF002687",
          },
          {
            id: "Landmark Medical Center; ;Pomona=DXF002770",
            label: "Landmark Medical Center; ;Pomona=DXF002770",
          },
          {
            id: "Landmark Medical of California, PC; ;Huntington Beach=DXF003219",
            label:
              "Landmark Medical of California, PC; ;Huntington Beach=DXF003219",
          },
          {
            id: "LaPortaCare; ;CUPERTINO=DXF003992",
            label: "LaPortaCare; ;CUPERTINO=DXF003992",
          },
          {
            id: "Larchmont Pediatrics; ;Los Angeles=DXF003994",
            label: "Larchmont Pediatrics; ;Los Angeles=DXF003994",
          },
          {
            id: "LAS AMERICAS MEDICAL CLINIC; ;arleta=DXF005315",
            label: "LAS AMERICAS MEDICAL CLINIC; ;arleta=DXF005315",
          },
          {
            id: "Las Flores Conv Hospital; ;Gardena=DXF001988",
            label: "Las Flores Conv Hospital; ;Gardena=DXF001988",
          },
          {
            id: "LaSalle Medical Associates; ;Redlands=DXF001361",
            label: "LaSalle Medical Associates; ;Redlands=DXF001361",
          },
          {
            id: "Laser Eye Care of California, LLC; ;ALISO VIEJO=DXF000110",
            label: "Laser Eye Care of California, LLC; ;ALISO VIEJO=DXF000110",
          },
          {
            id: "Laser Eye Care of California, LLC;Thomas S. Tooma, M.D., a Professional Corporation;ALISO VIEJO=DXF000113",
            label:
              "Laser Eye Care of California, LLC;Thomas S. Tooma, M.D., a Professional Corporation;ALISO VIEJO=DXF000113",
          },
          {
            id: "Laser Eye Care of California, LLC;Alvarado Eye Associates Medical Clinic, Inc.;ALISO VIEJO=DXF000114",
            label:
              "Laser Eye Care of California, LLC;Alvarado Eye Associates Medical Clinic, Inc.;ALISO VIEJO=DXF000114",
          },
          {
            id: "Laser Eye Care of California, LLC;H Douglas Cooper MD, Inc.;ALISO VIEJO=DXF000115",
            label:
              "Laser Eye Care of California, LLC;H Douglas Cooper MD, Inc.;ALISO VIEJO=DXF000115",
          },
          {
            id: "Laser Eye Care of California, LLC;Clarity Eye Group;ALISO VIEJO=DXF000116",
            label:
              "Laser Eye Care of California, LLC;Clarity Eye Group;ALISO VIEJO=DXF000116",
          },
          {
            id: "Laser Eye Care of California, LLC;Sanford G. Feldman, M.D., Inc.;ALISO VIEJO=DXF000117",
            label:
              "Laser Eye Care of California, LLC;Sanford G. Feldman, M.D., Inc.;ALISO VIEJO=DXF000117",
          },
          {
            id: "Laser Eye Care of California, LLC;Jeffrey V. Winston, M.D., a Professional Corporation;ALISO VIEJO=DXF000118",
            label:
              "Laser Eye Care of California, LLC;Jeffrey V. Winston, M.D., a Professional Corporation;ALISO VIEJO=DXF000118",
          },
          {
            id: "Laser Eye Care of California, LLC;Gabriel Jacob, M.D., a Medical Corporation;ALISO VIEJO=DXF000119",
            label:
              "Laser Eye Care of California, LLC;Gabriel Jacob, M.D., a Medical Corporation;ALISO VIEJO=DXF000119",
          },
          {
            id: "Laser Eye Care of California, LLC;Luis A. Chanes, M.D., Inc. d/b/a Eye Associates of Orange County;ALISO VIEJO=DXF000120",
            label:
              "Laser Eye Care of California, LLC;Luis A. Chanes, M.D., Inc. d/b/a Eye Associates of Orange County;ALISO VIEJO=DXF000120",
          },
          {
            id: "Laser Eye Care of California, LLC;Auburn Eye Care Associates Optometry, a California Professional Optometric Corporation;ALISO VIEJO=DXF000121",
            label:
              "Laser Eye Care of California, LLC;Auburn Eye Care Associates Optometry, a California Professional Optometric Corporation;ALISO VIEJO=DXF000121",
          },
          {
            id: "Laser Eye Care of California, LLC;East-West Eye Institute, a Medical Corporation;ALISO VIEJO=DXF000122",
            label:
              "Laser Eye Care of California, LLC;East-West Eye Institute, a Medical Corporation;ALISO VIEJO=DXF000122",
          },
          {
            id: "Laser Eye Care of California, LLC;Miramar Eye Specialists Medical Group, Inc;ALISO VIEJO=DXF000123",
            label:
              "Laser Eye Care of California, LLC;Miramar Eye Specialists Medical Group, Inc;ALISO VIEJO=DXF000123",
          },
          {
            id: "Laser Eye Care of California, LLC;Meister Eye & Laser Center a Medical Group, Inc.;ALISO VIEJO=DXF000124",
            label:
              "Laser Eye Care of California, LLC;Meister Eye & Laser Center a Medical Group, Inc.;ALISO VIEJO=DXF000124",
          },
          {
            id: "Laser Eye Care of California, LLC;Colin B. Arnold, M.D., Inc.;ALISO VIEJO=DXF000125",
            label:
              "Laser Eye Care of California, LLC;Colin B. Arnold, M.D., Inc.;ALISO VIEJO=DXF000125",
          },
          {
            id: "Laser Eye Care of California, LLC;Bay Area Ophthalmic Medical Corp. d/b/a Turner Eye Institute;ALISO VIEJO=DXF000126",
            label:
              "Laser Eye Care of California, LLC;Bay Area Ophthalmic Medical Corp. d/b/a Turner Eye Institute;ALISO VIEJO=DXF000126",
          },
          {
            id: "Laser Eye Care of California, LLC;SALEHI RETINA INSTITUTE, INC. (CA PC) dba Retina Associates of Southern California;ALISO VIEJO=DXF000127",
            label:
              "Laser Eye Care of California, LLC;SALEHI RETINA INSTITUTE, INC. (CA PC) dba Retina Associates of Southern California;ALISO VIEJO=DXF000127",
          },
          {
            id: "Lassen County Behavioral Health; ;Lassen=DXF000661",
            label: "Lassen County Behavioral Health; ;Lassen=DXF000661",
          },
          {
            id: "Latara Enterprise Inc. dba Foundation Laboratory; ;Pomona=DXF004814",
            label:
              "Latara Enterprise Inc. dba Foundation Laboratory; ;Pomona=DXF004814",
          },
          {
            id: "Laura N. Petrovich; ;Coronado=DXF001819",
            label: "Laura N. Petrovich; ;Coronado=DXF001819",
          },
          {
            id: "LAUREL HEIGHTS COMMUNITY CARE; ;San Francisco=DXF005354",
            label: "LAUREL HEIGHTS COMMUNITY CARE; ;San Francisco=DXF005354",
          },
          {
            id: "Laurel Schramm MD; ;Los Angeles=DXF000131",
            label: "Laurel Schramm MD; ;Los Angeles=DXF000131",
          },
          {
            id: "Lavinia Chong, M.D., Inc.; ;Newport Beach=DXF000183",
            label: "Lavinia Chong, M.D., Inc.; ;Newport Beach=DXF000183",
          },
          {
            id: "Lawrence L Lin MD; ;Thousand Oaks=DXF001873",
            label: "Lawrence L Lin MD; ;Thousand Oaks=DXF001873",
          },
          {
            id: "Lawrence L Lin MD;Georgeanna J Huang MD;Thousand Oaks=DXF001874",
            label:
              "Lawrence L Lin MD;Georgeanna J Huang MD;Thousand Oaks=DXF001874",
          },
          {
            id: "Le Meilleur Health Care Services, Inc; ;Ontario=DXF004630",
            label: "Le Meilleur Health Care Services, Inc; ;Ontario=DXF004630",
          },
          {
            id: "LEGACY POST-ACUTE REHABILITATION CENTER; ;San Bernardino=DXF004996",
            label:
              "LEGACY POST-ACUTE REHABILITATION CENTER; ;San Bernardino=DXF004996",
          },
          {
            id: "Legal Aid of Sonoma County; ;Santa Rosa=DXF004006",
            label: "Legal Aid of Sonoma County; ;Santa Rosa=DXF004006",
          },
          {
            id: "Leisure Court Nursing Center; ;Anaheim=DXF002984",
            label: "Leisure Court Nursing Center; ;Anaheim=DXF002984",
          },
          {
            id: "Leomar Health Group, Inc.; ;Carlsbad=DXF003272",
            label: "Leomar Health Group, Inc.; ;Carlsbad=DXF003272",
          },
          {
            id: "Leslie Kaplan MD; ;Calabasas=DXF004208",
            label: "Leslie Kaplan MD; ;Calabasas=DXF004208",
          },
          {
            id: "Lestonnac Free Clinic; ;Orange=DXF004309",
            label: "Lestonnac Free Clinic; ;Orange=DXF004309",
          },
          {
            id: "Level Home Health, Inc; ;Pasadena=DXF003524",
            label: "Level Home Health, Inc; ;Pasadena=DXF003524",
          },
          {
            id: "Libertana; ;Sherman Oaks=DXF003578",
            label: "Libertana; ;Sherman Oaks=DXF003578",
          },
          {
            id: "Life Connect Medical; ;Rancho Mirage=DXF004539",
            label: "Life Connect Medical; ;Rancho Mirage=DXF004539",
          },
          {
            id: "LifeLine Ambulance Service; ;Commerce=DXF004250",
            label: "LifeLine Ambulance Service; ;Commerce=DXF004250",
          },
          {
            id: "LifeLong Medical Care; ;Berkely=DXF003284",
            label: "LifeLong Medical Care; ;Berkely=DXF003284",
          },
          {
            id: "LifeStart Fertility Center; ;Agoura Hills=DXF002283",
            label: "LifeStart Fertility Center; ;Agoura Hills=DXF002283",
          },
          {
            id: "Lifestyle Works, LLC; ;Cool=DXF003368",
            label: "Lifestyle Works, LLC; ;Cool=DXF003368",
          },
          {
            id: "LightHouse for the Blind and Visually Impaired; ;San Francisco=DXF003034",
            label:
              "LightHouse for the Blind and Visually Impaired; ;San Francisco=DXF003034",
          },
          {
            id: "LILY ENAYATI MD INC; ;San Mateo=DXF001602",
            label: "LILY ENAYATI MD INC; ;San Mateo=DXF001602",
          },
          {
            id: "LINA C SHAMMAS DO INC; ;Burbank=DXF000571",
            label: "LINA C SHAMMAS DO INC; ;Burbank=DXF000571",
          },
          {
            id: "Lincoln Glen Skilled Nursing; ;San Jose=DXF003015",
            label: "Lincoln Glen Skilled Nursing; ;San Jose=DXF003015",
          },
          {
            id: "Lisa Considine, D.O, Inc; ;Coronado=DXF001671",
            label: "Lisa Considine, D.O, Inc; ;Coronado=DXF001671",
          },
          {
            id: "Little Manila Foundation; ;Stockton=DXF004508",
            label: "Little Manila Foundation; ;Stockton=DXF004508",
          },
          {
            id: "Livingstone Community Health Clinic; ;Stanton=DXF000296",
            label: "Livingstone Community Health Clinic; ;Stanton=DXF000296",
          },
          {
            id: "Livingwater's Medical Clinic, Inc.; ;Murrieta=DXF002302",
            label: "Livingwater's Medical Clinic, Inc.; ;Murrieta=DXF002302",
          },
          {
            id: "Liza Presser Belkin, MD Inc.; ;Santa Barbara=DXF001098",
            label: "Liza Presser Belkin, MD Inc.; ;Santa Barbara=DXF001098",
          },
          {
            id: "LJMP, LP Capri in the Desert; ;Studio City=DXF004643",
            label: "LJMP, LP Capri in the Desert; ;Studio City=DXF004643",
          },
          {
            id: "LMDPR; ;marina del rey=DXF002401",
            label: "LMDPR; ;marina del rey=DXF002401",
          },
          {
            id: "LMS Physicians Care PC; ;Riverside=DXF000972",
            label: "LMS Physicians Care PC; ;Riverside=DXF000972",
          },
          {
            id: "Loan Truong, M.D., INC.; ;Long Beach=DXF001254",
            label: "Loan Truong, M.D., INC.; ;Long Beach=DXF001254",
          },
          {
            id: "Logan M Haak MD Inc; ;San Diego=DXF000151",
            label: "Logan M Haak MD Inc; ;San Diego=DXF000151",
          },
          {
            id: "Loida V Guevarra MD Inc; ;victorville=DXF000104",
            label: "Loida V Guevarra MD Inc; ;victorville=DXF000104",
          },
          {
            id: "Loma Vista Endocrinology, Inc.; ;ventura=DXF004984",
            label: "Loma Vista Endocrinology, Inc.; ;ventura=DXF004984",
          },
          {
            id: "Lomita Family Medical Group; ;San Diego=DXF001474",
            label: "Lomita Family Medical Group; ;San Diego=DXF001474",
          },
          {
            id: "Lompoc Valley Medical Center; ;Lompoc=DXF000050",
            label: "Lompoc Valley Medical Center; ;Lompoc=DXF000050",
          },
          {
            id: "Long Beach Post Acute; ;Long Beach=DXF002981",
            label: "Long Beach Post Acute; ;Long Beach=DXF002981",
          },
          {
            id: "Long Beach Women's & Children; ;Long Beach=DXF003982",
            label: "Long Beach Women's & Children; ;Long Beach=DXF003982",
          },
          {
            id: "Long Health Inc; ;San Jose=DXF002962",
            label: "Long Health Inc; ;San Jose=DXF002962",
          },
          {
            id: "Long Health Inc;Long Health Inc;San Jose=DXF003336",
            label: "Long Health Inc;Long Health Inc;San Jose=DXF003336",
          },
          {
            id: "Long Valley Health Center; ;Laytonville=DXF002898",
            label: "Long Valley Health Center; ;Laytonville=DXF002898",
          },
          {
            id: "Longwood Management Corp.; ;Los Angeles=DXF001512",
            label: "Longwood Management Corp.; ;Los Angeles=DXF001512",
          },
          {
            id: "Longwood Management Corp.;Alameda Care Center;Burbank=DXF001720",
            label:
              "Longwood Management Corp.;Alameda Care Center;Burbank=DXF001720",
          },
          {
            id: "Longwood Management Corp.;Alden Terrace Convalescent Hospital;Los Angeles=DXF001722",
            label:
              "Longwood Management Corp.;Alden Terrace Convalescent Hospital;Los Angeles=DXF001722",
          },
          {
            id: "Longwood Management Corp.;Broadway Manor Care Center;Glendale=DXF001725",
            label:
              "Longwood Management Corp.;Broadway Manor Care Center;Glendale=DXF001725",
          },
          {
            id: "Longwood Management Corp.;Burbank Healthcare and Rehabilitation Center;Burbank=DXF001726",
            label:
              "Longwood Management Corp.;Burbank Healthcare and Rehabilitation Center;Burbank=DXF001726",
          },
          {
            id: "Longwood Management Corp.;Burlington Convalescent Hospital;Los Angeles=DXF001727",
            label:
              "Longwood Management Corp.;Burlington Convalescent Hospital;Los Angeles=DXF001727",
          },
          {
            id: "Longwood Management Corp.;California Healthcare and Rehabilitation Center;Van Nuys=DXF001728",
            label:
              "Longwood Management Corp.;California Healthcare and Rehabilitation Center;Van Nuys=DXF001728",
          },
          {
            id: "Longwood Management Corp.;Casa Bonita Convalescent Hospital;San Dimas=DXF001729",
            label:
              "Longwood Management Corp.;Casa Bonita Convalescent Hospital;San Dimas=DXF001729",
          },
          {
            id: "Longwood Management Corp.;Cerritos Vista Healthcare Center;Bellflower=DXF001731",
            label:
              "Longwood Management Corp.;Cerritos Vista Healthcare Center;Bellflower=DXF001731",
          },
          {
            id: "Longwood Management Corp.;Chino Valley Healthcare Center;Pomona=DXF001732",
            label:
              "Longwood Management Corp.;Chino Valley Healthcare Center;Pomona=DXF001732",
          },
          {
            id: "Longwood Management Corp.;Colonial Care Center;Long Beach=DXF001734",
            label:
              "Longwood Management Corp.;Colonial Care Center;Long Beach=DXF001734",
          },
          {
            id: "Longwood Management Corp.;Covina Rehabilitation Center;Covina=DXF001735",
            label:
              "Longwood Management Corp.;Covina Rehabilitation Center;Covina=DXF001735",
          },
          {
            id: "Longwood Management Corp.;Crenshaw Nursing Home;Los Angeles=DXF001736",
            label:
              "Longwood Management Corp.;Crenshaw Nursing Home;Los Angeles=DXF001736",
          },
          {
            id: "Longwood Management Corp.;Eastland Subacute and Rehabilitation Center;El Monte=DXF001737",
            label:
              "Longwood Management Corp.;Eastland Subacute and Rehabilitation Center;El Monte=DXF001737",
          },
          {
            id: "Longwood Management Corp.;Green Acres Healthcare Center;Rosemead=DXF001738",
            label:
              "Longwood Management Corp.;Green Acres Healthcare Center;Rosemead=DXF001738",
          },
          {
            id: "Longwood Management Corp.;Highland Springs Care Center;Beaumont=DXF001739",
            label:
              "Longwood Management Corp.;Highland Springs Care Center;Beaumont=DXF001739",
          },
          {
            id: "Longwood Management Corp.;Imperial Care Center;Studio City=DXF001740",
            label:
              "Longwood Management Corp.;Imperial Care Center;Studio City=DXF001740",
          },
          {
            id: "Longwood Management Corp.;Imperial Crest Healthcare Center;HAWTHORNE=DXF001750",
            label:
              "Longwood Management Corp.;Imperial Crest Healthcare Center;HAWTHORNE=DXF001750",
          },
          {
            id: "Longwood Management Corp.;Intercommunity Health and Rehab;Norwalk=DXF001752",
            label:
              "Longwood Management Corp.;Intercommunity Health and Rehab;Norwalk=DXF001752",
          },
          {
            id: "Longwood Management Corp.;Laurel Convalescent Hospital;FONTANA=DXF001754",
            label:
              "Longwood Management Corp.;Laurel Convalescent Hospital;FONTANA=DXF001754",
          },
          {
            id: "Longwood Management Corp.;Live Oak Rehabilitation Center;San Gabriel=DXF001755",
            label:
              "Longwood Management Corp.;Live Oak Rehabilitation Center;San Gabriel=DXF001755",
          },
          {
            id: "Longwood Management Corp.;Longwood Manor Convalescent Hospital;Los Angeles=DXF001756",
            label:
              "Longwood Management Corp.;Longwood Manor Convalescent Hospital;Los Angeles=DXF001756",
          },
          {
            id: "Longwood Management Corp.;Magnolia Gardens Convalescent Hospital;Granada Hills=DXF001758",
            label:
              "Longwood Management Corp.;Magnolia Gardens Convalescent Hospital;Granada Hills=DXF001758",
          },
          {
            id: "Longwood Management Corp.;Mayflower Care Center;El Monte=DXF001760",
            label:
              "Longwood Management Corp.;Mayflower Care Center;El Monte=DXF001760",
          },
          {
            id: "Longwood Management Corp.;Meadows Ridge Care Center;Colton=DXF001761",
            label:
              "Longwood Management Corp.;Meadows Ridge Care Center;Colton=DXF001761",
          },
          {
            id: "Longwood Management Corp.;Montrose Healthcare Center;Montrose=DXF001763",
            label:
              "Longwood Management Corp.;Montrose Healthcare Center;Montrose=DXF001763",
          },
          {
            id: "Longwood Management Corp.;Northridge Care Center;Northridge=DXF001765",
            label:
              "Longwood Management Corp.;Northridge Care Center;Northridge=DXF001765",
          },
          {
            id: "Longwood Management Corp.;Park Anaheim Healthcare Center;Anaheim=DXF001766",
            label:
              "Longwood Management Corp.;Park Anaheim Healthcare Center;Anaheim=DXF001766",
          },
          {
            id: "Longwood Management Corp.;Pico Rivera Healthcare Center;Pico Rivera=DXF001767",
            label:
              "Longwood Management Corp.;Pico Rivera Healthcare Center;Pico Rivera=DXF001767",
          },
          {
            id: "Longwood Management Corp.;San Gabriel Convalescent;Rosemead=DXF001770",
            label:
              "Longwood Management Corp.;San Gabriel Convalescent;Rosemead=DXF001770",
          },
          {
            id: "Longwood Management Corp.;Santa Fe Lodge;El Monte=DXF001772",
            label:
              "Longwood Management Corp.;Santa Fe Lodge;El Monte=DXF001772",
          },
          {
            id: "Longwood Management Corp.;Whittier Pacific Care Center;Whittier=DXF001774",
            label:
              "Longwood Management Corp.;Whittier Pacific Care Center;Whittier=DXF001774",
          },
          {
            id: "Longwood Management Corp.;Sherman Oaks Health and Rehabilitation Center;Sherman Oaks=DXF001778",
            label:
              "Longwood Management Corp.;Sherman Oaks Health and Rehabilitation Center;Sherman Oaks=DXF001778",
          },
          {
            id: "Longwood Management Corp.;Sherman Village Healthcare Center;N. Hollywood=DXF001779",
            label:
              "Longwood Management Corp.;Sherman Village Healthcare Center;N. Hollywood=DXF001779",
          },
          {
            id: "Longwood Management Corp.;Studio City Rehabilitation Center;Studio City=DXF001781",
            label:
              "Longwood Management Corp.;Studio City Rehabilitation Center;Studio City=DXF001781",
          },
          {
            id: "Longwood Management Corp.;Sunnyview Care Center;Los Angeles=DXF001782",
            label:
              "Longwood Management Corp.;Sunnyview Care Center;Los Angeles=DXF001782",
          },
          {
            id: "Longwood Management Corp.;View Park Convalescent Center;Los Angeles=DXF001785",
            label:
              "Longwood Management Corp.;View Park Convalescent Center;Los Angeles=DXF001785",
          },
          {
            id: "Longwood Management Corp.;West Hills Health and Rehabilitation;Canoga Park=DXF001787",
            label:
              "Longwood Management Corp.;West Hills Health and Rehabilitation;Canoga Park=DXF001787",
          },
          {
            id: "Longwood Management Corp.;Western Convalescent Hospital;Los Angeles=DXF001788",
            label:
              "Longwood Management Corp.;Western Convalescent Hospital;Los Angeles=DXF001788",
          },
          {
            id: "Lori B. Birndorf, D.O., A Medical Corporation; ;Chatsworth=DXF001493",
            label:
              "Lori B. Birndorf, D.O., A Medical Corporation; ;Chatsworth=DXF001493",
          },
          {
            id: "Lori R Krieger MD INC; ;San Pedro=DXF004074",
            label: "Lori R Krieger MD INC; ;San Pedro=DXF004074",
          },
          {
            id: "Los Altos Subacute & Rehabilitation; ;Los Altos=DXF005139",
            label: "Los Altos Subacute & Rehabilitation; ;Los Altos=DXF005139",
          },
          {
            id: "Los Angeles Christian Health Centers; ;Los Angeles=DXF005575",
            label:
              "Los Angeles Christian Health Centers; ;Los Angeles=DXF005575",
          },
          {
            id: "Los Angeles Kidney Center; ;Los Angeles=DXF000213",
            label: "Los Angeles Kidney Center; ;Los Angeles=DXF000213",
          },
          {
            id: "Los Angeles LGBT Center; ;Los Angeles=DXF000581",
            label: "Los Angeles LGBT Center; ;Los Angeles=DXF000581",
          },
          {
            id: "Los Angeles Network for Enhanced Services (LANES); ;Los Angeles=DXF000079",
            label:
              "Los Angeles Network for Enhanced Services (LANES); ;Los Angeles=DXF000079",
          },
          {
            id: "Los Angeles Rehab; ;Los Angeles=DXF002036",
            label: "Los Angeles Rehab; ;Los Angeles=DXF002036",
          },
          {
            id: "LOS ANGELES REHABILITATION & WELLNESS CENTRE LP; ;Los Angeles=DXF005844",
            label:
              "LOS ANGELES REHABILITATION & WELLNESS CENTRE LP; ;Los Angeles=DXF005844",
          },
          {
            id: "Louise Cooley Davis, M.D.; ;Beverly Hills=DXF000387",
            label: "Louise Cooley Davis, M.D.; ;Beverly Hills=DXF000387",
          },
          {
            id: "Love Focus International Association; ;MERCED=DXF002612",
            label: "Love Focus International Association; ;MERCED=DXF002612",
          },
          {
            id: "LSS Nor Ca; ;Sacramento=DXF002916",
            label: "LSS Nor Ca; ;Sacramento=DXF002916",
          },
          {
            id: "Lucidity Sleep and Psychiatry; ;vista=DXF002491",
            label: "Lucidity Sleep and Psychiatry; ;vista=DXF002491",
          },
          {
            id: "Lucile Packard Children's Hospital Stanford; ;Palo Alto=DXF005055",
            label:
              "Lucile Packard Children's Hospital Stanford; ;Palo Alto=DXF005055",
          },
          {
            id: "Luis M. Marquez, MD, Inc; ;San Diego=DXF000515",
            label: "Luis M. Marquez, MD, Inc; ;San Diego=DXF000515",
          },
          {
            id: "Lumeris/Essence Healthcare; ;Maryland Heights=DXF001035",
            label: "Lumeris/Essence Healthcare; ;Maryland Heights=DXF001035",
          },
          {
            id: "Luther Mangoba MD INC; ;Riverside=DXF000931",
            label: "Luther Mangoba MD INC; ;Riverside=DXF000931",
          },
          {
            id: "Lutheran Social Services of Northern California; ;Concord=DXF002945",
            label:
              "Lutheran Social Services of Northern California; ;Concord=DXF002945",
          },
          {
            id: "Lutheran Social Services of Southern California; ;Orange=DXF002779",
            label:
              "Lutheran Social Services of Southern California; ;Orange=DXF002779",
          },
          {
            id: "Lutheran Social Services of Southern California; ;Orange=DXF003632",
            label:
              "Lutheran Social Services of Southern California; ;Orange=DXF003632",
          },
          {
            id: "M. Jammal, M.D. Pediatrics; ;Roseville=DXF000528",
            label: "M. Jammal, M.D. Pediatrics; ;Roseville=DXF000528",
          },
          {
            id: "M. Mark Mofid, M.D., A Professional Corporation; ;La Jolla=DXF001551",
            label:
              "M. Mark Mofid, M.D., A Professional Corporation; ;La Jolla=DXF001551",
          },
          {
            id: "M. Nieves Gutierrez-Go M.D. Inc.; ;Indio=DXF000658",
            label: "M. Nieves Gutierrez-Go M.D. Inc.; ;Indio=DXF000658",
          },
          {
            id: "M/S SURGERY CENTER; ;Lynwood=DXF005072",
            label: "M/S SURGERY CENTER; ;Lynwood=DXF005072",
          },
          {
            id: "Mad River Community Hospital; ;Arcata=DXF004511",
            label: "Mad River Community Hospital; ;Arcata=DXF004511",
          },
          {
            id: "Madera County Behavioral Health; ;Madera=DXF003203",
            label: "Madera County Behavioral Health; ;Madera=DXF003203",
          },
          {
            id: "Mahmoud Ibrahim, M.D.; ;Rancho Cucamonga=DXF002931",
            label: "Mahmoud Ibrahim, M.D.; ;Rancho Cucamonga=DXF002931",
          },
          {
            id: "Majid Shahbaz MD Inc.; ;La Mesa=DXF001507",
            label: "Majid Shahbaz MD Inc.; ;La Mesa=DXF001507",
          },
          {
            id: "Mallu C Reddy MD Inc; ;Pomona=DXF002951",
            label: "Mallu C Reddy MD Inc; ;Pomona=DXF002951",
          },
          {
            id: "Maltique LLC dba Sherwood Healthcare Center; ;Sacramento=DXF004744",
            label:
              "Maltique LLC dba Sherwood Healthcare Center; ;Sacramento=DXF004744",
          },
          {
            id: "mama baby obgyn inc; ;San Jose=DXF004402",
            label: "mama baby obgyn inc; ;San Jose=DXF004402",
          },
          {
            id: "Mammography Specialists, LG; ;Los Gatos=DXF004129",
            label: "Mammography Specialists, LG; ;Los Gatos=DXF004129",
          },
          {
            id: "Mammoth Hospital; ;Mammoth Lakes=DXF000374",
            label: "Mammoth Hospital; ;Mammoth Lakes=DXF000374",
          },
          {
            id: "Man C Duong, MD, APC; ;IMPERIAL=DXF004659",
            label: "Man C Duong, MD, APC; ;IMPERIAL=DXF004659",
          },
          {
            id: "Managed Health Network; ;San Rafael=DXF002765",
            label: "Managed Health Network; ;San Rafael=DXF002765",
          },
          {
            id: "Mandeep Ayer, M.D.; ;Los Gatos=DXF004484",
            label: "Mandeep Ayer, M.D.; ;Los Gatos=DXF004484",
          },
          {
            id: "Mangrove Medical Group; ;Chico=DXF001163",
            label: "Mangrove Medical Group; ;Chico=DXF001163",
          },
          {
            id: "Manifest MedEx; ;Incline Village=DXF000013",
            label: "Manifest MedEx; ;Incline Village=DXF000013",
          },
          {
            id: "Manikanda G Raja MD corp; ;Hemet=DXF001269",
            label: "Manikanda G Raja MD corp; ;Hemet=DXF001269",
          },
          {
            id: "MANJARI ARAVAMUTHAN,M.D.,P.C.; ;San Jose=DXF003636",
            label: "MANJARI ARAVAMUTHAN,M.D.,P.C.; ;San Jose=DXF003636",
          },
          {
            id: "Manjul Patwardhan MD Prof Corp; ;CUPERTINO=DXF003600",
            label: "Manjul Patwardhan MD Prof Corp; ;CUPERTINO=DXF003600",
          },
          {
            id: "Manning Gardens Care Center Inc; ;Fresno=DXF003503",
            label: "Manning Gardens Care Center Inc; ;Fresno=DXF003503",
          },
          {
            id: "Manorcare Fountain Valley; ;Fountain Valley=DXF005076",
            label: "Manorcare Fountain Valley; ;Fountain Valley=DXF005076",
          },
          {
            id: "ManorCare Health Services (Sunnyvale); ;Sunnyvale=DXF005068",
            label:
              "ManorCare Health Services (Sunnyvale); ;Sunnyvale=DXF005068",
          },
          {
            id: "Manorcare Health Services Palm Desert; ;Palm Desert=DXF005069",
            label:
              "Manorcare Health Services Palm Desert; ;Palm Desert=DXF005069",
          },
          {
            id: "ManorCare Healthservices - Hemet; ;Hemet=DXF005070",
            label: "ManorCare Healthservices - Hemet; ;Hemet=DXF005070",
          },
          {
            id: "Manual Orthopedic Physical Therapy Inc.; ;Chula Vista=DXF000383",
            label:
              "Manual Orthopedic Physical Therapy Inc.; ;Chula Vista=DXF000383",
          },
          {
            id: "Manual Orthopedic Physical Therapy Inc.;Bodywise Acupuncture & Total Wellness;Chula Vista=DXF000384",
            label:
              "Manual Orthopedic Physical Therapy Inc.;Bodywise Acupuncture & Total Wellness;Chula Vista=DXF000384",
          },
          {
            id: "Manzoor A. Kazi Medical Associates Inc.; ;Palm Desert=DXF000940",
            label:
              "Manzoor A. Kazi Medical Associates Inc.; ;Palm Desert=DXF000940",
          },
          {
            id: "Marcia Luisi MD; ;Santa Rosa=DXF000669",
            label: "Marcia Luisi MD; ;Santa Rosa=DXF000669",
          },
          {
            id: "Marcos Borrero MD Inc; ;San Diego=DXF000842",
            label: "Marcos Borrero MD Inc; ;San Diego=DXF000842",
          },
          {
            id: "Margaret Creek, LMFT 42815; ;San Juan Capistrano=DXF003653",
            label: "Margaret Creek, LMFT 42815; ;San Juan Capistrano=DXF003653",
          },
          {
            id: "Maria Geraldina Fuentes, MD Inc; ;Chula Vista=DXF001425",
            label: "Maria Geraldina Fuentes, MD Inc; ;Chula Vista=DXF001425",
          },
          {
            id: "Maria Lourdes S. Mara MD - A Medical Corp; ;San Diego=DXF001880",
            label:
              "Maria Lourdes S. Mara MD - A Medical Corp; ;San Diego=DXF001880",
          },
          {
            id: "Maria Remedios Gopez MD Inc; ;Indio=DXF000852",
            label: "Maria Remedios Gopez MD Inc; ;Indio=DXF000852",
          },
          {
            id: "MARIE CLAUDETTE GRAGEDA; ;Hollister=DXF004389",
            label: "MARIE CLAUDETTE GRAGEDA; ;Hollister=DXF004389",
          },
          {
            id: "Marin Center for Independent Living; ;San Rafael=DXF003991",
            label: "Marin Center for Independent Living; ;San Rafael=DXF003991",
          },
          {
            id: "Marin City Health and Wellness Center; ;San Rafael=DXF003491",
            label:
              "Marin City Health and Wellness Center; ;San Rafael=DXF003491",
          },
          {
            id: "Marin Community Clinic; ;Novato=DXF002948",
            label: "Marin Community Clinic; ;Novato=DXF002948",
          },
          {
            id: "Mario Carcamo MD Inc; ;Riverside=DXF000818",
            label: "Mario Carcamo MD Inc; ;Riverside=DXF000818",
          },
          {
            id: "Mario I Brakin; ;Long Beach=DXF000235",
            label: "Mario I Brakin; ;Long Beach=DXF000235",
          },
          {
            id: "Mariposa County Health and Human Services; ;Mariposa=DXF005077",
            label:
              "Mariposa County Health and Human Services; ;Mariposa=DXF005077",
          },
          {
            id: "Mariya A Zakiuddin, MD, A Medical Corporation; ;Burbank=DXF004485",
            label:
              "Mariya A Zakiuddin, MD, A Medical Corporation; ;Burbank=DXF004485",
          },
          {
            id: "Mark C. Adrian M.D. INC.; ;La Jolla=DXF001950",
            label: "Mark C. Adrian M.D. INC.; ;La Jolla=DXF001950",
          },
          {
            id: "Mark E. Rosen, DO, Inc.; ;Portola Valley=DXF001441",
            label: "Mark E. Rosen, DO, Inc.; ;Portola Valley=DXF001441",
          },
          {
            id: "Mark Johnson; ;Chula Vista=DXF001672",
            label: "Mark Johnson; ;Chula Vista=DXF001672",
          },
          {
            id: "Mark Twain Health Care District; ;San Andreas=DXF002242",
            label: "Mark Twain Health Care District; ;San Andreas=DXF002242",
          },
          {
            id: "Mark Twain Health Care District;Valley Springs Health & Wellness Center;Valley Springs=DXF002404",
            label:
              "Mark Twain Health Care District;Valley Springs Health & Wellness Center;Valley Springs=DXF002404",
          },
          {
            id: "Marquis Care at Shasta; ;Redding=DXF004648",
            label: "Marquis Care at Shasta; ;Redding=DXF004648",
          },
          {
            id: "Marshall Medical Center; ;Placerville=DXF003971",
            label: "Marshall Medical Center; ;Placerville=DXF003971",
          },
          {
            id: "Marshall Medical Center; ;Placerville=DXF005543",
            label: "Marshall Medical Center; ;Placerville=DXF005543",
          },
          {
            id: "Marta S Sarmiento MD INC; ;Orange=DXF000576",
            label: "Marta S Sarmiento MD INC; ;Orange=DXF000576",
          },
          {
            id: "Martha Meza MD; ;Pasadena=DXF005277",
            label: "Martha Meza MD; ;Pasadena=DXF005277",
          },
          {
            id: "Martin Luther King, Jr.-Los Angeles (MLK-LA) Healthcare Corporation; ;Los Angeles=DXF000763",
            label:
              "Martin Luther King, Jr.-Los Angeles (MLK-LA) Healthcare Corporation; ;Los Angeles=DXF000763",
          },
          {
            id: "Martin Luther King, Jr.-Los Angeles (MLK-LA) Healthcare Corporation;Martin Luther King Jr. Community Medical Foundation;Los Angeles=DXF002376",
            label:
              "Martin Luther King, Jr.-Los Angeles (MLK-LA) Healthcare Corporation;Martin Luther King Jr. Community Medical Foundation;Los Angeles=DXF002376",
          },
          {
            id: "Martin M. Bress MD APC; ;Hollister=DXF001279",
            label: "Martin M. Bress MD APC; ;Hollister=DXF001279",
          },
          {
            id: "Martin Medical Center, P.C.; ;Martin=DXF000461",
            label: "Martin Medical Center, P.C.; ;Martin=DXF000461",
          },
          {
            id: "Mary Health of the Sick; ;Newbury Park=DXF005352",
            label: "Mary Health of the Sick; ;Newbury Park=DXF005352",
          },
          {
            id: "Mary Jane Dylla, MD; ;Saint Helena=DXF001296",
            label: "Mary Jane Dylla, MD; ;Saint Helena=DXF001296",
          },
          {
            id: "Mary M. Moebius, MD Inc; ;Tarzana=DXF000573",
            label: "Mary M. Moebius, MD Inc; ;Tarzana=DXF000573",
          },
          {
            id: "Mary Regina Pham DDS MS Dental Corporation; ;Tustin=DXF000307",
            label:
              "Mary Regina Pham DDS MS Dental Corporation; ;Tustin=DXF000307",
          },
          {
            id: "Mary Regina Pham DDS MS Dental Corporation;Mary R Pham DDS Inc;Tustin=DXF000308",
            label:
              "Mary Regina Pham DDS MS Dental Corporation;Mary R Pham DDS Inc;Tustin=DXF000308",
          },
          {
            id: "Mary Regina Pham DDS MS Dental Corporation;Mary Pham Ikeda Dental Corporation;Tustin=DXF000309",
            label:
              "Mary Regina Pham DDS MS Dental Corporation;Mary Pham Ikeda Dental Corporation;Tustin=DXF000309",
          },
          {
            id: "Mary Regina Pham DDS MS Dental Corporation;Mary Pham DDS Dental Corporation;Tustin=DXF000310",
            label:
              "Mary Regina Pham DDS MS Dental Corporation;Mary Pham DDS Dental Corporation;Tustin=DXF000310",
          },
          {
            id: "Mary Regina Pham DDS MS Dental Corporation;Mary R Pham DDS Dental Corporation;Tustin=DXF000311",
            label:
              "Mary Regina Pham DDS MS Dental Corporation;Mary R Pham DDS Dental Corporation;Tustin=DXF000311",
          },
          {
            id: "Mary Regina Pham DDS MS Dental Corporation;Mary Pham Ikeda DDS MS Inc;Tustin=DXF000312",
            label:
              "Mary Regina Pham DDS MS Dental Corporation;Mary Pham Ikeda DDS MS Inc;Tustin=DXF000312",
          },
          {
            id: "Masoud Afshar; ;IMPERIAL=DXF001965",
            label: "Masoud Afshar; ;IMPERIAL=DXF001965",
          },
          {
            id: "Masoud Afshar MD Inc; ;IMPERIAL=DXF002007",
            label: "Masoud Afshar MD Inc; ;IMPERIAL=DXF002007",
          },
          {
            id: "Master\u2022Care, Inc.; ;FOLSOM=DXF005580",
            label: "Master\u2022Care, Inc.; ;FOLSOM=DXF005580",
          },
          {
            id: "MasterCare; ;FOLSOM=DXF002914",
            label: "MasterCare; ;FOLSOM=DXF002914",
          },
          {
            id: "Mathew Isho, M.D., P.C.; ;San Diego=DXF001937",
            label: "Mathew Isho, M.D., P.C.; ;San Diego=DXF001937",
          },
          {
            id: "Matrix Care Services, LLC; ;Encino=DXF002754",
            label: "Matrix Care Services, LLC; ;Encino=DXF002754",
          },
          {
            id: "Matrix Care Services,LLC; ;Encino=DXF004437",
            label: "Matrix Care Services,LLC; ;Encino=DXF004437",
          },
          {
            id: "Matrix Health Promotion; ;Encino=DXF004317",
            label: "Matrix Health Promotion; ;Encino=DXF004317",
          },
          {
            id: "Matthew Pifer, MD; ;Santa Barbara=DXF001006",
            label: "Matthew Pifer, MD; ;Santa Barbara=DXF001006",
          },
          {
            id: "Matthew Schultzel DO & Douglas Sullivan PC; ;La Jolla=DXF003241",
            label:
              "Matthew Schultzel DO & Douglas Sullivan PC; ;La Jolla=DXF003241",
          },
          {
            id: "Maureen O. Khoo, MD, Inc.; ;Los Gatos=DXF004228",
            label: "Maureen O. Khoo, MD, Inc.; ;Los Gatos=DXF004228",
          },
          {
            id: "Max V. Soliguen, M.D.; ;Upland=DXF001717",
            label: "Max V. Soliguen, M.D.; ;Upland=DXF001717",
          },
          {
            id: "Mayer MD Inc; ;Huntington Park=DXF003523",
            label: "Mayer MD Inc; ;Huntington Park=DXF003523",
          },
          {
            id: "Mayers Memorial Hospital District; ;Fall River Mills=DXF000872",
            label:
              "Mayers Memorial Hospital District; ;Fall River Mills=DXF000872",
          },
          {
            id: "Mayflower Medical Group; ;West Covina=DXF005777",
            label: "Mayflower Medical Group; ;West Covina=DXF005777",
          },
          {
            id: "maywood acres healthcare; ;Oxnard=DXF004252",
            label: "maywood acres healthcare; ;Oxnard=DXF004252",
          },
          {
            id: "mba; ;Riverside=DXF002208",
            label: "mba; ;Riverside=DXF002208",
          },
          {
            id: "McCloud Fire Department; ;McCloud=DXF004400",
            label: "McCloud Fire Department; ;McCloud=DXF004400",
          },
          {
            id: "MD Care and Associates; ;El Cajon=DXF001463",
            label: "MD Care and Associates; ;El Cajon=DXF001463",
          },
          {
            id: "MD Care Providers, Inc.; ;Hemet=DXF002035",
            label: "MD Care Providers, Inc.; ;Hemet=DXF002035",
          },
          {
            id: "MDLC; ;San Jose=DXF003007",
            label: "MDLC; ;San Jose=DXF003007",
          },
          {
            id: "Meadow Creek Post-Acute; ;Paramount=DXF004897",
            label: "Meadow Creek Post-Acute; ;Paramount=DXF004897",
          },
          {
            id: "Meadowbrook Post Acute, LLC; ;Hemet=DXF003501",
            label: "Meadowbrook Post Acute, LLC; ;Hemet=DXF003501",
          },
          {
            id: "Med Stop Urgent Care Center; ;San Luis Obispo=DXF000280",
            label: "Med Stop Urgent Care Center; ;San Luis Obispo=DXF000280",
          },
          {
            id: "Medhat Mikhael MD Inc DBA Pain Medicine Associates; ;Huntington Beach=DXF002674",
            label:
              "Medhat Mikhael MD Inc DBA Pain Medicine Associates; ;Huntington Beach=DXF002674",
          },
          {
            id: "Medical Center Convalescent Hospital; ;San Bernardino=DXF005347",
            label:
              "Medical Center Convalescent Hospital; ;San Bernardino=DXF005347",
          },
          {
            id: "Medical Diagnostic Laboratories, LLC; ;Hamilton=DXF004441",
            label: "Medical Diagnostic Laboratories, LLC; ;Hamilton=DXF004441",
          },
          {
            id: "Medical Diagnostic Laboratory LLC; ;La Verne=DXF003627",
            label: "Medical Diagnostic Laboratory LLC; ;La Verne=DXF003627",
          },
          {
            id: "Medical offices of Shashwati S. Kale; ;San Jose=DXF003646",
            label: "Medical offices of Shashwati S. Kale; ;San Jose=DXF003646",
          },
          {
            id: "Medical Vision Technology; ;Sacramento=DXF000501",
            label: "Medical Vision Technology; ;Sacramento=DXF000501",
          },
          {
            id: "Medicare Drop; ;Campbell=DXF005093",
            label: "Medicare Drop; ;Campbell=DXF005093",
          },
          {
            id: "MedZed Physician Services, Inc.; ;Culver City=DXF002709",
            label: "MedZed Physician Services, Inc.; ;Culver City=DXF002709",
          },
          {
            id: "Meitri Collaborative; ;San Francisco=DXF000163",
            label: "Meitri Collaborative; ;San Francisco=DXF000163",
          },
          {
            id: "Melissa Hurd Medical Corporation; ;vista=DXF004685",
            label: "Melissa Hurd Medical Corporation; ;vista=DXF004685",
          },
          {
            id: "melody lynd; ;Campbell=DXF000564",
            label: "melody lynd; ;Campbell=DXF000564",
          },
          {
            id: "Memorial HealthCare IPA, G.P.; ;Irvine=DXF000705",
            label: "Memorial HealthCare IPA, G.P.; ;Irvine=DXF000705",
          },
          {
            id: "MEND-Meet Each Need with Dignity; ;Pacoima=DXF004302",
            label: "MEND-Meet Each Need with Dignity; ;Pacoima=DXF004302",
          },
          {
            id: "Mendocino Coast Clinics Inc.; ;Fort Bragg=DXF002897",
            label: "Mendocino Coast Clinics Inc.; ;Fort Bragg=DXF002897",
          },
          {
            id: "Mendocino Community Health Clinic Inc.; ;Ukiah=DXF001422",
            label: "Mendocino Community Health Clinic Inc.; ;Ukiah=DXF001422",
          },
          {
            id: "Mennonite Brethren Homes Inc; ;Reedley=DXF003029",
            label: "Mennonite Brethren Homes Inc; ;Reedley=DXF003029",
          },
          {
            id: "Mennonite Brethren Homes Inc;Mennonite Brethren Homes Inc;Reedley=DXF003114",
            label:
              "Mennonite Brethren Homes Inc;Mennonite Brethren Homes Inc;Reedley=DXF003114",
          },
          {
            id: "Mennonite Brethren Homes Inc;Mennonite Brethren Homes Inc;Reedley=DXF003115",
            label:
              "Mennonite Brethren Homes Inc;Mennonite Brethren Homes Inc;Reedley=DXF003115",
          },
          {
            id: "Mental Fitness Clinic; ;Los Angeles=DXF001526",
            label: "Mental Fitness Clinic; ;Los Angeles=DXF001526",
          },
          {
            id: "Merakey; ;Harrisburg=DXF002660",
            label: "Merakey; ;Harrisburg=DXF002660",
          },
          {
            id: "Merced Faculty Associates Medical Group; ;MERCED=DXF001274",
            label: "Merced Faculty Associates Medical Group; ;MERCED=DXF001274",
          },
          {
            id: "Merced Faculty Associates Medical Group;MFA Atwater;Atwater=DXF001702",
            label:
              "Merced Faculty Associates Medical Group;MFA Atwater;Atwater=DXF001702",
          },
          {
            id: "Merced Faculty Associates Medical Group, Inc.; ;MERCED=DXF005081",
            label:
              "Merced Faculty Associates Medical Group, Inc.; ;MERCED=DXF005081",
          },
          {
            id: "Meritage Health Plan; ;Petaluma=DXF003989",
            label: "Meritage Health Plan; ;Petaluma=DXF003989",
          },
          {
            id: "Meritage Medical Network; ;Petaluma=DXF002102",
            label: "Meritage Medical Network; ;Petaluma=DXF002102",
          },
          {
            id: "Metro Family Physicians Medical Group; ;San Diego=DXF001508",
            label:
              "Metro Family Physicians Medical Group; ;San Diego=DXF001508",
          },
          {
            id: "MHM Healthcare; ;San Bernardino=DXF004975",
            label: "MHM Healthcare; ;San Bernardino=DXF004975",
          },
          {
            id: "miCare LLC; ;Clovis=DXF001186",
            label: "miCare LLC; ;Clovis=DXF001186",
          },
          {
            id: "Michael Aguilar, MD; ;Sacramento=DXF001696",
            label: "Michael Aguilar, MD; ;Sacramento=DXF001696",
          },
          {
            id: "Michael Bordofsky, M.D.; ;Santa Barbara=DXF000993",
            label: "Michael Bordofsky, M.D.; ;Santa Barbara=DXF000993",
          },
          {
            id: "Michael E. Kan, MD, Inc; ;San Jose=DXF004420",
            label: "Michael E. Kan, MD, Inc; ;San Jose=DXF004420",
          },
          {
            id: "Michael K. Tran, M.D., Inc.; ;Westminster=DXF000371",
            label: "Michael K. Tran, M.D., Inc.; ;Westminster=DXF000371",
          },
          {
            id: "Michael M Salehpour MD A Professional Corporation; ;ventura=DXF002025",
            label:
              "Michael M Salehpour MD A Professional Corporation; ;ventura=DXF002025",
          },
          {
            id: "Michael Santillan; ;MISSION VIEJO=DXF004417",
            label: "Michael Santillan; ;MISSION VIEJO=DXF004417",
          },
          {
            id: "Michael Santillan;Pacific Neuropsychiatric Specialists;MISSION VIEJO=DXF004418",
            label:
              "Michael Santillan;Pacific Neuropsychiatric Specialists;MISSION VIEJO=DXF004418",
          },
          {
            id: "MICHAEL SHABTAI, M.D., INC.; ;Northridge=DXF004736",
            label: "MICHAEL SHABTAI, M.D., INC.; ;Northridge=DXF004736",
          },
          {
            id: "Michael V. Stulberg, M.D.; ;Santa Barbara=DXF000979",
            label: "Michael V. Stulberg, M.D.; ;Santa Barbara=DXF000979",
          },
          {
            id: "Michelle Liske MD, INC; ;San Diego=DXF000211",
            label: "Michelle Liske MD, INC; ;San Diego=DXF000211",
          },
          {
            id: "Mid County Physician Medical Group, Inc; ;San Diego=DXF001312",
            label:
              "Mid County Physician Medical Group, Inc; ;San Diego=DXF001312",
          },
          {
            id: "Midcoast imaging; ;Lompoc=DXF002400",
            label: "Midcoast imaging; ;Lompoc=DXF002400",
          },
          {
            id: "MID-PENINSULA EYE PHYSICIANS & SURGEONS MEDICAL GROUP; ;San Mateo=DXF001571",
            label:
              "MID-PENINSULA EYE PHYSICIANS & SURGEONS MEDICAL GROUP; ;San Mateo=DXF001571",
          },
          {
            id: "Mid-Peninsula Ophthalmology Medical Group, Inc.; ;Menlo PArk=DXF004054",
            label:
              "Mid-Peninsula Ophthalmology Medical Group, Inc.; ;Menlo PArk=DXF004054",
          },
          {
            id: "Millbrae Care Center, LLC; ;Millbrae=DXF001844",
            label: "Millbrae Care Center, LLC; ;Millbrae=DXF001844",
          },
          {
            id: "MILLENNIUM ADULT HEALTH CARE, INC.; ;Pasadena=DXF003538",
            label: "MILLENNIUM ADULT HEALTH CARE, INC.; ;Pasadena=DXF003538",
          },
          {
            id: "Millennium Health, LLC; ;San Diego=DXF000273",
            label: "Millennium Health, LLC; ;San Diego=DXF000273",
          },
          {
            id: "Millennium Medical Practice Management, LLC; ;Redding=DXF001695",
            label:
              "Millennium Medical Practice Management, LLC; ;Redding=DXF001695",
          },
          {
            id: "Mills Peninsula Emergency Medical Associates, Inc; ;Burlingame=DXF001616",
            label:
              "Mills Peninsula Emergency Medical Associates, Inc; ;Burlingame=DXF001616",
          },
          {
            id: "Mills-Peninsula Medical Group; ;Burlingame=DXF001262",
            label: "Mills-Peninsula Medical Group; ;Burlingame=DXF001262",
          },
          {
            id: "Milpas Medical Inc.; ;Santa Barbara=DXF001166",
            label: "Milpas Medical Inc.; ;Santa Barbara=DXF001166",
          },
          {
            id: "MINA SEHHAT MD PC; ;San Jose=DXF004321",
            label: "MINA SEHHAT MD PC; ;San Jose=DXF004321",
          },
          {
            id: "Mind Study Center; ;Pasadena=DXF000596",
            label: "Mind Study Center; ;Pasadena=DXF000596",
          },
          {
            id: "Minh Q. Tran M.D, INC; ;Westminster=DXF000427",
            label: "Minh Q. Tran M.D, INC; ;Westminster=DXF000427",
          },
          {
            id: "Miracle Mile Pediatrics; ;Los Angeles=DXF005148",
            label: "Miracle Mile Pediatrics; ;Los Angeles=DXF005148",
          },
          {
            id: "Miriam Chan, MD; ;Encino=DXF004434",
            label: "Miriam Chan, MD; ;Encino=DXF004434",
          },
          {
            id: "Mission City Community Network; ;North Hills=DXF001579",
            label: "Mission City Community Network; ;North Hills=DXF001579",
          },
          {
            id: "Mission Neighborhood Health Center; ;San Francisco=DXF003715",
            label:
              "Mission Neighborhood Health Center; ;San Francisco=DXF003715",
          },
          {
            id: "Mission Pediatrics; ;Riverside=DXF000808",
            label: "Mission Pediatrics; ;Riverside=DXF000808",
          },
          {
            id: "Mission Pediatrics; ;Riverside=DXF000834",
            label: "Mission Pediatrics; ;Riverside=DXF000834",
          },
          {
            id: "Mission Pediatrics, Inc.; ;Redlands=DXF000076",
            label: "Mission Pediatrics, Inc.; ;Redlands=DXF000076",
          },
          {
            id: "Mission Surgical Clinic, Inc; ;Riverside=DXF000878",
            label: "Mission Surgical Clinic, Inc; ;Riverside=DXF000878",
          },
          {
            id: "Miyakawa Medical Group; ;tulare=DXF004596",
            label: "Miyakawa Medical Group; ;tulare=DXF004596",
          },
          {
            id: "Modern Therapies for Mind & Soul Inc; ;Tracy=DXF004635",
            label: "Modern Therapies for Mind & Soul Inc; ;Tracy=DXF004635",
          },
          {
            id: "Modesto Gospel Mission; ;Modesto=DXF003530",
            label: "Modesto Gospel Mission; ;Modesto=DXF003530",
          },
          {
            id: "ModifyHealth; ;Alpharetta=DXF003589",
            label: "ModifyHealth; ;Alpharetta=DXF003589",
          },
          {
            id: "Mohammed S Qayyum MD INC; ;San Jose=DXF004401",
            label: "Mohammed S Qayyum MD INC; ;San Jose=DXF004401",
          },
          {
            id: "Molina Healthcare of California; ;Long Beach=DXF001471",
            label: "Molina Healthcare of California; ;Long Beach=DXF001471",
          },
          {
            id: "Molina Healthcare of California Inc.; ;Long Beach=DXF001433",
            label:
              "Molina Healthcare of California Inc.; ;Long Beach=DXF001433",
          },
          {
            id: "Mommy & Me Medical Group Inc; ;Riverside=DXF001452",
            label: "Mommy & Me Medical Group Inc; ;Riverside=DXF001452",
          },
          {
            id: "Mommy & Me Medical Group Inc;Inland Faculty Specialists, a California Professional Corporation;Riverside=DXF001992",
            label:
              "Mommy & Me Medical Group Inc;Inland Faculty Specialists, a California Professional Corporation;Riverside=DXF001992",
          },
          {
            id: "Mommy & Me Medical Group Inc;Pacific Perinatal Institute;Colton=DXF001993",
            label:
              "Mommy & Me Medical Group Inc;Pacific Perinatal Institute;Colton=DXF001993",
          },
          {
            id: "Mommy & Me Medical Group Inc;Valenzuela Medical Group I, Inc.;MORENO VALLEY=DXF001996",
            label:
              "Mommy & Me Medical Group Inc;Valenzuela Medical Group I, Inc.;MORENO VALLEY=DXF001996",
          },
          {
            id: "Mommy & Me Medical Group Inc;Senior\u2019s Choice Medical Group Inc.;FONTANA=DXF001997",
            label:
              "Mommy & Me Medical Group Inc;Senior\u2019s Choice Medical Group Inc.;FONTANA=DXF001997",
          },
          {
            id: "Monarch Health Plan, Inc; ;Irvine=DXF000699",
            label: "Monarch Health Plan, Inc; ;Irvine=DXF000699",
          },
          {
            id: "Monarch Healthcare, a Medical Group, Inc; ;Irvine=DXF000595",
            label:
              "Monarch Healthcare, a Medical Group, Inc; ;Irvine=DXF000595",
          },
          {
            id: "Monica Hannon, MD; ;San Francisco=DXF000605",
            label: "Monica Hannon, MD; ;San Francisco=DXF000605",
          },
          {
            id: "Monica Perlman MD Inc; ;La Jolla=DXF002131",
            label: "Monica Perlman MD Inc; ;La Jolla=DXF002131",
          },
          {
            id: "Mono County Behavioral Heatlh; ;Mammoth Lakes=DXF000544",
            label: "Mono County Behavioral Heatlh; ;Mammoth Lakes=DXF000544",
          },
          {
            id: "Monogram Biosciences Inc; ;Burlington=DXF005124",
            label: "Monogram Biosciences Inc; ;Burlington=DXF005124",
          },
          {
            id: "Monrovia Memorial Hospital; ;Monrovia=DXF003393",
            label: "Monrovia Memorial Hospital; ;Monrovia=DXF003393",
          },
          {
            id: "Montage Health; ;Monterey=DXF001123",
            label: "Montage Health; ;Monterey=DXF001123",
          },
          {
            id: "Montage Health;Community Hospital of the Monterey Peninsula;Monterey=DXF001125",
            label:
              "Montage Health;Community Hospital of the Monterey Peninsula;Monterey=DXF001125",
          },
          {
            id: "Montage Health;Montage Medical Group;Monterey=DXF001126",
            label: "Montage Health;Montage Medical Group;Monterey=DXF001126",
          },
          {
            id: "Montage Health;Westland House;Monterey=DXF001127",
            label: "Montage Health;Westland House;Monterey=DXF001127",
          },
          {
            id: "Montage Health;Aspire Health Plan;Monterey=DXF001128",
            label: "Montage Health;Aspire Health Plan;Monterey=DXF001128",
          },
          {
            id: "Montage Health;MoGo Urgent Care;Monterey=DXF001129",
            label: "Montage Health;MoGo Urgent Care;Monterey=DXF001129",
          },
          {
            id: "MONTCLAIR MANOR CARE CENTER; ;MONTCLAIR=DXF005346",
            label: "MONTCLAIR MANOR CARE CENTER; ;MONTCLAIR=DXF005346",
          },
          {
            id: "Monterey County Regional Fire Protection District; ;Salinas=DXF004410",
            label:
              "Monterey County Regional Fire Protection District; ;Salinas=DXF004410",
          },
          {
            id: "Monterey Hospitalist Medical Group, Inc; ;Salinas=DXF001484",
            label:
              "Monterey Hospitalist Medical Group, Inc; ;Salinas=DXF001484",
          },
          {
            id: "Monterey Spine & Joint; ;Monterey=DXF001454",
            label: "Monterey Spine & Joint; ;Monterey=DXF001454",
          },
          {
            id: "Moorpark Comprehensive Medical Group; ;Moorpark=DXF004626",
            label: "Moorpark Comprehensive Medical Group; ;Moorpark=DXF004626",
          },
          {
            id: "Moreno Valley Physicians Associates, A Medical Corp.; ;MORENO VALLEY=DXF000106",
            label:
              "Moreno Valley Physicians Associates, A Medical Corp.; ;MORENO VALLEY=DXF000106",
          },
          {
            id: "Morningside Pediatrics; ;Santa Monica=DXF005163",
            label: "Morningside Pediatrics; ;Santa Monica=DXF005163",
          },
          {
            id: "Morongo Basin Community Health Center; ;Yucca Valley=DXF004928",
            label:
              "Morongo Basin Community Health Center; ;Yucca Valley=DXF004928",
          },
          {
            id: "Morongo Basin Healthcare District; ;Yucca Valley=DXF000744",
            label: "Morongo Basin Healthcare District; ;Yucca Valley=DXF000744",
          },
          {
            id: "Mount Miguel Covenant Village; ;Spring Valley=DXF002233",
            label: "Mount Miguel Covenant Village; ;Spring Valley=DXF002233",
          },
          {
            id: "Mountain Manor Senior Residence; ;Carmichael=DXF005323",
            label: "Mountain Manor Senior Residence; ;Carmichael=DXF005323",
          },
          {
            id: "Mountain Valleys Health Centers; ;Bieber=DXF003756",
            label: "Mountain Valleys Health Centers; ;Bieber=DXF003756",
          },
          {
            id: "Mountain View Child Care Inc.; ;Loma Linda=DXF003000",
            label: "Mountain View Child Care Inc.; ;Loma Linda=DXF003000",
          },
          {
            id: "Mountain View Child Care Inc.;Totally Kids Rehabilitation  Hospital DP/SNF;Loma Linda=DXF003031",
            label:
              "Mountain View Child Care Inc.;Totally Kids Rehabilitation  Hospital DP/SNF;Loma Linda=DXF003031",
          },
          {
            id: "MOUNTAIN VIEW HEALTHCARE CENTER; ;Mountain View=DXF005198",
            label: "MOUNTAIN VIEW HEALTHCARE CENTER; ;Mountain View=DXF005198",
          },
          {
            id: "MOUNTAIN VIEW HEALTHCARE CENTER; ;Mountain View=DXF005804",
            label: "MOUNTAIN VIEW HEALTHCARE CENTER; ;Mountain View=DXF005804",
          },
          {
            id: "MOUNTAIN VIEW HEALTHCARE CENTER;Bridgewood Post Acute;Sacramento=DXF005805",
            label:
              "MOUNTAIN VIEW HEALTHCARE CENTER;Bridgewood Post Acute;Sacramento=DXF005805",
          },
          {
            id: "MOUNTAIN VIEW HEALTHCARE CENTER;Cedarwood Post Acute;Sacramento=DXF005806",
            label:
              "MOUNTAIN VIEW HEALTHCARE CENTER;Cedarwood Post Acute;Sacramento=DXF005806",
          },
          {
            id: "MOUNTAIN VIEW HEALTHCARE CENTER;Capital Post Acute;Sacramento=DXF005807",
            label:
              "MOUNTAIN VIEW HEALTHCARE CENTER;Capital Post Acute;Sacramento=DXF005807",
          },
          {
            id: "MOUNTAIN VIEW HEALTHCARE CENTER;Eden Healthcare Center;Hayward=DXF005808",
            label:
              "MOUNTAIN VIEW HEALTHCARE CENTER;Eden Healthcare Center;Hayward=DXF005808",
          },
          {
            id: "MOUNTAIN VIEW HEALTHCARE CENTER;Mountain View Healthcare Center;Mountain View=DXF005809",
            label:
              "MOUNTAIN VIEW HEALTHCARE CENTER;Mountain View Healthcare Center;Mountain View=DXF005809",
          },
          {
            id: "MOUNTAIN VIEW HEALTHCARE CENTER;Hillview Convalescent Hospital;Morgan Hill=DXF005810",
            label:
              "MOUNTAIN VIEW HEALTHCARE CENTER;Hillview Convalescent Hospital;Morgan Hill=DXF005810",
          },
          {
            id: "MOUNTAIN VIEW MEDICAL CARE, INC.; ;Los Altos=DXF003975",
            label: "MOUNTAIN VIEW MEDICAL CARE, INC.; ;Los Altos=DXF003975",
          },
          {
            id: "Mountains Community Hospital; ;Lake Arrowhead=DXF001052",
            label: "Mountains Community Hospital; ;Lake Arrowhead=DXF001052",
          },
          {
            id: "Mt Rubidouxidence Opco, LLC; ;Riverside=DXF005397",
            label: "Mt Rubidouxidence Opco, LLC; ;Riverside=DXF005397",
          },
          {
            id: "Mt. San Antonio Gardens; ;Pomona=DXF004645",
            label: "Mt. San Antonio Gardens; ;Pomona=DXF004645",
          },
          {
            id: "Murrieta Primary Care Clinic, Joanna Ayala MD; ;Murrieta=DXF001221",
            label:
              "Murrieta Primary Care Clinic, Joanna Ayala MD; ;Murrieta=DXF001221",
          },
          {
            id: "Murrieta Primary Care Clinic, Joanna Ayala MD;Riverside Primary Care Clinic, Joanna Ayala MD;Riverside=DXF001223",
            label:
              "Murrieta Primary Care Clinic, Joanna Ayala MD;Riverside Primary Care Clinic, Joanna Ayala MD;Riverside=DXF001223",
          },
          {
            id: "My 1st Clinic; ;Beverly Hills=DXF004033",
            label: "My 1st Clinic; ;Beverly Hills=DXF004033",
          },
          {
            id: "MY Care Management,Inc.; ;Encino=DXF002755",
            label: "MY Care Management,Inc.; ;Encino=DXF002755",
          },
          {
            id: "Najwa Shammas MD; ;Burbank=DXF000674",
            label: "Najwa Shammas MD; ;Burbank=DXF000674",
          },
          {
            id: "Nalu Partners, Inc; ;Aptos=DXF001556",
            label: "Nalu Partners, Inc; ;Aptos=DXF001556",
          },
          {
            id: "napa solano medical group inc; ;Vallejo=DXF004448",
            label: "napa solano medical group inc; ;Vallejo=DXF004448",
          },
          {
            id: "Natasha Phan, MD; ;Dublin=DXF002314",
            label: "Natasha Phan, MD; ;Dublin=DXF002314",
          },
          {
            id: "National Health Foundation; ;Los Angeles=DXF003709",
            label: "National Health Foundation; ;Los Angeles=DXF003709",
          },
          {
            id: "National Healthcare and Housing Advisors; ;Santa Ana=DXF003833",
            label:
              "National Healthcare and Housing Advisors; ;Santa Ana=DXF003833",
          },
          {
            id: "NATIONAL LABS INC; ;Hayward=DXF003883",
            label: "NATIONAL LABS INC; ;Hayward=DXF003883",
          },
          {
            id: "Native American Health Center; ;Oakland=DXF005740",
            label: "Native American Health Center; ;Oakland=DXF005740",
          },
          {
            id: "Navarro Pain Control Group Inc; ;ChulaVista=DXF001449",
            label: "Navarro Pain Control Group Inc; ;ChulaVista=DXF001449",
          },
          {
            id: "NCHIIN; ;Eureka=DXF000086",
            label: "NCHIIN; ;Eureka=DXF000086",
          },
          {
            id: "Ned H. Chambers MD Inc.; ;San Diego=DXF002097",
            label: "Ned H. Chambers MD Inc.; ;San Diego=DXF002097",
          },
          {
            id: "NEELA PAREKH, MD, INC.; ;Los Gatos=DXF003593",
            label: "NEELA PAREKH, MD, INC.; ;Los Gatos=DXF003593",
          },
          {
            id: "NEEMA B MALHOTRA MD; ;San Jose=DXF003612",
            label: "NEEMA B MALHOTRA MD; ;San Jose=DXF003612",
          },
          {
            id: "Neighborhood Healthcare; ;Escondido=DXF000264",
            label: "Neighborhood Healthcare; ;Escondido=DXF000264",
          },
          {
            id: "Neil B. Mansdorf, DPM; ;Orange=DXF000636",
            label: "Neil B. Mansdorf, DPM; ;Orange=DXF000636",
          },
          {
            id: "Nephrology Associates Medical Group; ;Riverside=DXF001056",
            label: "Nephrology Associates Medical Group; ;Riverside=DXF001056",
          },
          {
            id: "Nephrology Specialists Medical Group, Inc.; ;Orange=DXF001220",
            label:
              "Nephrology Specialists Medical Group, Inc.; ;Orange=DXF001220",
          },
          {
            id: "NESS - Nevo Sports and Spine; ;Sherman Oaks=DXF001828",
            label: "NESS - Nevo Sports and Spine; ;Sherman Oaks=DXF001828",
          },
          {
            id: "Network Medical Management; ;Monterey Park=DXF003300",
            label: "Network Medical Management; ;Monterey Park=DXF003300",
          },
          {
            id: "Neurology Associates of Santa Barbara; ;Santa Barbara=DXF000557",
            label:
              "Neurology Associates of Santa Barbara; ;Santa Barbara=DXF000557",
          },
          {
            id: "nevada county behavioral health department; ;Grass Valley=DXF002364",
            label:
              "nevada county behavioral health department; ;Grass Valley=DXF002364",
          },
          {
            id: "New Age Gastroenterology, Inc; ;Redlands=DXF000997",
            label: "New Age Gastroenterology, Inc; ;Redlands=DXF000997",
          },
          {
            id: "New Ananda Medical & Urgent Care, Inc; ;El Monte=DXF003400",
            label: "New Ananda Medical & Urgent Care, Inc; ;El Monte=DXF003400",
          },
          {
            id: "New Ananda Medical & Urgent Care, Inc;Doctor's Managed Emergency Medical Group, Inc;Glendale=DXF003512",
            label:
              "New Ananda Medical & Urgent Care, Inc;Doctor's Managed Emergency Medical Group, Inc;Glendale=DXF003512",
          },
          {
            id: "New Ananda Medical & Urgent Care, Inc;Doctors Managed IPA;Ontario=DXF003513",
            label:
              "New Ananda Medical & Urgent Care, Inc;Doctors Managed IPA;Ontario=DXF003513",
          },
          {
            id: "New Ananda Medical & Urgent Care, Inc;Nagasamudra S Ashok MD Inc;San Jacinto=DXF003519",
            label:
              "New Ananda Medical & Urgent Care, Inc;Nagasamudra S Ashok MD Inc;San Jacinto=DXF003519",
          },
          {
            id: "New Ananda Medical & Urgent Care, Inc;Upland-Ontario Medical Clinic;Ontario=DXF003520",
            label:
              "New Ananda Medical & Urgent Care, Inc;Upland-Ontario Medical Clinic;Ontario=DXF003520",
          },
          {
            id: "New Ananda Medical & Urgent Care, Inc;Starlight Hospice, Inc;Ontario=DXF003522",
            label:
              "New Ananda Medical & Urgent Care, Inc;Starlight Hospice, Inc;Ontario=DXF003522",
          },
          {
            id: "New Ananda Medical & Urgent Care, Inc;Medical Wellness Clinic;San Jacinto=DXF004621",
            label:
              "New Ananda Medical & Urgent Care, Inc;Medical Wellness Clinic;San Jacinto=DXF004621",
          },
          {
            id: "New era oncology; ;EL CENTRO=DXF000865",
            label: "New era oncology; ;EL CENTRO=DXF000865",
          },
          {
            id: "New Genesis Medical Associates, Inc.; ;Anaheim=DXF001921",
            label: "New Genesis Medical Associates, Inc.; ;Anaheim=DXF001921",
          },
          {
            id: "New Genesis Medical Associates, Inc.;Primary and Multi-Specialty Clinics of Anaheim, Inc.;Anaheim=DXF001922",
            label:
              "New Genesis Medical Associates, Inc.;Primary and Multi-Specialty Clinics of Anaheim, Inc.;Anaheim=DXF001922",
          },
          {
            id: "New Genesis Medical Associates, Inc.;Care@Home Solutions CA, Inc.;Los Angeles=DXF001924",
            label:
              "New Genesis Medical Associates, Inc.;Care@Home Solutions CA, Inc.;Los Angeles=DXF001924",
          },
          {
            id: "New Hope Medical Group; ;Corona=DXF001237",
            label: "New Hope Medical Group; ;Corona=DXF001237",
          },
          {
            id: "New Life Medical Assoc Inc; ;Apple Valley=DXF005802",
            label: "New Life Medical Assoc Inc; ;Apple Valley=DXF005802",
          },
          {
            id: "New Life Medical Group, Inc. dba Healthy New Life Medical Corporation; ;Cypress=DXF004824",
            label:
              "New Life Medical Group, Inc. dba Healthy New Life Medical Corporation; ;Cypress=DXF004824",
          },
          {
            id: "New Light Medical Group; ;Corona=DXF005545",
            label: "New Light Medical Group; ;Corona=DXF005545",
          },
          {
            id: "New Medical; ;BAEKRSFIELD=DXF005453",
            label: "New Medical; ;BAEKRSFIELD=DXF005453",
          },
          {
            id: "New Sunrise Health Care Inc.; ;Northridge=DXF002946",
            label: "New Sunrise Health Care Inc.; ;Northridge=DXF002946",
          },
          {
            id: "New Vista Health Services, LLC; ;La Crescenta=DXF003301",
            label: "New Vista Health Services, LLC; ;La Crescenta=DXF003301",
          },
          {
            id: "New Vista Health Services, LLC;New Vista Nursing and Rehabilitation;Sunland=DXF003307",
            label:
              "New Vista Health Services, LLC;New Vista Nursing and Rehabilitation;Sunland=DXF003307",
          },
          {
            id: "New Vista Health Services, LLC;New Vista Post-Acute Center;Los Angeles=DXF003308",
            label:
              "New Vista Health Services, LLC;New Vista Post-Acute Center;Los Angeles=DXF003308",
          },
          {
            id: "New Vista Health Services, LLC;Foothill Retirement Care Home;Tujunga=DXF003309",
            label:
              "New Vista Health Services, LLC;Foothill Retirement Care Home;Tujunga=DXF003309",
          },
          {
            id: "New Vista Health Services, LLC;Rose Garden Residential Care;Mentone=DXF003310",
            label:
              "New Vista Health Services, LLC;Rose Garden Residential Care;Mentone=DXF003310",
          },
          {
            id: "NewGen Administrative Services; ;Los Angeles=DXF004713",
            label: "NewGen Administrative Services; ;Los Angeles=DXF004713",
          },
          {
            id: "NewGen Administrative Services;Alexandria Care Center, LLC;Los Angeles=DXF004745",
            label:
              "NewGen Administrative Services;Alexandria Care Center, LLC;Los Angeles=DXF004745",
          },
          {
            id: "NewGen Administrative Services;Alta Care Center, LLC;Garden Grove=DXF004746",
            label:
              "NewGen Administrative Services;Alta Care Center, LLC;Garden Grove=DXF004746",
          },
          {
            id: "NewGen Administrative Services;SunBridge Brittany Rehabilitation Center, LLC;Carmichael=DXF004747",
            label:
              "NewGen Administrative Services;SunBridge Brittany Rehabilitation Center, LLC;Carmichael=DXF004747",
          },
          {
            id: "NewGen Administrative Services;Anaheim Terrace Care Center, LLC;Anaheim=DXF004748",
            label:
              "NewGen Administrative Services;Anaheim Terrace Care Center, LLC;Anaheim=DXF004748",
          },
          {
            id: "NewGen Administrative Services;Bay Crest Care Center, LLC;Torrance=DXF004749",
            label:
              "NewGen Administrative Services;Bay Crest Care Center, LLC;Torrance=DXF004749",
          },
          {
            id: "NewGen Administrative Services;Brier Oak on Sunset, LLC;Los Angeles=DXF004750",
            label:
              "NewGen Administrative Services;Brier Oak on Sunset, LLC;Los Angeles=DXF004750",
          },
          {
            id: "NewGen Administrative Services;SunBridge Stockton Rehabilitation Center, LLC;Stockton=DXF004752",
            label:
              "NewGen Administrative Services;SunBridge Stockton Rehabilitation Center, LLC;Stockton=DXF004752",
          },
          {
            id: "NewGen Administrative Services;Devonshire Care Center, LLC;Hemet=DXF004753",
            label:
              "NewGen Administrative Services;Devonshire Care Center, LLC;Hemet=DXF004753",
          },
          {
            id: "NewGen Administrative Services;Fountain View Subacute and Nursing Center, LLC;Los Angeles=DXF004754",
            label:
              "NewGen Administrative Services;Fountain View Subacute and Nursing Center, LLC;Los Angeles=DXF004754",
          },
          {
            id: "NewGen Administrative Services;SunBridge Care Enterprises West LLC;Kingsburg=DXF004755",
            label:
              "NewGen Administrative Services;SunBridge Care Enterprises West LLC;Kingsburg=DXF004755",
          },
          {
            id: "NewGen Administrative Services;Montebello Care Center, LLC;Montebello=DXF004756",
            label:
              "NewGen Administrative Services;Montebello Care Center, LLC;Montebello=DXF004756",
          },
          {
            id: "NewGen Administrative Services;Parkwest Rehabilitation Center, LLC;reseda=DXF004757",
            label:
              "NewGen Administrative Services;Parkwest Rehabilitation Center, LLC;reseda=DXF004757",
          },
          {
            id: "NewGen Administrative Services;SunBridge Hallmark Health Services, LLC;Playa Del Rey=DXF004758",
            label:
              "NewGen Administrative Services;SunBridge Hallmark Health Services, LLC;Playa Del Rey=DXF004758",
          },
          {
            id: "NewGen Administrative Services;Rio Hondo Subacute and Nursing Center, LLC;Montebello=DXF004759",
            label:
              "NewGen Administrative Services;Rio Hondo Subacute and Nursing Center, LLC;Montebello=DXF004759",
          },
          {
            id: "NewGen Administrative Services;Sharon Care Center, LLC;Los Angeles=DXF004760",
            label:
              "NewGen Administrative Services;Sharon Care Center, LLC;Los Angeles=DXF004760",
          },
          {
            id: "NewGen Administrative Services;The Earlwood, LLC;Torrance=DXF004761",
            label:
              "NewGen Administrative Services;The Earlwood, LLC;Torrance=DXF004761",
          },
          {
            id: "NewGen Administrative Services;TLC of the Bay Area, Inc.;Santa Clara=DXF004762",
            label:
              "NewGen Administrative Services;TLC of the Bay Area, Inc.;Santa Clara=DXF004762",
          },
          {
            id: "NewGen Administrative Services;14766 Washington Avenue Operations LLC;San Leandro=DXF004763",
            label:
              "NewGen Administrative Services;14766 Washington Avenue Operations LLC;San Leandro=DXF004763",
          },
          {
            id: "NewGen Administrative Services;320 North Crawford Avenue Operations, LLC;Willows=DXF004764",
            label:
              "NewGen Administrative Services;320 North Crawford Avenue Operations, LLC;Willows=DXF004764",
          },
          {
            id: "NewGen Administrative Services;Woodland Care Center, LLC;reseda=DXF004765",
            label:
              "NewGen Administrative Services;Woodland Care Center, LLC;reseda=DXF004765",
          },
          {
            id: "NewGen Administrative Services;Royale Health Care Center, Inc.;Santa Ana=DXF004766",
            label:
              "NewGen Administrative Services;Royale Health Care Center, Inc.;Santa Ana=DXF004766",
          },
          {
            id: "NewGen Administrative Services;Windsor Cheviot Hills, LLC;Los Angeles=DXF004767",
            label:
              "NewGen Administrative Services;Windsor Cheviot Hills, LLC;Los Angeles=DXF004767",
          },
          {
            id: "NewGen Administrative Services;Windsor Country Drive Care Center, LLC;Fremont=DXF004768",
            label:
              "NewGen Administrative Services;Windsor Country Drive Care Center, LLC;Fremont=DXF004768",
          },
          {
            id: "NewGen Administrative Services;Windsor Cypress Gardens Healthcare, LLC;Riverside=DXF004769",
            label:
              "NewGen Administrative Services;Windsor Cypress Gardens Healthcare, LLC;Riverside=DXF004769",
          },
          {
            id: "NewGen Administrative Services;Windsor El Camino Care Center, LLC;Carmichael=DXF004770",
            label:
              "NewGen Administrative Services;Windsor El Camino Care Center, LLC;Carmichael=DXF004770",
          },
          {
            id: "NewGen Administrative Services;Windsor Elk Grove Care and Rehabilitation, LLC;Elk Grove=DXF004771",
            label:
              "NewGen Administrative Services;Windsor Elk Grove Care and Rehabilitation, LLC;Elk Grove=DXF004771",
          },
          {
            id: "NewGen Administrative Services;Windsor Elmhaven Care Center, LLC;Stockton=DXF004772",
            label:
              "NewGen Administrative Services;Windsor Elmhaven Care Center, LLC;Stockton=DXF004772",
          },
          {
            id: "NewGen Administrative Services;Windsor Hampton Care Center, LLC;Stockton=DXF004773",
            label:
              "NewGen Administrative Services;Windsor Hampton Care Center, LLC;Stockton=DXF004773",
          },
          {
            id: "NewGen Administrative Services;Windsor Hayward Estates, LLC;Hayward=DXF004774",
            label:
              "NewGen Administrative Services;Windsor Hayward Estates, LLC;Hayward=DXF004774",
          },
          {
            id: "NewGen Administrative Services;Windsor Gardens Convalescent Hospital, Inc.;Los Angeles=DXF004775",
            label:
              "NewGen Administrative Services;Windsor Gardens Convalescent Hospital, Inc.;Los Angeles=DXF004775",
          },
          {
            id: "NewGen Administrative Services;Windsor Monterey Care Center, LLC;Monterey=DXF004776",
            label:
              "NewGen Administrative Services;Windsor Monterey Care Center, LLC;Monterey=DXF004776",
          },
          {
            id: "NewGen Administrative Services;S&F Market Street Healthcare, LLC;Long Beach=DXF004777",
            label:
              "NewGen Administrative Services;S&F Market Street Healthcare, LLC;Long Beach=DXF004777",
          },
          {
            id: "NewGen Administrative Services;Windsor Rosewood Care Center, LLC;Pleasant Hill=DXF004778",
            label:
              "NewGen Administrative Services;Windsor Rosewood Care Center, LLC;Pleasant Hill=DXF004778",
          },
          {
            id: "NewGen Administrative Services;Windsor Sacramento Estates, LLC;Sacramento=DXF004779",
            label:
              "NewGen Administrative Services;Windsor Sacramento Estates, LLC;Sacramento=DXF004779",
          },
          {
            id: "NewGen Administrative Services;Windsor Care Center National City, Inc.;National City=DXF004780",
            label:
              "NewGen Administrative Services;Windsor Care Center National City, Inc.;National City=DXF004780",
          },
          {
            id: "NewGen Administrative Services;Windsor Skyline Care Center, LLC;Salinas=DXF004781",
            label:
              "NewGen Administrative Services;Windsor Skyline Care Center, LLC;Salinas=DXF004781",
          },
          {
            id: "NewGen Administrative Services;Windsor Terrace Healthcare, LLC;Van Nuys=DXF004782",
            label:
              "NewGen Administrative Services;Windsor Terrace Healthcare, LLC;Van Nuys=DXF004782",
          },
          {
            id: "NewGen Administrative Services;Windsor The Ridge Rehabilitation Center, LLC;Salinas=DXF004783",
            label:
              "NewGen Administrative Services;Windsor The Ridge Rehabilitation Center, LLC;Salinas=DXF004783",
          },
          {
            id: "NewGen Administrative Services;Windsor Vallejo Care Center, LLC;Vallejo=DXF004785",
            label:
              "NewGen Administrative Services;Windsor Vallejo Care Center, LLC;Vallejo=DXF004785",
          },
          {
            id: "NewGen Administrative Services;SunBridge Braswell Enterprises, LLC;Pomona=DXF004786",
            label:
              "NewGen Administrative Services;SunBridge Braswell Enterprises, LLC;Pomona=DXF004786",
          },
          {
            id: "NewGen Administrative Services;Sunbridge Meadowbrook Rehabilitation Center, LLC;Los Angeles=DXF004787",
            label:
              "NewGen Administrative Services;Sunbridge Meadowbrook Rehabilitation Center, LLC;Los Angeles=DXF004787",
          },
          {
            id: "NewGen Administrative Services;SunBridge Braswell Enterprises, LLC;Pomona=DXF004788",
            label:
              "NewGen Administrative Services;SunBridge Braswell Enterprises, LLC;Pomona=DXF004788",
          },
          {
            id: "NewGen Administrative Services;SunBridge Shandin Hills Rehabilitation Center, LLC;San Bernardino=DXF004789",
            label:
              "NewGen Administrative Services;SunBridge Shandin Hills Rehabilitation Center, LLC;San Bernardino=DXF004789",
          },
          {
            id: "NewGen Administrative Services;SunBridge Braswell Enterprises, LLC;Highland=DXF004790",
            label:
              "NewGen Administrative Services;SunBridge Braswell Enterprises, LLC;Highland=DXF004790",
          },
          {
            id: "Newport Beach Holdings; ;San Jose=DXF004868",
            label: "Newport Beach Holdings; ;San Jose=DXF004868",
          },
          {
            id: "Newport Cardiac & Thoracic Surgery, Inc.; ;Santa Ana=DXF002241",
            label:
              "Newport Cardiac & Thoracic Surgery, Inc.; ;Santa Ana=DXF002241",
          },
          {
            id: "Newport Family Medicine; ;Newport Beach=DXF002164",
            label: "Newport Family Medicine; ;Newport Beach=DXF002164",
          },
          {
            id: "Nexus Healthcare Management INC; ;Arcadia=DXF003568",
            label: "Nexus Healthcare Management INC; ;Arcadia=DXF003568",
          },
          {
            id: "NEXUS PHYSICAL THERAPY - EL CAJON; ;El Cajon=DXF000394",
            label: "NEXUS PHYSICAL THERAPY - EL CAJON; ;El Cajon=DXF000394",
          },
          {
            id: "NEXUS PHYSICAL THERAPY - EL CAJON;NEXUS PHYSICAL THERAPY - HILLCREST;San Diego=DXF000395",
            label:
              "NEXUS PHYSICAL THERAPY - EL CAJON;NEXUS PHYSICAL THERAPY - HILLCREST;San Diego=DXF000395",
          },
          {
            id: "NEXUS PHYSICAL THERAPY - EL CAJON;NEXUS PHYSICAL THERAPY - SPORTS ARENA;San Diego=DXF000396",
            label:
              "NEXUS PHYSICAL THERAPY - EL CAJON;NEXUS PHYSICAL THERAPY - SPORTS ARENA;San Diego=DXF000396",
          },
          {
            id: "NEXUS PHYSICAL THERAPY - EL CAJON;NEXUS PHYSICAL THERAPY - MISSION VALLEY;San Diego=DXF000397",
            label:
              "NEXUS PHYSICAL THERAPY - EL CAJON;NEXUS PHYSICAL THERAPY - MISSION VALLEY;San Diego=DXF000397",
          },
          {
            id: "NEXUS PHYSICAL THERAPY - EL CAJON;NEXUS PHYSICAL THERAPY - POWAY;Poway=DXF000398",
            label:
              "NEXUS PHYSICAL THERAPY - EL CAJON;NEXUS PHYSICAL THERAPY - POWAY;Poway=DXF000398",
          },
          {
            id: "NEXUS PHYSICAL THERAPY - EL CAJON;NEXUS PHYSICAL THERAPY - CHULA VISTA;Chula Vista=DXF000399",
            label:
              "NEXUS PHYSICAL THERAPY - EL CAJON;NEXUS PHYSICAL THERAPY - CHULA VISTA;Chula Vista=DXF000399",
          },
          {
            id: "Nguyen Ky DPM Inc; ;San Jose=DXF003582",
            label: "Nguyen Ky DPM Inc; ;San Jose=DXF003582",
          },
          {
            id: "Nicolette D Pacheco; ;Costa Mesa=DXF000346",
            label: "Nicolette D Pacheco; ;Costa Mesa=DXF000346",
          },
          {
            id: "Niles Canyon Post Acute; ;Fremont=DXF003579",
            label: "Niles Canyon Post Acute; ;Fremont=DXF003579",
          },
          {
            id: "Nina Chan, M.D., Inc.; ;Upland=DXF001730",
            label: "Nina Chan, M.D., Inc.; ;Upland=DXF001730",
          },
          {
            id: "Nippon Life Insurance Company of America; ;New york=DXF003947",
            label:
              "Nippon Life Insurance Company of America; ;New york=DXF003947",
          },
          {
            id: "NobleQuest Health Foundation, Inc; ;Van Nuys=DXF003480",
            label: "NobleQuest Health Foundation, Inc; ;Van Nuys=DXF003480",
          },
          {
            id: "NorCal Pain Treatment Center; ;Hughson=DXF003909",
            label: "NorCal Pain Treatment Center; ;Hughson=DXF003909",
          },
          {
            id: "North Bay Private Medicine; ;Mill Valley=DXF000594",
            label: "North Bay Private Medicine; ;Mill Valley=DXF000594",
          },
          {
            id: "North Coast Family Medical Group (Encinitas, US); ;Encinitas=DXF005895",
            label:
              "North Coast Family Medical Group (Encinitas, US); ;Encinitas=DXF005895",
          },
          {
            id: "North County Health Project, Inc., dba TrueCare; ;San Marcos=DXF002084",
            label:
              "North County Health Project, Inc., dba TrueCare; ;San Marcos=DXF002084",
          },
          {
            id: "North East Medical Services; ;DALY CITY=DXF002397",
            label: "North East Medical Services; ;DALY CITY=DXF002397",
          },
          {
            id: "North Orange County Regional Health Foundation; ;Anaheim=DXF000970",
            label:
              "North Orange County Regional Health Foundation; ;Anaheim=DXF000970",
          },
          {
            id: "North Palms Rehabilitation and Wellness Centre, LP; ;Los Angeles=DXF001553",
            label:
              "North Palms Rehabilitation and Wellness Centre, LP; ;Los Angeles=DXF001553",
          },
          {
            id: "NorthBay Healthcare Group; ;Fairfield=DXF002565",
            label: "NorthBay Healthcare Group; ;Fairfield=DXF002565",
          },
          {
            id: "Northeast Community Clinic; ;Alhambra=DXF002905",
            label: "Northeast Community Clinic; ;Alhambra=DXF002905",
          },
          {
            id: "Northeast Valley Health Corporation; ;San Fernando=DXF000107",
            label:
              "Northeast Valley Health Corporation; ;San Fernando=DXF000107",
          },
          {
            id: "Northern California Physicians Network, Inc., a Professional Corporation; ;San Jose=DXF001017",
            label:
              "Northern California Physicians Network, Inc., a Professional Corporation; ;San Jose=DXF001017",
          },
          {
            id: "Northern California Rehabilitation Hospital, LLC dba Vibra Hospital of Northern California; ;Redding=DXF004836",
            label:
              "Northern California Rehabilitation Hospital, LLC dba Vibra Hospital of Northern California; ;Redding=DXF004836",
          },
          {
            id: "northern california surgery center; ;turlock=DXF004701",
            label: "northern california surgery center; ;turlock=DXF004701",
          },
          {
            id: "Northern Inyo Healthcare District; ;Bishop=DXF002994",
            label: "Northern Inyo Healthcare District; ;Bishop=DXF002994",
          },
          {
            id: "Northern Inyo Healthcare District;Northern Inyo Healthcare District - Lab;Bishop=DXF003020",
            label:
              "Northern Inyo Healthcare District;Northern Inyo Healthcare District - Lab;Bishop=DXF003020",
          },
          {
            id: "Northern Inyo Healthcare District;Northern Inyo Healthcare District - Hospital;Bishop=DXF003021",
            label:
              "Northern Inyo Healthcare District;Northern Inyo Healthcare District - Hospital;Bishop=DXF003021",
          },
          {
            id: "Northern Inyo Healthcare District;Northern Inyo Healthcare District - Rural Health Clinic;Bishop=DXF003022",
            label:
              "Northern Inyo Healthcare District;Northern Inyo Healthcare District - Rural Health Clinic;Bishop=DXF003022",
          },
          {
            id: "Northshore Fire Protection District; ;Lucerne=DXF004246",
            label: "Northshore Fire Protection District; ;Lucerne=DXF004246",
          },
          {
            id: "Norwalk Meadows Nursing Center; ;Norwalk=DXF004863",
            label: "Norwalk Meadows Nursing Center; ;Norwalk=DXF004863",
          },
          {
            id: "Novak Medical Group, Inc.; ;San Diego=DXF002136",
            label: "Novak Medical Group, Inc.; ;San Diego=DXF002136",
          },
          {
            id: "Nutrition For You; ;Gold River=DXF001439",
            label: "Nutrition For You; ;Gold River=DXF001439",
          },
          {
            id: "Oak Ridge Healthcare Center; ;Roseville=DXF004739",
            label: "Oak Ridge Healthcare Center; ;Roseville=DXF004739",
          },
          {
            id: "Oak Valley Hospital District; ;Oakdale=DXF003406",
            label: "Oak Valley Hospital District; ;Oakdale=DXF003406",
          },
          {
            id: "Oakview Skilled Nursing; ;Thousand Oaks=DXF003741",
            label: "Oakview Skilled Nursing; ;Thousand Oaks=DXF003741",
          },
          {
            id: "OB GYN ASSOICATES OF TURLOCK; ;turlock=DXF004002",
            label: "OB GYN ASSOICATES OF TURLOCK; ;turlock=DXF004002",
          },
          {
            id: "Obria Medical Clinics- Santa Ana; ;Santa Ana=DXF001850",
            label: "Obria Medical Clinics- Santa Ana; ;Santa Ana=DXF001850",
          },
          {
            id: "Obstetrix Medical Group; ;LOS ALAMITOS=DXF001446",
            label: "Obstetrix Medical Group; ;LOS ALAMITOS=DXF001446",
          },
          {
            id: "Obstetrix Medical Group;Magella Medicla Group, Inc.;LOS ALAMITOS=DXF001546",
            label:
              "Obstetrix Medical Group;Magella Medicla Group, Inc.;LOS ALAMITOS=DXF001546",
          },
          {
            id: "Obstetrix Medical Group;Obstetrix Medical Group of California, P.C.;LOS ALAMITOS=DXF001548",
            label:
              "Obstetrix Medical Group;Obstetrix Medical Group of California, P.C.;LOS ALAMITOS=DXF001548",
          },
          {
            id: "Obstetrix Medical Group;Obstetrix Medical Group of Sacramento, P.C.;LOS ALAMITOS=DXF001549",
            label:
              "Obstetrix Medical Group;Obstetrix Medical Group of Sacramento, P.C.;LOS ALAMITOS=DXF001549",
          },
          {
            id: "Obstetrix Medical Group;Obstetrix Medcial Group of the Central Coast, P.C.;LOS ALAMITOS=DXF001550",
            label:
              "Obstetrix Medical Group;Obstetrix Medcial Group of the Central Coast, P.C.;LOS ALAMITOS=DXF001550",
          },
          {
            id: "Ocean Surgery Center; ;Torrance=DXF000613",
            label: "Ocean Surgery Center; ;Torrance=DXF000613",
          },
          {
            id: "Oceanside Harbor Holdings LLC; ;Anaheim=DXF004862",
            label: "Oceanside Harbor Holdings LLC; ;Anaheim=DXF004862",
          },
          {
            id: "Oceanview Dermatology; ;Santa Barbara=DXF002579",
            label: "Oceanview Dermatology; ;Santa Barbara=DXF002579",
          },
          {
            id: "Odd Fellows Home of California; ;Napa=DXF004718",
            label: "Odd Fellows Home of California; ;Napa=DXF004718",
          },
          {
            id: "ODOCHI NWAGWU, MD INC dba ADELANTO MEDICAL CLINIC; ;Adelanto=DXF001195",
            label:
              "ODOCHI NWAGWU, MD INC dba ADELANTO MEDICAL CLINIC; ;Adelanto=DXF001195",
          },
          {
            id: "Office of Dr Madireddi; ;San Jose=DXF003333",
            label: "Office of Dr Madireddi; ;San Jose=DXF003333",
          },
          {
            id: "Ohana Pediatrics, Inc.; ;Torrance=DXF004430",
            label: "Ohana Pediatrics, Inc.; ;Torrance=DXF004430",
          },
          {
            id: "Ojai Valley Family Med. Group; ;Ojai=DXF002151",
            label: "Ojai Valley Family Med. Group; ;Ojai=DXF002151",
          },
          {
            id: "Ole Health; ;Napa=DXF003282",
            label: "Ole Health; ;Napa=DXF003282",
          },
          {
            id: "Oleg M. Gavrilyuk, M.D.; ;San Diego=DXF001523",
            label: "Oleg M. Gavrilyuk, M.D.; ;San Diego=DXF001523",
          },
          {
            id: "Oliverio Medical Corporation; ;Banning=DXF001194",
            label: "Oliverio Medical Corporation; ;Banning=DXF001194",
          },
          {
            id: "Omni Family Health; ;Bakersfield=DXF002078",
            label: "Omni Family Health; ;Bakersfield=DXF002078",
          },
          {
            id: "Omnicare Medical Group Inc; ;Los Angeles=DXF002736",
            label: "Omnicare Medical Group Inc; ;Los Angeles=DXF002736",
          },
          {
            id: "On Lok Senior Health Services; ;San Francisco=DXF002667",
            label: "On Lok Senior Health Services; ;San Francisco=DXF002667",
          },
          {
            id: "One Community Health; ;Sacramento=DXF002053",
            label: "One Community Health; ;Sacramento=DXF002053",
          },
          {
            id: "One Degree; ;Oakland=DXF002921",
            label: "One Degree; ;Oakland=DXF002921",
          },
          {
            id: "One LifeDiet; ;Solana Beach=DXF000161",
            label: "One LifeDiet; ;Solana Beach=DXF000161",
          },
          {
            id: "ONEgeneration; ;Van Nuys=DXF002741",
            label: "ONEgeneration; ;Van Nuys=DXF002741",
          },
          {
            id: "Online Care Network II PC; ;Boston=DXF002928",
            label: "Online Care Network II PC; ;Boston=DXF002928",
          },
          {
            id: "ONYINYE OKEZIE MD INC; ;Bakersfield=DXF004127",
            label: "ONYINYE OKEZIE MD INC; ;Bakersfield=DXF004127",
          },
          {
            id: "Open Arms Community Health & Service Center; ;Los Angeles=DXF002782",
            label:
              "Open Arms Community Health & Service Center; ;Los Angeles=DXF002782",
          },
          {
            id: "Open Arms Community Health & Service Center;Open Arms Temporary Living;Los Angeles=DXF002783",
            label:
              "Open Arms Community Health & Service Center;Open Arms Temporary Living;Los Angeles=DXF002783",
          },
          {
            id: "Open Door Community Health Center; ;Arcata=DXF003316",
            label: "Open Door Community Health Center; ;Arcata=DXF003316",
          },
          {
            id: "Operation Samahan Inc; ;National City=DXF000874",
            label: "Operation Samahan Inc; ;National City=DXF000874",
          },
          {
            id: "OPHC, LLC; ;Tujunga=DXF003508",
            label: "OPHC, LLC; ;Tujunga=DXF003508",
          },
          {
            id: "Ophthalmology Associates of the Valley; ;Encino=DXF001662",
            label: "Ophthalmology Associates of the Valley; ;Encino=DXF001662",
          },
          {
            id: "Optima Ophthalmic Medical Assoc, Inc; ;Hayward=DXF001810",
            label: "Optima Ophthalmic Medical Assoc, Inc; ;Hayward=DXF001810",
          },
          {
            id: "Optimal Hospice, Inc.; ;Bakersfield=DXF004808",
            label: "Optimal Hospice, Inc.; ;Bakersfield=DXF004808",
          },
          {
            id: "Optimal Hospice, Inc.;Optimal Hospice, Inc.;Salt Lake City=DXF004914",
            label:
              "Optimal Hospice, Inc.;Optimal Hospice, Inc.;Salt Lake City=DXF004914",
          },
          {
            id: "Optimal Hospice, Inc.;Optimal Hospice, Inc.;Salt Lake City=DXF004915",
            label:
              "Optimal Hospice, Inc.;Optimal Hospice, Inc.;Salt Lake City=DXF004915",
          },
          {
            id: "Optimal Hospice, Inc.;Optimal Hospice, Inc.;Salt Lake City=DXF004916",
            label:
              "Optimal Hospice, Inc.;Optimal Hospice, Inc.;Salt Lake City=DXF004916",
          },
          {
            id: "Optimal Hospice, Inc.;Bristol Hospice - Sacramento, L.L.C.;Salt Lake City=DXF004917",
            label:
              "Optimal Hospice, Inc.;Bristol Hospice - Sacramento, L.L.C.;Salt Lake City=DXF004917",
          },
          {
            id: "Optimal Hospice, Inc.;Gerinet Physician Services, Inc.;Salt Lake City=DXF004918",
            label:
              "Optimal Hospice, Inc.;Gerinet Physician Services, Inc.;Salt Lake City=DXF004918",
          },
          {
            id: "Optimist Boys' Home and Ranch; ;Los Angeles=DXF002691",
            label: "Optimist Boys' Home and Ranch; ;Los Angeles=DXF002691",
          },
          {
            id: "Optum; ;Irvine=DXF004519",
            label: "Optum; ;Irvine=DXF004519",
          },
          {
            id: "Optum Health Plan of California; ;Denver=DXF000648",
            label: "Optum Health Plan of California; ;Denver=DXF000648",
          },
          {
            id: "Orang County Vascular and endovascular surgery; ;Fountain Valley=DXF003687",
            label:
              "Orang County Vascular and endovascular surgery; ;Fountain Valley=DXF003687",
          },
          {
            id: "Orange Coast Women\u2019s Health Care; ;Laguna Hills=DXF002173",
            label:
              "Orange Coast Women\u2019s Health Care; ;Laguna Hills=DXF002173",
          },
          {
            id: "Orange County Advantage Medical Group, Inc.; ;Cypress=DXF004830",
            label:
              "Orange County Advantage Medical Group, Inc.; ;Cypress=DXF004830",
          },
          {
            id: "Orange County Global Medical Centers, Inc. dba Orange County Global Medical Center; ;Santa Ana=DXF003945",
            label:
              "Orange County Global Medical Centers, Inc. dba Orange County Global Medical Center; ;Santa Ana=DXF003945",
          },
          {
            id: "Orange County Global Medical Centers, Inc. dba Orange County Global Medical Center;Orange County Global Medical Center Hospital Laboratory;Santa Ana=DXF004079",
            label:
              "Orange County Global Medical Centers, Inc. dba Orange County Global Medical Center;Orange County Global Medical Center Hospital Laboratory;Santa Ana=DXF004079",
          },
          {
            id: "Orange County Health Authority (dba CalOptima Health); ;Orange=DXF002394",
            label:
              "Orange County Health Authority (dba CalOptima Health); ;Orange=DXF002394",
          },
          {
            id: "Orange County Orthopaedics & Sports Med Grp; ;Laguna Hills=DXF000148",
            label:
              "Orange County Orthopaedics & Sports Med Grp; ;Laguna Hills=DXF000148",
          },
          {
            id: "Orange County Physicians IPA Medical Group, Inc. dba Noble Community Medical Associates, Inc. of Mid-Orange County; ;Cypress=DXF004735",
            label:
              "Orange County Physicians IPA Medical Group, Inc. dba Noble Community Medical Associates, Inc. of Mid-Orange County; ;Cypress=DXF004735",
          },
          {
            id: "Orange County's United Way dba Orange County United Way; ;Irvine=DXF003280",
            label:
              "Orange County's United Way dba Orange County United Way; ;Irvine=DXF003280",
          },
          {
            id: "Orangeburg Medical Group; ;Modesto=DXF004579",
            label: "Orangeburg Medical Group; ;Modesto=DXF004579",
          },
          {
            id: "Orchard Hospital Medical Specialty Center; ;Gridley=DXF004971",
            label:
              "Orchard Hospital Medical Specialty Center; ;Gridley=DXF004971",
          },
          {
            id: "Orchard Post Acute Care; ;Vacaville=DXF004734",
            label: "Orchard Post Acute Care; ;Vacaville=DXF004734",
          },
          {
            id: "Orchards Health Center; ;Rancho Mission Viejo=DXF003742",
            label: "Orchards Health Center; ;Rancho Mission Viejo=DXF003742",
          },
          {
            id: "Oroville Hospital; ;Oroville=DXF004575",
            label: "Oroville Hospital; ;Oroville=DXF004575",
          },
          {
            id: "Orthopaedic Institude for Children; ;Los Angeles=DXF000426",
            label: "Orthopaedic Institude for Children; ;Los Angeles=DXF000426",
          },
          {
            id: "Orthopaedic Surgery and Sports Medicine; ;Temecula=DXF000407",
            label:
              "Orthopaedic Surgery and Sports Medicine; ;Temecula=DXF000407",
          },
          {
            id: "Orthopaedic Surgery and Sports Medicine;ONE Orthopaedics PC;Temecula=DXF000408",
            label:
              "Orthopaedic Surgery and Sports Medicine;ONE Orthopaedics PC;Temecula=DXF000408",
          },
          {
            id: "Orthopaedic Surgery and Sports Medicine;Orthopaedic Surgery and Sports Medicine Associates;Temecula=DXF000409",
            label:
              "Orthopaedic Surgery and Sports Medicine;Orthopaedic Surgery and Sports Medicine Associates;Temecula=DXF000409",
          },
          {
            id: "Orthopaedic Surgery and Sports Medicine;Kelley Sports Medicine Inc.;Temecula=DXF000410",
            label:
              "Orthopaedic Surgery and Sports Medicine;Kelley Sports Medicine Inc.;Temecula=DXF000410",
          },
          {
            id: "Orthopaedic Surgery and Sports Medicine;Dr. Matthew D. Robinson Inc.;Temecula=DXF000411",
            label:
              "Orthopaedic Surgery and Sports Medicine;Dr. Matthew D. Robinson Inc.;Temecula=DXF000411",
          },
          {
            id: "Orthopaedic Surgery and Sports Medicine;Dr. Michael H. French Inc .;Temecula=DXF000412",
            label:
              "Orthopaedic Surgery and Sports Medicine;Dr. Michael H. French Inc .;Temecula=DXF000412",
          },
          {
            id: "Orthopedic Associates of Northern California; ;Chico=DXF000810",
            label:
              "Orthopedic Associates of Northern California; ;Chico=DXF000810",
          },
          {
            id: "Oscar Health Plan of California; ;marina del rey=DXF000760",
            label: "Oscar Health Plan of California; ;marina del rey=DXF000760",
          },
          {
            id: "Our Family Medical Group, Inc.; ;Pomona=DXF002037",
            label: "Our Family Medical Group, Inc.; ;Pomona=DXF002037",
          },
          {
            id: "Our Family Medical Group, Inc.;Hospitalist Corporation of Inland Empire;Pomona=DXF002054",
            label:
              "Our Family Medical Group, Inc.;Hospitalist Corporation of Inland Empire;Pomona=DXF002054",
          },
          {
            id: "Our Family Medical Group, Inc.;Haven Eye Institute;Pomona=DXF002055",
            label:
              "Our Family Medical Group, Inc.;Haven Eye Institute;Pomona=DXF002055",
          },
          {
            id: "Our Family Medical Group, Inc.;Dwight Goddard Md Inc;Rancho Cucamonga=DXF002059",
            label:
              "Our Family Medical Group, Inc.;Dwight Goddard Md Inc;Rancho Cucamonga=DXF002059",
          },
          {
            id: "Oxnard Family Circle ADHC; ;Oxnard=DXF003640",
            label: "Oxnard Family Circle ADHC; ;Oxnard=DXF003640",
          },
          {
            id: "Oxy Respiratory & Home Medical Equipment Specialists, Inc.; ;Van Nuys=DXF004997",
            label:
              "Oxy Respiratory & Home Medical Equipment Specialists, Inc.; ;Van Nuys=DXF004997",
          },
          {
            id: "P K A Medical Corporation; ;Santa Ana=DXF003704",
            label: "P K A Medical Corporation; ;Santa Ana=DXF003704",
          },
          {
            id: "P. Joseph Frawley,M.D., Medical Group Inc.; ;Santa Barbara=DXF001878",
            label:
              "P. Joseph Frawley,M.D., Medical Group Inc.; ;Santa Barbara=DXF001878",
          },
          {
            id: "Pacific Care Nursing Center; ;Long Beach=DXF002986",
            label: "Pacific Care Nursing Center; ;Long Beach=DXF002986",
          },
          {
            id: "Pacific Clinics; ;Campbell=DXF001159",
            label: "Pacific Clinics; ;Campbell=DXF001159",
          },
          {
            id: "Pacific Coast Surgical Group; ;San Diego=DXF000615",
            label: "Pacific Coast Surgical Group; ;San Diego=DXF000615",
          },
          {
            id: "Pacific Dermatology Institute; ;Redlands=DXF005398",
            label: "Pacific Dermatology Institute; ;Redlands=DXF005398",
          },
          {
            id: "Pacific Endocrinology; ;Chula Vista=DXF002115",
            label: "Pacific Endocrinology; ;Chula Vista=DXF002115",
          },
          {
            id: "Pacific Eye Associates; ;San Francisco=DXF005052",
            label: "Pacific Eye Associates; ;San Francisco=DXF005052",
          },
          {
            id: "Pacific Imaging Management, LLC.; ;Atascadero=DXF001721",
            label: "Pacific Imaging Management, LLC.; ;Atascadero=DXF001721",
          },
          {
            id: "Pacific Inpatient Medical Group; ;San Francisco=DXF000542",
            label: "Pacific Inpatient Medical Group; ;San Francisco=DXF000542",
          },
          {
            id: "Pacific Neurology; ;San Diego=DXF001370",
            label: "Pacific Neurology; ;San Diego=DXF001370",
          },
          {
            id: "Pacific Neuropsychiatric Specialist; ;MISSION VIEJO=DXF004362",
            label:
              "Pacific Neuropsychiatric Specialist; ;MISSION VIEJO=DXF004362",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Costa Mesa=DXF004337",
            label:
              "Pacific Neuropsychiatric Specialists; ;Costa Mesa=DXF004337",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Eastvale=DXF004341",
            label: "Pacific Neuropsychiatric Specialists; ;Eastvale=DXF004341",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Orange=DXF004352",
            label: "Pacific Neuropsychiatric Specialists; ;Orange=DXF004352",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Costa Mesa=DXF004353",
            label:
              "Pacific Neuropsychiatric Specialists; ;Costa Mesa=DXF004353",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Huntington Beach=DXF004354",
            label:
              "Pacific Neuropsychiatric Specialists; ;Huntington Beach=DXF004354",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Huntington Beach=DXF004355",
            label:
              "Pacific Neuropsychiatric Specialists; ;Huntington Beach=DXF004355",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Rancho Santa Margarita=DXF004358",
            label:
              "Pacific Neuropsychiatric Specialists; ;Rancho Santa Margarita=DXF004358",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Orange=DXF004365",
            label: "Pacific Neuropsychiatric Specialists; ;Orange=DXF004365",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Costa Mesa=DXF004369",
            label:
              "Pacific Neuropsychiatric Specialists; ;Costa Mesa=DXF004369",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Orange=DXF004407",
            label: "Pacific Neuropsychiatric Specialists; ;Orange=DXF004407",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Costa Mesa=DXF004416",
            label:
              "Pacific Neuropsychiatric Specialists; ;Costa Mesa=DXF004416",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Orange=DXF004425",
            label: "Pacific Neuropsychiatric Specialists; ;Orange=DXF004425",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Orange=DXF004428",
            label: "Pacific Neuropsychiatric Specialists; ;Orange=DXF004428",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Huntington Beach=DXF004443",
            label:
              "Pacific Neuropsychiatric Specialists; ;Huntington Beach=DXF004443",
          },
          {
            id: "Pacific Neuropsychiatric Specialists; ;Corona=DXF004451",
            label: "Pacific Neuropsychiatric Specialists; ;Corona=DXF004451",
          },
          {
            id: "Pacific Neuropsychiatrist Specialists; ;Santa Ana=DXF004477",
            label:
              "Pacific Neuropsychiatrist Specialists; ;Santa Ana=DXF004477",
          },
          {
            id: "Pacific Neuropsychiatrist Specialists;Pacific Neuropsychiatric Specialist;Santa Ana=DXF004478",
            label:
              "Pacific Neuropsychiatrist Specialists;Pacific Neuropsychiatric Specialist;Santa Ana=DXF004478",
          },
          {
            id: "Pacific Palms Healthcare; ;Long Beach=DXF002993",
            label: "Pacific Palms Healthcare; ;Long Beach=DXF002993",
          },
          {
            id: "Pacific Pulmonary Medical Group; ;Riverside=DXF001087",
            label: "Pacific Pulmonary Medical Group; ;Riverside=DXF001087",
          },
          {
            id: "Pacific Pulmonary Medical Group; ;Riverside=DXF002659",
            label: "Pacific Pulmonary Medical Group; ;Riverside=DXF002659",
          },
          {
            id: "Pacold Medical Clinic; ;Cathedral City=DXF002415",
            label: "Pacold Medical Clinic; ;Cathedral City=DXF002415",
          },
          {
            id: "PACS; ;Farmington=DXF002965",
            label: "PACS; ;Farmington=DXF002965",
          },
          {
            id: "PACS;(Garden City Healthcare Center) Fig Holdings, LLC;Modesto=DXF003032",
            label:
              "PACS;(Garden City Healthcare Center) Fig Holdings, LLC;Modesto=DXF003032",
          },
          {
            id: "PACS;(Alhambra Post Acute) Martinez SNF Healthcare, LLC;Martinez=DXF003036",
            label:
              "PACS;(Alhambra Post Acute) Martinez SNF Healthcare, LLC;Martinez=DXF003036",
          },
          {
            id: "PACS;(McClure Post Acute) McClureidence Opco, LLC;Oakland=DXF003037",
            label:
              "PACS;(McClure Post Acute) McClureidence Opco, LLC;Oakland=DXF003037",
          },
          {
            id: "PACS;(All Saints Maubert) Maubertidence Opco, LLC;San Leandro=DXF003038",
            label:
              "PACS;(All Saints Maubert) Maubertidence Opco, LLC;San Leandro=DXF003038",
          },
          {
            id: "PACS;(All Saints Subacute & Transitional Care) All Saintsidence Opco, LLC;San Leandro=DXF003039",
            label:
              "PACS;(All Saints Subacute & Transitional Care) All Saintsidence Opco, LLC;San Leandro=DXF003039",
          },
          {
            id: "PACS;(Antelope Valley Care Center) Antelope Valley SNF Healthcare, LLC;Lancaster=DXF003040",
            label:
              "PACS;(Antelope Valley Care Center) Antelope Valley SNF Healthcare, LLC;Lancaster=DXF003040",
          },
          {
            id: "PACS;(Arbor Post Acute) Arbor Post Acute, LLC;Chico=DXF003041",
            label:
              "PACS;(Arbor Post Acute) Arbor Post Acute, LLC;Chico=DXF003041",
          },
          {
            id: "PACS;(Arlington Gardens Care Center) Honeyflower Holdings, LLC;Riverside=DXF003042",
            label:
              "PACS;(Arlington Gardens Care Center) Honeyflower Holdings, LLC;Riverside=DXF003042",
          },
          {
            id: "PACS;(Arden Park Post Acute) Arden Glen Healthcare, LLC;Sacramento=DXF003043",
            label:
              "PACS;(Arden Park Post Acute) Arden Glen Healthcare, LLC;Sacramento=DXF003043",
          },
          {
            id: "PACS;(Artesia Palms Care Center) Artesia Community Healthcare, LLC;Artesia=DXF003044",
            label:
              "PACS;(Artesia Palms Care Center) Artesia Community Healthcare, LLC;Artesia=DXF003044",
          },
          {
            id: "PACS;(Arvin Post Acute) Campus Community Healthcare, LLC;Arvin=DXF003045",
            label:
              "PACS;(Arvin Post Acute) Campus Community Healthcare, LLC;Arvin=DXF003045",
          },
          {
            id: "PACS;(Auburn Oaks Care Center) Aloe Holdings, LLC;Auburn=DXF003046",
            label:
              "PACS;(Auburn Oaks Care Center) Aloe Holdings, LLC;Auburn=DXF003046",
          },
          {
            id: "PACS;(Aviara Healthcare Center) Olive Holdings, LLC;Encinitas=DXF003047",
            label:
              "PACS;(Aviara Healthcare Center) Olive Holdings, LLC;Encinitas=DXF003047",
          },
          {
            id: "PACS;(Bakersfield Post Acute) Bakersfield SNF Healthcare, LLC;Bakersfield=DXF003048",
            label:
              "PACS;(Bakersfield Post Acute) Bakersfield SNF Healthcare, LLC;Bakersfield=DXF003048",
          },
          {
            id: "PACS;(Balboa Nursing & Rehabilitation Center) Balboa Healthcare, Inc.;San Diego=DXF003049",
            label:
              "PACS;(Balboa Nursing & Rehabilitation Center) Balboa Healthcare, Inc.;San Diego=DXF003049",
          },
          {
            id: "PACS;(Beachwood Post Acute & Rehab) Cantaloupe Holdings, LLC;Santa Monica=DXF003050",
            label:
              "PACS;(Beachwood Post Acute & Rehab) Cantaloupe Holdings, LLC;Santa Monica=DXF003050",
          },
          {
            id: "PACS;(Bel Vista Healthcare Center) Villa De La Mar, Inc.;Long Beach=DXF003051",
            label:
              "PACS;(Bel Vista Healthcare Center) Villa De La Mar, Inc.;Long Beach=DXF003051",
          },
          {
            id: "PACS;(Beverly Hills Rehabilitation Centre) Beverly Hills Rehabilitation Centre, LLC;Los Angeles=DXF003052",
            label:
              "PACS;(Beverly Hills Rehabilitation Centre) Beverly Hills Rehabilitation Centre, LLC;Los Angeles=DXF003052",
          },
          {
            id: "PACS;(Bishop Care Center) Ixia Holdings, LLC;Bishop=DXF003053",
            label:
              "PACS;(Bishop Care Center) Ixia Holdings, LLC;Bishop=DXF003053",
          },
          {
            id: "PACS;(Canyon Springs Post Acute) Dragonfruit Holdings, LLC;San Jose=DXF003054",
            label:
              "PACS;(Canyon Springs Post Acute) Dragonfruit Holdings, LLC;San Jose=DXF003054",
          },
          {
            id: "PACS;(Central Gardens Post Acute) Golden California Healthcare, LLC;San Francisco,=DXF003055",
            label:
              "PACS;(Central Gardens Post Acute) Golden California Healthcare, LLC;San Francisco,=DXF003055",
          },
          {
            id: "PACS;(City View Post Acute) Pine Street SNF, LLC;San Francisco=DXF003056",
            label:
              "PACS;(City View Post Acute) Pine Street SNF, LLC;San Francisco=DXF003056",
          },
          {
            id: "PACS;(Copper Ridge Healthcare Center) Applewood Operating Company, LLC;Redding=DXF003057",
            label:
              "PACS;(Copper Ridge Healthcare Center) Applewood Operating Company, LLC;Redding=DXF003057",
          },
          {
            id: "PACS;(Costa Del Sol Healthcare) East Los Angeles Healthcare, LLC;Los Angeles,=DXF003058",
            label:
              "PACS;(Costa Del Sol Healthcare) East Los Angeles Healthcare, LLC;Los Angeles,=DXF003058",
          },
          {
            id: "PACS;(Cottonwood Canyon Healthcare Center) Koa Holdings, LLC;El Cajon=DXF003059",
            label:
              "PACS;(Cottonwood Canyon Healthcare Center) Koa Holdings, LLC;El Cajon=DXF003059",
          },
          {
            id: "PACS;(Country Hills Post Acute) El Cajon Post Acute, LLC;El Cajon=DXF003060",
            label:
              "PACS;(Country Hills Post Acute) El Cajon Post Acute, LLC;El Cajon=DXF003060",
          },
          {
            id: "PACS;(Crystal Cove Care Center) Norway Maple Holdings, LLC;Newport Beach,=DXF003061",
            label:
              "PACS;(Crystal Cove Care Center) Norway Maple Holdings, LLC;Newport Beach,=DXF003061",
          },
          {
            id: "PACS;(Crystal Ridge Care Center) Edelweiss Holdings, LLC;Grass Valley=DXF003062",
            label:
              "PACS;(Crystal Ridge Care Center) Edelweiss Holdings, LLC;Grass Valley=DXF003062",
          },
          {
            id: "PACS;(Cypress Ridge Care Center) Marjoram Holdings, LLC;Monterey=DXF003063",
            label:
              "PACS;(Cypress Ridge Care Center) Marjoram Holdings, LLC;Monterey=DXF003063",
          },
          {
            id: "PACS;(Del Rosa Villa) Del Rosa Villaidence Opco, LLC;San Bernardino=DXF003064",
            label:
              "PACS;(Del Rosa Villa) Del Rosa Villaidence Opco, LLC;San Bernardino=DXF003064",
          },
          {
            id: "PACS;(Del Rosa Villa) Del Rosa Villaidence Opco, LLC;San Bernardino=DXF003065",
            label:
              "PACS;(Del Rosa Villa) Del Rosa Villaidence Opco, LLC;San Bernardino=DXF003065",
          },
          {
            id: "PACS;(Delta View Post Acute) Antioch Dunes Healthcare, LLC;Antioch=DXF003066",
            label:
              "PACS;(Delta View Post Acute) Antioch Dunes Healthcare, LLC;Antioch=DXF003066",
          },
          {
            id: "PACS;(Diablo Valley Post Acute) Concord SNF Healthcare, LLC;Concord=DXF003067",
            label:
              "PACS;(Diablo Valley Post Acute) Concord SNF Healthcare, LLC;Concord=DXF003067",
          },
          {
            id: "PACS;(East Bay Post Acute) Bilberry Holdings, LLC;Castro Valley=DXF003068",
            label:
              "PACS;(East Bay Post Acute) Bilberry Holdings, LLC;Castro Valley=DXF003068",
          },
          {
            id: "PACS;(Escondido Post Acute) Escondido Healthcare, LLC;Escondido=DXF003069",
            label:
              "PACS;(Escondido Post Acute) Escondido Healthcare, LLC;Escondido=DXF003069",
          },
          {
            id: "PACS;(Gateway Post Acute) Valley Careidence Opco, LLC;Porterville=DXF003070",
            label:
              "PACS;(Gateway Post Acute) Valley Careidence Opco, LLC;Porterville=DXF003070",
          },
          {
            id: "PACS;(Hanford Post Acute) Hanfordidence Opco, LLC;Hanford=DXF003071",
            label:
              "PACS;(Hanford Post Acute) Hanfordidence Opco, LLC;Hanford=DXF003071",
          },
          {
            id: "PACS;(Hayward Gardens Post Acute) Hayward SNF Healthcare, LLC;Hayward=DXF003072",
            label:
              "PACS;(Hayward Gardens Post Acute) Hayward SNF Healthcare, LLC;Hayward=DXF003072",
          },
          {
            id: "PACS;(Highland Palms Healthcare Center) Cedar Holdings, LLC;Highland=DXF003073",
            label:
              "PACS;(Highland Palms Healthcare Center) Cedar Holdings, LLC;Highland=DXF003073",
          },
          {
            id: "PACS;(Jurupa Hills Post Acute ) Mt Rubidouxidence Opco, LLC;Riverside=DXF003074",
            label:
              "PACS;(Jurupa Hills Post Acute ) Mt Rubidouxidence Opco, LLC;Riverside=DXF003074",
          },
          {
            id: "PACS;(Huntington Valley Healthcare Center) Douglas Fir Holdings, LLC;Huntington Beach,=DXF003075",
            label:
              "PACS;(Huntington Valley Healthcare Center) Douglas Fir Holdings, LLC;Huntington Beach,=DXF003075",
          },
          {
            id: "PACS;(Kennedy Care Center) Fairfax Healthcare, LLC;Los Angeles=DXF003076",
            label:
              "PACS;(Kennedy Care Center) Fairfax Healthcare, LLC;Los Angeles=DXF003076",
          },
          {
            id: "PACS;(Kern River Transitional Care) Bakersfieldidence Opco, LLC;Bakersfield=DXF003077",
            label:
              "PACS;(Kern River Transitional Care) Bakersfieldidence Opco, LLC;Bakersfield=DXF003077",
          },
          {
            id: "PACS;(La Mesa Healthcare Center) Elm Holdings, LLC;La Mesa=DXF003078",
            label:
              "PACS;(La Mesa Healthcare Center) Elm Holdings, LLC;La Mesa=DXF003078",
          },
          {
            id: "PACS;(La Paloma Healthcare Center) Italian Maple Holdings, LLC;Oceanside=DXF003079",
            label:
              "PACS;(La Paloma Healthcare Center) Italian Maple Holdings, LLC;Oceanside=DXF003079",
          },
          {
            id: "PACS;(Lakeport Post Acute) Lakeport Post Acute, LLC;Lakeport=DXF003080",
            label:
              "PACS;(Lakeport Post Acute) Lakeport Post Acute, LLC;Lakeport=DXF003080",
          },
          {
            id: "PACS;(Las Colinas Post Acute ) Ontarioidence Opco, LLC;Ontario=DXF003081",
            label:
              "PACS;(Las Colinas Post Acute ) Ontarioidence Opco, LLC;Ontario=DXF003081",
          },
          {
            id: "PACS;(Lincoln Meadows Care Center) Violet Holdings, LLC;Lincoln=DXF003082",
            label:
              "PACS;(Lincoln Meadows Care Center) Violet Holdings, LLC;Lincoln=DXF003082",
          },
          {
            id: "PACS;(Lindsay Gardens Nursing & Rehabilitation) Lindsay Gardensidence Opco, LLC;Lindsay=DXF003083",
            label:
              "PACS;(Lindsay Gardens Nursing & Rehabilitation) Lindsay Gardensidence Opco, LLC;Lindsay=DXF003083",
          },
          {
            id: "PACS;(Linwood Meadows Care Center) Snowdrop Holdings, LLC;Visalia=DXF003084",
            label:
              "PACS;(Linwood Meadows Care Center) Snowdrop Holdings, LLC;Visalia=DXF003084",
          },
          {
            id: "PACS;(Loma Linda Post Acute) Loma Linda SNF Healthcare, LLC;Loma Linda=DXF003085",
            label:
              "PACS;(Loma Linda Post Acute) Loma Linda SNF Healthcare, LLC;Loma Linda=DXF003085",
          },
          {
            id: "PACS;(Lone Tree Post Acute) Contra Loma Healthcare, LLC;Antioch=DXF003086",
            label:
              "PACS;(Lone Tree Post Acute) Contra Loma Healthcare, LLC;Antioch=DXF003086",
          },
          {
            id: "PACS;(Marin Post Acute) Marinidence Opco, LLC;San Rafael=DXF003087",
            label:
              "PACS;(Marin Post Acute) Marinidence Opco, LLC;San Rafael=DXF003087",
          },
          {
            id: "PACS;(Marysville Post Acute) Melon Holdings, LLC;Marysville=DXF003088",
            label:
              "PACS;(Marysville Post Acute) Melon Holdings, LLC;Marysville=DXF003088",
          },
          {
            id: "PACS;(McKinley Park Care Center) Azalea Holdings, LLC;Sacramento=DXF003089",
            label:
              "PACS;(McKinley Park Care Center) Azalea Holdings, LLC;Sacramento=DXF003089",
          },
          {
            id: "PACS;(Medical Hill Healthcare Center) Oaklandidence Opco, LLC;Oakland=DXF003090",
            label:
              "PACS;(Medical Hill Healthcare Center) Oaklandidence Opco, LLC;Oakland=DXF003090",
          },
          {
            id: "PACS;(Midtown Oaks Post Acute) White Fir Holdings, LLC;Sacramento=DXF003091",
            label:
              "PACS;(Midtown Oaks Post Acute) White Fir Holdings, LLC;Sacramento=DXF003091",
          },
          {
            id: "PACS;(Mirage Post Acute) Lancaster SNF Healthcare, LLC;Lancaster=DXF003092",
            label:
              "PACS;(Mirage Post Acute) Lancaster SNF Healthcare, LLC;Lancaster=DXF003092",
          },
          {
            id: "PACS;(Mission Valley Post Acute) Fremont SNF Healthcare, LLC;Fremont=DXF003093",
            label:
              "PACS;(Mission Valley Post Acute) Fremont SNF Healthcare, LLC;Fremont=DXF003093",
          },
          {
            id: "PACS;(Moraga Post Acute) Moragaidence Opco, LLC;Moraga=DXF003094",
            label:
              "PACS;(Moraga Post Acute) Moragaidence Opco, LLC;Moraga=DXF003094",
          },
          {
            id: "PACS;(Napa Post Acute) Napaidence Opco, LLC;Napa=DXF003095",
            label: "PACS;(Napa Post Acute) Napaidence Opco, LLC;Napa=DXF003095",
          },
          {
            id: "PACS;(Napa Valley Care Center) Petunia Holdings, LLC;Napa=DXF003096",
            label:
              "PACS;(Napa Valley Care Center) Petunia Holdings, LLC;Napa=DXF003096",
          },
          {
            id: "PACS;(Newport Beach Memory Care) Corktree Holdings, LLC;Newport Beach=DXF003097",
            label:
              "PACS;(Newport Beach Memory Care) Corktree Holdings, LLC;Newport Beach=DXF003097",
          },
          {
            id: "PACS;(North Pointe Care Center) North Sacramento Healthcare, LLC;Sacramento=DXF003098",
            label:
              "PACS;(North Pointe Care Center) North Sacramento Healthcare, LLC;Sacramento=DXF003098",
          },
          {
            id: "PACS;(Oak Glen Post Acute) Miravilla SNF Healthcare, LLC;Cherry Valley=DXF003099",
            label:
              "PACS;(Oak Glen Post Acute) Miravilla SNF Healthcare, LLC;Cherry Valley=DXF003099",
          },
          {
            id: "PACS;(Oak River Rehab) Magnolia Holdings, LLC;Anderson=DXF003100",
            label:
              "PACS;(Oak River Rehab) Magnolia Holdings, LLC;Anderson=DXF003100",
          },
          {
            id: "PACS;(Oakwood Gardens Care Center) Lily Holdings, LLC;Fresno=DXF003101",
            label:
              "PACS;(Oakwood Gardens Care Center) Lily Holdings, LLC;Fresno=DXF003101",
          },
          {
            id: "PACS;(Ocean Ridge Post Acute) Alamitos Ridge Heathcare, LLC;Long Beach=DXF003102",
            label:
              "PACS;(Ocean Ridge Post Acute) Alamitos Ridge Heathcare, LLC;Long Beach=DXF003102",
          },
          {
            id: "PACS;(Ojai Health & Rehabilitation) Ojai Healthidence Opco, LLC;Ojai=DXF003103",
            label:
              "PACS;(Ojai Health & Rehabilitation) Ojai Healthidence Opco, LLC;Ojai=DXF003103",
          },
          {
            id: "PACS;(Orchard Post Acute) Fresno Valley SNF, LLC;Fresno=DXF003104",
            label:
              "PACS;(Orchard Post Acute) Fresno Valley SNF, LLC;Fresno=DXF003104",
          },
          {
            id: "PACS;(Pacific Coast Post Acute) Salinasidence Opco, LLC;Salinas=DXF003105",
            label:
              "PACS;(Pacific Coast Post Acute) Salinasidence Opco, LLC;Salinas=DXF003105",
          },
          {
            id: "PACS;(Palomar Heights Post Acute) Palomar Heights Healthcare, LLC;Escondido=DXF003106",
            label:
              "PACS;(Palomar Heights Post Acute) Palomar Heights Healthcare, LLC;Escondido=DXF003106",
          },
          {
            id: "PACS;(Paradise Valley Health Care Center) Paradise Valley Health Care Center, Inc.;National City=DXF003107",
            label:
              "PACS;(Paradise Valley Health Care Center) Paradise Valley Health Care Center, Inc.;National City=DXF003107",
          },
          {
            id: "PACS;(Peninsula Post Acute) Pear Holdings, LLC;Burlingame=DXF003108",
            label:
              "PACS;(Peninsula Post Acute) Pear Holdings, LLC;Burlingame=DXF003108",
          },
          {
            id: "PACS;(Pine Creek Care Center) Daisy Holdings, LLC;Roseville=DXF003109",
            label:
              "PACS;(Pine Creek Care Center) Daisy Holdings, LLC;Roseville=DXF003109",
          },
          {
            id: "PACS;(Pleasant Hill Post Acute) Pleasant Hillidence Opco, LLC;Pleasant Hill=DXF003110",
            label:
              "PACS;(Pleasant Hill Post Acute) Pleasant Hillidence Opco, LLC;Pleasant Hill=DXF003110",
          },
          {
            id: "PACS;(Poway Healthcare Center) Poplar Holdings, LLC;Poway=DXF003111",
            label:
              "PACS;(Poway Healthcare Center) Poplar Holdings, LLC;Poway=DXF003111",
          },
          {
            id: "PACS;(Primrose Post Acute) Kumquat Holdings, LLC;Inglewood=DXF003112",
            label:
              "PACS;(Primrose Post Acute) Kumquat Holdings, LLC;Inglewood=DXF003112",
          },
          {
            id: "PACS;(Rancho Bellagio Post Acute) Moreno Valley SNF, LLC;Moreno Valley ,=DXF003129",
            label:
              "PACS;(Rancho Bellagio Post Acute) Moreno Valley SNF, LLC;Moreno Valley ,=DXF003129",
          },
          {
            id: "PACS;(Redlands Healthcare Center) Ash Holdings, LLC;Redlands=DXF003130",
            label:
              "PACS;(Redlands Healthcare Center) Ash Holdings, LLC;Redlands=DXF003130",
          },
          {
            id: "PACS;(Redwood Cove Healthcare Center) Nightshade Holdings, LLC;Ukiah=DXF003131",
            label:
              "PACS;(Redwood Cove Healthcare Center) Nightshade Holdings, LLC;Ukiah=DXF003131",
          },
          {
            id: "PACS;(Reo Vista Healthcare Center) Lilac Holdings, LLC;San Diego=DXF003132",
            label:
              "PACS;(Reo Vista Healthcare Center) Lilac Holdings, LLC;San Diego=DXF003132",
          },
          {
            id: "PACS;(Ridgeway Post Acute) Petaluma SNF Healthcare, LLC;Petaluma=DXF003133",
            label:
              "PACS;(Ridgeway Post Acute) Petaluma SNF Healthcare, LLC;Petaluma=DXF003133",
          },
          {
            id: "PACS;(River Valley Care Center) Flax Holdings, LLC;Live Oak=DXF003134",
            label:
              "PACS;(River Valley Care Center) Flax Holdings, LLC;Live Oak=DXF003134",
          },
          {
            id: "PACS;(Riverwalk Post Acute) Orange Treeidence Opco, LLC;Riverside=DXF003135",
            label:
              "PACS;(Riverwalk Post Acute) Orange Treeidence Opco, LLC;Riverside=DXF003135",
          },
          {
            id: "PACS;(Rock Creek Care Center) Ulmus Holdings, LLC;Auburn=DXF003136",
            label:
              "PACS;(Rock Creek Care Center) Ulmus Holdings, LLC;Auburn=DXF003136",
          },
          {
            id: "PACS;(Roseville Care Center) Crocus Holdings, LLC;Roseville=DXF003137",
            label:
              "PACS;(Roseville Care Center) Crocus Holdings, LLC;Roseville=DXF003137",
          },
          {
            id: "PACS;(Sacramento Post Acute) Oleander Holdings, LLC;Sacramento=DXF003138",
            label:
              "PACS;(Sacramento Post Acute) Oleander Holdings, LLC;Sacramento=DXF003138",
          },
          {
            id: "PACS;(Salinas Valley Post Acute) Salinas Community Healthcare, LLC;Salinas=DXF003139",
            label:
              "PACS;(Salinas Valley Post Acute) Salinas Community Healthcare, LLC;Salinas=DXF003139",
          },
          {
            id: "PACS;(San Bruno Skilled Nursing) San Brunoidence Opco, LLC;San Bruno=DXF003140",
            label:
              "PACS;(San Bruno Skilled Nursing) San Brunoidence Opco, LLC;San Bruno=DXF003140",
          },
          {
            id: "PACS;(San Diego Post Acute) Pepperbush Holdings, LLC;El Cajon=DXF003141",
            label:
              "PACS;(San Diego Post Acute) Pepperbush Holdings, LLC;El Cajon=DXF003141",
          },
          {
            id: "PACS;(San Francisco Post Acute) San Franciscoidence Opco, LLC;San Francisco=DXF003142",
            label:
              "PACS;(San Francisco Post Acute) San Franciscoidence Opco, LLC;San Francisco=DXF003142",
          },
          {
            id: "PACS;(San Jacinto Valley Post Acute) Hemet SNF Healthcare, LLC;Hemet=DXF003143",
            label:
              "PACS;(San Jacinto Valley Post Acute) Hemet SNF Healthcare, LLC;Hemet=DXF003143",
          },
          {
            id: "PACS;(San Joaquin Nursing Center ) Kern Valleyidence Opco, LLC;Bakersfield=DXF003144",
            label:
              "PACS;(San Joaquin Nursing Center ) Kern Valleyidence Opco, LLC;Bakersfield=DXF003144",
          },
          {
            id: "PACS;(San Miguel Villa) Tranquility, Inc. (Operator);Concord=DXF003145",
            label:
              "PACS;(San Miguel Villa) Tranquility, Inc. (Operator);Concord=DXF003145",
          },
          {
            id: "PACS;(Santa Cruz Post Acute) Santa Cruzidence Opco, LLC;Santa Cruz=DXF003146",
            label:
              "PACS;(Santa Cruz Post Acute) Santa Cruzidence Opco, LLC;Santa Cruz=DXF003146",
          },
          {
            id: "PACS;(Santa Rosa Post Acute) Santa Rosaidence Opco, LLC;Santa Rosa=DXF003147",
            label:
              "PACS;(Santa Rosa Post Acute) Santa Rosaidence Opco, LLC;Santa Rosa=DXF003147",
          },
          {
            id: "PACS;(Sequoia Transitional Care) Sun Villaidence Opco, LLC;Porterville=DXF003148",
            label:
              "PACS;(Sequoia Transitional Care) Sun Villaidence Opco, LLC;Porterville=DXF003148",
          },
          {
            id: "PACS;(Shadelands Post Acute) Grey Pine Holdings, LLC;Walnut Creek=DXF003149",
            label:
              "PACS;(Shadelands Post Acute) Grey Pine Holdings, LLC;Walnut Creek=DXF003149",
          },
          {
            id: "PACS;(Sherwood Oaks Post Acute) Westlake Oaks Healthcare, LLC;Thousand Oaks=DXF003150",
            label:
              "PACS;(Sherwood Oaks Post Acute) Westlake Oaks Healthcare, LLC;Thousand Oaks=DXF003150",
          },
          {
            id: "PACS;(Sierra Valley Rehab Center) Sierra Nevada SNF, LLC;Porterville=DXF003151",
            label:
              "PACS;(Sierra Valley Rehab Center) Sierra Nevada SNF, LLC;Porterville=DXF003151",
          },
          {
            id: "PACS;(Sonoma Post Acute) Sonomaidence Opco, LLC;Sonoma=DXF003152",
            label:
              "PACS;(Sonoma Post Acute) Sonomaidence Opco, LLC;Sonoma=DXF003152",
          },
          {
            id: "PACS;(St. Francis Healthcare Center) Hayward Health Center, LLC;Hayward=DXF003155",
            label:
              "PACS;(St. Francis Healthcare Center) Hayward Health Center, LLC;Hayward=DXF003155",
          },
          {
            id: "PACS;(Stoney Point Healthcare Center) Cucumber Holdings, LLC;Chatsworth=DXF003156",
            label:
              "PACS;(Stoney Point Healthcare Center) Cucumber Holdings, LLC;Chatsworth=DXF003156",
          },
          {
            id: "PACS;(Sundance Creek Post Acute) Cherry Valley SNF Healthcare, LLC;Banning=DXF003157",
            label:
              "PACS;(Sundance Creek Post Acute) Cherry Valley SNF Healthcare, LLC;Banning=DXF003157",
          },
          {
            id: "PACS;(Sunnyvale Post Acute) Jujube Holdings, LLC;Sunnyvale=DXF003158",
            label:
              "PACS;(Sunnyvale Post Acute) Jujube Holdings, LLC;Sunnyvale=DXF003158",
          },
          {
            id: "PACS;(Sunrise Post Acute) Banning SNF Healthcare, LLC;Banning=DXF003159",
            label:
              "PACS;(Sunrise Post Acute) Banning SNF Healthcare, LLC;Banning=DXF003159",
          },
          {
            id: "PACS;(Sunset Villa Post Acute) Long Beach Healthcare, LLC;Long Beach=DXF003161",
            label:
              "PACS;(Sunset Villa Post Acute) Long Beach Healthcare, LLC;Long Beach=DXF003161",
          },
          {
            id: "PACS;(The Pines at Placerville Healthcare Center) Gladiolus Holdings, LLC;Placerville=DXF003162",
            label:
              "PACS;(The Pines at Placerville Healthcare Center) Gladiolus Holdings, LLC;Placerville=DXF003162",
          },
          {
            id: "PACS;(Tiburon Hills Care Center) Tiburon Community SNF, LLC;Tiburon=DXF003163",
            label:
              "PACS;(Tiburon Hills Care Center) Tiburon Community SNF, LLC;Tiburon=DXF003163",
          },
          {
            id: "PACS;(Trellis Chino) Macadamia Holdings, LLC;Chino=DXF003164",
            label:
              "PACS;(Trellis Chino) Macadamia Holdings, LLC;Chino=DXF003164",
          },
          {
            id: "PACS;(University Care Center) Birch Holdings, LLC;San Diego,=DXF003165",
            label:
              "PACS;(University Care Center) Birch Holdings, LLC;San Diego,=DXF003165",
          },
          {
            id: "PACS;(Valley Pointe Nursing & Rehabilitation Center) Valley Pointeidence Opco, LLC;Castro Valley=DXF003166",
            label:
              "PACS;(Valley Pointe Nursing & Rehabilitation Center) Valley Pointeidence Opco, LLC;Castro Valley=DXF003166",
          },
          {
            id: "PACS;(Valley View Post Acute) El Monte SNF, LLC;El Monte=DXF003168",
            label:
              "PACS;(Valley View Post Acute) El Monte SNF, LLC;El Monte=DXF003168",
          },
          {
            id: "PACS;(Vasona Creek Healthcare Center) Golden Oak Holdings, LLC;Los Gatos=DXF003169",
            label:
              "PACS;(Vasona Creek Healthcare Center) Golden Oak Holdings, LLC;Los Gatos=DXF003169",
          },
          {
            id: "PACS;(Victorian Post Acute) Golden Gateidence Opco, LLC;San Francisco,=DXF003170",
            label:
              "PACS;(Victorian Post Acute) Golden Gateidence Opco, LLC;San Francisco,=DXF003170",
          },
          {
            id: "PACS;(Villa Las Palmas Healthcare Center) Jeffrey Pine Holdings, LLC;El Cajon,=DXF003171",
            label:
              "PACS;(Villa Las Palmas Healthcare Center) Jeffrey Pine Holdings, LLC;El Cajon,=DXF003171",
          },
          {
            id: "PACS;(Vineyard Post Acute) Petalumaidence Opco, LLC;Petaluma=DXF003172",
            label:
              "PACS;(Vineyard Post Acute) Petalumaidence Opco, LLC;Petaluma=DXF003172",
          },
          {
            id: "PACS;(Visalia Post Acute) Spruce Holdings, LLC;Visalia=DXF003173",
            label:
              "PACS;(Visalia Post Acute) Spruce Holdings, LLC;Visalia=DXF003173",
          },
          {
            id: "PACS;(Vista Real Post Acute) Beaumont SNF Healthcare, LLC;Beaumont=DXF003174",
            label:
              "PACS;(Vista Real Post Acute) Beaumont SNF Healthcare, LLC;Beaumont=DXF003174",
          },
          {
            id: "PACS;(Waterman Canyon Post Acute) Watermanidence Opco, LLC;San Bernardino=DXF003175",
            label:
              "PACS;(Waterman Canyon Post Acute) Watermanidence Opco, LLC;San Bernardino=DXF003175",
          },
          {
            id: "PACS;(West Valley Post Acute) West Valleyidence Opco, LLC;West Hills,=DXF003176",
            label:
              "PACS;(West Valley Post Acute) West Valleyidence Opco, LLC;West Hills,=DXF003176",
          },
          {
            id: "PACS;(Western Slope Health Center) Rosebud Holdings, LLC;Placerville=DXF003177",
            label:
              "PACS;(Western Slope Health Center) Rosebud Holdings, LLC;Placerville=DXF003177",
          },
          {
            id: "PACS;(Westgate Gardens Care Center) Thyme Holdings, LLC;Visalia=DXF003178",
            label:
              "PACS;(Westgate Gardens Care Center) Thyme Holdings, LLC;Visalia=DXF003178",
          },
          {
            id: "PACS;(Westview Healthcare Center) Kerria Holdings, LLC;Auburn=DXF003179",
            label:
              "PACS;(Westview Healthcare Center) Kerria Holdings, LLC;Auburn=DXF003179",
          },
          {
            id: "PACS;(White Blossom Care Center) Hawthorne Holdings, LLC;San Jose,=DXF003180",
            label:
              "PACS;(White Blossom Care Center) Hawthorne Holdings, LLC;San Jose,=DXF003180",
          },
          {
            id: "PACS;(Whitney Oaks Care Center) Queen Ann's Lace Holdings, LLC;Carmichael=DXF003181",
            label:
              "PACS;(Whitney Oaks Care Center) Queen Ann's Lace Holdings, LLC;Carmichael=DXF003181",
          },
          {
            id: "PACS;(Willow Creek Healthcare Center) Willow Creek Post Acute, LLC;Clovis=DXF003182",
            label:
              "PACS;(Willow Creek Healthcare Center) Willow Creek Post Acute, LLC;Clovis=DXF003182",
          },
          {
            id: "PACS;(Wolf Creek Care Center) Bluebell Holdings, LLC;Grass Valley=DXF003183",
            label:
              "PACS;(Wolf Creek Care Center) Bluebell Holdings, LLC;Grass Valley=DXF003183",
          },
          {
            id: "PACS;(Yuba City Post Acute) Guava Holdings, LLC;Yuba City=DXF003184",
            label:
              "PACS;(Yuba City Post Acute) Guava Holdings, LLC;Yuba City=DXF003184",
          },
          {
            id: "Pain Management Consultants; ;Encinitas=DXF000598",
            label: "Pain Management Consultants; ;Encinitas=DXF000598",
          },
          {
            id: "Pain Management Consultants;ROBERT E WAILES, M.D., PACIFIC SURGERY CENTER;Oceanside=DXF000600",
            label:
              "Pain Management Consultants;ROBERT E WAILES, M.D., PACIFIC SURGERY CENTER;Oceanside=DXF000600",
          },
          {
            id: "PAINCARE PROVIDERS; ;Irvine=DXF000378",
            label: "PAINCARE PROVIDERS; ;Irvine=DXF000378",
          },
          {
            id: "Pair Team; ;San Francisco=DXF002780",
            label: "Pair Team; ;San Francisco=DXF002780",
          },
          {
            id: "Pair Team Medical Group of CA; ;San Francisco=DXF001245",
            label: "Pair Team Medical Group of CA; ;San Francisco=DXF001245",
          },
          {
            id: "Palliative Partners; ;Riverside=DXF002912",
            label: "Palliative Partners; ;Riverside=DXF002912",
          },
          {
            id: "Palm Desert Pediatrics; ;Rancho Mirage=DXF003772",
            label: "Palm Desert Pediatrics; ;Rancho Mirage=DXF003772",
          },
          {
            id: "Palomar Health; ;Escondido=DXF001504",
            label: "Palomar Health; ;Escondido=DXF001504",
          },
          {
            id: "Palomar Health;Palomar Medical Center Poway;Poway=DXF002222",
            label:
              "Palomar Health;Palomar Medical Center Poway;Poway=DXF002222",
          },
          {
            id: "Palomar Health;Palomar Medical Center Escondido;Escondido=DXF002223",
            label:
              "Palomar Health;Palomar Medical Center Escondido;Escondido=DXF002223",
          },
          {
            id: "Palomar Health;The Villas at Poway;Poway=DXF002224",
            label: "Palomar Health;The Villas at Poway;Poway=DXF002224",
          },
          {
            id: "Para Latino Medical Center; ;Paramount=DXF003623",
            label: "Para Latino Medical Center; ;Paramount=DXF003623",
          },
          {
            id: "Paradise Valley Estates; ;Fairfield=DXF002465",
            label: "Paradise Valley Estates; ;Fairfield=DXF002465",
          },
          {
            id: "Parag Medical, Inc; ;San Clemente=DXF002392",
            label: "Parag Medical, Inc; ;San Clemente=DXF002392",
          },
          {
            id: "ParikshatOjas Inc; ;Bakersfield=DXF003621",
            label: "ParikshatOjas Inc; ;Bakersfield=DXF003621",
          },
          {
            id: "Parkview Julian LLC; ;Bakersfield=DXF003535",
            label: "Parkview Julian LLC; ;Bakersfield=DXF003535",
          },
          {
            id: "PARKVISTA AT MORNINGSIDE; ;Fullerton=DXF003731",
            label: "PARKVISTA AT MORNINGSIDE; ;Fullerton=DXF003731",
          },
          {
            id: "Particle Health; ;New york=DXF003230",
            label: "Particle Health; ;New york=DXF003230",
          },
          {
            id: "Partners in Care Foundation Inc.; ;San Fernando=DXF001826",
            label: "Partners in Care Foundation Inc.; ;San Fernando=DXF001826",
          },
          {
            id: "Partnership HealthPlan of California; ;Fairfield=DXF001480",
            label: "Partnership HealthPlan of California; ;Fairfield=DXF001480",
          },
          {
            id: "Pasadena Care Center; ;Pasadena=DXF005342",
            label: "Pasadena Care Center; ;Pasadena=DXF005342",
          },
          {
            id: "Pasadena Grove Health Center; ;Pasadena=DXF003608",
            label: "Pasadena Grove Health Center; ;Pasadena=DXF003608",
          },
          {
            id: "PathPoint; ;Santa Barbara=DXF002363",
            label: "PathPoint; ;Santa Barbara=DXF002363",
          },
          {
            id: "Pathway Family Services, Inc.; ;Bakersfield=DXF003407",
            label: "Pathway Family Services, Inc.; ;Bakersfield=DXF003407",
          },
          {
            id: "Patricia Henderson; ;Sacramento=DXF001171",
            label: "Patricia Henderson; ;Sacramento=DXF001171",
          },
          {
            id: "Patricia L James, MD Inc.; ;Palm Desert=DXF001741",
            label: "Patricia L James, MD Inc.; ;Palm Desert=DXF001741",
          },
          {
            id: "Patrocinia Magat, MD; ;Poway=DXF001419",
            label: "Patrocinia Magat, MD; ;Poway=DXF001419",
          },
          {
            id: "Patterns Behavioral Services; ;Brea=DXF004160",
            label: "Patterns Behavioral Services; ;Brea=DXF004160",
          },
          {
            id: "Paul D Hartman MD; ;Burlingame=DXF001363",
            label: "Paul D Hartman MD; ;Burlingame=DXF001363",
          },
          {
            id: "Paul J Robinson, DO; ;Castro Valley=DXF000671",
            label: "Paul J Robinson, DO; ;Castro Valley=DXF000671",
          },
          {
            id: "PAYMAN P. JOSEPH M.D., APC; ;Van Nuys=DXF003342",
            label: "PAYMAN P. JOSEPH M.D., APC; ;Van Nuys=DXF003342",
          },
          {
            id: "PAYMAN P. JOSEPH M.D., APC;MY CHOICE MEDICAL CENTER APC;Van Nuys=DXF004197",
            label:
              "PAYMAN P. JOSEPH M.D., APC;MY CHOICE MEDICAL CENTER APC;Van Nuys=DXF004197",
          },
          {
            id: "PAYMAN P. JOSEPH M.D., APC;PAYMAN P JOSEPH MD APC;Van Nuys=DXF004213",
            label:
              "PAYMAN P. JOSEPH M.D., APC;PAYMAN P JOSEPH MD APC;Van Nuys=DXF004213",
          },
          {
            id: "Peach Tree Health; ;Marysville=DXF001697",
            label: "Peach Tree Health; ;Marysville=DXF001697",
          },
          {
            id: "Peach Tree Healthcare; ;Marysville=DXF001067",
            label: "Peach Tree Healthcare; ;Marysville=DXF001067",
          },
          {
            id: "Pear Suite, Inc.; ;Honolulu=DXF001232",
            label: "Pear Suite, Inc.; ;Honolulu=DXF001232",
          },
          {
            id: "Pediatric and Adolescent Medical Associates of the Pacific Coast, Inc.; ;Salinas=DXF002029",
            label:
              "Pediatric and Adolescent Medical Associates of the Pacific Coast, Inc.; ;Salinas=DXF002029",
          },
          {
            id: "Pediatric and Family Medical Center dba \u201CEisner Health\u201D or \u201CEisner Pediatric and Family Medical Center\u201D; ;Los Angeles=DXF000406",
            label:
              "Pediatric and Family Medical Center dba \u201CEisner Health\u201D or \u201CEisner Pediatric and Family Medical Center\u201D; ;Los Angeles=DXF000406",
          },
          {
            id: "Pediatric Associates Medical Group, Inc.; ;Sherman Oaks=DXF004324",
            label:
              "Pediatric Associates Medical Group, Inc.; ;Sherman Oaks=DXF004324",
          },
          {
            id: "Pediatric Associates of Stockton; ;Stockton=DXF002633",
            label: "Pediatric Associates of Stockton; ;Stockton=DXF002633",
          },
          {
            id: "Pediatric Care of Stockton, Inc.; ;Stockton=DXF004679",
            label: "Pediatric Care of Stockton, Inc.; ;Stockton=DXF004679",
          },
          {
            id: "Pediatric Care Physicians; ;Encino=DXF004016",
            label: "Pediatric Care Physicians; ;Encino=DXF004016",
          },
          {
            id: "PEDIATRIC ENDOCRINOLOGY ASSOCIATES OF LONG BEACH; ;Long Beach=DXF000553",
            label:
              "PEDIATRIC ENDOCRINOLOGY ASSOCIATES OF LONG BEACH; ;Long Beach=DXF000553",
          },
          {
            id: "Pediatric Medical Group of R; ;Riverside=DXF005794",
            label: "Pediatric Medical Group of R; ;Riverside=DXF005794",
          },
          {
            id: "Pediatric Medical Group of Watsonville; ;Freedom=DXF000291",
            label: "Pediatric Medical Group of Watsonville; ;Freedom=DXF000291",
          },
          {
            id: "Pediatrics R US; ;Lake Elsinore=DXF005743",
            label: "Pediatrics R US; ;Lake Elsinore=DXF005743",
          },
          {
            id: "Pediatrix Medical Group; ;LOS ALAMITOS=DXF001557",
            label: "Pediatrix Medical Group; ;LOS ALAMITOS=DXF001557",
          },
          {
            id: "Pediatrix Medical Group;Pediatrix Medical Group of California, Inc.;LOS ALAMITOS=DXF001559",
            label:
              "Pediatrix Medical Group;Pediatrix Medical Group of California, Inc.;LOS ALAMITOS=DXF001559",
          },
          {
            id: "Pediatrix Medical Group;Pediatrix Cardiology of Orange County, P.C.;LOS ALAMITOS=DXF001560",
            label:
              "Pediatrix Medical Group;Pediatrix Cardiology of Orange County, P.C.;LOS ALAMITOS=DXF001560",
          },
          {
            id: "Peninsula Cardiovascular associates; ;San Mateo=DXF000502",
            label: "Peninsula Cardiovascular associates; ;San Mateo=DXF000502",
          },
          {
            id: "Peninsula Eye Physicians Medical Group; ;San Mateo=DXF000492",
            label:
              "Peninsula Eye Physicians Medical Group; ;San Mateo=DXF000492",
          },
          {
            id: "Peninsula Foot & Ankle Center; ;San Mateo=DXF000496",
            label: "Peninsula Foot & Ankle Center; ;San Mateo=DXF000496",
          },
          {
            id: "Peninsula Gastrointestinal Specialists, Inc.; ;San Mateo=DXF002288",
            label:
              "Peninsula Gastrointestinal Specialists, Inc.; ;San Mateo=DXF002288",
          },
          {
            id: "Peninsula Post-Acute; ;Burlingame=DXF005176",
            label: "Peninsula Post-Acute; ;Burlingame=DXF005176",
          },
          {
            id: "Peninsula Private Neurology, INC; ;Palo Alto=DXF000833",
            label: "Peninsula Private Neurology, INC; ;Palo Alto=DXF000833",
          },
          {
            id: "Peninsula Sleep Center Inc; ;Burlingame=DXF001038",
            label: "Peninsula Sleep Center Inc; ;Burlingame=DXF001038",
          },
          {
            id: "Penny Lane Centers; ;North Hollywood=DXF002719",
            label: "Penny Lane Centers; ;North Hollywood=DXF002719",
          },
          {
            id: "Perez Medical Group Inc.; ;La Puente=DXF002480",
            label: "Perez Medical Group Inc.; ;La Puente=DXF002480",
          },
          {
            id: "Perris Urgent Care; ;perris=DXF000806",
            label: "Perris Urgent Care; ;perris=DXF000806",
          },
          {
            id: "Petaluma Health Center; ;Petaluma=DXF002880",
            label: "Petaluma Health Center; ;Petaluma=DXF002880",
          },
          {
            id: "Petaluma People Services Center; ;Petaluma=DXF003995",
            label: "Petaluma People Services Center; ;Petaluma=DXF003995",
          },
          {
            id: "PETALUMA POST ACUTE REHAB; ;Petaluma=DXF004999",
            label: "PETALUMA POST ACUTE REHAB; ;Petaluma=DXF004999",
          },
          {
            id: "Peter Alan Krause Medical Corporation; ;Santa Maria=DXF004257",
            label:
              "Peter Alan Krause Medical Corporation; ;Santa Maria=DXF004257",
          },
          {
            id: "Peter Coelho MD Inc; ;Hollister=DXF004403",
            label: "Peter Coelho MD Inc; ;Hollister=DXF004403",
          },
          {
            id: "Peter J. Cornell, M.D., Inc.; ;Beverly Hills=DXF001624",
            label: "Peter J. Cornell, M.D., Inc.; ;Beverly Hills=DXF001624",
          },
          {
            id: "Peter J. Weingold, M.D., A Prof. Corp.; ;Valley Village=DXF000554",
            label:
              "Peter J. Weingold, M.D., A Prof. Corp.; ;Valley Village=DXF000554",
          },
          {
            id: "PETER STOOPS, DO, INC dba  OAK  HILLS FAMILY CARE; ;OAK  HILLS=DXF004231",
            label:
              "PETER STOOPS, DO, INC dba  OAK  HILLS FAMILY CARE; ;OAK  HILLS=DXF004231",
          },
          {
            id: "PETER STOOPS, DO, INC dba  OAK  HILLS FAMILY CARE;PETER STOOPS, DO, INC dba  OAK  HILLS FAMILY CARE;OAK  HILLS=DXF004233",
            label:
              "PETER STOOPS, DO, INC dba  OAK  HILLS FAMILY CARE;PETER STOOPS, DO, INC dba  OAK  HILLS FAMILY CARE;OAK  HILLS=DXF004233",
          },
          {
            id: "PETERKIMMDINC; ;SIMI VALLEY=DXF001338",
            label: "PETERKIMMDINC; ;SIMI VALLEY=DXF001338",
          },
          {
            id: "PETERKIMMDINC; ;SIMI VALLEY=DXF001340",
            label: "PETERKIMMDINC; ;SIMI VALLEY=DXF001340",
          },
          {
            id: "Petr Utrata M.D.; ;Castro Valley=DXF000157",
            label: "Petr Utrata M.D.; ;Castro Valley=DXF000157",
          },
          {
            id: "Phoenix House of California; ;Lake View Terrace=DXF002653",
            label: "Phoenix House of California; ;Lake View Terrace=DXF002653",
          },
          {
            id: "Physician Health Collaborative Corp; ;victorville=DXF001066",
            label:
              "Physician Health Collaborative Corp; ;victorville=DXF001066",
          },
          {
            id: "Physicians and Surgeons Home Care Inc; ;Downey=DXF004094",
            label: "Physicians and Surgeons Home Care Inc; ;Downey=DXF004094",
          },
          {
            id: "Physicians DataTrust; ;vista=DXF004192",
            label: "Physicians DataTrust; ;vista=DXF004192",
          },
          {
            id: "Physicians DataTrust;Citrus Valley Physicians Group;vista=DXF004203",
            label:
              "Physicians DataTrust;Citrus Valley Physicians Group;vista=DXF004203",
          },
          {
            id: "Physicians DataTrust;Golden Physicians Medical Group;vista=DXF004204",
            label:
              "Physicians DataTrust;Golden Physicians Medical Group;vista=DXF004204",
          },
          {
            id: "Physicians DataTrust;Greater Tri Cities IPA;vista=DXF004205",
            label:
              "Physicians DataTrust;Greater Tri Cities IPA;vista=DXF004205",
          },
          {
            id: "Physicians DataTrust;Noble AMA IPA;vista=DXF004206",
            label: "Physicians DataTrust;Noble AMA IPA;vista=DXF004206",
          },
          {
            id: "Physicians DataTrust;St. Vincent IPA;vista=DXF004207",
            label: "Physicians DataTrust;St. Vincent IPA;vista=DXF004207",
          },
          {
            id: "Physicians Medical Group of San Jose, Inc.; ;San Jose=DXF000709",
            label:
              "Physicians Medical Group of San Jose, Inc.; ;San Jose=DXF000709",
          },
          {
            id: "Physicians of Southern California, Inc; ;Glendora=DXF003757",
            label:
              "Physicians of Southern California, Inc; ;Glendora=DXF003757",
          },
          {
            id: "Physicians of Southern California, Inc;Physicians of Southern California, Inc.;Covina=DXF003759",
            label:
              "Physicians of Southern California, Inc;Physicians of Southern California, Inc.;Covina=DXF003759",
          },
          {
            id: "Physicians of Southern California, Inc;Physicians of Southern California, Inc.;Ontario=DXF003760",
            label:
              "Physicians of Southern California, Inc;Physicians of Southern California, Inc.;Ontario=DXF003760",
          },
          {
            id: "Physicians of Southern California, Inc;Physicians of Southern California, Inc.;Pasadena=DXF003761",
            label:
              "Physicians of Southern California, Inc;Physicians of Southern California, Inc.;Pasadena=DXF003761",
          },
          {
            id: "Physicians of Southern California, Inc;Physicians of Southern California, Inc.;Riverside=DXF003762",
            label:
              "Physicians of Southern California, Inc;Physicians of Southern California, Inc.;Riverside=DXF003762",
          },
          {
            id: "Pieces Group, LP Napoli in the Desert; ;Studio City=DXF004633",
            label:
              "Pieces Group, LP Napoli in the Desert; ;Studio City=DXF004633",
          },
          {
            id: "PIH Health, Inc.; ;Whittier=DXF003628",
            label: "PIH Health, Inc.; ;Whittier=DXF003628",
          },
          {
            id: "PIH Health, Inc.;PIH Health Whittier Hospital;Whittier=DXF003788",
            label:
              "PIH Health, Inc.;PIH Health Whittier Hospital;Whittier=DXF003788",
          },
          {
            id: "PIH Health, Inc.;PIH Health Downey Hospital;Downey=DXF003789",
            label:
              "PIH Health, Inc.;PIH Health Downey Hospital;Downey=DXF003789",
          },
          {
            id: "PIH Health, Inc.;PIH Health Good Samaritan Hospital;Los Angeles=DXF003790",
            label:
              "PIH Health, Inc.;PIH Health Good Samaritan Hospital;Los Angeles=DXF003790",
          },
          {
            id: "PIH Health, Inc.;PIH Health Physicians;Whittier=DXF003791",
            label: "PIH Health, Inc.;PIH Health Physicians;Whittier=DXF003791",
          },
          {
            id: "Pilar J Condry MD Inc; ;MORENO VALLEY=DXF002072",
            label: "Pilar J Condry MD Inc; ;MORENO VALLEY=DXF002072",
          },
          {
            id: "Pilgrim Place in Claremont; ;Claremont=DXF002503",
            label: "Pilgrim Place in Claremont; ;Claremont=DXF002503",
          },
          {
            id: "Pilgrim Place in Claremont;Pilgrim Place Health Services Center;Claremont=DXF002504",
            label:
              "Pilgrim Place in Claremont;Pilgrim Place Health Services Center;Claremont=DXF002504",
          },
          {
            id: "Pine Park Health; ;Oakland=DXF001185",
            label: "Pine Park Health; ;Oakland=DXF001185",
          },
          {
            id: "Pine Ridge Care Center; ;San Rafael=DXF005486",
            label: "Pine Ridge Care Center; ;San Rafael=DXF005486",
          },
          {
            id: "Piner's Nursing Home; ;Napa=DXF004524",
            label: "Piner's Nursing Home; ;Napa=DXF004524",
          },
          {
            id: "Pinnacle Medical Group, Inc.; ;FONTANA=DXF000708",
            label: "Pinnacle Medical Group, Inc.; ;FONTANA=DXF000708",
          },
          {
            id: "Pioneers Memorial Healthcare District; ;Brawley=DXF001462",
            label: "Pioneers Memorial Healthcare District; ;Brawley=DXF001462",
          },
          {
            id: "Pipeline health System Holdings, LLC; ;El Segundo=DXF004986",
            label:
              "Pipeline health System Holdings, LLC; ;El Segundo=DXF004986",
          },
          {
            id: "Pipeline health System Holdings, LLC;East Los Angeles Doctors Hospital;Los Angeles=DXF004988",
            label:
              "Pipeline health System Holdings, LLC;East Los Angeles Doctors Hospital;Los Angeles=DXF004988",
          },
          {
            id: "Pipeline health System Holdings, LLC;Memorial Hospital of Gardena;Gardena=DXF004989",
            label:
              "Pipeline health System Holdings, LLC;Memorial Hospital of Gardena;Gardena=DXF004989",
          },
          {
            id: "Pipeline health System Holdings, LLC;Community Hospital of Huntington Park;Huntington Park=DXF004990",
            label:
              "Pipeline health System Holdings, LLC;Community Hospital of Huntington Park;Huntington Park=DXF004990",
          },
          {
            id: "Pipeline health System Holdings, LLC;Coast Plaza Hospital;Norwalk=DXF004991",
            label:
              "Pipeline health System Holdings, LLC;Coast Plaza Hospital;Norwalk=DXF004991",
          },
          {
            id: "Pitaya Healthcare LLC; ;Vacaville=DXF004640",
            label: "Pitaya Healthcare LLC; ;Vacaville=DXF004640",
          },
          {
            id: "Pitaya Healthcare LLC;Vacaville Healthcare Inc;none PD entry=DXF005320",
            label:
              "Pitaya Healthcare LLC;Vacaville Healthcare Inc;none PD entry=DXF005320",
          },
          {
            id: "Pittsburg- Antioch Medical Group; ;Pittsburg=DXF000339",
            label: "Pittsburg- Antioch Medical Group; ;Pittsburg=DXF000339",
          },
          {
            id: "Pittsburg-Antioch Medical Group; ;Pittsburg=DXF004339",
            label: "Pittsburg-Antioch Medical Group; ;Pittsburg=DXF004339",
          },
          {
            id: "Placer Private Physicians Inc; ;Rocklin=DXF000497",
            label: "Placer Private Physicians Inc; ;Rocklin=DXF000497",
          },
          {
            id: "Platinum Digestive Health; ;Rancho Cucamonga=DXF002497",
            label: "Platinum Digestive Health; ;Rancho Cucamonga=DXF002497",
          },
          {
            id: "Playa Conchal dba Brighton Post Acute LLC; ;Hanford=DXF005022",
            label:
              "Playa Conchal dba Brighton Post Acute LLC; ;Hanford=DXF005022",
          },
          {
            id: "Plazita Medical Clinic, Inc.; ;Watsonville=DXF005625",
            label: "Plazita Medical Clinic, Inc.; ;Watsonville=DXF005625",
          },
          {
            id: "Plumas County Behavioral Health; ;Quincy=DXF000255",
            label: "Plumas County Behavioral Health; ;Quincy=DXF000255",
          },
          {
            id: "Plumas County Public Health Agency; ;Quincy=DXF000386",
            label: "Plumas County Public Health Agency; ;Quincy=DXF000386",
          },
          {
            id: "Plumas District Hospital; ;Quincy=DXF000532",
            label: "Plumas District Hospital; ;Quincy=DXF000532",
          },
          {
            id: "Plumas District Hospital;INDIAN VALLEY MEDICAL CLINIC;Greenville=DXF000534",
            label:
              "Plumas District Hospital;INDIAN VALLEY MEDICAL CLINIC;Greenville=DXF000534",
          },
          {
            id: "Plumas District Hospital;PLUMAS DISTRICT HOSPITAL RURAL HEALTH CLINIC;Quincy=DXF000535",
            label:
              "Plumas District Hospital;PLUMAS DISTRICT HOSPITAL RURAL HEALTH CLINIC;Quincy=DXF000535",
          },
          {
            id: "Plumas District Hospital;PLUMAS DISTRICT HOSPITAL DENTAL CLINIC;Quincy=DXF000536",
            label:
              "Plumas District Hospital;PLUMAS DISTRICT HOSPITAL DENTAL CLINIC;Quincy=DXF000536",
          },
          {
            id: "Plumas District Hospital;PLUMAS DISTRICT HOSPITAL PHYSICAL AND OCCUPATIONAL THERAPY;Quincy=DXF000540",
            label:
              "Plumas District Hospital;PLUMAS DISTRICT HOSPITAL PHYSICAL AND OCCUPATIONAL THERAPY;Quincy=DXF000540",
          },
          {
            id: "Plumas District Hospital;PLUMAS DISTRICT HOSPITAL PHYSICAL AND OCCUPATIONAL THERAPY;Greenville=DXF000541",
            label:
              "Plumas District Hospital;PLUMAS DISTRICT HOSPITAL PHYSICAL AND OCCUPATIONAL THERAPY;Greenville=DXF000541",
          },
          {
            id: "PlushCare of California, INC; ;San Francisco=DXF002094",
            label: "PlushCare of California, INC; ;San Francisco=DXF002094",
          },
          {
            id: "Plymouth Village Health Center; ;Redlands=DXF004911",
            label: "Plymouth Village Health Center; ;Redlands=DXF004911",
          },
          {
            id: "PMD WELLNESS CENTER; ;Long Beach=DXF004522",
            label: "PMD WELLNESS CENTER; ;Long Beach=DXF004522",
          },
          {
            id: "Point and Click Solutions; ;Burlington=DXF005767",
            label: "Point and Click Solutions; ;Burlington=DXF005767",
          },
          {
            id: "PointClickCare; ;South Jordan=DXF001003",
            label: "PointClickCare; ;South Jordan=DXF001003",
          },
          {
            id: "Polyxene G Kokinos MD PC dba South Bay Vascular Center and Vein Institute; ;Campbell=DXF004396",
            label:
              "Polyxene G Kokinos MD PC dba South Bay Vascular Center and Vein Institute; ;Campbell=DXF004396",
          },
          {
            id: "Pomona Community Health Center; ;Pomona=DXF001273",
            label: "Pomona Community Health Center; ;Pomona=DXF001273",
          },
          {
            id: "Pomona Valley Hospital Medical Center; ;Pomona=DXF001991",
            label: "Pomona Valley Hospital Medical Center; ;Pomona=DXF001991",
          },
          {
            id: "Pomona Valley Hospital Medical Center;Family Health Center - Pomona;Pomona=DXF002011",
            label:
              "Pomona Valley Hospital Medical Center;Family Health Center - Pomona;Pomona=DXF002011",
          },
          {
            id: "Pomona Valley Hospital Medical Center;Pomona Valley Health Center - Claremont;Claremont=DXF002013",
            label:
              "Pomona Valley Hospital Medical Center;Pomona Valley Health Center - Claremont;Claremont=DXF002013",
          },
          {
            id: "Pomona Valley Hospital Medical Center;Pomona Valley Health Center - Crossroads;Chino Hills=DXF002014",
            label:
              "Pomona Valley Hospital Medical Center;Pomona Valley Health Center - Crossroads;Chino Hills=DXF002014",
          },
          {
            id: "Pomona Valley Hospital Medical Center;Pomona Valley Health Center - Chino Hills;Chino Hills=DXF002021",
            label:
              "Pomona Valley Hospital Medical Center;Pomona Valley Health Center - Chino Hills;Chino Hills=DXF002021",
          },
          {
            id: "Pomona Valley Hospital Medical Center;Pomona Valley Health Center - La Verne;La Verne=DXF004093",
            label:
              "Pomona Valley Hospital Medical Center;Pomona Valley Health Center - La Verne;La Verne=DXF004093",
          },
          {
            id: "Post Acute Care Partners, Inc; ;Irvine=DXF003565",
            label: "Post Acute Care Partners, Inc; ;Irvine=DXF003565",
          },
          {
            id: "PPMSI; ;Campbell=DXF001835",
            label: "PPMSI; ;Campbell=DXF001835",
          },
          {
            id: "Preete Bhanot MD Inc; ;Morgan Hill=DXF004332",
            label: "Preete Bhanot MD Inc; ;Morgan Hill=DXF004332",
          },
          {
            id: "Preferred IPA of California; ;Glendale=DXF000876",
            label: "Preferred IPA of California; ;Glendale=DXF000876",
          },
          {
            id: "Preferred Medical Group; ;Alhambra=DXF001379",
            label: "Preferred Medical Group; ;Alhambra=DXF001379",
          },
          {
            id: "Premier Heart and Vein Care; ;San Luis Obispo=DXF000824",
            label: "Premier Heart and Vein Care; ;San Luis Obispo=DXF000824",
          },
          {
            id: "Premier Heart and Vein Care; ;SN LUIS OBISP=DXF001327",
            label: "Premier Heart and Vein Care; ;SN LUIS OBISP=DXF001327",
          },
          {
            id: "Premier Nephrology of Orange County; ;Fountain Valley=DXF003688",
            label:
              "Premier Nephrology of Orange County; ;Fountain Valley=DXF003688",
          },
          {
            id: "Premier Ob Gyn Napa Inc; ;Napa=DXF000238",
            label: "Premier Ob Gyn Napa Inc; ;Napa=DXF000238",
          },
          {
            id: "Premier Pediatrics; ;Mission Hills=DXF004083",
            label: "Premier Pediatrics; ;Mission Hills=DXF004083",
          },
          {
            id: "Premier Valley Medical Group; ;Bakersfield=DXF002511",
            label: "Premier Valley Medical Group; ;Bakersfield=DXF002511",
          },
          {
            id: "PREP ED PROGRAMS INC.; ;Long Beach=DXF003365",
            label: "PREP ED PROGRAMS INC.; ;Long Beach=DXF003365",
          },
          {
            id: "Presidium Health; ;San Diego=DXF002801",
            label: "Presidium Health; ;San Diego=DXF002801",
          },
          {
            id: "Prestige Bariatric and surgical specialists; ;Sacramento=DXF000490",
            label:
              "Prestige Bariatric and surgical specialists; ;Sacramento=DXF000490",
          },
          {
            id: "Prestige Medical Associates, Inc; ;Newbury Park=DXF004429",
            label: "Prestige Medical Associates, Inc; ;Newbury Park=DXF004429",
          },
          {
            id: "Preventive Medical Associates, PC; ;Sacramento=DXF002753",
            label: "Preventive Medical Associates, PC; ;Sacramento=DXF002753",
          },
          {
            id: "Primary and Multi-specialty Clinics of Anaheim; ;Anaheim=DXF002048",
            label:
              "Primary and Multi-specialty Clinics of Anaheim; ;Anaheim=DXF002048",
          },
          {
            id: "Primary Care Associated Medical Group, Inc.; ;Ontario=DXF000687",
            label:
              "Primary Care Associated Medical Group, Inc.; ;Ontario=DXF000687",
          },
          {
            id: "Prime Healthcare; ;Ontario=DXF000950",
            label: "Prime Healthcare; ;Ontario=DXF000950",
          },
          {
            id: "Prime Healthcare;Alvarado Hospital LLC;San Diego=DXF000951",
            label: "Prime Healthcare;Alvarado Hospital LLC;San Diego=DXF000951",
          },
          {
            id: "Prime Healthcare;Prime Healthcare Paradise Valley LLC;National City=DXF000953",
            label:
              "Prime Healthcare;Prime Healthcare Paradise Valley LLC;National City=DXF000953",
          },
          {
            id: "Prime Healthcare;Prime Healthcare Centinela LLC;Inglewood=DXF000954",
            label:
              "Prime Healthcare;Prime Healthcare Centinela LLC;Inglewood=DXF000954",
          },
          {
            id: "Prime Healthcare;Desert Valley Hospital LLC;victorville=DXF000956",
            label:
              "Prime Healthcare;Desert Valley Hospital LLC;victorville=DXF000956",
          },
          {
            id: "Prime Healthcare;Prime Healthcare Services - Shasta LLC;Redding=DXF000958",
            label:
              "Prime Healthcare;Prime Healthcare Services - Shasta LLC;Redding=DXF000958",
          },
          {
            id: "Prime Healthcare;Prime Healthcare Services - Encino LLC;Encino=DXF000959",
            label:
              "Prime Healthcare;Prime Healthcare Services - Encino LLC;Encino=DXF000959",
          },
          {
            id: "Prime Healthcare;Prime Healthcare Services - Sherman Oaks LLC;Sherman Oaks=DXF000960",
            label:
              "Prime Healthcare;Prime Healthcare Services - Sherman Oaks LLC;Sherman Oaks=DXF000960",
          },
          {
            id: "Prime Healthcare;Veritas Health Services LLC;Chino=DXF000961",
            label:
              "Prime Healthcare;Veritas Health Services LLC;Chino=DXF000961",
          },
          {
            id: "Prime Healthcare;Prime Healthcare Services - San Dimas LLC;San Dimas=DXF000963",
            label:
              "Prime Healthcare;Prime Healthcare Services - San Dimas LLC;San Dimas=DXF000963",
          },
          {
            id: "Prime Healthcare;Prime Healthcare Services - Montclair LLC;MONTCLAIR=DXF000964",
            label:
              "Prime Healthcare;Prime Healthcare Services - Montclair LLC;MONTCLAIR=DXF000964",
          },
          {
            id: "Prime Healthcare;Prime Healthcare Huntington Beach LLC;Huntington Beach=DXF000965",
            label:
              "Prime Healthcare;Prime Healthcare Huntington Beach LLC;Huntington Beach=DXF000965",
          },
          {
            id: "Prime Healthcare;Prime Healthcare Services - Garden Grove LLC;Garden Grove=DXF000966",
            label:
              "Prime Healthcare;Prime Healthcare Services - Garden Grove LLC;Garden Grove=DXF000966",
          },
          {
            id: "Prime Healthcare;Prime Healthcare La Palma LLC;La Palma=DXF000967",
            label:
              "Prime Healthcare;Prime Healthcare La Palma LLC;La Palma=DXF000967",
          },
          {
            id: "Prime Healthcare;Prime Healthcare Anaheim LLC;Anaheim=DXF000968",
            label:
              "Prime Healthcare;Prime Healthcare Anaheim LLC;Anaheim=DXF000968",
          },
          {
            id: "Prime Healthcare;Prime Healthcare Services - St. Francis LLC;Lynwood=DXF000977",
            label:
              "Prime Healthcare;Prime Healthcare Services - St. Francis LLC;Lynwood=DXF000977",
          },
          {
            id: "Prime Healthcare;Desert Valley Medical Group, Inc.;victorville=DXF002520",
            label:
              "Prime Healthcare;Desert Valley Medical Group, Inc.;victorville=DXF002520",
          },
          {
            id: "Prime Healthcare;Paradise Valley Medical Group, Inc.;National City=DXF002521",
            label:
              "Prime Healthcare;Paradise Valley Medical Group, Inc.;National City=DXF002521",
          },
          {
            id: "Prime Healthcare;Shasta Regional Medical Group, Inc.;Redding=DXF002522",
            label:
              "Prime Healthcare;Shasta Regional Medical Group, Inc.;Redding=DXF002522",
          },
          {
            id: "Prime Healthcare;Alvarado Physicians Medical Group, Inc.;San Diego=DXF002523",
            label:
              "Prime Healthcare;Alvarado Physicians Medical Group, Inc.;San Diego=DXF002523",
          },
          {
            id: "Prime Healthcare;Prime Healthcare ASC - Northridge LLC;Northridge=DXF002524",
            label:
              "Prime Healthcare;Prime Healthcare ASC - Northridge LLC;Northridge=DXF002524",
          },
          {
            id: "Prime Healthcare;Magnolia Surgery Center;Westminster=DXF004796",
            label:
              "Prime Healthcare;Magnolia Surgery Center;Westminster=DXF004796",
          },
          {
            id: "Prime Healthcare;Prime Healthcare ASC - Northridge LLC;Northridge=DXF004797",
            label:
              "Prime Healthcare;Prime Healthcare ASC - Northridge LLC;Northridge=DXF004797",
          },
          {
            id: "Prime Healthcare;Kintsugi Surgical LLC;Los Angeles=DXF004798",
            label:
              "Prime Healthcare;Kintsugi Surgical LLC;Los Angeles=DXF004798",
          },
          {
            id: "Prime Healthcare;Shoreline Surgery Center LLC;Long Beach=DXF004815",
            label:
              "Prime Healthcare;Shoreline Surgery Center LLC;Long Beach=DXF004815",
          },
          {
            id: "PRIME WELLNESS COMMUNITY HEALTH CENTER; ;Los Angeles=DXF005648",
            label:
              "PRIME WELLNESS COMMUNITY HEALTH CENTER; ;Los Angeles=DXF005648",
          },
          {
            id: "PrimeCare Medical Network, Inc.; ;Ontario=DXF000684",
            label: "PrimeCare Medical Network, Inc.; ;Ontario=DXF000684",
          },
          {
            id: "PrimeCare of Citrus Valley, Inc; ;Corona=DXF000714",
            label: "PrimeCare of Citrus Valley, Inc; ;Corona=DXF000714",
          },
          {
            id: "PrimeCare of Corona, Inc.; ;Corona=DXF001101",
            label: "PrimeCare of Corona, Inc.; ;Corona=DXF001101",
          },
          {
            id: "PrimeCare of Hemet Valley, Inc.; ;Murrieta=DXF001102",
            label: "PrimeCare of Hemet Valley, Inc.; ;Murrieta=DXF001102",
          },
          {
            id: "PrimeCare of Inland Valley, Inc.; ;Ontario=DXF001103",
            label: "PrimeCare of Inland Valley, Inc.; ;Ontario=DXF001103",
          },
          {
            id: "PrimeCare of Moreno Valley, Inc.; ;Corona=DXF001104",
            label: "PrimeCare of Moreno Valley, Inc.; ;Corona=DXF001104",
          },
          {
            id: "PrimeCare of Redlands, Inc.; ;Ontario=DXF001105",
            label: "PrimeCare of Redlands, Inc.; ;Ontario=DXF001105",
          },
          {
            id: "PrimeCare of Riverside, Inc.; ;Corona=DXF001107",
            label: "PrimeCare of Riverside, Inc.; ;Corona=DXF001107",
          },
          {
            id: "PrimeCare of San Bernardino, Inc.; ;Ontario=DXF001108",
            label: "PrimeCare of San Bernardino, Inc.; ;Ontario=DXF001108",
          },
          {
            id: "PrimeCare of Sun City, Inc.; ;Murrieta=DXF001109",
            label: "PrimeCare of Sun City, Inc.; ;Murrieta=DXF001109",
          },
          {
            id: "PrimeCare of Temecula, Inc.; ;Murrieta=DXF000715",
            label: "PrimeCare of Temecula, Inc.; ;Murrieta=DXF000715",
          },
          {
            id: "PrimeHealth360; ;La Quinta=DXF004245",
            label: "PrimeHealth360; ;La Quinta=DXF004245",
          },
          {
            id: "Primehealthcare; ;La Palma=DXF000087",
            label: "Primehealthcare; ;La Palma=DXF000087",
          },
          {
            id: "Primehealthcare;Prime Healthcare Huntington Beach Hospital;Huntington Beach=DXF000091",
            label:
              "Primehealthcare;Prime Healthcare Huntington Beach Hospital;Huntington Beach=DXF000091",
          },
          {
            id: "Primehealthcare;Prime Healthcare La Palma Intercommunity Hospital;La Palma=DXF000092",
            label:
              "Primehealthcare;Prime Healthcare La Palma Intercommunity Hospital;La Palma=DXF000092",
          },
          {
            id: "Primehealthcare;Prime Healthcare Garden Grove Hospital and Medical Center;Garden Grove=DXF000093",
            label:
              "Primehealthcare;Prime Healthcare Garden Grove Hospital and Medical Center;Garden Grove=DXF000093",
          },
          {
            id: "Primehealthcare;Prime Healthcare West Anaheim Medical Center;Anaheim=DXF000094",
            label:
              "Primehealthcare;Prime Healthcare West Anaheim Medical Center;Anaheim=DXF000094",
          },
          {
            id: "Primex Clinical Laboratories, Inc.; ;Van Nuys=DXF000587",
            label: "Primex Clinical Laboratories, Inc.; ;Van Nuys=DXF000587",
          },
          {
            id: "Prince Shah MD A Medical Corporation; ;GILROY=DXF001268",
            label: "Prince Shah MD A Medical Corporation; ;GILROY=DXF001268",
          },
          {
            id: "Prismacare Medical INC; ;chula vsta=DXF001513",
            label: "Prismacare Medical INC; ;chula vsta=DXF001513",
          },
          {
            id: "Prismacare Medical INC;Prismacare Medical INC;chula vsta=DXF001514",
            label:
              "Prismacare Medical INC;Prismacare Medical INC;chula vsta=DXF001514",
          },
          {
            id: "Prithvi Shankar MD Inc.; ;Modesto=DXF004285",
            label: "Prithvi Shankar MD Inc.; ;Modesto=DXF004285",
          },
          {
            id: "Prithvi Shankar MD Inc.;Sunrise Center for Medicine;Modesto=DXF004287",
            label:
              "Prithvi Shankar MD Inc.;Sunrise Center for Medicine;Modesto=DXF004287",
          },
          {
            id: "Priti Desai, MD, Inc.; ;Chino Hills=DXF002108",
            label: "Priti Desai, MD, Inc.; ;Chino Hills=DXF002108",
          },
          {
            id: "Progressive Ob/Gyn Medical Group, Inc.; ;San Bernardino=DXF002019",
            label:
              "Progressive Ob/Gyn Medical Group, Inc.; ;San Bernardino=DXF002019",
          },
          {
            id: "ProHealth Partners LLC; ;Long Beach=DXF004615",
            label: "ProHealth Partners LLC; ;Long Beach=DXF004615",
          },
          {
            id: "ProHealth Partners LLC;ProHealth Partners LLC;Long Beach=DXF004616",
            label:
              "ProHealth Partners LLC;ProHealth Partners LLC;Long Beach=DXF004616",
          },
          {
            id: "Project Angel Food; ;Los Angeles=DXF002386",
            label: "Project Angel Food; ;Los Angeles=DXF002386",
          },
          {
            id: "Project Open Hand; ;San Francisco=DXF004168",
            label: "Project Open Hand; ;San Francisco=DXF004168",
          },
          {
            id: "Prospect; ;Anaheim=DXF002081",
            label: "Prospect; ;Anaheim=DXF002081",
          },
          {
            id: "Prospect Health Plan, Inc.; ;Orange=DXF001857",
            label: "Prospect Health Plan, Inc.; ;Orange=DXF001857",
          },
          {
            id: "Prospect Medical; ;Anaheim=DXF001487",
            label: "Prospect Medical; ;Anaheim=DXF001487",
          },
          {
            id: "Prospect Medical Group, Inc.; ;Orange=DXF000843",
            label: "Prospect Medical Group, Inc.; ;Orange=DXF000843",
          },
          {
            id: "Prospect Medical Group, Inc.;Prospect Health Source Medical Group, Inc.;Orange=DXF001845",
            label:
              "Prospect Medical Group, Inc.;Prospect Health Source Medical Group, Inc.;Orange=DXF001845",
          },
          {
            id: "Prospect Medical Group, Inc.;Prospect NWOC Medical Group, Inc.;Orange=DXF001846",
            label:
              "Prospect Medical Group, Inc.;Prospect NWOC Medical Group, Inc.;Orange=DXF001846",
          },
          {
            id: "Prospect Medical Group, Inc.;Prospect Professional Care Medical Group, Inc.;Orange=DXF001847",
            label:
              "Prospect Medical Group, Inc.;Prospect Professional Care Medical Group, Inc.;Orange=DXF001847",
          },
          {
            id: "Prospect Medical Group, Inc.;StarCare Medical Group, Inc.;Orange=DXF001848",
            label:
              "Prospect Medical Group, Inc.;StarCare Medical Group, Inc.;Orange=DXF001848",
          },
          {
            id: "Prospect Medical Group, Inc.;Upland Medical Group, A Professional Medical Corporation;Orange=DXF001849",
            label:
              "Prospect Medical Group, Inc.;Upland Medical Group, A Professional Medical Corporation;Orange=DXF001849",
          },
          {
            id: "Prospect Medical Group, Inc.;Pomona Valley Medical Group, Inc.;Orange=DXF001851",
            label:
              "Prospect Medical Group, Inc.;Pomona Valley Medical Group, Inc.;Orange=DXF001851",
          },
          {
            id: "Prospect Medical Group, Inc.;Genesis Healthcare of Southern California, Inc., A Medical Group;Orange=DXF001852",
            label:
              "Prospect Medical Group, Inc.;Genesis Healthcare of Southern California, Inc., A Medical Group;Orange=DXF001852",
          },
          {
            id: "Prospect Medical Group, Inc.;Nuestra Familia Medical Group, Inc.;Orange=DXF001853",
            label:
              "Prospect Medical Group, Inc.;Nuestra Familia Medical Group, Inc.;Orange=DXF001853",
          },
          {
            id: "Prosper Services LLC dba/ myPlace Health; ;Los Angeles=DXF004298",
            label:
              "Prosper Services LLC dba/ myPlace Health; ;Los Angeles=DXF004298",
          },
          {
            id: "Prosper Services LLC dba/ myPlace Health;MyPlace Greater LA PACE Inc.;Los Angeles=DXF004349",
            label:
              "Prosper Services LLC dba/ myPlace Health;MyPlace Greater LA PACE Inc.;Los Angeles=DXF004349",
          },
          {
            id: "Providence Adult Day Health; ;Napa=DXF004442",
            label: "Providence Adult Day Health; ;Napa=DXF004442",
          },
          {
            id: "Providence Adult Day Health;Providence ECM;Napa=DXF004507",
            label: "Providence Adult Day Health;Providence ECM;Napa=DXF004507",
          },
          {
            id: "Providence Health; ;Irvine=DXF004085",
            label: "Providence Health; ;Irvine=DXF004085",
          },
          {
            id: "Providence St. Joseph Health; ;Renton=DXF005621",
            label: "Providence St. Joseph Health; ;Renton=DXF005621",
          },
          {
            id: "Providence St. Joseph Health;Healdsburg Hospital;HEALDSBURG=DXF005622",
            label:
              "Providence St. Joseph Health;Healdsburg Hospital;HEALDSBURG=DXF005622",
          },
          {
            id: "Providence St. Joseph Health;Petaluma Valley Hospital;Petaluma=DXF005623",
            label:
              "Providence St. Joseph Health;Petaluma Valley Hospital;Petaluma=DXF005623",
          },
          {
            id: "Providence St. Joseph Health;Providence Redwood Memorial Hospital;Fortuna=DXF005624",
            label:
              "Providence St. Joseph Health;Providence Redwood Memorial Hospital;Fortuna=DXF005624",
          },
          {
            id: "Providence St. Joseph Health;Providence Queen of the Valley Medical Center;Napa=DXF005660",
            label:
              "Providence St. Joseph Health;Providence Queen of the Valley Medical Center;Napa=DXF005660",
          },
          {
            id: "Providence St. Joseph Health;Providence Saint Joseph Hospital;Eureka=DXF005661",
            label:
              "Providence St. Joseph Health;Providence Saint Joseph Hospital;Eureka=DXF005661",
          },
          {
            id: "Providence St. Joseph Health;Providence Holy Cross Medical Center;Mission Hills=DXF005662",
            label:
              "Providence St. Joseph Health;Providence Holy Cross Medical Center;Mission Hills=DXF005662",
          },
          {
            id: "Providence St. Joseph Health;Providence Little Company of Mary \u2013 San Pedro;San Pedro=DXF005663",
            label:
              "Providence St. Joseph Health;Providence Little Company of Mary \u2013 San Pedro;San Pedro=DXF005663",
          },
          {
            id: "Providence St. Joseph Health;Providence Little Company of Mary - Torrance;Torrance=DXF005664",
            label:
              "Providence St. Joseph Health;Providence Little Company of Mary - Torrance;Torrance=DXF005664",
          },
          {
            id: "Providence St. Joseph Health;Providence Saint Joseph Medical Center;Burbank=DXF005665",
            label:
              "Providence St. Joseph Health;Providence Saint Joseph Medical Center;Burbank=DXF005665",
          },
          {
            id: "Providence St. Joseph Health;Providence Santa Rosa Memorial Hospital;Santa Rosa=DXF005666",
            label:
              "Providence St. Joseph Health;Providence Santa Rosa Memorial Hospital;Santa Rosa=DXF005666",
          },
          {
            id: "Providence St. Joseph Health;Providence Mission Hospital - Laguna Beach;Laguna Beach=DXF005674",
            label:
              "Providence St. Joseph Health;Providence Mission Hospital - Laguna Beach;Laguna Beach=DXF005674",
          },
          {
            id: "Providence St. Joseph Health;Providence Mission Hospital - Mission Viejo;MISSION VIEJO=DXF005675",
            label:
              "Providence St. Joseph Health;Providence Mission Hospital - Mission Viejo;MISSION VIEJO=DXF005675",
          },
          {
            id: "Providence St. Joseph Health;Providence St. Jude Medical Center;Fullerton=DXF005676",
            label:
              "Providence St. Joseph Health;Providence St. Jude Medical Center;Fullerton=DXF005676",
          },
          {
            id: "Providence St. Joseph Health;Providence St. Mary Medical Center;Apple Valley=DXF005677",
            label:
              "Providence St. Joseph Health;Providence St. Mary Medical Center;Apple Valley=DXF005677",
          },
          {
            id: "Providence St. Joseph Health;Providence St. Joseph Hospital;Orange=DXF005678",
            label:
              "Providence St. Joseph Health;Providence St. Joseph Hospital;Orange=DXF005678",
          },
          {
            id: "Providence St. Joseph Health;Providence Saint John\u2019s Health Center;Santa Monica=DXF005679",
            label:
              "Providence St. Joseph Health;Providence Saint John\u2019s Health Center;Santa Monica=DXF005679",
          },
          {
            id: "Providence St. Joseph Health;Providence Cedars-Sinai Tarzana Medical Center;Tarzana=DXF005680",
            label:
              "Providence St. Joseph Health;Providence Cedars-Sinai Tarzana Medical Center;Tarzana=DXF005680",
          },
          {
            id: "Providence St. Joseph Health;Providence St. Joseph Hospital;Orange=DXF005681",
            label:
              "Providence St. Joseph Health;Providence St. Joseph Hospital;Orange=DXF005681",
          },
          {
            id: "Providence St. Joseph Health;Providence Little Company of Mary \u2013 San Pedro;San Pedro=DXF005682",
            label:
              "Providence St. Joseph Health;Providence Little Company of Mary \u2013 San Pedro;San Pedro=DXF005682",
          },
          {
            id: "Providence St. Joseph Health;Providence Mission Hospital - Laguna Beach;Laguna Beach=DXF005683",
            label:
              "Providence St. Joseph Health;Providence Mission Hospital - Laguna Beach;Laguna Beach=DXF005683",
          },
          {
            id: "Providence St. Joseph Health;Saint John's Physicians Partners;Torrance=DXF005684",
            label:
              "Providence St. Joseph Health;Saint John's Physicians Partners;Torrance=DXF005684",
          },
          {
            id: "Providence St. Joseph Health;Providence Medical Institute;Renton=DXF005685",
            label:
              "Providence St. Joseph Health;Providence Medical Institute;Renton=DXF005685",
          },
          {
            id: "Providence St. Joseph Health;Providence Facey Medical Foundation;Renton=DXF005686",
            label:
              "Providence St. Joseph Health;Providence Facey Medical Foundation;Renton=DXF005686",
          },
          {
            id: "Providence St. Joseph Health;Providence Medical Foundation;Anaheim=DXF005687",
            label:
              "Providence St. Joseph Health;Providence Medical Foundation;Anaheim=DXF005687",
          },
          {
            id: "Providence St. Joseph Health;Providence Health Network;Torrance=DXF005688",
            label:
              "Providence St. Joseph Health;Providence Health Network;Torrance=DXF005688",
          },
          {
            id: "Providence St. Joseph Health;Providence St. Elizabeth Care Center;North Hollywood=DXF005689",
            label:
              "Providence St. Joseph Health;Providence St. Elizabeth Care Center;North Hollywood=DXF005689",
          },
          {
            id: "Providence St. Joseph Health;Providence Little Company of Mary - Transitional Care Center;Torrance=DXF005690",
            label:
              "Providence St. Joseph Health;Providence Little Company of Mary - Transitional Care Center;Torrance=DXF005690",
          },
          {
            id: "Providence St. Joseph Health;Providence Little Company of Mary Subacute;San Pedro=DXF005691",
            label:
              "Providence St. Joseph Health;Providence Little Company of Mary Subacute;San Pedro=DXF005691",
          },
          {
            id: "Providence St. Joseph Health;Providence Santa Rosa Memorial Hospital;Santa Rosa=DXF005692",
            label:
              "Providence St. Joseph Health;Providence Santa Rosa Memorial Hospital;Santa Rosa=DXF005692",
          },
          {
            id: "Providence St. Joseph Health;Providence Holy Cross Medical Center;Mission Hills=DXF005693",
            label:
              "Providence St. Joseph Health;Providence Holy Cross Medical Center;Mission Hills=DXF005693",
          },
          {
            id: "Providence St. Joseph Health;Healdsburg Hospital;HEALDSBURG=DXF005694",
            label:
              "Providence St. Joseph Health;Healdsburg Hospital;HEALDSBURG=DXF005694",
          },
          {
            id: "Providence St. Joseph Health;Providence Cedars-Sinai Tarzana Medical Center Clinical Laboratory;Tarzana=DXF005695",
            label:
              "Providence St. Joseph Health;Providence Cedars-Sinai Tarzana Medical Center Clinical Laboratory;Tarzana=DXF005695",
          },
          {
            id: "Providence St. Joseph Health;Providence Cedars-Sinai Tarzana Medical Center Pulmonary Laboratory;Tarzana=DXF005696",
            label:
              "Providence St. Joseph Health;Providence Cedars-Sinai Tarzana Medical Center Pulmonary Laboratory;Tarzana=DXF005696",
          },
          {
            id: "Providence St. Joseph Health;Providence Holy Cross Medical Center Dept of Pulmonary Physiology;Mission Hills=DXF005697",
            label:
              "Providence St. Joseph Health;Providence Holy Cross Medical Center Dept of Pulmonary Physiology;Mission Hills=DXF005697",
          },
          {
            id: "Providence St. Joseph Health;Providence Holy Cross Medical Center Laboratory;Mission Hills=DXF005698",
            label:
              "Providence St. Joseph Health;Providence Holy Cross Medical Center Laboratory;Mission Hills=DXF005698",
          },
          {
            id: "Providence St. Joseph Health;Providence Little Company of Mary \u2013 San Pedro Pulmonary Laboratory;San Pedro=DXF005699",
            label:
              "Providence St. Joseph Health;Providence Little Company of Mary \u2013 San Pedro Pulmonary Laboratory;San Pedro=DXF005699",
          },
          {
            id: "Providence St. Joseph Health;Providence Little Company of Mary - Torrance Pulmonary Physiology;Torrance=DXF005700",
            label:
              "Providence St. Joseph Health;Providence Little Company of Mary - Torrance Pulmonary Physiology;Torrance=DXF005700",
          },
          {
            id: "Providence St. Joseph Health;Providence Little Company of Mary - Torrance Laboratory;Torrance=DXF005701",
            label:
              "Providence St. Joseph Health;Providence Little Company of Mary - Torrance Laboratory;Torrance=DXF005701",
          },
          {
            id: "Providence St. Joseph Health;Providence Mission Hospital - Mission Viejo Laboratory;MISSION VIEJO=DXF005702",
            label:
              "Providence St. Joseph Health;Providence Mission Hospital - Mission Viejo Laboratory;MISSION VIEJO=DXF005702",
          },
          {
            id: "Providence St. Joseph Health;Providence Mission Hospital - Laguna Beach Laboratory;Laguna Beach=DXF005703",
            label:
              "Providence St. Joseph Health;Providence Mission Hospital - Laguna Beach Laboratory;Laguna Beach=DXF005703",
          },
          {
            id: "Providence St. Joseph Health;Providence Redwood Memorial Hospital;Fortuna=DXF005704",
            label:
              "Providence St. Joseph Health;Providence Redwood Memorial Hospital;Fortuna=DXF005704",
          },
          {
            id: "Providence St. Joseph Health;Providence Saint John\u2019s Health Center Laboratory;Santa Monica=DXF005705",
            label:
              "Providence St. Joseph Health;Providence Saint John\u2019s Health Center Laboratory;Santa Monica=DXF005705",
          },
          {
            id: "Providence St. Joseph Health;Providence Saint Joseph Medical Center Laboratory;Burbank=DXF005706",
            label:
              "Providence St. Joseph Health;Providence Saint Joseph Medical Center Laboratory;Burbank=DXF005706",
          },
          {
            id: "Providence St. Joseph Health;Providence Saint Joseph Medical Center Laboratory;Burbank=DXF005707",
            label:
              "Providence St. Joseph Health;Providence Saint Joseph Medical Center Laboratory;Burbank=DXF005707",
          },
          {
            id: "Providence St. Joseph Health;Providence Santa Rosa Memorial Hospital - Laboratory;Santa Rosa=DXF005708",
            label:
              "Providence St. Joseph Health;Providence Santa Rosa Memorial Hospital - Laboratory;Santa Rosa=DXF005708",
          },
          {
            id: "Providence St. Joseph Health;Providence St. Joseph Hospital Laboratory;Eureka=DXF005709",
            label:
              "Providence St. Joseph Health;Providence St. Joseph Hospital Laboratory;Eureka=DXF005709",
          },
          {
            id: "Providence St. Joseph Health;Providence St. Joseph Hospital Laboratory;Eureka=DXF005710",
            label:
              "Providence St. Joseph Health;Providence St. Joseph Hospital Laboratory;Eureka=DXF005710",
          },
          {
            id: "Providence St. Joseph Health;Providence St. Joseph Hospital Laboratory;Orange=DXF005711",
            label:
              "Providence St. Joseph Health;Providence St. Joseph Hospital Laboratory;Orange=DXF005711",
          },
          {
            id: "Providence St. Joseph Health;Providence St. Joseph Hospital Laboratory;Orange=DXF005712",
            label:
              "Providence St. Joseph Health;Providence St. Joseph Hospital Laboratory;Orange=DXF005712",
          },
          {
            id: "Providence St. Joseph Health;Providence St. Jude Medical Center Laboratory;Fullerton=DXF005713",
            label:
              "Providence St. Joseph Health;Providence St. Jude Medical Center Laboratory;Fullerton=DXF005713",
          },
          {
            id: "Providence St. Joseph Health;Healdsburg Hospital;HEALDSBURG=DXF005714",
            label:
              "Providence St. Joseph Health;Healdsburg Hospital;HEALDSBURG=DXF005714",
          },
          {
            id: "Providence St. Joseph Health;Petaluma Valley Hospital;Petaluma=DXF005715",
            label:
              "Providence St. Joseph Health;Petaluma Valley Hospital;Petaluma=DXF005715",
          },
          {
            id: "Providence St. Joseph Health;Providence Queen of the Valley Medical Center;Napa=DXF005716",
            label:
              "Providence St. Joseph Health;Providence Queen of the Valley Medical Center;Napa=DXF005716",
          },
          {
            id: "Providence St. Joseph Health;Providence St. Mary Medical Center Laboratory;Apple Valley=DXF005717",
            label:
              "Providence St. Joseph Health;Providence St. Mary Medical Center Laboratory;Apple Valley=DXF005717",
          },
          {
            id: "Providence St. Joseph Health;Providence St. Mary Medical Center;Apple Valley=DXF005718",
            label:
              "Providence St. Joseph Health;Providence St. Mary Medical Center;Apple Valley=DXF005718",
          },
          {
            id: "Providence St. Joseph Health;Providence Little Company of Mary \u2013 San Pedro Laboratory;San Pedro=DXF005719",
            label:
              "Providence St. Joseph Health;Providence Little Company of Mary \u2013 San Pedro Laboratory;San Pedro=DXF005719",
          },
          {
            id: "Providence St. Joseph Health;Providence St. Jude Medical Center - Respiratory Care;Fullerton=DXF005720",
            label:
              "Providence St. Joseph Health;Providence St. Jude Medical Center - Respiratory Care;Fullerton=DXF005720",
          },
          {
            id: "Providence St. Joseph Health;Providence Saint John\u2019s Health Center Pulmonary Lab;Santa Monica=DXF005721",
            label:
              "Providence St. Joseph Health;Providence Saint John\u2019s Health Center Pulmonary Lab;Santa Monica=DXF005721",
          },
          {
            id: "Puja Chitkara MD A Medical Corporation; ;Chula Vista=DXF001332",
            label:
              "Puja Chitkara MD A Medical Corporation; ;Chula Vista=DXF001332",
          },
          {
            id: "PulmoCrit Associates; ;Northridge=DXF001978",
            label: "PulmoCrit Associates; ;Northridge=DXF001978",
          },
          {
            id: "Pulmonary & Sleep Disorder Consultants INC; ;Fountain Valley=DXF003652",
            label:
              "Pulmonary & Sleep Disorder Consultants INC; ;Fountain Valley=DXF003652",
          },
          {
            id: "Pulmonary Associates Burlingame Medical Corp; ;Burlingame=DXF000662",
            label:
              "Pulmonary Associates Burlingame Medical Corp; ;Burlingame=DXF000662",
          },
          {
            id: "Purchase Orthopedic Clinic; ;Mill Valley=DXF004660",
            label: "Purchase Orthopedic Clinic; ;Mill Valley=DXF004660",
          },
          {
            id: "Purisima Family Medicine, Inc.; ;Half Moon Bay=DXF000208",
            label: "Purisima Family Medicine, Inc.; ;Half Moon Bay=DXF000208",
          },
          {
            id: "Pursue Health LLC; ;Irvine=DXF003118",
            label: "Pursue Health LLC; ;Irvine=DXF003118",
          },
          {
            id: "Pursue Health LLC;The Pavilion at Sunny Hills;Fullerton=DXF003119",
            label:
              "Pursue Health LLC;The Pavilion at Sunny Hills;Fullerton=DXF003119",
          },
          {
            id: "Pursue Health LLC;Country Villa Rehabilitation CEnter;Los Angeles=DXF003120",
            label:
              "Pursue Health LLC;Country Villa Rehabilitation CEnter;Los Angeles=DXF003120",
          },
          {
            id: "Pursue Health LLC;Country Villa Sheraton;North Hills=DXF003121",
            label:
              "Pursue Health LLC;Country Villa Sheraton;North Hills=DXF003121",
          },
          {
            id: "Pursue Health LLC;Country Villa Palms;Los Angeles=DXF003122",
            label:
              "Pursue Health LLC;Country Villa Palms;Los Angeles=DXF003122",
          },
          {
            id: "Pursue Health LLC;Desert Canyon Post Acute;Lancaster=DXF003123",
            label:
              "Pursue Health LLC;Desert Canyon Post Acute;Lancaster=DXF003123",
          },
          {
            id: "Pursue Health LLC;Fulton Gardens Post Acute;Stockton=DXF003124",
            label:
              "Pursue Health LLC;Fulton Gardens Post Acute;Stockton=DXF003124",
          },
          {
            id: "Pursue Health LLC;Thousand Oaks Post Acute;Thousand Oaks=DXF003125",
            label:
              "Pursue Health LLC;Thousand Oaks Post Acute;Thousand Oaks=DXF003125",
          },
          {
            id: "Pursue Health LLC;Care Center on Hazeltine;Van Nuys,=DXF003126",
            label:
              "Pursue Health LLC;Care Center on Hazeltine;Van Nuys,=DXF003126",
          },
          {
            id: "Pursue Health LLC;The Ellison John Transitional Care Center;Lancaster=DXF003127",
            label:
              "Pursue Health LLC;The Ellison John Transitional Care Center;Lancaster=DXF003127",
          },
          {
            id: "Pursue Health LLC;The Springs Healthcare and Rehabilitation Center;Murrieta=DXF003128",
            label:
              "Pursue Health LLC;The Springs Healthcare and Rehabilitation Center;Murrieta=DXF003128",
          },
          {
            id: "Qingping Wang MD; ;SOUTH SAN FRANCISCO=DXF002526",
            label: "Qingping Wang MD; ;SOUTH SAN FRANCISCO=DXF002526",
          },
          {
            id: "Quality Care IPA Inland Empire, Inc. DBA: Quality Care Medical Center; ;San Bernardino=DXF005781",
            label:
              "Quality Care IPA Inland Empire, Inc. DBA: Quality Care Medical Center; ;San Bernardino=DXF005781",
          },
          {
            id: "Quality Therapeutic Services Inc; ;El Cajon=DXF003753",
            label: "Quality Therapeutic Services Inc; ;El Cajon=DXF003753",
          },
          {
            id: "Quartz Hill Post Acute; ;Redding=DXF003498",
            label: "Quartz Hill Post Acute; ;Redding=DXF003498",
          },
          {
            id: "QueensCare Health Centers; ;Los Angeles=DXF000521",
            label: "QueensCare Health Centers; ;Los Angeles=DXF000521",
          },
          {
            id: "Quest Diagnostics; ;West Hills=DXF005243",
            label: "Quest Diagnostics; ;West Hills=DXF005243",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;ventura=DXF005244",
            label: "Quest Diagnostics;Quest Diagnostics;ventura=DXF005244",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;Stockton=DXF005245",
            label: "Quest Diagnostics;Quest Diagnostics;Stockton=DXF005245",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;San Jose=DXF005246",
            label: "Quest Diagnostics;Quest Diagnostics;San Jose=DXF005246",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;Redlands=DXF005247",
            label: "Quest Diagnostics;Quest Diagnostics;Redlands=DXF005247",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;Redding=DXF005248",
            label: "Quest Diagnostics;Quest Diagnostics;Redding=DXF005248",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;Berkeley=DXF005249",
            label: "Quest Diagnostics;Quest Diagnostics;Berkeley=DXF005249",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;Lynwood=DXF005250",
            label: "Quest Diagnostics;Quest Diagnostics;Lynwood=DXF005250",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;Sacramento=DXF005251",
            label: "Quest Diagnostics;Quest Diagnostics;Sacramento=DXF005251",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;Sacramento=DXF005252",
            label: "Quest Diagnostics;Quest Diagnostics;Sacramento=DXF005252",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;Orange=DXF005253",
            label: "Quest Diagnostics;Quest Diagnostics;Orange=DXF005253",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;Arcadia=DXF005254",
            label: "Quest Diagnostics;Quest Diagnostics;Arcadia=DXF005254",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;Riverside=DXF005255",
            label: "Quest Diagnostics;Quest Diagnostics;Riverside=DXF005255",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;Highland=DXF005256",
            label: "Quest Diagnostics;Quest Diagnostics;Highland=DXF005256",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;Fresno=DXF005257",
            label: "Quest Diagnostics;Quest Diagnostics;Fresno=DXF005257",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;Van Nuys=DXF005258",
            label: "Quest Diagnostics;Quest Diagnostics;Van Nuys=DXF005258",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;West Hills=DXF005259",
            label: "Quest Diagnostics;Quest Diagnostics;West Hills=DXF005259",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;West Hills=DXF005260",
            label: "Quest Diagnostics;Quest Diagnostics;West Hills=DXF005260",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;West Hills=DXF005261",
            label: "Quest Diagnostics;Quest Diagnostics;West Hills=DXF005261",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;MERCED=DXF005262",
            label: "Quest Diagnostics;Quest Diagnostics;MERCED=DXF005262",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;San Diego=DXF005263",
            label: "Quest Diagnostics;Quest Diagnostics;San Diego=DXF005263",
          },
          {
            id: "Quest Diagnostics;Quest Diagnostics;Bakersfield=DXF005264",
            label: "Quest Diagnostics;Quest Diagnostics;Bakersfield=DXF005264",
          },
          {
            id: "Quest Diagnostics Nichols Institute; ;San Juan Capistrano=DXF005336",
            label:
              "Quest Diagnostics Nichols Institute; ;San Juan Capistrano=DXF005336",
          },
          {
            id: "Quest Diagnostics Nichols Institute;Quest Diagnostics;San Juan Capistrano=DXF005591",
            label:
              "Quest Diagnostics Nichols Institute;Quest Diagnostics;San Juan Capistrano=DXF005591",
          },
          {
            id: "Quest Diagnostics Nichols Institute;Nichols Institute West Hills;West Hills=DXF005592",
            label:
              "Quest Diagnostics Nichols Institute;Nichols Institute West Hills;West Hills=DXF005592",
          },
          {
            id: "R Ruiz M D A Professional Corporation; ;Montebello=DXF003542",
            label:
              "R Ruiz M D A Professional Corporation; ;Montebello=DXF003542",
          },
          {
            id: "R. Ruiz, M.D., A Medical Corporation; ;RIALTO=DXF003389",
            label: "R. Ruiz, M.D., A Medical Corporation; ;RIALTO=DXF003389",
          },
          {
            id: "Radhey S Bansal,MD Inc; ;Delano=DXF001479",
            label: "Radhey S Bansal,MD Inc; ;Delano=DXF001479",
          },
          {
            id: "Radiant Health Centers; ;Irvine=DXF003460",
            label: "Radiant Health Centers; ;Irvine=DXF003460",
          },
          {
            id: "RADIANT PRIMARY CARE; ;victorville=DXF000840",
            label: "RADIANT PRIMARY CARE; ;victorville=DXF000840",
          },
          {
            id: "Radiology Associates of San Luis Obispo, A Medical Group, Inc.; ;Atascadero=DXF001753",
            label:
              "Radiology Associates of San Luis Obispo, A Medical Group, Inc.; ;Atascadero=DXF001753",
          },
          {
            id: "Raed Al-Naser, MD A Medical Corporation; ;La Mesa=DXF001346",
            label:
              "Raed Al-Naser, MD A Medical Corporation; ;La Mesa=DXF001346",
          },
          {
            id: "Rahul Grover Inc; ;Los Angeles=DXF003338",
            label: "Rahul Grover Inc; ;Los Angeles=DXF003338",
          },
          {
            id: "RAHUL L PATEL, MD; ;Manteca=DXF000882",
            label: "RAHUL L PATEL, MD; ;Manteca=DXF000882",
          },
          {
            id: "Raincross Medical Group; ;Riverside=DXF001062",
            label: "Raincross Medical Group; ;Riverside=DXF001062",
          },
          {
            id: "RAINCROSS URGENT CARE, INC.; ;Riverside=DXF004464",
            label: "RAINCROSS URGENT CARE, INC.; ;Riverside=DXF004464",
          },
          {
            id: "Raincross Womens Medical Group; ;Riverside=DXF003227",
            label: "Raincross Womens Medical Group; ;Riverside=DXF003227",
          },
          {
            id: "Raincross Womens Medical Group;Alonso R. Ojeda, M.D.;Riverside=DXF003231",
            label:
              "Raincross Womens Medical Group;Alonso R. Ojeda, M.D.;Riverside=DXF003231",
          },
          {
            id: "Raincross Womens Medical Group;Serafin Salazar, M.D.;Riverside=DXF003232",
            label:
              "Raincross Womens Medical Group;Serafin Salazar, M.D.;Riverside=DXF003232",
          },
          {
            id: "Raincross Womens Medical Group;Leila Magistrado, M.D.;Riverside=DXF003233",
            label:
              "Raincross Womens Medical Group;Leila Magistrado, M.D.;Riverside=DXF003233",
          },
          {
            id: "RAMAN CHOPRA MD, INC; ;Garden Grove=DXF003734",
            label: "RAMAN CHOPRA MD, INC; ;Garden Grove=DXF003734",
          },
          {
            id: "RAMAN CHOPRA MD, INC;JANAK CHOPRA MD, INC;Garden Grove=DXF003735",
            label:
              "RAMAN CHOPRA MD, INC;JANAK CHOPRA MD, INC;Garden Grove=DXF003735",
          },
          {
            id: "Ramona Care, Inc.; ;El Monte=DXF005033",
            label: "Ramona Care, Inc.; ;El Monte=DXF005033",
          },
          {
            id: "Rancho Family medical group; ;Temecula=DXF000996",
            label: "Rancho Family medical group; ;Temecula=DXF000996",
          },
          {
            id: "Rancho Family medical group; ;Menifee=DXF001000",
            label: "Rancho Family medical group; ;Menifee=DXF001000",
          },
          {
            id: "Rancho Family medical group; ;Temecula=DXF001636",
            label: "Rancho Family medical group; ;Temecula=DXF001636",
          },
          {
            id: "Rancho Family medical group; ;Temecula=DXF001773",
            label: "Rancho Family medical group; ;Temecula=DXF001773",
          },
          {
            id: "Rancho Family medical group;Rancho Family Medical Group;Temecula=DXF001999",
            label:
              "Rancho Family medical group;Rancho Family Medical Group;Temecula=DXF001999",
          },
          {
            id: "Rancho Family medical group; ;Hemet=DXF002387",
            label: "Rancho Family medical group; ;Hemet=DXF002387",
          },
          {
            id: "Rancho Health MSO; ;Temecula=DXF001020",
            label: "Rancho Health MSO; ;Temecula=DXF001020",
          },
          {
            id: "Rancho Health MSO;Rancho Family Medical Group;Temecula=DXF001148",
            label:
              "Rancho Health MSO;Rancho Family Medical Group;Temecula=DXF001148",
          },
          {
            id: "Rancho Health MSO;Primary Medical Group of Ventura County Holdings Inc;ventura=DXF001149",
            label:
              "Rancho Health MSO;Primary Medical Group of Ventura County Holdings Inc;ventura=DXF001149",
          },
          {
            id: "Rancho Health MSO;San Diego Medical Group;San Diego=DXF001234",
            label:
              "Rancho Health MSO;San Diego Medical Group;San Diego=DXF001234",
          },
          {
            id: "Rancho Medical Clinic; ;MORENO VALLEY=DXF002062",
            label: "Rancho Medical Clinic; ;MORENO VALLEY=DXF002062",
          },
          {
            id: "Rancho Wellness; ;Rancho Cucamonga=DXF002298",
            label: "Rancho Wellness; ;Rancho Cucamonga=DXF002298",
          },
          {
            id: "Ravenswood Family Health Network; ;East Palo Alto=DXF003008",
            label:
              "Ravenswood Family Health Network; ;East Palo Alto=DXF003008",
          },
          {
            id: "Raymond Huang, MD; ;San Jose=DXF004378",
            label: "Raymond Huang, MD; ;San Jose=DXF004378",
          },
          {
            id: "Raymond Huang, MD;Raymond Huang, MD;San Jose=DXF004379",
            label: "Raymond Huang, MD;Raymond Huang, MD;San Jose=DXF004379",
          },
          {
            id: "Razavi Corp. DBA Hilldale Habilitation Center; ;La Mesa=DXF005331",
            label:
              "Razavi Corp. DBA Hilldale Habilitation Center; ;La Mesa=DXF005331",
          },
          {
            id: "Reach Healthcare; ;San Diego=DXF005156",
            label: "Reach Healthcare; ;San Diego=DXF005156",
          },
          {
            id: "Rebecca McMahon, LCSW; ;Salida=DXF004666",
            label: "Rebecca McMahon, LCSW; ;Salida=DXF004666",
          },
          {
            id: "Rebuilding Together Oakland East Bay; ;Oakland=DXF004432",
            label: "Rebuilding Together Oakland East Bay; ;Oakland=DXF004432",
          },
          {
            id: "Reche Canyon Regional Rehabilitation Center; ;Colton=DXF005866",
            label:
              "Reche Canyon Regional Rehabilitation Center; ;Colton=DXF005866",
          },
          {
            id: "RED BLUFF HEALTHCARE CENTER; ;Red Bluff=DXF004816",
            label: "RED BLUFF HEALTHCARE CENTER; ;Red Bluff=DXF004816",
          },
          {
            id: "Red Bluff Unified Elementary School District; ;Red Bluff=DXF003552",
            label:
              "Red Bluff Unified Elementary School District; ;Red Bluff=DXF003552",
          },
          {
            id: "Redding Critical Care Medical Group, Inc; ;Redding=DXF001263",
            label:
              "Redding Critical Care Medical Group, Inc; ;Redding=DXF001263",
          },
          {
            id: "Redding Pain Medicine; ;Redding=DXF004681",
            label: "Redding Pain Medicine; ;Redding=DXF004681",
          },
          {
            id: "Redding Post Acute; ;Redding=DXF003532",
            label: "Redding Post Acute; ;Redding=DXF003532",
          },
          {
            id: "Redding Radiation Oncologists, PC; ;Fort Myers=DXF001510",
            label: "Redding Radiation Oncologists, PC; ;Fort Myers=DXF001510",
          },
          {
            id: "Redding Urologic Associates; ;Redding=DXF001415",
            label: "Redding Urologic Associates; ;Redding=DXF001415",
          },
          {
            id: "Redlands Community Hospital; ;Redlands=DXF002090",
            label: "Redlands Community Hospital; ;Redlands=DXF002090",
          },
          {
            id: "Redlands Community Hospital;Redlands Family Clinic;Redlands=DXF002100",
            label:
              "Redlands Community Hospital;Redlands Family Clinic;Redlands=DXF002100",
          },
          {
            id: "Redlands Community Hospital;Yucaipa Family Clinic;Redlands=DXF002101",
            label:
              "Redlands Community Hospital;Yucaipa Family Clinic;Redlands=DXF002101",
          },
          {
            id: "Redlands Family Practice Medical Group, Inc. dba San Bernadino Medical Group, Inc.; ;Redlands=DXF000689",
            label:
              "Redlands Family Practice Medical Group, Inc. dba San Bernadino Medical Group, Inc.; ;Redlands=DXF000689",
          },
          {
            id: "Redwood Coast Medical Services; ;Gualala=DXF004372",
            label: "Redwood Coast Medical Services; ;Gualala=DXF004372",
          },
          {
            id: "Redwood Orthopaedic Surgery Associates; ;Santa Rosa=DXF000654",
            label:
              "Redwood Orthopaedic Surgery Associates; ;Santa Rosa=DXF000654",
          },
          {
            id: "Redwood Pediatric Medical Group; ;Fortuna=DXF004565",
            label: "Redwood Pediatric Medical Group; ;Fortuna=DXF004565",
          },
          {
            id: "Redwoods Rural Health Center; ;Redway=DXF002575",
            label: "Redwoods Rural Health Center; ;Redway=DXF002575",
          },
          {
            id: "Regent Medical Group, Inc.; ;Cypress=DXF002274",
            label: "Regent Medical Group, Inc.; ;Cypress=DXF002274",
          },
          {
            id: "Regent Medical Group, Inc.;California Pacific Physicians Medical Group, Inc.;Cypress=DXF004720",
            label:
              "Regent Medical Group, Inc.;California Pacific Physicians Medical Group, Inc.;Cypress=DXF004720",
          },
          {
            id: "REGIONAL HEART CENTER CARDIOLOGY; ;Thousand Oaks=DXF001711",
            label: "REGIONAL HEART CENTER CARDIOLOGY; ;Thousand Oaks=DXF001711",
          },
          {
            id: "Rehab Labs; ;Palm Desert=DXF004279",
            label: "Rehab Labs; ;Palm Desert=DXF004279",
          },
          {
            id: "Rekha Murali  MD Inc; ;San Ramon=DXF000621",
            label: "Rekha Murali  MD Inc; ;San Ramon=DXF000621",
          },
          {
            id: "Reliable Medical Associates; ;Beverly Hills=DXF004096",
            label: "Reliable Medical Associates; ;Beverly Hills=DXF004096",
          },
          {
            id: "Renaissance Healthcare for Women; ;Mountain View=DXF004232",
            label: "Renaissance Healthcare for Women; ;Mountain View=DXF004232",
          },
          {
            id: "Renal Consultants of Ventura County; ;Oxnard=DXF002172",
            label: "Renal Consultants of Ventura County; ;Oxnard=DXF002172",
          },
          {
            id: "Renal Medical Group; ;Visalai=DXF002103",
            label: "Renal Medical Group; ;Visalai=DXF002103",
          },
          {
            id: "ReNew Health Consulting Services; ;Monrovia=DXF004942",
            label: "ReNew Health Consulting Services; ;Monrovia=DXF004942",
          },
          {
            id: "ReNew Health Consulting Services;Orinda Care Center;Orinda=DXF004943",
            label:
              "ReNew Health Consulting Services;Orinda Care Center;Orinda=DXF004943",
          },
          {
            id: "ReNew Health Consulting Services;Griffith Park Healthcare Center;Glendale=DXF004945",
            label:
              "ReNew Health Consulting Services;Griffith Park Healthcare Center;Glendale=DXF004945",
          },
          {
            id: "ReNew Health Consulting Services;Santa Fe Heights Healthcare Center;Compton=DXF004946",
            label:
              "ReNew Health Consulting Services;Santa Fe Heights Healthcare Center;Compton=DXF004946",
          },
          {
            id: "ReNew Health Consulting Services;Simi Healthcare Center;SIMI VALLEY=DXF004947",
            label:
              "ReNew Health Consulting Services;Simi Healthcare Center;SIMI VALLEY=DXF004947",
          },
          {
            id: "ReNew Health Consulting Services;Hyde Park Healthcare Center;SIMI VALLEY=DXF004948",
            label:
              "ReNew Health Consulting Services;Hyde Park Healthcare Center;SIMI VALLEY=DXF004948",
          },
          {
            id: "ReNew Health Consulting Services;Healthcare Center of Orange County;Buena Park=DXF004949",
            label:
              "ReNew Health Consulting Services;Healthcare Center of Orange County;Buena Park=DXF004949",
          },
          {
            id: "ReNew Health Consulting Services;Redwood Healthcare Center;Oakland=DXF004950",
            label:
              "ReNew Health Consulting Services;Redwood Healthcare Center;Oakland=DXF004950",
          },
          {
            id: "ReNew Health Consulting Services;Lake Merritt Healthcare Center;Oakland=DXF004951",
            label:
              "ReNew Health Consulting Services;Lake Merritt Healthcare Center;Oakland=DXF004951",
          },
          {
            id: "ReNew Health Consulting Services;Valley Vista Nursing and Transitional Care;North Hollywood=DXF004952",
            label:
              "ReNew Health Consulting Services;Valley Vista Nursing and Transitional Care;North Hollywood=DXF004952",
          },
          {
            id: "ReNew Health Consulting Services;Inland Valley Care and Rehab;Pomona=DXF004953",
            label:
              "ReNew Health Consulting Services;Inland Valley Care and Rehab;Pomona=DXF004953",
          },
          {
            id: "ReNew Health Consulting Services;Holiday Manor Care Center;Canoga Park=DXF004954",
            label:
              "ReNew Health Consulting Services;Holiday Manor Care Center;Canoga Park=DXF004954",
          },
          {
            id: "ReNew Health Consulting Services;Herman Healthcare Center;San Jose=DXF004955",
            label:
              "ReNew Health Consulting Services;Herman Healthcare Center;San Jose=DXF004955",
          },
          {
            id: "ReNew Health Consulting Services;Asistencia Villa Rehab and Care Center;Redlands=DXF004956",
            label:
              "ReNew Health Consulting Services;Asistencia Villa Rehab and Care Center;Redlands=DXF004956",
          },
          {
            id: "ReNew Health Consulting Services;Mesa Glen Care Center;Glendora=DXF004957",
            label:
              "ReNew Health Consulting Services;Mesa Glen Care Center;Glendora=DXF004957",
          },
          {
            id: "ReNew Health Consulting Services;Rancho Mesa Care Center;Alta Loma=DXF004958",
            label:
              "ReNew Health Consulting Services;Rancho Mesa Care Center;Alta Loma=DXF004958",
          },
          {
            id: "ReNew Health Consulting Services;Villa Mesa Care Center;Upland=DXF004959",
            label:
              "ReNew Health Consulting Services;Villa Mesa Care Center;Upland=DXF004959",
          },
          {
            id: "ReNew Health Consulting Services;Chestnut Ridge Post Acute;Glendale=DXF004960",
            label:
              "ReNew Health Consulting Services;Chestnut Ridge Post Acute;Glendale=DXF004960",
          },
          {
            id: "ReNew Health Consulting Services;Miracle Mile Healthcare Center;Los Angeles=DXF004961",
            label:
              "ReNew Health Consulting Services;Miracle Mile Healthcare Center;Los Angeles=DXF004961",
          },
          {
            id: "ReNew Health Consulting Services;San Marino Healthcare Center;San Gabriel=DXF004962",
            label:
              "ReNew Health Consulting Services;San Marino Healthcare Center;San Gabriel=DXF004962",
          },
          {
            id: "Reproductive Health Care Center, Inc.; ;Fullerton=DXF001410",
            label:
              "Reproductive Health Care Center, Inc.; ;Fullerton=DXF001410",
          },
          {
            id: "Resources For Independent Living; ;Sacramento=DXF005109",
            label: "Resources For Independent Living; ;Sacramento=DXF005109",
          },
          {
            id: "Retina Orange County, Inc.; ;Irvine=DXF000152",
            label: "Retina Orange County, Inc.; ;Irvine=DXF000152",
          },
          {
            id: "Retina-Vitreous Associates Medical Group; ;Los Angeles=DXF001712",
            label:
              "Retina-Vitreous Associates Medical Group; ;Los Angeles=DXF001712",
          },
          {
            id: "Retirement Housing Foundation; ;Auburn=DXF005317",
            label: "Retirement Housing Foundation; ;Auburn=DXF005317",
          },
          {
            id: "Retirement Housing Foundation;Auburn Ravine Terrace;Auburn=DXF005319",
            label:
              "Retirement Housing Foundation;Auburn Ravine Terrace;Auburn=DXF005319",
          },
          {
            id: "Rex Medical; ;Duarte=DXF003547",
            label: "Rex Medical; ;Duarte=DXF003547",
          },
          {
            id: "reza shafee md inc; ;Santa Ana=DXF000672",
            label: "reza shafee md inc; ;Santa Ana=DXF000672",
          },
          {
            id: "RH Community Builders LP; ;Fresno=DXF002641",
            label: "RH Community Builders LP; ;Fresno=DXF002641",
          },
          {
            id: "RheoMed MSO, Inc; ;Orange=DXF004653",
            label: "RheoMed MSO, Inc; ;Orange=DXF004653",
          },
          {
            id: "Rhonda Rand; ;Beverly Hills=DXF000196",
            label: "Rhonda Rand; ;Beverly Hills=DXF000196",
          },
          {
            id: "Richard K N Ryu MD; ;Santa Barbara=DXF001627",
            label: "Richard K N Ryu MD; ;Santa Barbara=DXF001627",
          },
          {
            id: "Richmond Post Acute Care; ;Richmond=DXF002581",
            label: "Richmond Post Acute Care; ;Richmond=DXF002581",
          },
          {
            id: "Ridgecrest Regional Hospital - Ridgecrest, CA; ;Ridgecrest=DXF004384",
            label:
              "Ridgecrest Regional Hospital - Ridgecrest, CA; ;Ridgecrest=DXF004384",
          },
          {
            id: "Ridgecrest Regional Hospital - Ridgecrest, CA;Ridgecrest Rural Health Clinic;Ridgecrest=DXF004385",
            label:
              "Ridgecrest Regional Hospital - Ridgecrest, CA;Ridgecrest Rural Health Clinic;Ridgecrest=DXF004385",
          },
          {
            id: "Ridgecrest Regional Hospital - Ridgecrest, CA;Southern Sierra Medical Clinic;Ridgecrest=DXF004386",
            label:
              "Ridgecrest Regional Hospital - Ridgecrest, CA;Southern Sierra Medical Clinic;Ridgecrest=DXF004386",
          },
          {
            id: "Ridgecrest Regional Hospital - Ridgecrest, CA;Ridgecrest Obstetrics;Ridgecrest=DXF004387",
            label:
              "Ridgecrest Regional Hospital - Ridgecrest, CA;Ridgecrest Obstetrics;Ridgecrest=DXF004387",
          },
          {
            id: "Ridgecrest Regional Hospital - Ridgecrest, CA;China Lake Community Health Clinic;Ridgecrest=DXF004388",
            label:
              "Ridgecrest Regional Hospital - Ridgecrest, CA;China Lake Community Health Clinic;Ridgecrest=DXF004388",
          },
          {
            id: "RIDGECREST REGIONAL HOSPITAL - RURAL HEALTH CLINIC; ;Ridgecrest=DXF001920",
            label:
              "RIDGECREST REGIONAL HOSPITAL - RURAL HEALTH CLINIC; ;Ridgecrest=DXF001920",
          },
          {
            id: "Ridgeview Health Center; ;San Diego=DXF003755",
            label: "Ridgeview Health Center; ;San Diego=DXF003755",
          },
          {
            id: "RightRX; ;Brea=DXF001858",
            label: "RightRX; ;Brea=DXF001858",
          },
          {
            id: "Ripon Family Physicians; ;Ripon=DXF001987",
            label: "Ripon Family Physicians; ;Ripon=DXF001987",
          },
          {
            id: "Rishu Gupta MD Inc; ;Poway=DXF002022",
            label: "Rishu Gupta MD Inc; ;Poway=DXF002022",
          },
          {
            id: "Rishu Gupta MD Inc;Rishu Gupta MD Inc;Poway=DXF002023",
            label: "Rishu Gupta MD Inc;Rishu Gupta MD Inc;Poway=DXF002023",
          },
          {
            id: "Ritter Center; ;San Rafael=DXF002904",
            label: "Ritter Center; ;San Rafael=DXF002904",
          },
          {
            id: "River City Medical Group; ;Sacramento=DXF000051",
            label: "River City Medical Group; ;Sacramento=DXF000051",
          },
          {
            id: "Riverbend Nursing Center; ;West Sacramento=DXF005411",
            label: "Riverbend Nursing Center; ;West Sacramento=DXF005411",
          },
          {
            id: "Riverpointe post acute; ;Carmichael=DXF004880",
            label: "Riverpointe post acute; ;Carmichael=DXF004880",
          },
          {
            id: "Riverside Care, Inc; ;Riverside=DXF005045",
            label: "Riverside Care, Inc; ;Riverside=DXF005045",
          },
          {
            id: "Riverside Care, Inc;Valencia Gardens Health Care Center;Riverside=DXF005046",
            label:
              "Riverside Care, Inc;Valencia Gardens Health Care Center;Riverside=DXF005046",
          },
          {
            id: "Riverside Community Healthplan Medical Group, Inc. dba, Riverside Physicians Network; ;Riverside=DXF000688",
            label:
              "Riverside Community Healthplan Medical Group, Inc. dba, Riverside Physicians Network; ;Riverside=DXF000688",
          },
          {
            id: "Riverside Family Physicians; ;Riverside=DXF000274",
            label: "Riverside Family Physicians; ;Riverside=DXF000274",
          },
          {
            id: "Riverside Family Physicians; ;Riverside=DXF001001",
            label: "Riverside Family Physicians; ;Riverside=DXF001001",
          },
          {
            id: "Riverside Healthcare and Wellness, LLC; ;Riverside=DXF005047",
            label:
              "Riverside Healthcare and Wellness, LLC; ;Riverside=DXF005047",
          },
          {
            id: "Riverside Heights Healthcare Center; ;Riverside=DXF002449",
            label: "Riverside Heights Healthcare Center; ;Riverside=DXF002449",
          },
          {
            id: "Riverside Heights Healthcare Center;Arrowhead Healthcare Center;San Bernardino=DXF002451",
            label:
              "Riverside Heights Healthcare Center;Arrowhead Healthcare Center;San Bernardino=DXF002451",
          },
          {
            id: "Riverside Medical Clinic; ;Riverside=DXF000768",
            label: "Riverside Medical Clinic; ;Riverside=DXF000768",
          },
          {
            id: "Riverside Medical Clinic Patient Services; ;Riverside=DXF001169",
            label:
              "Riverside Medical Clinic Patient Services; ;Riverside=DXF001169",
          },
          {
            id: "Riverside Medical Clinic Patient Services_UHS; ;Riverside=DXF000137",
            label:
              "Riverside Medical Clinic Patient Services_UHS; ;Riverside=DXF000137",
          },
          {
            id: "Riverside Medical Clinic Patient Services_UHS;Riverside Medical Clinic, Inc.;Riverside=DXF000138",
            label:
              "Riverside Medical Clinic Patient Services_UHS;Riverside Medical Clinic, Inc.;Riverside=DXF000138",
          },
          {
            id: "Riverside Medical Clinic Patient Services_UHS;Riverside Medical Clinic;Riverside=DXF005387",
            label:
              "Riverside Medical Clinic Patient Services_UHS;Riverside Medical Clinic;Riverside=DXF005387",
          },
          {
            id: "Riverside Village Healthcare Center; ;Riverside=DXF005059",
            label: "Riverside Village Healthcare Center; ;Riverside=DXF005059",
          },
          {
            id: "Riviera ENT; ;Santa Barbara=DXF000992",
            label: "Riviera ENT; ;Santa Barbara=DXF000992",
          },
          {
            id: "Robert A. Kolarczyk MD; ;Santa Barbara=DXF000275",
            label: "Robert A. Kolarczyk MD; ;Santa Barbara=DXF000275",
          },
          {
            id: "Robert H. Brofman, M. D., APC; ;Pasadena=DXF000683",
            label: "Robert H. Brofman, M. D., APC; ;Pasadena=DXF000683",
          },
          {
            id: "ROBERT HARTMAN; ;Los Angeles=DXF000401",
            label: "ROBERT HARTMAN; ;Los Angeles=DXF000401",
          },
          {
            id: "Robert Houghton MD Inc; ;San Diego=DXF002243",
            label: "Robert Houghton MD Inc; ;San Diego=DXF002243",
          },
          {
            id: "Robert Kayland MD; ;Tarzana=DXF001141",
            label: "Robert Kayland MD; ;Tarzana=DXF001141",
          },
          {
            id: "Robert R Anderson MD Inc; ;Greenbrae=DXF001554",
            label: "Robert R Anderson MD Inc; ;Greenbrae=DXF001554",
          },
          {
            id: "Roberto C. Tongson; ;King City=DXF000932",
            label: "Roberto C. Tongson; ;King City=DXF000932",
          },
          {
            id: "Robotic Urology of Santa Barbara; ;Santa Barbara=DXF001286",
            label: "Robotic Urology of Santa Barbara; ;Santa Barbara=DXF001286",
          },
          {
            id: "Rocklin Family Practice and Sports Medicine; ;Rocklin=DXF000498",
            label:
              "Rocklin Family Practice and Sports Medicine; ;Rocklin=DXF000498",
          },
          {
            id: "Rogelio Drenning-Manrriquez Inc; ;Coachella=DXF003776",
            label: "Rogelio Drenning-Manrriquez Inc; ;Coachella=DXF003776",
          },
          {
            id: "Rogelio Drenning-Manrriquez Inc;Rogelio Drenning-Manrriquez Inc;Cathedral City=DXF004222",
            label:
              "Rogelio Drenning-Manrriquez Inc;Rogelio Drenning-Manrriquez Inc;Cathedral City=DXF004222",
          },
          {
            id: "Rogelio Drenning-Manrriquez Inc;Rogelio Drenning-Manrriquez Inc;DESERT HOT SPRINGS=DXF004223",
            label:
              "Rogelio Drenning-Manrriquez Inc;Rogelio Drenning-Manrriquez Inc;DESERT HOT SPRINGS=DXF004223",
          },
          {
            id: "Rogelio Drenning-Manrriquez Inc;Rogelio Drenning-Manrriquez Inc;Riverside=DXF004224",
            label:
              "Rogelio Drenning-Manrriquez Inc;Rogelio Drenning-Manrriquez Inc;Riverside=DXF004224",
          },
          {
            id: "Rogers Behavioral Health California, Inc.; ;Oconomowoc=DXF002447",
            label:
              "Rogers Behavioral Health California, Inc.; ;Oconomowoc=DXF002447",
          },
          {
            id: "ROLAND REINHART MD APC; ;Palm Desert=DXF000663",
            label: "ROLAND REINHART MD APC; ;Palm Desert=DXF000663",
          },
          {
            id: "Romeo Samouh MD Inc.; ;Upland=DXF000820",
            label: "Romeo Samouh MD Inc.; ;Upland=DXF000820",
          },
          {
            id: "Romesh K Japra MD A Medical Corporation; ;Fremont=DXF001151",
            label:
              "Romesh K Japra MD A Medical Corporation; ;Fremont=DXF001151",
          },
          {
            id: "Ronald Bush MD INC; ;Palm Desert=DXF004433",
            label: "Ronald Bush MD INC; ;Palm Desert=DXF004433",
          },
          {
            id: "ROOPA RAO, M.D. INC.; ;SIMI VALLEY=DXF000930",
            label: "ROOPA RAO, M.D. INC.; ;SIMI VALLEY=DXF000930",
          },
          {
            id: "Roots Food Group; ;Dallas=DXF004011",
            label: "Roots Food Group; ;Dallas=DXF004011",
          },
          {
            id: "ROSALIE A. DE GUZMAN, M.D., INC.; ;Corona=DXF002109",
            label: "ROSALIE A. DE GUZMAN, M.D., INC.; ;Corona=DXF002109",
          },
          {
            id: "Rose Avenue Family Medical Group; ;Oxnard=DXF001467",
            label: "Rose Avenue Family Medical Group; ;Oxnard=DXF001467",
          },
          {
            id: "Rose Women's Health; ;Arcadia=DXF002281",
            label: "Rose Women's Health; ;Arcadia=DXF002281",
          },
          {
            id: "Rosecrans Care Center; ;Gardena=DXF005160",
            label: "Rosecrans Care Center; ;Gardena=DXF005160",
          },
          {
            id: "Rosemarie Tweed, D.O. APC; ;MORENO VALLEY=DXF001053",
            label: "Rosemarie Tweed, D.O. APC; ;MORENO VALLEY=DXF001053",
          },
          {
            id: "Roses Agency Home Care; ;Los Angeles=DXF004383",
            label: "Roses Agency Home Care; ;Los Angeles=DXF004383",
          },
          {
            id: "Roseville Family Healthcare; ;Roseville=DXF004236",
            label: "Roseville Family Healthcare; ;Roseville=DXF004236",
          },
          {
            id: "Rowland Convalescent Hospital; ;Covina=DXF005285",
            label: "Rowland Convalescent Hospital; ;Covina=DXF005285",
          },
          {
            id: "Rowntree Gardens; ;Stanton=DXF001120",
            label: "Rowntree Gardens; ;Stanton=DXF001120",
          },
          {
            id: "Roy Medical Group, Inc.; ;Woodland Hills=DXF000199",
            label: "Roy Medical Group, Inc.; ;Woodland Hills=DXF000199",
          },
          {
            id: "Ruben Ruiz, M.D., A Medical Corporation; ;Ontario=DXF003376",
            label:
              "Ruben Ruiz, M.D., A Medical Corporation; ;Ontario=DXF003376",
          },
          {
            id: "RUHS ECM Team; ;Banning CA 9+2220=DXF001926",
            label: "RUHS ECM Team; ;Banning CA 9+2220=DXF001926",
          },
          {
            id: "RUHS ECM Team;RUHS ECM Team;Banning CA 9+2220=DXF001928",
            label: "RUHS ECM Team;RUHS ECM Team;Banning CA 9+2220=DXF001928",
          },
          {
            id: "Ruiz Family Physicians; ;La Quinta=DXF002974",
            label: "Ruiz Family Physicians; ;La Quinta=DXF002974",
          },
          {
            id: "Rupinder Mann MD Inc; ;Palm Desert=DXF004294",
            label: "Rupinder Mann MD Inc; ;Palm Desert=DXF004294",
          },
          {
            id: "Ryan Ranch Medical Group; ;Monterey=DXF004668",
            label: "Ryan Ranch Medical Group; ;Monterey=DXF004668",
          },
          {
            id: "s j kal inc; ;Northridge=DXF000324",
            label: "s j kal inc; ;Northridge=DXF000324",
          },
          {
            id: "S&A Podiatry Clinic; ;Stockton=DXF000379",
            label: "S&A Podiatry Clinic; ;Stockton=DXF000379",
          },
          {
            id: "S.F Valley Congregate Living, Inc; ;reseda=DXF004610",
            label: "S.F Valley Congregate Living, Inc; ;reseda=DXF004610",
          },
          {
            id: "S.M.HAMMAD RIZVI MD INC dba San Antonio Family Medicine group; ;Upland=DXF001202",
            label:
              "S.M.HAMMAD RIZVI MD INC dba San Antonio Family Medicine group; ;Upland=DXF001202",
          },
          {
            id: "Sacramento Colon & Rectal Surgery Medical Group; ;Sacramento=DXF000491",
            label:
              "Sacramento Colon & Rectal Surgery Medical Group; ;Sacramento=DXF000491",
          },
          {
            id: "Sacramento County Behavioral Health Department; ;Sacramento=DXF002418",
            label:
              "Sacramento County Behavioral Health Department; ;Sacramento=DXF002418",
          },
          {
            id: "Sacramento Ear, Nose and Throat Inc; ;Sacramento=DXF001177",
            label: "Sacramento Ear, Nose and Throat Inc; ;Sacramento=DXF001177",
          },
          {
            id: "Sacramento Native American Health Center - Sacramento, CA; ;Sacramento=DXF003214",
            label:
              "Sacramento Native American Health Center - Sacramento, CA; ;Sacramento=DXF003214",
          },
          {
            id: "Sacramento Native American Health Center, Inc; ;Sacramento=DXF001748",
            label:
              "Sacramento Native American Health Center, Inc; ;Sacramento=DXF001748",
          },
          {
            id: "SacValley MedShare; ;Chico=DXF000015",
            label: "SacValley MedShare; ;Chico=DXF000015",
          },
          {
            id: "Saina Health, Inc.; ;Menlo PArk=DXF003774",
            label: "Saina Health, Inc.; ;Menlo PArk=DXF003774",
          },
          {
            id: "Saint Agnes Medical Center; ;Fresno=DXF000474",
            label: "Saint Agnes Medical Center; ;Fresno=DXF000474",
          },
          {
            id: "Saint John's Program for Real Change; ;Sacramento=DXF003371",
            label:
              "Saint John's Program for Real Change; ;Sacramento=DXF003371",
          },
          {
            id: "Salida Del Sol CBAS, LLC; ;Long Beach=DXF003710",
            label: "Salida Del Sol CBAS, LLC; ;Long Beach=DXF003710",
          },
          {
            id: "Salinas Valley Emergency Medical Group, INC; ;Salinas=DXF001483",
            label:
              "Salinas Valley Emergency Medical Group, INC; ;Salinas=DXF001483",
          },
          {
            id: "Salinas Valley Memorial Healthcare System; ;Salinas=DXF000423",
            label:
              "Salinas Valley Memorial Healthcare System; ;Salinas=DXF000423",
          },
          {
            id: "SALINAS VALLEY PLASTIC SURGERY ASSOCIATES, A MEDICAL CORPORATION; ;Salinas=DXF000244",
            label:
              "SALINAS VALLEY PLASTIC SURGERY ASSOCIATES, A MEDICAL CORPORATION; ;Salinas=DXF000244",
          },
          {
            id: "SALTZMAN, TANIS, PITTELL, LEVIN & JACOBSON, LLC (d/b/a PEDIATRIC ASSOCIATES); ;Plantation=DXF004058",
            label:
              "SALTZMAN, TANIS, PITTELL, LEVIN & JACOBSON, LLC (d/b/a PEDIATRIC ASSOCIATES); ;Plantation=DXF004058",
          },
          {
            id: "SALTZMAN, TANIS, PITTELL, LEVIN & JACOBSON, LLC (d/b/a PEDIATRIC ASSOCIATES);Coastal Kids, A Professional Medical Corporation;Laguna Hills=DXF004062",
            label:
              "SALTZMAN, TANIS, PITTELL, LEVIN & JACOBSON, LLC (d/b/a PEDIATRIC ASSOCIATES);Coastal Kids, A Professional Medical Corporation;Laguna Hills=DXF004062",
          },
          {
            id: "SALTZMAN, TANIS, PITTELL, LEVIN & JACOBSON, LLC (d/b/a PEDIATRIC ASSOCIATES);Pediatric Medical Associates of Sacramento Inc.;Sacramento=DXF004065",
            label:
              "SALTZMAN, TANIS, PITTELL, LEVIN & JACOBSON, LLC (d/b/a PEDIATRIC ASSOCIATES);Pediatric Medical Associates of Sacramento Inc.;Sacramento=DXF004065",
          },
          {
            id: "SALTZMAN, TANIS, PITTELL, LEVIN & JACOBSON, LLC (d/b/a PEDIATRIC ASSOCIATES);Valle Verde Pediatrics;Poway=DXF004066",
            label:
              "SALTZMAN, TANIS, PITTELL, LEVIN & JACOBSON, LLC (d/b/a PEDIATRIC ASSOCIATES);Valle Verde Pediatrics;Poway=DXF004066",
          },
          {
            id: "Salud Para La Gente; ;Watsonville=DXF002405",
            label: "Salud Para La Gente; ;Watsonville=DXF002405",
          },
          {
            id: "Salus Home Health and Hospice, Inc; ;Irvine=DXF004436",
            label: "Salus Home Health and Hospice, Inc; ;Irvine=DXF004436",
          },
          {
            id: "Sam Kim Physician Services, Inc.; ;Beverly Hills=DXF004100",
            label: "Sam Kim Physician Services, Inc.; ;Beverly Hills=DXF004100",
          },
          {
            id: "Samara P Cardenas MD a PC; ;Anaheim=DXF001744",
            label: "Samara P Cardenas MD a PC; ;Anaheim=DXF001744",
          },
          {
            id: "Sameh Shenouda MD INC ( DBA: Emmanuel Medical Clinic); ;Panorama City=DXF004851",
            label:
              "Sameh Shenouda MD INC ( DBA: Emmanuel Medical Clinic); ;Panorama City=DXF004851",
          },
          {
            id: "Samia Botros MD; ;Los Gatos=DXF001716",
            label: "Samia Botros MD; ;Los Gatos=DXF001716",
          },
          {
            id: "samir n vora, md; ;Fremont=DXF004661",
            label: "samir n vora, md; ;Fremont=DXF004661",
          },
          {
            id: "Sampath Ramakrishnan MD Inc; ;Pleasanton=DXF002171",
            label: "Sampath Ramakrishnan MD Inc; ;Pleasanton=DXF002171",
          },
          {
            id: "Samuel A Bolivar MD; ;Riverside=DXF001614",
            label: "Samuel A Bolivar MD; ;Riverside=DXF001614",
          },
          {
            id: "Samuel D Van Kirk MD, Inc; ;Redding=DXF000500",
            label: "Samuel D Van Kirk MD, Inc; ;Redding=DXF000500",
          },
          {
            id: "Samuel I. Fink, M.D., Inc.; ;Tarzana=DXF000994",
            label: "Samuel I. Fink, M.D., Inc.; ;Tarzana=DXF000994",
          },
          {
            id: "San Antonio Regional Hospital; ;Upland=DXF001827",
            label: "San Antonio Regional Hospital; ;Upland=DXF001827",
          },
          {
            id: "San Benito County; ;Hollister=DXF000478",
            label: "San Benito County; ;Hollister=DXF000478",
          },
          {
            id: "San Bernardino County on behalf of Arrowhead Regional Medical Center; ;Colton=DXF004931",
            label:
              "San Bernardino County on behalf of Arrowhead Regional Medical Center; ;Colton=DXF004931",
          },
          {
            id: "San Bruno Pediatrics, Inc.; ;San Bruno=DXF000676",
            label: "San Bruno Pediatrics, Inc.; ;San Bruno=DXF000676",
          },
          {
            id: "San Diego American Indian Health Center; ;San Diego=DXF001019",
            label:
              "San Diego American Indian Health Center; ;San Diego=DXF001019",
          },
          {
            id: "San Diego Associates In Family Medicine; ;San Diego=DXF001503",
            label:
              "San Diego Associates In Family Medicine; ;San Diego=DXF001503",
          },
          {
            id: "San Diego Cardiac Center Medical Group, Inc.; ;San Diego=DXF001334",
            label:
              "San Diego Cardiac Center Medical Group, Inc.; ;San Diego=DXF001334",
          },
          {
            id: "San Diego Diagnostic Radiology Medial Group; ;San Diego=DXF002351",
            label:
              "San Diego Diagnostic Radiology Medial Group; ;San Diego=DXF002351",
          },
          {
            id: "San Diego Diagnostic Radiology Medial Group;San Diego Imaging Oceanside;Oceanside=DXF002352",
            label:
              "San Diego Diagnostic Radiology Medial Group;San Diego Imaging Oceanside;Oceanside=DXF002352",
          },
          {
            id: "San Diego Diagnostic Radiology Medial Group;San Diego Imaging Kearny Mesa;San Diego=DXF002353",
            label:
              "San Diego Diagnostic Radiology Medial Group;San Diego Imaging Kearny Mesa;San Diego=DXF002353",
          },
          {
            id: "San Diego Diagnostic Radiology Medial Group;San Diego Imaging Chula Vista;Chula Vista=DXF002354",
            label:
              "San Diego Diagnostic Radiology Medial Group;San Diego Imaging Chula Vista;Chula Vista=DXF002354",
          },
          {
            id: "San Diego Diagnostic Radiology Medial Group;San Diego Imaging Escondido;Escondido=DXF002355",
            label:
              "San Diego Diagnostic Radiology Medial Group;San Diego Imaging Escondido;Escondido=DXF002355",
          },
          {
            id: "San Diego Digestive Disease Consultants; ;San Diego=DXF001350",
            label:
              "San Diego Digestive Disease Consultants; ;San Diego=DXF001350",
          },
          {
            id: "SAN DIEGO FAMILY CARE; ;San Diego=DXF000848",
            label: "SAN DIEGO FAMILY CARE; ;San Diego=DXF000848",
          },
          {
            id: "San Diego Family Dermatology; ;National City=DXF001313",
            label: "San Diego Family Dermatology; ;National City=DXF001313",
          },
          {
            id: "SAN DIEGO GENERAL AND VASCULAR SURGEONS MED GROUP; ;San Diego=DXF001375",
            label:
              "SAN DIEGO GENERAL AND VASCULAR SURGEONS MED GROUP; ;San Diego=DXF001375",
          },
          {
            id: "San Diego Hand Specialists; ;San Diego=DXF000591",
            label: "San Diego Hand Specialists; ;San Diego=DXF000591",
          },
          {
            id: "San Diego Health Connect; ;San Diego=DXF002272",
            label: "San Diego Health Connect; ;San Diego=DXF002272",
          },
          {
            id: "San Diego Healthcare Quality Collaborative DBA San Diego Wellness Collaborative; ;Encinitas=DXF004248",
            label:
              "San Diego Healthcare Quality Collaborative DBA San Diego Wellness Collaborative; ;Encinitas=DXF004248",
          },
          {
            id: "San Diego Home Caregivers; ;San Diego=DXF004347",
            label: "San Diego Home Caregivers; ;San Diego=DXF004347",
          },
          {
            id: "San Diego Physicians Clinic, Inc; ;San Diego=DXF001381",
            label: "San Diego Physicians Clinic, Inc; ;San Diego=DXF001381",
          },
          {
            id: "San Diego Physicians Medical Group, Inc.; ;San Diego=DXF001136",
            label:
              "San Diego Physicians Medical Group, Inc.; ;San Diego=DXF001136",
          },
          {
            id: "San Diego Podiatry Group; ;San Diego=DXF001288",
            label: "San Diego Podiatry Group; ;San Diego=DXF001288",
          },
          {
            id: "San Fernando Community Hospital; ;San Fernando=DXF000868",
            label: "San Fernando Community Hospital; ;San Fernando=DXF000868",
          },
          {
            id: "San Fernando Mission Medical Group, Inc.; ;Panorama=DXF004530",
            label:
              "San Fernando Mission Medical Group, Inc.; ;Panorama=DXF004530",
          },
          {
            id: "San Fernando Valley Community Mental Health Center; ;Van Nuys=DXF001875",
            label:
              "San Fernando Valley Community Mental Health Center; ;Van Nuys=DXF001875",
          },
          {
            id: "San Francisco AIDS Foundation; ;San Francisco=DXF003271",
            label: "San Francisco AIDS Foundation; ;San Francisco=DXF003271",
          },
          {
            id: "San Francisco Community Clinic Consortium; ;San Francisco=DXF002091",
            label:
              "San Francisco Community Clinic Consortium; ;San Francisco=DXF002091",
          },
          {
            id: "San Francisco Department of Public Health; ;San Francisco=DXF000019",
            label:
              "San Francisco Department of Public Health; ;San Francisco=DXF000019",
          },
          {
            id: "San Francisco Department of Public Health;Zuckerberg San Francisco General Hospital and Trauma Center;San Francisco=DXF000517",
            label:
              "San Francisco Department of Public Health;Zuckerberg San Francisco General Hospital and Trauma Center;San Francisco=DXF000517",
          },
          {
            id: "San Francisco Department of Public Health;Laguna Honda Hospital and Rehabilitation Center D/P;San Francisco=DXF002234",
            label:
              "San Francisco Department of Public Health;Laguna Honda Hospital and Rehabilitation Center D/P;San Francisco=DXF002234",
          },
          {
            id: "San Francisco Department of Public Health;Zuckerberg San Francisco General Hospital and Trauma Center D/P;San Francisco=DXF002260",
            label:
              "San Francisco Department of Public Health;Zuckerberg San Francisco General Hospital and Trauma Center D/P;San Francisco=DXF002260",
          },
          {
            id: "San Francisco Department of Public Health;Laguna Honda Hospital and Rehabilitation Center;San Francisco=DXF002261",
            label:
              "San Francisco Department of Public Health;Laguna Honda Hospital and Rehabilitation Center;San Francisco=DXF002261",
          },
          {
            id: "San Francisco Health Care and Rehab; ;San Francisco=DXF002967",
            label:
              "San Francisco Health Care and Rehab; ;San Francisco=DXF002967",
          },
          {
            id: "San Francisco Health Plan; ;San Francisco=DXF000647",
            label: "San Francisco Health Plan; ;San Francisco=DXF000647",
          },
          {
            id: "San Francisco Medical Center Outpatient Improvement Programs, Inc; ;San Francisco=DXF002175",
            label:
              "San Francisco Medical Center Outpatient Improvement Programs, Inc; ;San Francisco=DXF002175",
          },
          {
            id: "San Francisco Otolaryngology Medical Group; ;San Francisco=DXF000452",
            label:
              "San Francisco Otolaryngology Medical Group; ;San Francisco=DXF000452",
          },
          {
            id: "SAN FRANCISCO WOMEN'S HEALTHCARE; ;San Francisco=DXF000835",
            label: "SAN FRANCISCO WOMEN'S HEALTHCARE; ;San Francisco=DXF000835",
          },
          {
            id: "San Gabriel Valley Health; ;South El Monte=DXF002964",
            label: "San Gabriel Valley Health; ;South El Monte=DXF002964",
          },
          {
            id: "San Joaquin County Behavioral Health Services; ;Stockton=DXF004450",
            label:
              "San Joaquin County Behavioral Health Services; ;Stockton=DXF004450",
          },
          {
            id: "San Joaquin General Hospital; ;French Camp=DXF001690",
            label: "San Joaquin General Hospital; ;French Camp=DXF001690",
          },
          {
            id: "San Joaquin Health Centers; ;Stockton=DXF000281",
            label: "San Joaquin Health Centers; ;Stockton=DXF000281",
          },
          {
            id: "San Joaquin Kidney Clinic, Inc; ;Stockton=DXF000673",
            label: "San Joaquin Kidney Clinic, Inc; ;Stockton=DXF000673",
          },
          {
            id: "San Joaquin Pathways Community HUB (fiscally sponsored by the San Joaquin Community Foundation); ;Stockton=DXF004569",
            label:
              "San Joaquin Pathways Community HUB (fiscally sponsored by the San Joaquin Community Foundation); ;Stockton=DXF004569",
          },
          {
            id: "San Joaquin Pathways Community HUB (fiscally sponsored by the San Joaquin Community Foundation);Amelia Ann Adams Whole Life Center;Stockton=DXF004599",
            label:
              "San Joaquin Pathways Community HUB (fiscally sponsored by the San Joaquin Community Foundation);Amelia Ann Adams Whole Life Center;Stockton=DXF004599",
          },
          {
            id: "San Jose Healthcare and Wellness Center; ;San Jose=DXF005116",
            label:
              "San Jose Healthcare and Wellness Center; ;San Jose=DXF005116",
          },
          {
            id: "San Jose Pacific Neurology Center Prof corp; ;San Jose=DXF004238",
            label:
              "San Jose Pacific Neurology Center Prof corp; ;San Jose=DXF004238",
          },
          {
            id: "San Marcos Medical Group Inc; ;San Bernardino=DXF000934",
            label: "San Marcos Medical Group Inc; ;San Bernardino=DXF000934",
          },
          {
            id: "San Marino Pediatric Associates; ;San Marino=DXF004097",
            label: "San Marino Pediatric Associates; ;San Marino=DXF004097",
          },
          {
            id: "San Mateo County Health, Behavioral Health & Recovery Services Division; ;San Mateo=DXF000433",
            label:
              "San Mateo County Health, Behavioral Health & Recovery Services Division; ;San Mateo=DXF000433",
          },
          {
            id: "San Mateo County Health, Behavioral Health & Recovery Services Division;North County Adult Outpatient Clinic;DALY CITY=DXF000434",
            label:
              "San Mateo County Health, Behavioral Health & Recovery Services Division;North County Adult Outpatient Clinic;DALY CITY=DXF000434",
          },
          {
            id: "San Mateo County Health, Behavioral Health & Recovery Services Division;North County Youth Outpatient Clinic;DALY CITY=DXF000435",
            label:
              "San Mateo County Health, Behavioral Health & Recovery Services Division;North County Youth Outpatient Clinic;DALY CITY=DXF000435",
          },
          {
            id: "San Mateo County Health, Behavioral Health & Recovery Services Division;Coastside Outpatient Clinic;Half Moon Bay=DXF000437",
            label:
              "San Mateo County Health, Behavioral Health & Recovery Services Division;Coastside Outpatient Clinic;Half Moon Bay=DXF000437",
          },
          {
            id: "San Mateo County Health, Behavioral Health & Recovery Services Division;Central County Outpatient Clinic;San Mateo=DXF000438",
            label:
              "San Mateo County Health, Behavioral Health & Recovery Services Division;Central County Outpatient Clinic;San Mateo=DXF000438",
          },
          {
            id: "San Mateo County Health, Behavioral Health & Recovery Services Division;East Palo Alto Outpatient Clinic;East Palo Alto=DXF000440",
            label:
              "San Mateo County Health, Behavioral Health & Recovery Services Division;East Palo Alto Outpatient Clinic;East Palo Alto=DXF000440",
          },
          {
            id: "San Mateo County Health, Behavioral Health & Recovery Services Division;South County Adult Outpatient Clinic;Redwood City=DXF000441",
            label:
              "San Mateo County Health, Behavioral Health & Recovery Services Division;South County Adult Outpatient Clinic;Redwood City=DXF000441",
          },
          {
            id: "San Mateo County Health, Behavioral Health & Recovery Services Division;Shasta Youth Outpatient Clinic;Redwood City=DXF000442",
            label:
              "San Mateo County Health, Behavioral Health & Recovery Services Division;Shasta Youth Outpatient Clinic;Redwood City=DXF000442",
          },
          {
            id: "San Mateo County Health, Behavioral Health & Recovery Services Division;David Lewis Center;East Palo Alto=DXF000443",
            label:
              "San Mateo County Health, Behavioral Health & Recovery Services Division;David Lewis Center;East Palo Alto=DXF000443",
          },
          {
            id: "San Mateo County Health, Behavioral Health & Recovery Services Division;Canyon Oaks Youth Center;Redwood City=DXF000444",
            label:
              "San Mateo County Health, Behavioral Health & Recovery Services Division;Canyon Oaks Youth Center;Redwood City=DXF000444",
          },
          {
            id: "San Mateo County Health, Behavioral Health & Recovery Services Division;Service Connect;San Carlos=DXF000445",
            label:
              "San Mateo County Health, Behavioral Health & Recovery Services Division;Service Connect;San Carlos=DXF000445",
          },
          {
            id: "San Mateo County Health, Behavioral Health & Recovery Services Division;Harbor Campus;Belmont=DXF000446",
            label:
              "San Mateo County Health, Behavioral Health & Recovery Services Division;Harbor Campus;Belmont=DXF000446",
          },
          {
            id: "San Mateo County Health, Behavioral Health & Recovery Services Division;Youth Services Center;San Mateo=DXF000447",
            label:
              "San Mateo County Health, Behavioral Health & Recovery Services Division;Youth Services Center;San Mateo=DXF000447",
          },
          {
            id: "San Mateo County Health, Behavioral Health & Recovery Services Division;Palos Verdes School-Based Programs;San Bruno=DXF000448",
            label:
              "San Mateo County Health, Behavioral Health & Recovery Services Division;Palos Verdes School-Based Programs;San Bruno=DXF000448",
          },
          {
            id: "SAN MATEO ORTHOPEDIC; ;San Mateo=DXF000516",
            label: "SAN MATEO ORTHOPEDIC; ;San Mateo=DXF000516",
          },
          {
            id: "San Mateo Rheumatology.com; ;San Mateo=DXF002304",
            label: "San Mateo Rheumatology.com; ;San Mateo=DXF002304",
          },
          {
            id: "San Miguel Medical Clinic; ;South Gate=DXF005203",
            label: "San Miguel Medical Clinic; ;South Gate=DXF005203",
          },
          {
            id: "San Pedro Pediatric Medical Group, Inc.; ;San Pedro=DXF003970",
            label:
              "San Pedro Pediatric Medical Group, Inc.; ;San Pedro=DXF003970",
          },
          {
            id: "San Ysidro Health; ;San Diego=DXF001209",
            label: "San Ysidro Health; ;San Diego=DXF001209",
          },
          {
            id: "Sanchez Medical Center; ;South Gate=DXF004542",
            label: "Sanchez Medical Center; ;South Gate=DXF004542",
          },
          {
            id: "Sandra Madrid MD, Inc; ;Whittier=DXF001642",
            label: "Sandra Madrid MD, Inc; ;Whittier=DXF001642",
          },
          {
            id: "Sani Eye Center, Inc.; ;templeton=DXF000838",
            label: "Sani Eye Center, Inc.; ;templeton=DXF000838",
          },
          {
            id: "Sansum Clinic; ;Santa Barbara=DXF000313",
            label: "Sansum Clinic; ;Santa Barbara=DXF000313",
          },
          {
            id: "Santa Barbara County Behavioral Wellness; ;Santa Barbara=DXF001933",
            label:
              "Santa Barbara County Behavioral Wellness; ;Santa Barbara=DXF001933",
          },
          {
            id: "Santa Barbara Doctors; ;Santa Barbara=DXF002393",
            label: "Santa Barbara Doctors; ;Santa Barbara=DXF002393",
          },
          {
            id: "Santa Barbara Internal Medicine Group, Inc; ;Santa Barbara=DXF000721",
            label:
              "Santa Barbara Internal Medicine Group, Inc; ;Santa Barbara=DXF000721",
          },
          {
            id: "Santa Barbara Nephrology; ;Santa Barbara=DXF001117",
            label: "Santa Barbara Nephrology; ;Santa Barbara=DXF001117",
          },
          {
            id: "Santa Barbara Nephrology; ;Santa Barbara=DXF001344",
            label: "Santa Barbara Nephrology; ;Santa Barbara=DXF001344",
          },
          {
            id: "Santa Barbara Pulmonary Associates; ;Santa Barbara=DXF000483",
            label:
              "Santa Barbara Pulmonary Associates; ;Santa Barbara=DXF000483",
          },
          {
            id: "Santa Barbara San Luis Obispo Regional Health Authority; ;Santa Barbara=DXF000090",
            label:
              "Santa Barbara San Luis Obispo Regional Health Authority; ;Santa Barbara=DXF000090",
          },
          {
            id: "Santa Barbara Skin Institute; ;Santa Barbara=DXF000976",
            label: "Santa Barbara Skin Institute; ;Santa Barbara=DXF000976",
          },
          {
            id: "Santa Catalina Healthcare, Inc., dba St. Catherine Healthcare; ;Fullerton=DXF003990",
            label:
              "Santa Catalina Healthcare, Inc., dba St. Catherine Healthcare; ;Fullerton=DXF003990",
          },
          {
            id: "Santa Clara County Health Authority d/b/a Santa Clara Family Health Plan; ;San Jose=DXF000140",
            label:
              "Santa Clara County Health Authority d/b/a Santa Clara Family Health Plan; ;San Jose=DXF000140",
          },
          {
            id: "Santa Clarita Pediatrics; ;Valencia=DXF005197",
            label: "Santa Clarita Pediatrics; ;Valencia=DXF005197",
          },
          {
            id: "SANTA CRUZ COMMUNITY HEALTH CENTERS; ;Santa Cruz=DXF002786",
            label: "SANTA CRUZ COMMUNITY HEALTH CENTERS; ;Santa Cruz=DXF002786",
          },
          {
            id: "Santa Cruz Skilled Nursing dba Hearts & Hands Post Acute Care and Rehab Center; ;Santa Cruz=DXF004253",
            label:
              "Santa Cruz Skilled Nursing dba Hearts & Hands Post Acute Care and Rehab Center; ;Santa Cruz=DXF004253",
          },
          {
            id: "SANTA FE MEDICAL CLINIC; ;Carson=DXF003494",
            label: "SANTA FE MEDICAL CLINIC; ;Carson=DXF003494",
          },
          {
            id: "Santa Paula Post Acute; ;Santa Paula=DXF002824",
            label: "Santa Paula Post Acute; ;Santa Paula=DXF002824",
          },
          {
            id: "Santa Paula Post Acute;Vista Del Sol LTC;Los Angeles=DXF002831",
            label:
              "Santa Paula Post Acute;Vista Del Sol LTC;Los Angeles=DXF002831",
          },
          {
            id: "Santa Rosa Community Health; ;Santa Rosa=DXF002205",
            label: "Santa Rosa Community Health; ;Santa Rosa=DXF002205",
          },
          {
            id: "Santa Rosa Community Health; ;Santa Rosa=DXF002884",
            label: "Santa Rosa Community Health; ;Santa Rosa=DXF002884",
          },
          {
            id: "SARA HAMIDI MD. INC.; ;turlock=DXF004095",
            label: "SARA HAMIDI MD. INC.; ;turlock=DXF004095",
          },
          {
            id: "Sarah S Olelewe MD Inc; ;;Agoura Hill=DXF004440",
            label: "Sarah S Olelewe MD Inc; ;;Agoura Hill=DXF004440",
          },
          {
            id: "Saratoga Retirement Community; ;Saratoga=DXF004683",
            label: "Saratoga Retirement Community; ;Saratoga=DXF004683",
          },
          {
            id: "Savie Health; ;Lompoc=DXF005620",
            label: "Savie Health; ;Lompoc=DXF005620",
          },
          {
            id: "Savie Health Corp; ;Lompoc=DXF003326",
            label: "Savie Health Corp; ;Lompoc=DXF003326",
          },
          {
            id: "Sayed A Hussain MD INC; ;Roseville=DXF000738",
            label: "Sayed A Hussain MD INC; ;Roseville=DXF000738",
          },
          {
            id: "SCAN; ;Long Beach=DXF001303",
            label: "SCAN; ;Long Beach=DXF001303",
          },
          {
            id: "SCHARP; ;Lynwood=DXF002486",
            label: "SCHARP; ;Lynwood=DXF002486",
          },
          {
            id: "SCHARP;Barbour and Floyd Medical Associates;Lynwood=DXF002489",
            label:
              "SCHARP;Barbour and Floyd Medical Associates;Lynwood=DXF002489",
          },
          {
            id: "School Health Clinics of Santa Clara County; ;San Jose=DXF003343",
            label:
              "School Health Clinics of Santa Clara County; ;San Jose=DXF003343",
          },
          {
            id: "School Health Clinics of Santa Clara County;Franklin McKinley Neighborhood Health Clinic;San Jose=DXF003344",
            label:
              "School Health Clinics of Santa Clara County;Franklin McKinley Neighborhood Health Clinic;San Jose=DXF003344",
          },
          {
            id: "School Health Clinics of Santa Clara County;Gilroy Neighborhood Health Clinic;GILROY=DXF003345",
            label:
              "School Health Clinics of Santa Clara County;Gilroy Neighborhood Health Clinic;GILROY=DXF003345",
          },
          {
            id: "School Health Clinics of Santa Clara County;Overfelt Neighborhood Health Clinic;San Jose=DXF003346",
            label:
              "School Health Clinics of Santa Clara County;Overfelt Neighborhood Health Clinic;San Jose=DXF003346",
          },
          {
            id: "School Health Clinics of Santa Clara County;San Jose Neighborhood Health Clinic;San Jose=DXF003347",
            label:
              "School Health Clinics of Santa Clara County;San Jose Neighborhood Health Clinic;San Jose=DXF003347",
          },
          {
            id: "School Health Clinics of Santa Clara County;Washington Neighborhood Health Clinic;San Jose=DXF003349",
            label:
              "School Health Clinics of Santa Clara County;Washington Neighborhood Health Clinic;San Jose=DXF003349",
          },
          {
            id: "SCKE Health; ;Laguna Hills=DXF004227",
            label: "SCKE Health; ;Laguna Hills=DXF004227",
          },
          {
            id: "Scott C Rackett, MD Inc.; ;Manhattan Beach=DXF000795",
            label: "Scott C Rackett, MD Inc.; ;Manhattan Beach=DXF000795",
          },
          {
            id: "SCOTT F KOZAK, MD; ;Santa Barbara=DXF000983",
            label: "SCOTT F KOZAK, MD; ;Santa Barbara=DXF000983",
          },
          {
            id: "Scott Goodwin; ;Scottsdale=DXF004544",
            label: "Scott Goodwin; ;Scottsdale=DXF004544",
          },
          {
            id: "SD Medical Clinic; ;El Cajon=DXF003777",
            label: "SD Medical Clinic; ;El Cajon=DXF003777",
          },
          {
            id: "See 3 Industries; ;Corona=DXF004427",
            label: "See 3 Industries; ;Corona=DXF004427",
          },
          {
            id: "Seema Bir MD Corp; ;Rancho Mirage=DXF004364",
            label: "Seema Bir MD Corp; ;Rancho Mirage=DXF004364",
          },
          {
            id: "Seema Sangwan, MD INC; ;San Mateo=DXF001276",
            label: "Seema Sangwan, MD INC; ;San Mateo=DXF001276",
          },
          {
            id: "Seersoft Physical Therapy, Inc; ;GRANADA HILLSA=DXF003483",
            label: "Seersoft Physical Therapy, Inc; ;GRANADA HILLSA=DXF003483",
          },
          {
            id: "Sehatu Inc; ;Roseville=DXF000494",
            label: "Sehatu Inc; ;Roseville=DXF000494",
          },
          {
            id: "Self; ;Pleasanton=DXF000237",
            label: "Self; ;Pleasanton=DXF000237",
          },
          {
            id: "Self; ;Castro Valley=DXF000667",
            label: "Self; ;Castro Valley=DXF000667",
          },
          {
            id: "Senior Care Clinic A Medical Corporation; ;Los Angeles=DXF004340",
            label:
              "Senior Care Clinic A Medical Corporation; ;Los Angeles=DXF004340",
          },
          {
            id: "Sensorum Health; ;New york=DXF005646",
            label: "Sensorum Health; ;New york=DXF005646",
          },
          {
            id: "SEP MEDICAL CLINIC; ;Huntington Park=DXF005179",
            label: "SEP MEDICAL CLINIC; ;Huntington Park=DXF005179",
          },
          {
            id: "Sequoia Healthcare Group, LLC; ;Laguna Niguel=DXF005332",
            label: "Sequoia Healthcare Group, LLC; ;Laguna Niguel=DXF005332",
          },
          {
            id: "Sequoia Healthcare Group, LLC;APTB, LLC;Petaluma=DXF005333",
            label: "Sequoia Healthcare Group, LLC;APTB, LLC;Petaluma=DXF005333",
          },
          {
            id: "Sequoia Healthcare Group, LLC;AGSE, LLC;Greenbrae=DXF005349",
            label:
              "Sequoia Healthcare Group, LLC;AGSE, LLC;Greenbrae=DXF005349",
          },
          {
            id: "Sequoia Healthcare Group, LLC;AOAS, LLC;Oakland=DXF005350",
            label: "Sequoia Healthcare Group, LLC;AOAS, LLC;Oakland=DXF005350",
          },
          {
            id: "Sequoia Healthcare Group, LLC;AOTN, LLC;Oakland=DXF005355",
            label: "Sequoia Healthcare Group, LLC;AOTN, LLC;Oakland=DXF005355",
          },
          {
            id: "Sequoia Healthcare Group, LLC;AWTS, LLC (Woodland Skilled Nursing Facility Inc);Woodland=DXF005356",
            label:
              "Sequoia Healthcare Group, LLC;AWTS, LLC (Woodland Skilled Nursing Facility Inc);Woodland=DXF005356",
          },
          {
            id: "Sequoia Healthcare Group, LLC;AWCS, LLC (Cottonwood H.C. Inc);Woodland=DXF005357",
            label:
              "Sequoia Healthcare Group, LLC;AWCS, LLC (Cottonwood H.C. Inc);Woodland=DXF005357",
          },
          {
            id: "Sequoia Healthcare Group, LLC;ALHL, LLC;Lodi=DXF005358",
            label: "Sequoia Healthcare Group, LLC;ALHL, LLC;Lodi=DXF005358",
          },
          {
            id: "Sequoia Healthcare Group, LLC;ASFC, LLC;Fresno=DXF005359",
            label: "Sequoia Healthcare Group, LLC;ASFC, LLC;Fresno=DXF005359",
          },
          {
            id: "Sequoia Healthcare Group, LLC;ALGT, LLC;Los Gatos=DXF005360",
            label:
              "Sequoia Healthcare Group, LLC;ALGT, LLC;Los Gatos=DXF005360",
          },
          {
            id: "Sequoia Healthcare Group, LLC;ALGD, LLC;Los Gatos=DXF005361",
            label:
              "Sequoia Healthcare Group, LLC;ALGD, LLC;Los Gatos=DXF005361",
          },
          {
            id: "Sequoia Healthcare Group, LLC;ASSB, LLC;Sacramento=DXF005362",
            label:
              "Sequoia Healthcare Group, LLC;ASSB, LLC;Sacramento=DXF005362",
          },
          {
            id: "Sequoia Healthcare Group, LLC;ATMC, LLC;Tracy=DXF005363",
            label: "Sequoia Healthcare Group, LLC;ATMC, LLC;Tracy=DXF005363",
          },
          {
            id: "Sequoia Healthcare Group, LLC;ASCC, LLC;Sockton=DXF005364",
            label: "Sequoia Healthcare Group, LLC;ASCC, LLC;Sockton=DXF005364",
          },
          {
            id: "Sequoia Healthcare Group, LLC;ATBA, LLC;Tracy=DXF005365",
            label: "Sequoia Healthcare Group, LLC;ATBA, LLC;Tracy=DXF005365",
          },
          {
            id: "Sequoia Healthcare Group, LLC;ARPD, LLC;El Sobrante=DXF005366",
            label:
              "Sequoia Healthcare Group, LLC;ARPD, LLC;El Sobrante=DXF005366",
          },
          {
            id: "Sequoia Healthcare Group, LLC;AWCY, LLC;Walnut Creek=DXF005367",
            label:
              "Sequoia Healthcare Group, LLC;AWCY, LLC;Walnut Creek=DXF005367",
          },
          {
            id: "Sequoia Healthcare Group, LLC;ASJK, LLC;San Francisco=DXF005368",
            label:
              "Sequoia Healthcare Group, LLC;ASJK, LLC;San Francisco=DXF005368",
          },
          {
            id: "Sequoia Healthcare Group, LLC;ASFP, LLC;San Francisco=DXF005369",
            label:
              "Sequoia Healthcare Group, LLC;ASFP, LLC;San Francisco=DXF005369",
          },
          {
            id: "Sequoia Healthcare Group, LLC;AOCL, LLC;Oroville=DXF005370",
            label: "Sequoia Healthcare Group, LLC;AOCL, LLC;Oroville=DXF005370",
          },
          {
            id: "Sequoia Living; ;San Francisco=DXF004169",
            label: "Sequoia Living; ;San Francisco=DXF004169",
          },
          {
            id: "Sequoia Living;Sequoia San Francisco;San Francisco=DXF004179",
            label:
              "Sequoia Living;Sequoia San Francisco;San Francisco=DXF004179",
          },
          {
            id: "Sequoia Living;Viamonte;Walnut Creek=DXF004180",
            label: "Sequoia Living;Viamonte;Walnut Creek=DXF004180",
          },
          {
            id: "Sequoia Living;The Tamalpais;Greenbrae=DXF004181",
            label: "Sequoia Living;The Tamalpais;Greenbrae=DXF004181",
          },
          {
            id: "Sequoia Living;Sequoia Portola Valley;Portola Valley=DXF004314",
            label:
              "Sequoia Living;Sequoia Portola Valley;Portola Valley=DXF004314",
          },
          {
            id: "Sequoia Living;Sequoia Living;none PD entry=DXF005779",
            label: "Sequoia Living;Sequoia Living;none PD entry=DXF005779",
          },
          {
            id: "Serene Health IPA; ;San Diego=DXF000857",
            label: "Serene Health IPA; ;San Diego=DXF000857",
          },
          {
            id: "SerenEthos LLC; ;Hayward - Sleepy Hollow=DXF003153",
            label: "SerenEthos LLC; ;Hayward - Sleepy Hollow=DXF003153",
          },
          {
            id: "SerenEthos LLC;St. Anthony SerenEthos SNF, LLC;Hayward - Sleepy Hollow=DXF003154",
            label:
              "SerenEthos LLC;St. Anthony SerenEthos SNF, LLC;Hayward - Sleepy Hollow=DXF003154",
          },
          {
            id: "SerenEthos LLC;SerenEthos Care Center, LLC;Hayward=DXF003160",
            label:
              "SerenEthos LLC;SerenEthos Care Center, LLC;Hayward=DXF003160",
          },
          {
            id: "SerenEthos LLC;Sherwood Oaks Post Acute Care, LLC;Ft. Bragg=DXF003167",
            label:
              "SerenEthos LLC;Sherwood Oaks Post Acute Care, LLC;Ft. Bragg=DXF003167",
          },
          {
            id: "Sereno Pain Management, Inc; ;Los Gatos=DXF000894",
            label: "Sereno Pain Management, Inc; ;Los Gatos=DXF000894",
          },
          {
            id: "Serra Community Medical Clinic; ;Sun Valley=DXF003195",
            label: "Serra Community Medical Clinic; ;Sun Valley=DXF003195",
          },
          {
            id: "Serving Communities Health Information Organization - SCHIO; ;Santa Cruz=DXF000011",
            label:
              "Serving Communities Health Information Organization - SCHIO; ;Santa Cruz=DXF000011",
          },
          {
            id: "Serving Communities Health Information Organization - SCHIO;Santa Cruz Health Information Organization;none PD entry=DXF005567",
            label:
              "Serving Communities Health Information Organization - SCHIO;Santa Cruz Health Information Organization;none PD entry=DXF005567",
          },
          {
            id: "Serving Communities Health Information Organization - SCHIO;Santa Cruz HIO;none PD entry=DXF005568",
            label:
              "Serving Communities Health Information Organization - SCHIO;Santa Cruz HIO;none PD entry=DXF005568",
          },
          {
            id: "Serving Communities Health Information Organization - SCHIO;SCHIO;none PD entry=DXF005569",
            label:
              "Serving Communities Health Information Organization - SCHIO;SCHIO;none PD entry=DXF005569",
          },
          {
            id: "SF Oncology; ;SanFrancisco=DXF001251",
            label: "SF Oncology; ;SanFrancisco=DXF001251",
          },
          {
            id: "Shafter Nursing Care; ;Bakersfield=DXF004995",
            label: "Shafter Nursing Care; ;Bakersfield=DXF004995",
          },
          {
            id: "Shahin S. Rad, MD, PC; ;Encino=DXF002133",
            label: "Shahin S. Rad, MD, PC; ;Encino=DXF002133",
          },
          {
            id: "Shannon Easton-Carr MD Inc; ;San Luis Obispo=DXF000987",
            label: "Shannon Easton-Carr MD Inc; ;San Luis Obispo=DXF000987",
          },
          {
            id: "Sharaf MD; ;Fountain Valley=DXF003689",
            label: "Sharaf MD; ;Fountain Valley=DXF003689",
          },
          {
            id: "Share Our Selves; ;Newport Beach=DXF000830",
            label: "Share Our Selves; ;Newport Beach=DXF000830",
          },
          {
            id: "SHARON LAUGHLIN, M.D.; ;Riverside=DXF000293",
            label: "SHARON LAUGHLIN, M.D.; ;Riverside=DXF000293",
          },
          {
            id: "Sharp; ;San Diego=DXF000150",
            label: "Sharp; ;San Diego=DXF000150",
          },
          {
            id: "Sharp Community Medical Group; ;San Diego=DXF000552",
            label: "Sharp Community Medical Group; ;San Diego=DXF000552",
          },
          {
            id: "Sharp Health Plan; ;San Diego=DXF005871",
            label: "Sharp Health Plan; ;San Diego=DXF005871",
          },
          {
            id: "SharpCare Medical Group; ;San Diego=DXF001208",
            label: "SharpCare Medical Group; ;San Diego=DXF001208",
          },
          {
            id: "Shasta Community Health Center; ;Redding=DXF001647",
            label: "Shasta Community Health Center; ;Redding=DXF001647",
          },
          {
            id: "Shasta Regional Medical Center; ;Redding=DXF004847",
            label: "Shasta Regional Medical Center; ;Redding=DXF004847",
          },
          {
            id: "Shasta Regional Medical Center;Shasta Regional Medical Group;Redding=DXF004850",
            label:
              "Shasta Regional Medical Center;Shasta Regional Medical Group;Redding=DXF004850",
          },
          {
            id: "Shawn Barnes, M.D.; ;Carlsbad=DXF000162",
            label: "Shawn Barnes, M.D.; ;Carlsbad=DXF000162",
          },
          {
            id: "Shawna L Weisler, MD. A Medical corporation; ;Sherman Oaks=DXF002253",
            label:
              "Shawna L Weisler, MD. A Medical corporation; ;Sherman Oaks=DXF002253",
          },
          {
            id: "Sheila N Borges; ;Modesto=DXF000242",
            label: "Sheila N Borges; ;Modesto=DXF000242",
          },
          {
            id: "sherif khattab, m.d. Inc; ;Torrance=DXF000612",
            label: "sherif khattab, m.d. Inc; ;Torrance=DXF000612",
          },
          {
            id: "sherly med inc; ;San Diego=DXF001606",
            label: "sherly med inc; ;San Diego=DXF001606",
          },
          {
            id: "Sherman Oaks Family Medicine; ;Sherman Oaks=DXF000870",
            label: "Sherman Oaks Family Medicine; ;Sherman Oaks=DXF000870",
          },
          {
            id: "Sherman Oaks Family Medicine, Inc.; ;Sherman Oaks=DXF004130",
            label:
              "Sherman Oaks Family Medicine, Inc.; ;Sherman Oaks=DXF004130",
          },
          {
            id: "Shiloh Medical Center; ;victorville=DXF001515",
            label: "Shiloh Medical Center; ;victorville=DXF001515",
          },
          {
            id: "Shiloh Medical Center; ;victorville=DXF004278",
            label: "Shiloh Medical Center; ;victorville=DXF004278",
          },
          {
            id: "Shiloh Medical Center; ;victorville=DXF005741",
            label: "Shiloh Medical Center; ;victorville=DXF005741",
          },
          {
            id: "Shima Hadidchi MD A Professional Corp; ;victorville=DXF000800",
            label:
              "Shima Hadidchi MD A Professional Corp; ;victorville=DXF000800",
          },
          {
            id: "Shingletown Medical Center; ;Shingletown=DXF003468",
            label: "Shingletown Medical Center; ;Shingletown=DXF003468",
          },
          {
            id: "shiu kwok, MD; ;San Francisco=DXF000785",
            label: "shiu kwok, MD; ;San Francisco=DXF000785",
          },
          {
            id: "shiu kwok, MD;shiu kwok,MD;San Francisco=DXF000786",
            label: "shiu kwok, MD;shiu kwok,MD;San Francisco=DXF000786",
          },
          {
            id: "Shriners Children's Northern California; ;Sacramento=DXF004649",
            label:
              "Shriners Children's Northern California; ;Sacramento=DXF004649",
          },
          {
            id: "Sierra Hematology & Oncology Medical Center, a Professional Corporation; ;Carmichael=DXF001598",
            label:
              "Sierra Hematology & Oncology Medical Center, a Professional Corporation; ;Carmichael=DXF001598",
          },
          {
            id: "Sierra Imaging Associates Medical Group; ;Clovis=DXF002389",
            label: "Sierra Imaging Associates Medical Group; ;Clovis=DXF002389",
          },
          {
            id: "Sierra Rheumatology Inc.; ;Rocklin=DXF000529",
            label: "Sierra Rheumatology Inc.; ;Rocklin=DXF000529",
          },
          {
            id: "Sierra Spine Institute; ;Roseville=DXF000720",
            label: "Sierra Spine Institute; ;Roseville=DXF000720",
          },
          {
            id: "Sierra View Homes; ;Reedley=DXF002454",
            label: "Sierra View Homes; ;Reedley=DXF002454",
          },
          {
            id: "Sierra View Medical Center; ;Porterville=DXF000614",
            label: "Sierra View Medical Center; ;Porterville=DXF000614",
          },
          {
            id: "Sierra Vista Child and Family Services; ;Modesto=DXF002930",
            label: "Sierra Vista Child and Family Services; ;Modesto=DXF002930",
          },
          {
            id: "Silkiss Eye Surgery; ;Oakland=DXF001253",
            label: "Silkiss Eye Surgery; ;Oakland=DXF001253",
          },
          {
            id: "Simi Medical Group; ;SIMI VALLEY=DXF001091",
            label: "Simi Medical Group; ;SIMI VALLEY=DXF001091",
          },
          {
            id: "Simi Obstetrics & Gynecology Medical Group; ;SIMI VALLEY=DXF000165",
            label:
              "Simi Obstetrics & Gynecology Medical Group; ;SIMI VALLEY=DXF000165",
          },
          {
            id: "SIMI VALLEY CONGREGATE LIVING, INC; ;SIMI VALLEY=DXF003499",
            label: "SIMI VALLEY CONGREGATE LIVING, INC; ;SIMI VALLEY=DXF003499",
          },
          {
            id: "Siskiyou Hospital, Inc. dba Fairchild Medical Center; ;Yreka=DXF004595",
            label:
              "Siskiyou Hospital, Inc. dba Fairchild Medical Center; ;Yreka=DXF004595",
          },
          {
            id: "Sistemas Medicos Nacionales SA de CV; ;Chula Vista=DXF002900",
            label:
              "Sistemas Medicos Nacionales SA de CV; ;Chula Vista=DXF002900",
          },
          {
            id: "Slavic American Chamber of Commerce; ;Sacramento=DXF003740",
            label: "Slavic American Chamber of Commerce; ;Sacramento=DXF003740",
          },
          {
            id: "Smita Tandon MD DR2KIDS; ;Fountain Valley=DXF004466",
            label: "Smita Tandon MD DR2KIDS; ;Fountain Valley=DXF004466",
          },
          {
            id: "SMR Healthcare Management; ;Chino Hills=DXF004398",
            label: "SMR Healthcare Management; ;Chino Hills=DXF004398",
          },
          {
            id: "SOCAL COMMUNITY HEALTH CENTER; ;arleta=DXF004439",
            label: "SOCAL COMMUNITY HEALTH CENTER; ;arleta=DXF004439",
          },
          {
            id: "Social Collaborative, LLC; ;Long Beach=DXF003682",
            label: "Social Collaborative, LLC; ;Long Beach=DXF003682",
          },
          {
            id: "Socially Oriented United Living Inc.; ;Los Angeles=DXF002412",
            label:
              "Socially Oriented United Living Inc.; ;Los Angeles=DXF002412",
          },
          {
            id: "Solheim Senior Community; ;Los Angeles=DXF004617",
            label: "Solheim Senior Community; ;Los Angeles=DXF004617",
          },
          {
            id: "solo practice; ;Walnut Creek=DXF000297",
            label: "solo practice; ;Walnut Creek=DXF000297",
          },
          {
            id: "Solvang Lutheran Home Inc; ;Solvang=DXF005314",
            label: "Solvang Lutheran Home Inc; ;Solvang=DXF005314",
          },
          {
            id: "Sonoma County Department of Health Services; ;Santa Rosa=DXF002303",
            label:
              "Sonoma County Department of Health Services; ;Santa Rosa=DXF002303",
          },
          {
            id: "Sonoma County Indian Health Project, Inc.; ;Santa Rosa=DXF003488",
            label:
              "Sonoma County Indian Health Project, Inc.; ;Santa Rosa=DXF003488",
          },
          {
            id: "Sonoma Valley Community Health Center; ;Sonoma=DXF003279",
            label: "Sonoma Valley Community Health Center; ;Sonoma=DXF003279",
          },
          {
            id: "Sonoma Valley Hospital; ;Sonoma=DXF000060",
            label: "Sonoma Valley Hospital; ;Sonoma=DXF000060",
          },
          {
            id: "SONYA S PATEL D.O., INC; ;Los Gatos=DXF004707",
            label: "SONYA S PATEL D.O., INC; ;Los Gatos=DXF004707",
          },
          {
            id: "SONYA S PATEL DO, INC; ;Los Gatos=DXF001869",
            label: "SONYA S PATEL DO, INC; ;Los Gatos=DXF001869",
          },
          {
            id: "Sotara Manalo Rico Prof Med Corp; ;Chino=DXF000415",
            label: "Sotara Manalo Rico Prof Med Corp; ;Chino=DXF000415",
          },
          {
            id: "Soteria Home Health Agency, Inc.; ;Inglewood=DXF003553",
            label: "Soteria Home Health Agency, Inc.; ;Inglewood=DXF003553",
          },
          {
            id: "Sothern California GI & Centers; ;Coronado=DXF000885",
            label: "Sothern California GI & Centers; ;Coronado=DXF000885",
          },
          {
            id: "Sourcewise; ;Santa Clara=DXF003275",
            label: "Sourcewise; ;Santa Clara=DXF003275",
          },
          {
            id: "South Bay Family Medical Group, INC; ;Chula Vista=DXF001435",
            label:
              "South Bay Family Medical Group, INC; ;Chula Vista=DXF001435",
          },
          {
            id: "South Bay Family Medical Group, INC;Bahia Family Medical Group;Chula Vista=DXF001436",
            label:
              "South Bay Family Medical Group, INC;Bahia Family Medical Group;Chula Vista=DXF001436",
          },
          {
            id: "South Central Family Health Center; ;Los Angeles=DXF002647",
            label: "South Central Family Health Center; ;Los Angeles=DXF002647",
          },
          {
            id: "South Coast Children's Society, Inc; ;MISSION VIEJO=DXF002731",
            label:
              "South Coast Children's Society, Inc; ;MISSION VIEJO=DXF002731",
          },
          {
            id: "South Coast Family medicine; ;Santa Ana=DXF005269",
            label: "South Coast Family medicine; ;Santa Ana=DXF005269",
          },
          {
            id: "South Coast Global Medical Center; ;Santa Ana=DXF004035",
            label: "South Coast Global Medical Center; ;Santa Ana=DXF004035",
          },
          {
            id: "South Coast Global Medical Center;South Coast Global Medical Center Subacute Unit;Santa Ana=DXF004036",
            label:
              "South Coast Global Medical Center;South Coast Global Medical Center Subacute Unit;Santa Ana=DXF004036",
          },
          {
            id: "South Coast Global Medical Center;South Coast Global Medical Center Lab;Santa Ana=DXF004037",
            label:
              "South Coast Global Medical Center;South Coast Global Medical Center Lab;Santa Ana=DXF004037",
          },
          {
            id: "South Coast Post Acute; ;Santa Ana=DXF001541",
            label: "South Coast Post Acute; ;Santa Ana=DXF001541",
          },
          {
            id: "South Placer Fire Protection District; ;Granite Bay=DXF004602",
            label:
              "South Placer Fire Protection District; ;Granite Bay=DXF004602",
          },
          {
            id: "South San Joaquin County Fire Authority; ;Tracy=DXF004431",
            label: "South San Joaquin County Fire Authority; ;Tracy=DXF004431",
          },
          {
            id: "SouthBay Geriatric Internal Medicine; ;San Diego=DXF001724",
            label: "SouthBay Geriatric Internal Medicine; ;San Diego=DXF001724",
          },
          {
            id: "Southern California GI & Liver Centers; ;Coronado=DXF000825",
            label:
              "Southern California GI & Liver Centers; ;Coronado=DXF000825",
          },
          {
            id: "Southern California GI & Liver Centers; ;Coronado=DXF000829",
            label:
              "Southern California GI & Liver Centers; ;Coronado=DXF000829",
          },
          {
            id: "Southern California GI & Liver Centers; ;Coronado=DXF000839",
            label:
              "Southern California GI & Liver Centers; ;Coronado=DXF000839",
          },
          {
            id: "Southern California Health and Rehabilitation Program; ;Lynwood=DXF003787",
            label:
              "Southern California Health and Rehabilitation Program; ;Lynwood=DXF003787",
          },
          {
            id: "SOUTHERN CALIFORNIA HEALTH PROVIDERS MEDICAL GROUP, INC; ;Chula Vista=DXF001265",
            label:
              "SOUTHERN CALIFORNIA HEALTH PROVIDERS MEDICAL GROUP, INC; ;Chula Vista=DXF001265",
          },
          {
            id: "Southern California Healthcare System, Inc.; ;Culver City=DXF003951",
            label:
              "Southern California Healthcare System, Inc.; ;Culver City=DXF003951",
          },
          {
            id: "Southern California Healthcare System, Inc.;Southern California Hospital at Hollywood;Hollywood=DXF003955",
            label:
              "Southern California Healthcare System, Inc.;Southern California Hospital at Hollywood;Hollywood=DXF003955",
          },
          {
            id: "Southern California Healthcare System, Inc.;Southern California Hospital at Culver City;Culver City=DXF003957",
            label:
              "Southern California Healthcare System, Inc.;Southern California Hospital at Culver City;Culver City=DXF003957",
          },
          {
            id: "Southern California Healthcare System, Inc.;Southern California Hospital at Van Nuys;Van Nuys=DXF003958",
            label:
              "Southern California Healthcare System, Inc.;Southern California Hospital at Van Nuys;Van Nuys=DXF003958",
          },
          {
            id: "Southern California Hospitalist Network; ;Anaheim=DXF004225",
            label:
              "Southern California Hospitalist Network; ;Anaheim=DXF004225",
          },
          {
            id: "Southern California Liver Centers; ;Coronado=DXF000871",
            label: "Southern California Liver Centers; ;Coronado=DXF000871",
          },
          {
            id: "Southern California Liver Centers, Inc.; ;Coronado=DXF001673",
            label:
              "Southern California Liver Centers, Inc.; ;Coronado=DXF001673",
          },
          {
            id: "Southern California Medical Center; ;Van Nuys=DXF003212",
            label: "Southern California Medical Center; ;Van Nuys=DXF003212",
          },
          {
            id: "Southern California Permanente Medical Group; ;Pasadena=DXF002956",
            label:
              "Southern California Permanente Medical Group; ;Pasadena=DXF002956",
          },
          {
            id: "Southern California Primary Medical Inc; ;Rancho Cucamonga=DXF001808",
            label:
              "Southern California Primary Medical Inc; ;Rancho Cucamonga=DXF001808",
          },
          {
            id: "Southern Heart Clinic; ;Fountain Valley=DXF003959",
            label: "Southern Heart Clinic; ;Fountain Valley=DXF003959",
          },
          {
            id: "Southern Humboldt Community Healthcare District; ;Garberville=DXF000770",
            label:
              "Southern Humboldt Community Healthcare District; ;Garberville=DXF000770",
          },
          {
            id: "Southern Humboldt Community Healthcare District;Garberville Pharmacy;Garberville=DXF000771",
            label:
              "Southern Humboldt Community Healthcare District;Garberville Pharmacy;Garberville=DXF000771",
          },
          {
            id: "Southern Humboldt Community Healthcare District;Jerold Phelps Community Hospital;Garberville=DXF000772",
            label:
              "Southern Humboldt Community Healthcare District;Jerold Phelps Community Hospital;Garberville=DXF000772",
          },
          {
            id: "Southern Humboldt Community Healthcare District;Jerold Phelps Community Hospital-Acute Care;Garberville=DXF000773",
            label:
              "Southern Humboldt Community Healthcare District;Jerold Phelps Community Hospital-Acute Care;Garberville=DXF000773",
          },
          {
            id: "Southern Humboldt Community Healthcare District; ;Garberville=DXF004825",
            label:
              "Southern Humboldt Community Healthcare District; ;Garberville=DXF004825",
          },
          {
            id: "Southern Mono Healthcare District dba Mammoth Hospital; ;Mammoth Lakes=DXF001058",
            label:
              "Southern Mono Healthcare District dba Mammoth Hospital; ;Mammoth Lakes=DXF001058",
          },
          {
            id: "Southern Monterey County Memorial Hospital; ;King City=DXF000582",
            label:
              "Southern Monterey County Memorial Hospital; ;King City=DXF000582",
          },
          {
            id: "Southland Medicare Advantage Medical Group, Inc. dba Southland Advantage Medical Group, Inc.; ;Cypress=DXF004833",
            label:
              "Southland Medicare Advantage Medical Group, Inc. dba Southland Advantage Medical Group, Inc.; ;Cypress=DXF004833",
          },
          {
            id: "SPASOJE M NESKOVIC MD; ;Burbank=DXF000156",
            label: "SPASOJE M NESKOVIC MD; ;Burbank=DXF000156",
          },
          {
            id: "Special Service for Groups, Inc. (SSG); ;Los Angeles=DXF003675",
            label:
              "Special Service for Groups, Inc. (SSG); ;Los Angeles=DXF003675",
          },
          {
            id: "SPECTRA LABORATORIES INC; ;SOUTHAVEN=DXF004813",
            label: "SPECTRA LABORATORIES INC; ;SOUTHAVEN=DXF004813",
          },
          {
            id: "Spectrum Community Services, Inc.; ;Hayward=DXF004282",
            label: "Spectrum Community Services, Inc.; ;Hayward=DXF004282",
          },
          {
            id: "Spine and Sports Surgery Center; ;Campbell=DXF004852",
            label: "Spine and Sports Surgery Center; ;Campbell=DXF004852",
          },
          {
            id: "Spring Hill Manor Convalescent Hospital; ;Grass Valley=DXF004300",
            label:
              "Spring Hill Manor Convalescent Hospital; ;Grass Valley=DXF004300",
          },
          {
            id: "Spring Valley Post Acute; ;victorville=DXF005051",
            label: "Spring Valley Post Acute; ;victorville=DXF005051",
          },
          {
            id: "Sprinter Medical West, P.C.; ;Menlo PArk=DXF002391",
            label: "Sprinter Medical West, P.C.; ;Menlo PArk=DXF002391",
          },
          {
            id: "Sprite Health; ;SOUTHLAKE=DXF003387",
            label: "Sprite Health; ;SOUTHLAKE=DXF003387",
          },
          {
            id: "Spruce MultiSpecialty Group; ;Fresno=DXF001944",
            label: "Spruce MultiSpecialty Group; ;Fresno=DXF001944",
          },
          {
            id: "Srividya Venkataraman MD Inc; ;Long Beach=DXF004297",
            label: "Srividya Venkataraman MD Inc; ;Long Beach=DXF004297",
          },
          {
            id: "St John Surgery Center, Inc.; ;Colton=DXF004842",
            label: "St John Surgery Center, Inc.; ;Colton=DXF004842",
          },
          {
            id: "St Rose Hospital; ;Hayward=DXF005144",
            label: "St Rose Hospital; ;Hayward=DXF005144",
          },
          {
            id: "St. Anne's Home - Home for the Aged of the Little Sisters of the Poor; ;San Francisco=DXF003792",
            label:
              "St. Anne's Home - Home for the Aged of the Little Sisters of the Poor; ;San Francisco=DXF003792",
          },
          {
            id: "St. Anthony Medical Centers; ;Los Angeles=DXF005785",
            label: "St. Anthony Medical Centers; ;Los Angeles=DXF005785",
          },
          {
            id: "St. John of God Retirement and Care Center; ;Los Angeles=DXF005175",
            label:
              "St. John of God Retirement and Care Center; ;Los Angeles=DXF005175",
          },
          {
            id: "St. John's Community Health; ;Los Angeles=DXF001676",
            label: "St. John's Community Health; ;Los Angeles=DXF001676",
          },
          {
            id: "St. John's Community Health; ;Los Angeles=DXF002651",
            label: "St. John's Community Health; ;Los Angeles=DXF002651",
          },
          {
            id: "ST. MARY'S CENTER; ;Oakland=DXF004008",
            label: "ST. MARY'S CENTER; ;Oakland=DXF004008",
          },
          {
            id: "St. Paul's Episcopal Home, Inc.; ;San Diego=DXF002620",
            label: "St. Paul's Episcopal Home, Inc.; ;San Diego=DXF002620",
          },
          {
            id: "St. Paul's Episcopal Home, Inc.;Community Eldercare of San Diego;San Diego=DXF002621",
            label:
              "St. Paul's Episcopal Home, Inc.;Community Eldercare of San Diego;San Diego=DXF002621",
          },
          {
            id: "St. Vincent Preventative Family Care; ;Los Angeles=DXF002794",
            label:
              "St. Vincent Preventative Family Care; ;Los Angeles=DXF002794",
          },
          {
            id: "Stallant Health and Wellness; ;crescent city=DXF003728",
            label: "Stallant Health and Wellness; ;crescent city=DXF003728",
          },
          {
            id: "Stanford Healthcare Care; ;Palo Alto=DXF005127",
            label: "Stanford Healthcare Care; ;Palo Alto=DXF005127",
          },
          {
            id: "Stanford Healthcare Care;SHC Tri-Valley Hospital;Pleasanton=DXF005130",
            label:
              "Stanford Healthcare Care;SHC Tri-Valley Hospital;Pleasanton=DXF005130",
          },
          {
            id: "Stanford Healthcare Care;Stanford Medicine Partners;Newark=DXF005131",
            label:
              "Stanford Healthcare Care;Stanford Medicine Partners;Newark=DXF005131",
          },
          {
            id: "Stanislaus Surgical Hospital; ;Modesto=DXF004784",
            label: "Stanislaus Surgical Hospital; ;Modesto=DXF004784",
          },
          {
            id: "STAR of CA LLC; ;ventura=DXF004090",
            label: "STAR of CA LLC; ;ventura=DXF004090",
          },
          {
            id: "Starlife Holdings Inc; ;Long Beach=DXF004390",
            label: "Starlife Holdings Inc; ;Long Beach=DXF004390",
          },
          {
            id: "Starnursing; ;FOLSOM=DXF005182",
            label: "Starnursing; ;FOLSOM=DXF005182",
          },
          {
            id: "Stars Behavioral Health Group, Inc.; ;Long Beach=DXF004887",
            label: "Stars Behavioral Health Group, Inc.; ;Long Beach=DXF004887",
          },
          {
            id: "Stars Behavioral Health Group, Inc.;Star View Behavioral Health, Inc.;Long Beach=DXF005271",
            label:
              "Stars Behavioral Health Group, Inc.;Star View Behavioral Health, Inc.;Long Beach=DXF005271",
          },
          {
            id: "Stars Behavioral Health Group, Inc.;Oasis Behavioral Health, Inc.;Long Beach=DXF005272",
            label:
              "Stars Behavioral Health Group, Inc.;Oasis Behavioral Health, Inc.;Long Beach=DXF005272",
          },
          {
            id: "Stars Behavioral Health Group, Inc.;Valley Star Behavioral Health, Inc.;Long Beach=DXF005273",
            label:
              "Stars Behavioral Health Group, Inc.;Valley Star Behavioral Health, Inc.;Long Beach=DXF005273",
          },
          {
            id: "Stars Behavioral Health Group, Inc.;Subacute Treatment for Adolescent Rehabilitation Services, Inc. aka S.T.A.R.S., Inc.;Long Beach=DXF005274",
            label:
              "Stars Behavioral Health Group, Inc.;Subacute Treatment for Adolescent Rehabilitation Services, Inc. aka S.T.A.R.S., Inc.;Long Beach=DXF005274",
          },
          {
            id: "Stars Behavioral Health Group, Inc.;Central Star Behavioral Health, Inc.;Long Beach=DXF005275",
            label:
              "Stars Behavioral Health Group, Inc.;Central Star Behavioral Health, Inc.;Long Beach=DXF005275",
          },
          {
            id: "Stars Behavioral Health Group, Inc.;Starlight Community Services, Inc.;Long Beach=DXF005276",
            label:
              "Stars Behavioral Health Group, Inc.;Starlight Community Services, Inc.;Long Beach=DXF005276",
          },
          {
            id: "Step Up On Second Inc; ;Santa Monica=DXF002642",
            label: "Step Up On Second Inc; ;Santa Monica=DXF002642",
          },
          {
            id: "Stephen A Hilty; ;San Luis Obispo=DXF000269",
            label: "Stephen A Hilty; ;San Luis Obispo=DXF000269",
          },
          {
            id: "Stephen M Greenberg MD Inc; ;Santa Monica=DXF002340",
            label: "Stephen M Greenberg MD Inc; ;Santa Monica=DXF002340",
          },
          {
            id: "Stephen P. Datu, MD; ;Red Bluff=DXF004472",
            label: "Stephen P. Datu, MD; ;Red Bluff=DXF004472",
          },
          {
            id: "Sterling Hospitalist Medical Group; ;Garden Grove=DXF003712",
            label:
              "Sterling Hospitalist Medical Group; ;Garden Grove=DXF003712",
          },
          {
            id: "Sterling Hospitalist Medical Group, Inc.; ;Garden Grove=DXF002613",
            label:
              "Sterling Hospitalist Medical Group, Inc.; ;Garden Grove=DXF002613",
          },
          {
            id: "Steven D. Chang MD Inc.; ;ventura=DXF000504",
            label: "Steven D. Chang MD Inc.; ;ventura=DXF000504",
          },
          {
            id: "Steven D. Emmet MD Inc; ;Encinitas=DXF000619",
            label: "Steven D. Emmet MD Inc; ;Encinitas=DXF000619",
          },
          {
            id: "Steven D. Zelko M.D., Inc.; ;Santa Barbara=DXF000991",
            label: "Steven D. Zelko M.D., Inc.; ;Santa Barbara=DXF000991",
          },
          {
            id: "Stewart Medical Group; ;Alhambra=DXF004663",
            label: "Stewart Medical Group; ;Alhambra=DXF004663",
          },
          {
            id: "Stockdale Podiatry Group Inc; ;Bakersfield=DXF000637",
            label: "Stockdale Podiatry Group Inc; ;Bakersfield=DXF000637",
          },
          {
            id: "Stockton Nephrology; ;Stockton=DXF001152",
            label: "Stockton Nephrology; ;Stockton=DXF001152",
          },
          {
            id: "Stockton Urgent Care; ;Stockton=DXF001341",
            label: "Stockton Urgent Care; ;Stockton=DXF001341",
          },
          {
            id: "STR, LP All Care- Amalfi; ;Woodland Hills=DXF004603",
            label: "STR, LP All Care- Amalfi; ;Woodland Hills=DXF004603",
          },
          {
            id: "Strive Health, LLC; ;Colorado=DXF004299",
            label: "Strive Health, LLC; ;Colorado=DXF004299",
          },
          {
            id: "Strive Health, LLC;KCE of Southern California, LLC;Colorado=DXF004412",
            label:
              "Strive Health, LLC;KCE of Southern California, LLC;Colorado=DXF004412",
          },
          {
            id: "Stuart R Winthrop MD INC; ;Santa Barbara=DXF001239",
            label: "Stuart R Winthrop MD INC; ;Santa Barbara=DXF001239",
          },
          {
            id: "Sudhir Malik, APMC; ;San Diego=DXF001230",
            label: "Sudhir Malik, APMC; ;San Diego=DXF001230",
          },
          {
            id: "Sukhdev K Uppal Md Inc; ;Corona=DXF001047",
            label: "Sukhdev K Uppal Md Inc; ;Corona=DXF001047",
          },
          {
            id: "Summerfield Healthcare Center; ;Santa Rosa=DXF005060",
            label: "Summerfield Healthcare Center; ;Santa Rosa=DXF005060",
          },
          {
            id: "Summit Health Group; ;Thousand Oaks=DXF004237",
            label: "Summit Health Group; ;Thousand Oaks=DXF004237",
          },
          {
            id: "Sun City Cardiology Medical Center, Inc.; ;Menifee=DXF001936",
            label:
              "Sun City Cardiology Medical Center, Inc.; ;Menifee=DXF001936",
          },
          {
            id: "Sun Haven Care, Inc, dba Terrace View Care Center; ;Fullerton=DXF003907",
            label:
              "Sun Haven Care, Inc, dba Terrace View Care Center; ;Fullerton=DXF003907",
          },
          {
            id: "Sun Haven Care, Inc, dba Terrace View Care Center;Beacon Healthcare Center;West Covina=DXF003908",
            label:
              "Sun Haven Care, Inc, dba Terrace View Care Center;Beacon Healthcare Center;West Covina=DXF003908",
          },
          {
            id: "Sun Health Medical Clinic, Inc.; ;San Diego=DXF000733",
            label: "Sun Health Medical Clinic, Inc.; ;San Diego=DXF000733",
          },
          {
            id: "Sun Mar Healthcare; ;Brea=DXF004183",
            label: "Sun Mar Healthcare; ;Brea=DXF004183",
          },
          {
            id: "Sun Mar Healthcare;Gordon Lane Care Center;Fullerton=DXF004184",
            label:
              "Sun Mar Healthcare;Gordon Lane Care Center;Fullerton=DXF004184",
          },
          {
            id: "Sun Mar Healthcare;Anaheim Healthcare Center;Anaheim=DXF004185",
            label:
              "Sun Mar Healthcare;Anaheim Healthcare Center;Anaheim=DXF004185",
          },
          {
            id: "Sun Mar Healthcare;Park Regency Care Center;La habra=DXF004186",
            label:
              "Sun Mar Healthcare;Park Regency Care Center;La habra=DXF004186",
          },
          {
            id: "Sun Mar Healthcare;French Park Care Center;Santa Ana=DXF004187",
            label:
              "Sun Mar Healthcare;French Park Care Center;Santa Ana=DXF004187",
          },
          {
            id: "Sun Mar Healthcare;Sun Mar Nursing Center;Anaheim=DXF004188",
            label:
              "Sun Mar Healthcare;Sun Mar Nursing Center;Anaheim=DXF004188",
          },
          {
            id: "Sun Mar Healthcare;Garden Park Care Center;Garden Grove=DXF004195",
            label:
              "Sun Mar Healthcare;Garden Park Care Center;Garden Grove=DXF004195",
          },
          {
            id: "Sun Mar Healthcare;Lake Forest Nursing;Lake Forest=DXF004421",
            label:
              "Sun Mar Healthcare;Lake Forest Nursing;Lake Forest=DXF004421",
          },
          {
            id: "Sun Mar Healthcare;Alcott Rehabilitation Hospital;Los Angeles=DXF004687",
            label:
              "Sun Mar Healthcare;Alcott Rehabilitation Hospital;Los Angeles=DXF004687",
          },
          {
            id: "Sun Mar Healthcare;Bonita Hills Post Acute;La habra=DXF004688",
            label:
              "Sun Mar Healthcare;Bonita Hills Post Acute;La habra=DXF004688",
          },
          {
            id: "Sun Mar Healthcare;Citrus Nursing;FONTANA=DXF004689",
            label: "Sun Mar Healthcare;Citrus Nursing;FONTANA=DXF004689",
          },
          {
            id: "Sun Mar Healthcare;Cottage Crest Post Acute;Norwald=DXF004690",
            label:
              "Sun Mar Healthcare;Cottage Crest Post Acute;Norwald=DXF004690",
          },
          {
            id: "Sun Mar Healthcare;College Vista Post Acute;Los Angeles=DXF004691",
            label:
              "Sun Mar Healthcare;College Vista Post Acute;Los Angeles=DXF004691",
          },
          {
            id: "Sun Mar Healthcare;Country Oaks Partners, LLC;Pomona=DXF004692",
            label:
              "Sun Mar Healthcare;Country Oaks Partners, LLC;Pomona=DXF004692",
          },
          {
            id: "Sun Mar Healthcare;Community Care and Rehabilitation;Riverside=DXF004693",
            label:
              "Sun Mar Healthcare;Community Care and Rehabilitation;Riverside=DXF004693",
          },
          {
            id: "Sun Mar Healthcare;Courtyard Post Acute;San Jose=DXF004694",
            label: "Sun Mar Healthcare;Courtyard Post Acute;San Jose=DXF004694",
          },
          {
            id: "Sun Mar Healthcare;Diamond Ridge Post Acute;Pittsburg=DXF004695",
            label:
              "Sun Mar Healthcare;Diamond Ridge Post Acute;Pittsburg=DXF004695",
          },
          {
            id: "Sun Mar Healthcare;Del Mar Convalescent;Rosemead=DXF004696",
            label: "Sun Mar Healthcare;Del Mar Convalescent;Rosemead=DXF004696",
          },
          {
            id: "Sun Mar Healthcare;Excell Post Acute;Alameda=DXF004697",
            label: "Sun Mar Healthcare;Excell Post Acute;Alameda=DXF004697",
          },
          {
            id: "Sun Mar Healthcare;Extended Care Hospital of Riverside;Riverside=DXF004698",
            label:
              "Sun Mar Healthcare;Extended Care Hospital of Riverside;Riverside=DXF004698",
          },
          {
            id: "Sun Mar Healthcare;The Grove Post Acute;Garden Grove=DXF004699",
            label:
              "Sun Mar Healthcare;The Grove Post Acute;Garden Grove=DXF004699",
          },
          {
            id: "Sun Mar Healthcare;Heritage Manor;Monterey Park=DXF004700",
            label: "Sun Mar Healthcare;Heritage Manor;Monterey Park=DXF004700",
          },
          {
            id: "Sun Mar Healthcare;Menifee Lakes Post Acute;Menifee=DXF004702",
            label:
              "Sun Mar Healthcare;Menifee Lakes Post Acute;Menifee=DXF004702",
          },
          {
            id: "Sun Mar Healthcare;Mission Care Center;Riverside=DXF004703",
            label: "Sun Mar Healthcare;Mission Care Center;Riverside=DXF004703",
          },
          {
            id: "Sun Mar Healthcare;Mission Carmichael Healthcare Center;Carmichael=DXF004704",
            label:
              "Sun Mar Healthcare;Mission Carmichael Healthcare Center;Carmichael=DXF004704",
          },
          {
            id: "Sun Mar Healthcare;Monterey Park Convalescent;Monterey Park=DXF004706",
            label:
              "Sun Mar Healthcare;Monterey Park Convalescent;Monterey Park=DXF004706",
          },
          {
            id: "Sun Mar Healthcare;Mountain view post acute;Barstow=DXF004708",
            label:
              "Sun Mar Healthcare;Mountain view post acute;Barstow=DXF004708",
          },
          {
            id: "Sun Mar Healthcare;North Valley Nursing;Tujunga=DXF004709",
            label: "Sun Mar Healthcare;North Valley Nursing;Tujunga=DXF004709",
          },
          {
            id: "Sun Mar Healthcare;Oceanview Post Acute;Escondido=DXF004710",
            label:
              "Sun Mar Healthcare;Oceanview Post Acute;Escondido=DXF004710",
          },
          {
            id: "Sun Mar Healthcare;Pacific Post Acute;Santa Monica=DXF004711",
            label:
              "Sun Mar Healthcare;Pacific Post Acute;Santa Monica=DXF004711",
          },
          {
            id: "Sun Mar Healthcare;Paramount Convalescent;Paramount=DXF004712",
            label:
              "Sun Mar Healthcare;Paramount Convalescent;Paramount=DXF004712",
          },
          {
            id: "Sun Mar Healthcare;Pelican Ridge Post Acute;Newport Beach=DXF004722",
            label:
              "Sun Mar Healthcare;Pelican Ridge Post Acute;Newport Beach=DXF004722",
          },
          {
            id: "Sun Mar Healthcare;POMONA VISTA CARE CENTER;Pomona=DXF004723",
            label:
              "Sun Mar Healthcare;POMONA VISTA CARE CENTER;Pomona=DXF004723",
          },
          {
            id: "Sun Mar Healthcare;Sierra View Care Holdings, LLC;Baldwin Park=DXF004724",
            label:
              "Sun Mar Healthcare;Sierra View Care Holdings, LLC;Baldwin Park=DXF004724",
          },
          {
            id: "Sun Mar Healthcare;SUNNY HILLS POST ACUTE;LA MIRADA=DXF004725",
            label:
              "Sun Mar Healthcare;SUNNY HILLS POST ACUTE;LA MIRADA=DXF004725",
          },
          {
            id: "Sun Mar Healthcare;SUNSET MANOR;El Monte=DXF004726",
            label: "Sun Mar Healthcare;SUNSET MANOR;El Monte=DXF004726",
          },
          {
            id: "Sun Mar Healthcare;TARZANA HEALTH AND REHABILITATION;Los Angeles=DXF004727",
            label:
              "Sun Mar Healthcare;TARZANA HEALTH AND REHABILITATION;Los Angeles=DXF004727",
          },
          {
            id: "Sun Mar Healthcare;TRABUCO HILLS POST ACUTE;Lake Forest=DXF004728",
            label:
              "Sun Mar Healthcare;TRABUCO HILLS POST ACUTE;Lake Forest=DXF004728",
          },
          {
            id: "Sun Mar Healthcare;VICTORIA CARE CENTER;Pomona=DXF004729",
            label: "Sun Mar Healthcare;VICTORIA CARE CENTER;Pomona=DXF004729",
          },
          {
            id: "Sun Mar Healthcare;VILLA RANCHO BERNARDO CARE CENTER;San Diego=DXF004730",
            label:
              "Sun Mar Healthcare;VILLA RANCHO BERNARDO CARE CENTER;San Diego=DXF004730",
          },
          {
            id: "Sun Mar Healthcare;VINELAND POST ACUTE;North Hollywood=DXF004731",
            label:
              "Sun Mar Healthcare;VINELAND POST ACUTE;North Hollywood=DXF004731",
          },
          {
            id: "Sun Mar Healthcare;VILLA DEL SOL POST ACUTE;Bellflower=DXF004732",
            label:
              "Sun Mar Healthcare;VILLA DEL SOL POST ACUTE;Bellflower=DXF004732",
          },
          {
            id: "Sun Mar Healthcare;VISTA VIEW POST ACUTE;vista=DXF004733",
            label: "Sun Mar Healthcare;VISTA VIEW POST ACUTE;vista=DXF004733",
          },
          {
            id: "Sun Mar Nursing Center; ;Anaheim=DXF004465",
            label: "Sun Mar Nursing Center; ;Anaheim=DXF004465",
          },
          {
            id: "Sunbridge Brittany Rehab Center Inc; ;Carmichael=DXF004826",
            label: "Sunbridge Brittany Rehab Center Inc; ;Carmichael=DXF004826",
          },
          {
            id: "Sunland SNF, LLC; ;Sunland=DXF003509",
            label: "Sunland SNF, LLC; ;Sunland=DXF003509",
          },
          {
            id: "Sunmed Health and Weight Management A Professional Medical Corporation; ;Visalia=DXF004481",
            label:
              "Sunmed Health and Weight Management A Professional Medical Corporation; ;Visalia=DXF004481",
          },
          {
            id: "SunnyDay Adult Day Health Care; ;El Monte=DXF002766",
            label: "SunnyDay Adult Day Health Care; ;El Monte=DXF002766",
          },
          {
            id: "Sunnyside Rehab of Fresno; ;Fresno=DXF002777",
            label: "Sunnyside Rehab of Fresno; ;Fresno=DXF002777",
          },
          {
            id: "Sunrise Medical Group; ;EL CENTRO=DXF001713",
            label: "Sunrise Medical Group; ;EL CENTRO=DXF001713",
          },
          {
            id: "Sunrise Multispecialist Medical Center; ;Anaheim=DXF001027",
            label: "Sunrise Multispecialist Medical Center; ;Anaheim=DXF001027",
          },
          {
            id: "Sunset ENT; ;San Diego=DXF001941",
            label: "Sunset ENT; ;San Diego=DXF001941",
          },
          {
            id: "Sunshine pediatri; ;Pomona=DXF005452",
            label: "Sunshine pediatri; ;Pomona=DXF005452",
          },
          {
            id: "Sunshine Pediatrics Medical Group; ;Pomona=DXF005797",
            label: "Sunshine Pediatrics Medical Group; ;Pomona=DXF005797",
          },
          {
            id: "Superior Medical Group, A Professional Corporation; ;Fullerton=DXF000198",
            label:
              "Superior Medical Group, A Professional Corporation; ;Fullerton=DXF000198",
          },
          {
            id: "Surekha S. Vetsa MD A Medical Corporation; ;Sunnyvale=DXF004363",
            label:
              "Surekha S. Vetsa MD A Medical Corporation; ;Sunnyvale=DXF004363",
          },
          {
            id: "Surekha S. Vetsa MD A Medical Corporation;Sai Health-Care Foundation and Research Center Inc;Sunnyvale=DXF004366",
            label:
              "Surekha S. Vetsa MD A Medical Corporation;Sai Health-Care Foundation and Research Center Inc;Sunnyvale=DXF004366",
          },
          {
            id: "SURESH K SACHDEVA, MD PROFESSIONAL CORPORATION; ;San Ramon=DXF004240",
            label:
              "SURESH K SACHDEVA, MD PROFESSIONAL CORPORATION; ;San Ramon=DXF004240",
          },
          {
            id: "suresh r. nayak, md., inc; ;San Jose=DXF004343",
            label: "suresh r. nayak, md., inc; ;San Jose=DXF004343",
          },
          {
            id: "Surprise Valley Health Care District; ;Cedarville=DXF004628",
            label:
              "Surprise Valley Health Care District; ;Cedarville=DXF004628",
          },
          {
            id: "Susan E Sprau, MD, PC; ;Northridge=DXF004680",
            label: "Susan E Sprau, MD, PC; ;Northridge=DXF004680",
          },
          {
            id: "Susan Eile MD; ;San Leandro=DXF000159",
            label: "Susan Eile MD; ;San Leandro=DXF000159",
          },
          {
            id: "SUSANA SANTIAGO-SORIANO MD INC; ;Los Angeles=DXF001674",
            label: "SUSANA SANTIAGO-SORIANO MD INC; ;Los Angeles=DXF001674",
          },
          {
            id: "sutter; ;Burlingame=DXF001838",
            label: "sutter; ;Burlingame=DXF001838",
          },
          {
            id: "Sutter Health; ;Sacramento=DXF000354",
            label: "Sutter Health; ;Sacramento=DXF000354",
          },
          {
            id: "Sutter Health;Alta Bates Summit Medical Center Berkeley;Berkeley=DXF001887",
            label:
              "Sutter Health;Alta Bates Summit Medical Center Berkeley;Berkeley=DXF001887",
          },
          {
            id: "Sutter Health;Alta Bates Summit Medical Center Oakland;Oakland=DXF001888",
            label:
              "Sutter Health;Alta Bates Summit Medical Center Oakland;Oakland=DXF001888",
          },
          {
            id: "Sutter Health;California Pacific Medical Center Van Ness;San Francisco=DXF001889",
            label:
              "Sutter Health;California Pacific Medical Center Van Ness;San Francisco=DXF001889",
          },
          {
            id: "Sutter Health;California Pacific Medical Center Cesar Chavez;San Francisco=DXF001890",
            label:
              "Sutter Health;California Pacific Medical Center Cesar Chavez;San Francisco=DXF001890",
          },
          {
            id: "Sutter Health;California Pacific Medical Center Duboce;San Francisco=DXF001891",
            label:
              "Sutter Health;California Pacific Medical Center Duboce;San Francisco=DXF001891",
          },
          {
            id: "Sutter Health;Sutter Health Shared Laboratory;Livermore=DXF001892",
            label:
              "Sutter Health;Sutter Health Shared Laboratory;Livermore=DXF001892",
          },
          {
            id: "Sutter Health;Eden Medical Center;Castro Valley=DXF001898",
            label: "Sutter Health;Eden Medical Center;Castro Valley=DXF001898",
          },
          {
            id: "Sutter Health;Mills-Peninsula Medical Center;Burlingame=DXF001899",
            label:
              "Sutter Health;Mills-Peninsula Medical Center;Burlingame=DXF001899",
          },
          {
            id: "Sutter Health;Novato Community Hospital;Novato=DXF001900",
            label: "Sutter Health;Novato Community Hospital;Novato=DXF001900",
          },
          {
            id: "Sutter Health;Sutter Delta Medical Center;Antioch=DXF001901",
            label:
              "Sutter Health;Sutter Delta Medical Center;Antioch=DXF001901",
          },
          {
            id: "Sutter Health;Sutter Lakeside Hospital;Lakeport=DXF001902",
            label: "Sutter Health;Sutter Lakeside Hospital;Lakeport=DXF001902",
          },
          {
            id: "Sutter Health;Sutter Maternity and Surgery Center of Santa Cruz;Santa Cruz=DXF001903",
            label:
              "Sutter Health;Sutter Maternity and Surgery Center of Santa Cruz;Santa Cruz=DXF001903",
          },
          {
            id: "Sutter Health;Sutter Santa Rosa Regional Hospital;Santa Rosa=DXF001904",
            label:
              "Sutter Health;Sutter Santa Rosa Regional Hospital;Santa Rosa=DXF001904",
          },
          {
            id: "Sutter Health;Sutter Coast Hospital;crescent city=DXF001905",
            label:
              "Sutter Health;Sutter Coast Hospital;crescent city=DXF001905",
          },
          {
            id: "Sutter Health;Memorial Medical Center;Modesto=DXF001906",
            label: "Sutter Health;Memorial Medical Center;Modesto=DXF001906",
          },
          {
            id: "Sutter Health;Memorial Hospital Los Banos;Los Banos=DXF001907",
            label:
              "Sutter Health;Memorial Hospital Los Banos;Los Banos=DXF001907",
          },
          {
            id: "Sutter Health;Sutter Amador Hospital;Jackson=DXF001908",
            label: "Sutter Health;Sutter Amador Hospital;Jackson=DXF001908",
          },
          {
            id: "Sutter Health;Sutter Auburn Faith Hospital;Auburn=DXF001909",
            label:
              "Sutter Health;Sutter Auburn Faith Hospital;Auburn=DXF001909",
          },
          {
            id: "Sutter Health;Sutter Davis Hospital;Davis=DXF001910",
            label: "Sutter Health;Sutter Davis Hospital;Davis=DXF001910",
          },
          {
            id: "Sutter Health;Sutter Medical Center, Sacramento;Sacramento=DXF001911",
            label:
              "Sutter Health;Sutter Medical Center, Sacramento;Sacramento=DXF001911",
          },
          {
            id: "Sutter Health;Sutter Center for Psychiatry;Sacramento=DXF001912",
            label:
              "Sutter Health;Sutter Center for Psychiatry;Sacramento=DXF001912",
          },
          {
            id: "Sutter Health;Sutter Roseville Medical Center;Roseville=DXF001913",
            label:
              "Sutter Health;Sutter Roseville Medical Center;Roseville=DXF001913",
          },
          {
            id: "Sutter Health;Sutter Solano Medical Center;Vallejo=DXF001914",
            label:
              "Sutter Health;Sutter Solano Medical Center;Vallejo=DXF001914",
          },
          {
            id: "Sutter Health;Sutter Tracy Community Hospital;Tracy=DXF001915",
            label:
              "Sutter Health;Sutter Tracy Community Hospital;Tracy=DXF001915",
          },
          {
            id: "Sutter Health;Sutter Surgical Hospital-North Valley;Yuba City=DXF001916",
            label:
              "Sutter Health;Sutter Surgical Hospital-North Valley;Yuba City=DXF001916",
          },
          {
            id: "Sutter Health;Sutter Health Plus;Sacramento=DXF001917",
            label: "Sutter Health;Sutter Health Plus;Sacramento=DXF001917",
          },
          {
            id: "Sutter Health;Sutter Medical Group, A California Corporation;Sacramento=DXF005325",
            label:
              "Sutter Health;Sutter Medical Group, A California Corporation;Sacramento=DXF005325",
          },
          {
            id: "Sutter Health;Sutter North Medical Group, A Professional Corporation;Yuba City=DXF005326",
            label:
              "Sutter Health;Sutter North Medical Group, A Professional Corporation;Yuba City=DXF005326",
          },
          {
            id: "Sutter Health;The Gould Medical Group, Inc.;Modesto=DXF005327",
            label:
              "Sutter Health;The Gould Medical Group, Inc.;Modesto=DXF005327",
          },
          {
            id: "Sutter Health;Palo Alto Foundation Medical Group, Inc.;Mountain View=DXF005328",
            label:
              "Sutter Health;Palo Alto Foundation Medical Group, Inc.;Mountain View=DXF005328",
          },
          {
            id: "Sutter Health;Sutter East Bay Medical Group, Inc., a California professional corporation;Lafayette=DXF005516",
            label:
              "Sutter Health;Sutter East Bay Medical Group, Inc., a California professional corporation;Lafayette=DXF005516",
          },
          {
            id: "Sutter Health;Sutter Medical Group of the Redwoods;Santa Rosa=DXF005517",
            label:
              "Sutter Health;Sutter Medical Group of the Redwoods;Santa Rosa=DXF005517",
          },
          {
            id: "Sutter Health;Sutter Health Plus;none PD entry=DXF005671",
            label: "Sutter Health;Sutter Health Plus;none PD entry=DXF005671",
          },
          {
            id: "Sutter Independent Physicians; ;Sacramento=DXF000653",
            label: "Sutter Independent Physicians; ;Sacramento=DXF000653",
          },
          {
            id: "Sutter-Yuba Behavioral Health; ;Yuba City=DXF002510",
            label: "Sutter-Yuba Behavioral Health; ;Yuba City=DXF002510",
          },
          {
            id: "Swaroopa Bussa; ;San Jose=DXF004377",
            label: "Swaroopa Bussa; ;San Jose=DXF004377",
          },
          {
            id: "swati Panse MD inc; ;San Jacinto=DXF001196",
            label: "swati Panse MD inc; ;San Jacinto=DXF001196",
          },
          {
            id: "Sweeney Medical Corp; ;Santa Barbara=DXF002290",
            label: "Sweeney Medical Corp; ;Santa Barbara=DXF002290",
          },
          {
            id: "Sweetwater Care; ;Carlsbad=DXF005416",
            label: "Sweetwater Care; ;Carlsbad=DXF005416",
          },
          {
            id: "Sweetwater Care;Evergreen Care Center LLC;Fresno=DXF005418",
            label: "Sweetwater Care;Evergreen Care Center LLC;Fresno=DXF005418",
          },
          {
            id: "Sweetwater Care;Fowler Care Center LLC;Fowler=DXF005419",
            label: "Sweetwater Care;Fowler Care Center LLC;Fowler=DXF005419",
          },
          {
            id: "Sweetwater Care;Palms Care Center LLC;Chowchilla=DXF005432",
            label: "Sweetwater Care;Palms Care Center LLC;Chowchilla=DXF005432",
          },
          {
            id: "Sweetwater Care;Rolling Hills Care Center LLC;Selma=DXF005433",
            label:
              "Sweetwater Care;Rolling Hills Care Center LLC;Selma=DXF005433",
          },
          {
            id: "Sweetwater Care;Valley View Care Center LLC;Delano=DXF005434",
            label:
              "Sweetwater Care;Valley View Care Center LLC;Delano=DXF005434",
          },
          {
            id: "Sweetwater Care;Brookside Care Center LLC;Stockton=DXF005435",
            label:
              "Sweetwater Care;Brookside Care Center LLC;Stockton=DXF005435",
          },
          {
            id: "Sweetwater Care;Noble Care Center LLC;Stockton=DXF005436",
            label: "Sweetwater Care;Noble Care Center LLC;Stockton=DXF005436",
          },
          {
            id: "Sweetwater Care;Rancho Seco Care Center LLC;Galt=DXF005437",
            label: "Sweetwater Care;Rancho Seco Care Center LLC;Galt=DXF005437",
          },
          {
            id: "Sweetwater Care;Vineyards at Fowler LLC;Fowler=DXF005438",
            label: "Sweetwater Care;Vineyards at Fowler LLC;Fowler=DXF005438",
          },
          {
            id: "Sweetwater Care;Almond View Care Center LLC;Williams=DXF005439",
            label:
              "Sweetwater Care;Almond View Care Center LLC;Williams=DXF005439",
          },
          {
            id: "Sweetwater Care;Feather River Care Center LLC;Oroville=DXF005440",
            label:
              "Sweetwater Care;Feather River Care Center LLC;Oroville=DXF005440",
          },
          {
            id: "Sweetwater Care;Shasta View Care Center LLC;Red Bluff=DXF005441",
            label:
              "Sweetwater Care;Shasta View Care Center LLC;Red Bluff=DXF005441",
          },
          {
            id: "Sweetwater Care;Gateway Care LLC;Visalia=DXF005442",
            label: "Sweetwater Care;Gateway Care LLC;Visalia=DXF005442",
          },
          {
            id: "Sweetwater Care;Grand Oaks Care LLC;tulare=DXF005443",
            label: "Sweetwater Care;Grand Oaks Care LLC;tulare=DXF005443",
          },
          {
            id: "Sweetwater Care;Orchards at Tulare LLC;tulare=DXF005444",
            label: "Sweetwater Care;Orchards at Tulare LLC;tulare=DXF005444",
          },
          {
            id: "Sweetwater Care;River Walk Care Center LLC;Porterville=DXF005445",
            label:
              "Sweetwater Care;River Walk Care Center LLC;Porterville=DXF005445",
          },
          {
            id: "Sweetwater Care;Vindra Inc.;Clear Lake=DXF005446",
            label: "Sweetwater Care;Vindra Inc.;Clear Lake=DXF005446",
          },
          {
            id: "Sycamores; ;Pasadena=DXF001564",
            label: "Sycamores; ;Pasadena=DXF001564",
          },
          {
            id: "Sylvana Guidotti, MD, Inc.; ;ventura=DXF002300",
            label: "Sylvana Guidotti, MD, Inc.; ;ventura=DXF002300",
          },
          {
            id: "Symba Center; ;victorville=DXF004509",
            label: "Symba Center; ;victorville=DXF004509",
          },
          {
            id: "Synergy Orthopedic Specialist, Inc.; ;San Diego=DXF001260",
            label: "Synergy Orthopedic Specialist, Inc.; ;San Diego=DXF001260",
          },
          {
            id: "Szmidt-A professional medical corp; ;San Diego=DXF002266",
            label: "Szmidt-A professional medical corp; ;San Diego=DXF002266",
          },
          {
            id: "T.H.E.Clinic, Inc; ;Los Angeles=DXF003663",
            label: "T.H.E.Clinic, Inc; ;Los Angeles=DXF003663",
          },
          {
            id: "Tahoe Forest Hospital District; ;Truckee=DXF004632",
            label: "Tahoe Forest Hospital District; ;Truckee=DXF004632",
          },
          {
            id: "Talat Saifee MD Inc; ;Burbank=DXF004467",
            label: "Talat Saifee MD Inc; ;Burbank=DXF004467",
          },
          {
            id: "Talbert Medical Group, P.C.; ;El Segundo=DXF000704",
            label: "Talbert Medical Group, P.C.; ;El Segundo=DXF000704",
          },
          {
            id: "Tarzana Treatment Centers, Inc.; ;Tarzana=DXF001308",
            label: "Tarzana Treatment Centers, Inc.; ;Tarzana=DXF001308",
          },
          {
            id: "Tarzana Treatment Centers, Inc.;Tarzana Treatment Centers, Inc.;Tarzana=DXF001668",
            label:
              "Tarzana Treatment Centers, Inc.;Tarzana Treatment Centers, Inc.;Tarzana=DXF001668",
          },
          {
            id: "Tarzana Treatment Centers, Inc.;Tarzana Treatment Centers, Inc.;Tarzana=DXF001669",
            label:
              "Tarzana Treatment Centers, Inc.;Tarzana Treatment Centers, Inc.;Tarzana=DXF001669",
          },
          {
            id: "TCY Pharmacy Inc; ;National City=DXF003778",
            label: "TCY Pharmacy Inc; ;National City=DXF003778",
          },
          {
            id: "Teen Kitchen Project; ;Soquel=DXF003551",
            label: "Teen Kitchen Project; ;Soquel=DXF003551",
          },
          {
            id: "Tehama County Department of Education; ;Red Bluff=DXF003918",
            label:
              "Tehama County Department of Education; ;Red Bluff=DXF003918",
          },
          {
            id: "Tejaskumar Naik, A Medical Corporation; ;Corona=DXF002020",
            label: "Tejaskumar Naik, A Medical Corporation; ;Corona=DXF002020",
          },
          {
            id: "Telecare Corporation; ;Alameda=DXF005125",
            label: "Telecare Corporation; ;Alameda=DXF005125",
          },
          {
            id: "TeleMed2U; ;Roseville=DXF000380",
            label: "TeleMed2U; ;Roseville=DXF000380",
          },
          {
            id: "TeleMed2U, Inc.; ;Roseville=DXF005538",
            label: "TeleMed2U, Inc.; ;Roseville=DXF005538",
          },
          {
            id: "Temecula Valley Hospital; ;Temecula=DXF001990",
            label: "Temecula Valley Hospital; ;Temecula=DXF001990",
          },
          {
            id: "Tenth Street Pediatrics; ;Santa Monica=DXF004357",
            label: "Tenth Street Pediatrics; ;Santa Monica=DXF004357",
          },
          {
            id: "TERRACE VIEW CARE CENTER; ;Fullerton=DXF003936",
            label: "TERRACE VIEW CARE CENTER; ;Fullerton=DXF003936",
          },
          {
            id: "Terrisa Ha M.D; ;La Palma=DXF001297",
            label: "Terrisa Ha M.D; ;La Palma=DXF001297",
          },
          {
            id: "Tessie Cleveland Community Services Corp; ;Los Angeles=DXF002815",
            label:
              "Tessie Cleveland Community Services Corp; ;Los Angeles=DXF002815",
          },
          {
            id: "TFHD; ;Truckee=DXF003916",
            label: "TFHD; ;Truckee=DXF003916",
          },
          {
            id: "The Achievable Foundation; ;Culver City=DXF001229",
            label: "The Achievable Foundation; ;Culver City=DXF001229",
          },
          {
            id: "The Allergy and Asthma Clinic Inc; ;San Mateo=DXF000462",
            label: "The Allergy and Asthma Clinic Inc; ;San Mateo=DXF000462",
          },
          {
            id: "The Allergy and Asthma Clinic Inc;Peninsula Allergy Associates;San Mateo=DXF000463",
            label:
              "The Allergy and Asthma Clinic Inc;Peninsula Allergy Associates;San Mateo=DXF000463",
          },
          {
            id: "THE CALIFORNIAN; ;Santa Barbara=DXF005338",
            label: "THE CALIFORNIAN; ;Santa Barbara=DXF005338",
          },
          {
            id: "The Care Center on Hazeltine; ;Van Nuys=DXF002157",
            label: "The Care Center on Hazeltine; ;Van Nuys=DXF002157",
          },
          {
            id: "The Care Center on Hazeltine; ;Van Nuys=DXF005848",
            label: "The Care Center on Hazeltine; ;Van Nuys=DXF005848",
          },
          {
            id: "The Children's Clinic Serving Children and Their Families; ;Long Beach=DXF001829",
            label:
              "The Children's Clinic Serving Children and Their Families; ;Long Beach=DXF001829",
          },
          {
            id: "The Childrens Doctor; ;Riverside=DXF000822",
            label: "The Childrens Doctor; ;Riverside=DXF000822",
          },
          {
            id: "THE Clinic Inc; ;Los Angeles=DXF001282",
            label: "THE Clinic Inc; ;Los Angeles=DXF001282",
          },
          {
            id: "The Coalition of Orange County Community Health Centers - Orange County Partners in Health-Health Information Exchange; ;Santa Ana=DXF000266",
            label:
              "The Coalition of Orange County Community Health Centers - Orange County Partners in Health-Health Information Exchange; ;Santa Ana=DXF000266",
          },
          {
            id: "The Dream Center; ;Los Angeles=DXF002764",
            label: "The Dream Center; ;Los Angeles=DXF002764",
          },
          {
            id: "The Ellison John Transitional Care Center; ;Lancaster=DXF002045",
            label:
              "The Ellison John Transitional Care Center; ;Lancaster=DXF002045",
          },
          {
            id: "The Fresno Center; ;Fresno=DXF002656",
            label: "The Fresno Center; ;Fresno=DXF002656",
          },
          {
            id: "The Gathering Inn; ;Rocklin=DXF003397",
            label: "The Gathering Inn; ;Rocklin=DXF003397",
          },
          {
            id: "The Grove Post Acute; ;Garden Grove=DXF005181",
            label: "The Grove Post Acute; ;Garden Grove=DXF005181",
          },
          {
            id: "The Los Angeles Free Clinic; ;Los Angeles=DXF001803",
            label: "The Los Angeles Free Clinic; ;Los Angeles=DXF001803",
          },
          {
            id: "The Neighborhood Medical Clinic of Riverside Inc; ;Riveside=DXF000329",
            label:
              "The Neighborhood Medical Clinic of Riverside Inc; ;Riveside=DXF000329",
          },
          {
            id: "The Open Door Network; ;Bakersfield=DXF004307",
            label: "The Open Door Network; ;Bakersfield=DXF004307",
          },
          {
            id: "The Orchards Post Acute; ;Bakersfield=DXF004875",
            label: "The Orchards Post Acute; ;Bakersfield=DXF004875",
          },
          {
            id: "The People Concern; ;Los Angeles=DXF002723",
            label: "The People Concern; ;Los Angeles=DXF002723",
          },
          {
            id: "The Permanente Medical Group; ;Oakland=DXF002944",
            label: "The Permanente Medical Group; ;Oakland=DXF002944",
          },
          {
            id: "The Redwoods - A Community of Seniors; ;Mill Valley=DXF003236",
            label:
              "The Redwoods - A Community of Seniors; ;Mill Valley=DXF003236",
          },
          {
            id: "The Rehabilitation Center of North Hills; ;North Hills=DXF005846",
            label:
              "The Rehabilitation Center of North Hills; ;North Hills=DXF005846",
          },
          {
            id: "The Rehabilitation Center on Pico; ;Los Angeles=DXF005847",
            label: "The Rehabilitation Center on Pico; ;Los Angeles=DXF005847",
          },
          {
            id: "The Ridge Post Acute; ;San Jose=DXF004899",
            label: "The Ridge Post Acute; ;San Jose=DXF004899",
          },
          {
            id: "The Ridge Post Acute; ;San Jose=DXF005143",
            label: "The Ridge Post Acute; ;San Jose=DXF005143",
          },
          {
            id: "The ROADS Foundation; ;Compton=DXF005539",
            label: "The ROADS Foundation; ;Compton=DXF005539",
          },
          {
            id: "The Shores Post Acute; ;San Diego=DXF004858",
            label: "The Shores Post Acute; ;San Diego=DXF004858",
          },
          {
            id: "The Springs at Pacific Regent; ;San Diego=DXF005640",
            label: "The Springs at Pacific Regent; ;San Diego=DXF005640",
          },
          {
            id: "The Springs Health and Rehab; ;Murrieta=DXF002061",
            label: "The Springs Health and Rehab; ;Murrieta=DXF002061",
          },
          {
            id: "The Stonebrook Convalescent Center, Inc; ;Concord=DXF005310",
            label:
              "The Stonebrook Convalescent Center, Inc; ;Concord=DXF005310",
          },
          {
            id: "The Suzuki Clinic; ;Torrance=DXF000548",
            label: "The Suzuki Clinic; ;Torrance=DXF000548",
          },
          {
            id: "The Village Family Doctor; ;Arroyo Grande=DXF000975",
            label: "The Village Family Doctor; ;Arroyo Grande=DXF000975",
          },
          {
            id: "The Village Family Services, Inc.; ;North Hollywood=DXF003901",
            label:
              "The Village Family Services, Inc.; ;North Hollywood=DXF003901",
          },
          {
            id: "THE VINEYARDS HEALTHCARE CENTER; ;Livermore=DXF004904",
            label: "THE VINEYARDS HEALTHCARE CENTER; ;Livermore=DXF004904",
          },
          {
            id: "The WeCare Group; ;Scotia=DXF004647",
            label: "The WeCare Group; ;Scotia=DXF004647",
          },
          {
            id: "The Wellness Center; ;Freedom=DXF005631",
            label: "The Wellness Center; ;Freedom=DXF005631",
          },
          {
            id: "Theodore Gerard A Caspe MD A Medical Corporation; ;Rancho Cucamonga=DXF000456",
            label:
              "Theodore Gerard A Caspe MD A Medical Corporation; ;Rancho Cucamonga=DXF000456",
          },
          {
            id: "Therapeutic Play Foundation; ;Pasadena=DXF002718",
            label: "Therapeutic Play Foundation; ;Pasadena=DXF002718",
          },
          {
            id: "Therapeutic Play Foundation; ;Pasadena=DXF003216",
            label: "Therapeutic Play Foundation; ;Pasadena=DXF003216",
          },
          {
            id: "Thomas Badin MD; ;Santa Ana=DXF000181",
            label: "Thomas Badin MD; ;Santa Ana=DXF000181",
          },
          {
            id: "Thousand Oaks Pediatrics; ;SIMI VALLEY=DXF003596",
            label: "Thousand Oaks Pediatrics; ;SIMI VALLEY=DXF003596",
          },
          {
            id: "Thousand Oaks Post Acute; ;Thousand Oaks=DXF002012",
            label: "Thousand Oaks Post Acute; ;Thousand Oaks=DXF002012",
          },
          {
            id: "Tibbetts Medical Group, Inc.; ;Riverside=DXF001703",
            label: "Tibbetts Medical Group, Inc.; ;Riverside=DXF001703",
          },
          {
            id: "Tiburcio Vasquez Health Center, Inc.; ;Hayward=DXF002835",
            label: "Tiburcio Vasquez Health Center, Inc.; ;Hayward=DXF002835",
          },
          {
            id: "TIL, LP Bellagio in the Desert; ;Studio City=DXF004605",
            label: "TIL, LP Bellagio in the Desert; ;Studio City=DXF004605",
          },
          {
            id: "Timothy J Perrin, MD; ;Arroyo Grande=DXF001655",
            label: "Timothy J Perrin, MD; ;Arroyo Grande=DXF001655",
          },
          {
            id: "Timothy J. Killeen, M.D., Inc.; ;Temecula=DXF001383",
            label: "Timothy J. Killeen, M.D., Inc.; ;Temecula=DXF001383",
          },
          {
            id: "Timothy M. Fishback, M.D.; ;Palm Springs=DXF004284",
            label: "Timothy M. Fishback, M.D.; ;Palm Springs=DXF004284",
          },
          {
            id: "TLCS, Inc. dba Hope Cooperative; ;Sacramento=DXF002760",
            label: "TLCS, Inc. dba Hope Cooperative; ;Sacramento=DXF002760",
          },
          {
            id: "To Help Everyone Health & Wellness Centers; ;Los Angeles=DXF002767",
            label:
              "To Help Everyone Health & Wellness Centers; ;Los Angeles=DXF002767",
          },
          {
            id: "Tobin C Gallawa DPM; ;Sacramento=DXF000583",
            label: "Tobin C Gallawa DPM; ;Sacramento=DXF000583",
          },
          {
            id: "Toluca Congregate Living, Inc.; ;Valley Glen=DXF003620",
            label: "Toluca Congregate Living, Inc.; ;Valley Glen=DXF003620",
          },
          {
            id: "TOMMY T KUO MD; ;San Mateo=DXF001601",
            label: "TOMMY T KUO MD; ;San Mateo=DXF001601",
          },
          {
            id: "Torrance Memorial; ;Torrance=DXF003963",
            label: "Torrance Memorial; ;Torrance=DXF003963",
          },
          {
            id: "Torrance Memorial;Torrance Memorial Physician Network;Torrance=DXF004039",
            label:
              "Torrance Memorial;Torrance Memorial Physician Network;Torrance=DXF004039",
          },
          {
            id: "Torrey Pines Orthopaedic Medical Group.com; ;La Jolla=DXF005874",
            label:
              "Torrey Pines Orthopaedic Medical Group.com; ;La Jolla=DXF005874",
          },
          {
            id: "Total Longterm Care, Inc; ;Denver=DXF001894",
            label: "Total Longterm Care, Inc; ;Denver=DXF001894",
          },
          {
            id: "Total Longterm Care, Inc;InnovAge California PACE- Sacramento;Sacramento=DXF001939",
            label:
              "Total Longterm Care, Inc;InnovAge California PACE- Sacramento;Sacramento=DXF001939",
          },
          {
            id: "Total Longterm Care, Inc;Total Longterm Care, Inc (DBA-Innovage California PACE -Inland Empire);San Bernardino=DXF001940",
            label:
              "Total Longterm Care, Inc;Total Longterm Care, Inc (DBA-Innovage California PACE -Inland Empire);San Bernardino=DXF001940",
          },
          {
            id: "TotalCare Walk-In Clinic; ;Chino=DXF000655",
            label: "TotalCare Walk-In Clinic; ;Chino=DXF000655",
          },
          {
            id: "TOWN AND COUNTRY MANOR; ;Santa Ana=DXF002439",
            label: "TOWN AND COUNTRY MANOR; ;Santa Ana=DXF002439",
          },
          {
            id: "Tran Medical, Inc; ;Torrance=DXF000336",
            label: "Tran Medical, Inc; ;Torrance=DXF000336",
          },
          {
            id: "Transcendence Psychological Services; ;Fresno=DXF003267",
            label: "Transcendence Psychological Services; ;Fresno=DXF003267",
          },
          {
            id: "Tri counties Community Action Partnership; ;Willows=DXF003910",
            label:
              "Tri counties Community Action Partnership; ;Willows=DXF003910",
          },
          {
            id: "Tri-City Physical Therapy; ;Fremont=DXF004835",
            label: "Tri-City Physical Therapy; ;Fremont=DXF004835",
          },
          {
            id: "Trinity County Behavioral Health; ;weaverville=DXF002501",
            label: "Trinity County Behavioral Health; ;weaverville=DXF002501",
          },
          {
            id: "TRINITY HOSPITAL; ;weaverville=DXF004891",
            label: "TRINITY HOSPITAL; ;weaverville=DXF004891",
          },
          {
            id: "TRINITY HOSPITAL;TRINITY HOSPITAL;weaverville=DXF004892",
            label: "TRINITY HOSPITAL;TRINITY HOSPITAL;weaverville=DXF004892",
          },
          {
            id: "TRINITY HOSPITAL;TRINITY HOSPITAL LABORATORY;weaverville=DXF004893",
            label:
              "TRINITY HOSPITAL;TRINITY HOSPITAL LABORATORY;weaverville=DXF004893",
          },
          {
            id: "Tripty M Gandhi MD; ;Santa Clara=DXF003324",
            label: "Tripty M Gandhi MD; ;Santa Clara=DXF003324",
          },
          {
            id: "Tri-State Community Health Care; ;Needles=DXF005826",
            label: "Tri-State Community Health Care; ;Needles=DXF005826",
          },
          {
            id: "Tri-State Community Healthcare Center; ;Needles=DXF001896",
            label: "Tri-State Community Healthcare Center; ;Needles=DXF001896",
          },
          {
            id: "Tri-State Community Healthcare Center; ;Needles=DXF005824",
            label: "Tri-State Community Healthcare Center; ;Needles=DXF005824",
          },
          {
            id: "Tri-State Community Healthcare Centre; ;Glendale=DXF001930",
            label: "Tri-State Community Healthcare Centre; ;Glendale=DXF001930",
          },
          {
            id: "TriValley Orthopedic Specialists; ;Pleasanton=DXF001324",
            label: "TriValley Orthopedic Specialists; ;Pleasanton=DXF001324",
          },
          {
            id: "Troy H Niguidula MD INC; ;National City=DXF001472",
            label: "Troy H Niguidula MD INC; ;National City=DXF001472",
          },
          {
            id: "Tulare County Health and Human Services; ;Visalia=DXF002160",
            label:
              "Tulare County Health and Human Services; ;Visalia=DXF002160",
          },
          {
            id: "TUNG HUU NGUYEN MD INC; ;Westminster=DXF003940",
            label: "TUNG HUU NGUYEN MD INC; ;Westminster=DXF003940",
          },
          {
            id: "Turning Point Community Programs; ;Rancho Cordova=DXF002321",
            label:
              "Turning Point Community Programs; ;Rancho Cordova=DXF002321",
          },
          {
            id: "TUSHAR  R MODI MD Inc; ;Modesto=DXF003847",
            label: "TUSHAR  R MODI MD Inc; ;Modesto=DXF003847",
          },
          {
            id: "Twilight Haven; ;Fresno=DXF001530",
            label: "Twilight Haven; ;Fresno=DXF001530",
          },
          {
            id: "UC Davis Health; ;Sacramento=DXF005239",
            label: "UC Davis Health; ;Sacramento=DXF005239",
          },
          {
            id: "UCI Health; ;Orange=DXF005644",
            label: "UCI Health; ;Orange=DXF005644",
          },
          {
            id: "UCLA Health; ;Los Angeles=DXF005190",
            label: "UCLA Health; ;Los Angeles=DXF005190",
          },
          {
            id: "UCR Health; ;Riverside=DXF005157",
            label: "UCR Health; ;Riverside=DXF005157",
          },
          {
            id: "UHS of Rancho Springs, Inc; ;Murrieta=DXF001964",
            label: "UHS of Rancho Springs, Inc; ;Murrieta=DXF001964",
          },
          {
            id: "Ukiah Valley Fire Authority; ;Ukiah=DXF004370",
            label: "Ukiah Valley Fire Authority; ;Ukiah=DXF004370",
          },
          {
            id: "Ultimate Medical Practice Inc; ;Highland=DXF000866",
            label: "Ultimate Medical Practice Inc; ;Highland=DXF000866",
          },
          {
            id: "Uni Health Care Inc; ;Stevenson Ranch=DXF003981",
            label: "Uni Health Care Inc; ;Stevenson Ranch=DXF003981",
          },
          {
            id: "UNICARE COMMUNITY HEALTH CENTER; ;Ontario=DXF001685",
            label: "UNICARE COMMUNITY HEALTH CENTER; ;Ontario=DXF001685",
          },
          {
            id: "UNICARE COMMUNITY HEALTH CENTER, INC.; ;Ontario=DXF002508",
            label: "UNICARE COMMUNITY HEALTH CENTER, INC.; ;Ontario=DXF002508",
          },
          {
            id: "Unique Healthcare For Women; ;Chula Vista=DXF001365",
            label: "Unique Healthcare For Women; ;Chula Vista=DXF001365",
          },
          {
            id: "Unite American Indian Involvement; ;Los Angeles=DXF002773",
            label: "Unite American Indian Involvement; ;Los Angeles=DXF002773",
          },
          {
            id: "United Care Medical Group; ;Orange=DXF004871",
            label: "United Care Medical Group; ;Orange=DXF004871",
          },
          {
            id: "United Health Systems Inc; ;Woodland=DXF004876",
            label: "United Health Systems Inc; ;Woodland=DXF004876",
          },
          {
            id: "United Indian Health Services, Inc.; ;Arcata=DXF004221",
            label: "United Indian Health Services, Inc.; ;Arcata=DXF004221",
          },
          {
            id: "United Medical Doctors; ;Murrieta=DXF001373",
            label: "United Medical Doctors; ;Murrieta=DXF001373",
          },
          {
            id: "United Physicians International, Inc.; ;Cypress=DXF004837",
            label: "United Physicians International, Inc.; ;Cypress=DXF004837",
          },
          {
            id: "United Physicians Network; ;Fresno=DXF004923",
            label: "United Physicians Network; ;Fresno=DXF004923",
          },
          {
            id: "United Way Bay Area; ;San Francisco=DXF003897",
            label: "United Way Bay Area; ;San Francisco=DXF003897",
          },
          {
            id: "United Way Fresno and Madera Counties; ;Fresno=DXF003839",
            label: "United Way Fresno and Madera Counties; ;Fresno=DXF003839",
          },
          {
            id: "United Way Monterey County; ;Salinas=DXF002883",
            label: "United Way Monterey County; ;Salinas=DXF002883",
          },
          {
            id: "United Way of Central Eastern California; ;Bakersfield=DXF004394",
            label:
              "United Way of Central Eastern California; ;Bakersfield=DXF004394",
          },
          {
            id: "United Way of Merced County; ;MERCED=DXF003781",
            label: "United Way of Merced County; ;MERCED=DXF003781",
          },
          {
            id: "United Way of Northern California; ;Redding, CA=DXF003771",
            label: "United Way of Northern California; ;Redding, CA=DXF003771",
          },
          {
            id: "United Way of San Joaquin County; ;Stockton=DXF003969",
            label: "United Way of San Joaquin County; ;Stockton=DXF003969",
          },
          {
            id: "United Way of Santa Cruz County; ;Capitola=DXF004244",
            label: "United Way of Santa Cruz County; ;Capitola=DXF004244",
          },
          {
            id: "United Way of the Wine Country; ;Santa Rosa=DXF005185",
            label: "United Way of the Wine Country; ;Santa Rosa=DXF005185",
          },
          {
            id: "United Ways of California; ;South Pasadena=DXF003846",
            label: "United Ways of California; ;South Pasadena=DXF003846",
          },
          {
            id: "UnitedHealthcare; ;Concord=DXF005447",
            label: "UnitedHealthcare; ;Concord=DXF005447",
          },
          {
            id: "UnitedHealthcare;UHC of California;Concord=DXF005448",
            label: "UnitedHealthcare;UHC of California;Concord=DXF005448",
          },
          {
            id: "UnitedHealthcare;UnitedHealthcare Benefits Plan of California;Concord=DXF005449",
            label:
              "UnitedHealthcare;UnitedHealthcare Benefits Plan of California;Concord=DXF005449",
          },
          {
            id: "Universal Community Health Center; ;Los Angeles=DXF001445",
            label: "Universal Community Health Center; ;Los Angeles=DXF001445",
          },
          {
            id: "Universal Community Health Center; ;Los Angeles=DXF002517",
            label: "Universal Community Health Center; ;Los Angeles=DXF002517",
          },
          {
            id: "Universal Healthcare MSO, LLC dba Sunrise Wellness Care; ;Bakersfield=DXF002672",
            label:
              "Universal Healthcare MSO, LLC dba Sunrise Wellness Care; ;Bakersfield=DXF002672",
          },
          {
            id: "University Muslim Medical Association; ;Los Angeles=DXF002155",
            label:
              "University Muslim Medical Association; ;Los Angeles=DXF002155",
          },
          {
            id: "University of California San Diego Health; ;La Jolla=DXF005191",
            label:
              "University of California San Diego Health; ;La Jolla=DXF005191",
          },
          {
            id: "University Post-Acute Rehab; ;Sacramento=DXF004831",
            label: "University Post-Acute Rehab; ;Sacramento=DXF004831",
          },
          {
            id: "University Vascular Associates; ;Los Angeles=DXF002762",
            label: "University Vascular Associates; ;Los Angeles=DXF002762",
          },
          {
            id: "Upland-Ontario Medical Clinic; ;Ontario=DXF001199",
            label: "Upland-Ontario Medical Clinic; ;Ontario=DXF001199",
          },
          {
            id: "Upland-Ontario Medical Clinic;San Jacinto Family and Urgent Care;San Jacinto=DXF001200",
            label:
              "Upland-Ontario Medical Clinic;San Jacinto Family and Urgent Care;San Jacinto=DXF001200",
          },
          {
            id: "Uptimum; ;Inglewood=DXF002829",
            label: "Uptimum; ;Inglewood=DXF002829",
          },
          {
            id: "Uptimum Medical group and IPA Inc.; ;Inglewood=DXF004582",
            label: "Uptimum Medical group and IPA Inc.; ;Inglewood=DXF004582",
          },
          {
            id: "Urology Specialists of Santa Barbara, Inc.; ;Santa Barbara=DXF001281",
            label:
              "Urology Specialists of Santa Barbara, Inc.; ;Santa Barbara=DXF001281",
          },
          {
            id: "Urrutia Medical Associates Inc; ;Hanford=DXF004655",
            label: "Urrutia Medical Associates Inc; ;Hanford=DXF004655",
          },
          {
            id: "USC Health System; ;Los Angeles=DXF005209",
            label: "USC Health System; ;Los Angeles=DXF005209",
          },
          {
            id: "USC Health System;USC Care Medical Group, Inc.;Los Angeles=DXF005210",
            label:
              "USC Health System;USC Care Medical Group, Inc.;Los Angeles=DXF005210",
          },
          {
            id: "USC Health System;USC Arcadia Hospital;Arcadia=DXF005211",
            label: "USC Health System;USC Arcadia Hospital;Arcadia=DXF005211",
          },
          {
            id: "USC Health System;USC Verdugo Hills Hospital;Glendale=DXF005212",
            label:
              "USC Health System;USC Verdugo Hills Hospital;Glendale=DXF005212",
          },
          {
            id: "USC Health System;Keck Hospital of USC;Los Angeles=DXF005213",
            label:
              "USC Health System;Keck Hospital of USC;Los Angeles=DXF005213",
          },
          {
            id: "USC Health System;USC Kenneth Norris Jr Cancer Hospital;Los Angeles=DXF005214",
            label:
              "USC Health System;USC Kenneth Norris Jr Cancer Hospital;Los Angeles=DXF005214",
          },
          {
            id: "USC Health System;USC Clinical Laboratories, Clinical Sciences Center;Los Angeles=DXF005215",
            label:
              "USC Health System;USC Clinical Laboratories, Clinical Sciences Center;Los Angeles=DXF005215",
          },
          {
            id: "USC Health System;Keck Hospital of USC Huntington Beach Laboratory;Huntington Beach=DXF005216",
            label:
              "USC Health System;Keck Hospital of USC Huntington Beach Laboratory;Huntington Beach=DXF005216",
          },
          {
            id: "USC Health System;Keck Hospital of USC Clinical Lab;Los Angeles=DXF005217",
            label:
              "USC Health System;Keck Hospital of USC Clinical Lab;Los Angeles=DXF005217",
          },
          {
            id: "USC Health System;USC Kenneth Norris Jr. Cancer Hospital Clinical Lab;Los Angeles=DXF005218",
            label:
              "USC Health System;USC Kenneth Norris Jr. Cancer Hospital Clinical Lab;Los Angeles=DXF005218",
          },
          {
            id: "USC Health System;Keck Hospital of Newport Beach Clinic;Newport Beach=DXF005219",
            label:
              "USC Health System;Keck Hospital of Newport Beach Clinic;Newport Beach=DXF005219",
          },
          {
            id: "USC Health System;Keck Hospital of Newport Beach Healthcare Center;Newport Beach=DXF005220",
            label:
              "USC Health System;Keck Hospital of Newport Beach Healthcare Center;Newport Beach=DXF005220",
          },
          {
            id: "USC Health System;USC Clinical Laboratory Pasadena;Pasadena=DXF005221",
            label:
              "USC Health System;USC Clinical Laboratory Pasadena;Pasadena=DXF005221",
          },
          {
            id: "USC Health System;USC Westside Norris Lab;Beverly Hills=DXF005222",
            label:
              "USC Health System;USC Westside Norris Lab;Beverly Hills=DXF005222",
          },
          {
            id: "USC Health System;USC Care Medical Group, Inc. Clinical Lab 1;Los Angeles=DXF005223",
            label:
              "USC Health System;USC Care Medical Group, Inc. Clinical Lab 1;Los Angeles=DXF005223",
          },
          {
            id: "USC Health System;USC Care Medical Group, Inc. Clinical Lab 2;Los Angeles=DXF005224",
            label:
              "USC Health System;USC Care Medical Group, Inc. Clinical Lab 2;Los Angeles=DXF005224",
          },
          {
            id: "USC Health System;USC Immunohistochemistry Laboratory;Los Angeles=DXF005225",
            label:
              "USC Health System;USC Immunohistochemistry Laboratory;Los Angeles=DXF005225",
          },
          {
            id: "USC Health System;USC Breast Cancer Analysis Laboratory;Los Angeles=DXF005226",
            label:
              "USC Health System;USC Breast Cancer Analysis Laboratory;Los Angeles=DXF005226",
          },
          {
            id: "USC Health System;Keck Hospital of USC Blood Gas Laboratory;Los Angeles=DXF005227",
            label:
              "USC Health System;Keck Hospital of USC Blood Gas Laboratory;Los Angeles=DXF005227",
          },
          {
            id: "Uzma nasim md inc; ;Tustin=DXF003665",
            label: "Uzma nasim md inc; ;Tustin=DXF003665",
          },
          {
            id: "Vacaville Healthcare Inc; ;Vacaville=DXF004987",
            label: "Vacaville Healthcare Inc; ;Vacaville=DXF004987",
          },
          {
            id: "Valencia Pediatrics Associates; ;Valencia=DXF004057",
            label: "Valencia Pediatrics Associates; ;Valencia=DXF004057",
          },
          {
            id: "Valentine Medical Clinic; ;Riverside=DXF000801",
            label: "Valentine Medical Clinic; ;Riverside=DXF000801",
          },
          {
            id: "Valentine Medical Clinic; ;Riverside=DXF002475",
            label: "Valentine Medical Clinic; ;Riverside=DXF002475",
          },
          {
            id: "Valerie C Altavas MD AMC; ;National City=DXF001925",
            label: "Valerie C Altavas MD AMC; ;National City=DXF001925",
          },
          {
            id: "Valerie C. Altavas MD AMC; ;National City=DXF001943",
            label: "Valerie C. Altavas MD AMC; ;National City=DXF001943",
          },
          {
            id: "valley care home; ;Visalia=DXF005162",
            label: "valley care home; ;Visalia=DXF005162",
          },
          {
            id: "Valley Children's Hospital; ;Madera=DXF004548",
            label: "Valley Children's Hospital; ;Madera=DXF004548",
          },
          {
            id: "Valley Children's Hospital;Valley Children's Medical Group;Madera=DXF004557",
            label:
              "Valley Children's Hospital;Valley Children's Medical Group;Madera=DXF004557",
          },
          {
            id: "Valley Children's Medical Group; ;Madera=DXF004558",
            label: "Valley Children's Medical Group; ;Madera=DXF004558",
          },
          {
            id: "valley community healthcare; ;North Hollywood=DXF001411",
            label: "valley community healthcare; ;North Hollywood=DXF001411",
          },
          {
            id: "Valley Convalescent; ;Bakersfield=DXF005735",
            label: "Valley Convalescent; ;Bakersfield=DXF005735",
          },
          {
            id: "Valley Diabetes & Obesity; ;Modesto=DXF001611",
            label: "Valley Diabetes & Obesity; ;Modesto=DXF001611",
          },
          {
            id: "Valley Health Team, Inc; ;San Joaquin=DXF000402",
            label: "Valley Health Team, Inc; ;San Joaquin=DXF000402",
          },
          {
            id: "Valley MRI and Radiology, Inc; ;Stockton=DXF002323",
            label: "Valley MRI and Radiology, Inc; ;Stockton=DXF002323",
          },
          {
            id: "Valley Oak Family Practice; ;Ojai=DXF002163",
            label: "Valley Oak Family Practice; ;Ojai=DXF002163",
          },
          {
            id: "Valley Oak Family Practice; ;Ojai CA=DXF005509",
            label: "Valley Oak Family Practice; ;Ojai CA=DXF005509",
          },
          {
            id: "Valley Oak Family Practice Medical Group; ;Ojai=DXF001138",
            label: "Valley Oak Family Practice Medical Group; ;Ojai=DXF001138",
          },
          {
            id: "valley oak pediatric associates; ;Modesto=DXF000194",
            label: "valley oak pediatric associates; ;Modesto=DXF000194",
          },
          {
            id: "Valley Pediatric Medical Group; ;Encino=DXF004273",
            label: "Valley Pediatric Medical Group; ;Encino=DXF004273",
          },
          {
            id: "Valley Pediatrics; ;Madera=DXF004867",
            label: "Valley Pediatrics; ;Madera=DXF004867",
          },
          {
            id: "Valley Physicians Network, Inc.; ;Murrieta=DXF000716",
            label: "Valley Physicians Network, Inc.; ;Murrieta=DXF000716",
          },
          {
            id: "Valley Radiology Consultants Medical Group; ;Poway=DXF002378",
            label:
              "Valley Radiology Consultants Medical Group; ;Poway=DXF002378",
          },
          {
            id: "Valley Radiology Consultants Medical Group;VRC Holdings LLC;Escondido=DXF002379",
            label:
              "Valley Radiology Consultants Medical Group;VRC Holdings LLC;Escondido=DXF002379",
          },
          {
            id: "Valley Radiology Consultants Medical Group;VRC Holdings LLC;Escondido=DXF002380",
            label:
              "Valley Radiology Consultants Medical Group;VRC Holdings LLC;Escondido=DXF002380",
          },
          {
            id: "Valley Radiology Medical Associates, Inc.; ;San Jose=DXF004528",
            label:
              "Valley Radiology Medical Associates, Inc.; ;San Jose=DXF004528",
          },
          {
            id: "Valley View Wellness Medical Center; ;Garden Grove=DXF004330",
            label:
              "Valley View Wellness Medical Center; ;Garden Grove=DXF004330",
          },
          {
            id: "Vanessa Zamora; ;Escondido=DXF000292",
            label: "Vanessa Zamora; ;Escondido=DXF000292",
          },
          {
            id: "Vanguard Medical Corporation; ;Shafter=DXF002721",
            label: "Vanguard Medical Corporation; ;Shafter=DXF002721",
          },
          {
            id: "Vascular and Interventional Specialists of Orange County; ;Orange=DXF000844",
            label:
              "Vascular and Interventional Specialists of Orange County; ;Orange=DXF000844",
          },
          {
            id: "Venice Family Clinic; ;Venice=DXF001302",
            label: "Venice Family Clinic; ;Venice=DXF001302",
          },
          {
            id: "Ventura County Radiation Oncology Medical Group, Inc.; ;Oxnard=DXF001837",
            label:
              "Ventura County Radiation Oncology Medical Group, Inc.; ;Oxnard=DXF001837",
          },
          {
            id: "Ventura Dermatology Medical Clinic Inc; ;ventura=DXF001893",
            label: "Ventura Dermatology Medical Clinic Inc; ;ventura=DXF001893",
          },
          {
            id: "Ventura Pain & Spine Physicians; ;ventura=DXF001747",
            label: "Ventura Pain & Spine Physicians; ;ventura=DXF001747",
          },
          {
            id: "Ventura Post Acute; ;ventura=DXF002978",
            label: "Ventura Post Acute; ;ventura=DXF002978",
          },
          {
            id: "Ventura Pulmonary and Critical Care Medical Group; ;ventura=DXF001870",
            label:
              "Ventura Pulmonary and Critical Care Medical Group; ;ventura=DXF001870",
          },
          {
            id: "Vera Whole Health, Inc; ;Seattle=DXF000450",
            label: "Vera Whole Health, Inc; ;Seattle=DXF000450",
          },
          {
            id: "Vera Whole Health, Inc;Sarat Chandra Raman, M.D., Inc.;Seattle=DXF000451",
            label:
              "Vera Whole Health, Inc;Sarat Chandra Raman, M.D., Inc.;Seattle=DXF000451",
          },
          {
            id: "Vermont Healthcare Center, LLC; ;Torrance=DXF003633",
            label: "Vermont Healthcare Center, LLC; ;Torrance=DXF003633",
          },
          {
            id: "Vermont Healthcare Center,LLC; ;Torrance=DXF003722",
            label: "Vermont Healthcare Center,LLC; ;Torrance=DXF003722",
          },
          {
            id: "Vernon Gregory Phillips; ;Imperial Beach=DXF001456",
            label: "Vernon Gregory Phillips; ;Imperial Beach=DXF001456",
          },
          {
            id: "VersaCare Emergency Medical Services, Inc; ;Orangevale=DXF004270",
            label:
              "VersaCare Emergency Medical Services, Inc; ;Orangevale=DXF004270",
          },
          {
            id: "Via Care Community Health Center; ;Los Angeles=DXF001226",
            label: "Via Care Community Health Center; ;Los Angeles=DXF001226",
          },
          {
            id: "Via Care Community Health Center;Via Care Community Health Center;Los Angeles=DXF001227",
            label:
              "Via Care Community Health Center;Via Care Community Health Center;Los Angeles=DXF001227",
          },
          {
            id: "Vibra hospital of Sacramento, LLC; ;FOLSOM=DXF004714",
            label: "Vibra hospital of Sacramento, LLC; ;FOLSOM=DXF004714",
          },
          {
            id: "Vibra Hospital of san Diego, LLC d/b/a Select Specialty Hospital - San Diego; ;San Diego=DXF005132",
            label:
              "Vibra Hospital of san Diego, LLC d/b/a Select Specialty Hospital - San Diego; ;San Diego=DXF005132",
          },
          {
            id: "Victor Community Support Services; ;Chico=DXF002361",
            label: "Victor Community Support Services; ;Chico=DXF002361",
          },
          {
            id: "Victor Valley Global Medical Center; ;victorville=DXF004029",
            label:
              "Victor Valley Global Medical Center; ;victorville=DXF004029",
          },
          {
            id: "Victor Valley Global Medical Center;Victor Valley Global Medical Center Hospital Laboratory;victorville=DXF004030",
            label:
              "Victor Valley Global Medical Center;Victor Valley Global Medical Center Hospital Laboratory;victorville=DXF004030",
          },
          {
            id: "Vida Family Practice PC; ;Glendale=DXF003730",
            label: "Vida Family Practice PC; ;Glendale=DXF003730",
          },
          {
            id: "Vien D Doan, DO; ;Riverside=DXF000805",
            label: "Vien D Doan, DO; ;Riverside=DXF000805",
          },
          {
            id: "Viet Q Mai, MD LLC; ;Covina=DXF005642",
            label: "Viet Q Mai, MD LLC; ;Covina=DXF005642",
          },
          {
            id: "Viet Trong Dao, MD; ;San Diego=DXF001524",
            label: "Viet Trong Dao, MD; ;San Diego=DXF001524",
          },
          {
            id: "Vietnam Veterans of San Diego dba Veterans Village of San Diego; ;San Diego=DXF003751",
            label:
              "Vietnam Veterans of San Diego dba Veterans Village of San Diego; ;San Diego=DXF003751",
          },
          {
            id: "Vijay Kumar MD Medical Corporation; ;Moorpark=DXF003793",
            label: "Vijay Kumar MD Medical Corporation; ;Moorpark=DXF003793",
          },
          {
            id: "Vincent Tubiolo, M.D., Inc; ;Santa Barbara=DXF000664",
            label: "Vincent Tubiolo, M.D., Inc; ;Santa Barbara=DXF000664",
          },
          {
            id: "VIP Community Mental Health Center; ;Los Angeles=DXF004447",
            label: "VIP Community Mental Health Center; ;Los Angeles=DXF004447",
          },
          {
            id: "Virgil Rehabilitation & Skilled Nursing Center; ;Los Angeles=DXF001864",
            label:
              "Virgil Rehabilitation & Skilled Nursing Center; ;Los Angeles=DXF001864",
          },
          {
            id: "Visalia Family Practice; ;Visalia=DXF002959",
            label: "Visalia Family Practice; ;Visalia=DXF002959",
          },
          {
            id: "Vision Service Plan; ;Rancho Cordova=DXF002671",
            label: "Vision Service Plan; ;Rancho Cordova=DXF002671",
          },
          {
            id: "Vista Community Clinic; ;vista=DXF000073",
            label: "Vista Community Clinic; ;vista=DXF000073",
          },
          {
            id: "Vista Del Mar Medical Group; ;Oxnard=DXF000742",
            label: "Vista Del Mar Medical Group; ;Oxnard=DXF000742",
          },
          {
            id: "Vista Del Mar Medical Group;VISTA DEL MAR MEDICAL GROUP INC Ventura;ventura=DXF000860",
            label:
              "Vista Del Mar Medical Group;VISTA DEL MAR MEDICAL GROUP INC Ventura;ventura=DXF000860",
          },
          {
            id: "Vista Del Mar Medical Group;VISTA DEL MAR MEDICAL GROUP INC CAMARILLO;CANARUKKI=DXF000861",
            label:
              "Vista Del Mar Medical Group;VISTA DEL MAR MEDICAL GROUP INC CAMARILLO;CANARUKKI=DXF000861",
          },
          {
            id: "Vista Del Mar Medical Group;VISTA DEL MAR MEDICAL GROUP INC;Santa Paula=DXF000862",
            label:
              "Vista Del Mar Medical Group;VISTA DEL MAR MEDICAL GROUP INC;Santa Paula=DXF000862",
          },
          {
            id: "Vista Family Health Center; ;vista=DXF000284",
            label: "Vista Family Health Center; ;vista=DXF000284",
          },
          {
            id: "Vista Pacifica Enterprises, Inc.; ;Jurupa valley=DXF005040",
            label: "Vista Pacifica Enterprises, Inc.; ;Jurupa valley=DXF005040",
          },
          {
            id: "Vista Pacifica Enterprises, Inc.;Vista Pacifica Center;Jurupa valley=DXF005042",
            label:
              "Vista Pacifica Enterprises, Inc.;Vista Pacifica Center;Jurupa valley=DXF005042",
          },
          {
            id: "Vista Pacifica Enterprises, Inc.;Vista Pacifica Convalescent Hospital;Jurupa valley=DXF005043",
            label:
              "Vista Pacifica Enterprises, Inc.;Vista Pacifica Convalescent Hospital;Jurupa valley=DXF005043",
          },
          {
            id: "Vitali Aizin MD Inc; ;San Diego=DXF002199",
            label: "Vitali Aizin MD Inc; ;San Diego=DXF002199",
          },
          {
            id: "Vitreo-Retinal Medical Group, Inc.; ;Sacramento=DXF001465",
            label: "Vitreo-Retinal Medical Group, Inc.; ;Sacramento=DXF001465",
          },
          {
            id: "Vitreo-Retinal Medical Group, Inc.;Northern California Advanced Surgery Center LP;Sacramento=DXF001466",
            label:
              "Vitreo-Retinal Medical Group, Inc.;Northern California Advanced Surgery Center LP;Sacramento=DXF001466",
          },
          {
            id: "Vituity; ;Emeryville=DXF000303",
            label: "Vituity; ;Emeryville=DXF000303",
          },
          {
            id: "Vituity;California Emergency Physicians Medical Group, A Professional Corporation;Emeryville=DXF000356",
            label:
              "Vituity;California Emergency Physicians Medical Group, A Professional Corporation;Emeryville=DXF000356",
          },
          {
            id: "Vituity;CEP America - Anesthesia, PC;Emeryville=DXF000357",
            label: "Vituity;CEP America - Anesthesia, PC;Emeryville=DXF000357",
          },
          {
            id: "Vituity;CEP America - AUC, PC;Emeryville=DXF000358",
            label: "Vituity;CEP America - AUC, PC;Emeryville=DXF000358",
          },
          {
            id: "Vituity;CEP America - Intensivists , PC;Emeryville=DXF000359",
            label:
              "Vituity;CEP America - Intensivists , PC;Emeryville=DXF000359",
          },
          {
            id: "Vituity;CEP America- Neurology, PC;Emeryville=DXF000360",
            label: "Vituity;CEP America- Neurology, PC;Emeryville=DXF000360",
          },
          {
            id: "Vituity;CEP America-California;Emeryville=DXF000361",
            label: "Vituity;CEP America-California;Emeryville=DXF000361",
          },
          {
            id: "Vituity;CEP America-Psychiatry, PC;Emeryville=DXF000362",
            label: "Vituity;CEP America-Psychiatry, PC;Emeryville=DXF000362",
          },
          {
            id: "Vituity;Galen Inpatient Physicians, PC;Emeryville=DXF000363",
            label:
              "Vituity;Galen Inpatient Physicians, PC;Emeryville=DXF000363",
          },
          {
            id: "Vituity;MedAmerica Physician Solutions, PC;Emeryville=DXF000364",
            label:
              "Vituity;MedAmerica Physician Solutions, PC;Emeryville=DXF000364",
          },
          {
            id: "Vituity;Menalam Health Services, PC;Emeryville=DXF000365",
            label: "Vituity;Menalam Health Services, PC;Emeryville=DXF000365",
          },
          {
            id: "Vituity;Vituity - Primary Care Glendale, PC;Emeryville=DXF000366",
            label:
              "Vituity;Vituity - Primary Care Glendale, PC;Emeryville=DXF000366",
          },
          {
            id: "Vituity;Vituity - Urgent Care Services, PC;Emeryville=DXF000367",
            label:
              "Vituity;Vituity - Urgent Care Services, PC;Emeryville=DXF000367",
          },
          {
            id: "Vituity;Vituity Hospitalists, PC;Emeryville=DXF000368",
            label: "Vituity;Vituity Hospitalists, PC;Emeryville=DXF000368",
          },
          {
            id: "Vituity;Vituity-California Observation Services PC;Emeryville=DXF000369",
            label:
              "Vituity;Vituity-California Observation Services PC;Emeryville=DXF000369",
          },
          {
            id: "Vituity;California Emergency Physicians;Emeryville=DXF000382",
            label:
              "Vituity;California Emergency Physicians;Emeryville=DXF000382",
          },
          {
            id: "Vituity; ;Palm Springs=DXF001085",
            label: "Vituity; ;Palm Springs=DXF001085",
          },
          {
            id: "Vituity;Vituity Physician Services PC;none PD entry=DXF005412",
            label:
              "Vituity;Vituity Physician Services PC;none PD entry=DXF005412",
          },
          {
            id: "Vituity;Vituity Healthcare Services PC;none PD entry=DXF005413",
            label:
              "Vituity;Vituity Healthcare Services PC;none PD entry=DXF005413",
          },
          {
            id: "Vituity;Relevo Health PC;none PD entry=DXF005414",
            label: "Vituity;Relevo Health PC;none PD entry=DXF005414",
          },
          {
            id: "Vituity;Vituity Medical Services PC;none PD entry=DXF005415",
            label:
              "Vituity;Vituity Medical Services PC;none PD entry=DXF005415",
          },
          {
            id: "Vivalon; ;San Rafael=DXF002885",
            label: "Vivalon; ;San Rafael=DXF002885",
          },
          {
            id: "VM Medical Group; ;Westminster=DXF002943",
            label: "VM Medical Group; ;Westminster=DXF002943",
          },
          {
            id: "VNAcare; ;Ontario=DXF001024",
            label: "VNAcare; ;Ontario=DXF001024",
          },
          {
            id: "VNAcare; ;Ontario=DXF001034",
            label: "VNAcare; ;Ontario=DXF001034",
          },
          {
            id: "VNAcare; ;Ontario=DXF005504",
            label: "VNAcare; ;Ontario=DXF005504",
          },
          {
            id: "Vo Medical Center; ;EL CENTRO=DXF000899",
            label: "Vo Medical Center; ;EL CENTRO=DXF000899",
          },
          {
            id: "Volunteers of America Southwest; ;San Diego=DXF002616",
            label: "Volunteers of America Southwest; ;San Diego=DXF002616",
          },
          {
            id: "VyncaCare; ;San Francisco=DXF003458",
            label: "VyncaCare; ;San Francisco=DXF003458",
          },
          {
            id: "W D W Joint Venture; ;Downey=DXF002907",
            label: "W D W Joint Venture; ;Downey=DXF002907",
          },
          {
            id: "Walsh Medical Group, A Professional Corporation; ;Anaheim=DXF004676",
            label:
              "Walsh Medical Group, A Professional Corporation; ;Anaheim=DXF004676",
          },
          {
            id: "Walsh Medical Group, A Professional Corporation;Walsh Medical Group;Anaheim=DXF004678",
            label:
              "Walsh Medical Group, A Professional Corporation;Walsh Medical Group;Anaheim=DXF004678",
          },
          {
            id: "Wandisan and Rosete Medical Group; ;Tracy=DXF004479",
            label: "Wandisan and Rosete Medical Group; ;Tracy=DXF004479",
          },
          {
            id: "Washington Hospital Healthcare System; ;Fremont=DXF000957",
            label: "Washington Hospital Healthcare System; ;Fremont=DXF000957",
          },
          {
            id: "Washington Hospital Healthcare System;Washington Township Medical Foundation;Fremont=DXF001160",
            label:
              "Washington Hospital Healthcare System;Washington Township Medical Foundation;Fremont=DXF001160",
          },
          {
            id: "Watsonville Community Hospital.; ;Watsonville=DXF005268",
            label: "Watsonville Community Hospital.; ;Watsonville=DXF005268",
          },
          {
            id: "Watts Healthcare Corporation; ;Los Angeles=DXF001451",
            label: "Watts Healthcare Corporation; ;Los Angeles=DXF001451",
          },
          {
            id: "Watts Healthcare Corporation; ;Los Angeles=DXF004276",
            label: "Watts Healthcare Corporation; ;Los Angeles=DXF004276",
          },
          {
            id: "Wave Psychiatric Group, PC; ;Los Angeles=DXF002318",
            label: "Wave Psychiatric Group, PC; ;Los Angeles=DXF002318",
          },
          {
            id: "WEA CA, PC; ;SCOTTS VALLEY=DXF004395",
            label: "WEA CA, PC; ;SCOTTS VALLEY=DXF004395",
          },
          {
            id: "WEA CA, PC;Wellness and Equity Alliance,  LLC;SCOTTS VALLEY=DXF004414",
            label:
              "WEA CA, PC;Wellness and Equity Alliance,  LLC;SCOTTS VALLEY=DXF004414",
          },
          {
            id: "Weiss Orthopaedics; ;Sonoma=DXF004677",
            label: "Weiss Orthopaedics; ;Sonoma=DXF004677",
          },
          {
            id: "Welcome Health; ;Whittier=DXF005577",
            label: "Welcome Health; ;Whittier=DXF005577",
          },
          {
            id: "Welcome Health Medical Group; ;Long Beach=DXF003714",
            label: "Welcome Health Medical Group; ;Long Beach=DXF003714",
          },
          {
            id: "Wellfleet Insurance Company; ;Fort Wayne=DXF001895",
            label: "Wellfleet Insurance Company; ;Fort Wayne=DXF001895",
          },
          {
            id: "WellPsyche Medical Group; ;Los Angeles=DXF000171",
            label: "WellPsyche Medical Group; ;Los Angeles=DXF000171",
          },
          {
            id: "WellPsyche Medical Group;Adel Mostafavi MD Inc;Los Angeles=DXF000172",
            label:
              "WellPsyche Medical Group;Adel Mostafavi MD Inc;Los Angeles=DXF000172",
          },
          {
            id: "WellPsyche Medical Group;Medi Psych Services Inc;Los Angeles=DXF000173",
            label:
              "WellPsyche Medical Group;Medi Psych Services Inc;Los Angeles=DXF000173",
          },
          {
            id: "WellSpace Health; ;Sacramento=DXF002910",
            label: "WellSpace Health; ;Sacramento=DXF002910",
          },
          {
            id: "Wellspring Family Medical Group of Ventura County; ;ventura=DXF004268",
            label:
              "Wellspring Family Medical Group of Ventura County; ;ventura=DXF004268",
          },
          {
            id: "West Coast Ear, Nose & Throat; ;SIMI VALLEY=DXF002180",
            label: "West Coast Ear, Nose & Throat; ;SIMI VALLEY=DXF002180",
          },
          {
            id: "West Coast Pulmonary Physicians Inc; ;Oxnard=DXF000589",
            label: "West Coast Pulmonary Physicians Inc; ;Oxnard=DXF000589",
          },
          {
            id: "West County Health Centers, Inc; ;Guerneville=DXF002878",
            label: "West County Health Centers, Inc; ;Guerneville=DXF002878",
          },
          {
            id: "West Oakland Health; ;Oakland=DXF003752",
            label: "West Oakland Health; ;Oakland=DXF003752",
          },
          {
            id: "West Side Health Care District; ;Taft=DXF002599",
            label: "West Side Health Care District; ;Taft=DXF002599",
          },
          {
            id: "West Tower Pediatrics; ;Los Angeles=DXF004290",
            label: "West Tower Pediatrics; ;Los Angeles=DXF004290",
          },
          {
            id: "WestCoast Children's Clinic; ;Oakland=DXF003234",
            label: "WestCoast Children's Clinic; ;Oakland=DXF003234",
          },
          {
            id: "Western Diagnostic Services Laboratory, LLC; ;San Luis Obispo=DXF001147",
            label:
              "Western Diagnostic Services Laboratory, LLC; ;San Luis Obispo=DXF001147",
          },
          {
            id: "Western Health Advantage; ;Sacramento=DXF000229",
            label: "Western Health Advantage; ;Sacramento=DXF000229",
          },
          {
            id: "Western Home Care; ;Buena Park=DXF003668",
            label: "Western Home Care; ;Buena Park=DXF003668",
          },
          {
            id: "Western Horizon Medical group; ;DESERT HOT SPRINGS=DXF000929",
            label:
              "Western Horizon Medical group; ;DESERT HOT SPRINGS=DXF000929",
          },
          {
            id: "Western Sierra Medical Clinic, Inc.; ;Grass Valley=DXF002778",
            label:
              "Western Sierra Medical Clinic, Inc.; ;Grass Valley=DXF002778",
          },
          {
            id: "Westside Family Health Center; ;Culver City=DXF000527",
            label: "Westside Family Health Center; ;Culver City=DXF000527",
          },
          {
            id: "Westside Medical Associates of Los Angeles; ;Beverly Hills=DXF000147",
            label:
              "Westside Medical Associates of Los Angeles; ;Beverly Hills=DXF000147",
          },
          {
            id: "Westwood Post Acute; ;San Jose=DXF004898",
            label: "Westwood Post Acute; ;San Jose=DXF004898",
          },
          {
            id: "White Memorial Community Health Center; ;Los Angeles=DXF002220",
            label:
              "White Memorial Community Health Center; ;Los Angeles=DXF002220",
          },
          {
            id: "WHITTIER NURSING AND WELLNESS CENTER; ;Whittier=DXF003939",
            label: "WHITTIER NURSING AND WELLNESS CENTER; ;Whittier=DXF003939",
          },
          {
            id: "Whole Care Solutions; ;Burbank=DXF002459",
            label: "Whole Care Solutions; ;Burbank=DXF002459",
          },
          {
            id: "Whole Family Health PC; ;Glendale=DXF002478",
            label: "Whole Family Health PC; ;Glendale=DXF002478",
          },
          {
            id: "Whole Family Health PC;WHOLE FAMILY HEALTH PC LARCHMONT;Los Angeles=DXF002479",
            label:
              "Whole Family Health PC;WHOLE FAMILY HEALTH PC LARCHMONT;Los Angeles=DXF002479",
          },
          {
            id: "WILLIAM BICHA MD; ;Bakersfield=DXF002464",
            label: "WILLIAM BICHA MD; ;Bakersfield=DXF002464",
          },
          {
            id: "WILLIAM BICHA MD;WILLIAM BICHAI MD;Bakersfield=DXF002717",
            label: "WILLIAM BICHA MD;WILLIAM BICHAI MD;Bakersfield=DXF002717",
          },
          {
            id: "WILLIAM C. KOONCE, M.D.; ;Santa Barbara=DXF001692",
            label: "WILLIAM C. KOONCE, M.D.; ;Santa Barbara=DXF001692",
          },
          {
            id: "William J. Heringer, M.D., A Professional Medical Corporation; ;Solvang=DXF000590",
            label:
              "William J. Heringer, M.D., A Professional Medical Corporation; ;Solvang=DXF000590",
          },
          {
            id: "william radentz; ;Murrieta=DXF000279",
            label: "william radentz; ;Murrieta=DXF000279",
          },
          {
            id: "William Tsai, DO, Inc; ;Upland=DXF001502",
            label: "William Tsai, DO, Inc; ;Upland=DXF001502",
          },
          {
            id: "Willie D Lu, md; ;Los Gatos=DXF001643",
            label: "Willie D Lu, md; ;Los Gatos=DXF001643",
          },
          {
            id: "Wilmington Community Clinic; ;Wilmington=DXF001986",
            label: "Wilmington Community Clinic; ;Wilmington=DXF001986",
          },
          {
            id: "Wilmington Urgent Care and Family Clinic; ;Wilmington=DXF003531",
            label:
              "Wilmington Urgent Care and Family Clinic; ;Wilmington=DXF003531",
          },
          {
            id: "Windflower Holdings LLC DBA Rocky Point Care Center; ;Lakeport=DXF004705",
            label:
              "Windflower Holdings LLC DBA Rocky Point Care Center; ;Lakeport=DXF004705",
          },
          {
            id: "Windsor Cypress Gardens; ;Riverside=DXF004924",
            label: "Windsor Cypress Gardens; ;Riverside=DXF004924",
          },
          {
            id: "Winters Healthcare Foundation, Inc.; ;Winters=DXF003276",
            label: "Winters Healthcare Foundation, Inc.; ;Winters=DXF003276",
          },
          {
            id: "WISE & Healthy Aging; ;Santa Monica=DXF003331",
            label: "WISE & Healthy Aging; ;Santa Monica=DXF003331",
          },
          {
            id: "Wivina T Urbano MD Inc (dba WT Urbano Medical Corp); ;Tracy, CA=DXF000495",
            label:
              "Wivina T Urbano MD Inc (dba WT Urbano Medical Corp); ;Tracy, CA=DXF000495",
          },
          {
            id: "Woll Dermatology; ;MONTCLAIR=DXF000643",
            label: "Woll Dermatology; ;MONTCLAIR=DXF000643",
          },
          {
            id: "Women's Ob/Gyn; ;Santa Rosa=DXF000577",
            label: "Women's Ob/Gyn; ;Santa Rosa=DXF000577",
          },
          {
            id: "Wonderful Center for Health Innovation; ;Lost Hills=DXF001161",
            label:
              "Wonderful Center for Health Innovation; ;Lost Hills=DXF001161",
          },
          {
            id: "Woodlands Healthcare Center; ;Los Gatos=DXF005119",
            label: "Woodlands Healthcare Center; ;Los Gatos=DXF005119",
          },
          {
            id: "Woods Health Services; ;La Verne=DXF002455",
            label: "Woods Health Services; ;La Verne=DXF002455",
          },
          {
            id: "www.buttecounty.net; ;Oroville=DXF003334",
            label: "www.buttecounty.net; ;Oroville=DXF003334",
          },
          {
            id: "Wynk's Corporation; ;San Gabriel=DXF004550",
            label: "Wynk's Corporation; ;San Gabriel=DXF004550",
          },
          {
            id: "Wynk's Corporation;Wynk's Clinic;San Gabriel=DXF004551",
            label: "Wynk's Corporation;Wynk's Clinic;San Gabriel=DXF004551",
          },
          {
            id: "xCures; ;Oakland=DXF003364",
            label: "xCures; ;Oakland=DXF003364",
          },
          {
            id: "yasmeen gangani MD; ;Morgan Hill=DXF004549",
            label: "yasmeen gangani MD; ;Morgan Hill=DXF004549",
          },
          {
            id: "Yolo County HHSA; ;Woodland=DXF000952",
            label: "Yolo County HHSA; ;Woodland=DXF000952",
          },
          {
            id: "Yolo Healthy Aging Alliance; ;Davis=DXF005110",
            label: "Yolo Healthy Aging Alliance; ;Davis=DXF005110",
          },
          {
            id: "Yolo Wayfarer Center Christian Mission; ;Woodland=DXF004397",
            label:
              "Yolo Wayfarer Center Christian Mission; ;Woodland=DXF004397",
          },
          {
            id: "Yosemite Pathology Medical Group; ;Modesto=DXF002343",
            label: "Yosemite Pathology Medical Group; ;Modesto=DXF002343",
          },
          {
            id: "Youth Recovery Connections; ;Hollister=DXF004879",
            label: "Youth Recovery Connections; ;Hollister=DXF004879",
          },
          {
            id: "Yun Ying Shi, MD; ;Burlingame=DXF001821",
            label: "Yun Ying Shi, MD; ;Burlingame=DXF001821",
          },
          {
            id: "Yvonne Dsylva MD Inc; ;Corona=DXF003472",
            label: "Yvonne Dsylva MD Inc; ;Corona=DXF003472",
          },
          {
            id: "Zosima B Carino-Gateb M.D., Inc; ;Indio=DXF002167",
            label: "Zosima B Carino-Gateb M.D., Inc; ;Indio=DXF002167",
          },
        ]}
        onSelect={({ id, label }) => {
          setUser(id);
          runValidationTasks("User", id);
        }}
        onClear={() => {
          setUser("");
        }}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              User: value,
            };
            const result = onChange(modelFields);
            value = result?.User ?? value;
          }
          if (errors.User?.hasError) {
            runValidationTasks("User", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("User", User)}
        errorMessage={errors.User?.errorMessage}
        hasError={errors.User?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "User")}
      ></Autocomplete>
      <Text
        children="If your organization is not registered, please visit the Home Data Exchange Framework Signing Portal (https://signdxf.powerappsportals.com/)."
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Text>
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
