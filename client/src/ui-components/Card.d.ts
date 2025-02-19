/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CardContentsProps } from "./CardContents";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type CardOverridesProps = {
    Card?: PrimitiveOverrideProps<FlexProps>;
    CardContents?: CardContentsProps;
} & EscapeHatchProps;
export declare type CardProps = React.PropsWithChildren<Partial<FlexProps> & {
    variation?: "default" | "elevated" | "outline";
} & {
    overrides?: CardOverridesProps | undefined | null;
}>;
export default function Card(props: CardProps): React.ReactElement;
