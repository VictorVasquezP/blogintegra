import React, { Component } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Dialog, ListItem, List, Divider, AppBar, Toolbar, IconButton, Typography, Slide, TextField, FormControlLabel, Switch, FormGroup, FormLabel, FormControl, Icon } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions';
import axios from 'axios';
import Cookies from 'cookie-universal';
import ReactQuill from 'react-quill';


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
  open: boolean,
  usuario: string,
  descCorta: string
}
const defaultState: IState = {
  catg1: false,
  catg2: false,
  catg3: false,
  titulo: '',
  descripcion: '',
  file: '',
  open: false,
  usuario: cookies.get("_s") ? cookies.get("_s").usuario : 'Anónimo',
  descCorta: ''
};


interface IProps {
  agregar: Function
}


export default class Registro extends Component<IProps, IState>{
  state = defaultState;
  handleClickOpen = () => {
    console.log("open");
    this.setState({ open: true });
  };
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
    console.log("enviando datos...");
    axios.post('http://localhost:3001/api/blog/insert',
      {
        titulo: this.state.titulo,
        descripcion: this.state.descripcion,
        descCorta: this.state.descCorta,
        imagen: this.state.file,
        hotel: this.state.catg1,
        restaurante: this.state.catg2,
        facturacion: this.state.catg3,
        id_usu: cookies.get("_s").id
      }
      ,
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    )
      .then(res => {
        if (res.data) {
          console.log("result: " + res.data);


        } else {
          console.log("result: " + null);
        }
      })
      .catch(err => {
        console.log(err);
      })
    this.setState({ open: false });
    this.props.agregar();
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  obtenerTitulo = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    this.setState({ titulo: event.target.value });
  };

  obtenerDesc = (value: string) => {
    this.setState({ descripcion: value });
  };

  obtenerDescCorta = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ descCorta: event.target.value });
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

  obtenerDate = () => {
    var date = new Date();
    return date.toLocaleDateString();
  }

  dateImg = () => {
    var date = new Date();
    var day = date.toLocaleDateString().split('/')[0];
    console.log(day);
    var mes = date.getMonth();
    var meses = ['Ene', 'Feb', 'Maz', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return <a href="#" style={{ textAlign: 'center', fontSize: 22 }} >{day} <br /><small>{meses[mes]}</small></a>;
  }

  render() {
    let { open, file, catg1, catg2, catg3, titulo, descripcion, usuario } = this.state;



    let modules = {
      toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { font: [''] }],
        [{ size: [''] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
      ],
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      }
    }
    /* 
     * Quill editor formats
     * See https://quilljs.com/docs/formats/
     */
    let formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ]

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Registrar
      </Button>
        <Dialog fullScreen open={open} onClose={this.handleClose} TransitionComponent={Transition}>
          <AppBar style={{ position: 'relative' }} >
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }} >
              <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className="title">
                Registro de blog
            </Typography>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <TextField style={{ width: '60%', margin: 'auto' }} name="titulo" onChange={this.obtenerTitulo} id="titulo" label="Título" variant="outlined" />

            </ListItem>
            <ListItem button>

              <textarea style={{ width: '60%', margin: 'auto' }}
                name="desc" id="desc"
                onChange={this.obtenerDescCorta}
                rows={5}
                cols={30}
                placeholder="Descripción corta"
                defaultValue=""
              />
            </ListItem>
            <ListItem button>
              <ReactQuill
                style={{ width: '60%', margin: 'auto' }}
                theme="snow"
                value={descripcion}
                onChange={this.obtenerDesc}
                modules={modules}
                formats={formats}
                placeholder="Escribir el cuerpo del blog"

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
            <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
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
          <h2 style={{ textAlign: 'center' }}>Previsualización</h2>
          <div className="single-blog timeline" style={{ width: '50%' }}>
            <div className="post-thumb">
              {file.length > 0 &&
                <img src={file} className="img-responsive" alt="IMG12" />

              }
              <div className="post-overlay">
                <span>
                  {this.dateImg()}
                </span>
              </div>
            </div>
            <div className="post-content">
              <h2 className="post-title"><a href="#">{titulo}</a></h2>
              <h3 className="post-author"><a href="#">{usuario}</a></h3>
              <ReactQuill
                style={{ width: '80%', margin: 'auto' }}
                theme="bubble"
                value={descripcion}
                readOnly={true}
              />
              <a href="#" className="read-more">Leer más</a>
              <div className="post-bottom">
                <span className="post-date pull-left">{this.obtenerDate()}</span>
                <span className="comments-number pull-right"><a href="#">{0} comentarios</a></span>
              </div>
            </div>
          </div>
        </Dialog>
      </div >
    );
  }
}