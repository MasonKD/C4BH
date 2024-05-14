/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1200px"
      height="30px"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(220,222,224,1)"
      padding="11px 11px 11px 11px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="8px"
        fontWeight="400"
        color="rgba(92,102,112,1)"
        lineHeight="12px"
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
        children="© 2024 Connecting for Better Health"
        {...getOverrideProps(
          overrides,
          "\u00A9 2024 Connecting for Better Health"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="8px"
        fontWeight="400"
        color="rgba(92,102,112,1)"
        lineHeight="12px"
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
        children="Built by EMI Advisors LLC"
        {...getOverrideProps(overrides, "Built by EMI Advisors LLC")}
      ></Text>
    </Flex>
  );
}
