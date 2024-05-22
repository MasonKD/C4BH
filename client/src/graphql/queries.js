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
      UserIdToken
      RequestRespondNationalNetworkDos
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
        UserIdToken
        RequestRespondNationalNetworkDos
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
      UserIdToken
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
        UserIdToken
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
      UserIdToken
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
        UserIdToken
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
      UserIdToken
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
        UserIdToken
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
      RequestRespondNationalNetworUno
      RequestOther
      RequestOtherDescribe
      DxFID
      UserIdToken
      RequestFHIR
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
        RequestRespondNationalNetworUno
        RequestOther
        RequestOtherDescribe
        DxFID
        UserIdToken
        RequestFHIR
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
      UserIdToken
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
        UserIdToken
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
      UserIdToken
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
        UserIdToken
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
      IntIntegrationEngineUsed
      IntClinicalDataRepoUsed
      DxFID
      UserIdToken
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
        IntIntegrationEngineUsed
        IntClinicalDataRepoUsed
        DxFID
        UserIdToken
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
      UserIdToken
      CBOCounties
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
        UserIdToken
        CBOCounties
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
      UserIdToken
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
        UserIdToken
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
      UserIdToken
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
        UserIdToken
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
