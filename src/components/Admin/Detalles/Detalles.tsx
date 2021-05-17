import React, { Component } from 'react';
import { Dialog, ListItemAvatar, Avatar } from '@material-ui/core';
import { ListItemText, ListItem, List, Divider, AppBar, Toolbar, IconButton, Typography, Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import CommentIcon from '@material-ui/icons/Comment';
import TodayIcon from '@material-ui/icons/Today';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import FolderIcon from '@material-ui/icons/Folder';

import './Detalles.scss';
import ReactQuill from 'react-quill';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});



interface IState {

}
const defaultState: IState = {

};

interface IProps {
  close: Function,
  open: boolean,
  data: {
    titulo: string,
    descripcion: string,
    descripcion_corta:string,
    fecha: string,
    id: number,
    id_cat: number,
    id_usu: number,
    imagen: string,
    usuario:string
  }

}

export default class Detalles extends Component<IProps, IState>{
  constructor(props: any) {
    super(props);
  }

  getCategoria = () => {
    switch (this.props.data.id_cat) {
      case 1:
        return "Hotelería";
      case 2:
        return "Restaurantes";
      case 3:
        return "Facturación";
      default:
        return "";
    }
  }

  handleClose = () => {

    this.props.close();
  };

  render() {

    return (
      <div>
        <Dialog fullScreen open={this.props.open} onClose={this.handleClose} TransitionComponent={Transition}>
          <AppBar position="relative" style={{ backgroundColor: '#857105' }}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }} >
              <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className="title">
                Detalles
            </Typography>
            </Toolbar>
          </AppBar>
          <h1 style={{ textAlign: 'center' }}>Detalles</h1>
          <List style={{  width: '60%', display: 'block', alignSelf: 'center', marginTop: 30, marginBottom:30, color: '#111' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className="avatar" >
                  <FormatSizeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Título" secondary={this.props.data.titulo} secondaryTypographyProps={{ color: 'inherit' }} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar className="avatar">
                  <CommentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Descripción corta" secondary={this.props.data.descripcion_corta} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar className="avatar">
                  <CommentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Descripción" secondary={<ReactQuill
                                style={{}}
                                theme="bubble"
                                value={this.props.data.descripcion}
                                readOnly={true}
                            />} secondaryTypographyProps={{ color: 'inherit' }} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar className="avatar" >
                  <TodayIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Fecha" secondary={this.props.data.fecha} secondaryTypographyProps={{ color: 'inherit' }} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar className="avatar">
                  <PersonPinIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Autor" secondary={this.props.data.usuario} secondaryTypographyProps={{ color: 'inherit' }} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar className="avatar">
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Categoría" secondary={this.getCategoria()} secondaryTypographyProps={{ color: 'inherit' }} />
            </ListItem>
            <ListItem style={{display:'flex', justifyContent:'center'}}>
              <img src={this.props.data.imagen} width={300} />
            </ListItem>
          </List>
        </Dialog>
      </div >
    );
  }
}