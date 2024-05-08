/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createC4bhUpdatedModel = /* GraphQL */ `
  mutation CreateC4bhUpdatedModel(
    $input: CreateC4bhUpdatedModelInput!
    $condition: ModelC4bhUpdatedModelConditionInput
  ) {
    createC4bhUpdatedModel(input: $input, condition: $condition) {
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
export const updateC4bhUpdatedModel = /* GraphQL */ `
  mutation UpdateC4bhUpdatedModel(
    $input: UpdateC4bhUpdatedModelInput!
    $condition: ModelC4bhUpdatedModelConditionInput
  ) {
    updateC4bhUpdatedModel(input: $input, condition: $condition) {
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
export const deleteC4bhUpdatedModel = /* GraphQL */ `
  mutation DeleteC4bhUpdatedModel(
    $input: DeleteC4bhUpdatedModelInput!
    $condition: ModelC4bhUpdatedModelConditionInput
  ) {
    deleteC4bhUpdatedModel(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRequestInfo = /* GraphQL */ `
  mutation CreateRequestInfo(
    $input: CreateRequestInfoInput!
    $condition: ModelRequestInfoConditionInput
  ) {
    createRequestInfo(input: $input, condition: $condition) {
      id
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
      DxFID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRequestInfo = /* GraphQL */ `
  mutation UpdateRequestInfo(
    $input: UpdateRequestInfoInput!
    $condition: ModelRequestInfoConditionInput
  ) {
    updateRequestInfo(input: $input, condition: $condition) {
      id
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
      DxFID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRequestInfo = /* GraphQL */ `
  mutation DeleteRequestInfo(
    $input: DeleteRequestInfoInput!
    $condition: ModelRequestInfoConditionInput
  ) {
    deleteRequestInfo(input: $input, condition: $condition) {
      id
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
      DxFID
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
      HIE_or_Inter
      DxFID
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
      HIE_or_Inter
      DxFID
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
      HIE_or_Inter
      DxFID
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createC4bhFormData = /* GraphQL */ `
  mutation CreateC4bhFormData(
    $input: CreateC4bhFormDataInput!
    $condition: ModelC4bhFormDataConditionInput
  ) {
    createC4bhFormData(input: $input, condition: $condition) {
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
export const updateC4bhFormData = /* GraphQL */ `
  mutation UpdateC4bhFormData(
    $input: UpdateC4bhFormDataInput!
    $condition: ModelC4bhFormDataConditionInput
  ) {
    updateC4bhFormData(input: $input, condition: $condition) {
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
export const deleteC4bhFormData = /* GraphQL */ `
  mutation DeleteC4bhFormData(
    $input: DeleteC4bhFormDataInput!
    $condition: ModelC4bhFormDataConditionInput
  ) {
    deleteC4bhFormData(input: $input, condition: $condition) {
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
