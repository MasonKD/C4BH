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
import { Flex } from "@aws-amplify/ui-react";
export default function CardContents(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { CardContents: {} }, variantValues: { property: "Default" } },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="10px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,0)"
      display="flex"
      {...getOverrideProps(overrides, "CardContents")}
      {...rest}
    ></Flex>
  );
}
