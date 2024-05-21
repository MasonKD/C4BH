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
export declare type NotificationsADTUnoUpdateFormInputValues = {
    ReceiveADTDirectSecureEmail?: boolean;
    ReceiveADTDirectEmailAddress?: string;
    ReceiveADTsFTP?: boolean;
    ReceiveADTPointToPoint?: boolean;
    ReceiveADTHTTPSnonFHIR?: boolean;
    ReceiveADTHTTPSFHIR?: boolean;
    ReceiveADTHTTPSEndpoint?: string;
    ReceiveADTOther?: boolean;
    ReceiveADTOtherDescription?: string;
    UserIdToken?: string;
};
export declare type NotificationsADTUnoUpdateFormValidationValues = {
    ReceiveADTDirectSecureEmail?: ValidationFunction<boolean>;
    ReceiveADTDirectEmailAddress?: ValidationFunction<string>;
    ReceiveADTsFTP?: ValidationFunction<boolean>;
    ReceiveADTPointToPoint?: ValidationFunction<boolean>;
    ReceiveADTHTTPSnonFHIR?: ValidationFunction<boolean>;
    ReceiveADTHTTPSFHIR?: ValidationFunction<boolean>;
    ReceiveADTHTTPSEndpoint?: ValidationFunction<string>;
    ReceiveADTOther?: ValidationFunction<boolean>;
    ReceiveADTOtherDescription?: ValidationFunction<string>;
    UserIdToken?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationsADTUnoUpdateFormOverridesProps = {
    NotificationsADTUnoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    UserIdToken?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotificationsADTUnoUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotificationsADTUnoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notificationsADTUno?: any;
    onSubmit?: (fields: NotificationsADTUnoUpdateFormInputValues) => NotificationsADTUnoUpdateFormInputValues;
    onSuccess?: (fields: NotificationsADTUnoUpdateFormInputValues) => void;
    onError?: (fields: NotificationsADTUnoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationsADTUnoUpdateFormInputValues) => NotificationsADTUnoUpdateFormInputValues;
    onValidate?: NotificationsADTUnoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationsADTUnoUpdateForm(props: NotificationsADTUnoUpdateFormProps): React.ReactElement;
