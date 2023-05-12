import Usuario_carrera from '../models/usuarios_carreras';
import { pick } from 'lodash';

export const getUsuario_carrera = async (req, res) => {
  console.log(getUsuario_carrera);
  const usuario_carreraid = req.params.id;
  const product = await Usuario_carrera.findByPk(usuario_carreraid);
  if (product) {
    res.json(product.toJSON());
  } else {
    res
      .status(404)
      .json({ message: `Usuario_carrera ${usuario_carreraid} no encontrado` });
  }
};

export const index = async (req, res) => {
  const usuario_carrera = await Usuario_carrera.findAll({});
  res.json({
    data: usuario_carrera.map((usercarrera) => usercarrera.toJSON()),
  });
};

export const getTodosLosUsuarios_carrera = async (req, res) => {
  const usuario_carrera = await Usuario_carrera.findAll();
  if (usuario_carrera.length > 0) {
    res.json(usuario_carrera.map((usercarrera) => usercarrera.toJSON()));
  } else {
    res.status(404).json({ message: `No hay usuarios y carreras encontrados` });
  }
};

export const show = async (req, res) => {
  const usuario_carrera = await Usuario_carrera.findByPk(req.params.id);
  if (usuario_carrera) {
    res.json({ data: usuario_carrera.toJSON() });
  } else {
    res.status(404).json({
      message: `No se encontró una usuarios y carrera con id ${req.params.id}`,
    });
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
