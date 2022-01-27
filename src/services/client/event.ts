import Activities from "@/entities/Activity";
import Setting from "@/entities/Setting";

export async function getEventInfo() {
  return await Setting.getEventSettings();
}

export async function getEventList() {
  return await Activities.getActivitiesByDate();
}
