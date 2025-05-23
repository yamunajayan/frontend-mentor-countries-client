// src/types.ts

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Flags {
  svg: string;
  png: string;
}

export interface Country {
  name: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  currencies: Currency[];
  languages: Language[];
  flags: Flags;
  borders: string[];
  topLevelDomain: string[];
  nativeName: string;
}

export interface CountryState {
  list: Country[];
  loading: boolean;
  error: string | null;
  selectedCountry: Country | null; // One specific country
  regionList: Country[]; // Filtered countries by region
}
