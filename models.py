from database import Database
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Date
from sqlalchemy import Float
from sqlalchemy.orm import relationship
from sqlalchemy import Column, Date
from datetime import datetime


class Frio(Database):
    __tablename__ ='frio'
    id = Column(Integer, primary_key=True)
    nombre_escuela = Column(String(50))
    cct = Column(String(11))
    localidad_escuela = Column(String(50))
    nombre_beneficiario = Column(String(50))
    escolaridad_beneficiario = Column(String(10))
    talla_beneficiario = Column(String(10))
    curp_beneficiario = Column(String(18))
    peso_beneficiario = Column(String(10))
    referencias_domicilio = Column(String(50))
    nombre_padre = Column(String(50))
    escolaridad_padre = Column(String(10))
    ine_padre = Column(String(18))
    curp_padre = Column(String(18))
    telefono_padre = Column(Integer)
    estado_civil = Column(String(20))

class Comunitario(Database):
    __tablename__ ='comunitario'
    id = Column(Integer, primary_key=True)
    nombre_escuela = Column(String(50))
    cct = Column(String(11))
    localidad_escuela = Column(String(50))
    nombre_beneficiario = Column(String(50))
    escolaridad_beneficiario = Column(String(10))
    talla_beneficiario = Column(String(10))
    curp_beneficiario = Column(String(18))
    peso_beneficiario = Column(String(10))
    referencias_domicilio = Column(String(50))
    nombre_padre = Column(String(50))
    escolaridad_padre = Column(String(10))
    ine_padre = Column(String(18))
    curp_padre = Column(String(18))
    telefono_padre = Column(Integer)
    estado_civil = Column(String(20))

class Escolares(Database):
    __tablename__ ='escolares'
    id_beneficiario = Column(Integer, primary_key=True)
    nombre_escuela = Column(String(50))
    cct = Column(String(11))
    localidad_escuela = Column(String(50))
    nombre_beneficiario = Column(String(50))
    fecha_nacimiento = Column(Date)
    genero = Column(String(10))
    estado_civil = Column(String(10))
    escolaridad_beneficiario = Column(String(10))
    ine_beneficiario = Column(String(18))
    curp_beneficiario = Column(String(18))
    numero_telefono = Column(Integer)
    correo_beneficiario = Column(String(60))
    municipio_beneficiario = Column(String(50))
    localidad_beneficiario = Column(String(50))
    colonia_beneficiario = Column(String(50))
    codigo_postal = Column(Integer)
    numero_exterior = Column(Integer)
    numero_interior = Column(Integer)
    calle = Column(String(50))
    referencias_domicilio = Column(String(50))
    tipo_apoyo = Column(String(20))
    criterio_seleccion = Column(String(50))
    periodo_apoyo = Column(String(50))
    fecha_registro = Column(Date)


class Familiares(Database):
    __tablename__ ='familiares'
    id_beneficiario = Column(Integer, primary_key=True)
    nombre_beneficiario = Column(String(50))
    fecha_nacimiento = Column(Date)
    genero = Column(String(10))
    estado_civil = Column(String(10))
    escolaridad_beneficiario = Column(String(10))
    ine_beneficiario = Column(String(18))
    curp_beneficiario = Column(String(18))
    numero_telefono = Column(Integer)
    correo_beneficiario = Column(String(60))
    municipio_beneficiario = Column(String(50))
    localidad_beneficiario = Column(String(50))
    colonia_beneficiario = Column(String(50))
    codigo_postal = Column(Integer)
    numero_exterior = Column(Integer)
    numero_interior = Column(Integer)
    calle = Column(String(50))
    referencias_domicilio = Column(String(50))
    tipo_apoyo = Column(String(20))
    criterio_seleccion = Column(String(50))
    periodo_apoyo = Column(String(50))
    fecha_registro = Column(Date)

class Usuario(Database):
    __tablename__ ='usuario'
    id = Column(Integer, primary_key=True)
    nombre = Column(String(50))
    apellidos = Column(String(50))
    usuario = Column(String(50))
    matricula = Column(String(50))
    contrasena = Column(String(50))
    area =  Column(String(50))
    foto = Column(String(36))
    
    