import { Country } from '../types';
import '../assets/css/countrycard.scss';
import flag from "../assets/images/1280px-Flag_of_Germany.svg.png"

interface CountryCardProps {
  country: Country
}
export default function CountryCard({ country }: CountryCardProps) {
  return (
    <div className="country">
      <img className="country__flag"  src={country.flags.png} alt={country.flags.alt} />
      <div className="country__description">
        <h4>{country.name.official}</h4>
        <p>
          <span>Population:</span> {country.population}
        </p>
        <p>
          <span>Region:</span> {country.region}
        </p>
        <p>
          <span>Capital:</span> {country.capital}
        </p>
      </div>
    </div>
  );
}
