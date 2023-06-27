import Mensajes from '../models/mensajes.js';
import { pick } from 'lodash';
import Usuario from '../models/usuario.js';

export const getChat = async (req, res) => {
  try {
    // Obtener el ID de equivalencia del chat desde los parámetros de la solicitud
    const equivalenciaId = req.params.id;
    // Consultar los mensajes del chat y los usuarios asociados
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
    // Comprobar si hay mensajes en el chat.
    if (mensajes.length > 0) {
      // Enviar los mensajes como respuesta en formato JSON.
      res.json(mensajes.map((mensaje) => mensaje.toJSON()));
    } else {
      // Enviar una respuesta 404 indicando que no hay mensajes para el chat especificado.
      res
        .status(404)
        .send({
          message: `No hay mensajes para el chat con ID de equivalencia ${equivalenciaId}`,
        });
    }
  } catch (error) {
    // Capturar y manejar cualquier error que ocurra durante la obtención de los mensajes
    console.log('Error al obtener el chat:', error);
    res.status(500).send({ message: 'Error al obtener el chat' });
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
