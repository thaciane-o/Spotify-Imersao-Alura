import arrow_left from "./assets/icons/small-left.png";
import arrow_right from "./assets/icons/small-right.png";
import search from "./assets/icons/search.png";
import styles from "./styles/Navbar.css";

export const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar_arrows">
                <button>
                    <img src={arrow_left} alt="" />
                </button>
                <button>
                    <img src={arrow_right} alt="" />
                </button>
            </div> 

            <div className="navbar_searchbar">
                <img src={search} alt="" />
                <input 
                    id="search-input" 
                    type="text"
                    maxLength="800"
                    autoCorrect="off"
                    autoCapitalize="none"
                    spellCheck="ffalse"
                    placeholder="O que você quer ouvir?"
                    value=""
                />
            </div> 

            <div className="navbar_buttons">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    );
}