/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, GridProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HIPAACreateFormInputValues = {
    CoveredHIPAA?: boolean;
    HybridHIPAA?: boolean;
    AssociateHIPAA?: boolean;
    NotCoveredHIPAA?: boolean;
};
export declare type HIPAACreateFormValidationValues = {
    CoveredHIPAA?: ValidationFunction<boolean>;
    HybridHIPAA?: ValidationFunction<boolean>;
    AssociateHIPAA?: ValidationFunction<boolean>;
    NotCoveredHIPAA?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HIPAACreateFormOverridesProps = {
    HIPAACreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<TextProps>;
    CoveredHIPAA?: PrimitiveOverrideProps<CheckboxFieldProps>;
    HybridHIPAA?: PrimitiveOverrideProps<CheckboxFieldProps>;
    AssociateHIPAA?: PrimitiveOverrideProps<CheckboxFieldProps>;
    NotCoveredHIPAA?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type HIPAACreateFormProps = React.PropsWithChildren<{
    overrides?: HIPAACreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HIPAACreateFormInputValues) => HIPAACreateFormInputValues;
    onSuccess?: (fields: HIPAACreateFormInputValues) => void;
    onError?: (fields: HIPAACreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HIPAACreateFormInputValues) => HIPAACreateFormInputValues;
    onValidate?: HIPAACreateFormValidationValues;
} & React.CSSProperties>;
export default function HIPAACreateForm(props: HIPAACreateFormProps): React.ReactElement;
