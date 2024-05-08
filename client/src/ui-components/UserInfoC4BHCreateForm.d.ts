/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type UserInfoC4BHCreateFormInputValues = {
    User?: string;
};
export declare type UserInfoC4BHCreateFormValidationValues = {
    User?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserInfoC4BHCreateFormOverridesProps = {
    UserInfoC4BHCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    User?: PrimitiveOverrideProps<AutocompleteProps>;
    SectionalElement0?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UserInfoC4BHCreateFormProps = React.PropsWithChildren<{
    overrides?: UserInfoC4BHCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserInfoC4BHCreateFormInputValues) => UserInfoC4BHCreateFormInputValues;
    onSuccess?: (fields: UserInfoC4BHCreateFormInputValues) => void;
    onError?: (fields: UserInfoC4BHCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserInfoC4BHCreateFormInputValues) => UserInfoC4BHCreateFormInputValues;
    onValidate?: UserInfoC4BHCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserInfoC4BHCreateForm(props: UserInfoC4BHCreateFormProps): React.ReactElement;
