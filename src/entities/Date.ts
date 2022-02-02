import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import Activities from "./Activity";

@Entity("dates")
export default class EventDate extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @OneToMany(() => Activities, (activity) => activity.date, { eager: true })
  @JoinColumn()
  activity: Activities[];

  static async getActivitiesByDate() {
    const activities = await this.find();
    return activities;
  }
}
