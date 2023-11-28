import { PrimaryGeneratedColumn, Column, Entity, Timestamp, JoinColumn, OneToOne, OneToMany, ManyToOne } from "typeorm";
import { Canale } from "../../canale/entities/canale.entity";

@Entity()
export class Social {

	@PrimaryGeneratedColumn()
	idSocial: number

	@Column()
	nome: string

	@Column()
	url: string

    @OneToMany(() => Canale, canale => canale.socials)
    canale: Canale;  //entità che dà la fk
	
	
}