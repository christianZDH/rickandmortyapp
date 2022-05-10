/* eslint-disable @typescript-eslint/naming-convention */
export interface locationSchemaI {
  info: InfoI;
  results: LocationI[];
}

export interface LocationI {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

type InfoI = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};
