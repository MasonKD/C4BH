/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TechIntermediariesUpdateFormInputValues = {
    HIE_or_Inter?: string;
    IntIntegrationEngineUsed?: string;
    IntClinicalDataRepoUsed?: string;
    UserIdToken?: string;
};
export declare type TechIntermediariesUpdateFormValidationValues = {
    HIE_or_Inter?: ValidationFunction<string>;
    IntIntegrationEngineUsed?: ValidationFunction<string>;
    IntClinicalDataRepoUsed?: ValidationFunction<string>;
    UserIdToken?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechIntermediariesUpdateFormOverridesProps = {
    TechIntermediariesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    HIE_or_Inter?: PrimitiveOverrideProps<TextFieldProps>;
    IntIntegrationEngineUsed?: PrimitiveOverrideProps<TextFieldProps>;
    IntClinicalDataRepoUsed?: PrimitiveOverrideProps<TextFieldProps>;
    UserIdToken?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TechIntermediariesUpdateFormProps = React.PropsWithChildren<{
    overrides?: TechIntermediariesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    techIntermediaries?: any;
    onSubmit?: (fields: TechIntermediariesUpdateFormInputValues) => TechIntermediariesUpdateFormInputValues;
    onSuccess?: (fields: TechIntermediariesUpdateFormInputValues) => void;
    onError?: (fields: TechIntermediariesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TechIntermediariesUpdateFormInputValues) => TechIntermediariesUpdateFormInputValues;
    onValidate?: TechIntermediariesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TechIntermediariesUpdateForm(props: TechIntermediariesUpdateFormProps): React.ReactElement;
