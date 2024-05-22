/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, CheckboxFieldProps, GridProps, HeadingProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type RequestInfoDosCreateFormInputValues = {
    RequestRespondDirectSecureEmail?: boolean;
    RequestRespondIHE?: boolean;
    RequestRespondNationalNetworkDos?: string;
    RequestRespondFHIR?: boolean;
    RequestRespondFHIRendpoint?: string;
    RequestRespondOther?: boolean;
    RequestRespondOtherDescribe?: string;
};
export declare type RequestInfoDosCreateFormValidationValues = {
    RequestRespondDirectSecureEmail?: ValidationFunction<boolean>;
    RequestRespondIHE?: ValidationFunction<boolean>;
    RequestRespondNationalNetworkDos?: ValidationFunction<string>;
    RequestRespondFHIR?: ValidationFunction<boolean>;
    RequestRespondFHIRendpoint?: ValidationFunction<string>;
    RequestRespondOther?: ValidationFunction<boolean>;
    RequestRespondOtherDescribe?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestInfoDosCreateFormOverridesProps = {
    RequestInfoDosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement1?: PrimitiveOverrideProps<TextProps>;
    RequestRespondDirectSecureEmail?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid3?: PrimitiveOverrideProps<GridProps>;
    RequestRespondIHE?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestRespondNationalNetworkDos?: PrimitiveOverrideProps<AutocompleteProps>;
    RowGrid4?: PrimitiveOverrideProps<GridProps>;
    RequestRespondFHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestRespondFHIRendpoint?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid5?: PrimitiveOverrideProps<GridProps>;
    RequestRespondOther?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RequestRespondOtherDescribe?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestInfoDosCreateFormProps = React.PropsWithChildren<{
    overrides?: RequestInfoDosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RequestInfoDosCreateFormInputValues) => RequestInfoDosCreateFormInputValues;
    onSuccess?: (fields: RequestInfoDosCreateFormInputValues) => void;
    onError?: (fields: RequestInfoDosCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestInfoDosCreateFormInputValues) => RequestInfoDosCreateFormInputValues;
    onValidate?: RequestInfoDosCreateFormValidationValues;
} & React.CSSProperties>;
export default function RequestInfoDosCreateForm(props: RequestInfoDosCreateFormProps): React.ReactElement;
