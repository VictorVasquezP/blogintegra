select * from blog 
SELECT * FROM CATEGORIA
SELECT * FROM USUARIO
SELECT * FROM COMENTARIO

INSERT INTO COMENTARIO(DESCRIPCION, FECHA, HORA, ID_USU, ID_BLO) VALUES('Excume me','06-05-1999','15:00',1,2)
INSERT INTO COMENTARIO(DESCRIPCION, FECHA, HORA, ID_USU, ID_BLO) VALUES
('orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam neque, vehicula vel laoreet vitae, semper sed ante. Praesent faucibus aliquet sagittis. Vivamus ipsum nisl, molestie sed diam vitae, posuere efficitur est. Etiam pharetra lorem mattis, varius ligula nec, feugiat felis. Proin turpis tortor, pretium ut porta id, mollis non felis.',
 '06-05-1999','15:00',1,2)
INSERT INTO CATEGORIA(nombre) VALUES('Restaurante'),('Hotelería'),('Facturación')

SELECT * FROM comentario WHERE id_blo = 2