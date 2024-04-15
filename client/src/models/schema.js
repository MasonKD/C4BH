export const schema = {
    "models": {
        "C4bhFormData": {
            "name": "C4bhFormData",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Participant": {
                    "name": "Participant",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "ParticipantID": {
                    "name": "ParticipantID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "EhrIntersystems": {
                    "name": "EhrIntersystems",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "EhrSmile": {
                    "name": "EhrSmile",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "EhrSalesforce": {
                    "name": "EhrSalesforce",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "EhrOther": {
                    "name": "EhrOther",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "SendOutboundDirect": {
                    "name": "SendOutboundDirect",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendOutboundSFTP": {
                    "name": "SendOutboundSFTP",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendOutboundMLLP": {
                    "name": "SendOutboundMLLP",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendOutboundHTTPS": {
                    "name": "SendOutboundHTTPS",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendOutboundFHIR": {
                    "name": "SendOutboundFHIR",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendOutboundNone": {
                    "name": "SendOutboundNone",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendInformationDirect": {
                    "name": "SendInformationDirect",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendInformationSFTP": {
                    "name": "SendInformationSFTP",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendInformationMLLP": {
                    "name": "SendInformationMLLP",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendInformationHTTPS": {
                    "name": "SendInformationHTTPS",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendInformationFHIR": {
                    "name": "SendInformationFHIR",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendInformationIHE": {
                    "name": "SendInformationIHE",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendInformationNone": {
                    "name": "SendInformationNone",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendRequestDirect": {
                    "name": "SendRequestDirect",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendRequestSFTP": {
                    "name": "SendRequestSFTP",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendRequestFHIR": {
                    "name": "SendRequestFHIR",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendRequestIHE": {
                    "name": "SendRequestIHE",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "SendRequestNone": {
                    "name": "SendRequestNone",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveInboundDirect": {
                    "name": "ReceiveInboundDirect",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveInboundSFTP": {
                    "name": "ReceiveInboundSFTP",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveInboundMLLP": {
                    "name": "ReceiveInboundMLLP",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveInboundHTTPS": {
                    "name": "ReceiveInboundHTTPS",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveInboundFHIR": {
                    "name": "ReceiveInboundFHIR",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveInboundNone": {
                    "name": "ReceiveInboundNone",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveInformationDirect": {
                    "name": "ReceiveInformationDirect",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveInformationSFTP": {
                    "name": "ReceiveInformationSFTP",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveInformationMLLP": {
                    "name": "ReceiveInformationMLLP",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveInformationHTTPS": {
                    "name": "ReceiveInformationHTTPS",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveInformationFHIR": {
                    "name": "ReceiveInformationFHIR",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveInformationIHE": {
                    "name": "ReceiveInformationIHE",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveInformationNone": {
                    "name": "ReceiveInformationNone",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveRequestDirect": {
                    "name": "ReceiveRequestDirect",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveRequestSFTP": {
                    "name": "ReceiveRequestSFTP",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveRequestFHIR": {
                    "name": "ReceiveRequestFHIR",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveRequestIHE": {
                    "name": "ReceiveRequestIHE",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ReceiveRequestNone": {
                    "name": "ReceiveRequestNone",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "HIPPA": {
                    "name": "HIPPA",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "C4bhFormData",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "codegenVersion": "3.4.4",
    "version": "e3940322ac37df9f42c620069ae493aa"
};