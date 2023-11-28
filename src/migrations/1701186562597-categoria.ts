/*import { MigrationInterface, QueryRunner } from "typeorm";

export class Categoria1701186562597 implements MigrationInterface {
    name = 'Categoria1701186562597'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`categoria\` (\`idCategoria\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, PRIMARY KEY (\`idCategoria\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_dd7d05cf549aef180ccd1106774\``);
        await queryRunner.query(`ALTER TABLE \`canale\` CHANGE \`idSocial\` \`idSocial\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`streamer\` DROP FOREIGN KEY \`FK_bbeac7d50848b648ae391bdafbb\``);
        await queryRunner.query(`ALTER TABLE \`streamer\` CHANGE \`userIdUser\` \`userIdUser\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`viewer\` DROP FOREIGN KEY \`FK_5469bb600a44050b1ac980fd891\``);
        await queryRunner.query(`ALTER TABLE \`viewer\` CHANGE \`userIdUser\` \`userIdUser\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` DROP FOREIGN KEY \`FK_0f84e305f7c8266987daa69cd37\``);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` CHANGE \`idSocial\` \`idSocial\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleteAt\` \`deleteAt\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_dd7d05cf549aef180ccd1106774\` FOREIGN KEY (\`idSocial\`) REFERENCES \`social\`(\`idSocial\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`streamer\` ADD CONSTRAINT \`FK_bbeac7d50848b648ae391bdafbb\` FOREIGN KEY (\`userIdUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`viewer\` ADD CONSTRAINT \`FK_5469bb600a44050b1ac980fd891\` FOREIGN KEY (\`userIdUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` ADD CONSTRAINT \`FK_0f84e305f7c8266987daa69cd37\` FOREIGN KEY (\`idSocial\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`portafoglio\` DROP FOREIGN KEY \`FK_0f84e305f7c8266987daa69cd37\``);
        await queryRunner.query(`ALTER TABLE \`viewer\` DROP FOREIGN KEY \`FK_5469bb600a44050b1ac980fd891\``);
        await queryRunner.query(`ALTER TABLE \`streamer\` DROP FOREIGN KEY \`FK_bbeac7d50848b648ae391bdafbb\``);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_dd7d05cf549aef180ccd1106774\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleteAt\` \`deleteAt\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` CHANGE \`idSocial\` \`idSocial\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` ADD CONSTRAINT \`FK_0f84e305f7c8266987daa69cd37\` FOREIGN KEY (\`idSocial\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`viewer\` CHANGE \`userIdUser\` \`userIdUser\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`viewer\` ADD CONSTRAINT \`FK_5469bb600a44050b1ac980fd891\` FOREIGN KEY (\`userIdUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`streamer\` CHANGE \`userIdUser\` \`userIdUser\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`streamer\` ADD CONSTRAINT \`FK_bbeac7d50848b648ae391bdafbb\` FOREIGN KEY (\`userIdUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`canale\` CHANGE \`idSocial\` \`idSocial\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_dd7d05cf549aef180ccd1106774\` FOREIGN KEY (\`idSocial\`) REFERENCES \`social\`(\`idSocial\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE \`categoria\``);
    }

}*/
