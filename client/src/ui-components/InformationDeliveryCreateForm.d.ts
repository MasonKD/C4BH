/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, CheckboxFieldProps, DividerProps, GridProps, SelectFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type InformationDeliveryCreateFormInputValues = {
    RecieveInfoDirectSecureEmail?: boolean;
    RecieveInfoDirectEmailAddress?: string;
    RecieveInfosFTP?: boolean;
    RecieveInfoHL7V2?: boolean;
    RecieveInfoMLLP_HTTPS?: string;
    RecieveInfoThirdPartyReferral?: boolean;
    RecieveInfoThirdPartyPlatform?: string;
    RecieveInfoOther?: boolean;
    RecieveInfoOther_Describe?: string;
    SendInfoDirectSecureEmail?: boolean;
    SendInfosFTP?: boolean;
    SendInfoHL7v2?: boolean;
    SendInfoMLLP_HTTPS?: string;
    SendInfoThirdPartyReferral?: boolean;
    SendInfoThirdPartyPlatform?: string;
    SendInfoOther?: boolean;
    SenInfoOther_Describe?: string;
};
export declare type InformationDeliveryCreateFormValidationValues = {
    RecieveInfoDirectSecureEmail?: ValidationFunction<boolean>;
    RecieveInfoDirectEmailAddress?: ValidationFunction<string>;
    RecieveInfosFTP?: ValidationFunction<boolean>;
    RecieveInfoHL7V2?: ValidationFunction<boolean>;
    RecieveInfoMLLP_HTTPS?: ValidationFunction<string>;
    RecieveInfoThirdPartyReferral?: ValidationFunction<boolean>;
    RecieveInfoThirdPartyPlatform?: ValidationFunction<string>;
    RecieveInfoOther?: ValidationFunction<boolean>;
    RecieveInfoOther_Describe?: ValidationFunction<string>;
    SendInfoDirectSecureEmail?: ValidationFunction<boolean>;
    SendInfosFTP?: ValidationFunction<boolean>;
    SendInfoHL7v2?: ValidationFunction<boolean>;
    SendInfoMLLP_HTTPS?: ValidationFunction<string>;
    SendInfoThirdPartyReferral?: ValidationFunction<boolean>;
    SendInfoThirdPartyPlatform?: ValidationFunction<string>;
    SendInfoOther?: ValidationFunction<boolean>;
    SenInfoOther_Describe?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InformationDeliveryCreateFormOverridesProps = {
    InformationDeliveryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<TextProps>;
    RowGrid1?: PrimitiveOverrideProps<GridProps>;
    RecieveInfoDirectSecureEmail?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RecieveInfoDirectEmailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    RecieveInfosFTP?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid3?: PrimitiveOverrideProps<GridProps>;
    RecieveInfoHL7V2?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RecieveInfoMLLP_HTTPS?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid4?: PrimitiveOverrideProps<GridProps>;
    RecieveInfoThirdPartyReferral?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RecieveInfoThirdPartyPlatform?: PrimitiveOverrideProps<AutocompleteProps>;
    RowGrid5?: PrimitiveOverrideProps<GridProps>;
    RecieveInfoOther?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RecieveInfoOther_Describe?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement2?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement3?: PrimitiveOverrideProps<TextProps>;
    SendInfoDirectSecureEmail?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendInfosFTP?: PrimitiveOverrideProps<CheckboxFieldProps>;
    RowGrid10?: PrimitiveOverrideProps<GridProps>;
    SendInfoHL7v2?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendInfoMLLP_HTTPS?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid11?: PrimitiveOverrideProps<GridProps>;
    SendInfoThirdPartyReferral?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SendInfoThirdPartyPlatform?: PrimitiveOverrideProps<AutocompleteProps>;
    RowGrid12?: PrimitiveOverrideProps<GridProps>;
    SendInfoOther?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SenInfoOther_Describe?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InformationDeliveryCreateFormProps = React.PropsWithChildren<{
    overrides?: InformationDeliveryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InformationDeliveryCreateFormInputValues) => InformationDeliveryCreateFormInputValues;
    onSuccess?: (fields: InformationDeliveryCreateFormInputValues) => void;
    onError?: (fields: InformationDeliveryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InformationDeliveryCreateFormInputValues) => InformationDeliveryCreateFormInputValues;
    onValidate?: InformationDeliveryCreateFormValidationValues;
} & React.CSSProperties>;
export default function InformationDeliveryCreateForm(props: InformationDeliveryCreateFormProps): React.ReactElement;
