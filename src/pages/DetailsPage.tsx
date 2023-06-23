import { useEffect, useState, useContext } from "react";
import backbtn from "../assets/images/Shape.svg";
import backBtnWhite from "../assets/images/backBtnWhite.svg";
import "../assets/css/csspages/detailspage.scss";
import { Country } from "../types";
import { useParams, Link } from "react-router-dom";
import { ThemeContext } from "../../src/context/themeContext";
import { CountryContext } from "../context/countryContext";

function DetailsPage() {
  const [country, setCountry] = useState<Country>();
  const { theme } = useContext(ThemeContext);
  const { countries, setCountries } = useContext(CountryContext);

  const { code } = useParams();

  const getBorders = () =>
    countries
      .filter((item) => country?.borders?.some((vitem) => vitem === item.cca3))
      .map((item) => ({
        name: item.name.official,
        cca3: item.cca3,
      }));

  // fetching for the detailspage
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`).then((response) => {
      response.json().then((data) => {
        setCountries(data)
        const selectedCountry = data.find((item:Country) => item.cca3 === code)
        setCountry({
          ...selectedCountry,
          currencies: selectedCountry.currencies
            ? Object.values(selectedCountry.currencies)
            : [],
          languages: selectedCountry.languages ? Object.values(selectedCountry.languages) : [],
        });
      });
    });
  }, [code, setCountries]);

  const getCurrency = (): any => country?.currencies?.[0]?.name;
  const getLanguages = () => country?.languages?.[0] || "";
  return (
    <div className="details">
      <div className="container">
        <Link to="/" className="back">
          <img src={theme === "light" ? backbtn : backBtnWhite} alt="" />
          <p>Back</p>
        </Link>
        <div className="details-content">
          <img src={country?.flags?.png} alt={country?.flags?.alt} />
          <div className="details-main-info">
            <h3>{country?.name?.official}</h3>
            <div className="details-info">
              <div className="info-a">
                <p>
                  Native Name:
                  <span>{country?.name?.nativeName?.ell?.official}</span>
                </p>
                <p>
                  Population: <span> {country?.population}</span>
                </p>
                <p>
                  Region: <span>{country?.region}</span>
                </p>
                <p>
                  Sub Region: <span> {country?.subregion}</span>
                </p>
                <p>
                  Capital: <span> {country?.capital}</span>
                </p>
              </div>
              <div className="info-b">
                <p>
                  Top Level Domain: <span>{country?.tld}</span>
                </p>
                <p>
                  Currencies: <span>{getCurrency()}</span>
                </p>
                <p>
                  Languages <span>{getLanguages()}</span>
                </p>
              </div>
            </div>
            <div className="border-wrapper">
              <p className="label">Border Countries: </p>
              <div className="borders">
                {getBorders().map((border, index) => (
                  <Link to={`/${border.cca3}/details`} className="border" key={index}>
                    <p>{border.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
