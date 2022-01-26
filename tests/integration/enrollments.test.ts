import supertest from "supertest";
import { getConnection } from "typeorm";
import app, { init } from "../../src/app";
import UserFactory from "../factory/UserFactory";
import cleanDB from "../utils/cleanDB";
import InvalidDataError from "../../src/errors/InvalidData";

beforeAll(async() => {
  await init();
});

afterAll(async() => {
  await getConnection().close();
});

describe("POST /enrollments/plan", () => {
  let token: string;
  beforeEach(async() => {
    token = (await UserFactory.createEnrollment()).token;
  });

  afterEach(async() => {
    await cleanDB();
  });

  it("OnlinePlan: should answer with status 200", async() => {
    const newPlanData = {
      isOnlinePlan: true,
      hasHotel: false,
      payentConfirmed: true
    };

    const result = await supertest(app).post("/enrollments/plan").send(newPlanData).set('Authorization', token);
 
    expect(result.status).toBe(200);
  });

  it("Presential with Hotel: should answer with status 200", async() => {
    const newPlanData = {
      isOnlinePlan: false,
      hasHotel: true,
      payentConfirmed: true
    };

    const result = await supertest(app).post("/enrollments/plan").send(newPlanData).set('Authorization', token);
 
    expect(result.status).toBe(200);
  });


  it("Presential without Hotel: should answer with status 200", async() => {
    const newPlanData = {
      isOnlinePlan: false,
      hasHotel: false,
      payentConfirmed: true
    };

    const result = await supertest(app).post("/enrollments/plan").send(newPlanData).set('Authorization', token);
 
    expect(result.status).toBe(200);
  });

  it("if isOnline and hasHotel are true should answer with Invalid Data Error", async() => {
    const newPlanData = {
      isOnlinePlan: true,
      hasHotel: true,
      payentConfirmed: true
    };

    const result = await supertest(app).post("/enrollments/plan").send(newPlanData).set('Authorization', token);
 
    expect(result.status).toBe(422)
})

it("if a property is missing should answer with Invalid Data Error", async() => {
  const newPlanData = {
    isOnlinePlan: true,
    payentConfirmed: true
  };

  const result = await supertest(app).post("/enrollments/plan").send(newPlanData).set('Authorization', token);

  expect(result.status).toBe(422)
})

it("if payment not confirmed it should answer with Invalid Data Error", async() => {
  const newPlanData = {
    isOnlinePlan: false,
    hasHotel: true,
    payentConfirmed: false
  };

  const result = await supertest(app).post("/enrollments/plan").send(newPlanData).set('Authorization', token);

  expect(result.status).toBe(422)
})

});
