import * as React from 'react';
import './Profile.scss';
import { History } from "history";
import { Button, ListItem, List, TextField, Icon } from '@material-ui/core';
import Navbar from "../Navbar";
import axios from 'axios';
import { getSession, renovarSession } from "../helper/helper";
import defaultImg from '../../assets/img/logoDefault.png';

export interface ProfileProps { history: History }

export interface ProfileState {
    usuario: string;
    imagen: string;
    password: string;
    newPassword: string;
    file: string;
    session: {id: number,usuario: string};
}

class Profile extends React.Component<ProfileProps, ProfileState> {
    state: ProfileState = {
        usuario: '',
        imagen: '',
        password: '',
        newPassword: '',
        file: '',
        session: {id: -1, usuario: ''}
    }

    componentDidMount(){
        let s = getSession()
        if(!s) this.props.history.push("/Login")
        this.setState({ usuario: s.usuario, imagen: s.imagen, session: s})
    }

    actualizarPerfil = () =>{
        if(this.state.usuario === ''){
            this.setState({usuario: this.state.session.usuario})
            return;
        }
        let params = { id: this.state.session.id, usuario: this.state.usuario,
            imagen: this.state.file !== '' ? this.state.file : this.state.imagen  }
        axios.put('http://localhost:3001/api/user/update', params)
        .then(res => {  
            renovarSession(this.state.session.id);
            window.location.reload();
        })
        .catch(err => console.log(err))
    }

    actualizarPass = () =>{
        const { password, newPassword, session } = this.state;
        let params = {
            id: session.id,
            oldPass: password,
            newPass: newPassword
        }
        axios.put("http://localhost:3001/api/user/update/pass",params)
        .then(res =>{
            if(res.data.hasOwnProperty("code")) alert(res.data.msg)
            else alert("Contraseña cambiada")
            this.setState({password: '', newPassword: ''})
        })
        .catch(err => console.log(err))
    }

    obtenerImagen = async (event: React.ChangeEvent<HTMLInputElement>) => {
       const img = await this.convertBase64(event.target.files.item(0));
       this.setState({ file: img as string });
    }

    convertBase64 = (file: File) => {
        return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        });
    }

    render() {
        return (
            <>
            <Navbar/>
            <div className="profile-container">
                <div className="header">
                    <img src={this.state.imagen || defaultImg} width={50} height={50}></img>
                    <h2>Configuración de cuenta</h2>
                </div>
                <List>
                    <ListItem button>
                        <TextField style={{ width: '50%', margin: 'auto' }}
                            label="Nombre de usuario"
                            id="titulo"
                            name="titulo"
                            variant="outlined"
                            value={this.state.usuario}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ usuario: e.target.value })} />
                    </ListItem>
                    <ListItem button className="div-file">
                        <label>Cambiar foto de perfil: &nbsp;</label>
                        <Button variant="contained">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={this.obtenerImagen}
                                name="img"
                                id="img"
                            />
                        </Button>
                    </ListItem>
                    <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={this.state.file} width={50} />
                    </ListItem>
                    <ListItem button style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<Icon>send</Icon>}
                            onClick={this.actualizarPerfil}>
                            Guardar
                        </Button>
                    </ListItem>
                </List>
                <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}><h4>Cambio de contraseña</h4></div>
                <List>
                    <ListItem button>
                        <TextField style={{ width: '50%', margin: 'auto' }}
                            label="Contraseña"
                            id="password"
                            name="password"
                            variant="outlined"
                            type="password"
                            value={this.state.password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })} />
                    </ListItem>
                    <ListItem button>
                        <TextField style={{ width: '50%', margin: 'auto' }}
                            label="Nueva Contraseña"
                            id="newPassword"
                            name="newPassword"
                            variant="outlined"
                            type="password"
                            value={this.state.newPassword}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ newPassword: e.target.value })} />
                    </ListItem>
                    <ListItem button style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<Icon>send</Icon>}
                            onClick={this.actualizarPass}>
                            Cambiar
                        </Button>
                    </ListItem>
                </List>
            </div>
            </>
        );
    }
}

export default Profile;