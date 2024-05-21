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
export declare type UserInfoC4BHUpdateFormInputValues = {
    DxFID?: string;
    UserIdToken?: string;
};
export declare type UserInfoC4BHUpdateFormValidationValues = {
    DxFID?: ValidationFunction<string>;
    UserIdToken?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserInfoC4BHUpdateFormOverridesProps = {
    UserInfoC4BHUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    DxFID?: PrimitiveOverrideProps<AutocompleteProps>;
    UserIdToken?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserInfoC4BHUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserInfoC4BHUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userInfoC4BH?: any;
    onSubmit?: (fields: UserInfoC4BHUpdateFormInputValues) => UserInfoC4BHUpdateFormInputValues;
    onSuccess?: (fields: UserInfoC4BHUpdateFormInputValues) => void;
    onError?: (fields: UserInfoC4BHUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserInfoC4BHUpdateFormInputValues) => UserInfoC4BHUpdateFormInputValues;
    onValidate?: UserInfoC4BHUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserInfoC4BHUpdateForm(props: UserInfoC4BHUpdateFormProps): React.ReactElement;
