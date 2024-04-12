/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getC4bhFormData = /* GraphQL */ `
  query GetC4bhFormData($id: ID!) {
    getC4bhFormData(id: $id) {
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
`;
export const listC4bhFormData = /* GraphQL */ `
  query ListC4bhFormData(
    $filter: ModelC4bhFormDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listC4bhFormData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
