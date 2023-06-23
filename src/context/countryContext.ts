import { createContext} from "react";

import { CountryContextType } from "../types";

export const CountryContext = createContext<CountryContextType>({
  countries: [],
  setCountries: () => {},
});

