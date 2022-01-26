import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, } from "typeorm";
import Hall from "./Hall";
import Date from "./Date";

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
  hall: Hall;

  @OneToOne(() => Date, (date) => date.date, { eager: true })
  date: Date;
}
