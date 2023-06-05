export interface CountryName {
  common: string;
  official: string;
  nativeName: {
    ell: {
      official: string;
      common: string;
    };
    tur: {
      official: string;
      common: string;
    };
  };
}

export interface CountryFlag {
  png: string;
  svg: string;
  alt: string;
}

export interface Country {
  name: CountryName;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  flags: CountryFlag;
  currencies: any;
  languages: any;
  borders?: string[];
  tld: string[];
  cca2: string;
}
