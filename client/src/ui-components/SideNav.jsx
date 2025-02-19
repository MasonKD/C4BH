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
  useNavigateAction,
} from "./utils";
import MyIcon from "./MyIcon";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function SideNav(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        MyIcon49013056: {},
        ArrowContainer: {},
        MyIcon48971276: {},
        IconContainer48971275: {},
        ButtonContainer48971274: {},
        label48971279: {},
        Home: {},
        MyIcon50003175: {},
        IconContainer50003174: {},
        ButtonContainer50003173: {},
        label50003176: {},
        Background: {},
        MyIcon50003181: {},
        IconContainer50003180: {},
        ButtonContainer50003179: {},
        label50003182: {},
        UseCases: {},
        MyIcon50003187: {},
        IconContainer50003186: {},
        ButtonContainer50003185: {},
        label50003188: {},
        FTP: {},
        MyIcon50003193: {},
        IconContainer50003192: {},
        ButtonContainer50003191: {},
        label50003194: {},
        Mirth: {},
        MyIcon50003199: {},
        IconContainer50003198: {},
        ButtonContainer50003197: {},
        label50003200: {},
        Smile: {},
        MyIcon50003205: {},
        IconContainer50003204: {},
        ButtonContainer50003203: {},
        label50003206: {},
        RulesEngine: {},
        MyIcon50003211: {},
        IconContainer50003210: {},
        ButtonContainer50003209: {},
        label50003212: {},
        Visualizations: {},
        NavButtonContainer: {},
        "User Name": {},
        "Register DxF Participant": {},
        NavText: {},
        "Button Icon49013379": {},
        label49013380: {},
        "Button Icon49013381": {},
        Button: {},
        SignOutFlex: {},
        SignOutContainer: {},
        SideNav: {},
      },
      variantValues: { state: "open" },
    },
    {
      overrides: {
        MyIcon49013056: { type: "arrow_right" },
        ArrowContainer: {},
        MyIcon48971276: {},
        IconContainer48971275: {},
        ButtonContainer48971274: {},
        label48971279: { display: "none" },
        Home: {},
        MyIcon50003175: {},
        IconContainer50003174: {},
        ButtonContainer50003173: {},
        label50003176: { display: "none" },
        Background: {},
        MyIcon50003181: {},
        IconContainer50003180: {},
        ButtonContainer50003179: {},
        label50003182: { display: "none" },
        UseCases: {},
        MyIcon50003187: {},
        IconContainer50003186: {},
        ButtonContainer50003185: {},
        label50003188: { display: "none" },
        FTP: {},
        MyIcon50003193: {},
        IconContainer50003192: {},
        ButtonContainer50003191: {},
        label50003194: { display: "none" },
        Mirth: {},
        MyIcon50003199: {},
        IconContainer50003198: {},
        ButtonContainer50003197: {},
        label50003200: { display: "none" },
        Smile: {},
        MyIcon50003205: {},
        IconContainer50003204: {},
        ButtonContainer50003203: {},
        label50003206: { display: "none" },
        RulesEngine: {},
        MyIcon50003211: {},
        IconContainer50003210: {},
        ButtonContainer50003209: {},
        label50003212: { display: "none" },
        Visualizations: {},
        NavButtonContainer: {},
        "User Name": {},
        "Register DxF Participant": {},
        NavText: { display: "none" },
        "Button Icon49013379": {},
        label49013380: {},
        "Button Icon49013381": {},
        Button: {},
        SignOutFlex: {},
        SignOutContainer: {},
        SideNav: {},
      },
      variantValues: { state: "closed" },
    },
    {
      overrides: {
        MyIcon49013056: { type: "close" },
        ArrowContainer: {},
        MyIcon48971276: {},
        IconContainer48971275: {},
        ButtonContainer48971274: {},
        label48971279: {},
        Home: {},
        MyIcon50003175: {},
        IconContainer50003174: {},
        ButtonContainer50003173: {},
        label50003176: {},
        Background: {},
        MyIcon50003181: {},
        IconContainer50003180: {},
        ButtonContainer50003179: {},
        label50003182: {},
        UseCases: {},
        MyIcon50003187: {},
        IconContainer50003186: {},
        ButtonContainer50003185: {},
        label50003188: {},
        FTP: {},
        MyIcon50003193: {},
        IconContainer50003192: {},
        ButtonContainer50003191: {},
        label50003194: {},
        Mirth: {},
        MyIcon50003199: {},
        IconContainer50003198: {},
        ButtonContainer50003197: {},
        label50003200: {},
        Smile: {},
        MyIcon50003205: {},
        IconContainer50003204: {},
        ButtonContainer50003203: {},
        label50003206: {},
        RulesEngine: {},
        MyIcon50003211: {},
        IconContainer50003210: {},
        ButtonContainer50003209: {},
        label50003212: {},
        Visualizations: {},
        NavButtonContainer: {},
        "User Name": {},
        "Register DxF Participant": {},
        NavText: {},
        "Button Icon49013379": {},
        label49013380: {},
        "Button Icon49013381": {},
        Button: {},
        SignOutFlex: {},
        SignOutContainer: { display: "block" },
        SideNav: {},
      },
      variantValues: { state: "mobile" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const homeOnClick = useNavigateAction({ type: "url", url: "/" });
  const backgroundOnClick = useNavigateAction({
    type: "url",
    url: "/Background",
  });
  const useCasesOnClick = useNavigateAction({ type: "url", url: "/useCase" });
  const mirthOnClick = useNavigateAction({ type: "url", url: "/Mirth" });
  const smileOnClick = useNavigateAction({ type: "url", url: "/SmileCDR" });
  const labelFiveZeroZeroZeroThreeTwoZeroZeroOnClick = useNavigateAction({
    type: "url",
    url: "/SmileCDR",
  });
  const visualizationsOnClick = useNavigateAction({
    type: "url",
    url: "/Networking",
  });
  const labelFiveZeroZeroZeroThreeTwoOneTwoOnClick = useNavigateAction({
    type: "url",
    url: "/Networking",
  });
  const registerDxFParticipantOnClick = useNavigateAction({
    type: "url",
    url: "/DxFRegistration",
  });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="654px"
      justifyContent="flex-start"
      alignItems="flex-end"
      position="relative"
      border="1px SOLID rgba(220,222,224,1)"
      padding="11px 15px 11px 15px"
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
          {...getOverrideProps(overrides, "MyIcon49013056")}
        ></MyIcon>
      </Flex>
      <Flex
        gap="6px"
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
        <Flex
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          backgroundColor="rgba(241,247,255,1)"
          display="flex"
          onClick={() => {
            homeOnClick();
          }}
          {...getOverrideProps(overrides, "Home")}
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
            {...getOverrideProps(overrides, "ButtonContainer48971274")}
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
              {...getOverrideProps(overrides, "IconContainer48971275")}
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
          </Flex>
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
            width="136px"
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
        <Flex
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          onClick={() => {
            backgroundOnClick();
          }}
          {...getOverrideProps(overrides, "Background")}
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
            {...getOverrideProps(overrides, "ButtonContainer50003173")}
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
              {...getOverrideProps(overrides, "IconContainer50003174")}
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
                {...getOverrideProps(overrides, "MyIcon50003175")}
              ></MyIcon>
            </Flex>
          </Flex>
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
            width="136px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Background"
            {...getOverrideProps(overrides, "label50003176")}
          ></Text>
        </Flex>
        <Flex
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          onClick={() => {
            useCasesOnClick();
          }}
          {...getOverrideProps(overrides, "UseCases")}
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
            {...getOverrideProps(overrides, "ButtonContainer50003179")}
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
              {...getOverrideProps(overrides, "IconContainer50003180")}
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
                {...getOverrideProps(overrides, "MyIcon50003181")}
              ></MyIcon>
            </Flex>
          </Flex>
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
            width="136px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Use Cases"
            {...getOverrideProps(overrides, "label50003182")}
          ></Text>
        </Flex>
        <Flex
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "FTP")}
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
            {...getOverrideProps(overrides, "ButtonContainer50003185")}
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
              {...getOverrideProps(overrides, "IconContainer50003186")}
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
                {...getOverrideProps(overrides, "MyIcon50003187")}
              ></MyIcon>
            </Flex>
          </Flex>
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
            width="136px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FTP Log"
            {...getOverrideProps(overrides, "label50003188")}
          ></Text>
        </Flex>
        <Flex
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          onClick={() => {
            mirthOnClick();
          }}
          {...getOverrideProps(overrides, "Mirth")}
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
            {...getOverrideProps(overrides, "ButtonContainer50003191")}
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
              {...getOverrideProps(overrides, "IconContainer50003192")}
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
                {...getOverrideProps(overrides, "MyIcon50003193")}
              ></MyIcon>
            </Flex>
          </Flex>
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
            width="136px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Integration Engine (Mirth)"
            {...getOverrideProps(overrides, "label50003194")}
          ></Text>
        </Flex>
        <Flex
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          onClick={() => {
            smileOnClick();
          }}
          {...getOverrideProps(overrides, "Smile")}
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
            {...getOverrideProps(overrides, "ButtonContainer50003197")}
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
              {...getOverrideProps(overrides, "IconContainer50003198")}
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
                {...getOverrideProps(overrides, "MyIcon50003199")}
              ></MyIcon>
            </Flex>
          </Flex>
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
            width="136px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="CDR (Smile)"
            onClick={() => {
              labelFiveZeroZeroZeroThreeTwoZeroZeroOnClick();
            }}
            {...getOverrideProps(overrides, "label50003200")}
          ></Text>
        </Flex>
        <Flex
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "RulesEngine")}
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
            {...getOverrideProps(overrides, "ButtonContainer50003203")}
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
              {...getOverrideProps(overrides, "IconContainer50003204")}
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
                type="rules"
                {...getOverrideProps(overrides, "MyIcon50003205")}
              ></MyIcon>
            </Flex>
          </Flex>
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
            width="136px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Rules Engine"
            {...getOverrideProps(overrides, "label50003206")}
          ></Text>
        </Flex>
        <Flex
          gap="6px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="4px"
          padding="4px 4px 4px 4px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          onClick={() => {
            visualizationsOnClick();
          }}
          {...getOverrideProps(overrides, "Visualizations")}
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
            {...getOverrideProps(overrides, "ButtonContainer50003209")}
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
              {...getOverrideProps(overrides, "IconContainer50003210")}
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
                {...getOverrideProps(overrides, "MyIcon50003211")}
              ></MyIcon>
            </Flex>
          </Flex>
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
            width="136px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Visualizations"
            onClick={() => {
              labelFiveZeroZeroZeroThreeTwoOneTwoOnClick();
            }}
            {...getOverrideProps(overrides, "label50003212")}
          ></Text>
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
          onClick={() => {
            registerDxFParticipantOnClick();
          }}
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
        {...getOverrideProps(overrides, "SignOutContainer")}
      >
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
          {...getOverrideProps(overrides, "SignOutFlex")}
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
