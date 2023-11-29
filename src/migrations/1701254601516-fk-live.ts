import { MigrationInterface, QueryRunner } from "typeorm";

export class FkLive1701254601516 implements MigrationInterface {
    name = 'FkLive1701254601516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_44c53755d04131af0798c62098\` ON \`canale\``);
        await queryRunner.query(`ALTER TABLE \`live\` ADD \`idCanale\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` DROP FOREIGN KEY \`FK_7b880cd5b0873890de36917ade4\``);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` CHANGE \`idUser\` \`idUser\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`live\` DROP FOREIGN KEY \`FK_a156b922058edbcac86be588bca\``);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`dataPrevista\` \`dataPrevista\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`dataInizio\` \`dataInizio\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`dataFine\` \`dataFine\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`idCategoria\` \`idCategoria\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_dd7d05cf549aef180ccd1106774\``);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_44c53755d04131af0798c620980\``);
        await queryRunner.query(`ALTER TABLE \`canale\` CHANGE \`idSocial\` \`idSocial\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`canale\` CHANGE \`idUser\` \`idUser\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleteAt\` \`deleteAt\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` ADD CONSTRAINT \`FK_7b880cd5b0873890de36917ade4\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`live\` ADD CONSTRAINT \`FK_a156b922058edbcac86be588bca\` FOREIGN KEY (\`idCategoria\`) REFERENCES \`categoria\`(\`idCategoria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`live\` ADD CONSTRAINT \`FK_61f5a7a02ede174b496f3e31e84\` FOREIGN KEY (\`idCanale\`) REFERENCES \`canale\`(\`idCanale\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_dd7d05cf549aef180ccd1106774\` FOREIGN KEY (\`idSocial\`) REFERENCES \`social\`(\`idSocial\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_44c53755d04131af0798c620980\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_44c53755d04131af0798c620980\``);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_dd7d05cf549aef180ccd1106774\``);
        await queryRunner.query(`ALTER TABLE \`live\` DROP FOREIGN KEY \`FK_61f5a7a02ede174b496f3e31e84\``);
        await queryRunner.query(`ALTER TABLE \`live\` DROP FOREIGN KEY \`FK_a156b922058edbcac86be588bca\``);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` DROP FOREIGN KEY \`FK_7b880cd5b0873890de36917ade4\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleteAt\` \`deleteAt\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`canale\` CHANGE \`idUser\` \`idUser\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`canale\` CHANGE \`idSocial\` \`idSocial\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_44c53755d04131af0798c620980\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_dd7d05cf549aef180ccd1106774\` FOREIGN KEY (\`idSocial\`) REFERENCES \`social\`(\`idSocial\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`idCategoria\` \`idCategoria\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`dataFine\` \`dataFine\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`dataInizio\` \`dataInizio\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`dataPrevista\` \`dataPrevista\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`live\` ADD CONSTRAINT \`FK_a156b922058edbcac86be588bca\` FOREIGN KEY (\`idCategoria\`) REFERENCES \`categoria\`(\`idCategoria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` CHANGE \`idUser\` \`idUser\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` ADD CONSTRAINT \`FK_7b880cd5b0873890de36917ade4\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`live\` DROP COLUMN \`idCanale\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_44c53755d04131af0798c62098\` ON \`canale\` (\`idUser\`)`);
    }

}
