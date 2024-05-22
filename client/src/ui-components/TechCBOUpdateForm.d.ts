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
export declare type TechCBOUpdateFormInputValues = {
    Customer_Management_System?: string;
    CBOCounties?: string[];
    Field0?: string[];
};
export declare type TechCBOUpdateFormValidationValues = {
    Customer_Management_System?: ValidationFunction<string>;
    CBOCounties?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TechCBOUpdateFormOverridesProps = {
    TechCBOUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Customer_Management_System?: PrimitiveOverrideProps<TextFieldProps>;
    CBOCounties?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TechCBOUpdateFormProps = React.PropsWithChildren<{
    overrides?: TechCBOUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    techCBO?: any;
    onSubmit?: (fields: TechCBOUpdateFormInputValues) => TechCBOUpdateFormInputValues;
    onSuccess?: (fields: TechCBOUpdateFormInputValues) => void;
    onError?: (fields: TechCBOUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TechCBOUpdateFormInputValues) => TechCBOUpdateFormInputValues;
    onValidate?: TechCBOUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TechCBOUpdateForm(props: TechCBOUpdateFormProps): React.ReactElement;
