/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type LogoIconOverridesProps = {
    LogoIcon?: PrimitiveOverrideProps<ViewProps>;
    "C4BH_full_logo_4x_966x109 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type LogoIconProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LogoIconOverridesProps | undefined | null;
}>;
export default function LogoIcon(props: LogoIconProps): React.ReactElement;
