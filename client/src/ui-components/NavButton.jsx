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
export default function NavButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        MyIcon: {},
        IconContainer: {},
        label: {},
        TextContainer: {},
        ButtonConatiner: {},
        NavButton: {},
      },
      variantValues: { selected: "False", text: "True" },
    },
    {
      overrides: {
        MyIcon: {},
        IconContainer: { backgroundColor: "rgba(241,247,255,1)" },
        label: {},
        TextContainer: {},
        ButtonConatiner: {},
        NavButton: { backgroundColor: "rgba(241,247,255,1)" },
      },
      variantValues: { selected: "True", text: "True" },
    },
    {
      overrides: {
        MyIcon: {},
        IconContainer: {},
        label: {},
        TextContainer: { display: "none" },
        ButtonConatiner: {},
        NavButton: {},
      },
      variantValues: { selected: "False", text: "False" },
    },
    {
      overrides: {
        MyIcon: {},
        IconContainer: { backgroundColor: "rgba(241,247,255,1)" },
        label: {},
        TextContainer: { display: "none" },
        ButtonConatiner: {},
        NavButton: { backgroundColor: "rgba(241,247,255,1)" },
      },
      variantValues: { selected: "True", text: "False" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="30px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="4px"
      padding="2px 2px 2px 2px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "NavButton")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "ButtonConatiner")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="3px"
          padding="5px 5px 5px 5px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "IconContainer")}
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
            type="home"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="132px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "TextContainer")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(45,112,205,1)"
            lineHeight="21px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Home"
            {...getOverrideProps(overrides, "label")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
