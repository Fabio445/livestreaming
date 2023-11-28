/*import { MigrationInterface, QueryRunner } from "typeorm";

export class UserViewerStreamerSocialCanale1701172681702 implements MigrationInterface {
    name = 'UserViewerStreamerSocialCanale1701172681702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`social\` (\`idSocial\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, PRIMARY KEY (\`idSocial\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`canale\` (\`idCanale\` int NOT NULL AUTO_INCREMENT, \`descrizione\` varchar(255) NOT NULL, \`trailer\` varchar(255) NOT NULL, \`immagine\` varchar(255) NOT NULL, \`idSocial\` int NULL, PRIMARY KEY (\`idCanale\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`streamer\` (\`idStreamer\` int NOT NULL AUTO_INCREMENT, \`userIdUser\` int NULL, UNIQUE INDEX \`REL_bbeac7d50848b648ae391bdafb\` (\`userIdUser\`), PRIMARY KEY (\`idStreamer\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`viewer\` (\`idViewer\` int NOT NULL AUTO_INCREMENT, \`userIdUser\` int NULL, UNIQUE INDEX \`REL_5469bb600a44050b1ac980fd89\` (\`userIdUser\`), PRIMARY KEY (\`idViewer\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`idUser\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`dataNascita\` varchar(255) NOT NULL, \`numeroTelefono\` varchar(255) NOT NULL, \`deleteAt\` timestamp NULL, PRIMARY KEY (\`idUser\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_dd7d05cf549aef180ccd1106774\` FOREIGN KEY (\`idSocial\`) REFERENCES \`social\`(\`idSocial\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`streamer\` ADD CONSTRAINT \`FK_bbeac7d50848b648ae391bdafbb\` FOREIGN KEY (\`userIdUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`streamer\` ADD CONSTRAINT \`FK_f05819f6ff2e1cd140c9d1cd9b1\` FOREIGN KEY (\`idStreamer\`) REFERENCES \`canale\`(\`idCanale\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`viewer\` ADD CONSTRAINT \`FK_5469bb600a44050b1ac980fd891\` FOREIGN KEY (\`userIdUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`viewer\` DROP FOREIGN KEY \`FK_5469bb600a44050b1ac980fd891\``);
        await queryRunner.query(`ALTER TABLE \`streamer\` DROP FOREIGN KEY \`FK_f05819f6ff2e1cd140c9d1cd9b1\``);
        await queryRunner.query(`ALTER TABLE \`streamer\` DROP FOREIGN KEY \`FK_bbeac7d50848b648ae391bdafbb\``);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_dd7d05cf549aef180ccd1106774\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`REL_5469bb600a44050b1ac980fd89\` ON \`viewer\``);
        await queryRunner.query(`DROP TABLE \`viewer\``);
        await queryRunner.query(`DROP INDEX \`REL_bbeac7d50848b648ae391bdafb\` ON \`streamer\``);
        await queryRunner.query(`DROP TABLE \`streamer\``);
        await queryRunner.query(`DROP TABLE \`canale\``);
        await queryRunner.query(`DROP TABLE \`social\``);
    }

}*/
