import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
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

  @OneToOne(() => Hall, (hall) => hall.name, { eager: true })
  @JoinColumn()
  hall: Hall;

  @OneToOne(() => EventDate, (date) => date.date, { eager: true })
  @JoinColumn()
  date: EventDate;

  static async getActivitiesByDate() {
    const activities = await this.find();
    return activities;
  }
}
