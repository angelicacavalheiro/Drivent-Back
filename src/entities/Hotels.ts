import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Rooms from "./Rooms";

@Entity("hotels")
export default class Hotels extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  imageUrl: string;

  @Column()
  hasSingle: boolean;

  @Column()
  hasDouble: boolean;

  @Column()
  hasTriple: boolean;

  static async getHotels() {
    return await this.find();
  }
}
