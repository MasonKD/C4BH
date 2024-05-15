/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LogoFullProps } from "../../ui-components/LogoFull";
import { HamburgerIconProps } from "../../ui-components/HamburgerIcon";
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
export declare type HeaderModOverridesProps = {
    HeaderMod?: PrimitiveOverrideProps<FlexProps>;
    LogoFull?: LogoFullProps;
    "Group 1"?: PrimitiveOverrideProps<FlexProps>;
    HamburgerIcon?: HamburgerIconProps;
    NavRightComponent?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Button Icon49013183"?: PrimitiveOverrideProps<ViewProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    "Button Icon49013185"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type HeaderModProps = React.PropsWithChildren<Partial<FlexProps> & {
    state?: "full" | "mobile";
} & {
    overrides?: HeaderModOverridesProps | undefined | null;
}>;
export default function HeaderMod(props: HeaderModProps): React.ReactElement;
