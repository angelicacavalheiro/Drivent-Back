import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("subscribedActivities")
export default class SubscribedActivity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  enrollmentId: number;

  @Column()
  activityId: number;
}
