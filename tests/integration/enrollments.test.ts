import supertest from "supertest";
import { getConnection } from "typeorm";
import app, { init } from "../../src/app";

beforeAll(async() => {
  await init();
});

afterAll(async() => {
  await getConnection().close();
});

describe("POST /enrollments/plan", () => {
  it("should answer with status 200", async() => {
    const result = await supertest(app).get("/health");
  
    expect(result.text).toBe("OK!");
  });
});
