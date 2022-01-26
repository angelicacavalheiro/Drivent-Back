import { MigrationInterface, QueryRunner } from "typeorm";

export class activities1643158056347 implements MigrationInterface {
    name = "activities1643158056347"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("CREATE TABLE \"halls\" (\"id\" SERIAL NOT NULL, \"name\" character varying NOT NULL, CONSTRAINT \"PK_4665c2f3b1e718e12b06278bae8\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("CREATE TABLE \"dates\" (\"id\" SERIAL NOT NULL, \"date\" character varying NOT NULL, CONSTRAINT \"PK_401724822174c3539ee7036da15\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("CREATE TABLE \"activities\" (\"id\" SERIAL NOT NULL, \"name\" character varying NOT NULL, \"startAt\" character varying NOT NULL, \"endAt\" character varying NOT NULL, \"maximumCapacity\" integer NOT NULL, \"availableCapacity\" integer NOT NULL, \"hallId\" integer NOT NULL, \"dateId\" integer NOT NULL, CONSTRAINT \"PK_7f4004429f731ffb9c88eb486a8\" PRIMARY KEY (\"id\"))");
      await queryRunner.query("CREATE TABLE \"subscribedActivities\" (\"enrollmentId\" integer NOT NULL, \"activityId\" integer NOT NULL, CONSTRAINT \"PK_7922df84be5c9a758c2b1355180\" PRIMARY KEY (\"enrollmentId\", \"activityId\"))");
      await queryRunner.query("CREATE INDEX \"IDX_ea5a170c6bd8e57024f6e24303\" ON \"subscribedActivities\" (\"enrollmentId\") ");
      await queryRunner.query("CREATE INDEX \"IDX_00dda3acd5233c943951ed5ab2\" ON \"subscribedActivities\" (\"activityId\") ");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"FK_ea5a170c6bd8e57024f6e243038\" FOREIGN KEY (\"enrollmentId\") REFERENCES \"enrollments\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"FK_00dda3acd5233c943951ed5ab2f\" FOREIGN KEY (\"activityId\") REFERENCES \"activities\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"FK_00dda3acd5233c943951ed5ab2f\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"FK_ea5a170c6bd8e57024f6e243038\"");
      await queryRunner.query("DROP INDEX \"IDX_00dda3acd5233c943951ed5ab2\"");
      await queryRunner.query("DROP INDEX \"IDX_ea5a170c6bd8e57024f6e24303\"");
      await queryRunner.query("DROP TABLE \"subscribedActivities\"");
      await queryRunner.query("DROP TABLE \"activities\"");
      await queryRunner.query("DROP TABLE \"dates\"");
      await queryRunner.query("DROP TABLE \"halls\"");
    }
}
