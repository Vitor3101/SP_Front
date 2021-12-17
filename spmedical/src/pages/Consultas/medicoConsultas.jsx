import { Component } from 'react';
import axios from 'axiox';
import Header from '../../components/header';

import '../../assets/Style/styles.css';
import '../../assets/Style/listagem';

export default class ConsultaMedico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaConsultas: [],
            listaPacientes: [],
            idMedico: '',
        }
    };

    listarConsultas = () => {

        fetch('http://localhost:5000/api/Consultas/Minhas')

            .then(reposta => resposta.json())
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
                                    <td>Paciente</td>
                                    <td>Especialidade</td>
                                    <td>Clinica</td>
                                    <td>Data</td>
                                </tr>
                            </thead>

                            <tbody class="tabela_consultas_corpo">
                                {
                                    this.listarConsultas.map((Consulta) => {
                                        return (
                                            <tr key={Consulta.idMedico}>
                                                <td>{Consulta.idMedicoNavigation.idusuarioNavigation.Nome}</td>
                                                <td>{Consulta.idMedicoNavigation.idEspecialidadeNavigation.especialidade1}</td>
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
            </body>

        )
    }
}

