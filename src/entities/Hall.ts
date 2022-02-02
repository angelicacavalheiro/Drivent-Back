import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("halls")
export default class Hall extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
