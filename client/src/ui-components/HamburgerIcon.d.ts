/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps } from "@aws-amplify/ui-react";
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
export declare type HamburgerIconOverridesProps = {
    HamburgerIcon?: PrimitiveOverrideProps<FlexProps>;
    "Vector 2 (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "Vector 3 (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "Vector 4 (Stroke)"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type HamburgerIconProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HamburgerIconOverridesProps | undefined | null;
}>;
export default function HamburgerIcon(props: HamburgerIconProps): React.ReactElement;
