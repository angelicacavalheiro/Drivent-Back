import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import ReserveData from "@/interfaces/reserve";
import RoomFullCapacity from "@/errors/RoomFullCapacity";

@Entity("rooms")
export default class Rooms extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @Column()
  hotelId: number;

  @Column()
  firstGuest: number;

  @Column()
  secondGuest: number;

  @Column()
  thirdGuest: number;

  @Column()
  maximumCapacity: number;

  @Column()
  availableCapacity: number;

  static async getRooms() {
    return this.find();
  }

  static async addUserToRoom(reserve: ReserveData) {
    const isAlreadyInARoom = await this.findOne({
      where: [
        { firstGuest: reserve.userId },
        { secondGuest: reserve.userId },
        { thirdGuest: reserve.userId },
      ]
    });

    const room = await this.findOne({ where: { id: reserve.roomId } });

    console.log({ isAlreadyInARoom });

    if (room.availableCapacity === 0) {
      throw new RoomFullCapacity();
    }

    room.availableCapacity = room.availableCapacity - 1;

    if (room.firstGuest === -1) {
      room.firstGuest = reserve.userId;
    } else if (room.secondGuest === -1) {
      room.secondGuest = reserve.userId;
    } else if (room.thirdGuest === -1) {
      room.thirdGuest = reserve.userId;
    } else {
      throw new RoomFullCapacity();
    }

    if (isAlreadyInARoom) {
      if (isAlreadyInARoom.firstGuest === reserve.userId) {
        isAlreadyInARoom.firstGuest = -1;
      } else if (isAlreadyInARoom.secondGuest === reserve.userId) {
        isAlreadyInARoom.secondGuest = -1;
      } else if (isAlreadyInARoom.thirdGuest === reserve.userId) {
        isAlreadyInARoom.thirdGuest = -1;
      }
      isAlreadyInARoom.availableCapacity = isAlreadyInARoom.availableCapacity + 1;
      this.save(isAlreadyInARoom);
    }

    this.save(room);

    return room;
  }
}
