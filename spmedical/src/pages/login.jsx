import { Component } from "react";
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../services/auth.js';
import { Link } from 'react-router-dom';
import '../assets/Style/login.css';
import '../assets/Style/styles.css';
import logo from '../Img/SpMedical_Logo.png';
import perfil from 'Icon_Perfil.png';
import Header from '../components/header'


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
        return (
            <div>
                <body>
                    <Header />
                    <main>
                        <div className="apoio_login container">

                            <section className="login_bloco_usuarios">
                                <div className="login_apoio_usuarios">
                                    <div className="perfis_exemplos">
                                        <image source={perfil} />
                                        <span>Daniela, 37 Anos
                                            Paciente</span>
                                    </div>

                                    <div className="perfis_exemplos">
                                        <image source={perfil} />
                                        <span>Mariano, 45 anos
                                            Médico, ortopedista.</span>
                                    </div>

                                    <div className="perfis_exemplos">
                                        <image source={perfil} />
                                        <span>Roberto, 56 anos
                                            Médico, Geral.</span>
                                    </div>

                                    <div className="perfis_exemplos">
                                        <image source={perfil} />
                                        <span>Ana, 14 anos
                                            Paciente.</span>
                                    </div>

                                    <div id="apoio_link_cadastrar" className="perfis_exemplos">
                                        <a id="link_cadastrar" href="#">
                                            <span>Não tem um cadastro conosco?
                                                Clique aqui e se torne um novo Usuário SP Medical!</span>
                                        </a>
                                    </div>
                                </div>
                            </section>


                            <section className="login_bloco_formulario">
                                <image source={logo} />
                                <form onSubmit={this.efetuarLogin} className="formulario_login">
                                    <input onChange={this.atualizaStateCampo} value={this.state.email} name="email" type="email" placeholder="Email" />
                                    <input onChange={this.atualizaStateCampo} value={this.state.senha} name="senha" type="password" placeholder="Senha" />
                                    <button type="submit">Login</button>
                                </form>
                            </section>
                        </div>
                    </main>
                </body>
            </div>
        )
    }
}

