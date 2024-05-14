/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type NavButtonOverridesProps = {
    NavButton?: PrimitiveOverrideProps<FlexProps>;
    ButtonConatiner?: PrimitiveOverrideProps<FlexProps>;
    IconContainer?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    TextContainer?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    selected?: "False" | "True";
    text?: "False" | "True";
} & {
    overrides?: NavButtonOverridesProps | undefined | null;
}>;
export default function NavButton(props: NavButtonProps): React.ReactElement;
