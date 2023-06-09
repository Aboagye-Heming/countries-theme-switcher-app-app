import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"
import "../assets/css/csscomponents/navbar.scss"
import darkbtn from '../assets/images/Group3.svg'



function NavBar() {
    const { theme, setTheme } = useContext(ThemeContext)

    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
    };

    return (
        <div className="nav-main ">
            <div className="nav-bar container">
                <h3>Where in the world?</h3>
                <div onClick={handleThemeChange} className='dark-mode'>
                    <img src={darkbtn} alt="" />
                    <p>Dark Mode</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar