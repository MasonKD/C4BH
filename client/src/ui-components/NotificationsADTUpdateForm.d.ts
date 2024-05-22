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
export declare type NotificationsADTUpdateFormInputValues = {
    ReceiveADTDirectSecureEmail?: boolean;
    ReceiveADTDirectEmailAddress?: string;
    ReceiveADTsFTP?: boolean;
    ReceiveADTPointToPoint?: boolean;
    ReceiveADTHTTPSnonFHIR?: boolean;
    ReceiveADTHTTPSFHIR?: boolean;
    ReceiveADTHTTPSEndpoint?: string;
    ReceiveADTOther?: boolean;
    ReceiveADTOtherDescription?: string;
    SendADTDirectSecureEmail?: boolean;
    SendADTsFTP?: boolean;
    SendADTPointToPoint?: boolean;
    SendADTHTTPSNon_FHIR?: boolean;
    SendADTHTTPS_FHIR?: boolean;
    SendADTPortal?: boolean;
    SendADTOther?: boolean;
    SendADTOtherDescribe?: string;
    UserIdToken?: string;
};
export declare type NotificationsADTUpdateFormValidationValues = {
    ReceiveADTDirectSecureEmail?: ValidationFunction<boolean>;
    ReceiveADTDirectEmailAddress?: ValidationFunction<string>;
    ReceiveADTsFTP?: ValidationFunction<boolean>;
    ReceiveADTPointToPoint?: ValidationFunction<boolean>;
    ReceiveADTHTTPSnonFHIR?: ValidationFunction<boolean>;
    ReceiveADTHTTPSFHIR?: ValidationFunction<boolean>;
    ReceiveADTHTTPSEndpoint?: ValidationFunction<string>;
    ReceiveADTOther?: ValidationFunction<boolean>;
    ReceiveADTOtherDescription?: ValidationFunction<string>;
    SendADTDirectSecureEmail?: ValidationFunction<boolean>;
    SendADTsFTP?: ValidationFunction<boolean>;
    SendADTPointToPoint?: ValidationFunction<boolean>;
    SendADTHTTPSNon_FHIR?: ValidationFunction<boolean>;
    SendADTHTTPS_FHIR?: ValidationFunction<boolean>;
    SendADTPortal?: ValidationFunction<boolean>;
    SendADTOther?: ValidationFunction<boolean>;
    SendADTOtherDescribe?: ValidationFunction<string>;
    UserIdToken?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationsADTUpdateFormOverridesProps = {
    NotificationsADTUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<TextProps>;
    RowGrid1?: PrimitiveOverrideProps<GridProps>;
    ReceiveADTDirectSecureEmail?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceiveADTDirectEmailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    ReceiveADTsFTP?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceiveADTPointToPoint?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceiveADTHTTPSnonFHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid5?: PrimitiveOverrideProps<GridProps>;
    ReceiveADTHTTPSFHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceiveADTHTTPSEndpoint?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid6?: PrimitiveOverrideProps<GridProps>;
    ReceiveADTOther?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceiveADTOtherDescription?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement2?: PrimitiveOverrideProps<TextProps>;
    SendADTDirectSecureEmail?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendADTsFTP?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendADTPointToPoint?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendADTHTTPSNon_FHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendADTHTTPS_FHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendADTPortal?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid15?: PrimitiveOverrideProps<GridProps>;
    SendADTOther?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendADTOtherDescribe?: PrimitiveOverrideProps<TextFieldProps>;
    UserIdToken?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationsADTUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotificationsADTUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notificationsADT?: any;
    onSubmit?: (fields: NotificationsADTUpdateFormInputValues) => NotificationsADTUpdateFormInputValues;
    onSuccess?: (fields: NotificationsADTUpdateFormInputValues) => void;
    onError?: (fields: NotificationsADTUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationsADTUpdateFormInputValues) => NotificationsADTUpdateFormInputValues;
    onValidate?: NotificationsADTUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationsADTUpdateForm(props: NotificationsADTUpdateFormProps): React.ReactElement;
