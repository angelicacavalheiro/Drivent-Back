import { MigrationInterface, QueryRunner } from "typeorm";

export class baseEntities1642634407128 implements MigrationInterface {
    name = "baseEntities1642634407128"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE \"hotels\" (\"id\" SERIAL NOT NULL, \"name\" character varying NOT NULL, \"imageUrl\" character varying NOT NULL, \"hasSingle\" boolean NOT NULL, \"hasDouble\" boolean NOT NULL, \"hasTriple\" boolean NOT NULL, CONSTRAINT \"PK_2bb06797684115a1ba7c705fc7b\" PRIMARY KEY (\"id\"))");
      await queryRunner.query ("INSERT INTO users (email, password) VALUES ('teste', 'tchau')");
      await queryRunner.query("CREATE TABLE \"rooms\" (\"id\" SERIAL NOT NULL, \"number\" character varying NOT NULL, \"hotelId\" integer NOT NULL, \"firstGuest\" integer NOT NULL, \"secondGuest\" integer NOT NULL, \"thirdGuest\" integer NOT NULL, \"maximumCapacity\" integer NOT NULL, \"availableCapacity\" integer NOT NULL, CONSTRAINT \"PK_0368a2d7c215f2d0458a54933f2\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("ALTER TABLE \"enrollments\" ADD \"isOnlinePlan\" boolean");
      await queryRunner.query("ALTER TABLE \"enrollments\" ADD \"hasHotel\" boolean");
      await queryRunner.query("ALTER TABLE \"enrollments\" ADD \"payentConfirmed\" boolean");
      await queryRunner.query("ALTER TABLE \"enrollments\" ADD \"roomId\" integer");
      await queryRunner.query("ALTER TABLE \"addresses\" DROP CONSTRAINT \"FK_1ce5592b8fd5529a35fb9fe1460\"");
      await queryRunner.query("ALTER TABLE \"addresses\" ADD CONSTRAINT \"UQ_1ce5592b8fd5529a35fb9fe1460\" UNIQUE (\"enrollmentId\")");
      await queryRunner.query("ALTER TABLE \"addresses\" ADD CONSTRAINT \"FK_1ce5592b8fd5529a35fb9fe1460\" FOREIGN KEY (\"enrollmentId\") REFERENCES \"enrollments\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"addresses\" DROP CONSTRAINT \"FK_1ce5592b8fd5529a35fb9fe1460\"");
      await queryRunner.query("ALTER TABLE \"addresses\" DROP CONSTRAINT \"UQ_1ce5592b8fd5529a35fb9fe1460\"");
      await queryRunner.query("ALTER TABLE \"addresses\" ADD CONSTRAINT \"FK_1ce5592b8fd5529a35fb9fe1460\" FOREIGN KEY (\"enrollmentId\") REFERENCES \"enrollments\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"enrollments\" DROP COLUMN \"roomId\"");
      await queryRunner.query("ALTER TABLE \"enrollments\" DROP COLUMN \"payentConfirmed\"");
      await queryRunner.query("ALTER TABLE \"enrollments\" DROP COLUMN \"hasHotel\"");
      await queryRunner.query("ALTER TABLE \"enrollments\" DROP COLUMN \"isOnlinePlan\"");
      await queryRunner.query("DROP TABLE \"rooms\"");
      await queryRunner.query("DROP TABLE \"hotels\"");
    }
}
