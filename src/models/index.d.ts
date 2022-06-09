import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class NftAttribute {
  readonly trait_type: string;
  readonly value: string;
  readonly display_type?: string | null;
  constructor(init: ModelInit<NftAttribute>);
}

type WhitelistProofMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NFTMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class WhitelistProof {
  readonly id: string;
  readonly proof?: string[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WhitelistProof, WhitelistProofMetaData>);
  static copyOf(source: WhitelistProof, mutator: (draft: MutableModel<WhitelistProof, WhitelistProofMetaData>) => MutableModel<WhitelistProof, WhitelistProofMetaData> | void): WhitelistProof;
}

export declare class NFT {
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly description: string;
  readonly external_url?: string | null;
  readonly attributes?: (NftAttribute | null)[] | null;
  readonly background_color?: string | null;
  readonly animation_url?: string | null;
  readonly youtube_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NFT, NFTMetaData>);
  static copyOf(source: NFT, mutator: (draft: MutableModel<NFT, NFTMetaData>) => MutableModel<NFT, NFTMetaData> | void): NFT;
}