import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
