/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, HeadingProps } from "@aws-amplify/ui-react";
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
export declare type TechIntermediariesCreateFormInputValues = {
    IntIntegrationEngineUsed?: string;
    IntClinicalDataRepoUsed?: string;
};
export declare type TechIntermediariesCreateFormValidationValues = {
    IntIntegrationEngineUsed?: ValidationFunction<string>;
    IntClinicalDataRepoUsed?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechIntermediariesCreateFormOverridesProps = {
    TechIntermediariesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    IntIntegrationEngineUsed?: PrimitiveOverrideProps<AutocompleteProps>;
    IntClinicalDataRepoUsed?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type TechIntermediariesCreateFormProps = React.PropsWithChildren<{
    overrides?: TechIntermediariesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TechIntermediariesCreateFormInputValues) => TechIntermediariesCreateFormInputValues;
    onSuccess?: (fields: TechIntermediariesCreateFormInputValues) => void;
    onError?: (fields: TechIntermediariesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TechIntermediariesCreateFormInputValues) => TechIntermediariesCreateFormInputValues;
    onValidate?: TechIntermediariesCreateFormValidationValues;
} & React.CSSProperties>;
export default function TechIntermediariesCreateForm(props: TechIntermediariesCreateFormProps): React.ReactElement;
