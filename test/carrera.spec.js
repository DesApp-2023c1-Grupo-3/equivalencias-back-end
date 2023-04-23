import request from 'supertest';

const api = request('http://localhost:3001/api');

describe('Carrera', () => {
  test('GET /carrera', async () => {
    const response = await api.get('/carreras');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        data: expect.arrayContaining([
          expect.objectContaining({
            createdAt: expect.any(String),
            id: expect.any(Number),
            nombre_carrera: expect.any(String),
            nombre_instituto: expect.any(String),
            updatedAt: expect.any(String),
          }),
        ]),
      })
    );
  });
});
