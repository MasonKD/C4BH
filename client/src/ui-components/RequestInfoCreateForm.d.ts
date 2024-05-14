/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, DividerProps, GridProps, HeadingProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type RequestInfoCreateFormInputValues = {
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
export declare type RequestInfoCreateFormValidationValues = {
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
export declare type RequestInfoCreateFormOverridesProps = {
    RequestInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement3?: PrimitiveOverrideProps<TextProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    RequestRecieveDirectSecureEmail?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestDirectEmailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    RequestIHE?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestFHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid5?: PrimitiveOverrideProps<GridProps>;
    RequestOther?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestOtherDescribe?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement2?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    RequestRespondDirectSecureEmail?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestRespondIHE?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid10?: PrimitiveOverrideProps<GridProps>;
    RequestRespondFHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestRespondFHIRendpoint?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid11?: PrimitiveOverrideProps<GridProps>;
    RequestRespondOther?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestRespondOtherDescribe?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: RequestInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RequestInfoCreateFormInputValues) => RequestInfoCreateFormInputValues;
    onSuccess?: (fields: RequestInfoCreateFormInputValues) => void;
    onError?: (fields: RequestInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestInfoCreateFormInputValues) => RequestInfoCreateFormInputValues;
    onValidate?: RequestInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function RequestInfoCreateForm(props: RequestInfoCreateFormProps): React.ReactElement;
