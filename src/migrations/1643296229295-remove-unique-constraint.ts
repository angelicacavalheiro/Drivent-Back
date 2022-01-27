import { MigrationInterface, QueryRunner } from "typeorm";

export class removeUniqueConstraint1643296229295 implements MigrationInterface {
    name = "removeUniqueConstraint1643296229295"

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"activities\" DROP CONSTRAINT \"FK_f8b6757fd7ca9274e689f97b7b9\"");
      await queryRunner.query("ALTER TABLE \"activities\" DROP CONSTRAINT \"FK_051a7a9104671baf216619e49f0\"");
      await queryRunner.query("ALTER TABLE \"activities\" DROP CONSTRAINT \"REL_f8b6757fd7ca9274e689f97b7b\"");
      await queryRunner.query("ALTER TABLE \"activities\" DROP CONSTRAINT \"REL_051a7a9104671baf216619e49f\"");
      await queryRunner.query("ALTER TABLE \"activities\" ADD CONSTRAINT \"FK_f8b6757fd7ca9274e689f97b7b9\" FOREIGN KEY (\"hallId\") REFERENCES \"halls\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"activities\" ADD CONSTRAINT \"FK_051a7a9104671baf216619e49f0\" FOREIGN KEY (\"dateId\") REFERENCES \"dates\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("ALTER TABLE \"activities\" DROP CONSTRAINT \"FK_051a7a9104671baf216619e49f0\"");
      await queryRunner.query("ALTER TABLE \"activities\" DROP CONSTRAINT \"FK_f8b6757fd7ca9274e689f97b7b9\"");
      await queryRunner.query("ALTER TABLE \"activities\" ADD CONSTRAINT \"REL_051a7a9104671baf216619e49f\" UNIQUE (\"dateId\")");
      await queryRunner.query("ALTER TABLE \"activities\" ADD CONSTRAINT \"REL_f8b6757fd7ca9274e689f97b7b\" UNIQUE (\"hallId\")");
      await queryRunner.query("ALTER TABLE \"activities\" ADD CONSTRAINT \"FK_051a7a9104671baf216619e49f0\" FOREIGN KEY (\"dateId\") REFERENCES \"dates\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
      await queryRunner.query("ALTER TABLE \"activities\" ADD CONSTRAINT \"FK_f8b6757fd7ca9274e689f97b7b9\" FOREIGN KEY (\"hallId\") REFERENCES \"halls\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
}
