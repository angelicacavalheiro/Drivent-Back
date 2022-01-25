import EnrollmentData from "@/interfaces/enrollment";
import Enrollment from "@/entities/Enrollment";
import InvalidDataError from "@/errors/InvalidData";

export async function createNewEnrollment(enrollmentData: EnrollmentData) {
  await Enrollment.createOrUpdate(enrollmentData);
}

export async function getEnrollmentWithAddress(userId: number) {
  return await Enrollment.getByUserIdWithAddress(userId);
}

export async function setNewPlan(paymentData: EnrollmentData) {
  if (paymentData.isOnlinePlan && paymentData.hasHotel)
    throw new InvalidDataError("Plan", ["Online plans cannot include hotel"]);

  return await Enrollment.setNewPlan(paymentData);
}
