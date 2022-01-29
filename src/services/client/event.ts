import Setting from "@/entities/Setting";
import EventDate from "@/entities/Date";

export async function getEventInfo() {
  return await Setting.getEventSettings();
}

export async function getEventList() {
  return await EventDate.getActivitiesByDate();
}
