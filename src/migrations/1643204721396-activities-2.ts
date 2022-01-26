import { MigrationInterface, QueryRunner } from "typeorm";

export class activities21643204721396 implements MigrationInterface {
    name = "activities21643204721396"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE \"enrollments_activities_activities\" (\"enrollmentsId\" integer NOT NULL, \"activitiesId\" integer NOT NULL, CONSTRAINT \"PK_6e86655171ac52d09c0b75cfe3e\" PRIMARY KEY (\"enrollmentsId\", \"activitiesId\"))");
      await queryRunner.query("CREATE INDEX \"IDX_1e1b46c6d6d6f25d5ca8d288fb\" ON \"enrollments_activities_activities\" (\"enrollmentsId\") ");
      await queryRunner.query("CREATE INDEX \"IDX_bb469253f91156f58f457c43c7\" ON \"enrollments_activities_activities\" (\"activitiesId\") ");
      await queryRunner.query("ALTER TABLE \"enrollments_activities_activities\" ADD CONSTRAINT \"FK_1e1b46c6d6d6f25d5ca8d288fb3\" FOREIGN KEY (\"enrollmentsId\") REFERENCES \"enrollments\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE");
      await queryRunner.query("ALTER TABLE \"enrollments_activities_activities\" ADD CONSTRAINT \"FK_bb469253f91156f58f457c43c7d\" FOREIGN KEY (\"activitiesId\") REFERENCES \"activities\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"enrollments_activities_activities\" DROP CONSTRAINT \"FK_bb469253f91156f58f457c43c7d\"");
      await queryRunner.query("ALTER TABLE \"enrollments_activities_activities\" DROP CONSTRAINT \"FK_1e1b46c6d6d6f25d5ca8d288fb3\"");
      await queryRunner.query("DROP INDEX \"IDX_bb469253f91156f58f457c43c7\"");
      await queryRunner.query("DROP INDEX \"IDX_1e1b46c6d6d6f25d5ca8d288fb\"");
      await queryRunner.query("DROP TABLE \"enrollments_activities_activities\"");
    }
}
