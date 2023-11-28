import { MigrationInterface, QueryRunner } from "typeorm";

export class Test11701188483589 implements MigrationInterface {
    name = 'Test11701188483589'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`social\` (\`idSocial\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, PRIMARY KEY (\`idSocial\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`canale\` (\`idCanale\` int NOT NULL AUTO_INCREMENT, \`descrizione\` varchar(255) NOT NULL, \`trailer\` varchar(255) NOT NULL, \`immagine\` varchar(255) NOT NULL, \`idSocial\` int NULL, \`idStreamer\` int NULL, UNIQUE INDEX \`REL_74e0c12e1bc4ac558ddfa4164d\` (\`idStreamer\`), PRIMARY KEY (\`idCanale\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`streamer\` (\`idStreamer\` int NOT NULL AUTO_INCREMENT, \`idUser\` int NULL, UNIQUE INDEX \`REL_1b470e1ab15ab08e83f4414888\` (\`idUser\`), PRIMARY KEY (\`idStreamer\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`viewer\` (\`idViewer\` int NOT NULL AUTO_INCREMENT, \`idUser\` int NULL, UNIQUE INDEX \`REL_22d3ec057bb8794fa4a8069393\` (\`idUser\`), PRIMARY KEY (\`idViewer\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`portafoglio\` (\`idPortafoglio\` int NOT NULL AUTO_INCREMENT, \`bit\` int NOT NULL, \`IdUser\` int NULL, UNIQUE INDEX \`REL_636f868723b2d969f92b266689\` (\`IdUser\`), PRIMARY KEY (\`idPortafoglio\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`idUser\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`dataNascita\` datetime NOT NULL, \`numeroTelefono\` varchar(255) NOT NULL, \`deleteAt\` timestamp NULL, PRIMARY KEY (\`idUser\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_dd7d05cf549aef180ccd1106774\` FOREIGN KEY (\`idSocial\`) REFERENCES \`social\`(\`idSocial\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_74e0c12e1bc4ac558ddfa4164d0\` FOREIGN KEY (\`idStreamer\`) REFERENCES \`streamer\`(\`idStreamer\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`streamer\` ADD CONSTRAINT \`FK_1b470e1ab15ab08e83f4414888c\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`viewer\` ADD CONSTRAINT \`FK_22d3ec057bb8794fa4a8069393d\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` ADD CONSTRAINT \`FK_636f868723b2d969f92b2666898\` FOREIGN KEY (\`IdUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`portafoglio\` DROP FOREIGN KEY \`FK_636f868723b2d969f92b2666898\``);
        await queryRunner.query(`ALTER TABLE \`viewer\` DROP FOREIGN KEY \`FK_22d3ec057bb8794fa4a8069393d\``);
        await queryRunner.query(`ALTER TABLE \`streamer\` DROP FOREIGN KEY \`FK_1b470e1ab15ab08e83f4414888c\``);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_74e0c12e1bc4ac558ddfa4164d0\``);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_dd7d05cf549aef180ccd1106774\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP INDEX \`REL_636f868723b2d969f92b266689\` ON \`portafoglio\``);
        await queryRunner.query(`DROP TABLE \`portafoglio\``);
        await queryRunner.query(`DROP INDEX \`REL_22d3ec057bb8794fa4a8069393\` ON \`viewer\``);
        await queryRunner.query(`DROP TABLE \`viewer\``);
        await queryRunner.query(`DROP INDEX \`REL_1b470e1ab15ab08e83f4414888\` ON \`streamer\``);
        await queryRunner.query(`DROP TABLE \`streamer\``);
        await queryRunner.query(`DROP INDEX \`REL_74e0c12e1bc4ac558ddfa4164d\` ON \`canale\``);
        await queryRunner.query(`DROP TABLE \`canale\``);
        await queryRunner.query(`DROP TABLE \`social\``);
    }

}
