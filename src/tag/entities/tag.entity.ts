import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from "typeorm";
import { Live } from "../../live/entities/live.entity";

@Entity()
export class Tag {

	@PrimaryGeneratedColumn()
	idTag: number

	@Column()
	nome: string
 
	/*@ManyToMany(() => Live, live => live.tag)
	live: Live[];*/
}
