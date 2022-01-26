import { MigrationInterface, QueryRunner } from "typeorm";

export class activities31643161493689 implements MigrationInterface {
    name = "activities31643161493689"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"FK_ea5a170c6bd8e57024f6e243038\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"FK_00dda3acd5233c943951ed5ab2f\"");
      await queryRunner.query("DROP INDEX \"IDX_ea5a170c6bd8e57024f6e24303\"");
      await queryRunner.query("DROP INDEX \"IDX_00dda3acd5233c943951ed5ab2\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD \"id\" SERIAL NOT NULL");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"PK_7922df84be5c9a758c2b1355180\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"PK_c22b6ad2b6189ee9ffb6a11fca6\" PRIMARY KEY (\"enrollmentId\", \"activityId\", \"id\")");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"PK_c22b6ad2b6189ee9ffb6a11fca6\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"PK_7922df84be5c9a758c2b1355180\" PRIMARY KEY (\"enrollmentId\", \"activityId\")");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"PK_c22b6ad2b6189ee9ffb6a11fca6\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"PK_1a49ee57daee581c631f33e28ab\" PRIMARY KEY (\"activityId\", \"id\")");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"PK_1a49ee57daee581c631f33e28ab\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"PK_5635209d7bf6d5dc6928c1503d8\" PRIMARY KEY (\"id\")");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"PK_5635209d7bf6d5dc6928c1503d8\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"PK_8aad3befa43a428faf860624a0f\" PRIMARY KEY (\"id\", \"enrollmentId\")");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"PK_8aad3befa43a428faf860624a0f\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"PK_c22b6ad2b6189ee9ffb6a11fca6\" PRIMARY KEY (\"enrollmentId\", \"id\", \"activityId\")");
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
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"PK_c22b6ad2b6189ee9ffb6a11fca6\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"PK_8aad3befa43a428faf860624a0f\" PRIMARY KEY (\"enrollmentId\", \"id\")");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"PK_8aad3befa43a428faf860624a0f\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"PK_5635209d7bf6d5dc6928c1503d8\" PRIMARY KEY (\"id\")");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"PK_5635209d7bf6d5dc6928c1503d8\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"PK_1a49ee57daee581c631f33e28ab\" PRIMARY KEY (\"activityId\", \"id\")");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"PK_1a49ee57daee581c631f33e28ab\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"PK_c22b6ad2b6189ee9ffb6a11fca6\" PRIMARY KEY (\"enrollmentId\", \"activityId\", \"id\")");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"PK_7922df84be5c9a758c2b1355180\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"PK_c22b6ad2b6189ee9ffb6a11fca6\" PRIMARY KEY (\"enrollmentId\", \"activityId\", \"id\")");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP CONSTRAINT \"PK_c22b6ad2b6189ee9ffb6a11fca6\"");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"PK_7922df84be5c9a758c2b1355180\" PRIMARY KEY (\"enrollmentId\", \"activityId\")");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" DROP COLUMN \"id\"");
      await queryRunner.query("CREATE INDEX \"IDX_00dda3acd5233c943951ed5ab2\" ON \"subscribedActivities\" (\"activityId\") ");
      await queryRunner.query("CREATE INDEX \"IDX_ea5a170c6bd8e57024f6e24303\" ON \"subscribedActivities\" (\"enrollmentId\") ");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"FK_00dda3acd5233c943951ed5ab2f\" FOREIGN KEY (\"activityId\") REFERENCES \"activities\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE");
      await queryRunner.query("ALTER TABLE \"subscribedActivities\" ADD CONSTRAINT \"FK_ea5a170c6bd8e57024f6e243038\" FOREIGN KEY (\"enrollmentId\") REFERENCES \"enrollments\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE");
    }
}
