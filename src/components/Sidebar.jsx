import logo from "./assets/icons/logo-spotify.png";
import styles from "./Sidebar.css";
import { FaHome, FaSearch, FaBook, FaPlus, FaGlobe } from "react-icons/fa";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="navigation">
                <img src={logo} alt="Logo do Spotify" />
                <ul>
                    <li>
                        <span><FaHome className="icons" /></span>
                        <span>Início</span>
                    </li>
                    <li>
                        <span><FaSearch className="icons" /></span>
                        <span>Buscar</span>
                    </li>
                </ul>   
            </nav>
           
            <div className="library">
                <div className="library_content">
                    <span> <FaBook className="icons" /></span>
                    <span className="library_text">Sua biblioteca</span>
                    <span><FaPlus className="icons" /></span>
                </div>

                <div className="playlist">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar.</span>
                    <button className="playlist_button">Criar playlist</button>
                </div>

                <a href="">Cookies</a>
                <button className="library_button">
                    <FaGlobe className="globe" /> Português do Brasil
                </button>
            </div>

        </div>
    );
}