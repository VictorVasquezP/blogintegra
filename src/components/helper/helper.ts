import Cookies from 'cookie-universal';

const cookies = Cookies();

export const getSession = () =>{
    return cookies.get("_s") === undefined ? false:cookies.get("_s");
}

export const removeSession = () =>{
    cookies.remove("_s")
}

export const renovarSession = () =>{
    const sesion =  getSession();
    if(!sesion){
        window.location.href = "/";
    }
    cookies.set("_s", sesion, {
        path: "/",
        expires: new Date(new Date().getTime() + 60 * 1 * 1000) 
    });

    return sesion;
}