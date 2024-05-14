/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { NavButtonProps } from "./NavButton";
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
export declare type SideNavTestOverridesProps = {
    SideNavTest?: PrimitiveOverrideProps<FlexProps>;
    ArrowContainer?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    NavButtonContainer?: PrimitiveOverrideProps<FlexProps>;
    NavButton49967946?: NavButtonProps;
    NavButton49967953?: NavButtonProps;
    NavButton49967960?: NavButtonProps;
    NavButton49967967?: NavButtonProps;
    NavButton49967974?: NavButtonProps;
    NavButton49967981?: NavButtonProps;
    NavButton49967988?: NavButtonProps;
    NavButton49967995?: NavButtonProps;
    NavText?: PrimitiveOverrideProps<FlexProps>;
    "User Name"?: PrimitiveOverrideProps<TextProps>;
    "Register DxF Participant"?: PrimitiveOverrideProps<TextProps>;
    ButtonContainer?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideNavTestProps = React.PropsWithChildren<Partial<FlexProps> & {
    open?: "false" | "true";
    size?: "desktop" | "mobile";
} & {
    overrides?: SideNavTestOverridesProps | undefined | null;
}>;
export default function SideNavTest(props: SideNavTestProps): React.ReactElement;
