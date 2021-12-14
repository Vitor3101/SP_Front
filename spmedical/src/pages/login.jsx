import { Component } from "react";
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../services/auth.js';
import { Link } from 'react-router-dom';
import '../assets/Style/login.css';
import logo from '../Img/SpMedical_Logo.png';
import perfil from 'Icon_Perfil.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            isLoading: false,
        };
    }

    efetuarLogin = (event) => {
        event.preventDefault();

        this.setState({ erroMensagem: '', isLoading: true });

        axios.post('http:localhost:5000/api/Login', {
            email: this.state.email,
            senha: this.state.senha,
        })

            .then((resposta) => {
                if (resposta.status === 200) {
                    localStorage.setItem('usuario-login').split('.')[1];
                    this.setState({ isLoading: false });
                    let base64 = localStorage.getitem('usuario-login').split('.')[1];
                    console.log(base64);
                }

                console.log(this.props);

                if (parseJwt().role === '1') {
                    this.props.history.push('/');
                    console.log('Logado com o token: ' + usuarioAutenticado());
                }
                else {
                    this.props.history.push('/');
                }
            }

            )
    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value });
    };

    Render() {
        return (<div>


            <body>

                <header>
                    <div class="apoio_header container">
                        <section class="bloco_logo">
                            <img src="Img/SPMedical_Logo.png" />
                            <span>Sua Saúde é com a gente!</span>
                        </section>

                        <nav class="nav_header">
                            <a href="">Pacientes</a>
                            <a href="">Médicos</a>
                            <a href="">Sobre</a>
                            <img src="Img/Icon_Perfil.png" />
                        </nav>
                    </div>
                </header>

                <main>
                    <div class="apoio_login container">

                        <section class="login_bloco_usuarios">
                            <div class="login_apoio_usuarios">
                                <div class="perfis_exemplos">
                                    <img src="Img/Icon_Perfil.png">
                                    <span>Daniela, 37 Anos
                                    Paciente</span>
                                </div>

                                <div class="perfis_exemplos">
                                    <img src="Img/Icon_Perfil.png">
                                    <span>Mariano, 45 anos
                                    Médico, ortopedista.</span>
                                </div>

                                <div class="perfis_exemplos">
                                    <img src="Img/Icon_Perfil.png">
                                    <span>Roberto, 56 anos
                                    Médico, Geral.</span>
                                </div>

                                <div class="perfis_exemplos">
                                    <img src="Img/Icon_Perfil.png">
                                    <span>Ana, 14 anos
                                    Paciente.</span>
                                </div>

                                <div id="apoio_link_cadastrar" class="perfis_exemplos">
                                    <a id="link_cadastrar" href="#">
                                        <span>Não tem um cadastro conosco?
                                            Clique aqui e se torne um novo Usuário SP Medical!</span>
                                    </a>
                                </div>
                            </div>


                        </section>




                        <section class="login_bloco_formulario">
                            <img src="Img/SPMedical_Logo.png">
                                <form class="formulario_login">
                                    <input type="email">
                                        <input type="password">
                                            <button>Login</button>
                                        </form>


                                    </section>

                                </div>



                            </main>

                        </body>
                    </div>


                    )
    }
}

