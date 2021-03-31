import * as React from "react";
import "./CompanyContact.scss";

export default class CompanyContact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="left-description">
          <h3>Contáctanos</h3>
          <br />
          <p>
            ¿Estás interesado en mejorar el rendimiento de tu hotel? <br />
            En Integra Hotelería y Sistemas Ofrecemos Soluciones Tecnológicas
            para tu hotel.
          </p>
          <br/>
          <p>
            Visita la página oficial <a href="https://www.inhys.com.mx/"><i>www.inhys.com.mx</i></a>
          </p>
        </div>
        <div className="right-contact">
          <div className="icons">
            <i className="icon-Hotel_Logo"></i>
            <h5>
              Yagul 303, San José la Noria,
              <br /> Oaxaca de Juárez, Oax. 68120
            </h5>
          </div>
          <br />
          <div className="icons">
            <i className="icon-Phone_Logo"></i>
            <h5>+52 951 514 3550</h5>
          </div>
          <br />
          <div className="icons">
            <i className="icon-Mail_Logo"></i>
            <h5>ventas@inhys.com.mx</h5>
          </div>
        </div>
      </div>
    );
  }
}
