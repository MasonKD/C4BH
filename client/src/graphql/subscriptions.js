/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRequestInfoDos = /* GraphQL */ `
  subscription OnCreateRequestInfoDos(
    $filter: ModelSubscriptionRequestInfoDosFilterInput
  ) {
    onCreateRequestInfoDos(filter: $filter) {
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
export const onUpdateRequestInfoDos = /* GraphQL */ `
  subscription OnUpdateRequestInfoDos(
    $filter: ModelSubscriptionRequestInfoDosFilterInput
  ) {
    onUpdateRequestInfoDos(filter: $filter) {
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
export const onDeleteRequestInfoDos = /* GraphQL */ `
  subscription OnDeleteRequestInfoDos(
    $filter: ModelSubscriptionRequestInfoDosFilterInput
  ) {
    onDeleteRequestInfoDos(filter: $filter) {
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
export const onCreateNotificationsADTDos = /* GraphQL */ `
  subscription OnCreateNotificationsADTDos(
    $filter: ModelSubscriptionNotificationsADTDosFilterInput
  ) {
    onCreateNotificationsADTDos(filter: $filter) {
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
export const onUpdateNotificationsADTDos = /* GraphQL */ `
  subscription OnUpdateNotificationsADTDos(
    $filter: ModelSubscriptionNotificationsADTDosFilterInput
  ) {
    onUpdateNotificationsADTDos(filter: $filter) {
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
export const onDeleteNotificationsADTDos = /* GraphQL */ `
  subscription OnDeleteNotificationsADTDos(
    $filter: ModelSubscriptionNotificationsADTDosFilterInput
  ) {
    onDeleteNotificationsADTDos(filter: $filter) {
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
export const onCreateNotificationsADTUno = /* GraphQL */ `
  subscription OnCreateNotificationsADTUno(
    $filter: ModelSubscriptionNotificationsADTUnoFilterInput
  ) {
    onCreateNotificationsADTUno(filter: $filter) {
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
export const onUpdateNotificationsADTUno = /* GraphQL */ `
  subscription OnUpdateNotificationsADTUno(
    $filter: ModelSubscriptionNotificationsADTUnoFilterInput
  ) {
    onUpdateNotificationsADTUno(filter: $filter) {
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
export const onDeleteNotificationsADTUno = /* GraphQL */ `
  subscription OnDeleteNotificationsADTUno(
    $filter: ModelSubscriptionNotificationsADTUnoFilterInput
  ) {
    onDeleteNotificationsADTUno(filter: $filter) {
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
export const onCreateHIPAA = /* GraphQL */ `
  subscription OnCreateHIPAA($filter: ModelSubscriptionHIPAAFilterInput) {
    onCreateHIPAA(filter: $filter) {
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
export const onUpdateHIPAA = /* GraphQL */ `
  subscription OnUpdateHIPAA($filter: ModelSubscriptionHIPAAFilterInput) {
    onUpdateHIPAA(filter: $filter) {
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
export const onDeleteHIPAA = /* GraphQL */ `
  subscription OnDeleteHIPAA($filter: ModelSubscriptionHIPAAFilterInput) {
    onDeleteHIPAA(filter: $filter) {
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
export const onCreateRequestInfoUno = /* GraphQL */ `
  subscription OnCreateRequestInfoUno(
    $filter: ModelSubscriptionRequestInfoUnoFilterInput
  ) {
    onCreateRequestInfoUno(filter: $filter) {
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
export const onUpdateRequestInfoUno = /* GraphQL */ `
  subscription OnUpdateRequestInfoUno(
    $filter: ModelSubscriptionRequestInfoUnoFilterInput
  ) {
    onUpdateRequestInfoUno(filter: $filter) {
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
export const onDeleteRequestInfoUno = /* GraphQL */ `
  subscription OnDeleteRequestInfoUno(
    $filter: ModelSubscriptionRequestInfoUnoFilterInput
  ) {
    onDeleteRequestInfoUno(filter: $filter) {
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
export const onCreateInformationDelivery = /* GraphQL */ `
  subscription OnCreateInformationDelivery(
    $filter: ModelSubscriptionInformationDeliveryFilterInput
  ) {
    onCreateInformationDelivery(filter: $filter) {
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
export const onUpdateInformationDelivery = /* GraphQL */ `
  subscription OnUpdateInformationDelivery(
    $filter: ModelSubscriptionInformationDeliveryFilterInput
  ) {
    onUpdateInformationDelivery(filter: $filter) {
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
export const onDeleteInformationDelivery = /* GraphQL */ `
  subscription OnDeleteInformationDelivery(
    $filter: ModelSubscriptionInformationDeliveryFilterInput
  ) {
    onDeleteInformationDelivery(filter: $filter) {
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
export const onCreateNotificationsADT = /* GraphQL */ `
  subscription OnCreateNotificationsADT(
    $filter: ModelSubscriptionNotificationsADTFilterInput
  ) {
    onCreateNotificationsADT(filter: $filter) {
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
export const onUpdateNotificationsADT = /* GraphQL */ `
  subscription OnUpdateNotificationsADT(
    $filter: ModelSubscriptionNotificationsADTFilterInput
  ) {
    onUpdateNotificationsADT(filter: $filter) {
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
export const onDeleteNotificationsADT = /* GraphQL */ `
  subscription OnDeleteNotificationsADT(
    $filter: ModelSubscriptionNotificationsADTFilterInput
  ) {
    onDeleteNotificationsADT(filter: $filter) {
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
export const onCreateTechIntermediaries = /* GraphQL */ `
  subscription OnCreateTechIntermediaries(
    $filter: ModelSubscriptionTechIntermediariesFilterInput
  ) {
    onCreateTechIntermediaries(filter: $filter) {
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
export const onUpdateTechIntermediaries = /* GraphQL */ `
  subscription OnUpdateTechIntermediaries(
    $filter: ModelSubscriptionTechIntermediariesFilterInput
  ) {
    onUpdateTechIntermediaries(filter: $filter) {
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
export const onDeleteTechIntermediaries = /* GraphQL */ `
  subscription OnDeleteTechIntermediaries(
    $filter: ModelSubscriptionTechIntermediariesFilterInput
  ) {
    onDeleteTechIntermediaries(filter: $filter) {
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
export const onCreateTechCBO = /* GraphQL */ `
  subscription OnCreateTechCBO($filter: ModelSubscriptionTechCBOFilterInput) {
    onCreateTechCBO(filter: $filter) {
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
export const onUpdateTechCBO = /* GraphQL */ `
  subscription OnUpdateTechCBO($filter: ModelSubscriptionTechCBOFilterInput) {
    onUpdateTechCBO(filter: $filter) {
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
export const onDeleteTechCBO = /* GraphQL */ `
  subscription OnDeleteTechCBO($filter: ModelSubscriptionTechCBOFilterInput) {
    onDeleteTechCBO(filter: $filter) {
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
export const onCreateTechAcute = /* GraphQL */ `
  subscription OnCreateTechAcute(
    $filter: ModelSubscriptionTechAcuteFilterInput
  ) {
    onCreateTechAcute(filter: $filter) {
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
export const onUpdateTechAcute = /* GraphQL */ `
  subscription OnUpdateTechAcute(
    $filter: ModelSubscriptionTechAcuteFilterInput
  ) {
    onUpdateTechAcute(filter: $filter) {
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
export const onDeleteTechAcute = /* GraphQL */ `
  subscription OnDeleteTechAcute(
    $filter: ModelSubscriptionTechAcuteFilterInput
  ) {
    onDeleteTechAcute(filter: $filter) {
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
export const onCreateUserInfoC4BH = /* GraphQL */ `
  subscription OnCreateUserInfoC4BH(
    $filter: ModelSubscriptionUserInfoC4BHFilterInput
  ) {
    onCreateUserInfoC4BH(filter: $filter) {
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
export const onUpdateUserInfoC4BH = /* GraphQL */ `
  subscription OnUpdateUserInfoC4BH(
    $filter: ModelSubscriptionUserInfoC4BHFilterInput
  ) {
    onUpdateUserInfoC4BH(filter: $filter) {
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
export const onDeleteUserInfoC4BH = /* GraphQL */ `
  subscription OnDeleteUserInfoC4BH(
    $filter: ModelSubscriptionUserInfoC4BHFilterInput
  ) {
    onDeleteUserInfoC4BH(filter: $filter) {
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
