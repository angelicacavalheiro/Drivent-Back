import Enrollment from "@/entities/Enrollment";

export async function postUserInscription(userId: number, activityId: number) {
  return await Enrollment.postUserInscription(userId, activityId);
}
