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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import HamburgerIcon from "./HamburgerIcon";
export default function NavBarHeader(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        LogoFull: {},
        Background: {},
        "Use Cases": {},
        Connections: {},
        "Vector 1 (Stroke)": {},
        MyIcon: {},
        "Frame 436": {},
        "Rules Engine": {},
        Visualizations: {},
        NavLinks: {},
        "Lucas Himes": {},
        "Register DxF Participant": {},
        NavText: {},
        HamburgerIcon: {},
        "Button Icon48692666": {},
        label: {},
        "Button Icon48692668": {},
        Button: {},
        NavRightComponent: {},
        NavBarHeader: {},
      },
      variantValues: { state: "Full" },
    },
    {
      overrides: {
        LogoFull: {},
        Background: {},
        "Use Cases": {},
        Connections: {},
        "Vector 1 (Stroke)": {},
        MyIcon: {},
        "Frame 436": {},
        "Rules Engine": {},
        Visualizations: {},
        NavLinks: { display: "none" },
        "Lucas Himes": {},
        "Register DxF Participant": {},
        NavText: { display: "none" },
        HamburgerIcon: { display: "flex" },
        "Button Icon48692666": {},
        label: {},
        "Button Icon48692668": {},
        Button: {},
        NavRightComponent: {},
        NavBarHeader: { justifyContent: "space-between" },
      },
      variantValues: { state: "Collapsed" },
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
      width="1200px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "NavBarHeader")}
      {...rest}
    >
      <LogoFull
        width="250px"
        height="28px"
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
        gap="22px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "NavLinks")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(92,102,112,1)"
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
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Background"
          {...getOverrideProps(overrides, "Background")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(92,102,112,1)"
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
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Use Cases"
          {...getOverrideProps(overrides, "Use Cases")}
        ></Text>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 436")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="700"
            color="rgba(92,102,112,1)"
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
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Connections"
            {...getOverrideProps(overrides, "Connections")}
          ></Text>
          <View
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
            {...getOverrideProps(overrides, "MyIcon")}
          >
            <Icon
              width="12px"
              height="7px"
              viewBox={{ minX: 0, minY: 0, width: 12, height: 7 }}
              paths={[
                {
                  d: "M0.302993 0.284196C0.706984 -0.0947321 1.36198 -0.0947321 1.76597 0.284196L6 4.25556L10.234 0.284196C10.638 -0.0947321 11.293 -0.0947321 11.697 0.284196C12.101 0.663125 12.101 1.27749 11.697 1.65642L6 7L0.302993 1.65642C-0.100998 1.27749 -0.100998 0.663125 0.302993 0.284196Z",
                  fill: "rgba(92,102,112,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="10px"
              left="6px"
              {...getOverrideProps(overrides, "Vector 1 (Stroke)")}
            ></Icon>
          </View>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(92,102,112,1)"
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
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Rules Engine"
          {...getOverrideProps(overrides, "Rules Engine")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(92,102,112,1)"
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
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Visualizations"
          {...getOverrideProps(overrides, "Visualizations")}
        ></Text>
      </Flex>
      <Flex
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "NavRightComponent")}
      >
        <Flex
          gap="4px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-end"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "NavText")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(24,35,47,1)"
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
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Lucas Himes"
            {...getOverrideProps(overrides, "Lucas Himes")}
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
        <HamburgerIcon
          display="none"
          gap="5px"
          direction="column"
          width="29px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "HamburgerIcon")}
        ></HamburgerIcon>
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
            {...getOverrideProps(overrides, "Button Icon48692666")}
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
            children="Sign up"
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
            {...getOverrideProps(overrides, "Button Icon48692668")}
          ></View>
        </Flex>
      </Flex>
    </Flex>
  );
}
