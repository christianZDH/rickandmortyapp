/* eslint-disable @typescript-eslint/naming-convention */
export interface EpisodeSchemaI {
  info: InfoI;
  results: EpisodeI[];
}

export interface EpisodeI {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}

type InfoI = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};
