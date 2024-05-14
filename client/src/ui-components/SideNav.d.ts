/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
    ArrowContainer?: PrimitiveOverrideProps<FlexProps>;
    MyIcon49013056?: MyIconProps;
    NavButtonContainer?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<FlexProps>;
    ButtonContainer48971274?: PrimitiveOverrideProps<FlexProps>;
    IconContainer48971275?: PrimitiveOverrideProps<FlexProps>;
    MyIcon48971276?: MyIconProps;
    label48971279?: PrimitiveOverrideProps<TextProps>;
    Background?: PrimitiveOverrideProps<FlexProps>;
    ButtonContainer50003173?: PrimitiveOverrideProps<FlexProps>;
    IconContainer50003174?: PrimitiveOverrideProps<FlexProps>;
    MyIcon50003175?: MyIconProps;
    label50003176?: PrimitiveOverrideProps<TextProps>;
    UseCases?: PrimitiveOverrideProps<FlexProps>;
    ButtonContainer50003179?: PrimitiveOverrideProps<FlexProps>;
    IconContainer50003180?: PrimitiveOverrideProps<FlexProps>;
    MyIcon50003181?: MyIconProps;
    label50003182?: PrimitiveOverrideProps<TextProps>;
    FTP?: PrimitiveOverrideProps<FlexProps>;
    ButtonContainer50003185?: PrimitiveOverrideProps<FlexProps>;
    IconContainer50003186?: PrimitiveOverrideProps<FlexProps>;
    MyIcon50003187?: MyIconProps;
    label50003188?: PrimitiveOverrideProps<TextProps>;
    Mirth?: PrimitiveOverrideProps<FlexProps>;
    ButtonContainer50003191?: PrimitiveOverrideProps<FlexProps>;
    IconContainer50003192?: PrimitiveOverrideProps<FlexProps>;
    MyIcon50003193?: MyIconProps;
    label50003194?: PrimitiveOverrideProps<TextProps>;
    Smile?: PrimitiveOverrideProps<FlexProps>;
    ButtonContainer50003197?: PrimitiveOverrideProps<FlexProps>;
    IconContainer50003198?: PrimitiveOverrideProps<FlexProps>;
    MyIcon50003199?: MyIconProps;
    label50003200?: PrimitiveOverrideProps<TextProps>;
    RulesEngine?: PrimitiveOverrideProps<FlexProps>;
    ButtonContainer50003203?: PrimitiveOverrideProps<FlexProps>;
    IconContainer50003204?: PrimitiveOverrideProps<FlexProps>;
    MyIcon50003205?: MyIconProps;
    label50003206?: PrimitiveOverrideProps<TextProps>;
    Visualizations?: PrimitiveOverrideProps<FlexProps>;
    ButtonContainer50003209?: PrimitiveOverrideProps<FlexProps>;
    IconContainer50003210?: PrimitiveOverrideProps<FlexProps>;
    MyIcon50003211?: MyIconProps;
    label50003212?: PrimitiveOverrideProps<TextProps>;
    NavText?: PrimitiveOverrideProps<FlexProps>;
    "User Name"?: PrimitiveOverrideProps<TextProps>;
    "Register DxF Participant"?: PrimitiveOverrideProps<TextProps>;
    SignOutContainer?: PrimitiveOverrideProps<FlexProps>;
    SignOutFlex?: PrimitiveOverrideProps<FlexProps>;
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
