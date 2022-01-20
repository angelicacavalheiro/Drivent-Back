import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
