import Carrera from '../models/carrera';
import { pick } from 'lodash';

export const getCarrera = async (req, res) => {
  console.log(getCarrera);
  const carreraid = req.params.id;
  const product = await Carrera.findByPk(carreraid);
  if (product) {
    res.json(product.toJSON());
  } else {
    res.status(404).json({ message: `Carrera ${carreraid} no encontrado` });
  }
};

export const index = async (req, res) => {
  const carrera = await Carrera.findAll({});
  res.json({ data: carrera.map((carrera) => carrera.toJSON()) });
};

export const getTodasLasCarreras = async (req, res) => {
  const carrera = await Carrera.findAll();
  if (carrera.length > 0) {
    res.json(carrera.map((carrera) => carrera.toJSON()));
  } else {
    res.status(404).json({ message: `No hay carreras` });
  }
};

export const show = async (req, res) => {
  const carrera = await Carrera.findByPk(req.params.id);
  if (carrera) {
    res.json({ data: carrera.toJSON() });
  } else {
    res.status(404).json({
      message: `No se encontró una carrera con id ${req.params.id}`,
    });
  }
};

export const addCarrera = async (req, res) => {
  const createaddCarrera = req.body;
  const datosCarrera = pick(createaddCarrera, [
    'nombre_carrera',
    'nombre_instituto',
  ]);

  const CarreraCrear = { ...datosCarrera };

  const dbResponse = await Carrera.create(CarreraCrear);

  res.json(dbResponse);
};

export const updateCarrera = async (req, res) => {
  const updateCarrera = req.body;
  const datosCarrera = pick(updateCarrera, [
    'id',
    'nombre_carrera',
    'nombre_instituto',
  ]);

  const CarreraActualizar = { ...datosCarrera };

  const dbResponse = await Carrera.update(CarreraActualizar, {
    where: { id: CarreraActualizar.id },
  });
  res.json(dbResponse);
};

export const deleteCarrera = async (req, res) => {
  const dbResponse = await Carrera.destroy({
    where: { id: req.params.id },
  });
  res.json(dbResponse);
};
