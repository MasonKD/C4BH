/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, GridProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type NotificationsADTDosUpdateFormInputValues = {
    SendInfoDirectSecureEmail?: boolean;
    SendInfosFTP?: boolean;
    SendInfoHL7v2?: boolean;
    SendInfoMLLP_HTTPS?: boolean;
    SendADTHTTPS_FHIR?: boolean;
    SendADTPortal?: boolean;
    SendADTOther?: boolean;
    SendADTOtherDescribe?: string;
};
export declare type NotificationsADTDosUpdateFormValidationValues = {
    SendInfoDirectSecureEmail?: ValidationFunction<boolean>;
    SendInfosFTP?: ValidationFunction<boolean>;
    SendInfoHL7v2?: ValidationFunction<boolean>;
    SendInfoMLLP_HTTPS?: ValidationFunction<boolean>;
    SendADTHTTPS_FHIR?: ValidationFunction<boolean>;
    SendADTPortal?: ValidationFunction<boolean>;
    SendADTOther?: ValidationFunction<boolean>;
    SendADTOtherDescribe?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationsADTDosUpdateFormOverridesProps = {
    NotificationsADTDosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<TextProps>;
    SendInfoDirectSecureEmail?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendInfosFTP?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendInfoHL7v2?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendInfoMLLP_HTTPS?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendADTHTTPS_FHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendADTPortal?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid7?: PrimitiveOverrideProps<GridProps>;
    SendADTOther?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendADTOtherDescribe?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationsADTDosUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotificationsADTDosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notificationsADTDos?: any;
    onSubmit?: (fields: NotificationsADTDosUpdateFormInputValues) => NotificationsADTDosUpdateFormInputValues;
    onSuccess?: (fields: NotificationsADTDosUpdateFormInputValues) => void;
    onError?: (fields: NotificationsADTDosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationsADTDosUpdateFormInputValues) => NotificationsADTDosUpdateFormInputValues;
    onValidate?: NotificationsADTDosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationsADTDosUpdateForm(props: NotificationsADTDosUpdateFormProps): React.ReactElement;
