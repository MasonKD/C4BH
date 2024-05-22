/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRequestInfoDos = /* GraphQL */ `
  mutation CreateRequestInfoDos(
    $input: CreateRequestInfoDosInput!
    $condition: ModelRequestInfoDosConditionInput
  ) {
    createRequestInfoDos(input: $input, condition: $condition) {
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
export const updateRequestInfoDos = /* GraphQL */ `
  mutation UpdateRequestInfoDos(
    $input: UpdateRequestInfoDosInput!
    $condition: ModelRequestInfoDosConditionInput
  ) {
    updateRequestInfoDos(input: $input, condition: $condition) {
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
export const deleteRequestInfoDos = /* GraphQL */ `
  mutation DeleteRequestInfoDos(
    $input: DeleteRequestInfoDosInput!
    $condition: ModelRequestInfoDosConditionInput
  ) {
    deleteRequestInfoDos(input: $input, condition: $condition) {
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
export const createNotificationsADTDos = /* GraphQL */ `
  mutation CreateNotificationsADTDos(
    $input: CreateNotificationsADTDosInput!
    $condition: ModelNotificationsADTDosConditionInput
  ) {
    createNotificationsADTDos(input: $input, condition: $condition) {
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
export const updateNotificationsADTDos = /* GraphQL */ `
  mutation UpdateNotificationsADTDos(
    $input: UpdateNotificationsADTDosInput!
    $condition: ModelNotificationsADTDosConditionInput
  ) {
    updateNotificationsADTDos(input: $input, condition: $condition) {
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
export const deleteNotificationsADTDos = /* GraphQL */ `
  mutation DeleteNotificationsADTDos(
    $input: DeleteNotificationsADTDosInput!
    $condition: ModelNotificationsADTDosConditionInput
  ) {
    deleteNotificationsADTDos(input: $input, condition: $condition) {
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
export const createNotificationsADTUno = /* GraphQL */ `
  mutation CreateNotificationsADTUno(
    $input: CreateNotificationsADTUnoInput!
    $condition: ModelNotificationsADTUnoConditionInput
  ) {
    createNotificationsADTUno(input: $input, condition: $condition) {
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
export const updateNotificationsADTUno = /* GraphQL */ `
  mutation UpdateNotificationsADTUno(
    $input: UpdateNotificationsADTUnoInput!
    $condition: ModelNotificationsADTUnoConditionInput
  ) {
    updateNotificationsADTUno(input: $input, condition: $condition) {
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
export const deleteNotificationsADTUno = /* GraphQL */ `
  mutation DeleteNotificationsADTUno(
    $input: DeleteNotificationsADTUnoInput!
    $condition: ModelNotificationsADTUnoConditionInput
  ) {
    deleteNotificationsADTUno(input: $input, condition: $condition) {
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
export const createHIPAA = /* GraphQL */ `
  mutation CreateHIPAA(
    $input: CreateHIPAAInput!
    $condition: ModelHIPAAConditionInput
  ) {
    createHIPAA(input: $input, condition: $condition) {
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
export const updateHIPAA = /* GraphQL */ `
  mutation UpdateHIPAA(
    $input: UpdateHIPAAInput!
    $condition: ModelHIPAAConditionInput
  ) {
    updateHIPAA(input: $input, condition: $condition) {
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
export const deleteHIPAA = /* GraphQL */ `
  mutation DeleteHIPAA(
    $input: DeleteHIPAAInput!
    $condition: ModelHIPAAConditionInput
  ) {
    deleteHIPAA(input: $input, condition: $condition) {
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
export const createRequestInfoUno = /* GraphQL */ `
  mutation CreateRequestInfoUno(
    $input: CreateRequestInfoUnoInput!
    $condition: ModelRequestInfoUnoConditionInput
  ) {
    createRequestInfoUno(input: $input, condition: $condition) {
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
export const updateRequestInfoUno = /* GraphQL */ `
  mutation UpdateRequestInfoUno(
    $input: UpdateRequestInfoUnoInput!
    $condition: ModelRequestInfoUnoConditionInput
  ) {
    updateRequestInfoUno(input: $input, condition: $condition) {
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
export const deleteRequestInfoUno = /* GraphQL */ `
  mutation DeleteRequestInfoUno(
    $input: DeleteRequestInfoUnoInput!
    $condition: ModelRequestInfoUnoConditionInput
  ) {
    deleteRequestInfoUno(input: $input, condition: $condition) {
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
export const createInformationDelivery = /* GraphQL */ `
  mutation CreateInformationDelivery(
    $input: CreateInformationDeliveryInput!
    $condition: ModelInformationDeliveryConditionInput
  ) {
    createInformationDelivery(input: $input, condition: $condition) {
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
export const updateInformationDelivery = /* GraphQL */ `
  mutation UpdateInformationDelivery(
    $input: UpdateInformationDeliveryInput!
    $condition: ModelInformationDeliveryConditionInput
  ) {
    updateInformationDelivery(input: $input, condition: $condition) {
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
export const deleteInformationDelivery = /* GraphQL */ `
  mutation DeleteInformationDelivery(
    $input: DeleteInformationDeliveryInput!
    $condition: ModelInformationDeliveryConditionInput
  ) {
    deleteInformationDelivery(input: $input, condition: $condition) {
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
export const createNotificationsADT = /* GraphQL */ `
  mutation CreateNotificationsADT(
    $input: CreateNotificationsADTInput!
    $condition: ModelNotificationsADTConditionInput
  ) {
    createNotificationsADT(input: $input, condition: $condition) {
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
export const updateNotificationsADT = /* GraphQL */ `
  mutation UpdateNotificationsADT(
    $input: UpdateNotificationsADTInput!
    $condition: ModelNotificationsADTConditionInput
  ) {
    updateNotificationsADT(input: $input, condition: $condition) {
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
export const deleteNotificationsADT = /* GraphQL */ `
  mutation DeleteNotificationsADT(
    $input: DeleteNotificationsADTInput!
    $condition: ModelNotificationsADTConditionInput
  ) {
    deleteNotificationsADT(input: $input, condition: $condition) {
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
export const createTechIntermediaries = /* GraphQL */ `
  mutation CreateTechIntermediaries(
    $input: CreateTechIntermediariesInput!
    $condition: ModelTechIntermediariesConditionInput
  ) {
    createTechIntermediaries(input: $input, condition: $condition) {
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
export const updateTechIntermediaries = /* GraphQL */ `
  mutation UpdateTechIntermediaries(
    $input: UpdateTechIntermediariesInput!
    $condition: ModelTechIntermediariesConditionInput
  ) {
    updateTechIntermediaries(input: $input, condition: $condition) {
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
export const deleteTechIntermediaries = /* GraphQL */ `
  mutation DeleteTechIntermediaries(
    $input: DeleteTechIntermediariesInput!
    $condition: ModelTechIntermediariesConditionInput
  ) {
    deleteTechIntermediaries(input: $input, condition: $condition) {
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
export const createTechCBO = /* GraphQL */ `
  mutation CreateTechCBO(
    $input: CreateTechCBOInput!
    $condition: ModelTechCBOConditionInput
  ) {
    createTechCBO(input: $input, condition: $condition) {
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
export const updateTechCBO = /* GraphQL */ `
  mutation UpdateTechCBO(
    $input: UpdateTechCBOInput!
    $condition: ModelTechCBOConditionInput
  ) {
    updateTechCBO(input: $input, condition: $condition) {
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
export const deleteTechCBO = /* GraphQL */ `
  mutation DeleteTechCBO(
    $input: DeleteTechCBOInput!
    $condition: ModelTechCBOConditionInput
  ) {
    deleteTechCBO(input: $input, condition: $condition) {
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
export const createTechAcute = /* GraphQL */ `
  mutation CreateTechAcute(
    $input: CreateTechAcuteInput!
    $condition: ModelTechAcuteConditionInput
  ) {
    createTechAcute(input: $input, condition: $condition) {
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
export const updateTechAcute = /* GraphQL */ `
  mutation UpdateTechAcute(
    $input: UpdateTechAcuteInput!
    $condition: ModelTechAcuteConditionInput
  ) {
    updateTechAcute(input: $input, condition: $condition) {
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
export const deleteTechAcute = /* GraphQL */ `
  mutation DeleteTechAcute(
    $input: DeleteTechAcuteInput!
    $condition: ModelTechAcuteConditionInput
  ) {
    deleteTechAcute(input: $input, condition: $condition) {
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
export const createUserInfoC4BH = /* GraphQL */ `
  mutation CreateUserInfoC4BH(
    $input: CreateUserInfoC4BHInput!
    $condition: ModelUserInfoC4BHConditionInput
  ) {
    createUserInfoC4BH(input: $input, condition: $condition) {
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
export const updateUserInfoC4BH = /* GraphQL */ `
  mutation UpdateUserInfoC4BH(
    $input: UpdateUserInfoC4BHInput!
    $condition: ModelUserInfoC4BHConditionInput
  ) {
    updateUserInfoC4BH(input: $input, condition: $condition) {
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
export const deleteUserInfoC4BH = /* GraphQL */ `
  mutation DeleteUserInfoC4BH(
    $input: DeleteUserInfoC4BHInput!
    $condition: ModelUserInfoC4BHConditionInput
  ) {
    deleteUserInfoC4BH(input: $input, condition: $condition) {
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
