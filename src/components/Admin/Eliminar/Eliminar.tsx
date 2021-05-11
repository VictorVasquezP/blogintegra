import React from 'react';
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Slide} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
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
        fecha: string,
        id: number,
        id_cat: number,
        id_usu: number,
        imagen: string,
        usuario:string
    }
}
class Eliminar extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props);
    }
    handleClose = () => {

        this.props.close();
    };

    confirmDelete = async () => {
        axios.delete('http://localhost:3001/api/blog/delete',
            {
                headers: {
                    'content-type': 'application/json'
                },
                data: {
                    id: this.props.data.id
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
        this.props.close();
        window.location.reload();
    };

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Eliminar blog"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            ¿Está seguro de eliminar el blog con título <strong>{this.props.data.titulo}</strong> ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancelar
                         </Button>
                        <Button onClick={this.confirmDelete} color="primary">
                            Aceptar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Eliminar;