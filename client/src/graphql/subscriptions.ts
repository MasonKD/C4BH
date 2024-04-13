/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateC4bhFormData = /* GraphQL */ `subscription OnCreateC4bhFormData(
  $filter: ModelSubscriptionC4bhFormDataFilterInput
) {
  onCreateC4bhFormData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateC4bhFormDataSubscriptionVariables,
  APITypes.OnCreateC4bhFormDataSubscription
>;
export const onUpdateC4bhFormData = /* GraphQL */ `subscription OnUpdateC4bhFormData(
  $filter: ModelSubscriptionC4bhFormDataFilterInput
) {
  onUpdateC4bhFormData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateC4bhFormDataSubscriptionVariables,
  APITypes.OnUpdateC4bhFormDataSubscription
>;
export const onDeleteC4bhFormData = /* GraphQL */ `subscription OnDeleteC4bhFormData(
  $filter: ModelSubscriptionC4bhFormDataFilterInput
) {
  onDeleteC4bhFormData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteC4bhFormDataSubscriptionVariables,
  APITypes.OnDeleteC4bhFormDataSubscription
>;
