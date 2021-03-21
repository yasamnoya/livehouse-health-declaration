const request = require('supertest');
const app = require('../app');
const { setupDB } = require('./testSetup')

const TEST_PATH = '/declarations'

describe('Test CRUD to declarations', () =>{
	setupDB('testDeclarations');

	test('It should response the GET method', async () => {
		const response = await request(app).get(TEST_PATH);
		expect(response.statusCode).toBe(200);
	});

	test('It should response the POST method', async () => {
		const body = {
			name: "Jane Doe",
			phone: "0900000000"
		};
		const response = await request(app).post(TEST_PATH).send(body);
		expect(response.statusCode).toBe(201);
		expect(response.body.name).toBe(body.name);
		expect(response.body.phone).toBe(body.phone);
	});

	test('It should response the PATCH method', async () => {
		const body = {
			name: "Jane Doe",
			phone: "0900000000"
		};
		const response = await request(app).post(TEST_PATH).send(body);

		const newBody = {
			name: "Jane Doe",
			phone: "0900000000"
		};
		const newResponse = await request(app).patch(`${TEST_PATH}/${response.body._id}`).send(newBody);
		expect(newResponse.statusCode).toBe(200)
		expect(newResponse.body.name).toBe(newBody.name);
		expect(newResponse.body.phone).toBe(newBody.phone);
	});

	test('It should response the DELETE method', async () => {
		const body = {
			name: "Jane Doe",
			phone: "0900000000"
		};
		const response = await request(app).post(TEST_PATH).send(body);

		const newResponse = await request(app).delete(`${TEST_PATH}/${response.body._id}`)
		expect(newResponse.statusCode).toBe(200)
	});

	test('It should reponse the GET method in detail', async () => {
		const body = {
			name: "Jane Doe",
			phone: "0900000000"
		};
		const response = await request(app).post(TEST_PATH).send(body);

		const newResponse = await request(app).get(`${TEST_PATH}/${response.body._id}`)
		console.log(newResponse.body)
		expect(newResponse.statusCode).toBe(200)
		expect(newResponse.body.name).toBe(body.name);
		expect(newResponse.body.phone).toBe(body.phone);
	});
});

