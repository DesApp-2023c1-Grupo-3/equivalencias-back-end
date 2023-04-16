'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Carrera', [
      {
        nombre_carrera: 'Tecnicatura en informatica',
        nombre_instituto: 'Instituto de Informática',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: 'Profesorado de Ingles',
        nombre_instituto: 'Instituto de Lenguas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: 'Lic. en Biotecnologia',
        nombre_instituto: 'Instituto de Biología',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: 'Lic. en Educacion',
        nombre_instituto: 'Instituto de Educación',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre_carrera: 'Tec. en Metalurgica',
        nombre_instituto: 'Instituto de Metalurgia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
