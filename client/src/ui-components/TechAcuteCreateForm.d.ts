/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps } from "@aws-amplify/ui-react";
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
export declare type TechAcuteCreateFormInputValues = {
    EHR_Vendors?: string;
};
export declare type TechAcuteCreateFormValidationValues = {
    EHR_Vendors?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechAcuteCreateFormOverridesProps = {
    TechAcuteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    EHR_Vendors?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type TechAcuteCreateFormProps = React.PropsWithChildren<{
    overrides?: TechAcuteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TechAcuteCreateFormInputValues) => TechAcuteCreateFormInputValues;
    onSuccess?: (fields: TechAcuteCreateFormInputValues) => void;
    onError?: (fields: TechAcuteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TechAcuteCreateFormInputValues) => TechAcuteCreateFormInputValues;
    onValidate?: TechAcuteCreateFormValidationValues;
} & React.CSSProperties>;
export default function TechAcuteCreateForm(props: TechAcuteCreateFormProps): React.ReactElement;
