import Activities from "@/entities/Activity";
import Setting from "@/entities/Setting";
import EventDate from "@/entities/Date";

export async function getEventInfo() {
  return await Setting.getEventSettings();
}

export async function getEventList() {
  const list = await Activities.getActivitiesByDate();
  const dates: EventDate[] = [];
  list.forEach(element => dates.push(element.date));
  const unique: any = {}; // eslint-disable-line @typescript-eslint/no-explicit-any
  return dates.filter(obj => !unique[obj.id] && (unique[obj.id] = true));
}
