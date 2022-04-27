# Dependencias Usadas
- npm i express morgan sequelize pg pg-hstore  dotenv
- npm i sequelize-cli nodemon -D

# Modelo De Datos

## BD POSTGRES 

- Base Nombre: sis_analytics
- Esquema: public
- 172.30.0.27
- Tablas: usuario_sis, usuario_sis_acceso, usuario_sis_documento, usuario_sis_acceso_pin, usuario_sis_grupo, usuario_sis_recuperar, usuario_sis_trabajador

- Consultas de prueba
```
select * from usuario_sis where id_usuario = 849
select * from usuario_sis_acceso where id_usuario = 849
select * from usuario_sis_documento where id_usuario = 849
select * from usuario_sis_acceso_pin where id_usuario = 849
select * from usuario_sis_grupo where id_usuario = 849
select * from usuario_sis_cliente where id_usuario = 849
select * from usuario_sis_recuperar where id_usuario = 849
select * from usuario_sis_trabajador where id_usuario = 849
```
- Modelo Base
![Image text](bdauth.png)