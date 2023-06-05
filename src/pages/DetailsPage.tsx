
import { useEffect, useState } from 'react'
import backbtn from '../assets/images/Shape.svg'
import "../assets/css/csspages/detailspage.scss"
import { Country } from '../types'
import { useParams } from 'react-router-dom'



function DetailsPage() {
    const [country, setCountry] = useState<Country>()

    const { code } = useParams()


    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${code}`).then((response) => {
            response.json().then((data) => {
                setCountry({
                    ...data[0],
                    currencies: data[0].currencies ? Object.values(data[0].currencies) : [],
                    languages: data[0].languages ? Object.values(data[0].languages) : []
                })
            })
        })
    }, [code])

    const getCurrency = (): any => country?.currencies?.[0]?.name
    const getLanguages = () => country?.languages?.[0] || ""
    return (
        <div className='container details'>
            <div className="back">
                <img src={backbtn} alt="" />
                <p>Back</p>
            </div>
            <div className='details-content'>
                <img src={country?.flags?.png} alt={country?.flags?.alt} />
                <div className='details-main-info'>
                    <h3>{country?.name?.official}</h3>
                    <div className='details-info'>
                        <div>
                            <p>Native Name: <span>{country?.name?.nativeName?.ell?.official}</span> </p>
                            <p>Population: <span> {country?.population}</span></p>
                            <p>Region: <span>{country?.region}</span></p>
                            <p>Sub Region: <span> {country?.subregion}</span></p>
                            <p>Capital: <span> {country?.capital}</span></p>
                        </div>
                        <div>
                            <p> Top Level Domain: <span>{country?.tld}</span></p>
                            <p> Currencies: <span>{getCurrency()}</span></p>
                            <p> Languages <span>{getLanguages()}</span></p>
                        </div>
                    </div>
                    <div className='border-wrapper'>
                        <p className="label">Border Countries: </p>
                        <div className="borders">
                            {country?.borders?.map((border) => (
                                <div className='border'><p>{border}</p></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage