export interface CharacterSchemaI {
  info: InfoI;
  results: CharacterI[];
}

export interface CharacterI {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginI;
  location: LocationI;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

type LocationI = {
  name: string;
  url: string;
};

type OriginI = {
  name: string;
  url: string;
};

type InfoI = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};
