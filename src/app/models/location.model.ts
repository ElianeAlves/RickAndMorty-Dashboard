export interface Location {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: [
    {
      created: string;
      dimension: string;
      id: number;
      name: string;
      residents: string[];
      type: string;
      url: string;
    }
  ];
}
