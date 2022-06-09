// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { WhitelistProof, NFT, NftAttribute } = initSchema(schema);

export {
  WhitelistProof,
  NFT,
  NftAttribute
};