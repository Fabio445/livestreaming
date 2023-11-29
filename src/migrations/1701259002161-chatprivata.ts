import { MigrationInterface, QueryRunner } from "typeorm";

export class Chatprivata1701259002161 implements MigrationInterface {
    name = 'Chatprivata1701259002161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`LiveTag\` (\`liveIdLive\` int NOT NULL, \`tagIdTag\` int NOT NULL, INDEX \`IDX_a0142635cf78ac594cd3f13a2a\` (\`liveIdLive\`), INDEX \`IDX_7d9b721181d7f92ea92e5f9260\` (\`tagIdTag\`), PRIMARY KEY (\`liveIdLive\`, \`tagIdTag\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`transazione\` DROP FOREIGN KEY \`FK_9333f9d3f1ac89bfcf316846e77\``);
        await queryRunner.query(`ALTER TABLE \`transazione\` DROP FOREIGN KEY \`FK_d6319b413e1bfd59c5e62bf8f6d\``);
        await queryRunner.query(`ALTER TABLE \`transazione\` CHANGE \`createAt\` \`createAt\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`transazione\` CHANGE \`idSender\` \`idSender\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`transazione\` CHANGE \`idReciver\` \`idReciver\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` DROP FOREIGN KEY \`FK_7b880cd5b0873890de36917ade4\``);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` CHANGE \`idUser\` \`idUser\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`live\` DROP FOREIGN KEY \`FK_a156b922058edbcac86be588bca\``);
        await queryRunner.query(`ALTER TABLE \`live\` DROP FOREIGN KEY \`FK_61f5a7a02ede174b496f3e31e84\``);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`dataPrevista\` \`dataPrevista\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`dataInizio\` \`dataInizio\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`dataFine\` \`dataFine\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`idCategoria\` \`idCategoria\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`idCanale\` \`idCanale\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_dd7d05cf549aef180ccd1106774\``);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_44c53755d04131af0798c620980\``);
        await queryRunner.query(`ALTER TABLE \`canale\` CHANGE \`idSocial\` \`idSocial\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`canale\` CHANGE \`idUser\` \`idUser\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` CHANGE \`createAt\` \`createAt\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` CHANGE \`idSender\` \`idSender\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` CHANGE \`idReciver\` \`idReciver\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleteAt\` \`deleteAt\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`transazione\` ADD CONSTRAINT \`FK_9333f9d3f1ac89bfcf316846e77\` FOREIGN KEY (\`idSender\`) REFERENCES \`portafoglio\`(\`idPortafoglio\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transazione\` ADD CONSTRAINT \`FK_d6319b413e1bfd59c5e62bf8f6d\` FOREIGN KEY (\`idReciver\`) REFERENCES \`portafoglio\`(\`idPortafoglio\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` ADD CONSTRAINT \`FK_7b880cd5b0873890de36917ade4\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`live\` ADD CONSTRAINT \`FK_a156b922058edbcac86be588bca\` FOREIGN KEY (\`idCategoria\`) REFERENCES \`categoria\`(\`idCategoria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`live\` ADD CONSTRAINT \`FK_61f5a7a02ede174b496f3e31e84\` FOREIGN KEY (\`idCanale\`) REFERENCES \`canale\`(\`idCanale\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_dd7d05cf549aef180ccd1106774\` FOREIGN KEY (\`idSocial\`) REFERENCES \`social\`(\`idSocial\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_44c53755d04131af0798c620980\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` ADD CONSTRAINT \`FK_0462a3dd1f9730f4a6702979e49\` FOREIGN KEY (\`idSender\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` ADD CONSTRAINT \`FK_0e4bdf7fe9676702729d0a2f364\` FOREIGN KEY (\`idReciver\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`LiveTag\` ADD CONSTRAINT \`FK_a0142635cf78ac594cd3f13a2a8\` FOREIGN KEY (\`liveIdLive\`) REFERENCES \`live\`(\`idLive\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`LiveTag\` ADD CONSTRAINT \`FK_7d9b721181d7f92ea92e5f9260c\` FOREIGN KEY (\`tagIdTag\`) REFERENCES \`tag\`(\`idTag\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`LiveTag\` DROP FOREIGN KEY \`FK_7d9b721181d7f92ea92e5f9260c\``);
        await queryRunner.query(`ALTER TABLE \`LiveTag\` DROP FOREIGN KEY \`FK_a0142635cf78ac594cd3f13a2a8\``);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` DROP FOREIGN KEY \`FK_0e4bdf7fe9676702729d0a2f364\``);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` DROP FOREIGN KEY \`FK_0462a3dd1f9730f4a6702979e49\``);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_44c53755d04131af0798c620980\``);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_dd7d05cf549aef180ccd1106774\``);
        await queryRunner.query(`ALTER TABLE \`live\` DROP FOREIGN KEY \`FK_61f5a7a02ede174b496f3e31e84\``);
        await queryRunner.query(`ALTER TABLE \`live\` DROP FOREIGN KEY \`FK_a156b922058edbcac86be588bca\``);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` DROP FOREIGN KEY \`FK_7b880cd5b0873890de36917ade4\``);
        await queryRunner.query(`ALTER TABLE \`transazione\` DROP FOREIGN KEY \`FK_d6319b413e1bfd59c5e62bf8f6d\``);
        await queryRunner.query(`ALTER TABLE \`transazione\` DROP FOREIGN KEY \`FK_9333f9d3f1ac89bfcf316846e77\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleteAt\` \`deleteAt\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` CHANGE \`idReciver\` \`idReciver\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` CHANGE \`idSender\` \`idSender\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` CHANGE \`createAt\` \`createAt\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`canale\` CHANGE \`idUser\` \`idUser\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`canale\` CHANGE \`idSocial\` \`idSocial\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_44c53755d04131af0798c620980\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_dd7d05cf549aef180ccd1106774\` FOREIGN KEY (\`idSocial\`) REFERENCES \`social\`(\`idSocial\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`idCanale\` \`idCanale\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`idCategoria\` \`idCategoria\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`dataFine\` \`dataFine\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`dataInizio\` \`dataInizio\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`live\` CHANGE \`dataPrevista\` \`dataPrevista\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`live\` ADD CONSTRAINT \`FK_61f5a7a02ede174b496f3e31e84\` FOREIGN KEY (\`idCanale\`) REFERENCES \`canale\`(\`idCanale\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`live\` ADD CONSTRAINT \`FK_a156b922058edbcac86be588bca\` FOREIGN KEY (\`idCategoria\`) REFERENCES \`categoria\`(\`idCategoria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` CHANGE \`idUser\` \`idUser\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` ADD CONSTRAINT \`FK_7b880cd5b0873890de36917ade4\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transazione\` CHANGE \`idReciver\` \`idReciver\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`transazione\` CHANGE \`idSender\` \`idSender\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`transazione\` CHANGE \`createAt\` \`createAt\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`transazione\` ADD CONSTRAINT \`FK_d6319b413e1bfd59c5e62bf8f6d\` FOREIGN KEY (\`idReciver\`) REFERENCES \`portafoglio\`(\`idPortafoglio\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transazione\` ADD CONSTRAINT \`FK_9333f9d3f1ac89bfcf316846e77\` FOREIGN KEY (\`idSender\`) REFERENCES \`portafoglio\`(\`idPortafoglio\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP INDEX \`IDX_7d9b721181d7f92ea92e5f9260\` ON \`LiveTag\``);
        await queryRunner.query(`DROP INDEX \`IDX_a0142635cf78ac594cd3f13a2a\` ON \`LiveTag\``);
        await queryRunner.query(`DROP TABLE \`LiveTag\``);
    }

}
