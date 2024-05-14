/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRequestInfoDos = /* GraphQL */ `
  query GetRequestInfoDos($id: ID!) {
    getRequestInfoDos(id: $id) {
      id
      DxFID
      RequestRespondDirectSecureEmail
      RequestRespondDirectEmailAddress
      RequestRespondIHE
      RequestRespondFHIR
      RequestRespondFHIRendpoint
      RequestRespondOther
      RequestRespondOtherDescribe
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRequestInfoDos = /* GraphQL */ `
  query ListRequestInfoDos(
    $filter: ModelRequestInfoDosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestInfoDos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        DxFID
        RequestRespondDirectSecureEmail
        RequestRespondDirectEmailAddress
        RequestRespondIHE
        RequestRespondFHIR
        RequestRespondFHIRendpoint
        RequestRespondOther
        RequestRespondOtherDescribe
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNotificationsADTDos = /* GraphQL */ `
  query GetNotificationsADTDos($id: ID!) {
    getNotificationsADTDos(id: $id) {
      id
      SendInfoDirectSecureEmail
      SendInfosFTP
      SendInfoHL7v2
      SendInfoMLLP_HTTPS
      SendADTHTTPS_FHIR
      SendADTPortal
      SendADTOther
      SendADTOtherDescribe
      DxFID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotificationsADTDos = /* GraphQL */ `
  query ListNotificationsADTDos(
    $filter: ModelNotificationsADTDosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotificationsADTDos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        SendInfoDirectSecureEmail
        SendInfosFTP
        SendInfoHL7v2
        SendInfoMLLP_HTTPS
        SendADTHTTPS_FHIR
        SendADTPortal
        SendADTOther
        SendADTOtherDescribe
        DxFID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNotificationsADTUno = /* GraphQL */ `
  query GetNotificationsADTUno($id: ID!) {
    getNotificationsADTUno(id: $id) {
      id
      ReceiveADTDirectSecureEmail
      ReceiveADTDirectEmailAddress
      ReceiveADTsFTP
      ReceiveADTPointToPoint
      ReceiveADTHTTPSnonFHIR
      ReceiveADTHTTPSFHIR
      ReceiveADTHTTPSEndpoint
      ReceiveADTOther
      ReceiveADTOtherDescription
      DxFID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotificationsADTUnos = /* GraphQL */ `
  query ListNotificationsADTUnos(
    $filter: ModelNotificationsADTUnoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotificationsADTUnos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ReceiveADTDirectSecureEmail
        ReceiveADTDirectEmailAddress
        ReceiveADTsFTP
        ReceiveADTPointToPoint
        ReceiveADTHTTPSnonFHIR
        ReceiveADTHTTPSFHIR
        ReceiveADTHTTPSEndpoint
        ReceiveADTOther
        ReceiveADTOtherDescription
        DxFID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getC4bhUpdatedModel = /* GraphQL */ `
  query GetC4bhUpdatedModel($id: ID!) {
    getC4bhUpdatedModel(id: $id) {
      id
      User
      EHR_Vendors
      Customer_Management_System
      HIE_or_Inter
      ReceiveADTDirectSecureEmail
      ReceiveADTDirectEmailAddress
      ReceiveADTsFTP
      ReceiveADTPointToPoint
      ReceiveADTHTTPSnonFHIR
      ReceiveADTHTTPSFHIR
      ReceiveADTHTTPSEndpoint
      ReceiveADTOther
      ReceiveADTOtherDescription
      SendADTDirectSecureEmail
      SendADTsFTP
      SendADTPointToPoint
      SendADTHTTPSNon_FHIR
      SendADTHTTPS_FHIR
      SendADTPortal
      SendADTOther
      SendADTOtherDescribe
      RecieveInfoDirectSecureEmail
      RecieveInfosFTP
      RecieveInfoHL7V2
      RecieveInfoMLLP_HTTPS
      RecieveInfoThirdPartyReferral
      RecieveInfoThirdPartyPlatform
      RecieveInfoOther
      RecieveInfoOther_Describe
      RecieveInfoDirectEmailAddress
      SendInfoDirectSecureEmail
      SendInfosFTP
      SendInfoHL7v2
      SendInfoMLLP_HTTPS
      SendInfoThirdPartyReferral
      SendInfoThirdPartyPlatform
      SendInfoOther
      SenInfoOther_Describe
      RequestRecieveDirectSecureEmail
      RequestDirectEmailAddress
      RequestIHE
      RequestFHIR
      RequestOther
      RequestOtherDescribe
      RequestRespondDirectSecureEmail
      RequestRespondIHE
      RequestRespondFHIR
      RequestRespondFHIRendpoint
      RequestRespondOther
      RequestRespondOtherDescribe
      CoveredHIPAA
      HybridHIPAA
      AssociateHIPAA
      NotCoveredHIPAA
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listC4bhUpdatedModels = /* GraphQL */ `
  query ListC4bhUpdatedModels(
    $filter: ModelC4bhUpdatedModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listC4bhUpdatedModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        User
        EHR_Vendors
        Customer_Management_System
        HIE_or_Inter
        ReceiveADTDirectSecureEmail
        ReceiveADTDirectEmailAddress
        ReceiveADTsFTP
        ReceiveADTPointToPoint
        ReceiveADTHTTPSnonFHIR
        ReceiveADTHTTPSFHIR
        ReceiveADTHTTPSEndpoint
        ReceiveADTOther
        ReceiveADTOtherDescription
        SendADTDirectSecureEmail
        SendADTsFTP
        SendADTPointToPoint
        SendADTHTTPSNon_FHIR
        SendADTHTTPS_FHIR
        SendADTPortal
        SendADTOther
        SendADTOtherDescribe
        RecieveInfoDirectSecureEmail
        RecieveInfosFTP
        RecieveInfoHL7V2
        RecieveInfoMLLP_HTTPS
        RecieveInfoThirdPartyReferral
        RecieveInfoThirdPartyPlatform
        RecieveInfoOther
        RecieveInfoOther_Describe
        RecieveInfoDirectEmailAddress
        SendInfoDirectSecureEmail
        SendInfosFTP
        SendInfoHL7v2
        SendInfoMLLP_HTTPS
        SendInfoThirdPartyReferral
        SendInfoThirdPartyPlatform
        SendInfoOther
        SenInfoOther_Describe
        RequestRecieveDirectSecureEmail
        RequestDirectEmailAddress
        RequestIHE
        RequestFHIR
        RequestOther
        RequestOtherDescribe
        RequestRespondDirectSecureEmail
        RequestRespondIHE
        RequestRespondFHIR
        RequestRespondFHIRendpoint
        RequestRespondOther
        RequestRespondOtherDescribe
        CoveredHIPAA
        HybridHIPAA
        AssociateHIPAA
        NotCoveredHIPAA
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHIPAA = /* GraphQL */ `
  query GetHIPAA($id: ID!) {
    getHIPAA(id: $id) {
      id
      CoveredHIPAA
      HybridHIPAA
      AssociateHIPAA
      NotCoveredHIPAA
      DxFID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listHIPAAS = /* GraphQL */ `
  query ListHIPAAS(
    $filter: ModelHIPAAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHIPAAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        CoveredHIPAA
        HybridHIPAA
        AssociateHIPAA
        NotCoveredHIPAA
        DxFID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRequestInfoUno = /* GraphQL */ `
  query GetRequestInfoUno($id: ID!) {
    getRequestInfoUno(id: $id) {
      id
      RequestRecieveDirectSecureEmail
      RequestDirectEmailAddress
      RequestIHE
      RequestFHIR
      RequestOther
      RequestOtherDescribe
      DxFID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRequestInfoUnos = /* GraphQL */ `
  query ListRequestInfoUnos(
    $filter: ModelRequestInfoUnoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestInfoUnos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        RequestRecieveDirectSecureEmail
        RequestDirectEmailAddress
        RequestIHE
        RequestFHIR
        RequestOther
        RequestOtherDescribe
        DxFID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInformationDelivery = /* GraphQL */ `
  query GetInformationDelivery($id: ID!) {
    getInformationDelivery(id: $id) {
      id
      RecieveInfoDirectSecureEmail
      RecieveInfosFTP
      RecieveInfoHL7V2
      RecieveInfoMLLP_HTTPS
      RecieveInfoThirdPartyReferral
      RecieveInfoThirdPartyPlatform
      RecieveInfoOther
      RecieveInfoOther_Describe
      RecieveInfoDirectEmailAddress
      SendInfoDirectSecureEmail
      SendInfosFTP
      SendInfoHL7v2
      SendInfoMLLP_HTTPS
      SendInfoThirdPartyReferral
      SendInfoThirdPartyPlatform
      SendInfoOther
      SenInfoOther_Describe
      DxFID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInformationDeliveries = /* GraphQL */ `
  query ListInformationDeliveries(
    $filter: ModelInformationDeliveryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInformationDeliveries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        RecieveInfoDirectSecureEmail
        RecieveInfosFTP
        RecieveInfoHL7V2
        RecieveInfoMLLP_HTTPS
        RecieveInfoThirdPartyReferral
        RecieveInfoThirdPartyPlatform
        RecieveInfoOther
        RecieveInfoOther_Describe
        RecieveInfoDirectEmailAddress
        SendInfoDirectSecureEmail
        SendInfosFTP
        SendInfoHL7v2
        SendInfoMLLP_HTTPS
        SendInfoThirdPartyReferral
        SendInfoThirdPartyPlatform
        SendInfoOther
        SenInfoOther_Describe
        DxFID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNotificationsADT = /* GraphQL */ `
  query GetNotificationsADT($id: ID!) {
    getNotificationsADT(id: $id) {
      id
      ReceiveADTDirectSecureEmail
      ReceiveADTDirectEmailAddress
      ReceiveADTsFTP
      ReceiveADTPointToPoint
      ReceiveADTHTTPSnonFHIR
      ReceiveADTHTTPSFHIR
      ReceiveADTHTTPSEndpoint
      ReceiveADTOther
      ReceiveADTOtherDescription
      SendADTDirectSecureEmail
      SendADTsFTP
      SendADTPointToPoint
      SendADTHTTPSNon_FHIR
      SendADTHTTPS_FHIR
      SendADTPortal
      SendADTOther
      SendADTOtherDescribe
      DxFID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotificationsADTS = /* GraphQL */ `
  query ListNotificationsADTS(
    $filter: ModelNotificationsADTFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotificationsADTS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ReceiveADTDirectSecureEmail
        ReceiveADTDirectEmailAddress
        ReceiveADTsFTP
        ReceiveADTPointToPoint
        ReceiveADTHTTPSnonFHIR
        ReceiveADTHTTPSFHIR
        ReceiveADTHTTPSEndpoint
        ReceiveADTOther
        ReceiveADTOtherDescription
        SendADTDirectSecureEmail
        SendADTsFTP
        SendADTPointToPoint
        SendADTHTTPSNon_FHIR
        SendADTHTTPS_FHIR
        SendADTPortal
        SendADTOther
        SendADTOtherDescribe
        DxFID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTechIntermediaries = /* GraphQL */ `
  query GetTechIntermediaries($id: ID!) {
    getTechIntermediaries(id: $id) {
      id
      HIE_or_Inter
      DxFID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTechIntermediaries = /* GraphQL */ `
  query ListTechIntermediaries(
    $filter: ModelTechIntermediariesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTechIntermediaries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        HIE_or_Inter
        DxFID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTechCBO = /* GraphQL */ `
  query GetTechCBO($id: ID!) {
    getTechCBO(id: $id) {
      id
      Customer_Management_System
      DxFID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTechCBOS = /* GraphQL */ `
  query ListTechCBOS(
    $filter: ModelTechCBOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTechCBOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Customer_Management_System
        DxFID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTechAcute = /* GraphQL */ `
  query GetTechAcute($id: ID!) {
    getTechAcute(id: $id) {
      id
      EHR_Vendors
      DxFID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTechAcutes = /* GraphQL */ `
  query ListTechAcutes(
    $filter: ModelTechAcuteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTechAcutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        EHR_Vendors
        DxFID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserInfoC4BH = /* GraphQL */ `
  query GetUserInfoC4BH($id: ID!) {
    getUserInfoC4BH(id: $id) {
      id
      User
      DxFID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserInfoC4BHS = /* GraphQL */ `
  query ListUserInfoC4BHS(
    $filter: ModelUserInfoC4BHFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInfoC4BHS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        User
        DxFID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getC4bhFormData = /* GraphQL */ `
  query GetC4bhFormData($id: ID!) {
    getC4bhFormData(id: $id) {
      id
      user
      ParticipantID
      EhrIntersystems
      EhrSmile
      EhrSalesforce
      EhrList
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
      MirthNextGen
      IntegrationOther
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
        user
        ParticipantID
        EhrIntersystems
        EhrSmile
        EhrSalesforce
        EhrList
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
        MirthNextGen
        IntegrationOther
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
