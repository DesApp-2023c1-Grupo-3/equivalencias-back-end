import { Model, DataTypes } from 'sequelize';

export default class Inscripto extends Model {
  static init(sequelize) {
    return super.init(
      // Columnas de la tabla.
      {
        UsuarioId: { type: DataTypes.INTEGER, validate: { notEmpty: true } },
        id_carrera: {
          type: DataTypes.INTEGER,
          validate: { notEmpty: true },
        },
      },
      {
        sequelize,
        tableName: 'Usuarios_carreras',
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Usuario, { foreignKey: 'UsuarioId' });
    this.hasMany(models.Carrera, { foreignKey: 'id_carrera' });
  }
}
