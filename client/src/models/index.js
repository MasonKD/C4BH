// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { C4bhFormData } = initSchema(schema);

export {
  C4bhFormData
};