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
export declare type NotificationsADTUnoCreateFormInputValues = {
    ReceiveADTDirectSecureEmail?: boolean;
    ReceiveADTDirectEmailAddress?: string;
    ReceiveADTsFTP?: boolean;
    ReceiveADTPointToPoint?: boolean;
    ReceiveADTHTTPSnonFHIR?: boolean;
    ReceiveADTHTTPSFHIR?: boolean;
    ReceiveADTHTTPSEndpoint?: string;
    ReceiveADTOther?: boolean;
    ReceiveADTOtherDescription?: string;
};
export declare type NotificationsADTUnoCreateFormValidationValues = {
    ReceiveADTDirectSecureEmail?: ValidationFunction<boolean>;
    ReceiveADTDirectEmailAddress?: ValidationFunction<string>;
    ReceiveADTsFTP?: ValidationFunction<boolean>;
    ReceiveADTPointToPoint?: ValidationFunction<boolean>;
    ReceiveADTHTTPSnonFHIR?: ValidationFunction<boolean>;
    ReceiveADTHTTPSFHIR?: ValidationFunction<boolean>;
    ReceiveADTHTTPSEndpoint?: ValidationFunction<string>;
    ReceiveADTOther?: ValidationFunction<boolean>;
    ReceiveADTOtherDescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationsADTUnoCreateFormOverridesProps = {
    NotificationsADTUnoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement1?: PrimitiveOverrideProps<TextProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    ReceiveADTDirectSecureEmail?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceiveADTDirectEmailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    ReceiveADTsFTP?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceiveADTPointToPoint?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceiveADTHTTPSnonFHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid6?: PrimitiveOverrideProps<GridProps>;
    ReceiveADTHTTPSFHIR?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceiveADTHTTPSEndpoint?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid7?: PrimitiveOverrideProps<GridProps>;
    ReceiveADTOther?: PrimitiveOverrideProps<CheckboxFieldProps>;
    ReceiveADTOtherDescription?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationsADTUnoCreateFormProps = React.PropsWithChildren<{
    overrides?: NotificationsADTUnoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotificationsADTUnoCreateFormInputValues) => NotificationsADTUnoCreateFormInputValues;
    onSuccess?: (fields: NotificationsADTUnoCreateFormInputValues) => void;
    onError?: (fields: NotificationsADTUnoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationsADTUnoCreateFormInputValues) => NotificationsADTUnoCreateFormInputValues;
    onValidate?: NotificationsADTUnoCreateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationsADTUnoCreateForm(props: NotificationsADTUnoCreateFormProps): React.ReactElement;
