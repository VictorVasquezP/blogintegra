import Cookies from 'cookie-universal';
import axios from 'axios';

const cookies = Cookies();

export const createSession = (data: any) =>{
    cookies.set("_s",data,{
        path: "/",
        expires: new Date(new Date().getTime() + 60 * 60 * 1000) 
    })
}

export const getSession = () =>{
    return cookies.get("_s") === undefined ? false:cookies.get("_s");
}

export const removeSession = () =>{
    cookies.remove("_s")
}

export const renovarSession = (id: Number) =>{
    const sesion =  getSession();
    if(!sesion){
        window.location.href = "/";
    }
    axios.post("http://localhost:3001/api/user/get",{id: id})
    .then(res =>{
        if(res.data.usuario){
            removeSession()
            createSession(res.data)
        }
    })
    .catch(err => console.log(err))

    return sesion;
}