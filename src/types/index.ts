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

export interface CountryCurrency {
  BRL: {
    name: string;
    symbol: string;
  };
}

export interface CountryLanguages {
  por: string;
}

export interface Country {
  name: CountryName;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  flags: CountryFlag;
  currency: CountryCurrency;
  languages: CountryLanguages;
  borders: string[];
  tld: string[];
}
