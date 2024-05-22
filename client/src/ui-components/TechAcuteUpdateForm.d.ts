/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TechAcuteUpdateFormInputValues = {
    EHR_Vendors?: string;
    UserIdToken?: string;
};
export declare type TechAcuteUpdateFormValidationValues = {
    EHR_Vendors?: ValidationFunction<string>;
    UserIdToken?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechAcuteUpdateFormOverridesProps = {
    TechAcuteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    EHR_Vendors?: PrimitiveOverrideProps<AutocompleteProps>;
    UserIdToken?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TechAcuteUpdateFormProps = React.PropsWithChildren<{
    overrides?: TechAcuteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    techAcute?: any;
    onSubmit?: (fields: TechAcuteUpdateFormInputValues) => TechAcuteUpdateFormInputValues;
    onSuccess?: (fields: TechAcuteUpdateFormInputValues) => void;
    onError?: (fields: TechAcuteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TechAcuteUpdateFormInputValues) => TechAcuteUpdateFormInputValues;
    onValidate?: TechAcuteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TechAcuteUpdateForm(props: TechAcuteUpdateFormProps): React.ReactElement;
