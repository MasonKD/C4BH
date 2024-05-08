/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
import { DividerProps } from "./Divider";
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
export declare type NavBarSideOverridesProps = {
    NavBarSide?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32248743489"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    Section48743491?: PrimitiveOverrideProps<FlexProps>;
    "Frame 41448743492"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32248743493"?: PrimitiveOverrideProps<FlexProps>;
    label48743494?: PrimitiveOverrideProps<TextProps>;
    link48743495?: PrimitiveOverrideProps<FlexProps>;
    label48743496?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: MyIconProps;
    Divider48743498?: DividerProps;
    Section48743499?: PrimitiveOverrideProps<FlexProps>;
    "Frame 41448743500"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32248743501"?: PrimitiveOverrideProps<FlexProps>;
    label48743502?: PrimitiveOverrideProps<TextProps>;
    link48743503?: PrimitiveOverrideProps<FlexProps>;
    label48743504?: PrimitiveOverrideProps<TextProps>;
    Divider48743505?: DividerProps;
    Section48743506?: PrimitiveOverrideProps<FlexProps>;
    label48743507?: PrimitiveOverrideProps<TextProps>;
    link48743508?: PrimitiveOverrideProps<FlexProps>;
    label48743509?: PrimitiveOverrideProps<TextProps>;
    link48743510?: PrimitiveOverrideProps<FlexProps>;
    label48743511?: PrimitiveOverrideProps<TextProps>;
    link48743512?: PrimitiveOverrideProps<FlexProps>;
    label48743513?: PrimitiveOverrideProps<TextProps>;
    Divider48743514?: DividerProps;
    Section48743515?: PrimitiveOverrideProps<FlexProps>;
    "Frame 41448743516"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32248743517"?: PrimitiveOverrideProps<FlexProps>;
    label48743518?: PrimitiveOverrideProps<TextProps>;
    link48743519?: PrimitiveOverrideProps<FlexProps>;
    label48743520?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label48743523?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavBarSideProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarSideOverridesProps | undefined | null;
}>;
export default function NavBarSide(props: NavBarSideProps): React.ReactElement;
