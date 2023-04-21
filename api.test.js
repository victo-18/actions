const request = require('supertest')
const app = require("./.github/workflows/app")
//const sum = require("./sum");
const { default: expect } = require('expect');
//const { describe } = require('yargs');

// test("sums two numbers", () => {
//   expect(sum(1, 2)).toBe(3);
// });
/**
 * Testing all user
 */

test('testin route to get all objet in the api', (done) => {
  request(app)
    .get("/objetos")//metodo a probar
    .set('Acept', 'application/json')//cabecera de respuesta
    .expect('Content-Type', /json/) //formato de respuesta
    .expect(200, done)
})
test('respond with a json with a single objet', (done) => {
  request(app)
    .get("/objetos/1")//metodo a probar
    .set('Acept', 'application/json')//cabecera de respuesta
    .expect('Content-Type', /json/) //formato de respuesta
    .expect(200, done)
})
