/* ---------------------------------------------------------------------- */
/* Add table "USUARIO"                                                  */
/* ---------------------------------------------------------------------- */

CREATE TABLE USUARIO (
    ID SERIAL   NOT NULL,
    USUARIO TEXT   NOT NULL,
    CORREO TEXT   NOT NULL,
    PASSWORD TEXT NULL,
    ID_FACE TEXT NULL,
    ID_GOOGLE TEXT NULL,
    STATUS INTEGER DEFAULT 1,
    CONSTRAINT PK_USUARIO PRIMARY KEY (ID)
);

/* ---------------------------------------------------------------------- */
/* Add table "CATEGORIA"                                                  */
/* ---------------------------------------------------------------------- */

CREATE TABLE CATEGORIA (
    ID SERIAL   NOT NULL,
    NOMBRE TEXT   NOT NULL,
    CONSTRAINT PK_CATEGORIA PRIMARY KEY (ID)
);

/* ---------------------------------------------------------------------- */
/* Add table "PREFERENCIAS"                                               */
/* ---------------------------------------------------------------------- */

CREATE TABLE PREFERENCIAS (
    ID SERIAL   NOT NULL,
    ID_USU INTEGER   NOT NULL,
    ID_CAT INTEGER   NOT NULL,
    CONSTRAINT PK_PREFERENCIAS PRIMARY KEY (ID)
);

/* ---------------------------------------------------------------------- */
/* Add table "COMENTARIO"                                                 */
/* ---------------------------------------------------------------------- */

CREATE TABLE COMENTARIO (
    ID SERIAL   NOT NULL,
    DESCRIPCION TEXT   NOT NULL,
    FECHA TEXT   NOT NULL,
    HORA TEXT   NOT NULL,
    ID_USU INTEGER   NOT NULL,
    ID_BLO INTEGER ,
    CONSTRAINT PK_COMENTARIO PRIMARY KEY (ID)
);

/* ---------------------------------------------------------------------- */
/* Add table "BLOG"                                                       */
/* ---------------------------------------------------------------------- */

CREATE TABLE BLOG (
    ID SERIAL   NOT NULL,
    TITULO TEXT   NOT NULL,
    DESCRIPCION TEXT   NOT NULL,
    FECHA TEXT   NOT NULL,
    IMAGEN TEXT   NOT NULL,
    ID_USU INTEGER   NOT NULL,
    ID_CAT INTEGER ,
    CONSTRAINT PK_BLOG PRIMARY KEY (ID)
);

/* ---------------------------------------------------------------------- */
/* Foreign key constraints                                                */
/* ---------------------------------------------------------------------- */

ALTER TABLE PREFERENCIAS ADD CONSTRAINT USUARIO_PREFERENCIAS 
    FOREIGN KEY (ID_USU) REFERENCES USUARIO (ID);

ALTER TABLE PREFERENCIAS ADD CONSTRAINT CATEGORIA_PREFERENCIAS 
    FOREIGN KEY (ID_CAT) REFERENCES CATEGORIA (ID);

ALTER TABLE COMENTARIO ADD CONSTRAINT USUARIO_COMENTARIO 
    FOREIGN KEY (ID_USU) REFERENCES USUARIO (ID);

ALTER TABLE COMENTARIO ADD CONSTRAINT BLOG_COMENTARIO 
    FOREIGN KEY (ID_BLO) REFERENCES BLOG (ID);

ALTER TABLE BLOG ADD CONSTRAINT USUARIO_BLOG 
    FOREIGN KEY (ID_USU) REFERENCES USUARIO (ID);

ALTER TABLE BLOG ADD CONSTRAINT CATEGORIA_BLOG 
    FOREIGN KEY (ID_CAT) REFERENCES CATEGORIA (ID);

INSERT INTO CATEGORIA(NOMBRE) VALUES('Restaurante'),
                                    ('Hotelería'),
                                    ('Facturación');

INSERT INTO usuario(usuario,correo,password,status) VALUES ('Admin','mpoblete501@gmail.com','123456',1);

INSERT INTO preferencias(id_usu,id_cat) VALUES (1,1),(1,2),(2,2),(2,3);