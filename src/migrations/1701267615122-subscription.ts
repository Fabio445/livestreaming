import { MigrationInterface, QueryRunner } from "typeorm";

export class Subscription1701267615122 implements MigrationInterface {
    name = 'Subscription1701267615122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`subscription\` (\`idSubscription\` int NOT NULL AUTO_INCREMENT, \`idUser\` int NULL, \`idPrivilegi\` int NULL, \`idCanale\` int NULL, PRIMARY KEY (\`idSubscription\`)) ENGINE=InnoDB`);
    //    await queryRunner.query(`CREATE TABLE \`LiveTag\` (\`liveIdLive\` int NOT NULL, \`tagIdTag\` int NOT NULL, INDEX \`IDX_a0142635cf78ac594cd3f13a2a\` (\`liveIdLive\`), INDEX \`IDX_7d9b721181d7f92ea92e5f9260\` (\`tagIdTag\`), PRIMARY KEY (\`liveIdLive\`, \`tagIdTag\`)) ENGINE=InnoDB`);
     //   await queryRunner.query(`CREATE TABLE \`Follow\` (\`canaleIdCanale\` int NOT NULL, \`userIdUser\` int NOT NULL, INDEX \`IDX_3c2e0afb9d2f358984a44a7761\` (\`canaleIdCanale\`), INDEX \`IDX_a7bdb15a3c272eb48eb1157d0e\` (\`userIdUser\`), PRIMARY KEY (\`canaleIdCanale\`, \`userIdUser\`)) ENGINE=InnoDB`);
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
        await queryRunner.query(`ALTER TABLE \`chat_privata\` DROP FOREIGN KEY \`FK_0462a3dd1f9730f4a6702979e49\``);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` DROP FOREIGN KEY \`FK_0e4bdf7fe9676702729d0a2f364\``);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` CHANGE \`createAt\` \`createAt\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` CHANGE \`idSender\` \`idSender\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` CHANGE \`idReciver\` \`idReciver\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleteAt\` \`deleteAt\` timestamp NULL`);
        await queryRunner.query(`ALTER TABLE \`transazione\` ADD CONSTRAINT \`FK_9333f9d3f1ac89bfcf316846e77\` FOREIGN KEY (\`idSender\`) REFERENCES \`portafoglio\`(\`idPortafoglio\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transazione\` ADD CONSTRAINT \`FK_d6319b413e1bfd59c5e62bf8f6d\` FOREIGN KEY (\`idReciver\`) REFERENCES \`portafoglio\`(\`idPortafoglio\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` ADD CONSTRAINT \`FK_7b880cd5b0873890de36917ade4\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`live\` ADD CONSTRAINT \`FK_a156b922058edbcac86be588bca\` FOREIGN KEY (\`idCategoria\`) REFERENCES \`categoria\`(\`idCategoria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`live\` ADD CONSTRAINT \`FK_61f5a7a02ede174b496f3e31e84\` FOREIGN KEY (\`idCanale\`) REFERENCES \`canale\`(\`idCanale\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`subscription\` ADD CONSTRAINT \`FK_b58e011f9e1e2f2ce2061db579c\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`subscription\` ADD CONSTRAINT \`FK_77a83cfaf83f315c1746dbc10aa\` FOREIGN KEY (\`idPrivilegi\`) REFERENCES \`privilegi\`(\`idPrivilegi\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`subscription\` ADD CONSTRAINT \`FK_72e2db6939d0eb2f0a83905d110\` FOREIGN KEY (\`idCanale\`) REFERENCES \`canale\`(\`idCanale\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_dd7d05cf549aef180ccd1106774\` FOREIGN KEY (\`idSocial\`) REFERENCES \`social\`(\`idSocial\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`canale\` ADD CONSTRAINT \`FK_44c53755d04131af0798c620980\` FOREIGN KEY (\`idUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` ADD CONSTRAINT \`FK_0462a3dd1f9730f4a6702979e49\` FOREIGN KEY (\`idSender\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` ADD CONSTRAINT \`FK_0e4bdf7fe9676702729d0a2f364\` FOREIGN KEY (\`idReciver\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        //await queryRunner.query(`ALTER TABLE \`LiveTag\` ADD CONSTRAINT \`FK_a0142635cf78ac594cd3f13a2a8\` FOREIGN KEY (\`liveIdLive\`) REFERENCES \`live\`(\`idLive\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        //await queryRunner.query(`ALTER TABLE \`LiveTag\` ADD CONSTRAINT \`FK_7d9b721181d7f92ea92e5f9260c\` FOREIGN KEY (\`tagIdTag\`) REFERENCES \`tag\`(\`idTag\`) ON DELETE CASCADE ON UPDATE CASCADE`);
       // await queryRunner.query(`ALTER TABLE \`Follow\` ADD CONSTRAINT \`FK_3c2e0afb9d2f358984a44a7761d\` FOREIGN KEY (\`canaleIdCanale\`) REFERENCES \`canale\`(\`idCanale\`) ON DELETE CASCADE ON UPDATE CASCADE`);
       // await queryRunner.query(`ALTER TABLE \`Follow\` ADD CONSTRAINT \`FK_a7bdb15a3c272eb48eb1157d0ee\` FOREIGN KEY (\`userIdUser\`) REFERENCES \`user\`(\`idUser\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       // await queryRunner.query(`ALTER TABLE \`Follow\` DROP FOREIGN KEY \`FK_a7bdb15a3c272eb48eb1157d0ee\``);
       // await queryRunner.query(`ALTER TABLE \`Follow\` DROP FOREIGN KEY \`FK_3c2e0afb9d2f358984a44a7761d\``);
        //await queryRunner.query(`ALTER TABLE \`LiveTag\` DROP FOREIGN KEY \`FK_7d9b721181d7f92ea92e5f9260c\``);
       // await queryRunner.query(`ALTER TABLE \`LiveTag\` DROP FOREIGN KEY \`FK_a0142635cf78ac594cd3f13a2a8\``);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` DROP FOREIGN KEY \`FK_0e4bdf7fe9676702729d0a2f364\``);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` DROP FOREIGN KEY \`FK_0462a3dd1f9730f4a6702979e49\``);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_44c53755d04131af0798c620980\``);
        await queryRunner.query(`ALTER TABLE \`canale\` DROP FOREIGN KEY \`FK_dd7d05cf549aef180ccd1106774\``);
        await queryRunner.query(`ALTER TABLE \`subscription\` DROP FOREIGN KEY \`FK_72e2db6939d0eb2f0a83905d110\``);
        await queryRunner.query(`ALTER TABLE \`subscription\` DROP FOREIGN KEY \`FK_77a83cfaf83f315c1746dbc10aa\``);
        await queryRunner.query(`ALTER TABLE \`subscription\` DROP FOREIGN KEY \`FK_b58e011f9e1e2f2ce2061db579c\``);
        await queryRunner.query(`ALTER TABLE \`live\` DROP FOREIGN KEY \`FK_61f5a7a02ede174b496f3e31e84\``);
        await queryRunner.query(`ALTER TABLE \`live\` DROP FOREIGN KEY \`FK_a156b922058edbcac86be588bca\``);
        await queryRunner.query(`ALTER TABLE \`portafoglio\` DROP FOREIGN KEY \`FK_7b880cd5b0873890de36917ade4\``);
        await queryRunner.query(`ALTER TABLE \`transazione\` DROP FOREIGN KEY \`FK_d6319b413e1bfd59c5e62bf8f6d\``);
        await queryRunner.query(`ALTER TABLE \`transazione\` DROP FOREIGN KEY \`FK_9333f9d3f1ac89bfcf316846e77\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleteAt\` \`deleteAt\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` CHANGE \`idReciver\` \`idReciver\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` CHANGE \`idSender\` \`idSender\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` CHANGE \`createAt\` \`createAt\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` ADD CONSTRAINT \`FK_0e4bdf7fe9676702729d0a2f364\` FOREIGN KEY (\`idReciver\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`chat_privata\` ADD CONSTRAINT \`FK_0462a3dd1f9730f4a6702979e49\` FOREIGN KEY (\`idSender\`) REFERENCES \`user\`(\`idUser\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
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
        await queryRunner.query(`ALTER TABLE \`transazione\` CHANGE \`idReciver\` \`idReciver\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`transazione\` CHANGE \`idSender\` \`idSender\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`transazione\` CHANGE \`createAt\` \`createAt\` timestamp NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`transazione\` ADD CONSTRAINT \`FK_d6319b413e1bfd59c5e62bf8f6d\` FOREIGN KEY (\`idReciver\`) REFERENCES \`portafoglio\`(\`idPortafoglio\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`transazione\` ADD CONSTRAINT \`FK_9333f9d3f1ac89bfcf316846e77\` FOREIGN KEY (\`idSender\`) REFERENCES \`portafoglio\`(\`idPortafoglio\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
       // await queryRunner.query(`DROP INDEX \`IDX_a7bdb15a3c272eb48eb1157d0e\` ON \`Follow\``);
       // await queryRunner.query(`DROP INDEX \`IDX_3c2e0afb9d2f358984a44a7761\` ON \`Follow\``);
       // await queryRunner.query(`DROP TABLE \`Follow\``);
       // await queryRunner.query(`DROP INDEX \`IDX_7d9b721181d7f92ea92e5f9260\` ON \`LiveTag\``);
       // await queryRunner.query(`DROP INDEX \`IDX_a0142635cf78ac594cd3f13a2a\` ON \`LiveTag\``);
       // await queryRunner.query(`DROP TABLE \`LiveTag\``);
        await queryRunner.query(`DROP TABLE \`subscription\``);
    }

}
