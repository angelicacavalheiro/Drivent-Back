
import { getConnection } from "typeorm";
import Enrollments from "../../src/entities/Enrollment";
import Users from "../../src/entities/User";
import Addresses from "../../src/entities/Address";
import Sessions from "../../src/entities/Session";

export default async function cleanDB() {
  // add entities in order of deletion to prevent violation of foreign key constraint
  const entities = [Addresses, Enrollments, Sessions, Users];

  for (const entity of entities) {
    const repository = getConnection().getRepository(entity); 
    
    await repository.delete({}); 
  }
}
