import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Live } from "../../live/entities/live.entity";
import { Media } from "../../media/entities/media.entity";

@Entity()
export class Categoria {

	@PrimaryGeneratedColumn()
	idCategoria: number

	@Column()
	nome: string

    @OneToMany(() => Live, live => live.categoria)
    live: Live;
 
	@OneToMany(() => Media, media => media.categoria)
    media: Media;
}
