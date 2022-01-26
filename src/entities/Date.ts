import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("dates")
export default class Date extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;
}
