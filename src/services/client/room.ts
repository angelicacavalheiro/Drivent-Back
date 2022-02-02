import Rooms from "@/entities/Rooms";

export async function getRooms() {
  return await Rooms.getRooms();
}
