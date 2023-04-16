'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Materia_solicitada',

      'id_carrera',
      {
        type: Sequelize.INTEGER,

        references: {
          model: 'Carrera',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: '',
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Materia_solicitada', 'id_carrera');
  },
};
