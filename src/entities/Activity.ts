import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, getManager } from "typeorm";
import Hall from "./Hall";
import EventDate from "./Date";

@Entity("activities")
export default class Activities extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  startAt: string;

  @Column()
  endAt: string;

  @Column()
  maximumCapacity: number;

  @Column()
  availableCapacity: number;

  @Column()
  hallId: number;

  @Column()
  dateId: number;

  @ManyToOne(() => Hall, (hall) => hall.name, { eager: true })
  @JoinColumn()
  hall: Hall;

  @ManyToOne(() => EventDate, (date) => date.date)
  @JoinColumn()
  date: EventDate;

  static async updateAvailableCapacity(activitiesId: number) {
    const decrement = getManager().query(
      `
      UPDATE activities
      SET "availableCapacity" = "availableCapacity"-1
      WHERE id = $1
      `,
      [activitiesId]
    );
    return decrement;
  }
}
