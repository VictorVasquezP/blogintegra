import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Blogs.scss';
import Sidebar from '../Sidebar/Sidebar';
import MaterialTable from "material-table";
import { Button } from '@material-ui/core';
import Registro from '../Registro/Registro';

import axios from 'axios';
import Cookies from 'cookie-universal';
import Editar from './../Editar/Editar';
import Detalles from './../Detalles/Detalles';
import Eliminar from './../Eliminar/Eliminar';

const cookies = Cookies();

interface IState {
    blogs: [],
    openEdit: boolean,
    openDetails: boolean,
    openDelete: boolean,
    data: {
        titulo: string,
        descripcion: string,
        fecha: string,
        id: number,
        id_cat: number,
        id_usu: number,
        imagen: string,
        usuario: string
    }
}

const defaultState: IState = {
    blogs: [],
    openEdit: false,
    openDetails: false,
    openDelete: false,
    data: {
        titulo: '',
        descripcion: '',
        fecha: '',
        id: 0,
        id_cat: 0,
        id_usu: 0,
        imagen: '',
        usuario: ''
    }
};

interface IProps {

}
class Blogs extends Component<IProps, IState> {
    state = defaultState;

    details = (data: string) => {
        var aux = JSON.parse(data);
        this.setState({ data: aux })
        this.setState({ openDetails: true });
        console.log(aux.id);
    }

    edit = (data: string) => {
        var aux = JSON.parse(data);
        console.log(aux.titulo);
        this.setState({ data: aux })
        this.setState({ openEdit: true });
    }

    delete = (data: string) => {
        var aux = JSON.parse(data);
        console.log(aux.id);
        this.setState({ data: aux })
        this.setState({ openDelete: true });
    }

    updateTable = () => {
        window.location.reload();
    }

    closeEditar = () => {
        console.log("closeEditar")
        this.setState({ openEdit: false })
    }

    closeDetalles = () => {
        console.log("closeDetalles")
        this.setState({ openDetails: false })
    }

    closeEliminar = () => {
        console.log("closeDetalles")
        this.setState({ openDelete: false })
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/blog/blogs')
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                    console.log(cookies.get("_s"));
                    this.setState({ blogs: res.data })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    //Editar

    render() {
        // const data = [
        //     {
        //         titulo: 'Victor1',
        //         descripcion: 'descd',
        //         fecha: 'Hoy'
        //     },
        //     {
        //         titulo: 'Victor2',
        //         descripcion: 'descd2',
        //         fecha: 'Hoy2'
        //     }
        // ];
        const { blogs, openEdit, data, openDetails, openDelete } = this.state;
        const columns = [
            {
                title: 'Titulo',
                field: 'titulo'
            },
            {
                title: 'Descripcion',
                field: 'descripcion'
            },
            {
                title: 'Fecha',
                field: 'fecha'
            }
        ];
        return (
            <div className="blogs">

                <h2>Tabla de blogs</h2>
                <div className="boton">
                    <Registro agregar={this.updateTable} />
                </div>
                <Editar open={openEdit} close={this.closeEditar} data={data} />
                <Detalles open={openDetails} close={this.closeDetalles} data={data} />
                <Eliminar open={openDelete} close={this.closeEliminar} data={data} />
                <div>
                    <MaterialTable
                        data={blogs}
                        columns={columns}
                        title="Blogs"
                        actions={[
                            {
                                icon: 'info',
                                tooltip: 'Detalles registro',
                                onClick: (event, rowData) => this.details(JSON.stringify(rowData))
                            },
                            {
                                icon: 'edit',
                                tooltip: 'Editar registro',
                                onClick: (event, rowData) => this.edit(JSON.stringify(rowData))
                            },
                            {
                                icon: 'delete',
                                tooltip: 'Eliminar registro',
                                onClick: (event, rowData) => this.delete(JSON.stringify(rowData))
                            }
                        ]}

                        options={{
                            actionsColumnIndex: -1
                        }}

                        localization={{
                            header: {
                                actions: 'Accciones',
                            },
                            body: {
                                emptyDataSourceMessage: 'No hay registros'
                            },
                            pagination: {
                                nextTooltip: 'Siguiente',
                                lastTooltip: 'Últimos',
                                previousTooltip: 'Anterior',
                                firstTooltip: 'Primeros',
                                labelRowsSelect: 'Registros',
                                labelDisplayedRows: '{from}-{to} de {count}'
                            },
                            toolbar: {
                                searchTooltip: 'Buscar',
                                searchPlaceholder: 'Buscar...'
                            }
                        }}
                    />
                </div>
            </div >
        );
    }
}

export default () => {
    return (
        <Sidebar child={<Blogs />} />
    );
}
