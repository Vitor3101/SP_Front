import { Component } from 'react';
import axios from 'axios';
import Header from '../../components/header';

import '../../assets/Style/listagem.css';
import '../../assets/Style/styles.css';

export default class ConsultaPaciente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaConsultas: [],
            idPaciente: '',
        }
    };

    listarConsultas = () => {

        axios.Get("http://")

            .then(resposta => resposta.json())
            .then(dados => this.setState({ listaConsultas: dados }))
            .catch(erro => console.log(erro))
    }

    componentDidMount() {
        this.listarConsultas();
    };

    render() {
        return (

            <body>
                <Header />
                <main>

                    <div class="apoio_listagem container">
                        <table class="tabela_consultas">
                            <thead class="tabela_consultas_cabecalho">
                                <tr>
                                    <td>Proximas consultas</td>
                                    <td>Especialidade</td>
                                    <td>Clinica</td>
                                    <td>Data</td>
                                </tr>
                            </thead>

                            <tbody class="tabela_consultas_corpo">
                                {
                                    this.listarConsultas.map((Consulta) => {
                                        return (
                                            <tr Key={Consulta.idConsulta}>
                                                <td>{Consulta.idPacienteNavigation.idUsuarioNavigation.Nome}</td>
                                                <td>{Consulta.idMedicoNavigation.idEspecialidade.especialidade1}</td>
                                                <td>{Consulta.idMedicoNavigation.idClinicaNavigation.Endereco}</td>
                                                <td>{Consulta.DataConsulta}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                </main>
            </body >
        )
    }
}
