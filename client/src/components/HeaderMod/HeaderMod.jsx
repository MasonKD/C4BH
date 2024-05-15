

/* eslint-disable */
import * as React from "react";
import { Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "../../ui-components/utils";
import LogoFull from "../../ui-components/LogoFull";
import HamburgerIcon from "../../ui-components/HamburgerIcon";
import { Flex, Button } from "@aws-amplify/ui-react";
export default function HeaderMod(props) {
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
  const {user, signOut} = useAuthenticator((context) => [context.user]);
  return (
    <Flex
      gap="27px"
      direction="row"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      top="0"
      width="100%"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="18px 32px 18px 32px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Link to= '/OldMainPage'>
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
      </Link>
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
        </Flex>
      </Flex>
      <Button
  variation="primary"
  onClick={() => signOut()}
>
  Sign Out
</Button>
    </Flex>
  );
}
