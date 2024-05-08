/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TechCBOCreateFormInputValues = {
    Customer_Management_System?: string;
};
export declare type TechCBOCreateFormValidationValues = {
    Customer_Management_System?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechCBOCreateFormOverridesProps = {
    TechCBOCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Customer_Management_System?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TechCBOCreateFormProps = React.PropsWithChildren<{
    overrides?: TechCBOCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TechCBOCreateFormInputValues) => TechCBOCreateFormInputValues;
    onSuccess?: (fields: TechCBOCreateFormInputValues) => void;
    onError?: (fields: TechCBOCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TechCBOCreateFormInputValues) => TechCBOCreateFormInputValues;
    onValidate?: TechCBOCreateFormValidationValues;
} & React.CSSProperties>;
export default function TechCBOCreateForm(props: TechCBOCreateFormProps): React.ReactElement;
