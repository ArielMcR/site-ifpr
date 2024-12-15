import { Heart } from "lucide-react";
import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.section}>
                <h4 style={styles.heading}>Contato</h4>
                <p style={styles.text}>📞 + 55(44) 0 0000-0000</p>
                <p style={styles.text}>✉️ ifpr-paranavai@ifpr.edu.br</p>
            </div>
            <div style={styles.section}>
                <h4 style={styles.heading}>Informações</h4>
                <ul style={styles.list}>
                    <li><a href="https://ifpr.edu.br/paranavai/menu-institucional/pesquisa-extensao-e-inovacao/">Informações sobre extensão</a></li>
                    <li><a href="https://ifpr.edu.br/paranavai/menu-institucional/historia-do-campus/">
                        Conheça nosso campus  </a></li>

                </ul>
            </div>
            <div style={styles.section}>
                <h4 style={styles.heading}>Nossos Cursos</h4>
                <ul style={styles.list}>
                    <li><a href="https://ifpr.edu.br/paranavai/cursos-tecnicos-integrados/">Cursos Técnicos Integrados</a></li>
                    <li><a href="https://ifpr.edu.br/paranavai/cursos-tecnicos-subsequentes/">Cursos Técnicos Subsequentes</a></li>
                    <li><a href="https://ifpr.edu.br/paranavai/cursos-de-pos-graduacao/">Cursos de Pós-Graduação</a></li>

                </ul>
            </div>
            <div style={styles.social}>
                <h4>Rede Sociais</h4>
                <div style={styles.icons}>
                    <span><a href="https://www.facebook.com/ifprparanavai/">🔗 Facebook</a></span>
                    <span><a href="https://www.youtube.com/conexaoifpr">🔗 YouTube</a></span>
                    <span><a href="https://www.instagram.com/ifpr_pvai/">🔗 Instagram</a></span>
                </div>
            </div>
            <div style={styles.footerBottom}>
                <p>Powered by Ariel Machado Rodrigues and play too much <Heart color="red" /></p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        backgroundColor: "#1c1f25",
        color: "#fff",
        padding: "20px",
        fontSize: "14px",
    },
    section: {
        flex: "1 1 200px",
        margin: "10px",
    },
    heading: {
        color: "#3FA14C",
    },
    list: {
        listStyleType: "none",
        padding: 0,
    },
    text: {
        margin: "5px 0",
    },
    social: {
        textAlign: "center",
        margin: "10px auto",
    },
    icons: {
        display: "flex",
        gap: "10px",
        justifyContent: "center",
    },
    footerBottom: {
        width: "100%",
        textAlign: "center",
        marginTop: "20px",
        borderTop: "1px solid #fff",
        paddingTop: "10px",
    },
};

export default Footer;
