import "../assets/css/csscomponents/navbar.scss"
import darkbtn from '../assets/images/Group3.svg'



function NavBar() {
    return (
        <div className="nav-main">
            <div className="nav-bar container">
                <h3>Where in the world?</h3>
                <div className='dark-mode'>
                    <img src={darkbtn} alt="" />
                    <p>Dark Mode</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar