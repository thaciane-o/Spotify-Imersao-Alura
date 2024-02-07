import styles from "./styles/Footer.css";

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer_text">
                <span className="title">Testar o premium de graça</span>
                <span className="subtitle">
                    Inscreva-se para curtir música ilimitada e podcasts só 
                    com alguns anúncios. Não precisa de cartão de crédito.
                </span>
            </div>
            <button className="footer_button">Inscreva-se grátis</button>
        </footer>
    );
}