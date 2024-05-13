import AWS from 'aws-sdk';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());


const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;



// Configure AWS SDK
AWS.config.update({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

// Define the query function
const queryDynamoDB = async (req, res) => {
    const dxfNumber = req.query.dxfNumber;  
    if (!dxfNumber) {
        return res.status(400).send('DXF number is required');
    }

    const params = {
        TableName: 'DxFData',
        KeyConditionExpression: 'Participant_ID = :participantId',
        ExpressionAttributeValues: {
            ':participantId': dxfNumber
        },
        ProjectionExpression: '#type, #Information_Delivery, #Request_for_Information, #Requests_for_Notifications_of_ADT_Events',
        ExpressionAttributeNames: {
            '#type': 'Type',
            '#Information_Delivery': 'Information_Delivery',
            '#Request_for_Information': 'Request_for_Information',
            '#Requests_for_Notifications_of_ADT_Events': 'Requests_for_Notifications_of_ADT_Events'
        }
    };

    try {
        const data = await dynamoDB.query(params).promise();
        console.log("Success", data.Items);
        res.json({ data: data.Items });
    } catch (err) {
        console.error('Error querying DynamoDB:', err);
        res.status(500).send('Error querying data');
    }
};

export default queryDynamoDB;




