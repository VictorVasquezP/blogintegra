import * as React from "react";
import { useState } from "react";
import lastNewsImg from "./../../assets/img/project1.jpg";
import axios from "axios";
import { getSession } from "../helper/helper";

export interface ComentarioProps {
  com: any;
  idUsu: Number;
  onDelete: any;

}

const Comentario: React.FunctionComponent<ComentarioProps> = ({ com, idUsu, onDelete }) => {
  const [isOver, setOver] = useState(false);
  return (
    <li className="media" 
      onMouseEnter={() => {if (idUsu === com.id_usu) setOver(true)}} 
      onMouseLeave={() => setOver(false)}>
      {isOver && <i className="fas fa-trash" style={{ float: "right", marginTop: 5, marginRight: 20 }} onClick={() => onDelete(com.id)}></i>}
      <div className="post-comment">
        <a className="pull-left" href="#">
          <img className="media-object" src={lastNewsImg} alt="" />
        </a>
        <div className="media-body">
          <span>
            <i className="fa fa-user"></i> Publicado por{" "}
            <span>{com.usuario}</span>
            <a href="#">
              <i className="far fa-clock"></i> {com.fecha + " " + com.hora}
            </a>
          </span>
          <p>{com.descripcion}</p>
        </div>
      </div>
    </li>
  );
};

export interface CommentSectionProps {
  idBlog: Number;
}

export interface CommentSectionState {
  comentarios: [];
  newComentario: string;
  idUsu: Number;
}

class CommentSection extends React.Component<
  CommentSectionProps,
  CommentSectionState
> {
  state: CommentSectionState = {
    comentarios: [],
    newComentario: "",
    idUsu: -1
  };

  componentDidMount() {
    this.getComentario();
    let s = getSession()
    if(s) this.setState({ idUsu: s.id })
  }
  
  getComentario = async () => {
    let res = await axios.get(
      "http://localhost:3001/api/comment/" + this.props.idBlog
    );
    this.setState({ comentarios: res.data });
  };

  insertComentario = () => {
    let s = getSession();
    if (!s) {
      alert("Sessión expirada, vuelve a loguearte");
      return;
    }
    let params = {
      descripcion: this.state.newComentario,
      idUsu: s.id,
      idBlo: this.props.idBlog,
    };
    axios
      .post("http://localhost:3001/api/comment/insert", params)
      .then((res) => {
        this.setState({ newComentario: "" });
        this.getComentario();
      })
      .catch((err) => console.log(err));
  };

  deleteComentario = (idCom: Number) => {
    axios.delete("http://localhost:3001/api/comment/delete/" + idCom)
    .then(res => this.getComentario())
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="response-area">
        <h2 className="bold">Comentarios</h2>
        {!getSession() ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3>Logueate para comentar</h3>
          </div>
        ) : (
          <>
            <textarea
              name="comentario"
              id="comentario"
              rows={5}
              style={{ width: "100%" }}
              placeholder="Escribe tu comentario"
              value={this.state.newComentario}
              onChange={(e) => this.setState({ newComentario: e.target.value })}
            ></textarea>
            <button
              onClick={this.insertComentario}
              style={{
                position: "relative",
                padding: "5px 20px",
                display: "inline-block",
                textDecoration: "none",
                color: "#ffffff",
                background: "#111111",
              }}
            >
              Enviar
            </button>
          </>
        )}
        <ul className="media-list">
          {this.state.comentarios.map((com: any) => (
            <Comentario key={com.id} 
              idUsu={this.state.idUsu} 
              com={com} 
              onDelete={(idCom: Number) => this.deleteComentario(idCom)}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentSection;
