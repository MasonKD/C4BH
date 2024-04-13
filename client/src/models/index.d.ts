import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerC4bhFormData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<C4bhFormData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Participant: boolean;
  readonly ParticipantID?: string | null;
  readonly EhrIntersystems?: boolean | null;
  readonly EhrSmile?: boolean | null;
  readonly EhrSalesforce?: boolean | null;
  readonly EhrOther?: string | null;
  readonly SendOutboundDirect?: boolean | null;
  readonly SendOutboundSFTP?: boolean | null;
  readonly SendOutboundMLLP?: boolean | null;
  readonly SendOutboundHTTPS?: boolean | null;
  readonly SendOutboundFHIR?: boolean | null;
  readonly SendOutboundNone?: boolean | null;
  readonly SendInformationDirect?: boolean | null;
  readonly SendInformationSFTP?: boolean | null;
  readonly SendInformationMLLP?: boolean | null;
  readonly SendInformationHTTPS?: boolean | null;
  readonly SendInformationFHIR?: boolean | null;
  readonly SendInformationIHE?: boolean | null;
  readonly SendInformationNone?: boolean | null;
  readonly SendRequestDirect?: boolean | null;
  readonly SendRequestSFTP?: boolean | null;
  readonly SendRequestFHIR?: boolean | null;
  readonly SendRequestIHE?: boolean | null;
  readonly SendRequestNone?: boolean | null;
  readonly ReceiveInboundDirect?: boolean | null;
  readonly ReceiveInboundSFTP?: boolean | null;
  readonly ReceiveInboundMLLP?: boolean | null;
  readonly ReceiveInboundHTTPS?: boolean | null;
  readonly ReceiveInboundFHIR?: boolean | null;
  readonly ReceiveInboundNone?: boolean | null;
  readonly ReceiveInformationDirect?: boolean | null;
  readonly ReceiveInformationSFTP?: boolean | null;
  readonly ReceiveInformationMLLP?: boolean | null;
  readonly ReceiveInformationHTTPS?: boolean | null;
  readonly ReceiveInformationFHIR?: boolean | null;
  readonly ReceiveInformationIHE?: boolean | null;
  readonly ReceiveInformationNone?: boolean | null;
  readonly ReceiveRequestDirect?: boolean | null;
  readonly ReceiveRequestSFTP?: boolean | null;
  readonly ReceiveRequestFHIR?: boolean | null;
  readonly ReceiveRequestIHE?: boolean | null;
  readonly ReceiveRequestNone?: boolean | null;
  readonly HIPPA?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyC4bhFormData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<C4bhFormData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Participant: boolean;
  readonly ParticipantID?: string | null;
  readonly EhrIntersystems?: boolean | null;
  readonly EhrSmile?: boolean | null;
  readonly EhrSalesforce?: boolean | null;
  readonly EhrOther?: string | null;
  readonly SendOutboundDirect?: boolean | null;
  readonly SendOutboundSFTP?: boolean | null;
  readonly SendOutboundMLLP?: boolean | null;
  readonly SendOutboundHTTPS?: boolean | null;
  readonly SendOutboundFHIR?: boolean | null;
  readonly SendOutboundNone?: boolean | null;
  readonly SendInformationDirect?: boolean | null;
  readonly SendInformationSFTP?: boolean | null;
  readonly SendInformationMLLP?: boolean | null;
  readonly SendInformationHTTPS?: boolean | null;
  readonly SendInformationFHIR?: boolean | null;
  readonly SendInformationIHE?: boolean | null;
  readonly SendInformationNone?: boolean | null;
  readonly SendRequestDirect?: boolean | null;
  readonly SendRequestSFTP?: boolean | null;
  readonly SendRequestFHIR?: boolean | null;
  readonly SendRequestIHE?: boolean | null;
  readonly SendRequestNone?: boolean | null;
  readonly ReceiveInboundDirect?: boolean | null;
  readonly ReceiveInboundSFTP?: boolean | null;
  readonly ReceiveInboundMLLP?: boolean | null;
  readonly ReceiveInboundHTTPS?: boolean | null;
  readonly ReceiveInboundFHIR?: boolean | null;
  readonly ReceiveInboundNone?: boolean | null;
  readonly ReceiveInformationDirect?: boolean | null;
  readonly ReceiveInformationSFTP?: boolean | null;
  readonly ReceiveInformationMLLP?: boolean | null;
  readonly ReceiveInformationHTTPS?: boolean | null;
  readonly ReceiveInformationFHIR?: boolean | null;
  readonly ReceiveInformationIHE?: boolean | null;
  readonly ReceiveInformationNone?: boolean | null;
  readonly ReceiveRequestDirect?: boolean | null;
  readonly ReceiveRequestSFTP?: boolean | null;
  readonly ReceiveRequestFHIR?: boolean | null;
  readonly ReceiveRequestIHE?: boolean | null;
  readonly ReceiveRequestNone?: boolean | null;
  readonly HIPPA?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type C4bhFormData = LazyLoading extends LazyLoadingDisabled ? EagerC4bhFormData : LazyC4bhFormData

export declare const C4bhFormData: (new (init: ModelInit<C4bhFormData>) => C4bhFormData) & {
  copyOf(source: C4bhFormData, mutator: (draft: MutableModel<C4bhFormData>) => MutableModel<C4bhFormData> | void): C4bhFormData;
}