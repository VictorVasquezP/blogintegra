import React, { Component } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Button,Dialog,ListItem,List,AppBar,Toolbar,IconButton,Typography,Slide,FormControlLabel,Switch,TextField,FormGroup,FormLabel,FormControl} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions';
import Icon from '@material-ui/core/Icon';
import axios from 'axios';
import Cookies from 'cookie-universal';


const cookies = Cookies();

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IState {
  catg1: boolean,
  catg2: boolean,
  catg3: boolean,
  titulo: string,
  descripcion: string,
  file: string,
  bandera: boolean
}
const defaultState: IState = {
  catg1: false,
  catg2: false,
  catg3: false,
  titulo: 'hola',
  descripcion: '',
  file: '',
  bandera: false,
};


interface IProps {
  close: Function,
  open: boolean,
  data: {
    titulo: string,
    descripcion: string,
    fecha: string,
    id: number,
    id_cat: number,
    id_usu: number,
    imagen: string,
    usuario:string
  }

}


export default class Editar extends Component<IProps, IState>{
  constructor(props: any) {
    super(props);
    this.state = {
      catg1: false,
      catg2: false,
      catg3: false,
      titulo: this.props.data.titulo,
      descripcion: this.props.data.descripcion,
      file: this.props.data.imagen,
      bandera: true
    };
  }

  componentDidUpdate() {
    if (this.props.open && this.state.bandera) {
      this.setState({ titulo: this.props.data.titulo });
      this.setState({ descripcion: this.props.data.descripcion });
      this.setState({ file: this.props.data.imagen });
      switch (this.props.data.id_cat) {
        case 1:
          this.setState({ catg1: true });
          break;
        case 2:
          this.setState({ catg2: true });
          break;
        case 3:
          this.setState({ catg3: true });
          break;
      }
      this.setState({ bandera: false });
    }
  }


  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'catg1':
        this.setState({ catg1: event.target.checked });
        this.setState({ catg2: false });
        this.setState({ catg3: false });
        break;
      case 'catg2':
        this.setState({ catg2: event.target.checked });
        this.setState({ catg1: false });
        this.setState({ catg3: false });
        break;
      case 'catg3':
        this.setState({ catg3: event.target.checked });
        this.setState({ catg2: false });
        this.setState({ catg1: false });
        break;
    }
  };
  handleSave = async () => {
    console.log("editando datos..." + JSON.stringify(this.state));
    axios.put('http://localhost:3001/api/blog/update',
      {
        titulo: this.state.titulo,
        descripcion: this.state.descripcion,
        imagen: this.state.file,
        hotel: this.state.catg1,
        restaurante: this.state.catg2,
        facturacion: this.state.catg3,
        id: this.props.data.id
      }
      ,
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    ).then(res => {
      if (res.data) {
        console.log("result: " + res.data);
      } else {
        console.log("result: " + null);
      }
    }).catch(err => {
      console.log(err);
    })

    this.setState({ titulo: '' });
    this.setState({ descripcion: '' });
    this.setState({ file: '' });
    this.setState({ catg1: false });
    this.setState({ catg2: false });
    this.setState({ catg3: false });
    this.setState({ bandera: true });
    this.props.close();
    window.location.reload();
  };

  handleClose = () => {
    this.setState({ titulo: '' });
    this.setState({ descripcion: '' });
    this.setState({ file: '' });
    this.setState({ catg1: false });
    this.setState({ catg2: false });
    this.setState({ catg3: false });
    this.setState({ bandera: true });
    this.props.close();
    this.setState({ bandera: true });
  };

  obtenerTitulo = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    this.setState({ titulo: event.target.value });
  };

  obtenerDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event.target.value);
    this.setState({ descripcion: event.target.value });
  };

  obtenerFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const img = await this.convertBase64(event.target.files.item(0));
    this.setState({ file: img as string });
    console.log("convertido ");
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

    let { file, catg1, catg2, catg3, titulo, descripcion } = this.state;

    return (
      <div>
        <Dialog fullScreen open={this.props.open} onClose={this.handleClose} TransitionComponent={Transition}>
          <AppBar style={{ position: 'relative' }} >
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }} >
              <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className="title">
                Editar
            </Typography>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <TextField style={{ width: '50%', margin: 'auto' }} value={titulo} name="titulo" onChange={this.obtenerTitulo} id="titulo" label="Título" variant="outlined" />

            </ListItem>
            <ListItem button>
              <textarea style={{ width: '50%', margin: 'auto' }}
                name="desc" id="desc"
                onChange={this.obtenerDesc}
                rows={10}
                cols={30}
                placeholder="Descripción"
                defaultValue={descripcion}
              />
            </ListItem>
            <ListItem button style={{ display: 'flex', justifyContent: 'center' }}>
              <label>Seleccionar imagen: &nbsp;</label>
              <Button
                variant="contained"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={this.obtenerFile}
                  name="img"
                  id="img"
                />
              </Button>
            </ListItem>
            <ListItem button style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={file} width={300} />
            </ListItem>
            <ListItem button style={{ display: 'flex', justifyContent: 'center' }}>
              <FormControl component="fieldset">
                <FormLabel component="legend" style={{ textAlign: 'center' }}>Categorías</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<Switch checked={catg1} onChange={this.handleChange} name="catg1" id="catg1" />}
                    label="Hotelería"
                  />
                  <FormControlLabel
                    control={<Switch checked={catg2} onChange={this.handleChange} name="catg2" id="catg2" />}
                    label="Restaurantes"
                  />
                  <FormControlLabel
                    control={<Switch checked={catg3} onChange={this.handleChange} name="catg3" id="catg3" />}
                    label="Facturación"
                  />
                </FormGroup>
              </FormControl>
            </ListItem>
            <ListItem button style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<Icon>send</Icon>}
                onClick={this.handleSave}
              >
                Guardar
              </Button>
            </ListItem>
          </List>
        </Dialog>
      </div >
    );
  }
}