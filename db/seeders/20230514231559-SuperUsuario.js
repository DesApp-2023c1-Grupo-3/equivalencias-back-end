'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      {
        dni: 30563652,
        nombre: 'Enzo',
        apellido: 'Fernandez',
        email: 'enzo@gmail.com',
        discord: '@enzoF',
        telefono: 44595568,
        rol: 'superusuario',
        password: 'prueba',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        dni: 20569859,
        nombre: 'Anthony ',
        apellido: 'kiedis',
        email: 'RHCP@gmail.com',
        discord: '@Anthony55',
        telefono: 1523698547,
        rol: 'superusuario',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {},
};
