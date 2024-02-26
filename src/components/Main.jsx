import { useState, useEffect, useRef } from "react";
import img1 from "./assets/playlist/1.jpeg";
import img2 from "./assets/playlist/2.png";
import img3 from "./assets/playlist/3.jpeg";
import img4 from "./assets/playlist/4.jpeg";
import img5 from "./assets/playlist/5.jpeg";
import img6 from "./assets/playlist/6.jpeg";
import img7 from "./assets/playlist/7.jpeg";
import img8 from "./assets/playlist/8.jpeg";
import img9 from "./assets/playlist/9.jpeg";
import img10 from "./assets/playlist/10.jpeg";
import styles from "./styles/Main.css";

export const Main = () => {
    const [date, setDate] = useState(new Date().toLocaleTimeString());
    const titleRef = useRef(null);

    const setTime = () => {
        if (date <= "11:59:59") {
            titleRef.current.innerText = "Bom dia!";
        } else if (date <= "17:59:59") {
            titleRef.current.innerText = "Boa tarde!";
        } else {
            titleRef.current.innerText = "Boa noite!";
        }
    }

    useEffect(() => {
        setDate(new Date().toLocaleTimeString());
        setTime();
    }, [date]);

    return (
        <main className="main">
            <span className="title" ref={titleRef}></span>
            <span className="subtitle">Navegar por todas as seções</span>

            <div className="cards">
                <a className="card card1" href="">
                    <span>Boas festas</span>
                </a>

                <a className="card card2" href="">
                    <span>Feitos para você</span>
                </a>

                <a className="card card3" href="">
                    <span>Lançamentos</span>
                </a>

                <a className="card card4" href="">
                    <span>Criadores</span>
                </a>

                <a className="card card5" href="">
                    <span>Para treinar</span>
                </a>

                <a className="card card6"  href="">
                    <span>Podcasts</span>
                </a>

                <a className="card card7"  href="">
                    <span>Sertanejo</span>
                </a>

                <a className="card card8"  href="">
                    <span>Samba e pagode</span>
                </a>

                <a className="card card9"  href="">
                    <span>Funk</span>
                </a>

                <a className="card card10" href="">
                    <span>MPB</span>
                </a>
            </div>
        </main>
    );
}