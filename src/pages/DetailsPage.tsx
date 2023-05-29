
import backbtn from '../assets/images/Shape.svg'
import flag from "../assets/images/1280px-Flag_of_Germany.svg.png"
import "../assets/css/csspages/detailspage.scss"


function DetailsPage() {
    return (
        <div className='container details'>
            <div className="back">
                <img src={backbtn} alt="" />
                <p>Back</p>
            </div>

            <div className='details-content'>
                <img src={flag} alt="" />
                <div className='details-main-info'>
                    <h3>Belgium</h3>
                    <div className='details-info'>
                        <div>
                            <p>Native Name: <span>België</span> </p>
                            <p>Population: <span> 11,319,511</span></p>
                            <p>Region: <span> Europe</span></p>
                            <p>Sub Region: <span> Western Europe</span></p>
                            <p>Capital: <span> Brussels</span></p>
                        </div>
                        <div>
                            <p> Top Level Domain: <span> .be</span></p>
                            <p> Currencies: <span> Euro</span></p>
                            <p> Languages <span>Dutch, French, Germane</span></p>
                        </div>
                    </div>
                    <div className="border">
                        <p>Border Countries: <span>France span Germany Netherlands</span> </p></div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage