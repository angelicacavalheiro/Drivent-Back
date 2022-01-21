import EnrollmentData from "@/interfaces/enrollment";
import Enrollment from "@/entities/Enrollment";

export async function createNewEnrollment(enrollmentData: EnrollmentData) {
  await Enrollment.createOrUpdate(enrollmentData);
}

export async function getEnrollmentWithAddress(userId: number) {
  return await Enrollment.getByUserIdWithAddress(userId);
}

export async function getStatusPayment(userId: number) {
  return await Enrollment.getPaymentStatusByUserId(userId);
}
