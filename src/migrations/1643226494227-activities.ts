import { MigrationInterface, QueryRunner } from "typeorm";

export class activities1643226494227 implements MigrationInterface {
    name = "activities1643226494227"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE \"halls\" (\"id\" SERIAL NOT NULL, \"name\" character varying NOT NULL, CONSTRAINT \"PK_4665c2f3b1e718e12b06278bae8\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("CREATE TABLE \"dates\" (\"id\" SERIAL NOT NULL, \"date\" character varying NOT NULL, CONSTRAINT \"PK_401724822174c3539ee7036da15\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("CREATE TABLE \"activities\" (\"id\" SERIAL NOT NULL, \"name\" character varying NOT NULL, \"startAt\" character varying NOT NULL, \"endAt\" character varying NOT NULL, \"maximumCapacity\" integer NOT NULL, \"availableCapacity\" integer NOT NULL, \"hallId\" integer NOT NULL, \"dateId\" integer NOT NULL, CONSTRAINT \"REL_f8b6757fd7ca9274e689f97b7b\" UNIQUE (\"hallId\"), CONSTRAINT \"REL_051a7a9104671baf216619e49f\" UNIQUE (\"dateId\"), CONSTRAINT \"PK_7f4004429f731ffb9c88eb486a8\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("CREATE TABLE \"enrollments_activities_activities\" (\"enrollmentsId\" integer NOT NULL, \"activitiesId\" integer NOT NULL, CONSTRAINT \"PK_6e86655171ac52d09c0b75cfe3e\" PRIMARY KEY (\"enrollmentsId\", \"activitiesId\"))");
      await queryRunner.query("CREATE INDEX \"IDX_1e1b46c6d6d6f25d5ca8d288fb\" ON \"enrollments_activities_activities\" (\"enrollmentsId\") ");
      await queryRunner.query("CREATE INDEX \"IDX_bb469253f91156f58f457c43c7\" ON \"enrollments_activities_activities\" (\"activitiesId\") ");
      await queryRunner.query("ALTER TABLE \"activities\" ADD CONSTRAINT \"FK_f8b6757fd7ca9274e689f97b7b9\" FOREIGN KEY (\"hallId\") REFERENCES \"halls\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"activities\" ADD CONSTRAINT \"FK_051a7a9104671baf216619e49f0\" FOREIGN KEY (\"dateId\") REFERENCES \"dates\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"enrollments_activities_activities\" ADD CONSTRAINT \"FK_1e1b46c6d6d6f25d5ca8d288fb3\" FOREIGN KEY (\"enrollmentsId\") REFERENCES \"enrollments\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE");
      await queryRunner.query("ALTER TABLE \"enrollments_activities_activities\" ADD CONSTRAINT \"FK_bb469253f91156f58f457c43c7d\" FOREIGN KEY (\"activitiesId\") REFERENCES \"activities\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"enrollments_activities_activities\" DROP CONSTRAINT \"FK_bb469253f91156f58f457c43c7d\"");
      await queryRunner.query("ALTER TABLE \"enrollments_activities_activities\" DROP CONSTRAINT \"FK_1e1b46c6d6d6f25d5ca8d288fb3\"");
      await queryRunner.query("ALTER TABLE \"activities\" DROP CONSTRAINT \"FK_051a7a9104671baf216619e49f0\"");
      await queryRunner.query("ALTER TABLE \"activities\" DROP CONSTRAINT \"FK_f8b6757fd7ca9274e689f97b7b9\"");
      await queryRunner.query("DROP INDEX \"IDX_bb469253f91156f58f457c43c7\"");
      await queryRunner.query("DROP INDEX \"IDX_1e1b46c6d6d6f25d5ca8d288fb\"");
      await queryRunner.query("DROP TABLE \"enrollments_activities_activities\"");
      await queryRunner.query("DROP TABLE \"activities\"");
      await queryRunner.query("DROP TABLE \"dates\"");
      await queryRunner.query("DROP TABLE \"halls\"");
    }
}
