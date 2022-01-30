import Enrollment from "@/entities/Enrollment";

export async function postUserInscription(enrollmentsId: number, activitiesId: number) {
  return await Enrollment.postUserInscription(enrollmentsId, activitiesId);
}
