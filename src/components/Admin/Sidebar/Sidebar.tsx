import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import TodayIcon from '@material-ui/icons/Today';
import { mainListItems } from './Enlaces/Enlaces';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { removeSession } from '../../helper/helper';
import Cookies from 'cookie-universal';
import { ListItem,ListItemAvatar, Avatar,ListItemText} from '@material-ui/core';
const cookies = Cookies();



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        backgroundColor:'#090C5C',
        color:'#fff',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));



interface IState {
    open: boolean,
    usuario:''
}

const defaultState: IState = {
    open: false,
    usuario:''
};

interface IProps {
    classes: any,
    child: JSX.Element
}


class Sidebar extends React.Component<IProps, IState> {
    state = defaultState;
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    componentDidMount(){
        var session = cookies.get("_s");
        if(session){
            this.setState({usuario:session.usuario});
        }
    }
    cerrarSesion = () =>{
        removeSession();
        window.location.href="/";
    }

    render() {
        const fixedHeightPaper = clsx(this.props.classes.paper, this.props.classes.fixedHeight);
        const { open,usuario } = this.state;
        return (
            <div className={this.props.classes.root}>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(this.props.classes.appBar, open && this.props.classes.appBarShift)}>
                    <Toolbar className={this.props.classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={clsx(this.props.classes.menuButton, open && this.props.classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={this.props.classes.title}>
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                                <ListItemAvatar>
                                    <Avatar style={{backgroundColor:'#707071'}} >
                                        <AccountCircleIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={usuario} />
                        </IconButton>
                        <IconButton color="inherit">
                                <ListItemText primary="|" />
                        </IconButton>
                        <IconButton color="inherit">
                                <ListItemText onClick={this.cerrarSesion} primary="Cerrar sesión" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(this.props.classes.drawerPaper, !open && this.props.classes.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div className={this.props.classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose} color="inherit" >
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider variant="middle" style={{backgroundColor:'#fff', marginTop:-2}} />
                    <List>{mainListItems}</List>
                    <Divider variant="middle" style={{backgroundColor:'#fff'}} />
                </Drawer>
                <main className={this.props.classes.content}>
                    <div className={this.props.classes.appBarSpacer} />
                    <Container maxWidth="lg" className={this.props.classes.container}>
                        {
                            this.props.child
                        }
                        <Box pt={4}>
                            <Copyright />
                        </Box>
                    </Container>
                </main>
            </div>
        );
    }
}

interface IPropsDef {
    child: JSX.Element
}

export default (props: IPropsDef) => {
    const classes = useStyles();
    return (

        <Sidebar classes={classes} child={props.child} />
    );
}