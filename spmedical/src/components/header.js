import React from "react";
import logo from "../Img/SPMedical_Logo.png"

export default function Header(){
    return(
        <header>
        <div className="apoio_header container">
            <section className="bloco_logo">
                <image source={logo} />
                <span>Sua Saúde é com a gente!</span>
            </section>

            <nav className="nav_header">
                <link href="">Pacientes</link>
                <link href="">Médicos</link>
                <link href="">Sobre</link>
                <img src="Img/Icon_Perfil.png" />
            </nav>
        </div>
    </header>
    )
}