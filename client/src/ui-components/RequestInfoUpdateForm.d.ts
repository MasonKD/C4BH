/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, DividerProps, GridProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type RequestInfoUpdateFormInputValues = {
    RequestRecieveDirectSecureEmail?: boolean;
    RequestDirectEmailAddress?: string;
    RequestIHE?: boolean;
    RequestFHIR?: boolean;
    RequestOther?: boolean;
    RequestOtherDescribe?: string;
    RequestRespondDirectSecureEmail?: boolean;
    RequestRespondIHE?: boolean;
    RequestRespondFHIR?: boolean;
    RequestRespondFHIRendpoint?: string;
    RequestRespondOther?: boolean;
    RequestRespondOtherDescribe?: string;
};
export declare type RequestInfoUpdateFormValidationValues = {
    RequestRecieveDirectSecureEmail?: ValidationFunction<boolean>;
    RequestDirectEmailAddress?: ValidationFunction<string>;
    RequestIHE?: ValidationFunction<boolean>;
    RequestFHIR?: ValidationFunction<boolean>;
    RequestOther?: ValidationFunction<boolean>;
    RequestOtherDescribe?: ValidationFunction<string>;
    RequestRespondDirectSecureEmail?: ValidationFunction<boolean>;
    RequestRespondIHE?: ValidationFunction<boolean>;
    RequestRespondFHIR?: ValidationFunction<boolean>;
    RequestRespondFHIRendpoint?: ValidationFunction<string>;
    RequestRespondOther?: ValidationFunction<boolean>;
    RequestRespondOtherDescribe?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestInfoUpdateFormOverridesProps = {
    RequestInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<TextProps>;
    RowGrid1?: PrimitiveOverrideProps<GridProps>;
    RequestRecieveDirectSecureEmail?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestDirectEmailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    RequestIHE?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestFHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid4?: PrimitiveOverrideProps<GridProps>;
    RequestOther?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestOtherDescribe?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement2?: PrimitiveOverrideProps<TextProps>;
    RequestRespondDirectSecureEmail?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestRespondIHE?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid9?: PrimitiveOverrideProps<GridProps>;
    RequestRespondFHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestRespondFHIRendpoint?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid10?: PrimitiveOverrideProps<GridProps>;
    RequestRespondOther?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestRespondOtherDescribe?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: RequestInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    requestInfo?: any;
    onSubmit?: (fields: RequestInfoUpdateFormInputValues) => RequestInfoUpdateFormInputValues;
    onSuccess?: (fields: RequestInfoUpdateFormInputValues) => void;
    onError?: (fields: RequestInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestInfoUpdateFormInputValues) => RequestInfoUpdateFormInputValues;
    onValidate?: RequestInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RequestInfoUpdateForm(props: RequestInfoUpdateFormProps): React.ReactElement;
