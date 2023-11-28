import { MigrationInterface, QueryRunner } from "typeorm";

export class Test21701189739464 implements MigrationInterface {
    name = 'Test21701189739464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_dd7d05cf549aef180ccd1106774\``);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_74e0c12e1bc4ac558ddfa4164d0\``);
        await queryRunner.query(`ALTER TABLE \`canale\` CHANGE \`idSocial\` \`idSocial\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`canale\` CHANGE \`idStreamer\` \`idStreamer\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`streamer\` DROP FOREIGN KEY \`FK_1b470e1ab15ab08e83f4414888c\``);
        await queryRunner.query(`ALTER TABLE \`streamer\` CHANGE \`idUser\` \`idUser\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`viewer\` DROP FOREIGN KEY \`FK_22d3ec057bb8794fa4a8069393d\``);
        await queryRunner.query(`ALTER TABLE \`viewer\` CHANGE \`idUser\` \`idUser\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` DROP FOREIGN KEY \`FK_636f868723b2d969f92b2666898\``);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` CHANGE \`IdUser\` \`IdUser\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`dataNascita\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`dataNascita\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleteAt\` \`deleteAt\` timestamp NULL`);
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
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleteAt\` \`deleteAt\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`dataNascita\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`dataNascita\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` CHANGE \`IdUser\` \`IdUser\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` ADD CONSTRAINT \`FK_636f868723b2d969f92b2666898\` FOREIGN KEY (\`IdUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`viewer\` CHANGE \`idUser\` \`idUser\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`viewer\` ADD CONSTRAINT \`FK_22d3ec057bb8794fa4a8069393d\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`streamer\` CHANGE \`idUser\` \`idUser\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`streamer\` ADD CONSTRAINT \`FK_1b470e1ab15ab08e83f4414888c\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`canale\` CHANGE \`idStreamer\` \`idStreamer\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`canale\` CHANGE \`idSocial\` \`idSocial\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_74e0c12e1bc4ac558ddfa4164d0\` FOREIGN KEY (\`idStreamer\`) REFERENCES \`streamer\`(\`idStreamer\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_dd7d05cf549aef180ccd1106774\` FOREIGN KEY (\`idSocial\`) REFERENCES \`social\`(\`idSocial\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
