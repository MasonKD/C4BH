/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, GridProps, HeadingProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type RequestInfoUnoCreateFormInputValues = {
    RequestRecieveDirectSecureEmail?: boolean;
    RequestDirectEmailAddress?: string;
    RequestIHE?: boolean;
    RequestFHIR?: boolean;
    RequestOther?: boolean;
    RequestOtherDescribe?: string;
};
export declare type RequestInfoUnoCreateFormValidationValues = {
    RequestRecieveDirectSecureEmail?: ValidationFunction<boolean>;
    RequestDirectEmailAddress?: ValidationFunction<string>;
    RequestIHE?: ValidationFunction<boolean>;
    RequestFHIR?: ValidationFunction<boolean>;
    RequestOther?: ValidationFunction<boolean>;
    RequestOtherDescribe?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestInfoUnoCreateFormOverridesProps = {
    RequestInfoUnoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement1?: PrimitiveOverrideProps<TextProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    RequestRecieveDirectSecureEmail?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestDirectEmailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    RequestIHE?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestFHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid5?: PrimitiveOverrideProps<GridProps>;
    RequestOther?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestOtherDescribe?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestInfoUnoCreateFormProps = React.PropsWithChildren<{
    overrides?: RequestInfoUnoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RequestInfoUnoCreateFormInputValues) => RequestInfoUnoCreateFormInputValues;
    onSuccess?: (fields: RequestInfoUnoCreateFormInputValues) => void;
    onError?: (fields: RequestInfoUnoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestInfoUnoCreateFormInputValues) => RequestInfoUnoCreateFormInputValues;
    onValidate?: RequestInfoUnoCreateFormValidationValues;
} & React.CSSProperties>;
export default function RequestInfoUnoCreateForm(props: RequestInfoUnoCreateFormProps): React.ReactElement;
