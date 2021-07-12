import { expect } from "@jest/globals";
import { beforeEach, it } from "jest-circus";
import { async } from "regenerator-runtime";
import supertest from "supertest";
import { describe } from "yargs";
import app from "../src/app.js";
import connection from "../src/database.js"

beforeEach(async () => {
    await connection.query("DELETE FROM items");
});

afterAll(() => {
    connection.end();
});

describe("GET /items", () => {
    it("returns status 200", async () => {
        const result = await supertest(app).get("/items");
        expect(result.status).toEqual(200);
    });

    it("returns the items in the database", async () =>{
        await connection.query("INSERT INTO items (text) VALUES ('teste 1), ('teste 2')");

        const result = await supertest(app).get("/items");
        expect(result.body.length).toEqual(2);
    });
});