/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LogoFullProps } from "./LogoFull";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NavBarHeaderOverridesProps = {
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    LogoFull?: LogoFullProps;
    NavLinks?: PrimitiveOverrideProps<FlexProps>;
    Background?: PrimitiveOverrideProps<TextProps>;
    "Use Cases"?: PrimitiveOverrideProps<TextProps>;
    "Frame 436"?: PrimitiveOverrideProps<FlexProps>;
    Connections?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: PrimitiveOverrideProps<ViewProps>;
    "Vector 1 (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "Rules Engine"?: PrimitiveOverrideProps<TextProps>;
    Visualizations?: PrimitiveOverrideProps<TextProps>;
    NavRightComponent?: PrimitiveOverrideProps<FlexProps>;
    NavText?: PrimitiveOverrideProps<FlexProps>;
    "Lucas Himes"?: PrimitiveOverrideProps<TextProps>;
    "Register DxF Participant"?: PrimitiveOverrideProps<TextProps>;
    HamburgerIcon?: HamburgerIconProps;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Button Icon48692666"?: PrimitiveOverrideProps<ViewProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    "Button Icon48692668"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    state?: "Collapsed" | "Full";
} & {
    overrides?: NavBarHeaderOverridesProps | undefined | null;
}>;
export default function NavBarHeader(props: NavBarHeaderProps): React.ReactElement;
