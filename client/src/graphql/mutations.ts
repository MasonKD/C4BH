/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createC4bhFormData = /* GraphQL */ `mutation CreateC4bhFormData(
  $input: CreateC4bhFormDataInput!
  $condition: ModelC4bhFormDataConditionInput
) {
  createC4bhFormData(input: $input, condition: $condition) {
    id
    Participant
    ParticipantID
    EhrIntersystems
    EhrSmile
    EhrSalesforce
    EhrOther
    SendOutboundDirect
    SendOutboundSFTP
    SendOutboundMLLP
    SendOutboundHTTPS
    SendOutboundFHIR
    SendOutboundNone
    SendInformationDirect
    SendInformationSFTP
    SendInformationMLLP
    SendInformationHTTPS
    SendInformationFHIR
    SendInformationIHE
    SendInformationNone
    SendRequestDirect
    SendRequestSFTP
    SendRequestFHIR
    SendRequestIHE
    SendRequestNone
    ReceiveInboundDirect
    ReceiveInboundSFTP
    ReceiveInboundMLLP
    ReceiveInboundHTTPS
    ReceiveInboundFHIR
    ReceiveInboundNone
    ReceiveInformationDirect
    ReceiveInformationSFTP
    ReceiveInformationMLLP
    ReceiveInformationHTTPS
    ReceiveInformationFHIR
    ReceiveInformationIHE
    ReceiveInformationNone
    ReceiveRequestDirect
    ReceiveRequestSFTP
    ReceiveRequestFHIR
    ReceiveRequestIHE
    ReceiveRequestNone
    HIPPA
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateC4bhFormDataMutationVariables,
  APITypes.CreateC4bhFormDataMutation
>;
export const updateC4bhFormData = /* GraphQL */ `mutation UpdateC4bhFormData(
  $input: UpdateC4bhFormDataInput!
  $condition: ModelC4bhFormDataConditionInput
) {
  updateC4bhFormData(input: $input, condition: $condition) {
    id
    Participant
    ParticipantID
    EhrIntersystems
    EhrSmile
    EhrSalesforce
    EhrOther
    SendOutboundDirect
    SendOutboundSFTP
    SendOutboundMLLP
    SendOutboundHTTPS
    SendOutboundFHIR
    SendOutboundNone
    SendInformationDirect
    SendInformationSFTP
    SendInformationMLLP
    SendInformationHTTPS
    SendInformationFHIR
    SendInformationIHE
    SendInformationNone
    SendRequestDirect
    SendRequestSFTP
    SendRequestFHIR
    SendRequestIHE
    SendRequestNone
    ReceiveInboundDirect
    ReceiveInboundSFTP
    ReceiveInboundMLLP
    ReceiveInboundHTTPS
    ReceiveInboundFHIR
    ReceiveInboundNone
    ReceiveInformationDirect
    ReceiveInformationSFTP
    ReceiveInformationMLLP
    ReceiveInformationHTTPS
    ReceiveInformationFHIR
    ReceiveInformationIHE
    ReceiveInformationNone
    ReceiveRequestDirect
    ReceiveRequestSFTP
    ReceiveRequestFHIR
    ReceiveRequestIHE
    ReceiveRequestNone
    HIPPA
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateC4bhFormDataMutationVariables,
  APITypes.UpdateC4bhFormDataMutation
>;
export const deleteC4bhFormData = /* GraphQL */ `mutation DeleteC4bhFormData(
  $input: DeleteC4bhFormDataInput!
  $condition: ModelC4bhFormDataConditionInput
) {
  deleteC4bhFormData(input: $input, condition: $condition) {
    id
    Participant
    ParticipantID
    EhrIntersystems
    EhrSmile
    EhrSalesforce
    EhrOther
    SendOutboundDirect
    SendOutboundSFTP
    SendOutboundMLLP
    SendOutboundHTTPS
    SendOutboundFHIR
    SendOutboundNone
    SendInformationDirect
    SendInformationSFTP
    SendInformationMLLP
    SendInformationHTTPS
    SendInformationFHIR
    SendInformationIHE
    SendInformationNone
    SendRequestDirect
    SendRequestSFTP
    SendRequestFHIR
    SendRequestIHE
    SendRequestNone
    ReceiveInboundDirect
    ReceiveInboundSFTP
    ReceiveInboundMLLP
    ReceiveInboundHTTPS
    ReceiveInboundFHIR
    ReceiveInboundNone
    ReceiveInformationDirect
    ReceiveInformationSFTP
    ReceiveInformationMLLP
    ReceiveInformationHTTPS
    ReceiveInformationFHIR
    ReceiveInformationIHE
    ReceiveInformationNone
    ReceiveRequestDirect
    ReceiveRequestSFTP
    ReceiveRequestFHIR
    ReceiveRequestIHE
    ReceiveRequestNone
    HIPPA
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteC4bhFormDataMutationVariables,
  APITypes.DeleteC4bhFormDataMutation
>;
