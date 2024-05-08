/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { HamburgerIconProps } from "./HamburgerIcon";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideNavOverridesProps = {
    SideNav?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43848992370"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon49013056?: MyIconProps;
    "Frame 449"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 441"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 44048971274"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43848971275"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon48971276?: MyIconProps;
    "Frame 41448971277"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32248971278"?: PrimitiveOverrideProps<FlexProps>;
    label48971279?: PrimitiveOverrideProps<TextProps>;
    "Frame 448"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 44048971281"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43848971282"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon48971283?: MyIconProps;
    "Frame 41448971284"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32248971285"?: PrimitiveOverrideProps<FlexProps>;
    label48971286?: PrimitiveOverrideProps<TextProps>;
    "Frame 442"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 44048971288"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43848971289"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon48971290?: MyIconProps;
    "Frame 41448971291"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32248971292"?: PrimitiveOverrideProps<FlexProps>;
    label48971293?: PrimitiveOverrideProps<TextProps>;
    "Frame 443"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 44048971295"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43848971296"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon48971297?: MyIconProps;
    "Frame 41448971298"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32248971299"?: PrimitiveOverrideProps<FlexProps>;
    label48971300?: PrimitiveOverrideProps<TextProps>;
    "Frame 444"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 44048971302"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43848971303"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon48971304?: MyIconProps;
    "Frame 41448971305"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32248971306"?: PrimitiveOverrideProps<FlexProps>;
    label48971307?: PrimitiveOverrideProps<TextProps>;
    "Frame 445"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 44048971309"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43848971310"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon48971311?: MyIconProps;
    "Frame 41448971312"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32248971313"?: PrimitiveOverrideProps<FlexProps>;
    label48971314?: PrimitiveOverrideProps<TextProps>;
    "Frame 446"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 44048971316"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43848971317"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon48971318?: MyIconProps;
    "Frame 41448971319"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32248971320"?: PrimitiveOverrideProps<FlexProps>;
    label48971321?: PrimitiveOverrideProps<TextProps>;
    "Frame 447"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 44048971323"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43848971324"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon48971325?: MyIconProps;
    "Frame 41448971326"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32248971327"?: PrimitiveOverrideProps<FlexProps>;
    label48971328?: PrimitiveOverrideProps<TextProps>;
    NavText?: PrimitiveOverrideProps<FlexProps>;
    "User Name"?: PrimitiveOverrideProps<TextProps>;
    "Register DxF Participant"?: PrimitiveOverrideProps<TextProps>;
    "Group 1"?: PrimitiveOverrideProps<FlexProps>;
    HamburgerIcon?: HamburgerIconProps;
    NavRightComponent?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Button Icon49013379"?: PrimitiveOverrideProps<ViewProps>;
    label49013380?: PrimitiveOverrideProps<TextProps>;
    "Button Icon49013381"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SideNavProps = React.PropsWithChildren<Partial<FlexProps> & {
    state?: "closed" | "mobile" | "open";
} & {
    overrides?: SideNavOverridesProps | undefined | null;
}>;
export default function SideNav(props: SideNavProps): React.ReactElement;
