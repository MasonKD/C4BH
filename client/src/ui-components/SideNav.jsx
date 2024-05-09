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
import { Flex, Text, View } from "@aws-amplify/ui-react";
import HamburgerIcon from "./HamburgerIcon";
export default function SideNav(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        MyIcon49013056: {},
        "Frame 43848992370": {},
        MyIcon48971276: {},
        "Frame 43848971275": {},
        label48971279: {},
        "Frame 32248971278": {},
        "Frame 41448971277": {},
        "Frame 44048971274": {},
        "Frame 441": {},
        MyIcon48971283: {},
        "Frame 43848971282": {},
        label48971286: {},
        "Frame 32248971285": {},
        "Frame 41448971284": {},
        "Frame 44048971281": {},
        "Frame 448": {},
        MyIcon48971290: {},
        "Frame 43848971289": {},
        label48971293: {},
        "Frame 32248971292": {},
        "Frame 41448971291": {},
        "Frame 44048971288": {},
        "Frame 442": {},
        MyIcon48971297: {},
        "Frame 43848971296": {},
        label48971300: {},
        "Frame 32248971299": {},
        "Frame 41448971298": {},
        "Frame 44048971295": {},
        "Frame 443": {},
        MyIcon48971304: {},
        "Frame 43848971303": {},
        label48971307: {},
        "Frame 32248971306": {},
        "Frame 41448971305": {},
        "Frame 44048971302": {},
        "Frame 444": {},
        MyIcon48971311: {},
        "Frame 43848971310": {},
        label48971314: {},
        "Frame 32248971313": {},
        "Frame 41448971312": {},
        "Frame 44048971309": {},
        "Frame 445": {},
        MyIcon48971318: {},
        "Frame 43848971317": {},
        label48971321: {},
        "Frame 32248971320": {},
        "Frame 41448971319": {},
        "Frame 44048971316": {},
        "Frame 446": {},
        MyIcon48971325: {},
        "Frame 43848971324": {},
        label48971328: {},
        "Frame 32248971327": {},
        "Frame 41448971326": {},
        "Frame 44048971323": {},
        "Frame 447": {},
        "Frame 449": {},
        "User Name": {},
        "Register DxF Participant": {},
        NavText: {},
        HamburgerIcon: {},
        "Button Icon49013379": {},
        label49013380: {},
        "Button Icon49013381": {},
        Button: {},
        NavRightComponent: {},
        "Group 1": {},
        SideNav: {},
      },
      variantValues: { state: "open" },
    },
    {
      overrides: {
        MyIcon49013056: {},
        "Frame 43848992370": {},
        MyIcon48971276: {},
        "Frame 43848971275": {},
        label48971279: {},
        "Frame 32248971278": {},
        "Frame 41448971277": {},
        "Frame 44048971274": {},
        "Frame 441": {},
        MyIcon48971283: {},
        "Frame 43848971282": {},
        label48971286: {},
        "Frame 32248971285": {},
        "Frame 41448971284": {},
        "Frame 44048971281": {},
        "Frame 448": {},
        MyIcon48971290: {},
        "Frame 43848971289": {},
        label48971293: {},
        "Frame 32248971292": {},
        "Frame 41448971291": {},
        "Frame 44048971288": {},
        "Frame 442": {},
        MyIcon48971297: {},
        "Frame 43848971296": {},
        label48971300: {},
        "Frame 32248971299": {},
        "Frame 41448971298": {},
        "Frame 44048971295": {},
        "Frame 443": {},
        MyIcon48971304: {},
        "Frame 43848971303": {},
        label48971307: {},
        "Frame 32248971306": {},
        "Frame 41448971305": {},
        "Frame 44048971302": {},
        "Frame 444": {},
        MyIcon48971311: {},
        "Frame 43848971310": {},
        label48971314: {},
        "Frame 32248971313": {},
        "Frame 41448971312": {},
        "Frame 44048971309": {},
        "Frame 445": {},
        MyIcon48971318: {},
        "Frame 43848971317": {},
        label48971321: {},
        "Frame 32248971320": {},
        "Frame 41448971319": {},
        "Frame 44048971316": {},
        "Frame 446": {},
        MyIcon48971325: {},
        "Frame 43848971324": {},
        label48971328: {},
        "Frame 32248971327": {},
        "Frame 41448971326": {},
        "Frame 44048971323": {},
        "Frame 447": {},
        "Frame 449": {},
        "User Name": {},
        "Register DxF Participant": {},
        NavText: {},
        HamburgerIcon: {},
        "Button Icon49013379": {},
        label49013380: {},
        "Button Icon49013381": {},
        Button: {},
        NavRightComponent: {},
        "Group 1": { display: "block" },
        SideNav: {},
      },
      variantValues: { state: "mobile" },
    },
    {
      overrides: {
        MyIcon49013056: { type: "arrow_right" },
        "Frame 43848992370": { height: "46px" },
        MyIcon48971276: {},
        "Frame 43848971275": {},
        label48971279: {},
        "Frame 32248971278": {},
        "Frame 41448971277": { display: "none" },
        "Frame 44048971274": {},
        "Frame 441": {},
        MyIcon48971283: {},
        "Frame 43848971282": {},
        label48971286: {},
        "Frame 32248971285": {},
        "Frame 41448971284": { display: "none" },
        "Frame 44048971281": { width: "unset" },
        "Frame 448": {},
        MyIcon48971290: {},
        "Frame 43848971289": {},
        label48971293: {},
        "Frame 32248971292": {},
        "Frame 41448971291": { display: "none" },
        "Frame 44048971288": { width: "unset" },
        "Frame 442": {},
        MyIcon48971297: {},
        "Frame 43848971296": {},
        label48971300: {},
        "Frame 32248971299": {},
        "Frame 41448971298": { display: "none" },
        "Frame 44048971295": { width: "unset" },
        "Frame 443": {},
        MyIcon48971304: {},
        "Frame 43848971303": {},
        label48971307: {},
        "Frame 32248971306": {},
        "Frame 41448971305": { display: "none" },
        "Frame 44048971302": { width: "unset" },
        "Frame 444": {},
        MyIcon48971311: {},
        "Frame 43848971310": {},
        label48971314: {},
        "Frame 32248971313": {},
        "Frame 41448971312": { display: "none" },
        "Frame 44048971309": { width: "unset" },
        "Frame 445": {},
        MyIcon48971318: {},
        "Frame 43848971317": {},
        label48971321: {},
        "Frame 32248971320": {},
        "Frame 41448971319": { display: "none" },
        "Frame 44048971316": { width: "unset" },
        "Frame 446": {},
        MyIcon48971325: {},
        "Frame 43848971324": {},
        label48971328: {},
        "Frame 32248971327": {},
        "Frame 41448971326": { display: "none" },
        "Frame 44048971323": { width: "unset" },
        "Frame 447": {},
        "Frame 449": {},
        "User Name": {},
        "Register DxF Participant": {},
        NavText: { width: "186px", display: "none" },
        HamburgerIcon: { width: "12.18px", left: "-23.52px" },
        "Button Icon49013379": {},
        label49013380: {},
        "Button Icon49013381": {},
        Button: {},
        NavRightComponent: { width: "42px" },
        "Group 1": {},
        SideNav: {},
      },
      variantValues: { state: "closed" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="14px"
      direction="column"
      width="unset"
      height="654px"
      justifyContent="flex-start"
      alignItems="flex-end"
      position="relative"
      border="1px SOLID rgba(220,222,224,1)"
      padding="16px 15px 16px 15px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "SideNav")}
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
        {...getOverrideProps(overrides, "Frame 43848992370")}
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
          {...getOverrideProps(overrides, "MyIcon49013056")}
        ></MyIcon>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 449")}
      >
        <Flex
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          backgroundColor="rgba(241,247,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "Frame 441")}
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
            {...getOverrideProps(overrides, "Frame 44048971274")}
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
              backgroundColor="rgba(241,247,255,1)"
              display="flex"
              {...getOverrideProps(overrides, "Frame 43848971275")}
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
                {...getOverrideProps(overrides, "MyIcon48971276")}
              ></MyIcon>
            </Flex>
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 41448971277")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 32248971278")}
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
                  width="46px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Home"
                  {...getOverrideProps(overrides, "label48971279")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 448")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="173px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 44048971281")}
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
              display="flex"
              {...getOverrideProps(overrides, "Frame 43848971282")}
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
                type="about"
                {...getOverrideProps(overrides, "MyIcon48971283")}
              ></MyIcon>
            </Flex>
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 41448971284")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 32248971285")}
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
                  width="220px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Background"
                  {...getOverrideProps(overrides, "label48971286")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 442")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="182px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 44048971288")}
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
              display="flex"
              {...getOverrideProps(overrides, "Frame 43848971289")}
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
                type="group"
                {...getOverrideProps(overrides, "MyIcon48971290")}
              ></MyIcon>
            </Flex>
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 41448971291")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 32248971292")}
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
                  width="220px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Use Cases"
                  {...getOverrideProps(overrides, "label48971293")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 443")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="182px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 44048971295")}
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
              display="flex"
              {...getOverrideProps(overrides, "Frame 43848971296")}
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
                type="upload"
                {...getOverrideProps(overrides, "MyIcon48971297")}
              ></MyIcon>
            </Flex>
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 41448971298")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 32248971299")}
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
                  width="220px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="FTP Log"
                  {...getOverrideProps(overrides, "label48971300")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 444")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="182px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 44048971302")}
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
              display="flex"
              {...getOverrideProps(overrides, "Frame 43848971303")}
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
                type="transfer"
                {...getOverrideProps(overrides, "MyIcon48971304")}
              ></MyIcon>
            </Flex>
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 41448971305")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 32248971306")}
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
                  width="220px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Integration Engine &#xA;(Mirth)"
                  {...getOverrideProps(overrides, "label48971307")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 445")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="182px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 44048971309")}
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
              display="flex"
              {...getOverrideProps(overrides, "Frame 43848971310")}
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
                type="data"
                {...getOverrideProps(overrides, "MyIcon48971311")}
              ></MyIcon>
            </Flex>
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 41448971312")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 32248971313")}
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
                  width="220px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="CDR (Smile)"
                  {...getOverrideProps(overrides, "label48971314")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 446")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="182px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 44048971316")}
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
              display="flex"
              {...getOverrideProps(overrides, "Frame 43848971317")}
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
                type="use case"
                {...getOverrideProps(overrides, "MyIcon48971318")}
              ></MyIcon>
            </Flex>
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 41448971319")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 32248971320")}
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
                  width="220px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Rules Engine"
                  {...getOverrideProps(overrides, "label48971321")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="30px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 447")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="182px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 44048971323")}
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
              display="flex"
              {...getOverrideProps(overrides, "Frame 43848971324")}
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
                type="graph"
                {...getOverrideProps(overrides, "MyIcon48971325")}
              ></MyIcon>
            </Flex>
            <Flex
              gap="16px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 41448971326")}
            >
              <Flex
                gap="8px"
                direction="row"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 32248971327")}
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
                  width="220px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Visualizations"
                  {...getOverrideProps(overrides, "label48971328")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
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
        padding="0px 10px 0px 10px"
        display="flex"
        {...getOverrideProps(overrides, "NavText")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="400"
          color="rgba(24,35,47,1)"
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
        padding="0px 0px 0px 0px"
        width="unset"
        height="40px"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        {...getOverrideProps(overrides, "Group 1")}
      >
        <HamburgerIcon
          display="none"
          gap="5px"
          direction="column"
          width="53.36px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="10.5px"
          left="-103.04px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "HamburgerIcon")}
        ></HamburgerIcon>
        <Flex
          gap="20px"
          direction="row"
          width="184px"
          height="unset"
          justifyContent="flex-start"
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
              {...getOverrideProps(overrides, "Button Icon49013379")}
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
              {...getOverrideProps(overrides, "label49013380")}
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
              {...getOverrideProps(overrides, "Button Icon49013381")}
            ></View>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
