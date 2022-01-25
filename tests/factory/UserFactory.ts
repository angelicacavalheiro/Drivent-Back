import * as UserService from "../../src/services/client/user";
import * as AuthService from "../../src/services/client/auth";
import FakerAdapter from "../../src/adapters/FakerAdapter";

const Faker = new FakerAdapter();

export default class UserFactory {
  async createAndSignUser() {
    const fakeUser =  Faker.generateUserCredentials();

    await UserService.createNewUser(fakeUser.email, fakeUser.password);

    const authorizedUser = await AuthService.signIn(fakeUser.email, fakeUser.password);

    return authorizedUser.token;
  }
}
