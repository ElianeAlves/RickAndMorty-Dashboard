import { Info } from "../../../models/info.model";

export interface EpisodeResponse {
  info: Info;
  results: Episode[];
}

export interface Episode {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}
