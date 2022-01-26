import * as UserService from "../../src/services/client/user";
import * as AuthService from "../../src/services/client/auth";
import * as EnrollmentService from "../../src/services/client/enrollment";
import FakerAdapter from "../../src/adapters/FakerAdapter";

const faker = new FakerAdapter();

export default class UserFactory {
  static async createUser() {
    const fakeUser =  faker.generateUserCredentials();

    await UserService.createNewUser(fakeUser.email, fakeUser.password);

    return fakeUser;
  }

  static async createAndSign() {
    const fakeUser = await this.createUser();

    const authorizedUser = await AuthService.signIn(fakeUser.email, fakeUser.password);

    return authorizedUser;
  }

  static async createEnrollment() {
    const authUser = await this.createAndSign();

    const enrollmentData = faker.generateEnrollment(authUser.user.id);
 
    await EnrollmentService.createNewEnrollment(enrollmentData);

    return authUser;
  }
}
