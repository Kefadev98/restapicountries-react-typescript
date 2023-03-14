export interface CountryTypes {
  cca3: string;
  name: {
    common: string;
  };
  region: string;
  subregion: string;
  capital: string;
  tld: string;
  population: number;
  flags: {
    png: string;
  };
  timezones: string;
  maps: {
    googleMaps: string;
  };
  borders: [];
}
