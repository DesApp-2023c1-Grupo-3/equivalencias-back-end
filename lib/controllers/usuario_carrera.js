import Usuario_carrera from '../models/usuarios_carreras';
import { pick } from 'lodash';
import Carrera from '../models/carrera';
import Usuario from '../models/usuario';

export const getUsuario_carrera = async (req, res) => {
  console.log(getUsuario_carrera);
  const usuario_carreraid = req.params.id;
  const usuario_carrera = await Usuario_carrera.findAll({
    where: { UsuarioId: usuario_carreraid },
    include: [
      {
        model: Carrera,
        as: 'Carrera',
        attributes: ['nombre_carrera'],
      },
      {
        model: Usuario,
        as: 'Usuario',
        attributes: ['nombre', 'rol'],
      },
    ],
    attributes: {
      exclude: ['UsuarioId', 'id_carrera', 'createdAt', 'updatedAt', 'id'],
    },
  });
  if (usuario_carrera.length > 0) {
    res.json(usuario_carrera.map((userCar) => userCar.toJSON()));
  } else {
    res
      .status(404)
      .json({ message: `Usuario_carrera ${usuario_carreraid} no encontrado` });
  }
};

export const getTodosLosUsuarios_carrera = async (req, res) => {
  const usuario_carrera = await Usuario_carrera.findAll();
  if (usuario_carrera.length > 0) {
    res.json(usuario_carrera.map((usercarrera) => usercarrera.toJSON()));
  } else {
    res.status(404).json({ message: `No hay usuarios y carreras encontrados` });
  }
};

export const addUsuarios_carrera = async (req, res) => {
  const createaddUserCarrera = req.body;
  const datosUserCarrera = pick(createaddUserCarrera, [
    'id',
    'UsuarioId',
    'id_carrera',
  ]);

  const userCarreraCrear = { ...datosUserCarrera };

  const dbResponse = await Usuario_carrera.create(userCarreraCrear);

  res.json(dbResponse);
};

export const updateUsuario_carrera = async (req, res) => {
  const updateUserCarrera = req.body;
  const datosUserCarrera = pick(updateUserCarrera, [
    'id',
    'UsuarioId',
    'id_carrera',
  ]);

  const userCarreraActualizar = { ...datosUserCarrera };

  const dbResponse = await Usuario_carrera.update(userCarreraActualizar, {
    where: { id: req.params.id },
  });
  res.json(dbResponse);
};

export const deleteUsuario_carrera = async (req, res) => {
  const dbResponse = await Usuario_carrera.destroy({
    where: { id: req.params.id },
  });
  res.json(dbResponse);
};
