import EnrollmentData from "./enrollment";

export default interface FakerInterface {

  generateUserCredentials(): {email: string, password: string};

  generateEnrollment(userId: number): EnrollmentData;
// eslint-disable-next-line semi
}
