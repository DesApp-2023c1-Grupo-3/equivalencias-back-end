import Mensajes from '../models/mensajes.js';
import { pick } from 'lodash';
import Usuario from '../models/usuario.js';

export const getChat = async (req, res) => {
  const equivalenciaId = req.params.id;
  const mensajes = await Mensajes.findAll({
    include: [
      {
        model: Usuario,
        as: 'Usuario',
        attributes: ['nombre', 'apellido', 'rol'],
      },
    ],
    where: { id_equivalencia: equivalenciaId },
  });
  if (mensajes.length > 0) {
    res.json(mensajes.map((mensaje) => mensaje.toJSON()));
  } else {
    res.status(404).json({ message: `No hay mensajes` });
  }
};

export const addMensaje = async (req, res) => {
  const mensajeNuevo = req.body;
  const datosMensaje = pick(mensajeNuevo, [
    'id_equivalencia',
    'id_remitente',
    'texto',
  ]);

  const mensajeCrear = { ...datosMensaje };

  const dbResponse = await Mensajes.create(mensajeCrear);

  res.json(dbResponse);
};

export const updateMensaje = async (req, res) => {
  const dbResponse = await Mensajes.update(
    {
      texto: req.body.texto,
    },
    {
      where: { id: req.body.id },
    }
  );
  res.json(dbResponse);
};
