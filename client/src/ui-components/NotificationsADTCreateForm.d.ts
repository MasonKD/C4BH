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
export declare type NotificationsADTCreateFormInputValues = {
    ReceiveDirectSecureEmail?: boolean;
    ReceiveDirectEmailAddress?: string;
    ReceivesFTP?: boolean;
    ReceivePointToPoint?: boolean;
    ReceiveHTTPSnonFHIR?: boolean;
    ReceiveHTTPSFHIR?: boolean;
    ReceiveHTTPSEndpoint?: string;
    ReceiveOther?: boolean;
    ReceiveOtherDescription?: string;
    SendDirectSecureEmail?: boolean;
    SendsFTP?: boolean;
    SendPointToPoint?: boolean;
    SendHTTPSNon_FHIR?: boolean;
    SendHTTPS_FHIR?: boolean;
    SendPortal?: boolean;
    SendOther?: boolean;
    SendOtherDescribe?: string;
};
export declare type NotificationsADTCreateFormValidationValues = {
    ReceiveDirectSecureEmail?: ValidationFunction<boolean>;
    ReceiveDirectEmailAddress?: ValidationFunction<string>;
    ReceivesFTP?: ValidationFunction<boolean>;
    ReceivePointToPoint?: ValidationFunction<boolean>;
    ReceiveHTTPSnonFHIR?: ValidationFunction<boolean>;
    ReceiveHTTPSFHIR?: ValidationFunction<boolean>;
    ReceiveHTTPSEndpoint?: ValidationFunction<string>;
    ReceiveOther?: ValidationFunction<boolean>;
    ReceiveOtherDescription?: ValidationFunction<string>;
    SendDirectSecureEmail?: ValidationFunction<boolean>;
    SendsFTP?: ValidationFunction<boolean>;
    SendPointToPoint?: ValidationFunction<boolean>;
    SendHTTPSNon_FHIR?: ValidationFunction<boolean>;
    SendHTTPS_FHIR?: ValidationFunction<boolean>;
    SendPortal?: ValidationFunction<boolean>;
    SendOther?: ValidationFunction<boolean>;
    SendOtherDescribe?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationsADTCreateFormOverridesProps = {
    NotificationsADTCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<TextProps>;
    RowGrid1?: PrimitiveOverrideProps<GridProps>;
    ReceiveDirectSecureEmail?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceiveDirectEmailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    ReceivesFTP?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceivePointToPoint?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceiveHTTPSnonFHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid5?: PrimitiveOverrideProps<GridProps>;
    ReceiveHTTPSFHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceiveHTTPSEndpoint?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid6?: PrimitiveOverrideProps<GridProps>;
    ReceiveOther?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceiveOtherDescription?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement2?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement1?: PrimitiveOverrideProps<TextProps>;
    SendDirectSecureEmail?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendsFTP?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendPointToPoint?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendHTTPSNon_FHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendHTTPS_FHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendPortal?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid15?: PrimitiveOverrideProps<GridProps>;
    SendOther?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendOtherDescribe?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationsADTCreateFormProps = React.PropsWithChildren<{
    overrides?: NotificationsADTCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotificationsADTCreateFormInputValues) => NotificationsADTCreateFormInputValues;
    onSuccess?: (fields: NotificationsADTCreateFormInputValues) => void;
    onError?: (fields: NotificationsADTCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationsADTCreateFormInputValues) => NotificationsADTCreateFormInputValues;
    onValidate?: NotificationsADTCreateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationsADTCreateForm(props: NotificationsADTCreateFormProps): React.ReactElement;
