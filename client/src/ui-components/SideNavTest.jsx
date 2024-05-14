/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import MyIcon from "./MyIcon";
import { Flex, Text } from "@aws-amplify/ui-react";
import NavButton from "./NavButton";
export default function SideNavTest(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        MyIcon: {},
        ArrowContainer: {},
        NavButton49967946: {},
        NavButton49967953: {},
        NavButton49967960: {},
        NavButton49967967: {},
        NavButton49967974: {},
        NavButton49967981: {},
        NavButton49967988: {},
        NavButton49967995: {},
        NavButtonContainer: {},
        "User Name": {},
        "Register DxF Participant": {},
        NavText: {},
        label: {},
        Button: {},
        ButtonContainer: {},
        SideNavTest: {},
      },
      variantValues: { open: "true", size: "desktop" },
    },
    {
      overrides: {
        MyIcon: { type: "arrow_right" },
        ArrowContainer: {},
        NavButton49967946: { text: "False" },
        NavButton49967953: { text: "False" },
        NavButton49967960: { text: "False" },
        NavButton49967967: { text: "False" },
        NavButton49967974: { text: "False" },
        NavButton49967981: { text: "False" },
        NavButton49967988: { text: "False" },
        NavButton49967995: { text: "False" },
        NavButtonContainer: {},
        "User Name": {},
        "Register DxF Participant": {},
        NavText: { display: "none" },
        label: {},
        Button: {},
        ButtonContainer: {},
        SideNavTest: {},
      },
      variantValues: { open: "false", size: "desktop" },
    },
    {
      overrides: {
        MyIcon: { type: "close" },
        ArrowContainer: {},
        NavButton49967946: {},
        NavButton49967953: {},
        NavButton49967960: {},
        NavButton49967967: {},
        NavButton49967974: {},
        NavButton49967981: {},
        NavButton49967988: {},
        NavButton49967995: {},
        NavButtonContainer: {},
        "User Name": {},
        "Register DxF Participant": {},
        NavText: {},
        label: {},
        Button: {},
        ButtonContainer: { display: "flex" },
        SideNavTest: {},
      },
      variantValues: { open: "true", size: "mobile" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="12px"
      direction="column"
      width="unset"
      height="654px"
      justifyContent="flex-start"
      alignItems="flex-end"
      position="relative"
      border="1px SOLID rgba(220,222,224,1)"
      padding="13px 15px 13px 15px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "SideNavTest")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="42px"
        height="42px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="3px"
        padding="5px 5px 5px 5px"
        display="flex"
        {...getOverrideProps(overrides, "ArrowContainer")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="arrow_left"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
      </Flex>
      <Flex
        gap="9px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "NavButtonContainer")}
      >
        <NavButton
          display="flex"
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="2px 2px 2px 2px"
          selected="True"
          text="True"
          {...getOverrideProps(overrides, "NavButton49967946")}
        ></NavButton>
        <NavButton
          display="flex"
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="2px 2px 2px 2px"
          backgroundColor="rgba(255,255,255,1)"
          selected="False"
          text="True"
          {...getOverrideProps(overrides, "NavButton49967953")}
        ></NavButton>
        <NavButton
          display="flex"
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="2px 2px 2px 2px"
          backgroundColor="rgba(255,255,255,1)"
          selected="False"
          text="True"
          {...getOverrideProps(overrides, "NavButton49967960")}
        ></NavButton>
        <NavButton
          display="flex"
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="2px 2px 2px 2px"
          backgroundColor="rgba(255,255,255,1)"
          selected="False"
          text="True"
          {...getOverrideProps(overrides, "NavButton49967967")}
        ></NavButton>
        <NavButton
          display="flex"
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="2px 2px 2px 2px"
          backgroundColor="rgba(255,255,255,1)"
          selected="False"
          text="True"
          {...getOverrideProps(overrides, "NavButton49967974")}
        ></NavButton>
        <NavButton
          display="flex"
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="2px 2px 2px 2px"
          backgroundColor="rgba(255,255,255,1)"
          selected="False"
          text="True"
          {...getOverrideProps(overrides, "NavButton49967981")}
        ></NavButton>
        <NavButton
          display="flex"
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="2px 2px 2px 2px"
          backgroundColor="rgba(255,255,255,1)"
          selected="False"
          text="True"
          {...getOverrideProps(overrides, "NavButton49967988")}
        ></NavButton>
        <NavButton
          display="flex"
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="2px 2px 2px 2px"
          backgroundColor="rgba(255,255,255,1)"
          selected="False"
          text="True"
          {...getOverrideProps(overrides, "NavButton49967995")}
        ></NavButton>
      </Flex>
      <Flex
        gap="4px"
        direction="column"
        width="unset"
        height="58px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "NavText")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(14,35,57,1)"
          lineHeight="18px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="164px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="User Name"
          {...getOverrideProps(overrides, "User Name")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="600"
          color="rgba(45,112,205,1)"
          textTransform="capitalize"
          lineHeight="16.80000114440918px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Register DxF Participant"
          {...getOverrideProps(overrides, "Register DxF Participant")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        display="none"
        {...getOverrideProps(overrides, "ButtonContainer")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,0)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(45,112,205,1)"
          display="flex"
          {...getOverrideProps(overrides, "Button")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sign Out"
            {...getOverrideProps(overrides, "label")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
