import { Info } from "../../../models/info.model";

export interface LocationResponse {
  info: Info;
  results: Location[];
}

export interface Location {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: string[];
  type: string;
  url: string;
}
