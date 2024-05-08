/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type ConnectionsDropDownOverridesProps = {
    ConnectionsDropDown?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    "FTP Log"?: PrimitiveOverrideProps<TextProps>;
    "Frame 6"?: PrimitiveOverrideProps<FlexProps>;
    "Integration Engine (Mirth)"?: PrimitiveOverrideProps<TextProps>;
    "Frame 7"?: PrimitiveOverrideProps<FlexProps>;
    "CDR (Smile)"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ConnectionsDropDownProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ConnectionsDropDownOverridesProps | undefined | null;
}>;
export default function ConnectionsDropDown(props: ConnectionsDropDownProps): React.ReactElement;
