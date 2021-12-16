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
            dataConsulta: ''
        }
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
                                <tr>
                                    <td>Exemplo Grande Nome de Paciente</td>
                                    <td>Endocrinologia</td>
                                    <td>R. Santa Marcelina, 177 - Vila Carmosina, São Paulo</td>
                                    <td>06/10/2021 15:45</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </main>
            </body>

        )
    }
}

