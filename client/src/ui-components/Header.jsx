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
import LogoFull from "./LogoFull";
import HamburgerIcon from "./HamburgerIcon";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        LogoFull: {},
        HamburgerIcon: {},
        "Button Icon49013183": {},
        label: {},
        "Button Icon49013185": {},
        Button: {},
        NavRightComponent: {},
        "Group 1": {},
        Header: {},
      },
      variantValues: { state: "full" },
    },
    {
      overrides: {
        LogoFull: { width: "210px", height: "23.13px" },
        HamburgerIcon: { display: "flex", top: "0px", left: "0px" },
        "Button Icon49013183": {},
        label: {},
        "Button Icon49013185": {},
        Button: {},
        NavRightComponent: { top: "-10.5px", left: "56px", display: "none" },
        "Group 1": { width: "29px", height: "19px" },
        Header: {},
      },
      variantValues: { state: "mobile" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="27px"
      direction="row"
      width="1284px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <LogoFull
        width="326px"
        height="35.91px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "LogoFull")}
      ></LogoFull>
      <Flex
        padding="0px 0px 0px 0px"
        width="100px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 1")}
      >
        <HamburgerIcon
          display="none"
          gap="5px"
          direction="column"
          width="29px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="10.5px"
          left="-56px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "HamburgerIcon")}
        ></HamburgerIcon>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "NavRightComponent")}
        >
          <Flex
            gap="0"
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
            <View
              width="16px"
              height="16px"
              display="none"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Button Icon49013183")}
            ></View>
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
            <View
              width="16px"
              height="16px"
              display="none"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Button Icon49013185")}
            ></View>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
