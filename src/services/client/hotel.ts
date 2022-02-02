import Hotels from "@/entities/Hotels";

export async function getHotels() {
  return await Hotels.getHotels();
}
